(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Cl(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const xe={},fs=[],ln=()=>{},Jd=()=>!1,Ia=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Pl=t=>t.startsWith("onUpdate:"),It=Object.assign,kl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},yy=Object.prototype.hasOwnProperty,ke=(t,e)=>yy.call(t,e),ue=Array.isArray,ds=t=>Ki(t)==="[object Map]",wa=t=>Ki(t)==="[object Set]",bh=t=>Ki(t)==="[object Date]",pe=t=>typeof t=="function",Je=t=>typeof t=="string",_n=t=>typeof t=="symbol",Fe=t=>t!==null&&typeof t=="object",Yd=t=>(Fe(t)||pe(t))&&pe(t.then)&&pe(t.catch),Xd=Object.prototype.toString,Ki=t=>Xd.call(t),vy=t=>Ki(t).slice(8,-1),Zd=t=>Ki(t)==="[object Object]",Vl=t=>Je(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,fi=Cl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Aa=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},Ey=/-\w/g,Ht=Aa(t=>t.replace(Ey,e=>e.slice(1).toUpperCase())),Ty=/\B([A-Z])/g,Kr=Aa(t=>t.replace(Ty,"-$1").toLowerCase()),ba=Aa(t=>t.charAt(0).toUpperCase()+t.slice(1)),_c=Aa(t=>t?`on${ba(t)}`:""),ar=(t,e)=>!Object.is(t,e),ko=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},ep=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},qo=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Sh;const Sa=()=>Sh||(Sh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Nl(t){if(ue(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Je(r)?by(r):Nl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Je(t)||Fe(t))return t}const Iy=/;(?![^(]*\))/g,wy=/:([^]+)/,Ay=/\/\*[^]*?\*\//g;function by(t){const e={};return t.replace(Ay,"").split(Iy).forEach(n=>{if(n){const r=n.split(wy);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Gi(t){let e="";if(Je(t))e=t;else if(ue(t))for(let n=0;n<t.length;n++){const r=Gi(t[n]);r&&(e+=r+" ")}else if(Fe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Sy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ry=Cl(Sy);function tp(t){return!!t||t===""}function Cy(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Ra(t[r],e[r]);return n}function Ra(t,e){if(t===e)return!0;let n=bh(t),r=bh(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=_n(t),r=_n(e),n||r)return t===e;if(n=ue(t),r=ue(e),n||r)return n&&r?Cy(t,e):!1;if(n=Fe(t),r=Fe(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(c&&!l||!c&&l||!Ra(t[o],e[o]))return!1}}return String(t)===String(e)}function Py(t,e){return t.findIndex(n=>Ra(n,e))}const np=t=>!!(t&&t.__v_isRef===!0),we=t=>Je(t)?t:t==null?"":ue(t)||Fe(t)&&(t.toString===Xd||!pe(t.toString))?np(t)?we(t.value):JSON.stringify(t,rp,2):String(t),rp=(t,e)=>np(e)?rp(t,e.value):ds(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[yc(r,i)+" =>"]=s,n),{})}:wa(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>yc(n))}:_n(e)?yc(e):Fe(e)&&!ue(e)&&!Zd(e)?String(e):e,yc=(t,e="")=>{var n;return _n(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let _t;class sp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=_t,!e&&_t&&(this.index=(_t.scopes||(_t.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=_t;try{return _t=this,e()}finally{_t=n}}}on(){++this._on===1&&(this.prevScope=_t,_t=this)}off(){this._on>0&&--this._on===0&&(_t=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function ip(t){return new sp(t)}function op(){return _t}function ky(t,e=!1){_t&&_t.cleanups.push(t)}let Le;const vc=new WeakSet;class ap{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,_t&&_t.active&&_t.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,vc.has(this)&&(vc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||lp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Rh(this),up(this);const e=Le,n=Xt;Le=this,Xt=!0;try{return this.fn()}finally{hp(this),Le=e,Xt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)xl(e);this.deps=this.depsTail=void 0,Rh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?vc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){qc(this)&&this.run()}get dirty(){return qc(this)}}let cp=0,di,pi;function lp(t,e=!1){if(t.flags|=8,e){t.next=pi,pi=t;return}t.next=di,di=t}function Ol(){cp++}function Dl(){if(--cp>0)return;if(pi){let e=pi;for(pi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;di;){let e=di;for(di=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function up(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function hp(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),xl(r),Vy(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function qc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(fp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function fp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ki)||(t.globalVersion=ki,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!qc(t))))return;t.flags|=2;const e=t.dep,n=Le,r=Xt;Le=t,Xt=!0;try{up(t);const s=t.fn(t._value);(e.version===0||ar(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Le=n,Xt=r,hp(t),t.flags&=-3}}function xl(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)xl(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Vy(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Xt=!0;const dp=[];function Vn(){dp.push(Xt),Xt=!1}function Nn(){const t=dp.pop();Xt=t===void 0?!0:t}function Rh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Le;Le=void 0;try{e()}finally{Le=n}}}let ki=0;class Ny{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ml{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Le||!Xt||Le===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Le)n=this.activeLink=new Ny(Le,this),Le.deps?(n.prevDep=Le.depsTail,Le.depsTail.nextDep=n,Le.depsTail=n):Le.deps=Le.depsTail=n,pp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Le.depsTail,n.nextDep=void 0,Le.depsTail.nextDep=n,Le.depsTail=n,Le.deps===n&&(Le.deps=r)}return n}trigger(e){this.version++,ki++,this.notify(e)}notify(e){Ol();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Dl()}}}function pp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)pp(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ho=new WeakMap,Br=Symbol(""),Hc=Symbol(""),Vi=Symbol("");function vt(t,e,n){if(Xt&&Le){let r=Ho.get(t);r||Ho.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Ml),s.map=r,s.key=n),s.track()}}function Rn(t,e,n,r,s,i){const o=Ho.get(t);if(!o){ki++;return}const c=l=>{l&&l.trigger()};if(Ol(),e==="clear")o.forEach(c);else{const l=ue(t),u=l&&Vl(n);if(l&&n==="length"){const f=Number(r);o.forEach((p,m)=>{(m==="length"||m===Vi||!_n(m)&&m>=f)&&c(p)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),u&&c(o.get(Vi)),e){case"add":l?u&&c(o.get("length")):(c(o.get(Br)),ds(t)&&c(o.get(Hc)));break;case"delete":l||(c(o.get(Br)),ds(t)&&c(o.get(Hc)));break;case"set":ds(t)&&c(o.get(Br));break}}Dl()}function Oy(t,e){const n=Ho.get(t);return n&&n.get(e)}function rs(t){const e=Ce(t);return e===t?e:(vt(e,"iterate",Vi),jt(t)?e:e.map(ct))}function Ca(t){return vt(t=Ce(t),"iterate",Vi),t}const Dy={__proto__:null,[Symbol.iterator](){return Ec(this,Symbol.iterator,ct)},concat(...t){return rs(this).concat(...t.map(e=>ue(e)?rs(e):e))},entries(){return Ec(this,"entries",t=>(t[1]=ct(t[1]),t))},every(t,e){return An(this,"every",t,e,void 0,arguments)},filter(t,e){return An(this,"filter",t,e,n=>n.map(ct),arguments)},find(t,e){return An(this,"find",t,e,ct,arguments)},findIndex(t,e){return An(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return An(this,"findLast",t,e,ct,arguments)},findLastIndex(t,e){return An(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return An(this,"forEach",t,e,void 0,arguments)},includes(...t){return Tc(this,"includes",t)},indexOf(...t){return Tc(this,"indexOf",t)},join(t){return rs(this).join(t)},lastIndexOf(...t){return Tc(this,"lastIndexOf",t)},map(t,e){return An(this,"map",t,e,void 0,arguments)},pop(){return ri(this,"pop")},push(...t){return ri(this,"push",t)},reduce(t,...e){return Ch(this,"reduce",t,e)},reduceRight(t,...e){return Ch(this,"reduceRight",t,e)},shift(){return ri(this,"shift")},some(t,e){return An(this,"some",t,e,void 0,arguments)},splice(...t){return ri(this,"splice",t)},toReversed(){return rs(this).toReversed()},toSorted(t){return rs(this).toSorted(t)},toSpliced(...t){return rs(this).toSpliced(...t)},unshift(...t){return ri(this,"unshift",t)},values(){return Ec(this,"values",ct)}};function Ec(t,e,n){const r=Ca(t),s=r[e]();return r!==t&&!jt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const xy=Array.prototype;function An(t,e,n,r,s,i){const o=Ca(t),c=o!==t&&!jt(t),l=o[e];if(l!==xy[e]){const p=l.apply(t,i);return c?ct(p):p}let u=n;o!==t&&(c?u=function(p,m){return n.call(this,ct(p),m,t)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,t)}));const f=l.call(o,u,r);return c&&s?s(f):f}function Ch(t,e,n,r){const s=Ca(t);let i=n;return s!==t&&(jt(t)?n.length>3&&(i=function(o,c,l){return n.call(this,o,c,l,t)}):i=function(o,c,l){return n.call(this,o,ct(c),l,t)}),s[e](i,...r)}function Tc(t,e,n){const r=Ce(t);vt(r,"iterate",Vi);const s=r[e](...n);return(s===-1||s===!1)&&Ul(n[0])?(n[0]=Ce(n[0]),r[e](...n)):s}function ri(t,e,n=[]){Vn(),Ol();const r=Ce(t)[e].apply(t,n);return Dl(),Nn(),r}const My=Cl("__proto__,__v_isRef,__isVue"),gp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(_n));function Ly(t){_n(t)||(t=String(t));const e=Ce(this);return vt(e,"has",t),e.hasOwnProperty(t)}class mp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Ky:Ep:i?vp:yp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ue(e);if(!s){let l;if(o&&(l=Dy[n]))return l;if(n==="hasOwnProperty")return Ly}const c=Reflect.get(e,n,Ke(e)?e:r);return(_n(n)?gp.has(n):My(n))||(s||vt(e,"get",n),i)?c:Ke(c)?o&&Vl(n)?c:c.value:Fe(c)?s?Ip(c):Qi(c):c}}class _p extends mp{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=mr(i);if(!jt(r)&&!mr(r)&&(i=Ce(i),r=Ce(r)),!ue(e)&&Ke(i)&&!Ke(r))return l||(i.value=r),!0}const o=ue(e)&&Vl(n)?Number(n)<e.length:ke(e,n),c=Reflect.set(e,n,r,Ke(e)?e:s);return e===Ce(s)&&(o?ar(r,i)&&Rn(e,"set",n,r):Rn(e,"add",n,r)),c}deleteProperty(e,n){const r=ke(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Rn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!_n(n)||!gp.has(n))&&vt(e,"has",n),r}ownKeys(e){return vt(e,"iterate",ue(e)?"length":Br),Reflect.ownKeys(e)}}class Fy extends mp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Uy=new _p,By=new Fy,$y=new _p(!0);const zc=t=>t,vo=t=>Reflect.getPrototypeOf(t);function jy(t,e,n){return function(...r){const s=this.__v_raw,i=Ce(s),o=ds(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),f=n?zc:e?zo:ct;return!e&&vt(i,"iterate",l?Hc:Br),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:c?[f(p[0]),f(p[1])]:f(p),done:m}},[Symbol.iterator](){return this}}}}function Eo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function qy(t,e){const n={get(s){const i=this.__v_raw,o=Ce(i),c=Ce(s);t||(ar(s,c)&&vt(o,"get",s),vt(o,"get",c));const{has:l}=vo(o),u=e?zc:t?zo:ct;if(l.call(o,s))return u(i.get(s));if(l.call(o,c))return u(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&vt(Ce(s),"iterate",Br),s.size},has(s){const i=this.__v_raw,o=Ce(i),c=Ce(s);return t||(ar(s,c)&&vt(o,"has",s),vt(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=Ce(c),u=e?zc:t?zo:ct;return!t&&vt(l,"iterate",Br),c.forEach((f,p)=>s.call(i,u(f),u(p),o))}};return It(n,t?{add:Eo("add"),set:Eo("set"),delete:Eo("delete"),clear:Eo("clear")}:{add(s){!e&&!jt(s)&&!mr(s)&&(s=Ce(s));const i=Ce(this);return vo(i).has.call(i,s)||(i.add(s),Rn(i,"add",s,s)),this},set(s,i){!e&&!jt(i)&&!mr(i)&&(i=Ce(i));const o=Ce(this),{has:c,get:l}=vo(o);let u=c.call(o,s);u||(s=Ce(s),u=c.call(o,s));const f=l.call(o,s);return o.set(s,i),u?ar(i,f)&&Rn(o,"set",s,i):Rn(o,"add",s,i),this},delete(s){const i=Ce(this),{has:o,get:c}=vo(i);let l=o.call(i,s);l||(s=Ce(s),l=o.call(i,s)),c&&c.call(i,s);const u=i.delete(s);return l&&Rn(i,"delete",s,void 0),u},clear(){const s=Ce(this),i=s.size!==0,o=s.clear();return i&&Rn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=jy(s,t,e)}),n}function Ll(t,e){const n=qy(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ke(n,s)&&s in r?n:r,s,i)}const Hy={get:Ll(!1,!1)},zy={get:Ll(!1,!0)},Wy={get:Ll(!0,!1)};const yp=new WeakMap,vp=new WeakMap,Ep=new WeakMap,Ky=new WeakMap;function Gy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Qy(t){return t.__v_skip||!Object.isExtensible(t)?0:Gy(vy(t))}function Qi(t){return mr(t)?t:Fl(t,!1,Uy,Hy,yp)}function Tp(t){return Fl(t,!1,$y,zy,vp)}function Ip(t){return Fl(t,!0,By,Wy,Ep)}function Fl(t,e,n,r,s){if(!Fe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=Qy(t);if(i===0)return t;const o=s.get(t);if(o)return o;const c=new Proxy(t,i===2?r:n);return s.set(t,c),c}function cr(t){return mr(t)?cr(t.__v_raw):!!(t&&t.__v_isReactive)}function mr(t){return!!(t&&t.__v_isReadonly)}function jt(t){return!!(t&&t.__v_isShallow)}function Ul(t){return t?!!t.__v_raw:!1}function Ce(t){const e=t&&t.__v_raw;return e?Ce(e):t}function Bl(t){return!ke(t,"__v_skip")&&Object.isExtensible(t)&&ep(t,"__v_skip",!0),t}const ct=t=>Fe(t)?Qi(t):t,zo=t=>Fe(t)?Ip(t):t;function Ke(t){return t?t.__v_isRef===!0:!1}function _e(t){return wp(t,!1)}function Jy(t){return wp(t,!0)}function wp(t,e){return Ke(t)?t:new Yy(t,e)}class Yy{constructor(e,n){this.dep=new Ml,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ce(e),this._value=n?e:ct(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||jt(e)||mr(e);e=r?e:Ce(e),ar(e,n)&&(this._rawValue=e,this._value=r?e:ct(e),this.dep.trigger())}}function ze(t){return Ke(t)?t.value:t}const Xy={get:(t,e,n)=>e==="__v_raw"?t:ze(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ke(s)&&!Ke(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Ap(t){return cr(t)?t:new Proxy(t,Xy)}function Zy(t){const e=ue(t)?new Array(t.length):{};for(const n in t)e[n]=tv(t,n);return e}class ev{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Oy(Ce(this._object),this._key)}}function tv(t,e,n){const r=t[e];return Ke(r)?r:new ev(t,e,n)}class nv{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Ml(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ki-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Le!==this)return lp(this,!0),!0}get value(){const e=this.dep.track();return fp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function rv(t,e,n=!1){let r,s;return pe(t)?r=t:(r=t.get,s=t.set),new nv(r,s,n)}const To={},Wo=new WeakMap;let xr;function sv(t,e=!1,n=xr){if(n){let r=Wo.get(n);r||Wo.set(n,r=[]),r.push(t)}}function iv(t,e,n=xe){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,u=K=>s?K:jt(K)||s===!1||s===0?Cn(K,1):Cn(K);let f,p,m,y,S=!1,R=!1;if(Ke(t)?(p=()=>t.value,S=jt(t)):cr(t)?(p=()=>u(t),S=!0):ue(t)?(R=!0,S=t.some(K=>cr(K)||jt(K)),p=()=>t.map(K=>{if(Ke(K))return K.value;if(cr(K))return u(K);if(pe(K))return l?l(K,2):K()})):pe(t)?e?p=l?()=>l(t,2):t:p=()=>{if(m){Vn();try{m()}finally{Nn()}}const K=xr;xr=f;try{return l?l(t,3,[y]):t(y)}finally{xr=K}}:p=ln,e&&s){const K=p,re=s===!0?1/0:s;p=()=>Cn(K(),re)}const O=op(),B=()=>{f.stop(),O&&O.active&&kl(O.effects,f)};if(i&&e){const K=e;e=(...re)=>{K(...re),B()}}let x=R?new Array(t.length).fill(To):To;const z=K=>{if(!(!(f.flags&1)||!f.dirty&&!K))if(e){const re=f.run();if(s||S||(R?re.some((ye,w)=>ar(ye,x[w])):ar(re,x))){m&&m();const ye=xr;xr=f;try{const w=[re,x===To?void 0:R&&x[0]===To?[]:x,y];x=re,l?l(e,3,w):e(...w)}finally{xr=ye}}}else f.run()};return c&&c(z),f=new ap(p),f.scheduler=o?()=>o(z,!1):z,y=K=>sv(K,!1,f),m=f.onStop=()=>{const K=Wo.get(f);if(K){if(l)l(K,4);else for(const re of K)re();Wo.delete(f)}},e?r?z(!0):x=f.run():o?o(z.bind(null,!0),!0):f.run(),B.pause=f.pause.bind(f),B.resume=f.resume.bind(f),B.stop=B,B}function Cn(t,e=1/0,n){if(e<=0||!Fe(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Ke(t))Cn(t.value,e,n);else if(ue(t))for(let r=0;r<t.length;r++)Cn(t[r],e,n);else if(wa(t)||ds(t))t.forEach(r=>{Cn(r,e,n)});else if(Zd(t)){for(const r in t)Cn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Cn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ji(t,e,n,r){try{return r?t(...r):t()}catch(s){Pa(s,e,n)}}function yn(t,e,n,r){if(pe(t)){const s=Ji(t,e,n,r);return s&&Yd(s)&&s.catch(i=>{Pa(i,e,n)}),s}if(ue(t)){const s=[];for(let i=0;i<t.length;i++)s.push(yn(t[i],e,n,r));return s}}function Pa(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||xe;if(e){let c=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,l,u)===!1)return}c=c.parent}if(i){Vn(),Ji(i,null,10,[t,l,u]),Nn();return}}ov(t,n,s,r,o)}function ov(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const St=[];let on=-1;const ps=[];let Xn=null,is=0;const bp=Promise.resolve();let Ko=null;function ka(t){const e=Ko||bp;return t?e.then(this?t.bind(this):t):e}function av(t){let e=on+1,n=St.length;for(;e<n;){const r=e+n>>>1,s=St[r],i=Ni(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function $l(t){if(!(t.flags&1)){const e=Ni(t),n=St[St.length-1];!n||!(t.flags&2)&&e>=Ni(n)?St.push(t):St.splice(av(e),0,t),t.flags|=1,Sp()}}function Sp(){Ko||(Ko=bp.then(Cp))}function cv(t){ue(t)?ps.push(...t):Xn&&t.id===-1?Xn.splice(is+1,0,t):t.flags&1||(ps.push(t),t.flags|=1),Sp()}function Ph(t,e,n=on+1){for(;n<St.length;n++){const r=St[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;St.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Rp(t){if(ps.length){const e=[...new Set(ps)].sort((n,r)=>Ni(n)-Ni(r));if(ps.length=0,Xn){Xn.push(...e);return}for(Xn=e,is=0;is<Xn.length;is++){const n=Xn[is];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Xn=null,is=0}}const Ni=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Cp(t){try{for(on=0;on<St.length;on++){const e=St[on];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ji(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;on<St.length;on++){const e=St[on];e&&(e.flags&=-2)}on=-1,St.length=0,Rp(),Ko=null,(St.length||ps.length)&&Cp()}}let Mt=null,Pp=null;function Go(t){const e=Mt;return Mt=t,Pp=t&&t.type.__scopeId||null,e}function vn(t,e=Mt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Yo(-1);const i=Go(e);let o;try{o=t(...s)}finally{Go(i),r._d&&Yo(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Zn(t,e){if(Mt===null)return t;const n=Da(Mt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=xe]=e[s];i&&(pe(i)&&(i={mounted:i,updated:i}),i.deep&&Cn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function Or(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(Vn(),yn(l,n,8,[t.el,c,t,e]),Nn())}}const lv=Symbol("_vte"),uv=t=>t.__isTeleport,hv=Symbol("_leaveCb");function jl(t,e){t.shapeFlag&6&&t.component?(t.transition=e,jl(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function ht(t,e){return pe(t)?It({name:t.name},e,{setup:t}):t}function kp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const Qo=new WeakMap;function gi(t,e,n,r,s=!1){if(ue(t)){t.forEach((S,R)=>gi(S,e&&(ue(e)?e[R]:e),n,r,s));return}if(mi(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&gi(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Da(r.component):r.el,o=s?null:i,{i:c,r:l}=t,u=e&&e.r,f=c.refs===xe?c.refs={}:c.refs,p=c.setupState,m=Ce(p),y=p===xe?Jd:S=>ke(m,S);if(u!=null&&u!==l){if(kh(e),Je(u))f[u]=null,y(u)&&(p[u]=null);else if(Ke(u)){u.value=null;const S=e;S.k&&(f[S.k]=null)}}if(pe(l))Ji(l,c,12,[o,f]);else{const S=Je(l),R=Ke(l);if(S||R){const O=()=>{if(t.f){const B=S?y(l)?p[l]:f[l]:l.value;if(s)ue(B)&&kl(B,i);else if(ue(B))B.includes(i)||B.push(i);else if(S)f[l]=[i],y(l)&&(p[l]=f[l]);else{const x=[i];l.value=x,t.k&&(f[t.k]=x)}}else S?(f[l]=o,y(l)&&(p[l]=o)):R&&(l.value=o,t.k&&(f[t.k]=o))};if(o){const B=()=>{O(),Qo.delete(t)};B.id=-1,Qo.set(t,B),xt(B,n)}else kh(t),O()}}}function kh(t){const e=Qo.get(t);e&&(e.flags|=8,Qo.delete(t))}Sa().requestIdleCallback;Sa().cancelIdleCallback;const mi=t=>!!t.type.__asyncLoader,Vp=t=>t.type.__isKeepAlive;function fv(t,e){Np(t,"a",e)}function dv(t,e){Np(t,"da",e)}function Np(t,e,n=Tt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Va(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Vp(s.parent.vnode)&&pv(r,e,n,s),s=s.parent}}function pv(t,e,n,r){const s=Va(e,t,r,!0);Op(()=>{kl(r[e],s)},n)}function Va(t,e,n=Tt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Vn();const c=Yi(n),l=yn(e,n,t,o);return c(),Nn(),l});return r?s.unshift(i):s.push(i),i}}const Ln=t=>(e,n=Tt)=>{(!xi||t==="sp")&&Va(t,(...r)=>e(...r),n)},gv=Ln("bm"),Fn=Ln("m"),mv=Ln("bu"),_v=Ln("u"),yv=Ln("bum"),Op=Ln("um"),vv=Ln("sp"),Ev=Ln("rtg"),Tv=Ln("rtc");function Iv(t,e=Tt){Va("ec",t,e)}const wv="components";function Ar(t,e){return bv(wv,t,!0,e)||t}const Av=Symbol.for("v-ndc");function bv(t,e,n=!0,r=!1){const s=Mt||Tt;if(s){const i=s.type;{const c=dE(i,!1);if(c&&(c===e||c===Ht(e)||c===ba(Ht(e))))return i}const o=Vh(s[t]||i[t],e)||Vh(s.appContext[t],e);return!o&&r?i:o}}function Vh(t,e){return t&&(t[e]||t[Ht(e)]||t[ba(Ht(e))])}function Rt(t,e,n,r){let s;const i=n,o=ue(t);if(o||Je(t)){const c=o&&cr(t);let l=!1,u=!1;c&&(l=!jt(t),u=mr(t),t=Ca(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(l?u?zo(ct(t[f])):ct(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(Fe(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,u=c.length;l<u;l++){const f=c[l];s[l]=e(t[f],f,l,i)}}else s=[];return s}const Wc=t=>t?eg(t)?Da(t):Wc(t.parent):null,_i=It(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Wc(t.parent),$root:t=>Wc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>xp(t),$forceUpdate:t=>t.f||(t.f=()=>{$l(t.update)}),$nextTick:t=>t.n||(t.n=ka.bind(t.proxy)),$watch:t=>Kv.bind(t)}),Ic=(t,e)=>t!==xe&&!t.__isScriptSetup&&ke(t,e),Sv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let u;if(e[0]!=="$"){const y=o[e];if(y!==void 0)switch(y){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Ic(r,e))return o[e]=1,r[e];if(s!==xe&&ke(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&ke(u,e))return o[e]=3,i[e];if(n!==xe&&ke(n,e))return o[e]=4,n[e];Kc&&(o[e]=0)}}const f=_i[e];let p,m;if(f)return e==="$attrs"&&vt(t.attrs,"get",""),f(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==xe&&ke(n,e))return o[e]=4,n[e];if(m=l.config.globalProperties,ke(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Ic(s,e)?(s[e]=n,!0):r!==xe&&ke(r,e)?(r[e]=n,!0):ke(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i,type:o}},c){let l,u;return!!(n[c]||t!==xe&&c[0]!=="$"&&ke(t,c)||Ic(e,c)||(l=i[0])&&ke(l,c)||ke(r,c)||ke(_i,c)||ke(s.config.globalProperties,c)||(u=o.__cssModules)&&u[c])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ke(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Nh(t){return ue(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Kc=!0;function Rv(t){const e=xp(t),n=t.proxy,r=t.ctx;Kc=!1,e.beforeCreate&&Oh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:y,updated:S,activated:R,deactivated:O,beforeDestroy:B,beforeUnmount:x,destroyed:z,unmounted:K,render:re,renderTracked:ye,renderTriggered:w,errorCaptured:_,serverPrefetch:v,expose:b,inheritAttrs:A,components:C,directives:T,filters:qe}=e;if(u&&Cv(u,r,null),o)for(const de in o){const Ae=o[de];pe(Ae)&&(r[de]=Ae.bind(n))}if(s){const de=s.call(n,n);Fe(de)&&(t.data=Qi(de))}if(Kc=!0,i)for(const de in i){const Ae=i[de],Ct=pe(Ae)?Ae.bind(n,n):pe(Ae.get)?Ae.get.bind(n,n):ln,tn=!pe(Ae)&&pe(Ae.set)?Ae.set.bind(n):ln,Vt=kt({get:Ct,set:tn});Object.defineProperty(r,de,{enumerable:!0,configurable:!0,get:()=>Vt.value,set:it=>Vt.value=it})}if(c)for(const de in c)Dp(c[de],r,n,de);if(l){const de=pe(l)?l.call(n):l;Reflect.ownKeys(de).forEach(Ae=>{yi(Ae,de[Ae])})}f&&Oh(f,t,"c");function Me(de,Ae){ue(Ae)?Ae.forEach(Ct=>de(Ct.bind(n))):Ae&&de(Ae.bind(n))}if(Me(gv,p),Me(Fn,m),Me(mv,y),Me(_v,S),Me(fv,R),Me(dv,O),Me(Iv,_),Me(Tv,ye),Me(Ev,w),Me(yv,x),Me(Op,K),Me(vv,v),ue(b))if(b.length){const de=t.exposed||(t.exposed={});b.forEach(Ae=>{Object.defineProperty(de,Ae,{get:()=>n[Ae],set:Ct=>n[Ae]=Ct,enumerable:!0})})}else t.exposed||(t.exposed={});re&&t.render===ln&&(t.render=re),A!=null&&(t.inheritAttrs=A),C&&(t.components=C),T&&(t.directives=T),v&&kp(t)}function Cv(t,e,n=ln){ue(t)&&(t=Gc(t));for(const r in t){const s=t[r];let i;Fe(s)?"default"in s?i=qt(s.from||r,s.default,!0):i=qt(s.from||r):i=qt(s),Ke(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Oh(t,e,n){yn(ue(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Dp(t,e,n,r){let s=r.includes(".")?Gp(n,r):()=>n[r];if(Je(t)){const i=e[t];pe(i)&&vi(s,i)}else if(pe(t))vi(s,t.bind(n));else if(Fe(t))if(ue(t))t.forEach(i=>Dp(i,e,n,r));else{const i=pe(t.handler)?t.handler.bind(n):e[t.handler];pe(i)&&vi(s,i,t)}}function xp(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>Jo(l,u,o,!0)),Jo(l,e,o)),Fe(e)&&i.set(e,l),l}function Jo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Jo(t,i,n,!0),s&&s.forEach(o=>Jo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=Pv[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const Pv={data:Dh,props:xh,emits:xh,methods:oi,computed:oi,beforeCreate:bt,created:bt,beforeMount:bt,mounted:bt,beforeUpdate:bt,updated:bt,beforeDestroy:bt,beforeUnmount:bt,destroyed:bt,unmounted:bt,activated:bt,deactivated:bt,errorCaptured:bt,serverPrefetch:bt,components:oi,directives:oi,watch:Vv,provide:Dh,inject:kv};function Dh(t,e){return e?t?function(){return It(pe(t)?t.call(this,this):t,pe(e)?e.call(this,this):e)}:e:t}function kv(t,e){return oi(Gc(t),Gc(e))}function Gc(t){if(ue(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function bt(t,e){return t?[...new Set([].concat(t,e))]:e}function oi(t,e){return t?It(Object.create(null),t,e):e}function xh(t,e){return t?ue(t)&&ue(e)?[...new Set([...t,...e])]:It(Object.create(null),Nh(t),Nh(e??{})):e}function Vv(t,e){if(!t)return e;if(!e)return t;const n=It(Object.create(null),t);for(const r in e)n[r]=bt(t[r],e[r]);return n}function Mp(){return{app:null,config:{isNativeTag:Jd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Nv=0;function Ov(t,e){return function(r,s=null){pe(r)||(r=It({},r)),s!=null&&!Fe(s)&&(s=null);const i=Mp(),o=new WeakSet,c=[];let l=!1;const u=i.app={_uid:Nv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:gE,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&pe(f.install)?(o.add(f),f.install(u,...p)):pe(f)&&(o.add(f),f(u,...p))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,p){return p?(i.components[f]=p,u):i.components[f]},directive(f,p){return p?(i.directives[f]=p,u):i.directives[f]},mount(f,p,m){if(!l){const y=u._ceVNode||ge(r,s);return y.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(y,f,m),l=!0,u._container=f,f.__vue_app__=u,Da(y.component)}},onUnmount(f){c.push(f)},unmount(){l&&(yn(c,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,p){return i.provides[f]=p,u},runWithContext(f){const p=$r;$r=u;try{return f()}finally{$r=p}}};return u}}let $r=null;function yi(t,e){if(Tt){let n=Tt.provides;const r=Tt.parent&&Tt.parent.provides;r===n&&(n=Tt.provides=Object.create(r)),n[t]=e}}function qt(t,e,n=!1){const r=Zp();if(r||$r){let s=$r?$r._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&pe(e)?e.call(r&&r.proxy):e}}function Dv(){return!!(Zp()||$r)}const Lp={},Fp=()=>Object.create(Lp),Up=t=>Object.getPrototypeOf(t)===Lp;function xv(t,e,n,r=!1){const s={},i=Fp();t.propsDefaults=Object.create(null),Bp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Tp(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Mv(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Ce(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let m=f[p];if(Na(t.emitsOptions,m))continue;const y=e[m];if(l)if(ke(i,m))y!==i[m]&&(i[m]=y,u=!0);else{const S=Ht(m);s[S]=Qc(l,c,S,y,t,!1)}else y!==i[m]&&(i[m]=y,u=!0)}}}else{Bp(t,e,s,i)&&(u=!0);let f;for(const p in c)(!e||!ke(e,p)&&((f=Kr(p))===p||!ke(e,f)))&&(l?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=Qc(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!ke(e,p))&&(delete i[p],u=!0)}u&&Rn(t.attrs,"set","")}function Bp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(fi(l))continue;const u=e[l];let f;s&&ke(s,f=Ht(l))?!i||!i.includes(f)?n[f]=u:(c||(c={}))[f]=u:Na(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=Ce(n),u=c||xe;for(let f=0;f<i.length;f++){const p=i[f];n[p]=Qc(s,l,p,u[p],t,!ke(u,p))}}return o}function Qc(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=ke(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&pe(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=Yi(s);r=u[n]=l.call(null,e),f()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Kr(n))&&(r=!0))}return r}const Lv=new WeakMap;function $p(t,e,n=!1){const r=n?Lv:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!pe(t)){const f=p=>{l=!0;const[m,y]=$p(p,e,!0);It(o,m),y&&c.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return Fe(t)&&r.set(t,fs),fs;if(ue(i))for(let f=0;f<i.length;f++){const p=Ht(i[f]);Mh(p)&&(o[p]=xe)}else if(i)for(const f in i){const p=Ht(f);if(Mh(p)){const m=i[f],y=o[p]=ue(m)||pe(m)?{type:m}:It({},m),S=y.type;let R=!1,O=!0;if(ue(S))for(let B=0;B<S.length;++B){const x=S[B],z=pe(x)&&x.name;if(z==="Boolean"){R=!0;break}else z==="String"&&(O=!1)}else R=pe(S)&&S.name==="Boolean";y[0]=R,y[1]=O,(R||ke(y,"default"))&&c.push(p)}}const u=[o,c];return Fe(t)&&r.set(t,u),u}function Mh(t){return t[0]!=="$"&&!fi(t)}const ql=t=>t==="_"||t==="_ctx"||t==="$stable",Hl=t=>ue(t)?t.map(cn):[cn(t)],Fv=(t,e,n)=>{if(e._n)return e;const r=vn((...s)=>Hl(e(...s)),n);return r._c=!1,r},jp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(ql(s))continue;const i=t[s];if(pe(i))e[s]=Fv(s,i,r);else if(i!=null){const o=Hl(i);e[s]=()=>o}}},qp=(t,e)=>{const n=Hl(e);t.slots.default=()=>n},Hp=(t,e,n)=>{for(const r in e)(n||!ql(r))&&(t[r]=e[r])},Uv=(t,e,n)=>{const r=t.slots=Fp();if(t.vnode.shapeFlag&32){const s=e._;s?(Hp(r,e,n),n&&ep(r,"_",s,!0)):jp(e,r)}else e&&qp(t,e)},Bv=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=xe;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:Hp(s,e,n):(i=!e.$stable,jp(e,s)),o=e}else e&&(qp(t,e),o={default:1});if(i)for(const c in s)!ql(c)&&o[c]==null&&delete s[c]},xt=tE;function $v(t){return jv(t)}function jv(t,e){const n=Sa();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:u,setElementText:f,parentNode:p,nextSibling:m,setScopeId:y=ln,insertStaticContent:S}=t,R=(E,I,P,L=null,U=null,D=null,G=void 0,H=null,j=!!I.dynamicChildren)=>{if(E===I)return;E&&!si(E,I)&&(L=M(E),it(E,U,D,!0),E=null),I.patchFlag===-2&&(j=!1,I.dynamicChildren=null);const{type:q,ref:ie,shapeFlag:J}=I;switch(q){case Oa:O(E,I,P,L);break;case _r:B(E,I,P,L);break;case Ac:E==null&&x(I,P,L,G);break;case Re:C(E,I,P,L,U,D,G,H,j);break;default:J&1?re(E,I,P,L,U,D,G,H,j):J&6?T(E,I,P,L,U,D,G,H,j):(J&64||J&128)&&q.process(E,I,P,L,U,D,G,H,j,Z)}ie!=null&&U?gi(ie,E&&E.ref,D,I||E,!I):ie==null&&E&&E.ref!=null&&gi(E.ref,null,D,E,!0)},O=(E,I,P,L)=>{if(E==null)r(I.el=c(I.children),P,L);else{const U=I.el=E.el;I.children!==E.children&&u(U,I.children)}},B=(E,I,P,L)=>{E==null?r(I.el=l(I.children||""),P,L):I.el=E.el},x=(E,I,P,L)=>{[E.el,E.anchor]=S(E.children,I,P,L,E.el,E.anchor)},z=({el:E,anchor:I},P,L)=>{let U;for(;E&&E!==I;)U=m(E),r(E,P,L),E=U;r(I,P,L)},K=({el:E,anchor:I})=>{let P;for(;E&&E!==I;)P=m(E),s(E),E=P;s(I)},re=(E,I,P,L,U,D,G,H,j)=>{I.type==="svg"?G="svg":I.type==="math"&&(G="mathml"),E==null?ye(I,P,L,U,D,G,H,j):v(E,I,U,D,G,H,j)},ye=(E,I,P,L,U,D,G,H)=>{let j,q;const{props:ie,shapeFlag:J,transition:ne,dirs:ae}=E;if(j=E.el=o(E.type,D,ie&&ie.is,ie),J&8?f(j,E.children):J&16&&_(E.children,j,null,L,U,wc(E,D),G,H),ae&&Or(E,null,L,"created"),w(j,E,E.scopeId,G,L),ie){for(const Oe in ie)Oe!=="value"&&!fi(Oe)&&i(j,Oe,null,ie[Oe],D,L);"value"in ie&&i(j,"value",null,ie.value,D),(q=ie.onVnodeBeforeMount)&&sn(q,L,E)}ae&&Or(E,null,L,"beforeMount");const ve=qv(U,ne);ve&&ne.beforeEnter(j),r(j,I,P),((q=ie&&ie.onVnodeMounted)||ve||ae)&&xt(()=>{q&&sn(q,L,E),ve&&ne.enter(j),ae&&Or(E,null,L,"mounted")},U)},w=(E,I,P,L,U)=>{if(P&&y(E,P),L)for(let D=0;D<L.length;D++)y(E,L[D]);if(U){let D=U.subTree;if(I===D||Jp(D.type)&&(D.ssContent===I||D.ssFallback===I)){const G=U.vnode;w(E,G,G.scopeId,G.slotScopeIds,U.parent)}}},_=(E,I,P,L,U,D,G,H,j=0)=>{for(let q=j;q<E.length;q++){const ie=E[q]=H?er(E[q]):cn(E[q]);R(null,ie,I,P,L,U,D,G,H)}},v=(E,I,P,L,U,D,G)=>{const H=I.el=E.el;let{patchFlag:j,dynamicChildren:q,dirs:ie}=I;j|=E.patchFlag&16;const J=E.props||xe,ne=I.props||xe;let ae;if(P&&Dr(P,!1),(ae=ne.onVnodeBeforeUpdate)&&sn(ae,P,I,E),ie&&Or(I,E,P,"beforeUpdate"),P&&Dr(P,!0),(J.innerHTML&&ne.innerHTML==null||J.textContent&&ne.textContent==null)&&f(H,""),q?b(E.dynamicChildren,q,H,P,L,wc(I,U),D):G||Ae(E,I,H,null,P,L,wc(I,U),D,!1),j>0){if(j&16)A(H,J,ne,P,U);else if(j&2&&J.class!==ne.class&&i(H,"class",null,ne.class,U),j&4&&i(H,"style",J.style,ne.style,U),j&8){const ve=I.dynamicProps;for(let Oe=0;Oe<ve.length;Oe++){const Se=ve[Oe],pt=J[Se],gt=ne[Se];(gt!==pt||Se==="value")&&i(H,Se,pt,gt,U,P)}}j&1&&E.children!==I.children&&f(H,I.children)}else!G&&q==null&&A(H,J,ne,P,U);((ae=ne.onVnodeUpdated)||ie)&&xt(()=>{ae&&sn(ae,P,I,E),ie&&Or(I,E,P,"updated")},L)},b=(E,I,P,L,U,D,G)=>{for(let H=0;H<I.length;H++){const j=E[H],q=I[H],ie=j.el&&(j.type===Re||!si(j,q)||j.shapeFlag&198)?p(j.el):P;R(j,q,ie,null,L,U,D,G,!0)}},A=(E,I,P,L,U)=>{if(I!==P){if(I!==xe)for(const D in I)!fi(D)&&!(D in P)&&i(E,D,I[D],null,U,L);for(const D in P){if(fi(D))continue;const G=P[D],H=I[D];G!==H&&D!=="value"&&i(E,D,H,G,U,L)}"value"in P&&i(E,"value",I.value,P.value,U)}},C=(E,I,P,L,U,D,G,H,j)=>{const q=I.el=E?E.el:c(""),ie=I.anchor=E?E.anchor:c("");let{patchFlag:J,dynamicChildren:ne,slotScopeIds:ae}=I;ae&&(H=H?H.concat(ae):ae),E==null?(r(q,P,L),r(ie,P,L),_(I.children||[],P,ie,U,D,G,H,j)):J>0&&J&64&&ne&&E.dynamicChildren?(b(E.dynamicChildren,ne,P,U,D,G,H),(I.key!=null||U&&I===U.subTree)&&zp(E,I,!0)):Ae(E,I,P,ie,U,D,G,H,j)},T=(E,I,P,L,U,D,G,H,j)=>{I.slotScopeIds=H,E==null?I.shapeFlag&512?U.ctx.activate(I,P,L,G,j):qe(I,P,L,U,D,G,j):ft(E,I,j)},qe=(E,I,P,L,U,D,G)=>{const H=E.component=cE(E,L,U);if(Vp(E)&&(H.ctx.renderer=Z),lE(H,!1,G),H.asyncDep){if(U&&U.registerDep(H,Me,G),!E.el){const j=H.subTree=ge(_r);B(null,j,I,P),E.placeholder=j.el}}else Me(H,E,I,P,U,D,G)},ft=(E,I,P)=>{const L=I.component=E.component;if(Zv(E,I,P))if(L.asyncDep&&!L.asyncResolved){de(L,I,P);return}else L.next=I,L.update();else I.el=E.el,L.vnode=I},Me=(E,I,P,L,U,D,G)=>{const H=()=>{if(E.isMounted){let{next:J,bu:ne,u:ae,parent:ve,vnode:Oe}=E;{const Ot=Wp(E);if(Ot){J&&(J.el=Oe.el,de(E,J,G)),Ot.asyncDep.then(()=>{E.isUnmounted||H()});return}}let Se=J,pt;Dr(E,!1),J?(J.el=Oe.el,de(E,J,G)):J=Oe,ne&&ko(ne),(pt=J.props&&J.props.onVnodeBeforeUpdate)&&sn(pt,ve,J,Oe),Dr(E,!0);const gt=Fh(E),Nt=E.subTree;E.subTree=gt,R(Nt,gt,p(Nt.el),M(Nt),E,U,D),J.el=gt.el,Se===null&&eE(E,gt.el),ae&&xt(ae,U),(pt=J.props&&J.props.onVnodeUpdated)&&xt(()=>sn(pt,ve,J,Oe),U)}else{let J;const{el:ne,props:ae}=I,{bm:ve,m:Oe,parent:Se,root:pt,type:gt}=E,Nt=mi(I);Dr(E,!1),ve&&ko(ve),!Nt&&(J=ae&&ae.onVnodeBeforeMount)&&sn(J,Se,I),Dr(E,!0);{pt.ce&&pt.ce._def.shadowRoot!==!1&&pt.ce._injectChildStyle(gt);const Ot=E.subTree=Fh(E);R(null,Ot,P,L,E,U,D),I.el=Ot.el}if(Oe&&xt(Oe,U),!Nt&&(J=ae&&ae.onVnodeMounted)){const Ot=I;xt(()=>sn(J,Se,Ot),U)}(I.shapeFlag&256||Se&&mi(Se.vnode)&&Se.vnode.shapeFlag&256)&&E.a&&xt(E.a,U),E.isMounted=!0,I=P=L=null}};E.scope.on();const j=E.effect=new ap(H);E.scope.off();const q=E.update=j.run.bind(j),ie=E.job=j.runIfDirty.bind(j);ie.i=E,ie.id=E.uid,j.scheduler=()=>$l(ie),Dr(E,!0),q()},de=(E,I,P)=>{I.component=E;const L=E.vnode.props;E.vnode=I,E.next=null,Mv(E,I.props,L,P),Bv(E,I.children,P),Vn(),Ph(E),Nn()},Ae=(E,I,P,L,U,D,G,H,j=!1)=>{const q=E&&E.children,ie=E?E.shapeFlag:0,J=I.children,{patchFlag:ne,shapeFlag:ae}=I;if(ne>0){if(ne&128){tn(q,J,P,L,U,D,G,H,j);return}else if(ne&256){Ct(q,J,P,L,U,D,G,H,j);return}}ae&8?(ie&16&&dt(q,U,D),J!==q&&f(P,J)):ie&16?ae&16?tn(q,J,P,L,U,D,G,H,j):dt(q,U,D,!0):(ie&8&&f(P,""),ae&16&&_(J,P,L,U,D,G,H,j))},Ct=(E,I,P,L,U,D,G,H,j)=>{E=E||fs,I=I||fs;const q=E.length,ie=I.length,J=Math.min(q,ie);let ne;for(ne=0;ne<J;ne++){const ae=I[ne]=j?er(I[ne]):cn(I[ne]);R(E[ne],ae,P,null,U,D,G,H,j)}q>ie?dt(E,U,D,!0,!1,J):_(I,P,L,U,D,G,H,j,J)},tn=(E,I,P,L,U,D,G,H,j)=>{let q=0;const ie=I.length;let J=E.length-1,ne=ie-1;for(;q<=J&&q<=ne;){const ae=E[q],ve=I[q]=j?er(I[q]):cn(I[q]);if(si(ae,ve))R(ae,ve,P,null,U,D,G,H,j);else break;q++}for(;q<=J&&q<=ne;){const ae=E[J],ve=I[ne]=j?er(I[ne]):cn(I[ne]);if(si(ae,ve))R(ae,ve,P,null,U,D,G,H,j);else break;J--,ne--}if(q>J){if(q<=ne){const ae=ne+1,ve=ae<ie?I[ae].el:L;for(;q<=ne;)R(null,I[q]=j?er(I[q]):cn(I[q]),P,ve,U,D,G,H,j),q++}}else if(q>ne)for(;q<=J;)it(E[q],U,D,!0),q++;else{const ae=q,ve=q,Oe=new Map;for(q=ve;q<=ne;q++){const ot=I[q]=j?er(I[q]):cn(I[q]);ot.key!=null&&Oe.set(ot.key,q)}let Se,pt=0;const gt=ne-ve+1;let Nt=!1,Ot=0;const Wt=new Array(gt);for(q=0;q<gt;q++)Wt[q]=0;for(q=ae;q<=J;q++){const ot=E[q];if(pt>=gt){it(ot,U,D,!0);continue}let et;if(ot.key!=null)et=Oe.get(ot.key);else for(Se=ve;Se<=ne;Se++)if(Wt[Se-ve]===0&&si(ot,I[Se])){et=Se;break}et===void 0?it(ot,U,D,!0):(Wt[et-ve]=q+1,et>=Ot?Ot=et:Nt=!0,R(ot,I[et],P,null,U,D,G,H,j),pt++)}const Zr=Nt?Hv(Wt):fs;for(Se=Zr.length-1,q=gt-1;q>=0;q--){const ot=ve+q,et=I[ot],js=I[ot+1],Cr=ot+1<ie?js.el||js.placeholder:L;Wt[q]===0?R(null,et,P,Cr,U,D,G,H,j):Nt&&(Se<0||q!==Zr[Se]?Vt(et,P,Cr,2):Se--)}}},Vt=(E,I,P,L,U=null)=>{const{el:D,type:G,transition:H,children:j,shapeFlag:q}=E;if(q&6){Vt(E.component.subTree,I,P,L);return}if(q&128){E.suspense.move(I,P,L);return}if(q&64){G.move(E,I,P,Z);return}if(G===Re){r(D,I,P);for(let J=0;J<j.length;J++)Vt(j[J],I,P,L);r(E.anchor,I,P);return}if(G===Ac){z(E,I,P);return}if(L!==2&&q&1&&H)if(L===0)H.beforeEnter(D),r(D,I,P),xt(()=>H.enter(D),U);else{const{leave:J,delayLeave:ne,afterLeave:ae}=H,ve=()=>{E.ctx.isUnmounted?s(D):r(D,I,P)},Oe=()=>{D._isLeaving&&D[hv](!0),J(D,()=>{ve(),ae&&ae()})};ne?ne(D,ve,Oe):Oe()}else r(D,I,P)},it=(E,I,P,L=!1,U=!1)=>{const{type:D,props:G,ref:H,children:j,dynamicChildren:q,shapeFlag:ie,patchFlag:J,dirs:ne,cacheIndex:ae}=E;if(J===-2&&(U=!1),H!=null&&(Vn(),gi(H,null,P,E,!0),Nn()),ae!=null&&(I.renderCache[ae]=void 0),ie&256){I.ctx.deactivate(E);return}const ve=ie&1&&ne,Oe=!mi(E);let Se;if(Oe&&(Se=G&&G.onVnodeBeforeUnmount)&&sn(Se,I,E),ie&6)jn(E.component,P,L);else{if(ie&128){E.suspense.unmount(P,L);return}ve&&Or(E,null,I,"beforeUnmount"),ie&64?E.type.remove(E,I,P,Z,L):q&&!q.hasOnce&&(D!==Re||J>0&&J&64)?dt(q,I,P,!1,!0):(D===Re&&J&384||!U&&ie&16)&&dt(j,I,P),L&&wn(E)}(Oe&&(Se=G&&G.onVnodeUnmounted)||ve)&&xt(()=>{Se&&sn(Se,I,E),ve&&Or(E,null,I,"unmounted")},P)},wn=E=>{const{type:I,el:P,anchor:L,transition:U}=E;if(I===Re){zt(P,L);return}if(I===Ac){K(E);return}const D=()=>{s(P),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(E.shapeFlag&1&&U&&!U.persisted){const{leave:G,delayLeave:H}=U,j=()=>G(P,D);H?H(E.el,D,j):j()}else D()},zt=(E,I)=>{let P;for(;E!==I;)P=m(E),s(E),E=P;s(I)},jn=(E,I,P)=>{const{bum:L,scope:U,job:D,subTree:G,um:H,m:j,a:q}=E;Lh(j),Lh(q),L&&ko(L),U.stop(),D&&(D.flags|=8,it(G,E,I,P)),H&&xt(H,I),xt(()=>{E.isUnmounted=!0},I)},dt=(E,I,P,L=!1,U=!1,D=0)=>{for(let G=D;G<E.length;G++)it(E[G],I,P,L,U)},M=E=>{if(E.shapeFlag&6)return M(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const I=m(E.anchor||E.el),P=I&&I[lv];return P?m(P):I};let Y=!1;const Q=(E,I,P)=>{E==null?I._vnode&&it(I._vnode,null,null,!0):R(I._vnode||null,E,I,null,null,null,P),I._vnode=E,Y||(Y=!0,Ph(),Rp(),Y=!1)},Z={p:R,um:it,m:Vt,r:wn,mt:qe,mc:_,pc:Ae,pbc:b,n:M,o:t};return{render:Q,hydrate:void 0,createApp:Ov(Q)}}function wc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Dr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function qv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function zp(t,e,n=!1){const r=t.children,s=e.children;if(ue(r)&&ue(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=er(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&zp(o,c)),c.type===Oa&&c.patchFlag!==-1&&(c.el=o.el),c.type===_r&&!c.el&&(c.el=o.el)}}function Hv(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<u?i=c+1:o=c;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Wp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Wp(e)}function Lh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const zv=Symbol.for("v-scx"),Wv=()=>qt(zv);function vi(t,e,n){return Kp(t,e,n)}function Kp(t,e,n=xe){const{immediate:r,deep:s,flush:i,once:o}=n,c=It({},n),l=e&&r||!e&&i!=="post";let u;if(xi){if(i==="sync"){const y=Wv();u=y.__watcherHandles||(y.__watcherHandles=[])}else if(!l){const y=()=>{};return y.stop=ln,y.resume=ln,y.pause=ln,y}}const f=Tt;c.call=(y,S,R)=>yn(y,f,S,R);let p=!1;i==="post"?c.scheduler=y=>{xt(y,f&&f.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(y,S)=>{S?y():$l(y)}),c.augmentJob=y=>{e&&(y.flags|=4),p&&(y.flags|=2,f&&(y.id=f.uid,y.i=f))};const m=iv(t,e,c);return xi&&(u?u.push(m):l&&m()),m}function Kv(t,e,n){const r=this.proxy,s=Je(t)?t.includes(".")?Gp(r,t):()=>r[t]:t.bind(r,r);let i;pe(e)?i=e:(i=e.handler,n=e);const o=Yi(this),c=Kp(s,i.bind(r),n);return o(),c}function Gp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Gv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ht(e)}Modifiers`]||t[`${Kr(e)}Modifiers`];function Qv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||xe;let s=n;const i=e.startsWith("update:"),o=i&&Gv(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>Je(f)?f.trim():f)),o.number&&(s=n.map(qo)));let c,l=r[c=_c(e)]||r[c=_c(Ht(e))];!l&&i&&(l=r[c=_c(Kr(e))]),l&&yn(l,t,6,s);const u=r[c+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,yn(u,t,6,s)}}const Jv=new WeakMap;function Qp(t,e,n=!1){const r=n?Jv:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!pe(t)){const l=u=>{const f=Qp(u,e,!0);f&&(c=!0,It(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Fe(t)&&r.set(t,null),null):(ue(i)?i.forEach(l=>o[l]=null):It(o,i),Fe(t)&&r.set(t,o),o)}function Na(t,e){return!t||!Ia(e)?!1:(e=e.slice(2).replace(/Once$/,""),ke(t,e[0].toLowerCase()+e.slice(1))||ke(t,Kr(e))||ke(t,e))}function Fh(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:u,renderCache:f,props:p,data:m,setupState:y,ctx:S,inheritAttrs:R}=t,O=Go(t);let B,x;try{if(n.shapeFlag&4){const K=s||r,re=K;B=cn(u.call(re,K,f,p,y,m,S)),x=c}else{const K=e;B=cn(K.length>1?K(p,{attrs:c,slots:o,emit:l}):K(p,null)),x=e.props?c:Yv(c)}}catch(K){Ei.length=0,Pa(K,t,1),B=ge(_r)}let z=B;if(x&&R!==!1){const K=Object.keys(x),{shapeFlag:re}=z;K.length&&re&7&&(i&&K.some(Pl)&&(x=Xv(x,i)),z=Is(z,x,!1,!0))}return n.dirs&&(z=Is(z,null,!1,!0),z.dirs=z.dirs?z.dirs.concat(n.dirs):n.dirs),n.transition&&jl(z,n.transition),B=z,Go(O),B}const Yv=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ia(n))&&((e||(e={}))[n]=t[n]);return e},Xv=(t,e)=>{const n={};for(const r in t)(!Pl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Zv(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Uh(r,o,u):!!o;if(l&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const m=f[p];if(o[m]!==r[m]&&!Na(u,m))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Uh(r,o,u):!0:!!o;return!1}function Uh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Na(n,i))return!0}return!1}function eE({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Jp=t=>t.__isSuspense;function tE(t,e){e&&e.pendingBranch?ue(t)?e.effects.push(...t):e.effects.push(t):cv(t)}const Re=Symbol.for("v-fgt"),Oa=Symbol.for("v-txt"),_r=Symbol.for("v-cmt"),Ac=Symbol.for("v-stc"),Ei=[];let Lt=null;function te(t=!1){Ei.push(Lt=t?null:[])}function nE(){Ei.pop(),Lt=Ei[Ei.length-1]||null}let Oi=1;function Yo(t,e=!1){Oi+=t,t<0&&Lt&&e&&(Lt.hasOnce=!0)}function Yp(t){return t.dynamicChildren=Oi>0?Lt||fs:null,nE(),Oi>0&&Lt&&Lt.push(t),t}function oe(t,e,n,r,s,i){return Yp(V(t,e,n,r,s,i,!0))}function Di(t,e,n,r,s){return Yp(ge(t,e,n,r,s,!0))}function Xo(t){return t?t.__v_isVNode===!0:!1}function si(t,e){return t.type===e.type&&t.key===e.key}const Xp=({key:t})=>t??null,Vo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Je(t)||Ke(t)||pe(t)?{i:Mt,r:t,k:e,f:!!n}:t:null);function V(t,e=null,n=null,r=0,s=null,i=t===Re?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Xp(e),ref:e&&Vo(e),scopeId:Pp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Mt};return c?(zl(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Je(n)?8:16),Oi>0&&!o&&Lt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Lt.push(l),l}const ge=rE;function rE(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Av)&&(t=_r),Xo(t)){const c=Is(t,e,!0);return n&&zl(c,n),Oi>0&&!i&&Lt&&(c.shapeFlag&6?Lt[Lt.indexOf(t)]=c:Lt.push(c)),c.patchFlag=-2,c}if(pE(t)&&(t=t.__vccOpts),e){e=sE(e);let{class:c,style:l}=e;c&&!Je(c)&&(e.class=Gi(c)),Fe(l)&&(Ul(l)&&!ue(l)&&(l=It({},l)),e.style=Nl(l))}const o=Je(t)?1:Jp(t)?128:uv(t)?64:Fe(t)?4:pe(t)?2:0;return V(t,e,n,r,s,o,i,!0)}function sE(t){return t?Ul(t)||Up(t)?It({},t):t:null}function Is(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,u=e?iE(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Xp(u),ref:e&&e.ref?n&&i?ue(i)?i.concat(Vo(e)):[i,Vo(e)]:Vo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Re?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Is(t.ssContent),ssFallback:t.ssFallback&&Is(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&jl(f,l.clone(f)),f}function br(t=" ",e=0){return ge(Oa,null,t,e)}function Qt(t="",e=!1){return e?(te(),Di(_r,null,t)):ge(_r,null,t)}function cn(t){return t==null||typeof t=="boolean"?ge(_r):ue(t)?ge(Re,null,t.slice()):Xo(t)?er(t):ge(Oa,null,String(t))}function er(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Is(t)}function zl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ue(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),zl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Up(e)?e._ctx=Mt:s===3&&Mt&&(Mt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else pe(e)?(e={default:e,_ctx:Mt},n=32):(e=String(e),r&64?(n=16,e=[br(e)]):n=8);t.children=e,t.shapeFlag|=n}function iE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Gi([e.class,r.class]));else if(s==="style")e.style=Nl([e.style,r.style]);else if(Ia(s)){const i=e[s],o=r[s];o&&i!==o&&!(ue(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function sn(t,e,n,r=null){yn(t,e,7,[n,r])}const oE=Mp();let aE=0;function cE(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||oE,i={uid:aE++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new sp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:$p(r,s),emitsOptions:Qp(r,s),emit:null,emitted:null,propsDefaults:xe,inheritAttrs:r.inheritAttrs,ctx:xe,data:xe,props:xe,attrs:xe,slots:xe,refs:xe,setupState:xe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Qv.bind(null,i),t.ce&&t.ce(i),i}let Tt=null;const Zp=()=>Tt||Mt;let Zo,Jc;{const t=Sa(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Zo=e("__VUE_INSTANCE_SETTERS__",n=>Tt=n),Jc=e("__VUE_SSR_SETTERS__",n=>xi=n)}const Yi=t=>{const e=Tt;return Zo(t),t.scope.on(),()=>{t.scope.off(),Zo(e)}},Bh=()=>{Tt&&Tt.scope.off(),Zo(null)};function eg(t){return t.vnode.shapeFlag&4}let xi=!1;function lE(t,e=!1,n=!1){e&&Jc(e);const{props:r,children:s}=t.vnode,i=eg(t);xv(t,r,i,e),Uv(t,s,n||e);const o=i?uE(t,e):void 0;return e&&Jc(!1),o}function uE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Sv);const{setup:r}=n;if(r){Vn();const s=t.setupContext=r.length>1?fE(t):null,i=Yi(t),o=Ji(r,t,0,[t.props,s]),c=Yd(o);if(Nn(),i(),(c||t.sp)&&!mi(t)&&kp(t),c){if(o.then(Bh,Bh),e)return o.then(l=>{$h(t,l)}).catch(l=>{Pa(l,t,0)});t.asyncDep=o}else $h(t,o)}else tg(t)}function $h(t,e,n){pe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Fe(e)&&(t.setupState=Ap(e)),tg(t)}function tg(t,e,n){const r=t.type;t.render||(t.render=r.render||ln);{const s=Yi(t);Vn();try{Rv(t)}finally{Nn(),s()}}}const hE={get(t,e){return vt(t,"get",""),t[e]}};function fE(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,hE),slots:t.slots,emit:t.emit,expose:e}}function Da(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Ap(Bl(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in _i)return _i[n](t)},has(e,n){return n in e||n in _i}})):t.proxy}function dE(t,e=!0){return pe(t)?t.displayName||t.name:t.name||e&&t.__name}function pE(t){return pe(t)&&"__vccOpts"in t}const kt=(t,e)=>rv(t,e,xi);function ng(t,e,n){const r=(i,o,c)=>{Yo(-1);try{return ge(i,o,c)}finally{Yo(1)}},s=arguments.length;return s===2?Fe(e)&&!ue(e)?Xo(e)?r(t,null,[e]):r(t,e):r(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Xo(n)&&(n=[n]),r(t,e,n))}const gE="3.5.21";/**
* @vue/runtime-dom v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Yc;const jh=typeof window<"u"&&window.trustedTypes;if(jh)try{Yc=jh.createPolicy("vue",{createHTML:t=>t})}catch{}const rg=Yc?t=>Yc.createHTML(t):t=>t,mE="http://www.w3.org/2000/svg",_E="http://www.w3.org/1998/Math/MathML",Sn=typeof document<"u"?document:null,qh=Sn&&Sn.createElement("template"),yE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Sn.createElementNS(mE,t):e==="mathml"?Sn.createElementNS(_E,t):n?Sn.createElement(t,{is:n}):Sn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Sn.createTextNode(t),createComment:t=>Sn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Sn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{qh.innerHTML=rg(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=qh.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},vE=Symbol("_vtc");function EE(t,e,n){const r=t[vE];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Hh=Symbol("_vod"),TE=Symbol("_vsh"),IE=Symbol(""),wE=/(?:^|;)\s*display\s*:/;function AE(t,e,n){const r=t.style,s=Je(n);let i=!1;if(n&&!s){if(e)if(Je(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&No(r,c,"")}else for(const o in e)n[o]==null&&No(r,o,"");for(const o in n)o==="display"&&(i=!0),No(r,o,n[o])}else if(s){if(e!==n){const o=r[IE];o&&(n+=";"+o),r.cssText=n,i=wE.test(n)}}else e&&t.removeAttribute("style");Hh in t&&(t[Hh]=i?r.display:"",t[TE]&&(r.display="none"))}const zh=/\s*!important$/;function No(t,e,n){if(ue(n))n.forEach(r=>No(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=bE(t,e);zh.test(n)?t.setProperty(Kr(r),n.replace(zh,""),"important"):t[r]=n}}const Wh=["Webkit","Moz","ms"],bc={};function bE(t,e){const n=bc[e];if(n)return n;let r=Ht(e);if(r!=="filter"&&r in t)return bc[e]=r;r=ba(r);for(let s=0;s<Wh.length;s++){const i=Wh[s]+r;if(i in t)return bc[e]=i}return e}const Kh="http://www.w3.org/1999/xlink";function Gh(t,e,n,r,s,i=Ry(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Kh,e.slice(6,e.length)):t.setAttributeNS(Kh,e,n):n==null||i&&!tp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":_n(n)?String(n):n)}function Qh(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?rg(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=tp(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Lr(t,e,n,r){t.addEventListener(e,n,r)}function SE(t,e,n,r){t.removeEventListener(e,n,r)}const Jh=Symbol("_vei");function RE(t,e,n,r,s=null){const i=t[Jh]||(t[Jh]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=CE(e);if(r){const u=i[e]=VE(r,s);Lr(t,c,u,l)}else o&&(SE(t,c,o,l),i[e]=void 0)}}const Yh=/(?:Once|Passive|Capture)$/;function CE(t){let e;if(Yh.test(t)){e={};let r;for(;r=t.match(Yh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Kr(t.slice(2)),e]}let Sc=0;const PE=Promise.resolve(),kE=()=>Sc||(PE.then(()=>Sc=0),Sc=Date.now());function VE(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;yn(NE(r,n.value),e,5,[r])};return n.value=t,n.attached=kE(),n}function NE(t,e){if(ue(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Xh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,OE=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?EE(t,r,o):e==="style"?AE(t,n,r):Ia(e)?Pl(e)||RE(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):DE(t,e,r,o))?(Qh(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Gh(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Je(r))?Qh(t,Ht(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Gh(t,e,r,o))};function DE(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Xh(e)&&pe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Xh(e)&&Je(n)?!1:e in t}const ea=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ue(e)?n=>ko(e,n):e};function xE(t){t.target.composing=!0}function Zh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const gs=Symbol("_assign"),Fr={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[gs]=ea(s);const i=r||s.props&&s.props.type==="number";Lr(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=qo(c)),t[gs](c)}),n&&Lr(t,"change",()=>{t.value=t.value.trim()}),e||(Lr(t,"compositionstart",xE),Lr(t,"compositionend",Zh),Lr(t,"change",Zh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[gs]=ea(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?qo(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},ME={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=wa(e);Lr(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?qo(ta(o)):ta(o));t[gs](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,ka(()=>{t._assigning=!1})}),t[gs]=ea(r)},mounted(t,{value:e}){ef(t,e)},beforeUpdate(t,e,n){t[gs]=ea(n)},updated(t,{value:e}){t._assigning||ef(t,e)}};function ef(t,e){const n=t.multiple,r=ue(e);if(!(n&&!r&&!wa(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],c=ta(o);if(n)if(r){const l=typeof c;l==="string"||l==="number"?o.selected=e.some(u=>String(u)===String(c)):o.selected=Py(e,c)>-1}else o.selected=e.has(c);else if(Ra(ta(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function ta(t){return"_value"in t?t._value:t.value}const LE=It({patchProp:OE},yE);let tf;function FE(){return tf||(tf=$v(LE))}const UE=((...t)=>{const e=FE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=$E(r);if(!s)return;const i=e._component;!pe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,BE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function BE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function $E(t){return Je(t)?document.querySelector(t):t}/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let sg;const xa=t=>sg=t,ig=Symbol();function Xc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Ti;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ti||(Ti={}));function jE(){const t=ip(!0),e=t.run(()=>_e({}));let n=[],r=[];const s=Bl({install(i){xa(s),s._a=i,i.provide(ig,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const og=()=>{};function nf(t,e,n,r=og){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&op()&&ky(s),s}function ss(t,...e){t.slice().forEach(n=>{n(...e)})}const qE=t=>t(),rf=Symbol(),Rc=Symbol();function Zc(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Xc(s)&&Xc(r)&&t.hasOwnProperty(n)&&!Ke(r)&&!cr(r)?t[n]=Zc(s,r):t[n]=r}return t}const HE=Symbol();function zE(t){return!Xc(t)||!Object.prototype.hasOwnProperty.call(t,HE)}const{assign:Yn}=Object;function WE(t){return!!(Ke(t)&&t.effect)}function KE(t,e,n,r){const{state:s,actions:i,getters:o}=e,c=n.state.value[t];let l;function u(){c||(n.state.value[t]=s?s():{});const f=Zy(n.state.value[t]);return Yn(f,i,Object.keys(o||{}).reduce((p,m)=>(p[m]=Bl(kt(()=>{xa(n);const y=n._s.get(t);return o[m].call(y,y)})),p),{}))}return l=ag(t,u,e,n,r,!0),l}function ag(t,e,n={},r,s,i){let o;const c=Yn({actions:{}},n),l={deep:!0};let u,f,p=[],m=[],y;const S=r.state.value[t];!i&&!S&&(r.state.value[t]={}),_e({});let R;function O(_){let v;u=f=!1,typeof _=="function"?(_(r.state.value[t]),v={type:Ti.patchFunction,storeId:t,events:y}):(Zc(r.state.value[t],_),v={type:Ti.patchObject,payload:_,storeId:t,events:y});const b=R=Symbol();ka().then(()=>{R===b&&(u=!0)}),f=!0,ss(p,v,r.state.value[t])}const B=i?function(){const{state:v}=n,b=v?v():{};this.$patch(A=>{Yn(A,b)})}:og;function x(){o.stop(),p=[],m=[],r._s.delete(t)}const z=(_,v="")=>{if(rf in _)return _[Rc]=v,_;const b=function(){xa(r);const A=Array.from(arguments),C=[],T=[];function qe(de){C.push(de)}function ft(de){T.push(de)}ss(m,{args:A,name:b[Rc],store:re,after:qe,onError:ft});let Me;try{Me=_.apply(this&&this.$id===t?this:re,A)}catch(de){throw ss(T,de),de}return Me instanceof Promise?Me.then(de=>(ss(C,de),de)).catch(de=>(ss(T,de),Promise.reject(de))):(ss(C,Me),Me)};return b[rf]=!0,b[Rc]=v,b},K={_p:r,$id:t,$onAction:nf.bind(null,m),$patch:O,$reset:B,$subscribe(_,v={}){const b=nf(p,_,v.detached,()=>A()),A=o.run(()=>vi(()=>r.state.value[t],C=>{(v.flush==="sync"?f:u)&&_({storeId:t,type:Ti.direct,events:y},C)},Yn({},l,v)));return b},$dispose:x},re=Qi(K);r._s.set(t,re);const w=(r._a&&r._a.runWithContext||qE)(()=>r._e.run(()=>(o=ip()).run(()=>e({action:z}))));for(const _ in w){const v=w[_];if(Ke(v)&&!WE(v)||cr(v))i||(S&&zE(v)&&(Ke(v)?v.value=S[_]:Zc(v,S[_])),r.state.value[t][_]=v);else if(typeof v=="function"){const b=z(v,_);w[_]=b,c.actions[_]=v}}return Yn(re,w),Yn(Ce(re),w),Object.defineProperty(re,"$state",{get:()=>r.state.value[t],set:_=>{O(v=>{Yn(v,_)})}}),r._p.forEach(_=>{Yn(re,o.run(()=>_({store:re,app:r._a,pinia:r,options:c})))}),S&&i&&n.hydrate&&n.hydrate(re.$state,S),u=!0,f=!0,re}/*! #__NO_SIDE_EFFECTS__ */function Wl(t,e,n){let r;const s=typeof e=="function";r=s?n:e;function i(o,c){const l=Dv();return o=o||(l?qt(ig,null):null),o&&xa(o),o=sg,o._s.has(t)||(s?ag(t,e,r,o):KE(t,r,o)),o._s.get(t)}return i.$id=t,i}const In=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},GE={},QE={class:"body"};function JE(t,e){const n=Ar("router-view");return te(),oe("div",QE,[ge(n)])}const YE=In(GE,[["render",JE]]);/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const os=typeof document<"u";function cg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function XE(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&cg(t.default)}const Pe=Object.assign;function Cc(t,e){const n={};for(const r in e){const s=e[r];n[r]=Zt(s)?s.map(t):t(s)}return n}const Ii=()=>{},Zt=Array.isArray,lg=/#/g,ZE=/&/g,eT=/\//g,tT=/=/g,nT=/\?/g,ug=/\+/g,rT=/%5B/g,sT=/%5D/g,hg=/%5E/g,iT=/%60/g,fg=/%7B/g,oT=/%7C/g,dg=/%7D/g,aT=/%20/g;function Kl(t){return encodeURI(""+t).replace(oT,"|").replace(rT,"[").replace(sT,"]")}function cT(t){return Kl(t).replace(fg,"{").replace(dg,"}").replace(hg,"^")}function el(t){return Kl(t).replace(ug,"%2B").replace(aT,"+").replace(lg,"%23").replace(ZE,"%26").replace(iT,"`").replace(fg,"{").replace(dg,"}").replace(hg,"^")}function lT(t){return el(t).replace(tT,"%3D")}function uT(t){return Kl(t).replace(lg,"%23").replace(nT,"%3F")}function hT(t){return t==null?"":uT(t).replace(eT,"%2F")}function Mi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const fT=/\/$/,dT=t=>t.replace(fT,"");function Pc(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=_T(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Mi(o)}}function pT(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function sf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function gT(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ws(e.matched[r],n.matched[s])&&pg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ws(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function pg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!mT(t[n],e[n]))return!1;return!0}function mT(t,e){return Zt(t)?of(t,e):Zt(e)?of(e,t):t===e}function of(t,e){return Zt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function _T(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Qn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Li;(function(t){t.pop="pop",t.push="push"})(Li||(Li={}));var wi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(wi||(wi={}));function yT(t){if(!t)if(os){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),dT(t)}const vT=/^[^#]+#/;function ET(t,e){return t.replace(vT,"#")+e}function TT(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ma=()=>({left:window.scrollX,top:window.scrollY});function IT(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=TT(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function af(t,e){return(history.state?history.state.position-e:-1)+t}const tl=new Map;function wT(t,e){tl.set(t,e)}function AT(t){const e=tl.get(t);return tl.delete(t),e}let bT=()=>location.protocol+"//"+location.host;function gg(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),sf(l,"")}return sf(n,t)+r+s}function ST(t,e,n,r){let s=[],i=[],o=null;const c=({state:m})=>{const y=gg(t,location),S=n.value,R=e.value;let O=0;if(m){if(n.value=y,e.value=m,o&&o===S){o=null;return}O=R?m.position-R.position:0}else r(y);s.forEach(B=>{B(n.value,S,{delta:O,type:Li.pop,direction:O?O>0?wi.forward:wi.back:wi.unknown})})};function l(){o=n.value}function u(m){s.push(m);const y=()=>{const S=s.indexOf(m);S>-1&&s.splice(S,1)};return i.push(y),y}function f(){const{history:m}=window;m.state&&m.replaceState(Pe({},m.state,{scroll:Ma()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:l,listen:u,destroy:p}}function cf(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ma():null}}function RT(t){const{history:e,location:n}=window,r={value:gg(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,f){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:bT()+t+l;try{e[f?"replaceState":"pushState"](u,"",m),s.value=u}catch(y){console.error(y),n[f?"replace":"assign"](m)}}function o(l,u){const f=Pe({},e.state,cf(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});i(l,f,!0),r.value=l}function c(l,u){const f=Pe({},s.value,e.state,{forward:l,scroll:Ma()});i(f.current,f,!0);const p=Pe({},cf(r.value,l,null),{position:f.position+1},u);i(l,p,!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function CT(t){t=yT(t);const e=RT(t),n=ST(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Pe({location:"",base:t,go:r,createHref:ET.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function PT(t){return typeof t=="string"||t&&typeof t=="object"}function mg(t){return typeof t=="string"||typeof t=="symbol"}const _g=Symbol("");var lf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(lf||(lf={}));function As(t,e){return Pe(new Error,{type:t,[_g]:!0},e)}function bn(t,e){return t instanceof Error&&_g in t&&(e==null||!!(t.type&e))}const uf="[^/]+?",kT={sensitive:!1,strict:!1,start:!0,end:!0},VT=/[.+*?^${}()[\]/\\]/g;function NT(t,e){const n=Pe({},kT,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const m=u[p];let y=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(VT,"\\$&"),y+=40;else if(m.type===1){const{value:S,repeatable:R,optional:O,regexp:B}=m;i.push({name:S,repeatable:R,optional:O});const x=B||uf;if(x!==uf){y+=10;try{new RegExp(`(${x})`)}catch(K){throw new Error(`Invalid custom RegExp for param "${S}" (${x}): `+K.message)}}let z=R?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;p||(z=O&&u.length<2?`(?:/${z})`:"/"+z),O&&(z+="?"),s+=z,y+=20,O&&(y+=-8),R&&(y+=-20),x===".*"&&(y+=-50)}f.push(y)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(u){const f=u.match(o),p={};if(!f)return null;for(let m=1;m<f.length;m++){const y=f[m]||"",S=i[m-1];p[S.name]=y&&S.repeatable?y.split("/"):y}return p}function l(u){let f="",p=!1;for(const m of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const y of m)if(y.type===0)f+=y.value;else if(y.type===1){const{value:S,repeatable:R,optional:O}=y,B=S in u?u[S]:"";if(Zt(B)&&!R)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const x=Zt(B)?B.join("/"):B;if(!x)if(O)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${S}"`);f+=x}}return f||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function OT(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function yg(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=OT(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(hf(r))return 1;if(hf(s))return-1}return s.length-r.length}function hf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const DT={type:0,value:""},xT=/[a-zA-Z0-9_]/;function MT(t){if(!t)return[[]];if(t==="/")return[[DT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(y){throw new Error(`ERR (${n})/"${u}": ${y}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,u="",f="";function p(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&p(),o()):l===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:l==="("?n=2:xT.test(l)?m():(p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}function LT(t,e,n){const r=NT(MT(t.path),n),s=Pe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function FT(t,e){const n=[],r=new Map;e=gf({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,m,y){const S=!y,R=df(p);R.aliasOf=y&&y.record;const O=gf(e,p),B=[R];if("alias"in p){const K=typeof p.alias=="string"?[p.alias]:p.alias;for(const re of K)B.push(df(Pe({},R,{components:y?y.record.components:R.components,path:re,aliasOf:y?y.record:R})))}let x,z;for(const K of B){const{path:re}=K;if(m&&re[0]!=="/"){const ye=m.record.path,w=ye[ye.length-1]==="/"?"":"/";K.path=m.record.path+(re&&w+re)}if(x=LT(K,m,O),y?y.alias.push(x):(z=z||x,z!==x&&z.alias.push(x),S&&p.name&&!pf(x)&&o(p.name)),vg(x)&&l(x),R.children){const ye=R.children;for(let w=0;w<ye.length;w++)i(ye[w],x,y&&y.children[w])}y=y||x}return z?()=>{o(z)}:Ii}function o(p){if(mg(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return n}function l(p){const m=$T(p,n);n.splice(m,0,p),p.record.name&&!pf(p)&&r.set(p.record.name,p)}function u(p,m){let y,S={},R,O;if("name"in p&&p.name){if(y=r.get(p.name),!y)throw As(1,{location:p});O=y.record.name,S=Pe(ff(m.params,y.keys.filter(z=>!z.optional).concat(y.parent?y.parent.keys.filter(z=>z.optional):[]).map(z=>z.name)),p.params&&ff(p.params,y.keys.map(z=>z.name))),R=y.stringify(S)}else if(p.path!=null)R=p.path,y=n.find(z=>z.re.test(R)),y&&(S=y.parse(R),O=y.record.name);else{if(y=m.name?r.get(m.name):n.find(z=>z.re.test(m.path)),!y)throw As(1,{location:p,currentLocation:m});O=y.record.name,S=Pe({},m.params,p.params),R=y.stringify(S)}const B=[];let x=y;for(;x;)B.unshift(x.record),x=x.parent;return{name:O,path:R,params:S,matched:B,meta:BT(B)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:c,getRecordMatcher:s}}function ff(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function df(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:UT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function UT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function pf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function BT(t){return t.reduce((e,n)=>Pe(e,n.meta),{})}function gf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function $T(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;yg(t,e[i])<0?r=i:n=i+1}const s=jT(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function jT(t){let e=t;for(;e=e.parent;)if(vg(e)&&yg(t,e)===0)return e}function vg({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function qT(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(ug," "),o=i.indexOf("="),c=Mi(o<0?i:i.slice(0,o)),l=o<0?null:Mi(i.slice(o+1));if(c in e){let u=e[c];Zt(u)||(u=e[c]=[u]),u.push(l)}else e[c]=l}return e}function mf(t){let e="";for(let n in t){const r=t[n];if(n=lT(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Zt(r)?r.map(i=>i&&el(i)):[r&&el(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function HT(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Zt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const zT=Symbol(""),_f=Symbol(""),Gl=Symbol(""),Ql=Symbol(""),nl=Symbol("");function ii(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function tr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const u=m=>{m===!1?l(As(4,{from:n,to:e})):m instanceof Error?l(m):PT(m)?l(As(2,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),c())},f=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(f);t.length<3&&(p=p.then(u)),p.catch(m=>l(m))})}function kc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(cg(l)){const f=(l.__vccOpts||l)[e];f&&i.push(tr(f,n,r,o,c,s))}else{let u=l();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const p=XE(f)?f.default:f;o.mods[c]=f,o.components[c]=p;const y=(p.__vccOpts||p)[e];return y&&tr(y,n,r,o,c,s)()}))}}return i}function yf(t){const e=qt(Gl),n=qt(Ql),r=kt(()=>{const l=ze(t.to);return e.resolve(l)}),s=kt(()=>{const{matched:l}=r.value,{length:u}=l,f=l[u-1],p=n.matched;if(!f||!p.length)return-1;const m=p.findIndex(ws.bind(null,f));if(m>-1)return m;const y=vf(l[u-2]);return u>1&&vf(f)===y&&p[p.length-1].path!==y?p.findIndex(ws.bind(null,l[u-2])):m}),i=kt(()=>s.value>-1&&QT(n.params,r.value.params)),o=kt(()=>s.value>-1&&s.value===n.matched.length-1&&pg(n.params,r.value.params));function c(l={}){if(GT(l)){const u=e[ze(t.replace)?"replace":"push"](ze(t.to)).catch(Ii);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:kt(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function WT(t){return t.length===1?t[0]:t}const KT=ht({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:yf,setup(t,{slots:e}){const n=Qi(yf(t)),{options:r}=qt(Gl),s=kt(()=>({[Ef(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ef(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&WT(e.default(n));return t.custom?i:ng("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),rl=KT;function GT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function QT(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Zt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function vf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ef=(t,e,n)=>t??e??n,JT=ht({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=qt(nl),s=kt(()=>t.route||r.value),i=qt(_f,0),o=kt(()=>{let u=ze(i);const{matched:f}=s.value;let p;for(;(p=f[u])&&!p.components;)u++;return u}),c=kt(()=>s.value.matched[o.value]);yi(_f,kt(()=>o.value+1)),yi(zT,c),yi(nl,s);const l=_e();return vi(()=>[l.value,c.value,t.name],([u,f,p],[m,y,S])=>{f&&(f.instances[p]=u,y&&y!==f&&u&&u===m&&(f.leaveGuards.size||(f.leaveGuards=y.leaveGuards),f.updateGuards.size||(f.updateGuards=y.updateGuards))),u&&f&&(!y||!ws(f,y)||!m)&&(f.enterCallbacks[p]||[]).forEach(R=>R(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,p=c.value,m=p&&p.components[f];if(!m)return Tf(n.default,{Component:m,route:u});const y=p.props[f],S=y?y===!0?u.params:typeof y=="function"?y(u):y:null,O=ng(m,Pe({},S,e,{onVnodeUnmounted:B=>{B.component.isUnmounted&&(p.instances[f]=null)},ref:l}));return Tf(n.default,{Component:O,route:u})||O}}});function Tf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const YT=JT;function XT(t){const e=FT(t.routes,t),n=t.parseQuery||qT,r=t.stringifyQuery||mf,s=t.history,i=ii(),o=ii(),c=ii(),l=Jy(Qn);let u=Qn;os&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Cc.bind(null,M=>""+M),p=Cc.bind(null,hT),m=Cc.bind(null,Mi);function y(M,Y){let Q,Z;return mg(M)?(Q=e.getRecordMatcher(M),Z=Y):Z=M,e.addRoute(Z,Q)}function S(M){const Y=e.getRecordMatcher(M);Y&&e.removeRoute(Y)}function R(){return e.getRoutes().map(M=>M.record)}function O(M){return!!e.getRecordMatcher(M)}function B(M,Y){if(Y=Pe({},Y||l.value),typeof M=="string"){const P=Pc(n,M,Y.path),L=e.resolve({path:P.path},Y),U=s.createHref(P.fullPath);return Pe(P,L,{params:m(L.params),hash:Mi(P.hash),redirectedFrom:void 0,href:U})}let Q;if(M.path!=null)Q=Pe({},M,{path:Pc(n,M.path,Y.path).path});else{const P=Pe({},M.params);for(const L in P)P[L]==null&&delete P[L];Q=Pe({},M,{params:p(P)}),Y.params=p(Y.params)}const Z=e.resolve(Q,Y),Ne=M.hash||"";Z.params=f(m(Z.params));const E=pT(r,Pe({},M,{hash:cT(Ne),path:Z.path})),I=s.createHref(E);return Pe({fullPath:E,hash:Ne,query:r===mf?HT(M.query):M.query||{}},Z,{redirectedFrom:void 0,href:I})}function x(M){return typeof M=="string"?Pc(n,M,l.value.path):Pe({},M)}function z(M,Y){if(u!==M)return As(8,{from:Y,to:M})}function K(M){return w(M)}function re(M){return K(Pe(x(M),{replace:!0}))}function ye(M){const Y=M.matched[M.matched.length-1];if(Y&&Y.redirect){const{redirect:Q}=Y;let Z=typeof Q=="function"?Q(M):Q;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=x(Z):{path:Z},Z.params={}),Pe({query:M.query,hash:M.hash,params:Z.path!=null?{}:M.params},Z)}}function w(M,Y){const Q=u=B(M),Z=l.value,Ne=M.state,E=M.force,I=M.replace===!0,P=ye(Q);if(P)return w(Pe(x(P),{state:typeof P=="object"?Pe({},Ne,P.state):Ne,force:E,replace:I}),Y||Q);const L=Q;L.redirectedFrom=Y;let U;return!E&&gT(r,Z,Q)&&(U=As(16,{to:L,from:Z}),Vt(Z,Z,!0,!1)),(U?Promise.resolve(U):b(L,Z)).catch(D=>bn(D)?bn(D,2)?D:tn(D):Ae(D,L,Z)).then(D=>{if(D){if(bn(D,2))return w(Pe({replace:I},x(D.to),{state:typeof D.to=="object"?Pe({},Ne,D.to.state):Ne,force:E}),Y||L)}else D=C(L,Z,!0,I,Ne);return A(L,Z,D),D})}function _(M,Y){const Q=z(M,Y);return Q?Promise.reject(Q):Promise.resolve()}function v(M){const Y=zt.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(M):M()}function b(M,Y){let Q;const[Z,Ne,E]=ZT(M,Y);Q=kc(Z.reverse(),"beforeRouteLeave",M,Y);for(const P of Z)P.leaveGuards.forEach(L=>{Q.push(tr(L,M,Y))});const I=_.bind(null,M,Y);return Q.push(I),dt(Q).then(()=>{Q=[];for(const P of i.list())Q.push(tr(P,M,Y));return Q.push(I),dt(Q)}).then(()=>{Q=kc(Ne,"beforeRouteUpdate",M,Y);for(const P of Ne)P.updateGuards.forEach(L=>{Q.push(tr(L,M,Y))});return Q.push(I),dt(Q)}).then(()=>{Q=[];for(const P of E)if(P.beforeEnter)if(Zt(P.beforeEnter))for(const L of P.beforeEnter)Q.push(tr(L,M,Y));else Q.push(tr(P.beforeEnter,M,Y));return Q.push(I),dt(Q)}).then(()=>(M.matched.forEach(P=>P.enterCallbacks={}),Q=kc(E,"beforeRouteEnter",M,Y,v),Q.push(I),dt(Q))).then(()=>{Q=[];for(const P of o.list())Q.push(tr(P,M,Y));return Q.push(I),dt(Q)}).catch(P=>bn(P,8)?P:Promise.reject(P))}function A(M,Y,Q){c.list().forEach(Z=>v(()=>Z(M,Y,Q)))}function C(M,Y,Q,Z,Ne){const E=z(M,Y);if(E)return E;const I=Y===Qn,P=os?history.state:{};Q&&(Z||I?s.replace(M.fullPath,Pe({scroll:I&&P&&P.scroll},Ne)):s.push(M.fullPath,Ne)),l.value=M,Vt(M,Y,Q,I),tn()}let T;function qe(){T||(T=s.listen((M,Y,Q)=>{if(!jn.listening)return;const Z=B(M),Ne=ye(Z);if(Ne){w(Pe(Ne,{replace:!0,force:!0}),Z).catch(Ii);return}u=Z;const E=l.value;os&&wT(af(E.fullPath,Q.delta),Ma()),b(Z,E).catch(I=>bn(I,12)?I:bn(I,2)?(w(Pe(x(I.to),{force:!0}),Z).then(P=>{bn(P,20)&&!Q.delta&&Q.type===Li.pop&&s.go(-1,!1)}).catch(Ii),Promise.reject()):(Q.delta&&s.go(-Q.delta,!1),Ae(I,Z,E))).then(I=>{I=I||C(Z,E,!1),I&&(Q.delta&&!bn(I,8)?s.go(-Q.delta,!1):Q.type===Li.pop&&bn(I,20)&&s.go(-1,!1)),A(Z,E,I)}).catch(Ii)}))}let ft=ii(),Me=ii(),de;function Ae(M,Y,Q){tn(M);const Z=Me.list();return Z.length?Z.forEach(Ne=>Ne(M,Y,Q)):console.error(M),Promise.reject(M)}function Ct(){return de&&l.value!==Qn?Promise.resolve():new Promise((M,Y)=>{ft.add([M,Y])})}function tn(M){return de||(de=!M,qe(),ft.list().forEach(([Y,Q])=>M?Q(M):Y()),ft.reset()),M}function Vt(M,Y,Q,Z){const{scrollBehavior:Ne}=t;if(!os||!Ne)return Promise.resolve();const E=!Q&&AT(af(M.fullPath,0))||(Z||!Q)&&history.state&&history.state.scroll||null;return ka().then(()=>Ne(M,Y,E)).then(I=>I&&IT(I)).catch(I=>Ae(I,M,Y))}const it=M=>s.go(M);let wn;const zt=new Set,jn={currentRoute:l,listening:!0,addRoute:y,removeRoute:S,clearRoutes:e.clearRoutes,hasRoute:O,getRoutes:R,resolve:B,options:t,push:K,replace:re,go:it,back:()=>it(-1),forward:()=>it(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:Me.add,isReady:Ct,install(M){const Y=this;M.component("RouterLink",rl),M.component("RouterView",YT),M.config.globalProperties.$router=Y,Object.defineProperty(M.config.globalProperties,"$route",{enumerable:!0,get:()=>ze(l)}),os&&!wn&&l.value===Qn&&(wn=!0,K(s.location).catch(Ne=>{}));const Q={};for(const Ne in Qn)Object.defineProperty(Q,Ne,{get:()=>l.value[Ne],enumerable:!0});M.provide(Gl,Y),M.provide(Ql,Tp(Q)),M.provide(nl,l);const Z=M.unmount;zt.add(M),M.unmount=function(){zt.delete(M),zt.size<1&&(u=Qn,T&&T(),T=null,l.value=Qn,wn=!1,de=!1),Z()}}};function dt(M){return M.reduce((Y,Q)=>Y.then(()=>v(Q)),Promise.resolve())}return jn}function ZT(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(u=>ws(u,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(u=>ws(u,l))||s.push(l))}return[n,r,s]}function Eg(t){return qt(Ql)}const eI="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20class='icon%20icon-tabler%20icons-tabler-outline%20icon-tabler-corner-down-right'%3e%3cpath%20stroke='none'%20d='M0%200h24v24H0z'%20fill='none'/%3e%3cpath%20d='M6%206v6a3%203%200%200%200%203%203h10l-4%20-4m0%208l4%20-4'%20/%3e%3c/svg%3e",tI={class:"group"},nI=ht({__name:"ButtonLink",props:{link:{},icon:{type:Boolean},text:{}},setup(t){return(e,n)=>{const r=Ar("RouterLink");return te(),Di(r,{to:e.link},{default:vn(()=>[V("div",tI,[V("p",null,we(e.text),1),n[0]||(n[0]=V("img",{class:"icon",src:eI},null,-1))])]),_:1},8,["to"])}}}),Io=In(nI,[["__scopeId","data-v-d005cff0"]]),rI={class:"star"},sI=ht({__name:"TheFooter",props:{title:{},type:{}},setup(t){const e=t,n=_e(20);return(r,s)=>(te(),oe("footer",{class:Gi({"main-footer":e.type=="main","queer-footer":e.type=="queer","autism-footer":e.type=="autism","fanfiction-footer":e.type=="ff","glasschild-footer":e.type=="glasschild","others-footer":e.type=="other"})},[s[1]||(s[1]=V("div",{class:"star"},null,-1)),r.type=="autism"?(te(!0),oe(Re,{key:0},Rt(n.value,i=>(te(),oe("div",rI))),256)):Qt("",!0),V("p",{onClick:s[0]||(s[0]=i=>r.$emit("authorLogin"))},we(r.title),1)],2))}}),Un=In(sI,[["__scopeId","data-v-33f8d4f6"]]),iI="data:image/svg+xml,%3c!--%20tags:%20[direction,%20west]%20category:%20Arrows%20version:%20'1.37'%20unicode:%20'eddb'%20--%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%23000000'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3cpath%20d='M20%2015h-8v3.586a1%201%200%200%201%20-1.707%20.707l-6.586%20-6.586a1%201%200%200%201%200%20-1.414l6.586%20-6.586a1%201%200%200%201%201.707%20.707v3.586h8a1%201%200%200%201%201%201v4a1%201%200%200%201%20-1%201z'%20/%3e%3c/svg%3e",oI="/assets/icon-By7hXV3M.png",aI={class:"star"},cI={key:1,class:"navigation"},lI={key:2,class:"navigation main"},uI=ht({__name:"TheHeader",props:{title:{},type:{}},setup(t){const e=t,n=qt("loggedIn"),r=kt(()=>n?n.value==!0?"Logout":"Login":"none"),s=_e(20);return(i,o)=>(te(),oe("header",{class:Gi({"main-header":e.type=="main","queer-header":e.type=="queer","autism-header":e.type=="autism","fanfiction-header":e.type=="ff","glasschild-header":e.type=="glasschild","others-header":e.type=="other"})},[i.type=="autism"?(te(!0),oe(Re,{key:0},Rt(s.value,c=>(te(),oe("div",aI))),256)):Qt("",!0),i.type!="main"?(te(),oe("div",cI,[ge(ze(rl),{to:"'/'"},{default:vn(()=>[...o[1]||(o[1]=[V("img",{src:iI,class:"back"},null,-1)])]),_:1}),V("h2",null,we(i.title),1),o[2]||(o[2]=V("div",null,null,-1))])):(te(),oe("div",lI,[ge(ze(rl),{to:"/"},{default:vn(()=>[...o[3]||(o[3]=[V("img",{src:oI,class:"icon"},null,-1)])]),_:1}),V("h1",null,we(i.title),1),V("button",{onClick:o[0]||(o[0]=c=>i.$emit("login"))},we(r.value),1)]))],2))}}),Sr=In(uI,[["__scopeId","data-v-de485149"]]);/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hI=()=>{};var If={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},fI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ig={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let m=(c&15)<<2|u>>6,y=u&63;l||(y=64,o||(m=64)),r.push(n[f],n[p],n[m],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Tg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):fI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||u==null||p==null)throw new dI;const m=i<<2|c>>4;if(r.push(m),u!==64){const y=c<<4&240|u>>2;if(r.push(y),p!==64){const S=u<<6&192|p;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class dI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const pI=function(t){const e=Tg(t);return Ig.encodeByteArray(e,!0)},na=function(t){return pI(t).replace(/\./g,"")},wg=function(t){try{return Ig.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mI=()=>gI().__FIREBASE_DEFAULTS__,_I=()=>{if(typeof process>"u"||typeof If>"u")return;const t=If.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},yI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&wg(t[1]);return e&&JSON.parse(e)},La=()=>{try{return hI()||mI()||_I()||yI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ag=t=>La()?.emulatorHosts?.[t],vI=t=>{const e=Ag(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},bg=()=>La()?.config,Sg=t=>La()?.[`_${t}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ds(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Rg(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[na(JSON.stringify(n)),na(JSON.stringify(o)),""].join(".")}const Ai={};function II(){const t={prod:[],emulator:[]};for(const e of Object.keys(Ai))Ai[e]?t.emulator.push(e):t.prod.push(e);return t}function wI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let wf=!1;function Cg(t,e){if(typeof window>"u"||typeof document>"u"||!Ds(window.location.host)||Ai[t]===e||Ai[t]||wf)return;Ai[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=II().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function c(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function l(m,y){m.setAttribute("width","24"),m.setAttribute("id",y),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{wf=!0,o()},m}function f(m,y){m.setAttribute("id",y),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=wI(r),y=n("text"),S=document.getElementById(y)||document.createElement("span"),R=n("learnmore"),O=document.getElementById(R)||document.createElement("a"),B=n("preprendIcon"),x=document.getElementById(B)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const z=m.element;c(z),f(O,R);const K=u();l(x,B),z.append(x,S,O,K),document.body.appendChild(z)}i?(S.innerText="Preview backend disconnected.",x.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(x.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,S.innerText="Preview backend running in this workspace."),S.setAttribute("id",y)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function AI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(wt())}function bI(){const t=La()?.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function SI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function RI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function CI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function PI(){const t=wt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function kI(){return!bI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function VI(){try{return typeof indexedDB=="object"}catch{return!1}}function NI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OI="FirebaseError";class Bn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=OI,Object.setPrototypeOf(this,Bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xi.prototype.create)}}class Xi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?DI(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Bn(s,c,r)}}function DI(t,e){return t.replace(xI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const xI=/\{\$([^}]+)}/g;function MI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function jr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Af(i)&&Af(o)){if(!jr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Af(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ai(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ci(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function LI(t,e){const n=new FI(t,e);return n.subscribe.bind(n)}class FI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");UI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Vc),s.error===void 0&&(s.error=Vc),s.complete===void 0&&(s.complete=Vc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function UI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Vc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(t){return t&&t._delegate?t._delegate:t}class qr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new EI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(jI(e))try{this.getOrInitializeService({instanceIdentifier:Mr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Mr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Mr){return this.instances.has(e)}getOptions(e=Mr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:$I(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Mr){return this.component?this.component.multipleInstances?e:Mr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $I(t){return t===Mr?void 0:t}function jI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new BI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ee||(Ee={}));const HI={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},zI=Ee.INFO,WI={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},KI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=WI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Jl{constructor(e){this.name=e,this._logLevel=zI,this._logHandler=KI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?HI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}const GI=(t,e)=>e.some(n=>t instanceof n);let bf,Sf;function QI(){return bf||(bf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function JI(){return Sf||(Sf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Pg=new WeakMap,sl=new WeakMap,kg=new WeakMap,Nc=new WeakMap,Yl=new WeakMap;function YI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(lr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Pg.set(n,t)}).catch(()=>{}),Yl.set(e,t),e}function XI(t){if(sl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});sl.set(t,e)}let il={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return sl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||kg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return lr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ZI(t){il=t(il)}function ew(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Oc(this),e,...n);return kg.set(r,e.sort?e.sort():[e]),lr(r)}:JI().includes(t)?function(...e){return t.apply(Oc(this),e),lr(Pg.get(this))}:function(...e){return lr(t.apply(Oc(this),e))}}function tw(t){return typeof t=="function"?ew(t):(t instanceof IDBTransaction&&XI(t),GI(t,QI())?new Proxy(t,il):t)}function lr(t){if(t instanceof IDBRequest)return YI(t);if(Nc.has(t))return Nc.get(t);const e=tw(t);return e!==t&&(Nc.set(t,e),Yl.set(e,t)),e}const Oc=t=>Yl.get(t);function nw(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=lr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(lr(o.result),l.oldVersion,l.newVersion,lr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const rw=["get","getKey","getAll","getAllKeys","count"],sw=["put","add","delete","clear"],Dc=new Map;function Rf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Dc.get(e))return Dc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=sw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||rw.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),s&&l.done]))[0]};return Dc.set(e,i),i}ZI(t=>({...t,get:(e,n,r)=>Rf(e,n)||t.get(e,n,r),has:(e,n)=>!!Rf(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ow(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ow(t){return t.getComponent()?.type==="VERSION"}const ol="@firebase/app",Cf="0.14.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const On=new Jl("@firebase/app"),aw="@firebase/app-compat",cw="@firebase/analytics-compat",lw="@firebase/analytics",uw="@firebase/app-check-compat",hw="@firebase/app-check",fw="@firebase/auth",dw="@firebase/auth-compat",pw="@firebase/database",gw="@firebase/data-connect",mw="@firebase/database-compat",_w="@firebase/functions",yw="@firebase/functions-compat",vw="@firebase/installations",Ew="@firebase/installations-compat",Tw="@firebase/messaging",Iw="@firebase/messaging-compat",ww="@firebase/performance",Aw="@firebase/performance-compat",bw="@firebase/remote-config",Sw="@firebase/remote-config-compat",Rw="@firebase/storage",Cw="@firebase/storage-compat",Pw="@firebase/firestore",kw="@firebase/ai",Vw="@firebase/firestore-compat",Nw="firebase",Ow="12.3.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const al="[DEFAULT]",Dw={[ol]:"fire-core",[aw]:"fire-core-compat",[lw]:"fire-analytics",[cw]:"fire-analytics-compat",[hw]:"fire-app-check",[uw]:"fire-app-check-compat",[fw]:"fire-auth",[dw]:"fire-auth-compat",[pw]:"fire-rtdb",[gw]:"fire-data-connect",[mw]:"fire-rtdb-compat",[_w]:"fire-fn",[yw]:"fire-fn-compat",[vw]:"fire-iid",[Ew]:"fire-iid-compat",[Tw]:"fire-fcm",[Iw]:"fire-fcm-compat",[ww]:"fire-perf",[Aw]:"fire-perf-compat",[bw]:"fire-rc",[Sw]:"fire-rc-compat",[Rw]:"fire-gcs",[Cw]:"fire-gcs-compat",[Pw]:"fire-fst",[Vw]:"fire-fst-compat",[kw]:"fire-vertex","fire-js":"fire-js",[Nw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ra=new Map,xw=new Map,cl=new Map;function Pf(t,e){try{t.container.addComponent(e)}catch(n){On.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function bs(t){const e=t.name;if(cl.has(e))return On.debug(`There were multiple attempts to register component ${e}.`),!1;cl.set(e,t);for(const n of ra.values())Pf(n,t);for(const n of xw.values())Pf(n,t);return!0}function Xl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Gt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ur=new Xi("app","Firebase",Mw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new qr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ur.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs=Ow;function Vg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:al,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw ur.create("bad-app-name",{appName:String(s)});if(n||(n=bg()),!n)throw ur.create("no-options");const i=ra.get(s);if(i){if(jr(n,i.options)&&jr(r,i.config))return i;throw ur.create("duplicate-app",{appName:s})}const o=new qI(s);for(const l of cl.values())o.addComponent(l);const c=new Lw(n,r,o);return ra.set(s,c),c}function Ng(t=al){const e=ra.get(t);if(!e&&t===al&&bg())return Vg();if(!e)throw ur.create("no-app",{appName:t});return e}function hr(t,e,n){let r=Dw[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),On.warn(o.join(" "));return}bs(new qr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fw="firebase-heartbeat-database",Uw=1,Fi="firebase-heartbeat-store";let xc=null;function Og(){return xc||(xc=nw(Fw,Uw,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Fi)}catch(n){console.warn(n)}}}}).catch(t=>{throw ur.create("idb-open",{originalErrorMessage:t.message})})),xc}async function Bw(t){try{const n=(await Og()).transaction(Fi),r=await n.objectStore(Fi).get(Dg(t));return await n.done,r}catch(e){if(e instanceof Bn)On.warn(e.message);else{const n=ur.create("idb-get",{originalErrorMessage:e?.message});On.warn(n.message)}}}async function kf(t,e){try{const r=(await Og()).transaction(Fi,"readwrite");await r.objectStore(Fi).put(e,Dg(t)),await r.done}catch(n){if(n instanceof Bn)On.warn(n.message);else{const r=ur.create("idb-set",{originalErrorMessage:n?.message});On.warn(r.message)}}}function Dg(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w=1024,jw=30;class qw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new zw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Vf();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>jw){const s=Ww(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){On.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Vf(),{heartbeatsToSend:n,unsentEntries:r}=Hw(this._heartbeatsCache.heartbeats),s=na(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return On.warn(e),""}}}function Vf(){return new Date().toISOString().substring(0,10)}function Hw(t,e=$w){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Nf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Nf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class zw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return VI()?NI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Bw(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return kf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return kf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Nf(t){return na(JSON.stringify({version:2,heartbeats:t})).length}function Ww(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kw(t){bs(new qr("platform-logger",e=>new iw(e),"PRIVATE")),bs(new qr("heartbeat",e=>new qw(e),"PRIVATE")),hr(ol,Cf,t),hr(ol,Cf,"esm2020"),hr("fire-js","")}Kw("");function xg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Gw=xg,Mg=new Xi("auth","Firebase",xg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sa=new Jl("@firebase/auth");function Qw(t,...e){sa.logLevel<=Ee.WARN&&sa.warn(`Auth (${xs}): ${t}`,...e)}function Oo(t,...e){sa.logLevel<=Ee.ERROR&&sa.error(`Auth (${xs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(t,...e){throw Zl(t,...e)}function un(t,...e){return Zl(t,...e)}function Lg(t,e,n){const r={...Gw(),[e]:n};return new Xi("auth","Firebase",r).create(e,{appName:t.name})}function fr(t){return Lg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Zl(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Mg.create(t,...e)}function ce(t,e,...n){if(!t)throw Zl(e,...n)}function Pn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Oo(e),new Error(e)}function Dn(t,e){t||Pn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(){return typeof self<"u"&&self.location?.href||""}function Jw(){return Of()==="http:"||Of()==="https:"}function Of(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Jw()||RI()||"connection"in navigator)?navigator.onLine:!0}function Xw(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Dn(n>e,"Short delay should be less than long delay!"),this.isMobile=AI()||CI()}get(){return Yw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(t,e){Dn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],tA=new eo(3e4,6e4);function Gr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Rr(t,e,n,r,s={}){return Ug(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Zi({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:l,...i};return SI()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&Ds(t.emulatorConfig.host)&&(u.credentials="include"),Fg.fetch()(await Bg(t,t.config.apiHost,n,c),u)})}async function Ug(t,e,n){t._canInitEmulator=!1;const r={...Zw,...e};try{const s=new rA(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw wo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw wo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw wo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw wo(t,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Lg(t,f,u);en(t,f)}}catch(s){if(s instanceof Bn)throw s;en(t,"network-request-failed",{message:String(s)})}}async function Fa(t,e,n,r,s={}){const i=await Rr(t,e,n,r,s);return"mfaPendingCredential"in i&&en(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Bg(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?eu(t.config,s):`${t.config.apiScheme}://${s}`;return eA.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function nA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class rA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(un(this.auth,"network-request-failed")),tA.get())})}}function wo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=un(t,e,r);return s.customData._tokenResponse=n,s}function Df(t){return t!==void 0&&t.enterprise!==void 0}class sA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return nA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function iA(t,e){return Rr(t,"GET","/v2/recaptchaConfig",Gr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oA(t,e){return Rr(t,"POST","/v1/accounts:delete",e)}async function ia(t,e){return Rr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function aA(t,e=!1){const n=Ft(t),r=await n.getIdToken(e),s=tu(r);ce(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:bi(Mc(s.auth_time)),issuedAtTime:bi(Mc(s.iat)),expirationTime:bi(Mc(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Mc(t){return Number(t)*1e3}function tu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Oo("JWT malformed, contained fewer than 3 sections"),null;try{const s=wg(n);return s?JSON.parse(s):(Oo("Failed to decode base64 JWT payload"),null)}catch(s){return Oo("Caught error parsing JWT payload as JSON",s?.toString()),null}}function xf(t){const e=tu(t);return ce(e,"internal-error"),ce(typeof e.exp<"u","internal-error"),ce(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ui(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Bn&&cA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function cA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=bi(this.lastLoginAt),this.creationTime=bi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oa(t){const e=t.auth,n=await t.getIdToken(),r=await Ui(t,ia(e,{idToken:n}));ce(r?.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=s.providerUserInfo?.length?$g(s.providerUserInfo):[],o=hA(t.providerData,i),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!o?.length,u=c?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new ul(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function uA(t){const e=Ft(t);await oa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function hA(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function $g(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fA(t,e){const n=await Ug(t,{},async()=>{const r=Zi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Bg(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return t.emulatorConfig&&Ds(t.emulatorConfig.host)&&(l.credentials="include"),Fg.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function dA(t,e){return Rr(t,"POST","/v2/accounts:revokeToken",Gr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ce(e.idToken,"internal-error"),ce(typeof e.idToken<"u","internal-error"),ce(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):xf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ce(e.length!==0,"internal-error");const n=xf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ce(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await fA(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ms;return r&&(ce(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ce(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ce(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ms,this.toJSON())}_performRefresh(){return Pn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(t,e){ce(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Jt{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new lA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ul(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ui(this,this.stsTokenManager.getToken(this.auth,e));return ce(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return aA(this,e)}reload(){return uA(this)}_assign(e){this!==e&&(ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Jt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await oa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Gt(this.auth.app))return Promise.reject(fr(this.auth));const e=await this.getIdToken();return await Ui(this,oA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,c=n.tenantId??void 0,l=n._redirectEventId??void 0,u=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:y,providerData:S,stsTokenManager:R}=n;ce(p&&R,e,"internal-error");const O=ms.fromJSON(this.name,R);ce(typeof p=="string",e,"internal-error"),Jn(r,e.name),Jn(s,e.name),ce(typeof m=="boolean",e,"internal-error"),ce(typeof y=="boolean",e,"internal-error"),Jn(i,e.name),Jn(o,e.name),Jn(c,e.name),Jn(l,e.name),Jn(u,e.name),Jn(f,e.name);const B=new Jt({uid:p,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:y,photoURL:o,phoneNumber:i,tenantId:c,stsTokenManager:O,createdAt:u,lastLoginAt:f});return S&&Array.isArray(S)&&(B.providerData=S.map(x=>({...x}))),l&&(B._redirectEventId=l),B}static async _fromIdTokenResponse(e,n,r=!1){const s=new ms;s.updateFromServerResponse(n);const i=new Jt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await oa(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ce(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?$g(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,c=new ms;c.updateFromIdToken(r);const l=new Jt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new ul(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mf=new Map;function kn(t){Dn(t instanceof Function,"Expected a class definition");let e=Mf.get(t);return e?(Dn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Mf.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}jg.type="NONE";const Lf=jg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Do(t,e,n){return`firebase:${t}:${e}:${n}`}class _s{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Do(this.userKey,s.apiKey,i),this.fullPersistenceKey=Do("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ia(this.auth,{idToken:e}).catch(()=>{});return n?Jt._fromGetAccountInfoResponse(this.auth,n,e):null}return Jt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new _s(kn(Lf),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||kn(Lf);const o=Do(r,e.config.apiKey,e.name);let c=null;for(const u of n)try{const f=await u._get(o);if(f){let p;if(typeof f=="string"){const m=await ia(e,{idToken:f}).catch(()=>{});if(!m)break;p=await Jt._fromGetAccountInfoResponse(e,m,f)}else p=Jt._fromJSON(e,f);u!==i&&(c=p),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new _s(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new _s(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ff(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Wg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(qg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Gg(e))return"Blackberry";if(Qg(e))return"Webos";if(Hg(e))return"Safari";if((e.includes("chrome/")||zg(e))&&!e.includes("edge/"))return"Chrome";if(Kg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function qg(t=wt()){return/firefox\//i.test(t)}function Hg(t=wt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function zg(t=wt()){return/crios\//i.test(t)}function Wg(t=wt()){return/iemobile/i.test(t)}function Kg(t=wt()){return/android/i.test(t)}function Gg(t=wt()){return/blackberry/i.test(t)}function Qg(t=wt()){return/webos/i.test(t)}function nu(t=wt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function pA(t=wt()){return nu(t)&&!!window.navigator?.standalone}function gA(){return PI()&&document.documentMode===10}function Jg(t=wt()){return nu(t)||Kg(t)||Qg(t)||Gg(t)||/windows phone/i.test(t)||Wg(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yg(t,e=[]){let n;switch(t){case"Browser":n=Ff(wt());break;case"Worker":n=`${Ff(wt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${xs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _A(t,e={}){return Rr(t,"GET","/v2/passwordPolicy",Gr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yA=6;class vA{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??yA,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Uf(this),this.idTokenSubscription=new Uf(this),this.beforeStateQueue=new mA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Mg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=kn(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await _s.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ia(this,{idToken:e}),r=await Jt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Gt(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=r?._redirectEventId,c=await this.tryRedirectSignIn(e);(!i||i===o)&&c?.user&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await oa(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Xw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Gt(this.app))return Promise.reject(fr(this));const n=e?Ft(e):null;return n&&ce(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Gt(this.app)?Promise.reject(fr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Gt(this.app)?Promise.reject(fr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(kn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await _A(this),n=new vA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Xi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await dA(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&kn(e)||this._popupRedirectResolver;ce(n,this,"argument-error"),this.redirectPersistenceManager=await _s.create(this,[kn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ce(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Yg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(Gt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Qw(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Ms(t){return Ft(t)}class Uf{constructor(e){this.auth=e,this.observer=null,this.addObserver=LI(n=>this.observer=n)}get next(){return ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ua={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function TA(t){Ua=t}function Xg(t){return Ua.loadJS(t)}function IA(){return Ua.recaptchaEnterpriseScript}function wA(){return Ua.gapiScript}function AA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class bA{constructor(){this.enterprise=new SA}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class SA{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const RA="recaptcha-enterprise",Zg="NO_RECAPTCHA";class CA{constructor(e){this.type=RA,this.auth=Ms(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{iA(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new sA(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;Df(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(Zg)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new bA().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&Df(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=IA();l.length!==0&&(l+=c),Xg(l).then(()=>{s(c,i,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function Bf(t,e,n,r=!1,s=!1){const i=new CA(t);let o;if(s)o=Zg;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const c={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,u=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function $f(t,e,n,r,s){if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Bf(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Bf(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PA(t,e){const n=Xl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(jr(i,e??{}))return s;en(s,"already-initialized")}return n.initialize({options:e})}function kA(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(kn);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function VA(t,e,n){const r=Ms(t);ce(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=em(e),{host:o,port:c}=NA(e),l=c===null?"":`:${c}`,u={url:`${i}//${o}${l}/`},f=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ce(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ce(jr(u,r.config.emulator)&&jr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Ds(o)?(Rg(`${i}//${o}${l}`),Cg("Auth",!0)):OA()}function em(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function NA(t){const e=em(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:jf(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:jf(o)}}}function jf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function OA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Pn("not implemented")}_getIdTokenResponse(e){return Pn("not implemented")}_linkToIdToken(e,n){return Pn("not implemented")}_getReauthenticationResolver(e){return Pn("not implemented")}}async function DA(t,e){return Rr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xA(t,e){return Fa(t,"POST","/v1/accounts:signInWithPassword",Gr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MA(t,e){return Fa(t,"POST","/v1/accounts:signInWithEmailLink",Gr(t,e))}async function LA(t,e){return Fa(t,"POST","/v1/accounts:signInWithEmailLink",Gr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi extends ru{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Bi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Bi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $f(e,n,"signInWithPassword",xA);case"emailLink":return MA(e,{email:this._email,oobCode:this._password});default:en(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $f(e,r,"signUpPassword",DA);case"emailLink":return LA(e,{idToken:n,email:this._email,oobCode:this._password});default:en(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ys(t,e){return Fa(t,"POST","/v1/accounts:signInWithIdp",Gr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FA="http://localhost";class Hr extends ru{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Hr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):en("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new Hr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ys(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ys(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ys(e,n)}buildRequest(){const e={requestUri:FA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Zi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function BA(t){const e=ai(ci(t)).link,n=e?ai(ci(e)).deep_link_id:null,r=ai(ci(t)).deep_link_id;return(r?ai(ci(r)).link:null)||r||n||e||t}class su{constructor(e){const n=ai(ci(e)),r=n.apiKey??null,s=n.oobCode??null,i=UA(n.mode??null);ce(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=BA(e);try{return new su(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(){this.providerId=Ls.PROVIDER_ID}static credential(e,n){return Bi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=su.parseLink(n);return ce(r,"argument-error"),Bi._fromEmailAndCode(e,r.code,r.tenantId)}}Ls.PROVIDER_ID="password";Ls.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ls.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to extends tm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr extends to{constructor(){super("facebook.com")}static credential(e){return Hr._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nr.credential(e.oauthAccessToken)}catch{return null}}}nr.FACEBOOK_SIGN_IN_METHOD="facebook.com";nr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr extends to{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Hr._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return rr.credential(n,r)}catch{return null}}}rr.GOOGLE_SIGN_IN_METHOD="google.com";rr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr extends to{constructor(){super("github.com")}static credential(e){return Hr._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sr.credential(e.oauthAccessToken)}catch{return null}}}sr.GITHUB_SIGN_IN_METHOD="github.com";sr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir extends to{constructor(){super("twitter.com")}static credential(e,n){return Hr._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ir.credential(n,r)}catch{return null}}}ir.TWITTER_SIGN_IN_METHOD="twitter.com";ir.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Jt._fromIdTokenResponse(e,r,s),o=qf(r);return new Ss({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=qf(r);return new Ss({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function qf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa extends Bn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,aa.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new aa(e,n,r,s)}}function nm(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?aa._fromErrorAndOperation(t,i,e,r):i})}async function $A(t,e,n=!1){const r=await Ui(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ss._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jA(t,e,n=!1){const{auth:r}=t;if(Gt(r.app))return Promise.reject(fr(r));const s="reauthenticate";try{const i=await Ui(t,nm(r,s,e,t),n);ce(i.idToken,r,"internal-error");const o=tu(i.idToken);ce(o,r,"internal-error");const{sub:c}=o;return ce(t.uid===c,r,"user-mismatch"),Ss._forOperation(t,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&en(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rm(t,e,n=!1){if(Gt(t.app))return Promise.reject(fr(t));const r="signIn",s=await nm(t,r,e),i=await Ss._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function qA(t,e){return rm(Ms(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HA(t){const e=Ms(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function zA(t,e,n){return Gt(t.app)?Promise.reject(fr(t)):qA(Ft(t),Ls.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&HA(t),r})}function WA(t,e,n,r){return Ft(t).onIdTokenChanged(e,n,r)}function KA(t,e,n){return Ft(t).beforeAuthStateChanged(e,n)}function GA(t){return Ft(t).signOut()}const ca="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ca,"1"),this.storage.removeItem(ca),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QA=1e3,JA=10;class im extends sm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Jg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);gA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,JA):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},QA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}im.type="LOCAL";const YA=im;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om extends sm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}om.type="SESSION";const am=om;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ba(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(n.origin,i)),l=await XA(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ba.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=iu("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(){return window}function eb(t){hn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cm(){return typeof hn().WorkerGlobalScope<"u"&&typeof hn().importScripts=="function"}async function tb(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function nb(){return navigator?.serviceWorker?.controller||null}function rb(){return cm()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lm="firebaseLocalStorageDb",sb=1,la="firebaseLocalStorage",um="fbase_key";class no{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function $a(t,e){return t.transaction([la],e?"readwrite":"readonly").objectStore(la)}function ib(){const t=indexedDB.deleteDatabase(lm);return new no(t).toPromise()}function hl(){const t=indexedDB.open(lm,sb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(la,{keyPath:um})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(la)?e(r):(r.close(),await ib(),e(await hl()))})})}async function Hf(t,e,n){const r=$a(t,!0).put({[um]:e,value:n});return new no(r).toPromise()}async function ob(t,e){const n=$a(t,!1).get(e),r=await new no(n).toPromise();return r===void 0?null:r.value}function zf(t,e){const n=$a(t,!0).delete(e);return new no(n).toPromise()}const ab=800,cb=3;class hm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>cb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return cm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ba._getInstance(rb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await tb(),!this.activeServiceWorker)return;this.sender=new ZA(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||nb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await hl();return await Hf(e,ca,"1"),await zf(e,ca),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Hf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>ob(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>zf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=$a(s,!1).getAll();return new no(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ab)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}hm.type="LOCAL";const lb=hm;new eo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ub(t,e){return e?kn(e):(ce(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou extends ru{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ys(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ys(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ys(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function hb(t){return rm(t.auth,new ou(t),t.bypassAuthState)}function fb(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),jA(n,new ou(t),t.bypassAuthState)}async function db(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),$A(n,new ou(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hb;case"linkViaPopup":case"linkViaRedirect":return db;case"reauthViaPopup":case"reauthViaRedirect":return fb;default:en(this.auth,"internal-error")}}resolve(e){Dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pb=new eo(2e3,1e4);class hs extends fm{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,hs.currentPopupAction&&hs.currentPopupAction.cancel(),hs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ce(e,this.auth,"internal-error"),e}async onExecution(){Dn(this.filter.length===1,"Popup operations only handle one event");const e=iu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(un(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(un(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,hs.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(un(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,pb.get())};e()}}hs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gb="pendingRedirect",xo=new Map;class mb extends fm{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=xo.get(this.auth._key());if(!e){try{const r=await _b(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}xo.set(this.auth._key(),e)}return this.bypassAuthState||xo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _b(t,e){const n=Eb(e),r=vb(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function yb(t,e){xo.set(t._key(),e)}function vb(t){return kn(t._redirectPersistence)}function Eb(t){return Do(gb,t.config.apiKey,t.name)}async function Tb(t,e,n=!1){if(Gt(t.app))return Promise.reject(fr(t));const r=Ms(t),s=ub(r,e),o=await new mb(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ib=600*1e3;class wb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ab(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!dm(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";n.onError(un(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ib&&this.cachedEventUids.clear(),this.cachedEventUids.has(Wf(e))}saveEventToCache(e){this.cachedEventUids.add(Wf(e)),this.lastProcessedEventTime=Date.now()}}function Wf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function dm({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function Ab(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dm(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bb(t,e={}){return Rr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Rb=/^https?/;async function Cb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await bb(t);for(const n of e)try{if(Pb(n))return}catch{}en(t,"unauthorized-domain")}function Pb(t){const e=ll(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Rb.test(n))return!1;if(Sb.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kb=new eo(3e4,6e4);function Kf(){const t=hn().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Vb(t){return new Promise((e,n)=>{function r(){Kf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Kf(),n(un(t,"network-request-failed"))},timeout:kb.get()})}if(hn().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(hn().gapi?.load)r();else{const s=AA("iframefcb");return hn()[s]=()=>{gapi.load?r():n(un(t,"network-request-failed"))},Xg(`${wA()}?onload=${s}`).catch(i=>n(i))}}).catch(e=>{throw Mo=null,e})}let Mo=null;function Nb(t){return Mo=Mo||Vb(t),Mo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ob=new eo(5e3,15e3),Db="__/auth/iframe",xb="emulator/auth/iframe",Mb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Lb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Fb(t){const e=t.config;ce(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?eu(e,xb):`https://${t.config.authDomain}/${Db}`,r={apiKey:e.apiKey,appName:t.name,v:xs},s=Lb.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Zi(r).slice(1)}`}async function Ub(t){const e=await Nb(t),n=hn().gapi;return ce(n,t,"internal-error"),e.open({where:document.body,url:Fb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Mb,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=un(t,"network-request-failed"),c=hn().setTimeout(()=>{i(o)},Ob.get());function l(){hn().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$b=500,jb=600,qb="_blank",Hb="http://localhost";class Gf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function zb(t,e,n,r=$b,s=jb){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={...Bb,width:r.toString(),height:s.toString(),top:i,left:o},u=wt().toLowerCase();n&&(c=zg(u)?qb:n),qg(u)&&(e=e||Hb,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[y,S])=>`${m}${y}=${S},`,"");if(pA(u)&&c!=="_self")return Wb(e||"",c),new Gf(null);const p=window.open(e||"",c,f);ce(p,t,"popup-blocked");try{p.focus()}catch{}return new Gf(p)}function Wb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kb="__/auth/handler",Gb="emulator/auth/handler",Qb=encodeURIComponent("fac");async function Qf(t,e,n,r,s,i){ce(t.config.authDomain,t,"auth-domain-config-required"),ce(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:xs,eventId:s};if(e instanceof tm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",MI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof to){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),u=l?`#${Qb}=${encodeURIComponent(l)}`:"";return`${Jb(t)}?${Zi(c).slice(1)}${u}`}function Jb({config:t}){return t.emulator?eu(t,Gb):`https://${t.authDomain}/${Kb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lc="webStorageSupport";class Yb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=am,this._completeRedirectFn=Tb,this._overrideRedirectResult=yb}async _openPopup(e,n,r,s){Dn(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await Qf(e,n,r,ll(),s);return zb(e,i,iu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Qf(e,n,r,ll(),s);return eb(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Dn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Ub(e),r=new wb(e);return n.register("authEvent",s=>(ce(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Lc,{type:Lc},s=>{const i=s?.[0]?.[Lc];i!==void 0&&n(!!i),en(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Cb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Jg()||Hg()||nu()}}const Xb=Yb;var Jf="@firebase/auth",Yf="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function tS(t){bs(new qr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;ce(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Yg(t)},u=new EA(r,s,i,l);return kA(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),bs(new qr("auth-internal",e=>{const n=Ms(e.getProvider("auth").getImmediate());return(r=>new Zb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),hr(Jf,Yf,eS(t)),hr(Jf,Yf,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS=300,rS=Sg("authIdTokenMaxAge")||nS;let Xf=null;const sS=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>rS)return;const s=n?.token;Xf!==s&&(Xf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Zf(t=Ng()){const e=Xl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=PA(t,{popupRedirectResolver:Xb,persistence:[lb,YA,am]}),r=Sg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=sS(i.toString());KA(n,o,()=>o(n.currentUser)),WA(n,c=>o(c))}}const s=Ag("auth");return s&&VA(n,`http://${s}`),n}function iS(){return document.getElementsByTagName("head")?.[0]??document}TA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=un("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",iS().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});tS("Browser");var oS="firebase",aS="12.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hr(oS,aS,"app");var ed=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var dr,pm;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,_){function v(){}v.prototype=_.prototype,w.F=_.prototype,w.prototype=new v,w.prototype.constructor=w,w.D=function(b,A,C){for(var T=Array(arguments.length-2),qe=2;qe<arguments.length;qe++)T[qe-2]=arguments[qe];return _.prototype[A].apply(b,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,_,v){v||(v=0);const b=Array(16);if(typeof _=="string")for(var A=0;A<16;++A)b[A]=_.charCodeAt(v++)|_.charCodeAt(v++)<<8|_.charCodeAt(v++)<<16|_.charCodeAt(v++)<<24;else for(A=0;A<16;++A)b[A]=_[v++]|_[v++]<<8|_[v++]<<16|_[v++]<<24;_=w.g[0],v=w.g[1],A=w.g[2];let C=w.g[3],T;T=_+(C^v&(A^C))+b[0]+3614090360&4294967295,_=v+(T<<7&4294967295|T>>>25),T=C+(A^_&(v^A))+b[1]+3905402710&4294967295,C=_+(T<<12&4294967295|T>>>20),T=A+(v^C&(_^v))+b[2]+606105819&4294967295,A=C+(T<<17&4294967295|T>>>15),T=v+(_^A&(C^_))+b[3]+3250441966&4294967295,v=A+(T<<22&4294967295|T>>>10),T=_+(C^v&(A^C))+b[4]+4118548399&4294967295,_=v+(T<<7&4294967295|T>>>25),T=C+(A^_&(v^A))+b[5]+1200080426&4294967295,C=_+(T<<12&4294967295|T>>>20),T=A+(v^C&(_^v))+b[6]+2821735955&4294967295,A=C+(T<<17&4294967295|T>>>15),T=v+(_^A&(C^_))+b[7]+4249261313&4294967295,v=A+(T<<22&4294967295|T>>>10),T=_+(C^v&(A^C))+b[8]+1770035416&4294967295,_=v+(T<<7&4294967295|T>>>25),T=C+(A^_&(v^A))+b[9]+2336552879&4294967295,C=_+(T<<12&4294967295|T>>>20),T=A+(v^C&(_^v))+b[10]+4294925233&4294967295,A=C+(T<<17&4294967295|T>>>15),T=v+(_^A&(C^_))+b[11]+2304563134&4294967295,v=A+(T<<22&4294967295|T>>>10),T=_+(C^v&(A^C))+b[12]+1804603682&4294967295,_=v+(T<<7&4294967295|T>>>25),T=C+(A^_&(v^A))+b[13]+4254626195&4294967295,C=_+(T<<12&4294967295|T>>>20),T=A+(v^C&(_^v))+b[14]+2792965006&4294967295,A=C+(T<<17&4294967295|T>>>15),T=v+(_^A&(C^_))+b[15]+1236535329&4294967295,v=A+(T<<22&4294967295|T>>>10),T=_+(A^C&(v^A))+b[1]+4129170786&4294967295,_=v+(T<<5&4294967295|T>>>27),T=C+(v^A&(_^v))+b[6]+3225465664&4294967295,C=_+(T<<9&4294967295|T>>>23),T=A+(_^v&(C^_))+b[11]+643717713&4294967295,A=C+(T<<14&4294967295|T>>>18),T=v+(C^_&(A^C))+b[0]+3921069994&4294967295,v=A+(T<<20&4294967295|T>>>12),T=_+(A^C&(v^A))+b[5]+3593408605&4294967295,_=v+(T<<5&4294967295|T>>>27),T=C+(v^A&(_^v))+b[10]+38016083&4294967295,C=_+(T<<9&4294967295|T>>>23),T=A+(_^v&(C^_))+b[15]+3634488961&4294967295,A=C+(T<<14&4294967295|T>>>18),T=v+(C^_&(A^C))+b[4]+3889429448&4294967295,v=A+(T<<20&4294967295|T>>>12),T=_+(A^C&(v^A))+b[9]+568446438&4294967295,_=v+(T<<5&4294967295|T>>>27),T=C+(v^A&(_^v))+b[14]+3275163606&4294967295,C=_+(T<<9&4294967295|T>>>23),T=A+(_^v&(C^_))+b[3]+4107603335&4294967295,A=C+(T<<14&4294967295|T>>>18),T=v+(C^_&(A^C))+b[8]+1163531501&4294967295,v=A+(T<<20&4294967295|T>>>12),T=_+(A^C&(v^A))+b[13]+2850285829&4294967295,_=v+(T<<5&4294967295|T>>>27),T=C+(v^A&(_^v))+b[2]+4243563512&4294967295,C=_+(T<<9&4294967295|T>>>23),T=A+(_^v&(C^_))+b[7]+1735328473&4294967295,A=C+(T<<14&4294967295|T>>>18),T=v+(C^_&(A^C))+b[12]+2368359562&4294967295,v=A+(T<<20&4294967295|T>>>12),T=_+(v^A^C)+b[5]+4294588738&4294967295,_=v+(T<<4&4294967295|T>>>28),T=C+(_^v^A)+b[8]+2272392833&4294967295,C=_+(T<<11&4294967295|T>>>21),T=A+(C^_^v)+b[11]+1839030562&4294967295,A=C+(T<<16&4294967295|T>>>16),T=v+(A^C^_)+b[14]+4259657740&4294967295,v=A+(T<<23&4294967295|T>>>9),T=_+(v^A^C)+b[1]+2763975236&4294967295,_=v+(T<<4&4294967295|T>>>28),T=C+(_^v^A)+b[4]+1272893353&4294967295,C=_+(T<<11&4294967295|T>>>21),T=A+(C^_^v)+b[7]+4139469664&4294967295,A=C+(T<<16&4294967295|T>>>16),T=v+(A^C^_)+b[10]+3200236656&4294967295,v=A+(T<<23&4294967295|T>>>9),T=_+(v^A^C)+b[13]+681279174&4294967295,_=v+(T<<4&4294967295|T>>>28),T=C+(_^v^A)+b[0]+3936430074&4294967295,C=_+(T<<11&4294967295|T>>>21),T=A+(C^_^v)+b[3]+3572445317&4294967295,A=C+(T<<16&4294967295|T>>>16),T=v+(A^C^_)+b[6]+76029189&4294967295,v=A+(T<<23&4294967295|T>>>9),T=_+(v^A^C)+b[9]+3654602809&4294967295,_=v+(T<<4&4294967295|T>>>28),T=C+(_^v^A)+b[12]+3873151461&4294967295,C=_+(T<<11&4294967295|T>>>21),T=A+(C^_^v)+b[15]+530742520&4294967295,A=C+(T<<16&4294967295|T>>>16),T=v+(A^C^_)+b[2]+3299628645&4294967295,v=A+(T<<23&4294967295|T>>>9),T=_+(A^(v|~C))+b[0]+4096336452&4294967295,_=v+(T<<6&4294967295|T>>>26),T=C+(v^(_|~A))+b[7]+1126891415&4294967295,C=_+(T<<10&4294967295|T>>>22),T=A+(_^(C|~v))+b[14]+2878612391&4294967295,A=C+(T<<15&4294967295|T>>>17),T=v+(C^(A|~_))+b[5]+4237533241&4294967295,v=A+(T<<21&4294967295|T>>>11),T=_+(A^(v|~C))+b[12]+1700485571&4294967295,_=v+(T<<6&4294967295|T>>>26),T=C+(v^(_|~A))+b[3]+2399980690&4294967295,C=_+(T<<10&4294967295|T>>>22),T=A+(_^(C|~v))+b[10]+4293915773&4294967295,A=C+(T<<15&4294967295|T>>>17),T=v+(C^(A|~_))+b[1]+2240044497&4294967295,v=A+(T<<21&4294967295|T>>>11),T=_+(A^(v|~C))+b[8]+1873313359&4294967295,_=v+(T<<6&4294967295|T>>>26),T=C+(v^(_|~A))+b[15]+4264355552&4294967295,C=_+(T<<10&4294967295|T>>>22),T=A+(_^(C|~v))+b[6]+2734768916&4294967295,A=C+(T<<15&4294967295|T>>>17),T=v+(C^(A|~_))+b[13]+1309151649&4294967295,v=A+(T<<21&4294967295|T>>>11),T=_+(A^(v|~C))+b[4]+4149444226&4294967295,_=v+(T<<6&4294967295|T>>>26),T=C+(v^(_|~A))+b[11]+3174756917&4294967295,C=_+(T<<10&4294967295|T>>>22),T=A+(_^(C|~v))+b[2]+718787259&4294967295,A=C+(T<<15&4294967295|T>>>17),T=v+(C^(A|~_))+b[9]+3951481745&4294967295,w.g[0]=w.g[0]+_&4294967295,w.g[1]=w.g[1]+(A+(T<<21&4294967295|T>>>11))&4294967295,w.g[2]=w.g[2]+A&4294967295,w.g[3]=w.g[3]+C&4294967295}r.prototype.v=function(w,_){_===void 0&&(_=w.length);const v=_-this.blockSize,b=this.C;let A=this.h,C=0;for(;C<_;){if(A==0)for(;C<=v;)s(this,w,C),C+=this.blockSize;if(typeof w=="string"){for(;C<_;)if(b[A++]=w.charCodeAt(C++),A==this.blockSize){s(this,b),A=0;break}}else for(;C<_;)if(b[A++]=w[C++],A==this.blockSize){s(this,b),A=0;break}}this.h=A,this.o+=_},r.prototype.A=function(){var w=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);w[0]=128;for(var _=1;_<w.length-8;++_)w[_]=0;_=this.o*8;for(var v=w.length-8;v<w.length;++v)w[v]=_&255,_/=256;for(this.v(w),w=Array(16),_=0,v=0;v<4;++v)for(let b=0;b<32;b+=8)w[_++]=this.g[v]>>>b&255;return w};function i(w,_){var v=c;return Object.prototype.hasOwnProperty.call(v,w)?v[w]:v[w]=_(w)}function o(w,_){this.h=_;const v=[];let b=!0;for(let A=w.length-1;A>=0;A--){const C=w[A]|0;b&&C==_||(v[A]=C,b=!1)}this.g=v}var c={};function l(w){return-128<=w&&w<128?i(w,function(_){return new o([_|0],_<0?-1:0)}):new o([w|0],w<0?-1:0)}function u(w){if(isNaN(w)||!isFinite(w))return p;if(w<0)return O(u(-w));const _=[];let v=1;for(let b=0;w>=v;b++)_[b]=w/v|0,v*=4294967296;return new o(_,0)}function f(w,_){if(w.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(w.charAt(0)=="-")return O(f(w.substring(1),_));if(w.indexOf("-")>=0)throw Error('number format error: interior "-" character');const v=u(Math.pow(_,8));let b=p;for(let C=0;C<w.length;C+=8){var A=Math.min(8,w.length-C);const T=parseInt(w.substring(C,C+A),_);A<8?(A=u(Math.pow(_,A)),b=b.j(A).add(u(T))):(b=b.j(v),b=b.add(u(T)))}return b}var p=l(0),m=l(1),y=l(16777216);t=o.prototype,t.m=function(){if(R(this))return-O(this).m();let w=0,_=1;for(let v=0;v<this.g.length;v++){const b=this.i(v);w+=(b>=0?b:4294967296+b)*_,_*=4294967296}return w},t.toString=function(w){if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(S(this))return"0";if(R(this))return"-"+O(this).toString(w);const _=u(Math.pow(w,6));var v=this;let b="";for(;;){const A=K(v,_).g;v=B(v,A.j(_));let C=((v.g.length>0?v.g[0]:v.h)>>>0).toString(w);if(v=A,S(v))return C+b;for(;C.length<6;)C="0"+C;b=C+b}},t.i=function(w){return w<0?0:w<this.g.length?this.g[w]:this.h};function S(w){if(w.h!=0)return!1;for(let _=0;_<w.g.length;_++)if(w.g[_]!=0)return!1;return!0}function R(w){return w.h==-1}t.l=function(w){return w=B(this,w),R(w)?-1:S(w)?0:1};function O(w){const _=w.g.length,v=[];for(let b=0;b<_;b++)v[b]=~w.g[b];return new o(v,~w.h).add(m)}t.abs=function(){return R(this)?O(this):this},t.add=function(w){const _=Math.max(this.g.length,w.g.length),v=[];let b=0;for(let A=0;A<=_;A++){let C=b+(this.i(A)&65535)+(w.i(A)&65535),T=(C>>>16)+(this.i(A)>>>16)+(w.i(A)>>>16);b=T>>>16,C&=65535,T&=65535,v[A]=T<<16|C}return new o(v,v[v.length-1]&-2147483648?-1:0)};function B(w,_){return w.add(O(_))}t.j=function(w){if(S(this)||S(w))return p;if(R(this))return R(w)?O(this).j(O(w)):O(O(this).j(w));if(R(w))return O(this.j(O(w)));if(this.l(y)<0&&w.l(y)<0)return u(this.m()*w.m());const _=this.g.length+w.g.length,v=[];for(var b=0;b<2*_;b++)v[b]=0;for(b=0;b<this.g.length;b++)for(let A=0;A<w.g.length;A++){const C=this.i(b)>>>16,T=this.i(b)&65535,qe=w.i(A)>>>16,ft=w.i(A)&65535;v[2*b+2*A]+=T*ft,x(v,2*b+2*A),v[2*b+2*A+1]+=C*ft,x(v,2*b+2*A+1),v[2*b+2*A+1]+=T*qe,x(v,2*b+2*A+1),v[2*b+2*A+2]+=C*qe,x(v,2*b+2*A+2)}for(w=0;w<_;w++)v[w]=v[2*w+1]<<16|v[2*w];for(w=_;w<2*_;w++)v[w]=0;return new o(v,0)};function x(w,_){for(;(w[_]&65535)!=w[_];)w[_+1]+=w[_]>>>16,w[_]&=65535,_++}function z(w,_){this.g=w,this.h=_}function K(w,_){if(S(_))throw Error("division by zero");if(S(w))return new z(p,p);if(R(w))return _=K(O(w),_),new z(O(_.g),O(_.h));if(R(_))return _=K(w,O(_)),new z(O(_.g),_.h);if(w.g.length>30){if(R(w)||R(_))throw Error("slowDivide_ only works with positive integers.");for(var v=m,b=_;b.l(w)<=0;)v=re(v),b=re(b);var A=ye(v,1),C=ye(b,1);for(b=ye(b,2),v=ye(v,2);!S(b);){var T=C.add(b);T.l(w)<=0&&(A=A.add(v),C=T),b=ye(b,1),v=ye(v,1)}return _=B(w,A.j(_)),new z(A,_)}for(A=p;w.l(_)>=0;){for(v=Math.max(1,Math.floor(w.m()/_.m())),b=Math.ceil(Math.log(v)/Math.LN2),b=b<=48?1:Math.pow(2,b-48),C=u(v),T=C.j(_);R(T)||T.l(w)>0;)v-=b,C=u(v),T=C.j(_);S(C)&&(C=m),A=A.add(C),w=B(w,T)}return new z(A,w)}t.B=function(w){return K(this,w).h},t.and=function(w){const _=Math.max(this.g.length,w.g.length),v=[];for(let b=0;b<_;b++)v[b]=this.i(b)&w.i(b);return new o(v,this.h&w.h)},t.or=function(w){const _=Math.max(this.g.length,w.g.length),v=[];for(let b=0;b<_;b++)v[b]=this.i(b)|w.i(b);return new o(v,this.h|w.h)},t.xor=function(w){const _=Math.max(this.g.length,w.g.length),v=[];for(let b=0;b<_;b++)v[b]=this.i(b)^w.i(b);return new o(v,this.h^w.h)};function re(w){const _=w.g.length+1,v=[];for(let b=0;b<_;b++)v[b]=w.i(b)<<1|w.i(b-1)>>>31;return new o(v,w.h)}function ye(w,_){const v=_>>5;_%=32;const b=w.g.length-v,A=[];for(let C=0;C<b;C++)A[C]=_>0?w.i(C+v)>>>_|w.i(C+v+1)<<32-_:w.i(C+v);return new o(A,w.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,pm=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,dr=o}).apply(typeof ed<"u"?ed:typeof self<"u"?self:typeof window<"u"?window:{});var Ao=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var gm,li,mm,Lo,fl,_m,ym,vm;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ao=="object"&&Ao];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var k=a[g];if(!(k in d))break e;d=d[k]}a=a[a.length-1],g=d[a],h=h(g),h!=g&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(h){var d=[],g;for(g in h)Object.prototype.hasOwnProperty.call(h,g)&&d.push([g,h[g]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function l(a,h,d){return a.call.apply(a.bind,arguments)}function u(a,h,d){return u=l,u.apply(null,arguments)}function f(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function p(a,h){function d(){}d.prototype=h.prototype,a.Z=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(g,k,N){for(var W=Array(arguments.length-2),me=2;me<arguments.length;me++)W[me-2]=arguments[me];return h.prototype[k].apply(g,W)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function y(a){const h=a.length;if(h>0){const d=Array(h);for(let g=0;g<h;g++)d[g]=a[g];return d}return[]}function S(a,h){for(let g=1;g<arguments.length;g++){const k=arguments[g];var d=typeof k;if(d=d!="object"?d:k?Array.isArray(k)?"array":d:"null",d=="array"||d=="object"&&typeof k.length=="number"){d=a.length||0;const N=k.length||0;a.length=d+N;for(let W=0;W<N;W++)a[d+W]=k[W]}else a.push(k)}}class R{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function O(a){o.setTimeout(()=>{throw a},0)}function B(){var a=w;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class x{constructor(){this.h=this.g=null}add(h,d){const g=z.get();g.set(h,d),this.h?this.h.next=g:this.g=g,this.h=g}}var z=new R(()=>new K,a=>a.reset());class K{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let re,ye=!1,w=new x,_=()=>{const a=Promise.resolve(void 0);re=()=>{a.then(v)}};function v(){for(var a;a=B();){try{a.h.call(a.g)}catch(d){O(d)}var h=z;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}ye=!1}function b(){this.u=this.u,this.C=this.C}b.prototype.u=!1,b.prototype.dispose=function(){this.u||(this.u=!0,this.N())},b.prototype[Symbol.dispose]=function(){this.dispose()},b.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function A(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var C=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,h),o.removeEventListener("test",d,h)}catch{}return a})();function T(a){return/^[\s\xa0]*$/.test(a)}function qe(a,h){A.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p(qe,A),qe.prototype.init=function(a,h){const d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&qe.Z.h.call(this)},qe.prototype.h=function(){qe.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ft="closure_listenable_"+(Math.random()*1e6|0),Me=0;function de(a,h,d,g,k){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!g,this.ha=k,this.key=++Me,this.da=this.fa=!1}function Ae(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ct(a,h,d){for(const g in a)h.call(d,a[g],g,a)}function tn(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function Vt(a){const h={};for(const d in a)h[d]=a[d];return h}const it="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function wn(a,h){let d,g;for(let k=1;k<arguments.length;k++){g=arguments[k];for(d in g)a[d]=g[d];for(let N=0;N<it.length;N++)d=it[N],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function zt(a){this.src=a,this.g={},this.h=0}zt.prototype.add=function(a,h,d,g,k){const N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);const W=dt(a,h,g,k);return W>-1?(h=a[W],d||(h.fa=!1)):(h=new de(h,this.src,N,!!g,k),h.fa=d,a.push(h)),h};function jn(a,h){const d=h.type;if(d in a.g){var g=a.g[d],k=Array.prototype.indexOf.call(g,h,void 0),N;(N=k>=0)&&Array.prototype.splice.call(g,k,1),N&&(Ae(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function dt(a,h,d,g){for(let k=0;k<a.length;++k){const N=a[k];if(!N.da&&N.listener==h&&N.capture==!!d&&N.ha==g)return k}return-1}var M="closure_lm_"+(Math.random()*1e6|0),Y={};function Q(a,h,d,g,k){if(Array.isArray(h)){for(let N=0;N<h.length;N++)Q(a,h[N],d,g,k);return null}return d=G(d),a&&a[ft]?a.J(h,d,c(g)?!!g.capture:!1,k):Z(a,h,d,!1,g,k)}function Z(a,h,d,g,k,N){if(!h)throw Error("Invalid event type");const W=c(k)?!!k.capture:!!k;let me=U(a);if(me||(a[M]=me=new zt(a)),d=me.add(h,d,g,W,N),d.proxy)return d;if(g=Ne(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)C||(k=W),k===void 0&&(k=!1),a.addEventListener(h.toString(),g,k);else if(a.attachEvent)a.attachEvent(P(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Ne(){function a(d){return h.call(a.src,a.listener,d)}const h=L;return a}function E(a,h,d,g,k){if(Array.isArray(h))for(var N=0;N<h.length;N++)E(a,h[N],d,g,k);else g=c(g)?!!g.capture:!!g,d=G(d),a&&a[ft]?(a=a.i,N=String(h).toString(),N in a.g&&(h=a.g[N],d=dt(h,d,g,k),d>-1&&(Ae(h[d]),Array.prototype.splice.call(h,d,1),h.length==0&&(delete a.g[N],a.h--)))):a&&(a=U(a))&&(h=a.g[h.toString()],a=-1,h&&(a=dt(h,d,g,k)),(d=a>-1?h[a]:null)&&I(d))}function I(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[ft])jn(h.i,a);else{var d=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(d,g,a.capture):h.detachEvent?h.detachEvent(P(d),g):h.addListener&&h.removeListener&&h.removeListener(g),(d=U(h))?(jn(d,a),d.h==0&&(d.src=null,h[M]=null)):Ae(a)}}}function P(a){return a in Y?Y[a]:Y[a]="on"+a}function L(a,h){if(a.da)a=!0;else{h=new qe(h,this);const d=a.listener,g=a.ha||a.src;a.fa&&I(a),a=d.call(g,h)}return a}function U(a){return a=a[M],a instanceof zt?a:null}var D="__closure_events_fn_"+(Math.random()*1e9>>>0);function G(a){return typeof a=="function"?a:(a[D]||(a[D]=function(h){return a.handleEvent(h)}),a[D])}function H(){b.call(this),this.i=new zt(this),this.M=this,this.G=null}p(H,b),H.prototype[ft]=!0,H.prototype.removeEventListener=function(a,h,d,g){E(this,a,h,d,g)};function j(a,h){var d,g=a.G;if(g)for(d=[];g;g=g.G)d.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new A(h,a);else if(h instanceof A)h.target=h.target||a;else{var k=h;h=new A(g,a),wn(h,k)}k=!0;let N,W;if(d)for(W=d.length-1;W>=0;W--)N=h.g=d[W],k=q(N,g,!0,h)&&k;if(N=h.g=a,k=q(N,g,!0,h)&&k,k=q(N,g,!1,h)&&k,d)for(W=0;W<d.length;W++)N=h.g=d[W],k=q(N,g,!1,h)&&k}H.prototype.N=function(){if(H.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const d=a.g[h];for(let g=0;g<d.length;g++)Ae(d[g]);delete a.g[h],a.h--}}this.G=null},H.prototype.J=function(a,h,d,g){return this.i.add(String(a),h,!1,d,g)},H.prototype.K=function(a,h,d,g){return this.i.add(String(a),h,!0,d,g)};function q(a,h,d,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let k=!0;for(let N=0;N<h.length;++N){const W=h[N];if(W&&!W.da&&W.capture==d){const me=W.listener,Ye=W.ha||W.src;W.fa&&jn(a.i,W),k=me.call(Ye,g)!==!1&&k}}return k&&!g.defaultPrevented}function ie(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function J(a){a.g=ie(()=>{a.g=null,a.i&&(a.i=!1,J(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class ne extends b{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:J(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ae(a){b.call(this),this.h=a,this.g={}}p(ae,b);var ve=[];function Oe(a){Ct(a.g,function(h,d){this.g.hasOwnProperty(d)&&I(h)},a),a.g={}}ae.prototype.N=function(){ae.Z.N.call(this),Oe(this)},ae.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Se=o.JSON.stringify,pt=o.JSON.parse,gt=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Nt(){}function Ot(){}var Wt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Zr(){A.call(this,"d")}p(Zr,A);function ot(){A.call(this,"c")}p(ot,A);var et={},js=null;function Cr(){return js=js||new H}et.Ia="serverreachability";function Lu(a){A.call(this,et.Ia,a)}p(Lu,A);function qs(a){const h=Cr();j(h,new Lu(h))}et.STAT_EVENT="statevent";function Fu(a,h){A.call(this,et.STAT_EVENT,a),this.stat=h}p(Fu,A);function At(a){const h=Cr();j(h,new Fu(h,a))}et.Ja="timingevent";function Uu(a,h){A.call(this,et.Ja,a),this.size=h}p(Uu,A);function Hs(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function zs(){this.g=!0}zs.prototype.ua=function(){this.g=!1};function J_(a,h,d,g,k,N){a.info(function(){if(a.g)if(N){var W="",me=N.split("&");for(let De=0;De<me.length;De++){var Ye=me[De].split("=");if(Ye.length>1){const tt=Ye[0];Ye=Ye[1];const rn=tt.split("_");W=rn.length>=2&&rn[1]=="type"?W+(tt+"="+Ye+"&"):W+(tt+"=redacted&")}}}else W=null;else W=N;return"XMLHTTP REQ ("+g+") [attempt "+k+"]: "+h+`
`+d+`
`+W})}function Y_(a,h,d,g,k,N,W){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+k+"]: "+h+`
`+d+`
`+N+" "+W})}function es(a,h,d,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+Z_(a,d)+(g?" "+g:"")})}function X_(a,h){a.info(function(){return"TIMEOUT: "+h})}zs.prototype.info=function(){};function Z_(a,h){if(!a.g)return h;if(!h)return null;try{const N=JSON.parse(h);if(N){for(a=0;a<N.length;a++)if(Array.isArray(N[a])){var d=N[a];if(!(d.length<2)){var g=d[1];if(Array.isArray(g)&&!(g.length<1)){var k=g[0];if(k!="noop"&&k!="stop"&&k!="close")for(let W=1;W<g.length;W++)g[W]=""}}}}return Se(N)}catch{return h}}var co={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Bu={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},$u;function rc(){}p(rc,Nt),rc.prototype.g=function(){return new XMLHttpRequest},$u=new rc;function Ws(a){return encodeURIComponent(String(a))}function ey(a){var h=1;a=a.split(":");const d=[];for(;h>0&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function qn(a,h,d,g){this.j=a,this.i=h,this.l=d,this.S=g||1,this.V=new ae(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new ju}function ju(){this.i=null,this.g="",this.h=!1}var qu={},sc={};function ic(a,h,d){a.M=1,a.A=uo(nn(h)),a.u=d,a.R=!0,Hu(a,null)}function Hu(a,h){a.F=Date.now(),lo(a),a.B=nn(a.A);var d=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),rh(d.i,"t",g),a.C=0,d=a.j.L,a.h=new ju,a.g=Th(a.j,d?h:null,!a.u),a.P>0&&(a.O=new ne(u(a.Y,a,a.g),a.P)),h=a.V,d=a.g,g=a.ba;var k="readystatechange";Array.isArray(k)||(k&&(ve[0]=k.toString()),k=ve);for(let N=0;N<k.length;N++){const W=Q(d,k[N],g||h.handleEvent,!1,h.h||h);if(!W)break;h.g[W.key]=W}h=a.J?Vt(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),qs(),J_(a.i,a.v,a.B,a.l,a.S,a.u)}qn.prototype.ba=function(a){a=a.target;const h=this.O;h&&Wn(a)==3?h.j():this.Y(a)},qn.prototype.Y=function(a){try{if(a==this.g)e:{const me=Wn(this.g),Ye=this.g.ya(),De=this.g.ca();if(!(me<3)&&(me!=3||this.g&&(this.h.h||this.g.la()||uh(this.g)))){this.K||me!=4||Ye==7||(Ye==8||De<=0?qs(3):qs(2)),oc(this);var h=this.g.ca();this.X=h;var d=ty(this);if(this.o=h==200,Y_(this.i,this.v,this.B,this.l,this.S,me,h),this.o){if(this.U&&!this.L){t:{if(this.g){var g,k=this.g;if((g=k.g?k.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(g)){var N=g;break t}}N=null}if(a=N)es(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ac(this,a);else{this.o=!1,this.m=3,At(12),Pr(this),Ks(this);break e}}if(this.R){a=!0;let tt;for(;!this.K&&this.C<d.length;)if(tt=ny(this,d),tt==sc){me==4&&(this.m=4,At(14),a=!1),es(this.i,this.l,null,"[Incomplete Response]");break}else if(tt==qu){this.m=4,At(15),es(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else es(this.i,this.l,tt,null),ac(this,tt);if(zu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),me!=4||d.length!=0||this.h.h||(this.m=1,At(16),a=!1),this.o=this.o&&a,!a)es(this.i,this.l,d,"[Invalid Chunked Response]"),Pr(this),Ks(this);else if(d.length>0&&!this.W){this.W=!0;var W=this.j;W.g==this&&W.aa&&!W.P&&(W.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),gc(W),W.P=!0,At(11))}}else es(this.i,this.l,d,null),ac(this,d);me==4&&Pr(this),this.o&&!this.K&&(me==4?_h(this.j,this):(this.o=!1,lo(this)))}else my(this.g),h==400&&d.indexOf("Unknown SID")>0?(this.m=3,At(12)):(this.m=0,At(13)),Pr(this),Ks(this)}}}catch{}finally{}};function ty(a){if(!zu(a))return a.g.la();const h=uh(a.g);if(h==="")return"";let d="";const g=h.length,k=Wn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Pr(a),Ks(a),"";a.h.i=new o.TextDecoder}for(let N=0;N<g;N++)a.h.h=!0,d+=a.h.i.decode(h[N],{stream:!(k&&N==g-1)});return h.length=0,a.h.g+=d,a.C=0,a.h.g}function zu(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function ny(a,h){var d=a.C,g=h.indexOf(`
`,d);return g==-1?sc:(d=Number(h.substring(d,g)),isNaN(d)?qu:(g+=1,g+d>h.length?sc:(h=h.slice(g,g+d),a.C=g+d,h)))}qn.prototype.cancel=function(){this.K=!0,Pr(this)};function lo(a){a.T=Date.now()+a.H,Wu(a,a.H)}function Wu(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Hs(u(a.aa,a),h)}function oc(a){a.D&&(o.clearTimeout(a.D),a.D=null)}qn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(X_(this.i,this.B),this.M!=2&&(qs(),At(17)),Pr(this),this.m=2,Ks(this)):Wu(this,this.T-a)};function Ks(a){a.j.I==0||a.K||_h(a.j,a)}function Pr(a){oc(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,Oe(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function ac(a,h){try{var d=a.j;if(d.I!=0&&(d.g==a||cc(d.h,a))){if(!a.L&&cc(d.h,a)&&d.I==3){try{var g=d.Ba.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var k=g;if(k[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)mo(d),po(d);else break e;pc(d),At(18)}}else d.xa=k[1],0<d.xa-d.K&&k[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=Hs(u(d.Va,d),6e3));Qu(d.h)<=1&&d.ta&&(d.ta=void 0)}else Vr(d,11)}else if((a.L||d.g==a)&&mo(d),!T(h))for(k=d.Ba.g.parse(h),h=0;h<k.length;h++){let De=k[h];const tt=De[0];if(!(tt<=d.K))if(d.K=tt,De=De[1],d.I==2)if(De[0]=="c"){d.M=De[1],d.ba=De[2];const rn=De[3];rn!=null&&(d.ka=rn,d.j.info("VER="+d.ka));const Nr=De[4];Nr!=null&&(d.za=Nr,d.j.info("SVER="+d.za));const Kn=De[5];Kn!=null&&typeof Kn=="number"&&Kn>0&&(g=1.5*Kn,d.O=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const Gn=a.g;if(Gn){const yo=Gn.g?Gn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(yo){var N=g.h;N.g||yo.indexOf("spdy")==-1&&yo.indexOf("quic")==-1&&yo.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(lc(N,N.h),N.h=null))}if(g.G){const mc=Gn.g?Gn.g.getResponseHeader("X-HTTP-Session-Id"):null;mc&&(g.wa=mc,Ue(g.J,g.G,mc))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),g=d;var W=a;if(g.na=Eh(g,g.L?g.ba:null,g.W),W.L){Ju(g.h,W);var me=W,Ye=g.O;Ye&&(me.H=Ye),me.D&&(oc(me),lo(me)),g.g=W}else gh(g);d.i.length>0&&go(d)}else De[0]!="stop"&&De[0]!="close"||Vr(d,7);else d.I==3&&(De[0]=="stop"||De[0]=="close"?De[0]=="stop"?Vr(d,7):dc(d):De[0]!="noop"&&d.l&&d.l.qa(De),d.A=0)}}qs(4)}catch{}}var ry=class{constructor(a,h){this.g=a,this.map=h}};function Ku(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Gu(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Qu(a){return a.h?1:a.g?a.g.size:0}function cc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function lc(a,h){a.g?a.g.add(h):a.h=h}function Ju(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Ku.prototype.cancel=function(){if(this.i=Yu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Yu(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.G);return h}return y(a.i)}var Xu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sy(a,h){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const g=a[d].indexOf("=");let k,N=null;g>=0?(k=a[d].substring(0,g),N=a[d].substring(g+1)):k=a[d],h(k,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function Hn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof Hn?(this.l=a.l,Gs(this,a.j),this.o=a.o,this.g=a.g,Qs(this,a.u),this.h=a.h,uc(this,sh(a.i)),this.m=a.m):a&&(h=String(a).match(Xu))?(this.l=!1,Gs(this,h[1]||"",!0),this.o=Js(h[2]||""),this.g=Js(h[3]||"",!0),Qs(this,h[4]),this.h=Js(h[5]||"",!0),uc(this,h[6]||"",!0),this.m=Js(h[7]||"")):(this.l=!1,this.i=new Xs(null,this.l))}Hn.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(Ys(h,Zu,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Ys(h,Zu,!0),"@"),a.push(Ws(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Ys(d,d.charAt(0)=="/"?ay:oy,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Ys(d,ly)),a.join("")},Hn.prototype.resolve=function(a){const h=nn(this);let d=!!a.j;d?Gs(h,a.j):d=!!a.o,d?h.o=a.o:d=!!a.g,d?h.g=a.g:d=a.u!=null;var g=a.h;if(d)Qs(h,a.u);else if(d=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var k=h.h.lastIndexOf("/");k!=-1&&(g=h.h.slice(0,k+1)+g)}if(k=g,k==".."||k==".")g="";else if(k.indexOf("./")!=-1||k.indexOf("/.")!=-1){g=k.lastIndexOf("/",0)==0,k=k.split("/");const N=[];for(let W=0;W<k.length;){const me=k[W++];me=="."?g&&W==k.length&&N.push(""):me==".."?((N.length>1||N.length==1&&N[0]!="")&&N.pop(),g&&W==k.length&&N.push("")):(N.push(me),g=!0)}g=N.join("/")}else g=k}return d?h.h=g:d=a.i.toString()!=="",d?uc(h,sh(a.i)):d=!!a.m,d&&(h.m=a.m),h};function nn(a){return new Hn(a)}function Gs(a,h,d){a.j=d?Js(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Qs(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function uc(a,h,d){h instanceof Xs?(a.i=h,uy(a.i,a.l)):(d||(h=Ys(h,cy)),a.i=new Xs(h,a.l))}function Ue(a,h,d){a.i.set(h,d)}function uo(a){return Ue(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Js(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ys(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,iy),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function iy(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Zu=/[#\/\?@]/g,oy=/[#\?:]/g,ay=/[#\?]/g,cy=/[#\?@]/g,ly=/#/g;function Xs(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function kr(a){a.g||(a.g=new Map,a.h=0,a.i&&sy(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=Xs.prototype,t.add=function(a,h){kr(this),this.i=null,a=ts(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function eh(a,h){kr(a),h=ts(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function th(a,h){return kr(a),h=ts(a,h),a.g.has(h)}t.forEach=function(a,h){kr(this),this.g.forEach(function(d,g){d.forEach(function(k){a.call(h,k,g,this)},this)},this)};function nh(a,h){kr(a);let d=[];if(typeof h=="string")th(a,h)&&(d=d.concat(a.g.get(ts(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)d=d.concat(a[h]);return d}t.set=function(a,h){return kr(this),this.i=null,a=ts(this,a),th(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=nh(this,a),a.length>0?String(a[0]):h):h};function rh(a,h,d){eh(a,h),d.length>0&&(a.i=null,a.g.set(ts(a,h),y(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let g=0;g<h.length;g++){var d=h[g];const k=Ws(d);d=nh(this,d);for(let N=0;N<d.length;N++){let W=k;d[N]!==""&&(W+="="+Ws(d[N])),a.push(W)}}return this.i=a.join("&")};function sh(a){const h=new Xs;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function ts(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function uy(a,h){h&&!a.j&&(kr(a),a.i=null,a.g.forEach(function(d,g){const k=g.toLowerCase();g!=k&&(eh(this,g),rh(this,k,d))},a)),a.j=h}function hy(a,h){const d=new zs;if(o.Image){const g=new Image;g.onload=f(zn,d,"TestLoadImage: loaded",!0,h,g),g.onerror=f(zn,d,"TestLoadImage: error",!1,h,g),g.onabort=f(zn,d,"TestLoadImage: abort",!1,h,g),g.ontimeout=f(zn,d,"TestLoadImage: timeout",!1,h,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function fy(a,h){const d=new zs,g=new AbortController,k=setTimeout(()=>{g.abort(),zn(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(N=>{clearTimeout(k),N.ok?zn(d,"TestPingServer: ok",!0,h):zn(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(k),zn(d,"TestPingServer: error",!1,h)})}function zn(a,h,d,g,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),g(d)}catch{}}function dy(){this.g=new gt}function hc(a){this.i=a.Sb||null,this.h=a.ab||!1}p(hc,Nt),hc.prototype.g=function(){return new ho(this.i,this.h)};function ho(a,h){H.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(ho,H),t=ho.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,ei(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Zs(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ei(this)),this.g&&(this.readyState=3,ei(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;ih(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function ih(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Zs(this):ei(this),this.readyState==3&&ih(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Zs(this))},t.Na=function(a){this.g&&(this.response=a,Zs(this))},t.ga=function(){this.g&&Zs(this)};function Zs(a){a.readyState=4,a.l=null,a.j=null,a.B=null,ei(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function ei(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ho.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function oh(a){let h="";return Ct(a,function(d,g){h+=g,h+=":",h+=d,h+=`\r
`}),h}function fc(a,h,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=oh(d),typeof a=="string"?d!=null&&Ws(d):Ue(a,h,d))}function He(a){H.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(He,H);var py=/^https?$/i,gy=["POST","PUT"];t=He.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():$u.g(),this.g.onreadystatechange=m(u(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(N){ah(this,N);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var k in g)d.set(k,g[k]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const N of g.keys())d.set(N,g.get(N));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(N=>N.toLowerCase()=="content-type"),k=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(gy,h,void 0)>=0)||g||k||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,W]of d)this.g.setRequestHeader(N,W);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(N){ah(this,N)}};function ah(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,ch(a),fo(a)}function ch(a){a.A||(a.A=!0,j(a,"complete"),j(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,j(this,"complete"),j(this,"abort"),fo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),fo(this,!0)),He.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?lh(this):this.Xa())},t.Xa=function(){lh(this)};function lh(a){if(a.h&&typeof i<"u"){if(a.v&&Wn(a)==4)setTimeout(a.Ca.bind(a),0);else if(j(a,"readystatechange"),Wn(a)==4){a.h=!1;try{const N=a.ca();e:switch(N){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var g;if(g=N===0){let W=String(a.D).match(Xu)[1]||null;!W&&o.self&&o.self.location&&(W=o.self.location.protocol.slice(0,-1)),g=!py.test(W?W.toLowerCase():"")}d=g}if(d)j(a,"complete"),j(a,"success");else{a.o=6;try{var k=Wn(a)>2?a.g.statusText:""}catch{k=""}a.l=k+" ["+a.ca()+"]",ch(a)}}finally{fo(a)}}}}function fo(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,h||j(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Wn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Wn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),pt(h)}};function uh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function my(a){const h={};a=(a.g&&Wn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(T(a[g]))continue;var d=ey(a[g]);const k=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const N=h[k]||[];h[k]=N,N.push(d)}tn(h,function(g){return g.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function ti(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function hh(a){this.za=0,this.i=[],this.j=new zs,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=ti("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=ti("baseRetryDelayMs",5e3,a),this.Za=ti("retryDelaySeedMs",1e4,a),this.Ta=ti("forwardChannelMaxRetries",2,a),this.va=ti("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Ku(a&&a.concurrentRequestLimit),this.Ba=new dy,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=hh.prototype,t.ka=8,t.I=1,t.connect=function(a,h,d,g){At(0),this.W=a,this.H=h||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.J=Eh(this,null,this.W),go(this)};function dc(a){if(fh(a),a.I==3){var h=a.V++,d=nn(a.J);if(Ue(d,"SID",a.M),Ue(d,"RID",h),Ue(d,"TYPE","terminate"),ni(a,d),h=new qn(a,a.j,h),h.M=2,h.A=uo(nn(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=h.A,d=!0),d||(h.g=Th(h.j,null),h.g.ea(h.A)),h.F=Date.now(),lo(h)}vh(a)}function po(a){a.g&&(gc(a),a.g.cancel(),a.g=null)}function fh(a){po(a),a.v&&(o.clearTimeout(a.v),a.v=null),mo(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function go(a){if(!Gu(a.h)&&!a.m){a.m=!0;var h=a.Ea;re||_(),ye||(re(),ye=!0),w.add(h,a),a.D=0}}function _y(a,h){return Qu(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Hs(u(a.Ea,a,h),yh(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const k=new qn(this,this.j,a);let N=this.o;if(this.U&&(N?(N=Vt(N),wn(N,this.U)):N=this.U),this.u!==null||this.R||(k.J=N,N=null),this.S)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,h>4096){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=ph(this,k,h),d=nn(this.J),Ue(d,"RID",a),Ue(d,"CVER",22),this.G&&Ue(d,"X-HTTP-Session-Id",this.G),ni(this,d),N&&(this.R?h="headers="+Ws(oh(N))+"&"+h:this.u&&fc(d,this.u,N)),lc(this.h,k),this.Ra&&Ue(d,"TYPE","init"),this.S?(Ue(d,"$req",h),Ue(d,"SID","null"),k.U=!0,ic(k,d,null)):ic(k,d,h),this.I=2}}else this.I==3&&(a?dh(this,a):this.i.length==0||Gu(this.h)||dh(this))};function dh(a,h){var d;h?d=h.l:d=a.V++;const g=nn(a.J);Ue(g,"SID",a.M),Ue(g,"RID",d),Ue(g,"AID",a.K),ni(a,g),a.u&&a.o&&fc(g,a.u,a.o),d=new qn(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),h&&(a.i=h.G.concat(a.i)),h=ph(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),lc(a.h,d),ic(d,g,h)}function ni(a,h){a.H&&Ct(a.H,function(d,g){Ue(h,g,d)}),a.l&&Ct({},function(d,g){Ue(h,g,d)})}function ph(a,h,d){d=Math.min(a.i.length,d);const g=a.l?u(a.l.Ka,a.l,a):null;e:{var k=a.i;let me=-1;for(;;){const Ye=["count="+d];me==-1?d>0?(me=k[0].g,Ye.push("ofs="+me)):me=0:Ye.push("ofs="+me);let De=!0;for(let tt=0;tt<d;tt++){var N=k[tt].g;const rn=k[tt].map;if(N-=me,N<0)me=Math.max(0,k[tt].g-100),De=!1;else try{N="req"+N+"_"||"";try{var W=rn instanceof Map?rn:Object.entries(rn);for(const[Nr,Kn]of W){let Gn=Kn;c(Kn)&&(Gn=Se(Kn)),Ye.push(N+Nr+"="+encodeURIComponent(Gn))}}catch(Nr){throw Ye.push(N+"type="+encodeURIComponent("_badmap")),Nr}}catch{g&&g(rn)}}if(De){W=Ye.join("&");break e}}W=void 0}return a=a.i.splice(0,d),h.G=a,W}function gh(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;re||_(),ye||(re(),ye=!0),w.add(h,a),a.A=0}}function pc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Hs(u(a.Da,a),yh(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,mh(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Hs(u(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,At(10),po(this),mh(this))};function gc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function mh(a){a.g=new qn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=nn(a.na);Ue(h,"RID","rpc"),Ue(h,"SID",a.M),Ue(h,"AID",a.K),Ue(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&Ue(h,"TO",a.ia),Ue(h,"TYPE","xmlhttp"),ni(a,h),a.u&&a.o&&fc(h,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=uo(nn(h)),d.u=null,d.R=!0,Hu(d,a)}t.Va=function(){this.C!=null&&(this.C=null,po(this),pc(this),At(19))};function mo(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function _h(a,h){var d=null;if(a.g==h){mo(a),gc(a),a.g=null;var g=2}else if(cc(a.h,h))d=h.G,Ju(a.h,h),g=1;else return;if(a.I!=0){if(h.o)if(g==1){d=h.u?h.u.length:0,h=Date.now()-h.F;var k=a.D;g=Cr(),j(g,new Uu(g,d)),go(a)}else gh(a);else if(k=h.m,k==3||k==0&&h.X>0||!(g==1&&_y(a,h)||g==2&&pc(a)))switch(d&&d.length>0&&(h=a.h,h.i=h.i.concat(d)),k){case 1:Vr(a,5);break;case 4:Vr(a,10);break;case 3:Vr(a,6);break;default:Vr(a,2)}}}function yh(a,h){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*h}function Vr(a,h){if(a.j.info("Error code "+h),h==2){var d=u(a.bb,a),g=a.Ua;const k=!g;g=new Hn(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Gs(g,"https"),uo(g),k?hy(g.toString(),d):fy(g.toString(),d)}else At(2);a.I=0,a.l&&a.l.pa(h),vh(a),fh(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),At(2)):(this.j.info("Failed to ping google.com"),At(1))};function vh(a){if(a.I=0,a.ja=[],a.l){const h=Yu(a.h);(h.length!=0||a.i.length!=0)&&(S(a.ja,h),S(a.ja,a.i),a.h.i.length=0,y(a.i),a.i.length=0),a.l.oa()}}function Eh(a,h,d){var g=d instanceof Hn?nn(d):new Hn(d);if(g.g!="")h&&(g.g=h+"."+g.g),Qs(g,g.u);else{var k=o.location;g=k.protocol,h=h?h+"."+k.hostname:k.hostname,k=+k.port;const N=new Hn(null);g&&Gs(N,g),h&&(N.g=h),k&&Qs(N,k),d&&(N.h=d),g=N}return d=a.G,h=a.wa,d&&h&&Ue(g,d,h),Ue(g,"VER",a.ka),ni(a,g),g}function Th(a,h,d){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new He(new hc({ab:d})):new He(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ih(){}t=Ih.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function _o(){}_o.prototype.g=function(a,h){return new Dt(a,h)};function Dt(a,h){H.call(this),this.g=new hh(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!T(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!T(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new ns(this)}p(Dt,H),Dt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Dt.prototype.close=function(){dc(this.g)},Dt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=Se(a),a=d);h.i.push(new ry(h.Ya++,a)),h.I==3&&go(h)},Dt.prototype.N=function(){this.g.l=null,delete this.j,dc(this.g),delete this.g,Dt.Z.N.call(this)};function wh(a){Zr.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p(wh,Zr);function Ah(){ot.call(this),this.status=1}p(Ah,ot);function ns(a){this.g=a}p(ns,Ih),ns.prototype.ra=function(){j(this.g,"a")},ns.prototype.qa=function(a){j(this.g,new wh(a))},ns.prototype.pa=function(a){j(this.g,new Ah)},ns.prototype.oa=function(){j(this.g,"b")},_o.prototype.createWebChannel=_o.prototype.g,Dt.prototype.send=Dt.prototype.o,Dt.prototype.open=Dt.prototype.m,Dt.prototype.close=Dt.prototype.close,vm=function(){return new _o},ym=function(){return Cr()},_m=et,fl={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},co.NO_ERROR=0,co.TIMEOUT=8,co.HTTP_ERROR=6,Lo=co,Bu.COMPLETE="complete",mm=Bu,Ot.EventType=Wt,Wt.OPEN="a",Wt.CLOSE="b",Wt.ERROR="c",Wt.MESSAGE="d",H.prototype.listen=H.prototype.J,li=Ot,He.prototype.listenOnce=He.prototype.K,He.prototype.getLastError=He.prototype.Ha,He.prototype.getLastErrorCode=He.prototype.ya,He.prototype.getStatus=He.prototype.ca,He.prototype.getResponseJson=He.prototype.La,He.prototype.getResponseText=He.prototype.la,He.prototype.send=He.prototype.ea,He.prototype.setWithCredentials=He.prototype.Fa,gm=He}).apply(typeof Ao<"u"?Ao:typeof self<"u"?self:typeof window<"u"?window:{});const td="@firebase/firestore",nd="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}yt.UNAUTHENTICATED=new yt(null),yt.GOOGLE_CREDENTIALS=new yt("google-credentials-uid"),yt.FIRST_PARTY=new yt("first-party-uid"),yt.MOCK_USER=new yt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fs="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr=new Jl("@firebase/firestore");function as(){return zr.logLevel}function X(t,...e){if(zr.logLevel<=Ee.DEBUG){const n=e.map(au);zr.debug(`Firestore (${Fs}): ${t}`,...n)}}function xn(t,...e){if(zr.logLevel<=Ee.ERROR){const n=e.map(au);zr.error(`Firestore (${Fs}): ${t}`,...n)}}function Rs(t,...e){if(zr.logLevel<=Ee.WARN){const n=e.map(au);zr.warn(`Firestore (${Fs}): ${t}`,...n)}}function au(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(n){return JSON.stringify(n)})(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Em(t,r,n)}function Em(t,e,n){let r=`FIRESTORE (${Fs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw xn(r),new Error(r)}function Ve(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Em(e,s,r)}function fe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ee extends Bn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class cS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(yt.UNAUTHENTICATED)))}shutdown(){}}class lS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class uS{constructor(e){this.t=e,this.currentUser=yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ve(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new pr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new pr,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const l=i;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new pr)}}),0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ve(typeof r.accessToken=="string",31837,{l:r}),new Tm(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ve(e===null||typeof e=="string",2055,{h:e}),new yt(e)}}class hS{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=yt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class fS{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new hS(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(yt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class rd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class dS{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Gt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Ve(this.o===void 0,3512);const r=i=>{i.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,X("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new rd(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(Ve(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new rd(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pS(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=pS(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function Te(t,e){return t<e?-1:t>e?1:0}function dl(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return Fc(s)===Fc(i)?Te(s,i):Fc(s)?1:-1}return Te(t.length,e.length)}const gS=55296,mS=57343;function Fc(t){const e=t.charCodeAt(0);return e>=gS&&e<=mS}function Cs(t,e,n){return t.length===e.length&&t.every(((r,s)=>n(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sd="__name__";class an{constructor(e,n,r){n===void 0?n=0:n>e.length&&le(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&le(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return an.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof an?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=an.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return Te(e.length,n.length)}static compareSegments(e,n){const r=an.isNumericId(e),s=an.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?an.extractNumericId(e).compare(an.extractNumericId(n)):dl(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return dr.fromString(e.substring(4,e.length-2))}}class Be extends an{construct(e,n,r){return new Be(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ee($.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((s=>s.length>0)))}return new Be(n)}static emptyPath(){return new Be([])}}const _S=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class lt extends an{construct(e,n,r){return new lt(e,n,r)}static isValidIdentifier(e){return _S.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),lt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===sd}static keyField(){return new lt([sd])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ee($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new ee($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ee($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new ee($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new lt(n)}static emptyPath(){return new lt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.path=e}static fromPath(e){return new se(Be.fromString(e))}static fromName(e){return new se(Be.fromString(e).popFirst(5))}static empty(){return new se(Be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Be.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Be.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new se(new Be(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Im(t,e,n){if(!n)throw new ee($.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function yS(t,e,n,r){if(e===!0&&r===!0)throw new ee($.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function id(t){if(!se.isDocumentKey(t))throw new ee($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function od(t){if(se.isDocumentKey(t))throw new ee($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function wm(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function lu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":le(12329,{type:typeof t})}function Ps(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ee($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=lu(t);throw new ee($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(t,e){const n={typeString:t};return e&&(n.value=e),n}function ro(t,e){if(!wm(t))throw new ee($.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new ee($.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ad=-62135596800,cd=1e6;class $e{static now(){return $e.fromMillis(Date.now())}static fromDate(e){return $e.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*cd);return new $e(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ee($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ee($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<ad)throw new ee($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ee($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/cd}_compareTo(e){return this.seconds===e.seconds?Te(this.nanoseconds,e.nanoseconds):Te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:$e._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ro(e,$e._jsonSchema))return new $e(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-ad;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}$e._jsonSchemaVersion="firestore/timestamp/1.0",$e._jsonSchema={type:Qe("string",$e._jsonSchemaVersion),seconds:Qe("number"),nanoseconds:Qe("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{static fromTimestamp(e){return new he(e)}static min(){return new he(new $e(0,0))}static max(){return new he(new $e(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i=-1;function vS(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=he.fromTimestamp(r===1e9?new $e(n+1,0):new $e(n,r));return new yr(s,se.empty(),e)}function ES(t){return new yr(t.readTime,t.key,$i)}class yr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new yr(he.min(),se.empty(),$i)}static max(){return new yr(he.max(),se.empty(),$i)}}function TS(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=se.comparator(t.documentKey,e.documentKey),n!==0?n:Te(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class wS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Us(t){if(t.code!==$.FAILED_PRECONDITION||t.message!==IS)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&le(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):F.reject(n)}static resolve(e){return new F(((n,r)=>{n(e)}))}static reject(e){return new F(((n,r)=>{r(e)}))}static waitFor(e){return new F(((n,r)=>{let s=0,i=0,o=!1;e.forEach((c=>{++s,c.next((()=>{++i,o&&i===s&&n()}),(l=>r(l)))})),o=!0,i===s&&n()}))}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next((s=>s?F.resolve(s):r()));return n}static forEach(e,n){const r=[];return e.forEach(((s,i)=>{r.push(n.call(this,s,i))})),this.waitFor(r)}static mapArray(e,n){return new F(((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next((f=>{o[u]=f,++c,c===i&&r(o)}),(f=>s(f)))}}))}static doWhile(e,n){return new F(((r,s)=>{const i=()=>{e()===!0?n().next((()=>{i()}),s):r()};i()}))}}function AS(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Bs(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}ja.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uu=-1;function qa(t){return t==null}function ua(t){return t===0&&1/t==-1/0}function bS(t){return typeof t=="number"&&Number.isInteger(t)&&!ua(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Am="";function SS(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=ld(e)),e=RS(t.get(n),e);return ld(e)}function RS(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Am:n+="";break;default:n+=i}}return n}function ld(t){return t+Am+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ud(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Qr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function bm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,n){this.comparator=e,this.root=n||at.EMPTY}insert(e,n){return new je(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,at.BLACK,null,null))}remove(e){return new je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,at.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,r)=>(e(n,r),!1)))}toString(){const e=[];return this.inorderTraversal(((n,r)=>(e.push(`${n}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new bo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new bo(this.root,e,this.comparator,!1)}getReverseIterator(){return new bo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new bo(this.root,e,this.comparator,!0)}}class bo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class at{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??at.RED,this.left=s??at.EMPTY,this.right=i??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new at(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return at.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw le(43730,{key:this.key,value:this.value});if(this.right.isRed())throw le(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw le(27949);return e+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw le(57766)}get value(){throw le(16141)}get color(){throw le(16727)}get left(){throw le(29726)}get right(){throw le(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new at(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.comparator=e,this.data=new je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,r)=>(e(n),!1)))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new hd(this.data.getIterator())}getIteratorFrom(e){return new hd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((r=>{n=n.add(r)})),n}isEqual(e){if(!(e instanceof Ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new Ze(this.comparator);return n.data=e,n}}class hd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.fields=e,e.sort(lt.comparator)}static empty(){return new Yt([])}unionWith(e){let n=new Ze(lt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Yt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Cs(this.fields,e.fields,((n,r)=>n.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Sm("Invalid base64 string: "+i):i}})(e);return new ut(n)}static fromUint8Array(e){const n=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new ut(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ut.EMPTY_BYTE_STRING=new ut("");const CS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function vr(t){if(Ve(!!t,39018),typeof t=="string"){let e=0;const n=CS.exec(t);if(Ve(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:We(t.seconds),nanos:We(t.nanos)}}function We(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Er(t){return typeof t=="string"?ut.fromBase64String(t):ut.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rm="server_timestamp",Cm="__type__",Pm="__previous_value__",km="__local_write_time__";function hu(t){return(t?.mapValue?.fields||{})[Cm]?.stringValue===Rm}function Ha(t){const e=t.mapValue.fields[Pm];return hu(e)?Ha(e):e}function ji(t){const e=vr(t.mapValue.fields[km].timestampValue);return new $e(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS{constructor(e,n,r,s,i,o,c,l,u,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=f}}const ha="(default)";class qi{constructor(e,n){this.projectId=e,this.database=n||ha}static empty(){return new qi("","")}get isDefaultDatabase(){return this.database===ha}isEqual(e){return e instanceof qi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vm="__type__",kS="__max__",So={mapValue:{}},Nm="__vector__",fa="value";function Tr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?hu(t)?4:NS(t)?9007199254740991:VS(t)?10:11:le(28295,{value:t})}function En(t,e){if(t===e)return!0;const n=Tr(t);if(n!==Tr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ji(t).isEqual(ji(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=vr(s.timestampValue),c=vr(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(s,i){return Er(s.bytesValue).isEqual(Er(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(s,i){return We(s.geoPointValue.latitude)===We(i.geoPointValue.latitude)&&We(s.geoPointValue.longitude)===We(i.geoPointValue.longitude)})(t,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return We(s.integerValue)===We(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=We(s.doubleValue),c=We(i.doubleValue);return o===c?ua(o)===ua(c):isNaN(o)&&isNaN(c)}return!1})(t,e);case 9:return Cs(t.arrayValue.values||[],e.arrayValue.values||[],En);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(ud(o)!==ud(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!En(o[l],c[l])))return!1;return!0})(t,e);default:return le(52216,{left:t})}}function Hi(t,e){return(t.values||[]).find((n=>En(n,e)))!==void 0}function ks(t,e){if(t===e)return 0;const n=Tr(t),r=Tr(e);if(n!==r)return Te(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Te(t.booleanValue,e.booleanValue);case 2:return(function(i,o){const c=We(i.integerValue||i.doubleValue),l=We(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(t,e);case 3:return fd(t.timestampValue,e.timestampValue);case 4:return fd(ji(t),ji(e));case 5:return dl(t.stringValue,e.stringValue);case 6:return(function(i,o){const c=Er(i),l=Er(o);return c.compareTo(l)})(t.bytesValue,e.bytesValue);case 7:return(function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const f=Te(c[u],l[u]);if(f!==0)return f}return Te(c.length,l.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,o){const c=Te(We(i.latitude),We(o.latitude));return c!==0?c:Te(We(i.longitude),We(o.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return dd(t.arrayValue,e.arrayValue);case 10:return(function(i,o){const c=i.fields||{},l=o.fields||{},u=c[fa]?.arrayValue,f=l[fa]?.arrayValue,p=Te(u?.values?.length||0,f?.values?.length||0);return p!==0?p:dd(u,f)})(t.mapValue,e.mapValue);case 11:return(function(i,o){if(i===So.mapValue&&o===So.mapValue)return 0;if(i===So.mapValue)return 1;if(o===So.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},f=Object.keys(u);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const m=dl(l[p],f[p]);if(m!==0)return m;const y=ks(c[l[p]],u[f[p]]);if(y!==0)return y}return Te(l.length,f.length)})(t.mapValue,e.mapValue);default:throw le(23264,{he:n})}}function fd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Te(t,e);const n=vr(t),r=vr(e),s=Te(n.seconds,r.seconds);return s!==0?s:Te(n.nanos,r.nanos)}function dd(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=ks(n[s],r[s]);if(i)return i}return Te(n.length,r.length)}function Vs(t){return pl(t)}function pl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const r=vr(n);return`time(${r.seconds},${r.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return Er(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return se.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=pl(i);return r+"]"})(t.arrayValue):"mapValue"in t?(function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${pl(n.fields[o])}`;return s+"}"})(t.mapValue):le(61005,{value:t})}function Fo(t){switch(Tr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ha(t);return e?16+Fo(e):16;case 5:return 2*t.stringValue.length;case 6:return Er(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+Fo(i)),0)})(t.arrayValue);case 10:case 11:return(function(r){let s=0;return Qr(r.fields,((i,o)=>{s+=i.length+Fo(o)})),s})(t.mapValue);default:throw le(13486,{value:t})}}function gl(t){return!!t&&"integerValue"in t}function fu(t){return!!t&&"arrayValue"in t}function pd(t){return!!t&&"nullValue"in t}function gd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Uo(t){return!!t&&"mapValue"in t}function VS(t){return(t?.mapValue?.fields||{})[Vm]?.stringValue===Nm}function Si(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Qr(t.mapValue.fields,((n,r)=>e.mapValue.fields[n]=Si(r))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Si(t.arrayValue.values[n]);return e}return{...t}}function NS(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===kS}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.value=e}static empty(){return new Bt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Uo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Si(n)}setAll(e){let n=lt.emptyPath(),r={},s=[];e.forEach(((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=Si(o):s.push(c.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Uo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return En(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Uo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Qr(n,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new Bt(Si(this.value))}}function Om(t){const e=[];return Qr(t.fields,((n,r)=>{const s=new lt([n]);if(Uo(r)){const i=Om(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new Yt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new Et(e,0,he.min(),he.min(),he.min(),Bt.empty(),0)}static newFoundDocument(e,n,r,s){return new Et(e,1,n,he.min(),r,s,0)}static newNoDocument(e,n){return new Et(e,2,n,he.min(),he.min(),Bt.empty(),0)}static newUnknownDocument(e,n){return new Et(e,3,n,he.min(),he.min(),Bt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(he.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Bt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=he.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,n){this.position=e,this.inclusive=n}}function md(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=se.comparator(se.fromName(o.referenceValue),n.key):r=ks(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function _d(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!En(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,n="asc"){this.field=e,this.dir=n}}function OS(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{}class Xe extends Dm{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new xS(e,n,r):n==="array-contains"?new FS(e,r):n==="in"?new US(e,r):n==="not-in"?new BS(e,r):n==="array-contains-any"?new $S(e,r):new Xe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new MS(e,r):new LS(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ks(n,this.value)):n!==null&&Tr(this.value)===Tr(n)&&this.matchesComparison(ks(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return le(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Tn extends Dm{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Tn(e,n)}matches(e){return xm(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function xm(t){return t.op==="and"}function Mm(t){return DS(t)&&xm(t)}function DS(t){for(const e of t.filters)if(e instanceof Tn)return!1;return!0}function ml(t){if(t instanceof Xe)return t.field.canonicalString()+t.op.toString()+Vs(t.value);if(Mm(t))return t.filters.map((e=>ml(e))).join(",");{const e=t.filters.map((n=>ml(n))).join(",");return`${t.op}(${e})`}}function Lm(t,e){return t instanceof Xe?(function(r,s){return s instanceof Xe&&r.op===s.op&&r.field.isEqual(s.field)&&En(r.value,s.value)})(t,e):t instanceof Tn?(function(r,s){return s instanceof Tn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,o,c)=>i&&Lm(o,s.filters[c])),!0):!1})(t,e):void le(19439)}function Fm(t){return t instanceof Xe?(function(n){return`${n.field.canonicalString()} ${n.op} ${Vs(n.value)}`})(t):t instanceof Tn?(function(n){return n.op.toString()+" {"+n.getFilters().map(Fm).join(" ,")+"}"})(t):"Filter"}class xS extends Xe{constructor(e,n,r){super(e,n,r),this.key=se.fromName(r.referenceValue)}matches(e){const n=se.comparator(e.key,this.key);return this.matchesComparison(n)}}class MS extends Xe{constructor(e,n){super(e,"in",n),this.keys=Um("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class LS extends Xe{constructor(e,n){super(e,"not-in",n),this.keys=Um("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function Um(t,e){return(e.arrayValue?.values||[]).map((n=>se.fromName(n.referenceValue)))}class FS extends Xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return fu(n)&&Hi(n.arrayValue,this.value)}}class US extends Xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Hi(this.value.arrayValue,n)}}class BS extends Xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Hi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Hi(this.value.arrayValue,n)}}class $S extends Xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!fu(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>Hi(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Te=null}}function yd(t,e=null,n=[],r=[],s=null,i=null,o=null){return new jS(t,e,n,r,s,i,o)}function du(t){const e=fe(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((r=>ml(r))).join(","),n+="|ob:",n+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),qa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((r=>Vs(r))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((r=>Vs(r))).join(",")),e.Te=n}return e.Te}function pu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!OS(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Lm(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!_d(t.startAt,e.startAt)&&_d(t.endAt,e.endAt)}function _l(t){return se.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function qS(t,e,n,r,s,i,o,c){return new za(t,e,n,r,s,i,o,c)}function Bm(t){return new za(t)}function vd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function HS(t){return t.collectionGroup!==null}function Ri(t){const e=fe(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new Ze(lt.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((u=>{u.isInequality()&&(c=c.add(u.field))}))})),c})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new pa(i,r))})),n.has(lt.keyField().canonicalString())||e.Ie.push(new pa(lt.keyField(),r))}return e.Ie}function fn(t){const e=fe(t);return e.Ee||(e.Ee=zS(e,Ri(t))),e.Ee}function zS(t,e){if(t.limitType==="F")return yd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new pa(s.field,i)}));const n=t.endAt?new da(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new da(t.startAt.position,t.startAt.inclusive):null;return yd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function yl(t,e,n){return new za(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Wa(t,e){return pu(fn(t),fn(e))&&t.limitType===e.limitType}function $m(t){return`${du(fn(t))}|lt:${t.limitType}`}function cs(t){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((s=>Fm(s))).join(", ")}]`),qa(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((s=>Vs(s))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((s=>Vs(s))).join(",")),`Target(${r})`})(fn(t))}; limitType=${t.limitType})`}function Ka(t,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):se.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(t,e)&&(function(r,s){for(const i of Ri(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(t,e)&&(function(r,s){return!(r.startAt&&!(function(o,c,l){const u=md(o,c,l);return o.inclusive?u<=0:u<0})(r.startAt,Ri(r),s)||r.endAt&&!(function(o,c,l){const u=md(o,c,l);return o.inclusive?u>=0:u>0})(r.endAt,Ri(r),s))})(t,e)}function WS(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function jm(t){return(e,n)=>{let r=!1;for(const s of Ri(t)){const i=KS(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function KS(t,e,n){const r=t.field.isKeyField()?se.comparator(e.key,n.key):(function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?ks(l,u):le(42886)})(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return le(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Qr(this.inner,((n,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return bm(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GS=new je(se.comparator);function Mn(){return GS}const qm=new je(se.comparator);function ui(...t){let e=qm;for(const n of t)e=e.insert(n.key,n);return e}function Hm(t){let e=qm;return t.forEach(((n,r)=>e=e.insert(n,r.overlayedDocument))),e}function Ur(){return Ci()}function zm(){return Ci()}function Ci(){return new Jr((t=>t.toString()),((t,e)=>t.isEqual(e)))}const QS=new je(se.comparator),JS=new Ze(se.comparator);function Ie(...t){let e=JS;for(const n of t)e=e.add(n);return e}const YS=new Ze(Te);function XS(){return YS}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ua(e)?"-0":e}}function Wm(t){return{integerValue:""+t}}function ZS(t,e){return bS(e)?Wm(e):gu(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(){this._=void 0}}function eR(t,e,n){return t instanceof ga?(function(s,i){const o={fields:{[Cm]:{stringValue:Rm},[km]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&hu(i)&&(i=Ha(i)),i&&(o.fields[Pm]=i),{mapValue:o}})(n,e):t instanceof zi?Gm(t,e):t instanceof Wi?Qm(t,e):(function(s,i){const o=Km(s,i),c=Ed(o)+Ed(s.Ae);return gl(o)&&gl(s.Ae)?Wm(c):gu(s.serializer,c)})(t,e)}function tR(t,e,n){return t instanceof zi?Gm(t,e):t instanceof Wi?Qm(t,e):n}function Km(t,e){return t instanceof ma?(function(r){return gl(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class ga extends Ga{}class zi extends Ga{constructor(e){super(),this.elements=e}}function Gm(t,e){const n=Jm(e);for(const r of t.elements)n.some((s=>En(s,r)))||n.push(r);return{arrayValue:{values:n}}}class Wi extends Ga{constructor(e){super(),this.elements=e}}function Qm(t,e){let n=Jm(e);for(const r of t.elements)n=n.filter((s=>!En(s,r)));return{arrayValue:{values:n}}}class ma extends Ga{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Ed(t){return We(t.integerValue||t.doubleValue)}function Jm(t){return fu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function nR(t,e){return t.field.isEqual(e.field)&&(function(r,s){return r instanceof zi&&s instanceof zi||r instanceof Wi&&s instanceof Wi?Cs(r.elements,s.elements,En):r instanceof ma&&s instanceof ma?En(r.Ae,s.Ae):r instanceof ga&&s instanceof ga})(t.transform,e.transform)}class rR{constructor(e,n){this.version=e,this.transformResults=n}}class dn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new dn}static exists(e){return new dn(void 0,e)}static updateTime(e){return new dn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Bo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Qa{}function Ym(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Zm(t.key,dn.none()):new so(t.key,t.data,dn.none());{const n=t.data,r=Bt.empty();let s=new Ze(lt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Yr(t.key,r,new Yt(s.toArray()),dn.none())}}function sR(t,e,n){t instanceof so?(function(s,i,o){const c=s.value.clone(),l=Id(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(t,e,n):t instanceof Yr?(function(s,i,o){if(!Bo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Id(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Xm(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(t,e,n):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,n)}function Pi(t,e,n,r){return t instanceof so?(function(i,o,c,l){if(!Bo(i.precondition,o))return c;const u=i.value.clone(),f=wd(i.fieldTransforms,l,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(t,e,n,r):t instanceof Yr?(function(i,o,c,l){if(!Bo(i.precondition,o))return c;const u=wd(i.fieldTransforms,l,o),f=o.data;return f.setAll(Xm(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(t,e,n,r):(function(i,o,c){return Bo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(t,e,n)}function iR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Km(r.transform,s||null);i!=null&&(n===null&&(n=Bt.empty()),n.set(r.field,i))}return n||null}function Td(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Cs(r,s,((i,o)=>nR(i,o)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class so extends Qa{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Yr extends Qa{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Xm(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function Id(t,e,n){const r=new Map;Ve(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,tR(o,c,n[s]))}return r}function wd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,eR(i,o,e))}return r}class Zm extends Qa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class oR extends Qa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&sR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Pi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Pi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=zm();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=Ym(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(he.min())})),r}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),Ie())}isEqual(e){return this.batchId===e.batchId&&Cs(this.mutations,e.mutations,((n,r)=>Td(n,r)))&&Cs(this.baseMutations,e.baseMutations,((n,r)=>Td(n,r)))}}class mu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ve(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=(function(){return QS})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new mu(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ge,be;function uR(t){switch(t){case $.OK:return le(64938);case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0;default:return le(15467,{code:t})}}function e_(t){if(t===void 0)return xn("GRPC error has no .code"),$.UNKNOWN;switch(t){case Ge.OK:return $.OK;case Ge.CANCELLED:return $.CANCELLED;case Ge.UNKNOWN:return $.UNKNOWN;case Ge.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case Ge.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case Ge.INTERNAL:return $.INTERNAL;case Ge.UNAVAILABLE:return $.UNAVAILABLE;case Ge.UNAUTHENTICATED:return $.UNAUTHENTICATED;case Ge.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case Ge.NOT_FOUND:return $.NOT_FOUND;case Ge.ALREADY_EXISTS:return $.ALREADY_EXISTS;case Ge.PERMISSION_DENIED:return $.PERMISSION_DENIED;case Ge.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case Ge.ABORTED:return $.ABORTED;case Ge.OUT_OF_RANGE:return $.OUT_OF_RANGE;case Ge.UNIMPLEMENTED:return $.UNIMPLEMENTED;case Ge.DATA_LOSS:return $.DATA_LOSS;default:return le(39323,{code:t})}}(be=Ge||(Ge={}))[be.OK=0]="OK",be[be.CANCELLED=1]="CANCELLED",be[be.UNKNOWN=2]="UNKNOWN",be[be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",be[be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",be[be.NOT_FOUND=5]="NOT_FOUND",be[be.ALREADY_EXISTS=6]="ALREADY_EXISTS",be[be.PERMISSION_DENIED=7]="PERMISSION_DENIED",be[be.UNAUTHENTICATED=16]="UNAUTHENTICATED",be[be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",be[be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",be[be.ABORTED=10]="ABORTED",be[be.OUT_OF_RANGE=11]="OUT_OF_RANGE",be[be.UNIMPLEMENTED=12]="UNIMPLEMENTED",be[be.INTERNAL=13]="INTERNAL",be[be.UNAVAILABLE=14]="UNAVAILABLE",be[be.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hR(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fR=new dr([4294967295,4294967295],0);function Ad(t){const e=hR().encode(t),n=new pm;return n.update(e),new Uint8Array(n.digest())}function bd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new dr([n,r],0),new dr([s,i],0)]}class _u{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new hi(`Invalid padding: ${n}`);if(r<0)throw new hi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new hi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new hi(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=dr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(dr.fromNumber(r)));return s.compare(fR)===1&&(s=new dr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Ad(e),[r,s]=bd(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new _u(i,s,n);return r.forEach((c=>o.insert(c))),o}insert(e){if(this.ge===0)return;const n=Ad(e),[r,s]=bd(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class hi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,io.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ja(he.min(),s,new je(Te),Mn(),Ie())}}class io{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new io(r,n,Ie(),Ie(),Ie())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class t_{constructor(e,n){this.targetId=e,this.Ce=n}}class n_{constructor(e,n,r=ut.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Sd{constructor(){this.ve=0,this.Fe=Rd(),this.Me=ut.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ie(),n=Ie(),r=Ie();return this.Fe.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:le(38017,{changeType:i})}})),new io(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=Rd()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Ve(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class dR{constructor(e){this.Ge=e,this.ze=new Map,this.je=Mn(),this.Je=Ro(),this.He=Ro(),this.Ye=new je(Te)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:le(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((r,s)=>{this.rt(s)&&n(s)}))}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(_l(i))if(r===0){const o=new se(i.path);this.et(n,o,Et.newNoDocument(o,he.min()))}else Ve(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const c=this.ut(e),l=c?this.ct(c,e,o):1;if(l!==0){this.it(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=Er(r).toUint8Array()}catch(l){if(l instanceof Sm)return Rs("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new _u(o,s,i)}catch(l){return Rs(l instanceof hi?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach((i=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(n,i,null),s++)})),s}Tt(e){const n=new Map;this.ze.forEach(((i,o)=>{const c=this.ot(o);if(c){if(i.current&&_l(c.target)){const l=new se(c.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,Et.newNoDocument(l,e))}i.Be&&(n.set(o,i.ke()),i.qe())}}));let r=Ie();this.He.forEach(((i,o)=>{let c=!0;o.forEachWhile((l=>{const u=this.ot(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.je.forEach(((i,o)=>o.setReadTime(e)));const s=new Ja(e,n,this.Ye,this.je,r);return this.je=Mn(),this.Je=Ro(),this.He=Ro(),this.Ye=new je(Te),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new Sd,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new Ze(Te),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Ze(Te),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Sd),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Ro(){return new je(se.comparator)}function Rd(){return new je(se.comparator)}const pR={asc:"ASCENDING",desc:"DESCENDING"},gR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},mR={and:"AND",or:"OR"};class _R{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function vl(t,e){return t.useProto3Json||qa(e)?e:{value:e}}function _a(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function r_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function yR(t,e){return _a(t,e.toTimestamp())}function pn(t){return Ve(!!t,49232),he.fromTimestamp((function(n){const r=vr(n);return new $e(r.seconds,r.nanos)})(t))}function yu(t,e){return El(t,e).canonicalString()}function El(t,e){const n=(function(s){return new Be(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function s_(t){const e=Be.fromString(t);return Ve(l_(e),10190,{key:e.toString()}),e}function Tl(t,e){return yu(t.databaseId,e.path)}function Uc(t,e){const n=s_(e);if(n.get(1)!==t.databaseId.projectId)throw new ee($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ee($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new se(o_(n))}function i_(t,e){return yu(t.databaseId,e)}function vR(t){const e=s_(t);return e.length===4?Be.emptyPath():o_(e)}function Il(t){return new Be(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function o_(t){return Ve(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Cd(t,e,n){return{name:Tl(t,e),fields:n.value.mapValue.fields}}function ER(t,e){let n;if("targetChange"in e){e.targetChange;const r=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:le(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(u,f){return u.useProto3Json?(Ve(f===void 0||typeof f=="string",58123),ut.fromBase64String(f||"")):(Ve(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),ut.fromUint8Array(f||new Uint8Array))})(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&(function(u){const f=u.code===void 0?$.UNKNOWN:e_(u.code);return new ee(f,u.message||"")})(o);n=new n_(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Uc(t,r.document.name),i=pn(r.document.updateTime),o=r.document.createTime?pn(r.document.createTime):he.min(),c=new Bt({mapValue:{fields:r.document.fields}}),l=Et.newFoundDocument(s,i,o,c),u=r.targetIds||[],f=r.removedTargetIds||[];n=new $o(u,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Uc(t,r.document),i=r.readTime?pn(r.readTime):he.min(),o=Et.newNoDocument(s,i),c=r.removedTargetIds||[];n=new $o([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Uc(t,r.document),i=r.removedTargetIds||[];n=new $o([],i,s,null)}else{if(!("filter"in e))return le(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new lR(s,i),c=r.targetId;n=new t_(c,o)}}return n}function TR(t,e){let n;if(e instanceof so)n={update:Cd(t,e.key,e.value)};else if(e instanceof Zm)n={delete:Tl(t,e.key)};else if(e instanceof Yr)n={update:Cd(t,e.key,e.data),updateMask:kR(e.fieldMask)};else{if(!(e instanceof oR))return le(16599,{Vt:e.type});n={verify:Tl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((r=>(function(i,o){const c=o.transform;if(c instanceof ga)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof zi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Wi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof ma)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw le(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(n.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:yR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:le(27497)})(t,e.precondition)),n}function IR(t,e){return t&&t.length>0?(Ve(e!==void 0,14353),t.map((n=>(function(s,i){let o=s.updateTime?pn(s.updateTime):pn(i);return o.isEqual(he.min())&&(o=pn(i)),new rR(o,s.transformResults||[])})(n,e)))):[]}function wR(t,e){return{documents:[i_(t,e.path)]}}function AR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=i_(t,s);const i=(function(u){if(u.length!==0)return c_(Tn.create(u,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const o=(function(u){if(u.length!==0)return u.map((f=>(function(m){return{field:ls(m.field),direction:RR(m.dir)}})(f)))})(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=vl(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{ft:n,parent:s}}function bR(t){let e=vR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ve(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=(function(p){const m=a_(p);return m instanceof Tn&&Mm(m)?m.getFilters():[m]})(n.where));let o=[];n.orderBy&&(o=(function(p){return p.map((m=>(function(S){return new pa(us(S.field),(function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(S.direction))})(m)))})(n.orderBy));let c=null;n.limit&&(c=(function(p){let m;return m=typeof p=="object"?p.value:p,qa(m)?null:m})(n.limit));let l=null;n.startAt&&(l=(function(p){const m=!!p.before,y=p.values||[];return new da(y,m)})(n.startAt));let u=null;return n.endAt&&(u=(function(p){const m=!p.before,y=p.values||[];return new da(y,m)})(n.endAt)),qS(e,s,o,i,c,"F",l,u)}function SR(t,e){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return le(28987,{purpose:s})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function a_(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=us(n.unaryFilter.field);return Xe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=us(n.unaryFilter.field);return Xe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=us(n.unaryFilter.field);return Xe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=us(n.unaryFilter.field);return Xe.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return le(61313);default:return le(60726)}})(t):t.fieldFilter!==void 0?(function(n){return Xe.create(us(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return le(58110);default:return le(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return Tn.create(n.compositeFilter.filters.map((r=>a_(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return le(1026)}})(n.compositeFilter.op))})(t):le(30097,{filter:t})}function RR(t){return pR[t]}function CR(t){return gR[t]}function PR(t){return mR[t]}function ls(t){return{fieldPath:t.canonicalString()}}function us(t){return lt.fromServerFormat(t.fieldPath)}function c_(t){return t instanceof Xe?(function(n){if(n.op==="=="){if(gd(n.value))return{unaryFilter:{field:ls(n.field),op:"IS_NAN"}};if(pd(n.value))return{unaryFilter:{field:ls(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(gd(n.value))return{unaryFilter:{field:ls(n.field),op:"IS_NOT_NAN"}};if(pd(n.value))return{unaryFilter:{field:ls(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ls(n.field),op:CR(n.op),value:n.value}}})(t):t instanceof Tn?(function(n){const r=n.getFilters().map((s=>c_(s)));return r.length===1?r[0]:{compositeFilter:{op:PR(n.op),filters:r}}})(t):le(54877,{filter:t})}function kR(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function l_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,n,r,s,i=he.min(),o=he.min(),c=ut.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new or(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new or(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new or(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new or(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VR{constructor(e){this.yt=e}}function NR(t){const e=bR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?yl(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OR{constructor(){this.Cn=new DR}addToCollectionParentIndex(e,n){return this.Cn.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(yr.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(yr.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class DR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ze(Be.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ze(Be.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},u_=41943040;class Pt{static withCacheSize(e){return new Pt(e,Pt.DEFAULT_COLLECTION_PERCENTILE,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pt.DEFAULT_COLLECTION_PERCENTILE=10,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Pt.DEFAULT=new Pt(u_,Pt.DEFAULT_COLLECTION_PERCENTILE,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Pt.DISABLED=new Pt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Ns(0)}static cr(){return new Ns(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kd="LruGarbageCollector",xR=1048576;function Vd([t,e],[n,r]){const s=Te(t,n);return s===0?Te(e,r):s}class MR{constructor(e){this.Ir=e,this.buffer=new Ze(Vd),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Vd(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class LR{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){X(kd,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Bs(n)?X(kd,"Ignoring IndexedDB error during garbage collection: ",n):await Us(n)}await this.Vr(3e5)}))}}class FR{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next((r=>Math.floor(n/100*r)))}nthSequenceNumber(e,n){if(n===0)return F.resolve(ja.ce);const r=new MR(n);return this.mr.forEachTarget(e,(s=>r.Ar(s.sequenceNumber))).next((()=>this.mr.pr(e,(s=>r.Ar(s))))).next((()=>r.maxValue))}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(X("LruGarbageCollector","Garbage collection skipped; disabled"),F.resolve(Pd)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(X("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Pd):this.yr(e,n)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,c,l,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(X("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,c=Date.now(),this.removeTargets(e,r,n)))).next((p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(u=Date.now(),as()<=Ee.DEBUG&&X("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(u-l)+`ms
Total Duration: ${u-f}ms`),F.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function UR(t,e){return new FR(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{constructor(){this.changes=new Jr((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Et.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,n)))).next((s=>(r!==null&&Pi(r.mutation,s,Yt.empty(),$e.now()),s)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.getLocalViewOfDocuments(e,r,Ie()).next((()=>r))))}getLocalViewOfDocuments(e,n,r=Ie()){const s=Ur();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,r).next((i=>{let o=ui();return i.forEach(((c,l)=>{o=o.insert(c,l.overlayedDocument)})),o}))))}getOverlayedDocuments(e,n){const r=Ur();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,Ie())))}populateOverlays(e,n,r){const s=[];return r.forEach((i=>{n.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,c)=>{n.set(o,c)}))}))}computeViews(e,n,r,s){let i=Mn();const o=Ci(),c=(function(){return Ci()})();return n.forEach(((l,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof Yr)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),Pi(f.mutation,u,f.mutation.getFieldMask(),$e.now())):o.set(u.key,Yt.empty())})),this.recalculateAndSaveOverlays(e,i).next((l=>(l.forEach(((u,f)=>o.set(u,f))),n.forEach(((u,f)=>c.set(u,new $R(f,o.get(u)??null)))),c)))}recalculateAndSaveOverlays(e,n){const r=Ci();let s=new je(((o,c)=>o-c)),i=Ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((o=>{for(const c of o)c.keys().forEach((l=>{const u=n.get(l);if(u===null)return;let f=r.get(l)||Yt.empty();f=c.applyToLocalView(u,f),r.set(l,f);const p=(s.get(c.batchId)||Ie()).add(l);s=s.insert(c.batchId,p)}))})).next((()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,f=l.value,p=zm();f.forEach((m=>{if(!i.has(m)){const y=Ym(n.get(m),r.get(m));y!==null&&p.set(m,y),i=i.add(m)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return F.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,n,r,s){return(function(o){return se.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):HS(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):F.resolve(Ur());let c=$i,l=i;return o.next((u=>F.forEach(u,((f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?F.resolve():this.remoteDocumentCache.getEntry(e,f).next((m=>{l=l.insert(f,m)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,l,u,Ie()))).next((f=>({batchId:c,changes:Hm(f)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new se(n)).next((r=>{let s=ui();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=ui();return this.indexManager.getCollectionParents(e,i).next((c=>F.forEach(c,(l=>{const u=(function(p,m){return new za(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next((f=>{f.forEach(((p,m)=>{o=o.insert(p,m)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s)))).next((o=>{i.forEach(((l,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,Et.newInvalidDocument(f)))}));let c=ui();return o.forEach(((l,u)=>{const f=i.get(l);f!==void 0&&Pi(f.mutation,u,Yt.empty(),$e.now()),Ka(n,u)&&(c=c.insert(l,u))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return F.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:pn(s.createTime)}})(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,(function(s){return{name:s.name,query:NR(s.bundledQuery),readTime:pn(s.readTime)}})(n)),F.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(){this.overlays=new je(se.comparator),this.qr=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ur();return F.forEach(n,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,n,r){return r.forEach(((s,i)=>{this.St(e,n,i)})),F.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const s=Ur(),i=n.length+1,o=new se(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return F.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new je(((u,f)=>u-f));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=Ur(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const c=Ur(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((u,f)=>c.set(u,f))),!(c.size()>=s)););return F.resolve(c)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new cR(n,r));let i=this.qr.get(n);i===void 0&&(i=Ie(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(){this.sessionToken=ut.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(){this.Qr=new Ze(rt.$r),this.Ur=new Ze(rt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new rt(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach((r=>this.addReference(r,n)))}removeReference(e,n){this.Gr(new rt(e,n))}zr(e,n){e.forEach((r=>this.removeReference(r,n)))}jr(e){const n=new se(new Be([])),r=new rt(n,e),s=new rt(n,e+1),i=[];return this.Ur.forEachInRange([r,s],(o=>{this.Gr(o),i.push(o.key)})),i}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new se(new Be([])),r=new rt(n,e),s=new rt(n,e+1);let i=Ie();return this.Ur.forEachInRange([r,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const n=new rt(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class rt{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return se.comparator(e.key,n.key)||Te(e.Yr,n.Yr)}static Kr(e,n){return Te(e.Yr,n.Yr)||se.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Ze(rt.$r)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new aR(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.Zr=this.Zr.add(new rt(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return F.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?uu:this.tr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new rt(n,0),s=new rt(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],(o=>{const c=this.Xr(o.Yr);i.push(c)})),F.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ze(Te);return n.forEach((s=>{const i=new rt(s,0),o=new rt(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],(c=>{r=r.add(c.Yr)}))})),F.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;se.isDocumentKey(i)||(i=i.child(""));const o=new rt(new se(i),0);let c=new Ze(Te);return this.Zr.forEachWhile((l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.Yr)),!0)}),o),F.resolve(this.ti(c))}ti(e){const n=[];return e.forEach((r=>{const s=this.Xr(r);s!==null&&n.push(s)})),n}removeMutationBatch(e,n){Ve(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return F.forEach(n.mutations,(s=>{const i=new rt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Zr=r}))}ir(e){}containsKey(e,n){const r=new rt(n,0),s=this.Zr.firstAfterOrEqual(r);return F.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR{constructor(e){this.ri=e,this.docs=(function(){return new je(se.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():Et.newInvalidDocument(n))}getEntries(e,n){let r=Mn();return n.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Et.newInvalidDocument(s))})),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Mn();const o=n.path,c=new se(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:f}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||TS(ES(f),r)<=0||(s.has(f.key)||Ka(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return F.resolve(i)}getAllFromCollectionGroup(e,n,r,s){le(9500)}ii(e,n){return F.forEach(this.docs,(r=>n(r)))}newChangeBuffer(e){return new GR(this)}getSize(e){return F.resolve(this.size)}}class GR extends BR{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)})),F.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QR{constructor(e){this.persistence=e,this.si=new Jr((n=>du(n)),pu),this.lastRemoteSnapshotVersion=he.min(),this.highestTargetId=0,this.oi=0,this._i=new vu,this.targetCount=0,this.ai=Ns.ur()}forEachTarget(e,n){return this.si.forEach(((r,s)=>n(s))),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),F.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Ns(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.Pr(n),F.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach(((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),F.waitFor(i).next((()=>s))}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),F.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(e,n){this.ui={},this.overlays={},this.ci=new ja(0),this.li=!1,this.li=!0,this.hi=new zR,this.referenceDelegate=e(this),this.Pi=new QR(this),this.indexManager=new OR,this.remoteDocumentCache=(function(s){return new KR(s)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new VR(n),this.Ii=new qR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new HR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new WR(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const s=new JR(this.ci.next());return this.referenceDelegate.Ei(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ai(e,n){return F.or(Object.values(this.ui).map((r=>()=>r.containsKey(e,n))))}}class JR extends wS{constructor(e){super(),this.currentSequenceNumber=e}}class Eu{constructor(e){this.persistence=e,this.Ri=new vu,this.Vi=null}static mi(e){return new Eu(e)}get fi(){if(this.Vi)return this.Vi;throw le(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),F.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach((s=>this.fi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next((s=>{s.forEach((i=>this.fi.add(i.toString())))})).next((()=>r.removeTargetData(e,n)))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.fi,(r=>{const s=se.fromPath(r);return this.gi(e,s).next((i=>{i||n.removeEntry(s,he.min())}))})).next((()=>(this.Vi=null,n.apply(e))))}updateLimboDocument(e,n){return this.gi(e,n).next((r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())}))}Ti(e){return 0}gi(e,n){return F.or([()=>F.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class ya{constructor(e,n){this.persistence=e,this.pi=new Jr((r=>SS(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=UR(this,n)}static mi(e,n){return new ya(e,n)}Ei(){}di(e){return F.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>n.next((s=>r+s))))}wr(e){let n=0;return this.pr(e,(r=>{n++})).next((()=>n))}pr(e,n){return F.forEach(this.pi,((r,s)=>this.br(e,r,s).next((i=>i?F.resolve():n(s)))))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,(o=>this.br(e,o,n).next((c=>{c||(r++,i.removeEntry(o,he.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),F.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),F.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),F.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),F.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Fo(e.data.value)),n}br(e,n,r){return F.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return F.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=Ie(),s=Ie();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Tu(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return kI()?8:AS(wt())>0?6:4})()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ws(e,n,s,r).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new YR;return this.Ss(e,n,o).next((c=>{if(i.result=c,this.Vs)return this.bs(e,n,o,c.size)}))})).next((()=>i.result))}bs(e,n,r,s){return r.documentReadCount<this.fs?(as()<=Ee.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",cs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),F.resolve()):(as()<=Ee.DEBUG&&X("QueryEngine","Query:",cs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(as()<=Ee.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",cs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,fn(n))):F.resolve())}ys(e,n){if(vd(n))return F.resolve(null);let r=fn(n);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=yl(n,null,"F"),r=fn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const o=Ie(...i);return this.ps.getDocuments(e,o).next((c=>this.indexManager.getMinOffset(e,r).next((l=>{const u=this.Ds(n,c);return this.Cs(n,u,o,l.readTime)?this.ys(e,yl(n,null,"F")):this.vs(e,u,n,l)}))))})))))}ws(e,n,r,s){return vd(n)||s.isEqual(he.min())?F.resolve(null):this.ps.getDocuments(e,r).next((i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?F.resolve(null):(as()<=Ee.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),cs(n)),this.vs(e,o,n,vS(s,$i)).next((c=>c)))}))}Ds(e,n){let r=new Ze(jm(e));return n.forEach(((s,i)=>{Ka(e,i)&&(r=r.add(i))})),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return as()<=Ee.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",cs(n)),this.ps.getDocumentsMatchingQuery(e,n,yr.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next((i=>(n.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu="LocalStore",ZR=3e8;class e0{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new je(Te),this.xs=new Jr((i=>du(i)),pu),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new jR(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Ms)))}}function t0(t,e,n,r){return new e0(t,e,n,r)}async function f_(t,e){const n=fe(t);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r)))).next((i=>{const o=[],c=[];let l=Ie();for(const u of s){o.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}for(const u of i){c.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next((u=>({Ls:u,removedBatchIds:o,addedBatchIds:c})))}))}))}function n0(t,e){const n=fe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return(function(c,l,u,f){const p=u.batch,m=p.keys();let y=F.resolve();return m.forEach((S=>{y=y.next((()=>f.getEntry(l,S))).next((R=>{const O=u.docVersions.get(S);Ve(O!==null,48541),R.version.compareTo(O)<0&&(p.applyToRemoteDocument(R,u),R.isValidDocument()&&(R.setReadTime(u.commitVersion),f.addEntry(R)))}))})),y.next((()=>c.mutationQueue.removeMutationBatch(l,p)))})(n,r,e,i).next((()=>i.apply(r))).next((()=>n.mutationQueue.performConsistencyCheck(r))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let l=Ie();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l})(e)))).next((()=>n.localDocuments.getDocuments(r,s)))}))}function d_(t){const e=fe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.Pi.getLastRemoteSnapshotVersion(n)))}function r0(t,e){const n=fe(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const c=[];e.targetChanges.forEach(((f,p)=>{const m=s.get(p);if(!m)return;c.push(n.Pi.removeMatchingKeys(i,f.removedDocuments,p).next((()=>n.Pi.addMatchingKeys(i,f.addedDocuments,p))));let y=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?y=y.withResumeToken(ut.EMPTY_BYTE_STRING,he.min()).withLastLimboFreeSnapshotVersion(he.min()):f.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(f.resumeToken,r)),s=s.insert(p,y),(function(R,O,B){return R.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=ZR?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0})(m,y,f)&&c.push(n.Pi.updateTargetData(i,y))}));let l=Mn(),u=Ie();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))})),c.push(s0(i,o,e.documentUpdates).next((f=>{l=f.ks,u=f.qs}))),!r.isEqual(he.min())){const f=n.Pi.getLastRemoteSnapshotVersion(i).next((p=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(f)}return F.waitFor(c).next((()=>o.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,l,u))).next((()=>l))})).then((i=>(n.Ms=s,i)))}function s0(t,e,n){let r=Ie(),s=Ie();return n.forEach((i=>r=r.add(i))),e.getEntries(t,r).next((i=>{let o=Mn();return n.forEach(((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(he.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):X(Iu,"Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)})),{ks:o,qs:s}}))}function i0(t,e){const n=fe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=uu),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function o0(t,e){const n=fe(t);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return n.Pi.getTargetData(r,e).next((i=>i?(s=i,F.resolve(s)):n.Pi.allocateTargetId(r).next((o=>(s=new or(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r}))}async function wl(t,e,n){const r=fe(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(o=>r.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!Bs(o))throw o;X(Iu,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function Nd(t,e,n){const r=fe(t);let s=he.min(),i=Ie();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,u,f){const p=fe(l),m=p.xs.get(f);return m!==void 0?F.resolve(p.Ms.get(m)):p.Pi.getTargetData(u,f)})(r,o,fn(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,c.targetId).next((l=>{i=l}))})).next((()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:he.min(),n?i:Ie()))).next((c=>(a0(r,WS(e),c),{documents:c,Qs:i})))))}function a0(t,e,n){let r=t.Os.get(e)||he.min();n.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),t.Os.set(e,r)}class Od{constructor(){this.activeTargetIds=XS()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class c0{constructor(){this.Mo=new Od,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Od,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dd="ConnectivityMonitor";class xd{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){X(Dd,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){X(Dd,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Co=null;function Al(){return Co===null?Co=(function(){return 268435456+Math.round(2147483648*Math.random())})():Co++,"0x"+Co.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc="RestConnection",u0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class h0{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===ha?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=Al(),c=this.zo(e,n.toUriEncodedString());X(Bc,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,s,i);const{host:u}=new URL(c),f=Ds(u);return this.Jo(e,c,l,r,f).then((p=>(X(Bc,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw Rs(Bc,`RPC '${e}' ${o} failed with error: `,p,"url: ",c,"request:",r),p}))}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Fs})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}zo(e,n){const r=u0[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt="WebChannelConnection";class d0 extends h0{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=Al();return new Promise(((c,l)=>{const u=new gm;u.setWithCredentials(!0),u.listenOnce(mm.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case Lo.NO_ERROR:const p=u.getResponseJson();X(mt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),c(p);break;case Lo.TIMEOUT:X(mt,`RPC '${e}' ${o} timed out`),l(new ee($.DEADLINE_EXCEEDED,"Request time out"));break;case Lo.HTTP_ERROR:const m=u.getStatus();if(X(mt,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let y=u.getResponseJson();Array.isArray(y)&&(y=y[0]);const S=y?.error;if(S&&S.status&&S.message){const R=(function(B){const x=B.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(x)>=0?x:$.UNKNOWN})(S.status);l(new ee(R,S.message))}else l(new ee($.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new ee($.UNAVAILABLE,"Connection failed."));break;default:le(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{X(mt,`RPC '${e}' ${o} completed.`)}}));const f=JSON.stringify(s);X(mt,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",f,r,15)}))}T_(e,n,r){const s=Al(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=vm(),c=ym(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=i.join("");X(mt,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=o.createWebChannel(f,l);this.I_(p);let m=!1,y=!1;const S=new f0({Yo:O=>{y?X(mt,`Not sending because RPC '${e}' stream ${s} is closed:`,O):(m||(X(mt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),X(mt,`RPC '${e}' stream ${s} sending:`,O),p.send(O))},Zo:()=>p.close()}),R=(O,B,x)=>{O.listen(B,(z=>{try{x(z)}catch(K){setTimeout((()=>{throw K}),0)}}))};return R(p,li.EventType.OPEN,(()=>{y||(X(mt,`RPC '${e}' stream ${s} transport opened.`),S.o_())})),R(p,li.EventType.CLOSE,(()=>{y||(y=!0,X(mt,`RPC '${e}' stream ${s} transport closed`),S.a_(),this.E_(p))})),R(p,li.EventType.ERROR,(O=>{y||(y=!0,Rs(mt,`RPC '${e}' stream ${s} transport errored. Name:`,O.name,"Message:",O.message),S.a_(new ee($.UNAVAILABLE,"The operation could not be completed")))})),R(p,li.EventType.MESSAGE,(O=>{if(!y){const B=O.data[0];Ve(!!B,16349);const x=B,z=x?.error||x[0]?.error;if(z){X(mt,`RPC '${e}' stream ${s} received error:`,z);const K=z.status;let re=(function(_){const v=Ge[_];if(v!==void 0)return e_(v)})(K),ye=z.message;re===void 0&&(re=$.INTERNAL,ye="Unknown error status: "+K+" with message "+z.message),y=!0,S.a_(new ee(re,ye)),p.close()}else X(mt,`RPC '${e}' stream ${s} received:`,B),S.u_(B)}})),R(c,_m.STAT_EVENT,(O=>{O.stat===fl.PROXY?X(mt,`RPC '${e}' stream ${s} detected buffering proxy`):O.stat===fl.NOPROXY&&X(mt,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{S.__()}),0),S}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((n=>n===e))}}function $c(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ya(t){return new _R(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&X("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Md="PersistentStream";class g_{constructor(e,n,r,s,i,o,c,l){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new p_(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(xn(n.toString()),xn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===n&&this.G_(r,s)}),(r=>{e((()=>{const s=new ee($.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return X(Md,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget((()=>this.D_===e?n():(X(Md,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class p0 extends g_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=ER(this.serializer,e),r=(function(i){if(!("targetChange"in i))return he.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?he.min():o.readTime?pn(o.readTime):he.min()})(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=Il(this.serializer),n.addTarget=(function(i,o){let c;const l=o.target;if(c=_l(l)?{documents:wR(i,l)}:{query:AR(i,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=r_(i,o.resumeToken);const u=vl(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(he.min())>0){c.readTime=_a(i,o.snapshotVersion.toTimestamp());const u=vl(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c})(this.serializer,e);const r=SR(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=Il(this.serializer),n.removeTarget=e,this.q_(n)}}class g0 extends g_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Ve(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ve(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Ve(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=IR(e.writeResults,e.commitTime),r=pn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Il(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map((r=>TR(this.serializer,r)))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{}class _0 extends m0{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new ee($.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Go(e,El(n,r),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ee($.UNKNOWN,i.toString())}))}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.Ho(e,El(n,r),s,o,c,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ee($.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class y0{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(xn(n),this.aa=!1):X("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr="RemoteStore";class v0{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((o=>{r.enqueueAndForget((async()=>{Xr(this)&&(X(Wr,"Restarting streams for network reachability change."),await(async function(l){const u=fe(l);u.Ea.add(4),await oo(u),u.Ra.set("Unknown"),u.Ea.delete(4),await Xa(u)})(this))}))})),this.Ra=new y0(r,s)}}async function Xa(t){if(Xr(t))for(const e of t.da)await e(!0)}async function oo(t){for(const e of t.da)await e(!1)}function m_(t,e){const n=fe(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Su(n)?bu(n):$s(n).O_()&&Au(n,e))}function wu(t,e){const n=fe(t),r=$s(n);n.Ia.delete(e),r.O_()&&__(n,e),n.Ia.size===0&&(r.O_()?r.L_():Xr(n)&&n.Ra.set("Unknown"))}function Au(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(he.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}$s(t).Y_(e)}function __(t,e){t.Va.Ue(e),$s(t).Z_(e)}function bu(t){t.Va=new dR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),$s(t).start(),t.Ra.ua()}function Su(t){return Xr(t)&&!$s(t).x_()&&t.Ia.size>0}function Xr(t){return fe(t).Ea.size===0}function y_(t){t.Va=void 0}async function E0(t){t.Ra.set("Online")}async function T0(t){t.Ia.forEach(((e,n)=>{Au(t,e)}))}async function I0(t,e){y_(t),Su(t)?(t.Ra.ha(e),bu(t)):t.Ra.set("Unknown")}async function w0(t,e,n){if(t.Ra.set("Online"),e instanceof n_&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ia.delete(c),s.Va.removeTarget(c))})(t,e)}catch(r){X(Wr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await va(t,r)}else if(e instanceof $o?t.Va.Ze(e):e instanceof t_?t.Va.st(e):t.Va.tt(e),!n.isEqual(he.min()))try{const r=await d_(t.localStore);n.compareTo(r)>=0&&await(function(i,o){const c=i.Va.Tt(o);return c.targetChanges.forEach(((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.Ia.get(u);f&&i.Ia.set(u,f.withResumeToken(l.resumeToken,o))}})),c.targetMismatches.forEach(((l,u)=>{const f=i.Ia.get(l);if(!f)return;i.Ia.set(l,f.withResumeToken(ut.EMPTY_BYTE_STRING,f.snapshotVersion)),__(i,l);const p=new or(f.target,l,u,f.sequenceNumber);Au(i,p)})),i.remoteSyncer.applyRemoteEvent(c)})(t,n)}catch(r){X(Wr,"Failed to raise snapshot:",r),await va(t,r)}}async function va(t,e,n){if(!Bs(e))throw e;t.Ea.add(1),await oo(t),t.Ra.set("Offline"),n||(n=()=>d_(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{X(Wr,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Xa(t)}))}function v_(t,e){return e().catch((n=>va(t,n,e)))}async function Za(t){const e=fe(t),n=Ir(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:uu;for(;A0(e);)try{const s=await i0(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,b0(e,s)}catch(s){await va(e,s)}E_(e)&&T_(e)}function A0(t){return Xr(t)&&t.Ta.length<10}function b0(t,e){t.Ta.push(e);const n=Ir(t);n.O_()&&n.X_&&n.ea(e.mutations)}function E_(t){return Xr(t)&&!Ir(t).x_()&&t.Ta.length>0}function T_(t){Ir(t).start()}async function S0(t){Ir(t).ra()}async function R0(t){const e=Ir(t);for(const n of t.Ta)e.ea(n.mutations)}async function C0(t,e,n){const r=t.Ta.shift(),s=mu.from(r,e,n);await v_(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await Za(t)}async function P0(t,e){e&&Ir(t).X_&&await(async function(r,s){if((function(o){return uR(o)&&o!==$.ABORTED})(s.code)){const i=r.Ta.shift();Ir(r).B_(),await v_(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await Za(r)}})(t,e),E_(t)&&T_(t)}async function Ld(t,e){const n=fe(t);n.asyncQueue.verifyOperationInProgress(),X(Wr,"RemoteStore received new credentials");const r=Xr(n);n.Ea.add(3),await oo(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Xa(n)}async function k0(t,e){const n=fe(t);e?(n.Ea.delete(2),await Xa(n)):e||(n.Ea.add(2),await oo(n),n.Ra.set("Unknown"))}function $s(t){return t.ma||(t.ma=(function(n,r,s){const i=fe(n);return i.sa(),new p0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Xo:E0.bind(null,t),t_:T0.bind(null,t),r_:I0.bind(null,t),H_:w0.bind(null,t)}),t.da.push((async e=>{e?(t.ma.B_(),Su(t)?bu(t):t.Ra.set("Unknown")):(await t.ma.stop(),y_(t))}))),t.ma}function Ir(t){return t.fa||(t.fa=(function(n,r,s){const i=fe(n);return i.sa(),new g0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:S0.bind(null,t),r_:P0.bind(null,t),ta:R0.bind(null,t),na:C0.bind(null,t)}),t.da.push((async e=>{e?(t.fa.B_(),await Za(t)):(await t.fa.stop(),t.Ta.length>0&&(X(Wr,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))}))),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new pr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new Ru(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ee($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Cu(t,e){if(xn("AsyncQueue",`${e}: ${t}`),Bs(t))return new ee($.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{static emptySet(e){return new vs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||se.comparator(n.key,r.key):(n,r)=>se.comparator(n.key,r.key),this.keyedMap=ui(),this.sortedSet=new je(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,r)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof vs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new vs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(){this.ga=new je(se.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):le(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal(((n,r)=>{e.push(r)})),e}}class Os{constructor(e,n,r,s,i,o,c,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach((c=>{o.push({type:0,doc:c})})),new Os(e,n,vs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Wa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class N0{constructor(){this.queries=Ud(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=fe(n),i=s.queries;s.queries=Ud(),i.forEach(((o,c)=>{for(const l of c.Sa)l.onError(r)}))})(this,new ee($.ABORTED,"Firestore shutting down"))}}function Ud(){return new Jr((t=>$m(t)),Wa)}async function O0(t,e){const n=fe(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new V0,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=Cu(o,`Initialization of query '${cs(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&Pu(n)}async function D0(t,e){const n=fe(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function x0(t,e){const n=fe(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.Sa)c.Fa(s)&&(r=!0);o.wa=s}}r&&Pu(n)}function M0(t,e,n){const r=fe(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function Pu(t){t.Ca.forEach((e=>{e.next()}))}var bl,Bd;(Bd=bl||(bl={})).Ma="default",Bd.Cache="cache";class L0{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Os(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Os.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==bl.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(e){this.key=e}}class w_{constructor(e){this.key=e}}class F0{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Ie(),this.mutatedKeys=Ie(),this.eu=jm(e),this.tu=new vs(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new Fd,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((f,p)=>{const m=s.get(f),y=Ka(this.query,p)?p:null,S=!!m&&this.mutatedKeys.has(m.key),R=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let O=!1;m&&y?m.data.isEqual(y.data)?S!==R&&(r.track({type:3,doc:y}),O=!0):this.su(m,y)||(r.track({type:2,doc:y}),O=!0,(l&&this.eu(y,l)>0||u&&this.eu(y,u)<0)&&(c=!0)):!m&&y?(r.track({type:0,doc:y}),O=!0):m&&!y&&(r.track({type:1,doc:m}),O=!0,(l||u)&&(c=!0)),O&&(y?(o=o.add(y),i=R?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Cs:c,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((f,p)=>(function(y,S){const R=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return le(20277,{Rt:O})}};return R(y)-R(S)})(f.type,p.type)||this.eu(f.doc,p.doc))),this.ou(r),s=s??!1;const c=n&&!s?this._u():[],l=this.Xa.size===0&&this.current&&!s?1:0,u=l!==this.Za;return this.Za=l,o.length!==0||u?{snapshot:new Os(this.query,e.tu,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Fd,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((n=>this.Ya=this.Ya.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ya=this.Ya.delete(n))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Ie(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const n=[];return e.forEach((r=>{this.Xa.has(r)||n.push(new w_(r))})),this.Xa.forEach((r=>{e.has(r)||n.push(new I_(r))})),n}cu(e){this.Ya=e.Qs,this.Xa=Ie();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Os.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const ku="SyncEngine";class U0{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class B0{constructor(e){this.key=e,this.hu=!1}}class $0{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Jr((c=>$m(c)),Wa),this.Iu=new Map,this.Eu=new Set,this.du=new je(se.comparator),this.Au=new Map,this.Ru=new vu,this.Vu={},this.mu=new Map,this.fu=Ns.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function j0(t,e,n=!0){const r=P_(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await A_(r,e,n,!0),s}async function q0(t,e){const n=P_(t);await A_(n,e,!0,!1)}async function A_(t,e,n,r){const s=await o0(t.localStore,fn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await H0(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&m_(t.remoteStore,s),c}async function H0(t,e,n,r,s){t.pu=(p,m,y)=>(async function(R,O,B,x){let z=O.view.ru(B);z.Cs&&(z=await Nd(R.localStore,O.query,!1).then((({documents:w})=>O.view.ru(w,z))));const K=x&&x.targetChanges.get(O.targetId),re=x&&x.targetMismatches.get(O.targetId)!=null,ye=O.view.applyChanges(z,R.isPrimaryClient,K,re);return jd(R,O.targetId,ye.au),ye.snapshot})(t,p,m,y);const i=await Nd(t.localStore,e,!0),o=new F0(e,i.Qs),c=o.ru(i.documents),l=io.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(c,t.isPrimaryClient,l);jd(t,n,u.au);const f=new U0(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function z0(t,e,n){const r=fe(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter((o=>!Wa(o,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await wl(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&wu(r.remoteStore,s.targetId),Sl(r,s.targetId)})).catch(Us)):(Sl(r,s.targetId),await wl(r.localStore,s.targetId,!0))}async function W0(t,e){const n=fe(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),wu(n.remoteStore,r.targetId))}async function K0(t,e,n){const r=eC(t);try{const s=await(function(o,c){const l=fe(o),u=$e.now(),f=c.reduce(((y,S)=>y.add(S.key)),Ie());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",(y=>{let S=Mn(),R=Ie();return l.Ns.getEntries(y,f).next((O=>{S=O,S.forEach(((B,x)=>{x.isValidDocument()||(R=R.add(B))}))})).next((()=>l.localDocuments.getOverlayedDocuments(y,S))).next((O=>{p=O;const B=[];for(const x of c){const z=iR(x,p.get(x.key).overlayedDocument);z!=null&&B.push(new Yr(x.key,z,Om(z.value.mapValue),dn.exists(!0)))}return l.mutationQueue.addMutationBatch(y,u,B,c)})).next((O=>{m=O;const B=O.applyToLocalDocumentSet(p,R);return l.documentOverlayCache.saveOverlays(y,O.batchId,B)}))})).then((()=>({batchId:m.batchId,changes:Hm(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(o,c,l){let u=o.Vu[o.currentUser.toKey()];u||(u=new je(Te)),u=u.insert(c,l),o.Vu[o.currentUser.toKey()]=u})(r,s.batchId,n),await ao(r,s.changes),await Za(r.remoteStore)}catch(s){const i=Cu(s,"Failed to persist write");n.reject(i)}}async function b_(t,e){const n=fe(t);try{const r=await r0(n.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=n.Au.get(i);o&&(Ve(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?Ve(o.hu,14607):s.removedDocuments.size>0&&(Ve(o.hu,42227),o.hu=!1))})),await ao(n,r,e)}catch(r){await Us(r)}}function $d(t,e,n){const r=fe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach(((i,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(o,c){const l=fe(o);l.onlineState=c;let u=!1;l.queries.forEach(((f,p)=>{for(const m of p.Sa)m.va(c)&&(u=!0)})),u&&Pu(l)})(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function G0(t,e,n){const r=fe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new je(se.comparator);o=o.insert(i,Et.newNoDocument(i,he.min()));const c=Ie().add(i),l=new Ja(he.min(),new Map,new je(Te),o,c);await b_(r,l),r.du=r.du.remove(i),r.Au.delete(e),Vu(r)}else await wl(r.localStore,e,!1).then((()=>Sl(r,e,n))).catch(Us)}async function Q0(t,e){const n=fe(t),r=e.batch.batchId;try{const s=await n0(n.localStore,e);R_(n,r,null),S_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ao(n,s)}catch(s){await Us(s)}}async function J0(t,e,n){const r=fe(t);try{const s=await(function(o,c){const l=fe(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let f;return l.mutationQueue.lookupMutationBatch(u,c).next((p=>(Ve(p!==null,37113),f=p.keys(),l.mutationQueue.removeMutationBatch(u,p)))).next((()=>l.mutationQueue.performConsistencyCheck(u))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(u,f,c))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f))).next((()=>l.localDocuments.getDocuments(u,f)))}))})(r.localStore,e);R_(r,e,n),S_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ao(r,s)}catch(s){await Us(s)}}function S_(t,e){(t.mu.get(e)||[]).forEach((n=>{n.resolve()})),t.mu.delete(e)}function R_(t,e,n){const r=fe(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function Sl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach((r=>{t.Ru.containsKey(r)||C_(t,r)}))}function C_(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(wu(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),Vu(t))}function jd(t,e,n){for(const r of n)r instanceof I_?(t.Ru.addReference(r.key,e),Y0(t,r)):r instanceof w_?(X(ku,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||C_(t,r.key)):le(19791,{wu:r})}function Y0(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(X(ku,"New document in limbo: "+n),t.Eu.add(r),Vu(t))}function Vu(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new se(Be.fromString(e)),r=t.fu.next();t.Au.set(r,new B0(n)),t.du=t.du.insert(n,r),m_(t.remoteStore,new or(fn(Bm(n.path)),r,"TargetPurposeLimboResolution",ja.ce))}}async function ao(t,e,n){const r=fe(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach(((c,l)=>{o.push(r.pu(l,e,n).then((u=>{if((u||n)&&r.isPrimaryClient){const f=u?!u.fromCache:n?.targetChanges.get(l.targetId)?.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(u){s.push(u);const f=Tu.As(l.targetId,u);i.push(f)}})))})),await Promise.all(o),r.Pu.H_(s),await(async function(l,u){const f=fe(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>F.forEach(u,(m=>F.forEach(m.Es,(y=>f.persistence.referenceDelegate.addReference(p,m.targetId,y))).next((()=>F.forEach(m.ds,(y=>f.persistence.referenceDelegate.removeReference(p,m.targetId,y)))))))))}catch(p){if(!Bs(p))throw p;X(Iu,"Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const y=f.Ms.get(m),S=y.snapshotVersion,R=y.withLastLimboFreeSnapshotVersion(S);f.Ms=f.Ms.insert(m,R)}}})(r.localStore,i))}async function X0(t,e){const n=fe(t);if(!n.currentUser.isEqual(e)){X(ku,"User change. New user:",e.toKey());const r=await f_(n.localStore,e);n.currentUser=e,(function(i,o){i.mu.forEach((c=>{c.forEach((l=>{l.reject(new ee($.CANCELLED,o))}))})),i.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ao(n,r.Ls)}}function Z0(t,e){const n=fe(t),r=n.Au.get(e);if(r&&r.hu)return Ie().add(r.key);{let s=Ie();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const c=n.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}function P_(t){const e=fe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=b_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Z0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=G0.bind(null,e),e.Pu.H_=x0.bind(null,e.eventManager),e.Pu.yu=M0.bind(null,e.eventManager),e}function eC(t){const e=fe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Q0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=J0.bind(null,e),e}class Ea{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ya(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return t0(this.persistence,new XR,e.initialUser,this.serializer)}Cu(e){return new h_(Eu.mi,this.serializer)}Du(e){return new c0}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ea.provider={build:()=>new Ea};class tC extends Ea{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Ve(this.persistence.referenceDelegate instanceof ya,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new LR(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Pt.withCacheSize(this.cacheSizeBytes):Pt.DEFAULT;return new h_((r=>ya.mi(r,n)),this.serializer)}}class Rl{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>$d(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=X0.bind(null,this.syncEngine),await k0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new N0})()}createDatastore(e){const n=Ya(e.databaseInfo.databaseId),r=(function(i){return new d0(i)})(e.databaseInfo);return(function(i,o,c,l){return new _0(i,o,c,l)})(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return(function(r,s,i,o,c){return new v0(r,s,i,o,c)})(this.localStore,this.datastore,e.asyncQueue,(n=>$d(this.syncEngine,n,0)),(function(){return xd.v()?new xd:new l0})())}createSyncEngine(e,n){return(function(s,i,o,c,l,u,f){const p=new $0(s,i,o,c,l,u);return f&&(p.gu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){await(async function(n){const r=fe(n);X(Wr,"RemoteStore shutting down."),r.Ea.add(5),await oo(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Rl.provider={build:()=>new Rl};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):xn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr="FirestoreClient";class rC{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=yt.UNAUTHENTICATED,this.clientId=cu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async o=>{X(wr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(X(wr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new pr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Cu(n,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function jc(t,e){t.asyncQueue.verifyOperationInProgress(),X(wr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async s=>{r.isEqual(s)||(await f_(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function qd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await sC(t);X(wr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((r=>Ld(e.remoteStore,r))),t.setAppCheckTokenChangeListener(((r,s)=>Ld(e.remoteStore,s))),t._onlineComponents=e}async function sC(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X(wr,"Using user provided OfflineComponentProvider");try{await jc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(s){return s.name==="FirebaseError"?s.code===$.FAILED_PRECONDITION||s.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;Rs("Error using user provided cache. Falling back to memory cache: "+n),await jc(t,new Ea)}}else X(wr,"Using default OfflineComponentProvider"),await jc(t,new tC(void 0));return t._offlineComponents}async function k_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X(wr,"Using user provided OnlineComponentProvider"),await qd(t,t._uninitializedComponentsProvider._online)):(X(wr,"Using default OnlineComponentProvider"),await qd(t,new Rl))),t._onlineComponents}function iC(t){return k_(t).then((e=>e.syncEngine))}async function oC(t){const e=await k_(t),n=e.eventManager;return n.onListen=j0.bind(null,e.syncEngine),n.onUnlisten=z0.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=q0.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=W0.bind(null,e.syncEngine),n}function aC(t,e,n={}){const r=new pr;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,c,l,u){const f=new nC({next:m=>{f.Nu(),o.enqueueAndForget((()=>D0(i,p))),m.fromCache&&l.source==="server"?u.reject(new ee($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new L0(c,f,{includeMetadataChanges:!0,qa:!0});return O0(i,p)})(await oC(t),t.asyncQueue,e,n,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hd=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N_="firestore.googleapis.com",zd=!0;class Wd{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ee($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=N_,this.ssl=zd}else this.host=e.host,this.ssl=e.ssl??zd;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=u_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<xR)throw new ee($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}yS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=V_(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new ee($.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new ee($.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new ee($.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ec{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ee($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ee($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new cS;switch(r.type){case"firstParty":return new fS(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ee($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=Hd.get(n);r&&(X("ComponentProvider","Removing Datastore"),Hd.delete(n),r.terminate())})(this),Promise.resolve()}}function cC(t,e,n,r={}){t=Ps(t,ec);const s=Ds(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},c=`${e}:${n}`;s&&(Rg(`https://${c}`),Cg("Firestore",!0)),i.host!==N_&&i.host!==c&&Rs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:r};if(!jr(l,o)&&(t._setSettings(l),r.mockUserToken)){let u,f;if(typeof r.mockUserToken=="string")u=r.mockUserToken,f=yt.MOCK_USER;else{u=TI(r.mockUserToken,t._app?.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new ee($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new yt(p)}t._authCredentials=new lS(new Tm(u,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new tc(this.firestore,e,this._query)}}class st{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new st(this.firestore,e,this._key)}toJSON(){return{type:st._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(ro(n,st._jsonSchema))return new st(e,r||null,new se(Be.fromString(n.referencePath)))}}st._jsonSchemaVersion="firestore/documentReference/1.0",st._jsonSchema={type:Qe("string",st._jsonSchemaVersion),referencePath:Qe("string")};class gr extends tc{constructor(e,n,r){super(e,n,Bm(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new st(this.firestore,null,new se(e))}withConverter(e){return new gr(this.firestore,e,this._path)}}function nt(t,e,...n){if(t=Ft(t),Im("collection","path",e),t instanceof ec){const r=Be.fromString(e,...n);return od(r),new gr(t,null,r)}{if(!(t instanceof st||t instanceof gr))throw new ee($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Be.fromString(e,...n));return od(r),new gr(t.firestore,null,r)}}function O_(t,e,...n){if(t=Ft(t),arguments.length===1&&(e=cu.newId()),Im("doc","path",e),t instanceof ec){const r=Be.fromString(e,...n);return id(r),new st(t,null,new se(r))}{if(!(t instanceof st||t instanceof gr))throw new ee($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Be.fromString(e,...n));return id(r),new st(t.firestore,t instanceof gr?t.converter:null,new se(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kd="AsyncQueue";class Gd{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new p_(this,"async_queue_retry"),this._c=()=>{const r=$c();r&&X(Kd,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=$c();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=$c();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new pr;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Bs(e))throw e;X(Kd,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,xn("INTERNAL UNHANDLED ERROR: ",Qd(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Ru.createAndSchedule(this,e,n,r,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&le(47125,{Pc:Qd(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Qd(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class nc extends ec{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Gd,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Gd(e),this._firestoreClient=void 0,await e}}}function lC(t,e){const n=typeof t=="object"?t:Ng(),r=typeof t=="string"?t:ha,s=Xl(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=vI("firestore");i&&cC(s,...i)}return s}function D_(t){if(t._terminated)throw new ee($.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||uC(t),t._firestoreClient}function uC(t){const e=t._freezeSettings(),n=(function(s,i,o,c){return new PS(s,i,o,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,V_(c.experimentalLongPollingOptions),c.useFetchStreams,c.isUsingEmulator)})(t._databaseId,t._app?.options.appId||"",t._persistenceKey,e);t._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new rC(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&(function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}})(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this._byteString=e}static fromBase64String(e){try{return new $t(ut.fromBase64String(e))}catch(n){throw new ee($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new $t(ut.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:$t._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ro(e,$t._jsonSchema))return $t.fromBase64String(e.bytes)}}$t._jsonSchemaVersion="firestore/bytes/1.0",$t._jsonSchema={type:Qe("string",$t._jsonSchemaVersion),bytes:Qe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ee($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new lt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ee($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ee($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Te(this._lat,e._lat)||Te(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:gn._jsonSchemaVersion}}static fromJSON(e){if(ro(e,gn._jsonSchema))return new gn(e.latitude,e.longitude)}}gn._jsonSchemaVersion="firestore/geoPoint/1.0",gn._jsonSchema={type:Qe("string",gn._jsonSchemaVersion),latitude:Qe("number"),longitude:Qe("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:mn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ro(e,mn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new mn(e.vectorValues);throw new ee($.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}mn._jsonSchemaVersion="firestore/vectorValue/1.0",mn._jsonSchema={type:Qe("string",mn._jsonSchemaVersion),vectorValues:Qe("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hC=/^__.*__$/;class fC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Yr(e,this.data,this.fieldMask,n,this.fieldTransforms):new so(e,this.data,n,this.fieldTransforms)}}function M_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw le(40011,{Ac:t})}}class Ou{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Ou({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Ta(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(M_(this.Ac)&&hC.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class dC{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ya(e)}Cc(e,n,r,s=!1){return new Ou({Ac:e,methodName:n,Dc:r,path:lt.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function L_(t){const e=t._freezeSettings(),n=Ya(t._databaseId);return new dC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function F_(t,e,n,r,s,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);j_("Data must be an object, but it was:",o,r);const c=B_(r,o);let l,u;if(i.merge)l=new Yt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=pC(e,p,n);if(!o.contains(m))throw new ee($.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);mC(f,m)||f.push(m)}l=new Yt(f),u=o.fieldTransforms.filter((p=>l.covers(p.field)))}else l=null,u=o.fieldTransforms;return new fC(new Bt(c),l,u)}function U_(t,e){if($_(t=Ft(t)))return j_("Unsupported field value:",e,t),B_(t,e);if(t instanceof x_)return(function(r,s){if(!M_(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(r,s){const i=[];let o=0;for(const c of r){let l=U_(c,s.wc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}})(t,e)}return(function(r,s){if((r=Ft(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ZS(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=$e.fromDate(r);return{timestampValue:_a(s.serializer,i)}}if(r instanceof $e){const i=new $e(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:_a(s.serializer,i)}}if(r instanceof gn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof $t)return{bytesValue:r_(s.serializer,r._byteString)};if(r instanceof st){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:yu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof mn)return(function(o,c){return{mapValue:{fields:{[Vm]:{stringValue:Nm},[fa]:{arrayValue:{values:o.toArray().map((u=>{if(typeof u!="number")throw c.Sc("VectorValues must only contain numeric values.");return gu(c.serializer,u)}))}}}}}})(r,s);throw s.Sc(`Unsupported field value: ${lu(r)}`)})(t,e)}function B_(t,e){const n={};return bm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Qr(t,((r,s)=>{const i=U_(s,e.mc(r));i!=null&&(n[r]=i)})),{mapValue:{fields:n}}}function $_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof $e||t instanceof gn||t instanceof $t||t instanceof st||t instanceof x_||t instanceof mn)}function j_(t,e,n){if(!$_(n)||!wm(n)){const r=lu(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function pC(t,e,n){if((e=Ft(e))instanceof Nu)return e._internalPath;if(typeof e=="string")return q_(t,e);throw Ta("Field path arguments must be of type string or ",t,!1,void 0,n)}const gC=new RegExp("[~\\*/\\[\\]]");function q_(t,e,n){if(e.search(gC)>=0)throw Ta(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Nu(...e.split("."))._internalPath}catch{throw Ta(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ta(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new ee($.INVALID_ARGUMENT,c+t+l)}function mC(t,e){return t.some((n=>n.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new st(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new _C(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(z_("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class _C extends H_{data(){return super.data()}}function z_(t,e){return typeof e=="string"?q_(t,e):e instanceof Nu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ee($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class vC{convertValue(e,n="none"){switch(Tr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return We(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Er(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw le(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Qr(e,((s,i)=>{r[s]=this.convertValue(i,n)})),r}convertVectorValue(e){const n=e.fields?.[fa].arrayValue?.values?.map((r=>We(r.doubleValue)));return new mn(n)}convertGeoPoint(e){return new gn(We(e.latitude),We(e.longitude))}convertArray(e,n){return(e.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ha(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ji(e));default:return null}}convertTimestamp(e){const n=vr(e);return new $e(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Be.fromString(e);Ve(l_(r),9688,{name:e});const s=new qi(r.get(1),r.get(3)),i=new se(r.popFirst(5));return s.isEqual(n)||xn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W_(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class Po{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Es extends H_{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new jo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(z_("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ee($.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Es._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Es._jsonSchemaVersion="firestore/documentSnapshot/1.0",Es._jsonSchema={type:Qe("string",Es._jsonSchemaVersion),bundleSource:Qe("string","DocumentSnapshot"),bundleName:Qe("string"),bundle:Qe("string")};class jo extends Es{data(e={}){return super.data(e)}}class Ts{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Po(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((r=>{e.call(n,new jo(this._firestore,this._userDataWriter,r.key,r,new Po(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ee($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((c=>{const l=new jo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Po(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const l=new jo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Po(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:EC(c.type),doc:l,oldIndex:u,newIndex:f}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ee($.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ts._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=cu.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function EC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return le(61501,{type:t})}}Ts._jsonSchemaVersion="firestore/querySnapshot/1.0",Ts._jsonSchema={type:Qe("string",Ts._jsonSchemaVersion),bundleSource:Qe("string","QuerySnapshot"),bundleName:Qe("string"),bundle:Qe("string")};class TC extends vC{constructor(e){super(),this.firestore=e}convertBytes(e){return new $t(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new st(this.firestore,null,n)}}function Kt(t){t=Ps(t,tc);const e=Ps(t.firestore,nc),n=D_(e),r=new TC(e);return yC(t._query),aC(n,t._query).then((s=>new Ts(e,r,t,s)))}function IC(t,e,n){t=Ps(t,st);const r=Ps(t.firestore,nc),s=W_(t.converter,e);return K_(r,[F_(L_(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,dn.none())])}function wC(t,e){const n=Ps(t.firestore,nc),r=O_(t),s=W_(t.converter,e);return K_(n,[F_(L_(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,dn.exists(!1))]).then((()=>r))}function K_(t,e){return(function(r,s){const i=new pr;return r.asyncQueue.enqueueAndForget((async()=>K0(await iC(r),s,i))),i.promise})(D_(t),e)}(function(e,n=!0){(function(s){Fs=s})(xs),bs(new qr("firestore",((r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new nc(new uS(r.getProvider("auth-internal")),new dS(o,r.getProvider("app-check-internal")),(function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ee($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qi(u.options.projectId,f)})(o,s),o);return i={useFetchStreams:n,...i},c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),hr(td,nd,e),hr(td,nd,"esm2020")})();const AC={apiKey:"AIzaSyCgwtwWLYO3mx64YqmiGLOYzVShiKyocYI",authDomain:"gedankenpfade-a2cc9.firebaseapp.com",projectId:"gedankenpfade-a2cc9",storageBucket:"gedankenpfade-a2cc9.firebasestorage.app",messagingSenderId:"555433406669",appId:"1:555433406669:web:ac0ace641bba0dc33d3984",measurementId:"G-52YWXEG0EK"},bC=Vg(AC),Ut=lC(bC),Du=Wl("user",()=>{const t=_e([]),e=_e(null);async function n(){try{const i=await Kt(nt(Ut,"users"));t.value=i.docs.map(o=>o.data())}catch(i){console.error("Fehler beim Abrufen der Benutzer:",i)}}async function r(i){t.value.length===0&&await n();const o=t.value.find(c=>c.userId===i||null);o==null?(console.error("Nutzer nicht gefunden!"),e.value={username:"unbekannt",userId:i}):e.value=o}function s(){e.value=null}return{setLoggedinUser:r,unsetLoggedinUser:s,loggedinUser:e}}),xu=Wl("auth",()=>{const t=_e(null),e=_e(null),n=Du();async function r(i,o){const c=Zf();try{const l=await zA(c,i,o);t.value=l.user,t.value.email&&n.setLoggedinUser(t.value.uid),e.value=null}catch(l){l=l.message,console.error("Fehler bei der Anmeldung:",l)}}async function s(){const i=Zf();try{await GA(i),t.value=null,n.unsetLoggedinUser(),e.value=null}catch(o){o=o.message,console.error("Fehler bei der Abmeldung:",o)}}return{login:r,logout:s,error:e,currentUser:t}}),SC={class:"login-register modal-overlay"},RC={class:"login-modal"},CC={class:"login"},PC={key:0},kC=ht({__name:"Login",emits:["closeModal"],setup(t,{emit:e}){const n=xu(),r=_e(""),s=_e(""),i=e,o=n.error;function c(){n.login(r.value,s.value),i("closeModal")}return(l,u)=>(te(),oe("div",SC,[V("div",RC,[V("div",CC,[u[3]||(u[3]=V("h2",null,"Login",-1)),Zn(V("input",{"onUpdate:modelValue":u[0]||(u[0]=f=>r.value=f),placeholder:"E-Mail"},null,512),[[Fr,r.value]]),Zn(V("input",{"onUpdate:modelValue":u[1]||(u[1]=f=>s.value=f),type:"password",placeholder:"Passwort"},null,512),[[Fr,s.value]]),V("button",{onClick:c},"Anmelden"),ze(o)?(te(),oe("p",PC,we(ze(o)),1)):Qt("",!0)]),V("button",{onClick:u[2]||(u[2]=f=>i("closeModal"))},"Abbrechen")])]))}}),G_=In(kC,[["__scopeId","data-v-9b999bd5"]]),$n=Wl("books",()=>{const t=_e([]),e=_e([]),n=_e([]),r=_e([]),s=_e([]);async function i(){if(t.value.length==0){const y=nt(Ut,"queer-books");t.value=await Promise.all((await Kt(y)).docs.map(async S=>{const R=S.data(),O=nt(S.ref,"Inhalt"),B=(await Kt(O)).docs.map(x=>({title:x.data().titel,content:x.data().text,id:x.data().id}));return{title:R.titel,author:R.autor,description:R.beschreibung,content:B,category:R.kategorie}}))}}async function o(){if(e.value.length==0){const y=nt(Ut,"ff-books");e.value=await Promise.all((await Kt(y)).docs.map(async S=>{const R=S.data(),O=nt(S.ref,"Inhalt"),B=(await Kt(O)).docs.map(x=>({title:x.data().titel,content:x.data().text,id:x.data().id}));return{title:R.titel,author:R.autor,description:R.beschreibung,content:B,category:R.kategorie}}))}}async function c(){if(n.value.length==0){const y=nt(Ut,"other-books");n.value=await Promise.all((await Kt(y)).docs.map(async S=>{const R=S.data(),O=nt(S.ref,"Inhalt"),B=(await Kt(O)).docs.map(x=>({title:x.data().titel,content:x.data().text,id:x.data().id}));return{title:R.titel,author:R.autor,description:R.beschreibung,content:B,category:R.kategorie}}))}}async function l(){if(r.value.length==0){const y=nt(Ut,"autism-books");r.value=await Promise.all((await Kt(y)).docs.map(async S=>{const R=S.data(),O=nt(S.ref,"Inhalt"),B=(await Kt(O)).docs.map(x=>({title:x.data().titel,content:x.data().text,id:x.data().id}));return{title:R.titel,author:R.autor,description:R.beschreibung,content:B,category:R.kategorie}}))}}async function u(){if(s.value.length==0){const y=nt(Ut,"glasschild-books");s.value=await Promise.all((await Kt(y)).docs.map(async S=>{const R=S.data(),O=nt(S.ref,"Inhalt"),B=(await Kt(O)).docs.map(x=>({title:x.data().titel,content:x.data().text,id:x.data().id}));return{title:R.titel,author:R.autor,description:R.beschreibung,category:R.kategorie,content:B}}))}}async function f(){await i(),await o(),await c(),await l(),await u()}async function p(y,S){if(S==="queer"){t.value.length===0&&await i();const R=t.value.find(O=>O.title===y);return R===void 0?null:R}else if(S=="glasschild"){s.value.length===0&&await u();const R=s.value.find(O=>O.title===y);return R===void 0?null:R}else return console.error("Unsupported category"),null}async function m(y,S){try{let R=nt(Ut,"other-books");const O=_e("");switch(y){case"Queer":O.value="queer",R=nt(Ut,"queer-books");break;case"Fanfiction":O.value="ff",R=nt(Ut,"ff-books");break;case"Autismus":O.value="autism",R=nt(Ut,"autism-books");break;case"Anderes":O.value="other",R=nt(Ut,"other-books");break;default:O.value="other",R=nt(Ut,"other-books")}const B={autor:S.author,beschreibung:S.description,kategorie:O.value,titel:S.title,zielgruppe:"",erstelltVon:S.createdBy},x=await wC(R,B),z=nt(x,"Inhalt");S.content.forEach(async K=>{await IC(O_(z,"Kapitel"+K.id.toString()),{id:K.id,titel:K.title,text:K.content})}),console.log("done")}catch(R){console.error("Fehler beim Hinzufügen des Buchs: ",R)}}return{fetchQueerBooks:i,fetchFfBooks:o,fetchOtherBooks:c,fetchAutismBooks:l,fetchGlassChildBooks:u,getAllBooks:f,queerBooks:t,ffBooks:e,otherBooks:n,autismBooks:r,glassChildBooks:s,getBookByName:p,addNewBook:m}}),VC={class:"content-container"},NC={class:"bookshelf"},OC={class:"shelf-layer"},DC={class:"book"},xC={class:"shelf-layer"},MC={class:"book"},LC={class:"shelf-layer"},FC={class:"book"},UC={class:"shelf-layer"},BC={class:"book"},$C=ht({__name:"Homepage",setup(t){const e=$n(),n=xu(),r=kt(()=>n.currentUser!=null);yi("loggedIn",r);const s=_e(!1);Fn(async()=>{await e.getAllBooks()});function i(){Q_.push({name:"Autorenuebersicht"})}function o(){n.currentUser==null?s.value=!0:n.logout()}return(c,l)=>(te(),oe(Re,null,[ge(Sr,{title:"Gedankenpfade",type:"main",onLogin:l[0]||(l[0]=u=>o())}),V("div",VC,[l[8]||(l[8]=V("h2",null,"Startseite",-1)),l[9]||(l[9]=V("p",null,"Intro - Über diese Seite bla bla",-1)),l[10]||(l[10]=V("hr",null,null,-1)),V("div",NC,[l[3]||(l[3]=V("h3",null,"Bücherregal",-1)),l[4]||(l[4]=V("h4",null,"Queere Werke",-1)),V("div",OC,[(te(!0),oe(Re,null,Rt(ze(e).queerBooks,u=>(te(),oe("div",DC,we(u.title)+" "+we(u.author),1))),256)),ge(Io,{class:"further-books",link:"/queer",icon:!0,text:"Weitere Bücher ansehen"})]),l[5]||(l[5]=V("h4",null,"Harry Potter Fanfictions",-1)),V("div",xC,[(te(!0),oe(Re,null,Rt(ze(e).ffBooks,u=>(te(),oe("div",MC,we(u.title),1))),256)),ge(Io,{class:"further-books",link:"/fanfiction",icon:!0,text:"Weitere Bücher ansehen"})]),l[6]||(l[6]=V("h4",null,"Autismus",-1)),V("div",LC,[(te(!0),oe(Re,null,Rt(ze(e).autismBooks,u=>(te(),oe("div",FC,we(u.title),1))),256)),ge(Io,{class:"further-books",link:"/autismus",icon:!0,text:"Weitere Bücher ansehen"})]),l[7]||(l[7]=V("h4",null,"Andere",-1)),V("div",UC,[(te(!0),oe(Re,null,Rt(ze(e).otherBooks,u=>(te(),oe("div",BC,we(u.title),1))),256)),ge(Io,{class:"further-books",link:"/andere",icon:!0,text:"Weitere Bücher ansehen"})])])]),ge(Un,{onAuthorLogin:l[1]||(l[1]=u=>i()),type:"main",title:"Tschüss"}),s.value?(te(),Di(G_,{key:0,onCloseModal:l[2]||(l[2]=u=>s.value=!1)})):Qt("",!0)],64))}}),jC=In($C,[["__scopeId","data-v-e3b69232"]]),qC={class:"content-container"},HC={class:"shelf"},zC={class:"book-details"},WC={class:"bookshelf-description"},KC={class:"info-group"},GC={class:"info-group"},QC={class:"info-group"},JC=ht({__name:"QueerBookshelf",setup(t){const e=$n();return Fn(async()=>{await e.fetchQueerBooks()}),(n,r)=>{const s=Ar("RouterLink");return te(),oe(Re,null,[ge(Sr,{type:"queer",title:"Queere Werke"}),V("div",qC,[V("div",HC,[(te(!0),oe(Re,null,Rt(ze(e).queerBooks,i=>(te(),oe("div",zC,[r[4]||(r[4]=V("div",{class:"cover-img"},null,-1)),V("div",WC,[V("p",KC,[r[0]||(r[0]=V("span",null,"Titel: ",-1)),V("span",null,we(i.title),1)]),V("p",GC,[r[1]||(r[1]=V("span",null,"Autor: ",-1)),V("span",null,we(i.author),1)]),V("p",QC,[r[2]||(r[2]=V("span",null,"Beschreibung: ",-1)),V("span",null,we(i.description),1)]),ge(s,{to:{name:"Inhaltsverzeichnis",params:{title:i.title.toString()}}},{default:vn(()=>[...r[3]||(r[3]=[br("Jetzt lesen -> ",-1)])]),_:1},8,["to"])])]))),256))])]),ge(Un,{type:"queer",title:""})],64)}}}),YC={class:"content-container"},XC={class:"shelf"},ZC={class:"book-details"},eP={class:"bookshelf-description"},tP={class:"info-group"},nP={class:"info-group"},rP={class:"info-group"},sP=ht({__name:"FanfictionBookshelf",setup(t){const e=$n();return Fn(async()=>{await e.fetchFfBooks()}),(n,r)=>{const s=Ar("RouterLink");return te(),oe(Re,null,[ge(Sr,{type:"ff",title:"Fanfiction"}),V("div",YC,[V("div",XC,[(te(!0),oe(Re,null,Rt(ze(e).ffBooks,i=>(te(),oe("div",ZC,[r[4]||(r[4]=V("div",{class:"cover-img"},null,-1)),V("div",eP,[V("p",tP,[r[0]||(r[0]=V("span",null,"Titel: ",-1)),V("span",null,we(i.title),1)]),V("p",nP,[r[1]||(r[1]=V("span",null,"Autor: ",-1)),V("span",null,we(i.author),1)]),V("p",rP,[r[2]||(r[2]=V("span",null,"Beschreibung: ",-1)),V("span",null,we(i.description),1)]),ge(s,{to:{name:"Inhaltsverzeichnis",params:{title:i.title.toString()}}},{default:vn(()=>[...r[3]||(r[3]=[br("Jetzt lesen -> ",-1)])]),_:1},8,["to"])])]))),256))])]),ge(Un,{type:"ff",title:""})],64)}}}),iP={class:"content-container"},oP={class:"shelf"},aP={class:"book-details"},cP={class:"bookshelf-description"},lP={class:"info-group"},uP={class:"info-group"},hP={class:"info-group"},fP=ht({__name:"AutismBookshelf",setup(t){const e=$n();return Fn(async()=>{await e.fetchAutismBooks()}),(n,r)=>{const s=Ar("RouterLink");return te(),oe(Re,null,[ge(Sr,{type:"autism",title:"Autismus (er)leben"}),V("div",iP,[V("div",oP,[(te(!0),oe(Re,null,Rt(ze(e).autismBooks,i=>(te(),oe("div",aP,[r[4]||(r[4]=V("div",{class:"cover-img"},null,-1)),V("div",cP,[V("p",lP,[r[0]||(r[0]=V("span",null,"Titel: ",-1)),V("span",null,we(i.title),1)]),V("p",uP,[r[1]||(r[1]=V("span",null,"Autor: ",-1)),V("span",null,we(i.author),1)]),V("p",hP,[r[2]||(r[2]=V("span",null,"Beschreibung: ",-1)),V("span",null,we(i.description),1)]),ge(s,{to:{name:"Inhaltsverzeichnis",params:{title:i.title.toString()}}},{default:vn(()=>[...r[3]||(r[3]=[br("Jetzt lesen -> ",-1)])]),_:1},8,["to"])])]))),256))])]),ge(Un,{type:"autism",title:""})],64)}}}),dP={class:"addNewBook modal-overlay"},pP={class:"modal"},gP={class:"input"},mP=["value"],_P={class:"autor"},yP={class:"area-input"},vP={class:"area-input"},EP={class:"error"},TP={class:"buttons-group"},IP=ht({__name:"AddNewBook",emits:["closeModal"],setup(t,{emit:e}){const n=Du(),r=$n(),s=e,i=_e(["Queer","Fanfiction","Autismus","Anderes"]),o=_e(""),c=_e(!1),l=_e([]),u=_e({title:"",author:"",description:"",content:[],createdBy:""}),f=_e(1),p=_e({title:"",content:"",id:f.value});function m(){l.value=[],c.value=!1,n.loggedinUser?(u.value.title==""&&(l.value.push("Du musst einen Titel eingeben"),c.value=!0),o.value==""&&(l.value.push("Du musst eine Kategorie auswählen!"),c.value=!0),u.value.createdBy=n.loggedinUser.username,u.value.author==""&&(u.value.author=n.loggedinUser.username),p.value.title==""&&(p.value.title="Kapitel "+f.value),p.value.content==""&&(l.value.push("Das Kapitel muss etwas enthalten!"),c.value=!0),u.value.content.push(p.value)):(l.value.push("Kein Nutzer eingeloggt"),c.value=!0),c.value||(console.log("Buch: ",u.value),r.addNewBook(o.value,u.value),s("closeModal"))}return(y,S)=>(te(),oe("div",dP,[V("div",pP,[S[14]||(S[14]=V("h2",null,"Buch hinzufügen",-1)),V("div",gP,[V("div",null,[S[8]||(S[8]=V("label",null,"Buchtitel: ",-1)),Zn(V("input",{type:"text","onUpdate:modelValue":S[0]||(S[0]=R=>u.value.title=R)},null,512),[[Fr,u.value.title]])]),V("div",null,[S[9]||(S[9]=V("label",null,"Kategorie: ",-1)),Zn(V("select",{name:"category",id:"category","onUpdate:modelValue":S[1]||(S[1]=R=>o.value=R)},[(te(!0),oe(Re,null,Rt(i.value,R=>(te(),oe("option",{value:R},we(R),9,mP))),256))],512),[[ME,o.value]])])]),V("div",_P,[S[10]||(S[10]=V("label",null,"Autor: ",-1)),Zn(V("input",{type:"textfield","onUpdate:modelValue":S[2]||(S[2]=R=>u.value.author=R)},null,512),[[Fr,u.value.author]])]),V("div",yP,[S[11]||(S[11]=V("label",null,"Klappentext / Beschreibung: ",-1)),Zn(V("textarea",{id:"description","onUpdate:modelValue":S[3]||(S[3]=R=>u.value.description=R),rows:"3",cols:"50",placeholder:"Gib hier deine Beschreibung ein..."},null,512),[[Fr,u.value.description]])]),S[15]||(S[15]=V("hr",null,null,-1)),S[16]||(S[16]=V("h3",null,"Füge dein erstes Kapitel hinzu: ",-1)),V("div",null,[S[12]||(S[12]=V("label",null,"Titel: ",-1)),Zn(V("input",{type:"text","onUpdate:modelValue":S[4]||(S[4]=R=>p.value.title=R)},null,512),[[Fr,p.value.title]])]),V("div",vP,[S[13]||(S[13]=V("label",null,"Text:",-1)),Zn(V("textarea",{id:"chapterText","onUpdate:modelValue":S[5]||(S[5]=R=>p.value.content=R),rows:"10",cols:"50",placeholder:"Gib hier den Text deines ersten Kapitels ein"},null,512),[[Fr,p.value.content]])]),c.value?(te(!0),oe(Re,{key:0},Rt(l.value,R=>(te(),oe("p",EP,we(R),1))),256)):Qt("",!0),V("div",TP,[V("button",{onClick:S[6]||(S[6]=R=>y.$emit("closeModal"))},"Abbrechen"),V("button",{onClick:S[7]||(S[7]=R=>m())},"Buch erstellen")])])]))}}),wP=In(IP,[["__scopeId","data-v-d3159435"]]),AP={class:"changeBookinfo modal-overlay"},bP={class:"modal"},SP={key:0,class:"error"},RP={class:"buttons-group"},CP=ht({__name:"ChangeBookinfo",emits:["closeModal"],setup(t,{emit:e}){const n=e;_e(["Queer","Fanfiction","Autismus","Anderes"]),_e("Titel"),_e("Beschreibungstext bla bla bla");const r=_e(!1);function s(){console.log("Eingaben werden überprüft..."),n("closeModal")}return(i,o)=>(te(),oe("div",AP,[V("div",bP,[o[2]||(o[2]=V("h2",null,"Buch bearbeiten",-1)),o[3]||(o[3]=V("p",null,"Diese Funktion gibt es noch nicht. Komm bitte später wieder.",-1)),r.value?(te(),oe("p",SP,"Nutzername oder Passwort falsch!")):Qt("",!0),V("div",RP,[V("button",{onClick:o[0]||(o[0]=c=>i.$emit("closeModal"))},"Abbrechen"),V("button",{onClick:o[1]||(o[1]=c=>s())},"Änderungen speichern")])])]))}}),PP={key:0,class:"authorspacewrapper body"},kP={class:"content-container"},VP={class:"container-header"},NP={class:"content-container"},OP={class:"container-header"},DP={class:"booklist"},xP={key:3,class:"login modal-overlay"},MP=ht({__name:"AuthorSpace",setup(t){const e=xu(),n=Du(),r=_e(!1),s=_e(!1),i=_e([{},{},{}]);return _e(!1),(o,c)=>(te(),oe(Re,null,[ze(e).currentUser?(te(),oe("div",PP,[ge(Sr,{type:"main",title:"Autorenbereich"}),V("div",kP,[V("div",VP,[V("h2",null," Herzlich Willkommen, "+we(ze(n).loggedinUser?.username)+"!",1)])]),c[6]||(c[6]=V("hr",null,null,-1)),V("div",NP,[V("div",OP,[c[3]||(c[3]=V("h2",null,"Meine Bücher:",-1)),V("button",{onClick:c[0]||(c[0]=l=>r.value=!0)},"Neues Buch anlegen")]),V("ul",DP,[(te(!0),oe(Re,null,Rt(i.value,l=>(te(),oe("li",null,[br(we(l.title)+": Kapitel ",1),c[4]||(c[4]=V("button",null,"Infos bearbeiten",-1)),c[5]||(c[5]=V("button",null,"Kapitel bearbeiten",-1))]))),256))])]),ge(Un,{type:"main",title:""})])):Qt("",!0),r.value?(te(),Di(wP,{key:1,onCloseModal:c[1]||(c[1]=l=>r.value=!1)})):Qt("",!0),s.value?(te(),Di(CP,{key:2,onCloseModal:c[2]||(c[2]=l=>s.value=!1)})):Qt("",!0),ze(e).currentUser?Qt("",!0):(te(),oe("div",xP,[ge(G_)]))],64))}}),LP=In(MP,[["__scopeId","data-v-fa579b3b"]]),FP={class:"content-container"},UP={class:"description"},BP={class:"content"},$P={key:0,class:"contentlist"},jP=ht({__name:"Book",setup(t){const e=$n(),n=Eg(),r=_e({}),s=_e("");return Fn(async()=>{if(n!=null){const i=n.params.title;n.params.category=="queer"?(r.value=await e.getBookByName(i,"queer"),s.value="queer"):(r.value=await e.getBookByName(i,"glasschild"),s.value="glasschild")}console.log(r.value)}),(i,o)=>{const c=Ar("RouterLink");return te(),oe(Re,null,[ge(Sr,{title:"",type:s.value},null,8,["type"]),V("div",FP,[V("div",UP,[V("p",null,we(r.value?.title),1),V("p",null,[o[0]||(o[0]=V("span",null,"von ",-1)),V("span",null,we(r.value?.author),1)]),V("p",null,[o[1]||(o[1]=V("span",null,"Beschreibung: ",-1)),V("span",null,we(r.value?.description),1)])]),o[3]||(o[3]=V("hr",null,null,-1)),V("div",BP,[o[2]||(o[2]=V("h3",null,"Inhalt:",-1)),r.value?(te(),oe("ol",$P,[(te(!0),oe(Re,null,Rt(r.value?.content,(l,u)=>(te(),oe("li",null,[ge(c,{to:{name:"Kapitel",params:{category:r.value.category.toString(),title:r.value.title.toString(),chapter:u+1}}},{default:vn(()=>[br(we(l.title),1)]),_:2},1032,["to"])]))),256))])):Qt("",!0)])]),ge(Un,{title:"",type:s.value},null,8,["type"])],64)}}}),qP=In(jP,[["__scopeId","data-v-57d587a5"]]),HP={class:"content-container"},zP={class:"chapter"},WP={class:"titel"},KP=["innerHTML"],GP=ht({__name:"Chapter",setup(t){const e=$n(),n=Eg(),r=_e({}),s=_e({}),i=_e("");return Fn(async()=>{if(n!=null){const o=n.params.title;n.params.category=="queer"?(r.value=await e.getBookByName(o,"queer"),i.value="queer"):(r.value=await e.getBookByName(o,"glasschild"),i.value="glasschild"),s.value=r.value?.content.find(l=>l.id===parseInt(n.params.chapter))}}),(o,c)=>(te(),oe(Re,null,[V("div",HP,[V("div",zP,[V("h1",WP,we(s.value?.title),1),V("div",{class:"text",innerHTML:s.value?.content},null,8,KP)])]),ge(Un,{type:i.value,title:""},null,8,["type"])],64))}}),QP=In(GP,[["__scopeId","data-v-9f676b66"]]),JP={class:"content-container"},YP={class:"shelf"},XP={class:"book-details"},ZP={class:"bookshelf-description"},e1={class:"info-group"},t1={class:"info-group"},n1={class:"info-group"},r1=ht({__name:"RandomBookshelf",setup(t){const e=$n();return Fn(async()=>{await e.fetchOtherBooks()}),(n,r)=>{const s=Ar("RouterLink");return te(),oe(Re,null,[ge(Sr,{type:"other",title:"Andere Werke"}),V("div",JP,[V("div",YP,[(te(!0),oe(Re,null,Rt(ze(e).otherBooks,i=>(te(),oe("div",XP,[r[4]||(r[4]=V("div",{class:"cover-img"},null,-1)),V("div",ZP,[V("p",e1,[r[0]||(r[0]=V("span",null,"Titel: ",-1)),V("span",null,we(i.title),1)]),V("p",t1,[r[1]||(r[1]=V("span",null,"Autor: ",-1)),V("span",null,we(i.author),1)]),V("p",n1,[r[2]||(r[2]=V("span",null,"Beschreibung: ",-1)),V("span",null,we(i.description),1)]),ge(s,{to:{name:"Inhaltsverzeichnis",params:{title:i.title.toString()}}},{default:vn(()=>[...r[3]||(r[3]=[br("Jetzt lesen -> ",-1)])]),_:1},8,["to"])])]))),256))])]),ge(Un,{type:"other",title:""})],64)}}}),s1={class:"content-container"},i1={class:"shelf"},o1={class:"book-details"},a1={class:"bookshelf-description"},c1={class:"info-group"},l1={class:"info-group"},u1={class:"info-group"},h1=ht({__name:"ChildOfGlassBookshelf",setup(t){const e=$n();return Fn(async()=>{await e.fetchGlassChildBooks()}),(n,r)=>{const s=Ar("RouterLink");return te(),oe(Re,null,[ge(Sr,{type:"glasschild",title:"Child of Glass"}),V("div",s1,[V("div",i1,[(te(!0),oe(Re,null,Rt(ze(e).glassChildBooks,i=>(te(),oe("div",o1,[r[4]||(r[4]=V("div",{class:"cover-img"},null,-1)),V("div",a1,[V("p",c1,[r[0]||(r[0]=V("span",null,"Titel: ",-1)),V("span",null,we(i.title),1)]),V("p",l1,[r[1]||(r[1]=V("span",null,"Autor: ",-1)),V("span",null,we(i.author),1)]),V("p",u1,[r[2]||(r[2]=V("span",null,"Beschreibung: ",-1)),V("span",null,we(i.description),1)]),ge(s,{to:{name:"Inhaltsverzeichnis",params:{category:i.category.toString(),title:i.title.toString()}}},{default:vn(()=>[...r[3]||(r[3]=[br("Jetzt lesen -> ",-1)])]),_:1},8,["to"])])]))),256))])]),ge(Un,{type:"glasschild",title:""})],64)}}}),f1=[{path:"/",name:"Home",component:jC},{path:"/queer",name:"Queer",component:JC},{path:"/fanfiction",name:"Fanfiction",component:sP},{path:"/autismus",name:"Autismus (er)leben",component:fP},{path:"/andere",name:"Andere Werke",component:r1},{path:"/child-of-glass",name:"Child of Glass",component:h1},{path:"/:category/:title",name:"Inhaltsverzeichnis",component:qP},{path:"/:category/:title/:chapter",name:"Kapitel",component:QP},{path:"/authorspace",name:"Autorenuebersicht",component:LP}],Q_=XT({history:CT(),routes:f1}),d1=jE(),Mu=UE(YE);Mu.use(d1);Mu.use(Q_);Mu.mount("#app");
