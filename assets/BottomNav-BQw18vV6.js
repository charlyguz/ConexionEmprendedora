import{j as a,b as x,r as u}from"./index-nNJRqtu-.js";import{c as m}from"./class-names-Ci91NLh9.js";import{b as j,i as E,_ as p}from"./isBrowser-BETwSqNb.js";const R=({text:t})=>a.jsx("div",{className:"absolute hidden bottom-1/2 -right-10 z-1 bg-primary/65 w-max","rounded-md":"",translate:"x-full y-1/2","backdrop-blur-sm":"","group-hover-flex":"","group-focus-visible-block":"",p:"x-2.5 y-1.5",ring:"2 secondary",text:"4 secondary left",children:a.jsx("span",{children:t})});function C({navigationItems:t}){return a.jsx("div",{className:"hidden",md:"flex flex-col h-full top-0 justify-center my-auto min-w-30 w-auto fixed z-1 bg-azulCoopel overflow-visible",children:a.jsx("div",{className:"h-1/2 py-5% mx-1",children:a.jsx("nav",{className:"flex flex-col items-center px-0 flex-grow justify-evenly h-full",children:t.map(e=>a.jsxs(x,{to:e.href,className:({isActive:r})=>m(r?"bg-white text-azulCoopel":"text-secondary hover:bg-secondary hover:text-azulCoopel/[0.75]","group relative flex items-center p-3 text-sm font-medium rounded-full"),children:[typeof e.icon=="string"?a.jsx("div",{className:m(e.icon,"hw-7"),sm:"hw-8"}):e.icon,a.jsx(R,{text:e.name})]},e.name))})})})}function v(t,e){if(t===e)return!0;for(var r=0;r<t.length;r++)if(!Object.is(t[r],e[r]))return!1;return!0}function h(t){var e=u.useRef(t);return e.current=t,e}var b=function(t){var e=h(t);u.useEffect(function(){return function(){e.current()}},[])};function y(t,e){if(j){if(!t)return e;var r;return E(t)?r=t():"current"in t?r=t.current:r=t,r}}var N=function(t){var e=function(r,i,c){var o=u.useRef(!1),n=u.useRef([]),l=u.useRef([]),s=u.useRef();t(function(){var f,g=Array.isArray(c)?c:[c],d=g.map(function(w){return y(w)});if(!o.current){o.current=!0,n.current=d,l.current=i,s.current=r();return}(d.length!==n.current.length||!v(d,n.current)||!v(i,l.current))&&((f=s.current)===null||f===void 0||f.call(s),n.current=d,l.current=i,s.current=r())}),b(function(){var f;(f=s.current)===null||f===void 0||f.call(s),o.current=!1})};return e},S=N(u.useEffect);function _(t){var e=u.useRef(0),r=p(u.useState(t),2),i=r[0],c=r[1],o=u.useCallback(function(n){cancelAnimationFrame(e.current),e.current=requestAnimationFrame(function(){c(n)})},[]);return b(function(){cancelAnimationFrame(e.current)}),[i,o]}function L(t,e){e===void 0&&(e=function(){return!0});var r=p(_(),2),i=r[0],c=r[1],o=h(e);return S(function(){var n=y(t,document);if(n){var l=function(){var s;n===document?document.scrollingElement?s={left:document.scrollingElement.scrollLeft,top:document.scrollingElement.scrollTop}:s={left:Math.max(window.pageXOffset,document.documentElement.scrollLeft,document.body.scrollLeft),top:Math.max(window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop)}:s={left:n.scrollLeft,top:n.scrollTop},o.current(s)&&c(s)};return l(),n.addEventListener("scroll",l),function(){n.removeEventListener("scroll",l)}}},[],t),i}function P({navigationItems:t}){const[e,r]=u.useState(0),[i,c]=u.useState(!0),o=L(document),n=10;return u.useEffect(()=>{o&&(o.top>e&&o.top-e>n?c(!1):o.top<e&&e-o.top>n&&c(!0),r(o.top))},[o]),a.jsx("div",{className:m("fixed bottom-0 m-auto my-5 z-1 w-full px-5 transition ease-in-out duration-300 md:hidden",i?"":"translate-y-20"),children:a.jsx("div",{className:m("px-5 justify-between inline-flex rounded-full bg-white h-14 w-full shadow-[0px_5px_2px_0_rgba(0,0,0,0.55)]"),sm:"px-0 justify-evenly",children:t.map(l=>a.jsx(x,{to:l.href,className:({isActive:s})=>`${s?"bg-azulCoopel text-secondary":"text-azulCoopel"} rounded-b-full relative inline-flex items-center px-4 py-2 text-sm font-medium`,children:typeof l.icon=="string"?a.jsx("div",{className:m(l.icon,"hw-7"),sm:"hw-8"}):l.icon},l.name))})})}export{P as B,C as S};
