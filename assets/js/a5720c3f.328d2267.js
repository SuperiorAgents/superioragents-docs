"use strict";(self.webpackChunksuperior_agents_docs=self.webpackChunksuperior_agents_docs||[]).push([[3170],{315:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"architecture-design/core-components/self-improvement","title":"Self Evolving Intelligence","description":"Our technical approach is to push for an AI to develop increasingly generalist (self-improving) abilities through evolution from three basic components.","source":"@site/docs/architecture-design/core-components/self-improvement.md","sourceDirName":"architecture-design/core-components","slug":"/architecture-design/core-components/self-improvement","permalink":"/superioragents-docs/docs/architecture-design/core-components/self-improvement","draft":false,"unlisted":false,"editUrl":"https://github.com/superioragents/superior-agents/edit/main/docs/architecture-design/core-components/self-improvement.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"Self Evolving Intelligence"},"sidebar":"tutorialSidebar","previous":{"title":"Core Components","permalink":"/superioragents-docs/docs/category/core-components"},"next":{"title":"Intelligence Evaluation","permalink":"/superioragents-docs/docs/architecture-design/core-components/intelligence-evaluation"}}');var i=n(4848),r=n(8453);const o={sidebar_position:1,title:"Self Evolving Intelligence"},a=void 0,c={},l=[];function h(e){const t={hr:"hr",img:"img",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Our technical approach is to push for an AI to develop increasingly generalist (self-improving) abilities through evolution from three basic components."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Improvement Model",src:n(7934).A+"",width:"621",height:"270"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Firstly"}),", a fine-tuneable code generation model (currently Qwen 2.5 7b Instruct) receives the initial instruction to develop strategies for achieving a goal and then writes code to execute those strategies."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Secondly"}),", a testing module notes the current status of evaluation metrics, attempts to run the generated code, and then re-checks the status of the metrics."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Lastly"}),", the strategies, code, and their effects on the metrics are stored in a training database to further fine-tune the code generation model and improve its chances of successfully solving future problems."]}),"\n",(0,i.jsx)(t.p,{children:"These three components combine into a self-improvement module \u2014 which we have tested extensively since 2019 \u2014 and are essentially what make our Superior Agents, superior."}),"\n",(0,i.jsx)(t.p,{children:"In this way, every problem solved becomes a means of solving future problems faster. Every solution stored in the training database increases the chance that future problems will be sufficiently similar to known problems as to be easily soluble by the code generation model."}),"\n",(0,i.jsx)(t.p,{children:"While it will take the AI a great deal of time and effort to achieve its first milestone \u2014 and thereby its first skill \u2014 the second milestone will be easier to achieve as a result of the information gained in acquiring the first, and so on."}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.p,{children:"This process can be represented graphically. Imagine an 8x8 grid of white squares, each representing a skill. Periodically, a new square is selected at random and an attempt is made to color it black. If it is surrounded by white squares, there is a 10% chance that the attempt will succeed."}),"\n",(0,i.jsx)(t.p,{children:"For each neighboring black square, the chances of a successful attempt rise by 10%, representing the greater ease in acquiring a new skill when it is similar to others already mastered. In the first round, the chances of the square selected being next to another black square \u2014 representing a skill that the system already possesses \u2014 are zero. In the second round, when one square/skill has already been acquired, the chances of the next black square being in close proximity to an existing black square fall to 8/63. By the third round, the probability is 16/62, and by the fourth you have a better than one in three chance of landing next to an existing black square."}),"\n",(0,i.jsxs)(t.p,{children:["By the end of the game, you are almost certain to succeed in coloring any new square upon which you land, all being surrounded by other black squares.\n",(0,i.jsx)(t.img,{alt:"Matrix Diagram",src:n(9733).A+"",width:"875",height:"331"})]}),"\n",(0,i.jsx)(t.p,{children:"During any given iteration of the process the program will only learn a single skill, but the system as a whole is structured such that the acquisition of each new skill facilitates the acquisition of future skills \u2014 the \u201cintelligence explosion\u201d described in the introduction."})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},7934:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/image1-63b3e651a3d9629043665f9a761a20a1.png"},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var s=n(6540);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}},9733:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/image2-e7ee298dd9f232462efe043343dbd58d.png"}}]);