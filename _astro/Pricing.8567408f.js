import{c as i}from"./config.b5060bb7.js";import{C as l}from"./CheckArrowIcon.44a69b6f.js";import{j as e}from"./jsx-runtime.acd28724.js";import{r as a}from"./index.f90a43bd.js";import{m as c}from"./motion.5215865e.js";const n=[{title:"Open Beta",description:"For early adopters with a sense of adventure.",price:20,features:["10 apps","Up to 1,000,000 users","Access to private Discord","Live support"],cta:{title:"Get Started",link:i.docsUrl}},{title:"Enterprise",description:"For teams that need dedicated support.",price:"Contact Us",features:["Unlimited apps","Unlimited users","Dedicated support team","Priority feature requests"],cta:{title:"Book a Demo",link:i.calendly}}],o=t=>e.jsx("div",{className:"w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0",children:e.jsxs("div",{className:"p-8 bg-shorebirdBg3 rounded-3xl",children:[e.jsx("p",{className:"mb-2 text-xl font-bold font-heading text-white text-left",children:t.title}),e.jsx("div",{className:"flex justify-start items-end",children:typeof t.price=="number"?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"text-4xl sm:text-5xl font-bold text-white text-left mt-4 mr-2",children:["$",t.price]}),e.jsx("div",{className:"text-gray-500",children:"/ month"})]}):e.jsx("div",{className:"text-3xl sm:text-4xl font-bold text-white text-left mt-4 mr-2 mb-2",children:t.price})}),e.jsx("p",{className:"mt-4 mb-6 2xl:mb-10 text-gray-500 leading-loose text-left",children:t.description}),e.jsx("ul",{className:"mb-2 2xl:mb-6 text-white",children:t.features.map((s,r)=>e.jsxs("li",{className:"mb-4 flex",children:[e.jsx(l,{}),e.jsx("span",{children:s})]},`${s}-${r}`))}),e.jsx("a",{target:"_blank",href:t.cta.link,className:"inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl shorebird-button-colored font-bold leading-loose mt-8",children:t.cta.title})]})}),f=()=>e.jsxs("section",{className:"w-screen flex justify-center bg-shorebirdBg2 relative",children:[e.jsx("div",{className:"absolute -top-16",id:"pricing"}),e.jsx("div",{className:"pb-20 pt-12 bg-shorebirdBg2  2xl:w-[1150px] lg:w-[1050px]  md:w-4/5 ",children:e.jsx(c.div,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.5,delay:.2},children:e.jsxs("div",{className:"container mx-auto px-4",children:[e.jsxs("div",{className:"max-w-2xl mx-auto text-center mb-16",children:[e.jsx("span",{className:"shorebird-block-subtitle",children:"Pricing"}),e.jsx("h2",{className:"mt-6 mb-6 text-4xl lg:text-5xl font-bold font-heading text-white",children:"Join the flock"}),e.jsx("p",{className:"mb-6 text-shorebirdTextGray",children:"As a paying customer, you will get access to code push, our private discord, live support, and more!"})]}),e.jsx("div",{className:"flex flex-wrap flex-col lg:flex-row -mx-4 items-center justify-center mt-20",children:n.map((t,s)=>a.createElement(o,{...t,key:`pricing-card-${s}`}))})]})})})]});export{f as Pricing};