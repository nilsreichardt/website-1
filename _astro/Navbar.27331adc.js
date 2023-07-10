import{r as e}from"./index.6460afdd.js";import{c as b}from"./config.884d864a.js";import{S as P,D as U,T as S,G as F}from"./TwitterIcon.ee85d1d7.js";import{j as t}from"./jsx-runtime.51014c9d.js";import{u as k,f as _,a as O,P as T,L as $,m as v}from"./motion.e7952211.js";function N(){const n=e.useRef(!1);return k(()=>(n.current=!0,()=>{n.current=!1}),[]),n}function G(){const n=N(),[i,r]=e.useState(0),s=e.useCallback(()=>{n.current&&r(i+1)},[i]);return[e.useCallback(()=>_.postRender(s),[s]),i]}class D extends e.Component{getSnapshotBeforeUpdate(i){const r=this.props.childRef.current;if(r&&i.isPresent&&!this.props.isPresent){const s=this.props.sizeRef.current;s.height=r.offsetHeight||0,s.width=r.offsetWidth||0,s.top=r.offsetTop,s.left=r.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function H({children:n,isPresent:i}){const r=e.useId(),s=e.useRef(null),l=e.useRef({width:0,height:0,top:0,left:0});return e.useInsertionEffect(()=>{const{width:c,height:f,top:d,left:x}=l.current;if(i||!s.current||!c||!f)return;s.current.dataset.motionPopId=r;const m=document.createElement("style");return document.head.appendChild(m),m.sheet&&m.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${f}px !important;
            top: ${d}px !important;
            left: ${x}px !important;
          }
        `),()=>{document.head.removeChild(m)}},[i]),e.createElement(D,{isPresent:i,childRef:s,sizeRef:l},e.cloneElement(n,{ref:s}))}const C=({children:n,initial:i,isPresent:r,onExitComplete:s,custom:l,presenceAffectsLayout:c,mode:f})=>{const d=O(K),x=e.useId(),m=e.useMemo(()=>({id:x,initial:i,isPresent:r,custom:l,onExitComplete:u=>{d.set(u,!0);for(const o of d.values())if(!o)return;s&&s()},register:u=>(d.set(u,!1),()=>d.delete(u))}),c?void 0:[r]);return e.useMemo(()=>{d.forEach((u,o)=>d.set(o,!1))},[r]),e.useEffect(()=>{!r&&!d.size&&s&&s()},[r]),f==="popLayout"&&(n=e.createElement(H,{isPresent:r},n)),e.createElement(T.Provider,{value:m},n)};function K(){return new Map}function A(n){return e.useEffect(()=>()=>n(),[])}const g=n=>n.key||"";function V(n,i){n.forEach(r=>{const s=g(r);i.set(s,r)})}function W(n){const i=[];return e.Children.forEach(n,r=>{e.isValidElement(r)&&i.push(r)}),i}const q=({children:n,custom:i,initial:r=!0,onExitComplete:s,exitBeforeEnter:l,presenceAffectsLayout:c=!0,mode:f="sync"})=>{let[d]=G();const x=e.useContext($).forceRender;x&&(d=x);const m=N(),u=W(n);let o=u;const h=new Set,y=e.useRef(o),j=e.useRef(new Map).current,w=e.useRef(!0);if(k(()=>{w.current=!1,V(u,j),y.current=o}),A(()=>{w.current=!0,j.clear(),h.clear()}),w.current)return e.createElement(e.Fragment,null,o.map(a=>e.createElement(C,{key:g(a),isPresent:!0,initial:r?void 0:!1,presenceAffectsLayout:c,mode:f},a)));o=[...o];const E=y.current.map(g),R=u.map(g),I=E.length;for(let a=0;a<I;a++){const p=E[a];R.indexOf(p)===-1&&h.add(p)}return f==="wait"&&h.size&&(o=[]),h.forEach(a=>{if(R.indexOf(a)!==-1)return;const p=j.get(a);if(!p)return;const z=E.indexOf(a),B=()=>{j.delete(a),h.delete(a);const M=y.current.findIndex(L=>L.key===a);if(y.current.splice(M,1),!h.size){if(y.current=u,m.current===!1)return;d(),s&&s()}};o.splice(z,0,e.createElement(C,{key:g(p),isPresent:!1,onExitComplete:B,custom:i,presenceAffectsLayout:c,mode:f},p))}),o=o.map(a=>{const p=a.key;return h.has(p)?a:e.createElement(C,{key:g(a),isPresent:!0,presenceAffectsLayout:c,mode:f},a)}),e.createElement(e.Fragment,null,h.size?o:o.map(a=>e.cloneElement(a)))},ee=n=>{const[i,r]=e.useState(!1);return t.jsxs("nav",{className:"w-full h-20 flex flex-col justify-center items-center fixed bg-shorebirdBg1 lg:bg-shorebirdBgTransparent z-40 lg:backdrop-blur-xl",children:[t.jsxs("div",{className:"2xl:w-[1280px] xl:w-10/12 w-11/12 flex justify-between items-center relative",children:[t.jsx(v.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},exit:{opacity:0},children:t.jsx("a",{className:"navbar-link",href:"/","aria-label":"Home",children:t.jsxs("div",{className:"flex justify-start items-center grow basis-0",children:[t.jsx("div",{className:"text-white mr-2 text-6xl",children:t.jsx(P,{})}),t.jsx("div",{className:"text-white font-['Inter'] font-bold text-xl",children:b.app})]})})}),t.jsx(v.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},exit:{opacity:0},children:t.jsx("div",{className:"hidden lg:flex h-full pl-12 pb-2",children:n.links?.map(({href:s,label:l,ariaLabel:c})=>t.jsx("a",{className:"navbar-link",href:s,"aria-label":c,children:l},l))})}),t.jsx(v.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},exit:{opacity:0},children:t.jsxs("div",{className:"grow basis-0 justify-end items-center hidden lg:flex",children:[t.jsx("a",{className:`text-white rounded-xl
           bg-shorebirdBg2 text-sm flex`,href:b.discordUrl,target:"_blank","aria-label":"discord",children:t.jsx(U,{})}),t.jsx("a",{className:`text-white rounded-xl
           bg-shorebirdBg2 text-sm flex ml-4`,href:b.twitterUrl,target:"_blank","aria-label":"twitter",children:t.jsx(S,{})}),t.jsx("a",{className:`text-white rounded-xl
           bg-shorebirdBg2 text-sm flex ml-4`,href:b.githubUrl,target:"_blank","aria-label":"source code",children:t.jsx(F,{})}),t.jsx("a",{className:"text-white ml-4 border-2 border-slate-600 rounded-md p-2 hover:border-slate-400",href:b.consoleUrl,target:"_blank","aria-label":"source code",children:"Sign In"})]})}),n.links?t.jsxs("div",{className:"lg:hidden flex flex-col  px-2 py-3 border-solid border border-gray-600 rounded-md cursor-pointer hover:bg-shorebirdBg2",onClick:()=>r(!i),children:[t.jsx("div",{className:"w-5 h-0.5 bg-gray-500  mb-1"}),t.jsx("div",{className:"w-5 h-0.5 bg-gray-500  mb-1"}),t.jsx("div",{className:"w-5 h-0.5 bg-gray-500 "})]}):t.jsx(t.Fragment,{})]}),t.jsx(q,{children:i&&t.jsx(v.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},exit:{opacity:0},children:t.jsxs("div",{className:`flex flex-col mt-16 lg:hidden absolute top-4 left-0  bg-shorebirdBg1 z-50 w-full 
        items-center gap-10 pb-10 border-y border-solid border-shorebirdBg3 pt-10
        `,children:[t.jsx("a",{className:"navbar-link",href:b.consoleUrl,target:"_blank","aria-label":"source code",children:"Sign In"}),n.links?.map(({label:s,href:l,ariaLabel:c})=>t.jsx("a",{className:"navbar-link",href:l,onClick:()=>r(!1),"aria-label":c,children:s},l))]})})})]})};export{ee as Navbar};