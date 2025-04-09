"use strict";(self.webpackChunksuperior_agents_docs=self.webpackChunksuperior_agents_docs||[]).push([[3293],{5374:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"technical-reference/installation/dependency-setup","title":"Dependencies and Configurations","description":"Dependencies and configuration steps required to install and set up your Superior Agent.","source":"@site/docs/technical-reference/installation/dependency-setup.md","sourceDirName":"technical-reference/installation","slug":"/technical-reference/installation/dependency-setup","permalink":"/superioragents-docs/docs/technical-reference/installation/dependency-setup","draft":false,"unlisted":false,"editUrl":"https://github.com/superioragents/superior-agents/edit/main/docs/technical-reference/installation/dependency-setup.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"Dependencies and Configurations"},"sidebar":"tutorialSidebar","previous":{"title":"Installation","permalink":"/superioragents-docs/docs/category/installation"},"next":{"title":"Trading Agent","permalink":"/superioragents-docs/docs/technical-reference/installation/trading-agent"}}');var t=r(4848),s=r(8453);const a={sidebar_position:1,title:"Dependencies and Configurations"},c="Installation",l={},o=[{value:"Requirements",id:"requirements",level:2},{value:"Environment Variable",id:"environment-variable",level:2},{value:"Agent-side",id:"agent-side",level:2},{value:"Run Agent Docker Container",id:"run-agent-docker-container",level:2},{value:"Run Python server",id:"run-python-server",level:2},{value:"Uvicorn",id:"uvicorn",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"installation",children:"Installation"})}),"\n",(0,t.jsx)(n.p,{children:"Dependencies and configuration steps required to install and set up your Superior Agent."}),"\n",(0,t.jsxs)(n.p,{children:["\ud83c\udfa5 ",(0,t.jsx)(n.a,{href:"https://youtu.be/q6kTvTWc4p4",children:"Quickstart for Setting Up a Trading Agent"})]}),"\n",(0,t.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Python 3.12 or higher."}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.docker.com/engine/install/ubuntu/",children:"Docker"})}),"\n",(0,t.jsx)(n.li,{children:"Install pyenv requirements"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"sudo apt install -y build-essential libssl-dev zlib1g-dev libbz2-dev libreadline-dev libsqlite3-dev curl libncursesw5-dev xz-utils tk-dev libxml2-dev libxmlsec1-dev libffi-dev liblzma-dev\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Install pyenv"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"curl https://pyenv.run | bash\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Add pyenv to bashrc"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"echo 'export PYENV_ROOT=\"$HOME/.pyenv\"' >> ~/.bashrc\necho 'export PATH=\"$PYENV_ROOT/bin:$PATH\"' >> ~/.bashrc\necho 'eval \"$(pyenv init --path)\"' >> ~/.bashrc\necho 'eval \"$(pyenv init -)\"' >> ~/.bashrc\nsource ~/.bashrc\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Install docker"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'sudo apt-get update\nsudo apt-get install -y ca-certificates curl gnupg lsb-release\ncurl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg\necho "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null\nsudo apt-get update\nsudo apt-get install -y docker-ce docker-ce-cli containerd.io\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Add user to docker"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"sudo groupadd docker\nsudo usermod -aG docker $USER\nnewgrp docker\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Test your configuration"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"pyenv --version\npython --version\ndocker --version\ndocker-compose --version\n"})}),"\n",(0,t.jsx)(n.h2,{id:"environment-variable",children:"Environment Variable"}),"\n",(0,t.jsx)(n.p,{children:"Make sure to include these variables to .env file in agent's directory"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-env",children:"TWITTER_API_KEY =\nTWITTER_API_SECRET =\nTWITTER_BEARER_TOKEN =\nTWITTER_ACCESS_TOKEN =\nTWITTER_ACCESS_TOKEN_SECRET =\nAPI_DB_BASE_URL=\nAPI_DB_API_KEY=\nETHER_PRIVATE_KEY=\nETHER_ADDRESS=\nINFURA_PROJECT_ID=\nETHERSCAN_KEY=\nCOINGECKO_KEY=\nONEINCH_API_KEY=\nDEEPSEEK_OPENROUTER_API_KEY=\nDEEPSEEK_DEEPSEEK_API_KEY=\nDEEPSEEK_LOCAL_API_KEY=\nANTHROPIC_API_KEY=\nDEEPSEEK_URL=\nOAI_API_KEY=\n"})}),"\n",(0,t.jsx)(n.h2,{id:"agent-side",children:"Agent-side"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Create python virtual environment (recommended)\npython -m venv agent-venv\n\n# Activate virtual environment\nsource agent-venv/bin/activate\n\n# Navigate to agent's directory\ncd agent\n\n# Install all required dependencies\npip install -e .\n\n# Copy the example environment file and configure your settings:\ncp .env.example .env\n"})}),"\n",(0,t.jsx)(n.h2,{id:"run-agent-docker-container",children:"Run Agent Docker Container"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Navigate to docker configuration\ncd agent/docker\n\n# Create and start the container locally\ndocker compose up -d\n"})}),"\n",(0,t.jsx)(n.h2,{id:"run-python-server",children:"Run Python server"}),"\n",(0,t.jsx)(n.h3,{id:"uvicorn",children:"Uvicorn"}),"\n",(0,t.jsxs)(n.p,{children:["Make sure all dependencies have been installed on ",(0,t.jsx)(n.a,{href:"#python-server-side",children:"previous"})," section"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Navigate into root folder\ncd ../..\n\n# Activate virtual environment\nsource api-db-venv/bin/activate\n\n# Navigate to api_db's directory\ncd api_db\n\n# Start the python FastAPI backend\nuvicorn routes.api:app --port 9020\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>c});var i=r(6540);const t={},s=i.createContext(t);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);