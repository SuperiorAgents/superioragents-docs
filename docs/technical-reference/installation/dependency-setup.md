---
sidebar_position: 1
title: "Dependencies and Configurations"
---

# Installation

🎥 [Quickstart for Setting Up a Trading Agent](https://youtu.be/q6kTvTWc4p4) 

## Requirements

- Python 3.12 or higher.
- [Docker](https://docs.docker.com/engine/install/ubuntu/)
- Install pyenv requirements

```
sudo apt install -y build-essential libssl-dev zlib1g-dev libbz2-dev libreadline-dev libsqlite3-dev curl libncursesw5-dev xz-utils tk-dev libxml2-dev libxmlsec1-dev libffi-dev liblzma-dev
```

- Install pyenv

```
curl https://pyenv.run | bash
```

- Add pyenv to bashrc

```
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.bashrc
echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(pyenv init --path)"' >> ~/.bashrc
echo 'eval "$(pyenv init -)"' >> ~/.bashrc
source ~/.bashrc
```

- Install docker

```
sudo apt-get update
sudo apt-get install -y ca-certificates curl gnupg lsb-release
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
sudo apt-get install -y docker-ce docker-ce-cli containerd.io
```

- Add user to docker

```
sudo groupadd docker
sudo usermod -aG docker $USER
newgrp docker
```

- Test your configuration

```
pyenv --version
python --version
docker --version
docker-compose --version
```

## Environment Variable

Make sure to include these variables to .env file in agent's directory

```env
TWITTER_API_KEY =
TWITTER_API_SECRET =
TWITTER_BEARER_TOKEN =
TWITTER_ACCESS_TOKEN =
TWITTER_ACCESS_TOKEN_SECRET =
API_DB_BASE_URL=
API_DB_API_KEY=
ETHER_PRIVATE_KEY=
ETHER_ADDRESS=
INFURA_PROJECT_ID=
ETHERSCAN_KEY=
COINGECKO_KEY=
ONEINCH_API_KEY=
DEEPSEEK_OPENROUTER_API_KEY=
DEEPSEEK_DEEPSEEK_API_KEY=
DEEPSEEK_LOCAL_API_KEY=
ANTHROPIC_API_KEY=
DEEPSEEK_URL=
OAI_API_KEY=
```


## Agent-side

```bash
# Create python virtual environment (recommended)
python -m venv agent-venv

# Activate virtual environment
source agent-venv/bin/activate

# Navigate to agent's directory
cd agent

# Install all required dependencies
pip install -e .

# Copy the example environment file and configure your settings:
cp .env.example .env
```

## Run Agent Docker Container

```bash
# Navigate to docker configuration
cd agent/docker

# Create and start the container locally
docker compose up -d
```

## Run Python server

### Uvicorn

Make sure all dependencies have been installed on [previous](#python-server-side) section

```bash
# Navigate into root folder
cd ../..

# Activate virtual environment
source api-db-venv/bin/activate

# Navigate to api_db's directory
cd api_db

# Start the python FastAPI backend
uvicorn routes.api:app --port 9020
```
