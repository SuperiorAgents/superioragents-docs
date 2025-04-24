---
sidebar_position: 3
title: The Retraining Process
---

This kind of system would, in theory, be an ideal candidate for a Group Relative Policy Optimisation fine-tuning approach, as used by Deepseek (Shao et al. 2024), given that the ideal outcome is a large number of competing answers to the same few basic questions. Unfortunately, we have, as yet, been unable to run our system at a scale sufficient to provide the data required for such an approach.

Failing this, we had recourse to DPO fine-tuning. Under a normal fine-tuning process, we simply input a list of prompts and chosen/rejected responses. The problem in the case of the Generalising Agent is that we have two sets of prompts and responses, with some runs producing chosen but not rejected responses, and others producing rejected but not chosen ones.

Thus, for example, if a strategy never succeeds we have a rejected response but no chosen one, while if it succeeds first time we have a chosen response but no rejected one. In the latter case it is possible to generate a high-temperature garbled output to serve as the rejected response; in the former case, unfortunately, the run must be discarded.

### DPO Data Composition

The result is a DPO file composed from the following data taken from the chat history of the model interactions:

| Process                                                                                              | Prompt                                                                                                           | Response | Score        |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | -------- | ------------ |
| If a strategy generates code that compiles and runs but fails to free space                          | `get_system_plist + get_basic_env_plist + get_special_egc_req_plist + get_strat_code_req_plist`                  | strat    | 0            |
| If a strategy generates code that failed to compile/run                                              | `new_sp_egc_s`                                                                                                   | strat    | 0            |
| If a strategy generates successful code                                                               | strat                                                                                                            | code     | space_freed  |
| If a strategy generates successful code (full-env prompt)                                            | `get_system_plist + get_basic_env_plist + get_special_egc_req_plist + get_strat_code_req_plist`                  | strat    | space_freed  |

### Pairing & Rejection

This is then sorted/abandoned/paired with deliberately garbled code per the requirements of the training process:

| Process                                                               | Prompt                                                                                                          | Chosen                                    | Rejected                                         |
| --------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | ----------------------------------------- | ------------------------------------------------ |
| If no code capable of running or compiling is produced by the end of a run | –                                                                                                               | –                                         | –                                                |
| If some code attempts during the run freed up space and some didn’t   | strat                                                                                                           | code (that resulted in a score > 0)       | code (that resulted in a score = 0)               |
| If everything in the run worked first time                            | `get_system_plist + get_basic_env_plist + get_special_egc_req_plist + get_strat_code_req_plist`                 | strat (score > 0)                         | deliberately garbled version of strat            |
| If everything in the run worked first time (code-level pairing)       | strat                                                                                                           | code (score > 0)                          | deliberately garbled version of code             |

---

## Automated Training Pipeline

A pipeline automates the process of training an AI language model using a Direct Preference Optimization (DPO) JSONL dataset:

- **Environment Setup**  
  - Creates a `requirements.txt` with necessary ML/AI libraries  
  - Sets up environment variables for Docker image management  

- **Training Script Creation**  
  - Generates a Python script implementing DPO training  
  - Uses 4-bit quantization for memory efficiency  
  - Implements Low-Rank Adaptation (LoRA) for efficient fine-tuning  
  - Handles both the main model and a reference model for training  
  - Includes utility functions for parameter management and layer detection  

- **Docker Configuration**  
  - Creates a `Dockerfile` based on Python 3.10  
  - Installs required system dependencies and build tools  
  - Configures the training environment for GPU support  

- **Training Process**  
  - Accepts a JSONL file as training data  
  - Builds and launches a Docker container with GPU support  
  - Executes the training script inside the container  
  - Persists trained model outputs to a specified volume  

- **Post-Processing**  
  - Cleans up Docker resources (images, containers)  
  - Archives the resulting model artifacts for deployment or further analysis  
