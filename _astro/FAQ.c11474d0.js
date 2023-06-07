import{r as n}from"./index.6460afdd.js";import{j as e}from"./jsx-runtime.51014c9d.js";import{m as a}from"./motion.e7952211.js";import{R as d}from"./react-markdown.edb2301f.js";const c=[{question:"Is there a free tier?",answer:"Shorebird does not yet support a free tier, but we plan to [add one soon](https://github.com/shorebirdtech/shorebird/issues/396). We expect to re-work our pricing structure in the coming months as we better understand customer needs and our own costs."},{question:"What platforms does Shorebird support?",answer:"Shorebird is designed to work everywhere Flutter does. Shorebird has production Android support. iOS support is launching in July 2023. Let us know if you are interested in [desktop](https://github.com/shorebirdtech/shorebird/issues/397) or other platforms."},{question:"How do I sign up?",answer:"Shorebird does everything via its command-line tool. Once you have [installed Shorebird](), you can create an account with `shorebird account create`."},{question:"Does Shorebird work for existing apps?",answer:"Yes. Shorebird requires no code changes to your Flutter app to work. See our [quick start guide](https://docs.shorebird.dev/guides/code_push_quickstart) to get started."},{question:"Does Shorebird comply with Play Store guidelines?",answer:"Yes. Shorebird has been designed to comply with Play Store guidelines. Code push is common in the industry, including several other commercial code push products from Microsoft [app center](https://appcenter.ms), [Expo](https://expo.dev), and [Ionic](https://ionic.io/). [More info](https://docs.shorebird.dev/faq#does-shorebird-comply-with-play-store-guidelines)."},{question:"Can I use this in production?",answer:"Yes!  Shorebird is used in production today. If you have any concerns we are happy to meet with you and/or discuss your concerns live [on Discord](https://discord.gg/9hKJcWGcaB)."},{question:"Are there any limitations or known issues?",answer:"We keep a list of known issues at [https://docs.shorebird.dev/status](https://docs.shorebird.dev/status)."},{question:"Can I self-host Shorebird or do you offer on-prem?",answer:"Not yet. We plan to offer on-prem in the future. [Contact us](mailto:contact@shorebird.dev) if you are interested in self-hosting."},{question:"Where is the roadmap?",answer:"Shorebird is developed entirely in the public, including our [project boards](https://github.com/shorebirdtech/shorebird/projects) shows what we are currently working on."}],b=()=>e.jsxs("section",{className:"relative pt-16 pb-16 bg-blueGray-50 overflow-hidden",children:[e.jsx("div",{className:"absolute -top-10",id:"faq"}),e.jsx(a.div,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.5,delay:.2},children:e.jsx("div",{className:"relative z-10 container px-2 sm:px-8 lg:px-4 mx-auto w-11/12 sm:w-full",children:e.jsxs("div",{className:"md:max-w-4xl mx-auto",children:[e.jsx("p",{className:"mb-7 shorebird-block-subtitle text-center",children:"Have any questions?"}),e.jsx("h2",{className:"mb-16 shorebird-block-big-title text-center",children:"FAQs"}),e.jsx("div",{className:"mb-11 flex flex-wrap -m-1",children:c.map((s,r)=>e.jsx("div",{className:"w-full p-1",children:e.jsx(h,{title:s.question,content:s.answer,defaultOpen:!0})},r))}),e.jsx("div",{children:e.jsxs("p",{className:"text-center text-white",children:["For additional questions,"," ",e.jsx("a",{target:"_blank",className:"underline",href:"https://docs.shorebird.dev/faq",children:"see our docs"})," ","or"," ",e.jsx("a",{target:"_blank",className:"underline",href:"https://discord.gg/shorebird",children:"ask us on Discord."})]})})]})})})]}),h=({defaultOpen:s,title:r,content:o})=>{const[t,i]=n.useState(s);return e.jsxs("div",{className:"pt-2 sm:pt-6 pb-2 px-3 sm:px-8  rounded-3xl bg-shorebirdBg3 shorebird-border-gray-darker mb-4 relative hover:bg-shorebirdBg3Hover cursor-pointer",onClick:()=>i(!t),children:[e.jsxs("div",{className:"flex flex-col p-2  justify-center items-start",children:[e.jsx("h3",{className:" shorebird-content-title pt-3 sm:pt-0 pr-8 sm:pr-0",children:r}),e.jsx(d,{className:`prose prose-invert text-shorebirdTextGray pt-4 transition-all duration-300 overflow-hidden ${t?"max-h-96":"max-h-0"}`,children:`${o}`})]}),e.jsx("div",{className:"absolute top-6 right-4 sm:top-8 sm:right-8",children:e.jsx("svg",{width:"28px",height:"30px",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:`transition-all duration-500  ${t?"rotate-[180deg]":"rotate-[270deg]"}`,children:e.jsx("path",{d:"M4.16732 12.5L10.0007 6.66667L15.834 12.5",stroke:"#0196C0",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]})};export{b as FAQ};
