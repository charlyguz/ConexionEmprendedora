import{r}from"./index-nNJRqtu-.js";import{o as f}from"./keyboard-DZUzPkaw.js";function p(t,e){let n=r.useRef([]),d=f(t);r.useEffect(()=>{let c=[...n.current];for(let[u,i]of e.entries())if(n.current[u]!==i){let a=d(e,c);return n.current=e,a}},[d,...e])}function s(t){function e(){document.readyState!=="loading"&&(t(),document.removeEventListener("DOMContentLoaded",e))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",e),e())}let o=[];s(()=>{function t(e){e.target instanceof HTMLElement&&e.target!==document.body&&o[0]!==e.target&&(o.unshift(e.target),o=o.filter(n=>n!=null&&n.isConnected),o.splice(10))}window.addEventListener("click",t,{capture:!0}),window.addEventListener("mousedown",t,{capture:!0}),window.addEventListener("focus",t,{capture:!0}),document.body.addEventListener("click",t,{capture:!0}),document.body.addEventListener("mousedown",t,{capture:!0}),document.body.addEventListener("focus",t,{capture:!0})});export{p as m,o as t};
