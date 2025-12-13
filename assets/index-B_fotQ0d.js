(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function kl(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const xe={},ds=[],pn=()=>{},ep=()=>!1,Ia=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Vl=t=>t.startsWith("onUpdate:"),Tt=Object.assign,Nl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},my=Object.prototype.hasOwnProperty,ke=(t,e)=>my.call(t,e),ue=Array.isArray,ps=t=>Ki(t)==="[object Map]",wa=t=>Ki(t)==="[object Set]",Ch=t=>Ki(t)==="[object Date]",ge=t=>typeof t=="function",Je=t=>typeof t=="string",Tn=t=>typeof t=="symbol",Fe=t=>t!==null&&typeof t=="object",tp=t=>(Fe(t)||ge(t))&&ge(t.then)&&ge(t.catch),np=Object.prototype.toString,Ki=t=>np.call(t),_y=t=>Ki(t).slice(8,-1),rp=t=>Ki(t)==="[object Object]",Ol=t=>Je(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,fi=kl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Aa=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},yy=/-\w/g,Ht=Aa(t=>t.replace(yy,e=>e.slice(1).toUpperCase())),vy=/\B([A-Z])/g,Gr=Aa(t=>t.replace(vy,"-$1").toLowerCase()),ba=Aa(t=>t.charAt(0).toUpperCase()+t.slice(1)),yc=Aa(t=>t?`on${ba(t)}`:""),ur=(t,e)=>!Object.is(t,e),Po=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},sp=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},jo=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ph;const Sa=()=>Ph||(Ph=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Dl(t){if(ue(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Je(r)?wy(r):Dl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Je(t)||Fe(t))return t}const Ey=/;(?![^(]*\))/g,Ty=/:([^]+)/,Iy=/\/\*[^]*?\*\//g;function wy(t){const e={};return t.replace(Iy,"").split(Ey).forEach(n=>{if(n){const r=n.split(Ty);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Gi(t){let e="";if(Je(t))e=t;else if(ue(t))for(let n=0;n<t.length;n++){const r=Gi(t[n]);r&&(e+=r+" ")}else if(Fe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Ay="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",by=kl(Ay);function ip(t){return!!t||t===""}function Sy(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Ra(t[r],e[r]);return n}function Ra(t,e){if(t===e)return!0;let n=Ch(t),r=Ch(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Tn(t),r=Tn(e),n||r)return t===e;if(n=ue(t),r=ue(e),n||r)return n&&r?Sy(t,e):!1;if(n=Fe(t),r=Fe(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(c&&!l||!c&&l||!Ra(t[o],e[o]))return!1}}return String(t)===String(e)}function Ry(t,e){return t.findIndex(n=>Ra(n,e))}const op=t=>!!(t&&t.__v_isRef===!0),we=t=>Je(t)?t:t==null?"":ue(t)||Fe(t)&&(t.toString===np||!ge(t.toString))?op(t)?we(t.value):JSON.stringify(t,ap,2):String(t),ap=(t,e)=>op(e)?ap(t,e.value):ps(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[vc(r,i)+" =>"]=s,n),{})}:wa(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>vc(n))}:Tn(e)?vc(e):Fe(e)&&!ue(e)&&!rp(e)?String(e):e,vc=(t,e="")=>{var n;return Tn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let mt;class cp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=mt,!e&&mt&&(this.index=(mt.scopes||(mt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=mt;try{return mt=this,e()}finally{mt=n}}}on(){++this._on===1&&(this.prevScope=mt,mt=this)}off(){this._on>0&&--this._on===0&&(mt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function lp(t){return new cp(t)}function up(){return mt}function Cy(t,e=!1){mt&&mt.cleanups.push(t)}let Le;const Ec=new WeakSet;class hp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,mt&&mt.active&&mt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ec.has(this)&&(Ec.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||dp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,kh(this),pp(this);const e=Le,n=Zt;Le=this,Zt=!0;try{return this.fn()}finally{gp(this),Le=e,Zt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ll(e);this.deps=this.depsTail=void 0,kh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ec.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Wc(this)&&this.run()}get dirty(){return Wc(this)}}let fp=0,di,pi;function dp(t,e=!1){if(t.flags|=8,e){t.next=pi,pi=t;return}t.next=di,di=t}function xl(){fp++}function Ml(){if(--fp>0)return;if(pi){let e=pi;for(pi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;di;){let e=di;for(di=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function pp(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function gp(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Ll(r),Py(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Wc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(mp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function mp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ki)||(t.globalVersion=ki,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Wc(t))))return;t.flags|=2;const e=t.dep,n=Le,r=Zt;Le=t,Zt=!0;try{pp(t);const s=t.fn(t._value);(e.version===0||ur(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Le=n,Zt=r,gp(t),t.flags&=-3}}function Ll(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Ll(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Py(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Zt=!0;const _p=[];function xn(){_p.push(Zt),Zt=!1}function Mn(){const t=_p.pop();Zt=t===void 0?!0:t}function kh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Le;Le=void 0;try{e()}finally{Le=n}}}let ki=0;class ky{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Fl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Le||!Zt||Le===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Le)n=this.activeLink=new ky(Le,this),Le.deps?(n.prevDep=Le.depsTail,Le.depsTail.nextDep=n,Le.depsTail=n):Le.deps=Le.depsTail=n,yp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Le.depsTail,n.nextDep=void 0,Le.depsTail.nextDep=n,Le.depsTail=n,Le.deps===n&&(Le.deps=r)}return n}trigger(e){this.version++,ki++,this.notify(e)}notify(e){xl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ml()}}}function yp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)yp(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const qo=new WeakMap,$r=Symbol(""),Kc=Symbol(""),Vi=Symbol("");function yt(t,e,n){if(Zt&&Le){let r=qo.get(t);r||qo.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Fl),s.map=r,s.key=n),s.track()}}function kn(t,e,n,r,s,i){const o=qo.get(t);if(!o){ki++;return}const c=l=>{l&&l.trigger()};if(xl(),e==="clear")o.forEach(c);else{const l=ue(t),h=l&&Ol(n);if(l&&n==="length"){const f=Number(r);o.forEach((p,m)=>{(m==="length"||m===Vi||!Tn(m)&&m>=f)&&c(p)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),h&&c(o.get(Vi)),e){case"add":l?h&&c(o.get("length")):(c(o.get($r)),ps(t)&&c(o.get(Kc)));break;case"delete":l||(c(o.get($r)),ps(t)&&c(o.get(Kc)));break;case"set":ps(t)&&c(o.get($r));break}}Ml()}function Vy(t,e){const n=qo.get(t);return n&&n.get(e)}function ss(t){const e=Ce(t);return e===t?e:(yt(e,"iterate",Vi),jt(t)?e:e.map(ct))}function Ca(t){return yt(t=Ce(t),"iterate",Vi),t}const Ny={__proto__:null,[Symbol.iterator](){return Tc(this,Symbol.iterator,ct)},concat(...t){return ss(this).concat(...t.map(e=>ue(e)?ss(e):e))},entries(){return Tc(this,"entries",t=>(t[1]=ct(t[1]),t))},every(t,e){return Rn(this,"every",t,e,void 0,arguments)},filter(t,e){return Rn(this,"filter",t,e,n=>n.map(ct),arguments)},find(t,e){return Rn(this,"find",t,e,ct,arguments)},findIndex(t,e){return Rn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Rn(this,"findLast",t,e,ct,arguments)},findLastIndex(t,e){return Rn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Rn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ic(this,"includes",t)},indexOf(...t){return Ic(this,"indexOf",t)},join(t){return ss(this).join(t)},lastIndexOf(...t){return Ic(this,"lastIndexOf",t)},map(t,e){return Rn(this,"map",t,e,void 0,arguments)},pop(){return ri(this,"pop")},push(...t){return ri(this,"push",t)},reduce(t,...e){return Vh(this,"reduce",t,e)},reduceRight(t,...e){return Vh(this,"reduceRight",t,e)},shift(){return ri(this,"shift")},some(t,e){return Rn(this,"some",t,e,void 0,arguments)},splice(...t){return ri(this,"splice",t)},toReversed(){return ss(this).toReversed()},toSorted(t){return ss(this).toSorted(t)},toSpliced(...t){return ss(this).toSpliced(...t)},unshift(...t){return ri(this,"unshift",t)},values(){return Tc(this,"values",ct)}};function Tc(t,e,n){const r=Ca(t),s=r[e]();return r!==t&&!jt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Oy=Array.prototype;function Rn(t,e,n,r,s,i){const o=Ca(t),c=o!==t&&!jt(t),l=o[e];if(l!==Oy[e]){const p=l.apply(t,i);return c?ct(p):p}let h=n;o!==t&&(c?h=function(p,m){return n.call(this,ct(p),m,t)}:n.length>2&&(h=function(p,m){return n.call(this,p,m,t)}));const f=l.call(o,h,r);return c&&s?s(f):f}function Vh(t,e,n,r){const s=Ca(t);let i=n;return s!==t&&(jt(t)?n.length>3&&(i=function(o,c,l){return n.call(this,o,c,l,t)}):i=function(o,c,l){return n.call(this,o,ct(c),l,t)}),s[e](i,...r)}function Ic(t,e,n){const r=Ce(t);yt(r,"iterate",Vi);const s=r[e](...n);return(s===-1||s===!1)&&$l(n[0])?(n[0]=Ce(n[0]),r[e](...n)):s}function ri(t,e,n=[]){xn(),xl();const r=Ce(t)[e].apply(t,n);return Ml(),Mn(),r}const Dy=kl("__proto__,__v_isRef,__isVue"),vp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Tn));function xy(t){Tn(t)||(t=String(t));const e=Ce(this);return yt(e,"has",t),e.hasOwnProperty(t)}class Ep{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?zy:Ap:i?wp:Ip).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ue(e);if(!s){let l;if(o&&(l=Ny[n]))return l;if(n==="hasOwnProperty")return xy}const c=Reflect.get(e,n,Ke(e)?e:r);return(Tn(n)?vp.has(n):Dy(n))||(s||yt(e,"get",n),i)?c:Ke(c)?o&&Ol(n)?c:c.value:Fe(c)?s?Sp(c):Qi(c):c}}class Tp extends Ep{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=Er(i);if(!jt(r)&&!Er(r)&&(i=Ce(i),r=Ce(r)),!ue(e)&&Ke(i)&&!Ke(r))return l||(i.value=r),!0}const o=ue(e)&&Ol(n)?Number(n)<e.length:ke(e,n),c=Reflect.set(e,n,r,Ke(e)?e:s);return e===Ce(s)&&(o?ur(r,i)&&kn(e,"set",n,r):kn(e,"add",n,r)),c}deleteProperty(e,n){const r=ke(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&kn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Tn(n)||!vp.has(n))&&yt(e,"has",n),r}ownKeys(e){return yt(e,"iterate",ue(e)?"length":$r),Reflect.ownKeys(e)}}class My extends Ep{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Ly=new Tp,Fy=new My,Uy=new Tp(!0);const Gc=t=>t,vo=t=>Reflect.getPrototypeOf(t);function By(t,e,n){return function(...r){const s=this.__v_raw,i=Ce(s),o=ps(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,h=s[t](...r),f=n?Gc:e?Ho:ct;return!e&&yt(i,"iterate",l?Kc:$r),{next(){const{value:p,done:m}=h.next();return m?{value:p,done:m}:{value:c?[f(p[0]),f(p[1])]:f(p),done:m}},[Symbol.iterator](){return this}}}}function Eo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function $y(t,e){const n={get(s){const i=this.__v_raw,o=Ce(i),c=Ce(s);t||(ur(s,c)&&yt(o,"get",s),yt(o,"get",c));const{has:l}=vo(o),h=e?Gc:t?Ho:ct;if(l.call(o,s))return h(i.get(s));if(l.call(o,c))return h(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&yt(Ce(s),"iterate",$r),s.size},has(s){const i=this.__v_raw,o=Ce(i),c=Ce(s);return t||(ur(s,c)&&yt(o,"has",s),yt(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=Ce(c),h=e?Gc:t?Ho:ct;return!t&&yt(l,"iterate",$r),c.forEach((f,p)=>s.call(i,h(f),h(p),o))}};return Tt(n,t?{add:Eo("add"),set:Eo("set"),delete:Eo("delete"),clear:Eo("clear")}:{add(s){!e&&!jt(s)&&!Er(s)&&(s=Ce(s));const i=Ce(this);return vo(i).has.call(i,s)||(i.add(s),kn(i,"add",s,s)),this},set(s,i){!e&&!jt(i)&&!Er(i)&&(i=Ce(i));const o=Ce(this),{has:c,get:l}=vo(o);let h=c.call(o,s);h||(s=Ce(s),h=c.call(o,s));const f=l.call(o,s);return o.set(s,i),h?ur(i,f)&&kn(o,"set",s,i):kn(o,"add",s,i),this},delete(s){const i=Ce(this),{has:o,get:c}=vo(i);let l=o.call(i,s);l||(s=Ce(s),l=o.call(i,s)),c&&c.call(i,s);const h=i.delete(s);return l&&kn(i,"delete",s,void 0),h},clear(){const s=Ce(this),i=s.size!==0,o=s.clear();return i&&kn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=By(s,t,e)}),n}function Ul(t,e){const n=$y(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ke(n,s)&&s in r?n:r,s,i)}const jy={get:Ul(!1,!1)},qy={get:Ul(!1,!0)},Hy={get:Ul(!0,!1)};const Ip=new WeakMap,wp=new WeakMap,Ap=new WeakMap,zy=new WeakMap;function Wy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ky(t){return t.__v_skip||!Object.isExtensible(t)?0:Wy(_y(t))}function Qi(t){return Er(t)?t:Bl(t,!1,Ly,jy,Ip)}function bp(t){return Bl(t,!1,Uy,qy,wp)}function Sp(t){return Bl(t,!0,Fy,Hy,Ap)}function Bl(t,e,n,r,s){if(!Fe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=Ky(t);if(i===0)return t;const o=s.get(t);if(o)return o;const c=new Proxy(t,i===2?r:n);return s.set(t,c),c}function hr(t){return Er(t)?hr(t.__v_raw):!!(t&&t.__v_isReactive)}function Er(t){return!!(t&&t.__v_isReadonly)}function jt(t){return!!(t&&t.__v_isShallow)}function $l(t){return t?!!t.__v_raw:!1}function Ce(t){const e=t&&t.__v_raw;return e?Ce(e):t}function jl(t){return!ke(t,"__v_skip")&&Object.isExtensible(t)&&sp(t,"__v_skip",!0),t}const ct=t=>Fe(t)?Qi(t):t,Ho=t=>Fe(t)?Sp(t):t;function Ke(t){return t?t.__v_isRef===!0:!1}function ve(t){return Rp(t,!1)}function Gy(t){return Rp(t,!0)}function Rp(t,e){return Ke(t)?t:new Qy(t,e)}class Qy{constructor(e,n){this.dep=new Fl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ce(e),this._value=n?e:ct(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||jt(e)||Er(e);e=r?e:Ce(e),ur(e,n)&&(this._rawValue=e,this._value=r?e:ct(e),this.dep.trigger())}}function ze(t){return Ke(t)?t.value:t}const Jy={get:(t,e,n)=>e==="__v_raw"?t:ze(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ke(s)&&!Ke(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Cp(t){return hr(t)?t:new Proxy(t,Jy)}function Yy(t){const e=ue(t)?new Array(t.length):{};for(const n in t)e[n]=Zy(t,n);return e}class Xy{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Vy(Ce(this._object),this._key)}}function Zy(t,e,n){const r=t[e];return Ke(r)?r:new Xy(t,e,n)}class ev{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Fl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ki-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Le!==this)return dp(this,!0),!0}get value(){const e=this.dep.track();return mp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function tv(t,e,n=!1){let r,s;return ge(t)?r=t:(r=t.get,s=t.set),new ev(r,s,n)}const To={},zo=new WeakMap;let Lr;function nv(t,e=!1,n=Lr){if(n){let r=zo.get(n);r||zo.set(n,r=[]),r.push(t)}}function rv(t,e,n=xe){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,h=U=>s?U:jt(U)||s===!1||s===0?Vn(U,1):Vn(U);let f,p,m,_,R=!1,N=!1;if(Ke(t)?(p=()=>t.value,R=jt(t)):hr(t)?(p=()=>h(t),R=!0):ue(t)?(N=!0,R=t.some(U=>hr(U)||jt(U)),p=()=>t.map(U=>{if(Ke(U))return U.value;if(hr(U))return h(U);if(ge(U))return l?l(U,2):U()})):ge(t)?e?p=l?()=>l(t,2):t:p=()=>{if(m){xn();try{m()}finally{Mn()}}const U=Lr;Lr=f;try{return l?l(t,3,[_]):t(_)}finally{Lr=U}}:p=pn,e&&s){const U=p,W=s===!0?1/0:s;p=()=>Vn(U(),W)}const D=up(),z=()=>{f.stop(),D&&D.active&&Nl(D.effects,f)};if(i&&e){const U=e;e=(...W)=>{U(...W),z()}}let q=N?new Array(t.length).fill(To):To;const G=U=>{if(!(!(f.flags&1)||!f.dirty&&!U))if(e){const W=f.run();if(s||R||(N?W.some((K,I)=>ur(K,q[I])):ur(W,q))){m&&m();const K=Lr;Lr=f;try{const I=[W,q===To?void 0:N&&q[0]===To?[]:q,_];q=W,l?l(e,3,I):e(...I)}finally{Lr=K}}}else f.run()};return c&&c(G),f=new hp(p),f.scheduler=o?()=>o(G,!1):G,_=U=>nv(U,!1,f),m=f.onStop=()=>{const U=zo.get(f);if(U){if(l)l(U,4);else for(const W of U)W();zo.delete(f)}},e?r?G(!0):q=f.run():o?o(G.bind(null,!0),!0):f.run(),z.pause=f.pause.bind(f),z.resume=f.resume.bind(f),z.stop=z,z}function Vn(t,e=1/0,n){if(e<=0||!Fe(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Ke(t))Vn(t.value,e,n);else if(ue(t))for(let r=0;r<t.length;r++)Vn(t[r],e,n);else if(wa(t)||ps(t))t.forEach(r=>{Vn(r,e,n)});else if(rp(t)){for(const r in t)Vn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Vn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ji(t,e,n,r){try{return r?t(...r):t()}catch(s){Pa(s,e,n)}}function In(t,e,n,r){if(ge(t)){const s=Ji(t,e,n,r);return s&&tp(s)&&s.catch(i=>{Pa(i,e,n)}),s}if(ue(t)){const s=[];for(let i=0;i<t.length;i++)s.push(In(t[i],e,n,r));return s}}function Pa(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||xe;if(e){let c=e.parent;const l=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,l,h)===!1)return}c=c.parent}if(i){xn(),Ji(i,null,10,[t,l,h]),Mn();return}}sv(t,n,s,r,o)}function sv(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const bt=[];let hn=-1;const gs=[];let nr=null,os=0;const Pp=Promise.resolve();let Wo=null;function ka(t){const e=Wo||Pp;return t?e.then(this?t.bind(this):t):e}function iv(t){let e=hn+1,n=bt.length;for(;e<n;){const r=e+n>>>1,s=bt[r],i=Ni(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function ql(t){if(!(t.flags&1)){const e=Ni(t),n=bt[bt.length-1];!n||!(t.flags&2)&&e>=Ni(n)?bt.push(t):bt.splice(iv(e),0,t),t.flags|=1,kp()}}function kp(){Wo||(Wo=Pp.then(Np))}function ov(t){ue(t)?gs.push(...t):nr&&t.id===-1?nr.splice(os+1,0,t):t.flags&1||(gs.push(t),t.flags|=1),kp()}function Nh(t,e,n=hn+1){for(;n<bt.length;n++){const r=bt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;bt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Vp(t){if(gs.length){const e=[...new Set(gs)].sort((n,r)=>Ni(n)-Ni(r));if(gs.length=0,nr){nr.push(...e);return}for(nr=e,os=0;os<nr.length;os++){const n=nr[os];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}nr=null,os=0}}const Ni=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Np(t){try{for(hn=0;hn<bt.length;hn++){const e=bt[hn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ji(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;hn<bt.length;hn++){const e=bt[hn];e&&(e.flags&=-2)}hn=-1,bt.length=0,Vp(),Wo=null,(bt.length||gs.length)&&Np()}}let Mt=null,Op=null;function Ko(t){const e=Mt;return Mt=t,Op=t&&t.type.__scopeId||null,e}function tn(t,e=Mt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Jo(-1);const i=Ko(e);let o;try{o=t(...s)}finally{Ko(i),r._d&&Jo(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ut(t,e){if(Mt===null)return t;const n=Da(Mt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=xe]=e[s];i&&(ge(i)&&(i={mounted:i,updated:i}),i.deep&&Vn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function xr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(xn(),In(l,n,8,[t.el,c,t,e]),Mn())}}const av=Symbol("_vte"),cv=t=>t.__isTeleport,lv=Symbol("_leaveCb");function Hl(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Hl(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function st(t,e){return ge(t)?Tt({name:t.name},e,{setup:t}):t}function Dp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const Go=new WeakMap;function gi(t,e,n,r,s=!1){if(ue(t)){t.forEach((R,N)=>gi(R,e&&(ue(e)?e[N]:e),n,r,s));return}if(mi(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&gi(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Da(r.component):r.el,o=s?null:i,{i:c,r:l}=t,h=e&&e.r,f=c.refs===xe?c.refs={}:c.refs,p=c.setupState,m=Ce(p),_=p===xe?ep:R=>ke(m,R);if(h!=null&&h!==l){if(Oh(e),Je(h))f[h]=null,_(h)&&(p[h]=null);else if(Ke(h)){h.value=null;const R=e;R.k&&(f[R.k]=null)}}if(ge(l))Ji(l,c,12,[o,f]);else{const R=Je(l),N=Ke(l);if(R||N){const D=()=>{if(t.f){const z=R?_(l)?p[l]:f[l]:l.value;if(s)ue(z)&&Nl(z,i);else if(ue(z))z.includes(i)||z.push(i);else if(R)f[l]=[i],_(l)&&(p[l]=f[l]);else{const q=[i];l.value=q,t.k&&(f[t.k]=q)}}else R?(f[l]=o,_(l)&&(p[l]=o)):N&&(l.value=o,t.k&&(f[t.k]=o))};if(o){const z=()=>{D(),Go.delete(t)};z.id=-1,Go.set(t,z),xt(z,n)}else Oh(t),D()}}}function Oh(t){const e=Go.get(t);e&&(e.flags|=8,Go.delete(t))}Sa().requestIdleCallback;Sa().cancelIdleCallback;const mi=t=>!!t.type.__asyncLoader,xp=t=>t.type.__isKeepAlive;function uv(t,e){Mp(t,"a",e)}function hv(t,e){Mp(t,"da",e)}function Mp(t,e,n=Et){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Va(e,r,n),n){let s=n.parent;for(;s&&s.parent;)xp(s.parent.vnode)&&fv(r,e,n,s),s=s.parent}}function fv(t,e,n,r){const s=Va(e,t,r,!0);Lp(()=>{Nl(r[e],s)},n)}function Va(t,e,n=Et,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{xn();const c=Yi(n),l=In(e,n,t,o);return c(),Mn(),l});return r?s.unshift(i):s.push(i),i}}const $n=t=>(e,n=Et)=>{(!Di||t==="sp")&&Va(t,(...r)=>e(...r),n)},dv=$n("bm"),sn=$n("m"),pv=$n("bu"),gv=$n("u"),mv=$n("bum"),Lp=$n("um"),_v=$n("sp"),yv=$n("rtg"),vv=$n("rtc");function Ev(t,e=Et){Va("ec",t,e)}const Tv="components";function jn(t,e){return wv(Tv,t,!0,e)||t}const Iv=Symbol.for("v-ndc");function wv(t,e,n=!0,r=!1){const s=Mt||Et;if(s){const i=s.type;{const c=hE(i,!1);if(c&&(c===e||c===Ht(e)||c===ba(Ht(e))))return i}const o=Dh(s[t]||i[t],e)||Dh(s.appContext[t],e);return!o&&r?i:o}}function Dh(t,e){return t&&(t[e]||t[Ht(e)]||t[ba(Ht(e))])}function Pt(t,e,n,r){let s;const i=n,o=ue(t);if(o||Je(t)){const c=o&&hr(t);let l=!1,h=!1;c&&(l=!jt(t),h=Er(t),t=Ca(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(l?h?Ho(ct(t[f])):ct(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(Fe(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,h=c.length;l<h;l++){const f=c[l];s[l]=e(t[f],f,l,i)}}else s=[];return s}const Qc=t=>t?sg(t)?Da(t):Qc(t.parent):null,_i=Tt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Qc(t.parent),$root:t=>Qc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Up(t),$forceUpdate:t=>t.f||(t.f=()=>{ql(t.update)}),$nextTick:t=>t.n||(t.n=ka.bind(t.proxy)),$watch:t=>zv.bind(t)}),wc=(t,e)=>t!==xe&&!t.__isScriptSetup&&ke(t,e),Av={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let h;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(wc(r,e))return o[e]=1,r[e];if(s!==xe&&ke(s,e))return o[e]=2,s[e];if((h=t.propsOptions[0])&&ke(h,e))return o[e]=3,i[e];if(n!==xe&&ke(n,e))return o[e]=4,n[e];Jc&&(o[e]=0)}}const f=_i[e];let p,m;if(f)return e==="$attrs"&&yt(t.attrs,"get",""),f(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==xe&&ke(n,e))return o[e]=4,n[e];if(m=l.config.globalProperties,ke(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return wc(s,e)?(s[e]=n,!0):r!==xe&&ke(r,e)?(r[e]=n,!0):ke(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i,type:o}},c){let l,h;return!!(n[c]||t!==xe&&c[0]!=="$"&&ke(t,c)||wc(e,c)||(l=i[0])&&ke(l,c)||ke(r,c)||ke(_i,c)||ke(s.config.globalProperties,c)||(h=o.__cssModules)&&h[c])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ke(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function xh(t){return ue(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Jc=!0;function bv(t){const e=Up(t),n=t.proxy,r=t.ctx;Jc=!1,e.beforeCreate&&Mh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:h,created:f,beforeMount:p,mounted:m,beforeUpdate:_,updated:R,activated:N,deactivated:D,beforeDestroy:z,beforeUnmount:q,destroyed:G,unmounted:U,render:W,renderTracked:K,renderTriggered:I,errorCaptured:y,serverPrefetch:v,expose:b,inheritAttrs:A,components:S,directives:T,filters:qe}=e;if(h&&Sv(h,r,null),o)for(const pe in o){const Ae=o[pe];ge(Ae)&&(r[pe]=Ae.bind(n))}if(s){const pe=s.call(n,n);Fe(pe)&&(t.data=Qi(pe))}if(Jc=!0,i)for(const pe in i){const Ae=i[pe],St=ge(Ae)?Ae.bind(n,n):ge(Ae.get)?Ae.get.bind(n,n):pn,an=!ge(Ae)&&ge(Ae.set)?Ae.set.bind(n):pn,kt=Ct({get:St,set:an});Object.defineProperty(r,pe,{enumerable:!0,configurable:!0,get:()=>kt.value,set:it=>kt.value=it})}if(c)for(const pe in c)Fp(c[pe],r,n,pe);if(l){const pe=ge(l)?l.call(n):l;Reflect.ownKeys(pe).forEach(Ae=>{yi(Ae,pe[Ae])})}f&&Mh(f,t,"c");function Me(pe,Ae){ue(Ae)?Ae.forEach(St=>pe(St.bind(n))):Ae&&pe(Ae.bind(n))}if(Me(dv,p),Me(sn,m),Me(pv,_),Me(gv,R),Me(uv,N),Me(hv,D),Me(Ev,y),Me(vv,K),Me(yv,I),Me(mv,q),Me(Lp,U),Me(_v,v),ue(b))if(b.length){const pe=t.exposed||(t.exposed={});b.forEach(Ae=>{Object.defineProperty(pe,Ae,{get:()=>n[Ae],set:St=>n[Ae]=St,enumerable:!0})})}else t.exposed||(t.exposed={});W&&t.render===pn&&(t.render=W),A!=null&&(t.inheritAttrs=A),S&&(t.components=S),T&&(t.directives=T),v&&Dp(t)}function Sv(t,e,n=pn){ue(t)&&(t=Yc(t));for(const r in t){const s=t[r];let i;Fe(s)?"default"in s?i=qt(s.from||r,s.default,!0):i=qt(s.from||r):i=qt(s),Ke(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Mh(t,e,n){In(ue(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Fp(t,e,n,r){let s=r.includes(".")?Xp(n,r):()=>n[r];if(Je(t)){const i=e[t];ge(i)&&vi(s,i)}else if(ge(t))vi(s,t.bind(n));else if(Fe(t))if(ue(t))t.forEach(i=>Fp(i,e,n,r));else{const i=ge(t.handler)?t.handler.bind(n):e[t.handler];ge(i)&&vi(s,i,t)}}function Up(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(h=>Qo(l,h,o,!0)),Qo(l,e,o)),Fe(e)&&i.set(e,l),l}function Qo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Qo(t,i,n,!0),s&&s.forEach(o=>Qo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=Rv[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const Rv={data:Lh,props:Fh,emits:Fh,methods:oi,computed:oi,beforeCreate:At,created:At,beforeMount:At,mounted:At,beforeUpdate:At,updated:At,beforeDestroy:At,beforeUnmount:At,destroyed:At,unmounted:At,activated:At,deactivated:At,errorCaptured:At,serverPrefetch:At,components:oi,directives:oi,watch:Pv,provide:Lh,inject:Cv};function Lh(t,e){return e?t?function(){return Tt(ge(t)?t.call(this,this):t,ge(e)?e.call(this,this):e)}:e:t}function Cv(t,e){return oi(Yc(t),Yc(e))}function Yc(t){if(ue(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function At(t,e){return t?[...new Set([].concat(t,e))]:e}function oi(t,e){return t?Tt(Object.create(null),t,e):e}function Fh(t,e){return t?ue(t)&&ue(e)?[...new Set([...t,...e])]:Tt(Object.create(null),xh(t),xh(e??{})):e}function Pv(t,e){if(!t)return e;if(!e)return t;const n=Tt(Object.create(null),t);for(const r in e)n[r]=At(t[r],e[r]);return n}function Bp(){return{app:null,config:{isNativeTag:ep,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let kv=0;function Vv(t,e){return function(r,s=null){ge(r)||(r=Tt({},r)),s!=null&&!Fe(s)&&(s=null);const i=Bp(),o=new WeakSet,c=[];let l=!1;const h=i.app={_uid:kv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:dE,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&ge(f.install)?(o.add(f),f.install(h,...p)):ge(f)&&(o.add(f),f(h,...p))),h},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),h},component(f,p){return p?(i.components[f]=p,h):i.components[f]},directive(f,p){return p?(i.directives[f]=p,h):i.directives[f]},mount(f,p,m){if(!l){const _=h._ceVNode||me(r,s);return _.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(_,f,m),l=!0,h._container=f,f.__vue_app__=h,Da(_.component)}},onUnmount(f){c.push(f)},unmount(){l&&(In(c,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(f,p){return i.provides[f]=p,h},runWithContext(f){const p=jr;jr=h;try{return f()}finally{jr=p}}};return h}}let jr=null;function yi(t,e){if(Et){let n=Et.provides;const r=Et.parent&&Et.parent.provides;r===n&&(n=Et.provides=Object.create(r)),n[t]=e}}function qt(t,e,n=!1){const r=rg();if(r||jr){let s=jr?jr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ge(e)?e.call(r&&r.proxy):e}}function Nv(){return!!(rg()||jr)}const $p={},jp=()=>Object.create($p),qp=t=>Object.getPrototypeOf(t)===$p;function Ov(t,e,n,r=!1){const s={},i=jp();t.propsDefaults=Object.create(null),Hp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:bp(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Dv(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Ce(s),[l]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let m=f[p];if(Na(t.emitsOptions,m))continue;const _=e[m];if(l)if(ke(i,m))_!==i[m]&&(i[m]=_,h=!0);else{const R=Ht(m);s[R]=Xc(l,c,R,_,t,!1)}else _!==i[m]&&(i[m]=_,h=!0)}}}else{Hp(t,e,s,i)&&(h=!0);let f;for(const p in c)(!e||!ke(e,p)&&((f=Gr(p))===p||!ke(e,f)))&&(l?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=Xc(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!ke(e,p))&&(delete i[p],h=!0)}h&&kn(t.attrs,"set","")}function Hp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(fi(l))continue;const h=e[l];let f;s&&ke(s,f=Ht(l))?!i||!i.includes(f)?n[f]=h:(c||(c={}))[f]=h:Na(t.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,o=!0)}if(i){const l=Ce(n),h=c||xe;for(let f=0;f<i.length;f++){const p=i[f];n[p]=Xc(s,l,p,h[p],t,!ke(h,p))}}return o}function Xc(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=ke(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ge(l)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const f=Yi(s);r=h[n]=l.call(null,e),f()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Gr(n))&&(r=!0))}return r}const xv=new WeakMap;function zp(t,e,n=!1){const r=n?xv:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!ge(t)){const f=p=>{l=!0;const[m,_]=zp(p,e,!0);Tt(o,m),_&&c.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return Fe(t)&&r.set(t,ds),ds;if(ue(i))for(let f=0;f<i.length;f++){const p=Ht(i[f]);Uh(p)&&(o[p]=xe)}else if(i)for(const f in i){const p=Ht(f);if(Uh(p)){const m=i[f],_=o[p]=ue(m)||ge(m)?{type:m}:Tt({},m),R=_.type;let N=!1,D=!0;if(ue(R))for(let z=0;z<R.length;++z){const q=R[z],G=ge(q)&&q.name;if(G==="Boolean"){N=!0;break}else G==="String"&&(D=!1)}else N=ge(R)&&R.name==="Boolean";_[0]=N,_[1]=D,(N||ke(_,"default"))&&c.push(p)}}const h=[o,c];return Fe(t)&&r.set(t,h),h}function Uh(t){return t[0]!=="$"&&!fi(t)}const zl=t=>t==="_"||t==="_ctx"||t==="$stable",Wl=t=>ue(t)?t.map(dn):[dn(t)],Mv=(t,e,n)=>{if(e._n)return e;const r=tn((...s)=>Wl(e(...s)),n);return r._c=!1,r},Wp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(zl(s))continue;const i=t[s];if(ge(i))e[s]=Mv(s,i,r);else if(i!=null){const o=Wl(i);e[s]=()=>o}}},Kp=(t,e)=>{const n=Wl(e);t.slots.default=()=>n},Gp=(t,e,n)=>{for(const r in e)(n||!zl(r))&&(t[r]=e[r])},Lv=(t,e,n)=>{const r=t.slots=jp();if(t.vnode.shapeFlag&32){const s=e._;s?(Gp(r,e,n),n&&sp(r,"_",s,!0)):Wp(e,r)}else e&&Kp(t,e)},Fv=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=xe;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:Gp(s,e,n):(i=!e.$stable,Wp(e,s)),o=e}else e&&(Kp(t,e),o={default:1});if(i)for(const c in s)!zl(c)&&o[c]==null&&delete s[c]},xt=Zv;function Uv(t){return Bv(t)}function Bv(t,e){const n=Sa();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:h,setElementText:f,parentNode:p,nextSibling:m,setScopeId:_=pn,insertStaticContent:R}=t,N=(E,w,C,M=null,F=null,O=null,J=void 0,H=null,$=!!w.dynamicChildren)=>{if(E===w)return;E&&!si(E,w)&&(M=x(E),it(E,F,O,!0),E=null),w.patchFlag===-2&&($=!1,w.dynamicChildren=null);const{type:j,ref:oe,shapeFlag:X}=w;switch(j){case Oa:D(E,w,C,M);break;case Tr:z(E,w,C,M);break;case bc:E==null&&q(w,C,M,J);break;case Re:S(E,w,C,M,F,O,J,H,$);break;default:X&1?W(E,w,C,M,F,O,J,H,$):X&6?T(E,w,C,M,F,O,J,H,$):(X&64||X&128)&&j.process(E,w,C,M,F,O,J,H,$,te)}oe!=null&&F?gi(oe,E&&E.ref,O,w||E,!w):oe==null&&E&&E.ref!=null&&gi(E.ref,null,O,E,!0)},D=(E,w,C,M)=>{if(E==null)r(w.el=c(w.children),C,M);else{const F=w.el=E.el;w.children!==E.children&&h(F,w.children)}},z=(E,w,C,M)=>{E==null?r(w.el=l(w.children||""),C,M):w.el=E.el},q=(E,w,C,M)=>{[E.el,E.anchor]=R(E.children,w,C,M,E.el,E.anchor)},G=({el:E,anchor:w},C,M)=>{let F;for(;E&&E!==w;)F=m(E),r(E,C,M),E=F;r(w,C,M)},U=({el:E,anchor:w})=>{let C;for(;E&&E!==w;)C=m(E),s(E),E=C;s(w)},W=(E,w,C,M,F,O,J,H,$)=>{w.type==="svg"?J="svg":w.type==="math"&&(J="mathml"),E==null?K(w,C,M,F,O,J,H,$):v(E,w,F,O,J,H,$)},K=(E,w,C,M,F,O,J,H)=>{let $,j;const{props:oe,shapeFlag:X,transition:se,dirs:ae}=E;if($=E.el=o(E.type,O,oe&&oe.is,oe),X&8?f($,E.children):X&16&&y(E.children,$,null,M,F,Ac(E,O),J,H),ae&&xr(E,null,M,"created"),I($,E,E.scopeId,J,M),oe){for(const Oe in oe)Oe!=="value"&&!fi(Oe)&&i($,Oe,null,oe[Oe],O,M);"value"in oe&&i($,"value",null,oe.value,O),(j=oe.onVnodeBeforeMount)&&un(j,M,E)}ae&&xr(E,null,M,"beforeMount");const ye=$v(F,se);ye&&se.beforeEnter($),r($,w,C),((j=oe&&oe.onVnodeMounted)||ye||ae)&&xt(()=>{j&&un(j,M,E),ye&&se.enter($),ae&&xr(E,null,M,"mounted")},F)},I=(E,w,C,M,F)=>{if(C&&_(E,C),M)for(let O=0;O<M.length;O++)_(E,M[O]);if(F){let O=F.subTree;if(w===O||eg(O.type)&&(O.ssContent===w||O.ssFallback===w)){const J=F.vnode;I(E,J,J.scopeId,J.slotScopeIds,F.parent)}}},y=(E,w,C,M,F,O,J,H,$=0)=>{for(let j=$;j<E.length;j++){const oe=E[j]=H?rr(E[j]):dn(E[j]);N(null,oe,w,C,M,F,O,J,H)}},v=(E,w,C,M,F,O,J)=>{const H=w.el=E.el;let{patchFlag:$,dynamicChildren:j,dirs:oe}=w;$|=E.patchFlag&16;const X=E.props||xe,se=w.props||xe;let ae;if(C&&Mr(C,!1),(ae=se.onVnodeBeforeUpdate)&&un(ae,C,w,E),oe&&xr(w,E,C,"beforeUpdate"),C&&Mr(C,!0),(X.innerHTML&&se.innerHTML==null||X.textContent&&se.textContent==null)&&f(H,""),j?b(E.dynamicChildren,j,H,C,M,Ac(w,F),O):J||Ae(E,w,H,null,C,M,Ac(w,F),O,!1),$>0){if($&16)A(H,X,se,C,F);else if($&2&&X.class!==se.class&&i(H,"class",null,se.class,F),$&4&&i(H,"style",X.style,se.style,F),$&8){const ye=w.dynamicProps;for(let Oe=0;Oe<ye.length;Oe++){const Se=ye[Oe],dt=X[Se],pt=se[Se];(pt!==dt||Se==="value")&&i(H,Se,dt,pt,F,C)}}$&1&&E.children!==w.children&&f(H,w.children)}else!J&&j==null&&A(H,X,se,C,F);((ae=se.onVnodeUpdated)||oe)&&xt(()=>{ae&&un(ae,C,w,E),oe&&xr(w,E,C,"updated")},M)},b=(E,w,C,M,F,O,J)=>{for(let H=0;H<w.length;H++){const $=E[H],j=w[H],oe=$.el&&($.type===Re||!si($,j)||$.shapeFlag&198)?p($.el):C;N($,j,oe,null,M,F,O,J,!0)}},A=(E,w,C,M,F)=>{if(w!==C){if(w!==xe)for(const O in w)!fi(O)&&!(O in C)&&i(E,O,w[O],null,F,M);for(const O in C){if(fi(O))continue;const J=C[O],H=w[O];J!==H&&O!=="value"&&i(E,O,H,J,F,M)}"value"in C&&i(E,"value",w.value,C.value,F)}},S=(E,w,C,M,F,O,J,H,$)=>{const j=w.el=E?E.el:c(""),oe=w.anchor=E?E.anchor:c("");let{patchFlag:X,dynamicChildren:se,slotScopeIds:ae}=w;ae&&(H=H?H.concat(ae):ae),E==null?(r(j,C,M),r(oe,C,M),y(w.children||[],C,oe,F,O,J,H,$)):X>0&&X&64&&se&&E.dynamicChildren?(b(E.dynamicChildren,se,C,F,O,J,H),(w.key!=null||F&&w===F.subTree)&&Qp(E,w,!0)):Ae(E,w,C,oe,F,O,J,H,$)},T=(E,w,C,M,F,O,J,H,$)=>{w.slotScopeIds=H,E==null?w.shapeFlag&512?F.ctx.activate(w,C,M,J,$):qe(w,C,M,F,O,J,$):ht(E,w,$)},qe=(E,w,C,M,F,O,J)=>{const H=E.component=oE(E,M,F);if(xp(E)&&(H.ctx.renderer=te),aE(H,!1,J),H.asyncDep){if(F&&F.registerDep(H,Me,J),!E.el){const $=H.subTree=me(Tr);z(null,$,w,C),E.placeholder=$.el}}else Me(H,E,w,C,F,O,J)},ht=(E,w,C)=>{const M=w.component=E.component;if(Yv(E,w,C))if(M.asyncDep&&!M.asyncResolved){pe(M,w,C);return}else M.next=w,M.update();else w.el=E.el,M.vnode=w},Me=(E,w,C,M,F,O,J)=>{const H=()=>{if(E.isMounted){let{next:X,bu:se,u:ae,parent:ye,vnode:Oe}=E;{const Nt=Jp(E);if(Nt){X&&(X.el=Oe.el,pe(E,X,J)),Nt.asyncDep.then(()=>{E.isUnmounted||H()});return}}let Se=X,dt;Mr(E,!1),X?(X.el=Oe.el,pe(E,X,J)):X=Oe,se&&Po(se),(dt=X.props&&X.props.onVnodeBeforeUpdate)&&un(dt,ye,X,Oe),Mr(E,!0);const pt=$h(E),Vt=E.subTree;E.subTree=pt,N(Vt,pt,p(Vt.el),x(Vt),E,F,O),X.el=pt.el,Se===null&&Xv(E,pt.el),ae&&xt(ae,F),(dt=X.props&&X.props.onVnodeUpdated)&&xt(()=>un(dt,ye,X,Oe),F)}else{let X;const{el:se,props:ae}=w,{bm:ye,m:Oe,parent:Se,root:dt,type:pt}=E,Vt=mi(w);Mr(E,!1),ye&&Po(ye),!Vt&&(X=ae&&ae.onVnodeBeforeMount)&&un(X,Se,w),Mr(E,!0);{dt.ce&&dt.ce._def.shadowRoot!==!1&&dt.ce._injectChildStyle(pt);const Nt=E.subTree=$h(E);N(null,Nt,C,M,E,F,O),w.el=Nt.el}if(Oe&&xt(Oe,F),!Vt&&(X=ae&&ae.onVnodeMounted)){const Nt=w;xt(()=>un(X,Se,Nt),F)}(w.shapeFlag&256||Se&&mi(Se.vnode)&&Se.vnode.shapeFlag&256)&&E.a&&xt(E.a,F),E.isMounted=!0,w=C=M=null}};E.scope.on();const $=E.effect=new hp(H);E.scope.off();const j=E.update=$.run.bind($),oe=E.job=$.runIfDirty.bind($);oe.i=E,oe.id=E.uid,$.scheduler=()=>ql(oe),Mr(E,!0),j()},pe=(E,w,C)=>{w.component=E;const M=E.vnode.props;E.vnode=w,E.next=null,Dv(E,w.props,M,C),Fv(E,w.children,C),xn(),Nh(E),Mn()},Ae=(E,w,C,M,F,O,J,H,$=!1)=>{const j=E&&E.children,oe=E?E.shapeFlag:0,X=w.children,{patchFlag:se,shapeFlag:ae}=w;if(se>0){if(se&128){an(j,X,C,M,F,O,J,H,$);return}else if(se&256){St(j,X,C,M,F,O,J,H,$);return}}ae&8?(oe&16&&ft(j,F,O),X!==j&&f(C,X)):oe&16?ae&16?an(j,X,C,M,F,O,J,H,$):ft(j,F,O,!0):(oe&8&&f(C,""),ae&16&&y(X,C,M,F,O,J,H,$))},St=(E,w,C,M,F,O,J,H,$)=>{E=E||ds,w=w||ds;const j=E.length,oe=w.length,X=Math.min(j,oe);let se;for(se=0;se<X;se++){const ae=w[se]=$?rr(w[se]):dn(w[se]);N(E[se],ae,C,null,F,O,J,H,$)}j>oe?ft(E,F,O,!0,!1,X):y(w,C,M,F,O,J,H,$,X)},an=(E,w,C,M,F,O,J,H,$)=>{let j=0;const oe=w.length;let X=E.length-1,se=oe-1;for(;j<=X&&j<=se;){const ae=E[j],ye=w[j]=$?rr(w[j]):dn(w[j]);if(si(ae,ye))N(ae,ye,C,null,F,O,J,H,$);else break;j++}for(;j<=X&&j<=se;){const ae=E[X],ye=w[se]=$?rr(w[se]):dn(w[se]);if(si(ae,ye))N(ae,ye,C,null,F,O,J,H,$);else break;X--,se--}if(j>X){if(j<=se){const ae=se+1,ye=ae<oe?w[ae].el:M;for(;j<=se;)N(null,w[j]=$?rr(w[j]):dn(w[j]),C,ye,F,O,J,H,$),j++}}else if(j>se)for(;j<=X;)it(E[j],F,O,!0),j++;else{const ae=j,ye=j,Oe=new Map;for(j=ye;j<=se;j++){const ot=w[j]=$?rr(w[j]):dn(w[j]);ot.key!=null&&Oe.set(ot.key,j)}let Se,dt=0;const pt=se-ye+1;let Vt=!1,Nt=0;const Kt=new Array(pt);for(j=0;j<pt;j++)Kt[j]=0;for(j=ae;j<=X;j++){const ot=E[j];if(dt>=pt){it(ot,F,O,!0);continue}let et;if(ot.key!=null)et=Oe.get(ot.key);else for(Se=ye;Se<=se;Se++)if(Kt[Se-ye]===0&&si(ot,w[Se])){et=Se;break}et===void 0?it(ot,F,O,!0):(Kt[et-ye]=j+1,et>=Nt?Nt=et:Vt=!0,N(ot,w[et],C,null,F,O,J,H,$),dt++)}const es=Vt?jv(Kt):ds;for(Se=es.length-1,j=pt-1;j>=0;j--){const ot=ye+j,et=w[ot],js=w[ot+1],kr=ot+1<oe?js.el||js.placeholder:M;Kt[j]===0?N(null,et,C,kr,F,O,J,H,$):Vt&&(Se<0||j!==es[Se]?kt(et,C,kr,2):Se--)}}},kt=(E,w,C,M,F=null)=>{const{el:O,type:J,transition:H,children:$,shapeFlag:j}=E;if(j&6){kt(E.component.subTree,w,C,M);return}if(j&128){E.suspense.move(w,C,M);return}if(j&64){J.move(E,w,C,te);return}if(J===Re){r(O,w,C);for(let X=0;X<$.length;X++)kt($[X],w,C,M);r(E.anchor,w,C);return}if(J===bc){G(E,w,C);return}if(M!==2&&j&1&&H)if(M===0)H.beforeEnter(O),r(O,w,C),xt(()=>H.enter(O),F);else{const{leave:X,delayLeave:se,afterLeave:ae}=H,ye=()=>{E.ctx.isUnmounted?s(O):r(O,w,C)},Oe=()=>{O._isLeaving&&O[lv](!0),X(O,()=>{ye(),ae&&ae()})};se?se(O,ye,Oe):Oe()}else r(O,w,C)},it=(E,w,C,M=!1,F=!1)=>{const{type:O,props:J,ref:H,children:$,dynamicChildren:j,shapeFlag:oe,patchFlag:X,dirs:se,cacheIndex:ae}=E;if(X===-2&&(F=!1),H!=null&&(xn(),gi(H,null,C,E,!0),Mn()),ae!=null&&(w.renderCache[ae]=void 0),oe&256){w.ctx.deactivate(E);return}const ye=oe&1&&se,Oe=!mi(E);let Se;if(Oe&&(Se=J&&J.onVnodeBeforeUnmount)&&un(Se,w,E),oe&6)zn(E.component,C,M);else{if(oe&128){E.suspense.unmount(C,M);return}ye&&xr(E,null,w,"beforeUnmount"),oe&64?E.type.remove(E,w,C,te,M):j&&!j.hasOnce&&(O!==Re||X>0&&X&64)?ft(j,w,C,!1,!0):(O===Re&&X&384||!F&&oe&16)&&ft($,w,C),M&&Sn(E)}(Oe&&(Se=J&&J.onVnodeUnmounted)||ye)&&xt(()=>{Se&&un(Se,w,E),ye&&xr(E,null,w,"unmounted")},C)},Sn=E=>{const{type:w,el:C,anchor:M,transition:F}=E;if(w===Re){Wt(C,M);return}if(w===bc){U(E);return}const O=()=>{s(C),F&&!F.persisted&&F.afterLeave&&F.afterLeave()};if(E.shapeFlag&1&&F&&!F.persisted){const{leave:J,delayLeave:H}=F,$=()=>J(C,O);H?H(E.el,O,$):$()}else O()},Wt=(E,w)=>{let C;for(;E!==w;)C=m(E),s(E),E=C;s(w)},zn=(E,w,C)=>{const{bum:M,scope:F,job:O,subTree:J,um:H,m:$,a:j}=E;Bh($),Bh(j),M&&Po(M),F.stop(),O&&(O.flags|=8,it(J,E,w,C)),H&&xt(H,w),xt(()=>{E.isUnmounted=!0},w)},ft=(E,w,C,M=!1,F=!1,O=0)=>{for(let J=O;J<E.length;J++)it(E[J],w,C,M,F)},x=E=>{if(E.shapeFlag&6)return x(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const w=m(E.anchor||E.el),C=w&&w[av];return C?m(C):w};let Z=!1;const Y=(E,w,C)=>{E==null?w._vnode&&it(w._vnode,null,null,!0):N(w._vnode||null,E,w,null,null,null,C),w._vnode=E,Z||(Z=!0,Nh(),Vp(),Z=!1)},te={p:N,um:it,m:kt,r:Sn,mt:qe,mc:y,pc:Ae,pbc:b,n:x,o:t};return{render:Y,hydrate:void 0,createApp:Vv(Y)}}function Ac({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Mr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function $v(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Qp(t,e,n=!1){const r=t.children,s=e.children;if(ue(r)&&ue(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=rr(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&Qp(o,c)),c.type===Oa&&c.patchFlag!==-1&&(c.el=o.el),c.type===Tr&&!c.el&&(c.el=o.el)}}function jv(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<h?i=c+1:o=c;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Jp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Jp(e)}function Bh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const qv=Symbol.for("v-scx"),Hv=()=>qt(qv);function vi(t,e,n){return Yp(t,e,n)}function Yp(t,e,n=xe){const{immediate:r,deep:s,flush:i,once:o}=n,c=Tt({},n),l=e&&r||!e&&i!=="post";let h;if(Di){if(i==="sync"){const _=Hv();h=_.__watcherHandles||(_.__watcherHandles=[])}else if(!l){const _=()=>{};return _.stop=pn,_.resume=pn,_.pause=pn,_}}const f=Et;c.call=(_,R,N)=>In(_,f,R,N);let p=!1;i==="post"?c.scheduler=_=>{xt(_,f&&f.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(_,R)=>{R?_():ql(_)}),c.augmentJob=_=>{e&&(_.flags|=4),p&&(_.flags|=2,f&&(_.id=f.uid,_.i=f))};const m=rv(t,e,c);return Di&&(h?h.push(m):l&&m()),m}function zv(t,e,n){const r=this.proxy,s=Je(t)?t.includes(".")?Xp(r,t):()=>r[t]:t.bind(r,r);let i;ge(e)?i=e:(i=e.handler,n=e);const o=Yi(this),c=Yp(s,i.bind(r),n);return o(),c}function Xp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Wv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ht(e)}Modifiers`]||t[`${Gr(e)}Modifiers`];function Kv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||xe;let s=n;const i=e.startsWith("update:"),o=i&&Wv(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>Je(f)?f.trim():f)),o.number&&(s=n.map(jo)));let c,l=r[c=yc(e)]||r[c=yc(Ht(e))];!l&&i&&(l=r[c=yc(Gr(e))]),l&&In(l,t,6,s);const h=r[c+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,In(h,t,6,s)}}const Gv=new WeakMap;function Zp(t,e,n=!1){const r=n?Gv:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!ge(t)){const l=h=>{const f=Zp(h,e,!0);f&&(c=!0,Tt(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Fe(t)&&r.set(t,null),null):(ue(i)?i.forEach(l=>o[l]=null):Tt(o,i),Fe(t)&&r.set(t,o),o)}function Na(t,e){return!t||!Ia(e)?!1:(e=e.slice(2).replace(/Once$/,""),ke(t,e[0].toLowerCase()+e.slice(1))||ke(t,Gr(e))||ke(t,e))}function $h(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:h,renderCache:f,props:p,data:m,setupState:_,ctx:R,inheritAttrs:N}=t,D=Ko(t);let z,q;try{if(n.shapeFlag&4){const U=s||r,W=U;z=dn(h.call(W,U,f,p,_,m,R)),q=c}else{const U=e;z=dn(U.length>1?U(p,{attrs:c,slots:o,emit:l}):U(p,null)),q=e.props?c:Qv(c)}}catch(U){Ei.length=0,Pa(U,t,1),z=me(Tr)}let G=z;if(q&&N!==!1){const U=Object.keys(q),{shapeFlag:W}=G;U.length&&W&7&&(i&&U.some(Vl)&&(q=Jv(q,i)),G=ws(G,q,!1,!0))}return n.dirs&&(G=ws(G,null,!1,!0),G.dirs=G.dirs?G.dirs.concat(n.dirs):n.dirs),n.transition&&Hl(G,n.transition),z=G,Ko(D),z}const Qv=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ia(n))&&((e||(e={}))[n]=t[n]);return e},Jv=(t,e)=>{const n={};for(const r in t)(!Vl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Yv(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?jh(r,o,h):!!o;if(l&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const m=f[p];if(o[m]!==r[m]&&!Na(h,m))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?jh(r,o,h):!0:!!o;return!1}function jh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Na(n,i))return!0}return!1}function Xv({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const eg=t=>t.__isSuspense;function Zv(t,e){e&&e.pendingBranch?ue(t)?e.effects.push(...t):e.effects.push(t):ov(t)}const Re=Symbol.for("v-fgt"),Oa=Symbol.for("v-txt"),Tr=Symbol.for("v-cmt"),bc=Symbol.for("v-stc"),Ei=[];let Lt=null;function re(t=!1){Ei.push(Lt=t?null:[])}function eE(){Ei.pop(),Lt=Ei[Ei.length-1]||null}let Oi=1;function Jo(t,e=!1){Oi+=t,t<0&&Lt&&e&&(Lt.hasOnce=!0)}function tg(t){return t.dynamicChildren=Oi>0?Lt||ds:null,eE(),Oi>0&&Lt&&Lt.push(t),t}function he(t,e,n,r,s,i){return tg(P(t,e,n,r,s,i,!0))}function fr(t,e,n,r,s){return tg(me(t,e,n,r,s,!0))}function Yo(t){return t?t.__v_isVNode===!0:!1}function si(t,e){return t.type===e.type&&t.key===e.key}const ng=({key:t})=>t??null,ko=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Je(t)||Ke(t)||ge(t)?{i:Mt,r:t,k:e,f:!!n}:t:null);function P(t,e=null,n=null,r=0,s=null,i=t===Re?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ng(e),ref:e&&ko(e),scopeId:Op,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Mt};return c?(Kl(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Je(n)?8:16),Oi>0&&!o&&Lt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Lt.push(l),l}const me=tE;function tE(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Iv)&&(t=Tr),Yo(t)){const c=ws(t,e,!0);return n&&Kl(c,n),Oi>0&&!i&&Lt&&(c.shapeFlag&6?Lt[Lt.indexOf(t)]=c:Lt.push(c)),c.patchFlag=-2,c}if(fE(t)&&(t=t.__vccOpts),e){e=nE(e);let{class:c,style:l}=e;c&&!Je(c)&&(e.class=Gi(c)),Fe(l)&&($l(l)&&!ue(l)&&(l=Tt({},l)),e.style=Dl(l))}const o=Je(t)?1:eg(t)?128:cv(t)?64:Fe(t)?4:ge(t)?2:0;return P(t,e,n,r,s,o,i,!0)}function nE(t){return t?$l(t)||qp(t)?Tt({},t):t:null}function ws(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,h=e?rE(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&ng(h),ref:e&&e.ref?n&&i?ue(i)?i.concat(ko(e)):[i,ko(e)]:ko(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Re?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ws(t.ssContent),ssFallback:t.ssFallback&&ws(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Hl(f,l.clone(f)),f}function Ir(t=" ",e=0){return me(Oa,null,t,e)}function en(t="",e=!1){return e?(re(),fr(Tr,null,t)):me(Tr,null,t)}function dn(t){return t==null||typeof t=="boolean"?me(Tr):ue(t)?me(Re,null,t.slice()):Yo(t)?rr(t):me(Oa,null,String(t))}function rr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ws(t)}function Kl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ue(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Kl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!qp(e)?e._ctx=Mt:s===3&&Mt&&(Mt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ge(e)?(e={default:e,_ctx:Mt},n=32):(e=String(e),r&64?(n=16,e=[Ir(e)]):n=8);t.children=e,t.shapeFlag|=n}function rE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Gi([e.class,r.class]));else if(s==="style")e.style=Dl([e.style,r.style]);else if(Ia(s)){const i=e[s],o=r[s];o&&i!==o&&!(ue(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function un(t,e,n,r=null){In(t,e,7,[n,r])}const sE=Bp();let iE=0;function oE(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||sE,i={uid:iE++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new cp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:zp(r,s),emitsOptions:Zp(r,s),emit:null,emitted:null,propsDefaults:xe,inheritAttrs:r.inheritAttrs,ctx:xe,data:xe,props:xe,attrs:xe,slots:xe,refs:xe,setupState:xe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Kv.bind(null,i),t.ce&&t.ce(i),i}let Et=null;const rg=()=>Et||Mt;let Xo,Zc;{const t=Sa(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Xo=e("__VUE_INSTANCE_SETTERS__",n=>Et=n),Zc=e("__VUE_SSR_SETTERS__",n=>Di=n)}const Yi=t=>{const e=Et;return Xo(t),t.scope.on(),()=>{t.scope.off(),Xo(e)}},qh=()=>{Et&&Et.scope.off(),Xo(null)};function sg(t){return t.vnode.shapeFlag&4}let Di=!1;function aE(t,e=!1,n=!1){e&&Zc(e);const{props:r,children:s}=t.vnode,i=sg(t);Ov(t,r,i,e),Lv(t,s,n||e);const o=i?cE(t,e):void 0;return e&&Zc(!1),o}function cE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Av);const{setup:r}=n;if(r){xn();const s=t.setupContext=r.length>1?uE(t):null,i=Yi(t),o=Ji(r,t,0,[t.props,s]),c=tp(o);if(Mn(),i(),(c||t.sp)&&!mi(t)&&Dp(t),c){if(o.then(qh,qh),e)return o.then(l=>{Hh(t,l)}).catch(l=>{Pa(l,t,0)});t.asyncDep=o}else Hh(t,o)}else ig(t)}function Hh(t,e,n){ge(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Fe(e)&&(t.setupState=Cp(e)),ig(t)}function ig(t,e,n){const r=t.type;t.render||(t.render=r.render||pn);{const s=Yi(t);xn();try{bv(t)}finally{Mn(),s()}}}const lE={get(t,e){return yt(t,"get",""),t[e]}};function uE(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,lE),slots:t.slots,emit:t.emit,expose:e}}function Da(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Cp(jl(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in _i)return _i[n](t)},has(e,n){return n in e||n in _i}})):t.proxy}function hE(t,e=!0){return ge(t)?t.displayName||t.name:t.name||e&&t.__name}function fE(t){return ge(t)&&"__vccOpts"in t}const Ct=(t,e)=>tv(t,e,Di);function og(t,e,n){const r=(i,o,c)=>{Jo(-1);try{return me(i,o,c)}finally{Jo(1)}},s=arguments.length;return s===2?Fe(e)&&!ue(e)?Yo(e)?r(t,null,[e]):r(t,e):r(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Yo(n)&&(n=[n]),r(t,e,n))}const dE="3.5.21";/**
* @vue/runtime-dom v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let el;const zh=typeof window<"u"&&window.trustedTypes;if(zh)try{el=zh.createPolicy("vue",{createHTML:t=>t})}catch{}const ag=el?t=>el.createHTML(t):t=>t,pE="http://www.w3.org/2000/svg",gE="http://www.w3.org/1998/Math/MathML",Pn=typeof document<"u"?document:null,Wh=Pn&&Pn.createElement("template"),mE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Pn.createElementNS(pE,t):e==="mathml"?Pn.createElementNS(gE,t):n?Pn.createElement(t,{is:n}):Pn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Pn.createTextNode(t),createComment:t=>Pn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Pn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Wh.innerHTML=ag(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=Wh.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},_E=Symbol("_vtc");function yE(t,e,n){const r=t[_E];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Kh=Symbol("_vod"),vE=Symbol("_vsh"),EE=Symbol(""),TE=/(?:^|;)\s*display\s*:/;function IE(t,e,n){const r=t.style,s=Je(n);let i=!1;if(n&&!s){if(e)if(Je(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&Vo(r,c,"")}else for(const o in e)n[o]==null&&Vo(r,o,"");for(const o in n)o==="display"&&(i=!0),Vo(r,o,n[o])}else if(s){if(e!==n){const o=r[EE];o&&(n+=";"+o),r.cssText=n,i=TE.test(n)}}else e&&t.removeAttribute("style");Kh in t&&(t[Kh]=i?r.display:"",t[vE]&&(r.display="none"))}const Gh=/\s*!important$/;function Vo(t,e,n){if(ue(n))n.forEach(r=>Vo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=wE(t,e);Gh.test(n)?t.setProperty(Gr(r),n.replace(Gh,""),"important"):t[r]=n}}const Qh=["Webkit","Moz","ms"],Sc={};function wE(t,e){const n=Sc[e];if(n)return n;let r=Ht(e);if(r!=="filter"&&r in t)return Sc[e]=r;r=ba(r);for(let s=0;s<Qh.length;s++){const i=Qh[s]+r;if(i in t)return Sc[e]=i}return e}const Jh="http://www.w3.org/1999/xlink";function Yh(t,e,n,r,s,i=by(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Jh,e.slice(6,e.length)):t.setAttributeNS(Jh,e,n):n==null||i&&!ip(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Tn(n)?String(n):n)}function Xh(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?ag(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=ip(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Ur(t,e,n,r){t.addEventListener(e,n,r)}function AE(t,e,n,r){t.removeEventListener(e,n,r)}const Zh=Symbol("_vei");function bE(t,e,n,r,s=null){const i=t[Zh]||(t[Zh]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=SE(e);if(r){const h=i[e]=PE(r,s);Ur(t,c,h,l)}else o&&(AE(t,c,o,l),i[e]=void 0)}}const ef=/(?:Once|Passive|Capture)$/;function SE(t){let e;if(ef.test(t)){e={};let r;for(;r=t.match(ef);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Gr(t.slice(2)),e]}let Rc=0;const RE=Promise.resolve(),CE=()=>Rc||(RE.then(()=>Rc=0),Rc=Date.now());function PE(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;In(kE(r,n.value),e,5,[r])};return n.value=t,n.attached=CE(),n}function kE(t,e){if(ue(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const tf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,VE=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?yE(t,r,o):e==="style"?IE(t,n,r):Ia(e)?Vl(e)||bE(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):NE(t,e,r,o))?(Xh(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Yh(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Je(r))?Xh(t,Ht(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Yh(t,e,r,o))};function NE(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&tf(e)&&ge(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return tf(e)&&Je(n)?!1:e in t}const Zo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ue(e)?n=>Po(e,n):e};function OE(t){t.target.composing=!0}function nf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ms=Symbol("_assign"),Qt={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[ms]=Zo(s);const i=r||s.props&&s.props.type==="number";Ur(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=jo(c)),t[ms](c)}),n&&Ur(t,"change",()=>{t.value=t.value.trim()}),e||(Ur(t,"compositionstart",OE),Ur(t,"compositionend",nf),Ur(t,"change",nf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[ms]=Zo(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?jo(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},DE={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=wa(e);Ur(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?jo(ea(o)):ea(o));t[ms](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,ka(()=>{t._assigning=!1})}),t[ms]=Zo(r)},mounted(t,{value:e}){rf(t,e)},beforeUpdate(t,e,n){t[ms]=Zo(n)},updated(t,{value:e}){t._assigning||rf(t,e)}};function rf(t,e){const n=t.multiple,r=ue(e);if(!(n&&!r&&!wa(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],c=ea(o);if(n)if(r){const l=typeof c;l==="string"||l==="number"?o.selected=e.some(h=>String(h)===String(c)):o.selected=Ry(e,c)>-1}else o.selected=e.has(c);else if(Ra(ea(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function ea(t){return"_value"in t?t._value:t.value}const xE=Tt({patchProp:VE},mE);let sf;function ME(){return sf||(sf=Uv(xE))}const LE=((...t)=>{const e=ME().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=UE(r);if(!s)return;const i=e._component;!ge(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,FE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function FE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function UE(t){return Je(t)?document.querySelector(t):t}/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let cg;const xa=t=>cg=t,lg=Symbol();function tl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Ti;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ti||(Ti={}));function BE(){const t=lp(!0),e=t.run(()=>ve({}));let n=[],r=[];const s=jl({install(i){xa(s),s._a=i,i.provide(lg,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const ug=()=>{};function of(t,e,n,r=ug){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&up()&&Cy(s),s}function is(t,...e){t.slice().forEach(n=>{n(...e)})}const $E=t=>t(),af=Symbol(),Cc=Symbol();function nl(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];tl(s)&&tl(r)&&t.hasOwnProperty(n)&&!Ke(r)&&!hr(r)?t[n]=nl(s,r):t[n]=r}return t}const jE=Symbol();function qE(t){return!tl(t)||!Object.prototype.hasOwnProperty.call(t,jE)}const{assign:er}=Object;function HE(t){return!!(Ke(t)&&t.effect)}function zE(t,e,n,r){const{state:s,actions:i,getters:o}=e,c=n.state.value[t];let l;function h(){c||(n.state.value[t]=s?s():{});const f=Yy(n.state.value[t]);return er(f,i,Object.keys(o||{}).reduce((p,m)=>(p[m]=jl(Ct(()=>{xa(n);const _=n._s.get(t);return o[m].call(_,_)})),p),{}))}return l=hg(t,h,e,n,r,!0),l}function hg(t,e,n={},r,s,i){let o;const c=er({actions:{}},n),l={deep:!0};let h,f,p=[],m=[],_;const R=r.state.value[t];!i&&!R&&(r.state.value[t]={}),ve({});let N;function D(y){let v;h=f=!1,typeof y=="function"?(y(r.state.value[t]),v={type:Ti.patchFunction,storeId:t,events:_}):(nl(r.state.value[t],y),v={type:Ti.patchObject,payload:y,storeId:t,events:_});const b=N=Symbol();ka().then(()=>{N===b&&(h=!0)}),f=!0,is(p,v,r.state.value[t])}const z=i?function(){const{state:v}=n,b=v?v():{};this.$patch(A=>{er(A,b)})}:ug;function q(){o.stop(),p=[],m=[],r._s.delete(t)}const G=(y,v="")=>{if(af in y)return y[Cc]=v,y;const b=function(){xa(r);const A=Array.from(arguments),S=[],T=[];function qe(pe){S.push(pe)}function ht(pe){T.push(pe)}is(m,{args:A,name:b[Cc],store:W,after:qe,onError:ht});let Me;try{Me=y.apply(this&&this.$id===t?this:W,A)}catch(pe){throw is(T,pe),pe}return Me instanceof Promise?Me.then(pe=>(is(S,pe),pe)).catch(pe=>(is(T,pe),Promise.reject(pe))):(is(S,Me),Me)};return b[af]=!0,b[Cc]=v,b},U={_p:r,$id:t,$onAction:of.bind(null,m),$patch:D,$reset:z,$subscribe(y,v={}){const b=of(p,y,v.detached,()=>A()),A=o.run(()=>vi(()=>r.state.value[t],S=>{(v.flush==="sync"?f:h)&&y({storeId:t,type:Ti.direct,events:_},S)},er({},l,v)));return b},$dispose:q},W=Qi(U);r._s.set(t,W);const I=(r._a&&r._a.runWithContext||$E)(()=>r._e.run(()=>(o=lp()).run(()=>e({action:G}))));for(const y in I){const v=I[y];if(Ke(v)&&!HE(v)||hr(v))i||(R&&qE(v)&&(Ke(v)?v.value=R[y]:nl(v,R[y])),r.state.value[t][y]=v);else if(typeof v=="function"){const b=G(v,y);I[y]=b,c.actions[y]=v}}return er(W,I),er(Ce(W),I),Object.defineProperty(W,"$state",{get:()=>r.state.value[t],set:y=>{D(v=>{er(v,y)})}}),r._p.forEach(y=>{er(W,o.run(()=>y({store:W,app:r._a,pinia:r,options:c})))}),R&&i&&n.hydrate&&n.hydrate(W.$state,R),h=!0,f=!0,W}/*! #__NO_SIDE_EFFECTS__ */function Gl(t,e,n){let r;const s=typeof e=="function";r=s?n:e;function i(o,c){const l=Nv();return o=o||(l?qt(lg,null):null),o&&xa(o),o=cg,o._s.has(t)||(s?hg(t,e,r,o):zE(t,r,o)),o._s.get(t)}return i.$id=t,i}const zt=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},WE={},KE={class:"body"};function GE(t,e){const n=jn("router-view");return re(),he("div",KE,[me(n)])}const QE=zt(WE,[["render",GE]]);/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const as=typeof document<"u";function fg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function JE(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&fg(t.default)}const Pe=Object.assign;function Pc(t,e){const n={};for(const r in e){const s=e[r];n[r]=nn(s)?s.map(t):t(s)}return n}const Ii=()=>{},nn=Array.isArray,dg=/#/g,YE=/&/g,XE=/\//g,ZE=/=/g,eT=/\?/g,pg=/\+/g,tT=/%5B/g,nT=/%5D/g,gg=/%5E/g,rT=/%60/g,mg=/%7B/g,sT=/%7C/g,_g=/%7D/g,iT=/%20/g;function Ql(t){return encodeURI(""+t).replace(sT,"|").replace(tT,"[").replace(nT,"]")}function oT(t){return Ql(t).replace(mg,"{").replace(_g,"}").replace(gg,"^")}function rl(t){return Ql(t).replace(pg,"%2B").replace(iT,"+").replace(dg,"%23").replace(YE,"%26").replace(rT,"`").replace(mg,"{").replace(_g,"}").replace(gg,"^")}function aT(t){return rl(t).replace(ZE,"%3D")}function cT(t){return Ql(t).replace(dg,"%23").replace(eT,"%3F")}function lT(t){return t==null?"":cT(t).replace(XE,"%2F")}function xi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const uT=/\/$/,hT=t=>t.replace(uT,"");function kc(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=gT(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:xi(o)}}function fT(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function cf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function dT(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&As(e.matched[r],n.matched[s])&&yg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function As(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function yg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!pT(t[n],e[n]))return!1;return!0}function pT(t,e){return nn(t)?lf(t,e):nn(e)?lf(e,t):t===e}function lf(t,e){return nn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function gT(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Xn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Mi;(function(t){t.pop="pop",t.push="push"})(Mi||(Mi={}));var wi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(wi||(wi={}));function mT(t){if(!t)if(as){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),hT(t)}const _T=/^[^#]+#/;function yT(t,e){return t.replace(_T,"#")+e}function vT(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ma=()=>({left:window.scrollX,top:window.scrollY});function ET(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=vT(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function uf(t,e){return(history.state?history.state.position-e:-1)+t}const sl=new Map;function TT(t,e){sl.set(t,e)}function IT(t){const e=sl.get(t);return sl.delete(t),e}let wT=()=>location.protocol+"//"+location.host;function vg(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),cf(l,"")}return cf(n,t)+r+s}function AT(t,e,n,r){let s=[],i=[],o=null;const c=({state:m})=>{const _=vg(t,location),R=n.value,N=e.value;let D=0;if(m){if(n.value=_,e.value=m,o&&o===R){o=null;return}D=N?m.position-N.position:0}else r(_);s.forEach(z=>{z(n.value,R,{delta:D,type:Mi.pop,direction:D?D>0?wi.forward:wi.back:wi.unknown})})};function l(){o=n.value}function h(m){s.push(m);const _=()=>{const R=s.indexOf(m);R>-1&&s.splice(R,1)};return i.push(_),_}function f(){const{history:m}=window;m.state&&m.replaceState(Pe({},m.state,{scroll:Ma()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:l,listen:h,destroy:p}}function hf(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ma():null}}function bT(t){const{history:e,location:n}=window,r={value:vg(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,h,f){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:wT()+t+l;try{e[f?"replaceState":"pushState"](h,"",m),s.value=h}catch(_){console.error(_),n[f?"replace":"assign"](m)}}function o(l,h){const f=Pe({},e.state,hf(s.value.back,l,s.value.forward,!0),h,{position:s.value.position});i(l,f,!0),r.value=l}function c(l,h){const f=Pe({},s.value,e.state,{forward:l,scroll:Ma()});i(f.current,f,!0);const p=Pe({},hf(r.value,l,null),{position:f.position+1},h);i(l,p,!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function ST(t){t=mT(t);const e=bT(t),n=AT(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Pe({location:"",base:t,go:r,createHref:yT.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function RT(t){return typeof t=="string"||t&&typeof t=="object"}function Eg(t){return typeof t=="string"||typeof t=="symbol"}const Tg=Symbol("");var ff;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ff||(ff={}));function bs(t,e){return Pe(new Error,{type:t,[Tg]:!0},e)}function Cn(t,e){return t instanceof Error&&Tg in t&&(e==null||!!(t.type&e))}const df="[^/]+?",CT={sensitive:!1,strict:!1,start:!0,end:!0},PT=/[.+*?^${}()[\]/\\]/g;function kT(t,e){const n=Pe({},CT,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const f=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const m=h[p];let _=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(PT,"\\$&"),_+=40;else if(m.type===1){const{value:R,repeatable:N,optional:D,regexp:z}=m;i.push({name:R,repeatable:N,optional:D});const q=z||df;if(q!==df){_+=10;try{new RegExp(`(${q})`)}catch(U){throw new Error(`Invalid custom RegExp for param "${R}" (${q}): `+U.message)}}let G=N?`((?:${q})(?:/(?:${q}))*)`:`(${q})`;p||(G=D&&h.length<2?`(?:/${G})`:"/"+G),D&&(G+="?"),s+=G,_+=20,D&&(_+=-8),N&&(_+=-20),q===".*"&&(_+=-50)}f.push(_)}r.push(f)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(h){const f=h.match(o),p={};if(!f)return null;for(let m=1;m<f.length;m++){const _=f[m]||"",R=i[m-1];p[R.name]=_&&R.repeatable?_.split("/"):_}return p}function l(h){let f="",p=!1;for(const m of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const _ of m)if(_.type===0)f+=_.value;else if(_.type===1){const{value:R,repeatable:N,optional:D}=_,z=R in h?h[R]:"";if(nn(z)&&!N)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const q=nn(z)?z.join("/"):z;if(!q)if(D)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${R}"`);f+=q}}return f||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function VT(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Ig(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=VT(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(pf(r))return 1;if(pf(s))return-1}return s.length-r.length}function pf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const NT={type:0,value:""},OT=/[a-zA-Z0-9_]/;function DT(t){if(!t)return[[]];if(t==="/")return[[NT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${h}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,h="",f="";function p(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),h="")}function m(){h+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(h&&p(),o()):l===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:l==="("?n=2:OT.test(l)?m():(p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),p(),o(),s}function xT(t,e,n){const r=kT(DT(t.path),n),s=Pe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function MT(t,e){const n=[],r=new Map;e=yf({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,m,_){const R=!_,N=mf(p);N.aliasOf=_&&_.record;const D=yf(e,p),z=[N];if("alias"in p){const U=typeof p.alias=="string"?[p.alias]:p.alias;for(const W of U)z.push(mf(Pe({},N,{components:_?_.record.components:N.components,path:W,aliasOf:_?_.record:N})))}let q,G;for(const U of z){const{path:W}=U;if(m&&W[0]!=="/"){const K=m.record.path,I=K[K.length-1]==="/"?"":"/";U.path=m.record.path+(W&&I+W)}if(q=xT(U,m,D),_?_.alias.push(q):(G=G||q,G!==q&&G.alias.push(q),R&&p.name&&!_f(q)&&o(p.name)),wg(q)&&l(q),N.children){const K=N.children;for(let I=0;I<K.length;I++)i(K[I],q,_&&_.children[I])}_=_||q}return G?()=>{o(G)}:Ii}function o(p){if(Eg(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return n}function l(p){const m=UT(p,n);n.splice(m,0,p),p.record.name&&!_f(p)&&r.set(p.record.name,p)}function h(p,m){let _,R={},N,D;if("name"in p&&p.name){if(_=r.get(p.name),!_)throw bs(1,{location:p});D=_.record.name,R=Pe(gf(m.params,_.keys.filter(G=>!G.optional).concat(_.parent?_.parent.keys.filter(G=>G.optional):[]).map(G=>G.name)),p.params&&gf(p.params,_.keys.map(G=>G.name))),N=_.stringify(R)}else if(p.path!=null)N=p.path,_=n.find(G=>G.re.test(N)),_&&(R=_.parse(N),D=_.record.name);else{if(_=m.name?r.get(m.name):n.find(G=>G.re.test(m.path)),!_)throw bs(1,{location:p,currentLocation:m});D=_.record.name,R=Pe({},m.params,p.params),N=_.stringify(R)}const z=[];let q=_;for(;q;)z.unshift(q.record),q=q.parent;return{name:D,path:N,params:R,matched:z,meta:FT(z)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:o,clearRoutes:f,getRoutes:c,getRecordMatcher:s}}function gf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function mf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:LT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function LT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function _f(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function FT(t){return t.reduce((e,n)=>Pe(e,n.meta),{})}function yf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function UT(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Ig(t,e[i])<0?r=i:n=i+1}const s=BT(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function BT(t){let e=t;for(;e=e.parent;)if(wg(e)&&Ig(t,e)===0)return e}function wg({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function $T(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(pg," "),o=i.indexOf("="),c=xi(o<0?i:i.slice(0,o)),l=o<0?null:xi(i.slice(o+1));if(c in e){let h=e[c];nn(h)||(h=e[c]=[h]),h.push(l)}else e[c]=l}return e}function vf(t){let e="";for(let n in t){const r=t[n];if(n=aT(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(nn(r)?r.map(i=>i&&rl(i)):[r&&rl(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function jT(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=nn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const qT=Symbol(""),Ef=Symbol(""),Jl=Symbol(""),Yl=Symbol(""),il=Symbol("");function ii(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function sr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const h=m=>{m===!1?l(bs(4,{from:n,to:e})):m instanceof Error?l(m):RT(m)?l(bs(2,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),c())},f=i(()=>t.call(r&&r.instances[s],e,n,h));let p=Promise.resolve(f);t.length<3&&(p=p.then(h)),p.catch(m=>l(m))})}function Vc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(fg(l)){const f=(l.__vccOpts||l)[e];f&&i.push(sr(f,n,r,o,c,s))}else{let h=l();i.push(()=>h.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const p=JE(f)?f.default:f;o.mods[c]=f,o.components[c]=p;const _=(p.__vccOpts||p)[e];return _&&sr(_,n,r,o,c,s)()}))}}return i}function Tf(t){const e=qt(Jl),n=qt(Yl),r=Ct(()=>{const l=ze(t.to);return e.resolve(l)}),s=Ct(()=>{const{matched:l}=r.value,{length:h}=l,f=l[h-1],p=n.matched;if(!f||!p.length)return-1;const m=p.findIndex(As.bind(null,f));if(m>-1)return m;const _=If(l[h-2]);return h>1&&If(f)===_&&p[p.length-1].path!==_?p.findIndex(As.bind(null,l[h-2])):m}),i=Ct(()=>s.value>-1&&KT(n.params,r.value.params)),o=Ct(()=>s.value>-1&&s.value===n.matched.length-1&&yg(n.params,r.value.params));function c(l={}){if(WT(l)){const h=e[ze(t.replace)?"replace":"push"](ze(t.to)).catch(Ii);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:Ct(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function HT(t){return t.length===1?t[0]:t}const zT=st({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Tf,setup(t,{slots:e}){const n=Qi(Tf(t)),{options:r}=qt(Jl),s=Ct(()=>({[wf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[wf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&HT(e.default(n));return t.custom?i:og("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Ag=zT;function WT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function KT(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!nn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function If(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const wf=(t,e,n)=>t??e??n,GT=st({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=qt(il),s=Ct(()=>t.route||r.value),i=qt(Ef,0),o=Ct(()=>{let h=ze(i);const{matched:f}=s.value;let p;for(;(p=f[h])&&!p.components;)h++;return h}),c=Ct(()=>s.value.matched[o.value]);yi(Ef,Ct(()=>o.value+1)),yi(qT,c),yi(il,s);const l=ve();return vi(()=>[l.value,c.value,t.name],([h,f,p],[m,_,R])=>{f&&(f.instances[p]=h,_&&_!==f&&h&&h===m&&(f.leaveGuards.size||(f.leaveGuards=_.leaveGuards),f.updateGuards.size||(f.updateGuards=_.updateGuards))),h&&f&&(!_||!As(f,_)||!m)&&(f.enterCallbacks[p]||[]).forEach(N=>N(h))},{flush:"post"}),()=>{const h=s.value,f=t.name,p=c.value,m=p&&p.components[f];if(!m)return Af(n.default,{Component:m,route:h});const _=p.props[f],R=_?_===!0?h.params:typeof _=="function"?_(h):_:null,D=og(m,Pe({},R,e,{onVnodeUnmounted:z=>{z.component.isUnmounted&&(p.instances[f]=null)},ref:l}));return Af(n.default,{Component:D,route:h})||D}}});function Af(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const QT=GT;function JT(t){const e=MT(t.routes,t),n=t.parseQuery||$T,r=t.stringifyQuery||vf,s=t.history,i=ii(),o=ii(),c=ii(),l=Gy(Xn);let h=Xn;as&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Pc.bind(null,x=>""+x),p=Pc.bind(null,lT),m=Pc.bind(null,xi);function _(x,Z){let Y,te;return Eg(x)?(Y=e.getRecordMatcher(x),te=Z):te=x,e.addRoute(te,Y)}function R(x){const Z=e.getRecordMatcher(x);Z&&e.removeRoute(Z)}function N(){return e.getRoutes().map(x=>x.record)}function D(x){return!!e.getRecordMatcher(x)}function z(x,Z){if(Z=Pe({},Z||l.value),typeof x=="string"){const C=kc(n,x,Z.path),M=e.resolve({path:C.path},Z),F=s.createHref(C.fullPath);return Pe(C,M,{params:m(M.params),hash:xi(C.hash),redirectedFrom:void 0,href:F})}let Y;if(x.path!=null)Y=Pe({},x,{path:kc(n,x.path,Z.path).path});else{const C=Pe({},x.params);for(const M in C)C[M]==null&&delete C[M];Y=Pe({},x,{params:p(C)}),Z.params=p(Z.params)}const te=e.resolve(Y,Z),Ne=x.hash||"";te.params=f(m(te.params));const E=fT(r,Pe({},x,{hash:oT(Ne),path:te.path})),w=s.createHref(E);return Pe({fullPath:E,hash:Ne,query:r===vf?jT(x.query):x.query||{}},te,{redirectedFrom:void 0,href:w})}function q(x){return typeof x=="string"?kc(n,x,l.value.path):Pe({},x)}function G(x,Z){if(h!==x)return bs(8,{from:Z,to:x})}function U(x){return I(x)}function W(x){return U(Pe(q(x),{replace:!0}))}function K(x){const Z=x.matched[x.matched.length-1];if(Z&&Z.redirect){const{redirect:Y}=Z;let te=typeof Y=="function"?Y(x):Y;return typeof te=="string"&&(te=te.includes("?")||te.includes("#")?te=q(te):{path:te},te.params={}),Pe({query:x.query,hash:x.hash,params:te.path!=null?{}:x.params},te)}}function I(x,Z){const Y=h=z(x),te=l.value,Ne=x.state,E=x.force,w=x.replace===!0,C=K(Y);if(C)return I(Pe(q(C),{state:typeof C=="object"?Pe({},Ne,C.state):Ne,force:E,replace:w}),Z||Y);const M=Y;M.redirectedFrom=Z;let F;return!E&&dT(r,te,Y)&&(F=bs(16,{to:M,from:te}),kt(te,te,!0,!1)),(F?Promise.resolve(F):b(M,te)).catch(O=>Cn(O)?Cn(O,2)?O:an(O):Ae(O,M,te)).then(O=>{if(O){if(Cn(O,2))return I(Pe({replace:w},q(O.to),{state:typeof O.to=="object"?Pe({},Ne,O.to.state):Ne,force:E}),Z||M)}else O=S(M,te,!0,w,Ne);return A(M,te,O),O})}function y(x,Z){const Y=G(x,Z);return Y?Promise.reject(Y):Promise.resolve()}function v(x){const Z=Wt.values().next().value;return Z&&typeof Z.runWithContext=="function"?Z.runWithContext(x):x()}function b(x,Z){let Y;const[te,Ne,E]=YT(x,Z);Y=Vc(te.reverse(),"beforeRouteLeave",x,Z);for(const C of te)C.leaveGuards.forEach(M=>{Y.push(sr(M,x,Z))});const w=y.bind(null,x,Z);return Y.push(w),ft(Y).then(()=>{Y=[];for(const C of i.list())Y.push(sr(C,x,Z));return Y.push(w),ft(Y)}).then(()=>{Y=Vc(Ne,"beforeRouteUpdate",x,Z);for(const C of Ne)C.updateGuards.forEach(M=>{Y.push(sr(M,x,Z))});return Y.push(w),ft(Y)}).then(()=>{Y=[];for(const C of E)if(C.beforeEnter)if(nn(C.beforeEnter))for(const M of C.beforeEnter)Y.push(sr(M,x,Z));else Y.push(sr(C.beforeEnter,x,Z));return Y.push(w),ft(Y)}).then(()=>(x.matched.forEach(C=>C.enterCallbacks={}),Y=Vc(E,"beforeRouteEnter",x,Z,v),Y.push(w),ft(Y))).then(()=>{Y=[];for(const C of o.list())Y.push(sr(C,x,Z));return Y.push(w),ft(Y)}).catch(C=>Cn(C,8)?C:Promise.reject(C))}function A(x,Z,Y){c.list().forEach(te=>v(()=>te(x,Z,Y)))}function S(x,Z,Y,te,Ne){const E=G(x,Z);if(E)return E;const w=Z===Xn,C=as?history.state:{};Y&&(te||w?s.replace(x.fullPath,Pe({scroll:w&&C&&C.scroll},Ne)):s.push(x.fullPath,Ne)),l.value=x,kt(x,Z,Y,w),an()}let T;function qe(){T||(T=s.listen((x,Z,Y)=>{if(!zn.listening)return;const te=z(x),Ne=K(te);if(Ne){I(Pe(Ne,{replace:!0,force:!0}),te).catch(Ii);return}h=te;const E=l.value;as&&TT(uf(E.fullPath,Y.delta),Ma()),b(te,E).catch(w=>Cn(w,12)?w:Cn(w,2)?(I(Pe(q(w.to),{force:!0}),te).then(C=>{Cn(C,20)&&!Y.delta&&Y.type===Mi.pop&&s.go(-1,!1)}).catch(Ii),Promise.reject()):(Y.delta&&s.go(-Y.delta,!1),Ae(w,te,E))).then(w=>{w=w||S(te,E,!1),w&&(Y.delta&&!Cn(w,8)?s.go(-Y.delta,!1):Y.type===Mi.pop&&Cn(w,20)&&s.go(-1,!1)),A(te,E,w)}).catch(Ii)}))}let ht=ii(),Me=ii(),pe;function Ae(x,Z,Y){an(x);const te=Me.list();return te.length?te.forEach(Ne=>Ne(x,Z,Y)):console.error(x),Promise.reject(x)}function St(){return pe&&l.value!==Xn?Promise.resolve():new Promise((x,Z)=>{ht.add([x,Z])})}function an(x){return pe||(pe=!x,qe(),ht.list().forEach(([Z,Y])=>x?Y(x):Z()),ht.reset()),x}function kt(x,Z,Y,te){const{scrollBehavior:Ne}=t;if(!as||!Ne)return Promise.resolve();const E=!Y&&IT(uf(x.fullPath,0))||(te||!Y)&&history.state&&history.state.scroll||null;return ka().then(()=>Ne(x,Z,E)).then(w=>w&&ET(w)).catch(w=>Ae(w,x,Z))}const it=x=>s.go(x);let Sn;const Wt=new Set,zn={currentRoute:l,listening:!0,addRoute:_,removeRoute:R,clearRoutes:e.clearRoutes,hasRoute:D,getRoutes:N,resolve:z,options:t,push:U,replace:W,go:it,back:()=>it(-1),forward:()=>it(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:Me.add,isReady:St,install(x){const Z=this;x.component("RouterLink",Ag),x.component("RouterView",QT),x.config.globalProperties.$router=Z,Object.defineProperty(x.config.globalProperties,"$route",{enumerable:!0,get:()=>ze(l)}),as&&!Sn&&l.value===Xn&&(Sn=!0,U(s.location).catch(Ne=>{}));const Y={};for(const Ne in Xn)Object.defineProperty(Y,Ne,{get:()=>l.value[Ne],enumerable:!0});x.provide(Jl,Z),x.provide(Yl,bp(Y)),x.provide(il,l);const te=x.unmount;Wt.add(x),x.unmount=function(){Wt.delete(x),Wt.size<1&&(h=Xn,T&&T(),T=null,l.value=Xn,Sn=!1,pe=!1),te()}}};function ft(x){return x.reduce((Z,Y)=>Z.then(()=>v(Y)),Promise.resolve())}return zn}function YT(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(h=>As(h,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(h=>As(h,l))||s.push(l))}return[n,r,s]}function Xl(t){return qt(Yl)}const XT="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20class='icon%20icon-tabler%20icons-tabler-outline%20icon-tabler-corner-down-right'%3e%3cpath%20stroke='none'%20d='M0%200h24v24H0z'%20fill='none'/%3e%3cpath%20d='M6%206v6a3%203%200%200%200%203%203h10l-4%20-4m0%208l4%20-4'%20/%3e%3c/svg%3e",ZT={class:"group"},eI=st({__name:"ButtonLink",props:{link:{},icon:{type:Boolean},text:{}},setup(t){return(e,n)=>{const r=jn("RouterLink");return re(),fr(r,{to:e.link},{default:tn(()=>[P("div",ZT,[P("p",null,we(e.text),1),n[0]||(n[0]=P("img",{class:"icon",src:XT},null,-1))])]),_:1},8,["to"])}}}),bf=zt(eI,[["__scopeId","data-v-d005cff0"]]),tI={class:"star"},nI=st({__name:"TheFooter",props:{title:{},type:{}},setup(t){const e=t,n=ve(20);return(r,s)=>(re(),he("footer",{class:Gi({"main-footer":e.type=="main","queer-footer":e.type=="queer","autism-footer":e.type=="autism","fanfiction-footer":e.type=="ff","glasschild-footer":e.type=="glasschild","others-footer":e.type=="other"})},[s[1]||(s[1]=P("div",{class:"star"},null,-1)),r.type=="autism"?(re(!0),he(Re,{key:0},Pt(n.value,i=>(re(),he("div",tI))),256)):en("",!0),P("p",{onClick:s[0]||(s[0]=i=>r.$emit("authorLogin"))},we(r.title),1)],2))}}),bn=zt(nI,[["__scopeId","data-v-ef3b4f2d"]]),rI="data:image/svg+xml,%3c!--%20tags:%20[direction,%20west]%20category:%20Arrows%20version:%20'1.37'%20unicode:%20'eddb'%20--%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%23000000'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3cpath%20d='M20%2015h-8v3.586a1%201%200%200%201%20-1.707%20.707l-6.586%20-6.586a1%201%200%200%201%200%20-1.414l6.586%20-6.586a1%201%200%200%201%201.707%20.707v3.586h8a1%201%200%200%201%201%201v4a1%201%200%200%201%20-1%201z'%20/%3e%3c/svg%3e",sI="/assets/icon-By7hXV3M.png",iI={class:"star"},oI={key:1,class:"navigation"},aI={key:2,class:"navigation main"},cI=st({__name:"TheHeader",props:{title:{},type:{},returnPath:{}},setup(t){const e=t;function n(){e.returnPath==null?Ta.push({name:"Home"}):Ta.push({name:e.returnPath})}const r=qt("loggedIn"),s=Ct(()=>r?r.value==!0?"Logout":"Login":"none"),i=ve(20);return(o,c)=>(re(),he("header",{class:Gi({"main-header":e.type=="main","queer-header":e.type=="queer","autism-header":e.type=="autism","fanfiction-header":e.type=="ff","glasschild-header":e.type=="glasschild","others-header":e.type=="other"})},[o.type=="autism"?(re(!0),he(Re,{key:0},Pt(i.value,l=>(re(),he("div",iI))),256)):en("",!0),o.type!="main"?(re(),he("div",oI,[P("img",{src:rI,onClick:c[0]||(c[0]=l=>n()),class:"back"}),P("h2",null,we(o.title),1),c[2]||(c[2]=P("div",null,null,-1))])):(re(),he("div",aI,[me(ze(Ag),{to:"/"},{default:tn(()=>[...c[3]||(c[3]=[P("img",{src:sI,class:"icon"},null,-1)])]),_:1}),P("h1",null,we(o.title),1),P("button",{onClick:c[1]||(c[1]=l=>o.$emit("login"))},we(s.value),1)]))],2))}}),qn=zt(cI,[["__scopeId","data-v-c6de04fe"]]);/**
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
 */const lI=()=>{};var Sf={};/**
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
 */const bg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},uI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Sg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,h=l?t[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let m=(c&15)<<2|h>>6,_=h&63;l||(_=64,o||(m=64)),r.push(n[f],n[p],n[m],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(bg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):uI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new hI;const m=i<<2|c>>4;if(r.push(m),h!==64){const _=c<<4&240|h>>2;if(r.push(_),p!==64){const R=h<<6&192|p;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class hI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fI=function(t){const e=bg(t);return Sg.encodeByteArray(e,!0)},ta=function(t){return fI(t).replace(/\./g,"")},Rg=function(t){try{return Sg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function dI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const pI=()=>dI().__FIREBASE_DEFAULTS__,gI=()=>{if(typeof process>"u"||typeof Sf>"u")return;const t=Sf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},mI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Rg(t[1]);return e&&JSON.parse(e)},La=()=>{try{return lI()||pI()||gI()||mI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Cg=t=>La()?.emulatorHosts?.[t],_I=t=>{const e=Cg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Pg=()=>La()?.config,kg=t=>La()?.[`_${t}`];/**
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
 */class yI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Ds(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Vg(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function vI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[ta(JSON.stringify(n)),ta(JSON.stringify(o)),""].join(".")}const Ai={};function EI(){const t={prod:[],emulator:[]};for(const e of Object.keys(Ai))Ai[e]?t.emulator.push(e):t.prod.push(e);return t}function TI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Rf=!1;function Ng(t,e){if(typeof window>"u"||typeof document>"u"||!Ds(window.location.host)||Ai[t]===e||Ai[t]||Rf)return;Ai[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=EI().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function c(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function l(m,_){m.setAttribute("width","24"),m.setAttribute("id",_),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function h(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Rf=!0,o()},m}function f(m,_){m.setAttribute("id",_),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=TI(r),_=n("text"),R=document.getElementById(_)||document.createElement("span"),N=n("learnmore"),D=document.getElementById(N)||document.createElement("a"),z=n("preprendIcon"),q=document.getElementById(z)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const G=m.element;c(G),f(D,N);const U=h();l(q,z),G.append(q,R,D,U),document.body.appendChild(G)}i?(R.innerText="Preview backend disconnected.",q.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(q.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,R.innerText="Preview backend running in this workspace."),R.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function It(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function II(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(It())}function wI(){const t=La()?.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function AI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function bI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function SI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function RI(){const t=It();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function CI(){return!wI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function PI(){try{return typeof indexedDB=="object"}catch{return!1}}function kI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(n){e(n)}})}/**
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
 */const VI="FirebaseError";class Hn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=VI,Object.setPrototypeOf(this,Hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xi.prototype.create)}}class Xi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?NI(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Hn(s,c,r)}}function NI(t,e){return t.replace(OI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const OI=/\{\$([^}]+)}/g;function DI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function qr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Cf(i)&&Cf(o)){if(!qr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Cf(t){return t!==null&&typeof t=="object"}/**
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
 */function Zi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ai(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ci(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function xI(t,e){const n=new MI(t,e);return n.subscribe.bind(n)}class MI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");LI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Nc),s.error===void 0&&(s.error=Nc),s.complete===void 0&&(s.complete=Nc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function LI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Nc(){}/**
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
 */function Ft(t){return t&&t._delegate?t._delegate:t}class Hr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Fr="[DEFAULT]";/**
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
 */class FI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new yI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(BI(e))try{this.getOrInitializeService({instanceIdentifier:Fr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Fr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Fr){return this.instances.has(e)}getOptions(e=Fr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:UI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Fr){return this.component?this.component.multipleInstances?e:Fr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function UI(t){return t===Fr?void 0:t}function BI(t){return t.instantiationMode==="EAGER"}/**
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
 */class $I{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new FI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ee||(Ee={}));const jI={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},qI=Ee.INFO,HI={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},zI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=HI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zl{constructor(e){this.name=e,this._logLevel=qI,this._logHandler=zI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?jI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}const WI=(t,e)=>e.some(n=>t instanceof n);let Pf,kf;function KI(){return Pf||(Pf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function GI(){return kf||(kf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Og=new WeakMap,ol=new WeakMap,Dg=new WeakMap,Oc=new WeakMap,eu=new WeakMap;function QI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(dr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Og.set(n,t)}).catch(()=>{}),eu.set(e,t),e}function JI(t){if(ol.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ol.set(t,e)}let al={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ol.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Dg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return dr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function YI(t){al=t(al)}function XI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Dc(this),e,...n);return Dg.set(r,e.sort?e.sort():[e]),dr(r)}:GI().includes(t)?function(...e){return t.apply(Dc(this),e),dr(Og.get(this))}:function(...e){return dr(t.apply(Dc(this),e))}}function ZI(t){return typeof t=="function"?XI(t):(t instanceof IDBTransaction&&JI(t),WI(t,KI())?new Proxy(t,al):t)}function dr(t){if(t instanceof IDBRequest)return QI(t);if(Oc.has(t))return Oc.get(t);const e=ZI(t);return e!==t&&(Oc.set(t,e),eu.set(e,t)),e}const Dc=t=>eu.get(t);function ew(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=dr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(dr(o.result),l.oldVersion,l.newVersion,dr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const tw=["get","getKey","getAll","getAllKeys","count"],nw=["put","add","delete","clear"],xc=new Map;function Vf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(xc.get(e))return xc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=nw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||tw.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),s&&l.done]))[0]};return xc.set(e,i),i}YI(t=>({...t,get:(e,n,r)=>Vf(e,n)||t.get(e,n,r),has:(e,n)=>!!Vf(e,n)||t.has(e,n)}));/**
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
 */class rw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(sw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function sw(t){return t.getComponent()?.type==="VERSION"}const cl="@firebase/app",Nf="0.14.3";/**
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
 */const Ln=new Zl("@firebase/app"),iw="@firebase/app-compat",ow="@firebase/analytics-compat",aw="@firebase/analytics",cw="@firebase/app-check-compat",lw="@firebase/app-check",uw="@firebase/auth",hw="@firebase/auth-compat",fw="@firebase/database",dw="@firebase/data-connect",pw="@firebase/database-compat",gw="@firebase/functions",mw="@firebase/functions-compat",_w="@firebase/installations",yw="@firebase/installations-compat",vw="@firebase/messaging",Ew="@firebase/messaging-compat",Tw="@firebase/performance",Iw="@firebase/performance-compat",ww="@firebase/remote-config",Aw="@firebase/remote-config-compat",bw="@firebase/storage",Sw="@firebase/storage-compat",Rw="@firebase/firestore",Cw="@firebase/ai",Pw="@firebase/firestore-compat",kw="firebase",Vw="12.3.0";/**
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
 */const ll="[DEFAULT]",Nw={[cl]:"fire-core",[iw]:"fire-core-compat",[aw]:"fire-analytics",[ow]:"fire-analytics-compat",[lw]:"fire-app-check",[cw]:"fire-app-check-compat",[uw]:"fire-auth",[hw]:"fire-auth-compat",[fw]:"fire-rtdb",[dw]:"fire-data-connect",[pw]:"fire-rtdb-compat",[gw]:"fire-fn",[mw]:"fire-fn-compat",[_w]:"fire-iid",[yw]:"fire-iid-compat",[vw]:"fire-fcm",[Ew]:"fire-fcm-compat",[Tw]:"fire-perf",[Iw]:"fire-perf-compat",[ww]:"fire-rc",[Aw]:"fire-rc-compat",[bw]:"fire-gcs",[Sw]:"fire-gcs-compat",[Rw]:"fire-fst",[Pw]:"fire-fst-compat",[Cw]:"fire-vertex","fire-js":"fire-js",[kw]:"fire-js-all"};/**
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
 */const na=new Map,Ow=new Map,ul=new Map;function Of(t,e){try{t.container.addComponent(e)}catch(n){Ln.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ss(t){const e=t.name;if(ul.has(e))return Ln.debug(`There were multiple attempts to register component ${e}.`),!1;ul.set(e,t);for(const n of na.values())Of(n,t);for(const n of Ow.values())Of(n,t);return!0}function tu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Jt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const Dw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},pr=new Xi("app","Firebase",Dw);/**
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
 */class xw{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Hr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pr.create("app-deleted",{appName:this._name})}}/**
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
 */const xs=Vw;function xg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:ll,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw pr.create("bad-app-name",{appName:String(s)});if(n||(n=Pg()),!n)throw pr.create("no-options");const i=na.get(s);if(i){if(qr(n,i.options)&&qr(r,i.config))return i;throw pr.create("duplicate-app",{appName:s})}const o=new $I(s);for(const l of ul.values())o.addComponent(l);const c=new xw(n,r,o);return na.set(s,c),c}function Mg(t=ll){const e=na.get(t);if(!e&&t===ll&&Pg())return xg();if(!e)throw pr.create("no-app",{appName:t});return e}function gr(t,e,n){let r=Nw[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ln.warn(o.join(" "));return}Ss(new Hr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Mw="firebase-heartbeat-database",Lw=1,Li="firebase-heartbeat-store";let Mc=null;function Lg(){return Mc||(Mc=ew(Mw,Lw,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Li)}catch(n){console.warn(n)}}}}).catch(t=>{throw pr.create("idb-open",{originalErrorMessage:t.message})})),Mc}async function Fw(t){try{const n=(await Lg()).transaction(Li),r=await n.objectStore(Li).get(Fg(t));return await n.done,r}catch(e){if(e instanceof Hn)Ln.warn(e.message);else{const n=pr.create("idb-get",{originalErrorMessage:e?.message});Ln.warn(n.message)}}}async function Df(t,e){try{const r=(await Lg()).transaction(Li,"readwrite");await r.objectStore(Li).put(e,Fg(t)),await r.done}catch(n){if(n instanceof Hn)Ln.warn(n.message);else{const r=pr.create("idb-set",{originalErrorMessage:n?.message});Ln.warn(r.message)}}}function Fg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Uw=1024,Bw=30;class $w{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new qw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=xf();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>Bw){const s=Hw(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Ln.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=xf(),{heartbeatsToSend:n,unsentEntries:r}=jw(this._heartbeatsCache.heartbeats),s=ta(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return Ln.warn(e),""}}}function xf(){return new Date().toISOString().substring(0,10)}function jw(t,e=Uw){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Mf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Mf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class qw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return PI()?kI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Fw(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Df(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Df(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Mf(t){return ta(JSON.stringify({version:2,heartbeats:t})).length}function Hw(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function zw(t){Ss(new Hr("platform-logger",e=>new rw(e),"PRIVATE")),Ss(new Hr("heartbeat",e=>new $w(e),"PRIVATE")),gr(cl,Nf,t),gr(cl,Nf,"esm2020"),gr("fire-js","")}zw("");function Ug(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ww=Ug,Bg=new Xi("auth","Firebase",Ug());/**
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
 */const ra=new Zl("@firebase/auth");function Kw(t,...e){ra.logLevel<=Ee.WARN&&ra.warn(`Auth (${xs}): ${t}`,...e)}function No(t,...e){ra.logLevel<=Ee.ERROR&&ra.error(`Auth (${xs}): ${t}`,...e)}/**
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
 */function rn(t,...e){throw nu(t,...e)}function gn(t,...e){return nu(t,...e)}function $g(t,e,n){const r={...Ww(),[e]:n};return new Xi("auth","Firebase",r).create(e,{appName:t.name})}function mr(t){return $g(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function nu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Bg.create(t,...e)}function ce(t,e,...n){if(!t)throw nu(e,...n)}function Nn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw No(e),new Error(e)}function Fn(t,e){t||Nn(e)}/**
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
 */function hl(){return typeof self<"u"&&self.location?.href||""}function Gw(){return Lf()==="http:"||Lf()==="https:"}function Lf(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function Qw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Gw()||bI()||"connection"in navigator)?navigator.onLine:!0}function Jw(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class eo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Fn(n>e,"Short delay should be less than long delay!"),this.isMobile=II()||SI()}get(){return Qw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ru(t,e){Fn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class jg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Nn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Nn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Nn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Yw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Xw=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Zw=new eo(3e4,6e4);function Qr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Pr(t,e,n,r,s={}){return qg(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Zi({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:l,...i};return AI()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&Ds(t.emulatorConfig.host)&&(h.credentials="include"),jg.fetch()(await Hg(t,t.config.apiHost,n,c),h)})}async function qg(t,e,n){t._canInitEmulator=!1;const r={...Yw,...e};try{const s=new tA(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Io(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Io(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Io(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Io(t,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw $g(t,f,h);rn(t,f)}}catch(s){if(s instanceof Hn)throw s;rn(t,"network-request-failed",{message:String(s)})}}async function Fa(t,e,n,r,s={}){const i=await Pr(t,e,n,r,s);return"mfaPendingCredential"in i&&rn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Hg(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?ru(t.config,s):`${t.config.apiScheme}://${s}`;return Xw.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function eA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class tA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(gn(this.auth,"network-request-failed")),Zw.get())})}}function Io(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=gn(t,e,r);return s.customData._tokenResponse=n,s}function Ff(t){return t!==void 0&&t.enterprise!==void 0}class nA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return eA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function rA(t,e){return Pr(t,"GET","/v2/recaptchaConfig",Qr(t,e))}/**
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
 */async function sA(t,e){return Pr(t,"POST","/v1/accounts:delete",e)}async function sa(t,e){return Pr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function bi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function iA(t,e=!1){const n=Ft(t),r=await n.getIdToken(e),s=su(r);ce(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:bi(Lc(s.auth_time)),issuedAtTime:bi(Lc(s.iat)),expirationTime:bi(Lc(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Lc(t){return Number(t)*1e3}function su(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return No("JWT malformed, contained fewer than 3 sections"),null;try{const s=Rg(n);return s?JSON.parse(s):(No("Failed to decode base64 JWT payload"),null)}catch(s){return No("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Uf(t){const e=su(t);return ce(e,"internal-error"),ce(typeof e.exp<"u","internal-error"),ce(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Fi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Hn&&oA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function oA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class aA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class fl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=bi(this.lastLoginAt),this.creationTime=bi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ia(t){const e=t.auth,n=await t.getIdToken(),r=await Fi(t,sa(e,{idToken:n}));ce(r?.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=s.providerUserInfo?.length?zg(s.providerUserInfo):[],o=lA(t.providerData,i),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!o?.length,h=c?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new fl(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function cA(t){const e=Ft(t);await ia(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function lA(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function zg(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function uA(t,e){const n=await qg(t,{},async()=>{const r=Zi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Hg(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return t.emulatorConfig&&Ds(t.emulatorConfig.host)&&(l.credentials="include"),jg.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function hA(t,e){return Pr(t,"POST","/v2/accounts:revokeToken",Qr(t,e))}/**
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
 */class _s{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ce(e.idToken,"internal-error"),ce(typeof e.idToken<"u","internal-error"),ce(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Uf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ce(e.length!==0,"internal-error");const n=Uf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ce(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await uA(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new _s;return r&&(ce(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ce(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ce(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new _s,this.toJSON())}_performRefresh(){return Nn("not implemented")}}/**
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
 */function Zn(t,e){ce(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Yt{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new aA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new fl(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Fi(this,this.stsTokenManager.getToken(this.auth,e));return ce(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return iA(this,e)}reload(){return cA(this)}_assign(e){this!==e&&(ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Yt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ia(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Jt(this.auth.app))return Promise.reject(mr(this.auth));const e=await this.getIdToken();return await Fi(this,sA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,c=n.tenantId??void 0,l=n._redirectEventId??void 0,h=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:_,providerData:R,stsTokenManager:N}=n;ce(p&&N,e,"internal-error");const D=_s.fromJSON(this.name,N);ce(typeof p=="string",e,"internal-error"),Zn(r,e.name),Zn(s,e.name),ce(typeof m=="boolean",e,"internal-error"),ce(typeof _=="boolean",e,"internal-error"),Zn(i,e.name),Zn(o,e.name),Zn(c,e.name),Zn(l,e.name),Zn(h,e.name),Zn(f,e.name);const z=new Yt({uid:p,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:_,photoURL:o,phoneNumber:i,tenantId:c,stsTokenManager:D,createdAt:h,lastLoginAt:f});return R&&Array.isArray(R)&&(z.providerData=R.map(q=>({...q}))),l&&(z._redirectEventId=l),z}static async _fromIdTokenResponse(e,n,r=!1){const s=new _s;s.updateFromServerResponse(n);const i=new Yt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ia(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ce(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?zg(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,c=new _s;c.updateFromIdToken(r);const l=new Yt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new fl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(l,h),l}}/**
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
 */const Bf=new Map;function On(t){Fn(t instanceof Function,"Expected a class definition");let e=Bf.get(t);return e?(Fn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Bf.set(t,e),e)}/**
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
 */class Wg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Wg.type="NONE";const $f=Wg;/**
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
 */function Oo(t,e,n){return`firebase:${t}:${e}:${n}`}class ys{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Oo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Oo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await sa(this.auth,{idToken:e}).catch(()=>{});return n?Yt._fromGetAccountInfoResponse(this.auth,n,e):null}return Yt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ys(On($f),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||On($f);const o=Oo(r,e.config.apiKey,e.name);let c=null;for(const h of n)try{const f=await h._get(o);if(f){let p;if(typeof f=="string"){const m=await sa(e,{idToken:f}).catch(()=>{});if(!m)break;p=await Yt._fromGetAccountInfoResponse(e,m,f)}else p=Yt._fromJSON(e,f);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new ys(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new ys(i,e,r))}}/**
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
 */function jf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Jg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Kg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Xg(e))return"Blackberry";if(Zg(e))return"Webos";if(Gg(e))return"Safari";if((e.includes("chrome/")||Qg(e))&&!e.includes("edge/"))return"Chrome";if(Yg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function Kg(t=It()){return/firefox\//i.test(t)}function Gg(t=It()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Qg(t=It()){return/crios\//i.test(t)}function Jg(t=It()){return/iemobile/i.test(t)}function Yg(t=It()){return/android/i.test(t)}function Xg(t=It()){return/blackberry/i.test(t)}function Zg(t=It()){return/webos/i.test(t)}function iu(t=It()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function fA(t=It()){return iu(t)&&!!window.navigator?.standalone}function dA(){return RI()&&document.documentMode===10}function em(t=It()){return iu(t)||Yg(t)||Zg(t)||Xg(t)||/windows phone/i.test(t)||Jg(t)}/**
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
 */function tm(t,e=[]){let n;switch(t){case"Browser":n=jf(It());break;case"Worker":n=`${jf(It())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${xs}/${r}`}/**
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
 */class pA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function gA(t,e={}){return Pr(t,"GET","/v2/passwordPolicy",Qr(t,e))}/**
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
 */const mA=6;class _A{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??mA,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class yA{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qf(this),this.idTokenSubscription=new qf(this),this.beforeStateQueue=new pA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Bg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=On(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await ys.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await sa(this,{idToken:e}),r=await Yt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Jt(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=r?._redirectEventId,c=await this.tryRedirectSignIn(e);(!i||i===o)&&c?.user&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ia(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Jw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Jt(this.app))return Promise.reject(mr(this));const n=e?Ft(e):null;return n&&ce(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Jt(this.app)?Promise.reject(mr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Jt(this.app)?Promise.reject(mr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(On(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await gA(this),n=new _A(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Xi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await hA(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&On(e)||this._popupRedirectResolver;ce(n,this,"argument-error"),this.redirectPersistenceManager=await ys.create(this,[On(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ce(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=tm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(Jt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Kw(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Ms(t){return Ft(t)}class qf{constructor(e){this.auth=e,this.observer=null,this.addObserver=xI(n=>this.observer=n)}get next(){return ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ua={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function vA(t){Ua=t}function nm(t){return Ua.loadJS(t)}function EA(){return Ua.recaptchaEnterpriseScript}function TA(){return Ua.gapiScript}function IA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class wA{constructor(){this.enterprise=new AA}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class AA{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const bA="recaptcha-enterprise",rm="NO_RECAPTCHA";class SA{constructor(e){this.type=bA,this.auth=Ms(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{rA(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new nA(l);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;Ff(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(rm)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new wA().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&Ff(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=EA();l.length!==0&&(l+=c),nm(l).then(()=>{s(c,i,o)}).catch(h=>{o(h)})}}).catch(c=>{o(c)})})}}async function Hf(t,e,n,r=!1,s=!1){const i=new SA(t);let o;if(s)o=rm;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const c={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function zf(t,e,n,r,s){if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Hf(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Hf(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function RA(t,e){const n=tu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(qr(i,e??{}))return s;rn(s,"already-initialized")}return n.initialize({options:e})}function CA(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(On);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function PA(t,e,n){const r=Ms(t);ce(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=sm(e),{host:o,port:c}=kA(e),l=c===null?"":`:${c}`,h={url:`${i}//${o}${l}/`},f=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ce(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ce(qr(h,r.config.emulator)&&qr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Ds(o)?(Vg(`${i}//${o}${l}`),Ng("Auth",!0)):VA()}function sm(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function kA(t){const e=sm(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Wf(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Wf(o)}}}function Wf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function VA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class ou{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Nn("not implemented")}_getIdTokenResponse(e){return Nn("not implemented")}_linkToIdToken(e,n){return Nn("not implemented")}_getReauthenticationResolver(e){return Nn("not implemented")}}async function NA(t,e){return Pr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function OA(t,e){return Fa(t,"POST","/v1/accounts:signInWithPassword",Qr(t,e))}/**
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
 */async function DA(t,e){return Fa(t,"POST","/v1/accounts:signInWithEmailLink",Qr(t,e))}async function xA(t,e){return Fa(t,"POST","/v1/accounts:signInWithEmailLink",Qr(t,e))}/**
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
 */class Ui extends ou{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Ui(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ui(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return zf(e,n,"signInWithPassword",OA);case"emailLink":return DA(e,{email:this._email,oobCode:this._password});default:rn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return zf(e,r,"signUpPassword",NA);case"emailLink":return xA(e,{idToken:n,email:this._email,oobCode:this._password});default:rn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function vs(t,e){return Fa(t,"POST","/v1/accounts:signInWithIdp",Qr(t,e))}/**
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
 */const MA="http://localhost";class zr extends ou{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new zr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):rn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new zr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return vs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,vs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,vs(e,n)}buildRequest(){const e={requestUri:MA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Zi(n)}return e}}/**
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
 */function LA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function FA(t){const e=ai(ci(t)).link,n=e?ai(ci(e)).deep_link_id:null,r=ai(ci(t)).deep_link_id;return(r?ai(ci(r)).link:null)||r||n||e||t}class au{constructor(e){const n=ai(ci(e)),r=n.apiKey??null,s=n.oobCode??null,i=LA(n.mode??null);ce(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=FA(e);try{return new au(n)}catch{return null}}}/**
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
 */class Ls{constructor(){this.providerId=Ls.PROVIDER_ID}static credential(e,n){return Ui._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=au.parseLink(n);return ce(r,"argument-error"),Ui._fromEmailAndCode(e,r.code,r.tenantId)}}Ls.PROVIDER_ID="password";Ls.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ls.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class im{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class to extends im{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ir extends to{constructor(){super("facebook.com")}static credential(e){return zr._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ir.credential(e.oauthAccessToken)}catch{return null}}}ir.FACEBOOK_SIGN_IN_METHOD="facebook.com";ir.PROVIDER_ID="facebook.com";/**
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
 */class or extends to{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return zr._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return or.credential(n,r)}catch{return null}}}or.GOOGLE_SIGN_IN_METHOD="google.com";or.PROVIDER_ID="google.com";/**
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
 */class ar extends to{constructor(){super("github.com")}static credential(e){return zr._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ar.credential(e.oauthAccessToken)}catch{return null}}}ar.GITHUB_SIGN_IN_METHOD="github.com";ar.PROVIDER_ID="github.com";/**
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
 */class cr extends to{constructor(){super("twitter.com")}static credential(e,n){return zr._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return cr.credential(n,r)}catch{return null}}}cr.TWITTER_SIGN_IN_METHOD="twitter.com";cr.PROVIDER_ID="twitter.com";/**
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
 */class Rs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Yt._fromIdTokenResponse(e,r,s),o=Kf(r);return new Rs({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Kf(r);return new Rs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Kf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class oa extends Hn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,oa.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new oa(e,n,r,s)}}function om(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?oa._fromErrorAndOperation(t,i,e,r):i})}async function UA(t,e,n=!1){const r=await Fi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Rs._forOperation(t,"link",r)}/**
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
 */async function BA(t,e,n=!1){const{auth:r}=t;if(Jt(r.app))return Promise.reject(mr(r));const s="reauthenticate";try{const i=await Fi(t,om(r,s,e,t),n);ce(i.idToken,r,"internal-error");const o=su(i.idToken);ce(o,r,"internal-error");const{sub:c}=o;return ce(t.uid===c,r,"user-mismatch"),Rs._forOperation(t,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&rn(r,"user-mismatch"),i}}/**
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
 */async function am(t,e,n=!1){if(Jt(t.app))return Promise.reject(mr(t));const r="signIn",s=await om(t,r,e),i=await Rs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function $A(t,e){return am(Ms(t),e)}/**
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
 */async function jA(t){const e=Ms(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function qA(t,e,n){return Jt(t.app)?Promise.reject(mr(t)):$A(Ft(t),Ls.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&jA(t),r})}function HA(t,e,n,r){return Ft(t).onIdTokenChanged(e,n,r)}function zA(t,e,n){return Ft(t).beforeAuthStateChanged(e,n)}function WA(t){return Ft(t).signOut()}const aa="__sak";/**
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
 */class cm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(aa,"1"),this.storage.removeItem(aa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const KA=1e3,GA=10;class lm extends cm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=em(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);dA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,GA):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},KA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}lm.type="LOCAL";const QA=lm;/**
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
 */class um extends cm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}um.type="SESSION";const hm=um;/**
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
 */function JA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ba{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ba(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async h=>h(n.origin,i)),l=await JA(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ba.receivers=[];/**
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
 */function cu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class YA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const h=cu("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function mn(){return window}function XA(t){mn().location.href=t}/**
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
 */function fm(){return typeof mn().WorkerGlobalScope<"u"&&typeof mn().importScripts=="function"}async function ZA(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function eb(){return navigator?.serviceWorker?.controller||null}function tb(){return fm()?self:null}/**
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
 */const dm="firebaseLocalStorageDb",nb=1,ca="firebaseLocalStorage",pm="fbase_key";class no{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function $a(t,e){return t.transaction([ca],e?"readwrite":"readonly").objectStore(ca)}function rb(){const t=indexedDB.deleteDatabase(dm);return new no(t).toPromise()}function dl(){const t=indexedDB.open(dm,nb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ca,{keyPath:pm})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ca)?e(r):(r.close(),await rb(),e(await dl()))})})}async function Gf(t,e,n){const r=$a(t,!0).put({[pm]:e,value:n});return new no(r).toPromise()}async function sb(t,e){const n=$a(t,!1).get(e),r=await new no(n).toPromise();return r===void 0?null:r.value}function Qf(t,e){const n=$a(t,!0).delete(e);return new no(n).toPromise()}const ib=800,ob=3;class gm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await dl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ob)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return fm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ba._getInstance(tb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await ZA(),!this.activeServiceWorker)return;this.sender=new YA(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||eb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await dl();return await Gf(e,aa,"1"),await Qf(e,aa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Gf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>sb(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Qf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=$a(s,!1).getAll();return new no(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ib)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}gm.type="LOCAL";const ab=gm;new eo(3e4,6e4);/**
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
 */function cb(t,e){return e?On(e):(ce(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class lu extends ou{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return vs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return vs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return vs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function lb(t){return am(t.auth,new lu(t),t.bypassAuthState)}function ub(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),BA(n,new lu(t),t.bypassAuthState)}async function hb(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),UA(n,new lu(t),t.bypassAuthState)}/**
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
 */class mm{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return lb;case"linkViaPopup":case"linkViaRedirect":return hb;case"reauthViaPopup":case"reauthViaRedirect":return ub;default:rn(this.auth,"internal-error")}}resolve(e){Fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const fb=new eo(2e3,1e4);class fs extends mm{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,fs.currentPopupAction&&fs.currentPopupAction.cancel(),fs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ce(e,this.auth,"internal-error"),e}async onExecution(){Fn(this.filter.length===1,"Popup operations only handle one event");const e=cu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(gn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(gn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fs.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(gn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,fb.get())};e()}}fs.currentPopupAction=null;/**
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
 */const db="pendingRedirect",Do=new Map;class pb extends mm{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Do.get(this.auth._key());if(!e){try{const r=await gb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Do.set(this.auth._key(),e)}return this.bypassAuthState||Do.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function gb(t,e){const n=yb(e),r=_b(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function mb(t,e){Do.set(t._key(),e)}function _b(t){return On(t._redirectPersistence)}function yb(t){return Oo(db,t.config.apiKey,t.name)}async function vb(t,e,n=!1){if(Jt(t.app))return Promise.reject(mr(t));const r=Ms(t),s=cb(r,e),o=await new pb(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Eb=600*1e3;class Tb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ib(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!_m(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";n.onError(gn(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Eb&&this.cachedEventUids.clear(),this.cachedEventUids.has(Jf(e))}saveEventToCache(e){this.cachedEventUids.add(Jf(e)),this.lastProcessedEventTime=Date.now()}}function Jf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function _m({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function Ib(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _m(t);default:return!1}}/**
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
 */async function wb(t,e={}){return Pr(t,"GET","/v1/projects",e)}/**
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
 */const Ab=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bb=/^https?/;async function Sb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await wb(t);for(const n of e)try{if(Rb(n))return}catch{}rn(t,"unauthorized-domain")}function Rb(t){const e=hl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!bb.test(n))return!1;if(Ab.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Cb=new eo(3e4,6e4);function Yf(){const t=mn().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Pb(t){return new Promise((e,n)=>{function r(){Yf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Yf(),n(gn(t,"network-request-failed"))},timeout:Cb.get()})}if(mn().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(mn().gapi?.load)r();else{const s=IA("iframefcb");return mn()[s]=()=>{gapi.load?r():n(gn(t,"network-request-failed"))},nm(`${TA()}?onload=${s}`).catch(i=>n(i))}}).catch(e=>{throw xo=null,e})}let xo=null;function kb(t){return xo=xo||Pb(t),xo}/**
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
 */const Vb=new eo(5e3,15e3),Nb="__/auth/iframe",Ob="emulator/auth/iframe",Db={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},xb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Mb(t){const e=t.config;ce(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ru(e,Ob):`https://${t.config.authDomain}/${Nb}`,r={apiKey:e.apiKey,appName:t.name,v:xs},s=xb.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Zi(r).slice(1)}`}async function Lb(t){const e=await kb(t),n=mn().gapi;return ce(n,t,"internal-error"),e.open({where:document.body,url:Mb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Db,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=gn(t,"network-request-failed"),c=mn().setTimeout(()=>{i(o)},Vb.get());function l(){mn().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const Fb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ub=500,Bb=600,$b="_blank",jb="http://localhost";class Xf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function qb(t,e,n,r=Ub,s=Bb){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={...Fb,width:r.toString(),height:s.toString(),top:i,left:o},h=It().toLowerCase();n&&(c=Qg(h)?$b:n),Kg(h)&&(e=e||jb,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[_,R])=>`${m}${_}=${R},`,"");if(fA(h)&&c!=="_self")return Hb(e||"",c),new Xf(null);const p=window.open(e||"",c,f);ce(p,t,"popup-blocked");try{p.focus()}catch{}return new Xf(p)}function Hb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const zb="__/auth/handler",Wb="emulator/auth/handler",Kb=encodeURIComponent("fac");async function Zf(t,e,n,r,s,i){ce(t.config.authDomain,t,"auth-domain-config-required"),ce(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:xs,eventId:s};if(e instanceof im){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",DI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof to){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),h=l?`#${Kb}=${encodeURIComponent(l)}`:"";return`${Gb(t)}?${Zi(c).slice(1)}${h}`}function Gb({config:t}){return t.emulator?ru(t,Wb):`https://${t.authDomain}/${zb}`}/**
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
 */const Fc="webStorageSupport";class Qb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=hm,this._completeRedirectFn=vb,this._overrideRedirectResult=mb}async _openPopup(e,n,r,s){Fn(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await Zf(e,n,r,hl(),s);return qb(e,i,cu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Zf(e,n,r,hl(),s);return XA(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Fn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Lb(e),r=new Tb(e);return n.register("authEvent",s=>(ce(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Fc,{type:Fc},s=>{const i=s?.[0]?.[Fc];i!==void 0&&n(!!i),rn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Sb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return em()||Gg()||iu()}}const Jb=Qb;var ed="@firebase/auth",td="1.11.0";/**
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
 */class Yb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Xb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Zb(t){Ss(new Hr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;ce(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:tm(t)},h=new yA(r,s,i,l);return CA(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ss(new Hr("auth-internal",e=>{const n=Ms(e.getProvider("auth").getImmediate());return(r=>new Yb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),gr(ed,td,Xb(t)),gr(ed,td,"esm2020")}/**
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
 */const eS=300,tS=kg("authIdTokenMaxAge")||eS;let nd=null;const nS=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>tS)return;const s=n?.token;nd!==s&&(nd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function rd(t=Mg()){const e=tu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=RA(t,{popupRedirectResolver:Jb,persistence:[ab,QA,hm]}),r=kg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=nS(i.toString());zA(n,o,()=>o(n.currentUser)),HA(n,c=>o(c))}}const s=Cg("auth");return s&&PA(n,`http://${s}`),n}function rS(){return document.getElementsByTagName("head")?.[0]??document}vA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=gn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",rS().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Zb("Browser");var sS="firebase",iS="12.3.0";/**
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
 */gr(sS,iS,"app");var sd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _r,ym;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,y){function v(){}v.prototype=y.prototype,I.F=y.prototype,I.prototype=new v,I.prototype.constructor=I,I.D=function(b,A,S){for(var T=Array(arguments.length-2),qe=2;qe<arguments.length;qe++)T[qe-2]=arguments[qe];return y.prototype[A].apply(b,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,y,v){v||(v=0);const b=Array(16);if(typeof y=="string")for(var A=0;A<16;++A)b[A]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(A=0;A<16;++A)b[A]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=I.g[0],v=I.g[1],A=I.g[2];let S=I.g[3],T;T=y+(S^v&(A^S))+b[0]+3614090360&4294967295,y=v+(T<<7&4294967295|T>>>25),T=S+(A^y&(v^A))+b[1]+3905402710&4294967295,S=y+(T<<12&4294967295|T>>>20),T=A+(v^S&(y^v))+b[2]+606105819&4294967295,A=S+(T<<17&4294967295|T>>>15),T=v+(y^A&(S^y))+b[3]+3250441966&4294967295,v=A+(T<<22&4294967295|T>>>10),T=y+(S^v&(A^S))+b[4]+4118548399&4294967295,y=v+(T<<7&4294967295|T>>>25),T=S+(A^y&(v^A))+b[5]+1200080426&4294967295,S=y+(T<<12&4294967295|T>>>20),T=A+(v^S&(y^v))+b[6]+2821735955&4294967295,A=S+(T<<17&4294967295|T>>>15),T=v+(y^A&(S^y))+b[7]+4249261313&4294967295,v=A+(T<<22&4294967295|T>>>10),T=y+(S^v&(A^S))+b[8]+1770035416&4294967295,y=v+(T<<7&4294967295|T>>>25),T=S+(A^y&(v^A))+b[9]+2336552879&4294967295,S=y+(T<<12&4294967295|T>>>20),T=A+(v^S&(y^v))+b[10]+4294925233&4294967295,A=S+(T<<17&4294967295|T>>>15),T=v+(y^A&(S^y))+b[11]+2304563134&4294967295,v=A+(T<<22&4294967295|T>>>10),T=y+(S^v&(A^S))+b[12]+1804603682&4294967295,y=v+(T<<7&4294967295|T>>>25),T=S+(A^y&(v^A))+b[13]+4254626195&4294967295,S=y+(T<<12&4294967295|T>>>20),T=A+(v^S&(y^v))+b[14]+2792965006&4294967295,A=S+(T<<17&4294967295|T>>>15),T=v+(y^A&(S^y))+b[15]+1236535329&4294967295,v=A+(T<<22&4294967295|T>>>10),T=y+(A^S&(v^A))+b[1]+4129170786&4294967295,y=v+(T<<5&4294967295|T>>>27),T=S+(v^A&(y^v))+b[6]+3225465664&4294967295,S=y+(T<<9&4294967295|T>>>23),T=A+(y^v&(S^y))+b[11]+643717713&4294967295,A=S+(T<<14&4294967295|T>>>18),T=v+(S^y&(A^S))+b[0]+3921069994&4294967295,v=A+(T<<20&4294967295|T>>>12),T=y+(A^S&(v^A))+b[5]+3593408605&4294967295,y=v+(T<<5&4294967295|T>>>27),T=S+(v^A&(y^v))+b[10]+38016083&4294967295,S=y+(T<<9&4294967295|T>>>23),T=A+(y^v&(S^y))+b[15]+3634488961&4294967295,A=S+(T<<14&4294967295|T>>>18),T=v+(S^y&(A^S))+b[4]+3889429448&4294967295,v=A+(T<<20&4294967295|T>>>12),T=y+(A^S&(v^A))+b[9]+568446438&4294967295,y=v+(T<<5&4294967295|T>>>27),T=S+(v^A&(y^v))+b[14]+3275163606&4294967295,S=y+(T<<9&4294967295|T>>>23),T=A+(y^v&(S^y))+b[3]+4107603335&4294967295,A=S+(T<<14&4294967295|T>>>18),T=v+(S^y&(A^S))+b[8]+1163531501&4294967295,v=A+(T<<20&4294967295|T>>>12),T=y+(A^S&(v^A))+b[13]+2850285829&4294967295,y=v+(T<<5&4294967295|T>>>27),T=S+(v^A&(y^v))+b[2]+4243563512&4294967295,S=y+(T<<9&4294967295|T>>>23),T=A+(y^v&(S^y))+b[7]+1735328473&4294967295,A=S+(T<<14&4294967295|T>>>18),T=v+(S^y&(A^S))+b[12]+2368359562&4294967295,v=A+(T<<20&4294967295|T>>>12),T=y+(v^A^S)+b[5]+4294588738&4294967295,y=v+(T<<4&4294967295|T>>>28),T=S+(y^v^A)+b[8]+2272392833&4294967295,S=y+(T<<11&4294967295|T>>>21),T=A+(S^y^v)+b[11]+1839030562&4294967295,A=S+(T<<16&4294967295|T>>>16),T=v+(A^S^y)+b[14]+4259657740&4294967295,v=A+(T<<23&4294967295|T>>>9),T=y+(v^A^S)+b[1]+2763975236&4294967295,y=v+(T<<4&4294967295|T>>>28),T=S+(y^v^A)+b[4]+1272893353&4294967295,S=y+(T<<11&4294967295|T>>>21),T=A+(S^y^v)+b[7]+4139469664&4294967295,A=S+(T<<16&4294967295|T>>>16),T=v+(A^S^y)+b[10]+3200236656&4294967295,v=A+(T<<23&4294967295|T>>>9),T=y+(v^A^S)+b[13]+681279174&4294967295,y=v+(T<<4&4294967295|T>>>28),T=S+(y^v^A)+b[0]+3936430074&4294967295,S=y+(T<<11&4294967295|T>>>21),T=A+(S^y^v)+b[3]+3572445317&4294967295,A=S+(T<<16&4294967295|T>>>16),T=v+(A^S^y)+b[6]+76029189&4294967295,v=A+(T<<23&4294967295|T>>>9),T=y+(v^A^S)+b[9]+3654602809&4294967295,y=v+(T<<4&4294967295|T>>>28),T=S+(y^v^A)+b[12]+3873151461&4294967295,S=y+(T<<11&4294967295|T>>>21),T=A+(S^y^v)+b[15]+530742520&4294967295,A=S+(T<<16&4294967295|T>>>16),T=v+(A^S^y)+b[2]+3299628645&4294967295,v=A+(T<<23&4294967295|T>>>9),T=y+(A^(v|~S))+b[0]+4096336452&4294967295,y=v+(T<<6&4294967295|T>>>26),T=S+(v^(y|~A))+b[7]+1126891415&4294967295,S=y+(T<<10&4294967295|T>>>22),T=A+(y^(S|~v))+b[14]+2878612391&4294967295,A=S+(T<<15&4294967295|T>>>17),T=v+(S^(A|~y))+b[5]+4237533241&4294967295,v=A+(T<<21&4294967295|T>>>11),T=y+(A^(v|~S))+b[12]+1700485571&4294967295,y=v+(T<<6&4294967295|T>>>26),T=S+(v^(y|~A))+b[3]+2399980690&4294967295,S=y+(T<<10&4294967295|T>>>22),T=A+(y^(S|~v))+b[10]+4293915773&4294967295,A=S+(T<<15&4294967295|T>>>17),T=v+(S^(A|~y))+b[1]+2240044497&4294967295,v=A+(T<<21&4294967295|T>>>11),T=y+(A^(v|~S))+b[8]+1873313359&4294967295,y=v+(T<<6&4294967295|T>>>26),T=S+(v^(y|~A))+b[15]+4264355552&4294967295,S=y+(T<<10&4294967295|T>>>22),T=A+(y^(S|~v))+b[6]+2734768916&4294967295,A=S+(T<<15&4294967295|T>>>17),T=v+(S^(A|~y))+b[13]+1309151649&4294967295,v=A+(T<<21&4294967295|T>>>11),T=y+(A^(v|~S))+b[4]+4149444226&4294967295,y=v+(T<<6&4294967295|T>>>26),T=S+(v^(y|~A))+b[11]+3174756917&4294967295,S=y+(T<<10&4294967295|T>>>22),T=A+(y^(S|~v))+b[2]+718787259&4294967295,A=S+(T<<15&4294967295|T>>>17),T=v+(S^(A|~y))+b[9]+3951481745&4294967295,I.g[0]=I.g[0]+y&4294967295,I.g[1]=I.g[1]+(A+(T<<21&4294967295|T>>>11))&4294967295,I.g[2]=I.g[2]+A&4294967295,I.g[3]=I.g[3]+S&4294967295}r.prototype.v=function(I,y){y===void 0&&(y=I.length);const v=y-this.blockSize,b=this.C;let A=this.h,S=0;for(;S<y;){if(A==0)for(;S<=v;)s(this,I,S),S+=this.blockSize;if(typeof I=="string"){for(;S<y;)if(b[A++]=I.charCodeAt(S++),A==this.blockSize){s(this,b),A=0;break}}else for(;S<y;)if(b[A++]=I[S++],A==this.blockSize){s(this,b),A=0;break}}this.h=A,this.o+=y},r.prototype.A=function(){var I=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);I[0]=128;for(var y=1;y<I.length-8;++y)I[y]=0;y=this.o*8;for(var v=I.length-8;v<I.length;++v)I[v]=y&255,y/=256;for(this.v(I),I=Array(16),y=0,v=0;v<4;++v)for(let b=0;b<32;b+=8)I[y++]=this.g[v]>>>b&255;return I};function i(I,y){var v=c;return Object.prototype.hasOwnProperty.call(v,I)?v[I]:v[I]=y(I)}function o(I,y){this.h=y;const v=[];let b=!0;for(let A=I.length-1;A>=0;A--){const S=I[A]|0;b&&S==y||(v[A]=S,b=!1)}this.g=v}var c={};function l(I){return-128<=I&&I<128?i(I,function(y){return new o([y|0],y<0?-1:0)}):new o([I|0],I<0?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return p;if(I<0)return D(h(-I));const y=[];let v=1;for(let b=0;I>=v;b++)y[b]=I/v|0,v*=4294967296;return new o(y,0)}function f(I,y){if(I.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(I.charAt(0)=="-")return D(f(I.substring(1),y));if(I.indexOf("-")>=0)throw Error('number format error: interior "-" character');const v=h(Math.pow(y,8));let b=p;for(let S=0;S<I.length;S+=8){var A=Math.min(8,I.length-S);const T=parseInt(I.substring(S,S+A),y);A<8?(A=h(Math.pow(y,A)),b=b.j(A).add(h(T))):(b=b.j(v),b=b.add(h(T)))}return b}var p=l(0),m=l(1),_=l(16777216);t=o.prototype,t.m=function(){if(N(this))return-D(this).m();let I=0,y=1;for(let v=0;v<this.g.length;v++){const b=this.i(v);I+=(b>=0?b:4294967296+b)*y,y*=4294967296}return I},t.toString=function(I){if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(R(this))return"0";if(N(this))return"-"+D(this).toString(I);const y=h(Math.pow(I,6));var v=this;let b="";for(;;){const A=U(v,y).g;v=z(v,A.j(y));let S=((v.g.length>0?v.g[0]:v.h)>>>0).toString(I);if(v=A,R(v))return S+b;for(;S.length<6;)S="0"+S;b=S+b}},t.i=function(I){return I<0?0:I<this.g.length?this.g[I]:this.h};function R(I){if(I.h!=0)return!1;for(let y=0;y<I.g.length;y++)if(I.g[y]!=0)return!1;return!0}function N(I){return I.h==-1}t.l=function(I){return I=z(this,I),N(I)?-1:R(I)?0:1};function D(I){const y=I.g.length,v=[];for(let b=0;b<y;b++)v[b]=~I.g[b];return new o(v,~I.h).add(m)}t.abs=function(){return N(this)?D(this):this},t.add=function(I){const y=Math.max(this.g.length,I.g.length),v=[];let b=0;for(let A=0;A<=y;A++){let S=b+(this.i(A)&65535)+(I.i(A)&65535),T=(S>>>16)+(this.i(A)>>>16)+(I.i(A)>>>16);b=T>>>16,S&=65535,T&=65535,v[A]=T<<16|S}return new o(v,v[v.length-1]&-2147483648?-1:0)};function z(I,y){return I.add(D(y))}t.j=function(I){if(R(this)||R(I))return p;if(N(this))return N(I)?D(this).j(D(I)):D(D(this).j(I));if(N(I))return D(this.j(D(I)));if(this.l(_)<0&&I.l(_)<0)return h(this.m()*I.m());const y=this.g.length+I.g.length,v=[];for(var b=0;b<2*y;b++)v[b]=0;for(b=0;b<this.g.length;b++)for(let A=0;A<I.g.length;A++){const S=this.i(b)>>>16,T=this.i(b)&65535,qe=I.i(A)>>>16,ht=I.i(A)&65535;v[2*b+2*A]+=T*ht,q(v,2*b+2*A),v[2*b+2*A+1]+=S*ht,q(v,2*b+2*A+1),v[2*b+2*A+1]+=T*qe,q(v,2*b+2*A+1),v[2*b+2*A+2]+=S*qe,q(v,2*b+2*A+2)}for(I=0;I<y;I++)v[I]=v[2*I+1]<<16|v[2*I];for(I=y;I<2*y;I++)v[I]=0;return new o(v,0)};function q(I,y){for(;(I[y]&65535)!=I[y];)I[y+1]+=I[y]>>>16,I[y]&=65535,y++}function G(I,y){this.g=I,this.h=y}function U(I,y){if(R(y))throw Error("division by zero");if(R(I))return new G(p,p);if(N(I))return y=U(D(I),y),new G(D(y.g),D(y.h));if(N(y))return y=U(I,D(y)),new G(D(y.g),y.h);if(I.g.length>30){if(N(I)||N(y))throw Error("slowDivide_ only works with positive integers.");for(var v=m,b=y;b.l(I)<=0;)v=W(v),b=W(b);var A=K(v,1),S=K(b,1);for(b=K(b,2),v=K(v,2);!R(b);){var T=S.add(b);T.l(I)<=0&&(A=A.add(v),S=T),b=K(b,1),v=K(v,1)}return y=z(I,A.j(y)),new G(A,y)}for(A=p;I.l(y)>=0;){for(v=Math.max(1,Math.floor(I.m()/y.m())),b=Math.ceil(Math.log(v)/Math.LN2),b=b<=48?1:Math.pow(2,b-48),S=h(v),T=S.j(y);N(T)||T.l(I)>0;)v-=b,S=h(v),T=S.j(y);R(S)&&(S=m),A=A.add(S),I=z(I,T)}return new G(A,I)}t.B=function(I){return U(this,I).h},t.and=function(I){const y=Math.max(this.g.length,I.g.length),v=[];for(let b=0;b<y;b++)v[b]=this.i(b)&I.i(b);return new o(v,this.h&I.h)},t.or=function(I){const y=Math.max(this.g.length,I.g.length),v=[];for(let b=0;b<y;b++)v[b]=this.i(b)|I.i(b);return new o(v,this.h|I.h)},t.xor=function(I){const y=Math.max(this.g.length,I.g.length),v=[];for(let b=0;b<y;b++)v[b]=this.i(b)^I.i(b);return new o(v,this.h^I.h)};function W(I){const y=I.g.length+1,v=[];for(let b=0;b<y;b++)v[b]=I.i(b)<<1|I.i(b-1)>>>31;return new o(v,I.h)}function K(I,y){const v=y>>5;y%=32;const b=I.g.length-v,A=[];for(let S=0;S<b;S++)A[S]=y>0?I.i(S+v)>>>y|I.i(S+v+1)<<32-y:I.i(S+v);return new o(A,I.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,ym=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,_r=o}).apply(typeof sd<"u"?sd:typeof self<"u"?self:typeof window<"u"?window:{});var wo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vm,li,Em,Mo,pl,Tm,Im,wm;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof wo=="object"&&wo];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,u){if(u)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var k=a[g];if(!(k in d))break e;d=d[k]}a=a[a.length-1],g=d[a],u=u(g),u!=g&&u!=null&&e(d,a,{configurable:!0,writable:!0,value:u})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(u){var d=[],g;for(g in u)Object.prototype.hasOwnProperty.call(u,g)&&d.push([g,u[g]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function c(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function l(a,u,d){return a.call.apply(a.bind,arguments)}function h(a,u,d){return h=l,h.apply(null,arguments)}function f(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function p(a,u){function d(){}d.prototype=u.prototype,a.Z=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(g,k,V){for(var Q=Array(arguments.length-2),_e=2;_e<arguments.length;_e++)Q[_e-2]=arguments[_e];return u.prototype[k].apply(g,Q)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function _(a){const u=a.length;if(u>0){const d=Array(u);for(let g=0;g<u;g++)d[g]=a[g];return d}return[]}function R(a,u){for(let g=1;g<arguments.length;g++){const k=arguments[g];var d=typeof k;if(d=d!="object"?d:k?Array.isArray(k)?"array":d:"null",d=="array"||d=="object"&&typeof k.length=="number"){d=a.length||0;const V=k.length||0;a.length=d+V;for(let Q=0;Q<V;Q++)a[d+Q]=k[Q]}else a.push(k)}}class N{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function D(a){o.setTimeout(()=>{throw a},0)}function z(){var a=I;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class q{constructor(){this.h=this.g=null}add(u,d){const g=G.get();g.set(u,d),this.h?this.h.next=g:this.g=g,this.h=g}}var G=new N(()=>new U,a=>a.reset());class U{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let W,K=!1,I=new q,y=()=>{const a=Promise.resolve(void 0);W=()=>{a.then(v)}};function v(){for(var a;a=z();){try{a.h.call(a.g)}catch(d){D(d)}var u=G;u.j(a),u.h<100&&(u.h++,a.next=u.g,u.g=a)}K=!1}function b(){this.u=this.u,this.C=this.C}b.prototype.u=!1,b.prototype.dispose=function(){this.u||(this.u=!0,this.N())},b.prototype[Symbol.dispose]=function(){this.dispose()},b.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function A(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var S=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,u),o.removeEventListener("test",d,u)}catch{}return a})();function T(a){return/^[\s\xa0]*$/.test(a)}function qe(a,u){A.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,u)}p(qe,A),qe.prototype.init=function(a,u){const d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget,u||(d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement)),this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&qe.Z.h.call(this)},qe.prototype.h=function(){qe.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ht="closure_listenable_"+(Math.random()*1e6|0),Me=0;function pe(a,u,d,g,k){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!g,this.ha=k,this.key=++Me,this.da=this.fa=!1}function Ae(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function St(a,u,d){for(const g in a)u.call(d,a[g],g,a)}function an(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function kt(a){const u={};for(const d in a)u[d]=a[d];return u}const it="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Sn(a,u){let d,g;for(let k=1;k<arguments.length;k++){g=arguments[k];for(d in g)a[d]=g[d];for(let V=0;V<it.length;V++)d=it[V],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function Wt(a){this.src=a,this.g={},this.h=0}Wt.prototype.add=function(a,u,d,g,k){const V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);const Q=ft(a,u,g,k);return Q>-1?(u=a[Q],d||(u.fa=!1)):(u=new pe(u,this.src,V,!!g,k),u.fa=d,a.push(u)),u};function zn(a,u){const d=u.type;if(d in a.g){var g=a.g[d],k=Array.prototype.indexOf.call(g,u,void 0),V;(V=k>=0)&&Array.prototype.splice.call(g,k,1),V&&(Ae(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function ft(a,u,d,g){for(let k=0;k<a.length;++k){const V=a[k];if(!V.da&&V.listener==u&&V.capture==!!d&&V.ha==g)return k}return-1}var x="closure_lm_"+(Math.random()*1e6|0),Z={};function Y(a,u,d,g,k){if(Array.isArray(u)){for(let V=0;V<u.length;V++)Y(a,u[V],d,g,k);return null}return d=J(d),a&&a[ht]?a.J(u,d,c(g)?!!g.capture:!1,k):te(a,u,d,!1,g,k)}function te(a,u,d,g,k,V){if(!u)throw Error("Invalid event type");const Q=c(k)?!!k.capture:!!k;let _e=F(a);if(_e||(a[x]=_e=new Wt(a)),d=_e.add(u,d,g,Q,V),d.proxy)return d;if(g=Ne(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)S||(k=Q),k===void 0&&(k=!1),a.addEventListener(u.toString(),g,k);else if(a.attachEvent)a.attachEvent(C(u.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Ne(){function a(d){return u.call(a.src,a.listener,d)}const u=M;return a}function E(a,u,d,g,k){if(Array.isArray(u))for(var V=0;V<u.length;V++)E(a,u[V],d,g,k);else g=c(g)?!!g.capture:!!g,d=J(d),a&&a[ht]?(a=a.i,V=String(u).toString(),V in a.g&&(u=a.g[V],d=ft(u,d,g,k),d>-1&&(Ae(u[d]),Array.prototype.splice.call(u,d,1),u.length==0&&(delete a.g[V],a.h--)))):a&&(a=F(a))&&(u=a.g[u.toString()],a=-1,u&&(a=ft(u,d,g,k)),(d=a>-1?u[a]:null)&&w(d))}function w(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[ht])zn(u.i,a);else{var d=a.type,g=a.proxy;u.removeEventListener?u.removeEventListener(d,g,a.capture):u.detachEvent?u.detachEvent(C(d),g):u.addListener&&u.removeListener&&u.removeListener(g),(d=F(u))?(zn(d,a),d.h==0&&(d.src=null,u[x]=null)):Ae(a)}}}function C(a){return a in Z?Z[a]:Z[a]="on"+a}function M(a,u){if(a.da)a=!0;else{u=new qe(u,this);const d=a.listener,g=a.ha||a.src;a.fa&&w(a),a=d.call(g,u)}return a}function F(a){return a=a[x],a instanceof Wt?a:null}var O="__closure_events_fn_"+(Math.random()*1e9>>>0);function J(a){return typeof a=="function"?a:(a[O]||(a[O]=function(u){return a.handleEvent(u)}),a[O])}function H(){b.call(this),this.i=new Wt(this),this.M=this,this.G=null}p(H,b),H.prototype[ht]=!0,H.prototype.removeEventListener=function(a,u,d,g){E(this,a,u,d,g)};function $(a,u){var d,g=a.G;if(g)for(d=[];g;g=g.G)d.push(g);if(a=a.M,g=u.type||u,typeof u=="string")u=new A(u,a);else if(u instanceof A)u.target=u.target||a;else{var k=u;u=new A(g,a),Sn(u,k)}k=!0;let V,Q;if(d)for(Q=d.length-1;Q>=0;Q--)V=u.g=d[Q],k=j(V,g,!0,u)&&k;if(V=u.g=a,k=j(V,g,!0,u)&&k,k=j(V,g,!1,u)&&k,d)for(Q=0;Q<d.length;Q++)V=u.g=d[Q],k=j(V,g,!1,u)&&k}H.prototype.N=function(){if(H.Z.N.call(this),this.i){var a=this.i;for(const u in a.g){const d=a.g[u];for(let g=0;g<d.length;g++)Ae(d[g]);delete a.g[u],a.h--}}this.G=null},H.prototype.J=function(a,u,d,g){return this.i.add(String(a),u,!1,d,g)},H.prototype.K=function(a,u,d,g){return this.i.add(String(a),u,!0,d,g)};function j(a,u,d,g){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();let k=!0;for(let V=0;V<u.length;++V){const Q=u[V];if(Q&&!Q.da&&Q.capture==d){const _e=Q.listener,Ye=Q.ha||Q.src;Q.fa&&zn(a.i,Q),k=_e.call(Ye,g)!==!1&&k}}return k&&!g.defaultPrevented}function oe(a,u){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:o.setTimeout(a,u||0)}function X(a){a.g=oe(()=>{a.g=null,a.i&&(a.i=!1,X(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class se extends b{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:X(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ae(a){b.call(this),this.h=a,this.g={}}p(ae,b);var ye=[];function Oe(a){St(a.g,function(u,d){this.g.hasOwnProperty(d)&&w(u)},a),a.g={}}ae.prototype.N=function(){ae.Z.N.call(this),Oe(this)},ae.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Se=o.JSON.stringify,dt=o.JSON.parse,pt=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Vt(){}function Nt(){}var Kt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function es(){A.call(this,"d")}p(es,A);function ot(){A.call(this,"c")}p(ot,A);var et={},js=null;function kr(){return js=js||new H}et.Ia="serverreachability";function Bu(a){A.call(this,et.Ia,a)}p(Bu,A);function qs(a){const u=kr();$(u,new Bu(u))}et.STAT_EVENT="statevent";function $u(a,u){A.call(this,et.STAT_EVENT,a),this.stat=u}p($u,A);function wt(a){const u=kr();$(u,new $u(u,a))}et.Ja="timingevent";function ju(a,u){A.call(this,et.Ja,a),this.size=u}p(ju,A);function Hs(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},u)}function zs(){this.g=!0}zs.prototype.ua=function(){this.g=!1};function G_(a,u,d,g,k,V){a.info(function(){if(a.g)if(V){var Q="",_e=V.split("&");for(let De=0;De<_e.length;De++){var Ye=_e[De].split("=");if(Ye.length>1){const tt=Ye[0];Ye=Ye[1];const ln=tt.split("_");Q=ln.length>=2&&ln[1]=="type"?Q+(tt+"="+Ye+"&"):Q+(tt+"=redacted&")}}}else Q=null;else Q=V;return"XMLHTTP REQ ("+g+") [attempt "+k+"]: "+u+`
`+d+`
`+Q})}function Q_(a,u,d,g,k,V,Q){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+k+"]: "+u+`
`+d+`
`+V+" "+Q})}function ts(a,u,d,g){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+Y_(a,d)+(g?" "+g:"")})}function J_(a,u){a.info(function(){return"TIMEOUT: "+u})}zs.prototype.info=function(){};function Y_(a,u){if(!a.g)return u;if(!u)return null;try{const V=JSON.parse(u);if(V){for(a=0;a<V.length;a++)if(Array.isArray(V[a])){var d=V[a];if(!(d.length<2)){var g=d[1];if(Array.isArray(g)&&!(g.length<1)){var k=g[0];if(k!="noop"&&k!="stop"&&k!="close")for(let Q=1;Q<g.length;Q++)g[Q]=""}}}}return Se(V)}catch{return u}}var co={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},qu={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Hu;function sc(){}p(sc,Vt),sc.prototype.g=function(){return new XMLHttpRequest},Hu=new sc;function Ws(a){return encodeURIComponent(String(a))}function X_(a){var u=1;a=a.split(":");const d=[];for(;u>0&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function Wn(a,u,d,g){this.j=a,this.i=u,this.l=d,this.S=g||1,this.V=new ae(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new zu}function zu(){this.i=null,this.g="",this.h=!1}var Wu={},ic={};function oc(a,u,d){a.M=1,a.A=uo(cn(u)),a.u=d,a.R=!0,Ku(a,null)}function Ku(a,u){a.F=Date.now(),lo(a),a.B=cn(a.A);var d=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),oh(d.i,"t",g),a.C=0,d=a.j.L,a.h=new zu,a.g=Ah(a.j,d?u:null,!a.u),a.P>0&&(a.O=new se(h(a.Y,a,a.g),a.P)),u=a.V,d=a.g,g=a.ba;var k="readystatechange";Array.isArray(k)||(k&&(ye[0]=k.toString()),k=ye);for(let V=0;V<k.length;V++){const Q=Y(d,k[V],g||u.handleEvent,!1,u.h||u);if(!Q)break;u.g[Q.key]=Q}u=a.J?kt(a.J):{},a.u?(a.v||(a.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,u)):(a.v="GET",a.g.ea(a.B,a.v,null,u)),qs(),G_(a.i,a.v,a.B,a.l,a.S,a.u)}Wn.prototype.ba=function(a){a=a.target;const u=this.O;u&&Qn(a)==3?u.j():this.Y(a)},Wn.prototype.Y=function(a){try{if(a==this.g)e:{const _e=Qn(this.g),Ye=this.g.ya(),De=this.g.ca();if(!(_e<3)&&(_e!=3||this.g&&(this.h.h||this.g.la()||dh(this.g)))){this.K||_e!=4||Ye==7||(Ye==8||De<=0?qs(3):qs(2)),ac(this);var u=this.g.ca();this.X=u;var d=Z_(this);if(this.o=u==200,Q_(this.i,this.v,this.B,this.l,this.S,_e,u),this.o){if(this.U&&!this.L){t:{if(this.g){var g,k=this.g;if((g=k.g?k.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(g)){var V=g;break t}}V=null}if(a=V)ts(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,cc(this,a);else{this.o=!1,this.m=3,wt(12),Vr(this),Ks(this);break e}}if(this.R){a=!0;let tt;for(;!this.K&&this.C<d.length;)if(tt=ey(this,d),tt==ic){_e==4&&(this.m=4,wt(14),a=!1),ts(this.i,this.l,null,"[Incomplete Response]");break}else if(tt==Wu){this.m=4,wt(15),ts(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else ts(this.i,this.l,tt,null),cc(this,tt);if(Gu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),_e!=4||d.length!=0||this.h.h||(this.m=1,wt(16),a=!1),this.o=this.o&&a,!a)ts(this.i,this.l,d,"[Invalid Chunked Response]"),Vr(this),Ks(this);else if(d.length>0&&!this.W){this.W=!0;var Q=this.j;Q.g==this&&Q.aa&&!Q.P&&(Q.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),mc(Q),Q.P=!0,wt(11))}}else ts(this.i,this.l,d,null),cc(this,d);_e==4&&Vr(this),this.o&&!this.K&&(_e==4?Eh(this.j,this):(this.o=!1,lo(this)))}else py(this.g),u==400&&d.indexOf("Unknown SID")>0?(this.m=3,wt(12)):(this.m=0,wt(13)),Vr(this),Ks(this)}}}catch{}finally{}};function Z_(a){if(!Gu(a))return a.g.la();const u=dh(a.g);if(u==="")return"";let d="";const g=u.length,k=Qn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Vr(a),Ks(a),"";a.h.i=new o.TextDecoder}for(let V=0;V<g;V++)a.h.h=!0,d+=a.h.i.decode(u[V],{stream:!(k&&V==g-1)});return u.length=0,a.h.g+=d,a.C=0,a.h.g}function Gu(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function ey(a,u){var d=a.C,g=u.indexOf(`
`,d);return g==-1?ic:(d=Number(u.substring(d,g)),isNaN(d)?Wu:(g+=1,g+d>u.length?ic:(u=u.slice(g,g+d),a.C=g+d,u)))}Wn.prototype.cancel=function(){this.K=!0,Vr(this)};function lo(a){a.T=Date.now()+a.H,Qu(a,a.H)}function Qu(a,u){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Hs(h(a.aa,a),u)}function ac(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Wn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(J_(this.i,this.B),this.M!=2&&(qs(),wt(17)),Vr(this),this.m=2,Ks(this)):Qu(this,this.T-a)};function Ks(a){a.j.I==0||a.K||Eh(a.j,a)}function Vr(a){ac(a);var u=a.O;u&&typeof u.dispose=="function"&&u.dispose(),a.O=null,Oe(a.V),a.g&&(u=a.g,a.g=null,u.abort(),u.dispose())}function cc(a,u){try{var d=a.j;if(d.I!=0&&(d.g==a||lc(d.h,a))){if(!a.L&&lc(d.h,a)&&d.I==3){try{var g=d.Ba.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var k=g;if(k[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)mo(d),po(d);else break e;gc(d),wt(18)}}else d.xa=k[1],0<d.xa-d.K&&k[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=Hs(h(d.Va,d),6e3));Xu(d.h)<=1&&d.ta&&(d.ta=void 0)}else Or(d,11)}else if((a.L||d.g==a)&&mo(d),!T(u))for(k=d.Ba.g.parse(u),u=0;u<k.length;u++){let De=k[u];const tt=De[0];if(!(tt<=d.K))if(d.K=tt,De=De[1],d.I==2)if(De[0]=="c"){d.M=De[1],d.ba=De[2];const ln=De[3];ln!=null&&(d.ka=ln,d.j.info("VER="+d.ka));const Dr=De[4];Dr!=null&&(d.za=Dr,d.j.info("SVER="+d.za));const Jn=De[5];Jn!=null&&typeof Jn=="number"&&Jn>0&&(g=1.5*Jn,d.O=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const Yn=a.g;if(Yn){const yo=Yn.g?Yn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(yo){var V=g.h;V.g||yo.indexOf("spdy")==-1&&yo.indexOf("quic")==-1&&yo.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(uc(V,V.h),V.h=null))}if(g.G){const _c=Yn.g?Yn.g.getResponseHeader("X-HTTP-Session-Id"):null;_c&&(g.wa=_c,Ue(g.J,g.G,_c))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),g=d;var Q=a;if(g.na=wh(g,g.L?g.ba:null,g.W),Q.L){Zu(g.h,Q);var _e=Q,Ye=g.O;Ye&&(_e.H=Ye),_e.D&&(ac(_e),lo(_e)),g.g=Q}else yh(g);d.i.length>0&&go(d)}else De[0]!="stop"&&De[0]!="close"||Or(d,7);else d.I==3&&(De[0]=="stop"||De[0]=="close"?De[0]=="stop"?Or(d,7):pc(d):De[0]!="noop"&&d.l&&d.l.qa(De),d.A=0)}}qs(4)}catch{}}var ty=class{constructor(a,u){this.g=a,this.map=u}};function Ju(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Yu(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Xu(a){return a.h?1:a.g?a.g.size:0}function lc(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function uc(a,u){a.g?a.g.add(u):a.h=u}function Zu(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}Ju.prototype.cancel=function(){if(this.i=eh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function eh(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.G);return u}return _(a.i)}var th=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ny(a,u){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const g=a[d].indexOf("=");let k,V=null;g>=0?(k=a[d].substring(0,g),V=a[d].substring(g+1)):k=a[d],u(k,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function Kn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;a instanceof Kn?(this.l=a.l,Gs(this,a.j),this.o=a.o,this.g=a.g,Qs(this,a.u),this.h=a.h,hc(this,ah(a.i)),this.m=a.m):a&&(u=String(a).match(th))?(this.l=!1,Gs(this,u[1]||"",!0),this.o=Js(u[2]||""),this.g=Js(u[3]||"",!0),Qs(this,u[4]),this.h=Js(u[5]||"",!0),hc(this,u[6]||"",!0),this.m=Js(u[7]||"")):(this.l=!1,this.i=new Xs(null,this.l))}Kn.prototype.toString=function(){const a=[];var u=this.j;u&&a.push(Ys(u,nh,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Ys(u,nh,!0),"@"),a.push(Ws(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Ys(d,d.charAt(0)=="/"?iy:sy,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Ys(d,ay)),a.join("")},Kn.prototype.resolve=function(a){const u=cn(this);let d=!!a.j;d?Gs(u,a.j):d=!!a.o,d?u.o=a.o:d=!!a.g,d?u.g=a.g:d=a.u!=null;var g=a.h;if(d)Qs(u,a.u);else if(d=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var k=u.h.lastIndexOf("/");k!=-1&&(g=u.h.slice(0,k+1)+g)}if(k=g,k==".."||k==".")g="";else if(k.indexOf("./")!=-1||k.indexOf("/.")!=-1){g=k.lastIndexOf("/",0)==0,k=k.split("/");const V=[];for(let Q=0;Q<k.length;){const _e=k[Q++];_e=="."?g&&Q==k.length&&V.push(""):_e==".."?((V.length>1||V.length==1&&V[0]!="")&&V.pop(),g&&Q==k.length&&V.push("")):(V.push(_e),g=!0)}g=V.join("/")}else g=k}return d?u.h=g:d=a.i.toString()!=="",d?hc(u,ah(a.i)):d=!!a.m,d&&(u.m=a.m),u};function cn(a){return new Kn(a)}function Gs(a,u,d){a.j=d?Js(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function Qs(a,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);a.u=u}else a.u=null}function hc(a,u,d){u instanceof Xs?(a.i=u,cy(a.i,a.l)):(d||(u=Ys(u,oy)),a.i=new Xs(u,a.l))}function Ue(a,u,d){a.i.set(u,d)}function uo(a){return Ue(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Js(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ys(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,ry),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function ry(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var nh=/[#\/\?@]/g,sy=/[#\?:]/g,iy=/[#\?]/g,oy=/[#\?@]/g,ay=/#/g;function Xs(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Nr(a){a.g||(a.g=new Map,a.h=0,a.i&&ny(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}t=Xs.prototype,t.add=function(a,u){Nr(this),this.i=null,a=ns(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function rh(a,u){Nr(a),u=ns(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function sh(a,u){return Nr(a),u=ns(a,u),a.g.has(u)}t.forEach=function(a,u){Nr(this),this.g.forEach(function(d,g){d.forEach(function(k){a.call(u,k,g,this)},this)},this)};function ih(a,u){Nr(a);let d=[];if(typeof u=="string")sh(a,u)&&(d=d.concat(a.g.get(ns(a,u))));else for(a=Array.from(a.g.values()),u=0;u<a.length;u++)d=d.concat(a[u]);return d}t.set=function(a,u){return Nr(this),this.i=null,a=ns(this,a),sh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},t.get=function(a,u){return a?(a=ih(this,a),a.length>0?String(a[0]):u):u};function oh(a,u,d){rh(a,u),d.length>0&&(a.i=null,a.g.set(ns(a,u),_(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(let g=0;g<u.length;g++){var d=u[g];const k=Ws(d);d=ih(this,d);for(let V=0;V<d.length;V++){let Q=k;d[V]!==""&&(Q+="="+Ws(d[V])),a.push(Q)}}return this.i=a.join("&")};function ah(a){const u=new Xs;return u.i=a.i,a.g&&(u.g=new Map(a.g),u.h=a.h),u}function ns(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function cy(a,u){u&&!a.j&&(Nr(a),a.i=null,a.g.forEach(function(d,g){const k=g.toLowerCase();g!=k&&(rh(this,g),oh(this,k,d))},a)),a.j=u}function ly(a,u){const d=new zs;if(o.Image){const g=new Image;g.onload=f(Gn,d,"TestLoadImage: loaded",!0,u,g),g.onerror=f(Gn,d,"TestLoadImage: error",!1,u,g),g.onabort=f(Gn,d,"TestLoadImage: abort",!1,u,g),g.ontimeout=f(Gn,d,"TestLoadImage: timeout",!1,u,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else u(!1)}function uy(a,u){const d=new zs,g=new AbortController,k=setTimeout(()=>{g.abort(),Gn(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:g.signal}).then(V=>{clearTimeout(k),V.ok?Gn(d,"TestPingServer: ok",!0,u):Gn(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(k),Gn(d,"TestPingServer: error",!1,u)})}function Gn(a,u,d,g,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),g(d)}catch{}}function hy(){this.g=new pt}function fc(a){this.i=a.Sb||null,this.h=a.ab||!1}p(fc,Vt),fc.prototype.g=function(){return new ho(this.i,this.h)};function ho(a,u){H.call(this),this.H=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(ho,H),t=ho.prototype,t.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=u,this.readyState=1,ei(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(u.body=a),(this.H||o).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Zs(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ei(this)),this.g&&(this.readyState=3,ei(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;ch(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function ch(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Zs(this):ei(this),this.readyState==3&&ch(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Zs(this))},t.Na=function(a){this.g&&(this.response=a,Zs(this))},t.ga=function(){this.g&&Zs(this)};function Zs(a){a.readyState=4,a.l=null,a.j=null,a.B=null,ei(a)}t.setRequestHeader=function(a,u){this.A.append(a,u)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function ei(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ho.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function lh(a){let u="";return St(a,function(d,g){u+=g,u+=":",u+=d,u+=`\r
`}),u}function dc(a,u,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=lh(d),typeof a=="string"?d!=null&&Ws(d):Ue(a,u,d))}function He(a){H.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(He,H);var fy=/^https?$/i,dy=["POST","PUT"];t=He.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,u,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Hu.g(),this.g.onreadystatechange=m(h(this.Ca,this));try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(V){uh(this,V);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var k in g)d.set(k,g[k]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const V of g.keys())d.set(V,g.get(V));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(V=>V.toLowerCase()=="content-type"),k=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(dy,u,void 0)>=0)||g||k||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,Q]of d)this.g.setRequestHeader(V,Q);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(V){uh(this,V)}};function uh(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.o=5,hh(a),fo(a)}function hh(a){a.A||(a.A=!0,$(a,"complete"),$(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,$(this,"complete"),$(this,"abort"),fo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),fo(this,!0)),He.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?fh(this):this.Xa())},t.Xa=function(){fh(this)};function fh(a){if(a.h&&typeof i<"u"){if(a.v&&Qn(a)==4)setTimeout(a.Ca.bind(a),0);else if($(a,"readystatechange"),Qn(a)==4){a.h=!1;try{const V=a.ca();e:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var g;if(g=V===0){let Q=String(a.D).match(th)[1]||null;!Q&&o.self&&o.self.location&&(Q=o.self.location.protocol.slice(0,-1)),g=!fy.test(Q?Q.toLowerCase():"")}d=g}if(d)$(a,"complete"),$(a,"success");else{a.o=6;try{var k=Qn(a)>2?a.g.statusText:""}catch{k=""}a.l=k+" ["+a.ca()+"]",hh(a)}}finally{fo(a)}}}}function fo(a,u){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,u||$(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Qn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Qn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),dt(u)}};function dh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function py(a){const u={};a=(a.g&&Qn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(T(a[g]))continue;var d=X_(a[g]);const k=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const V=u[k]||[];u[k]=V,V.push(d)}an(u,function(g){return g.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function ti(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function ph(a){this.za=0,this.i=[],this.j=new zs,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=ti("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=ti("baseRetryDelayMs",5e3,a),this.Za=ti("retryDelaySeedMs",1e4,a),this.Ta=ti("forwardChannelMaxRetries",2,a),this.va=ti("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Ju(a&&a.concurrentRequestLimit),this.Ba=new hy,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=ph.prototype,t.ka=8,t.I=1,t.connect=function(a,u,d,g){wt(0),this.W=a,this.H=u||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.J=wh(this,null,this.W),go(this)};function pc(a){if(gh(a),a.I==3){var u=a.V++,d=cn(a.J);if(Ue(d,"SID",a.M),Ue(d,"RID",u),Ue(d,"TYPE","terminate"),ni(a,d),u=new Wn(a,a.j,u),u.M=2,u.A=uo(cn(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(u.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=u.A,d=!0),d||(u.g=Ah(u.j,null),u.g.ea(u.A)),u.F=Date.now(),lo(u)}Ih(a)}function po(a){a.g&&(mc(a),a.g.cancel(),a.g=null)}function gh(a){po(a),a.v&&(o.clearTimeout(a.v),a.v=null),mo(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function go(a){if(!Yu(a.h)&&!a.m){a.m=!0;var u=a.Ea;W||y(),K||(W(),K=!0),I.add(u,a),a.D=0}}function gy(a,u){return Xu(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=u.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Hs(h(a.Ea,a,u),Th(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const k=new Wn(this,this.j,a);let V=this.o;if(this.U&&(V?(V=kt(V),Sn(V,this.U)):V=this.U),this.u!==null||this.R||(k.J=V,V=null),this.S)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,u>4096){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=_h(this,k,u),d=cn(this.J),Ue(d,"RID",a),Ue(d,"CVER",22),this.G&&Ue(d,"X-HTTP-Session-Id",this.G),ni(this,d),V&&(this.R?u="headers="+Ws(lh(V))+"&"+u:this.u&&dc(d,this.u,V)),uc(this.h,k),this.Ra&&Ue(d,"TYPE","init"),this.S?(Ue(d,"$req",u),Ue(d,"SID","null"),k.U=!0,oc(k,d,null)):oc(k,d,u),this.I=2}}else this.I==3&&(a?mh(this,a):this.i.length==0||Yu(this.h)||mh(this))};function mh(a,u){var d;u?d=u.l:d=a.V++;const g=cn(a.J);Ue(g,"SID",a.M),Ue(g,"RID",d),Ue(g,"AID",a.K),ni(a,g),a.u&&a.o&&dc(g,a.u,a.o),d=new Wn(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),u&&(a.i=u.G.concat(a.i)),u=_h(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),uc(a.h,d),oc(d,g,u)}function ni(a,u){a.H&&St(a.H,function(d,g){Ue(u,g,d)}),a.l&&St({},function(d,g){Ue(u,g,d)})}function _h(a,u,d){d=Math.min(a.i.length,d);const g=a.l?h(a.l.Ka,a.l,a):null;e:{var k=a.i;let _e=-1;for(;;){const Ye=["count="+d];_e==-1?d>0?(_e=k[0].g,Ye.push("ofs="+_e)):_e=0:Ye.push("ofs="+_e);let De=!0;for(let tt=0;tt<d;tt++){var V=k[tt].g;const ln=k[tt].map;if(V-=_e,V<0)_e=Math.max(0,k[tt].g-100),De=!1;else try{V="req"+V+"_"||"";try{var Q=ln instanceof Map?ln:Object.entries(ln);for(const[Dr,Jn]of Q){let Yn=Jn;c(Jn)&&(Yn=Se(Jn)),Ye.push(V+Dr+"="+encodeURIComponent(Yn))}}catch(Dr){throw Ye.push(V+"type="+encodeURIComponent("_badmap")),Dr}}catch{g&&g(ln)}}if(De){Q=Ye.join("&");break e}}Q=void 0}return a=a.i.splice(0,d),u.G=a,Q}function yh(a){if(!a.g&&!a.v){a.Y=1;var u=a.Da;W||y(),K||(W(),K=!0),I.add(u,a),a.A=0}}function gc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Hs(h(a.Da,a),Th(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,vh(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Hs(h(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,wt(10),po(this),vh(this))};function mc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function vh(a){a.g=new Wn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var u=cn(a.na);Ue(u,"RID","rpc"),Ue(u,"SID",a.M),Ue(u,"AID",a.K),Ue(u,"CI",a.F?"0":"1"),!a.F&&a.ia&&Ue(u,"TO",a.ia),Ue(u,"TYPE","xmlhttp"),ni(a,u),a.u&&a.o&&dc(u,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=uo(cn(u)),d.u=null,d.R=!0,Ku(d,a)}t.Va=function(){this.C!=null&&(this.C=null,po(this),gc(this),wt(19))};function mo(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Eh(a,u){var d=null;if(a.g==u){mo(a),mc(a),a.g=null;var g=2}else if(lc(a.h,u))d=u.G,Zu(a.h,u),g=1;else return;if(a.I!=0){if(u.o)if(g==1){d=u.u?u.u.length:0,u=Date.now()-u.F;var k=a.D;g=kr(),$(g,new ju(g,d)),go(a)}else yh(a);else if(k=u.m,k==3||k==0&&u.X>0||!(g==1&&gy(a,u)||g==2&&gc(a)))switch(d&&d.length>0&&(u=a.h,u.i=u.i.concat(d)),k){case 1:Or(a,5);break;case 4:Or(a,10);break;case 3:Or(a,6);break;default:Or(a,2)}}}function Th(a,u){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*u}function Or(a,u){if(a.j.info("Error code "+u),u==2){var d=h(a.bb,a),g=a.Ua;const k=!g;g=new Kn(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Gs(g,"https"),uo(g),k?ly(g.toString(),d):uy(g.toString(),d)}else wt(2);a.I=0,a.l&&a.l.pa(u),Ih(a),gh(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),wt(2)):(this.j.info("Failed to ping google.com"),wt(1))};function Ih(a){if(a.I=0,a.ja=[],a.l){const u=eh(a.h);(u.length!=0||a.i.length!=0)&&(R(a.ja,u),R(a.ja,a.i),a.h.i.length=0,_(a.i),a.i.length=0),a.l.oa()}}function wh(a,u,d){var g=d instanceof Kn?cn(d):new Kn(d);if(g.g!="")u&&(g.g=u+"."+g.g),Qs(g,g.u);else{var k=o.location;g=k.protocol,u=u?u+"."+k.hostname:k.hostname,k=+k.port;const V=new Kn(null);g&&Gs(V,g),u&&(V.g=u),k&&Qs(V,k),d&&(V.h=d),g=V}return d=a.G,u=a.wa,d&&u&&Ue(g,d,u),Ue(g,"VER",a.ka),ni(a,g),g}function Ah(a,u,d){if(u&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Aa&&!a.ma?new He(new fc({ab:d})):new He(a.ma),u.Fa(a.L),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function bh(){}t=bh.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function _o(){}_o.prototype.g=function(a,u){return new Ot(a,u)};function Ot(a,u){H.call(this),this.g=new ph(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(a?a["X-WebChannel-Client-Profile"]=u.sa:a={"X-WebChannel-Client-Profile":u.sa}),this.g.U=a,(a=u&&u.Qb)&&!T(a)&&(this.g.u=a),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!T(u)&&(this.g.G=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new rs(this)}p(Ot,H),Ot.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ot.prototype.close=function(){pc(this.g)},Ot.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=Se(a),a=d);u.i.push(new ty(u.Ya++,a)),u.I==3&&go(u)},Ot.prototype.N=function(){this.g.l=null,delete this.j,pc(this.g),delete this.g,Ot.Z.N.call(this)};function Sh(a){es.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const d in u){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}p(Sh,es);function Rh(){ot.call(this),this.status=1}p(Rh,ot);function rs(a){this.g=a}p(rs,bh),rs.prototype.ra=function(){$(this.g,"a")},rs.prototype.qa=function(a){$(this.g,new Sh(a))},rs.prototype.pa=function(a){$(this.g,new Rh)},rs.prototype.oa=function(){$(this.g,"b")},_o.prototype.createWebChannel=_o.prototype.g,Ot.prototype.send=Ot.prototype.o,Ot.prototype.open=Ot.prototype.m,Ot.prototype.close=Ot.prototype.close,wm=function(){return new _o},Im=function(){return kr()},Tm=et,pl={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},co.NO_ERROR=0,co.TIMEOUT=8,co.HTTP_ERROR=6,Mo=co,qu.COMPLETE="complete",Em=qu,Nt.EventType=Kt,Kt.OPEN="a",Kt.CLOSE="b",Kt.ERROR="c",Kt.MESSAGE="d",H.prototype.listen=H.prototype.J,li=Nt,He.prototype.listenOnce=He.prototype.K,He.prototype.getLastError=He.prototype.Ha,He.prototype.getLastErrorCode=He.prototype.ya,He.prototype.getStatus=He.prototype.ca,He.prototype.getResponseJson=He.prototype.La,He.prototype.getResponseText=He.prototype.la,He.prototype.send=He.prototype.ea,He.prototype.setWithCredentials=He.prototype.Fa,vm=He}).apply(typeof wo<"u"?wo:typeof self<"u"?self:typeof window<"u"?window:{});const id="@firebase/firestore",od="4.9.2";/**
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
 */class _t{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}_t.UNAUTHENTICATED=new _t(null),_t.GOOGLE_CREDENTIALS=new _t("google-credentials-uid"),_t.FIRST_PARTY=new _t("first-party-uid"),_t.MOCK_USER=new _t("mock-user");/**
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
 */const Wr=new Zl("@firebase/firestore");function cs(){return Wr.logLevel}function ee(t,...e){if(Wr.logLevel<=Ee.DEBUG){const n=e.map(uu);Wr.debug(`Firestore (${Fs}): ${t}`,...n)}}function Un(t,...e){if(Wr.logLevel<=Ee.ERROR){const n=e.map(uu);Wr.error(`Firestore (${Fs}): ${t}`,...n)}}function Cs(t,...e){if(Wr.logLevel<=Ee.WARN){const n=e.map(uu);Wr.warn(`Firestore (${Fs}): ${t}`,...n)}}function uu(t){if(typeof t=="string")return t;try{/**
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
 */function le(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Am(t,r,n)}function Am(t,e,n){let r=`FIRESTORE (${Fs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Un(r),new Error(r)}function Ve(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Am(e,s,r)}function de(t,e){return t}/**
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
 */const B={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ne extends Hn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class yr{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
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
 */class bm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class oS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(_t.UNAUTHENTICATED)))}shutdown(){}}class aS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class cS{constructor(e){this.t=e,this.currentUser=_t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ve(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new yr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new yr,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const l=i;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new yr)}}),0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==e?(ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ve(typeof r.accessToken=="string",31837,{l:r}),new bm(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ve(e===null||typeof e=="string",2055,{h:e}),new _t(e)}}class lS{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=_t.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class uS{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new lS(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(_t.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ad{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class hS{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Jt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Ve(this.o===void 0,3512);const r=i=>{i.error!=null&&ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,ee("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new ad(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(Ve(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new ad(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function fS(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class hu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=fS(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function Te(t,e){return t<e?-1:t>e?1:0}function gl(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return Uc(s)===Uc(i)?Te(s,i):Uc(s)?1:-1}return Te(t.length,e.length)}const dS=55296,pS=57343;function Uc(t){const e=t.charCodeAt(0);return e>=dS&&e<=pS}function Ps(t,e,n){return t.length===e.length&&t.every(((r,s)=>n(r,e[s])))}/**
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
 */const cd="__name__";class fn{constructor(e,n,r){n===void 0?n=0:n>e.length&&le(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&le(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return fn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof fn?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=fn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return Te(e.length,n.length)}static compareSegments(e,n){const r=fn.isNumericId(e),s=fn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?fn.extractNumericId(e).compare(fn.extractNumericId(n)):gl(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return _r.fromString(e.substring(4,e.length-2))}}class Be extends fn{construct(e,n,r){return new Be(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ne(B.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((s=>s.length>0)))}return new Be(n)}static emptyPath(){return new Be([])}}const gS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class lt extends fn{construct(e,n,r){return new lt(e,n,r)}static isValidIdentifier(e){return gS.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),lt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===cd}static keyField(){return new lt([cd])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ne(B.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new ne(B.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ne(B.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new ne(B.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new lt(n)}static emptyPath(){return new lt([])}}/**
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
 */class ie{constructor(e){this.path=e}static fromPath(e){return new ie(Be.fromString(e))}static fromName(e){return new ie(Be.fromString(e).popFirst(5))}static empty(){return new ie(Be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Be.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Be.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ie(new Be(e.slice()))}}/**
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
 */function Sm(t,e,n){if(!n)throw new ne(B.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function mS(t,e,n,r){if(e===!0&&r===!0)throw new ne(B.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ld(t){if(!ie.isDocumentKey(t))throw new ne(B.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ud(t){if(ie.isDocumentKey(t))throw new ne(B.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Rm(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function fu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":le(12329,{type:typeof t})}function Bi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ne(B.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=fu(t);throw new ne(B.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Qe(t,e){const n={typeString:t};return e&&(n.value=e),n}function ro(t,e){if(!Rm(t))throw new ne(B.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new ne(B.INVALID_ARGUMENT,n);return!0}/**
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
 */const hd=-62135596800,fd=1e6;class $e{static now(){return $e.fromMillis(Date.now())}static fromDate(e){return $e.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*fd);return new $e(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ne(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ne(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<hd)throw new ne(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ne(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/fd}_compareTo(e){return this.seconds===e.seconds?Te(this.nanoseconds,e.nanoseconds):Te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:$e._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ro(e,$e._jsonSchema))return new $e(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-hd;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}$e._jsonSchemaVersion="firestore/timestamp/1.0",$e._jsonSchema={type:Qe("string",$e._jsonSchemaVersion),seconds:Qe("number"),nanoseconds:Qe("number")};/**
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
 */class fe{static fromTimestamp(e){return new fe(e)}static min(){return new fe(new $e(0,0))}static max(){return new fe(new $e(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const $i=-1;function _S(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=fe.fromTimestamp(r===1e9?new $e(n+1,0):new $e(n,r));return new wr(s,ie.empty(),e)}function yS(t){return new wr(t.readTime,t.key,$i)}class wr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new wr(fe.min(),ie.empty(),$i)}static max(){return new wr(fe.max(),ie.empty(),$i)}}function vS(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ie.comparator(t.documentKey,e.documentKey),n!==0?n:Te(t.largestBatchId,e.largestBatchId))}/**
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
 */const ES="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class TS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Us(t){if(t.code!==B.FAILED_PRECONDITION||t.message!==ES)throw t;ee("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&le(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):L.reject(n)}static resolve(e){return new L(((n,r)=>{n(e)}))}static reject(e){return new L(((n,r)=>{r(e)}))}static waitFor(e){return new L(((n,r)=>{let s=0,i=0,o=!1;e.forEach((c=>{++s,c.next((()=>{++i,o&&i===s&&n()}),(l=>r(l)))})),o=!0,i===s&&n()}))}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next((s=>s?L.resolve(s):r()));return n}static forEach(e,n){const r=[];return e.forEach(((s,i)=>{r.push(n.call(this,s,i))})),this.waitFor(r)}static mapArray(e,n){return new L(((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;n(e[h]).next((f=>{o[h]=f,++c,c===i&&r(o)}),(f=>s(f)))}}))}static doWhile(e,n){return new L(((r,s)=>{const i=()=>{e()===!0?n().next((()=>{i()}),s):r()};i()}))}}function IS(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Bs(t){return t.name==="IndexedDbTransactionError"}/**
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
 */const du=-1;function qa(t){return t==null}function la(t){return t===0&&1/t==-1/0}function wS(t){return typeof t=="number"&&Number.isInteger(t)&&!la(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const Cm="";function AS(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=dd(e)),e=bS(t.get(n),e);return dd(e)}function bS(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Cm:n+="";break;default:n+=i}}return n}function dd(t){return t+Cm+""}/**
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
 */function pd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Jr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Pm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class je{constructor(e,n){this.comparator=e,this.root=n||at.EMPTY}insert(e,n){return new je(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,at.BLACK,null,null))}remove(e){return new je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,at.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,r)=>(e(n,r),!1)))}toString(){const e=[];return this.inorderTraversal(((n,r)=>(e.push(`${n}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ao(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ao(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ao(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ao(this.root,e,this.comparator,!0)}}class Ao{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class at{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??at.RED,this.left=s??at.EMPTY,this.right=i??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new at(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return at.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw le(43730,{key:this.key,value:this.value});if(this.right.isRed())throw le(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw le(27949);return e+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw le(57766)}get value(){throw le(16141)}get color(){throw le(16727)}get left(){throw le(29726)}get right(){throw le(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new at(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ze{constructor(e){this.comparator=e,this.data=new je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,r)=>(e(n),!1)))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new gd(this.data.getIterator())}getIteratorFrom(e){return new gd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((r=>{n=n.add(r)})),n}isEqual(e){if(!(e instanceof Ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new Ze(this.comparator);return n.data=e,n}}class gd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Xt{constructor(e){this.fields=e,e.sort(lt.comparator)}static empty(){return new Xt([])}unionWith(e){let n=new Ze(lt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Xt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ps(this.fields,e.fields,((n,r)=>n.isEqual(r)))}}/**
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
 */class km extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ut{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new km("Invalid base64 string: "+i):i}})(e);return new ut(n)}static fromUint8Array(e){const n=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new ut(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ut.EMPTY_BYTE_STRING=new ut("");const SS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ar(t){if(Ve(!!t,39018),typeof t=="string"){let e=0;const n=SS.exec(t);if(Ve(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:We(t.seconds),nanos:We(t.nanos)}}function We(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function br(t){return typeof t=="string"?ut.fromBase64String(t):ut.fromUint8Array(t)}/**
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
 */const Vm="server_timestamp",Nm="__type__",Om="__previous_value__",Dm="__local_write_time__";function pu(t){return(t?.mapValue?.fields||{})[Nm]?.stringValue===Vm}function Ha(t){const e=t.mapValue.fields[Om];return pu(e)?Ha(e):e}function ji(t){const e=Ar(t.mapValue.fields[Dm].timestampValue);return new $e(e.seconds,e.nanos)}/**
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
 */class RS{constructor(e,n,r,s,i,o,c,l,h,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=f}}const ua="(default)";class qi{constructor(e,n){this.projectId=e,this.database=n||ua}static empty(){return new qi("","")}get isDefaultDatabase(){return this.database===ua}isEqual(e){return e instanceof qi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const xm="__type__",CS="__max__",bo={mapValue:{}},Mm="__vector__",ha="value";function Sr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?pu(t)?4:kS(t)?9007199254740991:PS(t)?10:11:le(28295,{value:t})}function wn(t,e){if(t===e)return!0;const n=Sr(t);if(n!==Sr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ji(t).isEqual(ji(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Ar(s.timestampValue),c=Ar(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(s,i){return br(s.bytesValue).isEqual(br(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(s,i){return We(s.geoPointValue.latitude)===We(i.geoPointValue.latitude)&&We(s.geoPointValue.longitude)===We(i.geoPointValue.longitude)})(t,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return We(s.integerValue)===We(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=We(s.doubleValue),c=We(i.doubleValue);return o===c?la(o)===la(c):isNaN(o)&&isNaN(c)}return!1})(t,e);case 9:return Ps(t.arrayValue.values||[],e.arrayValue.values||[],wn);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(pd(o)!==pd(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!wn(o[l],c[l])))return!1;return!0})(t,e);default:return le(52216,{left:t})}}function Hi(t,e){return(t.values||[]).find((n=>wn(n,e)))!==void 0}function ks(t,e){if(t===e)return 0;const n=Sr(t),r=Sr(e);if(n!==r)return Te(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Te(t.booleanValue,e.booleanValue);case 2:return(function(i,o){const c=We(i.integerValue||i.doubleValue),l=We(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(t,e);case 3:return md(t.timestampValue,e.timestampValue);case 4:return md(ji(t),ji(e));case 5:return gl(t.stringValue,e.stringValue);case 6:return(function(i,o){const c=br(i),l=br(o);return c.compareTo(l)})(t.bytesValue,e.bytesValue);case 7:return(function(i,o){const c=i.split("/"),l=o.split("/");for(let h=0;h<c.length&&h<l.length;h++){const f=Te(c[h],l[h]);if(f!==0)return f}return Te(c.length,l.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,o){const c=Te(We(i.latitude),We(o.latitude));return c!==0?c:Te(We(i.longitude),We(o.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return _d(t.arrayValue,e.arrayValue);case 10:return(function(i,o){const c=i.fields||{},l=o.fields||{},h=c[ha]?.arrayValue,f=l[ha]?.arrayValue,p=Te(h?.values?.length||0,f?.values?.length||0);return p!==0?p:_d(h,f)})(t.mapValue,e.mapValue);case 11:return(function(i,o){if(i===bo.mapValue&&o===bo.mapValue)return 0;if(i===bo.mapValue)return 1;if(o===bo.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=o.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const m=gl(l[p],f[p]);if(m!==0)return m;const _=ks(c[l[p]],h[f[p]]);if(_!==0)return _}return Te(l.length,f.length)})(t.mapValue,e.mapValue);default:throw le(23264,{he:n})}}function md(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Te(t,e);const n=Ar(t),r=Ar(e),s=Te(n.seconds,r.seconds);return s!==0?s:Te(n.nanos,r.nanos)}function _d(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=ks(n[s],r[s]);if(i)return i}return Te(n.length,r.length)}function Vs(t){return ml(t)}function ml(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const r=Ar(n);return`time(${r.seconds},${r.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return br(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return ie.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=ml(i);return r+"]"})(t.arrayValue):"mapValue"in t?(function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${ml(n.fields[o])}`;return s+"}"})(t.mapValue):le(61005,{value:t})}function Lo(t){switch(Sr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ha(t);return e?16+Lo(e):16;case 5:return 2*t.stringValue.length;case 6:return br(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+Lo(i)),0)})(t.arrayValue);case 10:case 11:return(function(r){let s=0;return Jr(r.fields,((i,o)=>{s+=i.length+Lo(o)})),s})(t.mapValue);default:throw le(13486,{value:t})}}function _l(t){return!!t&&"integerValue"in t}function gu(t){return!!t&&"arrayValue"in t}function yd(t){return!!t&&"nullValue"in t}function vd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Fo(t){return!!t&&"mapValue"in t}function PS(t){return(t?.mapValue?.fields||{})[xm]?.stringValue===Mm}function Si(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Jr(t.mapValue.fields,((n,r)=>e.mapValue.fields[n]=Si(r))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Si(t.arrayValue.values[n]);return e}return{...t}}function kS(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===CS}/**
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
 */class Bt{constructor(e){this.value=e}static empty(){return new Bt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Fo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Si(n)}setAll(e){let n=lt.emptyPath(),r={},s=[];e.forEach(((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=Si(o):s.push(c.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Fo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return wn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Fo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Jr(n,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new Bt(Si(this.value))}}function Lm(t){const e=[];return Jr(t.fields,((n,r)=>{const s=new lt([n]);if(Fo(r)){const i=Lm(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new Xt(e)}/**
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
 */class vt{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new vt(e,0,fe.min(),fe.min(),fe.min(),Bt.empty(),0)}static newFoundDocument(e,n,r,s){return new vt(e,1,n,fe.min(),r,s,0)}static newNoDocument(e,n){return new vt(e,2,n,fe.min(),fe.min(),Bt.empty(),0)}static newUnknownDocument(e,n){return new vt(e,3,n,fe.min(),fe.min(),Bt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(fe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Bt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=fe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof vt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new vt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class fa{constructor(e,n){this.position=e,this.inclusive=n}}function Ed(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ie.comparator(ie.fromName(o.referenceValue),n.key):r=ks(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Td(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!wn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class da{constructor(e,n="asc"){this.field=e,this.dir=n}}function VS(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Fm{}class Xe extends Fm{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new OS(e,n,r):n==="array-contains"?new MS(e,r):n==="in"?new LS(e,r):n==="not-in"?new FS(e,r):n==="array-contains-any"?new US(e,r):new Xe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new DS(e,r):new xS(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ks(n,this.value)):n!==null&&Sr(this.value)===Sr(n)&&this.matchesComparison(ks(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return le(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class An extends Fm{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new An(e,n)}matches(e){return Um(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Um(t){return t.op==="and"}function Bm(t){return NS(t)&&Um(t)}function NS(t){for(const e of t.filters)if(e instanceof An)return!1;return!0}function yl(t){if(t instanceof Xe)return t.field.canonicalString()+t.op.toString()+Vs(t.value);if(Bm(t))return t.filters.map((e=>yl(e))).join(",");{const e=t.filters.map((n=>yl(n))).join(",");return`${t.op}(${e})`}}function $m(t,e){return t instanceof Xe?(function(r,s){return s instanceof Xe&&r.op===s.op&&r.field.isEqual(s.field)&&wn(r.value,s.value)})(t,e):t instanceof An?(function(r,s){return s instanceof An&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,o,c)=>i&&$m(o,s.filters[c])),!0):!1})(t,e):void le(19439)}function jm(t){return t instanceof Xe?(function(n){return`${n.field.canonicalString()} ${n.op} ${Vs(n.value)}`})(t):t instanceof An?(function(n){return n.op.toString()+" {"+n.getFilters().map(jm).join(" ,")+"}"})(t):"Filter"}class OS extends Xe{constructor(e,n,r){super(e,n,r),this.key=ie.fromName(r.referenceValue)}matches(e){const n=ie.comparator(e.key,this.key);return this.matchesComparison(n)}}class DS extends Xe{constructor(e,n){super(e,"in",n),this.keys=qm("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class xS extends Xe{constructor(e,n){super(e,"not-in",n),this.keys=qm("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function qm(t,e){return(e.arrayValue?.values||[]).map((n=>ie.fromName(n.referenceValue)))}class MS extends Xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return gu(n)&&Hi(n.arrayValue,this.value)}}class LS extends Xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Hi(this.value.arrayValue,n)}}class FS extends Xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Hi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Hi(this.value.arrayValue,n)}}class US extends Xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!gu(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>Hi(this.value.arrayValue,r)))}}/**
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
 */class BS{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Te=null}}function Id(t,e=null,n=[],r=[],s=null,i=null,o=null){return new BS(t,e,n,r,s,i,o)}function mu(t){const e=de(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((r=>yl(r))).join(","),n+="|ob:",n+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),qa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((r=>Vs(r))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((r=>Vs(r))).join(",")),e.Te=n}return e.Te}function _u(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!VS(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!$m(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Td(t.startAt,e.startAt)&&Td(t.endAt,e.endAt)}function vl(t){return ie.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class za{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function $S(t,e,n,r,s,i,o,c){return new za(t,e,n,r,s,i,o,c)}function Hm(t){return new za(t)}function wd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function jS(t){return t.collectionGroup!==null}function Ri(t){const e=de(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new Ze(lt.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((h=>{h.isInequality()&&(c=c.add(h.field))}))})),c})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new da(i,r))})),n.has(lt.keyField().canonicalString())||e.Ie.push(new da(lt.keyField(),r))}return e.Ie}function _n(t){const e=de(t);return e.Ee||(e.Ee=qS(e,Ri(t))),e.Ee}function qS(t,e){if(t.limitType==="F")return Id(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new da(s.field,i)}));const n=t.endAt?new fa(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new fa(t.startAt.position,t.startAt.inclusive):null;return Id(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function El(t,e,n){return new za(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Wa(t,e){return _u(_n(t),_n(e))&&t.limitType===e.limitType}function zm(t){return`${mu(_n(t))}|lt:${t.limitType}`}function ls(t){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((s=>jm(s))).join(", ")}]`),qa(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((s=>Vs(s))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((s=>Vs(s))).join(",")),`Target(${r})`})(_n(t))}; limitType=${t.limitType})`}function Ka(t,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ie.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(t,e)&&(function(r,s){for(const i of Ri(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(t,e)&&(function(r,s){return!(r.startAt&&!(function(o,c,l){const h=Ed(o,c,l);return o.inclusive?h<=0:h<0})(r.startAt,Ri(r),s)||r.endAt&&!(function(o,c,l){const h=Ed(o,c,l);return o.inclusive?h>=0:h>0})(r.endAt,Ri(r),s))})(t,e)}function HS(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Wm(t){return(e,n)=>{let r=!1;for(const s of Ri(t)){const i=zS(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function zS(t,e,n){const r=t.field.isKeyField()?ie.comparator(e.key,n.key):(function(i,o,c){const l=o.data.field(i),h=c.data.field(i);return l!==null&&h!==null?ks(l,h):le(42886)})(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return le(19790,{direction:t.dir})}}/**
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
 */class Yr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Jr(this.inner,((n,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return Pm(this.inner)}size(){return this.innerSize}}/**
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
 */const WS=new je(ie.comparator);function Bn(){return WS}const Km=new je(ie.comparator);function ui(...t){let e=Km;for(const n of t)e=e.insert(n.key,n);return e}function Gm(t){let e=Km;return t.forEach(((n,r)=>e=e.insert(n,r.overlayedDocument))),e}function Br(){return Ci()}function Qm(){return Ci()}function Ci(){return new Yr((t=>t.toString()),((t,e)=>t.isEqual(e)))}const KS=new je(ie.comparator),GS=new Ze(ie.comparator);function Ie(...t){let e=GS;for(const n of t)e=e.add(n);return e}const QS=new Ze(Te);function JS(){return QS}/**
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
 */function yu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:la(e)?"-0":e}}function Jm(t){return{integerValue:""+t}}function YS(t,e){return wS(e)?Jm(e):yu(t,e)}/**
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
 */class Ga{constructor(){this._=void 0}}function XS(t,e,n){return t instanceof pa?(function(s,i){const o={fields:{[Nm]:{stringValue:Vm},[Dm]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&pu(i)&&(i=Ha(i)),i&&(o.fields[Om]=i),{mapValue:o}})(n,e):t instanceof zi?Xm(t,e):t instanceof Wi?Zm(t,e):(function(s,i){const o=Ym(s,i),c=Ad(o)+Ad(s.Ae);return _l(o)&&_l(s.Ae)?Jm(c):yu(s.serializer,c)})(t,e)}function ZS(t,e,n){return t instanceof zi?Xm(t,e):t instanceof Wi?Zm(t,e):n}function Ym(t,e){return t instanceof ga?(function(r){return _l(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class pa extends Ga{}class zi extends Ga{constructor(e){super(),this.elements=e}}function Xm(t,e){const n=e_(e);for(const r of t.elements)n.some((s=>wn(s,r)))||n.push(r);return{arrayValue:{values:n}}}class Wi extends Ga{constructor(e){super(),this.elements=e}}function Zm(t,e){let n=e_(e);for(const r of t.elements)n=n.filter((s=>!wn(s,r)));return{arrayValue:{values:n}}}class ga extends Ga{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Ad(t){return We(t.integerValue||t.doubleValue)}function e_(t){return gu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function eR(t,e){return t.field.isEqual(e.field)&&(function(r,s){return r instanceof zi&&s instanceof zi||r instanceof Wi&&s instanceof Wi?Ps(r.elements,s.elements,wn):r instanceof ga&&s instanceof ga?wn(r.Ae,s.Ae):r instanceof pa&&s instanceof pa})(t.transform,e.transform)}class tR{constructor(e,n){this.version=e,this.transformResults=n}}class Dn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Dn}static exists(e){return new Dn(void 0,e)}static updateTime(e){return new Dn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Uo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Qa{}function t_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new r_(t.key,Dn.none()):new so(t.key,t.data,Dn.none());{const n=t.data,r=Bt.empty();let s=new Ze(lt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Xr(t.key,r,new Xt(s.toArray()),Dn.none())}}function nR(t,e,n){t instanceof so?(function(s,i,o){const c=s.value.clone(),l=Sd(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(t,e,n):t instanceof Xr?(function(s,i,o){if(!Uo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Sd(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(n_(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(t,e,n):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,n)}function Pi(t,e,n,r){return t instanceof so?(function(i,o,c,l){if(!Uo(i.precondition,o))return c;const h=i.value.clone(),f=Rd(i.fieldTransforms,l,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null})(t,e,n,r):t instanceof Xr?(function(i,o,c,l){if(!Uo(i.precondition,o))return c;const h=Rd(i.fieldTransforms,l,o),f=o.data;return f.setAll(n_(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(t,e,n,r):(function(i,o,c){return Uo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(t,e,n)}function rR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Ym(r.transform,s||null);i!=null&&(n===null&&(n=Bt.empty()),n.set(r.field,i))}return n||null}function bd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ps(r,s,((i,o)=>eR(i,o)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class so extends Qa{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Xr extends Qa{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function n_(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function Sd(t,e,n){const r=new Map;Ve(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,ZS(o,c,n[s]))}return r}function Rd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,XS(i,o,e))}return r}class r_ extends Qa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class sR extends Qa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class iR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&nR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Pi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Pi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Qm();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=t_(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(fe.min())})),r}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),Ie())}isEqual(e){return this.batchId===e.batchId&&Ps(this.mutations,e.mutations,((n,r)=>bd(n,r)))&&Ps(this.baseMutations,e.baseMutations,((n,r)=>bd(n,r)))}}class vu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ve(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=(function(){return KS})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new vu(e,n,r,s)}}/**
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
 */class oR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class aR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ge,be;function cR(t){switch(t){case B.OK:return le(64938);case B.CANCELLED:case B.UNKNOWN:case B.DEADLINE_EXCEEDED:case B.RESOURCE_EXHAUSTED:case B.INTERNAL:case B.UNAVAILABLE:case B.UNAUTHENTICATED:return!1;case B.INVALID_ARGUMENT:case B.NOT_FOUND:case B.ALREADY_EXISTS:case B.PERMISSION_DENIED:case B.FAILED_PRECONDITION:case B.ABORTED:case B.OUT_OF_RANGE:case B.UNIMPLEMENTED:case B.DATA_LOSS:return!0;default:return le(15467,{code:t})}}function s_(t){if(t===void 0)return Un("GRPC error has no .code"),B.UNKNOWN;switch(t){case Ge.OK:return B.OK;case Ge.CANCELLED:return B.CANCELLED;case Ge.UNKNOWN:return B.UNKNOWN;case Ge.DEADLINE_EXCEEDED:return B.DEADLINE_EXCEEDED;case Ge.RESOURCE_EXHAUSTED:return B.RESOURCE_EXHAUSTED;case Ge.INTERNAL:return B.INTERNAL;case Ge.UNAVAILABLE:return B.UNAVAILABLE;case Ge.UNAUTHENTICATED:return B.UNAUTHENTICATED;case Ge.INVALID_ARGUMENT:return B.INVALID_ARGUMENT;case Ge.NOT_FOUND:return B.NOT_FOUND;case Ge.ALREADY_EXISTS:return B.ALREADY_EXISTS;case Ge.PERMISSION_DENIED:return B.PERMISSION_DENIED;case Ge.FAILED_PRECONDITION:return B.FAILED_PRECONDITION;case Ge.ABORTED:return B.ABORTED;case Ge.OUT_OF_RANGE:return B.OUT_OF_RANGE;case Ge.UNIMPLEMENTED:return B.UNIMPLEMENTED;case Ge.DATA_LOSS:return B.DATA_LOSS;default:return le(39323,{code:t})}}(be=Ge||(Ge={}))[be.OK=0]="OK",be[be.CANCELLED=1]="CANCELLED",be[be.UNKNOWN=2]="UNKNOWN",be[be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",be[be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",be[be.NOT_FOUND=5]="NOT_FOUND",be[be.ALREADY_EXISTS=6]="ALREADY_EXISTS",be[be.PERMISSION_DENIED=7]="PERMISSION_DENIED",be[be.UNAUTHENTICATED=16]="UNAUTHENTICATED",be[be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",be[be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",be[be.ABORTED=10]="ABORTED",be[be.OUT_OF_RANGE=11]="OUT_OF_RANGE",be[be.UNIMPLEMENTED=12]="UNIMPLEMENTED",be[be.INTERNAL=13]="INTERNAL",be[be.UNAVAILABLE=14]="UNAVAILABLE",be[be.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function lR(){return new TextEncoder}/**
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
 */const uR=new _r([4294967295,4294967295],0);function Cd(t){const e=lR().encode(t),n=new ym;return n.update(e),new Uint8Array(n.digest())}function Pd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new _r([n,r],0),new _r([s,i],0)]}class Eu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new hi(`Invalid padding: ${n}`);if(r<0)throw new hi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new hi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new hi(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=_r.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(_r.fromNumber(r)));return s.compare(uR)===1&&(s=new _r([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Cd(e),[r,s]=Pd(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Eu(i,s,n);return r.forEach((c=>o.insert(c))),o}insert(e){if(this.ge===0)return;const n=Cd(e),[r,s]=Pd(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class hi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ja{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,io.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ja(fe.min(),s,new je(Te),Bn(),Ie())}}class io{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new io(r,n,Ie(),Ie(),Ie())}}/**
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
 */class Bo{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class i_{constructor(e,n){this.targetId=e,this.Ce=n}}class o_{constructor(e,n,r=ut.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class kd{constructor(){this.ve=0,this.Fe=Vd(),this.Me=ut.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ie(),n=Ie(),r=Ie();return this.Fe.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:le(38017,{changeType:i})}})),new io(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=Vd()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Ve(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class hR{constructor(e){this.Ge=e,this.ze=new Map,this.je=Bn(),this.Je=So(),this.He=So(),this.Ye=new je(Te)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:le(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((r,s)=>{this.rt(s)&&n(s)}))}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(vl(i))if(r===0){const o=new ie(i.path);this.et(n,o,vt.newNoDocument(o,fe.min()))}else Ve(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const c=this.ut(e),l=c?this.ct(c,e,o):1;if(l!==0){this.it(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,h)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=br(r).toUint8Array()}catch(l){if(l instanceof km)return Cs("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Eu(o,s,i)}catch(l){return Cs(l instanceof hi?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach((i=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(n,i,null),s++)})),s}Tt(e){const n=new Map;this.ze.forEach(((i,o)=>{const c=this.ot(o);if(c){if(i.current&&vl(c.target)){const l=new ie(c.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,vt.newNoDocument(l,e))}i.Be&&(n.set(o,i.ke()),i.qe())}}));let r=Ie();this.He.forEach(((i,o)=>{let c=!0;o.forEachWhile((l=>{const h=this.ot(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.je.forEach(((i,o)=>o.setReadTime(e)));const s=new Ja(e,n,this.Ye,this.je,r);return this.je=Bn(),this.Je=So(),this.He=So(),this.Ye=new je(Te),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new kd,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new Ze(Te),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Ze(Te),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||ee("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new kd),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function So(){return new je(ie.comparator)}function Vd(){return new je(ie.comparator)}const fR={asc:"ASCENDING",desc:"DESCENDING"},dR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},pR={and:"AND",or:"OR"};class gR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Tl(t,e){return t.useProto3Json||qa(e)?e:{value:e}}function ma(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function a_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function mR(t,e){return ma(t,e.toTimestamp())}function yn(t){return Ve(!!t,49232),fe.fromTimestamp((function(n){const r=Ar(n);return new $e(r.seconds,r.nanos)})(t))}function Tu(t,e){return Il(t,e).canonicalString()}function Il(t,e){const n=(function(s){return new Be(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function c_(t){const e=Be.fromString(t);return Ve(d_(e),10190,{key:e.toString()}),e}function wl(t,e){return Tu(t.databaseId,e.path)}function Bc(t,e){const n=c_(e);if(n.get(1)!==t.databaseId.projectId)throw new ne(B.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ne(B.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ie(u_(n))}function l_(t,e){return Tu(t.databaseId,e)}function _R(t){const e=c_(t);return e.length===4?Be.emptyPath():u_(e)}function Al(t){return new Be(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function u_(t){return Ve(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Nd(t,e,n){return{name:wl(t,e),fields:n.value.mapValue.fields}}function yR(t,e){let n;if("targetChange"in e){e.targetChange;const r=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:le(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(h,f){return h.useProto3Json?(Ve(f===void 0||typeof f=="string",58123),ut.fromBase64String(f||"")):(Ve(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),ut.fromUint8Array(f||new Uint8Array))})(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&(function(h){const f=h.code===void 0?B.UNKNOWN:s_(h.code);return new ne(f,h.message||"")})(o);n=new o_(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Bc(t,r.document.name),i=yn(r.document.updateTime),o=r.document.createTime?yn(r.document.createTime):fe.min(),c=new Bt({mapValue:{fields:r.document.fields}}),l=vt.newFoundDocument(s,i,o,c),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Bo(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Bc(t,r.document),i=r.readTime?yn(r.readTime):fe.min(),o=vt.newNoDocument(s,i),c=r.removedTargetIds||[];n=new Bo([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Bc(t,r.document),i=r.removedTargetIds||[];n=new Bo([],i,s,null)}else{if(!("filter"in e))return le(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new aR(s,i),c=r.targetId;n=new i_(c,o)}}return n}function vR(t,e){let n;if(e instanceof so)n={update:Nd(t,e.key,e.value)};else if(e instanceof r_)n={delete:wl(t,e.key)};else if(e instanceof Xr)n={update:Nd(t,e.key,e.data),updateMask:CR(e.fieldMask)};else{if(!(e instanceof sR))return le(16599,{Vt:e.type});n={verify:wl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((r=>(function(i,o){const c=o.transform;if(c instanceof pa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof zi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Wi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof ga)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw le(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(n.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:mR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:le(27497)})(t,e.precondition)),n}function ER(t,e){return t&&t.length>0?(Ve(e!==void 0,14353),t.map((n=>(function(s,i){let o=s.updateTime?yn(s.updateTime):yn(i);return o.isEqual(fe.min())&&(o=yn(i)),new tR(o,s.transformResults||[])})(n,e)))):[]}function TR(t,e){return{documents:[l_(t,e.path)]}}function IR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=l_(t,s);const i=(function(h){if(h.length!==0)return f_(An.create(h,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const o=(function(h){if(h.length!==0)return h.map((f=>(function(m){return{field:us(m.field),direction:bR(m.dir)}})(f)))})(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=Tl(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{ft:n,parent:s}}function wR(t){let e=_R(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ve(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=(function(p){const m=h_(p);return m instanceof An&&Bm(m)?m.getFilters():[m]})(n.where));let o=[];n.orderBy&&(o=(function(p){return p.map((m=>(function(R){return new da(hs(R.field),(function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(R.direction))})(m)))})(n.orderBy));let c=null;n.limit&&(c=(function(p){let m;return m=typeof p=="object"?p.value:p,qa(m)?null:m})(n.limit));let l=null;n.startAt&&(l=(function(p){const m=!!p.before,_=p.values||[];return new fa(_,m)})(n.startAt));let h=null;return n.endAt&&(h=(function(p){const m=!p.before,_=p.values||[];return new fa(_,m)})(n.endAt)),$S(e,s,o,i,c,"F",l,h)}function AR(t,e){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return le(28987,{purpose:s})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function h_(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=hs(n.unaryFilter.field);return Xe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=hs(n.unaryFilter.field);return Xe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=hs(n.unaryFilter.field);return Xe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=hs(n.unaryFilter.field);return Xe.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return le(61313);default:return le(60726)}})(t):t.fieldFilter!==void 0?(function(n){return Xe.create(hs(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return le(58110);default:return le(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return An.create(n.compositeFilter.filters.map((r=>h_(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return le(1026)}})(n.compositeFilter.op))})(t):le(30097,{filter:t})}function bR(t){return fR[t]}function SR(t){return dR[t]}function RR(t){return pR[t]}function us(t){return{fieldPath:t.canonicalString()}}function hs(t){return lt.fromServerFormat(t.fieldPath)}function f_(t){return t instanceof Xe?(function(n){if(n.op==="=="){if(vd(n.value))return{unaryFilter:{field:us(n.field),op:"IS_NAN"}};if(yd(n.value))return{unaryFilter:{field:us(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(vd(n.value))return{unaryFilter:{field:us(n.field),op:"IS_NOT_NAN"}};if(yd(n.value))return{unaryFilter:{field:us(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:us(n.field),op:SR(n.op),value:n.value}}})(t):t instanceof An?(function(n){const r=n.getFilters().map((s=>f_(s)));return r.length===1?r[0]:{compositeFilter:{op:RR(n.op),filters:r}}})(t):le(54877,{filter:t})}function CR(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function d_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class lr{constructor(e,n,r,s,i=fe.min(),o=fe.min(),c=ut.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new lr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class PR{constructor(e){this.yt=e}}function kR(t){const e=wR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?El(e,e.limit,"L"):e}/**
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
 */class VR{constructor(){this.Cn=new NR}addToCollectionParentIndex(e,n){return this.Cn.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(wr.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(wr.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class NR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ze(Be.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ze(Be.comparator)).toArray()}}/**
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
 */const Od={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},p_=41943040;class Rt{static withCacheSize(e){return new Rt(e,Rt.DEFAULT_COLLECTION_PERCENTILE,Rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Rt.DEFAULT_COLLECTION_PERCENTILE=10,Rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Rt.DEFAULT=new Rt(p_,Rt.DEFAULT_COLLECTION_PERCENTILE,Rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Rt.DISABLED=new Rt(-1,0,0);/**
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
 */const Dd="LruGarbageCollector",OR=1048576;function xd([t,e],[n,r]){const s=Te(t,n);return s===0?Te(e,r):s}class DR{constructor(e){this.Ir=e,this.buffer=new Ze(xd),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();xd(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class xR{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){ee(Dd,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Bs(n)?ee(Dd,"Ignoring IndexedDB error during garbage collection: ",n):await Us(n)}await this.Vr(3e5)}))}}class MR{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next((r=>Math.floor(n/100*r)))}nthSequenceNumber(e,n){if(n===0)return L.resolve(ja.ce);const r=new DR(n);return this.mr.forEachTarget(e,(s=>r.Ar(s.sequenceNumber))).next((()=>this.mr.pr(e,(s=>r.Ar(s))))).next((()=>r.maxValue))}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ee("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(Od)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(ee("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Od):this.yr(e,n)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,c,l,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(ee("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,c=Date.now(),this.removeTargets(e,r,n)))).next((p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(h=Date.now(),cs()<=Ee.DEBUG&&ee("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(h-l)+`ms
Total Duration: ${h-f}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function LR(t,e){return new MR(t,e)}/**
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
 */class FR{constructor(){this.changes=new Yr((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,vt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class UR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class BR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,n)))).next((s=>(r!==null&&Pi(r.mutation,s,Xt.empty(),$e.now()),s)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.getLocalViewOfDocuments(e,r,Ie()).next((()=>r))))}getLocalViewOfDocuments(e,n,r=Ie()){const s=Br();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,r).next((i=>{let o=ui();return i.forEach(((c,l)=>{o=o.insert(c,l.overlayedDocument)})),o}))))}getOverlayedDocuments(e,n){const r=Br();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,Ie())))}populateOverlays(e,n,r){const s=[];return r.forEach((i=>{n.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,c)=>{n.set(o,c)}))}))}computeViews(e,n,r,s){let i=Bn();const o=Ci(),c=(function(){return Ci()})();return n.forEach(((l,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof Xr)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Pi(f.mutation,h,f.mutation.getFieldMask(),$e.now())):o.set(h.key,Xt.empty())})),this.recalculateAndSaveOverlays(e,i).next((l=>(l.forEach(((h,f)=>o.set(h,f))),n.forEach(((h,f)=>c.set(h,new UR(f,o.get(h)??null)))),c)))}recalculateAndSaveOverlays(e,n){const r=Ci();let s=new je(((o,c)=>o-c)),i=Ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((o=>{for(const c of o)c.keys().forEach((l=>{const h=n.get(l);if(h===null)return;let f=r.get(l)||Xt.empty();f=c.applyToLocalView(h,f),r.set(l,f);const p=(s.get(c.batchId)||Ie()).add(l);s=s.insert(c.batchId,p)}))})).next((()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,f=l.value,p=Qm();f.forEach((m=>{if(!i.has(m)){const _=t_(n.get(m),r.get(m));_!==null&&p.set(m,_),i=i.add(m)}})),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return L.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,n,r,s){return(function(o){return ie.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):jS(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):L.resolve(Br());let c=$i,l=i;return o.next((h=>L.forEach(h,((f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?L.resolve():this.remoteDocumentCache.getEntry(e,f).next((m=>{l=l.insert(f,m)}))))).next((()=>this.populateOverlays(e,h,i))).next((()=>this.computeViews(e,l,h,Ie()))).next((f=>({batchId:c,changes:Gm(f)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ie(n)).next((r=>{let s=ui();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=ui();return this.indexManager.getCollectionParents(e,i).next((c=>L.forEach(c,(l=>{const h=(function(p,m){return new za(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next((f=>{f.forEach(((p,m)=>{o=o.insert(p,m)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s)))).next((o=>{i.forEach(((l,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,vt.newInvalidDocument(f)))}));let c=ui();return o.forEach(((l,h)=>{const f=i.get(l);f!==void 0&&Pi(f.mutation,h,Xt.empty(),$e.now()),Ka(n,h)&&(c=c.insert(l,h))})),c}))}}/**
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
 */class $R{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return L.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:yn(s.createTime)}})(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,(function(s){return{name:s.name,query:kR(s.bundledQuery),readTime:yn(s.readTime)}})(n)),L.resolve()}}/**
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
 */class jR{constructor(){this.overlays=new je(ie.comparator),this.qr=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Br();return L.forEach(n,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,n,r){return r.forEach(((s,i)=>{this.St(e,n,i)})),L.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const s=Br(),i=n.length+1,o=new ie(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return L.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new je(((h,f)=>h-f));const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=Br(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=Br(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((h,f)=>c.set(h,f))),!(c.size()>=s)););return L.resolve(c)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new oR(n,r));let i=this.qr.get(n);i===void 0&&(i=Ie(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
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
 */class qR{constructor(){this.sessionToken=ut.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
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
 */class Iu{constructor(){this.Qr=new Ze(nt.$r),this.Ur=new Ze(nt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new nt(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach((r=>this.addReference(r,n)))}removeReference(e,n){this.Gr(new nt(e,n))}zr(e,n){e.forEach((r=>this.removeReference(r,n)))}jr(e){const n=new ie(new Be([])),r=new nt(n,e),s=new nt(n,e+1),i=[];return this.Ur.forEachInRange([r,s],(o=>{this.Gr(o),i.push(o.key)})),i}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new ie(new Be([])),r=new nt(n,e),s=new nt(n,e+1);let i=Ie();return this.Ur.forEachInRange([r,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const n=new nt(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class nt{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return ie.comparator(e.key,n.key)||Te(e.Yr,n.Yr)}static Kr(e,n){return Te(e.Yr,n.Yr)||ie.comparator(e.key,n.key)}}/**
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
 */class HR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Ze(nt.$r)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new iR(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.Zr=this.Zr.add(new nt(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return L.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?du:this.tr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new nt(n,0),s=new nt(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],(o=>{const c=this.Xr(o.Yr);i.push(c)})),L.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ze(Te);return n.forEach((s=>{const i=new nt(s,0),o=new nt(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],(c=>{r=r.add(c.Yr)}))})),L.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ie.isDocumentKey(i)||(i=i.child(""));const o=new nt(new ie(i),0);let c=new Ze(Te);return this.Zr.forEachWhile((l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.Yr)),!0)}),o),L.resolve(this.ti(c))}ti(e){const n=[];return e.forEach((r=>{const s=this.Xr(r);s!==null&&n.push(s)})),n}removeMutationBatch(e,n){Ve(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return L.forEach(n.mutations,(s=>{const i=new nt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Zr=r}))}ir(e){}containsKey(e,n){const r=new nt(n,0),s=this.Zr.firstAfterOrEqual(r);return L.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class zR{constructor(e){this.ri=e,this.docs=(function(){return new je(ie.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():vt.newInvalidDocument(n))}getEntries(e,n){let r=Bn();return n.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():vt.newInvalidDocument(s))})),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Bn();const o=n.path,c=new ie(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||vS(yS(f),r)<=0||(s.has(f.key)||Ka(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return L.resolve(i)}getAllFromCollectionGroup(e,n,r,s){le(9500)}ii(e,n){return L.forEach(this.docs,(r=>n(r)))}newChangeBuffer(e){return new WR(this)}getSize(e){return L.resolve(this.size)}}class WR extends FR{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)})),L.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class KR{constructor(e){this.persistence=e,this.si=new Yr((n=>mu(n)),_u),this.lastRemoteSnapshotVersion=fe.min(),this.highestTargetId=0,this.oi=0,this._i=new Iu,this.targetCount=0,this.ai=Ns.ur()}forEachTarget(e,n){return this.si.forEach(((r,s)=>n(s))),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),L.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Ns(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.Pr(n),L.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach(((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),L.waitFor(i).next((()=>s))}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),L.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),L.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this._i.containsKey(n))}}/**
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
 */class g_{constructor(e,n){this.ui={},this.overlays={},this.ci=new ja(0),this.li=!1,this.li=!0,this.hi=new qR,this.referenceDelegate=e(this),this.Pi=new KR(this),this.indexManager=new VR,this.remoteDocumentCache=(function(s){return new zR(s)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new PR(n),this.Ii=new $R(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new jR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new HR(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){ee("MemoryPersistence","Starting transaction:",e);const s=new GR(this.ci.next());return this.referenceDelegate.Ei(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ai(e,n){return L.or(Object.values(this.ui).map((r=>()=>r.containsKey(e,n))))}}class GR extends TS{constructor(e){super(),this.currentSequenceNumber=e}}class wu{constructor(e){this.persistence=e,this.Ri=new Iu,this.Vi=null}static mi(e){return new wu(e)}get fi(){if(this.Vi)return this.Vi;throw le(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),L.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach((s=>this.fi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next((s=>{s.forEach((i=>this.fi.add(i.toString())))})).next((()=>r.removeTargetData(e,n)))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.fi,(r=>{const s=ie.fromPath(r);return this.gi(e,s).next((i=>{i||n.removeEntry(s,fe.min())}))})).next((()=>(this.Vi=null,n.apply(e))))}updateLimboDocument(e,n){return this.gi(e,n).next((r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())}))}Ti(e){return 0}gi(e,n){return L.or([()=>L.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class _a{constructor(e,n){this.persistence=e,this.pi=new Yr((r=>AS(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=LR(this,n)}static mi(e,n){return new _a(e,n)}Ei(){}di(e){return L.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>n.next((s=>r+s))))}wr(e){let n=0;return this.pr(e,(r=>{n++})).next((()=>n))}pr(e,n){return L.forEach(this.pi,((r,s)=>this.br(e,r,s).next((i=>i?L.resolve():n(s)))))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,(o=>this.br(e,o,n).next((c=>{c||(r++,i.removeEntry(o,fe.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),L.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),L.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),L.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Lo(e.data.value)),n}br(e,n,r){return L.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return L.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Au{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=Ie(),s=Ie();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Au(e,n.fromCache,r,s)}}/**
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
 */class QR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class JR{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return CI()?8:IS(It())>0?6:4})()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ws(e,n,s,r).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new QR;return this.Ss(e,n,o).next((c=>{if(i.result=c,this.Vs)return this.bs(e,n,o,c.size)}))})).next((()=>i.result))}bs(e,n,r,s){return r.documentReadCount<this.fs?(cs()<=Ee.DEBUG&&ee("QueryEngine","SDK will not create cache indexes for query:",ls(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),L.resolve()):(cs()<=Ee.DEBUG&&ee("QueryEngine","Query:",ls(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(cs()<=Ee.DEBUG&&ee("QueryEngine","The SDK decides to create cache indexes for query:",ls(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,_n(n))):L.resolve())}ys(e,n){if(wd(n))return L.resolve(null);let r=_n(n);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=El(n,null,"F"),r=_n(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const o=Ie(...i);return this.ps.getDocuments(e,o).next((c=>this.indexManager.getMinOffset(e,r).next((l=>{const h=this.Ds(n,c);return this.Cs(n,h,o,l.readTime)?this.ys(e,El(n,null,"F")):this.vs(e,h,n,l)}))))})))))}ws(e,n,r,s){return wd(n)||s.isEqual(fe.min())?L.resolve(null):this.ps.getDocuments(e,r).next((i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?L.resolve(null):(cs()<=Ee.DEBUG&&ee("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ls(n)),this.vs(e,o,n,_S(s,$i)).next((c=>c)))}))}Ds(e,n){let r=new Ze(Wm(e));return n.forEach(((s,i)=>{Ka(e,i)&&(r=r.add(i))})),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return cs()<=Ee.DEBUG&&ee("QueryEngine","Using full collection scan to execute query:",ls(n)),this.ps.getDocumentsMatchingQuery(e,n,wr.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next((i=>(n.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
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
 */const bu="LocalStore",YR=3e8;class XR{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new je(Te),this.xs=new Yr((i=>mu(i)),_u),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new BR(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Ms)))}}function ZR(t,e,n,r){return new XR(t,e,n,r)}async function m_(t,e){const n=de(t);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r)))).next((i=>{const o=[],c=[];let l=Ie();for(const h of s){o.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next((h=>({Ls:h,removedBatchIds:o,addedBatchIds:c})))}))}))}function e0(t,e){const n=de(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return(function(c,l,h,f){const p=h.batch,m=p.keys();let _=L.resolve();return m.forEach((R=>{_=_.next((()=>f.getEntry(l,R))).next((N=>{const D=h.docVersions.get(R);Ve(D!==null,48541),N.version.compareTo(D)<0&&(p.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),f.addEntry(N)))}))})),_.next((()=>c.mutationQueue.removeMutationBatch(l,p)))})(n,r,e,i).next((()=>i.apply(r))).next((()=>n.mutationQueue.performConsistencyCheck(r))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let l=Ie();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l})(e)))).next((()=>n.localDocuments.getDocuments(r,s)))}))}function __(t){const e=de(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.Pi.getLastRemoteSnapshotVersion(n)))}function t0(t,e){const n=de(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const c=[];e.targetChanges.forEach(((f,p)=>{const m=s.get(p);if(!m)return;c.push(n.Pi.removeMatchingKeys(i,f.removedDocuments,p).next((()=>n.Pi.addMatchingKeys(i,f.addedDocuments,p))));let _=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(ut.EMPTY_BYTE_STRING,fe.min()).withLastLimboFreeSnapshotVersion(fe.min()):f.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(f.resumeToken,r)),s=s.insert(p,_),(function(N,D,z){return N.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=YR?!0:z.addedDocuments.size+z.modifiedDocuments.size+z.removedDocuments.size>0})(m,_,f)&&c.push(n.Pi.updateTargetData(i,_))}));let l=Bn(),h=Ie();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))})),c.push(n0(i,o,e.documentUpdates).next((f=>{l=f.ks,h=f.qs}))),!r.isEqual(fe.min())){const f=n.Pi.getLastRemoteSnapshotVersion(i).next((p=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(f)}return L.waitFor(c).next((()=>o.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,l,h))).next((()=>l))})).then((i=>(n.Ms=s,i)))}function n0(t,e,n){let r=Ie(),s=Ie();return n.forEach((i=>r=r.add(i))),e.getEntries(t,r).next((i=>{let o=Bn();return n.forEach(((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(fe.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):ee(bu,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)})),{ks:o,qs:s}}))}function r0(t,e){const n=de(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=du),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function s0(t,e){const n=de(t);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return n.Pi.getTargetData(r,e).next((i=>i?(s=i,L.resolve(s)):n.Pi.allocateTargetId(r).next((o=>(s=new lr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r}))}async function bl(t,e,n){const r=de(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(o=>r.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!Bs(o))throw o;ee(bu,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function Md(t,e,n){const r=de(t);let s=fe.min(),i=Ie();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,h,f){const p=de(l),m=p.xs.get(f);return m!==void 0?L.resolve(p.Ms.get(m)):p.Pi.getTargetData(h,f)})(r,o,_n(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,c.targetId).next((l=>{i=l}))})).next((()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:fe.min(),n?i:Ie()))).next((c=>(i0(r,HS(e),c),{documents:c,Qs:i})))))}function i0(t,e,n){let r=t.Os.get(e)||fe.min();n.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),t.Os.set(e,r)}class Ld{constructor(){this.activeTargetIds=JS()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class o0{constructor(){this.Mo=new Ld,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Ld,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class a0{Oo(e){}shutdown(){}}/**
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
 */const Fd="ConnectivityMonitor";class Ud{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){ee(Fd,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){ee(Fd,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ro=null;function Sl(){return Ro===null?Ro=(function(){return 268435456+Math.round(2147483648*Math.random())})():Ro++,"0x"+Ro.toString(16)}/**
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
 */const $c="RestConnection",c0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class l0{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===ua?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=Sl(),c=this.zo(e,n.toUriEncodedString());ee($c,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,s,i);const{host:h}=new URL(c),f=Ds(h);return this.Jo(e,c,l,r,f).then((p=>(ee($c,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw Cs($c,`RPC '${e}' ${o} failed with error: `,p,"url: ",c,"request:",r),p}))}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Fs})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}zo(e,n){const r=c0[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
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
 */class u0{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const gt="WebChannelConnection";class h0 extends l0{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=Sl();return new Promise(((c,l)=>{const h=new vm;h.setWithCredentials(!0),h.listenOnce(Em.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case Mo.NO_ERROR:const p=h.getResponseJson();ee(gt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),c(p);break;case Mo.TIMEOUT:ee(gt,`RPC '${e}' ${o} timed out`),l(new ne(B.DEADLINE_EXCEEDED,"Request time out"));break;case Mo.HTTP_ERROR:const m=h.getStatus();if(ee(gt,`RPC '${e}' ${o} failed with status:`,m,"response text:",h.getResponseText()),m>0){let _=h.getResponseJson();Array.isArray(_)&&(_=_[0]);const R=_?.error;if(R&&R.status&&R.message){const N=(function(z){const q=z.toLowerCase().replace(/_/g,"-");return Object.values(B).indexOf(q)>=0?q:B.UNKNOWN})(R.status);l(new ne(N,R.message))}else l(new ne(B.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new ne(B.UNAVAILABLE,"Connection failed."));break;default:le(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{ee(gt,`RPC '${e}' ${o} completed.`)}}));const f=JSON.stringify(s);ee(gt,`RPC '${e}' ${o} sending request:`,s),h.send(n,"POST",f,r,15)}))}T_(e,n,r){const s=Sl(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=wm(),c=Im(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=i.join("");ee(gt,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=o.createWebChannel(f,l);this.I_(p);let m=!1,_=!1;const R=new u0({Yo:D=>{_?ee(gt,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(m||(ee(gt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),ee(gt,`RPC '${e}' stream ${s} sending:`,D),p.send(D))},Zo:()=>p.close()}),N=(D,z,q)=>{D.listen(z,(G=>{try{q(G)}catch(U){setTimeout((()=>{throw U}),0)}}))};return N(p,li.EventType.OPEN,(()=>{_||(ee(gt,`RPC '${e}' stream ${s} transport opened.`),R.o_())})),N(p,li.EventType.CLOSE,(()=>{_||(_=!0,ee(gt,`RPC '${e}' stream ${s} transport closed`),R.a_(),this.E_(p))})),N(p,li.EventType.ERROR,(D=>{_||(_=!0,Cs(gt,`RPC '${e}' stream ${s} transport errored. Name:`,D.name,"Message:",D.message),R.a_(new ne(B.UNAVAILABLE,"The operation could not be completed")))})),N(p,li.EventType.MESSAGE,(D=>{if(!_){const z=D.data[0];Ve(!!z,16349);const q=z,G=q?.error||q[0]?.error;if(G){ee(gt,`RPC '${e}' stream ${s} received error:`,G);const U=G.status;let W=(function(y){const v=Ge[y];if(v!==void 0)return s_(v)})(U),K=G.message;W===void 0&&(W=B.INTERNAL,K="Unknown error status: "+U+" with message "+G.message),_=!0,R.a_(new ne(W,K)),p.close()}else ee(gt,`RPC '${e}' stream ${s} received:`,z),R.u_(z)}})),N(c,Tm.STAT_EVENT,(D=>{D.stat===pl.PROXY?ee(gt,`RPC '${e}' stream ${s} detected buffering proxy`):D.stat===pl.NOPROXY&&ee(gt,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{R.__()}),0),R}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((n=>n===e))}}function jc(){return typeof document<"u"?document:null}/**
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
 */function Ya(t){return new gR(t,!0)}/**
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
 */class y_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&ee("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const Bd="PersistentStream";class v_{constructor(e,n,r,s,i,o,c,l){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new y_(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===B.RESOURCE_EXHAUSTED?(Un(n.toString()),Un("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===B.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===n&&this.G_(r,s)}),(r=>{e((()=>{const s=new ne(B.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return ee(Bd,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget((()=>this.D_===e?n():(ee(Bd,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class f0 extends v_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=yR(this.serializer,e),r=(function(i){if(!("targetChange"in i))return fe.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?fe.min():o.readTime?yn(o.readTime):fe.min()})(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=Al(this.serializer),n.addTarget=(function(i,o){let c;const l=o.target;if(c=vl(l)?{documents:TR(i,l)}:{query:IR(i,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=a_(i,o.resumeToken);const h=Tl(i,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(fe.min())>0){c.readTime=ma(i,o.snapshotVersion.toTimestamp());const h=Tl(i,o.expectedCount);h!==null&&(c.expectedCount=h)}return c})(this.serializer,e);const r=AR(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=Al(this.serializer),n.removeTarget=e,this.q_(n)}}class d0 extends v_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Ve(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ve(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Ve(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=ER(e.writeResults,e.commitTime),r=yn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Al(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map((r=>vR(this.serializer,r)))};this.q_(n)}}/**
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
 */class p0{}class g0 extends p0{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new ne(B.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Go(e,Il(n,r),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ne(B.UNKNOWN,i.toString())}))}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.Ho(e,Il(n,r),s,o,c,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ne(B.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class m0{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Un(n),this.aa=!1):ee("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Kr="RemoteStore";class _0{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((o=>{r.enqueueAndForget((async()=>{Zr(this)&&(ee(Kr,"Restarting streams for network reachability change."),await(async function(l){const h=de(l);h.Ea.add(4),await oo(h),h.Ra.set("Unknown"),h.Ea.delete(4),await Xa(h)})(this))}))})),this.Ra=new m0(r,s)}}async function Xa(t){if(Zr(t))for(const e of t.da)await e(!0)}async function oo(t){for(const e of t.da)await e(!1)}function E_(t,e){const n=de(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Pu(n)?Cu(n):$s(n).O_()&&Ru(n,e))}function Su(t,e){const n=de(t),r=$s(n);n.Ia.delete(e),r.O_()&&T_(n,e),n.Ia.size===0&&(r.O_()?r.L_():Zr(n)&&n.Ra.set("Unknown"))}function Ru(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(fe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}$s(t).Y_(e)}function T_(t,e){t.Va.Ue(e),$s(t).Z_(e)}function Cu(t){t.Va=new hR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),$s(t).start(),t.Ra.ua()}function Pu(t){return Zr(t)&&!$s(t).x_()&&t.Ia.size>0}function Zr(t){return de(t).Ea.size===0}function I_(t){t.Va=void 0}async function y0(t){t.Ra.set("Online")}async function v0(t){t.Ia.forEach(((e,n)=>{Ru(t,e)}))}async function E0(t,e){I_(t),Pu(t)?(t.Ra.ha(e),Cu(t)):t.Ra.set("Unknown")}async function T0(t,e,n){if(t.Ra.set("Online"),e instanceof o_&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ia.delete(c),s.Va.removeTarget(c))})(t,e)}catch(r){ee(Kr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ya(t,r)}else if(e instanceof Bo?t.Va.Ze(e):e instanceof i_?t.Va.st(e):t.Va.tt(e),!n.isEqual(fe.min()))try{const r=await __(t.localStore);n.compareTo(r)>=0&&await(function(i,o){const c=i.Va.Tt(o);return c.targetChanges.forEach(((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.Ia.get(h);f&&i.Ia.set(h,f.withResumeToken(l.resumeToken,o))}})),c.targetMismatches.forEach(((l,h)=>{const f=i.Ia.get(l);if(!f)return;i.Ia.set(l,f.withResumeToken(ut.EMPTY_BYTE_STRING,f.snapshotVersion)),T_(i,l);const p=new lr(f.target,l,h,f.sequenceNumber);Ru(i,p)})),i.remoteSyncer.applyRemoteEvent(c)})(t,n)}catch(r){ee(Kr,"Failed to raise snapshot:",r),await ya(t,r)}}async function ya(t,e,n){if(!Bs(e))throw e;t.Ea.add(1),await oo(t),t.Ra.set("Offline"),n||(n=()=>__(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{ee(Kr,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Xa(t)}))}function w_(t,e){return e().catch((n=>ya(t,n,e)))}async function Za(t){const e=de(t),n=Rr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:du;for(;I0(e);)try{const s=await r0(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,w0(e,s)}catch(s){await ya(e,s)}A_(e)&&b_(e)}function I0(t){return Zr(t)&&t.Ta.length<10}function w0(t,e){t.Ta.push(e);const n=Rr(t);n.O_()&&n.X_&&n.ea(e.mutations)}function A_(t){return Zr(t)&&!Rr(t).x_()&&t.Ta.length>0}function b_(t){Rr(t).start()}async function A0(t){Rr(t).ra()}async function b0(t){const e=Rr(t);for(const n of t.Ta)e.ea(n.mutations)}async function S0(t,e,n){const r=t.Ta.shift(),s=vu.from(r,e,n);await w_(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await Za(t)}async function R0(t,e){e&&Rr(t).X_&&await(async function(r,s){if((function(o){return cR(o)&&o!==B.ABORTED})(s.code)){const i=r.Ta.shift();Rr(r).B_(),await w_(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await Za(r)}})(t,e),A_(t)&&b_(t)}async function $d(t,e){const n=de(t);n.asyncQueue.verifyOperationInProgress(),ee(Kr,"RemoteStore received new credentials");const r=Zr(n);n.Ea.add(3),await oo(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Xa(n)}async function C0(t,e){const n=de(t);e?(n.Ea.delete(2),await Xa(n)):e||(n.Ea.add(2),await oo(n),n.Ra.set("Unknown"))}function $s(t){return t.ma||(t.ma=(function(n,r,s){const i=de(n);return i.sa(),new f0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Xo:y0.bind(null,t),t_:v0.bind(null,t),r_:E0.bind(null,t),H_:T0.bind(null,t)}),t.da.push((async e=>{e?(t.ma.B_(),Pu(t)?Cu(t):t.Ra.set("Unknown")):(await t.ma.stop(),I_(t))}))),t.ma}function Rr(t){return t.fa||(t.fa=(function(n,r,s){const i=de(n);return i.sa(),new d0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:A0.bind(null,t),r_:R0.bind(null,t),ta:b0.bind(null,t),na:S0.bind(null,t)}),t.da.push((async e=>{e?(t.fa.B_(),await Za(t)):(await t.fa.stop(),t.Ta.length>0&&(ee(Kr,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))}))),t.fa}/**
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
 */class ku{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new yr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new ku(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ne(B.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Vu(t,e){if(Un("AsyncQueue",`${e}: ${t}`),Bs(t))return new ne(B.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Es{static emptySet(e){return new Es(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ie.comparator(n.key,r.key):(n,r)=>ie.comparator(n.key,r.key),this.keyedMap=ui(),this.sortedSet=new je(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,r)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Es)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Es;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class jd{constructor(){this.ga=new je(ie.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):le(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal(((n,r)=>{e.push(r)})),e}}class Os{constructor(e,n,r,s,i,o,c,l,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach((c=>{o.push({type:0,doc:c})})),new Os(e,n,Es.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Wa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class P0{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class k0{constructor(){this.queries=qd(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=de(n),i=s.queries;s.queries=qd(),i.forEach(((o,c)=>{for(const l of c.Sa)l.onError(r)}))})(this,new ne(B.ABORTED,"Firestore shutting down"))}}function qd(){return new Yr((t=>zm(t)),Wa)}async function V0(t,e){const n=de(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new P0,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=Vu(o,`Initialization of query '${ls(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&Nu(n)}async function N0(t,e){const n=de(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function O0(t,e){const n=de(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.Sa)c.Fa(s)&&(r=!0);o.wa=s}}r&&Nu(n)}function D0(t,e,n){const r=de(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function Nu(t){t.Ca.forEach((e=>{e.next()}))}var Rl,Hd;(Hd=Rl||(Rl={})).Ma="default",Hd.Cache="cache";class x0{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Os(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Os.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Rl.Cache}}/**
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
 */class S_{constructor(e){this.key=e}}class R_{constructor(e){this.key=e}}class M0{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Ie(),this.mutatedKeys=Ie(),this.eu=Wm(e),this.tu=new Es(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new jd,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((f,p)=>{const m=s.get(f),_=Ka(this.query,p)?p:null,R=!!m&&this.mutatedKeys.has(m.key),N=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let D=!1;m&&_?m.data.isEqual(_.data)?R!==N&&(r.track({type:3,doc:_}),D=!0):this.su(m,_)||(r.track({type:2,doc:_}),D=!0,(l&&this.eu(_,l)>0||h&&this.eu(_,h)<0)&&(c=!0)):!m&&_?(r.track({type:0,doc:_}),D=!0):m&&!_&&(r.track({type:1,doc:m}),D=!0,(l||h)&&(c=!0)),D&&(_?(o=o.add(_),i=N?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Cs:c,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((f,p)=>(function(_,R){const N=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return le(20277,{Rt:D})}};return N(_)-N(R)})(f.type,p.type)||this.eu(f.doc,p.doc))),this.ou(r),s=s??!1;const c=n&&!s?this._u():[],l=this.Xa.size===0&&this.current&&!s?1:0,h=l!==this.Za;return this.Za=l,o.length!==0||h?{snapshot:new Os(this.query,e.tu,i,o,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new jd,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((n=>this.Ya=this.Ya.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ya=this.Ya.delete(n))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Ie(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const n=[];return e.forEach((r=>{this.Xa.has(r)||n.push(new R_(r))})),this.Xa.forEach((r=>{e.has(r)||n.push(new S_(r))})),n}cu(e){this.Ya=e.Qs,this.Xa=Ie();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Os.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Ou="SyncEngine";class L0{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class F0{constructor(e){this.key=e,this.hu=!1}}class U0{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Yr((c=>zm(c)),Wa),this.Iu=new Map,this.Eu=new Set,this.du=new je(ie.comparator),this.Au=new Map,this.Ru=new Iu,this.Vu={},this.mu=new Map,this.fu=Ns.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function B0(t,e,n=!0){const r=O_(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await C_(r,e,n,!0),s}async function $0(t,e){const n=O_(t);await C_(n,e,!0,!1)}async function C_(t,e,n,r){const s=await s0(t.localStore,_n(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await j0(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&E_(t.remoteStore,s),c}async function j0(t,e,n,r,s){t.pu=(p,m,_)=>(async function(N,D,z,q){let G=D.view.ru(z);G.Cs&&(G=await Md(N.localStore,D.query,!1).then((({documents:I})=>D.view.ru(I,G))));const U=q&&q.targetChanges.get(D.targetId),W=q&&q.targetMismatches.get(D.targetId)!=null,K=D.view.applyChanges(G,N.isPrimaryClient,U,W);return Wd(N,D.targetId,K.au),K.snapshot})(t,p,m,_);const i=await Md(t.localStore,e,!0),o=new M0(e,i.Qs),c=o.ru(i.documents),l=io.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(c,t.isPrimaryClient,l);Wd(t,n,h.au);const f=new L0(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),h.snapshot}async function q0(t,e,n){const r=de(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter((o=>!Wa(o,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await bl(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Su(r.remoteStore,s.targetId),Cl(r,s.targetId)})).catch(Us)):(Cl(r,s.targetId),await bl(r.localStore,s.targetId,!0))}async function H0(t,e){const n=de(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Su(n.remoteStore,r.targetId))}async function z0(t,e,n){const r=X0(t);try{const s=await(function(o,c){const l=de(o),h=$e.now(),f=c.reduce(((_,R)=>_.add(R.key)),Ie());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",(_=>{let R=Bn(),N=Ie();return l.Ns.getEntries(_,f).next((D=>{R=D,R.forEach(((z,q)=>{q.isValidDocument()||(N=N.add(z))}))})).next((()=>l.localDocuments.getOverlayedDocuments(_,R))).next((D=>{p=D;const z=[];for(const q of c){const G=rR(q,p.get(q.key).overlayedDocument);G!=null&&z.push(new Xr(q.key,G,Lm(G.value.mapValue),Dn.exists(!0)))}return l.mutationQueue.addMutationBatch(_,h,z,c)})).next((D=>{m=D;const z=D.applyToLocalDocumentSet(p,N);return l.documentOverlayCache.saveOverlays(_,D.batchId,z)}))})).then((()=>({batchId:m.batchId,changes:Gm(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(o,c,l){let h=o.Vu[o.currentUser.toKey()];h||(h=new je(Te)),h=h.insert(c,l),o.Vu[o.currentUser.toKey()]=h})(r,s.batchId,n),await ao(r,s.changes),await Za(r.remoteStore)}catch(s){const i=Vu(s,"Failed to persist write");n.reject(i)}}async function P_(t,e){const n=de(t);try{const r=await t0(n.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=n.Au.get(i);o&&(Ve(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?Ve(o.hu,14607):s.removedDocuments.size>0&&(Ve(o.hu,42227),o.hu=!1))})),await ao(n,r,e)}catch(r){await Us(r)}}function zd(t,e,n){const r=de(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach(((i,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(o,c){const l=de(o);l.onlineState=c;let h=!1;l.queries.forEach(((f,p)=>{for(const m of p.Sa)m.va(c)&&(h=!0)})),h&&Nu(l)})(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function W0(t,e,n){const r=de(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new je(ie.comparator);o=o.insert(i,vt.newNoDocument(i,fe.min()));const c=Ie().add(i),l=new Ja(fe.min(),new Map,new je(Te),o,c);await P_(r,l),r.du=r.du.remove(i),r.Au.delete(e),Du(r)}else await bl(r.localStore,e,!1).then((()=>Cl(r,e,n))).catch(Us)}async function K0(t,e){const n=de(t),r=e.batch.batchId;try{const s=await e0(n.localStore,e);V_(n,r,null),k_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ao(n,s)}catch(s){await Us(s)}}async function G0(t,e,n){const r=de(t);try{const s=await(function(o,c){const l=de(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",(h=>{let f;return l.mutationQueue.lookupMutationBatch(h,c).next((p=>(Ve(p!==null,37113),f=p.keys(),l.mutationQueue.removeMutationBatch(h,p)))).next((()=>l.mutationQueue.performConsistencyCheck(h))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(h,f,c))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f))).next((()=>l.localDocuments.getDocuments(h,f)))}))})(r.localStore,e);V_(r,e,n),k_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ao(r,s)}catch(s){await Us(s)}}function k_(t,e){(t.mu.get(e)||[]).forEach((n=>{n.resolve()})),t.mu.delete(e)}function V_(t,e,n){const r=de(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function Cl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach((r=>{t.Ru.containsKey(r)||N_(t,r)}))}function N_(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Su(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),Du(t))}function Wd(t,e,n){for(const r of n)r instanceof S_?(t.Ru.addReference(r.key,e),Q0(t,r)):r instanceof R_?(ee(Ou,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||N_(t,r.key)):le(19791,{wu:r})}function Q0(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(ee(Ou,"New document in limbo: "+n),t.Eu.add(r),Du(t))}function Du(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new ie(Be.fromString(e)),r=t.fu.next();t.Au.set(r,new F0(n)),t.du=t.du.insert(n,r),E_(t.remoteStore,new lr(_n(Hm(n.path)),r,"TargetPurposeLimboResolution",ja.ce))}}async function ao(t,e,n){const r=de(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach(((c,l)=>{o.push(r.pu(l,e,n).then((h=>{if((h||n)&&r.isPrimaryClient){const f=h?!h.fromCache:n?.targetChanges.get(l.targetId)?.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(h){s.push(h);const f=Au.As(l.targetId,h);i.push(f)}})))})),await Promise.all(o),r.Pu.H_(s),await(async function(l,h){const f=de(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>L.forEach(h,(m=>L.forEach(m.Es,(_=>f.persistence.referenceDelegate.addReference(p,m.targetId,_))).next((()=>L.forEach(m.ds,(_=>f.persistence.referenceDelegate.removeReference(p,m.targetId,_)))))))))}catch(p){if(!Bs(p))throw p;ee(bu,"Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const _=f.Ms.get(m),R=_.snapshotVersion,N=_.withLastLimboFreeSnapshotVersion(R);f.Ms=f.Ms.insert(m,N)}}})(r.localStore,i))}async function J0(t,e){const n=de(t);if(!n.currentUser.isEqual(e)){ee(Ou,"User change. New user:",e.toKey());const r=await m_(n.localStore,e);n.currentUser=e,(function(i,o){i.mu.forEach((c=>{c.forEach((l=>{l.reject(new ne(B.CANCELLED,o))}))})),i.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ao(n,r.Ls)}}function Y0(t,e){const n=de(t),r=n.Au.get(e);if(r&&r.hu)return Ie().add(r.key);{let s=Ie();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const c=n.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}function O_(t){const e=de(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=P_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Y0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=W0.bind(null,e),e.Pu.H_=O0.bind(null,e.eventManager),e.Pu.yu=D0.bind(null,e.eventManager),e}function X0(t){const e=de(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=K0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=G0.bind(null,e),e}class va{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ya(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return ZR(this.persistence,new JR,e.initialUser,this.serializer)}Cu(e){return new g_(wu.mi,this.serializer)}Du(e){return new o0}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}va.provider={build:()=>new va};class Z0 extends va{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Ve(this.persistence.referenceDelegate instanceof _a,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new xR(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Rt.withCacheSize(this.cacheSizeBytes):Rt.DEFAULT;return new g_((r=>_a.mi(r,n)),this.serializer)}}class Pl{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>zd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=J0.bind(null,this.syncEngine),await C0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new k0})()}createDatastore(e){const n=Ya(e.databaseInfo.databaseId),r=(function(i){return new h0(i)})(e.databaseInfo);return(function(i,o,c,l){return new g0(i,o,c,l)})(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return(function(r,s,i,o,c){return new _0(r,s,i,o,c)})(this.localStore,this.datastore,e.asyncQueue,(n=>zd(this.syncEngine,n,0)),(function(){return Ud.v()?new Ud:new a0})())}createSyncEngine(e,n){return(function(s,i,o,c,l,h,f){const p=new U0(s,i,o,c,l,h);return f&&(p.gu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){await(async function(n){const r=de(n);ee(Kr,"RemoteStore shutting down."),r.Ea.add(5),await oo(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Pl.provider={build:()=>new Pl};/**
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
 */class eC{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Un("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
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
 */const Cr="FirestoreClient";class tC{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=_t.UNAUTHENTICATED,this.clientId=hu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async o=>{ee(Cr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(ee(Cr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new yr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Vu(n,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function qc(t,e){t.asyncQueue.verifyOperationInProgress(),ee(Cr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async s=>{r.isEqual(s)||(await m_(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function Kd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await nC(t);ee(Cr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((r=>$d(e.remoteStore,r))),t.setAppCheckTokenChangeListener(((r,s)=>$d(e.remoteStore,s))),t._onlineComponents=e}async function nC(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ee(Cr,"Using user provided OfflineComponentProvider");try{await qc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(s){return s.name==="FirebaseError"?s.code===B.FAILED_PRECONDITION||s.code===B.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;Cs("Error using user provided cache. Falling back to memory cache: "+n),await qc(t,new va)}}else ee(Cr,"Using default OfflineComponentProvider"),await qc(t,new Z0(void 0));return t._offlineComponents}async function D_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ee(Cr,"Using user provided OnlineComponentProvider"),await Kd(t,t._uninitializedComponentsProvider._online)):(ee(Cr,"Using default OnlineComponentProvider"),await Kd(t,new Pl))),t._onlineComponents}function rC(t){return D_(t).then((e=>e.syncEngine))}async function sC(t){const e=await D_(t),n=e.eventManager;return n.onListen=B0.bind(null,e.syncEngine),n.onUnlisten=q0.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=$0.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=H0.bind(null,e.syncEngine),n}function iC(t,e,n={}){const r=new yr;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,c,l,h){const f=new eC({next:m=>{f.Nu(),o.enqueueAndForget((()=>N0(i,p))),m.fromCache&&l.source==="server"?h.reject(new ne(B.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new x0(c,f,{includeMetadataChanges:!0,qa:!0});return V0(i,p)})(await sC(t),t.asyncQueue,e,n,r))),r.promise}/**
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
 */function x_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Gd=new Map;/**
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
 */const M_="firestore.googleapis.com",Qd=!0;class Jd{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ne(B.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=M_,this.ssl=Qd}else this.host=e.host,this.ssl=e.ssl??Qd;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=p_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<OR)throw new ne(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}mS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=x_(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new ne(B.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new ne(B.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new ne(B.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ec{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Jd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ne(B.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ne(B.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Jd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new oS;switch(r.type){case"firstParty":return new uS(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ne(B.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=Gd.get(n);r&&(ee("ComponentProvider","Removing Datastore"),Gd.delete(n),r.terminate())})(this),Promise.resolve()}}function oC(t,e,n,r={}){t=Bi(t,ec);const s=Ds(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},c=`${e}:${n}`;s&&(Vg(`https://${c}`),Ng("Firestore",!0)),i.host!==M_&&i.host!==c&&Cs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:r};if(!qr(l,o)&&(t._setSettings(l),r.mockUserToken)){let h,f;if(typeof r.mockUserToken=="string")h=r.mockUserToken,f=_t.MOCK_USER;else{h=vI(r.mockUserToken,t._app?.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new ne(B.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new _t(p)}t._authCredentials=new aS(new bm(h,f))}}/**
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
 */class tc{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new tc(this.firestore,e,this._query)}}class rt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new vr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new rt(this.firestore,e,this._key)}toJSON(){return{type:rt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(ro(n,rt._jsonSchema))return new rt(e,r||null,new ie(Be.fromString(n.referencePath)))}}rt._jsonSchemaVersion="firestore/documentReference/1.0",rt._jsonSchema={type:Qe("string",rt._jsonSchemaVersion),referencePath:Qe("string")};class vr extends tc{constructor(e,n,r){super(e,n,Hm(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new rt(this.firestore,null,new ie(e))}withConverter(e){return new vr(this.firestore,e,this._path)}}function Dt(t,e,...n){if(t=Ft(t),Sm("collection","path",e),t instanceof ec){const r=Be.fromString(e,...n);return ud(r),new vr(t,null,r)}{if(!(t instanceof rt||t instanceof vr))throw new ne(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Be.fromString(e,...n));return ud(r),new vr(t.firestore,null,r)}}function Hc(t,e,...n){if(t=Ft(t),arguments.length===1&&(e=hu.newId()),Sm("doc","path",e),t instanceof ec){const r=Be.fromString(e,...n);return ld(r),new rt(t,null,new ie(r))}{if(!(t instanceof rt||t instanceof vr))throw new ne(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Be.fromString(e,...n));return ld(r),new rt(t.firestore,t instanceof vr?t.converter:null,new ie(r))}}/**
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
 */const Yd="AsyncQueue";class Xd{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new y_(this,"async_queue_retry"),this._c=()=>{const r=jc();r&&ee(Yd,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=jc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=jc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new yr;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Bs(e))throw e;ee(Yd,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,Un("INTERNAL UNHANDLED ERROR: ",Zd(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=ku.createAndSchedule(this,e,n,r,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&le(47125,{Pc:Zd(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Zd(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class xu extends ec{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Xd,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Xd(e),this._firestoreClient=void 0,await e}}}function aC(t,e){const n=typeof t=="object"?t:Mg(),r=typeof t=="string"?t:ua,s=tu(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=_I("firestore");i&&oC(s,...i)}return s}function L_(t){if(t._terminated)throw new ne(B.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||cC(t),t._firestoreClient}function cC(t){const e=t._freezeSettings(),n=(function(s,i,o,c){return new RS(s,i,o,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,x_(c.experimentalLongPollingOptions),c.useFetchStreams,c.isUsingEmulator)})(t._databaseId,t._app?.options.appId||"",t._persistenceKey,e);t._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new tC(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&(function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}})(t._componentsProvider))}/**
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
 */class $t{constructor(e){this._byteString=e}static fromBase64String(e){try{return new $t(ut.fromBase64String(e))}catch(n){throw new ne(B.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new $t(ut.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:$t._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ro(e,$t._jsonSchema))return $t.fromBase64String(e.bytes)}}$t._jsonSchemaVersion="firestore/bytes/1.0",$t._jsonSchema={type:Qe("string",$t._jsonSchemaVersion),bytes:Qe("string")};/**
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
 */class Mu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ne(B.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new lt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class F_{constructor(e){this._methodName=e}}/**
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
 */class vn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ne(B.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ne(B.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Te(this._lat,e._lat)||Te(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:vn._jsonSchemaVersion}}static fromJSON(e){if(ro(e,vn._jsonSchema))return new vn(e.latitude,e.longitude)}}vn._jsonSchemaVersion="firestore/geoPoint/1.0",vn._jsonSchema={type:Qe("string",vn._jsonSchemaVersion),latitude:Qe("number"),longitude:Qe("number")};/**
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
 */class En{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:En._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ro(e,En._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new En(e.vectorValues);throw new ne(B.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}En._jsonSchemaVersion="firestore/vectorValue/1.0",En._jsonSchema={type:Qe("string",En._jsonSchemaVersion),vectorValues:Qe("object")};/**
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
 */const lC=/^__.*__$/;class uC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Xr(e,this.data,this.fieldMask,n,this.fieldTransforms):new so(e,this.data,n,this.fieldTransforms)}}function U_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw le(40011,{Ac:t})}}class Lu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Lu({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Ea(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(U_(this.Ac)&&lC.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class hC{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ya(e)}Cc(e,n,r,s=!1){return new Lu({Ac:e,methodName:n,Dc:r,path:lt.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function fC(t){const e=t._freezeSettings(),n=Ya(t._databaseId);return new hC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function dC(t,e,n,r,s,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);q_("Data must be an object, but it was:",o,r);const c=$_(r,o);let l,h;if(i.merge)l=new Xt(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=pC(e,p,n);if(!o.contains(m))throw new ne(B.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);mC(f,m)||f.push(m)}l=new Xt(f),h=o.fieldTransforms.filter((p=>l.covers(p.field)))}else l=null,h=o.fieldTransforms;return new uC(new Bt(c),l,h)}function B_(t,e){if(j_(t=Ft(t)))return q_("Unsupported field value:",e,t),$_(t,e);if(t instanceof F_)return(function(r,s){if(!U_(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(r,s){const i=[];let o=0;for(const c of r){let l=B_(c,s.wc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}})(t,e)}return(function(r,s){if((r=Ft(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return YS(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=$e.fromDate(r);return{timestampValue:ma(s.serializer,i)}}if(r instanceof $e){const i=new $e(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ma(s.serializer,i)}}if(r instanceof vn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof $t)return{bytesValue:a_(s.serializer,r._byteString)};if(r instanceof rt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Tu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof En)return(function(o,c){return{mapValue:{fields:{[xm]:{stringValue:Mm},[ha]:{arrayValue:{values:o.toArray().map((h=>{if(typeof h!="number")throw c.Sc("VectorValues must only contain numeric values.");return yu(c.serializer,h)}))}}}}}})(r,s);throw s.Sc(`Unsupported field value: ${fu(r)}`)})(t,e)}function $_(t,e){const n={};return Pm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Jr(t,((r,s)=>{const i=B_(s,e.mc(r));i!=null&&(n[r]=i)})),{mapValue:{fields:n}}}function j_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof $e||t instanceof vn||t instanceof $t||t instanceof rt||t instanceof F_||t instanceof En)}function q_(t,e,n){if(!j_(n)||!Rm(n)){const r=fu(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function pC(t,e,n){if((e=Ft(e))instanceof Mu)return e._internalPath;if(typeof e=="string")return H_(t,e);throw Ea("Field path arguments must be of type string or ",t,!1,void 0,n)}const gC=new RegExp("[~\\*/\\[\\]]");function H_(t,e,n){if(e.search(gC)>=0)throw Ea(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Mu(...e.split("."))._internalPath}catch{throw Ea(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ea(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new ne(B.INVALID_ARGUMENT,c+t+l)}function mC(t,e){return t.some((n=>n.isEqual(e)))}/**
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
 */class z_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new _C(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(W_("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class _C extends z_{data(){return super.data()}}function W_(t,e){return typeof e=="string"?H_(t,e):e instanceof Mu?e._internalPath:e._delegate._internalPath}/**
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
 */function yC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ne(B.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class vC{convertValue(e,n="none"){switch(Sr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return We(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(br(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw le(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Jr(e,((s,i)=>{r[s]=this.convertValue(i,n)})),r}convertVectorValue(e){const n=e.fields?.[ha].arrayValue?.values?.map((r=>We(r.doubleValue)));return new En(n)}convertGeoPoint(e){return new vn(We(e.latitude),We(e.longitude))}convertArray(e,n){return(e.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ha(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ji(e));default:return null}}convertTimestamp(e){const n=Ar(e);return new $e(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Be.fromString(e);Ve(d_(r),9688,{name:e});const s=new qi(r.get(1),r.get(3)),i=new ie(r.popFirst(5));return s.isEqual(n)||Un(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function EC(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class Co{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ts extends z_{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new $o(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(W_("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ne(B.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Ts._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Ts._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ts._jsonSchema={type:Qe("string",Ts._jsonSchemaVersion),bundleSource:Qe("string","DocumentSnapshot"),bundleName:Qe("string"),bundle:Qe("string")};class $o extends Ts{data(e={}){return super.data(e)}}class Is{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Co(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((r=>{e.call(n,new $o(this._firestore,this._userDataWriter,r.key,r,new Co(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ne(B.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((c=>{const l=new $o(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Co(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const l=new $o(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Co(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:TC(c.type),doc:l,oldIndex:h,newIndex:f}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ne(B.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Is._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=hu.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function TC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return le(61501,{type:t})}}Is._jsonSchemaVersion="firestore/querySnapshot/1.0",Is._jsonSchema={type:Qe("string",Is._jsonSchemaVersion),bundleSource:Qe("string","QuerySnapshot"),bundleName:Qe("string"),bundle:Qe("string")};class IC extends vC{constructor(e){super(),this.firestore=e}convertBytes(e){return new $t(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new rt(this.firestore,null,n)}}function Gt(t){t=Bi(t,tc);const e=Bi(t.firestore,xu),n=L_(e),r=new IC(e);return yC(t._query),iC(n,t._query).then((s=>new Is(e,r,t,s)))}function zc(t,e,n){t=Bi(t,rt);const r=Bi(t.firestore,xu),s=EC(t.converter,e);return wC(r,[dC(fC(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Dn.none())])}function wC(t,e){return(function(r,s){const i=new yr;return r.asyncQueue.enqueueAndForget((async()=>z0(await rC(r),s,i))),i.promise})(L_(t),e)}(function(e,n=!0){(function(s){Fs=s})(xs),Ss(new Hr("firestore",((r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new xu(new cS(r.getProvider("auth-internal")),new hS(o,r.getProvider("app-check-internal")),(function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new ne(B.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qi(h.options.projectId,f)})(o,s),o);return i={useFetchStreams:n,...i},c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),gr(id,od,e),gr(id,od,"esm2020")})();const AC={apiKey:"AIzaSyCgwtwWLYO3mx64YqmiGLOYzVShiKyocYI",authDomain:"gedankenpfade-a2cc9.firebaseapp.com",projectId:"gedankenpfade-a2cc9",storageBucket:"gedankenpfade-a2cc9.firebasestorage.app",messagingSenderId:"555433406669",appId:"1:555433406669:web:ac0ace641bba0dc33d3984",measurementId:"G-52YWXEG0EK"},bC=xg(AC),tr=aC(bC),nc=Gl("user",()=>{const t=ve([]),e=ve(null);async function n(){try{const i=await Gt(Dt(tr,"users"));t.value=i.docs.map(o=>o.data())}catch(i){console.error("Fehler beim Abrufen der Benutzer:",i)}}async function r(i){t.value.length===0&&await n();const o=t.value.find(c=>c.userId===i||null);o==null?(console.error("Nutzer nicht gefunden!"),e.value={username:"unbekannt",userId:i}):e.value=o}function s(){e.value=null}return{setLoggedinUser:r,unsetLoggedinUser:s,loggedinUser:e}}),rc=Gl("auth",()=>{const t=ve(null),e=ve(null),n=nc();async function r(i,o){const c=rd();try{const l=await qA(c,i,o);t.value=l.user,t.value.email&&n.setLoggedinUser(t.value.uid),e.value=null}catch(l){l=l.message,console.error("Fehler bei der Anmeldung:",l)}}async function s(){const i=rd();try{await WA(i),t.value=null,n.unsetLoggedinUser(),e.value=null}catch(o){o=o.message,console.error("Fehler bei der Abmeldung:",o)}}return{login:r,logout:s,error:e,currentUser:t}}),SC={class:"login-register modal-overlay"},RC={class:"login-modal"},CC={class:"login"},PC={key:0},kC=st({__name:"Login",emits:["closeModal"],setup(t,{emit:e}){const n=rc(),r=ve(""),s=ve(""),i=e,o=n.error;function c(){n.login(r.value,s.value),i("closeModal")}return(l,h)=>(re(),he("div",SC,[P("div",RC,[P("div",CC,[h[3]||(h[3]=P("h2",null,"Login",-1)),Ut(P("input",{"onUpdate:modelValue":h[0]||(h[0]=f=>r.value=f),placeholder:"E-Mail"},null,512),[[Qt,r.value]]),Ut(P("input",{"onUpdate:modelValue":h[1]||(h[1]=f=>s.value=f),type:"password",placeholder:"Passwort"},null,512),[[Qt,s.value]]),P("button",{onClick:c},"Anmelden"),ze(o)?(re(),he("p",PC,we(ze(o)),1)):en("",!0)]),P("button",{onClick:h[2]||(h[2]=f=>i("closeModal"))},"Abbrechen")])]))}}),Fu=zt(kC,[["__scopeId","data-v-9b999bd5"]]),on=Gl("books",()=>{const t=ve([]),e=ve([]),n=ve([]),r=ve([]),s=ve([]),i=ve([]),o=ve([]);function c(U){switch(U){case"autism":case"Autismus":return"autism-books";case"ff":case"Fanfiction":return"ff-books";case"glasschild":case"Glaskind":return"glasschild-books";case"other":case"Anderes":return"other-books";case"queer":case"Queer":return"queer-books";default:return"unknown"}}async function l(){if(t.value.length==0){const U=Dt(tr,"queer-books");t.value=await Promise.all((await Gt(U)).docs.map(async W=>{const K=W.data(),I=Dt(W.ref,"Inhalt"),y=(await Gt(I)).docs.map(v=>({title:v.data().titel,content:v.data().text,id:v.data().id}));return{title:K.titel,author:K.autor,id:K.id,description:K.beschreibung,category:K.kategorie,content:y,createdBy:K.erstelltVon}}))}}async function h(){if(e.value.length==0){const U=Dt(tr,"ff-books");e.value=await Promise.all((await Gt(U)).docs.map(async W=>{const K=W.data(),I=Dt(W.ref,"Inhalt"),y=(await Gt(I)).docs.map(v=>({title:v.data().titel,content:v.data().text,id:v.data().id}));return{title:K.titel,author:K.autor,id:K.id,description:K.beschreibung,category:K.kategorie,content:y,createdBy:K.erstelltVon}}))}}async function f(){if(n.value.length==0){const U=Dt(tr,"other-books");n.value=await Promise.all((await Gt(U)).docs.map(async W=>{const K=W.data(),I=Dt(W.ref,"Inhalt"),y=(await Gt(I)).docs.map(v=>({title:v.data().titel,content:v.data().text,id:v.data().id}));return{title:K.titel,author:K.autor,id:K.id,description:K.beschreibung,category:K.kategorie,content:y,createdBy:K.erstelltVon}}))}}async function p(){if(r.value.length==0){const U=Dt(tr,"autism-books");r.value=await Promise.all((await Gt(U)).docs.map(async W=>{const K=W.data(),I=Dt(W.ref,"Inhalt"),y=(await Gt(I)).docs.map(v=>({title:v.data().titel,content:v.data().text,id:v.data().id}));return{title:K.titel,author:K.autor,id:K.id,description:K.beschreibung,category:K.kategorie,content:y,createdBy:K.erstelltVon}}))}}async function m(){if(s.value.length==0){const U=Dt(tr,"glasschild-books");s.value=await Promise.all((await Gt(U)).docs.map(async W=>{const K=W.data(),I=Dt(W.ref,"Inhalt"),y=(await Gt(I)).docs.map(v=>({title:v.data().titel,content:v.data().text,id:v.data().id}));return{title:K.titel,author:K.autor,id:K.id,description:K.beschreibung,category:K.kategorie,content:y,createdBy:K.erstelltVon}}))}}async function _(){await l(),await h(),await f(),await p(),await m(),i.value=[...t.value,...e.value,...n.value,...r.value,...s.value],console.log("Found "+i.value.length+" books")}async function R(U,W){if(W==="queer"){t.value.length===0&&await l();const K=t.value.find(I=>I.title===U);return K===void 0?null:K}else if(W=="glasschild"){s.value.length===0&&await m();const K=s.value.find(I=>I.title===U);return K===void 0?null:K}else return console.error("Unsupported category"),null}async function N(U,W){i.value.length==0&&await _(),console.log("author: ",W);const K=i.value.find(I=>I.title===U&&I.author===W);return console.log(K),K??{}}async function D(U){try{const W=c(U.category),K={autor:U.author,beschreibung:U.description,kategorie:W.split("-")[0],titel:U.title,zielgruppe:"",erstelltVon:U.createdBy},I=Hc(tr,`${W}`,U.title);await zc(I,K);const y=Dt(I,"Inhalt");U.content.forEach(async v=>{await zc(Hc(y,"Kapitel"+v.id.toString()),{id:v.id,titel:v.title,text:v.content})}),console.log("added new book")}catch(W){console.error("Fehler beim Hinzufügen des Buchs: ",W)}}async function z(U,W){try{const K=c(U.category),I=Dt(tr,`${K}/${U.title}/Inhalt`);console.log(`Pfad:${K}/${U.title}/Inhalt`),await zc(Hc(I,"Kapitel"+W.id.toString()),{id:W.id,titel:W.title,text:W.content}),o.value.forEach(y=>{y.title===U.title&&y.content.push(W)}),console.log("added new chapter")}catch(K){console.error("Fehler: ",K)}}async function q(U){try{console.log("changing information of book")}catch(W){console.error("Fehler beim Ändern der Informationen des Buchs! ",W)}}async function G(U){o.value.length==0&&(await _(),i.value.forEach(W=>{W.createdBy===U&&o.value.push(W)}))}return{fetchQueerBooks:l,fetchFfBooks:h,fetchOtherBooks:f,fetchAutismBooks:p,fetchGlassChildBooks:m,getAllBooks:_,getBooksFromAuthor:G,getBookByName:R,getBookByAuthor:N,addNewBook:D,addChapterToBook:z,changeBookInformation:q,queerBooks:t,ffBooks:e,otherBooks:n,autismBooks:r,glassChildBooks:s,authorsBooks:o}}),VC={class:"background-container hp-bg"},NC={class:"content-container"},OC={class:"bookshelf"},DC={class:"shelf-layer"},xC={class:"shelf-layer"},MC=st({__name:"Homepage",setup(t){const e=on(),n=rc(),r=Ct(()=>n.currentUser!=null);yi("loggedIn",r);const s=ve(!1);sn(async()=>{await e.getAllBooks()});function i(){Ta.push({name:"Autorenuebersicht"})}function o(){n.currentUser==null?s.value=!0:n.logout()}return(c,l)=>{const h=jn("RouterLink");return re(),he(Re,null,[me(qn,{title:"Gedankenpfade",type:"main",onLogin:l[0]||(l[0]=f=>o())}),P("div",VC,[P("div",NC,[P("div",OC,[l[3]||(l[3]=P("h3",null,"Queere Werke",-1)),P("div",DC,[(re(!0),he(Re,null,Pt(ze(e).queerBooks,f=>(re(),fr(h,{class:"book",to:{name:"Inhaltsverzeichnis",params:{category:f.category.toString(),title:f.title.toString()}}},{default:tn(()=>[P("span",null,we(f.title),1),P("span",null,we(f.author),1)]),_:2},1032,["to"]))),256)),me(bf,{class:"further-books",link:"/queer",icon:!0,text:"Weitere Bücher ansehen"})]),l[4]||(l[4]=P("h3",null,"Child of Glass",-1)),P("div",xC,[(re(!0),he(Re,null,Pt(ze(e).glassChildBooks,f=>(re(),fr(h,{class:"book",to:{name:"Inhaltsverzeichnis",params:{category:f.category.toString(),title:f.title.toString()}}},{default:tn(()=>[P("span",null,we(f.title),1),P("span",null,we(f.author),1)]),_:2},1032,["to"]))),256)),me(bf,{class:"further-books",link:"/child-of-glass",icon:!0,text:"Weitere Bücher ansehen"})]),l[5]||(l[5]=P("h3",null,"Harry Potter Fanfictions",-1)),l[6]||(l[6]=P("div",{class:"shelf-layer"},null,-1)),l[7]||(l[7]=P("h3",null,"Autismus",-1)),l[8]||(l[8]=P("div",{class:"shelf-layer"},null,-1))])])]),me(bn,{onAuthorLogin:l[1]||(l[1]=f=>i()),type:"main",title:"Tschüss"}),s.value?(re(),fr(Fu,{key:0,onCloseModal:l[2]||(l[2]=f=>s.value=!1)})):en("",!0)],64)}}}),LC=zt(MC,[["__scopeId","data-v-dca315f6"]]),FC={class:"book-description"},UC={class:"book-infos"},BC={class:"info-group"},$C={class:"info-group"},jC={class:"info-group"},qC=st({__name:"BookDescription",props:{book:{}},setup(t){return(e,n)=>{const r=jn("RouterLink");return re(),he("div",FC,[me(r,{class:"book-cover",to:{name:"Inhaltsverzeichnis",params:{category:e.book.category.toString(),title:e.book.title.toString()}}},null,8,["to"]),P("div",UC,[P("p",BC,[n[0]||(n[0]=P("span",null,"Titel: ",-1)),P("span",null,we(e.book.title),1)]),P("p",$C,[n[1]||(n[1]=P("span",null,"Autor: ",-1)),P("span",null,we(e.book.author),1)]),P("p",jC,[n[2]||(n[2]=P("span",null,"Beschreibung: ",-1)),P("span",null,we(e.book.description),1)]),me(r,{to:{name:"Inhaltsverzeichnis",params:{category:e.book.category.toString(),title:e.book.title.toString()}}},{default:tn(()=>[...n[3]||(n[3]=[Ir("Jetzt lesen -> ",-1)])]),_:1},8,["to"])])])}}}),K_=zt(qC,[["__scopeId","data-v-231b0f54"]]),HC={class:"background-container queer-bg"},zC={class:"content-container"},WC={class:"shelf"},KC=st({__name:"QueerBookshelf",setup(t){const e=on();return sn(async()=>{await e.fetchQueerBooks()}),(n,r)=>(re(),he(Re,null,[me(qn,{type:"queer",title:"Queere Werke"}),P("div",HC,[P("div",zC,[P("div",WC,[(re(!0),he(Re,null,Pt(ze(e).queerBooks,s=>(re(),fr(K_,{book:s},null,8,["book"]))),256))])])]),me(bn,{type:"queer",title:""})],64))}}),GC={class:"background-container ff-bg"},QC={class:"content-container"},JC={class:"shelf"},YC={class:"book-details"},XC={class:"bookshelf-description"},ZC={class:"info-group"},eP={class:"info-group"},tP={class:"info-group"},nP=st({__name:"FanfictionBookshelf",setup(t){const e=on();return sn(async()=>{await e.fetchFfBooks()}),(n,r)=>{const s=jn("RouterLink");return re(),he(Re,null,[me(qn,{type:"ff",title:"Fanfiction"}),P("div",GC,[P("div",QC,[P("div",JC,[(re(!0),he(Re,null,Pt(ze(e).ffBooks,i=>(re(),he("div",YC,[r[4]||(r[4]=P("div",{class:"book-cover"},null,-1)),P("div",XC,[P("p",ZC,[r[0]||(r[0]=P("span",null,"Titel: ",-1)),P("span",null,we(i.title),1)]),P("p",eP,[r[1]||(r[1]=P("span",null,"Autor: ",-1)),P("span",null,we(i.author),1)]),P("p",tP,[r[2]||(r[2]=P("span",null,"Beschreibung: ",-1)),P("span",null,we(i.description),1)]),me(s,{to:{name:"Inhaltsverzeichnis",params:{category:i.category.toString(),title:i.title.toString()}}},{default:tn(()=>[...r[3]||(r[3]=[Ir("Jetzt lesen -> ",-1)])]),_:1},8,["to"])])]))),256))])])]),me(bn,{type:"ff",title:""})],64)}}}),rP={class:"background-container autism-bg"},sP={class:"content-container"},iP={class:"shelf"},oP={class:"book-details"},aP={class:"bookshelf-description"},cP={class:"info-group"},lP={class:"info-group"},uP={class:"info-group"},hP=st({__name:"AutismBookshelf",setup(t){const e=on();return sn(async()=>{await e.fetchAutismBooks()}),(n,r)=>{const s=jn("RouterLink");return re(),he(Re,null,[me(qn,{type:"autism",title:"Autismus (er)leben"}),P("div",rP,[P("div",sP,[P("div",iP,[(re(!0),he(Re,null,Pt(ze(e).autismBooks,i=>(re(),he("div",oP,[r[4]||(r[4]=P("div",{class:"book-cover"},null,-1)),P("div",aP,[P("p",cP,[r[0]||(r[0]=P("span",null,"Titel: ",-1)),P("span",null,we(i.title),1)]),P("p",lP,[r[1]||(r[1]=P("span",null,"Autor: ",-1)),P("span",null,we(i.author),1)]),P("p",uP,[r[2]||(r[2]=P("span",null,"Beschreibung: ",-1)),P("span",null,we(i.description),1)]),me(s,{to:{name:"Inhaltsverzeichnis",params:{category:i.category.toString(),title:i.title.toString()}}},{default:tn(()=>[...r[3]||(r[3]=[Ir("Jetzt lesen -> ",-1)])]),_:1},8,["to"])])]))),256))])])]),me(bn,{type:"autism",title:""})],64)}}}),fP={class:"addNewBook modal-overlay"},dP={class:"modal"},pP={class:"input"},gP=["value"],mP={class:"autor"},_P={class:"area-input"},yP={class:"area-input"},vP={class:"error"},EP={class:"buttons-group"},TP=st({__name:"AddNewBook",emits:["closeModal"],setup(t,{emit:e}){const n=nc(),r=on(),s=e,i=ve(["Autismus","Fanfiction","Glaskind","Queer","Anderes"]),o=ve(!1),c=ve([]),l=ve({title:"",author:"",description:"",category:"",id:-1,content:[],createdBy:""}),h=ve(1),f=ve({title:"",content:"",id:h.value});function p(){c.value=[],o.value=!1,n.loggedinUser?(l.value.title==""&&(c.value.push("Du musst einen Titel eingeben"),o.value=!0),l.value.category==""&&(c.value.push("Du musst eine Kategorie auswählen!"),o.value=!0),l.value.createdBy=n.loggedinUser.username.toString(),l.value.author==""&&(l.value.author=n.loggedinUser.username.toString()),f.value.title==""&&(f.value.title="Kapitel "+h.value),f.value.content==""&&(c.value.push("Das Kapitel muss etwas enthalten!"),o.value=!0),l.value.content.push(f.value)):(c.value.push("Kein Nutzer eingeloggt"),o.value=!0),o.value||(console.log("Buch: ",l.value),r.addNewBook(l.value),s("closeModal"))}return(m,_)=>(re(),he("div",fP,[P("div",dP,[_[14]||(_[14]=P("h2",null,"Buch hinzufügen",-1)),P("div",pP,[P("div",null,[_[8]||(_[8]=P("label",null,"Buchtitel: ",-1)),Ut(P("input",{type:"text","onUpdate:modelValue":_[0]||(_[0]=R=>l.value.title=R)},null,512),[[Qt,l.value.title]])]),P("div",null,[_[9]||(_[9]=P("label",null,"Kategorie: ",-1)),Ut(P("select",{name:"category",id:"category","onUpdate:modelValue":_[1]||(_[1]=R=>l.value.category=R)},[(re(!0),he(Re,null,Pt(i.value,R=>(re(),he("option",{value:R},we(R),9,gP))),256))],512),[[DE,l.value.category]])])]),P("div",mP,[_[10]||(_[10]=P("label",null,"Autor: ",-1)),Ut(P("input",{type:"textfield","onUpdate:modelValue":_[2]||(_[2]=R=>l.value.author=R)},null,512),[[Qt,l.value.author]])]),P("div",_P,[_[11]||(_[11]=P("label",null,"Klappentext / Beschreibung: ",-1)),Ut(P("textarea",{id:"description","onUpdate:modelValue":_[3]||(_[3]=R=>l.value.description=R),rows:"3",cols:"50",placeholder:"Gib hier deine Beschreibung ein..."},null,512),[[Qt,l.value.description]])]),_[15]||(_[15]=P("hr",null,null,-1)),_[16]||(_[16]=P("h3",null,"Füge dein erstes Kapitel hinzu: ",-1)),P("div",null,[_[12]||(_[12]=P("label",null,"Titel: ",-1)),Ut(P("input",{type:"text","onUpdate:modelValue":_[4]||(_[4]=R=>f.value.title=R)},null,512),[[Qt,f.value.title]])]),P("div",yP,[_[13]||(_[13]=P("label",null,"Text:",-1)),Ut(P("textarea",{id:"chapterText","onUpdate:modelValue":_[5]||(_[5]=R=>f.value.content=R),rows:"10",cols:"50",placeholder:"Gib hier den Text deines ersten Kapitels ein"},null,512),[[Qt,f.value.content]])]),o.value?(re(!0),he(Re,{key:0},Pt(c.value,R=>(re(),he("p",vP,we(R),1))),256)):en("",!0),P("div",EP,[P("button",{onClick:_[6]||(_[6]=R=>m.$emit("closeModal"))},"Abbrechen"),P("button",{onClick:_[7]||(_[7]=R=>p())},"Buch erstellen")])])]))}}),IP=zt(TP,[["__scopeId","data-v-29d55703"]]),wP={key:0,class:"authorspacewrapper body"},AP={class:"content-container"},bP={class:"container-header"},SP={class:"content-container"},RP={class:"container-header"},CP={class:"booklist"},PP={key:2,class:"login modal-overlay"},kP=st({__name:"AuthorSpace",setup(t){const e=rc(),n=nc(),r=on();sn(async()=>{await r.getBooksFromAuthor("Lily Evans-Granger")});const s=ve(!1);return ve(!1),(i,o)=>{const c=jn("RouterLink");return re(),he(Re,null,[ze(e).currentUser?(re(),he("div",wP,[me(qn,{type:"main",title:"Autorenbereich"}),P("div",AP,[P("div",bP,[P("h2",null," Herzlich Willkommen, "+we(ze(n).loggedinUser?.username)+"!",1)])]),o[4]||(o[4]=P("hr",null,null,-1)),P("div",SP,[P("div",RP,[o[2]||(o[2]=P("h2",null,"Meine Bücher:",-1)),P("button",{onClick:o[0]||(o[0]=l=>s.value=!0)},"Neues Buch anlegen")]),P("ul",CP,[(re(!0),he(Re,null,Pt(ze(r).authorsBooks,l=>(re(),he("li",null,[Ir(we(l.title)+": "+we(l.content.length)+" Kapitel ",1),me(c,{to:{name:"Buch bearbeiten",params:{title:l.title.toString()}}},{default:tn(()=>[...o[3]||(o[3]=[Ir("Bearbeiten",-1)])]),_:1},8,["to"])]))),256))])]),me(bn,{type:"main",title:""})])):en("",!0),s.value?(re(),fr(IP,{key:1,onCloseModal:o[1]||(o[1]=l=>s.value=!1)})):en("",!0),ze(e).currentUser?en("",!0):(re(),he("div",PP,[me(Fu)]))],64)}}}),VP=zt(kP,[["__scopeId","data-v-8ec0ea82"]]),NP={class:"content-container"},OP={class:"description"},DP={class:"content"},xP={key:0,class:"contentlist"},MP=st({__name:"Book",setup(t){const e=on(),n=Xl(),r=ve({}),s=ve(""),i=ve("");return sn(async()=>{if(n!=null){const o=n.params.title;n.params.category=="queer"?(r.value=await e.getBookByName(o,"queer"),s.value="queer",i.value="Queer"):(r.value=await e.getBookByName(o,"glasschild"),s.value="glasschild",i.value="Child of Glass")}console.log(r.value)}),(o,c)=>{const l=jn("RouterLink");return re(),he(Re,null,[me(qn,{title:"",type:s.value,"return-path":i.value},null,8,["type","return-path"]),P("div",NP,[P("div",OP,[P("p",null,we(r.value?.title),1),P("p",null,[c[0]||(c[0]=P("span",null,"von ",-1)),P("span",null,we(r.value?.author),1)]),P("p",null,[c[1]||(c[1]=P("span",null,"Beschreibung: ",-1)),P("span",null,we(r.value?.description),1)])]),c[3]||(c[3]=P("hr",null,null,-1)),P("div",DP,[c[2]||(c[2]=P("h3",null,"Inhalt:",-1)),r.value?(re(),he("ol",xP,[(re(!0),he(Re,null,Pt(r.value?.content,(h,f)=>(re(),he("li",null,[me(l,{to:{name:"Kapitel",params:{category:r.value.category.toString(),title:r.value.title.toString(),chapter:f+1}}},{default:tn(()=>[Ir(we(h.title),1)]),_:2},1032,["to"])]))),256))])):en("",!0)])]),me(bn,{title:"",type:s.value},null,8,["type"])],64)}}}),LP=zt(MP,[["__scopeId","data-v-7df733ec"]]),FP={class:"content-container"},UP={class:"chapter"},BP={class:"titel"},$P=["innerHTML"],jP=st({__name:"Chapter",setup(t){const e=on(),n=Xl(),r=ve({}),s=ve({}),i=ve("");return sn(async()=>{if(n!=null){const o=n.params.title;n.params.category=="queer"?(r.value=await e.getBookByName(o,"queer"),i.value="queer"):(r.value=await e.getBookByName(o,"glasschild"),i.value="glasschild"),s.value=r.value?.content.find(l=>l.id===parseInt(n.params.chapter))}}),(o,c)=>(re(),he(Re,null,[P("div",FP,[P("div",UP,[P("h1",BP,we(s.value?.title),1),P("div",{class:"text",innerHTML:s.value?.content},null,8,$P)])]),me(bn,{type:i.value,title:""},null,8,["type"])],64))}}),qP=zt(jP,[["__scopeId","data-v-9f676b66"]]),HP={class:"content-container"},zP={class:"shelf"},WP={class:"book-details"},KP={class:"bookshelf-description"},GP={class:"info-group"},QP={class:"info-group"},JP={class:"info-group"},YP=st({__name:"RandomBookshelf",setup(t){const e=on();return sn(async()=>{await e.fetchOtherBooks()}),(n,r)=>{const s=jn("RouterLink");return re(),he(Re,null,[me(qn,{type:"other",title:"Andere Werke"}),P("div",HP,[P("div",zP,[(re(!0),he(Re,null,Pt(ze(e).otherBooks,i=>(re(),he("div",WP,[r[4]||(r[4]=P("div",{class:"book-cover"},null,-1)),P("div",KP,[P("p",GP,[r[0]||(r[0]=P("span",null,"Titel: ",-1)),P("span",null,we(i.title),1)]),P("p",QP,[r[1]||(r[1]=P("span",null,"Autor: ",-1)),P("span",null,we(i.author),1)]),P("p",JP,[r[2]||(r[2]=P("span",null,"Beschreibung: ",-1)),P("span",null,we(i.description),1)]),me(s,{to:{name:"Inhaltsverzeichnis",params:{category:i.category.toString(),title:i.title.toString()}}},{default:tn(()=>[...r[3]||(r[3]=[Ir("Jetzt lesen -> ",-1)])]),_:1},8,["to"])])]))),256))])]),me(bn,{type:"other",title:""})],64)}}}),XP={class:"background-container glasschild-bg"},ZP={class:"content-container"},e1={class:"shelf"},t1=st({__name:"ChildOfGlassBookshelf",setup(t){const e=on();return sn(async()=>{await e.fetchGlassChildBooks()}),(n,r)=>(re(),he(Re,null,[me(qn,{type:"glasschild",title:"Child of Glass"}),P("div",XP,[P("div",ZP,[P("div",e1,[(re(!0),he(Re,null,Pt(ze(e).glassChildBooks,s=>(re(),fr(K_,{book:s},null,8,["book"]))),256))])])]),me(bn,{type:"glasschild",title:""})],64))}}),n1={key:0,class:"authorspacewrapper body"},r1={class:"content-container"},s1={class:"book-edit-view"},i1={class:"info-column"},o1={class:"autor"},a1={class:"area-input"},c1={class:"chapters-list"},l1=["onClick"],u1={class:"chapter-edit-column"},h1=["disabled"],f1={class:"area-input"},d1={key:1,class:"login modal-overlay"},p1=st({__name:"EditBook",setup(t){const e=rc(),n=nc(),r=on(),s=Xl(),i=ve({}),o=ve({}),c=ve(!1);sn(async()=>{const m=s.params.title;if(e.currentUser){const _=n.loggedinUser?.username;i.value=await r.getBookByAuthor(m,_)||{},o.value=i.value?.content[0]||{}}else console.log("currentUser fehlt")}),ve(!1);function l(m){o.value=i.value.content[m-1]||{},c.value=!1}function h(){o.value={title:"Kapitel "+(i.value.content.length+1),content:"",id:i.value.content.length+1},c.value=!0}function f(){r.addChapterToBook(i.value,o.value),c.value=!1}function p(){r.changeBookInformation(i.value)}return(m,_)=>(re(),he(Re,null,[_[10]||(_[10]=P("div",{class:"loading-spinner"},null,-1)),ze(e).currentUser?(re(),he("div",n1,[me(qn,{type:"main",title:"Autorenbereich"}),P("div",r1,[P("h2",null,'"'+we(i.value?.title)+'" bearbeiten:',1),P("div",s1,[P("div",i1,[P("div",o1,[_[7]||(_[7]=P("label",null,"Autor: ",-1)),Ut(P("input",{type:"textfield","onUpdate:modelValue":_[0]||(_[0]=R=>i.value.author=R)},null,512),[[Qt,i.value.author]])]),P("div",a1,[_[8]||(_[8]=P("label",null,"Klappentext / Beschreibung: ",-1)),Ut(P("textarea",{id:"description","onUpdate:modelValue":_[1]||(_[1]=R=>i.value.description=R),rows:"3",cols:"50",placeholder:"Gib hier deine Beschreibung ein..."},null,512),[[Qt,i.value.description]])]),P("button",{onClick:_[2]||(_[2]=R=>p())},"Änderungen speichern"),P("ul",c1,[(re(!0),he(Re,null,Pt(i.value.content,R=>(re(),he("li",null,[P("button",{onClick:N=>l(R.id)},we(R.title),9,l1)]))),256))]),P("button",{onClick:_[3]||(_[3]=R=>h())},"Kapitel hinzufügen")]),P("div",u1,[P("div",null,[_[9]||(_[9]=P("label",null,"Titel: ",-1)),Ut(P("input",{type:"text","onUpdate:modelValue":_[4]||(_[4]=R=>o.value.title=R),disabled:!c.value},null,8,h1),[[Qt,o.value.title]])]),P("div",f1,[Ut(P("textarea",{id:"text","onUpdate:modelValue":_[5]||(_[5]=R=>o.value.content=R),rows:"3",cols:"50",placeholder:"Text hier einfügen, Formatierung mit HTML-Tags!"},null,512),[[Qt,o.value.content]])]),P("button",{onClick:_[6]||(_[6]=R=>f())},we(c.value?"neues Kapitel speichern":"Änderungen speichern"),1)])])]),me(bn,{type:"main",title:""})])):en("",!0),ze(e).currentUser?en("",!0):(re(),he("div",d1,[me(Fu)]))],64))}}),g1=zt(p1,[["__scopeId","data-v-f08c6252"]]),m1=[{path:"/",name:"Home",component:LC},{path:"/queer",name:"Queer",component:KC},{path:"/fanfiction",name:"Fanfiction",component:nP},{path:"/autismus",name:"Autismus (er)leben",component:hP},{path:"/andere",name:"Andere Werke",component:YP},{path:"/child-of-glass",name:"Child of Glass",component:t1},{path:"/:category/:title",name:"Inhaltsverzeichnis",component:LP},{path:"/:category/:title/:chapter",name:"Kapitel",component:qP},{path:"/authorspace",name:"Autorenuebersicht",component:VP},{path:"/authorspace/edit-:title",name:"Buch bearbeiten",component:g1}],Ta=JT({history:ST("/"),routes:m1}),_1=BE(),Uu=LE(QE);Uu.use(_1);Uu.use(Ta);Uu.mount("#app");
