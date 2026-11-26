(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(n){if(n.ep)return;n.ep=!0;const o=t(n);fetch(n.href,o)}})();const c={name:"Shahiq Imam",title:"Full-Stack Software Developer",focus:["Full-stack","Cyber security","DevOps"],stackLine:["TypeScript","React","Next.js","NestJS","PostgreSQL","Docker"],location:"Islamabad, Pakistan",email:"shahiqimam@gmail.com",linkedin:"https://www.linkedin.com/in/shahiqimam",github:"https://github.com/shahiqimam",resume:"/Shahiq-Imam-Resume.pdf",summary:"Full-stack software developer building web applications, backend services and enterprise software with TypeScript, React, Next.js, NestJS and PostgreSQL. I work across REST APIs, relational databases, multi-tenant systems, authentication and authorization, testing, Dockerized environments and CI/CD, with a growing focus on cyber security, GRC and DevOps.",facts:[{k:"Base",v:"Islamabad, Pakistan"},{k:"Now",v:"Full Stack Engineer @ Multi Vision World"},{k:"Founder",v:"ASVEX, automation & software studio"},{k:"Studying",v:"CompTIA Security+ · Cyber Security specialization"}]},fe=[{role:"Full Stack Engineer",org:"Multi Vision World",when:"Mar 2026 – Present",points:["Develop a multi-tenant GRC platform with NestJS, TypeORM, PostgreSQL and Next.js: backend APIs, database migrations and frontend workflows.","Contribute to governance and ISO 27001 automation: policies, Statement of Applicability, risk management and evidence workflows.","Work with enterprise integrations across asset inventory, SIEM, SOAR and endpoint security; support testing, release verification and deployment prep.","Build and maintain company and product web applications with Next.js and TypeScript."]},{role:"Freelance Web Developer",org:"Clients in the UK & KSA (under NDA)",when:"Jan 2026 · two 3-month contracts",points:["Delivered development and technical research for two clients on fixed-term contracts.","Client names and project details are confidential under contract."]},{role:"Full-Stack Developer & Automation Engineer",org:"ASVEX",orgUrl:"https://www.asvex.ae",when:"Sep 2025 – Present · Remote",points:["Build full-stack apps, REST API / webhook integrations and workflow automation with Next.js, React, Node.js, PostgreSQL/Supabase, n8n, Make and Zapier.","Develop AI-assisted workflows with OpenAI, Claude, LangChain and Vapi, from requirements through testing and deployment."]},{role:"UI/UX Designer",org:"Evox",when:"Jun 2024 – Sep 2024",points:["Designed user interfaces and user experiences in Adobe XD, Figma and Sketch.","Worked on branding, and used Azure as part of the team’s tooling."]},{role:"Customer Service Representative → Team Lead",org:"Touchstone BPO",when:"Summers 2022 & 2023 · 3 months each",points:["Started as a Customer Service Representative and later moved up to lead a team."]},{role:"Founder",org:"ASVEX",orgUrl:"https://www.asvex.ae",when:"Apr 2020 – Present · Islamabad",points:["Founded ASVEX as an independent technology business, starting with custom computer systems, hardware sourcing and technical services.","Grew it into software development and automation for business clients."]}],be=[{name:"Core",icon:"◆",items:["TypeScript","JavaScript","Python","SQL","React","Next.js","Node.js","NestJS","REST APIs","TypeORM"]},{name:"Data",icon:"▣",items:["PostgreSQL","Redis","Supabase","PostGIS","Data modeling","Migrations","Transactions"]},{name:"DevOps",icon:"⚙",items:["Docker","Compose","Jenkins","CI/CD","Nginx","Git","GitHub","Vercel","Linux"]},{name:"Security",icon:"⛨",items:["JWT","RBAC","MFA / TOTP","Argon2id","GRC","ISO 27001","SIEM / SOAR"]},{name:"AI & Automation",icon:"✦",items:["OpenAI","Claude","LangChain","n8n","Make","Zapier"]},{name:"Design",icon:"✎",items:["Figma","Adobe XD","Sketch","UI/UX","Branding"]}],k=s=>`https://github.com/shahiqimam/${s}`,P=[{id:"stockpilot",name:"StockPilot",zone:"build",status:"public",color:"#e8774a",shot:"/shots/stockpilot.jpg",mockup:!0,tagline:"Inventory & asset management with a real audit trail.",stack:["Next.js","NestJS","PostgreSQL","TypeORM","Docker"],highlights:["Transactional stock movements: no phantom stock","Serialized assets and assignments","RBAC, CSV import/export workflows","Full audit history"],repo:k("inventory-manager")},{id:"pulsewatch",name:"PulseWatch",zone:"build",status:"public",color:"#3fae8c",shot:"/shots/pulsewatch.jpg",mockup:!0,tagline:"Service health & uptime monitor.",stack:["NestJS","Next.js","PostgreSQL"],highlights:["Scheduled HTTP checks","SSRF-hardened check engine","Incident lifecycle","Uptime & latency metrics"],repo:k("system-health-monitor")},{id:"ghostspend",name:"GhostSpend",zone:"build",status:"private",color:"#7b6cf0",tagline:"Find the subscriptions quietly draining your account, no bank login needed.",stack:["Next.js","TypeScript","NestJS","PostgreSQL","Recharts"],highlights:["Upload a bank or card statement (CSV or PDF); no live bank link, no Plaid, no stored credentials",'Merchant-name cleaner: "AMZN MKTP US*2K9…" becomes "Amazon"',"Detects recurring billing cycles (weekly, monthly, annual) from transaction patterns","Price-creep alerts when the same subscription silently gets more expensive",'"Annual Burn" dashboard: recurring vs one-time spend and the yearly cost of forgotten subscriptions'],shot:"/shots/ghostspend.jpg",mockup:!0,note:"Code and a live demo are available on request."},{id:"taskflow",name:"TaskFlow API",zone:"build",status:"public",color:"#d9a62e",shot:"/shots/taskflow.jpg",mockup:!0,tagline:"Project-management REST API built like production.",stack:["NestJS","TypeScript","PostgreSQL","TypeORM","JWT","Docker"],highlights:["Auth + role-based access control","Validation, migrations, filtering & pagination","Swagger / OpenAPI docs","Automated tests"],repo:k("TaskFlow-API")},{id:"tabzero",name:"TabZero",zone:"build",status:"private",color:"#ff5a36",tagline:"Split group expenses and settle up in the fewest possible payments.",stack:["Next.js","TypeScript","NestJS","PostgreSQL"],highlights:["Debt-simplification engine: nets every balance, then greedily matches largest debtor to largest creditor (at most n − 1 transfers)","Equal, exact, percentage and itemized receipt splits, with tax and tip shared proportionally","Money stored as integer cents; rounding remainders assigned by largest remainder so totals always match","Multi-user group ledgers modeled relationally","Shareable settlement cards and links, ready to paste into WhatsApp","Mobile-first UX"],shot:"/shots/tabzero.jpg",mockup:!0,note:"Code and a live demo are available on request."},{id:"rooted",name:"Rooted",zone:"build",status:"private",color:"#3d6b35",tagline:"Helps people move toward whole, organic food alongside their treatment.",stack:["React Native","TypeScript","iOS & Android"],highlights:["Health profile of conditions and current medications","Food safety check against a curated food–drug and food–condition interaction library (e.g. grapefruit with statins)","Week-by-week whole-food transition plans with safer swaps","Progress tracking and a shareable report for the user’s doctor","Built around clinician oversight: medication decisions stay with the doctor"],shot:"/shots/rooted.jpg",mockup:!0,note:"Not medical advice: Rooted supports, and never replaces, a doctor’s guidance. Code and a demo are available on request."},{id:"keeptrack",name:"KeepTrack",zone:"build",status:"private",color:"#c0587e",shot:"/shots/keeptrack.jpg",mockup:!0,tagline:"Never miss an important date: passports, renewals, documents.",stack:["Next.js","NestJS","PostgreSQL","Prisma","BullMQ","Turborepo"],highlights:["Monorepo: web app, REST API and background worker","Timezone-aware reminders with DST coverage","Idempotent notifications, retries & failure classification","Households, documents, Smart Add and billing flows"]},{id:"metropulse",name:"MetroPulse",zone:"build",status:"public",color:"#5b8bd9",shot:"/shots/metropulse.jpg",mockup:!0,tagline:"Real-time transit operations platform (synthetic data).",stack:["Java 21","Spring Boot","Kafka","PostGIS","Redis","Angular"],highlights:["Transactional outbox → Kafka","Idempotent consumers with dead-letter topic","PostGIS route projection, headway & bunching detection","Incident workflow and historical playback"],repo:k("METROPULSE_JAVA_SPRING")},{id:"gridlens",name:"GridLens",zone:"build",status:"wip",color:"#8a6bd1",shot:"/shots/gridlens.jpg",mockup:!0,tagline:"Utility-network GIS & outage intelligence (synthetic data).",stack:["Next.js","MapLibre","NestJS","PostGIS","Redis","Docker"],highlights:["Network topology modeling in PostGIS","Telemetry ingestion from a simulator","Downstream outage impact tracing","In active development"],repo:k("GRIDLENS_UTILITY_GIS")},{id:"asvex",name:"ASVEX",zone:"client",status:"private",color:"#e63957",tagline:"Website for my automation & software studio.",stack:["Next.js","TypeScript","Tailwind CSS","Vercel"],highlights:["Bold, brand-led design system","Animated workflow showcase","Services, work and insights sections","Lead capture"],live:"https://asvex-website.vercel.app",shot:"/shots/asvex.jpg"},{id:"complai",name:"ComplAI",zone:"security",status:"private",color:"#4c6ef5",tagline:"Multi-tenant GRC platform I build at Multi Vision World.",stack:["NestJS","Next.js 14","PostgreSQL","Redis","Python FastAPI","Docker","Jenkins","Terraform"],highlights:["Schema-per-tenant PostgreSQL isolation; JWT in memory + httpOnly refresh cookie","18 frameworks (ISO 27001, NIST CSF 2.0, SOC 2, PCI DSS, regional) with Statement of Applicability","Three-phase assessments, evidence, findings → risk register, ERM with bow-tie, KRIs and board reports","Vendor risk (TPRM) portal, policy lifecycle, awareness training & phishing simulations","20+ roles incl. time-boxed external-auditor access; hash-chained, tamper-evident audit log","AI assistance (gap detection, policy drafting) that always needs human approval","Integrations: Wazuh, Shuffle SOAR, Snipe-IT, Velociraptor; ClamAV scanning on upload"],live:"https://complai-next.vercel.app",shot:"/shots/complai-platform.jpg",mockup:!0,note:"Work project at Multi Vision World; the source is private."},{id:"authforge",name:"AuthForge",zone:"security",status:"public",color:"#2f8f83",shot:"/shots/authforge.jpg",mockup:!0,tagline:"Authentication & session service, security-first.",stack:["NestJS","PostgreSQL","Redis","JWT","TOTP"],highlights:["Argon2id password hashing","Short-lived JWTs + rotating opaque refresh tokens","Refresh-token replay detection","TOTP MFA with one-time recovery codes","Session revocation, RBAC, durable audit events"],repo:k("secure-auth-service")},{id:"sentinelview",name:"SentinelView",zone:"security",status:"public",color:"#c4492f",shot:"/shots/sentinelview.jpg",mockup:!0,tagline:"Security-event dashboard: normalize SIEM / EDR / IAM.",stack:["Next.js","NestJS","PostgreSQL","Docker"],highlights:["Adapter pattern per source with validation","Normalized event model, JSONB raw payloads","Idempotent ingestion & duplicate merging","Analyst workflow: status, assignment, notes, history"],repo:k("security-events-dashboard")},{id:"grc",name:"GRC Risk Register",zone:"security",status:"public",color:"#b5832c",shot:"/shots/grc.jpg",mockup:!0,tagline:"Assets, controls, treatments, inherent & residual risk.",stack:["Next.js","NestJS","PostgreSQL","TypeORM","Recharts"],highlights:["5×5 inherent-risk heatmap","Admin / Risk Manager / Viewer roles","Risk history, filtering & CSV export","Clear GRC domain modeling"],repo:k("grc-risk-register")},{id:"saudiready",name:"SaudiReady",zone:"security",status:"public",color:"#3c7d4f",shot:"/shots/saudiready.jpg",mockup:!0,tagline:"KSA cybersecurity & privacy readiness workspace.",stack:["Next.js","NestJS","PostgreSQL","TypeScript"],highlights:["Profile → applicability → assessment → evidence → gaps → actions","Readiness always reported with coverage: never a fake 0%","Type system enforces what the app refuses to claim","Educational, with explicit non-certification disclaimers"],repo:k("ksa-compliance-readiness")},{id:"releaseboard",name:"ReleaseBoard",zone:"devops",status:"public",color:"#2b6cb0",shot:"/shots/releaseboard.jpg",mockup:!0,tagline:"Containerized deployment lab.",stack:["Docker","Jenkins","Nginx","PostgreSQL"],highlights:["Multi-stage Docker images","Nginx reverse proxy + health checks","Jenkins pipeline with smoke tests","Rollback workflow"],repo:k("docker-cicd-lab")},{id:"cicd",name:"CI/CD Pipeline Demo",zone:"devops",status:"public",color:"#d4672a",shot:"/shots/cicd.jpg",mockup:!0,tagline:"Enterprise-style Jenkins pipeline, end to end.",stack:["Jenkins","Docker","NestJS","Next.js","Vitest"],highlights:["Lint, type-check, coverage-gated unit tests","Dependency, secret & image scanning","Integration tests on throwaway Postgres + Redis","Staging → manual approval → prod with auto-rollback"],repo:k("cicd-pipeline-demo")}],Pe=["Commit","Lint","Test","Scan","Build","Stage","Approve","Deploy"],$={inProgress:["CompTIA Security+","Cyber Security Specialization"],earned:["IBM AI Engineering Professional Certificate","Machine Learning Specialization","Deep Learning Specialization","LangChain: Develop LLM-Powered Applications"],training:["CS50x","Full Stack Open","React","Next.js","Linux","Docker","Jenkins","Networking","Cybersecurity","Azure Fundamentals"]},Ae=[{school:"University of Essex",detail:"Management & Business Sciences (undergraduate studies)"},{school:"SuperNova College, Islamabad",detail:"Cambridge International A Levels & IGCSEs"}],a=s=>s.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function te(s){return s==="private"?' <span class="badge badge-private">Private code</span>':s==="wip"?' <span class="badge badge-wip">In progress</span>':""}const ye={k:"#1b1b2f",h:"#2b1d17",s:"#c98d61",S:"#a56c45",e:"#1b1b2f",t:"#1f9e8f",T:"#157066",y:"#ffcf3f",j:"#2f3b6b",J:"#222b50",b:"#f4f1ea",g:"#6d6a80",w:"#ffffff"},Y=["....kkkkkk....","...khhhhhhk...","..khhhhhhhhk..","..khhhhhhhhhk.","..khhhsssssk..","..khhssesesk..","..khSssssssk..","...kSssssSk...","....kkSSkk...."],ee=["...kttttttk...","..kttttttttk..",".ktTttttyyttk.",".ktTtttyyyytk.",".ktTttttyyttk.",".kskTTTTTTksk.","..kkjjjjjjkk.."],Le=["...kjjk.kjjk..","...kjjk.kjjk..","...kJJk.kJJk..","..kbbbk.kbbbk.","..kgggk.kgggk."],Ie=["...kjjkkjjk...","..kjjk..kjjk..",".kJJk....kJJk.","kbbbk....kbbbk","kgggk....kgggk"],Me=["....kjjjjk....","....kjjjjk....","....kJJJJk....","...kbbbbbbk...","...kggggggk..."],ze={idle:[...Y,...ee,...Le],walkA:[...Y,...ee,...Ie],walkB:[...Y,...ee,...Me]};function A(s,e=ye,t=""){const i=Math.max(...s.map(r=>r.length)),n=s.length;let o="";return s.forEach((r,f)=>{let p=0;for(;p<r.length;){const w=r[p];let b=1;for(;p+b<r.length&&r[p+b]===w;)b++;const E=e[w];E&&(o+=`<rect x="${p}" y="${f}" width="${b}" height="1" fill="${E}"/>`),p+=b}}),`<svg class="${t}" viewBox="0 0 ${i} ${n}" shape-rendering="crispEdges" aria-hidden="true">${o}</svg>`}function Ce(){return Object.entries(ze).map(([s,e])=>A(e,ye,`frame frame-${s}`)).join("")}const Ee=[".....wwww.......","...wwwwwwww.....","..wwwwwwwwwww...",".wwwwwwwwwwwwww.","wwwwwwwwwwwwwwww",".cccccccccccccc."],Re=()=>A(Ee,{w:"#ffffff",c:"#dfe9f3"},"cloud-svg"),De=["...gggg...","..gggggg..",".ggGgggGg.","gggggggggg","gGggggggGg",".gggGgggg.","..gggggg..","....tt....","....tt....","....tt...."],J=()=>A(De,{g:"#4f9a5a",G:"#3b7d47",t:"#6b4a2f"},"tree-svg"),Ne=["krrrrrr.","krrrrrrr","krrwrrrr","krrrrrr.","k.......","k.......","k.......","k.......","k.......","k.......","k.......","kk......"],we=(s="#e63957")=>A(Ne,{k:"#1b1b2f",r:s,w:"#ffcf3f"},"flag-svg"),qe=[".kkkkkkkkkk.","kyyyyyyyyyyk","kyttttttttyk","kyttwwwwttyk","kyttwkkwttyk","kytwwwwwwtyk","kytwwkkwwtyk","kytwwwwwwtyk",".kyttttttyk.","..kyttttyk..","...kyyyyk...","....kkkk...."],Fe=()=>A(qe,{k:"#1b1b2f",y:"#ffcf3f",t:"#1f9e8f",w:"#f4f1ea"},"shield-svg"),Je=["kkkkkkkkkk","kyyyyyyyyk","yyyyywyyyy","ykyyywyyky","yk.yyyyy.ky",".k.kyyyk.k","....kyk...","....kyk...","...kkkkk..","..kbbbbbk.","..kkkkkkk."],Oe=()=>A(Je,{k:"#1b1b2f",y:"#ffcf3f",w:"#fff6c8",b:"#8a5a33"},"trophy-svg"),S=(s,e)=>`<div class="signpost" aria-hidden="true"><div class="signpost-board"><small>ZONE ${s}</small>${e}</div><div class="signpost-pole"></div></div>`;function Be(){const s=c.name.toUpperCase().split(" ");return`
  <section class="zone zone-boot" data-zone="boot" data-title="Boot" aria-label="Introduction">
    <div class="boot-card">
      <p class="boot-prompt"><span>$</span> ./shahiq --start</p>
      <h1 class="boot-title" aria-label="${a(c.name)}">
        <span class="t1">${s[0]}</span><span class="t2">${s[1]}</span>
      </h1>
      <p class="boot-role">${a(c.title)}</p>
      <ul class="boot-focus">${c.focus.map(e=>`<li>${a(e)}</li>`).join("")}</ul>
      <p class="boot-stack">${c.stackLine.map(a).join(" · ")}</p>
      <p class="boot-cta"><span class="blink">▶</span> Scroll to start
        <span class="boot-or">or <a href="#quick" data-mode="quick">open the 30-second résumé</a></span></p>
    </div>
    <div class="tree-cluster" aria-hidden="true">${J()}${J()}</div>
  </section>`}function Ge(){return`
  <section class="zone zone-about" data-zone="about" data-title="Origin" aria-labelledby="about-h">
    ${S(1,"Origin")}
    <div class="house" aria-hidden="true"><div class="house-roof"></div><div class="house-body"><i></i><i></i><b></b></div></div>
    <article class="panel panel-about">
      <h2 id="about-h" class="panel-h">Hi, I'm Shahiq.</h2>
      <p>${a(c.summary)}</p>
      <dl class="facts">${c.facts.map(s=>`<div><dt>${a(s.k)}</dt><dd>${a(s.v)}</dd></div>`).join("")}</dl>
    </article>
    <div class="tree-cluster" aria-hidden="true">${J()}</div>
  </section>`}function We(){const s=fe.map((e,t)=>`
      <div class="checkpoint">
        <article class="panel panel-job">
          <p class="job-when">${a(e.when)}</p>
          <h3>${a(e.role)}</h3>
          <p class="job-org">${e.orgUrl?`<a href="${e.orgUrl}" target="_blank" rel="noopener">${a(e.org)}</a>`:a(e.org)}</p>
          <ul>${e.points.map(i=>`<li>${a(i)}</li>`).join("")}</ul>
        </article>
        <div class="cp-flag" aria-hidden="true">${we(t===0?"#1f9e8f":"#e63957")}</div>
      </div>`).join("");return`
  <section class="zone zone-exp" data-zone="exp" data-title="Experience" aria-labelledby="exp-h">
    ${S(2,"Experience Road")}
    <h2 id="exp-h" class="sr-only">Experience</h2>
    ${s}
  </section>`}function He(){const s=be.map(e=>`
      <div class="forge-group">
        <h3 class="forge-h"><span aria-hidden="true">${e.icon}</span> ${a(e.name)}</h3>
        <ul class="blocks">${e.items.map(t=>`<li class="block" data-block>${a(t)}</li>`).join("")}</ul>
      </div>`).join("");return`
  <section class="zone zone-skills" data-zone="skills" data-title="Stack Forge" aria-labelledby="skills-h">
    ${S(3,"The Stack Forge")}
    <div class="forge-intro panel panel-small">
      <h2 id="skills-h" class="panel-h">The Stack Forge</h2>
      <p>Walk under the blocks to collect the tools I build with.</p>
    </div>
    ${s}
  </section>`}function ge(s,e){const t=[78,92,70,86,74,95,82],i=t[e%t.length];return`
    <button class="building ${s.zone==="client"?"building-studio":""}" type="button" data-project="${s.id}"
      style="--c:${s.color};--h:${i}%" aria-label="${a(s.name)}: ${a(s.tagline)} Open details">
      <span class="b-roof"><span class="b-sign">${a(s.name)}</span></span>
      <span class="b-face">
        <span class="b-windows" aria-hidden="true"></span>
        <span class="b-plaque">${a(s.tagline)}${te(s.status)}</span>
        <span class="b-door">Enter ▸</span>
      </span>
    </button>`}function Ve(){const s=P.filter(t=>t.zone==="build"),e=P.filter(t=>t.zone==="client");return`
  <section class="zone zone-build" data-zone="build" data-title="Build District" aria-labelledby="build-h">
    ${S(4,"Build District")}
    <div class="panel panel-small district-intro">
      <h2 id="build-h" class="panel-h">Build District</h2>
      <p>Full-stack products. Click a building to step inside.</p>
    </div>
    <div class="skyline">${s.map(ge).join("")}</div>
    <div class="studio-lot">
      <p class="neon" aria-hidden="true">ASVEX STUDIO</p>
      <div class="skyline">${e.map((t,i)=>ge(t,i+5)).join("")}</div>
    </div>
  </section>`}function Qe(){const s=P.filter(e=>e.zone==="security").map(e=>`
      <button class="tower" type="button" data-project="${e.id}" style="--c:${e.color}" aria-label="${a(e.name)}: ${a(e.tagline)} Open details">
        <span class="t-top" aria-hidden="true"></span>
        <span class="t-body">
          <span class="t-name">${a(e.name)}</span>
          <span class="t-tag">${a(e.tagline)}</span>
          <span class="t-stack">${e.stack.slice(0,3).map(a).join(" · ")}</span>
          <span class="b-door">Enter ▸</span>
        </span>
      </button>`).join("");return`
  <section class="zone zone-security" data-zone="security" data-title="Firewall Fortress" aria-labelledby="sec-h">
    ${S(5,"Firewall Fortress")}
    <article class="panel panel-sec">
      <div class="sec-shield">${Fe()}</div>
      <h2 id="sec-h" class="panel-h">Security is the job, not a feature.</h2>
      <ul class="ticks">
        <li>Building a multi-tenant <b>GRC platform</b> at work: ISO 27001 policies, Statement of Applicability, risk and evidence workflows.</li>
        <li>Integrations around <b>asset inventory, SIEM, SOAR</b> and endpoint security.</li>
        <li>Auth done properly: <b>Argon2id, rotating refresh tokens, MFA, RBAC, audit logs</b>.</li>
      </ul>
      <p class="studying"><span class="pulse" aria-hidden="true"></span> Currently studying: <b>${$.inProgress.map(a).join("</b> and <b>")}</b></p>
    </article>
    <div class="fortress">
      <div class="wall" aria-hidden="true"></div>
      ${s}
    </div>
  </section>`}function Ue(){const s=P.filter(t=>t.zone==="devops").map(t=>`
      <button class="kiosk" type="button" data-project="${t.id}" style="--c:${t.color}" aria-label="${a(t.name)}: ${a(t.tagline)} Open details">
        <span class="k-screen"><span class="k-name">${a(t.name)}</span><span class="k-tag">${a(t.tagline)}</span>
          <span class="k-stack">${t.stack.map(a).join(" · ")}</span></span>
        <span class="b-door">Enter ▸</span>
      </button>`).join(""),e=Pe.map((t,i)=>`<li class="machine" style="--i:${i}"><span class="m-light" aria-hidden="true"></span>${a(t)}</li>`).join("");return`
  <section class="zone zone-devops" data-zone="devops" data-title="Pipeline Works" aria-labelledby="dev-h">
    ${S(6,"Pipeline Works")}
    <article class="panel panel-small">
      <h2 id="dev-h" class="panel-h">Pipeline Works</h2>
      <p>Code goes in, tested, scanned and containerized software comes out, with a rollback ready.</p>
      <p class="mono-line">Docker · Compose · Jenkins · Nginx · GitHub Actions · Vercel</p>
    </article>
    <div class="factory">
      <ol class="machines" aria-label="Pipeline stages">${e}</ol>
      <div class="belt" id="belt" aria-hidden="true">
        <div class="belt-crates">${'<span class="crate"></span>'.repeat(14)}</div>
      </div>
    </div>
    <div class="kiosks">${s}</div>
  </section>`}function _e(){const s=$.earned.map(t=>`<li class="pedestal"><span class="trophy">${Oe()}</span><span class="ped-label">${a(t)}</span></li>`).join(""),e=$.inProgress.map(t=>`<li class="pedestal pedestal-wip"><span class="trophy"><span class="loading" aria-hidden="true"><i></i></span></span><span class="ped-label">${a(t)}<em>In progress</em></span></li>`).join("");return`
  <section class="zone zone-train" data-zone="train" data-title="Hall of Credentials" aria-labelledby="train-h">
    ${S(7,"Hall of Credentials")}
    <article class="panel panel-small">
      <h2 id="train-h" class="panel-h">Certifications & training</h2>
      <ul class="chips">${$.training.map(t=>`<li>${a(t)}</li>`).join("")}</ul>
    </article>
    <ul class="pedestals">${e}${s}</ul>
  </section>`}function Ze(){return`
  <section class="zone zone-contact" data-zone="contact" data-title="Summit" aria-labelledby="contact-h">
    ${S(8,"Summit")}
    <div class="summit" aria-hidden="true"><div class="summit-hill"></div><div class="summit-flag">${we("#ffcf3f")}</div></div>
    <article class="panel panel-contact">
      <p class="boot-prompt"><span>$</span> deploy --target=your-team</p>
      <h2 id="contact-h" class="panel-h big">Let's build something secure.</h2>
      <p>I'm open to full-stack, security-focused and DevOps roles. The fastest way to reach me is email.</p>
      <div class="contact-links">
        <a class="btn btn-primary" href="mailto:${c.email}">${a(c.email)}</a>
        <a class="btn" href="${c.linkedin}" target="_blank" rel="noopener">LinkedIn</a>
        <a class="btn" href="${c.github}" target="_blank" rel="noopener">GitHub</a>
        <a class="btn" href="${c.resume}" download>Résumé PDF</a>
      </div>
      <p class="replay"><button type="button" class="linkish" id="replay">↺ Play again</button> · <a href="#quick" data-mode="quick">Quick view</a></p>
    </article>
  </section>`}function O(s){return()=>(s=s*16807%2147483647,(s-1)/2147483646)}function me(s,e,t,i){const n=O(t),o=16;let r=e*.55,f=`M0 ${e} L0 ${r}`;for(let p=0;p<=s;p+=o){r+=(n()-.5)*26,r=Math.max(e*.12,Math.min(e*.85,r));const w=Math.round(r/8)*8;f+=` L${p} ${w} L${p+o} ${w}`}return f+=` L${s} ${e} Z`,`<svg class="${i}" width="${s}" height="${e}" viewBox="0 0 ${s} ${e}" preserveAspectRatio="none" aria-hidden="true"><path d="${f}"/></svg>`}function Xe(s,e){const t=O(e);let i="",n=0;for(;n<s;)if(t()<.45){const o=.7+t()*.8;i+=`<span class="m-tree" style="left:${n}px;--s:${o.toFixed(2)}">${J()}</span>`,n+=60+t()*60}else{const o=40+Math.round(t()*5)*12,r=60+Math.round(t()*8)*14;i+=`<span class="m-bld" style="left:${n}px;width:${o}px;height:${r}px"></span>`,n+=o+8+t()*40}return i}function Ke(s,e){const t=O(e);let i="";for(let n=40;n<s;n+=220+t()*260){const o=8+t()*30,r=3+Math.round(t()*3);i+=`<span class="cloud" style="left:${n}px;top:${o}%;--s:${r};--d:${(t()*6).toFixed(1)}s">${Re()}</span>`}return i}const Ye=s=>[1,3,5].map(e=>parseInt(s.slice(e,e+2),16)),et=(s,e,t)=>s.map((i,n)=>Math.round(i+(e[n]-i)*t)),z=s=>`rgb(${s[0]},${s[1]},${s[2]})`,tt=[[0,["#8fd3f7","#fff1d6","#a9c9b4","#7fae8a","#5f8f70"]],[.35,["#58b7ee","#cdeeff","#9cc3ae","#6ea37d","#4f8463"]],[.62,["#f5a15e","#ffe0a0","#c9977a","#8c7656","#6b5a43"]],[.82,["#3e3270","#f07b7b","#6e5a8c","#4a3f6c","#3a3157"]],[1,["#0b1131","#2b3270","#262c58","#1b2047","#141938"]]],C=tt.map(([s,e])=>[s,e.map(Ye)]);function st(s){for(let e=1;e<C.length;e++){const[t,i]=C[e],[n,o]=C[e-1];if(s<=t){const r=(s-n)/(t-n);return o.map((f,p)=>et(f,i[p],r))}}return C[C.length-1][1]}function at(s){var le;const e=l=>document.getElementById(l),t=e("world"),i=e("stage"),n=e("scroller"),o=e("hero"),r=e("sky"),f=e("stars"),p=e("sun"),w=e("zone-label"),b=e("hud-map"),E=e("coin-count"),je=e("coin-total"),xe=e("hint"),j={clouds:e("layer-clouds"),far:e("layer-far"),mid:e("layer-mid")},G=window.matchMedia("(prefers-reduced-motion: reduce)");t.innerHTML=Be()+Ge()+We()+He()+Ve()+Qe()+Ue()+_e()+Ze()+'<div class="ground" aria-hidden="true"></div>',o.innerHTML=`<div class="hero-sprite">${Ce()}</div><div class="hero-shadow"></div>`;const W=O(7);f.innerHTML=Array.from({length:90},()=>`<i style="left:${(W()*100).toFixed(2)}%;top:${(W()*62).toFixed(2)}%;--d:${(W()*3).toFixed(2)}s"></i>`).join("");const H=document.createElement("div");H.className="moon",i.insertBefore(H,p.nextSibling);let L=[],R=[],y=0,v=0,I=0,h=0,se=0,ae=0,ie=0,ne=0,V=!1;const Q=document.getElementById("belt");function D(){v=window.innerWidth;const l=i.clientHeight,d=t.scrollWidth;y=Math.max(0,d-v),n.style.height=`${y+l}px`,I=v<700?Math.round(v*.1):Math.round(Math.min(v*.22,300)),o.style.left=`${I}px`;const g=h;L=[...t.querySelectorAll(".zone")].map(u=>({id:u.dataset.zone,title:u.dataset.title,start:u.offsetLeft,el:u}));const M=new Set(R.filter(u=>u.hit).map(u=>u.el));R=[...t.querySelectorAll("[data-block]")].map(u=>{const x=u.getBoundingClientRect();return{el:u,x:x.left+g+x.width/2,hit:M.has(u)}}),je.textContent=String(R.length);const N=Math.ceil(y*.18+v+64),q=Math.ceil(y*.45+v+64),Z=Math.ceil(y*.08+v+64);j.far.innerHTML=me(N,260,11,"ridge ridge-far")+me(N,200,23,"ridge ridge-near"),j.mid.innerHTML=Xe(q,5),j.mid.style.width=`${q}px`,j.clouds.innerHTML=Ke(Z,3),b.innerHTML=L.map((u,x)=>`<button type="button" data-goto="${x}" title="${a(u.title)}" aria-label="Go to ${a(u.title)}"></button>`).join(""),oe(!0)}function U(l){o.dataset.frame=l}function oe(l=!1){var he;V=!1,h=Math.min(Math.max(window.scrollY,0),y);const d=h-se;if(!l&&Math.abs(d)<.1)return;if(t.style.transform=`translate3d(${-h}px,0,0)`,j.clouds.style.transform=`translate3d(${-h*.08}px,0,0)`,j.far.style.transform=`translate3d(${-h*.18}px,0,0)`,j.mid.style.transform=`translate3d(${-h*.45}px,0,0)`,Q){const m=h*.6;Q.style.setProperty("--belt-bg",`${m.toFixed(1)}px`),Q.style.setProperty("--belt-c",`${(m%74).toFixed(1)}px`)}const g=y?h/y:0,[M,N,q,Z,u]=st(g);r.style.background=`linear-gradient(180deg, ${z(M)} 0%, ${z(N)} 100%)`,i.style.setProperty("--ridge-far",z(q)),i.style.setProperty("--ridge-near",z(Z)),i.style.setProperty("--mid",z(u));const x=Math.max(0,Math.min(1,(g-.72)/.22));i.style.setProperty("--night",x.toFixed(3)),f.style.opacity=x.toFixed(3);const ce=Math.min(1,g/.86);p.style.transform=`translate3d(${(ce*30).toFixed(1)}vw, ${(ce*62).toFixed(1)}svh, 0)`,p.style.opacity=String(1-Math.max(0,(g-.8)/.08)),H.style.opacity=String(Math.max(0,(g-.84)/.12));const de=h+I+28;Math.abs(d)>.1&&(ae+=Math.abs(d),o.classList.toggle("flip",d<0),G.matches||U(Math.floor(ae/22)%2?"walkA":"walkB"),clearTimeout(ie),ie=window.setTimeout(()=>U("idle"),140));let pe=0;for(const m of R)!m.hit&&de>=m.x-6&&(m.hit=!0,m.el.classList.add("hit"),!G.matches&&performance.now()>ne&&(ne=performance.now()+340,o.classList.remove("hop"),o.offsetWidth,o.classList.add("hop"))),m.hit&&pe++;E.textContent=String(pe);let X=0;L.forEach((m,K)=>{de>=m.start&&(X=K)});const ue=((he=L[X])==null?void 0:he.title)??"";w.textContent!==ue&&(w.textContent=ue),b.querySelectorAll("button").forEach((m,K)=>m.classList.toggle("on",K<=X)),b.style.setProperty("--p",g.toFixed(4)),xe.classList.toggle("gone",h>30),se=h}function Te(){V||(V=!0,requestAnimationFrame(()=>oe()))}function _(l){const d=L[l];d&&window.scrollTo({top:Math.min(y,Math.max(0,d.start-8)),behavior:G.matches?"auto":"smooth"})}window.addEventListener("scroll",Te,{passive:!0});let re=0;return window.addEventListener("resize",()=>{clearTimeout(re),re=window.setTimeout(D,120)}),window.addEventListener("keydown",l=>{if(document.body.classList.contains("mode-quick")||l.target.closest("dialog, input, textarea"))return;const d=Math.round(window.innerWidth*.55);l.key==="ArrowRight"&&(l.preventDefault(),window.scrollBy({top:d,behavior:"smooth"})),l.key==="ArrowLeft"&&(l.preventDefault(),window.scrollBy({top:-d,behavior:"smooth"}))}),t.addEventListener("focusin",l=>{const g=l.target.getBoundingClientRect();if(g.left<I||g.right>window.innerWidth-24){const M=g.left+h;window.scrollTo({top:Math.min(y,Math.max(0,M-I-80)),behavior:"auto"})}}),b.addEventListener("click",l=>{const d=l.target.closest("[data-goto]");d&&_(Number(d.dataset.goto))}),t.addEventListener("click",l=>{const d=l.target.closest("[data-project]");d&&s(d.dataset.project),l.target.id==="replay"&&_(0)}),U("idle"),(le=document.fonts)==null||le.ready.then(D),D(),{measure:D,goToZone:_}}function it(s){const e=[s.live?`<a href="${s.live}" target="_blank" rel="noopener">Live ↗</a>`:"",s.repo?`<a href="${s.repo}" target="_blank" rel="noopener">Code ↗</a>`:""].join("");return`
    <article class="q-proj" style="--c:${s.color}">
      <h4><button type="button" class="linkish" data-project="${s.id}">${a(s.name)}</button>${te(s.status)}</h4>
      <p>${a(s.tagline)}</p>
      <p class="q-stack">${s.stack.map(a).join(" · ")}</p>
      ${e?`<p class="q-links">${e}</p>`:""}
    </article>`}function nt(s){const e=(t,i)=>`<h3 class="q-sub">${i}</h3><div class="q-grid">${P.filter(n=>t.includes(n.zone)).map(it).join("")}</div>`;s.innerHTML=`
  <div class="q-wrap">
    <div class="q-bar">
      <button type="button" class="btn" data-mode="world">▶ Play the interactive version</button>
      <button type="button" class="btn btn-ghost" onclick="window.print()">Print</button>
    </div>
    <header class="q-head">
      <h1>${a(c.name)}</h1>
      <p class="q-title">${a(c.title)} · ${c.focus.slice(1).map(a).join(" & ")}</p>
      <p class="q-meta">${a(c.location)} ·
        <a href="mailto:${c.email}">${a(c.email)}</a> ·
        <a href="${c.linkedin}" target="_blank" rel="noopener">LinkedIn</a> ·
        <a href="${c.github}" target="_blank" rel="noopener">GitHub</a> ·
        <a href="${c.resume}" download>Résumé PDF</a></p>
    </header>

    <section><h2>Profile</h2><p>${a(c.summary)}</p>
      <p class="q-studying"><span class="pulse" aria-hidden="true"></span> Currently studying ${$.inProgress.map(a).join(" and ")}.</p></section>

    <section><h2>Experience</h2>
      ${fe.map(t=>`
        <div class="q-job">
          <div class="q-job-h"><h3>${a(t.role)} · ${t.orgUrl?`<a href="${t.orgUrl}" target="_blank" rel="noopener">${a(t.org)}</a>`:a(t.org)}</h3><span>${a(t.when)}</span></div>
          <ul>${t.points.map(i=>`<li>${a(i)}</li>`).join("")}</ul>
        </div>`).join("")}
    </section>

    <section><h2>Projects</h2>
      ${e(["security"],"Security & GRC")}
      ${e(["devops"],"DevOps")}
      ${e(["build","client"],"Full-stack products")}
      <p class="q-note">“Private code” projects are shown with screenshots and details; their source isn't public.</p>
    </section>

    <section><h2>Skills</h2>
      <dl class="q-skills">${be.map(t=>`<div><dt>${a(t.name)}</dt><dd>${t.items.map(a).join(", ")}</dd></div>`).join("")}</dl>
    </section>

    <section class="q-two">
      <div><h2>Certifications</h2><ul>
        ${$.inProgress.map(t=>`<li>${a(t)} <em>(in progress)</em></li>`).join("")}
        ${$.earned.map(t=>`<li>${a(t)}</li>`).join("")}</ul>
        <p class="q-small">Training: ${$.training.map(a).join(", ")}.</p></div>
      <div><h2>Education</h2><ul>${Ae.map(t=>`<li><b>${a(t.school)}</b>: ${a(t.detail)}</li>`).join("")}</ul></div>
    </section>
  </div>`}const T=document.getElementById("project-dialog"),F=document.getElementById("quick"),ot=document.getElementById("world-mode"),ve=document.getElementById("mode-toggle"),rt=document.getElementById("hud");function $e(s){const e=P.find(i=>i.id===s);if(!e)return;const t=[e.live?`<a class="btn btn-primary" href="${e.live}" target="_blank" rel="noopener">${e.zone==="security"?"Product site":"Live site"} ↗</a>`:"",e.repo?`<a class="btn" href="${e.repo}" target="_blank" rel="noopener">View code ↗</a>`:""].join("");T.style.setProperty("--c",e.color),T.innerHTML=`
    <div class="pd-inner">
      <button class="pd-close" type="button" aria-label="Close">✕</button>
      <p class="pd-kicker">${e.zone==="security"?"Firewall Fortress":e.zone==="devops"?"Pipeline Works":e.zone==="client"?"ASVEX Studio":"Build District"}</p>
      <h2 id="pd-title">${a(e.name)}${te(e.status)}</h2>
      <p class="pd-tag">${a(e.tagline)}</p>
      ${e.shot?`<figure class="pd-shot"><img src="${e.shot}" alt="${e.mockup?"Design mockup":"Screenshot"} of ${a(e.name)}" loading="lazy" />${e.mockup?"<figcaption>Design mockup of the app’s interface</figcaption>":""}</figure>`:""}
      <h3>Highlights</h3>
      <ul class="ticks">${e.highlights.map(i=>`<li>${a(i)}</li>`).join("")}</ul>
      <h3>Stack</h3>
      <ul class="chips">${e.stack.map(i=>`<li>${a(i)}</li>`).join("")}</ul>
      ${e.status==="private"?`<p class="pd-note">${e.note?a(e.note)+" ":"The source code is private. "}Happy to walk through the architecture in an interview.</p>`:""}
      ${t?`<div class="pd-links">${t}</div>`:""}
    </div>`,T.showModal()}T.addEventListener("click",s=>{const e=s.target;(e===T||e.closest(".pd-close"))&&T.close()});const Se=at($e);nt(F);let ke=0;function B(s,e=!0){var i,n;const t=s==="quick";t!==document.body.classList.contains("mode-quick")&&(t&&(ke=window.scrollY),document.body.classList.toggle("mode-quick",t),F.hidden=!t,ot.hidden=t,rt.classList.toggle("hud-quick",t),ve.textContent=t?"▶ Play mode":"Quick view",e&&history.replaceState(null,"",t?"#quick":location.pathname),t?(window.scrollTo(0,0),(i=F.querySelector("h1"))==null||i.setAttribute("tabindex","-1"),(n=F.querySelector("h1"))==null||n.focus({preventScroll:!0})):(Se.measure(),window.scrollTo(0,ke)))}ve.addEventListener("click",()=>B(document.body.classList.contains("mode-quick")?"world":"quick"));document.addEventListener("click",s=>{const e=s.target.closest("[data-mode]");e&&(s.preventDefault(),B(e.dataset.mode),e.dataset.mode==="world"&&e.classList.contains("hud-logo")&&Se.goToZone(0));const t=s.target.closest("#quick [data-project]");t&&$e(t.dataset.project)});window.addEventListener("hashchange",()=>B(location.hash==="#quick"?"quick":"world",!1));location.hash==="#quick"&&B("quick",!1);
