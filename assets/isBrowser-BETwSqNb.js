function f(r,i){var e=typeof Symbol=="function"&&r[Symbol.iterator];if(!e)return r;var o=e.call(r),n,u=[],t;try{for(;(i===void 0||i-- >0)&&!(n=o.next()).done;)u.push(n.value)}catch(a){t={error:a}}finally{try{n&&!n.done&&(e=o.return)&&e.call(o)}finally{if(t)throw t.error}}return u}var d=function(r){return typeof r=="function"},s=function(r){return typeof r>"u"},c=!!(typeof window<"u"&&window.document&&window.document.createElement);export{f as _,s as a,c as b,d as i};
