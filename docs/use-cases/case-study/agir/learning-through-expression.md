---
sidebar_position: 2
title: "Learning through Exploration"

---
Supposing a new program, composed of a code/strategy generation model (used to control three separate agents – an environment analysis agent, a strategy agent and a code agent), a testing framework, and a retraining database, is seeded to a new container environment and given the goal of taking over as much storage space as possible.

The program is informed of the amount of space in its current operating environment, and told that it must find ways to annex as much as it can, whether by deleting data from its current container or by networking to other containers/devices and deleting data there.

![ Agent Flow](./img/img1.png)


---

### Three main agents working together to explore and manipulate storage across container environments:

### 1. Environment Agent
- **Responsible for gathering intelligence about the environment**  
- Generates and executes code to discover details about the container network and storage systems  
- Maintains history of both basic environment info (memory/storage stats) and special environment info (custom discovered details)  

### 2. Strategy Agent
- **Generates high-level strategies for claiming storage space**  
- Takes environment information from EnvAgent to inform its strategy generation  
- Maintains a list of previously used strategies to avoid repetition  
- Can combine and modify strategies based on success/failure feedback  

### 3. Code Generation Agent
- **Generates concrete Python code to implement strategies**  
- Includes robust error handling and code validation  
- Tests generated code in a separate container before deploying to main environment  

> _Any agent can be run with any model. For our initial tests we used GPT and Claude for ease of use (since open source code models did not produce successful runs frequently enough for effective trials), while the full-scale experimental version uses Qwen 7b, which can be run and retrained locally in contrast with the closed-source models described above._

The system maintains a history of successful strategies and their outcomes, which it uses to improve future attempts. It can operate across multiple containers and network environments, continually learning and adapting its approach based on what works in different contexts.

---

### Supports observability, safety and monitoring tooling:

#### Code Validation Layer
- Before any code is executed, it goes through multiple validation steps including AST parsing and native Python compilation.  
- Prevents malformed or potentially harmful code from being executed by catching syntax errors and invalid constructs before runtime.

#### Resource Monitoring System
- Continuously monitors container resources including memory usage, disk space, and system statistics through a dedicated `safe_detect_env` interface.  
- Provides real-time awareness of resource consumption and helps prevent resource exhaustion scenarios.

#### Execution Control Framework
- A timeout mechanism wraps code execution to prevent infinite loops or hung processes.  
- Combined with subprocess management for controlled execution of generated code in isolated environments, allowing for safe termination of problematic processes.
