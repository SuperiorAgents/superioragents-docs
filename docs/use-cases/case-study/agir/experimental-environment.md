---
sidebar_position: 4
title: "Experimental Environment"
---

In this experiment, the AI itself is only half of the solution. The environment in which it evolves is just as important, since it is this environment that will determine the direction of its evolution. In order to ensure continuous improvement in the skills and knowledge of the AI, it should be presented with finely graded challenges to overcome, allowing it to find easier problems to solve in its initial stages and move onto increasingly difficult ones as its skills expand.

Eventually, it should also be possible to direct the AI’s evolution by presenting it with an environment that forces it to solve problems deliberately contrived to teach it particular skills. However, a system such as we describe, though it may be corralled into performing useful tasks, remains essentially predatory—a form of self-directed malware. Steps also had to be taken to:
- **Prevent the agent from overwriting itself** as far as possible, and  
- **Isolate the development environment from other networks.**

To allow the agent to experiment in a secure and sustainable way, we constructed the following experimental environment:

- **Dynamic Docker Containers:**  
  The foundation of our testing framework consists of dynamically generated Docker containers, each representing a unique challenge environment for the agent. These containers are built from randomly selected base images, ensuring that the agent cannot develop dependencies on specific environmental configurations.

- **Randomized File Systems:**  
  Within each container, we implement a complex file system populated with randomly positioned files of varying sizes and permission structures. This randomization extends to both the spatial distribution of files and their access controls, creating a rich problem space for the agent to navigate.

- **Objective: Optimize Container Space:**  
  The primary objective assigned to the agent is the optimization of available space within these containers. Each experimental run begins with the instantiation of a fresh container, generated according to our randomization protocols.

- **Quantitative Performance Measurement:**  
  The agent's performance is quantified through precise measurements of container space utilization both before and after its intervention. This creates a clear metric for evaluation: the differential between initial and final space consumption.

- **Reward-Driven Learning:**  
  The learning mechanism is implemented through a reward system that directly correlates with the agent's effectiveness in space reduction. By tying the reward function to the quantity of space freed, we create a direct incentive for the agent to develop increasingly sophisticated strategies for identifying and removing unnecessary files while respecting system constraints and permission structures.

This approach ensures that the agent's evolution is guided by practical utility rather than predetermined heuristics.
