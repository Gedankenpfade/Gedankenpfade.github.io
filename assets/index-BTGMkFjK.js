(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Pl(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const xe={},fs=[],cn=()=>{},Jd=()=>!1,Ia=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Cl=t=>t.startsWith("onUpdate:"),Tt=Object.assign,kl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},yy=Object.prototype.hasOwnProperty,ke=(t,e)=>yy.call(t,e),ue=Array.isArray,ds=t=>Ki(t)==="[object Map]",wa=t=>Ki(t)==="[object Set]",bh=t=>Ki(t)==="[object Date]",pe=t=>typeof t=="function",Je=t=>typeof t=="string",gn=t=>typeof t=="symbol",Fe=t=>t!==null&&typeof t=="object",Yd=t=>(Fe(t)||pe(t))&&pe(t.then)&&pe(t.catch),Xd=Object.prototype.toString,Ki=t=>Xd.call(t),vy=t=>Ki(t).slice(8,-1),Zd=t=>Ki(t)==="[object Object]",Vl=t=>Je(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,fi=Pl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Aa=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},Ey=/-\w/g,qt=Aa(t=>t.replace(Ey,e=>e.slice(1).toUpperCase())),Ty=/\B([A-Z])/g,Hr=Aa(t=>t.replace(Ty,"-$1").toLowerCase()),ba=Aa(t=>t.charAt(0).toUpperCase()+t.slice(1)),_c=Aa(t=>t?`on${ba(t)}`:""),sr=(t,e)=>!Object.is(t,e),ko=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},ep=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},qo=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Sh;const Sa=()=>Sh||(Sh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Nl(t){if(ue(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Je(r)?by(r):Nl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Je(t)||Fe(t))return t}const Iy=/;(?![^(]*\))/g,wy=/:([^]+)/,Ay=/\/\*[^]*?\*\//g;function by(t){const e={};return t.replace(Ay,"").split(Iy).forEach(n=>{if(n){const r=n.split(wy);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Gi(t){let e="";if(Je(t))e=t;else if(ue(t))for(let n=0;n<t.length;n++){const r=Gi(t[n]);r&&(e+=r+" ")}else if(Fe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Sy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ry=Pl(Sy);function tp(t){return!!t||t===""}function Py(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Ra(t[r],e[r]);return n}function Ra(t,e){if(t===e)return!0;let n=bh(t),r=bh(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=gn(t),r=gn(e),n||r)return t===e;if(n=ue(t),r=ue(e),n||r)return n&&r?Py(t,e):!1;if(n=Fe(t),r=Fe(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(c&&!l||!c&&l||!Ra(t[o],e[o]))return!1}}return String(t)===String(e)}function Cy(t,e){return t.findIndex(n=>Ra(n,e))}const np=t=>!!(t&&t.__v_isRef===!0),Se=t=>Je(t)?t:t==null?"":ue(t)||Fe(t)&&(t.toString===Xd||!pe(t.toString))?np(t)?Se(t.value):JSON.stringify(t,rp,2):String(t),rp=(t,e)=>np(e)?rp(t,e.value):ds(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[yc(r,i)+" =>"]=s,n),{})}:wa(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>yc(n))}:gn(e)?yc(e):Fe(e)&&!ue(e)&&!Zd(e)?String(e):e,yc=(t,e="")=>{var n;return gn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let gt;class sp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=gt,!e&&gt&&(this.index=(gt.scopes||(gt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=gt;try{return gt=this,e()}finally{gt=n}}}on(){++this._on===1&&(this.prevScope=gt,gt=this)}off(){this._on>0&&--this._on===0&&(gt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function ip(t){return new sp(t)}function op(){return gt}function ky(t,e=!1){gt&&gt.cleanups.push(t)}let Le;const vc=new WeakSet;class ap{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,gt&&gt.active&&gt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,vc.has(this)&&(vc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||lp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Rh(this),up(this);const e=Le,n=Yt;Le=this,Yt=!0;try{return this.fn()}finally{hp(this),Le=e,Yt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)xl(e);this.deps=this.depsTail=void 0,Rh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?vc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){qc(this)&&this.run()}get dirty(){return qc(this)}}let cp=0,di,pi;function lp(t,e=!1){if(t.flags|=8,e){t.next=pi,pi=t;return}t.next=di,di=t}function Ol(){cp++}function Dl(){if(--cp>0)return;if(pi){let e=pi;for(pi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;di;){let e=di;for(di=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function up(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function hp(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),xl(r),Vy(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function qc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(fp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function fp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ki)||(t.globalVersion=ki,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!qc(t))))return;t.flags|=2;const e=t.dep,n=Le,r=Yt;Le=t,Yt=!0;try{up(t);const s=t.fn(t._value);(e.version===0||sr(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Le=n,Yt=r,hp(t),t.flags&=-3}}function xl(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)xl(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Vy(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Yt=!0;const dp=[];function kn(){dp.push(Yt),Yt=!1}function Vn(){const t=dp.pop();Yt=t===void 0?!0:t}function Rh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Le;Le=void 0;try{e()}finally{Le=n}}}let ki=0;class Ny{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ml{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Le||!Yt||Le===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Le)n=this.activeLink=new Ny(Le,this),Le.deps?(n.prevDep=Le.depsTail,Le.depsTail.nextDep=n,Le.depsTail=n):Le.deps=Le.depsTail=n,pp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Le.depsTail,n.nextDep=void 0,Le.depsTail.nextDep=n,Le.depsTail=n,Le.deps===n&&(Le.deps=r)}return n}trigger(e){this.version++,ki++,this.notify(e)}notify(e){Ol();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Dl()}}}function pp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)pp(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ho=new WeakMap,Lr=Symbol(""),Hc=Symbol(""),Vi=Symbol("");function yt(t,e,n){if(Yt&&Le){let r=Ho.get(t);r||Ho.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Ml),s.map=r,s.key=n),s.track()}}function Sn(t,e,n,r,s,i){const o=Ho.get(t);if(!o){ki++;return}const c=l=>{l&&l.trigger()};if(Ol(),e==="clear")o.forEach(c);else{const l=ue(t),u=l&&Vl(n);if(l&&n==="length"){const f=Number(r);o.forEach((p,m)=>{(m==="length"||m===Vi||!gn(m)&&m>=f)&&c(p)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),u&&c(o.get(Vi)),e){case"add":l?u&&c(o.get("length")):(c(o.get(Lr)),ds(t)&&c(o.get(Hc)));break;case"delete":l||(c(o.get(Lr)),ds(t)&&c(o.get(Hc)));break;case"set":ds(t)&&c(o.get(Lr));break}}Dl()}function Oy(t,e){const n=Ho.get(t);return n&&n.get(e)}function rs(t){const e=Re(t);return e===t?e:(yt(e,"iterate",Vi),$t(t)?e:e.map(at))}function Pa(t){return yt(t=Re(t),"iterate",Vi),t}const Dy={__proto__:null,[Symbol.iterator](){return Ec(this,Symbol.iterator,at)},concat(...t){return rs(this).concat(...t.map(e=>ue(e)?rs(e):e))},entries(){return Ec(this,"entries",t=>(t[1]=at(t[1]),t))},every(t,e){return In(this,"every",t,e,void 0,arguments)},filter(t,e){return In(this,"filter",t,e,n=>n.map(at),arguments)},find(t,e){return In(this,"find",t,e,at,arguments)},findIndex(t,e){return In(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return In(this,"findLast",t,e,at,arguments)},findLastIndex(t,e){return In(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return In(this,"forEach",t,e,void 0,arguments)},includes(...t){return Tc(this,"includes",t)},indexOf(...t){return Tc(this,"indexOf",t)},join(t){return rs(this).join(t)},lastIndexOf(...t){return Tc(this,"lastIndexOf",t)},map(t,e){return In(this,"map",t,e,void 0,arguments)},pop(){return ri(this,"pop")},push(...t){return ri(this,"push",t)},reduce(t,...e){return Ph(this,"reduce",t,e)},reduceRight(t,...e){return Ph(this,"reduceRight",t,e)},shift(){return ri(this,"shift")},some(t,e){return In(this,"some",t,e,void 0,arguments)},splice(...t){return ri(this,"splice",t)},toReversed(){return rs(this).toReversed()},toSorted(t){return rs(this).toSorted(t)},toSpliced(...t){return rs(this).toSpliced(...t)},unshift(...t){return ri(this,"unshift",t)},values(){return Ec(this,"values",at)}};function Ec(t,e,n){const r=Pa(t),s=r[e]();return r!==t&&!$t(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const xy=Array.prototype;function In(t,e,n,r,s,i){const o=Pa(t),c=o!==t&&!$t(t),l=o[e];if(l!==xy[e]){const p=l.apply(t,i);return c?at(p):p}let u=n;o!==t&&(c?u=function(p,m){return n.call(this,at(p),m,t)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,t)}));const f=l.call(o,u,r);return c&&s?s(f):f}function Ph(t,e,n,r){const s=Pa(t);let i=n;return s!==t&&($t(t)?n.length>3&&(i=function(o,c,l){return n.call(this,o,c,l,t)}):i=function(o,c,l){return n.call(this,o,at(c),l,t)}),s[e](i,...r)}function Tc(t,e,n){const r=Re(t);yt(r,"iterate",Vi);const s=r[e](...n);return(s===-1||s===!1)&&Ul(n[0])?(n[0]=Re(n[0]),r[e](...n)):s}function ri(t,e,n=[]){kn(),Ol();const r=Re(t)[e].apply(t,n);return Dl(),Vn(),r}const My=Pl("__proto__,__v_isRef,__isVue"),mp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(gn));function Ly(t){gn(t)||(t=String(t));const e=Re(this);return yt(e,"has",t),e.hasOwnProperty(t)}class gp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Ky:Ep:i?vp:yp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ue(e);if(!s){let l;if(o&&(l=Dy[n]))return l;if(n==="hasOwnProperty")return Ly}const c=Reflect.get(e,n,Ke(e)?e:r);return(gn(n)?mp.has(n):My(n))||(s||yt(e,"get",n),i)?c:Ke(c)?o&&Vl(n)?c:c.value:Fe(c)?s?Ip(c):Qi(c):c}}class _p extends gp{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=dr(i);if(!$t(r)&&!dr(r)&&(i=Re(i),r=Re(r)),!ue(e)&&Ke(i)&&!Ke(r))return l||(i.value=r),!0}const o=ue(e)&&Vl(n)?Number(n)<e.length:ke(e,n),c=Reflect.set(e,n,r,Ke(e)?e:s);return e===Re(s)&&(o?sr(r,i)&&Sn(e,"set",n,r):Sn(e,"add",n,r)),c}deleteProperty(e,n){const r=ke(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Sn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!gn(n)||!mp.has(n))&&yt(e,"has",n),r}ownKeys(e){return yt(e,"iterate",ue(e)?"length":Lr),Reflect.ownKeys(e)}}class Fy extends gp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Uy=new _p,By=new Fy,$y=new _p(!0);const zc=t=>t,vo=t=>Reflect.getPrototypeOf(t);function jy(t,e,n){return function(...r){const s=this.__v_raw,i=Re(s),o=ds(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),f=n?zc:e?zo:at;return!e&&yt(i,"iterate",l?Hc:Lr),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:c?[f(p[0]),f(p[1])]:f(p),done:m}},[Symbol.iterator](){return this}}}}function Eo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function qy(t,e){const n={get(s){const i=this.__v_raw,o=Re(i),c=Re(s);t||(sr(s,c)&&yt(o,"get",s),yt(o,"get",c));const{has:l}=vo(o),u=e?zc:t?zo:at;if(l.call(o,s))return u(i.get(s));if(l.call(o,c))return u(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&yt(Re(s),"iterate",Lr),s.size},has(s){const i=this.__v_raw,o=Re(i),c=Re(s);return t||(sr(s,c)&&yt(o,"has",s),yt(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=Re(c),u=e?zc:t?zo:at;return!t&&yt(l,"iterate",Lr),c.forEach((f,p)=>s.call(i,u(f),u(p),o))}};return Tt(n,t?{add:Eo("add"),set:Eo("set"),delete:Eo("delete"),clear:Eo("clear")}:{add(s){!e&&!$t(s)&&!dr(s)&&(s=Re(s));const i=Re(this);return vo(i).has.call(i,s)||(i.add(s),Sn(i,"add",s,s)),this},set(s,i){!e&&!$t(i)&&!dr(i)&&(i=Re(i));const o=Re(this),{has:c,get:l}=vo(o);let u=c.call(o,s);u||(s=Re(s),u=c.call(o,s));const f=l.call(o,s);return o.set(s,i),u?sr(i,f)&&Sn(o,"set",s,i):Sn(o,"add",s,i),this},delete(s){const i=Re(this),{has:o,get:c}=vo(i);let l=o.call(i,s);l||(s=Re(s),l=o.call(i,s)),c&&c.call(i,s);const u=i.delete(s);return l&&Sn(i,"delete",s,void 0),u},clear(){const s=Re(this),i=s.size!==0,o=s.clear();return i&&Sn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=jy(s,t,e)}),n}function Ll(t,e){const n=qy(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ke(n,s)&&s in r?n:r,s,i)}const Hy={get:Ll(!1,!1)},zy={get:Ll(!1,!0)},Wy={get:Ll(!0,!1)};const yp=new WeakMap,vp=new WeakMap,Ep=new WeakMap,Ky=new WeakMap;function Gy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Qy(t){return t.__v_skip||!Object.isExtensible(t)?0:Gy(vy(t))}function Qi(t){return dr(t)?t:Fl(t,!1,Uy,Hy,yp)}function Tp(t){return Fl(t,!1,$y,zy,vp)}function Ip(t){return Fl(t,!0,By,Wy,Ep)}function Fl(t,e,n,r,s){if(!Fe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=Qy(t);if(i===0)return t;const o=s.get(t);if(o)return o;const c=new Proxy(t,i===2?r:n);return s.set(t,c),c}function ir(t){return dr(t)?ir(t.__v_raw):!!(t&&t.__v_isReactive)}function dr(t){return!!(t&&t.__v_isReadonly)}function $t(t){return!!(t&&t.__v_isShallow)}function Ul(t){return t?!!t.__v_raw:!1}function Re(t){const e=t&&t.__v_raw;return e?Re(e):t}function Bl(t){return!ke(t,"__v_skip")&&Object.isExtensible(t)&&ep(t,"__v_skip",!0),t}const at=t=>Fe(t)?Qi(t):t,zo=t=>Fe(t)?Ip(t):t;function Ke(t){return t?t.__v_isRef===!0:!1}function we(t){return wp(t,!1)}function Jy(t){return wp(t,!0)}function wp(t,e){return Ke(t)?t:new Yy(t,e)}class Yy{constructor(e,n){this.dep=new Ml,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Re(e),this._value=n?e:at(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||$t(e)||dr(e);e=r?e:Re(e),sr(e,n)&&(this._rawValue=e,this._value=r?e:at(e),this.dep.trigger())}}function We(t){return Ke(t)?t.value:t}const Xy={get:(t,e,n)=>e==="__v_raw"?t:We(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ke(s)&&!Ke(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Ap(t){return ir(t)?t:new Proxy(t,Xy)}function Zy(t){const e=ue(t)?new Array(t.length):{};for(const n in t)e[n]=tv(t,n);return e}class ev{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Oy(Re(this._object),this._key)}}function tv(t,e,n){const r=t[e];return Ke(r)?r:new ev(t,e,n)}class nv{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Ml(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ki-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Le!==this)return lp(this,!0),!0}get value(){const e=this.dep.track();return fp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function rv(t,e,n=!1){let r,s;return pe(t)?r=t:(r=t.get,s=t.set),new nv(r,s,n)}const To={},Wo=new WeakMap;let Nr;function sv(t,e=!1,n=Nr){if(n){let r=Wo.get(n);r||Wo.set(n,r=[]),r.push(t)}}function iv(t,e,n=xe){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,u=G=>s?G:$t(G)||s===!1||s===0?Rn(G,1):Rn(G);let f,p,m,_,S=!1,k=!1;if(Ke(t)?(p=()=>t.value,S=$t(t)):ir(t)?(p=()=>u(t),S=!0):ue(t)?(k=!0,S=t.some(G=>ir(G)||$t(G)),p=()=>t.map(G=>{if(Ke(G))return G.value;if(ir(G))return u(G);if(pe(G))return l?l(G,2):G()})):pe(t)?e?p=l?()=>l(t,2):t:p=()=>{if(m){kn();try{m()}finally{Vn()}}const G=Nr;Nr=f;try{return l?l(t,3,[_]):t(_)}finally{Nr=G}}:p=cn,e&&s){const G=p,re=s===!0?1/0:s;p=()=>Rn(G(),re)}const O=op(),H=()=>{f.stop(),O&&O.active&&kl(O.effects,f)};if(i&&e){const G=e;e=(...re)=>{G(...re),H()}}let B=k?new Array(t.length).fill(To):To;const z=G=>{if(!(!(f.flags&1)||!f.dirty&&!G))if(e){const re=f.run();if(s||S||(k?re.some((_e,w)=>sr(_e,B[w])):sr(re,B))){m&&m();const _e=Nr;Nr=f;try{const w=[re,B===To?void 0:k&&B[0]===To?[]:B,_];B=re,l?l(e,3,w):e(...w)}finally{Nr=_e}}}else f.run()};return c&&c(z),f=new ap(p),f.scheduler=o?()=>o(z,!1):z,_=G=>sv(G,!1,f),m=f.onStop=()=>{const G=Wo.get(f);if(G){if(l)l(G,4);else for(const re of G)re();Wo.delete(f)}},e?r?z(!0):B=f.run():o?o(z.bind(null,!0),!0):f.run(),H.pause=f.pause.bind(f),H.resume=f.resume.bind(f),H.stop=H,H}function Rn(t,e=1/0,n){if(e<=0||!Fe(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Ke(t))Rn(t.value,e,n);else if(ue(t))for(let r=0;r<t.length;r++)Rn(t[r],e,n);else if(wa(t)||ds(t))t.forEach(r=>{Rn(r,e,n)});else if(Zd(t)){for(const r in t)Rn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Rn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ji(t,e,n,r){try{return r?t(...r):t()}catch(s){Ca(s,e,n)}}function _n(t,e,n,r){if(pe(t)){const s=Ji(t,e,n,r);return s&&Yd(s)&&s.catch(i=>{Ca(i,e,n)}),s}if(ue(t)){const s=[];for(let i=0;i<t.length;i++)s.push(_n(t[i],e,n,r));return s}}function Ca(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||xe;if(e){let c=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,l,u)===!1)return}c=c.parent}if(i){kn(),Ji(i,null,10,[t,l,u]),Vn();return}}ov(t,n,s,r,o)}function ov(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const St=[];let sn=-1;const ps=[];let Qn=null,is=0;const bp=Promise.resolve();let Ko=null;function ka(t){const e=Ko||bp;return t?e.then(this?t.bind(this):t):e}function av(t){let e=sn+1,n=St.length;for(;e<n;){const r=e+n>>>1,s=St[r],i=Ni(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function $l(t){if(!(t.flags&1)){const e=Ni(t),n=St[St.length-1];!n||!(t.flags&2)&&e>=Ni(n)?St.push(t):St.splice(av(e),0,t),t.flags|=1,Sp()}}function Sp(){Ko||(Ko=bp.then(Pp))}function cv(t){ue(t)?ps.push(...t):Qn&&t.id===-1?Qn.splice(is+1,0,t):t.flags&1||(ps.push(t),t.flags|=1),Sp()}function Ch(t,e,n=sn+1){for(;n<St.length;n++){const r=St[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;St.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Rp(t){if(ps.length){const e=[...new Set(ps)].sort((n,r)=>Ni(n)-Ni(r));if(ps.length=0,Qn){Qn.push(...e);return}for(Qn=e,is=0;is<Qn.length;is++){const n=Qn[is];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Qn=null,is=0}}const Ni=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Pp(t){try{for(sn=0;sn<St.length;sn++){const e=St[sn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ji(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;sn<St.length;sn++){const e=St[sn];e&&(e.flags&=-2)}sn=-1,St.length=0,Rp(),Ko=null,(St.length||ps.length)&&Pp()}}let Mt=null,Cp=null;function Go(t){const e=Mt;return Mt=t,Cp=t&&t.type.__scopeId||null,e}function Nn(t,e=Mt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Yo(-1);const i=Go(e);let o;try{o=t(...s)}finally{Go(i),r._d&&Yo(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Jn(t,e){if(Mt===null)return t;const n=Da(Mt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=xe]=e[s];i&&(pe(i)&&(i={mounted:i,updated:i}),i.deep&&Rn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function kr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(kn(),_n(l,n,8,[t.el,c,t,e]),Vn())}}const lv=Symbol("_vte"),uv=t=>t.__isTeleport,hv=Symbol("_leaveCb");function jl(t,e){t.shapeFlag&6&&t.component?(t.transition=e,jl(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function wt(t,e){return pe(t)?Tt({name:t.name},e,{setup:t}):t}function kp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const Qo=new WeakMap;function mi(t,e,n,r,s=!1){if(ue(t)){t.forEach((S,k)=>mi(S,e&&(ue(e)?e[k]:e),n,r,s));return}if(gi(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&mi(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Da(r.component):r.el,o=s?null:i,{i:c,r:l}=t,u=e&&e.r,f=c.refs===xe?c.refs={}:c.refs,p=c.setupState,m=Re(p),_=p===xe?Jd:S=>ke(m,S);if(u!=null&&u!==l){if(kh(e),Je(u))f[u]=null,_(u)&&(p[u]=null);else if(Ke(u)){u.value=null;const S=e;S.k&&(f[S.k]=null)}}if(pe(l))Ji(l,c,12,[o,f]);else{const S=Je(l),k=Ke(l);if(S||k){const O=()=>{if(t.f){const H=S?_(l)?p[l]:f[l]:l.value;if(s)ue(H)&&kl(H,i);else if(ue(H))H.includes(i)||H.push(i);else if(S)f[l]=[i],_(l)&&(p[l]=f[l]);else{const B=[i];l.value=B,t.k&&(f[t.k]=B)}}else S?(f[l]=o,_(l)&&(p[l]=o)):k&&(l.value=o,t.k&&(f[t.k]=o))};if(o){const H=()=>{O(),Qo.delete(t)};H.id=-1,Qo.set(t,H),xt(H,n)}else kh(t),O()}}}function kh(t){const e=Qo.get(t);e&&(e.flags|=8,Qo.delete(t))}Sa().requestIdleCallback;Sa().cancelIdleCallback;const gi=t=>!!t.type.__asyncLoader,Vp=t=>t.type.__isKeepAlive;function fv(t,e){Np(t,"a",e)}function dv(t,e){Np(t,"da",e)}function Np(t,e,n=Et){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Va(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Vp(s.parent.vnode)&&pv(r,e,n,s),s=s.parent}}function pv(t,e,n,r){const s=Va(e,t,r,!0);Op(()=>{kl(r[e],s)},n)}function Va(t,e,n=Et,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{kn();const c=Yi(n),l=_n(e,n,t,o);return c(),Vn(),l});return r?s.unshift(i):s.push(i),i}}const Ln=t=>(e,n=Et)=>{(!xi||t==="sp")&&Va(t,(...r)=>e(...r),n)},mv=Ln("bm"),Tr=Ln("m"),gv=Ln("bu"),_v=Ln("u"),yv=Ln("bum"),Op=Ln("um"),vv=Ln("sp"),Ev=Ln("rtg"),Tv=Ln("rtc");function Iv(t,e=Et){Va("ec",t,e)}const wv="components";function zr(t,e){return bv(wv,t,!0,e)||t}const Av=Symbol.for("v-ndc");function bv(t,e,n=!0,r=!1){const s=Mt||Et;if(s){const i=s.type;{const c=dE(i,!1);if(c&&(c===e||c===qt(e)||c===ba(qt(e))))return i}const o=Vh(s[t]||i[t],e)||Vh(s.appContext[t],e);return!o&&r?i:o}}function Vh(t,e){return t&&(t[e]||t[qt(e)]||t[ba(qt(e))])}function kt(t,e,n,r){let s;const i=n,o=ue(t);if(o||Je(t)){const c=o&&ir(t);let l=!1,u=!1;c&&(l=!$t(t),u=dr(t),t=Pa(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(l?u?zo(at(t[f])):at(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(Fe(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,u=c.length;l<u;l++){const f=c[l];s[l]=e(t[f],f,l,i)}}else s=[];return s}const Wc=t=>t?em(t)?Da(t):Wc(t.parent):null,_i=Tt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Wc(t.parent),$root:t=>Wc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>xp(t),$forceUpdate:t=>t.f||(t.f=()=>{$l(t.update)}),$nextTick:t=>t.n||(t.n=ka.bind(t.proxy)),$watch:t=>Kv.bind(t)}),Ic=(t,e)=>t!==xe&&!t.__isScriptSetup&&ke(t,e),Sv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let u;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Ic(r,e))return o[e]=1,r[e];if(s!==xe&&ke(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&ke(u,e))return o[e]=3,i[e];if(n!==xe&&ke(n,e))return o[e]=4,n[e];Kc&&(o[e]=0)}}const f=_i[e];let p,m;if(f)return e==="$attrs"&&yt(t.attrs,"get",""),f(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==xe&&ke(n,e))return o[e]=4,n[e];if(m=l.config.globalProperties,ke(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Ic(s,e)?(s[e]=n,!0):r!==xe&&ke(r,e)?(r[e]=n,!0):ke(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i,type:o}},c){let l,u;return!!(n[c]||t!==xe&&c[0]!=="$"&&ke(t,c)||Ic(e,c)||(l=i[0])&&ke(l,c)||ke(r,c)||ke(_i,c)||ke(s.config.globalProperties,c)||(u=o.__cssModules)&&u[c])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ke(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Nh(t){return ue(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Kc=!0;function Rv(t){const e=xp(t),n=t.proxy,r=t.ctx;Kc=!1,e.beforeCreate&&Oh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:_,updated:S,activated:k,deactivated:O,beforeDestroy:H,beforeUnmount:B,destroyed:z,unmounted:G,render:re,renderTracked:_e,renderTriggered:w,errorCaptured:y,serverPrefetch:v,expose:b,inheritAttrs:A,components:R,directives:T,filters:qe}=e;if(u&&Pv(u,r,null),o)for(const de in o){const Ie=o[de];pe(Ie)&&(r[de]=Ie.bind(n))}if(s){const de=s.call(n,n);Fe(de)&&(t.data=Qi(de))}if(Kc=!0,i)for(const de in i){const Ie=i[de],Rt=pe(Ie)?Ie.bind(n,n):pe(Ie.get)?Ie.get.bind(n,n):cn,en=!pe(Ie)&&pe(Ie.set)?Ie.set.bind(n):cn,Vt=Ct({get:Rt,set:en});Object.defineProperty(r,de,{enumerable:!0,configurable:!0,get:()=>Vt.value,set:st=>Vt.value=st})}if(c)for(const de in c)Dp(c[de],r,n,de);if(l){const de=pe(l)?l.call(n):l;Reflect.ownKeys(de).forEach(Ie=>{yi(Ie,de[Ie])})}f&&Oh(f,t,"c");function Me(de,Ie){ue(Ie)?Ie.forEach(Rt=>de(Rt.bind(n))):Ie&&de(Ie.bind(n))}if(Me(mv,p),Me(Tr,m),Me(gv,_),Me(_v,S),Me(fv,k),Me(dv,O),Me(Iv,y),Me(Tv,_e),Me(Ev,w),Me(yv,B),Me(Op,G),Me(vv,v),ue(b))if(b.length){const de=t.exposed||(t.exposed={});b.forEach(Ie=>{Object.defineProperty(de,Ie,{get:()=>n[Ie],set:Rt=>n[Ie]=Rt,enumerable:!0})})}else t.exposed||(t.exposed={});re&&t.render===cn&&(t.render=re),A!=null&&(t.inheritAttrs=A),R&&(t.components=R),T&&(t.directives=T),v&&kp(t)}function Pv(t,e,n=cn){ue(t)&&(t=Gc(t));for(const r in t){const s=t[r];let i;Fe(s)?"default"in s?i=jt(s.from||r,s.default,!0):i=jt(s.from||r):i=jt(s),Ke(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Oh(t,e,n){_n(ue(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Dp(t,e,n,r){let s=r.includes(".")?Gp(n,r):()=>n[r];if(Je(t)){const i=e[t];pe(i)&&vi(s,i)}else if(pe(t))vi(s,t.bind(n));else if(Fe(t))if(ue(t))t.forEach(i=>Dp(i,e,n,r));else{const i=pe(t.handler)?t.handler.bind(n):e[t.handler];pe(i)&&vi(s,i,t)}}function xp(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>Jo(l,u,o,!0)),Jo(l,e,o)),Fe(e)&&i.set(e,l),l}function Jo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Jo(t,i,n,!0),s&&s.forEach(o=>Jo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=Cv[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const Cv={data:Dh,props:xh,emits:xh,methods:oi,computed:oi,beforeCreate:bt,created:bt,beforeMount:bt,mounted:bt,beforeUpdate:bt,updated:bt,beforeDestroy:bt,beforeUnmount:bt,destroyed:bt,unmounted:bt,activated:bt,deactivated:bt,errorCaptured:bt,serverPrefetch:bt,components:oi,directives:oi,watch:Vv,provide:Dh,inject:kv};function Dh(t,e){return e?t?function(){return Tt(pe(t)?t.call(this,this):t,pe(e)?e.call(this,this):e)}:e:t}function kv(t,e){return oi(Gc(t),Gc(e))}function Gc(t){if(ue(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function bt(t,e){return t?[...new Set([].concat(t,e))]:e}function oi(t,e){return t?Tt(Object.create(null),t,e):e}function xh(t,e){return t?ue(t)&&ue(e)?[...new Set([...t,...e])]:Tt(Object.create(null),Nh(t),Nh(e??{})):e}function Vv(t,e){if(!t)return e;if(!e)return t;const n=Tt(Object.create(null),t);for(const r in e)n[r]=bt(t[r],e[r]);return n}function Mp(){return{app:null,config:{isNativeTag:Jd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Nv=0;function Ov(t,e){return function(r,s=null){pe(r)||(r=Tt({},r)),s!=null&&!Fe(s)&&(s=null);const i=Mp(),o=new WeakSet,c=[];let l=!1;const u=i.app={_uid:Nv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:mE,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&pe(f.install)?(o.add(f),f.install(u,...p)):pe(f)&&(o.add(f),f(u,...p))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,p){return p?(i.components[f]=p,u):i.components[f]},directive(f,p){return p?(i.directives[f]=p,u):i.directives[f]},mount(f,p,m){if(!l){const _=u._ceVNode||ge(r,s);return _.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(_,f,m),l=!0,u._container=f,f.__vue_app__=u,Da(_.component)}},onUnmount(f){c.push(f)},unmount(){l&&(_n(c,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,p){return i.provides[f]=p,u},runWithContext(f){const p=Fr;Fr=u;try{return f()}finally{Fr=p}}};return u}}let Fr=null;function yi(t,e){if(Et){let n=Et.provides;const r=Et.parent&&Et.parent.provides;r===n&&(n=Et.provides=Object.create(r)),n[t]=e}}function jt(t,e,n=!1){const r=Zp();if(r||Fr){let s=Fr?Fr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&pe(e)?e.call(r&&r.proxy):e}}function Dv(){return!!(Zp()||Fr)}const Lp={},Fp=()=>Object.create(Lp),Up=t=>Object.getPrototypeOf(t)===Lp;function xv(t,e,n,r=!1){const s={},i=Fp();t.propsDefaults=Object.create(null),Bp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Tp(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Mv(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Re(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let m=f[p];if(Na(t.emitsOptions,m))continue;const _=e[m];if(l)if(ke(i,m))_!==i[m]&&(i[m]=_,u=!0);else{const S=qt(m);s[S]=Qc(l,c,S,_,t,!1)}else _!==i[m]&&(i[m]=_,u=!0)}}}else{Bp(t,e,s,i)&&(u=!0);let f;for(const p in c)(!e||!ke(e,p)&&((f=Hr(p))===p||!ke(e,f)))&&(l?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=Qc(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!ke(e,p))&&(delete i[p],u=!0)}u&&Sn(t.attrs,"set","")}function Bp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(fi(l))continue;const u=e[l];let f;s&&ke(s,f=qt(l))?!i||!i.includes(f)?n[f]=u:(c||(c={}))[f]=u:Na(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=Re(n),u=c||xe;for(let f=0;f<i.length;f++){const p=i[f];n[p]=Qc(s,l,p,u[p],t,!ke(u,p))}}return o}function Qc(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=ke(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&pe(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=Yi(s);r=u[n]=l.call(null,e),f()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Hr(n))&&(r=!0))}return r}const Lv=new WeakMap;function $p(t,e,n=!1){const r=n?Lv:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!pe(t)){const f=p=>{l=!0;const[m,_]=$p(p,e,!0);Tt(o,m),_&&c.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return Fe(t)&&r.set(t,fs),fs;if(ue(i))for(let f=0;f<i.length;f++){const p=qt(i[f]);Mh(p)&&(o[p]=xe)}else if(i)for(const f in i){const p=qt(f);if(Mh(p)){const m=i[f],_=o[p]=ue(m)||pe(m)?{type:m}:Tt({},m),S=_.type;let k=!1,O=!0;if(ue(S))for(let H=0;H<S.length;++H){const B=S[H],z=pe(B)&&B.name;if(z==="Boolean"){k=!0;break}else z==="String"&&(O=!1)}else k=pe(S)&&S.name==="Boolean";_[0]=k,_[1]=O,(k||ke(_,"default"))&&c.push(p)}}const u=[o,c];return Fe(t)&&r.set(t,u),u}function Mh(t){return t[0]!=="$"&&!fi(t)}const ql=t=>t==="_"||t==="_ctx"||t==="$stable",Hl=t=>ue(t)?t.map(an):[an(t)],Fv=(t,e,n)=>{if(e._n)return e;const r=Nn((...s)=>Hl(e(...s)),n);return r._c=!1,r},jp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(ql(s))continue;const i=t[s];if(pe(i))e[s]=Fv(s,i,r);else if(i!=null){const o=Hl(i);e[s]=()=>o}}},qp=(t,e)=>{const n=Hl(e);t.slots.default=()=>n},Hp=(t,e,n)=>{for(const r in e)(n||!ql(r))&&(t[r]=e[r])},Uv=(t,e,n)=>{const r=t.slots=Fp();if(t.vnode.shapeFlag&32){const s=e._;s?(Hp(r,e,n),n&&ep(r,"_",s,!0)):jp(e,r)}else e&&qp(t,e)},Bv=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=xe;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:Hp(s,e,n):(i=!e.$stable,jp(e,s)),o=e}else e&&(qp(t,e),o={default:1});if(i)for(const c in s)!ql(c)&&o[c]==null&&delete s[c]},xt=tE;function $v(t){return jv(t)}function jv(t,e){const n=Sa();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:u,setElementText:f,parentNode:p,nextSibling:m,setScopeId:_=cn,insertStaticContent:S}=t,k=(E,I,P,M=null,F=null,D=null,K=void 0,q=null,$=!!I.dynamicChildren)=>{if(E===I)return;E&&!si(E,I)&&(M=x(E),st(E,F,D,!0),E=null),I.patchFlag===-2&&($=!1,I.dynamicChildren=null);const{type:j,ref:ie,shapeFlag:J}=I;switch(j){case Oa:O(E,I,P,M);break;case pr:H(E,I,P,M);break;case Ac:E==null&&B(I,P,M,K);break;case Pe:R(E,I,P,M,F,D,K,q,$);break;default:J&1?re(E,I,P,M,F,D,K,q,$):J&6?T(E,I,P,M,F,D,K,q,$):(J&64||J&128)&&j.process(E,I,P,M,F,D,K,q,$,Z)}ie!=null&&F?mi(ie,E&&E.ref,D,I||E,!I):ie==null&&E&&E.ref!=null&&mi(E.ref,null,D,E,!0)},O=(E,I,P,M)=>{if(E==null)r(I.el=c(I.children),P,M);else{const F=I.el=E.el;I.children!==E.children&&u(F,I.children)}},H=(E,I,P,M)=>{E==null?r(I.el=l(I.children||""),P,M):I.el=E.el},B=(E,I,P,M)=>{[E.el,E.anchor]=S(E.children,I,P,M,E.el,E.anchor)},z=({el:E,anchor:I},P,M)=>{let F;for(;E&&E!==I;)F=m(E),r(E,P,M),E=F;r(I,P,M)},G=({el:E,anchor:I})=>{let P;for(;E&&E!==I;)P=m(E),s(E),E=P;s(I)},re=(E,I,P,M,F,D,K,q,$)=>{I.type==="svg"?K="svg":I.type==="math"&&(K="mathml"),E==null?_e(I,P,M,F,D,K,q,$):v(E,I,F,D,K,q,$)},_e=(E,I,P,M,F,D,K,q)=>{let $,j;const{props:ie,shapeFlag:J,transition:te,dirs:oe}=E;if($=E.el=o(E.type,D,ie&&ie.is,ie),J&8?f($,E.children):J&16&&y(E.children,$,null,M,F,wc(E,D),K,q),oe&&kr(E,null,M,"created"),w($,E,E.scopeId,K,M),ie){for(const Oe in ie)Oe!=="value"&&!fi(Oe)&&i($,Oe,null,ie[Oe],D,M);"value"in ie&&i($,"value",null,ie.value,D),(j=ie.onVnodeBeforeMount)&&rn(j,M,E)}oe&&kr(E,null,M,"beforeMount");const ye=qv(F,te);ye&&te.beforeEnter($),r($,I,P),((j=ie&&ie.onVnodeMounted)||ye||oe)&&xt(()=>{j&&rn(j,M,E),ye&&te.enter($),oe&&kr(E,null,M,"mounted")},F)},w=(E,I,P,M,F)=>{if(P&&_(E,P),M)for(let D=0;D<M.length;D++)_(E,M[D]);if(F){let D=F.subTree;if(I===D||Jp(D.type)&&(D.ssContent===I||D.ssFallback===I)){const K=F.vnode;w(E,K,K.scopeId,K.slotScopeIds,F.parent)}}},y=(E,I,P,M,F,D,K,q,$=0)=>{for(let j=$;j<E.length;j++){const ie=E[j]=q?Yn(E[j]):an(E[j]);k(null,ie,I,P,M,F,D,K,q)}},v=(E,I,P,M,F,D,K)=>{const q=I.el=E.el;let{patchFlag:$,dynamicChildren:j,dirs:ie}=I;$|=E.patchFlag&16;const J=E.props||xe,te=I.props||xe;let oe;if(P&&Vr(P,!1),(oe=te.onVnodeBeforeUpdate)&&rn(oe,P,I,E),ie&&kr(I,E,P,"beforeUpdate"),P&&Vr(P,!0),(J.innerHTML&&te.innerHTML==null||J.textContent&&te.textContent==null)&&f(q,""),j?b(E.dynamicChildren,j,q,P,M,wc(I,F),D):K||Ie(E,I,q,null,P,M,wc(I,F),D,!1),$>0){if($&16)A(q,J,te,P,F);else if($&2&&J.class!==te.class&&i(q,"class",null,te.class,F),$&4&&i(q,"style",J.style,te.style,F),$&8){const ye=I.dynamicProps;for(let Oe=0;Oe<ye.length;Oe++){const be=ye[Oe],ft=J[be],dt=te[be];(dt!==ft||be==="value")&&i(q,be,ft,dt,F,P)}}$&1&&E.children!==I.children&&f(q,I.children)}else!K&&j==null&&A(q,J,te,P,F);((oe=te.onVnodeUpdated)||ie)&&xt(()=>{oe&&rn(oe,P,I,E),ie&&kr(I,E,P,"updated")},M)},b=(E,I,P,M,F,D,K)=>{for(let q=0;q<I.length;q++){const $=E[q],j=I[q],ie=$.el&&($.type===Pe||!si($,j)||$.shapeFlag&198)?p($.el):P;k($,j,ie,null,M,F,D,K,!0)}},A=(E,I,P,M,F)=>{if(I!==P){if(I!==xe)for(const D in I)!fi(D)&&!(D in P)&&i(E,D,I[D],null,F,M);for(const D in P){if(fi(D))continue;const K=P[D],q=I[D];K!==q&&D!=="value"&&i(E,D,q,K,F,M)}"value"in P&&i(E,"value",I.value,P.value,F)}},R=(E,I,P,M,F,D,K,q,$)=>{const j=I.el=E?E.el:c(""),ie=I.anchor=E?E.anchor:c("");let{patchFlag:J,dynamicChildren:te,slotScopeIds:oe}=I;oe&&(q=q?q.concat(oe):oe),E==null?(r(j,P,M),r(ie,P,M),y(I.children||[],P,ie,F,D,K,q,$)):J>0&&J&64&&te&&E.dynamicChildren?(b(E.dynamicChildren,te,P,F,D,K,q),(I.key!=null||F&&I===F.subTree)&&zp(E,I,!0)):Ie(E,I,P,ie,F,D,K,q,$)},T=(E,I,P,M,F,D,K,q,$)=>{I.slotScopeIds=q,E==null?I.shapeFlag&512?F.ctx.activate(I,P,M,K,$):qe(I,P,M,F,D,K,$):ut(E,I,$)},qe=(E,I,P,M,F,D,K)=>{const q=E.component=cE(E,M,F);if(Vp(E)&&(q.ctx.renderer=Z),lE(q,!1,K),q.asyncDep){if(F&&F.registerDep(q,Me,K),!E.el){const $=q.subTree=ge(pr);H(null,$,I,P),E.placeholder=$.el}}else Me(q,E,I,P,F,D,K)},ut=(E,I,P)=>{const M=I.component=E.component;if(Zv(E,I,P))if(M.asyncDep&&!M.asyncResolved){de(M,I,P);return}else M.next=I,M.update();else I.el=E.el,M.vnode=I},Me=(E,I,P,M,F,D,K)=>{const q=()=>{if(E.isMounted){let{next:J,bu:te,u:oe,parent:ye,vnode:Oe}=E;{const Ot=Wp(E);if(Ot){J&&(J.el=Oe.el,de(E,J,K)),Ot.asyncDep.then(()=>{E.isUnmounted||q()});return}}let be=J,ft;Vr(E,!1),J?(J.el=Oe.el,de(E,J,K)):J=Oe,te&&ko(te),(ft=J.props&&J.props.onVnodeBeforeUpdate)&&rn(ft,ye,J,Oe),Vr(E,!0);const dt=Fh(E),Nt=E.subTree;E.subTree=dt,k(Nt,dt,p(Nt.el),x(Nt),E,F,D),J.el=dt.el,be===null&&eE(E,dt.el),oe&&xt(oe,F),(ft=J.props&&J.props.onVnodeUpdated)&&xt(()=>rn(ft,ye,J,Oe),F)}else{let J;const{el:te,props:oe}=I,{bm:ye,m:Oe,parent:be,root:ft,type:dt}=E,Nt=gi(I);Vr(E,!1),ye&&ko(ye),!Nt&&(J=oe&&oe.onVnodeBeforeMount)&&rn(J,be,I),Vr(E,!0);{ft.ce&&ft.ce._def.shadowRoot!==!1&&ft.ce._injectChildStyle(dt);const Ot=E.subTree=Fh(E);k(null,Ot,P,M,E,F,D),I.el=Ot.el}if(Oe&&xt(Oe,F),!Nt&&(J=oe&&oe.onVnodeMounted)){const Ot=I;xt(()=>rn(J,be,Ot),F)}(I.shapeFlag&256||be&&gi(be.vnode)&&be.vnode.shapeFlag&256)&&E.a&&xt(E.a,F),E.isMounted=!0,I=P=M=null}};E.scope.on();const $=E.effect=new ap(q);E.scope.off();const j=E.update=$.run.bind($),ie=E.job=$.runIfDirty.bind($);ie.i=E,ie.id=E.uid,$.scheduler=()=>$l(ie),Vr(E,!0),j()},de=(E,I,P)=>{I.component=E;const M=E.vnode.props;E.vnode=I,E.next=null,Mv(E,I.props,M,P),Bv(E,I.children,P),kn(),Ch(E),Vn()},Ie=(E,I,P,M,F,D,K,q,$=!1)=>{const j=E&&E.children,ie=E?E.shapeFlag:0,J=I.children,{patchFlag:te,shapeFlag:oe}=I;if(te>0){if(te&128){en(j,J,P,M,F,D,K,q,$);return}else if(te&256){Rt(j,J,P,M,F,D,K,q,$);return}}oe&8?(ie&16&&ht(j,F,D),J!==j&&f(P,J)):ie&16?oe&16?en(j,J,P,M,F,D,K,q,$):ht(j,F,D,!0):(ie&8&&f(P,""),oe&16&&y(J,P,M,F,D,K,q,$))},Rt=(E,I,P,M,F,D,K,q,$)=>{E=E||fs,I=I||fs;const j=E.length,ie=I.length,J=Math.min(j,ie);let te;for(te=0;te<J;te++){const oe=I[te]=$?Yn(I[te]):an(I[te]);k(E[te],oe,P,null,F,D,K,q,$)}j>ie?ht(E,F,D,!0,!1,J):y(I,P,M,F,D,K,q,$,J)},en=(E,I,P,M,F,D,K,q,$)=>{let j=0;const ie=I.length;let J=E.length-1,te=ie-1;for(;j<=J&&j<=te;){const oe=E[j],ye=I[j]=$?Yn(I[j]):an(I[j]);if(si(oe,ye))k(oe,ye,P,null,F,D,K,q,$);else break;j++}for(;j<=J&&j<=te;){const oe=E[J],ye=I[te]=$?Yn(I[te]):an(I[te]);if(si(oe,ye))k(oe,ye,P,null,F,D,K,q,$);else break;J--,te--}if(j>J){if(j<=te){const oe=te+1,ye=oe<ie?I[oe].el:M;for(;j<=te;)k(null,I[j]=$?Yn(I[j]):an(I[j]),P,ye,F,D,K,q,$),j++}}else if(j>te)for(;j<=J;)st(E[j],F,D,!0),j++;else{const oe=j,ye=j,Oe=new Map;for(j=ye;j<=te;j++){const it=I[j]=$?Yn(I[j]):an(I[j]);it.key!=null&&Oe.set(it.key,j)}let be,ft=0;const dt=te-ye+1;let Nt=!1,Ot=0;const zt=new Array(dt);for(j=0;j<dt;j++)zt[j]=0;for(j=oe;j<=J;j++){const it=E[j];if(ft>=dt){st(it,F,D,!0);continue}let et;if(it.key!=null)et=Oe.get(it.key);else for(be=ye;be<=te;be++)if(zt[be-ye]===0&&si(it,I[be])){et=be;break}et===void 0?st(it,F,D,!0):(zt[et-ye]=j+1,et>=Ot?Ot=et:Nt=!0,k(it,I[et],P,null,F,D,K,q,$),ft++)}const Zr=Nt?Hv(zt):fs;for(be=Zr.length-1,j=dt-1;j>=0;j--){const it=ye+j,et=I[it],js=I[it+1],br=it+1<ie?js.el||js.placeholder:M;zt[j]===0?k(null,et,P,br,F,D,K,q,$):Nt&&(be<0||j!==Zr[be]?Vt(et,P,br,2):be--)}}},Vt=(E,I,P,M,F=null)=>{const{el:D,type:K,transition:q,children:$,shapeFlag:j}=E;if(j&6){Vt(E.component.subTree,I,P,M);return}if(j&128){E.suspense.move(I,P,M);return}if(j&64){K.move(E,I,P,Z);return}if(K===Pe){r(D,I,P);for(let J=0;J<$.length;J++)Vt($[J],I,P,M);r(E.anchor,I,P);return}if(K===Ac){z(E,I,P);return}if(M!==2&&j&1&&q)if(M===0)q.beforeEnter(D),r(D,I,P),xt(()=>q.enter(D),F);else{const{leave:J,delayLeave:te,afterLeave:oe}=q,ye=()=>{E.ctx.isUnmounted?s(D):r(D,I,P)},Oe=()=>{D._isLeaving&&D[hv](!0),J(D,()=>{ye(),oe&&oe()})};te?te(D,ye,Oe):Oe()}else r(D,I,P)},st=(E,I,P,M=!1,F=!1)=>{const{type:D,props:K,ref:q,children:$,dynamicChildren:j,shapeFlag:ie,patchFlag:J,dirs:te,cacheIndex:oe}=E;if(J===-2&&(F=!1),q!=null&&(kn(),mi(q,null,P,E,!0),Vn()),oe!=null&&(I.renderCache[oe]=void 0),ie&256){I.ctx.deactivate(E);return}const ye=ie&1&&te,Oe=!gi(E);let be;if(Oe&&(be=K&&K.onVnodeBeforeUnmount)&&rn(be,I,E),ie&6)Un(E.component,P,M);else{if(ie&128){E.suspense.unmount(P,M);return}ye&&kr(E,null,I,"beforeUnmount"),ie&64?E.type.remove(E,I,P,Z,M):j&&!j.hasOnce&&(D!==Pe||J>0&&J&64)?ht(j,I,P,!1,!0):(D===Pe&&J&384||!F&&ie&16)&&ht($,I,P),M&&Tn(E)}(Oe&&(be=K&&K.onVnodeUnmounted)||ye)&&xt(()=>{be&&rn(be,I,E),ye&&kr(E,null,I,"unmounted")},P)},Tn=E=>{const{type:I,el:P,anchor:M,transition:F}=E;if(I===Pe){Ht(P,M);return}if(I===Ac){G(E);return}const D=()=>{s(P),F&&!F.persisted&&F.afterLeave&&F.afterLeave()};if(E.shapeFlag&1&&F&&!F.persisted){const{leave:K,delayLeave:q}=F,$=()=>K(P,D);q?q(E.el,D,$):$()}else D()},Ht=(E,I)=>{let P;for(;E!==I;)P=m(E),s(E),E=P;s(I)},Un=(E,I,P)=>{const{bum:M,scope:F,job:D,subTree:K,um:q,m:$,a:j}=E;Lh($),Lh(j),M&&ko(M),F.stop(),D&&(D.flags|=8,st(K,E,I,P)),q&&xt(q,I),xt(()=>{E.isUnmounted=!0},I)},ht=(E,I,P,M=!1,F=!1,D=0)=>{for(let K=D;K<E.length;K++)st(E[K],I,P,M,F)},x=E=>{if(E.shapeFlag&6)return x(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const I=m(E.anchor||E.el),P=I&&I[lv];return P?m(P):I};let Y=!1;const Q=(E,I,P)=>{E==null?I._vnode&&st(I._vnode,null,null,!0):k(I._vnode||null,E,I,null,null,null,P),I._vnode=E,Y||(Y=!0,Ch(),Rp(),Y=!1)},Z={p:k,um:st,m:Vt,r:Tn,mt:qe,mc:y,pc:Ie,pbc:b,n:x,o:t};return{render:Q,hydrate:void 0,createApp:Ov(Q)}}function wc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Vr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function qv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function zp(t,e,n=!1){const r=t.children,s=e.children;if(ue(r)&&ue(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=Yn(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&zp(o,c)),c.type===Oa&&c.patchFlag!==-1&&(c.el=o.el),c.type===pr&&!c.el&&(c.el=o.el)}}function Hv(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<u?i=c+1:o=c;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Wp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Wp(e)}function Lh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const zv=Symbol.for("v-scx"),Wv=()=>jt(zv);function vi(t,e,n){return Kp(t,e,n)}function Kp(t,e,n=xe){const{immediate:r,deep:s,flush:i,once:o}=n,c=Tt({},n),l=e&&r||!e&&i!=="post";let u;if(xi){if(i==="sync"){const _=Wv();u=_.__watcherHandles||(_.__watcherHandles=[])}else if(!l){const _=()=>{};return _.stop=cn,_.resume=cn,_.pause=cn,_}}const f=Et;c.call=(_,S,k)=>_n(_,f,S,k);let p=!1;i==="post"?c.scheduler=_=>{xt(_,f&&f.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(_,S)=>{S?_():$l(_)}),c.augmentJob=_=>{e&&(_.flags|=4),p&&(_.flags|=2,f&&(_.id=f.uid,_.i=f))};const m=iv(t,e,c);return xi&&(u?u.push(m):l&&m()),m}function Kv(t,e,n){const r=this.proxy,s=Je(t)?t.includes(".")?Gp(r,t):()=>r[t]:t.bind(r,r);let i;pe(e)?i=e:(i=e.handler,n=e);const o=Yi(this),c=Kp(s,i.bind(r),n);return o(),c}function Gp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Gv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${qt(e)}Modifiers`]||t[`${Hr(e)}Modifiers`];function Qv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||xe;let s=n;const i=e.startsWith("update:"),o=i&&Gv(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>Je(f)?f.trim():f)),o.number&&(s=n.map(qo)));let c,l=r[c=_c(e)]||r[c=_c(qt(e))];!l&&i&&(l=r[c=_c(Hr(e))]),l&&_n(l,t,6,s);const u=r[c+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,_n(u,t,6,s)}}const Jv=new WeakMap;function Qp(t,e,n=!1){const r=n?Jv:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!pe(t)){const l=u=>{const f=Qp(u,e,!0);f&&(c=!0,Tt(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Fe(t)&&r.set(t,null),null):(ue(i)?i.forEach(l=>o[l]=null):Tt(o,i),Fe(t)&&r.set(t,o),o)}function Na(t,e){return!t||!Ia(e)?!1:(e=e.slice(2).replace(/Once$/,""),ke(t,e[0].toLowerCase()+e.slice(1))||ke(t,Hr(e))||ke(t,e))}function Fh(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:u,renderCache:f,props:p,data:m,setupState:_,ctx:S,inheritAttrs:k}=t,O=Go(t);let H,B;try{if(n.shapeFlag&4){const G=s||r,re=G;H=an(u.call(re,G,f,p,_,m,S)),B=c}else{const G=e;H=an(G.length>1?G(p,{attrs:c,slots:o,emit:l}):G(p,null)),B=e.props?c:Yv(c)}}catch(G){Ei.length=0,Ca(G,t,1),H=ge(pr)}let z=H;if(B&&k!==!1){const G=Object.keys(B),{shapeFlag:re}=z;G.length&&re&7&&(i&&G.some(Cl)&&(B=Xv(B,i)),z=Is(z,B,!1,!0))}return n.dirs&&(z=Is(z,null,!1,!0),z.dirs=z.dirs?z.dirs.concat(n.dirs):n.dirs),n.transition&&jl(z,n.transition),H=z,Go(O),H}const Yv=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ia(n))&&((e||(e={}))[n]=t[n]);return e},Xv=(t,e)=>{const n={};for(const r in t)(!Cl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Zv(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Uh(r,o,u):!!o;if(l&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const m=f[p];if(o[m]!==r[m]&&!Na(u,m))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Uh(r,o,u):!0:!!o;return!1}function Uh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Na(n,i))return!0}return!1}function eE({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Jp=t=>t.__isSuspense;function tE(t,e){e&&e.pendingBranch?ue(t)?e.effects.push(...t):e.effects.push(t):cv(t)}const Pe=Symbol.for("v-fgt"),Oa=Symbol.for("v-txt"),pr=Symbol.for("v-cmt"),Ac=Symbol.for("v-stc"),Ei=[];let Lt=null;function ne(t=!1){Ei.push(Lt=t?null:[])}function nE(){Ei.pop(),Lt=Ei[Ei.length-1]||null}let Oi=1;function Yo(t,e=!1){Oi+=t,t<0&&Lt&&e&&(Lt.hasOnce=!0)}function Yp(t){return t.dynamicChildren=Oi>0?Lt||fs:null,nE(),Oi>0&&Lt&&Lt.push(t),t}function ae(t,e,n,r,s,i){return Yp(V(t,e,n,r,s,i,!0))}function Di(t,e,n,r,s){return Yp(ge(t,e,n,r,s,!0))}function Xo(t){return t?t.__v_isVNode===!0:!1}function si(t,e){return t.type===e.type&&t.key===e.key}const Xp=({key:t})=>t??null,Vo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Je(t)||Ke(t)||pe(t)?{i:Mt,r:t,k:e,f:!!n}:t:null);function V(t,e=null,n=null,r=0,s=null,i=t===Pe?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Xp(e),ref:e&&Vo(e),scopeId:Cp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Mt};return c?(zl(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Je(n)?8:16),Oi>0&&!o&&Lt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Lt.push(l),l}const ge=rE;function rE(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Av)&&(t=pr),Xo(t)){const c=Is(t,e,!0);return n&&zl(c,n),Oi>0&&!i&&Lt&&(c.shapeFlag&6?Lt[Lt.indexOf(t)]=c:Lt.push(c)),c.patchFlag=-2,c}if(pE(t)&&(t=t.__vccOpts),e){e=sE(e);let{class:c,style:l}=e;c&&!Je(c)&&(e.class=Gi(c)),Fe(l)&&(Ul(l)&&!ue(l)&&(l=Tt({},l)),e.style=Nl(l))}const o=Je(t)?1:Jp(t)?128:uv(t)?64:Fe(t)?4:pe(t)?2:0;return V(t,e,n,r,s,o,i,!0)}function sE(t){return t?Ul(t)||Up(t)?Tt({},t):t:null}function Is(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,u=e?iE(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Xp(u),ref:e&&e.ref?n&&i?ue(i)?i.concat(Vo(e)):[i,Vo(e)]:Vo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Pe?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Is(t.ssContent),ssFallback:t.ssFallback&&Is(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&jl(f,l.clone(f)),f}function Wr(t=" ",e=0){return ge(Oa,null,t,e)}function Gt(t="",e=!1){return e?(ne(),Di(pr,null,t)):ge(pr,null,t)}function an(t){return t==null||typeof t=="boolean"?ge(pr):ue(t)?ge(Pe,null,t.slice()):Xo(t)?Yn(t):ge(Oa,null,String(t))}function Yn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Is(t)}function zl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ue(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),zl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Up(e)?e._ctx=Mt:s===3&&Mt&&(Mt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else pe(e)?(e={default:e,_ctx:Mt},n=32):(e=String(e),r&64?(n=16,e=[Wr(e)]):n=8);t.children=e,t.shapeFlag|=n}function iE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Gi([e.class,r.class]));else if(s==="style")e.style=Nl([e.style,r.style]);else if(Ia(s)){const i=e[s],o=r[s];o&&i!==o&&!(ue(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function rn(t,e,n,r=null){_n(t,e,7,[n,r])}const oE=Mp();let aE=0;function cE(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||oE,i={uid:aE++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new sp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:$p(r,s),emitsOptions:Qp(r,s),emit:null,emitted:null,propsDefaults:xe,inheritAttrs:r.inheritAttrs,ctx:xe,data:xe,props:xe,attrs:xe,slots:xe,refs:xe,setupState:xe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Qv.bind(null,i),t.ce&&t.ce(i),i}let Et=null;const Zp=()=>Et||Mt;let Zo,Jc;{const t=Sa(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Zo=e("__VUE_INSTANCE_SETTERS__",n=>Et=n),Jc=e("__VUE_SSR_SETTERS__",n=>xi=n)}const Yi=t=>{const e=Et;return Zo(t),t.scope.on(),()=>{t.scope.off(),Zo(e)}},Bh=()=>{Et&&Et.scope.off(),Zo(null)};function em(t){return t.vnode.shapeFlag&4}let xi=!1;function lE(t,e=!1,n=!1){e&&Jc(e);const{props:r,children:s}=t.vnode,i=em(t);xv(t,r,i,e),Uv(t,s,n||e);const o=i?uE(t,e):void 0;return e&&Jc(!1),o}function uE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Sv);const{setup:r}=n;if(r){kn();const s=t.setupContext=r.length>1?fE(t):null,i=Yi(t),o=Ji(r,t,0,[t.props,s]),c=Yd(o);if(Vn(),i(),(c||t.sp)&&!gi(t)&&kp(t),c){if(o.then(Bh,Bh),e)return o.then(l=>{$h(t,l)}).catch(l=>{Ca(l,t,0)});t.asyncDep=o}else $h(t,o)}else tm(t)}function $h(t,e,n){pe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Fe(e)&&(t.setupState=Ap(e)),tm(t)}function tm(t,e,n){const r=t.type;t.render||(t.render=r.render||cn);{const s=Yi(t);kn();try{Rv(t)}finally{Vn(),s()}}}const hE={get(t,e){return yt(t,"get",""),t[e]}};function fE(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,hE),slots:t.slots,emit:t.emit,expose:e}}function Da(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Ap(Bl(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in _i)return _i[n](t)},has(e,n){return n in e||n in _i}})):t.proxy}function dE(t,e=!0){return pe(t)?t.displayName||t.name:t.name||e&&t.__name}function pE(t){return pe(t)&&"__vccOpts"in t}const Ct=(t,e)=>rv(t,e,xi);function nm(t,e,n){const r=(i,o,c)=>{Yo(-1);try{return ge(i,o,c)}finally{Yo(1)}},s=arguments.length;return s===2?Fe(e)&&!ue(e)?Xo(e)?r(t,null,[e]):r(t,e):r(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Xo(n)&&(n=[n]),r(t,e,n))}const mE="3.5.21";/**
* @vue/runtime-dom v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Yc;const jh=typeof window<"u"&&window.trustedTypes;if(jh)try{Yc=jh.createPolicy("vue",{createHTML:t=>t})}catch{}const rm=Yc?t=>Yc.createHTML(t):t=>t,gE="http://www.w3.org/2000/svg",_E="http://www.w3.org/1998/Math/MathML",bn=typeof document<"u"?document:null,qh=bn&&bn.createElement("template"),yE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?bn.createElementNS(gE,t):e==="mathml"?bn.createElementNS(_E,t):n?bn.createElement(t,{is:n}):bn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>bn.createTextNode(t),createComment:t=>bn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>bn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{qh.innerHTML=rm(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=qh.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},vE=Symbol("_vtc");function EE(t,e,n){const r=t[vE];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Hh=Symbol("_vod"),TE=Symbol("_vsh"),IE=Symbol(""),wE=/(?:^|;)\s*display\s*:/;function AE(t,e,n){const r=t.style,s=Je(n);let i=!1;if(n&&!s){if(e)if(Je(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&No(r,c,"")}else for(const o in e)n[o]==null&&No(r,o,"");for(const o in n)o==="display"&&(i=!0),No(r,o,n[o])}else if(s){if(e!==n){const o=r[IE];o&&(n+=";"+o),r.cssText=n,i=wE.test(n)}}else e&&t.removeAttribute("style");Hh in t&&(t[Hh]=i?r.display:"",t[TE]&&(r.display="none"))}const zh=/\s*!important$/;function No(t,e,n){if(ue(n))n.forEach(r=>No(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=bE(t,e);zh.test(n)?t.setProperty(Hr(r),n.replace(zh,""),"important"):t[r]=n}}const Wh=["Webkit","Moz","ms"],bc={};function bE(t,e){const n=bc[e];if(n)return n;let r=qt(e);if(r!=="filter"&&r in t)return bc[e]=r;r=ba(r);for(let s=0;s<Wh.length;s++){const i=Wh[s]+r;if(i in t)return bc[e]=i}return e}const Kh="http://www.w3.org/1999/xlink";function Gh(t,e,n,r,s,i=Ry(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Kh,e.slice(6,e.length)):t.setAttributeNS(Kh,e,n):n==null||i&&!tp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":gn(n)?String(n):n)}function Qh(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?rm(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=tp(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Dr(t,e,n,r){t.addEventListener(e,n,r)}function SE(t,e,n,r){t.removeEventListener(e,n,r)}const Jh=Symbol("_vei");function RE(t,e,n,r,s=null){const i=t[Jh]||(t[Jh]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=PE(e);if(r){const u=i[e]=VE(r,s);Dr(t,c,u,l)}else o&&(SE(t,c,o,l),i[e]=void 0)}}const Yh=/(?:Once|Passive|Capture)$/;function PE(t){let e;if(Yh.test(t)){e={};let r;for(;r=t.match(Yh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Hr(t.slice(2)),e]}let Sc=0;const CE=Promise.resolve(),kE=()=>Sc||(CE.then(()=>Sc=0),Sc=Date.now());function VE(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;_n(NE(r,n.value),e,5,[r])};return n.value=t,n.attached=kE(),n}function NE(t,e){if(ue(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Xh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,OE=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?EE(t,r,o):e==="style"?AE(t,n,r):Ia(e)?Cl(e)||RE(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):DE(t,e,r,o))?(Qh(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Gh(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Je(r))?Qh(t,qt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Gh(t,e,r,o))};function DE(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Xh(e)&&pe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Xh(e)&&Je(n)?!1:e in t}const ea=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ue(e)?n=>ko(e,n):e};function xE(t){t.target.composing=!0}function Zh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ms=Symbol("_assign"),xr={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[ms]=ea(s);const i=r||s.props&&s.props.type==="number";Dr(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=qo(c)),t[ms](c)}),n&&Dr(t,"change",()=>{t.value=t.value.trim()}),e||(Dr(t,"compositionstart",xE),Dr(t,"compositionend",Zh),Dr(t,"change",Zh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[ms]=ea(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?qo(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},ME={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=wa(e);Dr(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?qo(ta(o)):ta(o));t[ms](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,ka(()=>{t._assigning=!1})}),t[ms]=ea(r)},mounted(t,{value:e}){ef(t,e)},beforeUpdate(t,e,n){t[ms]=ea(n)},updated(t,{value:e}){t._assigning||ef(t,e)}};function ef(t,e){const n=t.multiple,r=ue(e);if(!(n&&!r&&!wa(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],c=ta(o);if(n)if(r){const l=typeof c;l==="string"||l==="number"?o.selected=e.some(u=>String(u)===String(c)):o.selected=Cy(e,c)>-1}else o.selected=e.has(c);else if(Ra(ta(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function ta(t){return"_value"in t?t._value:t.value}const LE=Tt({patchProp:OE},yE);let tf;function FE(){return tf||(tf=$v(LE))}const UE=((...t)=>{const e=FE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=$E(r);if(!s)return;const i=e._component;!pe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,BE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function BE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function $E(t){return Je(t)?document.querySelector(t):t}/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let sm;const xa=t=>sm=t,im=Symbol();function Xc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Ti;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ti||(Ti={}));function jE(){const t=ip(!0),e=t.run(()=>we({}));let n=[],r=[];const s=Bl({install(i){xa(s),s._a=i,i.provide(im,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const om=()=>{};function nf(t,e,n,r=om){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&op()&&ky(s),s}function ss(t,...e){t.slice().forEach(n=>{n(...e)})}const qE=t=>t(),rf=Symbol(),Rc=Symbol();function Zc(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Xc(s)&&Xc(r)&&t.hasOwnProperty(n)&&!Ke(r)&&!ir(r)?t[n]=Zc(s,r):t[n]=r}return t}const HE=Symbol();function zE(t){return!Xc(t)||!Object.prototype.hasOwnProperty.call(t,HE)}const{assign:Gn}=Object;function WE(t){return!!(Ke(t)&&t.effect)}function KE(t,e,n,r){const{state:s,actions:i,getters:o}=e,c=n.state.value[t];let l;function u(){c||(n.state.value[t]=s?s():{});const f=Zy(n.state.value[t]);return Gn(f,i,Object.keys(o||{}).reduce((p,m)=>(p[m]=Bl(Ct(()=>{xa(n);const _=n._s.get(t);return o[m].call(_,_)})),p),{}))}return l=am(t,u,e,n,r,!0),l}function am(t,e,n={},r,s,i){let o;const c=Gn({actions:{}},n),l={deep:!0};let u,f,p=[],m=[],_;const S=r.state.value[t];!i&&!S&&(r.state.value[t]={}),we({});let k;function O(y){let v;u=f=!1,typeof y=="function"?(y(r.state.value[t]),v={type:Ti.patchFunction,storeId:t,events:_}):(Zc(r.state.value[t],y),v={type:Ti.patchObject,payload:y,storeId:t,events:_});const b=k=Symbol();ka().then(()=>{k===b&&(u=!0)}),f=!0,ss(p,v,r.state.value[t])}const H=i?function(){const{state:v}=n,b=v?v():{};this.$patch(A=>{Gn(A,b)})}:om;function B(){o.stop(),p=[],m=[],r._s.delete(t)}const z=(y,v="")=>{if(rf in y)return y[Rc]=v,y;const b=function(){xa(r);const A=Array.from(arguments),R=[],T=[];function qe(de){R.push(de)}function ut(de){T.push(de)}ss(m,{args:A,name:b[Rc],store:re,after:qe,onError:ut});let Me;try{Me=y.apply(this&&this.$id===t?this:re,A)}catch(de){throw ss(T,de),de}return Me instanceof Promise?Me.then(de=>(ss(R,de),de)).catch(de=>(ss(T,de),Promise.reject(de))):(ss(R,Me),Me)};return b[rf]=!0,b[Rc]=v,b},G={_p:r,$id:t,$onAction:nf.bind(null,m),$patch:O,$reset:H,$subscribe(y,v={}){const b=nf(p,y,v.detached,()=>A()),A=o.run(()=>vi(()=>r.state.value[t],R=>{(v.flush==="sync"?f:u)&&y({storeId:t,type:Ti.direct,events:_},R)},Gn({},l,v)));return b},$dispose:B},re=Qi(G);r._s.set(t,re);const w=(r._a&&r._a.runWithContext||qE)(()=>r._e.run(()=>(o=ip()).run(()=>e({action:z}))));for(const y in w){const v=w[y];if(Ke(v)&&!WE(v)||ir(v))i||(S&&zE(v)&&(Ke(v)?v.value=S[y]:Zc(v,S[y])),r.state.value[t][y]=v);else if(typeof v=="function"){const b=z(v,y);w[y]=b,c.actions[y]=v}}return Gn(re,w),Gn(Re(re),w),Object.defineProperty(re,"$state",{get:()=>r.state.value[t],set:y=>{O(v=>{Gn(v,y)})}}),r._p.forEach(y=>{Gn(re,o.run(()=>y({store:re,app:r._a,pinia:r,options:c})))}),S&&i&&n.hydrate&&n.hydrate(re.$state,S),u=!0,f=!0,re}/*! #__NO_SIDE_EFFECTS__ */function Wl(t,e,n){let r;const s=typeof e=="function";r=s?n:e;function i(o,c){const l=Dv();return o=o||(l?jt(im,null):null),o&&xa(o),o=sm,o._s.has(t)||(s?am(t,e,r,o):KE(t,r,o)),o._s.get(t)}return i.$id=t,i}const En=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},GE={},QE={class:"body"};function JE(t,e){const n=zr("router-view");return ne(),ae("div",QE,[ge(n)])}const YE=En(GE,[["render",JE]]);/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const os=typeof document<"u";function cm(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function XE(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&cm(t.default)}const Ce=Object.assign;function Pc(t,e){const n={};for(const r in e){const s=e[r];n[r]=Xt(s)?s.map(t):t(s)}return n}const Ii=()=>{},Xt=Array.isArray,lm=/#/g,ZE=/&/g,eT=/\//g,tT=/=/g,nT=/\?/g,um=/\+/g,rT=/%5B/g,sT=/%5D/g,hm=/%5E/g,iT=/%60/g,fm=/%7B/g,oT=/%7C/g,dm=/%7D/g,aT=/%20/g;function Kl(t){return encodeURI(""+t).replace(oT,"|").replace(rT,"[").replace(sT,"]")}function cT(t){return Kl(t).replace(fm,"{").replace(dm,"}").replace(hm,"^")}function el(t){return Kl(t).replace(um,"%2B").replace(aT,"+").replace(lm,"%23").replace(ZE,"%26").replace(iT,"`").replace(fm,"{").replace(dm,"}").replace(hm,"^")}function lT(t){return el(t).replace(tT,"%3D")}function uT(t){return Kl(t).replace(lm,"%23").replace(nT,"%3F")}function hT(t){return t==null?"":uT(t).replace(eT,"%2F")}function Mi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const fT=/\/$/,dT=t=>t.replace(fT,"");function Cc(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=_T(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Mi(o)}}function pT(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function sf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function mT(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ws(e.matched[r],n.matched[s])&&pm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ws(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function pm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!gT(t[n],e[n]))return!1;return!0}function gT(t,e){return Xt(t)?of(t,e):Xt(e)?of(e,t):t===e}function of(t,e){return Xt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function _T(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Wn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Li;(function(t){t.pop="pop",t.push="push"})(Li||(Li={}));var wi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(wi||(wi={}));function yT(t){if(!t)if(os){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),dT(t)}const vT=/^[^#]+#/;function ET(t,e){return t.replace(vT,"#")+e}function TT(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ma=()=>({left:window.scrollX,top:window.scrollY});function IT(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=TT(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function af(t,e){return(history.state?history.state.position-e:-1)+t}const tl=new Map;function wT(t,e){tl.set(t,e)}function AT(t){const e=tl.get(t);return tl.delete(t),e}let bT=()=>location.protocol+"//"+location.host;function mm(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),sf(l,"")}return sf(n,t)+r+s}function ST(t,e,n,r){let s=[],i=[],o=null;const c=({state:m})=>{const _=mm(t,location),S=n.value,k=e.value;let O=0;if(m){if(n.value=_,e.value=m,o&&o===S){o=null;return}O=k?m.position-k.position:0}else r(_);s.forEach(H=>{H(n.value,S,{delta:O,type:Li.pop,direction:O?O>0?wi.forward:wi.back:wi.unknown})})};function l(){o=n.value}function u(m){s.push(m);const _=()=>{const S=s.indexOf(m);S>-1&&s.splice(S,1)};return i.push(_),_}function f(){const{history:m}=window;m.state&&m.replaceState(Ce({},m.state,{scroll:Ma()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:l,listen:u,destroy:p}}function cf(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ma():null}}function RT(t){const{history:e,location:n}=window,r={value:mm(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,f){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:bT()+t+l;try{e[f?"replaceState":"pushState"](u,"",m),s.value=u}catch(_){console.error(_),n[f?"replace":"assign"](m)}}function o(l,u){const f=Ce({},e.state,cf(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});i(l,f,!0),r.value=l}function c(l,u){const f=Ce({},s.value,e.state,{forward:l,scroll:Ma()});i(f.current,f,!0);const p=Ce({},cf(r.value,l,null),{position:f.position+1},u);i(l,p,!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function PT(t){t=yT(t);const e=RT(t),n=ST(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Ce({location:"",base:t,go:r,createHref:ET.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function CT(t){return typeof t=="string"||t&&typeof t=="object"}function gm(t){return typeof t=="string"||typeof t=="symbol"}const _m=Symbol("");var lf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(lf||(lf={}));function As(t,e){return Ce(new Error,{type:t,[_m]:!0},e)}function wn(t,e){return t instanceof Error&&_m in t&&(e==null||!!(t.type&e))}const uf="[^/]+?",kT={sensitive:!1,strict:!1,start:!0,end:!0},VT=/[.+*?^${}()[\]/\\]/g;function NT(t,e){const n=Ce({},kT,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const m=u[p];let _=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(VT,"\\$&"),_+=40;else if(m.type===1){const{value:S,repeatable:k,optional:O,regexp:H}=m;i.push({name:S,repeatable:k,optional:O});const B=H||uf;if(B!==uf){_+=10;try{new RegExp(`(${B})`)}catch(G){throw new Error(`Invalid custom RegExp for param "${S}" (${B}): `+G.message)}}let z=k?`((?:${B})(?:/(?:${B}))*)`:`(${B})`;p||(z=O&&u.length<2?`(?:/${z})`:"/"+z),O&&(z+="?"),s+=z,_+=20,O&&(_+=-8),k&&(_+=-20),B===".*"&&(_+=-50)}f.push(_)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(u){const f=u.match(o),p={};if(!f)return null;for(let m=1;m<f.length;m++){const _=f[m]||"",S=i[m-1];p[S.name]=_&&S.repeatable?_.split("/"):_}return p}function l(u){let f="",p=!1;for(const m of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const _ of m)if(_.type===0)f+=_.value;else if(_.type===1){const{value:S,repeatable:k,optional:O}=_,H=S in u?u[S]:"";if(Xt(H)&&!k)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const B=Xt(H)?H.join("/"):H;if(!B)if(O)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${S}"`);f+=B}}return f||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function OT(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function ym(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=OT(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(hf(r))return 1;if(hf(s))return-1}return s.length-r.length}function hf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const DT={type:0,value:""},xT=/[a-zA-Z0-9_]/;function MT(t){if(!t)return[[]];if(t==="/")return[[DT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${u}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,u="",f="";function p(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&p(),o()):l===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:l==="("?n=2:xT.test(l)?m():(p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}function LT(t,e,n){const r=NT(MT(t.path),n),s=Ce(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function FT(t,e){const n=[],r=new Map;e=mf({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,m,_){const S=!_,k=df(p);k.aliasOf=_&&_.record;const O=mf(e,p),H=[k];if("alias"in p){const G=typeof p.alias=="string"?[p.alias]:p.alias;for(const re of G)H.push(df(Ce({},k,{components:_?_.record.components:k.components,path:re,aliasOf:_?_.record:k})))}let B,z;for(const G of H){const{path:re}=G;if(m&&re[0]!=="/"){const _e=m.record.path,w=_e[_e.length-1]==="/"?"":"/";G.path=m.record.path+(re&&w+re)}if(B=LT(G,m,O),_?_.alias.push(B):(z=z||B,z!==B&&z.alias.push(B),S&&p.name&&!pf(B)&&o(p.name)),vm(B)&&l(B),k.children){const _e=k.children;for(let w=0;w<_e.length;w++)i(_e[w],B,_&&_.children[w])}_=_||B}return z?()=>{o(z)}:Ii}function o(p){if(gm(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return n}function l(p){const m=$T(p,n);n.splice(m,0,p),p.record.name&&!pf(p)&&r.set(p.record.name,p)}function u(p,m){let _,S={},k,O;if("name"in p&&p.name){if(_=r.get(p.name),!_)throw As(1,{location:p});O=_.record.name,S=Ce(ff(m.params,_.keys.filter(z=>!z.optional).concat(_.parent?_.parent.keys.filter(z=>z.optional):[]).map(z=>z.name)),p.params&&ff(p.params,_.keys.map(z=>z.name))),k=_.stringify(S)}else if(p.path!=null)k=p.path,_=n.find(z=>z.re.test(k)),_&&(S=_.parse(k),O=_.record.name);else{if(_=m.name?r.get(m.name):n.find(z=>z.re.test(m.path)),!_)throw As(1,{location:p,currentLocation:m});O=_.record.name,S=Ce({},m.params,p.params),k=_.stringify(S)}const H=[];let B=_;for(;B;)H.unshift(B.record),B=B.parent;return{name:O,path:k,params:S,matched:H,meta:BT(H)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:c,getRecordMatcher:s}}function ff(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function df(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:UT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function UT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function pf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function BT(t){return t.reduce((e,n)=>Ce(e,n.meta),{})}function mf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function $T(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;ym(t,e[i])<0?r=i:n=i+1}const s=jT(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function jT(t){let e=t;for(;e=e.parent;)if(vm(e)&&ym(t,e)===0)return e}function vm({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function qT(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(um," "),o=i.indexOf("="),c=Mi(o<0?i:i.slice(0,o)),l=o<0?null:Mi(i.slice(o+1));if(c in e){let u=e[c];Xt(u)||(u=e[c]=[u]),u.push(l)}else e[c]=l}return e}function gf(t){let e="";for(let n in t){const r=t[n];if(n=lT(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Xt(r)?r.map(i=>i&&el(i)):[r&&el(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function HT(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Xt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const zT=Symbol(""),_f=Symbol(""),Gl=Symbol(""),Ql=Symbol(""),nl=Symbol("");function ii(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Xn(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const u=m=>{m===!1?l(As(4,{from:n,to:e})):m instanceof Error?l(m):CT(m)?l(As(2,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),c())},f=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(f);t.length<3&&(p=p.then(u)),p.catch(m=>l(m))})}function kc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(cm(l)){const f=(l.__vccOpts||l)[e];f&&i.push(Xn(f,n,r,o,c,s))}else{let u=l();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const p=XE(f)?f.default:f;o.mods[c]=f,o.components[c]=p;const _=(p.__vccOpts||p)[e];return _&&Xn(_,n,r,o,c,s)()}))}}return i}function yf(t){const e=jt(Gl),n=jt(Ql),r=Ct(()=>{const l=We(t.to);return e.resolve(l)}),s=Ct(()=>{const{matched:l}=r.value,{length:u}=l,f=l[u-1],p=n.matched;if(!f||!p.length)return-1;const m=p.findIndex(ws.bind(null,f));if(m>-1)return m;const _=vf(l[u-2]);return u>1&&vf(f)===_&&p[p.length-1].path!==_?p.findIndex(ws.bind(null,l[u-2])):m}),i=Ct(()=>s.value>-1&&QT(n.params,r.value.params)),o=Ct(()=>s.value>-1&&s.value===n.matched.length-1&&pm(n.params,r.value.params));function c(l={}){if(GT(l)){const u=e[We(t.replace)?"replace":"push"](We(t.to)).catch(Ii);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Ct(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function WT(t){return t.length===1?t[0]:t}const KT=wt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:yf,setup(t,{slots:e}){const n=Qi(yf(t)),{options:r}=jt(Gl),s=Ct(()=>({[Ef(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ef(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&WT(e.default(n));return t.custom?i:nm("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),rl=KT;function GT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function QT(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Xt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function vf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ef=(t,e,n)=>t??e??n,JT=wt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=jt(nl),s=Ct(()=>t.route||r.value),i=jt(_f,0),o=Ct(()=>{let u=We(i);const{matched:f}=s.value;let p;for(;(p=f[u])&&!p.components;)u++;return u}),c=Ct(()=>s.value.matched[o.value]);yi(_f,Ct(()=>o.value+1)),yi(zT,c),yi(nl,s);const l=we();return vi(()=>[l.value,c.value,t.name],([u,f,p],[m,_,S])=>{f&&(f.instances[p]=u,_&&_!==f&&u&&u===m&&(f.leaveGuards.size||(f.leaveGuards=_.leaveGuards),f.updateGuards.size||(f.updateGuards=_.updateGuards))),u&&f&&(!_||!ws(f,_)||!m)&&(f.enterCallbacks[p]||[]).forEach(k=>k(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,p=c.value,m=p&&p.components[f];if(!m)return Tf(n.default,{Component:m,route:u});const _=p.props[f],S=_?_===!0?u.params:typeof _=="function"?_(u):_:null,O=nm(m,Ce({},S,e,{onVnodeUnmounted:H=>{H.component.isUnmounted&&(p.instances[f]=null)},ref:l}));return Tf(n.default,{Component:O,route:u})||O}}});function Tf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const YT=JT;function XT(t){const e=FT(t.routes,t),n=t.parseQuery||qT,r=t.stringifyQuery||gf,s=t.history,i=ii(),o=ii(),c=ii(),l=Jy(Wn);let u=Wn;os&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Pc.bind(null,x=>""+x),p=Pc.bind(null,hT),m=Pc.bind(null,Mi);function _(x,Y){let Q,Z;return gm(x)?(Q=e.getRecordMatcher(x),Z=Y):Z=x,e.addRoute(Z,Q)}function S(x){const Y=e.getRecordMatcher(x);Y&&e.removeRoute(Y)}function k(){return e.getRoutes().map(x=>x.record)}function O(x){return!!e.getRecordMatcher(x)}function H(x,Y){if(Y=Ce({},Y||l.value),typeof x=="string"){const P=Cc(n,x,Y.path),M=e.resolve({path:P.path},Y),F=s.createHref(P.fullPath);return Ce(P,M,{params:m(M.params),hash:Mi(P.hash),redirectedFrom:void 0,href:F})}let Q;if(x.path!=null)Q=Ce({},x,{path:Cc(n,x.path,Y.path).path});else{const P=Ce({},x.params);for(const M in P)P[M]==null&&delete P[M];Q=Ce({},x,{params:p(P)}),Y.params=p(Y.params)}const Z=e.resolve(Q,Y),Ne=x.hash||"";Z.params=f(m(Z.params));const E=pT(r,Ce({},x,{hash:cT(Ne),path:Z.path})),I=s.createHref(E);return Ce({fullPath:E,hash:Ne,query:r===gf?HT(x.query):x.query||{}},Z,{redirectedFrom:void 0,href:I})}function B(x){return typeof x=="string"?Cc(n,x,l.value.path):Ce({},x)}function z(x,Y){if(u!==x)return As(8,{from:Y,to:x})}function G(x){return w(x)}function re(x){return G(Ce(B(x),{replace:!0}))}function _e(x){const Y=x.matched[x.matched.length-1];if(Y&&Y.redirect){const{redirect:Q}=Y;let Z=typeof Q=="function"?Q(x):Q;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=B(Z):{path:Z},Z.params={}),Ce({query:x.query,hash:x.hash,params:Z.path!=null?{}:x.params},Z)}}function w(x,Y){const Q=u=H(x),Z=l.value,Ne=x.state,E=x.force,I=x.replace===!0,P=_e(Q);if(P)return w(Ce(B(P),{state:typeof P=="object"?Ce({},Ne,P.state):Ne,force:E,replace:I}),Y||Q);const M=Q;M.redirectedFrom=Y;let F;return!E&&mT(r,Z,Q)&&(F=As(16,{to:M,from:Z}),Vt(Z,Z,!0,!1)),(F?Promise.resolve(F):b(M,Z)).catch(D=>wn(D)?wn(D,2)?D:en(D):Ie(D,M,Z)).then(D=>{if(D){if(wn(D,2))return w(Ce({replace:I},B(D.to),{state:typeof D.to=="object"?Ce({},Ne,D.to.state):Ne,force:E}),Y||M)}else D=R(M,Z,!0,I,Ne);return A(M,Z,D),D})}function y(x,Y){const Q=z(x,Y);return Q?Promise.reject(Q):Promise.resolve()}function v(x){const Y=Ht.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(x):x()}function b(x,Y){let Q;const[Z,Ne,E]=ZT(x,Y);Q=kc(Z.reverse(),"beforeRouteLeave",x,Y);for(const P of Z)P.leaveGuards.forEach(M=>{Q.push(Xn(M,x,Y))});const I=y.bind(null,x,Y);return Q.push(I),ht(Q).then(()=>{Q=[];for(const P of i.list())Q.push(Xn(P,x,Y));return Q.push(I),ht(Q)}).then(()=>{Q=kc(Ne,"beforeRouteUpdate",x,Y);for(const P of Ne)P.updateGuards.forEach(M=>{Q.push(Xn(M,x,Y))});return Q.push(I),ht(Q)}).then(()=>{Q=[];for(const P of E)if(P.beforeEnter)if(Xt(P.beforeEnter))for(const M of P.beforeEnter)Q.push(Xn(M,x,Y));else Q.push(Xn(P.beforeEnter,x,Y));return Q.push(I),ht(Q)}).then(()=>(x.matched.forEach(P=>P.enterCallbacks={}),Q=kc(E,"beforeRouteEnter",x,Y,v),Q.push(I),ht(Q))).then(()=>{Q=[];for(const P of o.list())Q.push(Xn(P,x,Y));return Q.push(I),ht(Q)}).catch(P=>wn(P,8)?P:Promise.reject(P))}function A(x,Y,Q){c.list().forEach(Z=>v(()=>Z(x,Y,Q)))}function R(x,Y,Q,Z,Ne){const E=z(x,Y);if(E)return E;const I=Y===Wn,P=os?history.state:{};Q&&(Z||I?s.replace(x.fullPath,Ce({scroll:I&&P&&P.scroll},Ne)):s.push(x.fullPath,Ne)),l.value=x,Vt(x,Y,Q,I),en()}let T;function qe(){T||(T=s.listen((x,Y,Q)=>{if(!Un.listening)return;const Z=H(x),Ne=_e(Z);if(Ne){w(Ce(Ne,{replace:!0,force:!0}),Z).catch(Ii);return}u=Z;const E=l.value;os&&wT(af(E.fullPath,Q.delta),Ma()),b(Z,E).catch(I=>wn(I,12)?I:wn(I,2)?(w(Ce(B(I.to),{force:!0}),Z).then(P=>{wn(P,20)&&!Q.delta&&Q.type===Li.pop&&s.go(-1,!1)}).catch(Ii),Promise.reject()):(Q.delta&&s.go(-Q.delta,!1),Ie(I,Z,E))).then(I=>{I=I||R(Z,E,!1),I&&(Q.delta&&!wn(I,8)?s.go(-Q.delta,!1):Q.type===Li.pop&&wn(I,20)&&s.go(-1,!1)),A(Z,E,I)}).catch(Ii)}))}let ut=ii(),Me=ii(),de;function Ie(x,Y,Q){en(x);const Z=Me.list();return Z.length?Z.forEach(Ne=>Ne(x,Y,Q)):console.error(x),Promise.reject(x)}function Rt(){return de&&l.value!==Wn?Promise.resolve():new Promise((x,Y)=>{ut.add([x,Y])})}function en(x){return de||(de=!x,qe(),ut.list().forEach(([Y,Q])=>x?Q(x):Y()),ut.reset()),x}function Vt(x,Y,Q,Z){const{scrollBehavior:Ne}=t;if(!os||!Ne)return Promise.resolve();const E=!Q&&AT(af(x.fullPath,0))||(Z||!Q)&&history.state&&history.state.scroll||null;return ka().then(()=>Ne(x,Y,E)).then(I=>I&&IT(I)).catch(I=>Ie(I,x,Y))}const st=x=>s.go(x);let Tn;const Ht=new Set,Un={currentRoute:l,listening:!0,addRoute:_,removeRoute:S,clearRoutes:e.clearRoutes,hasRoute:O,getRoutes:k,resolve:H,options:t,push:G,replace:re,go:st,back:()=>st(-1),forward:()=>st(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:Me.add,isReady:Rt,install(x){const Y=this;x.component("RouterLink",rl),x.component("RouterView",YT),x.config.globalProperties.$router=Y,Object.defineProperty(x.config.globalProperties,"$route",{enumerable:!0,get:()=>We(l)}),os&&!Tn&&l.value===Wn&&(Tn=!0,G(s.location).catch(Ne=>{}));const Q={};for(const Ne in Wn)Object.defineProperty(Q,Ne,{get:()=>l.value[Ne],enumerable:!0});x.provide(Gl,Y),x.provide(Ql,Tp(Q)),x.provide(nl,l);const Z=x.unmount;Ht.add(x),x.unmount=function(){Ht.delete(x),Ht.size<1&&(u=Wn,T&&T(),T=null,l.value=Wn,Tn=!1,de=!1),Z()}}};function ht(x){return x.reduce((Y,Q)=>Y.then(()=>v(Q)),Promise.resolve())}return Un}function ZT(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(u=>ws(u,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(u=>ws(u,l))||s.push(l))}return[n,r,s]}function Em(t){return jt(Ql)}const eI="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20class='icon%20icon-tabler%20icons-tabler-outline%20icon-tabler-corner-down-right'%3e%3cpath%20stroke='none'%20d='M0%200h24v24H0z'%20fill='none'/%3e%3cpath%20d='M6%206v6a3%203%200%200%200%203%203h10l-4%20-4m0%208l4%20-4'%20/%3e%3c/svg%3e",tI={class:"group"},nI=wt({__name:"ButtonLink",props:{link:{},icon:{type:Boolean},text:{}},setup(t){return(e,n)=>{const r=zr("RouterLink");return ne(),Di(r,{to:e.link},{default:Nn(()=>[V("div",tI,[V("p",null,Se(e.text),1),n[0]||(n[0]=V("img",{class:"icon",src:eI},null,-1))])]),_:1},8,["to"])}}}),Io=En(nI,[["__scopeId","data-v-d005cff0"]]),rI={class:"star"},sI=wt({__name:"TheFooter",props:{title:{},type:{}},setup(t){const e=t,n=we(20);return(r,s)=>(ne(),ae("footer",{class:Gi({"main-footer":e.type=="main","queer-footer":e.type=="queer","autism-footer":e.type=="autism","fanfiction-footer":e.type=="ff","others-footer":e.type=="other"})},[s[1]||(s[1]=V("div",{class:"star"},null,-1)),r.type=="autism"?(ne(!0),ae(Pe,{key:0},kt(n.value,i=>(ne(),ae("div",rI))),256)):Gt("",!0),V("p",{onClick:s[0]||(s[0]=i=>r.$emit("authorLogin"))},Se(r.title),1)],2))}}),Ir=En(sI,[["__scopeId","data-v-84375bf4"]]),iI="data:image/svg+xml,%3c!--%20tags:%20[direction,%20west]%20category:%20Arrows%20version:%20'1.37'%20unicode:%20'eddb'%20--%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%23000000'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3cpath%20d='M20%2015h-8v3.586a1%201%200%200%201%20-1.707%20.707l-6.586%20-6.586a1%201%200%200%201%200%20-1.414l6.586%20-6.586a1%201%200%200%201%201.707%20.707v3.586h8a1%201%200%200%201%201%201v4a1%201%200%200%201%20-1%201z'%20/%3e%3c/svg%3e",oI="/assets/icon-By7hXV3M.png",aI={class:"star"},cI={key:1,class:"navigation"},lI={key:2,class:"navigation main"},uI=wt({__name:"TheHeader",props:{title:{},type:{}},setup(t){const e=t,n=jt("loggedIn"),r=Ct(()=>n?n.value==!0?"Logout":"Login":"none"),s=we(20);return(i,o)=>(ne(),ae("header",{class:Gi({"main-header":e.type=="main","queer-header":e.type=="queer","autism-header":e.type=="autism","fanfiction-header":e.type=="ff","others-header":e.type=="other"})},[i.type=="autism"?(ne(!0),ae(Pe,{key:0},kt(s.value,c=>(ne(),ae("div",aI))),256)):Gt("",!0),i.type!="main"?(ne(),ae("div",cI,[ge(We(rl),{to:"/"},{default:Nn(()=>[...o[1]||(o[1]=[V("img",{src:iI,class:"back"},null,-1)])]),_:1}),V("h2",null,Se(i.title),1),o[2]||(o[2]=V("div",null,null,-1))])):(ne(),ae("div",lI,[ge(We(rl),{to:"/"},{default:Nn(()=>[...o[3]||(o[3]=[V("img",{src:oI,class:"icon"},null,-1)])]),_:1}),V("h1",null,Se(i.title),1),V("button",{onClick:o[0]||(o[0]=c=>i.$emit("login"))},Se(r.value),1)]))],2))}}),Kr=En(uI,[["__scopeId","data-v-33ca4d57"]]);/**
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
 */const Tm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},fI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Im={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let m=(c&15)<<2|u>>6,_=u&63;l||(_=64,o||(m=64)),r.push(n[f],n[p],n[m],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Tm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):fI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||u==null||p==null)throw new dI;const m=i<<2|c>>4;if(r.push(m),u!==64){const _=c<<4&240|u>>2;if(r.push(_),p!==64){const S=u<<6&192|p;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class dI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const pI=function(t){const e=Tm(t);return Im.encodeByteArray(e,!0)},na=function(t){return pI(t).replace(/\./g,"")},wm=function(t){try{return Im.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function mI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const gI=()=>mI().__FIREBASE_DEFAULTS__,_I=()=>{if(typeof process>"u"||typeof If>"u")return;const t=If.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},yI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&wm(t[1]);return e&&JSON.parse(e)},La=()=>{try{return hI()||gI()||_I()||yI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Am=t=>La()?.emulatorHosts?.[t],vI=t=>{const e=Am(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},bm=()=>La()?.config,Sm=t=>La()?.[`_${t}`];/**
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
 */function Ds(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Rm(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function TI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[na(JSON.stringify(n)),na(JSON.stringify(o)),""].join(".")}const Ai={};function II(){const t={prod:[],emulator:[]};for(const e of Object.keys(Ai))Ai[e]?t.emulator.push(e):t.prod.push(e);return t}function wI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let wf=!1;function Pm(t,e){if(typeof window>"u"||typeof document>"u"||!Ds(window.location.host)||Ai[t]===e||Ai[t]||wf)return;Ai[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=II().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function c(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function l(m,_){m.setAttribute("width","24"),m.setAttribute("id",_),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{wf=!0,o()},m}function f(m,_){m.setAttribute("id",_),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=wI(r),_=n("text"),S=document.getElementById(_)||document.createElement("span"),k=n("learnmore"),O=document.getElementById(k)||document.createElement("a"),H=n("preprendIcon"),B=document.getElementById(H)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const z=m.element;c(z),f(O,k);const G=u();l(B,H),z.append(B,S,O,G),document.body.appendChild(z)}i?(S.innerText="Preview backend disconnected.",B.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(B.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,S.innerText="Preview backend running in this workspace."),S.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function It(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function AI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(It())}function bI(){const t=La()?.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function SI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function RI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function PI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function CI(){const t=It();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function kI(){return!bI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function VI(){try{return typeof indexedDB=="object"}catch{return!1}}function NI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(n){e(n)}})}/**
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
 */const OI="FirebaseError";class Fn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=OI,Object.setPrototypeOf(this,Fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xi.prototype.create)}}class Xi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?DI(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Fn(s,c,r)}}function DI(t,e){return t.replace(xI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const xI=/\{\$([^}]+)}/g;function MI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ur(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Af(i)&&Af(o)){if(!Ur(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Af(t){return t!==null&&typeof t=="object"}/**
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
 */function Ft(t){return t&&t._delegate?t._delegate:t}class Br{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Or="[DEFAULT]";/**
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
 */class BI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new EI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(jI(e))try{this.getOrInitializeService({instanceIdentifier:Or})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Or){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Or){return this.instances.has(e)}getOptions(e=Or){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:$I(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Or){return this.component?this.component.multipleInstances?e:Or:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $I(t){return t===Or?void 0:t}function jI(t){return t.instantiationMode==="EAGER"}/**
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
 */var ve;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ve||(ve={}));const HI={debug:ve.DEBUG,verbose:ve.VERBOSE,info:ve.INFO,warn:ve.WARN,error:ve.ERROR,silent:ve.SILENT},zI=ve.INFO,WI={[ve.DEBUG]:"log",[ve.VERBOSE]:"log",[ve.INFO]:"info",[ve.WARN]:"warn",[ve.ERROR]:"error"},KI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=WI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Jl{constructor(e){this.name=e,this._logLevel=zI,this._logHandler=KI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?HI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ve.DEBUG,...e),this._logHandler(this,ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ve.VERBOSE,...e),this._logHandler(this,ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ve.INFO,...e),this._logHandler(this,ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ve.WARN,...e),this._logHandler(this,ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ve.ERROR,...e),this._logHandler(this,ve.ERROR,...e)}}const GI=(t,e)=>e.some(n=>t instanceof n);let bf,Sf;function QI(){return bf||(bf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function JI(){return Sf||(Sf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Cm=new WeakMap,sl=new WeakMap,km=new WeakMap,Nc=new WeakMap,Yl=new WeakMap;function YI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(or(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Cm.set(n,t)}).catch(()=>{}),Yl.set(e,t),e}function XI(t){if(sl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});sl.set(t,e)}let il={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return sl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||km.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return or(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ZI(t){il=t(il)}function ew(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Oc(this),e,...n);return km.set(r,e.sort?e.sort():[e]),or(r)}:JI().includes(t)?function(...e){return t.apply(Oc(this),e),or(Cm.get(this))}:function(...e){return or(t.apply(Oc(this),e))}}function tw(t){return typeof t=="function"?ew(t):(t instanceof IDBTransaction&&XI(t),GI(t,QI())?new Proxy(t,il):t)}function or(t){if(t instanceof IDBRequest)return YI(t);if(Nc.has(t))return Nc.get(t);const e=tw(t);return e!==t&&(Nc.set(t,e),Yl.set(e,t)),e}const Oc=t=>Yl.get(t);function nw(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=or(o);return r&&o.addEventListener("upgradeneeded",l=>{r(or(o.result),l.oldVersion,l.newVersion,or(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const rw=["get","getKey","getAll","getAllKeys","count"],sw=["put","add","delete","clear"],Dc=new Map;function Rf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Dc.get(e))return Dc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=sw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||rw.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),s&&l.done]))[0]};return Dc.set(e,i),i}ZI(t=>({...t,get:(e,n,r)=>Rf(e,n)||t.get(e,n,r),has:(e,n)=>!!Rf(e,n)||t.has(e,n)}));/**
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
 */class iw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ow(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ow(t){return t.getComponent()?.type==="VERSION"}const ol="@firebase/app",Pf="0.14.3";/**
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
 */const On=new Jl("@firebase/app"),aw="@firebase/app-compat",cw="@firebase/analytics-compat",lw="@firebase/analytics",uw="@firebase/app-check-compat",hw="@firebase/app-check",fw="@firebase/auth",dw="@firebase/auth-compat",pw="@firebase/database",mw="@firebase/data-connect",gw="@firebase/database-compat",_w="@firebase/functions",yw="@firebase/functions-compat",vw="@firebase/installations",Ew="@firebase/installations-compat",Tw="@firebase/messaging",Iw="@firebase/messaging-compat",ww="@firebase/performance",Aw="@firebase/performance-compat",bw="@firebase/remote-config",Sw="@firebase/remote-config-compat",Rw="@firebase/storage",Pw="@firebase/storage-compat",Cw="@firebase/firestore",kw="@firebase/ai",Vw="@firebase/firestore-compat",Nw="firebase",Ow="12.3.0";/**
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
 */const al="[DEFAULT]",Dw={[ol]:"fire-core",[aw]:"fire-core-compat",[lw]:"fire-analytics",[cw]:"fire-analytics-compat",[hw]:"fire-app-check",[uw]:"fire-app-check-compat",[fw]:"fire-auth",[dw]:"fire-auth-compat",[pw]:"fire-rtdb",[mw]:"fire-data-connect",[gw]:"fire-rtdb-compat",[_w]:"fire-fn",[yw]:"fire-fn-compat",[vw]:"fire-iid",[Ew]:"fire-iid-compat",[Tw]:"fire-fcm",[Iw]:"fire-fcm-compat",[ww]:"fire-perf",[Aw]:"fire-perf-compat",[bw]:"fire-rc",[Sw]:"fire-rc-compat",[Rw]:"fire-gcs",[Pw]:"fire-gcs-compat",[Cw]:"fire-fst",[Vw]:"fire-fst-compat",[kw]:"fire-vertex","fire-js":"fire-js",[Nw]:"fire-js-all"};/**
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
 */const ra=new Map,xw=new Map,cl=new Map;function Cf(t,e){try{t.container.addComponent(e)}catch(n){On.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function bs(t){const e=t.name;if(cl.has(e))return On.debug(`There were multiple attempts to register component ${e}.`),!1;cl.set(e,t);for(const n of ra.values())Cf(n,t);for(const n of xw.values())Cf(n,t);return!0}function Xl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Kt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const Mw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ar=new Xi("app","Firebase",Mw);/**
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
 */class Lw{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Br("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ar.create("app-deleted",{appName:this._name})}}/**
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
 */const xs=Ow;function Vm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:al,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw ar.create("bad-app-name",{appName:String(s)});if(n||(n=bm()),!n)throw ar.create("no-options");const i=ra.get(s);if(i){if(Ur(n,i.options)&&Ur(r,i.config))return i;throw ar.create("duplicate-app",{appName:s})}const o=new qI(s);for(const l of cl.values())o.addComponent(l);const c=new Lw(n,r,o);return ra.set(s,c),c}function Nm(t=al){const e=ra.get(t);if(!e&&t===al&&bm())return Vm();if(!e)throw ar.create("no-app",{appName:t});return e}function cr(t,e,n){let r=Dw[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),On.warn(o.join(" "));return}bs(new Br(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Fw="firebase-heartbeat-database",Uw=1,Fi="firebase-heartbeat-store";let xc=null;function Om(){return xc||(xc=nw(Fw,Uw,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Fi)}catch(n){console.warn(n)}}}}).catch(t=>{throw ar.create("idb-open",{originalErrorMessage:t.message})})),xc}async function Bw(t){try{const n=(await Om()).transaction(Fi),r=await n.objectStore(Fi).get(Dm(t));return await n.done,r}catch(e){if(e instanceof Fn)On.warn(e.message);else{const n=ar.create("idb-get",{originalErrorMessage:e?.message});On.warn(n.message)}}}async function kf(t,e){try{const r=(await Om()).transaction(Fi,"readwrite");await r.objectStore(Fi).put(e,Dm(t)),await r.done}catch(n){if(n instanceof Fn)On.warn(n.message);else{const r=ar.create("idb-set",{originalErrorMessage:n?.message});On.warn(r.message)}}}function Dm(t){return`${t.name}!${t.options.appId}`}/**
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
 */function Kw(t){bs(new Br("platform-logger",e=>new iw(e),"PRIVATE")),bs(new Br("heartbeat",e=>new qw(e),"PRIVATE")),cr(ol,Pf,t),cr(ol,Pf,"esm2020"),cr("fire-js","")}Kw("");function xm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Gw=xm,Mm=new Xi("auth","Firebase",xm());/**
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
 */const sa=new Jl("@firebase/auth");function Qw(t,...e){sa.logLevel<=ve.WARN&&sa.warn(`Auth (${xs}): ${t}`,...e)}function Oo(t,...e){sa.logLevel<=ve.ERROR&&sa.error(`Auth (${xs}): ${t}`,...e)}/**
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
 */function Zt(t,...e){throw Zl(t,...e)}function ln(t,...e){return Zl(t,...e)}function Lm(t,e,n){const r={...Gw(),[e]:n};return new Xi("auth","Firebase",r).create(e,{appName:t.name})}function lr(t){return Lm(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Zl(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Mm.create(t,...e)}function ce(t,e,...n){if(!t)throw Zl(e,...n)}function Pn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Oo(e),new Error(e)}function Dn(t,e){t||Pn(e)}/**
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
 */class eo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Dn(n>e,"Short delay should be less than long delay!"),this.isMobile=AI()||PI()}get(){return Yw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */class Fm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const eA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],tA=new eo(3e4,6e4);function Gr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function wr(t,e,n,r,s={}){return Um(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Zi({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:l,...i};return SI()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&Ds(t.emulatorConfig.host)&&(u.credentials="include"),Fm.fetch()(await Bm(t,t.config.apiHost,n,c),u)})}async function Um(t,e,n){t._canInitEmulator=!1;const r={...Zw,...e};try{const s=new rA(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw wo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw wo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw wo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw wo(t,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Lm(t,f,u);Zt(t,f)}}catch(s){if(s instanceof Fn)throw s;Zt(t,"network-request-failed",{message:String(s)})}}async function Fa(t,e,n,r,s={}){const i=await wr(t,e,n,r,s);return"mfaPendingCredential"in i&&Zt(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Bm(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?eu(t.config,s):`${t.config.apiScheme}://${s}`;return eA.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function nA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class rA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ln(this.auth,"network-request-failed")),tA.get())})}}function wo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=ln(t,e,r);return s.customData._tokenResponse=n,s}function Df(t){return t!==void 0&&t.enterprise!==void 0}class sA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return nA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function iA(t,e){return wr(t,"GET","/v2/recaptchaConfig",Gr(t,e))}/**
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
 */async function oA(t,e){return wr(t,"POST","/v1/accounts:delete",e)}async function ia(t,e){return wr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function bi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function aA(t,e=!1){const n=Ft(t),r=await n.getIdToken(e),s=tu(r);ce(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:bi(Mc(s.auth_time)),issuedAtTime:bi(Mc(s.iat)),expirationTime:bi(Mc(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Mc(t){return Number(t)*1e3}function tu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Oo("JWT malformed, contained fewer than 3 sections"),null;try{const s=wm(n);return s?JSON.parse(s):(Oo("Failed to decode base64 JWT payload"),null)}catch(s){return Oo("Caught error parsing JWT payload as JSON",s?.toString()),null}}function xf(t){const e=tu(t);return ce(e,"internal-error"),ce(typeof e.exp<"u","internal-error"),ce(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ui(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Fn&&cA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function cA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */async function oa(t){const e=t.auth,n=await t.getIdToken(),r=await Ui(t,ia(e,{idToken:n}));ce(r?.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=s.providerUserInfo?.length?$m(s.providerUserInfo):[],o=hA(t.providerData,i),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!o?.length,u=c?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new ul(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function uA(t){const e=Ft(t);await oa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function hA(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function $m(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function fA(t,e){const n=await Um(t,{},async()=>{const r=Zi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Bm(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return t.emulatorConfig&&Ds(t.emulatorConfig.host)&&(l.credentials="include"),Fm.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function dA(t,e){return wr(t,"POST","/v2/accounts:revokeToken",Gr(t,e))}/**
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
 */class gs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ce(e.idToken,"internal-error"),ce(typeof e.idToken<"u","internal-error"),ce(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):xf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ce(e.length!==0,"internal-error");const n=xf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ce(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await fA(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new gs;return r&&(ce(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ce(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ce(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new gs,this.toJSON())}_performRefresh(){return Pn("not implemented")}}/**
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
 */function Kn(t,e){ce(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Qt{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new lA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ul(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ui(this,this.stsTokenManager.getToken(this.auth,e));return ce(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return aA(this,e)}reload(){return uA(this)}_assign(e){this!==e&&(ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Qt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await oa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Kt(this.auth.app))return Promise.reject(lr(this.auth));const e=await this.getIdToken();return await Ui(this,oA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,c=n.tenantId??void 0,l=n._redirectEventId??void 0,u=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:_,providerData:S,stsTokenManager:k}=n;ce(p&&k,e,"internal-error");const O=gs.fromJSON(this.name,k);ce(typeof p=="string",e,"internal-error"),Kn(r,e.name),Kn(s,e.name),ce(typeof m=="boolean",e,"internal-error"),ce(typeof _=="boolean",e,"internal-error"),Kn(i,e.name),Kn(o,e.name),Kn(c,e.name),Kn(l,e.name),Kn(u,e.name),Kn(f,e.name);const H=new Qt({uid:p,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:_,photoURL:o,phoneNumber:i,tenantId:c,stsTokenManager:O,createdAt:u,lastLoginAt:f});return S&&Array.isArray(S)&&(H.providerData=S.map(B=>({...B}))),l&&(H._redirectEventId=l),H}static async _fromIdTokenResponse(e,n,r=!1){const s=new gs;s.updateFromServerResponse(n);const i=new Qt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await oa(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ce(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?$m(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,c=new gs;c.updateFromIdToken(r);const l=new Qt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new ul(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(l,u),l}}/**
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
 */const Mf=new Map;function Cn(t){Dn(t instanceof Function,"Expected a class definition");let e=Mf.get(t);return e?(Dn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Mf.set(t,e),e)}/**
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
 */class jm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}jm.type="NONE";const Lf=jm;/**
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
 */function Do(t,e,n){return`firebase:${t}:${e}:${n}`}class _s{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Do(this.userKey,s.apiKey,i),this.fullPersistenceKey=Do("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ia(this.auth,{idToken:e}).catch(()=>{});return n?Qt._fromGetAccountInfoResponse(this.auth,n,e):null}return Qt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new _s(Cn(Lf),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Cn(Lf);const o=Do(r,e.config.apiKey,e.name);let c=null;for(const u of n)try{const f=await u._get(o);if(f){let p;if(typeof f=="string"){const m=await ia(e,{idToken:f}).catch(()=>{});if(!m)break;p=await Qt._fromGetAccountInfoResponse(e,m,f)}else p=Qt._fromJSON(e,f);u!==i&&(c=p),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new _s(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new _s(i,e,r))}}/**
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
 */function Ff(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Wm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(qm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Gm(e))return"Blackberry";if(Qm(e))return"Webos";if(Hm(e))return"Safari";if((e.includes("chrome/")||zm(e))&&!e.includes("edge/"))return"Chrome";if(Km(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function qm(t=It()){return/firefox\//i.test(t)}function Hm(t=It()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function zm(t=It()){return/crios\//i.test(t)}function Wm(t=It()){return/iemobile/i.test(t)}function Km(t=It()){return/android/i.test(t)}function Gm(t=It()){return/blackberry/i.test(t)}function Qm(t=It()){return/webos/i.test(t)}function nu(t=It()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function pA(t=It()){return nu(t)&&!!window.navigator?.standalone}function mA(){return CI()&&document.documentMode===10}function Jm(t=It()){return nu(t)||Km(t)||Qm(t)||Gm(t)||/windows phone/i.test(t)||Wm(t)}/**
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
 */function Ym(t,e=[]){let n;switch(t){case"Browser":n=Ff(It());break;case"Worker":n=`${Ff(It())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${xs}/${r}`}/**
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
 */class gA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function _A(t,e={}){return wr(t,"GET","/v2/passwordPolicy",Gr(t,e))}/**
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
 */class EA{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Uf(this),this.idTokenSubscription=new Uf(this),this.beforeStateQueue=new gA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Mm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Cn(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await _s.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ia(this,{idToken:e}),r=await Qt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Kt(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=r?._redirectEventId,c=await this.tryRedirectSignIn(e);(!i||i===o)&&c?.user&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await oa(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Xw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Kt(this.app))return Promise.reject(lr(this));const n=e?Ft(e):null;return n&&ce(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Kt(this.app)?Promise.reject(lr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Kt(this.app)?Promise.reject(lr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Cn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await _A(this),n=new vA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Xi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await dA(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Cn(e)||this._popupRedirectResolver;ce(n,this,"argument-error"),this.redirectPersistenceManager=await _s.create(this,[Cn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ce(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ym(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(Kt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Qw(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Ms(t){return Ft(t)}class Uf{constructor(e){this.auth=e,this.observer=null,this.addObserver=LI(n=>this.observer=n)}get next(){return ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ua={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function TA(t){Ua=t}function Xm(t){return Ua.loadJS(t)}function IA(){return Ua.recaptchaEnterpriseScript}function wA(){return Ua.gapiScript}function AA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class bA{constructor(){this.enterprise=new SA}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class SA{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const RA="recaptcha-enterprise",Zm="NO_RECAPTCHA";class PA{constructor(e){this.type=RA,this.auth=Ms(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{iA(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new sA(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;Df(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(Zm)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new bA().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&Df(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=IA();l.length!==0&&(l+=c),Xm(l).then(()=>{s(c,i,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function Bf(t,e,n,r=!1,s=!1){const i=new PA(t);let o;if(s)o=Zm;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const c={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,u=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function $f(t,e,n,r,s){if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Bf(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Bf(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function CA(t,e){const n=Xl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ur(i,e??{}))return s;Zt(s,"already-initialized")}return n.initialize({options:e})}function kA(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(Cn);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function VA(t,e,n){const r=Ms(t);ce(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=eg(e),{host:o,port:c}=NA(e),l=c===null?"":`:${c}`,u={url:`${i}//${o}${l}/`},f=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ce(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ce(Ur(u,r.config.emulator)&&Ur(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Ds(o)?(Rm(`${i}//${o}${l}`),Pm("Auth",!0)):OA()}function eg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function NA(t){const e=eg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:jf(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:jf(o)}}}function jf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function OA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class ru{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Pn("not implemented")}_getIdTokenResponse(e){return Pn("not implemented")}_linkToIdToken(e,n){return Pn("not implemented")}_getReauthenticationResolver(e){return Pn("not implemented")}}async function DA(t,e){return wr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */class Bi extends ru{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Bi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Bi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $f(e,n,"signInWithPassword",xA);case"emailLink":return MA(e,{email:this._email,oobCode:this._password});default:Zt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $f(e,r,"signUpPassword",DA);case"emailLink":return LA(e,{idToken:n,email:this._email,oobCode:this._password});default:Zt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */const FA="http://localhost";class $r extends ru{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new $r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Zt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new $r(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ys(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ys(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ys(e,n)}buildRequest(){const e={requestUri:FA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Zi(n)}return e}}/**
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
 */class tg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class to extends tg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Zn extends to{constructor(){super("facebook.com")}static credential(e){return $r._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zn.credential(e.oauthAccessToken)}catch{return null}}}Zn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Zn.PROVIDER_ID="facebook.com";/**
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
 */class er extends to{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return $r._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return er.credential(n,r)}catch{return null}}}er.GOOGLE_SIGN_IN_METHOD="google.com";er.PROVIDER_ID="google.com";/**
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
 */class tr extends to{constructor(){super("github.com")}static credential(e){return $r._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tr.credential(e.oauthAccessToken)}catch{return null}}}tr.GITHUB_SIGN_IN_METHOD="github.com";tr.PROVIDER_ID="github.com";/**
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
 */class nr extends to{constructor(){super("twitter.com")}static credential(e,n){return $r._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return nr.credential(n,r)}catch{return null}}}nr.TWITTER_SIGN_IN_METHOD="twitter.com";nr.PROVIDER_ID="twitter.com";/**
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
 */class Ss{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Qt._fromIdTokenResponse(e,r,s),o=qf(r);return new Ss({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=qf(r);return new Ss({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function qf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class aa extends Fn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,aa.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new aa(e,n,r,s)}}function ng(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?aa._fromErrorAndOperation(t,i,e,r):i})}async function $A(t,e,n=!1){const r=await Ui(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ss._forOperation(t,"link",r)}/**
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
 */async function jA(t,e,n=!1){const{auth:r}=t;if(Kt(r.app))return Promise.reject(lr(r));const s="reauthenticate";try{const i=await Ui(t,ng(r,s,e,t),n);ce(i.idToken,r,"internal-error");const o=tu(i.idToken);ce(o,r,"internal-error");const{sub:c}=o;return ce(t.uid===c,r,"user-mismatch"),Ss._forOperation(t,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&Zt(r,"user-mismatch"),i}}/**
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
 */async function rg(t,e,n=!1){if(Kt(t.app))return Promise.reject(lr(t));const r="signIn",s=await ng(t,r,e),i=await Ss._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function qA(t,e){return rg(Ms(t),e)}/**
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
 */async function HA(t){const e=Ms(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function zA(t,e,n){return Kt(t.app)?Promise.reject(lr(t)):qA(Ft(t),Ls.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&HA(t),r})}function WA(t,e,n,r){return Ft(t).onIdTokenChanged(e,n,r)}function KA(t,e,n){return Ft(t).beforeAuthStateChanged(e,n)}function GA(t){return Ft(t).signOut()}const ca="__sak";/**
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
 */class sg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ca,"1"),this.storage.removeItem(ca),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const QA=1e3,JA=10;class ig extends sg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Jm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);mA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,JA):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},QA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ig.type="LOCAL";const YA=ig;/**
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
 */class og extends sg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}og.type="SESSION";const ag=og;/**
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
 */function un(){return window}function eb(t){un().location.href=t}/**
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
 */function cg(){return typeof un().WorkerGlobalScope<"u"&&typeof un().importScripts=="function"}async function tb(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function nb(){return navigator?.serviceWorker?.controller||null}function rb(){return cg()?self:null}/**
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
 */const lg="firebaseLocalStorageDb",sb=1,la="firebaseLocalStorage",ug="fbase_key";class no{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function $a(t,e){return t.transaction([la],e?"readwrite":"readonly").objectStore(la)}function ib(){const t=indexedDB.deleteDatabase(lg);return new no(t).toPromise()}function hl(){const t=indexedDB.open(lg,sb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(la,{keyPath:ug})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(la)?e(r):(r.close(),await ib(),e(await hl()))})})}async function Hf(t,e,n){const r=$a(t,!0).put({[ug]:e,value:n});return new no(r).toPromise()}async function ob(t,e){const n=$a(t,!1).get(e),r=await new no(n).toPromise();return r===void 0?null:r.value}function zf(t,e){const n=$a(t,!0).delete(e);return new no(n).toPromise()}const ab=800,cb=3;class hg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>cb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return cg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ba._getInstance(rb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await tb(),!this.activeServiceWorker)return;this.sender=new ZA(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||nb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await hl();return await Hf(e,ca,"1"),await zf(e,ca),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Hf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>ob(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>zf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=$a(s,!1).getAll();return new no(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ab)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}hg.type="LOCAL";const lb=hg;new eo(3e4,6e4);/**
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
 */function ub(t,e){return e?Cn(e):(ce(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ou extends ru{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ys(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ys(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ys(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function hb(t){return rg(t.auth,new ou(t),t.bypassAuthState)}function fb(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),jA(n,new ou(t),t.bypassAuthState)}async function db(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),$A(n,new ou(t),t.bypassAuthState)}/**
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
 */class fg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hb;case"linkViaPopup":case"linkViaRedirect":return db;case"reauthViaPopup":case"reauthViaRedirect":return fb;default:Zt(this.auth,"internal-error")}}resolve(e){Dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const pb=new eo(2e3,1e4);class hs extends fg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,hs.currentPopupAction&&hs.currentPopupAction.cancel(),hs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ce(e,this.auth,"internal-error"),e}async onExecution(){Dn(this.filter.length===1,"Popup operations only handle one event");const e=iu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ln(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(ln(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,hs.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ln(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,pb.get())};e()}}hs.currentPopupAction=null;/**
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
 */const mb="pendingRedirect",xo=new Map;class gb extends fg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=xo.get(this.auth._key());if(!e){try{const r=await _b(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}xo.set(this.auth._key(),e)}return this.bypassAuthState||xo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _b(t,e){const n=Eb(e),r=vb(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function yb(t,e){xo.set(t._key(),e)}function vb(t){return Cn(t._redirectPersistence)}function Eb(t){return Do(mb,t.config.apiKey,t.name)}async function Tb(t,e,n=!1){if(Kt(t.app))return Promise.reject(lr(t));const r=Ms(t),s=ub(r,e),o=await new gb(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Ib=600*1e3;class wb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ab(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!dg(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";n.onError(ln(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ib&&this.cachedEventUids.clear(),this.cachedEventUids.has(Wf(e))}saveEventToCache(e){this.cachedEventUids.add(Wf(e)),this.lastProcessedEventTime=Date.now()}}function Wf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function dg({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function Ab(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dg(t);default:return!1}}/**
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
 */async function bb(t,e={}){return wr(t,"GET","/v1/projects",e)}/**
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
 */const Sb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Rb=/^https?/;async function Pb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await bb(t);for(const n of e)try{if(Cb(n))return}catch{}Zt(t,"unauthorized-domain")}function Cb(t){const e=ll(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Rb.test(n))return!1;if(Sb.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const kb=new eo(3e4,6e4);function Kf(){const t=un().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Vb(t){return new Promise((e,n)=>{function r(){Kf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Kf(),n(ln(t,"network-request-failed"))},timeout:kb.get()})}if(un().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(un().gapi?.load)r();else{const s=AA("iframefcb");return un()[s]=()=>{gapi.load?r():n(ln(t,"network-request-failed"))},Xm(`${wA()}?onload=${s}`).catch(i=>n(i))}}).catch(e=>{throw Mo=null,e})}let Mo=null;function Nb(t){return Mo=Mo||Vb(t),Mo}/**
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
 */const Ob=new eo(5e3,15e3),Db="__/auth/iframe",xb="emulator/auth/iframe",Mb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Lb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Fb(t){const e=t.config;ce(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?eu(e,xb):`https://${t.config.authDomain}/${Db}`,r={apiKey:e.apiKey,appName:t.name,v:xs},s=Lb.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Zi(r).slice(1)}`}async function Ub(t){const e=await Nb(t),n=un().gapi;return ce(n,t,"internal-error"),e.open({where:document.body,url:Fb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Mb,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=ln(t,"network-request-failed"),c=un().setTimeout(()=>{i(o)},Ob.get());function l(){un().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const Bb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$b=500,jb=600,qb="_blank",Hb="http://localhost";class Gf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function zb(t,e,n,r=$b,s=jb){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={...Bb,width:r.toString(),height:s.toString(),top:i,left:o},u=It().toLowerCase();n&&(c=zm(u)?qb:n),qm(u)&&(e=e||Hb,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[_,S])=>`${m}${_}=${S},`,"");if(pA(u)&&c!=="_self")return Wb(e||"",c),new Gf(null);const p=window.open(e||"",c,f);ce(p,t,"popup-blocked");try{p.focus()}catch{}return new Gf(p)}function Wb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Kb="__/auth/handler",Gb="emulator/auth/handler",Qb=encodeURIComponent("fac");async function Qf(t,e,n,r,s,i){ce(t.config.authDomain,t,"auth-domain-config-required"),ce(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:xs,eventId:s};if(e instanceof tg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",MI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof to){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),u=l?`#${Qb}=${encodeURIComponent(l)}`:"";return`${Jb(t)}?${Zi(c).slice(1)}${u}`}function Jb({config:t}){return t.emulator?eu(t,Gb):`https://${t.authDomain}/${Kb}`}/**
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
 */const Lc="webStorageSupport";class Yb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ag,this._completeRedirectFn=Tb,this._overrideRedirectResult=yb}async _openPopup(e,n,r,s){Dn(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await Qf(e,n,r,ll(),s);return zb(e,i,iu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Qf(e,n,r,ll(),s);return eb(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Dn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Ub(e),r=new wb(e);return n.register("authEvent",s=>(ce(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Lc,{type:Lc},s=>{const i=s?.[0]?.[Lc];i!==void 0&&n(!!i),Zt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Pb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Jm()||Hm()||nu()}}const Xb=Yb;var Jf="@firebase/auth",Yf="1.11.0";/**
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
 */function eS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function tS(t){bs(new Br("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;ce(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ym(t)},u=new EA(r,s,i,l);return kA(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),bs(new Br("auth-internal",e=>{const n=Ms(e.getProvider("auth").getImmediate());return(r=>new Zb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),cr(Jf,Yf,eS(t)),cr(Jf,Yf,"esm2020")}/**
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
 */const nS=300,rS=Sm("authIdTokenMaxAge")||nS;let Xf=null;const sS=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>rS)return;const s=n?.token;Xf!==s&&(Xf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Zf(t=Nm()){const e=Xl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=CA(t,{popupRedirectResolver:Xb,persistence:[lb,YA,ag]}),r=Sm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=sS(i.toString());KA(n,o,()=>o(n.currentUser)),WA(n,c=>o(c))}}const s=Am("auth");return s&&VA(n,`http://${s}`),n}function iS(){return document.getElementsByTagName("head")?.[0]??document}TA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=ln("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",iS().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});tS("Browser");var oS="firebase",aS="12.3.0";/**
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
 */cr(oS,aS,"app");var ed=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ur,pg;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,y){function v(){}v.prototype=y.prototype,w.F=y.prototype,w.prototype=new v,w.prototype.constructor=w,w.D=function(b,A,R){for(var T=Array(arguments.length-2),qe=2;qe<arguments.length;qe++)T[qe-2]=arguments[qe];return y.prototype[A].apply(b,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,y,v){v||(v=0);const b=Array(16);if(typeof y=="string")for(var A=0;A<16;++A)b[A]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(A=0;A<16;++A)b[A]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=w.g[0],v=w.g[1],A=w.g[2];let R=w.g[3],T;T=y+(R^v&(A^R))+b[0]+3614090360&4294967295,y=v+(T<<7&4294967295|T>>>25),T=R+(A^y&(v^A))+b[1]+3905402710&4294967295,R=y+(T<<12&4294967295|T>>>20),T=A+(v^R&(y^v))+b[2]+606105819&4294967295,A=R+(T<<17&4294967295|T>>>15),T=v+(y^A&(R^y))+b[3]+3250441966&4294967295,v=A+(T<<22&4294967295|T>>>10),T=y+(R^v&(A^R))+b[4]+4118548399&4294967295,y=v+(T<<7&4294967295|T>>>25),T=R+(A^y&(v^A))+b[5]+1200080426&4294967295,R=y+(T<<12&4294967295|T>>>20),T=A+(v^R&(y^v))+b[6]+2821735955&4294967295,A=R+(T<<17&4294967295|T>>>15),T=v+(y^A&(R^y))+b[7]+4249261313&4294967295,v=A+(T<<22&4294967295|T>>>10),T=y+(R^v&(A^R))+b[8]+1770035416&4294967295,y=v+(T<<7&4294967295|T>>>25),T=R+(A^y&(v^A))+b[9]+2336552879&4294967295,R=y+(T<<12&4294967295|T>>>20),T=A+(v^R&(y^v))+b[10]+4294925233&4294967295,A=R+(T<<17&4294967295|T>>>15),T=v+(y^A&(R^y))+b[11]+2304563134&4294967295,v=A+(T<<22&4294967295|T>>>10),T=y+(R^v&(A^R))+b[12]+1804603682&4294967295,y=v+(T<<7&4294967295|T>>>25),T=R+(A^y&(v^A))+b[13]+4254626195&4294967295,R=y+(T<<12&4294967295|T>>>20),T=A+(v^R&(y^v))+b[14]+2792965006&4294967295,A=R+(T<<17&4294967295|T>>>15),T=v+(y^A&(R^y))+b[15]+1236535329&4294967295,v=A+(T<<22&4294967295|T>>>10),T=y+(A^R&(v^A))+b[1]+4129170786&4294967295,y=v+(T<<5&4294967295|T>>>27),T=R+(v^A&(y^v))+b[6]+3225465664&4294967295,R=y+(T<<9&4294967295|T>>>23),T=A+(y^v&(R^y))+b[11]+643717713&4294967295,A=R+(T<<14&4294967295|T>>>18),T=v+(R^y&(A^R))+b[0]+3921069994&4294967295,v=A+(T<<20&4294967295|T>>>12),T=y+(A^R&(v^A))+b[5]+3593408605&4294967295,y=v+(T<<5&4294967295|T>>>27),T=R+(v^A&(y^v))+b[10]+38016083&4294967295,R=y+(T<<9&4294967295|T>>>23),T=A+(y^v&(R^y))+b[15]+3634488961&4294967295,A=R+(T<<14&4294967295|T>>>18),T=v+(R^y&(A^R))+b[4]+3889429448&4294967295,v=A+(T<<20&4294967295|T>>>12),T=y+(A^R&(v^A))+b[9]+568446438&4294967295,y=v+(T<<5&4294967295|T>>>27),T=R+(v^A&(y^v))+b[14]+3275163606&4294967295,R=y+(T<<9&4294967295|T>>>23),T=A+(y^v&(R^y))+b[3]+4107603335&4294967295,A=R+(T<<14&4294967295|T>>>18),T=v+(R^y&(A^R))+b[8]+1163531501&4294967295,v=A+(T<<20&4294967295|T>>>12),T=y+(A^R&(v^A))+b[13]+2850285829&4294967295,y=v+(T<<5&4294967295|T>>>27),T=R+(v^A&(y^v))+b[2]+4243563512&4294967295,R=y+(T<<9&4294967295|T>>>23),T=A+(y^v&(R^y))+b[7]+1735328473&4294967295,A=R+(T<<14&4294967295|T>>>18),T=v+(R^y&(A^R))+b[12]+2368359562&4294967295,v=A+(T<<20&4294967295|T>>>12),T=y+(v^A^R)+b[5]+4294588738&4294967295,y=v+(T<<4&4294967295|T>>>28),T=R+(y^v^A)+b[8]+2272392833&4294967295,R=y+(T<<11&4294967295|T>>>21),T=A+(R^y^v)+b[11]+1839030562&4294967295,A=R+(T<<16&4294967295|T>>>16),T=v+(A^R^y)+b[14]+4259657740&4294967295,v=A+(T<<23&4294967295|T>>>9),T=y+(v^A^R)+b[1]+2763975236&4294967295,y=v+(T<<4&4294967295|T>>>28),T=R+(y^v^A)+b[4]+1272893353&4294967295,R=y+(T<<11&4294967295|T>>>21),T=A+(R^y^v)+b[7]+4139469664&4294967295,A=R+(T<<16&4294967295|T>>>16),T=v+(A^R^y)+b[10]+3200236656&4294967295,v=A+(T<<23&4294967295|T>>>9),T=y+(v^A^R)+b[13]+681279174&4294967295,y=v+(T<<4&4294967295|T>>>28),T=R+(y^v^A)+b[0]+3936430074&4294967295,R=y+(T<<11&4294967295|T>>>21),T=A+(R^y^v)+b[3]+3572445317&4294967295,A=R+(T<<16&4294967295|T>>>16),T=v+(A^R^y)+b[6]+76029189&4294967295,v=A+(T<<23&4294967295|T>>>9),T=y+(v^A^R)+b[9]+3654602809&4294967295,y=v+(T<<4&4294967295|T>>>28),T=R+(y^v^A)+b[12]+3873151461&4294967295,R=y+(T<<11&4294967295|T>>>21),T=A+(R^y^v)+b[15]+530742520&4294967295,A=R+(T<<16&4294967295|T>>>16),T=v+(A^R^y)+b[2]+3299628645&4294967295,v=A+(T<<23&4294967295|T>>>9),T=y+(A^(v|~R))+b[0]+4096336452&4294967295,y=v+(T<<6&4294967295|T>>>26),T=R+(v^(y|~A))+b[7]+1126891415&4294967295,R=y+(T<<10&4294967295|T>>>22),T=A+(y^(R|~v))+b[14]+2878612391&4294967295,A=R+(T<<15&4294967295|T>>>17),T=v+(R^(A|~y))+b[5]+4237533241&4294967295,v=A+(T<<21&4294967295|T>>>11),T=y+(A^(v|~R))+b[12]+1700485571&4294967295,y=v+(T<<6&4294967295|T>>>26),T=R+(v^(y|~A))+b[3]+2399980690&4294967295,R=y+(T<<10&4294967295|T>>>22),T=A+(y^(R|~v))+b[10]+4293915773&4294967295,A=R+(T<<15&4294967295|T>>>17),T=v+(R^(A|~y))+b[1]+2240044497&4294967295,v=A+(T<<21&4294967295|T>>>11),T=y+(A^(v|~R))+b[8]+1873313359&4294967295,y=v+(T<<6&4294967295|T>>>26),T=R+(v^(y|~A))+b[15]+4264355552&4294967295,R=y+(T<<10&4294967295|T>>>22),T=A+(y^(R|~v))+b[6]+2734768916&4294967295,A=R+(T<<15&4294967295|T>>>17),T=v+(R^(A|~y))+b[13]+1309151649&4294967295,v=A+(T<<21&4294967295|T>>>11),T=y+(A^(v|~R))+b[4]+4149444226&4294967295,y=v+(T<<6&4294967295|T>>>26),T=R+(v^(y|~A))+b[11]+3174756917&4294967295,R=y+(T<<10&4294967295|T>>>22),T=A+(y^(R|~v))+b[2]+718787259&4294967295,A=R+(T<<15&4294967295|T>>>17),T=v+(R^(A|~y))+b[9]+3951481745&4294967295,w.g[0]=w.g[0]+y&4294967295,w.g[1]=w.g[1]+(A+(T<<21&4294967295|T>>>11))&4294967295,w.g[2]=w.g[2]+A&4294967295,w.g[3]=w.g[3]+R&4294967295}r.prototype.v=function(w,y){y===void 0&&(y=w.length);const v=y-this.blockSize,b=this.C;let A=this.h,R=0;for(;R<y;){if(A==0)for(;R<=v;)s(this,w,R),R+=this.blockSize;if(typeof w=="string"){for(;R<y;)if(b[A++]=w.charCodeAt(R++),A==this.blockSize){s(this,b),A=0;break}}else for(;R<y;)if(b[A++]=w[R++],A==this.blockSize){s(this,b),A=0;break}}this.h=A,this.o+=y},r.prototype.A=function(){var w=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);w[0]=128;for(var y=1;y<w.length-8;++y)w[y]=0;y=this.o*8;for(var v=w.length-8;v<w.length;++v)w[v]=y&255,y/=256;for(this.v(w),w=Array(16),y=0,v=0;v<4;++v)for(let b=0;b<32;b+=8)w[y++]=this.g[v]>>>b&255;return w};function i(w,y){var v=c;return Object.prototype.hasOwnProperty.call(v,w)?v[w]:v[w]=y(w)}function o(w,y){this.h=y;const v=[];let b=!0;for(let A=w.length-1;A>=0;A--){const R=w[A]|0;b&&R==y||(v[A]=R,b=!1)}this.g=v}var c={};function l(w){return-128<=w&&w<128?i(w,function(y){return new o([y|0],y<0?-1:0)}):new o([w|0],w<0?-1:0)}function u(w){if(isNaN(w)||!isFinite(w))return p;if(w<0)return O(u(-w));const y=[];let v=1;for(let b=0;w>=v;b++)y[b]=w/v|0,v*=4294967296;return new o(y,0)}function f(w,y){if(w.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(w.charAt(0)=="-")return O(f(w.substring(1),y));if(w.indexOf("-")>=0)throw Error('number format error: interior "-" character');const v=u(Math.pow(y,8));let b=p;for(let R=0;R<w.length;R+=8){var A=Math.min(8,w.length-R);const T=parseInt(w.substring(R,R+A),y);A<8?(A=u(Math.pow(y,A)),b=b.j(A).add(u(T))):(b=b.j(v),b=b.add(u(T)))}return b}var p=l(0),m=l(1),_=l(16777216);t=o.prototype,t.m=function(){if(k(this))return-O(this).m();let w=0,y=1;for(let v=0;v<this.g.length;v++){const b=this.i(v);w+=(b>=0?b:4294967296+b)*y,y*=4294967296}return w},t.toString=function(w){if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(S(this))return"0";if(k(this))return"-"+O(this).toString(w);const y=u(Math.pow(w,6));var v=this;let b="";for(;;){const A=G(v,y).g;v=H(v,A.j(y));let R=((v.g.length>0?v.g[0]:v.h)>>>0).toString(w);if(v=A,S(v))return R+b;for(;R.length<6;)R="0"+R;b=R+b}},t.i=function(w){return w<0?0:w<this.g.length?this.g[w]:this.h};function S(w){if(w.h!=0)return!1;for(let y=0;y<w.g.length;y++)if(w.g[y]!=0)return!1;return!0}function k(w){return w.h==-1}t.l=function(w){return w=H(this,w),k(w)?-1:S(w)?0:1};function O(w){const y=w.g.length,v=[];for(let b=0;b<y;b++)v[b]=~w.g[b];return new o(v,~w.h).add(m)}t.abs=function(){return k(this)?O(this):this},t.add=function(w){const y=Math.max(this.g.length,w.g.length),v=[];let b=0;for(let A=0;A<=y;A++){let R=b+(this.i(A)&65535)+(w.i(A)&65535),T=(R>>>16)+(this.i(A)>>>16)+(w.i(A)>>>16);b=T>>>16,R&=65535,T&=65535,v[A]=T<<16|R}return new o(v,v[v.length-1]&-2147483648?-1:0)};function H(w,y){return w.add(O(y))}t.j=function(w){if(S(this)||S(w))return p;if(k(this))return k(w)?O(this).j(O(w)):O(O(this).j(w));if(k(w))return O(this.j(O(w)));if(this.l(_)<0&&w.l(_)<0)return u(this.m()*w.m());const y=this.g.length+w.g.length,v=[];for(var b=0;b<2*y;b++)v[b]=0;for(b=0;b<this.g.length;b++)for(let A=0;A<w.g.length;A++){const R=this.i(b)>>>16,T=this.i(b)&65535,qe=w.i(A)>>>16,ut=w.i(A)&65535;v[2*b+2*A]+=T*ut,B(v,2*b+2*A),v[2*b+2*A+1]+=R*ut,B(v,2*b+2*A+1),v[2*b+2*A+1]+=T*qe,B(v,2*b+2*A+1),v[2*b+2*A+2]+=R*qe,B(v,2*b+2*A+2)}for(w=0;w<y;w++)v[w]=v[2*w+1]<<16|v[2*w];for(w=y;w<2*y;w++)v[w]=0;return new o(v,0)};function B(w,y){for(;(w[y]&65535)!=w[y];)w[y+1]+=w[y]>>>16,w[y]&=65535,y++}function z(w,y){this.g=w,this.h=y}function G(w,y){if(S(y))throw Error("division by zero");if(S(w))return new z(p,p);if(k(w))return y=G(O(w),y),new z(O(y.g),O(y.h));if(k(y))return y=G(w,O(y)),new z(O(y.g),y.h);if(w.g.length>30){if(k(w)||k(y))throw Error("slowDivide_ only works with positive integers.");for(var v=m,b=y;b.l(w)<=0;)v=re(v),b=re(b);var A=_e(v,1),R=_e(b,1);for(b=_e(b,2),v=_e(v,2);!S(b);){var T=R.add(b);T.l(w)<=0&&(A=A.add(v),R=T),b=_e(b,1),v=_e(v,1)}return y=H(w,A.j(y)),new z(A,y)}for(A=p;w.l(y)>=0;){for(v=Math.max(1,Math.floor(w.m()/y.m())),b=Math.ceil(Math.log(v)/Math.LN2),b=b<=48?1:Math.pow(2,b-48),R=u(v),T=R.j(y);k(T)||T.l(w)>0;)v-=b,R=u(v),T=R.j(y);S(R)&&(R=m),A=A.add(R),w=H(w,T)}return new z(A,w)}t.B=function(w){return G(this,w).h},t.and=function(w){const y=Math.max(this.g.length,w.g.length),v=[];for(let b=0;b<y;b++)v[b]=this.i(b)&w.i(b);return new o(v,this.h&w.h)},t.or=function(w){const y=Math.max(this.g.length,w.g.length),v=[];for(let b=0;b<y;b++)v[b]=this.i(b)|w.i(b);return new o(v,this.h|w.h)},t.xor=function(w){const y=Math.max(this.g.length,w.g.length),v=[];for(let b=0;b<y;b++)v[b]=this.i(b)^w.i(b);return new o(v,this.h^w.h)};function re(w){const y=w.g.length+1,v=[];for(let b=0;b<y;b++)v[b]=w.i(b)<<1|w.i(b-1)>>>31;return new o(v,w.h)}function _e(w,y){const v=y>>5;y%=32;const b=w.g.length-v,A=[];for(let R=0;R<b;R++)A[R]=y>0?w.i(R+v)>>>y|w.i(R+v+1)<<32-y:w.i(R+v);return new o(A,w.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,pg=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,ur=o}).apply(typeof ed<"u"?ed:typeof self<"u"?self:typeof window<"u"?window:{});var Ao=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var mg,li,gg,Lo,fl,_g,yg,vg;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ao=="object"&&Ao];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var C=a[g];if(!(C in d))break e;d=d[C]}a=a[a.length-1],g=d[a],h=h(g),h!=g&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(h){var d=[],g;for(g in h)Object.prototype.hasOwnProperty.call(h,g)&&d.push([g,h[g]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function l(a,h,d){return a.call.apply(a.bind,arguments)}function u(a,h,d){return u=l,u.apply(null,arguments)}function f(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function p(a,h){function d(){}d.prototype=h.prototype,a.Z=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(g,C,N){for(var W=Array(arguments.length-2),me=2;me<arguments.length;me++)W[me-2]=arguments[me];return h.prototype[C].apply(g,W)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function _(a){const h=a.length;if(h>0){const d=Array(h);for(let g=0;g<h;g++)d[g]=a[g];return d}return[]}function S(a,h){for(let g=1;g<arguments.length;g++){const C=arguments[g];var d=typeof C;if(d=d!="object"?d:C?Array.isArray(C)?"array":d:"null",d=="array"||d=="object"&&typeof C.length=="number"){d=a.length||0;const N=C.length||0;a.length=d+N;for(let W=0;W<N;W++)a[d+W]=C[W]}else a.push(C)}}class k{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function O(a){o.setTimeout(()=>{throw a},0)}function H(){var a=w;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class B{constructor(){this.h=this.g=null}add(h,d){const g=z.get();g.set(h,d),this.h?this.h.next=g:this.g=g,this.h=g}}var z=new k(()=>new G,a=>a.reset());class G{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let re,_e=!1,w=new B,y=()=>{const a=Promise.resolve(void 0);re=()=>{a.then(v)}};function v(){for(var a;a=H();){try{a.h.call(a.g)}catch(d){O(d)}var h=z;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}_e=!1}function b(){this.u=this.u,this.C=this.C}b.prototype.u=!1,b.prototype.dispose=function(){this.u||(this.u=!0,this.N())},b.prototype[Symbol.dispose]=function(){this.dispose()},b.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function A(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var R=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,h),o.removeEventListener("test",d,h)}catch{}return a})();function T(a){return/^[\s\xa0]*$/.test(a)}function qe(a,h){A.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p(qe,A),qe.prototype.init=function(a,h){const d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&qe.Z.h.call(this)},qe.prototype.h=function(){qe.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ut="closure_listenable_"+(Math.random()*1e6|0),Me=0;function de(a,h,d,g,C){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!g,this.ha=C,this.key=++Me,this.da=this.fa=!1}function Ie(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Rt(a,h,d){for(const g in a)h.call(d,a[g],g,a)}function en(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function Vt(a){const h={};for(const d in a)h[d]=a[d];return h}const st="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Tn(a,h){let d,g;for(let C=1;C<arguments.length;C++){g=arguments[C];for(d in g)a[d]=g[d];for(let N=0;N<st.length;N++)d=st[N],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function Ht(a){this.src=a,this.g={},this.h=0}Ht.prototype.add=function(a,h,d,g,C){const N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);const W=ht(a,h,g,C);return W>-1?(h=a[W],d||(h.fa=!1)):(h=new de(h,this.src,N,!!g,C),h.fa=d,a.push(h)),h};function Un(a,h){const d=h.type;if(d in a.g){var g=a.g[d],C=Array.prototype.indexOf.call(g,h,void 0),N;(N=C>=0)&&Array.prototype.splice.call(g,C,1),N&&(Ie(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function ht(a,h,d,g){for(let C=0;C<a.length;++C){const N=a[C];if(!N.da&&N.listener==h&&N.capture==!!d&&N.ha==g)return C}return-1}var x="closure_lm_"+(Math.random()*1e6|0),Y={};function Q(a,h,d,g,C){if(Array.isArray(h)){for(let N=0;N<h.length;N++)Q(a,h[N],d,g,C);return null}return d=K(d),a&&a[ut]?a.J(h,d,c(g)?!!g.capture:!1,C):Z(a,h,d,!1,g,C)}function Z(a,h,d,g,C,N){if(!h)throw Error("Invalid event type");const W=c(C)?!!C.capture:!!C;let me=F(a);if(me||(a[x]=me=new Ht(a)),d=me.add(h,d,g,W,N),d.proxy)return d;if(g=Ne(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)R||(C=W),C===void 0&&(C=!1),a.addEventListener(h.toString(),g,C);else if(a.attachEvent)a.attachEvent(P(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Ne(){function a(d){return h.call(a.src,a.listener,d)}const h=M;return a}function E(a,h,d,g,C){if(Array.isArray(h))for(var N=0;N<h.length;N++)E(a,h[N],d,g,C);else g=c(g)?!!g.capture:!!g,d=K(d),a&&a[ut]?(a=a.i,N=String(h).toString(),N in a.g&&(h=a.g[N],d=ht(h,d,g,C),d>-1&&(Ie(h[d]),Array.prototype.splice.call(h,d,1),h.length==0&&(delete a.g[N],a.h--)))):a&&(a=F(a))&&(h=a.g[h.toString()],a=-1,h&&(a=ht(h,d,g,C)),(d=a>-1?h[a]:null)&&I(d))}function I(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[ut])Un(h.i,a);else{var d=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(d,g,a.capture):h.detachEvent?h.detachEvent(P(d),g):h.addListener&&h.removeListener&&h.removeListener(g),(d=F(h))?(Un(d,a),d.h==0&&(d.src=null,h[x]=null)):Ie(a)}}}function P(a){return a in Y?Y[a]:Y[a]="on"+a}function M(a,h){if(a.da)a=!0;else{h=new qe(h,this);const d=a.listener,g=a.ha||a.src;a.fa&&I(a),a=d.call(g,h)}return a}function F(a){return a=a[x],a instanceof Ht?a:null}var D="__closure_events_fn_"+(Math.random()*1e9>>>0);function K(a){return typeof a=="function"?a:(a[D]||(a[D]=function(h){return a.handleEvent(h)}),a[D])}function q(){b.call(this),this.i=new Ht(this),this.M=this,this.G=null}p(q,b),q.prototype[ut]=!0,q.prototype.removeEventListener=function(a,h,d,g){E(this,a,h,d,g)};function $(a,h){var d,g=a.G;if(g)for(d=[];g;g=g.G)d.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new A(h,a);else if(h instanceof A)h.target=h.target||a;else{var C=h;h=new A(g,a),Tn(h,C)}C=!0;let N,W;if(d)for(W=d.length-1;W>=0;W--)N=h.g=d[W],C=j(N,g,!0,h)&&C;if(N=h.g=a,C=j(N,g,!0,h)&&C,C=j(N,g,!1,h)&&C,d)for(W=0;W<d.length;W++)N=h.g=d[W],C=j(N,g,!1,h)&&C}q.prototype.N=function(){if(q.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const d=a.g[h];for(let g=0;g<d.length;g++)Ie(d[g]);delete a.g[h],a.h--}}this.G=null},q.prototype.J=function(a,h,d,g){return this.i.add(String(a),h,!1,d,g)},q.prototype.K=function(a,h,d,g){return this.i.add(String(a),h,!0,d,g)};function j(a,h,d,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let C=!0;for(let N=0;N<h.length;++N){const W=h[N];if(W&&!W.da&&W.capture==d){const me=W.listener,Ye=W.ha||W.src;W.fa&&Un(a.i,W),C=me.call(Ye,g)!==!1&&C}}return C&&!g.defaultPrevented}function ie(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function J(a){a.g=ie(()=>{a.g=null,a.i&&(a.i=!1,J(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class te extends b{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:J(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function oe(a){b.call(this),this.h=a,this.g={}}p(oe,b);var ye=[];function Oe(a){Rt(a.g,function(h,d){this.g.hasOwnProperty(d)&&I(h)},a),a.g={}}oe.prototype.N=function(){oe.Z.N.call(this),Oe(this)},oe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var be=o.JSON.stringify,ft=o.JSON.parse,dt=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Nt(){}function Ot(){}var zt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Zr(){A.call(this,"d")}p(Zr,A);function it(){A.call(this,"c")}p(it,A);var et={},js=null;function br(){return js=js||new q}et.Ia="serverreachability";function Lu(a){A.call(this,et.Ia,a)}p(Lu,A);function qs(a){const h=br();$(h,new Lu(h))}et.STAT_EVENT="statevent";function Fu(a,h){A.call(this,et.STAT_EVENT,a),this.stat=h}p(Fu,A);function At(a){const h=br();$(h,new Fu(h,a))}et.Ja="timingevent";function Uu(a,h){A.call(this,et.Ja,a),this.size=h}p(Uu,A);function Hs(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function zs(){this.g=!0}zs.prototype.ua=function(){this.g=!1};function J_(a,h,d,g,C,N){a.info(function(){if(a.g)if(N){var W="",me=N.split("&");for(let De=0;De<me.length;De++){var Ye=me[De].split("=");if(Ye.length>1){const tt=Ye[0];Ye=Ye[1];const nn=tt.split("_");W=nn.length>=2&&nn[1]=="type"?W+(tt+"="+Ye+"&"):W+(tt+"=redacted&")}}}else W=null;else W=N;return"XMLHTTP REQ ("+g+") [attempt "+C+"]: "+h+`
`+d+`
`+W})}function Y_(a,h,d,g,C,N,W){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+C+"]: "+h+`
`+d+`
`+N+" "+W})}function es(a,h,d,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+Z_(a,d)+(g?" "+g:"")})}function X_(a,h){a.info(function(){return"TIMEOUT: "+h})}zs.prototype.info=function(){};function Z_(a,h){if(!a.g)return h;if(!h)return null;try{const N=JSON.parse(h);if(N){for(a=0;a<N.length;a++)if(Array.isArray(N[a])){var d=N[a];if(!(d.length<2)){var g=d[1];if(Array.isArray(g)&&!(g.length<1)){var C=g[0];if(C!="noop"&&C!="stop"&&C!="close")for(let W=1;W<g.length;W++)g[W]=""}}}}return be(N)}catch{return h}}var co={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Bu={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},$u;function rc(){}p(rc,Nt),rc.prototype.g=function(){return new XMLHttpRequest},$u=new rc;function Ws(a){return encodeURIComponent(String(a))}function ey(a){var h=1;a=a.split(":");const d=[];for(;h>0&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function Bn(a,h,d,g){this.j=a,this.i=h,this.l=d,this.S=g||1,this.V=new oe(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new ju}function ju(){this.i=null,this.g="",this.h=!1}var qu={},sc={};function ic(a,h,d){a.M=1,a.A=uo(tn(h)),a.u=d,a.R=!0,Hu(a,null)}function Hu(a,h){a.F=Date.now(),lo(a),a.B=tn(a.A);var d=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),rh(d.i,"t",g),a.C=0,d=a.j.L,a.h=new ju,a.g=Th(a.j,d?h:null,!a.u),a.P>0&&(a.O=new te(u(a.Y,a,a.g),a.P)),h=a.V,d=a.g,g=a.ba;var C="readystatechange";Array.isArray(C)||(C&&(ye[0]=C.toString()),C=ye);for(let N=0;N<C.length;N++){const W=Q(d,C[N],g||h.handleEvent,!1,h.h||h);if(!W)break;h.g[W.key]=W}h=a.J?Vt(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),qs(),J_(a.i,a.v,a.B,a.l,a.S,a.u)}Bn.prototype.ba=function(a){a=a.target;const h=this.O;h&&qn(a)==3?h.j():this.Y(a)},Bn.prototype.Y=function(a){try{if(a==this.g)e:{const me=qn(this.g),Ye=this.g.ya(),De=this.g.ca();if(!(me<3)&&(me!=3||this.g&&(this.h.h||this.g.la()||uh(this.g)))){this.K||me!=4||Ye==7||(Ye==8||De<=0?qs(3):qs(2)),oc(this);var h=this.g.ca();this.X=h;var d=ty(this);if(this.o=h==200,Y_(this.i,this.v,this.B,this.l,this.S,me,h),this.o){if(this.U&&!this.L){t:{if(this.g){var g,C=this.g;if((g=C.g?C.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(g)){var N=g;break t}}N=null}if(a=N)es(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ac(this,a);else{this.o=!1,this.m=3,At(12),Sr(this),Ks(this);break e}}if(this.R){a=!0;let tt;for(;!this.K&&this.C<d.length;)if(tt=ny(this,d),tt==sc){me==4&&(this.m=4,At(14),a=!1),es(this.i,this.l,null,"[Incomplete Response]");break}else if(tt==qu){this.m=4,At(15),es(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else es(this.i,this.l,tt,null),ac(this,tt);if(zu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),me!=4||d.length!=0||this.h.h||(this.m=1,At(16),a=!1),this.o=this.o&&a,!a)es(this.i,this.l,d,"[Invalid Chunked Response]"),Sr(this),Ks(this);else if(d.length>0&&!this.W){this.W=!0;var W=this.j;W.g==this&&W.aa&&!W.P&&(W.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),mc(W),W.P=!0,At(11))}}else es(this.i,this.l,d,null),ac(this,d);me==4&&Sr(this),this.o&&!this.K&&(me==4?_h(this.j,this):(this.o=!1,lo(this)))}else gy(this.g),h==400&&d.indexOf("Unknown SID")>0?(this.m=3,At(12)):(this.m=0,At(13)),Sr(this),Ks(this)}}}catch{}finally{}};function ty(a){if(!zu(a))return a.g.la();const h=uh(a.g);if(h==="")return"";let d="";const g=h.length,C=qn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Sr(a),Ks(a),"";a.h.i=new o.TextDecoder}for(let N=0;N<g;N++)a.h.h=!0,d+=a.h.i.decode(h[N],{stream:!(C&&N==g-1)});return h.length=0,a.h.g+=d,a.C=0,a.h.g}function zu(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function ny(a,h){var d=a.C,g=h.indexOf(`
`,d);return g==-1?sc:(d=Number(h.substring(d,g)),isNaN(d)?qu:(g+=1,g+d>h.length?sc:(h=h.slice(g,g+d),a.C=g+d,h)))}Bn.prototype.cancel=function(){this.K=!0,Sr(this)};function lo(a){a.T=Date.now()+a.H,Wu(a,a.H)}function Wu(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Hs(u(a.aa,a),h)}function oc(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Bn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(X_(this.i,this.B),this.M!=2&&(qs(),At(17)),Sr(this),this.m=2,Ks(this)):Wu(this,this.T-a)};function Ks(a){a.j.I==0||a.K||_h(a.j,a)}function Sr(a){oc(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,Oe(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function ac(a,h){try{var d=a.j;if(d.I!=0&&(d.g==a||cc(d.h,a))){if(!a.L&&cc(d.h,a)&&d.I==3){try{var g=d.Ba.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var C=g;if(C[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)go(d),po(d);else break e;pc(d),At(18)}}else d.xa=C[1],0<d.xa-d.K&&C[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=Hs(u(d.Va,d),6e3));Qu(d.h)<=1&&d.ta&&(d.ta=void 0)}else Pr(d,11)}else if((a.L||d.g==a)&&go(d),!T(h))for(C=d.Ba.g.parse(h),h=0;h<C.length;h++){let De=C[h];const tt=De[0];if(!(tt<=d.K))if(d.K=tt,De=De[1],d.I==2)if(De[0]=="c"){d.M=De[1],d.ba=De[2];const nn=De[3];nn!=null&&(d.ka=nn,d.j.info("VER="+d.ka));const Cr=De[4];Cr!=null&&(d.za=Cr,d.j.info("SVER="+d.za));const Hn=De[5];Hn!=null&&typeof Hn=="number"&&Hn>0&&(g=1.5*Hn,d.O=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const zn=a.g;if(zn){const yo=zn.g?zn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(yo){var N=g.h;N.g||yo.indexOf("spdy")==-1&&yo.indexOf("quic")==-1&&yo.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(lc(N,N.h),N.h=null))}if(g.G){const gc=zn.g?zn.g.getResponseHeader("X-HTTP-Session-Id"):null;gc&&(g.wa=gc,Ue(g.J,g.G,gc))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),g=d;var W=a;if(g.na=Eh(g,g.L?g.ba:null,g.W),W.L){Ju(g.h,W);var me=W,Ye=g.O;Ye&&(me.H=Ye),me.D&&(oc(me),lo(me)),g.g=W}else mh(g);d.i.length>0&&mo(d)}else De[0]!="stop"&&De[0]!="close"||Pr(d,7);else d.I==3&&(De[0]=="stop"||De[0]=="close"?De[0]=="stop"?Pr(d,7):dc(d):De[0]!="noop"&&d.l&&d.l.qa(De),d.A=0)}}qs(4)}catch{}}var ry=class{constructor(a,h){this.g=a,this.map=h}};function Ku(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Gu(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Qu(a){return a.h?1:a.g?a.g.size:0}function cc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function lc(a,h){a.g?a.g.add(h):a.h=h}function Ju(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Ku.prototype.cancel=function(){if(this.i=Yu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Yu(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.G);return h}return _(a.i)}var Xu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sy(a,h){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const g=a[d].indexOf("=");let C,N=null;g>=0?(C=a[d].substring(0,g),N=a[d].substring(g+1)):C=a[d],h(C,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function $n(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof $n?(this.l=a.l,Gs(this,a.j),this.o=a.o,this.g=a.g,Qs(this,a.u),this.h=a.h,uc(this,sh(a.i)),this.m=a.m):a&&(h=String(a).match(Xu))?(this.l=!1,Gs(this,h[1]||"",!0),this.o=Js(h[2]||""),this.g=Js(h[3]||"",!0),Qs(this,h[4]),this.h=Js(h[5]||"",!0),uc(this,h[6]||"",!0),this.m=Js(h[7]||"")):(this.l=!1,this.i=new Xs(null,this.l))}$n.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(Ys(h,Zu,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Ys(h,Zu,!0),"@"),a.push(Ws(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Ys(d,d.charAt(0)=="/"?ay:oy,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Ys(d,ly)),a.join("")},$n.prototype.resolve=function(a){const h=tn(this);let d=!!a.j;d?Gs(h,a.j):d=!!a.o,d?h.o=a.o:d=!!a.g,d?h.g=a.g:d=a.u!=null;var g=a.h;if(d)Qs(h,a.u);else if(d=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var C=h.h.lastIndexOf("/");C!=-1&&(g=h.h.slice(0,C+1)+g)}if(C=g,C==".."||C==".")g="";else if(C.indexOf("./")!=-1||C.indexOf("/.")!=-1){g=C.lastIndexOf("/",0)==0,C=C.split("/");const N=[];for(let W=0;W<C.length;){const me=C[W++];me=="."?g&&W==C.length&&N.push(""):me==".."?((N.length>1||N.length==1&&N[0]!="")&&N.pop(),g&&W==C.length&&N.push("")):(N.push(me),g=!0)}g=N.join("/")}else g=C}return d?h.h=g:d=a.i.toString()!=="",d?uc(h,sh(a.i)):d=!!a.m,d&&(h.m=a.m),h};function tn(a){return new $n(a)}function Gs(a,h,d){a.j=d?Js(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Qs(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function uc(a,h,d){h instanceof Xs?(a.i=h,uy(a.i,a.l)):(d||(h=Ys(h,cy)),a.i=new Xs(h,a.l))}function Ue(a,h,d){a.i.set(h,d)}function uo(a){return Ue(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Js(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ys(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,iy),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function iy(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Zu=/[#\/\?@]/g,oy=/[#\?:]/g,ay=/[#\?]/g,cy=/[#\?@]/g,ly=/#/g;function Xs(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Rr(a){a.g||(a.g=new Map,a.h=0,a.i&&sy(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=Xs.prototype,t.add=function(a,h){Rr(this),this.i=null,a=ts(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function eh(a,h){Rr(a),h=ts(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function th(a,h){return Rr(a),h=ts(a,h),a.g.has(h)}t.forEach=function(a,h){Rr(this),this.g.forEach(function(d,g){d.forEach(function(C){a.call(h,C,g,this)},this)},this)};function nh(a,h){Rr(a);let d=[];if(typeof h=="string")th(a,h)&&(d=d.concat(a.g.get(ts(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)d=d.concat(a[h]);return d}t.set=function(a,h){return Rr(this),this.i=null,a=ts(this,a),th(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=nh(this,a),a.length>0?String(a[0]):h):h};function rh(a,h,d){eh(a,h),d.length>0&&(a.i=null,a.g.set(ts(a,h),_(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let g=0;g<h.length;g++){var d=h[g];const C=Ws(d);d=nh(this,d);for(let N=0;N<d.length;N++){let W=C;d[N]!==""&&(W+="="+Ws(d[N])),a.push(W)}}return this.i=a.join("&")};function sh(a){const h=new Xs;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function ts(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function uy(a,h){h&&!a.j&&(Rr(a),a.i=null,a.g.forEach(function(d,g){const C=g.toLowerCase();g!=C&&(eh(this,g),rh(this,C,d))},a)),a.j=h}function hy(a,h){const d=new zs;if(o.Image){const g=new Image;g.onload=f(jn,d,"TestLoadImage: loaded",!0,h,g),g.onerror=f(jn,d,"TestLoadImage: error",!1,h,g),g.onabort=f(jn,d,"TestLoadImage: abort",!1,h,g),g.ontimeout=f(jn,d,"TestLoadImage: timeout",!1,h,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function fy(a,h){const d=new zs,g=new AbortController,C=setTimeout(()=>{g.abort(),jn(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(N=>{clearTimeout(C),N.ok?jn(d,"TestPingServer: ok",!0,h):jn(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(C),jn(d,"TestPingServer: error",!1,h)})}function jn(a,h,d,g,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),g(d)}catch{}}function dy(){this.g=new dt}function hc(a){this.i=a.Sb||null,this.h=a.ab||!1}p(hc,Nt),hc.prototype.g=function(){return new ho(this.i,this.h)};function ho(a,h){q.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(ho,q),t=ho.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,ei(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Zs(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ei(this)),this.g&&(this.readyState=3,ei(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;ih(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function ih(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Zs(this):ei(this),this.readyState==3&&ih(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Zs(this))},t.Na=function(a){this.g&&(this.response=a,Zs(this))},t.ga=function(){this.g&&Zs(this)};function Zs(a){a.readyState=4,a.l=null,a.j=null,a.B=null,ei(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function ei(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ho.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function oh(a){let h="";return Rt(a,function(d,g){h+=g,h+=":",h+=d,h+=`\r
`}),h}function fc(a,h,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=oh(d),typeof a=="string"?d!=null&&Ws(d):Ue(a,h,d))}function He(a){q.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(He,q);var py=/^https?$/i,my=["POST","PUT"];t=He.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():$u.g(),this.g.onreadystatechange=m(u(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(N){ah(this,N);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var C in g)d.set(C,g[C]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const N of g.keys())d.set(N,g.get(N));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(N=>N.toLowerCase()=="content-type"),C=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(my,h,void 0)>=0)||g||C||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,W]of d)this.g.setRequestHeader(N,W);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(N){ah(this,N)}};function ah(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,ch(a),fo(a)}function ch(a){a.A||(a.A=!0,$(a,"complete"),$(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,$(this,"complete"),$(this,"abort"),fo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),fo(this,!0)),He.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?lh(this):this.Xa())},t.Xa=function(){lh(this)};function lh(a){if(a.h&&typeof i<"u"){if(a.v&&qn(a)==4)setTimeout(a.Ca.bind(a),0);else if($(a,"readystatechange"),qn(a)==4){a.h=!1;try{const N=a.ca();e:switch(N){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var g;if(g=N===0){let W=String(a.D).match(Xu)[1]||null;!W&&o.self&&o.self.location&&(W=o.self.location.protocol.slice(0,-1)),g=!py.test(W?W.toLowerCase():"")}d=g}if(d)$(a,"complete"),$(a,"success");else{a.o=6;try{var C=qn(a)>2?a.g.statusText:""}catch{C=""}a.l=C+" ["+a.ca()+"]",ch(a)}}finally{fo(a)}}}}function fo(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,h||$(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function qn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return qn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),ft(h)}};function uh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function gy(a){const h={};a=(a.g&&qn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(T(a[g]))continue;var d=ey(a[g]);const C=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const N=h[C]||[];h[C]=N,N.push(d)}en(h,function(g){return g.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function ti(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function hh(a){this.za=0,this.i=[],this.j=new zs,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=ti("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=ti("baseRetryDelayMs",5e3,a),this.Za=ti("retryDelaySeedMs",1e4,a),this.Ta=ti("forwardChannelMaxRetries",2,a),this.va=ti("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Ku(a&&a.concurrentRequestLimit),this.Ba=new dy,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=hh.prototype,t.ka=8,t.I=1,t.connect=function(a,h,d,g){At(0),this.W=a,this.H=h||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.J=Eh(this,null,this.W),mo(this)};function dc(a){if(fh(a),a.I==3){var h=a.V++,d=tn(a.J);if(Ue(d,"SID",a.M),Ue(d,"RID",h),Ue(d,"TYPE","terminate"),ni(a,d),h=new Bn(a,a.j,h),h.M=2,h.A=uo(tn(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=h.A,d=!0),d||(h.g=Th(h.j,null),h.g.ea(h.A)),h.F=Date.now(),lo(h)}vh(a)}function po(a){a.g&&(mc(a),a.g.cancel(),a.g=null)}function fh(a){po(a),a.v&&(o.clearTimeout(a.v),a.v=null),go(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function mo(a){if(!Gu(a.h)&&!a.m){a.m=!0;var h=a.Ea;re||y(),_e||(re(),_e=!0),w.add(h,a),a.D=0}}function _y(a,h){return Qu(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Hs(u(a.Ea,a,h),yh(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const C=new Bn(this,this.j,a);let N=this.o;if(this.U&&(N?(N=Vt(N),Tn(N,this.U)):N=this.U),this.u!==null||this.R||(C.J=N,N=null),this.S)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,h>4096){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=ph(this,C,h),d=tn(this.J),Ue(d,"RID",a),Ue(d,"CVER",22),this.G&&Ue(d,"X-HTTP-Session-Id",this.G),ni(this,d),N&&(this.R?h="headers="+Ws(oh(N))+"&"+h:this.u&&fc(d,this.u,N)),lc(this.h,C),this.Ra&&Ue(d,"TYPE","init"),this.S?(Ue(d,"$req",h),Ue(d,"SID","null"),C.U=!0,ic(C,d,null)):ic(C,d,h),this.I=2}}else this.I==3&&(a?dh(this,a):this.i.length==0||Gu(this.h)||dh(this))};function dh(a,h){var d;h?d=h.l:d=a.V++;const g=tn(a.J);Ue(g,"SID",a.M),Ue(g,"RID",d),Ue(g,"AID",a.K),ni(a,g),a.u&&a.o&&fc(g,a.u,a.o),d=new Bn(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),h&&(a.i=h.G.concat(a.i)),h=ph(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),lc(a.h,d),ic(d,g,h)}function ni(a,h){a.H&&Rt(a.H,function(d,g){Ue(h,g,d)}),a.l&&Rt({},function(d,g){Ue(h,g,d)})}function ph(a,h,d){d=Math.min(a.i.length,d);const g=a.l?u(a.l.Ka,a.l,a):null;e:{var C=a.i;let me=-1;for(;;){const Ye=["count="+d];me==-1?d>0?(me=C[0].g,Ye.push("ofs="+me)):me=0:Ye.push("ofs="+me);let De=!0;for(let tt=0;tt<d;tt++){var N=C[tt].g;const nn=C[tt].map;if(N-=me,N<0)me=Math.max(0,C[tt].g-100),De=!1;else try{N="req"+N+"_"||"";try{var W=nn instanceof Map?nn:Object.entries(nn);for(const[Cr,Hn]of W){let zn=Hn;c(Hn)&&(zn=be(Hn)),Ye.push(N+Cr+"="+encodeURIComponent(zn))}}catch(Cr){throw Ye.push(N+"type="+encodeURIComponent("_badmap")),Cr}}catch{g&&g(nn)}}if(De){W=Ye.join("&");break e}}W=void 0}return a=a.i.splice(0,d),h.G=a,W}function mh(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;re||y(),_e||(re(),_e=!0),w.add(h,a),a.A=0}}function pc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Hs(u(a.Da,a),yh(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,gh(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Hs(u(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,At(10),po(this),gh(this))};function mc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function gh(a){a.g=new Bn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=tn(a.na);Ue(h,"RID","rpc"),Ue(h,"SID",a.M),Ue(h,"AID",a.K),Ue(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&Ue(h,"TO",a.ia),Ue(h,"TYPE","xmlhttp"),ni(a,h),a.u&&a.o&&fc(h,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=uo(tn(h)),d.u=null,d.R=!0,Hu(d,a)}t.Va=function(){this.C!=null&&(this.C=null,po(this),pc(this),At(19))};function go(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function _h(a,h){var d=null;if(a.g==h){go(a),mc(a),a.g=null;var g=2}else if(cc(a.h,h))d=h.G,Ju(a.h,h),g=1;else return;if(a.I!=0){if(h.o)if(g==1){d=h.u?h.u.length:0,h=Date.now()-h.F;var C=a.D;g=br(),$(g,new Uu(g,d)),mo(a)}else mh(a);else if(C=h.m,C==3||C==0&&h.X>0||!(g==1&&_y(a,h)||g==2&&pc(a)))switch(d&&d.length>0&&(h=a.h,h.i=h.i.concat(d)),C){case 1:Pr(a,5);break;case 4:Pr(a,10);break;case 3:Pr(a,6);break;default:Pr(a,2)}}}function yh(a,h){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*h}function Pr(a,h){if(a.j.info("Error code "+h),h==2){var d=u(a.bb,a),g=a.Ua;const C=!g;g=new $n(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Gs(g,"https"),uo(g),C?hy(g.toString(),d):fy(g.toString(),d)}else At(2);a.I=0,a.l&&a.l.pa(h),vh(a),fh(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),At(2)):(this.j.info("Failed to ping google.com"),At(1))};function vh(a){if(a.I=0,a.ja=[],a.l){const h=Yu(a.h);(h.length!=0||a.i.length!=0)&&(S(a.ja,h),S(a.ja,a.i),a.h.i.length=0,_(a.i),a.i.length=0),a.l.oa()}}function Eh(a,h,d){var g=d instanceof $n?tn(d):new $n(d);if(g.g!="")h&&(g.g=h+"."+g.g),Qs(g,g.u);else{var C=o.location;g=C.protocol,h=h?h+"."+C.hostname:C.hostname,C=+C.port;const N=new $n(null);g&&Gs(N,g),h&&(N.g=h),C&&Qs(N,C),d&&(N.h=d),g=N}return d=a.G,h=a.wa,d&&h&&Ue(g,d,h),Ue(g,"VER",a.ka),ni(a,g),g}function Th(a,h,d){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new He(new hc({ab:d})):new He(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ih(){}t=Ih.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function _o(){}_o.prototype.g=function(a,h){return new Dt(a,h)};function Dt(a,h){q.call(this),this.g=new hh(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!T(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!T(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new ns(this)}p(Dt,q),Dt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Dt.prototype.close=function(){dc(this.g)},Dt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=be(a),a=d);h.i.push(new ry(h.Ya++,a)),h.I==3&&mo(h)},Dt.prototype.N=function(){this.g.l=null,delete this.j,dc(this.g),delete this.g,Dt.Z.N.call(this)};function wh(a){Zr.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p(wh,Zr);function Ah(){it.call(this),this.status=1}p(Ah,it);function ns(a){this.g=a}p(ns,Ih),ns.prototype.ra=function(){$(this.g,"a")},ns.prototype.qa=function(a){$(this.g,new wh(a))},ns.prototype.pa=function(a){$(this.g,new Ah)},ns.prototype.oa=function(){$(this.g,"b")},_o.prototype.createWebChannel=_o.prototype.g,Dt.prototype.send=Dt.prototype.o,Dt.prototype.open=Dt.prototype.m,Dt.prototype.close=Dt.prototype.close,vg=function(){return new _o},yg=function(){return br()},_g=et,fl={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},co.NO_ERROR=0,co.TIMEOUT=8,co.HTTP_ERROR=6,Lo=co,Bu.COMPLETE="complete",gg=Bu,Ot.EventType=zt,zt.OPEN="a",zt.CLOSE="b",zt.ERROR="c",zt.MESSAGE="d",q.prototype.listen=q.prototype.J,li=Ot,He.prototype.listenOnce=He.prototype.K,He.prototype.getLastError=He.prototype.Ha,He.prototype.getLastErrorCode=He.prototype.ya,He.prototype.getStatus=He.prototype.ca,He.prototype.getResponseJson=He.prototype.La,He.prototype.getResponseText=He.prototype.la,He.prototype.send=He.prototype.ea,He.prototype.setWithCredentials=He.prototype.Fa,mg=He}).apply(typeof Ao<"u"?Ao:typeof self<"u"?self:typeof window<"u"?window:{});const td="@firebase/firestore",nd="4.9.2";/**
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
 */const jr=new Jl("@firebase/firestore");function as(){return jr.logLevel}function X(t,...e){if(jr.logLevel<=ve.DEBUG){const n=e.map(au);jr.debug(`Firestore (${Fs}): ${t}`,...n)}}function xn(t,...e){if(jr.logLevel<=ve.ERROR){const n=e.map(au);jr.error(`Firestore (${Fs}): ${t}`,...n)}}function Rs(t,...e){if(jr.logLevel<=ve.WARN){const n=e.map(au);jr.warn(`Firestore (${Fs}): ${t}`,...n)}}function au(t){if(typeof t=="string")return t;try{/**
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
 */function le(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Eg(t,r,n)}function Eg(t,e,n){let r=`FIRESTORE (${Fs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw xn(r),new Error(r)}function Ve(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Eg(e,s,r)}function fe(t,e){return t}/**
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
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ee extends Fn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class hr{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
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
 */class Tg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class cS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(_t.UNAUTHENTICATED)))}shutdown(){}}class lS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class uS{constructor(e){this.t=e,this.currentUser=_t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ve(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new hr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new hr,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const l=i;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new hr)}}),0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ve(typeof r.accessToken=="string",31837,{l:r}),new Tg(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ve(e===null||typeof e=="string",2055,{h:e}),new _t(e)}}class hS{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=_t.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class fS{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new hS(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(_t.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class rd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class dS{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Kt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Ve(this.o===void 0,3512);const r=i=>{i.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,X("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new rd(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(Ve(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new rd(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */class cu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=pS(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function Ee(t,e){return t<e?-1:t>e?1:0}function dl(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return Fc(s)===Fc(i)?Ee(s,i):Fc(s)?1:-1}return Ee(t.length,e.length)}const mS=55296,gS=57343;function Fc(t){const e=t.charCodeAt(0);return e>=mS&&e<=gS}function Ps(t,e,n){return t.length===e.length&&t.every(((r,s)=>n(r,e[s])))}/**
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
 */const sd="__name__";class on{constructor(e,n,r){n===void 0?n=0:n>e.length&&le(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&le(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return on.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof on?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=on.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return Ee(e.length,n.length)}static compareSegments(e,n){const r=on.isNumericId(e),s=on.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?on.extractNumericId(e).compare(on.extractNumericId(n)):dl(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ur.fromString(e.substring(4,e.length-2))}}class Be extends on{construct(e,n,r){return new Be(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ee(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((s=>s.length>0)))}return new Be(n)}static emptyPath(){return new Be([])}}const _S=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ct extends on{construct(e,n,r){return new ct(e,n,r)}static isValidIdentifier(e){return _S.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ct.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===sd}static keyField(){return new ct([sd])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ee(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new ee(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ee(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new ee(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ct(n)}static emptyPath(){return new ct([])}}/**
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
 */function Ig(t,e,n){if(!n)throw new ee(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function yS(t,e,n,r){if(e===!0&&r===!0)throw new ee(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function id(t){if(!se.isDocumentKey(t))throw new ee(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function od(t){if(se.isDocumentKey(t))throw new ee(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function wg(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function lu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":le(12329,{type:typeof t})}function Cs(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ee(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=lu(t);throw new ee(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Qe(t,e){const n={typeString:t};return e&&(n.value=e),n}function ro(t,e){if(!wg(t))throw new ee(U.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new ee(U.INVALID_ARGUMENT,n);return!0}/**
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
 */const ad=-62135596800,cd=1e6;class $e{static now(){return $e.fromMillis(Date.now())}static fromDate(e){return $e.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*cd);return new $e(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ee(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ee(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<ad)throw new ee(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ee(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/cd}_compareTo(e){return this.seconds===e.seconds?Ee(this.nanoseconds,e.nanoseconds):Ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:$e._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ro(e,$e._jsonSchema))return new $e(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-ad;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}$e._jsonSchemaVersion="firestore/timestamp/1.0",$e._jsonSchema={type:Qe("string",$e._jsonSchemaVersion),seconds:Qe("number"),nanoseconds:Qe("number")};/**
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
 */const $i=-1;function vS(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=he.fromTimestamp(r===1e9?new $e(n+1,0):new $e(n,r));return new mr(s,se.empty(),e)}function ES(t){return new mr(t.readTime,t.key,$i)}class mr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new mr(he.min(),se.empty(),$i)}static max(){return new mr(he.max(),se.empty(),$i)}}function TS(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=se.comparator(t.documentKey,e.documentKey),n!==0?n:Ee(t.largestBatchId,e.largestBatchId))}/**
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
 */async function Us(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==IS)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&le(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):L.reject(n)}static resolve(e){return new L(((n,r)=>{n(e)}))}static reject(e){return new L(((n,r)=>{r(e)}))}static waitFor(e){return new L(((n,r)=>{let s=0,i=0,o=!1;e.forEach((c=>{++s,c.next((()=>{++i,o&&i===s&&n()}),(l=>r(l)))})),o=!0,i===s&&n()}))}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next((s=>s?L.resolve(s):r()));return n}static forEach(e,n){const r=[];return e.forEach(((s,i)=>{r.push(n.call(this,s,i))})),this.waitFor(r)}static mapArray(e,n){return new L(((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next((f=>{o[u]=f,++c,c===i&&r(o)}),(f=>s(f)))}}))}static doWhile(e,n){return new L(((r,s)=>{const i=()=>{e()===!0?n().next((()=>{i()}),s):r()};i()}))}}function AS(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Bs(t){return t.name==="IndexedDbTransactionError"}/**
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
 */const Ag="";function SS(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=ld(e)),e=RS(t.get(n),e);return ld(e)}function RS(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Ag:n+="";break;default:n+=i}}return n}function ld(t){return t+Ag+""}/**
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
 */function ud(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Qr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function bg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class je{constructor(e,n){this.comparator=e,this.root=n||ot.EMPTY}insert(e,n){return new je(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ot.BLACK,null,null))}remove(e){return new je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ot.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,r)=>(e(n,r),!1)))}toString(){const e=[];return this.inorderTraversal(((n,r)=>(e.push(`${n}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new bo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new bo(this.root,e,this.comparator,!1)}getReverseIterator(){return new bo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new bo(this.root,e,this.comparator,!0)}}class bo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ot{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ot.RED,this.left=s??ot.EMPTY,this.right=i??ot.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ot(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ot.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ot.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw le(43730,{key:this.key,value:this.value});if(this.right.isRed())throw le(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw le(27949);return e+(this.isRed()?0:1)}}ot.EMPTY=null,ot.RED=!0,ot.BLACK=!1;ot.EMPTY=new class{constructor(){this.size=0}get key(){throw le(57766)}get value(){throw le(16141)}get color(){throw le(16727)}get left(){throw le(29726)}get right(){throw le(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new ot(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Jt{constructor(e){this.fields=e,e.sort(ct.comparator)}static empty(){return new Jt([])}unionWith(e){let n=new Ze(ct.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Jt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ps(this.fields,e.fields,((n,r)=>n.isEqual(r)))}}/**
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
 */class Sg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class lt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Sg("Invalid base64 string: "+i):i}})(e);return new lt(n)}static fromUint8Array(e){const n=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new lt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const PS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function gr(t){if(Ve(!!t,39018),typeof t=="string"){let e=0;const n=PS.exec(t);if(Ve(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ze(t.seconds),nanos:ze(t.nanos)}}function ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function _r(t){return typeof t=="string"?lt.fromBase64String(t):lt.fromUint8Array(t)}/**
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
 */const Rg="server_timestamp",Pg="__type__",Cg="__previous_value__",kg="__local_write_time__";function hu(t){return(t?.mapValue?.fields||{})[Pg]?.stringValue===Rg}function Ha(t){const e=t.mapValue.fields[Cg];return hu(e)?Ha(e):e}function ji(t){const e=gr(t.mapValue.fields[kg].timestampValue);return new $e(e.seconds,e.nanos)}/**
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
 */class CS{constructor(e,n,r,s,i,o,c,l,u,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=f}}const ha="(default)";class qi{constructor(e,n){this.projectId=e,this.database=n||ha}static empty(){return new qi("","")}get isDefaultDatabase(){return this.database===ha}isEqual(e){return e instanceof qi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Vg="__type__",kS="__max__",So={mapValue:{}},Ng="__vector__",fa="value";function yr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?hu(t)?4:NS(t)?9007199254740991:VS(t)?10:11:le(28295,{value:t})}function yn(t,e){if(t===e)return!0;const n=yr(t);if(n!==yr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ji(t).isEqual(ji(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=gr(s.timestampValue),c=gr(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(s,i){return _r(s.bytesValue).isEqual(_r(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(s,i){return ze(s.geoPointValue.latitude)===ze(i.geoPointValue.latitude)&&ze(s.geoPointValue.longitude)===ze(i.geoPointValue.longitude)})(t,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return ze(s.integerValue)===ze(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=ze(s.doubleValue),c=ze(i.doubleValue);return o===c?ua(o)===ua(c):isNaN(o)&&isNaN(c)}return!1})(t,e);case 9:return Ps(t.arrayValue.values||[],e.arrayValue.values||[],yn);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(ud(o)!==ud(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!yn(o[l],c[l])))return!1;return!0})(t,e);default:return le(52216,{left:t})}}function Hi(t,e){return(t.values||[]).find((n=>yn(n,e)))!==void 0}function ks(t,e){if(t===e)return 0;const n=yr(t),r=yr(e);if(n!==r)return Ee(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ee(t.booleanValue,e.booleanValue);case 2:return(function(i,o){const c=ze(i.integerValue||i.doubleValue),l=ze(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(t,e);case 3:return fd(t.timestampValue,e.timestampValue);case 4:return fd(ji(t),ji(e));case 5:return dl(t.stringValue,e.stringValue);case 6:return(function(i,o){const c=_r(i),l=_r(o);return c.compareTo(l)})(t.bytesValue,e.bytesValue);case 7:return(function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const f=Ee(c[u],l[u]);if(f!==0)return f}return Ee(c.length,l.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,o){const c=Ee(ze(i.latitude),ze(o.latitude));return c!==0?c:Ee(ze(i.longitude),ze(o.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return dd(t.arrayValue,e.arrayValue);case 10:return(function(i,o){const c=i.fields||{},l=o.fields||{},u=c[fa]?.arrayValue,f=l[fa]?.arrayValue,p=Ee(u?.values?.length||0,f?.values?.length||0);return p!==0?p:dd(u,f)})(t.mapValue,e.mapValue);case 11:return(function(i,o){if(i===So.mapValue&&o===So.mapValue)return 0;if(i===So.mapValue)return 1;if(o===So.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},f=Object.keys(u);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const m=dl(l[p],f[p]);if(m!==0)return m;const _=ks(c[l[p]],u[f[p]]);if(_!==0)return _}return Ee(l.length,f.length)})(t.mapValue,e.mapValue);default:throw le(23264,{he:n})}}function fd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ee(t,e);const n=gr(t),r=gr(e),s=Ee(n.seconds,r.seconds);return s!==0?s:Ee(n.nanos,r.nanos)}function dd(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=ks(n[s],r[s]);if(i)return i}return Ee(n.length,r.length)}function Vs(t){return pl(t)}function pl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const r=gr(n);return`time(${r.seconds},${r.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return _r(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return se.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=pl(i);return r+"]"})(t.arrayValue):"mapValue"in t?(function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${pl(n.fields[o])}`;return s+"}"})(t.mapValue):le(61005,{value:t})}function Fo(t){switch(yr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ha(t);return e?16+Fo(e):16;case 5:return 2*t.stringValue.length;case 6:return _r(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+Fo(i)),0)})(t.arrayValue);case 10:case 11:return(function(r){let s=0;return Qr(r.fields,((i,o)=>{s+=i.length+Fo(o)})),s})(t.mapValue);default:throw le(13486,{value:t})}}function ml(t){return!!t&&"integerValue"in t}function fu(t){return!!t&&"arrayValue"in t}function pd(t){return!!t&&"nullValue"in t}function md(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Uo(t){return!!t&&"mapValue"in t}function VS(t){return(t?.mapValue?.fields||{})[Vg]?.stringValue===Ng}function Si(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Qr(t.mapValue.fields,((n,r)=>e.mapValue.fields[n]=Si(r))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Si(t.arrayValue.values[n]);return e}return{...t}}function NS(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===kS}/**
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
 */class Ut{constructor(e){this.value=e}static empty(){return new Ut({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Uo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Si(n)}setAll(e){let n=ct.emptyPath(),r={},s=[];e.forEach(((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=Si(o):s.push(c.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Uo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return yn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Uo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Qr(n,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new Ut(Si(this.value))}}function Og(t){const e=[];return Qr(t.fields,((n,r)=>{const s=new ct([n]);if(Uo(r)){const i=Og(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new Jt(e)}/**
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
 */class vt{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new vt(e,0,he.min(),he.min(),he.min(),Ut.empty(),0)}static newFoundDocument(e,n,r,s){return new vt(e,1,n,he.min(),r,s,0)}static newNoDocument(e,n){return new vt(e,2,n,he.min(),he.min(),Ut.empty(),0)}static newUnknownDocument(e,n){return new vt(e,3,n,he.min(),he.min(),Ut.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(he.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ut.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ut.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=he.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof vt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new vt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class da{constructor(e,n){this.position=e,this.inclusive=n}}function gd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=se.comparator(se.fromName(o.referenceValue),n.key):r=ks(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function _d(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!yn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Dg{}class Xe extends Dg{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new xS(e,n,r):n==="array-contains"?new FS(e,r):n==="in"?new US(e,r):n==="not-in"?new BS(e,r):n==="array-contains-any"?new $S(e,r):new Xe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new MS(e,r):new LS(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ks(n,this.value)):n!==null&&yr(this.value)===yr(n)&&this.matchesComparison(ks(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return le(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class vn extends Dg{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new vn(e,n)}matches(e){return xg(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function xg(t){return t.op==="and"}function Mg(t){return DS(t)&&xg(t)}function DS(t){for(const e of t.filters)if(e instanceof vn)return!1;return!0}function gl(t){if(t instanceof Xe)return t.field.canonicalString()+t.op.toString()+Vs(t.value);if(Mg(t))return t.filters.map((e=>gl(e))).join(",");{const e=t.filters.map((n=>gl(n))).join(",");return`${t.op}(${e})`}}function Lg(t,e){return t instanceof Xe?(function(r,s){return s instanceof Xe&&r.op===s.op&&r.field.isEqual(s.field)&&yn(r.value,s.value)})(t,e):t instanceof vn?(function(r,s){return s instanceof vn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,o,c)=>i&&Lg(o,s.filters[c])),!0):!1})(t,e):void le(19439)}function Fg(t){return t instanceof Xe?(function(n){return`${n.field.canonicalString()} ${n.op} ${Vs(n.value)}`})(t):t instanceof vn?(function(n){return n.op.toString()+" {"+n.getFilters().map(Fg).join(" ,")+"}"})(t):"Filter"}class xS extends Xe{constructor(e,n,r){super(e,n,r),this.key=se.fromName(r.referenceValue)}matches(e){const n=se.comparator(e.key,this.key);return this.matchesComparison(n)}}class MS extends Xe{constructor(e,n){super(e,"in",n),this.keys=Ug("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class LS extends Xe{constructor(e,n){super(e,"not-in",n),this.keys=Ug("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function Ug(t,e){return(e.arrayValue?.values||[]).map((n=>se.fromName(n.referenceValue)))}class FS extends Xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return fu(n)&&Hi(n.arrayValue,this.value)}}class US extends Xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Hi(this.value.arrayValue,n)}}class BS extends Xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Hi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Hi(this.value.arrayValue,n)}}class $S extends Xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!fu(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>Hi(this.value.arrayValue,r)))}}/**
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
 */class jS{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Te=null}}function yd(t,e=null,n=[],r=[],s=null,i=null,o=null){return new jS(t,e,n,r,s,i,o)}function du(t){const e=fe(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((r=>gl(r))).join(","),n+="|ob:",n+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),qa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((r=>Vs(r))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((r=>Vs(r))).join(",")),e.Te=n}return e.Te}function pu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!OS(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Lg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!_d(t.startAt,e.startAt)&&_d(t.endAt,e.endAt)}function _l(t){return se.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class za{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function qS(t,e,n,r,s,i,o,c){return new za(t,e,n,r,s,i,o,c)}function Bg(t){return new za(t)}function vd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function HS(t){return t.collectionGroup!==null}function Ri(t){const e=fe(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new Ze(ct.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((u=>{u.isInequality()&&(c=c.add(u.field))}))})),c})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new pa(i,r))})),n.has(ct.keyField().canonicalString())||e.Ie.push(new pa(ct.keyField(),r))}return e.Ie}function hn(t){const e=fe(t);return e.Ee||(e.Ee=zS(e,Ri(t))),e.Ee}function zS(t,e){if(t.limitType==="F")return yd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new pa(s.field,i)}));const n=t.endAt?new da(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new da(t.startAt.position,t.startAt.inclusive):null;return yd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function yl(t,e,n){return new za(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Wa(t,e){return pu(hn(t),hn(e))&&t.limitType===e.limitType}function $g(t){return`${du(hn(t))}|lt:${t.limitType}`}function cs(t){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((s=>Fg(s))).join(", ")}]`),qa(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((s=>Vs(s))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((s=>Vs(s))).join(",")),`Target(${r})`})(hn(t))}; limitType=${t.limitType})`}function Ka(t,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):se.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(t,e)&&(function(r,s){for(const i of Ri(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(t,e)&&(function(r,s){return!(r.startAt&&!(function(o,c,l){const u=gd(o,c,l);return o.inclusive?u<=0:u<0})(r.startAt,Ri(r),s)||r.endAt&&!(function(o,c,l){const u=gd(o,c,l);return o.inclusive?u>=0:u>0})(r.endAt,Ri(r),s))})(t,e)}function WS(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function jg(t){return(e,n)=>{let r=!1;for(const s of Ri(t)){const i=KS(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function KS(t,e,n){const r=t.field.isKeyField()?se.comparator(e.key,n.key):(function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?ks(l,u):le(42886)})(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return le(19790,{direction:t.dir})}}/**
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
 */class Jr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Qr(this.inner,((n,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return bg(this.inner)}size(){return this.innerSize}}/**
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
 */const GS=new je(se.comparator);function Mn(){return GS}const qg=new je(se.comparator);function ui(...t){let e=qg;for(const n of t)e=e.insert(n.key,n);return e}function Hg(t){let e=qg;return t.forEach(((n,r)=>e=e.insert(n,r.overlayedDocument))),e}function Mr(){return Pi()}function zg(){return Pi()}function Pi(){return new Jr((t=>t.toString()),((t,e)=>t.isEqual(e)))}const QS=new je(se.comparator),JS=new Ze(se.comparator);function Te(...t){let e=JS;for(const n of t)e=e.add(n);return e}const YS=new Ze(Ee);function XS(){return YS}/**
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
 */function mu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ua(e)?"-0":e}}function Wg(t){return{integerValue:""+t}}function ZS(t,e){return bS(e)?Wg(e):mu(t,e)}/**
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
 */class Ga{constructor(){this._=void 0}}function eR(t,e,n){return t instanceof ma?(function(s,i){const o={fields:{[Pg]:{stringValue:Rg},[kg]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&hu(i)&&(i=Ha(i)),i&&(o.fields[Cg]=i),{mapValue:o}})(n,e):t instanceof zi?Gg(t,e):t instanceof Wi?Qg(t,e):(function(s,i){const o=Kg(s,i),c=Ed(o)+Ed(s.Ae);return ml(o)&&ml(s.Ae)?Wg(c):mu(s.serializer,c)})(t,e)}function tR(t,e,n){return t instanceof zi?Gg(t,e):t instanceof Wi?Qg(t,e):n}function Kg(t,e){return t instanceof ga?(function(r){return ml(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class ma extends Ga{}class zi extends Ga{constructor(e){super(),this.elements=e}}function Gg(t,e){const n=Jg(e);for(const r of t.elements)n.some((s=>yn(s,r)))||n.push(r);return{arrayValue:{values:n}}}class Wi extends Ga{constructor(e){super(),this.elements=e}}function Qg(t,e){let n=Jg(e);for(const r of t.elements)n=n.filter((s=>!yn(s,r)));return{arrayValue:{values:n}}}class ga extends Ga{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Ed(t){return ze(t.integerValue||t.doubleValue)}function Jg(t){return fu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function nR(t,e){return t.field.isEqual(e.field)&&(function(r,s){return r instanceof zi&&s instanceof zi||r instanceof Wi&&s instanceof Wi?Ps(r.elements,s.elements,yn):r instanceof ga&&s instanceof ga?yn(r.Ae,s.Ae):r instanceof ma&&s instanceof ma})(t.transform,e.transform)}class rR{constructor(e,n){this.version=e,this.transformResults=n}}class fn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new fn}static exists(e){return new fn(void 0,e)}static updateTime(e){return new fn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Bo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Qa{}function Yg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Zg(t.key,fn.none()):new so(t.key,t.data,fn.none());{const n=t.data,r=Ut.empty();let s=new Ze(ct.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Yr(t.key,r,new Jt(s.toArray()),fn.none())}}function sR(t,e,n){t instanceof so?(function(s,i,o){const c=s.value.clone(),l=Id(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(t,e,n):t instanceof Yr?(function(s,i,o){if(!Bo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Id(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Xg(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(t,e,n):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,n)}function Ci(t,e,n,r){return t instanceof so?(function(i,o,c,l){if(!Bo(i.precondition,o))return c;const u=i.value.clone(),f=wd(i.fieldTransforms,l,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(t,e,n,r):t instanceof Yr?(function(i,o,c,l){if(!Bo(i.precondition,o))return c;const u=wd(i.fieldTransforms,l,o),f=o.data;return f.setAll(Xg(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(t,e,n,r):(function(i,o,c){return Bo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(t,e,n)}function iR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Kg(r.transform,s||null);i!=null&&(n===null&&(n=Ut.empty()),n.set(r.field,i))}return n||null}function Td(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ps(r,s,((i,o)=>nR(i,o)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class so extends Qa{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Yr extends Qa{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Xg(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function Id(t,e,n){const r=new Map;Ve(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,tR(o,c,n[s]))}return r}function wd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,eR(i,o,e))}return r}class Zg extends Qa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class oR extends Qa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class aR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&sR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ci(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ci(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=zg();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=Yg(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(he.min())})),r}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),Te())}isEqual(e){return this.batchId===e.batchId&&Ps(this.mutations,e.mutations,((n,r)=>Td(n,r)))&&Ps(this.baseMutations,e.baseMutations,((n,r)=>Td(n,r)))}}class gu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ve(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=(function(){return QS})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new gu(e,n,r,s)}}/**
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
 */var Ge,Ae;function uR(t){switch(t){case U.OK:return le(64938);case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0;default:return le(15467,{code:t})}}function e_(t){if(t===void 0)return xn("GRPC error has no .code"),U.UNKNOWN;switch(t){case Ge.OK:return U.OK;case Ge.CANCELLED:return U.CANCELLED;case Ge.UNKNOWN:return U.UNKNOWN;case Ge.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case Ge.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case Ge.INTERNAL:return U.INTERNAL;case Ge.UNAVAILABLE:return U.UNAVAILABLE;case Ge.UNAUTHENTICATED:return U.UNAUTHENTICATED;case Ge.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case Ge.NOT_FOUND:return U.NOT_FOUND;case Ge.ALREADY_EXISTS:return U.ALREADY_EXISTS;case Ge.PERMISSION_DENIED:return U.PERMISSION_DENIED;case Ge.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case Ge.ABORTED:return U.ABORTED;case Ge.OUT_OF_RANGE:return U.OUT_OF_RANGE;case Ge.UNIMPLEMENTED:return U.UNIMPLEMENTED;case Ge.DATA_LOSS:return U.DATA_LOSS;default:return le(39323,{code:t})}}(Ae=Ge||(Ge={}))[Ae.OK=0]="OK",Ae[Ae.CANCELLED=1]="CANCELLED",Ae[Ae.UNKNOWN=2]="UNKNOWN",Ae[Ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ae[Ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ae[Ae.NOT_FOUND=5]="NOT_FOUND",Ae[Ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ae[Ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ae[Ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ae[Ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ae[Ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ae[Ae.ABORTED=10]="ABORTED",Ae[Ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ae[Ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ae[Ae.INTERNAL=13]="INTERNAL",Ae[Ae.UNAVAILABLE=14]="UNAVAILABLE",Ae[Ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const fR=new ur([4294967295,4294967295],0);function Ad(t){const e=hR().encode(t),n=new pg;return n.update(e),new Uint8Array(n.digest())}function bd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new ur([n,r],0),new ur([s,i],0)]}class _u{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new hi(`Invalid padding: ${n}`);if(r<0)throw new hi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new hi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new hi(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=ur.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(ur.fromNumber(r)));return s.compare(fR)===1&&(s=new ur([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Ad(e),[r,s]=bd(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new _u(i,s,n);return r.forEach((c=>o.insert(c))),o}insert(e){if(this.ge===0)return;const n=Ad(e),[r,s]=bd(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class hi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ja{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,io.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ja(he.min(),s,new je(Ee),Mn(),Te())}}class io{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new io(r,n,Te(),Te(),Te())}}/**
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
 */class $o{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class t_{constructor(e,n){this.targetId=e,this.Ce=n}}class n_{constructor(e,n,r=lt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Sd{constructor(){this.ve=0,this.Fe=Rd(),this.Me=lt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Te(),n=Te(),r=Te();return this.Fe.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:le(38017,{changeType:i})}})),new io(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=Rd()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Ve(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class dR{constructor(e){this.Ge=e,this.ze=new Map,this.je=Mn(),this.Je=Ro(),this.He=Ro(),this.Ye=new je(Ee)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:le(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((r,s)=>{this.rt(s)&&n(s)}))}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(_l(i))if(r===0){const o=new se(i.path);this.et(n,o,vt.newNoDocument(o,he.min()))}else Ve(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const c=this.ut(e),l=c?this.ct(c,e,o):1;if(l!==0){this.it(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=_r(r).toUint8Array()}catch(l){if(l instanceof Sg)return Rs("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new _u(o,s,i)}catch(l){return Rs(l instanceof hi?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach((i=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(n,i,null),s++)})),s}Tt(e){const n=new Map;this.ze.forEach(((i,o)=>{const c=this.ot(o);if(c){if(i.current&&_l(c.target)){const l=new se(c.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,vt.newNoDocument(l,e))}i.Be&&(n.set(o,i.ke()),i.qe())}}));let r=Te();this.He.forEach(((i,o)=>{let c=!0;o.forEachWhile((l=>{const u=this.ot(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.je.forEach(((i,o)=>o.setReadTime(e)));const s=new Ja(e,n,this.Ye,this.je,r);return this.je=Mn(),this.Je=Ro(),this.He=Ro(),this.Ye=new je(Ee),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new Sd,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new Ze(Ee),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Ze(Ee),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Sd),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Ro(){return new je(se.comparator)}function Rd(){return new je(se.comparator)}const pR={asc:"ASCENDING",desc:"DESCENDING"},mR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},gR={and:"AND",or:"OR"};class _R{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function vl(t,e){return t.useProto3Json||qa(e)?e:{value:e}}function _a(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function r_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function yR(t,e){return _a(t,e.toTimestamp())}function dn(t){return Ve(!!t,49232),he.fromTimestamp((function(n){const r=gr(n);return new $e(r.seconds,r.nanos)})(t))}function yu(t,e){return El(t,e).canonicalString()}function El(t,e){const n=(function(s){return new Be(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function s_(t){const e=Be.fromString(t);return Ve(l_(e),10190,{key:e.toString()}),e}function Tl(t,e){return yu(t.databaseId,e.path)}function Uc(t,e){const n=s_(e);if(n.get(1)!==t.databaseId.projectId)throw new ee(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ee(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new se(o_(n))}function i_(t,e){return yu(t.databaseId,e)}function vR(t){const e=s_(t);return e.length===4?Be.emptyPath():o_(e)}function Il(t){return new Be(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function o_(t){return Ve(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Pd(t,e,n){return{name:Tl(t,e),fields:n.value.mapValue.fields}}function ER(t,e){let n;if("targetChange"in e){e.targetChange;const r=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:le(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(u,f){return u.useProto3Json?(Ve(f===void 0||typeof f=="string",58123),lt.fromBase64String(f||"")):(Ve(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),lt.fromUint8Array(f||new Uint8Array))})(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&(function(u){const f=u.code===void 0?U.UNKNOWN:e_(u.code);return new ee(f,u.message||"")})(o);n=new n_(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Uc(t,r.document.name),i=dn(r.document.updateTime),o=r.document.createTime?dn(r.document.createTime):he.min(),c=new Ut({mapValue:{fields:r.document.fields}}),l=vt.newFoundDocument(s,i,o,c),u=r.targetIds||[],f=r.removedTargetIds||[];n=new $o(u,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Uc(t,r.document),i=r.readTime?dn(r.readTime):he.min(),o=vt.newNoDocument(s,i),c=r.removedTargetIds||[];n=new $o([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Uc(t,r.document),i=r.removedTargetIds||[];n=new $o([],i,s,null)}else{if(!("filter"in e))return le(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new lR(s,i),c=r.targetId;n=new t_(c,o)}}return n}function TR(t,e){let n;if(e instanceof so)n={update:Pd(t,e.key,e.value)};else if(e instanceof Zg)n={delete:Tl(t,e.key)};else if(e instanceof Yr)n={update:Pd(t,e.key,e.data),updateMask:kR(e.fieldMask)};else{if(!(e instanceof oR))return le(16599,{Vt:e.type});n={verify:Tl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((r=>(function(i,o){const c=o.transform;if(c instanceof ma)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof zi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Wi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof ga)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw le(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(n.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:yR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:le(27497)})(t,e.precondition)),n}function IR(t,e){return t&&t.length>0?(Ve(e!==void 0,14353),t.map((n=>(function(s,i){let o=s.updateTime?dn(s.updateTime):dn(i);return o.isEqual(he.min())&&(o=dn(i)),new rR(o,s.transformResults||[])})(n,e)))):[]}function wR(t,e){return{documents:[i_(t,e.path)]}}function AR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=i_(t,s);const i=(function(u){if(u.length!==0)return c_(vn.create(u,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const o=(function(u){if(u.length!==0)return u.map((f=>(function(m){return{field:ls(m.field),direction:RR(m.dir)}})(f)))})(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=vl(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{ft:n,parent:s}}function bR(t){let e=vR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ve(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=(function(p){const m=a_(p);return m instanceof vn&&Mg(m)?m.getFilters():[m]})(n.where));let o=[];n.orderBy&&(o=(function(p){return p.map((m=>(function(S){return new pa(us(S.field),(function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(S.direction))})(m)))})(n.orderBy));let c=null;n.limit&&(c=(function(p){let m;return m=typeof p=="object"?p.value:p,qa(m)?null:m})(n.limit));let l=null;n.startAt&&(l=(function(p){const m=!!p.before,_=p.values||[];return new da(_,m)})(n.startAt));let u=null;return n.endAt&&(u=(function(p){const m=!p.before,_=p.values||[];return new da(_,m)})(n.endAt)),qS(e,s,o,i,c,"F",l,u)}function SR(t,e){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return le(28987,{purpose:s})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function a_(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=us(n.unaryFilter.field);return Xe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=us(n.unaryFilter.field);return Xe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=us(n.unaryFilter.field);return Xe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=us(n.unaryFilter.field);return Xe.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return le(61313);default:return le(60726)}})(t):t.fieldFilter!==void 0?(function(n){return Xe.create(us(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return le(58110);default:return le(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return vn.create(n.compositeFilter.filters.map((r=>a_(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return le(1026)}})(n.compositeFilter.op))})(t):le(30097,{filter:t})}function RR(t){return pR[t]}function PR(t){return mR[t]}function CR(t){return gR[t]}function ls(t){return{fieldPath:t.canonicalString()}}function us(t){return ct.fromServerFormat(t.fieldPath)}function c_(t){return t instanceof Xe?(function(n){if(n.op==="=="){if(md(n.value))return{unaryFilter:{field:ls(n.field),op:"IS_NAN"}};if(pd(n.value))return{unaryFilter:{field:ls(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(md(n.value))return{unaryFilter:{field:ls(n.field),op:"IS_NOT_NAN"}};if(pd(n.value))return{unaryFilter:{field:ls(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ls(n.field),op:PR(n.op),value:n.value}}})(t):t instanceof vn?(function(n){const r=n.getFilters().map((s=>c_(s)));return r.length===1?r[0]:{compositeFilter:{op:CR(n.op),filters:r}}})(t):le(54877,{filter:t})}function kR(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function l_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class rr{constructor(e,n,r,s,i=he.min(),o=he.min(),c=lt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new rr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new rr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new rr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new rr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class OR{constructor(){this.Cn=new DR}addToCollectionParentIndex(e,n){return this.Cn.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(mr.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(mr.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class DR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ze(Be.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ze(Be.comparator)).toArray()}}/**
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
 */const Cd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},u_=41943040;class Pt{static withCacheSize(e){return new Pt(e,Pt.DEFAULT_COLLECTION_PERCENTILE,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */const kd="LruGarbageCollector",xR=1048576;function Vd([t,e],[n,r]){const s=Ee(t,n);return s===0?Ee(e,r):s}class MR{constructor(e){this.Ir=e,this.buffer=new Ze(Vd),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Vd(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class LR{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){X(kd,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Bs(n)?X(kd,"Ignoring IndexedDB error during garbage collection: ",n):await Us(n)}await this.Vr(3e5)}))}}class FR{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next((r=>Math.floor(n/100*r)))}nthSequenceNumber(e,n){if(n===0)return L.resolve(ja.ce);const r=new MR(n);return this.mr.forEachTarget(e,(s=>r.Ar(s.sequenceNumber))).next((()=>this.mr.pr(e,(s=>r.Ar(s))))).next((()=>r.maxValue))}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(X("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(Cd)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(X("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Cd):this.yr(e,n)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,c,l,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(X("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,c=Date.now(),this.removeTargets(e,r,n)))).next((p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(u=Date.now(),as()<=ve.DEBUG&&X("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(u-l)+`ms
Total Duration: ${u-f}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function UR(t,e){return new FR(t,e)}/**
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
 */class BR{constructor(){this.changes=new Jr((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,vt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class jR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,n)))).next((s=>(r!==null&&Ci(r.mutation,s,Jt.empty(),$e.now()),s)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.getLocalViewOfDocuments(e,r,Te()).next((()=>r))))}getLocalViewOfDocuments(e,n,r=Te()){const s=Mr();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,r).next((i=>{let o=ui();return i.forEach(((c,l)=>{o=o.insert(c,l.overlayedDocument)})),o}))))}getOverlayedDocuments(e,n){const r=Mr();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,Te())))}populateOverlays(e,n,r){const s=[];return r.forEach((i=>{n.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,c)=>{n.set(o,c)}))}))}computeViews(e,n,r,s){let i=Mn();const o=Pi(),c=(function(){return Pi()})();return n.forEach(((l,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof Yr)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),Ci(f.mutation,u,f.mutation.getFieldMask(),$e.now())):o.set(u.key,Jt.empty())})),this.recalculateAndSaveOverlays(e,i).next((l=>(l.forEach(((u,f)=>o.set(u,f))),n.forEach(((u,f)=>c.set(u,new $R(f,o.get(u)??null)))),c)))}recalculateAndSaveOverlays(e,n){const r=Pi();let s=new je(((o,c)=>o-c)),i=Te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((o=>{for(const c of o)c.keys().forEach((l=>{const u=n.get(l);if(u===null)return;let f=r.get(l)||Jt.empty();f=c.applyToLocalView(u,f),r.set(l,f);const p=(s.get(c.batchId)||Te()).add(l);s=s.insert(c.batchId,p)}))})).next((()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,f=l.value,p=zg();f.forEach((m=>{if(!i.has(m)){const _=Yg(n.get(m),r.get(m));_!==null&&p.set(m,_),i=i.add(m)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return L.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,n,r,s){return(function(o){return se.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):HS(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):L.resolve(Mr());let c=$i,l=i;return o.next((u=>L.forEach(u,((f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?L.resolve():this.remoteDocumentCache.getEntry(e,f).next((m=>{l=l.insert(f,m)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,l,u,Te()))).next((f=>({batchId:c,changes:Hg(f)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new se(n)).next((r=>{let s=ui();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=ui();return this.indexManager.getCollectionParents(e,i).next((c=>L.forEach(c,(l=>{const u=(function(p,m){return new za(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next((f=>{f.forEach(((p,m)=>{o=o.insert(p,m)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s)))).next((o=>{i.forEach(((l,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,vt.newInvalidDocument(f)))}));let c=ui();return o.forEach(((l,u)=>{const f=i.get(l);f!==void 0&&Ci(f.mutation,u,Jt.empty(),$e.now()),Ka(n,u)&&(c=c.insert(l,u))})),c}))}}/**
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
 */class qR{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return L.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:dn(s.createTime)}})(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,(function(s){return{name:s.name,query:NR(s.bundledQuery),readTime:dn(s.readTime)}})(n)),L.resolve()}}/**
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
 */class HR{constructor(){this.overlays=new je(se.comparator),this.qr=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Mr();return L.forEach(n,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,n,r){return r.forEach(((s,i)=>{this.St(e,n,i)})),L.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const s=Mr(),i=n.length+1,o=new se(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return L.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new je(((u,f)=>u-f));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=Mr(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const c=Mr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((u,f)=>c.set(u,f))),!(c.size()>=s)););return L.resolve(c)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new cR(n,r));let i=this.qr.get(n);i===void 0&&(i=Te(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
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
 */class zR{constructor(){this.sessionToken=lt.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
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
 */class vu{constructor(){this.Qr=new Ze(nt.$r),this.Ur=new Ze(nt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new nt(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach((r=>this.addReference(r,n)))}removeReference(e,n){this.Gr(new nt(e,n))}zr(e,n){e.forEach((r=>this.removeReference(r,n)))}jr(e){const n=new se(new Be([])),r=new nt(n,e),s=new nt(n,e+1),i=[];return this.Ur.forEachInRange([r,s],(o=>{this.Gr(o),i.push(o.key)})),i}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new se(new Be([])),r=new nt(n,e),s=new nt(n,e+1);let i=Te();return this.Ur.forEachInRange([r,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const n=new nt(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class nt{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return se.comparator(e.key,n.key)||Ee(e.Yr,n.Yr)}static Kr(e,n){return Ee(e.Yr,n.Yr)||se.comparator(e.key,n.key)}}/**
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
 */class WR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Ze(nt.$r)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new aR(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.Zr=this.Zr.add(new nt(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return L.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?uu:this.tr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new nt(n,0),s=new nt(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],(o=>{const c=this.Xr(o.Yr);i.push(c)})),L.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ze(Ee);return n.forEach((s=>{const i=new nt(s,0),o=new nt(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],(c=>{r=r.add(c.Yr)}))})),L.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;se.isDocumentKey(i)||(i=i.child(""));const o=new nt(new se(i),0);let c=new Ze(Ee);return this.Zr.forEachWhile((l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.Yr)),!0)}),o),L.resolve(this.ti(c))}ti(e){const n=[];return e.forEach((r=>{const s=this.Xr(r);s!==null&&n.push(s)})),n}removeMutationBatch(e,n){Ve(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return L.forEach(n.mutations,(s=>{const i=new nt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Zr=r}))}ir(e){}containsKey(e,n){const r=new nt(n,0),s=this.Zr.firstAfterOrEqual(r);return L.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class KR{constructor(e){this.ri=e,this.docs=(function(){return new je(se.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():vt.newInvalidDocument(n))}getEntries(e,n){let r=Mn();return n.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():vt.newInvalidDocument(s))})),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Mn();const o=n.path,c=new se(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:f}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||TS(ES(f),r)<=0||(s.has(f.key)||Ka(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return L.resolve(i)}getAllFromCollectionGroup(e,n,r,s){le(9500)}ii(e,n){return L.forEach(this.docs,(r=>n(r)))}newChangeBuffer(e){return new GR(this)}getSize(e){return L.resolve(this.size)}}class GR extends BR{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)})),L.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class QR{constructor(e){this.persistence=e,this.si=new Jr((n=>du(n)),pu),this.lastRemoteSnapshotVersion=he.min(),this.highestTargetId=0,this.oi=0,this._i=new vu,this.targetCount=0,this.ai=Ns.ur()}forEachTarget(e,n){return this.si.forEach(((r,s)=>n(s))),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),L.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Ns(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.Pr(n),L.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach(((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),L.waitFor(i).next((()=>s))}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),L.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),L.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this._i.containsKey(n))}}/**
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
 */class h_{constructor(e,n){this.ui={},this.overlays={},this.ci=new ja(0),this.li=!1,this.li=!0,this.hi=new zR,this.referenceDelegate=e(this),this.Pi=new QR(this),this.indexManager=new OR,this.remoteDocumentCache=(function(s){return new KR(s)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new VR(n),this.Ii=new qR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new HR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new WR(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const s=new JR(this.ci.next());return this.referenceDelegate.Ei(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ai(e,n){return L.or(Object.values(this.ui).map((r=>()=>r.containsKey(e,n))))}}class JR extends wS{constructor(e){super(),this.currentSequenceNumber=e}}class Eu{constructor(e){this.persistence=e,this.Ri=new vu,this.Vi=null}static mi(e){return new Eu(e)}get fi(){if(this.Vi)return this.Vi;throw le(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),L.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach((s=>this.fi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next((s=>{s.forEach((i=>this.fi.add(i.toString())))})).next((()=>r.removeTargetData(e,n)))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.fi,(r=>{const s=se.fromPath(r);return this.gi(e,s).next((i=>{i||n.removeEntry(s,he.min())}))})).next((()=>(this.Vi=null,n.apply(e))))}updateLimboDocument(e,n){return this.gi(e,n).next((r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())}))}Ti(e){return 0}gi(e,n){return L.or([()=>L.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class ya{constructor(e,n){this.persistence=e,this.pi=new Jr((r=>SS(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=UR(this,n)}static mi(e,n){return new ya(e,n)}Ei(){}di(e){return L.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>n.next((s=>r+s))))}wr(e){let n=0;return this.pr(e,(r=>{n++})).next((()=>n))}pr(e,n){return L.forEach(this.pi,((r,s)=>this.br(e,r,s).next((i=>i?L.resolve():n(s)))))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,(o=>this.br(e,o,n).next((c=>{c||(r++,i.removeEntry(o,he.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),L.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),L.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),L.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Fo(e.data.value)),n}br(e,n,r){return L.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return L.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Tu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=Te(),s=Te();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Tu(e,n.fromCache,r,s)}}/**
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
 */class XR{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return kI()?8:AS(It())>0?6:4})()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ws(e,n,s,r).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new YR;return this.Ss(e,n,o).next((c=>{if(i.result=c,this.Vs)return this.bs(e,n,o,c.size)}))})).next((()=>i.result))}bs(e,n,r,s){return r.documentReadCount<this.fs?(as()<=ve.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",cs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),L.resolve()):(as()<=ve.DEBUG&&X("QueryEngine","Query:",cs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(as()<=ve.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",cs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,hn(n))):L.resolve())}ys(e,n){if(vd(n))return L.resolve(null);let r=hn(n);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=yl(n,null,"F"),r=hn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const o=Te(...i);return this.ps.getDocuments(e,o).next((c=>this.indexManager.getMinOffset(e,r).next((l=>{const u=this.Ds(n,c);return this.Cs(n,u,o,l.readTime)?this.ys(e,yl(n,null,"F")):this.vs(e,u,n,l)}))))})))))}ws(e,n,r,s){return vd(n)||s.isEqual(he.min())?L.resolve(null):this.ps.getDocuments(e,r).next((i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?L.resolve(null):(as()<=ve.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),cs(n)),this.vs(e,o,n,vS(s,$i)).next((c=>c)))}))}Ds(e,n){let r=new Ze(jg(e));return n.forEach(((s,i)=>{Ka(e,i)&&(r=r.add(i))})),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return as()<=ve.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",cs(n)),this.ps.getDocumentsMatchingQuery(e,n,mr.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next((i=>(n.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
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
 */const Iu="LocalStore",ZR=3e8;class e0{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new je(Ee),this.xs=new Jr((i=>du(i)),pu),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new jR(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Ms)))}}function t0(t,e,n,r){return new e0(t,e,n,r)}async function f_(t,e){const n=fe(t);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r)))).next((i=>{const o=[],c=[];let l=Te();for(const u of s){o.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}for(const u of i){c.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next((u=>({Ls:u,removedBatchIds:o,addedBatchIds:c})))}))}))}function n0(t,e){const n=fe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return(function(c,l,u,f){const p=u.batch,m=p.keys();let _=L.resolve();return m.forEach((S=>{_=_.next((()=>f.getEntry(l,S))).next((k=>{const O=u.docVersions.get(S);Ve(O!==null,48541),k.version.compareTo(O)<0&&(p.applyToRemoteDocument(k,u),k.isValidDocument()&&(k.setReadTime(u.commitVersion),f.addEntry(k)))}))})),_.next((()=>c.mutationQueue.removeMutationBatch(l,p)))})(n,r,e,i).next((()=>i.apply(r))).next((()=>n.mutationQueue.performConsistencyCheck(r))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let l=Te();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l})(e)))).next((()=>n.localDocuments.getDocuments(r,s)))}))}function d_(t){const e=fe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.Pi.getLastRemoteSnapshotVersion(n)))}function r0(t,e){const n=fe(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const c=[];e.targetChanges.forEach(((f,p)=>{const m=s.get(p);if(!m)return;c.push(n.Pi.removeMatchingKeys(i,f.removedDocuments,p).next((()=>n.Pi.addMatchingKeys(i,f.addedDocuments,p))));let _=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(lt.EMPTY_BYTE_STRING,he.min()).withLastLimboFreeSnapshotVersion(he.min()):f.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(f.resumeToken,r)),s=s.insert(p,_),(function(k,O,H){return k.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=ZR?!0:H.addedDocuments.size+H.modifiedDocuments.size+H.removedDocuments.size>0})(m,_,f)&&c.push(n.Pi.updateTargetData(i,_))}));let l=Mn(),u=Te();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))})),c.push(s0(i,o,e.documentUpdates).next((f=>{l=f.ks,u=f.qs}))),!r.isEqual(he.min())){const f=n.Pi.getLastRemoteSnapshotVersion(i).next((p=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(f)}return L.waitFor(c).next((()=>o.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,l,u))).next((()=>l))})).then((i=>(n.Ms=s,i)))}function s0(t,e,n){let r=Te(),s=Te();return n.forEach((i=>r=r.add(i))),e.getEntries(t,r).next((i=>{let o=Mn();return n.forEach(((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(he.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):X(Iu,"Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)})),{ks:o,qs:s}}))}function i0(t,e){const n=fe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=uu),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function o0(t,e){const n=fe(t);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return n.Pi.getTargetData(r,e).next((i=>i?(s=i,L.resolve(s)):n.Pi.allocateTargetId(r).next((o=>(s=new rr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r}))}async function wl(t,e,n){const r=fe(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(o=>r.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!Bs(o))throw o;X(Iu,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function Nd(t,e,n){const r=fe(t);let s=he.min(),i=Te();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,u,f){const p=fe(l),m=p.xs.get(f);return m!==void 0?L.resolve(p.Ms.get(m)):p.Pi.getTargetData(u,f)})(r,o,hn(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,c.targetId).next((l=>{i=l}))})).next((()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:he.min(),n?i:Te()))).next((c=>(a0(r,WS(e),c),{documents:c,Qs:i})))))}function a0(t,e,n){let r=t.Os.get(e)||he.min();n.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),t.Os.set(e,r)}class Od{constructor(){this.activeTargetIds=XS()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class c0{constructor(){this.Mo=new Od,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Od,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */let Po=null;function Al(){return Po===null?Po=(function(){return 268435456+Math.round(2147483648*Math.random())})():Po++,"0x"+Po.toString(16)}/**
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
 */const pt="WebChannelConnection";class d0 extends h0{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=Al();return new Promise(((c,l)=>{const u=new mg;u.setWithCredentials(!0),u.listenOnce(gg.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case Lo.NO_ERROR:const p=u.getResponseJson();X(pt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),c(p);break;case Lo.TIMEOUT:X(pt,`RPC '${e}' ${o} timed out`),l(new ee(U.DEADLINE_EXCEEDED,"Request time out"));break;case Lo.HTTP_ERROR:const m=u.getStatus();if(X(pt,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const S=_?.error;if(S&&S.status&&S.message){const k=(function(H){const B=H.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(B)>=0?B:U.UNKNOWN})(S.status);l(new ee(k,S.message))}else l(new ee(U.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new ee(U.UNAVAILABLE,"Connection failed."));break;default:le(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{X(pt,`RPC '${e}' ${o} completed.`)}}));const f=JSON.stringify(s);X(pt,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",f,r,15)}))}T_(e,n,r){const s=Al(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=vg(),c=yg(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=i.join("");X(pt,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=o.createWebChannel(f,l);this.I_(p);let m=!1,_=!1;const S=new f0({Yo:O=>{_?X(pt,`Not sending because RPC '${e}' stream ${s} is closed:`,O):(m||(X(pt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),X(pt,`RPC '${e}' stream ${s} sending:`,O),p.send(O))},Zo:()=>p.close()}),k=(O,H,B)=>{O.listen(H,(z=>{try{B(z)}catch(G){setTimeout((()=>{throw G}),0)}}))};return k(p,li.EventType.OPEN,(()=>{_||(X(pt,`RPC '${e}' stream ${s} transport opened.`),S.o_())})),k(p,li.EventType.CLOSE,(()=>{_||(_=!0,X(pt,`RPC '${e}' stream ${s} transport closed`),S.a_(),this.E_(p))})),k(p,li.EventType.ERROR,(O=>{_||(_=!0,Rs(pt,`RPC '${e}' stream ${s} transport errored. Name:`,O.name,"Message:",O.message),S.a_(new ee(U.UNAVAILABLE,"The operation could not be completed")))})),k(p,li.EventType.MESSAGE,(O=>{if(!_){const H=O.data[0];Ve(!!H,16349);const B=H,z=B?.error||B[0]?.error;if(z){X(pt,`RPC '${e}' stream ${s} received error:`,z);const G=z.status;let re=(function(y){const v=Ge[y];if(v!==void 0)return e_(v)})(G),_e=z.message;re===void 0&&(re=U.INTERNAL,_e="Unknown error status: "+G+" with message "+z.message),_=!0,S.a_(new ee(re,_e)),p.close()}else X(pt,`RPC '${e}' stream ${s} received:`,H),S.u_(H)}})),k(c,_g.STAT_EVENT,(O=>{O.stat===fl.PROXY?X(pt,`RPC '${e}' stream ${s} detected buffering proxy`):O.stat===fl.NOPROXY&&X(pt,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{S.__()}),0),S}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((n=>n===e))}}function $c(){return typeof document<"u"?document:null}/**
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
 */const Md="PersistentStream";class m_{constructor(e,n,r,s,i,o,c,l){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new p_(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(xn(n.toString()),xn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===n&&this.G_(r,s)}),(r=>{e((()=>{const s=new ee(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return X(Md,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget((()=>this.D_===e?n():(X(Md,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class p0 extends m_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=ER(this.serializer,e),r=(function(i){if(!("targetChange"in i))return he.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?he.min():o.readTime?dn(o.readTime):he.min()})(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=Il(this.serializer),n.addTarget=(function(i,o){let c;const l=o.target;if(c=_l(l)?{documents:wR(i,l)}:{query:AR(i,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=r_(i,o.resumeToken);const u=vl(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(he.min())>0){c.readTime=_a(i,o.snapshotVersion.toTimestamp());const u=vl(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c})(this.serializer,e);const r=SR(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=Il(this.serializer),n.removeTarget=e,this.q_(n)}}class m0 extends m_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Ve(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ve(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Ve(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=IR(e.writeResults,e.commitTime),r=dn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Il(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map((r=>TR(this.serializer,r)))};this.q_(n)}}/**
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
 */class g0{}class _0 extends g0{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new ee(U.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Go(e,El(n,r),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ee(U.UNKNOWN,i.toString())}))}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.Ho(e,El(n,r),s,o,c,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ee(U.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class y0{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */const qr="RemoteStore";class v0{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((o=>{r.enqueueAndForget((async()=>{Xr(this)&&(X(qr,"Restarting streams for network reachability change."),await(async function(l){const u=fe(l);u.Ea.add(4),await oo(u),u.Ra.set("Unknown"),u.Ea.delete(4),await Xa(u)})(this))}))})),this.Ra=new y0(r,s)}}async function Xa(t){if(Xr(t))for(const e of t.da)await e(!0)}async function oo(t){for(const e of t.da)await e(!1)}function g_(t,e){const n=fe(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Su(n)?bu(n):$s(n).O_()&&Au(n,e))}function wu(t,e){const n=fe(t),r=$s(n);n.Ia.delete(e),r.O_()&&__(n,e),n.Ia.size===0&&(r.O_()?r.L_():Xr(n)&&n.Ra.set("Unknown"))}function Au(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(he.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}$s(t).Y_(e)}function __(t,e){t.Va.Ue(e),$s(t).Z_(e)}function bu(t){t.Va=new dR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),$s(t).start(),t.Ra.ua()}function Su(t){return Xr(t)&&!$s(t).x_()&&t.Ia.size>0}function Xr(t){return fe(t).Ea.size===0}function y_(t){t.Va=void 0}async function E0(t){t.Ra.set("Online")}async function T0(t){t.Ia.forEach(((e,n)=>{Au(t,e)}))}async function I0(t,e){y_(t),Su(t)?(t.Ra.ha(e),bu(t)):t.Ra.set("Unknown")}async function w0(t,e,n){if(t.Ra.set("Online"),e instanceof n_&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ia.delete(c),s.Va.removeTarget(c))})(t,e)}catch(r){X(qr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await va(t,r)}else if(e instanceof $o?t.Va.Ze(e):e instanceof t_?t.Va.st(e):t.Va.tt(e),!n.isEqual(he.min()))try{const r=await d_(t.localStore);n.compareTo(r)>=0&&await(function(i,o){const c=i.Va.Tt(o);return c.targetChanges.forEach(((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.Ia.get(u);f&&i.Ia.set(u,f.withResumeToken(l.resumeToken,o))}})),c.targetMismatches.forEach(((l,u)=>{const f=i.Ia.get(l);if(!f)return;i.Ia.set(l,f.withResumeToken(lt.EMPTY_BYTE_STRING,f.snapshotVersion)),__(i,l);const p=new rr(f.target,l,u,f.sequenceNumber);Au(i,p)})),i.remoteSyncer.applyRemoteEvent(c)})(t,n)}catch(r){X(qr,"Failed to raise snapshot:",r),await va(t,r)}}async function va(t,e,n){if(!Bs(e))throw e;t.Ea.add(1),await oo(t),t.Ra.set("Offline"),n||(n=()=>d_(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{X(qr,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Xa(t)}))}function v_(t,e){return e().catch((n=>va(t,n,e)))}async function Za(t){const e=fe(t),n=vr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:uu;for(;A0(e);)try{const s=await i0(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,b0(e,s)}catch(s){await va(e,s)}E_(e)&&T_(e)}function A0(t){return Xr(t)&&t.Ta.length<10}function b0(t,e){t.Ta.push(e);const n=vr(t);n.O_()&&n.X_&&n.ea(e.mutations)}function E_(t){return Xr(t)&&!vr(t).x_()&&t.Ta.length>0}function T_(t){vr(t).start()}async function S0(t){vr(t).ra()}async function R0(t){const e=vr(t);for(const n of t.Ta)e.ea(n.mutations)}async function P0(t,e,n){const r=t.Ta.shift(),s=gu.from(r,e,n);await v_(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await Za(t)}async function C0(t,e){e&&vr(t).X_&&await(async function(r,s){if((function(o){return uR(o)&&o!==U.ABORTED})(s.code)){const i=r.Ta.shift();vr(r).B_(),await v_(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await Za(r)}})(t,e),E_(t)&&T_(t)}async function Ld(t,e){const n=fe(t);n.asyncQueue.verifyOperationInProgress(),X(qr,"RemoteStore received new credentials");const r=Xr(n);n.Ea.add(3),await oo(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Xa(n)}async function k0(t,e){const n=fe(t);e?(n.Ea.delete(2),await Xa(n)):e||(n.Ea.add(2),await oo(n),n.Ra.set("Unknown"))}function $s(t){return t.ma||(t.ma=(function(n,r,s){const i=fe(n);return i.sa(),new p0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Xo:E0.bind(null,t),t_:T0.bind(null,t),r_:I0.bind(null,t),H_:w0.bind(null,t)}),t.da.push((async e=>{e?(t.ma.B_(),Su(t)?bu(t):t.Ra.set("Unknown")):(await t.ma.stop(),y_(t))}))),t.ma}function vr(t){return t.fa||(t.fa=(function(n,r,s){const i=fe(n);return i.sa(),new m0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:S0.bind(null,t),r_:C0.bind(null,t),ta:R0.bind(null,t),na:P0.bind(null,t)}),t.da.push((async e=>{e?(t.fa.B_(),await Za(t)):(await t.fa.stop(),t.Ta.length>0&&(X(qr,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))}))),t.fa}/**
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
 */class Ru{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new hr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new Ru(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ee(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Pu(t,e){if(xn("AsyncQueue",`${e}: ${t}`),Bs(t))return new ee(U.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class V0{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class N0{constructor(){this.queries=Ud(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=fe(n),i=s.queries;s.queries=Ud(),i.forEach(((o,c)=>{for(const l of c.Sa)l.onError(r)}))})(this,new ee(U.ABORTED,"Firestore shutting down"))}}function Ud(){return new Jr((t=>$g(t)),Wa)}async function O0(t,e){const n=fe(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new V0,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=Pu(o,`Initialization of query '${cs(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&Cu(n)}async function D0(t,e){const n=fe(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function x0(t,e){const n=fe(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.Sa)c.Fa(s)&&(r=!0);o.wa=s}}r&&Cu(n)}function M0(t,e,n){const r=fe(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function Cu(t){t.Ca.forEach((e=>{e.next()}))}var bl,Bd;(Bd=bl||(bl={})).Ma="default",Bd.Cache="cache";class L0{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Os(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Os.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==bl.Cache}}/**
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
 */class I_{constructor(e){this.key=e}}class w_{constructor(e){this.key=e}}class F0{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Te(),this.mutatedKeys=Te(),this.eu=jg(e),this.tu=new vs(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new Fd,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((f,p)=>{const m=s.get(f),_=Ka(this.query,p)?p:null,S=!!m&&this.mutatedKeys.has(m.key),k=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let O=!1;m&&_?m.data.isEqual(_.data)?S!==k&&(r.track({type:3,doc:_}),O=!0):this.su(m,_)||(r.track({type:2,doc:_}),O=!0,(l&&this.eu(_,l)>0||u&&this.eu(_,u)<0)&&(c=!0)):!m&&_?(r.track({type:0,doc:_}),O=!0):m&&!_&&(r.track({type:1,doc:m}),O=!0,(l||u)&&(c=!0)),O&&(_?(o=o.add(_),i=k?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Cs:c,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((f,p)=>(function(_,S){const k=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return le(20277,{Rt:O})}};return k(_)-k(S)})(f.type,p.type)||this.eu(f.doc,p.doc))),this.ou(r),s=s??!1;const c=n&&!s?this._u():[],l=this.Xa.size===0&&this.current&&!s?1:0,u=l!==this.Za;return this.Za=l,o.length!==0||u?{snapshot:new Os(this.query,e.tu,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Fd,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((n=>this.Ya=this.Ya.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ya=this.Ya.delete(n))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Te(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const n=[];return e.forEach((r=>{this.Xa.has(r)||n.push(new w_(r))})),this.Xa.forEach((r=>{e.has(r)||n.push(new I_(r))})),n}cu(e){this.Ya=e.Qs,this.Xa=Te();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Os.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const ku="SyncEngine";class U0{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class B0{constructor(e){this.key=e,this.hu=!1}}class $0{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Jr((c=>$g(c)),Wa),this.Iu=new Map,this.Eu=new Set,this.du=new je(se.comparator),this.Au=new Map,this.Ru=new vu,this.Vu={},this.mu=new Map,this.fu=Ns.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function j0(t,e,n=!0){const r=C_(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await A_(r,e,n,!0),s}async function q0(t,e){const n=C_(t);await A_(n,e,!0,!1)}async function A_(t,e,n,r){const s=await o0(t.localStore,hn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await H0(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&g_(t.remoteStore,s),c}async function H0(t,e,n,r,s){t.pu=(p,m,_)=>(async function(k,O,H,B){let z=O.view.ru(H);z.Cs&&(z=await Nd(k.localStore,O.query,!1).then((({documents:w})=>O.view.ru(w,z))));const G=B&&B.targetChanges.get(O.targetId),re=B&&B.targetMismatches.get(O.targetId)!=null,_e=O.view.applyChanges(z,k.isPrimaryClient,G,re);return jd(k,O.targetId,_e.au),_e.snapshot})(t,p,m,_);const i=await Nd(t.localStore,e,!0),o=new F0(e,i.Qs),c=o.ru(i.documents),l=io.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(c,t.isPrimaryClient,l);jd(t,n,u.au);const f=new U0(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function z0(t,e,n){const r=fe(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter((o=>!Wa(o,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await wl(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&wu(r.remoteStore,s.targetId),Sl(r,s.targetId)})).catch(Us)):(Sl(r,s.targetId),await wl(r.localStore,s.targetId,!0))}async function W0(t,e){const n=fe(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),wu(n.remoteStore,r.targetId))}async function K0(t,e,n){const r=eP(t);try{const s=await(function(o,c){const l=fe(o),u=$e.now(),f=c.reduce(((_,S)=>_.add(S.key)),Te());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",(_=>{let S=Mn(),k=Te();return l.Ns.getEntries(_,f).next((O=>{S=O,S.forEach(((H,B)=>{B.isValidDocument()||(k=k.add(H))}))})).next((()=>l.localDocuments.getOverlayedDocuments(_,S))).next((O=>{p=O;const H=[];for(const B of c){const z=iR(B,p.get(B.key).overlayedDocument);z!=null&&H.push(new Yr(B.key,z,Og(z.value.mapValue),fn.exists(!0)))}return l.mutationQueue.addMutationBatch(_,u,H,c)})).next((O=>{m=O;const H=O.applyToLocalDocumentSet(p,k);return l.documentOverlayCache.saveOverlays(_,O.batchId,H)}))})).then((()=>({batchId:m.batchId,changes:Hg(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(o,c,l){let u=o.Vu[o.currentUser.toKey()];u||(u=new je(Ee)),u=u.insert(c,l),o.Vu[o.currentUser.toKey()]=u})(r,s.batchId,n),await ao(r,s.changes),await Za(r.remoteStore)}catch(s){const i=Pu(s,"Failed to persist write");n.reject(i)}}async function b_(t,e){const n=fe(t);try{const r=await r0(n.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=n.Au.get(i);o&&(Ve(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?Ve(o.hu,14607):s.removedDocuments.size>0&&(Ve(o.hu,42227),o.hu=!1))})),await ao(n,r,e)}catch(r){await Us(r)}}function $d(t,e,n){const r=fe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach(((i,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(o,c){const l=fe(o);l.onlineState=c;let u=!1;l.queries.forEach(((f,p)=>{for(const m of p.Sa)m.va(c)&&(u=!0)})),u&&Cu(l)})(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function G0(t,e,n){const r=fe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new je(se.comparator);o=o.insert(i,vt.newNoDocument(i,he.min()));const c=Te().add(i),l=new Ja(he.min(),new Map,new je(Ee),o,c);await b_(r,l),r.du=r.du.remove(i),r.Au.delete(e),Vu(r)}else await wl(r.localStore,e,!1).then((()=>Sl(r,e,n))).catch(Us)}async function Q0(t,e){const n=fe(t),r=e.batch.batchId;try{const s=await n0(n.localStore,e);R_(n,r,null),S_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ao(n,s)}catch(s){await Us(s)}}async function J0(t,e,n){const r=fe(t);try{const s=await(function(o,c){const l=fe(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let f;return l.mutationQueue.lookupMutationBatch(u,c).next((p=>(Ve(p!==null,37113),f=p.keys(),l.mutationQueue.removeMutationBatch(u,p)))).next((()=>l.mutationQueue.performConsistencyCheck(u))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(u,f,c))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f))).next((()=>l.localDocuments.getDocuments(u,f)))}))})(r.localStore,e);R_(r,e,n),S_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ao(r,s)}catch(s){await Us(s)}}function S_(t,e){(t.mu.get(e)||[]).forEach((n=>{n.resolve()})),t.mu.delete(e)}function R_(t,e,n){const r=fe(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function Sl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach((r=>{t.Ru.containsKey(r)||P_(t,r)}))}function P_(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(wu(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),Vu(t))}function jd(t,e,n){for(const r of n)r instanceof I_?(t.Ru.addReference(r.key,e),Y0(t,r)):r instanceof w_?(X(ku,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||P_(t,r.key)):le(19791,{wu:r})}function Y0(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(X(ku,"New document in limbo: "+n),t.Eu.add(r),Vu(t))}function Vu(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new se(Be.fromString(e)),r=t.fu.next();t.Au.set(r,new B0(n)),t.du=t.du.insert(n,r),g_(t.remoteStore,new rr(hn(Bg(n.path)),r,"TargetPurposeLimboResolution",ja.ce))}}async function ao(t,e,n){const r=fe(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach(((c,l)=>{o.push(r.pu(l,e,n).then((u=>{if((u||n)&&r.isPrimaryClient){const f=u?!u.fromCache:n?.targetChanges.get(l.targetId)?.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(u){s.push(u);const f=Tu.As(l.targetId,u);i.push(f)}})))})),await Promise.all(o),r.Pu.H_(s),await(async function(l,u){const f=fe(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>L.forEach(u,(m=>L.forEach(m.Es,(_=>f.persistence.referenceDelegate.addReference(p,m.targetId,_))).next((()=>L.forEach(m.ds,(_=>f.persistence.referenceDelegate.removeReference(p,m.targetId,_)))))))))}catch(p){if(!Bs(p))throw p;X(Iu,"Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const _=f.Ms.get(m),S=_.snapshotVersion,k=_.withLastLimboFreeSnapshotVersion(S);f.Ms=f.Ms.insert(m,k)}}})(r.localStore,i))}async function X0(t,e){const n=fe(t);if(!n.currentUser.isEqual(e)){X(ku,"User change. New user:",e.toKey());const r=await f_(n.localStore,e);n.currentUser=e,(function(i,o){i.mu.forEach((c=>{c.forEach((l=>{l.reject(new ee(U.CANCELLED,o))}))})),i.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ao(n,r.Ls)}}function Z0(t,e){const n=fe(t),r=n.Au.get(e);if(r&&r.hu)return Te().add(r.key);{let s=Te();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const c=n.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}function C_(t){const e=fe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=b_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Z0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=G0.bind(null,e),e.Pu.H_=x0.bind(null,e.eventManager),e.Pu.yu=M0.bind(null,e.eventManager),e}function eP(t){const e=fe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Q0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=J0.bind(null,e),e}class Ea{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ya(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return t0(this.persistence,new XR,e.initialUser,this.serializer)}Cu(e){return new h_(Eu.mi,this.serializer)}Du(e){return new c0}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ea.provider={build:()=>new Ea};class tP extends Ea{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Ve(this.persistence.referenceDelegate instanceof ya,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new LR(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Pt.withCacheSize(this.cacheSizeBytes):Pt.DEFAULT;return new h_((r=>ya.mi(r,n)),this.serializer)}}class Rl{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>$d(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=X0.bind(null,this.syncEngine),await k0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new N0})()}createDatastore(e){const n=Ya(e.databaseInfo.databaseId),r=(function(i){return new d0(i)})(e.databaseInfo);return(function(i,o,c,l){return new _0(i,o,c,l)})(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return(function(r,s,i,o,c){return new v0(r,s,i,o,c)})(this.localStore,this.datastore,e.asyncQueue,(n=>$d(this.syncEngine,n,0)),(function(){return xd.v()?new xd:new l0})())}createSyncEngine(e,n){return(function(s,i,o,c,l,u,f){const p=new $0(s,i,o,c,l,u);return f&&(p.gu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){await(async function(n){const r=fe(n);X(qr,"RemoteStore shutting down."),r.Ea.add(5),await oo(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Rl.provider={build:()=>new Rl};/**
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
 */class nP{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):xn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
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
 */const Er="FirestoreClient";class rP{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=_t.UNAUTHENTICATED,this.clientId=cu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async o=>{X(Er,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(X(Er,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new hr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Pu(n,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function jc(t,e){t.asyncQueue.verifyOperationInProgress(),X(Er,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async s=>{r.isEqual(s)||(await f_(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function qd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await sP(t);X(Er,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((r=>Ld(e.remoteStore,r))),t.setAppCheckTokenChangeListener(((r,s)=>Ld(e.remoteStore,s))),t._onlineComponents=e}async function sP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X(Er,"Using user provided OfflineComponentProvider");try{await jc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(s){return s.name==="FirebaseError"?s.code===U.FAILED_PRECONDITION||s.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;Rs("Error using user provided cache. Falling back to memory cache: "+n),await jc(t,new Ea)}}else X(Er,"Using default OfflineComponentProvider"),await jc(t,new tP(void 0));return t._offlineComponents}async function k_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X(Er,"Using user provided OnlineComponentProvider"),await qd(t,t._uninitializedComponentsProvider._online)):(X(Er,"Using default OnlineComponentProvider"),await qd(t,new Rl))),t._onlineComponents}function iP(t){return k_(t).then((e=>e.syncEngine))}async function oP(t){const e=await k_(t),n=e.eventManager;return n.onListen=j0.bind(null,e.syncEngine),n.onUnlisten=z0.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=q0.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=W0.bind(null,e.syncEngine),n}function aP(t,e,n={}){const r=new hr;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,c,l,u){const f=new nP({next:m=>{f.Nu(),o.enqueueAndForget((()=>D0(i,p))),m.fromCache&&l.source==="server"?u.reject(new ee(U.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new L0(c,f,{includeMetadataChanges:!0,qa:!0});return O0(i,p)})(await oP(t),t.asyncQueue,e,n,r))),r.promise}/**
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
 */const N_="firestore.googleapis.com",zd=!0;class Wd{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ee(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=N_,this.ssl=zd}else this.host=e.host,this.ssl=e.ssl??zd;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=u_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<xR)throw new ee(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}yS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=V_(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new ee(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new ee(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new ee(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ec{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ee(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ee(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new cS;switch(r.type){case"firstParty":return new fS(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ee(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=Hd.get(n);r&&(X("ComponentProvider","Removing Datastore"),Hd.delete(n),r.terminate())})(this),Promise.resolve()}}function cP(t,e,n,r={}){t=Cs(t,ec);const s=Ds(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},c=`${e}:${n}`;s&&(Rm(`https://${c}`),Pm("Firestore",!0)),i.host!==N_&&i.host!==c&&Rs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:r};if(!Ur(l,o)&&(t._setSettings(l),r.mockUserToken)){let u,f;if(typeof r.mockUserToken=="string")u=r.mockUserToken,f=_t.MOCK_USER;else{u=TI(r.mockUserToken,t._app?.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new ee(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new _t(p)}t._authCredentials=new lS(new Tg(u,f))}}/**
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
 */class tc{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new tc(this.firestore,e,this._query)}}class rt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new rt(this.firestore,e,this._key)}toJSON(){return{type:rt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(ro(n,rt._jsonSchema))return new rt(e,r||null,new se(Be.fromString(n.referencePath)))}}rt._jsonSchemaVersion="firestore/documentReference/1.0",rt._jsonSchema={type:Qe("string",rt._jsonSchemaVersion),referencePath:Qe("string")};class fr extends tc{constructor(e,n,r){super(e,n,Bg(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new rt(this.firestore,null,new se(e))}withConverter(e){return new fr(this.firestore,e,this._path)}}function mt(t,e,...n){if(t=Ft(t),Ig("collection","path",e),t instanceof ec){const r=Be.fromString(e,...n);return od(r),new fr(t,null,r)}{if(!(t instanceof rt||t instanceof fr))throw new ee(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Be.fromString(e,...n));return od(r),new fr(t.firestore,null,r)}}function O_(t,e,...n){if(t=Ft(t),arguments.length===1&&(e=cu.newId()),Ig("doc","path",e),t instanceof ec){const r=Be.fromString(e,...n);return id(r),new rt(t,null,new se(r))}{if(!(t instanceof rt||t instanceof fr))throw new ee(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Be.fromString(e,...n));return id(r),new rt(t.firestore,t instanceof fr?t.converter:null,new se(r))}}/**
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
 */const Kd="AsyncQueue";class Gd{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new p_(this,"async_queue_retry"),this._c=()=>{const r=$c();r&&X(Kd,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=$c();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=$c();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new hr;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Bs(e))throw e;X(Kd,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,xn("INTERNAL UNHANDLED ERROR: ",Qd(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Ru.createAndSchedule(this,e,n,r,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&le(47125,{Pc:Qd(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Qd(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class nc extends ec{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Gd,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Gd(e),this._firestoreClient=void 0,await e}}}function lP(t,e){const n=typeof t=="object"?t:Nm(),r=typeof t=="string"?t:ha,s=Xl(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=vI("firestore");i&&cP(s,...i)}return s}function D_(t){if(t._terminated)throw new ee(U.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||uP(t),t._firestoreClient}function uP(t){const e=t._freezeSettings(),n=(function(s,i,o,c){return new CS(s,i,o,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,V_(c.experimentalLongPollingOptions),c.useFetchStreams,c.isUsingEmulator)})(t._databaseId,t._app?.options.appId||"",t._persistenceKey,e);t._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new rP(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&(function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}})(t._componentsProvider))}/**
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
 */class Bt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Bt(lt.fromBase64String(e))}catch(n){throw new ee(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Bt(lt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Bt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ro(e,Bt._jsonSchema))return Bt.fromBase64String(e.bytes)}}Bt._jsonSchemaVersion="firestore/bytes/1.0",Bt._jsonSchema={type:Qe("string",Bt._jsonSchemaVersion),bytes:Qe("string")};/**
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
 */class Nu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ee(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ct(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class pn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ee(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ee(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ee(this._lat,e._lat)||Ee(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:pn._jsonSchemaVersion}}static fromJSON(e){if(ro(e,pn._jsonSchema))return new pn(e.latitude,e.longitude)}}pn._jsonSchemaVersion="firestore/geoPoint/1.0",pn._jsonSchema={type:Qe("string",pn._jsonSchemaVersion),latitude:Qe("number"),longitude:Qe("number")};/**
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
 */class mn{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:mn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ro(e,mn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new mn(e.vectorValues);throw new ee(U.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}mn._jsonSchemaVersion="firestore/vectorValue/1.0",mn._jsonSchema={type:Qe("string",mn._jsonSchemaVersion),vectorValues:Qe("object")};/**
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
 */const hP=/^__.*__$/;class fP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Yr(e,this.data,this.fieldMask,n,this.fieldTransforms):new so(e,this.data,n,this.fieldTransforms)}}function M_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw le(40011,{Ac:t})}}class Ou{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Ou({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Ta(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(M_(this.Ac)&&hP.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class dP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ya(e)}Cc(e,n,r,s=!1){return new Ou({Ac:e,methodName:n,Dc:r,path:ct.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function L_(t){const e=t._freezeSettings(),n=Ya(t._databaseId);return new dP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function F_(t,e,n,r,s,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);j_("Data must be an object, but it was:",o,r);const c=B_(r,o);let l,u;if(i.merge)l=new Jt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=pP(e,p,n);if(!o.contains(m))throw new ee(U.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);gP(f,m)||f.push(m)}l=new Jt(f),u=o.fieldTransforms.filter((p=>l.covers(p.field)))}else l=null,u=o.fieldTransforms;return new fP(new Ut(c),l,u)}function U_(t,e){if($_(t=Ft(t)))return j_("Unsupported field value:",e,t),B_(t,e);if(t instanceof x_)return(function(r,s){if(!M_(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(r,s){const i=[];let o=0;for(const c of r){let l=U_(c,s.wc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}})(t,e)}return(function(r,s){if((r=Ft(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ZS(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=$e.fromDate(r);return{timestampValue:_a(s.serializer,i)}}if(r instanceof $e){const i=new $e(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:_a(s.serializer,i)}}if(r instanceof pn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Bt)return{bytesValue:r_(s.serializer,r._byteString)};if(r instanceof rt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:yu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof mn)return(function(o,c){return{mapValue:{fields:{[Vg]:{stringValue:Ng},[fa]:{arrayValue:{values:o.toArray().map((u=>{if(typeof u!="number")throw c.Sc("VectorValues must only contain numeric values.");return mu(c.serializer,u)}))}}}}}})(r,s);throw s.Sc(`Unsupported field value: ${lu(r)}`)})(t,e)}function B_(t,e){const n={};return bg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Qr(t,((r,s)=>{const i=U_(s,e.mc(r));i!=null&&(n[r]=i)})),{mapValue:{fields:n}}}function $_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof $e||t instanceof pn||t instanceof Bt||t instanceof rt||t instanceof x_||t instanceof mn)}function j_(t,e,n){if(!$_(n)||!wg(n)){const r=lu(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function pP(t,e,n){if((e=Ft(e))instanceof Nu)return e._internalPath;if(typeof e=="string")return q_(t,e);throw Ta("Field path arguments must be of type string or ",t,!1,void 0,n)}const mP=new RegExp("[~\\*/\\[\\]]");function q_(t,e,n){if(e.search(mP)>=0)throw Ta(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Nu(...e.split("."))._internalPath}catch{throw Ta(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ta(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new ee(U.INVALID_ARGUMENT,c+t+l)}function gP(t,e){return t.some((n=>n.isEqual(e)))}/**
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
 */class H_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new _P(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(z_("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class _P extends H_{data(){return super.data()}}function z_(t,e){return typeof e=="string"?q_(t,e):e instanceof Nu?e._internalPath:e._delegate._internalPath}/**
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
 */function yP(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ee(U.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class vP{convertValue(e,n="none"){switch(yr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(_r(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw le(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Qr(e,((s,i)=>{r[s]=this.convertValue(i,n)})),r}convertVectorValue(e){const n=e.fields?.[fa].arrayValue?.values?.map((r=>ze(r.doubleValue)));return new mn(n)}convertGeoPoint(e){return new pn(ze(e.latitude),ze(e.longitude))}convertArray(e,n){return(e.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ha(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ji(e));default:return null}}convertTimestamp(e){const n=gr(e);return new $e(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Be.fromString(e);Ve(l_(r),9688,{name:e});const s=new qi(r.get(1),r.get(3)),i=new se(r.popFirst(5));return s.isEqual(n)||xn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function W_(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class Co{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Es extends H_{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new jo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(z_("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ee(U.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Es._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Es._jsonSchemaVersion="firestore/documentSnapshot/1.0",Es._jsonSchema={type:Qe("string",Es._jsonSchemaVersion),bundleSource:Qe("string","DocumentSnapshot"),bundleName:Qe("string"),bundle:Qe("string")};class jo extends Es{data(e={}){return super.data(e)}}class Ts{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Co(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((r=>{e.call(n,new jo(this._firestore,this._userDataWriter,r.key,r,new Co(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ee(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((c=>{const l=new jo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Co(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const l=new jo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Co(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:EP(c.type),doc:l,oldIndex:u,newIndex:f}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ee(U.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ts._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=cu.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function EP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return le(61501,{type:t})}}Ts._jsonSchemaVersion="firestore/querySnapshot/1.0",Ts._jsonSchema={type:Qe("string",Ts._jsonSchemaVersion),bundleSource:Qe("string","QuerySnapshot"),bundleName:Qe("string"),bundle:Qe("string")};class TP extends vP{constructor(e){super(),this.firestore=e}convertBytes(e){return new Bt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new rt(this.firestore,null,n)}}function An(t){t=Cs(t,tc);const e=Cs(t.firestore,nc),n=D_(e),r=new TP(e);return yP(t._query),aP(n,t._query).then((s=>new Ts(e,r,t,s)))}function IP(t,e,n){t=Cs(t,rt);const r=Cs(t.firestore,nc),s=W_(t.converter,e);return K_(r,[F_(L_(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,fn.none())])}function wP(t,e){const n=Cs(t.firestore,nc),r=O_(t),s=W_(t.converter,e);return K_(n,[F_(L_(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,fn.exists(!1))]).then((()=>r))}function K_(t,e){return(function(r,s){const i=new hr;return r.asyncQueue.enqueueAndForget((async()=>K0(await iP(r),s,i))),i.promise})(D_(t),e)}(function(e,n=!0){(function(s){Fs=s})(xs),bs(new Br("firestore",((r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new nc(new uS(r.getProvider("auth-internal")),new dS(o,r.getProvider("app-check-internal")),(function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ee(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qi(u.options.projectId,f)})(o,s),o);return i={useFetchStreams:n,...i},c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),cr(td,nd,e),cr(td,nd,"esm2020")})();const AP={apiKey:"AIzaSyCgwtwWLYO3mx64YqmiGLOYzVShiKyocYI",authDomain:"gedankenpfade-a2cc9.firebaseapp.com",projectId:"gedankenpfade-a2cc9",storageBucket:"gedankenpfade-a2cc9.firebasestorage.app",messagingSenderId:"555433406669",appId:"1:555433406669:web:ac0ace641bba0dc33d3984",measurementId:"G-52YWXEG0EK"},bP=Vm(AP),Wt=lP(bP),Du=Wl("user",()=>{const t=we([]),e=we(null);async function n(){try{const i=await An(mt(Wt,"users"));t.value=i.docs.map(o=>o.data())}catch(i){console.error("Fehler beim Abrufen der Benutzer:",i)}}async function r(i){t.value.length===0&&await n();const o=t.value.find(c=>c.userId===i||null);o==null?(console.error("Nutzer nicht gefunden!"),e.value={username:"unbekannt",userId:i}):e.value=o}function s(){e.value=null}return{setLoggedinUser:r,unsetLoggedinUser:s,loggedinUser:e}}),xu=Wl("auth",()=>{const t=we(null),e=we(null),n=Du();async function r(i,o){const c=Zf();try{const l=await zA(c,i,o);t.value=l.user,t.value.email&&n.setLoggedinUser(t.value.uid),e.value=null}catch(l){l=l.message,console.error("Fehler bei der Anmeldung:",l)}}async function s(){const i=Zf();try{await GA(i),t.value=null,n.unsetLoggedinUser(),e.value=null}catch(o){o=o.message,console.error("Fehler bei der Abmeldung:",o)}}return{login:r,logout:s,error:e,currentUser:t}}),SP={class:"login-register modal-overlay"},RP={class:"login-modal"},PP={class:"login"},CP={key:0},kP=wt({__name:"Login",emits:["closeModal"],setup(t,{emit:e}){const n=xu(),r=we(""),s=we(""),i=e,o=n.error;function c(){n.login(r.value,s.value),i("closeModal")}return(l,u)=>(ne(),ae("div",SP,[V("div",RP,[V("div",PP,[u[3]||(u[3]=V("h2",null,"Login",-1)),Jn(V("input",{"onUpdate:modelValue":u[0]||(u[0]=f=>r.value=f),placeholder:"E-Mail"},null,512),[[xr,r.value]]),Jn(V("input",{"onUpdate:modelValue":u[1]||(u[1]=f=>s.value=f),type:"password",placeholder:"Passwort"},null,512),[[xr,s.value]]),V("button",{onClick:c},"Anmelden"),We(o)?(ne(),ae("p",CP,Se(We(o)),1)):Gt("",!0)]),V("button",{onClick:u[2]||(u[2]=f=>i("closeModal"))},"Abbrechen")])]))}}),G_=En(kP,[["__scopeId","data-v-9b999bd5"]]),Ar=Wl("books",()=>{const t=we([]),e=we([]),n=we([]),r=we([]);async function s(){if(t.value.length==0){const p=mt(Wt,"queer-books");t.value=await Promise.all((await An(p)).docs.map(async m=>{const _=m.data(),S=mt(m.ref,"Inhalt"),k=(await An(S)).docs.map(O=>({title:O.data().titel,content:O.data().text,id:O.data().id}));return{title:_.titel,author:_.autor,description:_.beschreibung,content:k}}))}}async function i(){if(e.value.length==0){const p=mt(Wt,"ff-books");e.value=await Promise.all((await An(p)).docs.map(async m=>{const _=m.data(),S=mt(m.ref,"Inhalt"),k=(await An(S)).docs.map(O=>({title:O.data().titel,content:O.data().text,id:O.data().id}));return{title:_.titel,author:_.autor,description:_.beschreibung,content:k}}))}}async function o(){if(n.value.length==0){const p=mt(Wt,"other-books");n.value=await Promise.all((await An(p)).docs.map(async m=>{const _=m.data(),S=mt(m.ref,"Inhalt"),k=(await An(S)).docs.map(O=>({title:O.data().titel,content:O.data().text,id:O.data().id}));return{title:_.titel,author:_.autor,description:_.beschreibung,content:k}}))}}async function c(){if(r.value.length==0){const p=mt(Wt,"autism-books");r.value=await Promise.all((await An(p)).docs.map(async m=>{const _=m.data(),S=mt(m.ref,"Inhalt"),k=(await An(S)).docs.map(O=>({title:O.data().titel,content:O.data().text,id:O.data().id}));return{title:_.titel,author:_.autor,description:_.beschreibung,content:k}}))}}async function l(){await s(),await i(),await o(),await c()}async function u(p,m){if(m==="queer"){t.value.length===0&&await s();const _=t.value.find(S=>S.title===p);return _===void 0?null:_}else return console.error("Unsupported category"),null}async function f(p,m){try{let _=mt(Wt,"other-books");const S=we("");switch(p){case"Queer":S.value="queer",_=mt(Wt,"queer-books");break;case"Fanfiction":S.value="ff",_=mt(Wt,"ff-books");break;case"Autismus":S.value="autism",_=mt(Wt,"autism-books");break;case"Anderes":S.value="other",_=mt(Wt,"other-books");break;default:S.value="other",_=mt(Wt,"other-books")}const k={autor:m.author,beschreibung:m.description,kategorie:S.value,titel:m.title,zielgruppe:"",erstelltVon:m.createdBy},O=await wP(_,k),H=mt(O,"Inhalt");m.content.forEach(async B=>{await IP(O_(H,"Kapitel"+B.id.toString()),{id:B.id,titel:B.title,text:B.content})}),console.log("done")}catch(_){console.error("Fehler beim Hinzufügen des Buchs: ",_)}}return{fetchQueerBooks:s,fetchFfBooks:i,fetchOtherBooks:o,fetchAutismBooks:c,getAllBooks:l,queerBooks:t,ffBooks:e,otherBooks:n,autismBooks:r,getBookByName:u,addNewBook:f}}),VP={class:"content-container"},NP={class:"bookshelf"},OP={class:"shelf-layer"},DP={class:"book"},xP={class:"shelf-layer"},MP={class:"book"},LP={class:"shelf-layer"},FP={class:"book"},UP={class:"shelf-layer"},BP={class:"book"},$P=wt({__name:"Homepage",setup(t){const e=Ar(),n=xu(),r=Ct(()=>n.currentUser!=null);yi("loggedIn",r);const s=we(!1);Tr(async()=>{await e.getAllBooks()});function i(){Q_.push({name:"Autorenuebersicht"})}function o(){n.currentUser==null?s.value=!0:n.logout()}return(c,l)=>(ne(),ae(Pe,null,[ge(Kr,{title:"Gedankenpfade",type:"main",onLogin:l[0]||(l[0]=u=>o())}),V("div",VP,[l[8]||(l[8]=V("h2",null,"Startseite",-1)),l[9]||(l[9]=V("p",null,"Intro - Über diese Seite bla bla",-1)),l[10]||(l[10]=V("hr",null,null,-1)),V("div",NP,[l[3]||(l[3]=V("h3",null,"Bücherregal",-1)),l[4]||(l[4]=V("h4",null,"Queere Werke",-1)),V("div",OP,[(ne(!0),ae(Pe,null,kt(We(e).queerBooks,u=>(ne(),ae("div",DP,Se(u.title)+" "+Se(u.author),1))),256)),ge(Io,{class:"further-books",link:"/queer",icon:!0,text:"Weitere Bücher ansehen"})]),l[5]||(l[5]=V("h4",null,"Harry Potter Fanfictions",-1)),V("div",xP,[(ne(!0),ae(Pe,null,kt(We(e).ffBooks,u=>(ne(),ae("div",MP,Se(u.title),1))),256)),ge(Io,{class:"further-books",link:"/fanfiction",icon:!0,text:"Weitere Bücher ansehen"})]),l[6]||(l[6]=V("h4",null,"Autismus",-1)),V("div",LP,[(ne(!0),ae(Pe,null,kt(We(e).autismBooks,u=>(ne(),ae("div",FP,Se(u.title),1))),256)),ge(Io,{class:"further-books",link:"/autismus",icon:!0,text:"Weitere Bücher ansehen"})]),l[7]||(l[7]=V("h4",null,"Andere",-1)),V("div",UP,[(ne(!0),ae(Pe,null,kt(We(e).otherBooks,u=>(ne(),ae("div",BP,Se(u.title),1))),256)),ge(Io,{class:"further-books",link:"/andere",icon:!0,text:"Weitere Bücher ansehen"})])])]),ge(Ir,{onAuthorLogin:l[1]||(l[1]=u=>i()),type:"main",title:"Tschüss"}),s.value?(ne(),Di(G_,{key:0,onCloseModal:l[2]||(l[2]=u=>s.value=!1)})):Gt("",!0)],64))}}),jP=En($P,[["__scopeId","data-v-e3b69232"]]),qP={class:"content-container"},HP={class:"shelf"},zP={class:"book-details"},WP={class:"bookshelf-description"},KP={class:"info-group"},GP={class:"info-group"},QP={class:"info-group"},JP=wt({__name:"QueerBookshelf",setup(t){const e=Ar();return Tr(async()=>{await e.fetchQueerBooks()}),(n,r)=>{const s=zr("RouterLink");return ne(),ae(Pe,null,[ge(Kr,{type:"queer",title:"Queere Werke"}),V("div",qP,[V("div",HP,[(ne(!0),ae(Pe,null,kt(We(e).queerBooks,i=>(ne(),ae("div",zP,[r[4]||(r[4]=V("div",{class:"cover-img"},null,-1)),V("div",WP,[V("p",KP,[r[0]||(r[0]=V("span",null,"Titel: ",-1)),V("span",null,Se(i.title),1)]),V("p",GP,[r[1]||(r[1]=V("span",null,"Autor: ",-1)),V("span",null,Se(i.author),1)]),V("p",QP,[r[2]||(r[2]=V("span",null,"Beschreibung: ",-1)),V("span",null,Se(i.description),1)]),ge(s,{to:{name:"Inhaltsverzeichnis",params:{title:i.title.toString()}}},{default:Nn(()=>[...r[3]||(r[3]=[Wr("Jetzt lesen -> ",-1)])]),_:1},8,["to"])])]))),256))])]),ge(Ir,{type:"queer",title:""})],64)}}}),YP={class:"content-container"},XP={class:"shelf"},ZP={class:"book-details"},eC={class:"bookshelf-description"},tC={class:"info-group"},nC={class:"info-group"},rC={class:"info-group"},sC=wt({__name:"FanfictionBookshelf",setup(t){const e=Ar();return Tr(async()=>{await e.fetchFfBooks()}),(n,r)=>{const s=zr("RouterLink");return ne(),ae(Pe,null,[ge(Kr,{type:"ff",title:"Fanfiction"}),V("div",YP,[V("div",XP,[(ne(!0),ae(Pe,null,kt(We(e).ffBooks,i=>(ne(),ae("div",ZP,[r[4]||(r[4]=V("div",{class:"cover-img"},null,-1)),V("div",eC,[V("p",tC,[r[0]||(r[0]=V("span",null,"Titel: ",-1)),V("span",null,Se(i.title),1)]),V("p",nC,[r[1]||(r[1]=V("span",null,"Autor: ",-1)),V("span",null,Se(i.author),1)]),V("p",rC,[r[2]||(r[2]=V("span",null,"Beschreibung: ",-1)),V("span",null,Se(i.description),1)]),ge(s,{to:{name:"Inhaltsverzeichnis",params:{title:i.title.toString()}}},{default:Nn(()=>[...r[3]||(r[3]=[Wr("Jetzt lesen -> ",-1)])]),_:1},8,["to"])])]))),256))])]),ge(Ir,{type:"ff",title:""})],64)}}}),iC={class:"content-container"},oC={class:"shelf"},aC={class:"book-details"},cC={class:"bookshelf-description"},lC={class:"info-group"},uC={class:"info-group"},hC={class:"info-group"},fC=wt({__name:"AutismBookshelf",setup(t){const e=Ar();return Tr(async()=>{await e.fetchAutismBooks()}),(n,r)=>{const s=zr("RouterLink");return ne(),ae(Pe,null,[ge(Kr,{type:"autism",title:"Autismus (er)leben"}),V("div",iC,[V("div",oC,[(ne(!0),ae(Pe,null,kt(We(e).autismBooks,i=>(ne(),ae("div",aC,[r[4]||(r[4]=V("div",{class:"cover-img"},null,-1)),V("div",cC,[V("p",lC,[r[0]||(r[0]=V("span",null,"Titel: ",-1)),V("span",null,Se(i.title),1)]),V("p",uC,[r[1]||(r[1]=V("span",null,"Autor: ",-1)),V("span",null,Se(i.author),1)]),V("p",hC,[r[2]||(r[2]=V("span",null,"Beschreibung: ",-1)),V("span",null,Se(i.description),1)]),ge(s,{to:{name:"Inhaltsverzeichnis",params:{title:i.title.toString()}}},{default:Nn(()=>[...r[3]||(r[3]=[Wr("Jetzt lesen -> ",-1)])]),_:1},8,["to"])])]))),256))])]),ge(Ir,{type:"autism",title:""})],64)}}}),dC={class:"addNewBook modal-overlay"},pC={class:"modal"},mC={class:"input"},gC=["value"],_C={class:"autor"},yC={class:"area-input"},vC={class:"area-input"},EC={class:"error"},TC={class:"buttons-group"},IC=wt({__name:"AddNewBook",emits:["closeModal"],setup(t,{emit:e}){const n=Du(),r=Ar(),s=e,i=we(["Queer","Fanfiction","Autismus","Anderes"]),o=we(""),c=we(!1),l=we([]),u=we({title:"",author:"",description:"",content:[],createdBy:""}),f=we(1),p=we({title:"",content:"",id:f.value});function m(){l.value=[],c.value=!1,n.loggedinUser?(u.value.title==""&&(l.value.push("Du musst einen Titel eingeben"),c.value=!0),o.value==""&&(l.value.push("Du musst eine Kategorie auswählen!"),c.value=!0),u.value.createdBy=n.loggedinUser.username,u.value.author==""&&(u.value.author=n.loggedinUser.username),p.value.title==""&&(p.value.title="Kapitel "+f.value),p.value.content==""&&(l.value.push("Das Kapitel muss etwas enthalten!"),c.value=!0),u.value.content.push(p.value)):(l.value.push("Kein Nutzer eingeloggt"),c.value=!0),c.value||(console.log("Buch: ",u.value),r.addNewBook(o.value,u.value),s("closeModal"))}return(_,S)=>(ne(),ae("div",dC,[V("div",pC,[S[14]||(S[14]=V("h2",null,"Buch hinzufügen",-1)),V("div",mC,[V("div",null,[S[8]||(S[8]=V("label",null,"Buchtitel: ",-1)),Jn(V("input",{type:"text","onUpdate:modelValue":S[0]||(S[0]=k=>u.value.title=k)},null,512),[[xr,u.value.title]])]),V("div",null,[S[9]||(S[9]=V("label",null,"Kategorie: ",-1)),Jn(V("select",{name:"category",id:"category","onUpdate:modelValue":S[1]||(S[1]=k=>o.value=k)},[(ne(!0),ae(Pe,null,kt(i.value,k=>(ne(),ae("option",{value:k},Se(k),9,gC))),256))],512),[[ME,o.value]])])]),V("div",_C,[S[10]||(S[10]=V("label",null,"Autor: ",-1)),Jn(V("input",{type:"textfield","onUpdate:modelValue":S[2]||(S[2]=k=>u.value.author=k)},null,512),[[xr,u.value.author]])]),V("div",yC,[S[11]||(S[11]=V("label",null,"Klappentext / Beschreibung: ",-1)),Jn(V("textarea",{id:"description","onUpdate:modelValue":S[3]||(S[3]=k=>u.value.description=k),rows:"3",cols:"50",placeholder:"Gib hier deine Beschreibung ein..."},null,512),[[xr,u.value.description]])]),S[15]||(S[15]=V("hr",null,null,-1)),S[16]||(S[16]=V("h3",null,"Füge dein erstes Kapitel hinzu: ",-1)),V("div",null,[S[12]||(S[12]=V("label",null,"Titel: ",-1)),Jn(V("input",{type:"text","onUpdate:modelValue":S[4]||(S[4]=k=>p.value.title=k)},null,512),[[xr,p.value.title]])]),V("div",vC,[S[13]||(S[13]=V("label",null,"Text:",-1)),Jn(V("textarea",{id:"chapterText","onUpdate:modelValue":S[5]||(S[5]=k=>p.value.content=k),rows:"10",cols:"50",placeholder:"Gib hier den Text deines ersten Kapitels ein"},null,512),[[xr,p.value.content]])]),c.value?(ne(!0),ae(Pe,{key:0},kt(l.value,k=>(ne(),ae("p",EC,Se(k),1))),256)):Gt("",!0),V("div",TC,[V("button",{onClick:S[6]||(S[6]=k=>_.$emit("closeModal"))},"Abbrechen"),V("button",{onClick:S[7]||(S[7]=k=>m())},"Buch erstellen")])])]))}}),wC=En(IC,[["__scopeId","data-v-d3159435"]]),AC={class:"changeBookinfo modal-overlay"},bC={class:"modal"},SC={key:0,class:"error"},RC={class:"buttons-group"},PC=wt({__name:"ChangeBookinfo",emits:["closeModal"],setup(t,{emit:e}){const n=e;we(["Queer","Fanfiction","Autismus","Anderes"]),we("Titel"),we("Beschreibungstext bla bla bla");const r=we(!1);function s(){console.log("Eingaben werden überprüft..."),n("closeModal")}return(i,o)=>(ne(),ae("div",AC,[V("div",bC,[o[2]||(o[2]=V("h2",null,"Buch bearbeiten",-1)),o[3]||(o[3]=V("p",null,"Diese Funktion gibt es noch nicht. Komm bitte später wieder.",-1)),r.value?(ne(),ae("p",SC,"Nutzername oder Passwort falsch!")):Gt("",!0),V("div",RC,[V("button",{onClick:o[0]||(o[0]=c=>i.$emit("closeModal"))},"Abbrechen"),V("button",{onClick:o[1]||(o[1]=c=>s())},"Änderungen speichern")])])]))}}),CC={key:0,class:"authorspacewrapper body"},kC={class:"content-container"},VC={class:"container-header"},NC={class:"content-container"},OC={class:"container-header"},DC={class:"booklist"},xC={key:3,class:"login modal-overlay"},MC=wt({__name:"AuthorSpace",setup(t){const e=xu(),n=Du(),r=we(!1),s=we(!1),i=we([{},{},{}]);return we(!1),(o,c)=>(ne(),ae(Pe,null,[We(e).currentUser?(ne(),ae("div",CC,[ge(Kr,{type:"main",title:"Autorenbereich"}),V("div",kC,[V("div",VC,[V("h2",null," Herzlich Willkommen, "+Se(We(n).loggedinUser?.username)+"!",1)])]),c[6]||(c[6]=V("hr",null,null,-1)),V("div",NC,[V("div",OC,[c[3]||(c[3]=V("h2",null,"Meine Bücher:",-1)),V("button",{onClick:c[0]||(c[0]=l=>r.value=!0)},"Neues Buch anlegen")]),V("ul",DC,[(ne(!0),ae(Pe,null,kt(i.value,l=>(ne(),ae("li",null,[Wr(Se(l.title)+": Kapitel ",1),c[4]||(c[4]=V("button",null,"Infos bearbeiten",-1)),c[5]||(c[5]=V("button",null,"Kapitel bearbeiten",-1))]))),256))])]),ge(Ir,{type:"main",title:""})])):Gt("",!0),r.value?(ne(),Di(wC,{key:1,onCloseModal:c[1]||(c[1]=l=>r.value=!1)})):Gt("",!0),s.value?(ne(),Di(PC,{key:2,onCloseModal:c[2]||(c[2]=l=>s.value=!1)})):Gt("",!0),We(e).currentUser?Gt("",!0):(ne(),ae("div",xC,[ge(G_)]))],64))}}),LC=En(MC,[["__scopeId","data-v-fa579b3b"]]),FC={class:"content-container"},UC={class:"description"},BC={class:"content"},$C={key:0,class:"contentlist"},jC=wt({__name:"Book",setup(t){const e=Ar(),n=Em(),r=we({});return Tr(async()=>{if(n!=null){const s=n.params.title;r.value=await e.getBookByName(s,"queer")}}),(s,i)=>{const o=zr("RouterLink");return ne(),ae(Pe,null,[ge(Kr,{title:"",type:"queer"}),V("div",FC,[V("div",UC,[V("p",null,Se(r.value?.title),1),V("p",null,[i[0]||(i[0]=V("span",null,"von ",-1)),V("span",null,Se(r.value?.author),1)]),V("p",null,[i[1]||(i[1]=V("span",null,"Beschreibung: ",-1)),V("span",null,Se(r.value?.description),1)])]),i[3]||(i[3]=V("hr",null,null,-1)),V("div",BC,[i[2]||(i[2]=V("h3",null,"Inhalt:",-1)),r.value?(ne(),ae("ol",$C,[(ne(!0),ae(Pe,null,kt(r.value?.content,(c,l)=>(ne(),ae("li",null,[ge(o,{to:{name:"Kapitel",params:{title:r.value.title.toString(),chapter:l+1}}},{default:Nn(()=>[Wr(Se(c.title),1)]),_:2},1032,["to"])]))),256))])):Gt("",!0)])]),ge(Ir,{title:"",type:"queer"})],64)}}}),qC=En(jC,[["__scopeId","data-v-66513d2f"]]),HC={class:"content-container"},zC={class:"chapter"},WC={class:"titel"},KC=["innerHTML"],GC=wt({__name:"Chapter",setup(t){const e=Ar(),n=Em(),r=we({}),s=we({});return Tr(async()=>{if(n!=null){const i=n.params.title;r.value=await e.getBookByName(i,"queer"),s.value=r.value?.content.find(o=>o.id===parseInt(n.params.chapter))}}),(i,o)=>(ne(),ae(Pe,null,[V("div",HC,[V("div",zC,[V("h1",WC,Se(s.value?.title),1),V("div",{class:"text",innerHTML:s.value?.content},null,8,KC)])]),ge(Ir,{type:"queer",title:""})],64))}}),QC=En(GC,[["__scopeId","data-v-98e20ba3"]]),JC={class:"content-container"},YC={class:"shelf"},XC={class:"book-details"},ZC={class:"bookshelf-description"},e1={class:"info-group"},t1={class:"info-group"},n1={class:"info-group"},r1=wt({__name:"RandomBookshelf",setup(t){const e=Ar();return Tr(async()=>{await e.fetchOtherBooks()}),(n,r)=>{const s=zr("RouterLink");return ne(),ae(Pe,null,[ge(Kr,{type:"other",title:"Andere Werke"}),V("div",JC,[V("div",YC,[(ne(!0),ae(Pe,null,kt(We(e).otherBooks,i=>(ne(),ae("div",XC,[r[4]||(r[4]=V("div",{class:"cover-img"},null,-1)),V("div",ZC,[V("p",e1,[r[0]||(r[0]=V("span",null,"Titel: ",-1)),V("span",null,Se(i.title),1)]),V("p",t1,[r[1]||(r[1]=V("span",null,"Autor: ",-1)),V("span",null,Se(i.author),1)]),V("p",n1,[r[2]||(r[2]=V("span",null,"Beschreibung: ",-1)),V("span",null,Se(i.description),1)]),ge(s,{to:{name:"Inhaltsverzeichnis",params:{title:i.title.toString()}}},{default:Nn(()=>[...r[3]||(r[3]=[Wr("Jetzt lesen -> ",-1)])]),_:1},8,["to"])])]))),256))])]),ge(Ir,{type:"other",title:""})],64)}}}),s1=[{path:"/",name:"Home",component:jP},{path:"/queer",name:"Queer",component:JP},{path:"/fanfiction",name:"Fanfiction",component:sC},{path:"/autismus",name:"Autismus (er)leben",component:fC},{path:"/andere",name:"Andere Werke",component:r1},{path:"/:title",name:"Inhaltsverzeichnis",component:qC},{path:"/:title/:chapter",name:"Kapitel",component:QC},{path:"/authorspace",name:"Autorenuebersicht",component:LC}],Q_=XT({history:PT(),routes:s1}),i1=jE(),Mu=UE(YE);Mu.use(i1);Mu.use(Q_);Mu.mount("#app");
