import{d as y,o as a,c as u,r as p,n as T,a as R,t as L,b as x,w as v,e as _,T as vt,_ as $,u as Es,i as Ts,f as Ns,g as ft,h as E,j as xe,k as P,l as fe,m as h,p as d,q as Y,s as J,v as he,x as lt,y as me,z as We,A as mt,B as Yt,C as Is,D as Hs,E as _e,F as N,G as O,H as Jt,I as Ke,J as g,K as ue,L as Zt,M as Xe,N as ze,O as Ye,P as zs,Q as ct,R as Bs,S as Os,U as Qt,V as Rs,W as Us,X as Ds,Y as es,Z as ts,$ as ss,a0 as Fs,a1 as js,a2 as Gs,a3 as qs,a4 as Ws,a5 as Ks}from"./framework.4O-59sfZ.js";const Xs=y({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(s){return(e,t)=>(a(),u("span",{class:T(["VPBadge",e.type])},[p(e.$slots,"default",{},()=>[R(L(e.text),1)])],2))}}),Ys={key:0,class:"VPBackdrop"},Js=y({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(s){return(e,t)=>(a(),x(vt,{name:"fade"},{default:v(()=>[e.show?(a(),u("div",Ys)):_("",!0)]),_:1}))}}),Zs=$(Js,[["__scopeId","data-v-70d4fffc"]]),A=Es;function Qs(s,e){let t,n=!1;return()=>{t&&clearTimeout(t),n?t=setTimeout(s,e):(s(),(n=!0)&&setTimeout(()=>n=!1,e))}}function dt(s){return/^\//.test(s)?s:`/${s}`}function _t(s){const{pathname:e,search:t,hash:n,protocol:o}=new URL(s,"http://a.com");if(Ts(s)||s.startsWith("#")||!o.startsWith("http")||!Ns(e))return s;const{site:i}=A(),r=e.endsWith("/")||e.endsWith(".html")?s:s.replace(/(?:(^\.+)\/)?.*$/,`$1${e.replace(/(\.md)?$/,i.value.cleanUrls?"":".html")}${t}${n}`);return ft(r)}const gt=E(xe?location.hash:"");xe&&window.addEventListener("hashchange",()=>{gt.value=location.hash});function Ie({removeCurrent:s=!0,correspondingLink:e=!1}={}){const{site:t,localeIndex:n,page:o,theme:i}=A(),r=P(()=>{var c,f;return{label:(c=t.value.locales[n.value])==null?void 0:c.label,link:((f=t.value.locales[n.value])==null?void 0:f.link)||(n.value==="root"?"/":`/${n.value}/`)}});return{localeLinks:P(()=>Object.entries(t.value.locales).flatMap(([c,f])=>s&&r.value.label===f.label?[]:{text:f.label,link:en(f.link||(c==="root"?"/":`/${c}/`),i.value.i18nRouting!==!1&&e,o.value.relativePath.slice(r.value.link.length-1),!t.value.cleanUrls)+gt.value})),currentLang:r}}function en(s,e,t,n){return e?s.replace(/\/$/,"")+dt(t.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,n?".html":"")):s}const tn=s=>(Y("data-v-4937c58f"),s=s(),J(),s),sn={class:"NotFound"},nn={class:"code"},on={class:"title"},rn=tn(()=>h("div",{class:"divider"},null,-1)),an={class:"quote"},ln={class:"action"},cn=["href","aria-label"],dn=y({__name:"NotFound",setup(s){const{site:e,theme:t}=A(),{localeLinks:n}=Ie({removeCurrent:!1}),o=E("/");return fe(()=>{var r;const i=window.location.pathname.replace(e.value.base,"").replace(/(^.*?\/).*$/,"/$1");n.value.length&&(o.value=((r=n.value.find(({link:l})=>l.startsWith(i)))==null?void 0:r.link)||n.value[0].link)}),(i,r)=>{var l,c,f,b,m;return a(),u("div",sn,[h("p",nn,L(((l=d(t).notFound)==null?void 0:l.code)??"404"),1),h("h1",on,L(((c=d(t).notFound)==null?void 0:c.title)??"PAGE NOT FOUND"),1),rn,h("blockquote",an,L(((f=d(t).notFound)==null?void 0:f.quote)??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),h("div",ln,[h("a",{class:"link",href:d(ft)(o.value),"aria-label":((b=d(t).notFound)==null?void 0:b.linkLabel)??"go to home"},L(((m=d(t).notFound)==null?void 0:m.linkText)??"Take me home"),9,cn)])])}}}),un=$(dn,[["__scopeId","data-v-4937c58f"]]);function ns(s,e){if(Array.isArray(s))return Be(s);if(s==null)return[];e=dt(e);const t=Object.keys(s).sort((o,i)=>i.split("/").length-o.split("/").length).find(o=>e.startsWith(dt(o))),n=t?s[t]:[];return Array.isArray(n)?Be(n):Be(n.items,n.base)}function hn(s){const e=[];let t=0;for(const n in s){const o=s[n];if(o.items){t=e.push(o);continue}e[t]||e.push({items:[]}),e[t].items.push(o)}return e}function pn(s){const e=[];function t(n){for(const o of n)o.text&&o.link&&e.push({text:o.text,link:o.link,docFooterText:o.docFooterText}),o.items&&t(o.items)}return t(s),e}function ut(s,e){return Array.isArray(e)?e.some(t=>ut(s,t)):he(s,e.link)?!0:e.items?ut(s,e.items):!1}function Be(s,e){return[...s].map(t=>{const n={...t},o=n.base||e;return o&&n.link&&(n.link=o+n.link),n.items&&(n.items=Be(n.items,o)),n})}function ee(){const{frontmatter:s,page:e,theme:t}=A(),n=lt("(min-width: 960px)"),o=E(!1),i=P(()=>{const I=t.value.sidebar,V=e.value.relativePath;return I?ns(I,V):[]}),r=E(i.value);me(i,(I,V)=>{JSON.stringify(I)!==JSON.stringify(V)&&(r.value=i.value)});const l=P(()=>s.value.sidebar!==!1&&r.value.length>0&&s.value.layout!=="home"),c=P(()=>f?s.value.aside==null?t.value.aside==="left":s.value.aside==="left":!1),f=P(()=>s.value.layout==="home"?!1:s.value.aside!=null?!!s.value.aside:t.value.aside!==!1),b=P(()=>l.value&&n.value),m=P(()=>l.value?hn(r.value):[]);function S(){o.value=!0}function C(){o.value=!1}function M(){o.value?C():S()}return{isOpen:o,sidebar:r,sidebarGroups:m,hasSidebar:l,hasAside:f,leftAside:c,isSidebarEnabled:b,open:S,close:C,toggle:M}}function vn(s,e){let t;We(()=>{t=s.value?document.activeElement:void 0}),fe(()=>{window.addEventListener("keyup",n)}),mt(()=>{window.removeEventListener("keyup",n)});function n(o){o.key==="Escape"&&s.value&&(e(),t==null||t.focus())}}function fn(s){const{page:e}=A(),t=E(!1),n=P(()=>s.value.collapsed!=null),o=P(()=>!!s.value.link),i=E(!1),r=()=>{i.value=he(e.value.relativePath,s.value.link)};me([e,s,gt],r),fe(r);const l=P(()=>i.value?!0:s.value.items?ut(e.value.relativePath,s.value.items):!1),c=P(()=>!!(s.value.items&&s.value.items.length));We(()=>{t.value=!!(n.value&&s.value.collapsed)}),Yt(()=>{(i.value||l.value)&&(t.value=!1)});function f(){n.value&&(t.value=!t.value)}return{collapsed:t,collapsible:n,isLink:o,isActiveLink:i,hasActiveLink:l,hasChildren:c,toggle:f}}function mn(){const{hasSidebar:s}=ee(),e=lt("(min-width: 960px)"),t=lt("(min-width: 1280px)");return{isAsideEnabled:P(()=>!t.value&&!e.value?!1:s.value?t.value:e.value)}}const ht=[];function os(s){return typeof s.outline=="object"&&!Array.isArray(s.outline)&&s.outline.label||s.outlineTitle||"On this page"}function bt(s){const e=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(t=>t.id&&t.hasChildNodes()).map(t=>{const n=Number(t.tagName[1]);return{element:t,title:_n(t),link:"#"+t.id,level:n}});return gn(e,s)}function _n(s){let e="";for(const t of s.childNodes)if(t.nodeType===1){if(t.classList.contains("VPBadge")||t.classList.contains("header-anchor")||t.classList.contains("ignore-header"))continue;e+=t.textContent}else t.nodeType===3&&(e+=t.textContent);return e.trim()}function gn(s,e){if(e===!1)return[];const t=(typeof e=="object"&&!Array.isArray(e)?e.level:e)||2,[n,o]=typeof t=="number"?[t,t]:t==="deep"?[2,6]:t;s=s.filter(r=>r.level>=n&&r.level<=o),ht.length=0;for(const{element:r,link:l}of s)ht.push({element:r,link:l});const i=[];e:for(let r=0;r<s.length;r++){const l=s[r];if(r===0)i.push(l);else{for(let c=r-1;c>=0;c--){const f=s[c];if(f.level<l.level){(f.children||(f.children=[])).push(l);continue e}}i.push(l)}}return i}function bn(s,e){const{isAsideEnabled:t}=mn(),n=Qs(i,100);let o=null;fe(()=>{requestAnimationFrame(i),window.addEventListener("scroll",n)}),Is(()=>{r(location.hash)}),mt(()=>{window.removeEventListener("scroll",n)});function i(){if(!t.value)return;const l=window.scrollY,c=window.innerHeight,f=document.body.offsetHeight,b=Math.abs(l+c-f)<1,m=ht.map(({element:C,link:M})=>({link:M,top:$n(C)})).filter(({top:C})=>!Number.isNaN(C)).sort((C,M)=>C.top-M.top);if(!m.length){r(null);return}if(l<1){r(null);return}if(b){r(m[m.length-1].link);return}let S=null;for(const{link:C,top:M}of m){if(M>l+Hs()+4)break;S=C}r(S)}function r(l){o&&o.classList.remove("active"),l==null?o=null:o=s.value.querySelector(`a[href="${decodeURIComponent(l)}"]`);const c=o;c?(c.classList.add("active"),e.value.style.top=c.offsetTop+39+"px",e.value.style.opacity="1"):(e.value.style.top="33px",e.value.style.opacity="0")}}function $n(s){let e=0;for(;s!==document.body;){if(s===null)return NaN;e+=s.offsetTop,s=s.offsetParent}return e}const yn=["href","title"],kn=y({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(s){function e({target:t}){const n=t.href.split("#")[1],o=document.getElementById(decodeURIComponent(n));o==null||o.focus({preventScroll:!0})}return(t,n)=>{const o=_e("VPDocOutlineItem",!0);return a(),u("ul",{class:T(["VPDocOutlineItem",t.root?"root":"nested"])},[(a(!0),u(N,null,O(t.headers,({children:i,link:r,title:l})=>(a(),u("li",null,[h("a",{class:"outline-link",href:r,onClick:e,title:l},L(l),9,yn),i!=null&&i.length?(a(),x(o,{key:0,headers:i},null,8,["headers"])):_("",!0)]))),256))],2)}}}),is=$(kn,[["__scopeId","data-v-93594584"]]),wn=s=>(Y("data-v-207236d0"),s=s(),J(),s),xn={class:"content"},Pn={class:"outline-title",role:"heading","aria-level":"2"},Sn={"aria-labelledby":"doc-outline-aria-label"},Cn=wn(()=>h("span",{class:"visually-hidden",id:"doc-outline-aria-label"}," Table of Contents for current page ",-1)),An=y({__name:"VPDocAsideOutline",setup(s){const{frontmatter:e,theme:t}=A(),n=Jt([]);Ke(()=>{n.value=bt(e.value.outline??t.value.outline)});const o=E(),i=E();return bn(o,i),(r,l)=>(a(),u("div",{class:T(["VPDocAsideOutline",{"has-outline":n.value.length>0}]),ref_key:"container",ref:o,role:"navigation"},[h("div",xn,[h("div",{class:"outline-marker",ref_key:"marker",ref:i},null,512),h("div",Pn,L(d(os)(d(t))),1),h("nav",Sn,[Cn,g(is,{headers:n.value,root:!0},null,8,["headers"])])])],2))}}),Vn=$(An,[["__scopeId","data-v-207236d0"]]),Ln={class:"VPDocAsideCarbonAds"},Mn=y({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(s){const e=()=>null;return(t,n)=>(a(),u("div",Ln,[g(d(e),{"carbon-ads":t.carbonAds},null,8,["carbon-ads"])]))}}),En=s=>(Y("data-v-bb1eb68e"),s=s(),J(),s),Tn={class:"VPDocAside"},Nn=En(()=>h("div",{class:"spacer"},null,-1)),In=y({__name:"VPDocAside",setup(s){const{theme:e}=A();return(t,n)=>(a(),u("div",Tn,[p(t.$slots,"aside-top",{},void 0,!0),p(t.$slots,"aside-outline-before",{},void 0,!0),g(Vn),p(t.$slots,"aside-outline-after",{},void 0,!0),Nn,p(t.$slots,"aside-ads-before",{},void 0,!0),d(e).carbonAds?(a(),x(Mn,{key:0,"carbon-ads":d(e).carbonAds},null,8,["carbon-ads"])):_("",!0),p(t.$slots,"aside-ads-after",{},void 0,!0),p(t.$slots,"aside-bottom",{},void 0,!0)]))}}),Hn=$(In,[["__scopeId","data-v-bb1eb68e"]]);function zn(){const{theme:s,page:e}=A();return P(()=>{const{text:t="Edit this page",pattern:n=""}=s.value.editLink||{};let o;return typeof n=="function"?o=n(e.value):o=n.replace(/:path/g,e.value.filePath),{url:o,text:t}})}function Bn(){const{page:s,theme:e,frontmatter:t}=A();return P(()=>{var c,f,b,m,S,C,M,I;const n=ns(e.value.sidebar,s.value.relativePath),o=pn(n),i=o.findIndex(V=>he(s.value.relativePath,V.link)),r=((c=e.value.docFooter)==null?void 0:c.prev)===!1&&!t.value.prev||t.value.prev===!1,l=((f=e.value.docFooter)==null?void 0:f.next)===!1&&!t.value.next||t.value.next===!1;return{prev:r?void 0:{text:(typeof t.value.prev=="string"?t.value.prev:typeof t.value.prev=="object"?t.value.prev.text:void 0)??((b=o[i-1])==null?void 0:b.docFooterText)??((m=o[i-1])==null?void 0:m.text),link:(typeof t.value.prev=="object"?t.value.prev.link:void 0)??((S=o[i-1])==null?void 0:S.link)},next:l?void 0:{text:(typeof t.value.next=="string"?t.value.next:typeof t.value.next=="object"?t.value.next.text:void 0)??((C=o[i+1])==null?void 0:C.docFooterText)??((M=o[i+1])==null?void 0:M.text),link:(typeof t.value.next=="object"?t.value.next.link:void 0)??((I=o[i+1])==null?void 0:I.link)}}})}const On={},Rn={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Un=h("path",{d:"M18,23H4c-1.7,0-3-1.3-3-3V6c0-1.7,1.3-3,3-3h7c0.6,0,1,0.4,1,1s-0.4,1-1,1H4C3.4,5,3,5.4,3,6v14c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1v-7c0-0.6,0.4-1,1-1s1,0.4,1,1v7C21,21.7,19.7,23,18,23z"},null,-1),Dn=h("path",{d:"M8,17c-0.3,0-0.5-0.1-0.7-0.3C7,16.5,6.9,16.1,7,15.8l1-4c0-0.2,0.1-0.3,0.3-0.5l9.5-9.5c1.2-1.2,3.2-1.2,4.4,0c1.2,1.2,1.2,3.2,0,4.4l-9.5,9.5c-0.1,0.1-0.3,0.2-0.5,0.3l-4,1C8.2,17,8.1,17,8,17zM9.9,12.5l-0.5,2.1l2.1-0.5l9.3-9.3c0.4-0.4,0.4-1.1,0-1.6c-0.4-0.4-1.2-0.4-1.6,0l0,0L9.9,12.5z M18.5,2.5L18.5,2.5L18.5,2.5z"},null,-1),Fn=[Un,Dn];function jn(s,e){return a(),u("svg",Rn,Fn)}const Gn=$(On,[["render",jn]]),j=y({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(s){const e=s,t=P(()=>e.tag??(e.href?"a":"span")),n=P(()=>e.href&&Zt.test(e.href));return(o,i)=>(a(),x(ue(t.value),{class:T(["VPLink",{link:o.href,"vp-external-link-icon":n.value,"no-icon":o.noIcon}]),href:o.href?d(_t)(o.href):void 0,target:o.target??(n.value?"_blank":void 0),rel:o.rel??(n.value?"noreferrer":void 0)},{default:v(()=>[p(o.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),qn={class:"VPLastUpdated"},Wn=["datetime"],Kn=y({__name:"VPDocFooterLastUpdated",setup(s){const{theme:e,page:t,frontmatter:n,lang:o}=A(),i=P(()=>new Date(n.value.lastUpdated??t.value.lastUpdated)),r=P(()=>i.value.toISOString()),l=E("");return fe(()=>{We(()=>{var c,f,b;l.value=new Intl.DateTimeFormat((f=(c=e.value.lastUpdated)==null?void 0:c.formatOptions)!=null&&f.forceLocale?o.value:void 0,((b=e.value.lastUpdated)==null?void 0:b.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(i.value)})}),(c,f)=>{var b;return a(),u("p",qn,[R(L(((b=d(e).lastUpdated)==null?void 0:b.text)||d(e).lastUpdatedText||"Last updated")+": ",1),h("time",{datetime:r.value},L(l.value),9,Wn)])}}}),Xn=$(Kn,[["__scopeId","data-v-2b1b52a9"]]),Yn={key:0,class:"VPDocFooter"},Jn={key:0,class:"edit-info"},Zn={key:0,class:"edit-link"},Qn={key:1,class:"last-updated"},eo={key:1,class:"prev-next"},to={class:"pager"},so=["innerHTML"],no=["innerHTML"],oo={class:"pager"},io=["innerHTML"],ro=["innerHTML"],ao=y({__name:"VPDocFooter",setup(s){const{theme:e,page:t,frontmatter:n}=A(),o=zn(),i=Bn(),r=P(()=>e.value.editLink&&n.value.editLink!==!1),l=P(()=>t.value.lastUpdated&&n.value.lastUpdated!==!1),c=P(()=>r.value||l.value||i.value.prev||i.value.next);return(f,b)=>{var m,S,C,M;return c.value?(a(),u("footer",Yn,[p(f.$slots,"doc-footer-before",{},void 0,!0),r.value||l.value?(a(),u("div",Jn,[r.value?(a(),u("div",Zn,[g(j,{class:"edit-link-button",href:d(o).url,"no-icon":!0},{default:v(()=>[g(Gn,{class:"edit-link-icon","aria-label":"edit icon"}),R(" "+L(d(o).text),1)]),_:1},8,["href"])])):_("",!0),l.value?(a(),u("div",Qn,[g(Xn)])):_("",!0)])):_("",!0),(m=d(i).prev)!=null&&m.link||(S=d(i).next)!=null&&S.link?(a(),u("nav",eo,[h("div",to,[(C=d(i).prev)!=null&&C.link?(a(),x(j,{key:0,class:"pager-link prev",href:d(i).prev.link},{default:v(()=>{var I;return[h("span",{class:"desc",innerHTML:((I=d(e).docFooter)==null?void 0:I.prev)||"Previous page"},null,8,so),h("span",{class:"title",innerHTML:d(i).prev.text},null,8,no)]}),_:1},8,["href"])):_("",!0)]),h("div",oo,[(M=d(i).next)!=null&&M.link?(a(),x(j,{key:0,class:"pager-link next",href:d(i).next.link},{default:v(()=>{var I;return[h("span",{class:"desc",innerHTML:((I=d(e).docFooter)==null?void 0:I.next)||"Next page"},null,8,io),h("span",{class:"title",innerHTML:d(i).next.text},null,8,ro)]}),_:1},8,["href"])):_("",!0)])])):_("",!0)])):_("",!0)}}}),lo=$(ao,[["__scopeId","data-v-958d153e"]]),co=s=>(Y("data-v-30fbb6ec"),s=s(),J(),s),uo={class:"container"},ho=co(()=>h("div",{class:"aside-curtain"},null,-1)),po={class:"aside-container"},vo={class:"aside-content"},fo={class:"content"},mo={class:"content-container"},_o={class:"main"},go=y({__name:"VPDoc",setup(s){const{theme:e}=A(),t=Xe(),{hasSidebar:n,hasAside:o,leftAside:i}=ee(),r=P(()=>t.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(l,c)=>{const f=_e("Content");return a(),u("div",{class:T(["VPDoc",{"has-sidebar":d(n),"has-aside":d(o)}])},[p(l.$slots,"doc-top",{},void 0,!0),h("div",uo,[d(o)?(a(),u("div",{key:0,class:T(["aside",{"left-aside":d(i)}])},[ho,h("div",po,[h("div",vo,[g(Hn,null,{"aside-top":v(()=>[p(l.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":v(()=>[p(l.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":v(()=>[p(l.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":v(()=>[p(l.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":v(()=>[p(l.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":v(()=>[p(l.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):_("",!0),h("div",fo,[h("div",mo,[p(l.$slots,"doc-before",{},void 0,!0),h("main",_o,[g(f,{class:T(["vp-doc",[r.value,d(e).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),g(lo,null,{"doc-footer-before":v(()=>[p(l.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),p(l.$slots,"doc-after",{},void 0,!0)])])]),p(l.$slots,"doc-bottom",{},void 0,!0)],2)}}}),bo=$(go,[["__scopeId","data-v-30fbb6ec"]]),$o=y({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{}},setup(s){const e=s,t=P(()=>e.href&&Zt.test(e.href)),n=P(()=>e.tag||e.href?"a":"button");return(o,i)=>(a(),x(ue(n.value),{class:T(["VPButton",[o.size,o.theme]]),href:o.href?d(_t)(o.href):void 0,target:t.value?"_blank":void 0,rel:t.value?"noreferrer":void 0},{default:v(()=>[R(L(o.text),1)]),_:1},8,["class","href","target","rel"]))}}),yo=$($o,[["__scopeId","data-v-faef13b1"]]),ko=["src","alt"],wo=y({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(s){return(e,t)=>{const n=_e("VPImage",!0);return e.image?(a(),u(N,{key:0},[typeof e.image=="string"||"src"in e.image?(a(),u("img",ze({key:0,class:"VPImage"},typeof e.image=="string"?e.$attrs:{...e.image,...e.$attrs},{src:d(ft)(typeof e.image=="string"?e.image:e.image.src),alt:e.alt??(typeof e.image=="string"?"":e.image.alt||"")}),null,16,ko)):(a(),u(N,{key:1},[g(n,ze({class:"dark",image:e.image.dark,alt:e.image.alt},e.$attrs),null,16,["image","alt"]),g(n,ze({class:"light",image:e.image.light,alt:e.image.alt},e.$attrs),null,16,["image","alt"])],64))],64)):_("",!0)}}}),De=$(wo,[["__scopeId","data-v-858ab8dd"]]),xo=s=>(Y("data-v-d9aef2c3"),s=s(),J(),s),Po={class:"container"},So={class:"main"},Co={key:0,class:"name"},Ao=["innerHTML"],Vo=["innerHTML"],Lo=["innerHTML"],Mo={key:0,class:"actions"},Eo={key:0,class:"image"},To={class:"image-container"},No=xo(()=>h("div",{class:"image-bg"},null,-1)),Io=y({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(s){const e=Ye("hero-image-slot-exists");return(t,n)=>(a(),u("div",{class:T(["VPHero",{"has-image":t.image||d(e)}])},[h("div",Po,[h("div",So,[p(t.$slots,"home-hero-info",{},()=>[t.name?(a(),u("h1",Co,[h("span",{innerHTML:t.name,class:"clip"},null,8,Ao)])):_("",!0),t.text?(a(),u("p",{key:1,innerHTML:t.text,class:"text"},null,8,Vo)):_("",!0),t.tagline?(a(),u("p",{key:2,innerHTML:t.tagline,class:"tagline"},null,8,Lo)):_("",!0)],!0),t.actions?(a(),u("div",Mo,[(a(!0),u(N,null,O(t.actions,o=>(a(),u("div",{key:o.link,class:"action"},[g(yo,{tag:"a",size:"medium",theme:o.theme,text:o.text,href:o.link},null,8,["theme","text","href"])]))),128))])):_("",!0)]),t.image||d(e)?(a(),u("div",Eo,[h("div",To,[No,p(t.$slots,"home-hero-image",{},()=>[t.image?(a(),x(De,{key:0,class:"image-src",image:t.image},null,8,["image"])):_("",!0)],!0)])])):_("",!0)])],2))}}),Ho=$(Io,[["__scopeId","data-v-d9aef2c3"]]),zo=y({__name:"VPHomeHero",setup(s){const{frontmatter:e}=A();return(t,n)=>d(e).hero?(a(),x(Ho,{key:0,class:"VPHomeHero",name:d(e).hero.name,text:d(e).hero.text,tagline:d(e).hero.tagline,image:d(e).hero.image,actions:d(e).hero.actions},{"home-hero-info":v(()=>[p(t.$slots,"home-hero-info")]),"home-hero-image":v(()=>[p(t.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):_("",!0)}}),Bo={},Oo={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Ro=h("path",{d:"M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z"},null,-1),Uo=[Ro];function Do(s,e){return a(),u("svg",Oo,Uo)}const Fo=$(Bo,[["render",Do]]),jo={class:"box"},Go={key:0,class:"icon"},qo=["innerHTML"],Wo=["innerHTML"],Ko=["innerHTML"],Xo={key:4,class:"link-text"},Yo={class:"link-text-value"},Jo=y({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(s){return(e,t)=>(a(),x(j,{class:"VPFeature",href:e.link,rel:e.rel,target:e.target,"no-icon":!0,tag:e.link?"a":"div"},{default:v(()=>[h("article",jo,[typeof e.icon=="object"&&e.icon.wrap?(a(),u("div",Go,[g(De,{image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])])):typeof e.icon=="object"?(a(),x(De,{key:1,image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])):e.icon?(a(),u("div",{key:2,class:"icon",innerHTML:e.icon},null,8,qo)):_("",!0),h("h2",{class:"title",innerHTML:e.title},null,8,Wo),e.details?(a(),u("p",{key:3,class:"details",innerHTML:e.details},null,8,Ko)):_("",!0),e.linkText?(a(),u("div",Xo,[h("p",Yo,[R(L(e.linkText)+" ",1),g(Fo,{class:"link-text-icon"})])])):_("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),Zo=$(Jo,[["__scopeId","data-v-194f19bf"]]),Qo={key:0,class:"VPFeatures"},ei={class:"container"},ti={class:"items"},si=y({__name:"VPFeatures",props:{features:{}},setup(s){const e=s,t=P(()=>{const n=e.features.length;if(n){if(n===2)return"grid-2";if(n===3)return"grid-3";if(n%3===0)return"grid-6";if(n>3)return"grid-4"}else return});return(n,o)=>n.features?(a(),u("div",Qo,[h("div",ei,[h("div",ti,[(a(!0),u(N,null,O(n.features,i=>(a(),u("div",{key:i.title,class:T(["item",[t.value]])},[g(Zo,{icon:i.icon,title:i.title,details:i.details,link:i.link,"link-text":i.linkText,rel:i.rel,target:i.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):_("",!0)}}),ni=$(si,[["__scopeId","data-v-2cafa537"]]),oi=y({__name:"VPHomeFeatures",setup(s){const{frontmatter:e}=A();return(t,n)=>d(e).features?(a(),x(ni,{key:0,class:"VPHomeFeatures",features:d(e).features},null,8,["features"])):_("",!0)}}),ii={class:"VPHome"},ri=y({__name:"VPHome",setup(s){return(e,t)=>{const n=_e("Content");return a(),u("div",ii,[p(e.$slots,"home-hero-before",{},void 0,!0),g(zo,null,{"home-hero-info":v(()=>[p(e.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-image":v(()=>[p(e.$slots,"home-hero-image",{},void 0,!0)]),_:3}),p(e.$slots,"home-hero-after",{},void 0,!0),p(e.$slots,"home-features-before",{},void 0,!0),g(oi),p(e.$slots,"home-features-after",{},void 0,!0),g(n)])}}}),ai=$(ri,[["__scopeId","data-v-05a34a90"]]),li={},ci={class:"VPPage"};function di(s,e){const t=_e("Content");return a(),u("div",ci,[p(s.$slots,"page-top"),g(t),p(s.$slots,"page-bottom")])}const ui=$(li,[["render",di]]),hi=y({__name:"VPContent",setup(s){const{page:e,frontmatter:t}=A(),{hasSidebar:n}=ee();return(o,i)=>(a(),u("div",{class:T(["VPContent",{"has-sidebar":d(n),"is-home":d(t).layout==="home"}]),id:"VPContent"},[d(e).isNotFound?p(o.$slots,"not-found",{key:0},()=>[g(un)],!0):d(t).layout==="page"?(a(),x(ui,{key:1},{"page-top":v(()=>[p(o.$slots,"page-top",{},void 0,!0)]),"page-bottom":v(()=>[p(o.$slots,"page-bottom",{},void 0,!0)]),_:3})):d(t).layout==="home"?(a(),x(ai,{key:2},{"home-hero-before":v(()=>[p(o.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info":v(()=>[p(o.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-image":v(()=>[p(o.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":v(()=>[p(o.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":v(()=>[p(o.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":v(()=>[p(o.$slots,"home-features-after",{},void 0,!0)]),_:3})):d(t).layout&&d(t).layout!=="doc"?(a(),x(ue(d(t).layout),{key:3})):(a(),x(bo,{key:4},{"doc-top":v(()=>[p(o.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":v(()=>[p(o.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":v(()=>[p(o.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":v(()=>[p(o.$slots,"doc-before",{},void 0,!0)]),"doc-after":v(()=>[p(o.$slots,"doc-after",{},void 0,!0)]),"aside-top":v(()=>[p(o.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":v(()=>[p(o.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":v(()=>[p(o.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":v(()=>[p(o.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":v(()=>[p(o.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":v(()=>[p(o.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),pi=$(hi,[["__scopeId","data-v-b87d9de3"]]),vi={class:"container"},fi=["innerHTML"],mi=["innerHTML"],_i=y({__name:"VPFooter",setup(s){const{theme:e,frontmatter:t}=A(),{hasSidebar:n}=ee();return(o,i)=>d(e).footer&&d(t).footer!==!1?(a(),u("footer",{key:0,class:T(["VPFooter",{"has-sidebar":d(n)}])},[h("div",vi,[d(e).footer.message?(a(),u("p",{key:0,class:"message",innerHTML:d(e).footer.message},null,8,fi)):_("",!0),d(e).footer.copyright?(a(),u("p",{key:1,class:"copyright",innerHTML:d(e).footer.copyright},null,8,mi)):_("",!0)])],2)):_("",!0)}}),gi=$(_i,[["__scopeId","data-v-c9a5a8b8"]]);function rs(){const{theme:s,frontmatter:e}=A(),t=Jt([]),n=P(()=>t.value.length>0);return Ke(()=>{t.value=bt(e.value.outline??s.value.outline)}),{headers:t,hasLocalNav:n}}const bi={},$i={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},yi=h("path",{d:"M9,19c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l5.3-5.3L8.3,6.7c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l6,6c0.4,0.4,0.4,1,0,1.4l-6,6C9.5,18.9,9.3,19,9,19z"},null,-1),ki=[yi];function wi(s,e){return a(),u("svg",$i,ki)}const as=$(bi,[["render",wi]]),xi={class:"header"},Pi={class:"outline"},Si=y({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(s){const e=s,{theme:t}=A(),n=E(!1),o=E(0),i=E(),r=E();zs(i,()=>{n.value=!1}),ct("Escape",()=>{n.value=!1}),Ke(()=>{n.value=!1});function l(){n.value=!n.value,o.value=window.innerHeight+Math.min(window.scrollY-e.navHeight,0)}function c(b){b.target.classList.contains("outline-link")&&(r.value&&(r.value.style.transition="none"),Os(()=>{n.value=!1}))}function f(){n.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(b,m)=>(a(),u("div",{class:"VPLocalNavOutlineDropdown",style:Bs({"--vp-vh":o.value+"px"}),ref_key:"main",ref:i},[b.headers.length>0?(a(),u("button",{key:0,onClick:l,class:T({open:n.value})},[R(L(d(os)(d(t)))+" ",1),g(as,{class:"icon"})],2)):(a(),u("button",{key:1,onClick:f},L(d(t).returnToTopLabel||"Return to top"),1)),g(vt,{name:"flyout"},{default:v(()=>[n.value?(a(),u("div",{key:0,ref_key:"items",ref:r,class:"items",onClick:c},[h("div",xi,[h("a",{class:"top-link",href:"#",onClick:f},L(d(t).returnToTopLabel||"Return to top"),1)]),h("div",Pi,[g(is,{headers:b.headers},null,8,["headers"])])],512)):_("",!0)]),_:1})],4))}}),Ci=$(Si,[["__scopeId","data-v-fe15514d"]]),Ai={},Vi={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},Li=h("path",{d:"M17,11H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,11,17,11z"},null,-1),Mi=h("path",{d:"M21,7H3C2.4,7,2,6.6,2,6s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,7,21,7z"},null,-1),Ei=h("path",{d:"M21,15H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,15,21,15z"},null,-1),Ti=h("path",{d:"M17,19H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,19,17,19z"},null,-1),Ni=[Li,Mi,Ei,Ti];function Ii(s,e){return a(),u("svg",Vi,Ni)}const Hi=$(Ai,[["render",Ii]]),zi={class:"container"},Bi=["aria-expanded"],Oi={class:"menu-text"},Ri=y({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(s){const{theme:e,frontmatter:t}=A(),{hasSidebar:n}=ee(),{headers:o}=rs(),{y:i}=Qt(),r=E(0);fe(()=>{r.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),Ke(()=>{o.value=bt(t.value.outline??e.value.outline)});const l=P(()=>o.value.length===0),c=P(()=>l.value&&!n.value),f=P(()=>({VPLocalNav:!0,"has-sidebar":n.value,empty:l.value,fixed:c.value}));return(b,m)=>d(t).layout!=="home"&&(!c.value||d(i)>=r.value)?(a(),u("div",{key:0,class:T(f.value)},[h("div",zi,[d(n)?(a(),u("button",{key:0,class:"menu","aria-expanded":b.open,"aria-controls":"VPSidebarNav",onClick:m[0]||(m[0]=S=>b.$emit("open-menu"))},[g(Hi,{class:"menu-icon"}),h("span",Oi,L(d(e).sidebarMenuLabel||"Menu"),1)],8,Bi)):_("",!0),g(Ci,{headers:d(o),navHeight:r.value},null,8,["headers","navHeight"])])],2)):_("",!0)}}),Ui=$(Ri,[["__scopeId","data-v-889beffb"]]);function Di(){const s=E(!1);function e(){s.value=!0,window.addEventListener("resize",o)}function t(){s.value=!1,window.removeEventListener("resize",o)}function n(){s.value?t():e()}function o(){window.outerWidth>=768&&t()}const i=Xe();return me(()=>i.path,t),{isScreenOpen:s,openScreen:e,closeScreen:t,toggleScreen:n}}const Fi={},ji={class:"VPSwitch",type:"button",role:"switch"},Gi={class:"check"},qi={key:0,class:"icon"};function Wi(s,e){return a(),u("button",ji,[h("span",Gi,[s.$slots.default?(a(),u("span",qi,[p(s.$slots,"default",{},void 0,!0)])):_("",!0)])])}const Ki=$(Fi,[["render",Wi],["__scopeId","data-v-dd3b874c"]]),Xi={},Yi={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},Ji=h("path",{d:"M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z"},null,-1),Zi=[Ji];function Qi(s,e){return a(),u("svg",Yi,Zi)}const er=$(Xi,[["render",Qi]]),tr={},sr={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},nr=Rs('<path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path><path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path><path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path><path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path><path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path><path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path><path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path><path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path><path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path>',9),or=[nr];function ir(s,e){return a(),u("svg",sr,or)}const rr=$(tr,[["render",ir]]),ar=y({__name:"VPSwitchAppearance",setup(s){const{isDark:e,theme:t}=A(),n=Ye("toggle-appearance",()=>{e.value=!e.value}),o=P(()=>e.value?t.value.lightModeSwitchTitle||"Switch to light theme":t.value.darkModeSwitchTitle||"Switch to dark theme");return(i,r)=>(a(),x(Ki,{title:o.value,class:"VPSwitchAppearance","aria-checked":d(e),onClick:d(n)},{default:v(()=>[g(rr,{class:"sun"}),g(er,{class:"moon"})]),_:1},8,["title","aria-checked","onClick"]))}}),$t=$(ar,[["__scopeId","data-v-97db7747"]]),lr={key:0,class:"VPNavBarAppearance"},cr=y({__name:"VPNavBarAppearance",setup(s){const{site:e}=A();return(t,n)=>d(e).appearance&&d(e).appearance!=="force-dark"?(a(),u("div",lr,[g($t)])):_("",!0)}}),dr=$(cr,[["__scopeId","data-v-25d8dccb"]]),yt=E();let ls=!1,st=0;function ur(s){const e=E(!1);if(xe){!ls&&hr(),st++;const t=me(yt,n=>{var o,i,r;n===s.el.value||(o=s.el.value)!=null&&o.contains(n)?(e.value=!0,(i=s.onFocus)==null||i.call(s)):(e.value=!1,(r=s.onBlur)==null||r.call(s))});mt(()=>{t(),st--,st||pr()})}return Us(e)}function hr(){document.addEventListener("focusin",cs),ls=!0,yt.value=document.activeElement}function pr(){document.removeEventListener("focusin",cs)}function cs(){yt.value=document.activeElement}const vr={},fr={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},mr=h("path",{d:"M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z"},null,-1),_r=[mr];function gr(s,e){return a(),u("svg",fr,_r)}const ds=$(vr,[["render",gr]]),br={},$r={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},yr=h("circle",{cx:"12",cy:"12",r:"2"},null,-1),kr=h("circle",{cx:"19",cy:"12",r:"2"},null,-1),wr=h("circle",{cx:"5",cy:"12",r:"2"},null,-1),xr=[yr,kr,wr];function Pr(s,e){return a(),u("svg",$r,xr)}const Sr=$(br,[["render",Pr]]),Cr={class:"VPMenuLink"},Ar=y({__name:"VPMenuLink",props:{item:{}},setup(s){const{page:e}=A();return(t,n)=>(a(),u("div",Cr,[g(j,{class:T({active:d(he)(d(e).relativePath,t.item.activeMatch||t.item.link,!!t.item.activeMatch)}),href:t.item.link,target:t.item.target,rel:t.item.rel},{default:v(()=>[R(L(t.item.text),1)]),_:1},8,["class","href","target","rel"])]))}}),Je=$(Ar,[["__scopeId","data-v-dcd5b7ea"]]),Vr={class:"VPMenuGroup"},Lr={key:0,class:"title"},Mr=y({__name:"VPMenuGroup",props:{text:{},items:{}},setup(s){return(e,t)=>(a(),u("div",Vr,[e.text?(a(),u("p",Lr,L(e.text),1)):_("",!0),(a(!0),u(N,null,O(e.items,n=>(a(),u(N,null,["link"in n?(a(),x(Je,{key:0,item:n},null,8,["item"])):_("",!0)],64))),256))]))}}),Er=$(Mr,[["__scopeId","data-v-41e38f02"]]),Tr={class:"VPMenu"},Nr={key:0,class:"items"},Ir=y({__name:"VPMenu",props:{items:{}},setup(s){return(e,t)=>(a(),u("div",Tr,[e.items?(a(),u("div",Nr,[(a(!0),u(N,null,O(e.items,n=>(a(),u(N,{key:n.text},["link"in n?(a(),x(Je,{key:0,item:n},null,8,["item"])):(a(),x(Er,{key:1,text:n.text,items:n.items},null,8,["text","items"]))],64))),128))])):_("",!0),p(e.$slots,"default",{},void 0,!0)]))}}),Hr=$(Ir,[["__scopeId","data-v-94a7ac15"]]),zr=["aria-expanded","aria-label"],Br={key:0,class:"text"},Or=["innerHTML"],Rr={class:"menu"},Ur=y({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(s){const e=E(!1),t=E();ur({el:t,onBlur:n});function n(){e.value=!1}return(o,i)=>(a(),u("div",{class:"VPFlyout",ref_key:"el",ref:t,onMouseenter:i[1]||(i[1]=r=>e.value=!0),onMouseleave:i[2]||(i[2]=r=>e.value=!1)},[h("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":e.value,"aria-label":o.label,onClick:i[0]||(i[0]=r=>e.value=!e.value)},[o.button||o.icon?(a(),u("span",Br,[o.icon?(a(),x(ue(o.icon),{key:0,class:"option-icon"})):_("",!0),o.button?(a(),u("span",{key:1,innerHTML:o.button},null,8,Or)):_("",!0),g(ds,{class:"text-icon"})])):(a(),x(Sr,{key:1,class:"icon"}))],8,zr),h("div",Rr,[g(Hr,{items:o.items},{default:v(()=>[p(o.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),kt=$(Ur,[["__scopeId","data-v-2dea9909"]]),Dr={discord:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Discord</title><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>',facebook:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',github:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',instagram:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>',linkedin:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',mastodon:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Mastodon</title><path d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z"/></svg>',slack:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Slack</title><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/></svg>',twitter:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148 13.98 13.98 0 0 0 11.82 8.292a4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z"/></svg>',x:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>',youtube:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>'},Fr=["href","aria-label","innerHTML"],jr=y({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(s){const e=s,t=P(()=>typeof e.icon=="object"?e.icon.svg:Dr[e.icon]);return(n,o)=>(a(),u("a",{class:"VPSocialLink no-icon",href:n.link,"aria-label":n.ariaLabel??(typeof n.icon=="string"?n.icon:""),target:"_blank",rel:"noopener",innerHTML:t.value},null,8,Fr))}}),Gr=$(jr,[["__scopeId","data-v-3709e407"]]),qr={class:"VPSocialLinks"},Wr=y({__name:"VPSocialLinks",props:{links:{}},setup(s){return(e,t)=>(a(),u("div",qr,[(a(!0),u(N,null,O(e.links,({link:n,icon:o,ariaLabel:i})=>(a(),x(Gr,{key:n,icon:o,link:n,ariaLabel:i},null,8,["icon","link","ariaLabel"]))),128))]))}}),Ze=$(Wr,[["__scopeId","data-v-d7dd5a63"]]),Kr={key:0,class:"group translations"},Xr={class:"trans-title"},Yr={key:1,class:"group"},Jr={class:"item appearance"},Zr={class:"label"},Qr={class:"appearance-action"},ea={key:2,class:"group"},ta={class:"item social-links"},sa=y({__name:"VPNavBarExtra",setup(s){const{site:e,theme:t}=A(),{localeLinks:n,currentLang:o}=Ie({correspondingLink:!0}),i=P(()=>n.value.length&&o.value.label||e.value.appearance||t.value.socialLinks);return(r,l)=>i.value?(a(),x(kt,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:v(()=>[d(n).length&&d(o).label?(a(),u("div",Kr,[h("p",Xr,L(d(o).label),1),(a(!0),u(N,null,O(d(n),c=>(a(),x(Je,{key:c.link,item:c},null,8,["item"]))),128))])):_("",!0),d(e).appearance&&d(e).appearance!=="force-dark"?(a(),u("div",Yr,[h("div",Jr,[h("p",Zr,L(d(t).darkModeSwitchLabel||"Appearance"),1),h("div",Qr,[g($t)])])])):_("",!0),d(t).socialLinks?(a(),u("div",ea,[h("div",ta,[g(Ze,{class:"social-links-list",links:d(t).socialLinks},null,8,["links"])])])):_("",!0)]),_:1})):_("",!0)}}),na=$(sa,[["__scopeId","data-v-4585a48a"]]),oa=s=>(Y("data-v-85120192"),s=s(),J(),s),ia=["aria-expanded"],ra=oa(()=>h("span",{class:"container"},[h("span",{class:"top"}),h("span",{class:"middle"}),h("span",{class:"bottom"})],-1)),aa=[ra],la=y({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(s){return(e,t)=>(a(),u("button",{type:"button",class:T(["VPNavBarHamburger",{active:e.active}]),"aria-label":"mobile navigation","aria-expanded":e.active,"aria-controls":"VPNavScreen",onClick:t[0]||(t[0]=n=>e.$emit("click"))},aa,10,ia))}}),ca=$(la,[["__scopeId","data-v-85120192"]]),da=["innerHTML"],ua=y({__name:"VPNavBarMenuLink",props:{item:{}},setup(s){const{page:e}=A();return(t,n)=>(a(),x(j,{class:T({VPNavBarMenuLink:!0,active:d(he)(d(e).relativePath,t.item.activeMatch||t.item.link,!!t.item.activeMatch)}),href:t.item.link,target:t.item.target,rel:t.item.rel,tabindex:"0"},{default:v(()=>[h("span",{innerHTML:t.item.text},null,8,da)]),_:1},8,["class","href","target","rel"]))}}),ha=$(ua,[["__scopeId","data-v-fac5fcc9"]]),pa=y({__name:"VPNavBarMenuGroup",props:{item:{}},setup(s){const e=s,{page:t}=A(),n=i=>"link"in i?he(t.value.relativePath,i.link,!!e.item.activeMatch):i.items.some(n),o=P(()=>n(e.item));return(i,r)=>(a(),x(kt,{class:T({VPNavBarMenuGroup:!0,active:d(he)(d(t).relativePath,i.item.activeMatch,!!i.item.activeMatch)||o.value}),button:i.item.text,items:i.item.items},null,8,["class","button","items"]))}}),va=s=>(Y("data-v-19a25a12"),s=s(),J(),s),fa={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},ma=va(()=>h("span",{id:"main-nav-aria-label",class:"visually-hidden"},"Main Navigation",-1)),_a=y({__name:"VPNavBarMenu",setup(s){const{theme:e}=A();return(t,n)=>d(e).nav?(a(),u("nav",fa,[ma,(a(!0),u(N,null,O(d(e).nav,o=>(a(),u(N,{key:o.text},["link"in o?(a(),x(ha,{key:0,item:o},null,8,["item"])):(a(),x(pa,{key:1,item:o},null,8,["item"]))],64))),128))])):_("",!0)}}),ga=$(_a,[["__scopeId","data-v-19a25a12"]]);function ba(s){const{localeIndex:e,theme:t}=A();function n(o){var M,I,V;const i=o.split("."),r=(M=t.value.search)==null?void 0:M.options,l=r&&typeof r=="object",c=l&&((V=(I=r.locales)==null?void 0:I[e.value])==null?void 0:V.translations)||null,f=l&&r.translations||null;let b=c,m=f,S=s;const C=i.pop();for(const X of i){let te=null;const ge=S==null?void 0:S[X];ge&&(te=S=ge);const et=m==null?void 0:m[X];et&&(te=m=et);const tt=b==null?void 0:b[X];tt&&(te=b=tt),ge||(S=te),et||(m=te),tt||(b=te)}return(b==null?void 0:b[C])??(m==null?void 0:m[C])??(S==null?void 0:S[C])??""}return n}const $a=["aria-label"],ya={class:"DocSearch-Button-Container"},ka=h("svg",{class:"DocSearch-Search-Icon",width:"20",height:"20",viewBox:"0 0 20 20","aria-label":"search icon"},[h("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none","fill-rule":"evenodd","stroke-linecap":"round","stroke-linejoin":"round"})],-1),wa={class:"DocSearch-Button-Placeholder"},xa=h("span",{class:"DocSearch-Button-Keys"},[h("kbd",{class:"DocSearch-Button-Key"}),h("kbd",{class:"DocSearch-Button-Key"},"K")],-1),Lt=y({__name:"VPNavBarSearchButton",setup(s){const t=ba({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(n,o)=>(a(),u("button",{type:"button",class:"DocSearch DocSearch-Button","aria-label":d(t)("button.buttonAriaLabel")},[h("span",ya,[ka,h("span",wa,L(d(t)("button.buttonText")),1)]),xa],8,$a))}}),Pa={class:"VPNavBarSearch"},Sa={id:"local-search"},Ca={key:1,id:"docsearch"},Aa=y({__name:"VPNavBarSearch",setup(s){const e=Ds(()=>es(()=>import("./VPLocalSearchBox.PCBIuFfh.js"),__vite__mapDeps([0,1]))),t=()=>null,{theme:n}=A(),o=E(!1),i=E(!1);fe(()=>{});function r(){o.value||(o.value=!0,setTimeout(l,16))}function l(){const m=new Event("keydown");m.key="k",m.metaKey=!0,window.dispatchEvent(m),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||l()},16)}function c(m){const S=m.target,C=S.tagName;return S.isContentEditable||C==="INPUT"||C==="SELECT"||C==="TEXTAREA"}const f=E(!1);ct("k",m=>{(m.ctrlKey||m.metaKey)&&(m.preventDefault(),f.value=!0)}),ct("/",m=>{c(m)||(m.preventDefault(),f.value=!0)});const b="local";return(m,S)=>{var C;return a(),u("div",Pa,[d(b)==="local"?(a(),u(N,{key:0},[f.value?(a(),x(d(e),{key:0,onClose:S[0]||(S[0]=M=>f.value=!1)})):_("",!0),h("div",Sa,[g(Lt,{onClick:S[1]||(S[1]=M=>f.value=!0)})])],64)):d(b)==="algolia"?(a(),u(N,{key:1},[o.value?(a(),x(d(t),{key:0,algolia:((C=d(n).search)==null?void 0:C.options)??d(n).algolia,onVnodeBeforeMount:S[2]||(S[2]=M=>i.value=!0)},null,8,["algolia"])):_("",!0),i.value?_("",!0):(a(),u("div",Ca,[g(Lt,{onClick:r})]))],64)):_("",!0)])}}}),Va=y({__name:"VPNavBarSocialLinks",setup(s){const{theme:e}=A();return(t,n)=>d(e).socialLinks?(a(),x(Ze,{key:0,class:"VPNavBarSocialLinks",links:d(e).socialLinks},null,8,["links"])):_("",!0)}}),La=$(Va,[["__scopeId","data-v-dbbf6902"]]),Ma=["href","rel","target"],Ea=y({__name:"VPNavBarTitle",setup(s){const{site:e,theme:t}=A(),{hasSidebar:n}=ee(),{currentLang:o}=Ie(),i=P(()=>{var c;return typeof t.value.logoLink=="string"?t.value.logoLink:(c=t.value.logoLink)==null?void 0:c.link}),r=P(()=>{var c;return typeof t.value.logoLink=="string"||(c=t.value.logoLink)==null?void 0:c.rel}),l=P(()=>{var c;return typeof t.value.logoLink=="string"||(c=t.value.logoLink)==null?void 0:c.target});return(c,f)=>(a(),u("div",{class:T(["VPNavBarTitle",{"has-sidebar":d(n)}])},[h("a",{class:"title",href:i.value??d(_t)(d(o).link),rel:r.value,target:l.value},[p(c.$slots,"nav-bar-title-before",{},void 0,!0),d(t).logo?(a(),x(De,{key:0,class:"logo",image:d(t).logo},null,8,["image"])):_("",!0),d(t).siteTitle?(a(),u(N,{key:1},[R(L(d(t).siteTitle),1)],64)):d(t).siteTitle===void 0?(a(),u(N,{key:2},[R(L(d(e).title),1)],64)):_("",!0),p(c.$slots,"nav-bar-title-after",{},void 0,!0)],8,Ma)],2))}}),Ta=$(Ea,[["__scopeId","data-v-0d305c84"]]),Na={},Ia={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},Ha=h("path",{d:"M0 0h24v24H0z",fill:"none"},null,-1),za=h("path",{d:" M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z ",class:"css-c4d79v"},null,-1),Ba=[Ha,za];function Oa(s,e){return a(),u("svg",Ia,Ba)}const us=$(Na,[["render",Oa]]),Ra={class:"items"},Ua={class:"title"},Da=y({__name:"VPNavBarTranslations",setup(s){const{theme:e}=A(),{localeLinks:t,currentLang:n}=Ie({correspondingLink:!0});return(o,i)=>d(t).length&&d(n).label?(a(),x(kt,{key:0,class:"VPNavBarTranslations",icon:us,label:d(e).langMenuLabel||"Change language"},{default:v(()=>[h("div",Ra,[h("p",Ua,L(d(n).label),1),(a(!0),u(N,null,O(d(t),r=>(a(),x(Je,{key:r.link,item:r},null,8,["item"]))),128))])]),_:1},8,["label"])):_("",!0)}}),Fa=$(Da,[["__scopeId","data-v-527b90ee"]]),ja=s=>(Y("data-v-111cf943"),s=s(),J(),s),Ga={class:"wrapper"},qa={class:"container"},Wa={class:"title"},Ka={class:"content"},Xa={class:"content-body"},Ya=ja(()=>h("div",{class:"divider"},[h("div",{class:"divider-line"})],-1)),Ja=y({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(s){const{y:e}=Qt(),{hasSidebar:t}=ee(),{hasLocalNav:n}=rs(),{frontmatter:o}=A(),i=E({});return Yt(()=>{i.value={"has-sidebar":t.value,"has-local-nav":n.value,top:o.value.layout==="home"&&e.value===0}}),(r,l)=>(a(),u("div",{class:T(["VPNavBar",i.value])},[h("div",Ga,[h("div",qa,[h("div",Wa,[g(Ta,null,{"nav-bar-title-before":v(()=>[p(r.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":v(()=>[p(r.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),h("div",Ka,[h("div",Xa,[p(r.$slots,"nav-bar-content-before",{},void 0,!0),g(Aa,{class:"search"}),g(ga,{class:"menu"}),g(Fa,{class:"translations"}),g(dr,{class:"appearance"}),g(La,{class:"social-links"}),g(na,{class:"extra"}),p(r.$slots,"nav-bar-content-after",{},void 0,!0),g(ca,{class:"hamburger",active:r.isScreenOpen,onClick:l[0]||(l[0]=c=>r.$emit("toggle-screen"))},null,8,["active"])])])])]),Ya],2))}}),Za=$(Ja,[["__scopeId","data-v-111cf943"]]),Qa={key:0,class:"VPNavScreenAppearance"},el={class:"text"},tl=y({__name:"VPNavScreenAppearance",setup(s){const{site:e,theme:t}=A();return(n,o)=>d(e).appearance&&d(e).appearance!=="force-dark"?(a(),u("div",Qa,[h("p",el,L(d(t).darkModeSwitchLabel||"Appearance"),1),g($t)])):_("",!0)}}),sl=$(tl,[["__scopeId","data-v-bf5610c8"]]),nl=y({__name:"VPNavScreenMenuLink",props:{item:{}},setup(s){const e=Ye("close-screen");return(t,n)=>(a(),x(j,{class:"VPNavScreenMenuLink",href:t.item.link,target:t.item.target,rel:t.item.rel,onClick:d(e)},{default:v(()=>[R(L(t.item.text),1)]),_:1},8,["href","target","rel","onClick"]))}}),ol=$(nl,[["__scopeId","data-v-14359941"]]),il={},rl={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},al=h("path",{d:"M18.9,10.9h-6v-6c0-0.6-0.4-1-1-1s-1,0.4-1,1v6h-6c-0.6,0-1,0.4-1,1s0.4,1,1,1h6v6c0,0.6,0.4,1,1,1s1-0.4,1-1v-6h6c0.6,0,1-0.4,1-1S19.5,10.9,18.9,10.9z"},null,-1),ll=[al];function cl(s,e){return a(),u("svg",rl,ll)}const dl=$(il,[["render",cl]]),ul=y({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(s){const e=Ye("close-screen");return(t,n)=>(a(),x(j,{class:"VPNavScreenMenuGroupLink",href:t.item.link,target:t.item.target,rel:t.item.rel,onClick:d(e)},{default:v(()=>[R(L(t.item.text),1)]),_:1},8,["href","target","rel","onClick"]))}}),hs=$(ul,[["__scopeId","data-v-f419dd38"]]),hl={class:"VPNavScreenMenuGroupSection"},pl={key:0,class:"title"},vl=y({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(s){return(e,t)=>(a(),u("div",hl,[e.text?(a(),u("p",pl,L(e.text),1)):_("",!0),(a(!0),u(N,null,O(e.items,n=>(a(),x(hs,{key:n.text,item:n},null,8,["item"]))),128))]))}}),fl=$(vl,[["__scopeId","data-v-21debebd"]]),ml=["aria-controls","aria-expanded"],_l=["innerHTML"],gl=["id"],bl={key:1,class:"group"},$l=y({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(s){const e=s,t=E(!1),n=P(()=>`NavScreenGroup-${e.text.replace(" ","-").toLowerCase()}`);function o(){t.value=!t.value}return(i,r)=>(a(),u("div",{class:T(["VPNavScreenMenuGroup",{open:t.value}])},[h("button",{class:"button","aria-controls":n.value,"aria-expanded":t.value,onClick:o},[h("span",{class:"button-text",innerHTML:i.text},null,8,_l),g(dl,{class:"button-icon"})],8,ml),h("div",{id:n.value,class:"items"},[(a(!0),u(N,null,O(i.items,l=>(a(),u(N,{key:l.text},["link"in l?(a(),u("div",{key:l.text,class:"item"},[g(hs,{item:l},null,8,["item"])])):(a(),u("div",bl,[g(fl,{text:l.text,items:l.items},null,8,["text","items"])]))],64))),128))],8,gl)],2))}}),yl=$($l,[["__scopeId","data-v-cdcc966a"]]),kl={key:0,class:"VPNavScreenMenu"},wl=y({__name:"VPNavScreenMenu",setup(s){const{theme:e}=A();return(t,n)=>d(e).nav?(a(),u("nav",kl,[(a(!0),u(N,null,O(d(e).nav,o=>(a(),u(N,{key:o.text},["link"in o?(a(),x(ol,{key:0,item:o},null,8,["item"])):(a(),x(yl,{key:1,text:o.text||"",items:o.items},null,8,["text","items"]))],64))),128))])):_("",!0)}}),xl=y({__name:"VPNavScreenSocialLinks",setup(s){const{theme:e}=A();return(t,n)=>d(e).socialLinks?(a(),x(Ze,{key:0,class:"VPNavScreenSocialLinks",links:d(e).socialLinks},null,8,["links"])):_("",!0)}}),Pl={class:"list"},Sl=y({__name:"VPNavScreenTranslations",setup(s){const{localeLinks:e,currentLang:t}=Ie({correspondingLink:!0}),n=E(!1);function o(){n.value=!n.value}return(i,r)=>d(e).length&&d(t).label?(a(),u("div",{key:0,class:T(["VPNavScreenTranslations",{open:n.value}])},[h("button",{class:"title",onClick:o},[g(us,{class:"icon lang"}),R(" "+L(d(t).label)+" ",1),g(ds,{class:"icon chevron"})]),h("ul",Pl,[(a(!0),u(N,null,O(d(e),l=>(a(),u("li",{key:l.link,class:"item"},[g(j,{class:"link",href:l.link},{default:v(()=>[R(L(l.text),1)]),_:2},1032,["href"])]))),128))])],2)):_("",!0)}}),Cl=$(Sl,[["__scopeId","data-v-728dd1d2"]]),Al={class:"container"},Vl=y({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(s){const e=E(null),t=ts(xe?document.body:null);return(n,o)=>(a(),x(vt,{name:"fade",onEnter:o[0]||(o[0]=i=>t.value=!0),onAfterLeave:o[1]||(o[1]=i=>t.value=!1)},{default:v(()=>[n.open?(a(),u("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:e,id:"VPNavScreen"},[h("div",Al,[p(n.$slots,"nav-screen-content-before",{},void 0,!0),g(wl,{class:"menu"}),g(Cl,{class:"translations"}),g(sl,{class:"appearance"}),g(xl,{class:"social-links"}),p(n.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):_("",!0)]),_:3}))}}),Ll=$(Vl,[["__scopeId","data-v-8c15e03e"]]),Ml={key:0,class:"VPNav"},El=y({__name:"VPNav",setup(s){const{isScreenOpen:e,closeScreen:t,toggleScreen:n}=Di(),{frontmatter:o}=A(),i=P(()=>o.value.navbar!==!1);return ss("close-screen",t),We(()=>{xe&&document.documentElement.classList.toggle("hide-nav",!i.value)}),(r,l)=>i.value?(a(),u("header",Ml,[g(Za,{"is-screen-open":d(e),onToggleScreen:d(n)},{"nav-bar-title-before":v(()=>[p(r.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":v(()=>[p(r.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":v(()=>[p(r.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":v(()=>[p(r.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),g(Ll,{open:d(e)},{"nav-screen-content-before":v(()=>[p(r.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":v(()=>[p(r.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):_("",!0)}}),Tl=$(El,[["__scopeId","data-v-9ed9410e"]]),Nl=s=>(Y("data-v-2f8ec882"),s=s(),J(),s),Il=["role","tabindex"],Hl=Nl(()=>h("div",{class:"indicator"},null,-1)),zl={key:1,class:"items"},Bl=y({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(s){const e=s,{collapsed:t,collapsible:n,isLink:o,isActiveLink:i,hasActiveLink:r,hasChildren:l,toggle:c}=fn(P(()=>e.item)),f=P(()=>l.value?"section":"div"),b=P(()=>o.value?"a":"div"),m=P(()=>l.value?e.depth+2===7?"p":`h${e.depth+2}`:"p"),S=P(()=>o.value?void 0:"button"),C=P(()=>[[`level-${e.depth}`],{collapsible:n.value},{collapsed:t.value},{"is-link":o.value},{"is-active":i.value},{"has-active":r.value}]);function M(V){"key"in V&&V.key!=="Enter"||!e.item.link&&c()}function I(){e.item.link&&c()}return(V,X)=>{const te=_e("VPSidebarItem",!0);return a(),x(ue(f.value),{class:T(["VPSidebarItem",C.value])},{default:v(()=>[V.item.text?(a(),u("div",ze({key:0,class:"item",role:S.value},Fs(V.item.items?{click:M,keydown:M}:{},!0),{tabindex:V.item.items&&0}),[Hl,V.item.link?(a(),x(j,{key:0,tag:b.value,class:"link",href:V.item.link,rel:V.item.rel,target:V.item.target},{default:v(()=>[(a(),x(ue(m.value),{class:"text",innerHTML:V.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(a(),x(ue(m.value),{key:1,class:"text",innerHTML:V.item.text},null,8,["innerHTML"])),V.item.collapsed!=null?(a(),u("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:I,onKeydown:js(I,["enter"]),tabindex:"0"},[g(as,{class:"caret-icon"})],32)):_("",!0)],16,Il)):_("",!0),V.item.items&&V.item.items.length?(a(),u("div",zl,[V.depth<5?(a(!0),u(N,{key:0},O(V.item.items,ge=>(a(),x(te,{key:ge.text,item:ge,depth:V.depth+1},null,8,["item","depth"]))),128)):_("",!0)])):_("",!0)]),_:1},8,["class"])}}}),Ol=$(Bl,[["__scopeId","data-v-2f8ec882"]]),ps=s=>(Y("data-v-e77872a5"),s=s(),J(),s),Rl=ps(()=>h("div",{class:"curtain"},null,-1)),Ul={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},Dl=ps(()=>h("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),Fl=y({__name:"VPSidebar",props:{open:{type:Boolean}},setup(s){const{sidebarGroups:e,hasSidebar:t}=ee(),n=s,o=E(null),i=ts(xe?document.body:null);return me([n,o],()=>{var r;n.open?(i.value=!0,(r=o.value)==null||r.focus()):i.value=!1},{immediate:!0,flush:"post"}),(r,l)=>d(t)?(a(),u("aside",{key:0,class:T(["VPSidebar",{open:r.open}]),ref_key:"navEl",ref:o,onClick:l[0]||(l[0]=Gs(()=>{},["stop"]))},[Rl,h("nav",Ul,[Dl,p(r.$slots,"sidebar-nav-before",{},void 0,!0),(a(!0),u(N,null,O(d(e),c=>(a(),u("div",{key:c.text,class:"group"},[g(Ol,{item:c,depth:0},null,8,["item"])]))),128)),p(r.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):_("",!0)}}),jl=$(Fl,[["__scopeId","data-v-e77872a5"]]),Gl=y({__name:"VPSkipLink",setup(s){const e=Xe(),t=E();me(()=>e.path,()=>t.value.focus());function n({target:o}){const i=document.getElementById(decodeURIComponent(o.hash).slice(1));if(i){const r=()=>{i.removeAttribute("tabindex"),i.removeEventListener("blur",r)};i.setAttribute("tabindex","-1"),i.addEventListener("blur",r),i.focus(),window.scrollTo(0,0)}}return(o,i)=>(a(),u(N,null,[h("span",{ref_key:"backToTop",ref:t,tabindex:"-1"},null,512),h("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:n}," Skip to content ")],64))}}),ql=$(Gl,[["__scopeId","data-v-2d60c9ca"]]),Wl=y({__name:"Layout",setup(s){const{isOpen:e,open:t,close:n}=ee(),o=Xe();me(()=>o.path,n),vn(e,n);const{frontmatter:i}=A(),r=qs(),l=P(()=>!!r["home-hero-image"]);return ss("hero-image-slot-exists",l),(c,f)=>{const b=_e("Content");return d(i).layout!==!1?(a(),u("div",{key:0,class:T(["Layout",d(i).pageClass])},[p(c.$slots,"layout-top",{},void 0,!0),g(ql),g(Zs,{class:"backdrop",show:d(e),onClick:d(n)},null,8,["show","onClick"]),g(Tl,null,{"nav-bar-title-before":v(()=>[p(c.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":v(()=>[p(c.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":v(()=>[p(c.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":v(()=>[p(c.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":v(()=>[p(c.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":v(()=>[p(c.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),g(Ui,{open:d(e),onOpenMenu:d(t)},null,8,["open","onOpenMenu"]),g(jl,{open:d(e)},{"sidebar-nav-before":v(()=>[p(c.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":v(()=>[p(c.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),g(pi,null,{"page-top":v(()=>[p(c.$slots,"page-top",{},void 0,!0)]),"page-bottom":v(()=>[p(c.$slots,"page-bottom",{},void 0,!0)]),"not-found":v(()=>[p(c.$slots,"not-found",{},void 0,!0)]),"home-hero-before":v(()=>[p(c.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info":v(()=>[p(c.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-image":v(()=>[p(c.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":v(()=>[p(c.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":v(()=>[p(c.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":v(()=>[p(c.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":v(()=>[p(c.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":v(()=>[p(c.$slots,"doc-before",{},void 0,!0)]),"doc-after":v(()=>[p(c.$slots,"doc-after",{},void 0,!0)]),"doc-top":v(()=>[p(c.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":v(()=>[p(c.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":v(()=>[p(c.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":v(()=>[p(c.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":v(()=>[p(c.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":v(()=>[p(c.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":v(()=>[p(c.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":v(()=>[p(c.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),g(gi),p(c.$slots,"layout-bottom",{},void 0,!0)],2)):(a(),x(b,{key:1}))}}}),Kl=$(Wl,[["__scopeId","data-v-9d733402"]]),Xl={},Yl={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Jl=h("path",{d:"M12,22.2c-0.3,0-0.5-0.1-0.7-0.3l-8.8-8.8c-2.5-2.5-2.5-6.7,0-9.2c2.5-2.5,6.7-2.5,9.2,0L12,4.3l0.4-0.4c0,0,0,0,0,0C13.6,2.7,15.2,2,16.9,2c0,0,0,0,0,0c1.7,0,3.4,0.7,4.6,1.9l0,0c1.2,1.2,1.9,2.9,1.9,4.6c0,1.7-0.7,3.4-1.9,4.6l-8.8,8.8C12.5,22.1,12.3,22.2,12,22.2zM7,4C5.9,4,4.7,4.4,3.9,5.3c-1.8,1.8-1.8,4.6,0,6.4l8.1,8.1l8.1-8.1c0.9-0.9,1.3-2,1.3-3.2c0-1.2-0.5-2.3-1.3-3.2l0,0C19.3,4.5,18.2,4,17,4c0,0,0,0,0,0c-1.2,0-2.3,0.5-3.2,1.3c0,0,0,0,0,0l-1.1,1.1c-0.4,0.4-1,0.4-1.4,0l-1.1-1.1C9.4,4.4,8.2,4,7,4z"},null,-1),Zl=[Jl];function Ql(s,e){return a(),u("svg",Yl,Zl)}const ec=$(Xl,[["render",Ql]]),tc={},sc={class:"VPTeamPage"};function nc(s,e){return a(),u("div",sc,[p(s.$slots,"default")])}const nd=$(tc,[["render",nc],["__scopeId","data-v-d3cc1b8b"]]),oc={},ic={class:"VPTeamPageTitle"},rc={key:0,class:"title"},ac={key:1,class:"lead"};function lc(s,e){return a(),u("div",ic,[s.$slots.title?(a(),u("h1",rc,[p(s.$slots,"title",{},void 0,!0)])):_("",!0),s.$slots.lead?(a(),u("p",ac,[p(s.$slots,"lead",{},void 0,!0)])):_("",!0)])}const od=$(oc,[["render",lc],["__scopeId","data-v-c4969e73"]]),cc={class:"profile"},dc={class:"avatar"},uc=["src","alt"],hc={class:"data"},pc={class:"name"},vc={key:0,class:"affiliation"},fc={key:0,class:"title"},mc={key:1,class:"at"},_c=["innerHTML"],gc={key:2,class:"links"},bc={key:0,class:"sp"},$c=y({__name:"VPTeamMembersItem",props:{size:{default:"medium"},member:{}},setup(s){return(e,t)=>(a(),u("article",{class:T(["VPTeamMembersItem",[e.size]])},[h("div",cc,[h("figure",dc,[h("img",{class:"avatar-img",src:e.member.avatar,alt:e.member.name},null,8,uc)]),h("div",hc,[h("h1",pc,L(e.member.name),1),e.member.title||e.member.org?(a(),u("p",vc,[e.member.title?(a(),u("span",fc,L(e.member.title),1)):_("",!0),e.member.title&&e.member.org?(a(),u("span",mc," @ ")):_("",!0),e.member.org?(a(),x(j,{key:2,class:T(["org",{link:e.member.orgLink}]),href:e.member.orgLink,"no-icon":""},{default:v(()=>[R(L(e.member.org),1)]),_:1},8,["class","href"])):_("",!0)])):_("",!0),e.member.desc?(a(),u("p",{key:1,class:"desc",innerHTML:e.member.desc},null,8,_c)):_("",!0),e.member.links?(a(),u("div",gc,[g(Ze,{links:e.member.links},null,8,["links"])])):_("",!0)])]),e.member.sponsor?(a(),u("div",bc,[g(j,{class:"sp-link",href:e.member.sponsor,"no-icon":""},{default:v(()=>[g(ec,{class:"sp-icon"}),R(" "+L(e.member.actionText||"Sponsor"),1)]),_:1},8,["href"])])):_("",!0)],2))}}),yc=$($c,[["__scopeId","data-v-a8a345f7"]]),kc={class:"container"},wc=y({__name:"VPTeamMembers",props:{size:{default:"medium"},members:{}},setup(s){const e=s,t=P(()=>[e.size,`count-${e.members.length}`]);return(n,o)=>(a(),u("div",{class:T(["VPTeamMembers",t.value])},[h("div",kc,[(a(!0),u(N,null,O(n.members,i=>(a(),u("div",{key:i.name,class:"item"},[g(yc,{size:n.size,member:i},null,8,["size","member"])]))),128))])],2))}}),id=$(wc,[["__scopeId","data-v-788315cd"]]),Mt={Layout:Kl,enhanceApp:({app:s})=>{s.component("Badge",Xs)}};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oe=globalThis,wt=Oe.ShadowRoot&&(Oe.ShadyCSS===void 0||Oe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,xt=Symbol(),Et=new WeakMap;let vs=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==xt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(wt&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=Et.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Et.set(t,e))}return e}toString(){return this.cssText}};const W=s=>new vs(typeof s=="string"?s:s+"",void 0,xt),K=(s,...e)=>{const t=s.length===1?s[0]:e.reduce((n,o,i)=>n+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+s[i+1],s[0]);return new vs(t,s,xt)},xc=(s,e)=>{if(wt)s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const n=document.createElement("style"),o=Oe.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=t.cssText,s.appendChild(n)}},Tt=wt?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return W(t)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Pc,defineProperty:Sc,getOwnPropertyDescriptor:Cc,getOwnPropertyNames:Ac,getOwnPropertySymbols:Vc,getPrototypeOf:Lc}=Object,ie=globalThis,Nt=ie.trustedTypes,Mc=Nt?Nt.emptyScript:"",nt=ie.reactiveElementPolyfillSupport,Ae=(s,e)=>s,Fe={toAttribute(s,e){switch(e){case Boolean:s=s?Mc:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},Pt=(s,e)=>!Pc(s,e),It={attribute:!0,type:String,converter:Fe,reflect:!1,hasChanged:Pt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),ie.litPropertyMetadata??(ie.litPropertyMetadata=new WeakMap);class be extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=It){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(e,n,t);o!==void 0&&Sc(this.prototype,e,o)}}static getPropertyDescriptor(e,t,n){const{get:o,set:i}=Cc(this.prototype,e)??{get(){return this[t]},set(r){this[t]=r}};return{get(){return o==null?void 0:o.call(this)},set(r){const l=o==null?void 0:o.call(this);i.call(this,r),this.requestUpdate(e,l,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??It}static _$Ei(){if(this.hasOwnProperty(Ae("elementProperties")))return;const e=Lc(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Ae("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ae("properties"))){const t=this.properties,n=[...Ac(t),...Vc(t)];for(const o of n)this.createProperty(o,t[o])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[n,o]of t)this.elementProperties.set(n,o)}this._$Eh=new Map;for(const[t,n]of this.elementProperties){const o=this._$Eu(t,n);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const o of n)t.unshift(Tt(o))}else e!==void 0&&t.push(Tt(e));return t}static _$Eu(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$Eg=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$ES(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$E_??(this._$E_=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$E_)==null||t.delete(e)}_$ES(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return xc(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$E_)==null||e.forEach(t=>{var n;return(n=t.hostConnected)==null?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$E_)==null||e.forEach(t=>{var n;return(n=t.hostDisconnected)==null?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EO(e,t){var i;const n=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,n);if(o!==void 0&&n.reflect===!0){const r=(((i=n.converter)==null?void 0:i.toAttribute)!==void 0?n.converter:Fe).toAttribute(t,n.type);this._$Em=e,r==null?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(e,t){var i;const n=this.constructor,o=n._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const r=n.getPropertyOptions(o),l=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)==null?void 0:i.fromAttribute)!==void 0?r.converter:Fe;this._$Em=o,this[o]=l.fromAttribute(t,r.type),this._$Em=null}}requestUpdate(e,t,n){if(e!==void 0){if(n??(n=this.constructor.getPropertyOptions(e)),!(n.hasChanged??Pt)(this[e],t))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(e,t,n){this._$AL.has(e)||this._$AL.set(e,t),n.reflect===!0&&this._$Em!==e&&(this._$ET??(this._$ET=new Set)).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,r]of this._$Ep)this[i]=r;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[i,r]of o)r.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.C(i,this[i],r)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(n=this._$E_)==null||n.forEach(o=>{var i;return(i=o.hostUpdate)==null?void 0:i.call(o)}),this.update(t)):this._$Ej()}catch(o){throw e=!1,this._$Ej(),o}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$E_)==null||t.forEach(n=>{var o;return(o=n.hostUpdated)==null?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ej(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$ET&&(this._$ET=this._$ET.forEach(t=>this._$EO(t,this[t]))),this._$Ej()}updated(e){}firstUpdated(e){}}be.elementStyles=[],be.shadowRootOptions={mode:"open"},be[Ae("elementProperties")]=new Map,be[Ae("finalized")]=new Map,nt==null||nt({ReactiveElement:be}),(ie.reactiveElementVersions??(ie.reactiveElementVersions=[])).push("2.0.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ve=globalThis,je=Ve.trustedTypes,Ht=je?je.createPolicy("lit-html",{createHTML:s=>s}):void 0,fs="$lit$",oe=`lit$${(Math.random()+"").slice(9)}$`,ms="?"+oe,Ec=`<${ms}>`,pe=document,Te=()=>pe.createComment(""),Ne=s=>s===null||typeof s!="object"&&typeof s!="function",_s=Array.isArray,Tc=s=>_s(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",ot=`[ 	
\f\r]`,Se=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,zt=/-->/g,Bt=/>/g,re=RegExp(`>|${ot}(?:([^\\s"'>=/]+)(${ot}*=${ot}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ot=/'/g,Rt=/"/g,gs=/^(?:script|style|textarea|title)$/i,Nc=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),z=Nc(1),ve=Symbol.for("lit-noChange"),H=Symbol.for("lit-nothing"),Ut=new WeakMap,de=pe.createTreeWalker(pe,129);function bs(s,e){if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ht!==void 0?Ht.createHTML(e):e}const Ic=(s,e)=>{const t=s.length-1,n=[];let o,i=e===2?"<svg>":"",r=Se;for(let l=0;l<t;l++){const c=s[l];let f,b,m=-1,S=0;for(;S<c.length&&(r.lastIndex=S,b=r.exec(c),b!==null);)S=r.lastIndex,r===Se?b[1]==="!--"?r=zt:b[1]!==void 0?r=Bt:b[2]!==void 0?(gs.test(b[2])&&(o=RegExp("</"+b[2],"g")),r=re):b[3]!==void 0&&(r=re):r===re?b[0]===">"?(r=o??Se,m=-1):b[1]===void 0?m=-2:(m=r.lastIndex-b[2].length,f=b[1],r=b[3]===void 0?re:b[3]==='"'?Rt:Ot):r===Rt||r===Ot?r=re:r===zt||r===Bt?r=Se:(r=re,o=void 0);const C=r===re&&s[l+1].startsWith("/>")?" ":"";i+=r===Se?c+Ec:m>=0?(n.push(f),c.slice(0,m)+fs+c.slice(m)+oe+C):c+oe+(m===-2?l:C)}return[bs(s,i+(s[t]||"<?>")+(e===2?"</svg>":"")),n]};let pt=class $s{constructor({strings:e,_$litType$:t},n){let o;this.parts=[];let i=0,r=0;const l=e.length-1,c=this.parts,[f,b]=Ic(e,t);if(this.el=$s.createElement(f,n),de.currentNode=this.el.content,t===2){const m=this.el.content.firstChild;m.replaceWith(...m.childNodes)}for(;(o=de.nextNode())!==null&&c.length<l;){if(o.nodeType===1){if(o.hasAttributes())for(const m of o.getAttributeNames())if(m.endsWith(fs)){const S=b[r++],C=o.getAttribute(m).split(oe),M=/([.?@])?(.*)/.exec(S);c.push({type:1,index:i,name:M[2],strings:C,ctor:M[1]==="."?zc:M[1]==="?"?Bc:M[1]==="@"?Oc:Qe}),o.removeAttribute(m)}else m.startsWith(oe)&&(c.push({type:6,index:i}),o.removeAttribute(m));if(gs.test(o.tagName)){const m=o.textContent.split(oe),S=m.length-1;if(S>0){o.textContent=je?je.emptyScript:"";for(let C=0;C<S;C++)o.append(m[C],Te()),de.nextNode(),c.push({type:2,index:++i});o.append(m[S],Te())}}}else if(o.nodeType===8)if(o.data===ms)c.push({type:2,index:i});else{let m=-1;for(;(m=o.data.indexOf(oe,m+1))!==-1;)c.push({type:7,index:i}),m+=oe.length-1}i++}}static createElement(e,t){const n=pe.createElement("template");return n.innerHTML=e,n}};function we(s,e,t=s,n){var r,l;if(e===ve)return e;let o=n!==void 0?(r=t._$Co)==null?void 0:r[n]:t._$Cl;const i=Ne(e)?void 0:e._$litDirective$;return(o==null?void 0:o.constructor)!==i&&((l=o==null?void 0:o._$AO)==null||l.call(o,!1),i===void 0?o=void 0:(o=new i(s),o._$AT(s,t,n)),n!==void 0?(t._$Co??(t._$Co=[]))[n]=o:t._$Cl=o),o!==void 0&&(e=we(s,o._$AS(s,e.values),o,n)),e}let Hc=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:n}=this._$AD,o=((e==null?void 0:e.creationScope)??pe).importNode(t,!0);de.currentNode=o;let i=de.nextNode(),r=0,l=0,c=n[0];for(;c!==void 0;){if(r===c.index){let f;c.type===2?f=new St(i,i.nextSibling,this,e):c.type===1?f=new c.ctor(i,c.name,c.strings,this,e):c.type===6&&(f=new Rc(i,this,e)),this._$AV.push(f),c=n[++l]}r!==(c==null?void 0:c.index)&&(i=de.nextNode(),r++)}return de.currentNode=pe,o}p(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},St=class ys{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,n,o){this.type=2,this._$AH=H,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=we(this,e,t),Ne(e)?e===H||e==null||e===""?(this._$AH!==H&&this._$AR(),this._$AH=H):e!==this._$AH&&e!==ve&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Tc(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==H&&Ne(this._$AH)?this._$AA.nextSibling.data=e:this.$(pe.createTextNode(e)),this._$AH=e}g(e){var i;const{values:t,_$litType$:n}=e,o=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=pt.createElement(bs(n.h,n.h[0]),this.options)),n);if(((i=this._$AH)==null?void 0:i._$AD)===o)this._$AH.p(t);else{const r=new Hc(o,this),l=r.u(this.options);r.p(t),this.$(l),this._$AH=r}}_$AC(e){let t=Ut.get(e.strings);return t===void 0&&Ut.set(e.strings,t=new pt(e)),t}T(e){_s(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,o=0;for(const i of e)o===t.length?t.push(n=new ys(this.k(Te()),this.k(Te()),this,this.options)):n=t[o],n._$AI(i),o++;o<t.length&&(this._$AR(n&&n._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,t);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}},Qe=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,o,i){this.type=1,this._$AH=H,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=H}_$AI(e,t=this,n,o){const i=this.strings;let r=!1;if(i===void 0)e=we(this,e,t,0),r=!Ne(e)||e!==this._$AH&&e!==ve,r&&(this._$AH=e);else{const l=e;let c,f;for(e=i[0],c=0;c<i.length-1;c++)f=we(this,l[n+c],t,c),f===ve&&(f=this._$AH[c]),r||(r=!Ne(f)||f!==this._$AH[c]),f===H?e=H:e!==H&&(e+=(f??"")+i[c+1]),this._$AH[c]=f}r&&!o&&this.O(e)}O(e){e===H?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},zc=class extends Qe{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===H?void 0:e}},Bc=class extends Qe{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==H)}},Oc=class extends Qe{constructor(e,t,n,o,i){super(e,t,n,o,i),this.type=5}_$AI(e,t=this){if((e=we(this,e,t,0)??H)===ve)return;const n=this._$AH,o=e===H&&n!==H||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==H&&(n===H||o);o&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}},Rc=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){we(this,e)}};const it=Ve.litHtmlPolyfillSupport;it==null||it(pt,St),(Ve.litHtmlVersions??(Ve.litHtmlVersions=[])).push("3.1.1");const Uc=(s,e,t)=>{const n=(t==null?void 0:t.renderBefore)??e;let o=n._$litPart$;if(o===void 0){const i=(t==null?void 0:t.renderBefore)??null;n._$litPart$=o=new St(e.insertBefore(Te(),i),i,void 0,t??{})}return o._$AI(s),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Le=class extends be{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Uc(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return ve}};var Xt;Le._$litElement$=!0,Le.finalized=!0,(Xt=globalThis.litElementHydrateSupport)==null||Xt.call(globalThis,{LitElement:Le});const rt=globalThis.litElementPolyfillSupport;rt==null||rt({LitElement:Le});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.3");/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ks=class extends Event{constructor(e,t,n){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=n??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Dt=class{constructor(e,t,n,o){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(i,r)=>{this.unsubscribe&&(this.unsubscribe!==r&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=i,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(i,r)),this.unsubscribe=r},this.host=e,t.context!==void 0){const i=t;this.context=i.context,this.callback=i.callback,this.subscribe=i.subscribe??!1}else this.context=t,this.callback=n,this.subscribe=o??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new ks(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Dc=class{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const n=t||!Object.is(e,this.o);this.o=e,n&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:n}]of this.subscriptions)t(this.o,n)},e!==void 0&&(this.value=e)}addCallback(e,t,n){if(!n)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:o}=this.subscriptions.get(e);e(this.value,o)}clearCallbacks(){this.subscriptions.clear()}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Fc=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}},Ft=class extends Dc{constructor(e,t,n){var o,i;super(t.context!==void 0?t.initialValue:n),this.onContextRequest=r=>{const l=r.composedPath()[0];r.context===this.context&&l!==this.host&&(r.stopPropagation(),this.addCallback(r.callback,l,r.subscribe))},this.onProviderRequest=r=>{const l=r.composedPath()[0];if(r.context!==this.context||l===this.host)return;const c=new Set;for(const[f,{consumerHost:b}]of this.subscriptions)c.has(f)||(c.add(f),b.dispatchEvent(new ks(this.context,f,!0)));r.stopPropagation()},this.host=e,t.context!==void 0?this.context=t.context:this.context=t,this.attachListeners(),(i=(o=this.host).addController)==null||i.call(o,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new Fc(this.context))}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ct({context:s}){return(e,t)=>{const n=new WeakMap;if(typeof t=="object")return t.addInitializer(function(){n.set(this,new Ft(this,{context:s}))}),{get(){return e.get.call(this)},set(o){var i;return(i=n.get(this))==null||i.setValue(o),e.set.call(this,o)},init(o){var i;return(i=n.get(this))==null||i.setValue(o),o}};{e.constructor.addInitializer(r=>{n.set(r,new Ft(r,{context:s}))});const o=Object.getOwnPropertyDescriptor(e,t);let i;if(o===void 0){const r=new WeakMap;i={get:function(){return r.get(this)},set:function(l){n.get(this).setValue(l),r.set(this,l)},configurable:!0,enumerable:!0}}else{const r=o.set;i={...o,set:function(l){n.get(this).setValue(l),r==null||r.call(this,l)}}}return void Object.defineProperty(e,t,i)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function At({context:s,subscribe:e}){return(t,n)=>{typeof n=="object"?n.addInitializer(function(){new Dt(this,{context:s,callback:o=>{this[n.name]=o},subscribe:e})}):t.constructor.addInitializer(o=>{new Dt(o,{context:s,callback:i=>{o[n]=i},subscribe:e})})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jc={attribute:!0,type:String,converter:Fe,reflect:!1,hasChanged:Pt},Gc=(s=jc,e,t)=>{const{kind:n,metadata:o}=t;let i=globalThis.litPropertyMetadata.get(o);if(i===void 0&&globalThis.litPropertyMetadata.set(o,i=new Map),i.set(t.name,s),n==="accessor"){const{name:r}=t;return{set(l){const c=e.get.call(this);e.set.call(this,l),this.requestUpdate(r,c,s)},init(l){return l!==void 0&&this.C(r,void 0,s),l}}}if(n==="setter"){const{name:r}=t;return function(l){const c=this[r];e.call(this,l),this.requestUpdate(r,c,s)}}throw Error("Unsupported decorator location: "+n)};function w(s){return(e,t)=>typeof t=="object"?Gc(s,e,t):((n,o,i)=>{const r=o.hasOwnProperty(i);return o.constructor.createProperty(i,r?{...n,wrapped:!0}:n),r?Object.getOwnPropertyDescriptor(o,i):void 0})(s,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function q(s){return w({...s,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Re=s=>s??H;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qc=s=>s.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ws={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},xs=s=>(...e)=>({_$litDirective$:s,values:e});let Ps=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Me=(s,e)=>{var n;const t=s._$AN;if(t===void 0)return!1;for(const o of t)(n=o._$AO)==null||n.call(o,e,!1),Me(o,e);return!0},Ge=s=>{let e,t;do{if((e=s._$AM)===void 0)break;t=e._$AN,t.delete(s),s=e}while((t==null?void 0:t.size)===0)},Ss=s=>{for(let e;e=s._$AM;s=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(s))break;t.add(s),Xc(e)}};function Wc(s){this._$AN!==void 0?(Ge(this),this._$AM=s,Ss(this)):this._$AM=s}function Kc(s,e=!1,t=0){const n=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(e)if(Array.isArray(n))for(let i=t;i<n.length;i++)Me(n[i],!1),Ge(n[i]);else n!=null&&(Me(n,!1),Ge(n));else Me(this,s)}const Xc=s=>{s.type==ws.CHILD&&(s._$AP??(s._$AP=Kc),s._$AQ??(s._$AQ=Wc))};let Yc=class extends Ps{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),Ss(this),this.isConnected=e._$AU}_$AO(e,t=!0){var n,o;e!==this.isConnected&&(this.isConnected=e,e?(n=this.reconnected)==null||n.call(this):(o=this.disconnected)==null||o.call(this)),t&&(Me(this,e),Ge(this))}setValue(e){if(qc(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ye=()=>new Jc;let Jc=class{};const at=new WeakMap,ke=xs(class extends Yc{render(s){return H}update(s,[e]){var n;const t=e!==this.G;return t&&this.G!==void 0&&this.ot(void 0),(t||this.rt!==this.lt)&&(this.G=e,this.ct=(n=s.options)==null?void 0:n.host,this.ot(this.lt=s.element)),H}ot(s){if(typeof this.G=="function"){const e=this.ct??globalThis;let t=at.get(e);t===void 0&&(t=new WeakMap,at.set(e,t)),t.get(this.G)!==void 0&&this.G.call(this.ct,void 0),t.set(this.G,s),s!==void 0&&this.G.call(this.ct,s)}else this.G.value=s}get rt(){var s,e;return typeof this.G=="function"?(s=at.get(this.ct??globalThis))==null?void 0:s.get(this.G):(e=this.G)==null?void 0:e.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ue=xs(class extends Ps{constructor(s){var e;if(super(s),s.type!==ws.ATTRIBUTE||s.name!=="class"||((e=s.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(s){return" "+Object.keys(s).filter(e=>s[e]).join(" ")+" "}update(s,[e]){var n,o;if(this.it===void 0){this.it=new Set,s.strings!==void 0&&(this.st=new Set(s.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in e)e[i]&&!((n=this.st)!=null&&n.has(i))&&this.it.add(i);return this.render(e)}const t=s.element.classList;for(const i of this.it)i in e||(t.remove(i),this.it.delete(i));for(const i in e){const r=!!e[i];r===this.it.has(i)||(o=this.st)!=null&&o.has(i)||(r?(t.add(i),this.it.add(i)):(t.remove(i),this.it.delete(i)))}return ve}});function Zc(s,e={}){return new Function("context",`
    with(context) {
      return ${s}
    }
  `)(e)}const jt="$",Qc="ot";class B extends Le{constructor(){super(...arguments),this.eventAgent={},this.onEventMap=new Map,this._eventMap=new Map}static get defineName(){return`${Qc}-${this.componentName}`}static register(){this.componentName&&(this.registerEventAgent(),this.registerExpressionProperties(),customElements.get(this.defineName)||customElements.define(this.defineName,this))}emit(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t}))}static registerEventAgent(){const e=this.prototype.connectedCallback,t=this;this.prototype.connectedCallback=function(){this.eventAgent=t.eventAgent,this.startProxyOnEventListener(),e.call(this)}}addEventListener(e,t,n){if(!this._eventMap||!this.eventAgent)return super.addEventListener(e,t,n),t;const o=t._$committedValue?t._$committedValue:t,i=r=>{if(this.eventAgent[e]===void 0)return o.call(this,r);const l=this.eventAgent[e];return typeof l=="boolean"?l?o.call(this,r):void 0:typeof l=="function"?l.call(this,r)?o.call(this,r):void 0:(warn("Please pass in the correct parameters"),o.call(this,r))};return t._$committedValue?(t._$committedValue=i,super.addEventListener(e,t,n),i):(this._eventMap.set(t,i),super.addEventListener(e,i,n),i)}removeEventListener(e,t,n){const o=this._eventMap.has(t)?this._eventMap.get(t):t;super.removeEventListener(e,o,n),super.removeEventListener(e,t,n)}startProxyOnEventListener(){for(const e in this.eventAgent)this.addOnEventListener(e)}addOnEventListener(e){const t=`on${e}`;Object.defineProperty(this,t,{set:n=>{typeof n=="function"?this.onEventMap.set(t,this.addEventListener(e,n)):this.onEventMap.has(t)&&this.removeEventListener(e,this.onEventMap.get(t))},get:()=>this.onEventMap.get(t)})}static registerExpressionProperties(){this.expressionProperties.forEach(n=>this.registerExpressionProperty(n));const e=this.prototype.connectedCallback,t=this;this.prototype.connectedCallback=function(){t.expressionProperties.forEach(n=>{const o=this,i=o[jt+n];typeof i=="string"&&i&&(o[n]=Zc(i,{html:z}))}),e.call(this)}}static registerExpressionProperty(e){const t=jt+e;this.properties={...this.properties,[t]:{type:String}}}}B.componentName="",B.eventAgent={},B.expressionProperties=[];let Ee=class extends B{constructor(){super(...arguments),this.direction="horizontal"}render(){return z`<slot></slot>`}};Ee.componentName="space",Ee.styles=K`${W(`:host {
  display: block;
}

:host([direction=horizontal]) ::slotted(*) {
  margin-right: 20px;
  vertical-align: middle;
}
:host([direction=horizontal]) ::slotted(*:last-child) {
  margin-right: 0;
}

:host([direction=vertical]) ::slotted(*) {
  margin-bottom: 20px;
}
:host([direction=vertical]) ::slotted(*:last-child) {
  margin-bottom: 0;
}`)}`,function(s,e,t,n){var o,i=arguments.length,r=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,t,n);else for(var l=s.length-1;l>=0;l--)(o=s[l])&&(r=(i<3?o(r):i>3?o(e,t,r):o(e,t))||r);i>3&&r&&Object.defineProperty(e,t,r)}([w({type:String,reflect:!0})],Ee.prototype,"direction",void 0);function ae(s,e,t,n){var o,i=arguments.length,r=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,t,n);else for(var l=s.length-1;l>=0;l--)(o=s[l])&&(r=(i<3?o(r):i>3?o(e,t,r):o(e,t))||r);return i>3&&r&&Object.defineProperty(e,t,r),r}const Gt=typeof requestAnimationFrame<"u"?requestAnimationFrame.bind(window):setTimeout;function He(s){return 1e3*parseFloat(s)}function qt(s,e){var c;(c=e.enter)==null||c.call(e,s);let t,n,o,i=[];const r=()=>{s.removeEventListener("transitionstart",void 0),s.removeEventListener("transitionrun",t),s.removeEventListener("transitionend",n),s.removeEventListener("transitioncancel",o),i=[]};var l;return s.addEventListener("transitionrun",t=f=>{i.push(f.propertyName)}),s.addEventListener("transitionend",n=f=>{var b;i=i.filter(m=>m!==f.propertyName),i.length===0&&((b=e.done)==null||b.call(e,s,"end"),r())}),s.addEventListener("transitioncancel",o=f=>{i=i.filter(b=>b!==f.propertyName)}),l=()=>{var m,S;(m=e.run)==null||m.call(e,s);const f=function(C){const M=getComputedStyle(C).transitionDuration.trim().split(",").map(V=>V.trim());let I=He(M[0]);for(const V of M){const X=He(V);X>I&&(I=X)}return I}(s),b=function(C){const M=getComputedStyle(C).transitionDelay.trim().split(",").map(V=>V.trim());let I=He(M[0]);for(const V of M){const X=He(V);X>I&&(I=X)}return I}(s);f||b||((S=e.done)==null||S.call(e,s,"noTransition"),r())},Gt(()=>{Gt(l)}),()=>{var f;(f=e.done)==null||f.call(e,s,"cancel"),r()}}class F extends B{constructor(){super(...arguments),this.show=!0,this.mounted=!1}get _display(){return this.display?this.display:this.initDisplay}onEnter(){this.addClass("enterClass")}onShow(){this.delClass("enterClass"),this.addClass("showClass")}onHide(){this.addClass("hideClass")}onLeave(){this.addClass("leaveClass")}willUpdate(){var e;(e=this.removeFn)==null||e.call(this),this.show?this.runShow():this.mounted?this.runHide():this.hideHostElement()}firstUpdated(){this.mounted=!0}connectedCallback(){super.connectedCallback(),this.initDisplay=getComputedStyle(this).display}addClass(e){if(this[e])this.classList.add(...this[e].split(/\s+/));else if(this.name){const t=`${this.name}-${Wt(e)}`;this.classList.add(t)}}delClass(e){if(this[e])this.classList.remove(...this[e].split(/\s+/));else if(this.name){const t=`${this.name}-${Wt(e)}`;this.classList.remove(t)}}runShow(){this.removeFn=qt(this,{enter:()=>{this.showHostElement(),this.onEnter()},run:()=>this.onShow(),done:()=>this.delClass("showClass")})}runHide(){this.removeFn=qt(this,{enter:()=>this.onHide(),run:()=>this.onLeave(),done:(e,t)=>{this.delClass("hideClass"),this.delClass("leaveClass"),this.hideHostElement(),this.emit("hideover",t)}})}showHostElement(){this.style.display=this._display||"block"}hideHostElement(){this.style.display="none"}render(){return z`<slot></slot>`}}function Wt(s){return s.replace(/[A-Z]/g,e=>"-"+e.toLowerCase())}F.componentName="transition",F.styles=K`
    :host {
      display: block;
    }
  `,ae([w({type:Boolean,reflect:!0})],F.prototype,"show",void 0),ae([w({type:String,reflect:!0})],F.prototype,"display",void 0),ae([w({type:String,reflect:!0})],F.prototype,"name",void 0),ae([w({type:String})],F.prototype,"enterClass",void 0),ae([w({type:String})],F.prototype,"showClass",void 0),ae([w({type:String})],F.prototype,"hideClass",void 0),ae([w({type:String})],F.prototype,"leaveClass",void 0);const Ce=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:null;function k(s,e,t,n){var o,i=arguments.length,r=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,t,n);else for(var l=s.length-1;l>=0;l--)(o=s[l])&&(r=(i<3?o(r):i>3?o(e,t,r):o(e,t))||r);return i>3&&r&&Object.defineProperty(e,t,r),r}Ce.log=(...s)=>{},Ce.warn=Ce.console.warn,Ce.info=Ce.console.info,typeof SuppressedError=="function"&&SuppressedError;const Cs=z`
  <svg version="1.1" id="L7" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
 <path fill="#fff" d="M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3
  c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z">
      <animateTransform
         attributeName="transform"
         attributeType="XML"
         type="rotate"
         dur="2s"
         from="0 50 50"
         to="360 50 50"
         repeatCount="indefinite" />
  </path>
 <path fill="#fff" d="M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7
  c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z">
      <animateTransform
         attributeName="transform"
         attributeType="XML"
         type="rotate"
         dur="1s"
         from="0 50 50"
         to="-360 50 50"
         repeatCount="indefinite" />
  </path>
 <path fill="#fff" d="M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5
  L82,35.7z">
      <animateTransform
         attributeName="transform"
         attributeType="XML"
         type="rotate"
         dur="2s"
         from="0 50 50"
         to="360 50 50"
         repeatCount="indefinite" />
  </path>
</svg>
`;(class extends B{render(){return z`
      ${Cs}
    `}}).componentName="icon-loading";class G extends B{constructor(){super(...arguments),this.block=!1,this.disabled=!1,this.loading=!1,this.submit=!1}render(){return z`
      <div>
        ${this.loading?Cs:H}
        <slot></slot>
      </div>
    `}}G.componentName="button",G.styles=K`${W(`div {
  display: flex;
  justify-content: center;
  align-items: center;
}

svg {
  width: 14px;
  height: 14px;
  margin-right: 6px;
}

:host {
  display: inline-block;
  padding: 4px 15px;
  font-size: 14px;
  border-radius: 6px;
  cursor: pointer;
  user-select: none;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.3);
  transition: all 0.3s;
}

:host(:hover) {
  color: var(--others-ui-primary-light);
  border-color: var(--others-ui-primary-light);
}

:host(:active) {
  color: var(--others-ui-primary-dark);
  border-color: var(--others-ui-primary-dark);
}

:host([block]) {
  display: block;
}

:host([disabled]) {
  cursor: not-allowed;
}

:host([size=small]) {
  font-size: 14px;
  padding: 0 7px;
}

:host([size=large]) {
  font-size: 14px;
  padding: 7px 15px;
}

:host(:not([type])[disabled]), :host(:not([type])[disabled]:active) {
  color: #7e7979;
  background-color: #ccc;
  border-color: #ccc;
}

:host([type=primary]) {
  color: white;
  background-color: var(--others-ui-primary);
  border: none;
}

:host([type=primary]:hover), :host([type=primary][disabled]) {
  background-color: var(--others-ui-primary-light);
}

:host([type=primary]:not([disabled]):active) {
  background-color: var(--others-ui-primary-dark);
}

:host([type=success]) {
  color: white;
  background-color: var(--others-ui-success);
  border: none;
}

:host([type=success]:hover), :host([type=success][disabled]) {
  background-color: var(--others-ui-success-light);
}

:host([type=success]:not([disabled]):active) {
  background-color: var(--others-ui-success-dark);
}

:host([type=warn]) {
  color: white;
  background-color: var(--others-ui-warn);
  border: none;
}

:host([type=warn]:hover), :host([type=warn][disabled]) {
  background-color: var(--others-ui-warn-light);
}

:host([type=warn]:not([disabled]):active) {
  background-color: var(--others-ui-warn-dark);
}

:host([type=error]) {
  color: white;
  background-color: var(--others-ui-error);
  border: none;
}

:host([type=error]:hover), :host([type=error][disabled]) {
  background-color: var(--others-ui-error-light);
}

:host([type=error]:not([disabled]):active) {
  background-color: var(--others-ui-error-dark);
}`)}`,G.eventAgent={click(){return!(this.loading||this.disabled)}},k([w({type:String,reflect:!0})],G.prototype,"type",void 0),k([w({type:String,reflect:!0})],G.prototype,"size",void 0),k([w({type:Boolean,reflect:!0})],G.prototype,"block",void 0),k([w({type:Boolean,reflect:!0})],G.prototype,"disabled",void 0),k([w({type:Boolean})],G.prototype,"loading",void 0),k([w({type:Boolean})],G.prototype,"submit",void 0);const As="form-context";class Q extends B{constructor(){super(),this._values={}}onSubmit(){this.dispatchEvent(new CustomEvent("submit",{detail:{...this._values}}))}submit(){this.onSubmit()}connectedCallback(){super.connectedCallback(),this.init()}init(){this._values=this.initialValues||{},this.formContext={values:this._values||{},setValue:(e,t)=>{this._values={...this._values,[e]:t}}}}willUpdate(e){e.has("values")&&(this._values={...this.values}),e.has("_values")&&this.formContext&&(this.formContext={...this.formContext,values:this._values})}render(){return z`
     <slot></slot>
    `}}Q.componentName="form",Q.styles=K`${W(`:host {
  display: block;
}`)}`,Q.expressionProperties=["initialValues"],k([w({type:Object,converter:s=>s&&function(e){try{return JSON.parse(e)}catch{return warn("The attribute you passed in does not conform to JSON format!"),null}}(s)})],Q.prototype,"initialValues",void 0),k([w({type:Object})],Q.prototype,"values",void 0),k([q()],Q.prototype,"_values",void 0),k([Ct({context:As}),w({attribute:!1})],Q.prototype,"formContext",void 0);const ed="form-item-context";class se extends B{constructor(){super()}connectedCallback(){super.connectedCallback(),this.formItemContext={value:this.value,setValue:e=>{var t;this.name&&((t=this.formContext)==null||t.setValue(this.name,e))}}}get value(){var e;if(this.name)return(e=this.formContext)==null?void 0:e.values[this.name]}willUpdate(e){e.has("formContext")&&this.formItemContext&&(this.formItemContext={...this.formItemContext,value:this.value})}render(){return z`
      <div class="container">
        <div class="label">${this.label}</div>
        <div class="wrapper">
          <slot></slot>
        </div>
      </div>
    `}}se.componentName="form-item",se.styles=K`${W(`:host {
  display: block;
}

.container {
  height: 50px;
  display: flex;
  align-items: center;
}
.container .label {
  width: 80px;
  font-size: 14px;
}
.container .wrapper {
  flex: 1;
}
.container .wrapper ::slotted(*) {
  vertical-align: middle;
}`)}`,k([At({context:As,subscribe:!0}),w({attribute:!1})],se.prototype,"formContext",void 0),k([Ct({context:ed}),w({attribute:!1})],se.prototype,"formItemContext",void 0),k([w({type:String})],se.prototype,"label",void 0),k([w({type:String})],se.prototype,"name",void 0);function Vt(s){class e extends s{get formItemValue(){var n;return(n=this.formItemContext)==null?void 0:n.value}set formItemValue(n){var o;(o=this.formItemContext)==null||o.setValue(n)}}return k([At({context:"form-item-context",subscribe:!0}),w({attribute:!1})],e.prototype,"formItemContext",void 0),e}function Pe(s,e){for(const t in e){const n=e[t];s.has(t)&&n&&n(s.get(t))}}class le extends Vt(B){constructor(){super(...arguments),this.inputRef=ye()}onInputChange(e){const t=e.target;this.emit("change",t.checked),this.formItemValue=t.checked}willUpdate(e){Pe(e,{value:()=>{this._value=this.value},formItemContext:()=>{this._value=this.formItemValue}})}render(){return z`
      <label class="switch">
        <input
          ${ke(this.inputRef)}
          type="checkbox"
          .checked=${this._value}
          @change=${this.onInputChange}
        />
        <div class="slider" />
      </label>
    `}}le.componentName="switch",le.styles=K`${W(`:host {
  display: inline-block;
  line-height: 24px;
  height: 24px;
  width: 50px;
}

.switch {
  position: relative;
  display: block;
  height: 100%;
}
.switch input {
  display: none;
}
.switch input:checked + .slider {
  background-color: var(--others-ui-primary);
}
.switch input:checked + .slider:before {
  height: 20px;
  width: 20px;
  left: 2px;
  bottom: 2px;
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
.switch input:focus + .slider {
  box-shadow: 0 0 1px var(--others-ui-primary);
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  border-radius: 1000px;
}
.slider:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  border-radius: 50%;
}`)}`,k([w({type:String})],le.prototype,"name",void 0),k([w({type:Boolean})],le.prototype,"value",void 0),k([q()],le.prototype,"_value",void 0);class D extends Vt(B){constructor(){super(),this.disabled=!1,this.size="medium",this.clearable=!1}onInput(e){const t=e.target.value;this.formItemValue=t,this.dispatchEvent(new CustomEvent("input",{detail:t})),this._value=t}willUpdate(e){Pe(e,{formItemContext:()=>{this._value=this.formItemValue}}),e.has("value")&&(this._value=this.value)}clearInput(){this._value="",this.formItemValue="",this.dispatchEvent(new CustomEvent("input",{detail:""}))}render(){return z`
      <div class="container">
        <input
          class=${`size-${this.size}`}
          maxlength=${Re(this.maxLength)}
          .placeholder=${Re(this.placeholder)}
          @input=${e=>this.onInput(e)}
          .value=${Re(this._value)}
          ?disabled=${this.disabled}
        />
        ${this.clearable&&!this.disabled&&this._value!==void 0&&this._value!==""?z`
        <button size="small"
          @click=${this.clearInput}>
          x
        </button>
      `:null}
      </div>
    `}}D.componentName="input",D.styles=K`${W(`:host {
  display: block;
}

.container {
  display: flex;
  position: relative;
}
.container input {
  outline-style: none;
  border: none;
}
.container input {
  flex: 1;
  transition: all 0.3s;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 8px 10px;
  font-size: 14px;
}
.container input:focus {
  border-color: var(--others-ui-primary-light);
  outline: 0;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);
}
.container input:hover {
  border-color: var(--others-ui-primary-light);
  outline: 0;
}
.container input:disabled {
  background-color: #f0f0f0;
  cursor: not-allowed;
  opacity: 0.6;
  border-color: #ddd;
}
.container input:disabled:hover, .container input:disabled:focus {
  border-color: #ddd !important;
  box-shadow: none !important;
}
.container input.size-small {
  font-size: 12px;
  padding: 4px 8px;
}
.container input.size-medium {
  font-size: 14px;
  padding: 8px 10px;
}
.container input.size-large {
  font-size: 16px;
  padding: 12px 14px;
}
.container button {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background: #f6f6f6;
  border-radius: 50%;
  color: grey;
  cursor: pointer;
}
.container button:hover {
  background-color: #e0e0e0;
  color: #333;
}
.container button:active {
  background-color: #d0d0d0;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  transform: translateY(-50%) scale(0.98);
}`)}`,k([w({type:String})],D.prototype,"name",void 0),k([w({type:String})],D.prototype,"value",void 0),k([w({type:String})],D.prototype,"placeholder",void 0),k([w({type:Boolean})],D.prototype,"disabled",void 0),k([w({type:Number})],D.prototype,"maxLength",void 0),k([w({type:String})],D.prototype,"size",void 0),k([w({type:Boolean,reflect:!0})],D.prototype,"clearable",void 0),k([q()],D.prototype,"_value",void 0);const Vs="checkbox-group-context";class ne extends B{get groupValue(){var e;return((e=this.checkboxGroupContext)==null?void 0:e.value)??[]}set groupValue(e){var t;(t=this.checkboxGroupContext)==null||t.setValue(e)}onChange(e){const t=e.target;this.emit("change",t.checked),this.value!==void 0&&(t.checked?this.groupValue=[...this.groupValue,this.value]:this.groupValue=this.groupValue.filter(n=>n!==this.value))}willUpdate(e){Pe(e,{checkboxGroupContext:()=>{this.value!==void 0&&(this.groupValue.includes(this.value)?this.isChecked=!0:this.isChecked=!1)},checked:()=>{this.isChecked=this.checked}})}render(){return z`
      <label class="container">
        <input type="checkbox" .checked=${this.isChecked} @change=${this.onChange}/>
        <div class="checkbox"></div>
        <span class="text">
          <slot></slot>
        </span>
      </label>
    `}}ne.componentName="checkbox",ne.styles=K`${W(`:host {
  display: inline-block;
  height: 24px;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 100%;
}
.container input {
  display: none;
}
.container input:checked + .checkbox {
  background-color: var(--others-ui-primary);
  border-color: var(--others-ui-primary);
}
.container input:checked + .checkbox::before {
  content: "";
  display: inline-block;
  position: absolute;
  left: 0;
  top: 0;
  width: 4px;
  height: 7px;
  border-bottom: 2px solid white;
  border-right: 2px solid white;
  transform: rotate(45deg) scale(1.1) translate(-6%, -20%);
  transform-origin: left bottom;
}
.container .checkbox {
  display: inline-block;
  position: relative;
  width: 14px;
  height: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: all 0.3s;
}
.container .checkbox:hover {
  border-color: var(--others-ui-primary-light);
}
.container .text {
  font-size: 14px;
  line-height: 16px;
  margin-left: 8px;
}`)}`,k([At({context:Vs,subscribe:!0}),w({attribute:!1})],ne.prototype,"checkboxGroupContext",void 0),k([w({type:Boolean})],ne.prototype,"checked",void 0),k([w()],ne.prototype,"value",void 0),k([q()],ne.prototype,"isChecked",void 0);class ce extends Vt(B){connectedCallback(){super.connectedCallback(),this._value=this.value,this.checkboxGroupContext={value:this._value,setValue:e=>{this.onChange(e),this.checkboxGroupContext={...this.checkboxGroupContext,value:[...e]}}}}onChange(e){this.formItemValue=[...e],this._value=[...e],this.emit("change",[...e])}setValue(e){this.checkboxGroupContext={...this.checkboxGroupContext,value:[...e]}}willUpdate(e){Pe(e,{formItemContext:()=>{log("formItemContext"),this._value=[...this.formItemValue||[]]},value:()=>{this._value=[...this.value||[]],this.setValue(this._value)}})}render(){return z`
      <slot></slot>
    `}}ce.componentName="checkbox-group",ce.styles=K`${W(`:host {
  display: block;
}`)}`,k([Ct({context:Vs}),w({attribute:!1})],ce.prototype,"checkboxGroupContext",void 0),k([w({type:Array})],ce.prototype,"value",void 0),k([q()],ce.prototype,"_value",void 0);const Ls=z`
  <svg width="64" height="41" viewBox="0 0 64 41" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(0 1)" fill="none" fill-rule="evenodd">
      <ellipse fill="#f5f5f5" cx="32" cy="33" rx="32" ry="7"></ellipse>
      <g fill-rule="nonzero" stroke="#d9d9d9">
        <path d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"></path>
        <path d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z" fill="#fafafa"></path>
      </g>
    </g>
  </svg>
`;(class extends B{render(){return z`
      ${Ls}
    `}}).componentName="no-data";class U extends B{static register(){F.register(),super.register()}constructor(){super(),this.active=!1,this.inputValue="",this.titleRef=ye(),this.inputRef=ye(),this.onSearch=e=>{const t=e.target.value;this.inputValue=t,this.emit("search",t)},this.onListHide=e=>{e.detail==="end"&&(this.inputValue="",this.emit("search",this.inputValue))},this.options=[],this.search=!1}onItemClick(e){this.label=e.label??(typeof e.value=="string"?e.value:void 0),this._value=e.value,this.emit("change",this._value)}get filterOptions(){return this.filter?this.filter(this.inputValue,this.options):this.options}firstUpdated(){var e,t;this.titleRef.value&&(e=this.titleRef.value,t={onFocus:()=>{this.active=!this.active,this.active&&this.updateComplete.then(()=>{var n;(n=this.inputRef.value)==null||n.focus()})},onBlur:()=>{this.active=!1}},e.addEventListener("click",n=>{var o;(o=t.onFocus)==null||o.call(t,n),n.stopPropagation()}),document.addEventListener("click",n=>{var o;(o=t.onBlur)==null||o.call(t,n)}))}willUpdate(e){Pe(e,{value:t=>this._value=t})}render(){const e=o=>z`
      <li
        class=${Ue({"select-item-selected":this._value===o.value})}
        @click=${()=>this.onItemClick(o)}>${o.label??o.value}
      </li>
    `,t=()=>z`
      <input
        .value=${this.inputValue}
        ${ke(this.inputRef)}
        @input=${this.onSearch}
      />
    `,n=()=>z`
      <div class="select-input-container-label">
        <span class=${Ue({"select-placeholder-color":this.active})}>${this.label}<span>
      </div>
    `;return z`
      <div class="select">
        <div
          ${ke(this.titleRef)}
          class=${Ue({"select-input":!0,"select-active-border":this.active})}
        >
          ${(()=>{const o=this.search?this._value?this.active?this.inputValue?H:this.label:H:this.inputValue?H:this.placeholder:this._value?H:this.placeholder;return z`
        <div class="select-input-placeholder">
          ${Re(o)}
        </div>
      `})()}
          <div class="select-input-container">${this.search&&this.active?t():n()}</div>
        </div>

        <ot-transition .show=${this.active} class="select-list" name="select-list" @hideover=${this.onListHide}>
          <div class="select-list-box">
            ${this.filterOptions.length?z`
      <ul>
        ${this.filterOptions.map(o=>e(o))}
      </ul>
    `:z`
      <div class="select-list-box-no-data">
        ${Ls}
        <span>暂无数据<span>
      </div>
    `}
          </div>
        </ot-transition>
      </div>
    `}}U.componentName="select",U.styles=K`${W(`:host {
  --border-radius: var(--others-ui-select-border-radius, 8px);
  --primary-color: var(--others-ui-select-primary-color, #2b5aed);
  --hover-primary-color: var(--others-ui-select-hover-primary-color, #5a7ff1);
  --select-color: var(--others-ui-select-selected-color, #b3ffb3);
}

:host {
  display: block;
  height: 32px;
  font-size: 14px;
}

* {
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
}

ul {
  padding: 0;
  margin: 0;
}

li {
  list-style: none;
}

input {
  border: none;
  outline: none;
}

.select {
  position: relative;
  height: 100%;
  cursor: pointer;
}
.select-input {
  position: relative;
  border: 1px solid #ccc;
  border-radius: var(--border-radius);
  padding: 4px;
  height: 100%;
}
.select-input-placeholder {
  height: 100%;
  line-height: 22px;
  padding: 0 5px;
  color: #ccc;
  font-size: 14px;
}
.select-input-container {
  position: absolute;
  top: 4px;
  bottom: 4px;
  left: 4px;
  right: 4px;
  padding: 0 5px;
}
.select-input-container-label {
  height: 100%;
  font-size: 14px;
  line-height: 22px;
}
.select-input-container input {
  display: block;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: transparent;
}
.select-input-container input::placeholder {
  color: #ccc;
  font-size: 14px;
}
.select-input:hover {
  border-color: var(--hover-primary-color);
}
.select-list {
  opacity: 1;
  transform: scale(1);
  top: 32px;
  position: absolute;
  padding-top: 5px;
  left: 0;
  right: 0;
}
.select-list-box {
  overflow: hidden;
  border-radius: var(--border-radius);
  border: 1px solid transparent;
  padding: 4px;
  background-color: #fff;
  box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
}
.select-list-box ul li {
  height: 30px;
  line-height: 20px;
  padding: 5px;
}
.select-list-box ul li:hover {
  cursor: pointer;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: var(--border-radius);
}
.select-list-box-no-data {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5px;
}
.select-list-box-no-data span {
  font-size: 12px;
  color: #ccc;
}
.select-list-enter-class, .select-list-leave-class {
  opacity: 0;
  transform: scale(0.5);
}

.select-active-border {
  border-color: var(--hover-primary-color);
}

.select-item-selected {
  font-weight: bold;
  border-radius: var(--border-radius);
  background-color: var(--select-color) !important;
}

.select-placeholder-color {
  color: #ccc;
}`)}`,U.expressionProperties=["options"],k([w({type:Array})],U.prototype,"options",void 0),k([w({type:String})],U.prototype,"value",void 0),k([w({type:String})],U.prototype,"placeholder",void 0),k([w({type:Function})],U.prototype,"filter",void 0),k([w({type:Boolean})],U.prototype,"search",void 0),k([q()],U.prototype,"_value",void 0),k([q()],U.prototype,"label",void 0),k([q()],U.prototype,"active",void 0),k([q()],U.prototype,"inputValue",void 0);var qe;class Z extends B{constructor(){super(...arguments),this.autofocus=!1,this.disabled=!1,this.value=0,this.dots=!1,this.max=100,this.min=0,this.range=!1,this.vertical=!1}}k([w({type:Boolean})],Z.prototype,"autofocus",void 0),k([w({type:Boolean})],Z.prototype,"disabled",void 0),k([w({type:Number})],Z.prototype,"value",void 0),k([w({type:Boolean})],Z.prototype,"dots",void 0),k([w({type:Number})],Z.prototype,"max",void 0),k([w({type:Number})],Z.prototype,"min",void 0),k([w({type:Boolean})],Z.prototype,"range",void 0),k([w({type:Boolean})],Z.prototype,"vertical",void 0),function(s){s.Change="change",s.AfterChange="afterChange"}(qe||(qe={}));class $e extends Z{constructor(){super(...arguments),this.isDragging=!1,this.innerValue=this.value,this.sliderRef=ye(),this.sliderTrackRef=ye(),this.sliderHandleRef=ye(),this.onMouseDown=e=>{this.disabled||e.buttons!==1||(this.isDragging=!0,this.onSliderHandle(e),document.addEventListener("mousemove",this.onMouseMove),document.addEventListener("mouseup",this.onMouseUp))},this.onMouseUp=async()=>{this.isDragging=!1,this.emit(qe.AfterChange,{value:this.innerValue}),document.removeEventListener("mousemove",this.onMouseMove),document.removeEventListener("mouseup",this.onMouseUp)},this.onMouseMove=e=>{e.preventDefault(),this.isDragging&&this.onSliderHandle(e)},this.onSliderHandle=e=>{if(!this.disabled&&this.sliderRef.value){const t=this.sliderRef.value.getBoundingClientRect();if(this.vertical){const n=(t.bottom-e.clientY)/t.height*100;this.setPercentage(n)}else{const n=(e.clientX-t.left)/t.width*100;this.setPercentage(n)}}},this.setPercentage=e=>{const t=Math.min(100,Math.max(0,e));this.sliderRef.value&&this.sliderHandleRef.value&&this.sliderTrackRef.value&&(this.vertical?(this.sliderHandleRef.value.style.top="auto",this.sliderHandleRef.value.style.bottom=`${t}%`,this.sliderTrackRef.value.style.height=`${t}%`):(this.sliderHandleRef.value.style.top="",this.sliderHandleRef.value.style.left=`${t}%`,this.sliderTrackRef.value.style.width=`${t}%`),this.innerValue=this.calculateValue(t))},this.calculateValue=e=>{const{max:t,min:n}=this;return typeof t=="number"&&typeof n=="number"||console.warn("max and min must be a number"),.01*e*(t-n)+n}}updated(e){Pe(e,{value:()=>{if(this.value!==void 0){const t=(this.value-this.min)/(this.max-this.min)*100;this.setPercentage(t)}},innerValue:()=>{this.emit(qe.Change,{value:this.innerValue})}})}render(){return z`
      <div
        ${ke(this.sliderRef)}
        class=${Ue({slider:!0,disabled:this.disabled,dragging:this.isDragging,horizontal:!this.vertical,vertical:this.vertical})}
        @mousedown=${this.onMouseDown}
        @dragstart=${e=>e.preventDefault()}
      >
        <div class="slider-rail"></div>
        <div
          ${ke(this.sliderTrackRef)}
          class="slider-track"
        ></div>
        <div
          ${ke(this.sliderHandleRef)}
          class="slider-handle"
        ></div>
      </div>
    `}}$e.componentName="slider",$e.styles=[K`${W(`:host {
  --slider-rail-bg-color: var(--primary-color, rgba(0, 0, 0, 0.06));
  --slider-rail-active-bg-color: var(--primary-color, rgba(0, 0, 0, 0.25));
  --slider-rail-disabled-bg-color: var(--primary-color, rgba(0, 0, 0, 0.12));
  --slider-track-bg-color: var(--primary-color, #91caff);
  --slider-track-active-bg-color: var(--primary-color, #69b1ff);
  --slider-track-disabled-bg-color: var(--primary-color, rgba(0, 0, 0, 0.25));
  --slider-handle-bg-color: var(--primary-color, #91caff);
  --slider-handle-active-bg-color: var(--primary-color, #1677ff);
  --slider-handle-disabled-bg-color: var(--primary-color, rgba(0, 0, 0, 0.25));
}

:host {
  display: block;
}

.horizontal {
  position: relative;
  height: 4px;
  width: 100%;
  padding-block: 4px;
}

.vertical {
  position: relative;
  height: 100%;
  width: 4px;
  padding-inline: 4px;
}

.slider-rail {
  position: absolute;
  height: 4px;
  width: 100%;
  background-color: var(--slider-rail-bg-color);
  border-radius: 2px;
}
.vertical .slider-rail {
  height: 100%;
  width: 4px;
}

.slider-track {
  position: absolute;
  border-radius: 2px;
  background-color: var(--slider-track-bg-color);
  transition: background-color 0.2s;
}
.horizontal .slider-track {
  left: 0;
  width: 0;
  height: 4px;
}
.vertical .slider-track {
  bottom: 0;
  height: 0;
  width: 4px;
}

.slider-handle {
  position: absolute;
  width: 10px;
  height: 10px;
  outline: none;
  inset-block-start: 1px;
  inset-inline-start: 1px;
}
.horizontal .slider-handle {
  transform: translateX(-50%);
}
.vertical .slider-handle {
  transform: translateY(50%);
}
.slider-handle::before {
  content: " ";
  position: absolute;
  inset-inline-start: -2px;
  inset-block-start: -2px;
  width: 14px;
  height: 14px;
  background-color: transparent;
}
.slider-handle::after {
  content: " ";
  position: absolute;
  height: 10px;
  width: 10px;
  inset-block-start: 0;
  inset-inline-start: 0;
  background-color: #fff;
  box-shadow: 0 0 0 2px var(--slider-handle-bg-color);
  border-radius: 50%;
  transition: inset-inline-start 0.2s, inset-block-start 0.2s, width 0.2s, height 0.2s, box-shadow 0.2s;
}

.slider {
  position: relative;
  cursor: pointer;
}
.slider:hover .slider-track {
  background-color: var(--slider-track-active-bg-color);
}
.slider:hover .slider-handle::before {
  inset-inline-start: -5px;
  inset-block-start: -5px;
  width: 20px;
  height: 20px;
}
.slider:hover .slider-handle::after {
  inset-inline-start: -1px;
  inset-block-start: -1px;
  width: 12px;
  height: 12px;
  box-shadow: 0 0 0 4px var(--slider-handle-active-bg-color);
}
.slider.dragging .slider-track {
  background-color: var(--slider-track-active-bg-color);
}
.slider.dragging .slider-handle::before {
  inset-inline-start: -5px;
  inset-block-start: -5px;
  width: 20px;
  height: 20px;
}
.slider.dragging .slider-handle::after {
  inset-inline-start: -1px;
  inset-block-start: -1px;
  width: 12px;
  height: 12px;
  box-shadow: 0 0 0 4px var(--slider-handle-active-bg-color);
}
.slider.disabled {
  cursor: not-allowed;
}
.slider.disabled .slider-track {
  background-color: var(--slider-track-disabled-bg-color);
}
.slider.disabled .slider-handle::before {
  inset-inline-start: -2px;
  inset-block-start: -2px;
  width: 14px;
  height: 14px;
  background-color: transparent;
}
.slider.disabled .slider-handle::after {
  height: 10px;
  width: 10px;
  inset-block-start: 0;
  inset-inline-start: 0;
  box-shadow: 0 0 0 2px var(--slider-handle-disabled-bg-color);
}`)}`],k([q()],$e.prototype,"isDragging",void 0),k([q()],$e.prototype,"innerValue",void 0);const Kt=Object.freeze({__proto__:null,Button:G,Checkbox:ne,CheckboxGroup:ce,Form:Q,FormItem:se,Input:D,Select:U,Slider:$e,Space:Ee,Switch:le,Transition:F});function Ms(){var s,e;for(const t in Kt)(e=(s=Kt[t]).register)==null||e.call(s)}var td=Object.freeze({__proto__:null,Button:G,Checkbox:ne,CheckboxGroup:ce,Form:Q,FormItem:se,Input:D,Select:U,Slider:$e,Space:Ee,Switch:le,Transition:F,html:z,register:Ms});console.log("vue version",Ws);console.log("others-ui",td);Ms();const wd={extends:Mt,Layout:()=>Ks(Mt.Layout,null,{}),enhanceApp({app:s}){s.mixin({mounted(){es(()=>import("./playground-ide.H868ODN9.js"),__vite__mapDeps([]))}})}};export{wd as R,od as V,id as a,nd as b,ba as c,A as u};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/VPLocalSearchBox.PCBIuFfh.js","assets/chunks/framework.4O-59sfZ.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
