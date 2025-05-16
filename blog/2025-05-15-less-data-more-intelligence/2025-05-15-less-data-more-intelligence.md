---
slug: 2025-05-15-less-data-more-intelligence
title: "Less Data, More Intelligence: How Curated Training Data Unlocks LLM Power"
authors: [jen]
tags: [Superior Agents, research]
---

*Exploring how carefully curated, minimal datasets can unlock powerful LLM capabilities and reduce training costs.*

<!-- truncate -->

## Introduction

Training large language models (LLMs) has traditionally been a game of scale—ingesting massive datasets to coax out higher performance. However, a growing body of research shows that **what** data you use can matter more than **how much**.  
A 2025 study from Shanghai Jiao Tong University revealed that a 32-billion-parameter model fine-tuned on only **817 carefully selected examples** learned complex mathematical-reasoning tasks—matching or beating models trained on **hundreds of thousands** of examples ([VentureBeat report](https://venturebeat.com/ai/researchers-find-you-dont-need-a-ton-of-data-to-train-llms-for-reasoning-tasks/)).  

This article explains how small, high-quality datasets dramatically improve LLMs, surveys other work on data efficiency and few-shot learning, and outlines techniques for “doing more with less”—from judicious repetition and code augmentation to relaxed data filters. We also discuss cost, data-scarcity, and ethical implications, and highlight future directions for data-efficient LLM training.

## “Less Is More” – Complex Reasoning from a Tiny Dataset

The “**LIMO**” (Less Is More) study fine-tuned Qwen-2.5 on just 817 expert-curated math problems yet hit **57.1 %** on the AIME competition and **94.8 %** on MATH—results that previously required 100× more data ([ar5iv preprint](https://ar5iv.org/abs/2401.11405)).  
Key to LIMO’s success was an aggressive curation pipeline that sifted millions of synthetic problems down to “cognitive templates” demonstrating step-by-step chain-of-thought solutions. Because modern LLMs already possess vast latent knowledge from pre-training, a handful of exemplars can unlock sophisticated reasoning skills.

This echoes Meta AI’s **LIMA** (“Less Is More for Alignment”) work, where 1 000 high-quality prompt-response pairs tuned a large model to human-preferred outputs as reliably as datasets orders of magnitude larger ([Hugging Face blog](https://huggingface.co/blog/lima)). Together, LIMO and LIMA underscore a simple principle: **a small batch of the right data beats a mountain of mediocre data**.

## Quality Over Quantity: Data Efficiency in Practice

Microsoft Research’s **Phi-1** (“Textbooks Are All You Need”) trained a 1.3 B model on **6 B tokens** of textbook-style text and code—outperforming models 10× larger trained on 100× more tokens ([Phi-1 write-up](https://medium.com/@msr_research/phi-1-textbooks-are-all-you-need-4f4314d7242e)).  
Empirical tests confirm that halving dataset **quality** harms performance more than halving its **size**; modest duplication (≈25 % repeat) can even help, whereas indiscriminate repetition quickly overfits ([TinyStories study, arXiv](https://arxiv.org/abs/2305.07759)).

Training on endless web text is costly and energy-intensive. Phi-1’s entire run reportedly cost **< $1 200**, while LIMO’s 817-sample fine-tune is feasible for small labs. Crucially, curation assures **coverage**: LIMO’s examples span diverse techniques and difficulties; LIMA’s prompts cover many domains and styles. High-coverage, high-quality micro-datasets punch far above their weight.

## Few-Shot Learning versus Small-Batch Fine-Tuning

GPT-3 popularised **in-context few-shot learning**—solving new tasks from a few prompt examples. Yet prompts are length-limited and results can vary. **Small-batch fine-tuning** (≤ 1 000 examples) permanently aligns model weights and often outperforms prompting.  

Methods like **LoRA** update only low-rank adapters, preventing over-fitting in scarce-data regimes. LIMO fine-tuned Qwen-2.5 on chain-of-thought exemplars so it now *generates* its own reasoning steps for unseen problems—no long prompts required.

## Strategies for Training LLMs with Limited Data

1. **Curate High-Quality Examples** – correctness, diversity, task coverage.  
2. **Moderate Repetition & Augmentation** – light duplication or paraphrases boost signal; avoid heavy overfit.  
3. **Include Code / Structured Data** – mixing a little high-quality code improves logic and planning skills ([Cohere findings](https://notes.aimodels.fyi/code-training-benefits)).  
4. **Relax Filters Judiciously** – when data-starved, keep borderline but relevant samples (after manual review).  
5. **Generate Synthetic Data** – projects like **Alpaca** expanded 52 K instruction pairs from a handful of seeds using GPT-3.5 ([Stanford post](https://crfm.stanford.edu/2023/03/13/alpaca.html)).

## Implications: Cost, Scarcity, Ethics

Data-efficient training **democratises** LLM development—start-ups and academics can fine-tune potent models for a few hundred dollars. As high-quality web text dwindles, smart data use will extend progress without vast new crawls.  

Curated micro-datasets also enable tighter **ethical control**—easier to exclude toxic or private content and audit for bias. But selection bias rises: a tiny set may over-represent curators’ viewpoints. Privacy risks increase when fine-tuning on very small sensitive corpora; techniques like differential privacy or federated learning help mitigate memorisation.

## Future Directions

* **Automated Data Selection** – frameworks like GREATS rank candidate examples for maximal learning ([OpenReview](https://openreview.net/forum?id=Wk05uJwYjX)).  
* **Hybrid RL + Tiny Supervision** – seed with curated data, then self-play or AI-generated challenges to scale.  
* **Teacher-Student Distillation** – larger models create compact, information-dense “textbooks” for smaller learners.  
* **Bias/Privacy Auditing Tools** – essential when each example wields outsized influence.

The age of **data craftsmanship** is here: less, done right, truly can be more.

