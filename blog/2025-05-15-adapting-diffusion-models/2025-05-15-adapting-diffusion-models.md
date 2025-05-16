---
slug: 2025-05-15-adapting-diffusion-models
title: Adapting Diffusion Models for No-Propagation Learning
authors: [jen]
tags: [Diffusion, NoProp, TextGeneration]
---

*A comprehensive report on extending backprop-free “NoProp” diffusion training from image classification to text generation, covering state-of-the-art diffusion LMs, alternative learning rules, challenges, and research directions.*

<!-- truncate -->

## Introduction

Recent research has begun exploring backpropagation-free learning methods as an alternative to the traditional gradient-descent/backpropagation algorithm. The motivation includes reducing memory overhead (since back-prop requires storing activations) and enabling more parallel or biologically plausible training ([medium.com](https://medium.com)). One promising avenue is to leverage ideas from **diffusion models**—generative models that iteratively refine noisy data—to train networks **without** standard error back-propagation.  

In image classification, a new method called **NoProp** showed that a neural network can be trained **without any forward or backward propagation** by having each layer learn to denoise a noisy target (here, a noisy label embedding) ([medium.com](https://medium.com), [paperswithcode.com](https://paperswithcode.com)).  

This report investigates the feasibility of extending such no-prop, diffusion-inspired training from simple labeling tasks to **text generation**. We review progress (2023-2025) on diffusion models for language, summarize no-propagation learning techniques, and assess how diffusion architectures might be adapted to support training without traditional backprop. We also discuss existing implementations, theoretical support, and key challenges, comparing them to conventional paradigms.

## Diffusion Models in Text Generation (Background)

Diffusion models have emerged as a powerful class of generative models—first in image synthesis, and more recently in text.

In text generation they are typically used in a **non-autoregressive (NAR)** setting: the model generates an entire sequence through parallel or iterative refinement rather than token-by-token autoregression. A forward *noising* process gradually corrupts a text representation; a neural model is trained to reverse this process, transforming noise back into coherent text. A 2023 survey showed that introducing diffusion models into NAR text generation significantly narrows the gap with traditional autoregressive transformers ([ar5iv.org](https://ar5iv.org)).  

Two main paradigms exist:

1. **Discrete diffusion** (operating directly on token sequences)  
2. **Continuous/embedding diffusion** (adding noise in a continuous space)

Embedding diffusion has proven more effective and flexible ([ACL Anthology](https://aclanthology.org)). The workflow:  
1. Define an embedding for each token/sequence.  
2. Add Gaussian noise over a series of timesteps.  
3. Train a model to gradually remove the noise.  

Because the denoised output is continuous, an **encoder–decoder bridge** is required: map discrete tokens → embeddings → **diffusion** → denoised embeddings → tokens (e.g. via arg-max over a vocabulary projection). Regularization (e.g. the *anchor loss* in **Difformer**) prevents the embedding space from collapsing ([ACL Anthology](https://aclanthology.org)).  

**Key examples**

- **DiffuSeq** (ICLR 2023): sequence-to-sequence diffusion for translation & paraphrasing ([GitHub](https://github.com/diffuseq)).  
- **Diffusion-LM** (NeurIPS 2022): controllable text generation via latent-space diffusion ([GitHub](https://github.com/Diffusion-LM)).  
- **FlowSeq / Flow matching** (EACL 2024): treats generation as an ODE that transports noisy text embeddings to clean embeddings in a few large steps ([ACL Anthology](https://aclanthology.org)).  

These advances have reduced required diffusion steps from hundreds to ∼10-20, making diffusion LMs practical. **All** are still trained with standard backprop—raising the question: *Can we train such models without backprop*?

## No-Propagation Learning Techniques (Background)

**No-prop** (no-backprop) learning avoids global gradient propagation.

- **Forward-Forward (FF) algorithm** ([cs.toronto.edu](https://cs.toronto.edu)): two forward passes (positive vs. negative data) adjust weights via a local goodness measure.  
- **Target propagation** ([paperswithcode.com](https://paperswithcode.com)): propagate *targets* (desired activations) instead of gradients.  
- **Feedback alignment**: random feedback weights replace exact gradient transposes.  
- **Zeroth-order (ZO) optimization** ([arXiv](https://arxiv.org)): evolutionary strategies / finite-difference updates using only forward passes.  
- **Greedy layer-wise training**: train one layer (or block) at a time (e.g. stacked autoencoders).

Despite decades of effort, none matched the ease/performance of backprop on large tasks—until **NoProp** (Li, Teh & Pascanu 2025), a **gradient-free method inspired by denoising diffusion** ([paperswithcode.com](https://paperswithcode.com)).

### How NoProp Works in Image Classification

1. **Label embedding space:** each class label = learnable vector (not one-hot).  
2. **Add Gaussian noise** at multiple levels—one level per layer.  
3. **Layer $t$** receives the noisy label from layer $t\!-\!1$ plus the original image *x*, and learns to predict the clean label embedding (MSE loss).  

Because each layer is trained **in isolation** (fixed noise level, local loss), **no forward/backward pass through the full network is needed**. Layers could even train in parallel.  

**Results:** NoProp matched backprop accuracy on MNIST/CIFAR-10 with ≈ ½ GPU memory and faster training ([medium.com](https://medium.com)). It outperformed previous no-backprop methods in both accuracy and simplicity—providing a blueprint for gradient-free training.

## Adapting Diffusion No-Prop Techniques to Text Generation

Extending no-prop to text is promising yet challenging.

### 1  Representation of Text for Diffusion

- Convert sentences to continuous embeddings (pretrained or learned).  
- Assign each layer a fixed noise level; train it to denoise toward clean embeddings (either one-step-to-clean or step-wise targets).  
- Decode final embeddings to tokens via a vocabulary projection. The decoder itself could be trained via a diffusion-style objective or separately with simple supervision.

### 2  Model Architecture for Text Denoising

- **Unrolled Transformer decoder:** stack **T** distinct blocks, each a diffusion step; give each block a timestep/noise embedding.  
- Train each block independently on (source context, noisy target) → clean target.  
- Parameter explosion for large T: mitigate via smaller blocks, shared encoders (if conditional), or future weight-tying research.

### 3  Feasibility Evidence

- **Denoising score matching** (theory behind diffusion) supports stacked local denoisers ([arXiv](https://arxiv.org)).  
- **Flow matching** & diffusion-LM successes show unrolled, non-end-to-end training can work ([ACL Anthology](https://aclanthology.org)).  
- **ZO fine-tuning** proves large LLMs can update without gradients, hinting memory advantages for no-prop diffusion ([arXiv](https://arxiv.org)).

### 4  Key Challenges

1. **Discrete data complexity** → need robust embedding space (anchor losses, pretrained init).  
2. **Sequential coherence** → may require self-conditioning or iterative strategies.  
3. **Scaling & depth** → many denoising steps increase parameters; continuous-time variants might share weights.  
4. **Noise scheduling & coordination** → schedule design, layer-interaction, iterative refinement without backprop.  
5. **Evaluation** → global quality metrics for a stack of independently trained layers.

### 5  Comparisons to Backprop Training

- **Credit assignment:** local (no-prop) vs. global (backprop) may yield different representation hierarchies.  
- **Optimization:** many independent sub-problems vs. one joint problem; hybrids (independent pre-train + light joint fine-tune) are conceivable.  
- **Inference speed:** fixed-T diffusion vs. token-by-token autoregression; pipeline parallelism possible.  
- **Reuse of pretrained knowledge:** initializing layers from pretrained transformers or embeddings can bootstrap no-prop models.

## Outlook and Ongoing Work

As of early 2025, no published no-prop text generator exists, but building blocks are ready:

- Small-scale proofs-of-concept (limited-vocabulary autoencoders) are likely next.  
- Improved local-loss algorithms (e.g. “Trifecta” stabilizers for forward-forward) will aid no-prop diffusion ([medium.com](https://medium.com)).  
- Embedding-space safeguards (anchor loss) and step-distillation can transfer directly.  
- Biological inspiration: no-prop diffusion resembles cortical iterative denoising loops ([cs.toronto.edu](https://cs.toronto.edu)).

If engineering hurdles are cleared—scaling, coherence, efficiency—we could see new language models trained in a highly distributed, memory-light fashion, offering novel generalization properties. The next 1-2 years will be pivotal for backprop-free generative modeling, with text generation as a key benchmark.

---
