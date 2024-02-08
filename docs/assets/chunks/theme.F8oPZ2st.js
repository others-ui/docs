import{d as k,o as a,c as u,r as p,n as S,a as D,t as M,b as x,w as f,e as _,T as We,_ as $,u as Ns,i as zs,f as Bs,g as gt,h as T,j as we,k as P,l as ae,m as h,p as l,q as X,s as Y,v as pe,x as ht,y as ee,z as Ke,A as bt,B as Qt,C as Os,D as Ds,E as me,F as I,G as O,H as es,I as Xe,J as g,K as he,L as ts,M as Ye,N as Be,O as Je,P as Us,Q as pt,R as ss,S as Rs,U as ns,V as Fs,W as js,X as Gs,Y as Zs,Z as os,$ as is,a0 as qs,a1 as Ws,a2 as Ks,a3 as Xs,a4 as Ys,a5 as Js,a6 as Qs}from"./framework.FMYHWrFI.js";const en=k({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(s){return(e,t)=>(a(),u("span",{class:S(["VPBadge",e.type])},[p(e.$slots,"default",{},()=>[D(M(e.text),1)])],2))}}),tn={key:0,class:"VPBackdrop"},sn=k({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(s){return(e,t)=>(a(),x(We,{name:"fade"},{default:f(()=>[e.show?(a(),u("div",tn)):_("",!0)]),_:1}))}}),nn=$(sn,[["__scopeId","data-v-70d4fffc"]]),A=Ns;function on(s,e){let t,n=!1;return()=>{t&&clearTimeout(t),n?t=setTimeout(s,e):(s(),(n=!0)&&setTimeout(()=>n=!1,e))}}function vt(s){return/^\//.test(s)?s:`/${s}`}function $t(s){const{pathname:e,search:t,hash:n,protocol:o}=new URL(s,"http://a.com");if(zs(s)||s.startsWith("#")||!o.startsWith("http")||!Bs(e))return s;const{site:i}=A(),r=e.endsWith("/")||e.endsWith(".html")?s:s.replace(/(?:(^\.+)\/)?.*$/,`$1${e.replace(/(\.md)?$/,i.value.cleanUrls?"":".html")}${t}${n}`);return gt(r)}const yt=T(we?location.hash:"");we&&window.addEventListener("hashchange",()=>{yt.value=location.hash});function He({removeCurrent:s=!0,correspondingLink:e=!1}={}){const{site:t,localeIndex:n,page:o,theme:i}=A(),r=P(()=>{var c,v;return{label:(c=t.value.locales[n.value])==null?void 0:c.label,link:((v=t.value.locales[n.value])==null?void 0:v.link)||(n.value==="root"?"/":`/${n.value}/`)}});return{localeLinks:P(()=>Object.entries(t.value.locales).flatMap(([c,v])=>s&&r.value.label===v.label?[]:{text:v.label,link:rn(v.link||(c==="root"?"/":`/${c}/`),i.value.i18nRouting!==!1&&e,o.value.relativePath.slice(r.value.link.length-1),!t.value.cleanUrls)+yt.value})),currentLang:r}}function rn(s,e,t,n){return e?s.replace(/\/$/,"")+vt(t.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,n?".html":"")):s}const an=s=>(X("data-v-4937c58f"),s=s(),Y(),s),ln={class:"NotFound"},cn={class:"code"},dn={class:"title"},un=an(()=>h("div",{class:"divider"},null,-1)),hn={class:"quote"},pn={class:"action"},vn=["href","aria-label"],fn=k({__name:"NotFound",setup(s){const{site:e,theme:t}=A(),{localeLinks:n}=He({removeCurrent:!1}),o=T("/");return ae(()=>{var r;const i=window.location.pathname.replace(e.value.base,"").replace(/(^.*?\/).*$/,"/$1");n.value.length&&(o.value=((r=n.value.find(({link:d})=>d.startsWith(i)))==null?void 0:r.link)||n.value[0].link)}),(i,r)=>{var d,c,v,b,m;return a(),u("div",ln,[h("p",cn,M(((d=l(t).notFound)==null?void 0:d.code)??"404"),1),h("h1",dn,M(((c=l(t).notFound)==null?void 0:c.title)??"PAGE NOT FOUND"),1),un,h("blockquote",hn,M(((v=l(t).notFound)==null?void 0:v.quote)??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),h("div",pn,[h("a",{class:"link",href:l(gt)(o.value),"aria-label":((b=l(t).notFound)==null?void 0:b.linkLabel)??"go to home"},M(((m=l(t).notFound)==null?void 0:m.linkText)??"Take me home"),9,vn)])])}}}),mn=$(fn,[["__scopeId","data-v-4937c58f"]]);function rs(s,e){if(Array.isArray(s))return Oe(s);if(s==null)return[];e=vt(e);const t=Object.keys(s).sort((o,i)=>i.split("/").length-o.split("/").length).find(o=>e.startsWith(vt(o))),n=t?s[t]:[];return Array.isArray(n)?Oe(n):Oe(n.items,n.base)}function _n(s){const e=[];let t=0;for(const n in s){const o=s[n];if(o.items){t=e.push(o);continue}e[t]||e.push({items:[]}),e[t].items.push(o)}return e}function gn(s){const e=[];function t(n){for(const o of n)o.text&&o.link&&e.push({text:o.text,link:o.link,docFooterText:o.docFooterText}),o.items&&t(o.items)}return t(s),e}function ft(s,e){return Array.isArray(e)?e.some(t=>ft(s,t)):pe(s,e.link)?!0:e.items?ft(s,e.items):!1}function Oe(s,e){return[...s].map(t=>{const n={...t},o=n.base||e;return o&&n.link&&(n.link=o+n.link),n.items&&(n.items=Oe(n.items,o)),n})}function te(){const{frontmatter:s,page:e,theme:t}=A(),n=ht("(min-width: 960px)"),o=T(!1),i=P(()=>{const H=t.value.sidebar,E=e.value.relativePath;return H?rs(H,E):[]}),r=T(i.value);ee(i,(H,E)=>{JSON.stringify(H)!==JSON.stringify(E)&&(r.value=i.value)});const d=P(()=>s.value.sidebar!==!1&&r.value.length>0&&s.value.layout!=="home"),c=P(()=>v?s.value.aside==null?t.value.aside==="left":s.value.aside==="left":!1),v=P(()=>s.value.layout==="home"?!1:s.value.aside!=null?!!s.value.aside:t.value.aside!==!1),b=P(()=>d.value&&n.value),m=P(()=>d.value?_n(r.value):[]);function L(){o.value=!0}function w(){o.value=!1}function V(){o.value?w():L()}return{isOpen:o,sidebar:r,sidebarGroups:m,hasSidebar:d,hasAside:v,leftAside:c,isSidebarEnabled:b,open:L,close:w,toggle:V}}function bn(s,e){let t;Ke(()=>{t=s.value?document.activeElement:void 0}),ae(()=>{window.addEventListener("keyup",n)}),bt(()=>{window.removeEventListener("keyup",n)});function n(o){o.key==="Escape"&&s.value&&(e(),t==null||t.focus())}}function $n(s){const{page:e}=A(),t=T(!1),n=P(()=>s.value.collapsed!=null),o=P(()=>!!s.value.link),i=T(!1),r=()=>{i.value=pe(e.value.relativePath,s.value.link)};ee([e,s,yt],r),ae(r);const d=P(()=>i.value?!0:s.value.items?ft(e.value.relativePath,s.value.items):!1),c=P(()=>!!(s.value.items&&s.value.items.length));Ke(()=>{t.value=!!(n.value&&s.value.collapsed)}),Qt(()=>{(i.value||d.value)&&(t.value=!1)});function v(){n.value&&(t.value=!t.value)}return{collapsed:t,collapsible:n,isLink:o,isActiveLink:i,hasActiveLink:d,hasChildren:c,toggle:v}}function yn(){const{hasSidebar:s}=te(),e=ht("(min-width: 960px)"),t=ht("(min-width: 1280px)");return{isAsideEnabled:P(()=>!t.value&&!e.value?!1:s.value?t.value:e.value)}}const mt=[];function as(s){return typeof s.outline=="object"&&!Array.isArray(s.outline)&&s.outline.label||s.outlineTitle||"On this page"}function kt(s){const e=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(t=>t.id&&t.hasChildNodes()).map(t=>{const n=Number(t.tagName[1]);return{element:t,title:kn(t),link:"#"+t.id,level:n}});return wn(e,s)}function kn(s){let e="";for(const t of s.childNodes)if(t.nodeType===1){if(t.classList.contains("VPBadge")||t.classList.contains("header-anchor")||t.classList.contains("ignore-header"))continue;e+=t.textContent}else t.nodeType===3&&(e+=t.textContent);return e.trim()}function wn(s,e){if(e===!1)return[];const t=(typeof e=="object"&&!Array.isArray(e)?e.level:e)||2,[n,o]=typeof t=="number"?[t,t]:t==="deep"?[2,6]:t;s=s.filter(r=>r.level>=n&&r.level<=o),mt.length=0;for(const{element:r,link:d}of s)mt.push({element:r,link:d});const i=[];e:for(let r=0;r<s.length;r++){const d=s[r];if(r===0)i.push(d);else{for(let c=r-1;c>=0;c--){const v=s[c];if(v.level<d.level){(v.children||(v.children=[])).push(d);continue e}}i.push(d)}}return i}function xn(s,e){const{isAsideEnabled:t}=yn(),n=on(i,100);let o=null;ae(()=>{requestAnimationFrame(i),window.addEventListener("scroll",n)}),Os(()=>{r(location.hash)}),bt(()=>{window.removeEventListener("scroll",n)});function i(){if(!t.value)return;const d=window.scrollY,c=window.innerHeight,v=document.body.offsetHeight,b=Math.abs(d+c-v)<1,m=mt.map(({element:w,link:V})=>({link:V,top:Cn(w)})).filter(({top:w})=>!Number.isNaN(w)).sort((w,V)=>w.top-V.top);if(!m.length){r(null);return}if(d<1){r(null);return}if(b){r(m[m.length-1].link);return}let L=null;for(const{link:w,top:V}of m){if(V>d+Ds()+4)break;L=w}r(L)}function r(d){o&&o.classList.remove("active"),d==null?o=null:o=s.value.querySelector(`a[href="${decodeURIComponent(d)}"]`);const c=o;c?(c.classList.add("active"),e.value.style.top=c.offsetTop+39+"px",e.value.style.opacity="1"):(e.value.style.top="33px",e.value.style.opacity="0")}}function Cn(s){let e=0;for(;s!==document.body;){if(s===null)return NaN;e+=s.offsetTop,s=s.offsetParent}return e}const Ln=["href","title"],Pn=k({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(s){function e({target:t}){const n=t.href.split("#")[1],o=document.getElementById(decodeURIComponent(n));o==null||o.focus({preventScroll:!0})}return(t,n)=>{const o=me("VPDocOutlineItem",!0);return a(),u("ul",{class:S(["VPDocOutlineItem",t.root?"root":"nested"])},[(a(!0),u(I,null,O(t.headers,({children:i,link:r,title:d})=>(a(),u("li",null,[h("a",{class:"outline-link",href:r,onClick:e,title:d},M(d),9,Ln),i!=null&&i.length?(a(),x(o,{key:0,headers:i},null,8,["headers"])):_("",!0)]))),256))],2)}}}),ls=$(Pn,[["__scopeId","data-v-93594584"]]),Vn=s=>(X("data-v-207236d0"),s=s(),Y(),s),Sn={class:"content"},An={class:"outline-title",role:"heading","aria-level":"2"},Mn={"aria-labelledby":"doc-outline-aria-label"},En=Vn(()=>h("span",{class:"visually-hidden",id:"doc-outline-aria-label"}," Table of Contents for current page ",-1)),Tn=k({__name:"VPDocAsideOutline",setup(s){const{frontmatter:e,theme:t}=A(),n=es([]);Xe(()=>{n.value=kt(e.value.outline??t.value.outline)});const o=T(),i=T();return xn(o,i),(r,d)=>(a(),u("div",{class:S(["VPDocAsideOutline",{"has-outline":n.value.length>0}]),ref_key:"container",ref:o,role:"navigation"},[h("div",Sn,[h("div",{class:"outline-marker",ref_key:"marker",ref:i},null,512),h("div",An,M(l(as)(l(t))),1),h("nav",Mn,[En,g(ls,{headers:n.value,root:!0},null,8,["headers"])])])],2))}}),Hn=$(Tn,[["__scopeId","data-v-207236d0"]]),In={class:"VPDocAsideCarbonAds"},Nn=k({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(s){const e=()=>null;return(t,n)=>(a(),u("div",In,[g(l(e),{"carbon-ads":t.carbonAds},null,8,["carbon-ads"])]))}}),zn=s=>(X("data-v-bb1eb68e"),s=s(),Y(),s),Bn={class:"VPDocAside"},On=zn(()=>h("div",{class:"spacer"},null,-1)),Dn=k({__name:"VPDocAside",setup(s){const{theme:e}=A();return(t,n)=>(a(),u("div",Bn,[p(t.$slots,"aside-top",{},void 0,!0),p(t.$slots,"aside-outline-before",{},void 0,!0),g(Hn),p(t.$slots,"aside-outline-after",{},void 0,!0),On,p(t.$slots,"aside-ads-before",{},void 0,!0),l(e).carbonAds?(a(),x(Nn,{key:0,"carbon-ads":l(e).carbonAds},null,8,["carbon-ads"])):_("",!0),p(t.$slots,"aside-ads-after",{},void 0,!0),p(t.$slots,"aside-bottom",{},void 0,!0)]))}}),Un=$(Dn,[["__scopeId","data-v-bb1eb68e"]]);function Rn(){const{theme:s,page:e}=A();return P(()=>{const{text:t="Edit this page",pattern:n=""}=s.value.editLink||{};let o;return typeof n=="function"?o=n(e.value):o=n.replace(/:path/g,e.value.filePath),{url:o,text:t}})}function Fn(){const{page:s,theme:e,frontmatter:t}=A();return P(()=>{var c,v,b,m,L,w,V,H;const n=rs(e.value.sidebar,s.value.relativePath),o=gn(n),i=o.findIndex(E=>pe(s.value.relativePath,E.link)),r=((c=e.value.docFooter)==null?void 0:c.prev)===!1&&!t.value.prev||t.value.prev===!1,d=((v=e.value.docFooter)==null?void 0:v.next)===!1&&!t.value.next||t.value.next===!1;return{prev:r?void 0:{text:(typeof t.value.prev=="string"?t.value.prev:typeof t.value.prev=="object"?t.value.prev.text:void 0)??((b=o[i-1])==null?void 0:b.docFooterText)??((m=o[i-1])==null?void 0:m.text),link:(typeof t.value.prev=="object"?t.value.prev.link:void 0)??((L=o[i-1])==null?void 0:L.link)},next:d?void 0:{text:(typeof t.value.next=="string"?t.value.next:typeof t.value.next=="object"?t.value.next.text:void 0)??((w=o[i+1])==null?void 0:w.docFooterText)??((V=o[i+1])==null?void 0:V.text),link:(typeof t.value.next=="object"?t.value.next.link:void 0)??((H=o[i+1])==null?void 0:H.link)}}})}const jn={},Gn={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Zn=h("path",{d:"M18,23H4c-1.7,0-3-1.3-3-3V6c0-1.7,1.3-3,3-3h7c0.6,0,1,0.4,1,1s-0.4,1-1,1H4C3.4,5,3,5.4,3,6v14c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1v-7c0-0.6,0.4-1,1-1s1,0.4,1,1v7C21,21.7,19.7,23,18,23z"},null,-1),qn=h("path",{d:"M8,17c-0.3,0-0.5-0.1-0.7-0.3C7,16.5,6.9,16.1,7,15.8l1-4c0-0.2,0.1-0.3,0.3-0.5l9.5-9.5c1.2-1.2,3.2-1.2,4.4,0c1.2,1.2,1.2,3.2,0,4.4l-9.5,9.5c-0.1,0.1-0.3,0.2-0.5,0.3l-4,1C8.2,17,8.1,17,8,17zM9.9,12.5l-0.5,2.1l2.1-0.5l9.3-9.3c0.4-0.4,0.4-1.1,0-1.6c-0.4-0.4-1.2-0.4-1.6,0l0,0L9.9,12.5z M18.5,2.5L18.5,2.5L18.5,2.5z"},null,-1),Wn=[Zn,qn];function Kn(s,e){return a(),u("svg",Gn,Wn)}const Xn=$(jn,[["render",Kn]]),j=k({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(s){const e=s,t=P(()=>e.tag??(e.href?"a":"span")),n=P(()=>e.href&&ts.test(e.href));return(o,i)=>(a(),x(he(t.value),{class:S(["VPLink",{link:o.href,"vp-external-link-icon":n.value,"no-icon":o.noIcon}]),href:o.href?l($t)(o.href):void 0,target:o.target??(n.value?"_blank":void 0),rel:o.rel??(n.value?"noreferrer":void 0)},{default:f(()=>[p(o.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),Yn={class:"VPLastUpdated"},Jn=["datetime"],Qn=k({__name:"VPDocFooterLastUpdated",setup(s){const{theme:e,page:t,frontmatter:n,lang:o}=A(),i=P(()=>new Date(n.value.lastUpdated??t.value.lastUpdated)),r=P(()=>i.value.toISOString()),d=T("");return ae(()=>{Ke(()=>{var c,v,b;d.value=new Intl.DateTimeFormat((v=(c=e.value.lastUpdated)==null?void 0:c.formatOptions)!=null&&v.forceLocale?o.value:void 0,((b=e.value.lastUpdated)==null?void 0:b.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(i.value)})}),(c,v)=>{var b;return a(),u("p",Yn,[D(M(((b=l(e).lastUpdated)==null?void 0:b.text)||l(e).lastUpdatedText||"Last updated")+": ",1),h("time",{datetime:r.value},M(d.value),9,Jn)])}}}),eo=$(Qn,[["__scopeId","data-v-2b1b52a9"]]),to={key:0,class:"VPDocFooter"},so={key:0,class:"edit-info"},no={key:0,class:"edit-link"},oo={key:1,class:"last-updated"},io={key:1,class:"prev-next"},ro={class:"pager"},ao=["innerHTML"],lo=["innerHTML"],co={class:"pager"},uo=["innerHTML"],ho=["innerHTML"],po=k({__name:"VPDocFooter",setup(s){const{theme:e,page:t,frontmatter:n}=A(),o=Rn(),i=Fn(),r=P(()=>e.value.editLink&&n.value.editLink!==!1),d=P(()=>t.value.lastUpdated&&n.value.lastUpdated!==!1),c=P(()=>r.value||d.value||i.value.prev||i.value.next);return(v,b)=>{var m,L,w,V;return c.value?(a(),u("footer",to,[p(v.$slots,"doc-footer-before",{},void 0,!0),r.value||d.value?(a(),u("div",so,[r.value?(a(),u("div",no,[g(j,{class:"edit-link-button",href:l(o).url,"no-icon":!0},{default:f(()=>[g(Xn,{class:"edit-link-icon","aria-label":"edit icon"}),D(" "+M(l(o).text),1)]),_:1},8,["href"])])):_("",!0),d.value?(a(),u("div",oo,[g(eo)])):_("",!0)])):_("",!0),(m=l(i).prev)!=null&&m.link||(L=l(i).next)!=null&&L.link?(a(),u("nav",io,[h("div",ro,[(w=l(i).prev)!=null&&w.link?(a(),x(j,{key:0,class:"pager-link prev",href:l(i).prev.link},{default:f(()=>{var H;return[h("span",{class:"desc",innerHTML:((H=l(e).docFooter)==null?void 0:H.prev)||"Previous page"},null,8,ao),h("span",{class:"title",innerHTML:l(i).prev.text},null,8,lo)]}),_:1},8,["href"])):_("",!0)]),h("div",co,[(V=l(i).next)!=null&&V.link?(a(),x(j,{key:0,class:"pager-link next",href:l(i).next.link},{default:f(()=>{var H;return[h("span",{class:"desc",innerHTML:((H=l(e).docFooter)==null?void 0:H.next)||"Next page"},null,8,uo),h("span",{class:"title",innerHTML:l(i).next.text},null,8,ho)]}),_:1},8,["href"])):_("",!0)])])):_("",!0)])):_("",!0)}}}),vo=$(po,[["__scopeId","data-v-958d153e"]]),fo=s=>(X("data-v-30fbb6ec"),s=s(),Y(),s),mo={class:"container"},_o=fo(()=>h("div",{class:"aside-curtain"},null,-1)),go={class:"aside-container"},bo={class:"aside-content"},$o={class:"content"},yo={class:"content-container"},ko={class:"main"},wo=k({__name:"VPDoc",setup(s){const{theme:e}=A(),t=Ye(),{hasSidebar:n,hasAside:o,leftAside:i}=te(),r=P(()=>t.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(d,c)=>{const v=me("Content");return a(),u("div",{class:S(["VPDoc",{"has-sidebar":l(n),"has-aside":l(o)}])},[p(d.$slots,"doc-top",{},void 0,!0),h("div",mo,[l(o)?(a(),u("div",{key:0,class:S(["aside",{"left-aside":l(i)}])},[_o,h("div",go,[h("div",bo,[g(Un,null,{"aside-top":f(()=>[p(d.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":f(()=>[p(d.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":f(()=>[p(d.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":f(()=>[p(d.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":f(()=>[p(d.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":f(()=>[p(d.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):_("",!0),h("div",$o,[h("div",yo,[p(d.$slots,"doc-before",{},void 0,!0),h("main",ko,[g(v,{class:S(["vp-doc",[r.value,l(e).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),g(vo,null,{"doc-footer-before":f(()=>[p(d.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),p(d.$slots,"doc-after",{},void 0,!0)])])]),p(d.$slots,"doc-bottom",{},void 0,!0)],2)}}}),xo=$(wo,[["__scopeId","data-v-30fbb6ec"]]),Co=k({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{}},setup(s){const e=s,t=P(()=>e.href&&ts.test(e.href)),n=P(()=>e.tag||e.href?"a":"button");return(o,i)=>(a(),x(he(n.value),{class:S(["VPButton",[o.size,o.theme]]),href:o.href?l($t)(o.href):void 0,target:t.value?"_blank":void 0,rel:t.value?"noreferrer":void 0},{default:f(()=>[D(M(o.text),1)]),_:1},8,["class","href","target","rel"]))}}),Lo=$(Co,[["__scopeId","data-v-faef13b1"]]),Po=["src","alt"],Vo=k({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(s){return(e,t)=>{const n=me("VPImage",!0);return e.image?(a(),u(I,{key:0},[typeof e.image=="string"||"src"in e.image?(a(),u("img",Be({key:0,class:"VPImage"},typeof e.image=="string"?e.$attrs:{...e.image,...e.$attrs},{src:l(gt)(typeof e.image=="string"?e.image:e.image.src),alt:e.alt??(typeof e.image=="string"?"":e.image.alt||"")}),null,16,Po)):(a(),u(I,{key:1},[g(n,Be({class:"dark",image:e.image.dark,alt:e.image.alt},e.$attrs),null,16,["image","alt"]),g(n,Be({class:"light",image:e.image.light,alt:e.image.alt},e.$attrs),null,16,["image","alt"])],64))],64)):_("",!0)}}}),Fe=$(Vo,[["__scopeId","data-v-858ab8dd"]]),So=s=>(X("data-v-d9aef2c3"),s=s(),Y(),s),Ao={class:"container"},Mo={class:"main"},Eo={key:0,class:"name"},To=["innerHTML"],Ho=["innerHTML"],Io=["innerHTML"],No={key:0,class:"actions"},zo={key:0,class:"image"},Bo={class:"image-container"},Oo=So(()=>h("div",{class:"image-bg"},null,-1)),Do=k({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(s){const e=Je("hero-image-slot-exists");return(t,n)=>(a(),u("div",{class:S(["VPHero",{"has-image":t.image||l(e)}])},[h("div",Ao,[h("div",Mo,[p(t.$slots,"home-hero-info",{},()=>[t.name?(a(),u("h1",Eo,[h("span",{innerHTML:t.name,class:"clip"},null,8,To)])):_("",!0),t.text?(a(),u("p",{key:1,innerHTML:t.text,class:"text"},null,8,Ho)):_("",!0),t.tagline?(a(),u("p",{key:2,innerHTML:t.tagline,class:"tagline"},null,8,Io)):_("",!0)],!0),t.actions?(a(),u("div",No,[(a(!0),u(I,null,O(t.actions,o=>(a(),u("div",{key:o.link,class:"action"},[g(Lo,{tag:"a",size:"medium",theme:o.theme,text:o.text,href:o.link},null,8,["theme","text","href"])]))),128))])):_("",!0)]),t.image||l(e)?(a(),u("div",zo,[h("div",Bo,[Oo,p(t.$slots,"home-hero-image",{},()=>[t.image?(a(),x(Fe,{key:0,class:"image-src",image:t.image},null,8,["image"])):_("",!0)],!0)])])):_("",!0)])],2))}}),Uo=$(Do,[["__scopeId","data-v-d9aef2c3"]]),Ro=k({__name:"VPHomeHero",setup(s){const{frontmatter:e}=A();return(t,n)=>l(e).hero?(a(),x(Uo,{key:0,class:"VPHomeHero",name:l(e).hero.name,text:l(e).hero.text,tagline:l(e).hero.tagline,image:l(e).hero.image,actions:l(e).hero.actions},{"home-hero-info":f(()=>[p(t.$slots,"home-hero-info")]),"home-hero-image":f(()=>[p(t.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):_("",!0)}}),Fo={},jo={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Go=h("path",{d:"M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z"},null,-1),Zo=[Go];function qo(s,e){return a(),u("svg",jo,Zo)}const Wo=$(Fo,[["render",qo]]),Ko={class:"box"},Xo={key:0,class:"icon"},Yo=["innerHTML"],Jo=["innerHTML"],Qo=["innerHTML"],ei={key:4,class:"link-text"},ti={class:"link-text-value"},si=k({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(s){return(e,t)=>(a(),x(j,{class:"VPFeature",href:e.link,rel:e.rel,target:e.target,"no-icon":!0,tag:e.link?"a":"div"},{default:f(()=>[h("article",Ko,[typeof e.icon=="object"&&e.icon.wrap?(a(),u("div",Xo,[g(Fe,{image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])])):typeof e.icon=="object"?(a(),x(Fe,{key:1,image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])):e.icon?(a(),u("div",{key:2,class:"icon",innerHTML:e.icon},null,8,Yo)):_("",!0),h("h2",{class:"title",innerHTML:e.title},null,8,Jo),e.details?(a(),u("p",{key:3,class:"details",innerHTML:e.details},null,8,Qo)):_("",!0),e.linkText?(a(),u("div",ei,[h("p",ti,[D(M(e.linkText)+" ",1),g(Wo,{class:"link-text-icon"})])])):_("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),ni=$(si,[["__scopeId","data-v-194f19bf"]]),oi={key:0,class:"VPFeatures"},ii={class:"container"},ri={class:"items"},ai=k({__name:"VPFeatures",props:{features:{}},setup(s){const e=s,t=P(()=>{const n=e.features.length;if(n){if(n===2)return"grid-2";if(n===3)return"grid-3";if(n%3===0)return"grid-6";if(n>3)return"grid-4"}else return});return(n,o)=>n.features?(a(),u("div",oi,[h("div",ii,[h("div",ri,[(a(!0),u(I,null,O(n.features,i=>(a(),u("div",{key:i.title,class:S(["item",[t.value]])},[g(ni,{icon:i.icon,title:i.title,details:i.details,link:i.link,"link-text":i.linkText,rel:i.rel,target:i.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):_("",!0)}}),li=$(ai,[["__scopeId","data-v-2cafa537"]]),ci=k({__name:"VPHomeFeatures",setup(s){const{frontmatter:e}=A();return(t,n)=>l(e).features?(a(),x(li,{key:0,class:"VPHomeFeatures",features:l(e).features},null,8,["features"])):_("",!0)}}),di={class:"VPHome"},ui=k({__name:"VPHome",setup(s){return(e,t)=>{const n=me("Content");return a(),u("div",di,[p(e.$slots,"home-hero-before",{},void 0,!0),g(Ro,null,{"home-hero-info":f(()=>[p(e.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-image":f(()=>[p(e.$slots,"home-hero-image",{},void 0,!0)]),_:3}),p(e.$slots,"home-hero-after",{},void 0,!0),p(e.$slots,"home-features-before",{},void 0,!0),g(ci),p(e.$slots,"home-features-after",{},void 0,!0),g(n)])}}}),hi=$(ui,[["__scopeId","data-v-05a34a90"]]),pi={},vi={class:"VPPage"};function fi(s,e){const t=me("Content");return a(),u("div",vi,[p(s.$slots,"page-top"),g(t),p(s.$slots,"page-bottom")])}const mi=$(pi,[["render",fi]]),_i=k({__name:"VPContent",setup(s){const{page:e,frontmatter:t}=A(),{hasSidebar:n}=te();return(o,i)=>(a(),u("div",{class:S(["VPContent",{"has-sidebar":l(n),"is-home":l(t).layout==="home"}]),id:"VPContent"},[l(e).isNotFound?p(o.$slots,"not-found",{key:0},()=>[g(mn)],!0):l(t).layout==="page"?(a(),x(mi,{key:1},{"page-top":f(()=>[p(o.$slots,"page-top",{},void 0,!0)]),"page-bottom":f(()=>[p(o.$slots,"page-bottom",{},void 0,!0)]),_:3})):l(t).layout==="home"?(a(),x(hi,{key:2},{"home-hero-before":f(()=>[p(o.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info":f(()=>[p(o.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-image":f(()=>[p(o.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":f(()=>[p(o.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":f(()=>[p(o.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":f(()=>[p(o.$slots,"home-features-after",{},void 0,!0)]),_:3})):l(t).layout&&l(t).layout!=="doc"?(a(),x(he(l(t).layout),{key:3})):(a(),x(xo,{key:4},{"doc-top":f(()=>[p(o.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":f(()=>[p(o.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":f(()=>[p(o.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":f(()=>[p(o.$slots,"doc-before",{},void 0,!0)]),"doc-after":f(()=>[p(o.$slots,"doc-after",{},void 0,!0)]),"aside-top":f(()=>[p(o.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":f(()=>[p(o.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":f(()=>[p(o.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":f(()=>[p(o.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":f(()=>[p(o.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":f(()=>[p(o.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),gi=$(_i,[["__scopeId","data-v-b87d9de3"]]),bi={class:"container"},$i=["innerHTML"],yi=["innerHTML"],ki=k({__name:"VPFooter",setup(s){const{theme:e,frontmatter:t}=A(),{hasSidebar:n}=te();return(o,i)=>l(e).footer&&l(t).footer!==!1?(a(),u("footer",{key:0,class:S(["VPFooter",{"has-sidebar":l(n)}])},[h("div",bi,[l(e).footer.message?(a(),u("p",{key:0,class:"message",innerHTML:l(e).footer.message},null,8,$i)):_("",!0),l(e).footer.copyright?(a(),u("p",{key:1,class:"copyright",innerHTML:l(e).footer.copyright},null,8,yi)):_("",!0)])],2)):_("",!0)}}),wi=$(ki,[["__scopeId","data-v-c9a5a8b8"]]);function cs(){const{theme:s,frontmatter:e}=A(),t=es([]),n=P(()=>t.value.length>0);return Xe(()=>{t.value=kt(e.value.outline??s.value.outline)}),{headers:t,hasLocalNav:n}}const xi={},Ci={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},Li=h("path",{d:"M9,19c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l5.3-5.3L8.3,6.7c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l6,6c0.4,0.4,0.4,1,0,1.4l-6,6C9.5,18.9,9.3,19,9,19z"},null,-1),Pi=[Li];function Vi(s,e){return a(),u("svg",Ci,Pi)}const ds=$(xi,[["render",Vi]]),Si={class:"header"},Ai={class:"outline"},Mi=k({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(s){const e=s,{theme:t}=A(),n=T(!1),o=T(0),i=T(),r=T();Us(i,()=>{n.value=!1}),pt("Escape",()=>{n.value=!1}),Xe(()=>{n.value=!1});function d(){n.value=!n.value,o.value=window.innerHeight+Math.min(window.scrollY-e.navHeight,0)}function c(b){b.target.classList.contains("outline-link")&&(r.value&&(r.value.style.transition="none"),Rs(()=>{n.value=!1}))}function v(){n.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(b,m)=>(a(),u("div",{class:"VPLocalNavOutlineDropdown",style:ss({"--vp-vh":o.value+"px"}),ref_key:"main",ref:i},[b.headers.length>0?(a(),u("button",{key:0,onClick:d,class:S({open:n.value})},[D(M(l(as)(l(t)))+" ",1),g(ds,{class:"icon"})],2)):(a(),u("button",{key:1,onClick:v},M(l(t).returnToTopLabel||"Return to top"),1)),g(We,{name:"flyout"},{default:f(()=>[n.value?(a(),u("div",{key:0,ref_key:"items",ref:r,class:"items",onClick:c},[h("div",Si,[h("a",{class:"top-link",href:"#",onClick:v},M(l(t).returnToTopLabel||"Return to top"),1)]),h("div",Ai,[g(ls,{headers:b.headers},null,8,["headers"])])],512)):_("",!0)]),_:1})],4))}}),Ei=$(Mi,[["__scopeId","data-v-fe15514d"]]),Ti={},Hi={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},Ii=h("path",{d:"M17,11H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,11,17,11z"},null,-1),Ni=h("path",{d:"M21,7H3C2.4,7,2,6.6,2,6s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,7,21,7z"},null,-1),zi=h("path",{d:"M21,15H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,15,21,15z"},null,-1),Bi=h("path",{d:"M17,19H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,19,17,19z"},null,-1),Oi=[Ii,Ni,zi,Bi];function Di(s,e){return a(),u("svg",Hi,Oi)}const Ui=$(Ti,[["render",Di]]),Ri={class:"container"},Fi=["aria-expanded"],ji={class:"menu-text"},Gi=k({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(s){const{theme:e,frontmatter:t}=A(),{hasSidebar:n}=te(),{headers:o}=cs(),{y:i}=ns(),r=T(0);ae(()=>{r.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),Xe(()=>{o.value=kt(t.value.outline??e.value.outline)});const d=P(()=>o.value.length===0),c=P(()=>d.value&&!n.value),v=P(()=>({VPLocalNav:!0,"has-sidebar":n.value,empty:d.value,fixed:c.value}));return(b,m)=>l(t).layout!=="home"&&(!c.value||l(i)>=r.value)?(a(),u("div",{key:0,class:S(v.value)},[h("div",Ri,[l(n)?(a(),u("button",{key:0,class:"menu","aria-expanded":b.open,"aria-controls":"VPSidebarNav",onClick:m[0]||(m[0]=L=>b.$emit("open-menu"))},[g(Ui,{class:"menu-icon"}),h("span",ji,M(l(e).sidebarMenuLabel||"Menu"),1)],8,Fi)):_("",!0),g(Ei,{headers:l(o),navHeight:r.value},null,8,["headers","navHeight"])])],2)):_("",!0)}}),Zi=$(Gi,[["__scopeId","data-v-889beffb"]]);function qi(){const s=T(!1);function e(){s.value=!0,window.addEventListener("resize",o)}function t(){s.value=!1,window.removeEventListener("resize",o)}function n(){s.value?t():e()}function o(){window.outerWidth>=768&&t()}const i=Ye();return ee(()=>i.path,t),{isScreenOpen:s,openScreen:e,closeScreen:t,toggleScreen:n}}const Wi={},Ki={class:"VPSwitch",type:"button",role:"switch"},Xi={class:"check"},Yi={key:0,class:"icon"};function Ji(s,e){return a(),u("button",Ki,[h("span",Xi,[s.$slots.default?(a(),u("span",Yi,[p(s.$slots,"default",{},void 0,!0)])):_("",!0)])])}const Qi=$(Wi,[["render",Ji],["__scopeId","data-v-dd3b874c"]]),er={},tr={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},sr=h("path",{d:"M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z"},null,-1),nr=[sr];function or(s,e){return a(),u("svg",tr,nr)}const ir=$(er,[["render",or]]),rr={},ar={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},lr=Fs('<path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path><path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path><path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path><path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path><path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path><path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path><path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path><path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path><path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path>',9),cr=[lr];function dr(s,e){return a(),u("svg",ar,cr)}const ur=$(rr,[["render",dr]]),hr=k({__name:"VPSwitchAppearance",setup(s){const{isDark:e,theme:t}=A(),n=Je("toggle-appearance",()=>{e.value=!e.value}),o=P(()=>e.value?t.value.lightModeSwitchTitle||"Switch to light theme":t.value.darkModeSwitchTitle||"Switch to dark theme");return(i,r)=>(a(),x(Qi,{title:o.value,class:"VPSwitchAppearance","aria-checked":l(e),onClick:l(n)},{default:f(()=>[g(ur,{class:"sun"}),g(ir,{class:"moon"})]),_:1},8,["title","aria-checked","onClick"]))}}),wt=$(hr,[["__scopeId","data-v-97db7747"]]),pr={key:0,class:"VPNavBarAppearance"},vr=k({__name:"VPNavBarAppearance",setup(s){const{site:e}=A();return(t,n)=>l(e).appearance&&l(e).appearance!=="force-dark"?(a(),u("div",pr,[g(wt)])):_("",!0)}}),fr=$(vr,[["__scopeId","data-v-25d8dccb"]]),xt=T();let us=!1,it=0;function mr(s){const e=T(!1);if(we){!us&&_r(),it++;const t=ee(xt,n=>{var o,i,r;n===s.el.value||(o=s.el.value)!=null&&o.contains(n)?(e.value=!0,(i=s.onFocus)==null||i.call(s)):(e.value=!1,(r=s.onBlur)==null||r.call(s))});bt(()=>{t(),it--,it||gr()})}return js(e)}function _r(){document.addEventListener("focusin",hs),us=!0,xt.value=document.activeElement}function gr(){document.removeEventListener("focusin",hs)}function hs(){xt.value=document.activeElement}const br={},$r={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},yr=h("path",{d:"M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z"},null,-1),kr=[yr];function wr(s,e){return a(),u("svg",$r,kr)}const ps=$(br,[["render",wr]]),xr={},Cr={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},Lr=h("circle",{cx:"12",cy:"12",r:"2"},null,-1),Pr=h("circle",{cx:"19",cy:"12",r:"2"},null,-1),Vr=h("circle",{cx:"5",cy:"12",r:"2"},null,-1),Sr=[Lr,Pr,Vr];function Ar(s,e){return a(),u("svg",Cr,Sr)}const Mr=$(xr,[["render",Ar]]),Er={class:"VPMenuLink"},Tr=k({__name:"VPMenuLink",props:{item:{}},setup(s){const{page:e}=A();return(t,n)=>(a(),u("div",Er,[g(j,{class:S({active:l(pe)(l(e).relativePath,t.item.activeMatch||t.item.link,!!t.item.activeMatch)}),href:t.item.link,target:t.item.target,rel:t.item.rel},{default:f(()=>[D(M(t.item.text),1)]),_:1},8,["class","href","target","rel"])]))}}),Qe=$(Tr,[["__scopeId","data-v-dcd5b7ea"]]),Hr={class:"VPMenuGroup"},Ir={key:0,class:"title"},Nr=k({__name:"VPMenuGroup",props:{text:{},items:{}},setup(s){return(e,t)=>(a(),u("div",Hr,[e.text?(a(),u("p",Ir,M(e.text),1)):_("",!0),(a(!0),u(I,null,O(e.items,n=>(a(),u(I,null,["link"in n?(a(),x(Qe,{key:0,item:n},null,8,["item"])):_("",!0)],64))),256))]))}}),zr=$(Nr,[["__scopeId","data-v-41e38f02"]]),Br={class:"VPMenu"},Or={key:0,class:"items"},Dr=k({__name:"VPMenu",props:{items:{}},setup(s){return(e,t)=>(a(),u("div",Br,[e.items?(a(),u("div",Or,[(a(!0),u(I,null,O(e.items,n=>(a(),u(I,{key:n.text},["link"in n?(a(),x(Qe,{key:0,item:n},null,8,["item"])):(a(),x(zr,{key:1,text:n.text,items:n.items},null,8,["text","items"]))],64))),128))])):_("",!0),p(e.$slots,"default",{},void 0,!0)]))}}),Ur=$(Dr,[["__scopeId","data-v-94a7ac15"]]),Rr=["aria-expanded","aria-label"],Fr={key:0,class:"text"},jr=["innerHTML"],Gr={class:"menu"},Zr=k({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(s){const e=T(!1),t=T();mr({el:t,onBlur:n});function n(){e.value=!1}return(o,i)=>(a(),u("div",{class:"VPFlyout",ref_key:"el",ref:t,onMouseenter:i[1]||(i[1]=r=>e.value=!0),onMouseleave:i[2]||(i[2]=r=>e.value=!1)},[h("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":e.value,"aria-label":o.label,onClick:i[0]||(i[0]=r=>e.value=!e.value)},[o.button||o.icon?(a(),u("span",Fr,[o.icon?(a(),x(he(o.icon),{key:0,class:"option-icon"})):_("",!0),o.button?(a(),u("span",{key:1,innerHTML:o.button},null,8,jr)):_("",!0),g(ps,{class:"text-icon"})])):(a(),x(Mr,{key:1,class:"icon"}))],8,Rr),h("div",Gr,[g(Ur,{items:o.items},{default:f(()=>[p(o.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),Ct=$(Zr,[["__scopeId","data-v-2dea9909"]]),qr={discord:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Discord</title><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>',facebook:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',github:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',instagram:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>',linkedin:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',mastodon:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Mastodon</title><path d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z"/></svg>',slack:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Slack</title><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/></svg>',twitter:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148 13.98 13.98 0 0 0 11.82 8.292a4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z"/></svg>',x:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>',youtube:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>'},Wr=["href","aria-label","innerHTML"],Kr=k({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(s){const e=s,t=P(()=>typeof e.icon=="object"?e.icon.svg:qr[e.icon]);return(n,o)=>(a(),u("a",{class:"VPSocialLink no-icon",href:n.link,"aria-label":n.ariaLabel??(typeof n.icon=="string"?n.icon:""),target:"_blank",rel:"noopener",innerHTML:t.value},null,8,Wr))}}),Xr=$(Kr,[["__scopeId","data-v-3709e407"]]),Yr={class:"VPSocialLinks"},Jr=k({__name:"VPSocialLinks",props:{links:{}},setup(s){return(e,t)=>(a(),u("div",Yr,[(a(!0),u(I,null,O(e.links,({link:n,icon:o,ariaLabel:i})=>(a(),x(Xr,{key:n,icon:o,link:n,ariaLabel:i},null,8,["icon","link","ariaLabel"]))),128))]))}}),et=$(Jr,[["__scopeId","data-v-d7dd5a63"]]),Qr={key:0,class:"group translations"},ea={class:"trans-title"},ta={key:1,class:"group"},sa={class:"item appearance"},na={class:"label"},oa={class:"appearance-action"},ia={key:2,class:"group"},ra={class:"item social-links"},aa=k({__name:"VPNavBarExtra",setup(s){const{site:e,theme:t}=A(),{localeLinks:n,currentLang:o}=He({correspondingLink:!0}),i=P(()=>n.value.length&&o.value.label||e.value.appearance||t.value.socialLinks);return(r,d)=>i.value?(a(),x(Ct,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:f(()=>[l(n).length&&l(o).label?(a(),u("div",Qr,[h("p",ea,M(l(o).label),1),(a(!0),u(I,null,O(l(n),c=>(a(),x(Qe,{key:c.link,item:c},null,8,["item"]))),128))])):_("",!0),l(e).appearance&&l(e).appearance!=="force-dark"?(a(),u("div",ta,[h("div",sa,[h("p",na,M(l(t).darkModeSwitchLabel||"Appearance"),1),h("div",oa,[g(wt)])])])):_("",!0),l(t).socialLinks?(a(),u("div",ia,[h("div",ra,[g(et,{class:"social-links-list",links:l(t).socialLinks},null,8,["links"])])])):_("",!0)]),_:1})):_("",!0)}}),la=$(aa,[["__scopeId","data-v-4585a48a"]]),ca=s=>(X("data-v-85120192"),s=s(),Y(),s),da=["aria-expanded"],ua=ca(()=>h("span",{class:"container"},[h("span",{class:"top"}),h("span",{class:"middle"}),h("span",{class:"bottom"})],-1)),ha=[ua],pa=k({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(s){return(e,t)=>(a(),u("button",{type:"button",class:S(["VPNavBarHamburger",{active:e.active}]),"aria-label":"mobile navigation","aria-expanded":e.active,"aria-controls":"VPNavScreen",onClick:t[0]||(t[0]=n=>e.$emit("click"))},ha,10,da))}}),va=$(pa,[["__scopeId","data-v-85120192"]]),fa=["innerHTML"],ma=k({__name:"VPNavBarMenuLink",props:{item:{}},setup(s){const{page:e}=A();return(t,n)=>(a(),x(j,{class:S({VPNavBarMenuLink:!0,active:l(pe)(l(e).relativePath,t.item.activeMatch||t.item.link,!!t.item.activeMatch)}),href:t.item.link,target:t.item.target,rel:t.item.rel,tabindex:"0"},{default:f(()=>[h("span",{innerHTML:t.item.text},null,8,fa)]),_:1},8,["class","href","target","rel"]))}}),_a=$(ma,[["__scopeId","data-v-fac5fcc9"]]),ga=k({__name:"VPNavBarMenuGroup",props:{item:{}},setup(s){const e=s,{page:t}=A(),n=i=>"link"in i?pe(t.value.relativePath,i.link,!!e.item.activeMatch):i.items.some(n),o=P(()=>n(e.item));return(i,r)=>(a(),x(Ct,{class:S({VPNavBarMenuGroup:!0,active:l(pe)(l(t).relativePath,i.item.activeMatch,!!i.item.activeMatch)||o.value}),button:i.item.text,items:i.item.items},null,8,["class","button","items"]))}}),ba=s=>(X("data-v-19a25a12"),s=s(),Y(),s),$a={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},ya=ba(()=>h("span",{id:"main-nav-aria-label",class:"visually-hidden"},"Main Navigation",-1)),ka=k({__name:"VPNavBarMenu",setup(s){const{theme:e}=A();return(t,n)=>l(e).nav?(a(),u("nav",$a,[ya,(a(!0),u(I,null,O(l(e).nav,o=>(a(),u(I,{key:o.text},["link"in o?(a(),x(_a,{key:0,item:o},null,8,["item"])):(a(),x(ga,{key:1,item:o},null,8,["item"]))],64))),128))])):_("",!0)}}),wa=$(ka,[["__scopeId","data-v-19a25a12"]]);function xa(s){const{localeIndex:e,theme:t}=A();function n(o){var V,H,E;const i=o.split("."),r=(V=t.value.search)==null?void 0:V.options,d=r&&typeof r=="object",c=d&&((E=(H=r.locales)==null?void 0:H[e.value])==null?void 0:E.translations)||null,v=d&&r.translations||null;let b=c,m=v,L=s;const w=i.pop();for(const K of i){let se=null;const _e=L==null?void 0:L[K];_e&&(se=L=_e);const nt=m==null?void 0:m[K];nt&&(se=m=nt);const ot=b==null?void 0:b[K];ot&&(se=b=ot),_e||(L=se),nt||(m=se),ot||(b=se)}return(b==null?void 0:b[w])??(m==null?void 0:m[w])??(L==null?void 0:L[w])??""}return n}const Ca=["aria-label"],La={class:"DocSearch-Button-Container"},Pa=h("svg",{class:"DocSearch-Search-Icon",width:"20",height:"20",viewBox:"0 0 20 20","aria-label":"search icon"},[h("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none","fill-rule":"evenodd","stroke-linecap":"round","stroke-linejoin":"round"})],-1),Va={class:"DocSearch-Button-Placeholder"},Sa=h("span",{class:"DocSearch-Button-Keys"},[h("kbd",{class:"DocSearch-Button-Key"}),h("kbd",{class:"DocSearch-Button-Key"},"K")],-1),Tt=k({__name:"VPNavBarSearchButton",setup(s){const t=xa({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(n,o)=>(a(),u("button",{type:"button",class:"DocSearch DocSearch-Button","aria-label":l(t)("button.buttonAriaLabel")},[h("span",La,[Pa,h("span",Va,M(l(t)("button.buttonText")),1)]),Sa],8,Ca))}}),Aa={class:"VPNavBarSearch"},Ma={id:"local-search"},Ea={key:1,id:"docsearch"},Ta=k({__name:"VPNavBarSearch",setup(s){const e=Gs(()=>Zs(()=>import("./VPLocalSearchBox.fGrND2V4.js"),__vite__mapDeps([0,1]))),t=()=>null,{theme:n}=A(),o=T(!1),i=T(!1);ae(()=>{});function r(){o.value||(o.value=!0,setTimeout(d,16))}function d(){const m=new Event("keydown");m.key="k",m.metaKey=!0,window.dispatchEvent(m),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||d()},16)}function c(m){const L=m.target,w=L.tagName;return L.isContentEditable||w==="INPUT"||w==="SELECT"||w==="TEXTAREA"}const v=T(!1);pt("k",m=>{(m.ctrlKey||m.metaKey)&&(m.preventDefault(),v.value=!0)}),pt("/",m=>{c(m)||(m.preventDefault(),v.value=!0)});const b="local";return(m,L)=>{var w;return a(),u("div",Aa,[l(b)==="local"?(a(),u(I,{key:0},[v.value?(a(),x(l(e),{key:0,onClose:L[0]||(L[0]=V=>v.value=!1)})):_("",!0),h("div",Ma,[g(Tt,{onClick:L[1]||(L[1]=V=>v.value=!0)})])],64)):l(b)==="algolia"?(a(),u(I,{key:1},[o.value?(a(),x(l(t),{key:0,algolia:((w=l(n).search)==null?void 0:w.options)??l(n).algolia,onVnodeBeforeMount:L[2]||(L[2]=V=>i.value=!0)},null,8,["algolia"])):_("",!0),i.value?_("",!0):(a(),u("div",Ea,[g(Tt,{onClick:r})]))],64)):_("",!0)])}}}),Ha=k({__name:"VPNavBarSocialLinks",setup(s){const{theme:e}=A();return(t,n)=>l(e).socialLinks?(a(),x(et,{key:0,class:"VPNavBarSocialLinks",links:l(e).socialLinks},null,8,["links"])):_("",!0)}}),Ia=$(Ha,[["__scopeId","data-v-dbbf6902"]]),Na=["href","rel","target"],za=k({__name:"VPNavBarTitle",setup(s){const{site:e,theme:t}=A(),{hasSidebar:n}=te(),{currentLang:o}=He(),i=P(()=>{var c;return typeof t.value.logoLink=="string"?t.value.logoLink:(c=t.value.logoLink)==null?void 0:c.link}),r=P(()=>{var c;return typeof t.value.logoLink=="string"||(c=t.value.logoLink)==null?void 0:c.rel}),d=P(()=>{var c;return typeof t.value.logoLink=="string"||(c=t.value.logoLink)==null?void 0:c.target});return(c,v)=>(a(),u("div",{class:S(["VPNavBarTitle",{"has-sidebar":l(n)}])},[h("a",{class:"title",href:i.value??l($t)(l(o).link),rel:r.value,target:d.value},[p(c.$slots,"nav-bar-title-before",{},void 0,!0),l(t).logo?(a(),x(Fe,{key:0,class:"logo",image:l(t).logo},null,8,["image"])):_("",!0),l(t).siteTitle?(a(),u(I,{key:1},[D(M(l(t).siteTitle),1)],64)):l(t).siteTitle===void 0?(a(),u(I,{key:2},[D(M(l(e).title),1)],64)):_("",!0),p(c.$slots,"nav-bar-title-after",{},void 0,!0)],8,Na)],2))}}),Ba=$(za,[["__scopeId","data-v-0d305c84"]]),Oa={},Da={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},Ua=h("path",{d:"M0 0h24v24H0z",fill:"none"},null,-1),Ra=h("path",{d:" M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z ",class:"css-c4d79v"},null,-1),Fa=[Ua,Ra];function ja(s,e){return a(),u("svg",Da,Fa)}const vs=$(Oa,[["render",ja]]),Ga={class:"items"},Za={class:"title"},qa=k({__name:"VPNavBarTranslations",setup(s){const{theme:e}=A(),{localeLinks:t,currentLang:n}=He({correspondingLink:!0});return(o,i)=>l(t).length&&l(n).label?(a(),x(Ct,{key:0,class:"VPNavBarTranslations",icon:vs,label:l(e).langMenuLabel||"Change language"},{default:f(()=>[h("div",Ga,[h("p",Za,M(l(n).label),1),(a(!0),u(I,null,O(l(t),r=>(a(),x(Qe,{key:r.link,item:r},null,8,["item"]))),128))])]),_:1},8,["label"])):_("",!0)}}),Wa=$(qa,[["__scopeId","data-v-527b90ee"]]),Ka=s=>(X("data-v-111cf943"),s=s(),Y(),s),Xa={class:"wrapper"},Ya={class:"container"},Ja={class:"title"},Qa={class:"content"},el={class:"content-body"},tl=Ka(()=>h("div",{class:"divider"},[h("div",{class:"divider-line"})],-1)),sl=k({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(s){const{y:e}=ns(),{hasSidebar:t}=te(),{hasLocalNav:n}=cs(),{frontmatter:o}=A(),i=T({});return Qt(()=>{i.value={"has-sidebar":t.value,"has-local-nav":n.value,top:o.value.layout==="home"&&e.value===0}}),(r,d)=>(a(),u("div",{class:S(["VPNavBar",i.value])},[h("div",Xa,[h("div",Ya,[h("div",Ja,[g(Ba,null,{"nav-bar-title-before":f(()=>[p(r.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":f(()=>[p(r.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),h("div",Qa,[h("div",el,[p(r.$slots,"nav-bar-content-before",{},void 0,!0),g(Ta,{class:"search"}),g(wa,{class:"menu"}),g(Wa,{class:"translations"}),g(fr,{class:"appearance"}),g(Ia,{class:"social-links"}),g(la,{class:"extra"}),p(r.$slots,"nav-bar-content-after",{},void 0,!0),g(va,{class:"hamburger",active:r.isScreenOpen,onClick:d[0]||(d[0]=c=>r.$emit("toggle-screen"))},null,8,["active"])])])])]),tl],2))}}),nl=$(sl,[["__scopeId","data-v-111cf943"]]),ol={key:0,class:"VPNavScreenAppearance"},il={class:"text"},rl=k({__name:"VPNavScreenAppearance",setup(s){const{site:e,theme:t}=A();return(n,o)=>l(e).appearance&&l(e).appearance!=="force-dark"?(a(),u("div",ol,[h("p",il,M(l(t).darkModeSwitchLabel||"Appearance"),1),g(wt)])):_("",!0)}}),al=$(rl,[["__scopeId","data-v-bf5610c8"]]),ll=k({__name:"VPNavScreenMenuLink",props:{item:{}},setup(s){const e=Je("close-screen");return(t,n)=>(a(),x(j,{class:"VPNavScreenMenuLink",href:t.item.link,target:t.item.target,rel:t.item.rel,onClick:l(e)},{default:f(()=>[D(M(t.item.text),1)]),_:1},8,["href","target","rel","onClick"]))}}),cl=$(ll,[["__scopeId","data-v-14359941"]]),dl={},ul={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},hl=h("path",{d:"M18.9,10.9h-6v-6c0-0.6-0.4-1-1-1s-1,0.4-1,1v6h-6c-0.6,0-1,0.4-1,1s0.4,1,1,1h6v6c0,0.6,0.4,1,1,1s1-0.4,1-1v-6h6c0.6,0,1-0.4,1-1S19.5,10.9,18.9,10.9z"},null,-1),pl=[hl];function vl(s,e){return a(),u("svg",ul,pl)}const fl=$(dl,[["render",vl]]),ml=k({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(s){const e=Je("close-screen");return(t,n)=>(a(),x(j,{class:"VPNavScreenMenuGroupLink",href:t.item.link,target:t.item.target,rel:t.item.rel,onClick:l(e)},{default:f(()=>[D(M(t.item.text),1)]),_:1},8,["href","target","rel","onClick"]))}}),fs=$(ml,[["__scopeId","data-v-f419dd38"]]),_l={class:"VPNavScreenMenuGroupSection"},gl={key:0,class:"title"},bl=k({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(s){return(e,t)=>(a(),u("div",_l,[e.text?(a(),u("p",gl,M(e.text),1)):_("",!0),(a(!0),u(I,null,O(e.items,n=>(a(),x(fs,{key:n.text,item:n},null,8,["item"]))),128))]))}}),$l=$(bl,[["__scopeId","data-v-21debebd"]]),yl=["aria-controls","aria-expanded"],kl=["innerHTML"],wl=["id"],xl={key:1,class:"group"},Cl=k({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(s){const e=s,t=T(!1),n=P(()=>`NavScreenGroup-${e.text.replace(" ","-").toLowerCase()}`);function o(){t.value=!t.value}return(i,r)=>(a(),u("div",{class:S(["VPNavScreenMenuGroup",{open:t.value}])},[h("button",{class:"button","aria-controls":n.value,"aria-expanded":t.value,onClick:o},[h("span",{class:"button-text",innerHTML:i.text},null,8,kl),g(fl,{class:"button-icon"})],8,yl),h("div",{id:n.value,class:"items"},[(a(!0),u(I,null,O(i.items,d=>(a(),u(I,{key:d.text},["link"in d?(a(),u("div",{key:d.text,class:"item"},[g(fs,{item:d},null,8,["item"])])):(a(),u("div",xl,[g($l,{text:d.text,items:d.items},null,8,["text","items"])]))],64))),128))],8,wl)],2))}}),Ll=$(Cl,[["__scopeId","data-v-cdcc966a"]]),Pl={key:0,class:"VPNavScreenMenu"},Vl=k({__name:"VPNavScreenMenu",setup(s){const{theme:e}=A();return(t,n)=>l(e).nav?(a(),u("nav",Pl,[(a(!0),u(I,null,O(l(e).nav,o=>(a(),u(I,{key:o.text},["link"in o?(a(),x(cl,{key:0,item:o},null,8,["item"])):(a(),x(Ll,{key:1,text:o.text||"",items:o.items},null,8,["text","items"]))],64))),128))])):_("",!0)}}),Sl=k({__name:"VPNavScreenSocialLinks",setup(s){const{theme:e}=A();return(t,n)=>l(e).socialLinks?(a(),x(et,{key:0,class:"VPNavScreenSocialLinks",links:l(e).socialLinks},null,8,["links"])):_("",!0)}}),Al={class:"list"},Ml=k({__name:"VPNavScreenTranslations",setup(s){const{localeLinks:e,currentLang:t}=He({correspondingLink:!0}),n=T(!1);function o(){n.value=!n.value}return(i,r)=>l(e).length&&l(t).label?(a(),u("div",{key:0,class:S(["VPNavScreenTranslations",{open:n.value}])},[h("button",{class:"title",onClick:o},[g(vs,{class:"icon lang"}),D(" "+M(l(t).label)+" ",1),g(ps,{class:"icon chevron"})]),h("ul",Al,[(a(!0),u(I,null,O(l(e),d=>(a(),u("li",{key:d.link,class:"item"},[g(j,{class:"link",href:d.link},{default:f(()=>[D(M(d.text),1)]),_:2},1032,["href"])]))),128))])],2)):_("",!0)}}),El=$(Ml,[["__scopeId","data-v-728dd1d2"]]),Tl={class:"container"},Hl=k({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(s){const e=T(null),t=os(we?document.body:null);return(n,o)=>(a(),x(We,{name:"fade",onEnter:o[0]||(o[0]=i=>t.value=!0),onAfterLeave:o[1]||(o[1]=i=>t.value=!1)},{default:f(()=>[n.open?(a(),u("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:e,id:"VPNavScreen"},[h("div",Tl,[p(n.$slots,"nav-screen-content-before",{},void 0,!0),g(Vl,{class:"menu"}),g(El,{class:"translations"}),g(al,{class:"appearance"}),g(Sl,{class:"social-links"}),p(n.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):_("",!0)]),_:3}))}}),Il=$(Hl,[["__scopeId","data-v-8c15e03e"]]),Nl={key:0,class:"VPNav"},zl=k({__name:"VPNav",setup(s){const{isScreenOpen:e,closeScreen:t,toggleScreen:n}=qi(),{frontmatter:o}=A(),i=P(()=>o.value.navbar!==!1);return is("close-screen",t),Ke(()=>{we&&document.documentElement.classList.toggle("hide-nav",!i.value)}),(r,d)=>i.value?(a(),u("header",Nl,[g(nl,{"is-screen-open":l(e),onToggleScreen:l(n)},{"nav-bar-title-before":f(()=>[p(r.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":f(()=>[p(r.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":f(()=>[p(r.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":f(()=>[p(r.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),g(Il,{open:l(e)},{"nav-screen-content-before":f(()=>[p(r.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":f(()=>[p(r.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):_("",!0)}}),Bl=$(zl,[["__scopeId","data-v-9ed9410e"]]),Ol=s=>(X("data-v-2f8ec882"),s=s(),Y(),s),Dl=["role","tabindex"],Ul=Ol(()=>h("div",{class:"indicator"},null,-1)),Rl={key:1,class:"items"},Fl=k({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(s){const e=s,{collapsed:t,collapsible:n,isLink:o,isActiveLink:i,hasActiveLink:r,hasChildren:d,toggle:c}=$n(P(()=>e.item)),v=P(()=>d.value?"section":"div"),b=P(()=>o.value?"a":"div"),m=P(()=>d.value?e.depth+2===7?"p":`h${e.depth+2}`:"p"),L=P(()=>o.value?void 0:"button"),w=P(()=>[[`level-${e.depth}`],{collapsible:n.value},{collapsed:t.value},{"is-link":o.value},{"is-active":i.value},{"has-active":r.value}]);function V(E){"key"in E&&E.key!=="Enter"||!e.item.link&&c()}function H(){e.item.link&&c()}return(E,K)=>{const se=me("VPSidebarItem",!0);return a(),x(he(v.value),{class:S(["VPSidebarItem",w.value])},{default:f(()=>[E.item.text?(a(),u("div",Be({key:0,class:"item",role:L.value},qs(E.item.items?{click:V,keydown:V}:{},!0),{tabindex:E.item.items&&0}),[Ul,E.item.link?(a(),x(j,{key:0,tag:b.value,class:"link",href:E.item.link,rel:E.item.rel,target:E.item.target},{default:f(()=>[(a(),x(he(m.value),{class:"text",innerHTML:E.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(a(),x(he(m.value),{key:1,class:"text",innerHTML:E.item.text},null,8,["innerHTML"])),E.item.collapsed!=null?(a(),u("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:H,onKeydown:Ws(H,["enter"]),tabindex:"0"},[g(ds,{class:"caret-icon"})],32)):_("",!0)],16,Dl)):_("",!0),E.item.items&&E.item.items.length?(a(),u("div",Rl,[E.depth<5?(a(!0),u(I,{key:0},O(E.item.items,_e=>(a(),x(se,{key:_e.text,item:_e,depth:E.depth+1},null,8,["item","depth"]))),128)):_("",!0)])):_("",!0)]),_:1},8,["class"])}}}),jl=$(Fl,[["__scopeId","data-v-2f8ec882"]]),ms=s=>(X("data-v-e77872a5"),s=s(),Y(),s),Gl=ms(()=>h("div",{class:"curtain"},null,-1)),Zl={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},ql=ms(()=>h("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),Wl=k({__name:"VPSidebar",props:{open:{type:Boolean}},setup(s){const{sidebarGroups:e,hasSidebar:t}=te(),n=s,o=T(null),i=os(we?document.body:null);return ee([n,o],()=>{var r;n.open?(i.value=!0,(r=o.value)==null||r.focus()):i.value=!1},{immediate:!0,flush:"post"}),(r,d)=>l(t)?(a(),u("aside",{key:0,class:S(["VPSidebar",{open:r.open}]),ref_key:"navEl",ref:o,onClick:d[0]||(d[0]=Ks(()=>{},["stop"]))},[Gl,h("nav",Zl,[ql,p(r.$slots,"sidebar-nav-before",{},void 0,!0),(a(!0),u(I,null,O(l(e),c=>(a(),u("div",{key:c.text,class:"group"},[g(jl,{item:c,depth:0},null,8,["item"])]))),128)),p(r.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):_("",!0)}}),Kl=$(Wl,[["__scopeId","data-v-e77872a5"]]),Xl=k({__name:"VPSkipLink",setup(s){const e=Ye(),t=T();ee(()=>e.path,()=>t.value.focus());function n({target:o}){const i=document.getElementById(decodeURIComponent(o.hash).slice(1));if(i){const r=()=>{i.removeAttribute("tabindex"),i.removeEventListener("blur",r)};i.setAttribute("tabindex","-1"),i.addEventListener("blur",r),i.focus(),window.scrollTo(0,0)}}return(o,i)=>(a(),u(I,null,[h("span",{ref_key:"backToTop",ref:t,tabindex:"-1"},null,512),h("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:n}," Skip to content ")],64))}}),Yl=$(Xl,[["__scopeId","data-v-2d60c9ca"]]),Jl=k({__name:"Layout",setup(s){const{isOpen:e,open:t,close:n}=te(),o=Ye();ee(()=>o.path,n),bn(e,n);const{frontmatter:i}=A(),r=Xs(),d=P(()=>!!r["home-hero-image"]);return is("hero-image-slot-exists",d),(c,v)=>{const b=me("Content");return l(i).layout!==!1?(a(),u("div",{key:0,class:S(["Layout",l(i).pageClass])},[p(c.$slots,"layout-top",{},void 0,!0),g(Yl),g(nn,{class:"backdrop",show:l(e),onClick:l(n)},null,8,["show","onClick"]),g(Bl,null,{"nav-bar-title-before":f(()=>[p(c.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":f(()=>[p(c.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":f(()=>[p(c.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":f(()=>[p(c.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":f(()=>[p(c.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":f(()=>[p(c.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),g(Zi,{open:l(e),onOpenMenu:l(t)},null,8,["open","onOpenMenu"]),g(Kl,{open:l(e)},{"sidebar-nav-before":f(()=>[p(c.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":f(()=>[p(c.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),g(gi,null,{"page-top":f(()=>[p(c.$slots,"page-top",{},void 0,!0)]),"page-bottom":f(()=>[p(c.$slots,"page-bottom",{},void 0,!0)]),"not-found":f(()=>[p(c.$slots,"not-found",{},void 0,!0)]),"home-hero-before":f(()=>[p(c.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info":f(()=>[p(c.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-image":f(()=>[p(c.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":f(()=>[p(c.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":f(()=>[p(c.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":f(()=>[p(c.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":f(()=>[p(c.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":f(()=>[p(c.$slots,"doc-before",{},void 0,!0)]),"doc-after":f(()=>[p(c.$slots,"doc-after",{},void 0,!0)]),"doc-top":f(()=>[p(c.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":f(()=>[p(c.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":f(()=>[p(c.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":f(()=>[p(c.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":f(()=>[p(c.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":f(()=>[p(c.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":f(()=>[p(c.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":f(()=>[p(c.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),g(wi),p(c.$slots,"layout-bottom",{},void 0,!0)],2)):(a(),x(b,{key:1}))}}}),Ql=$(Jl,[["__scopeId","data-v-9d733402"]]),ec={},tc={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},sc=h("path",{d:"M12,22.2c-0.3,0-0.5-0.1-0.7-0.3l-8.8-8.8c-2.5-2.5-2.5-6.7,0-9.2c2.5-2.5,6.7-2.5,9.2,0L12,4.3l0.4-0.4c0,0,0,0,0,0C13.6,2.7,15.2,2,16.9,2c0,0,0,0,0,0c1.7,0,3.4,0.7,4.6,1.9l0,0c1.2,1.2,1.9,2.9,1.9,4.6c0,1.7-0.7,3.4-1.9,4.6l-8.8,8.8C12.5,22.1,12.3,22.2,12,22.2zM7,4C5.9,4,4.7,4.4,3.9,5.3c-1.8,1.8-1.8,4.6,0,6.4l8.1,8.1l8.1-8.1c0.9-0.9,1.3-2,1.3-3.2c0-1.2-0.5-2.3-1.3-3.2l0,0C19.3,4.5,18.2,4,17,4c0,0,0,0,0,0c-1.2,0-2.3,0.5-3.2,1.3c0,0,0,0,0,0l-1.1,1.1c-0.4,0.4-1,0.4-1.4,0l-1.1-1.1C9.4,4.4,8.2,4,7,4z"},null,-1),nc=[sc];function oc(s,e){return a(),u("svg",tc,nc)}const ic=$(ec,[["render",oc]]),rc={},ac={class:"VPTeamPage"};function lc(s,e){return a(),u("div",ac,[p(s.$slots,"default")])}const Dd=$(rc,[["render",lc],["__scopeId","data-v-d3cc1b8b"]]),cc={},dc={class:"VPTeamPageTitle"},uc={key:0,class:"title"},hc={key:1,class:"lead"};function pc(s,e){return a(),u("div",dc,[s.$slots.title?(a(),u("h1",uc,[p(s.$slots,"title",{},void 0,!0)])):_("",!0),s.$slots.lead?(a(),u("p",hc,[p(s.$slots,"lead",{},void 0,!0)])):_("",!0)])}const Ud=$(cc,[["render",pc],["__scopeId","data-v-c4969e73"]]),vc={class:"profile"},fc={class:"avatar"},mc=["src","alt"],_c={class:"data"},gc={class:"name"},bc={key:0,class:"affiliation"},$c={key:0,class:"title"},yc={key:1,class:"at"},kc=["innerHTML"],wc={key:2,class:"links"},xc={key:0,class:"sp"},Cc=k({__name:"VPTeamMembersItem",props:{size:{default:"medium"},member:{}},setup(s){return(e,t)=>(a(),u("article",{class:S(["VPTeamMembersItem",[e.size]])},[h("div",vc,[h("figure",fc,[h("img",{class:"avatar-img",src:e.member.avatar,alt:e.member.name},null,8,mc)]),h("div",_c,[h("h1",gc,M(e.member.name),1),e.member.title||e.member.org?(a(),u("p",bc,[e.member.title?(a(),u("span",$c,M(e.member.title),1)):_("",!0),e.member.title&&e.member.org?(a(),u("span",yc," @ ")):_("",!0),e.member.org?(a(),x(j,{key:2,class:S(["org",{link:e.member.orgLink}]),href:e.member.orgLink,"no-icon":""},{default:f(()=>[D(M(e.member.org),1)]),_:1},8,["class","href"])):_("",!0)])):_("",!0),e.member.desc?(a(),u("p",{key:1,class:"desc",innerHTML:e.member.desc},null,8,kc)):_("",!0),e.member.links?(a(),u("div",wc,[g(et,{links:e.member.links},null,8,["links"])])):_("",!0)])]),e.member.sponsor?(a(),u("div",xc,[g(j,{class:"sp-link",href:e.member.sponsor,"no-icon":""},{default:f(()=>[g(ic,{class:"sp-icon"}),D(" "+M(e.member.actionText||"Sponsor"),1)]),_:1},8,["href"])])):_("",!0)],2))}}),Lc=$(Cc,[["__scopeId","data-v-a8a345f7"]]),Pc={class:"container"},Vc=k({__name:"VPTeamMembers",props:{size:{default:"medium"},members:{}},setup(s){const e=s,t=P(()=>[e.size,`count-${e.members.length}`]);return(n,o)=>(a(),u("div",{class:S(["VPTeamMembers",t.value])},[h("div",Pc,[(a(!0),u(I,null,O(n.members,i=>(a(),u("div",{key:i.name,class:"item"},[g(Lc,{size:n.size,member:i},null,8,["size","member"])]))),128))])],2))}}),Rd=$(Vc,[["__scopeId","data-v-788315cd"]]),Ht={Layout:Ql,enhanceApp:({app:s})=>{s.component("Badge",en)}};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const De=globalThis,Lt=De.ShadowRoot&&(De.ShadyCSS===void 0||De.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Pt=Symbol(),It=new WeakMap;let _s=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Pt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Lt&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=It.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&It.set(t,e))}return e}toString(){return this.cssText}};const q=s=>new _s(typeof s=="string"?s:s+"",void 0,Pt),W=(s,...e)=>{const t=s.length===1?s[0]:e.reduce((n,o,i)=>n+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+s[i+1],s[0]);return new _s(t,s,Pt)},Sc=(s,e)=>{if(Lt)s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const n=document.createElement("style"),o=De.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=t.cssText,s.appendChild(n)}},Nt=Lt?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return q(t)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ac,defineProperty:Mc,getOwnPropertyDescriptor:Ec,getOwnPropertyNames:Tc,getOwnPropertySymbols:Hc,getPrototypeOf:Ic}=Object,re=globalThis,zt=re.trustedTypes,Nc=zt?zt.emptyScript:"",rt=re.reactiveElementPolyfillSupport,Pe=(s,e)=>s,je={toAttribute(s,e){switch(e){case Boolean:s=s?Nc:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},Vt=(s,e)=>!Ac(s,e),Bt={attribute:!0,type:String,converter:je,reflect:!1,hasChanged:Vt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),re.litPropertyMetadata??(re.litPropertyMetadata=new WeakMap);let ge=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Bt){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(e,n,t);o!==void 0&&Mc(this.prototype,e,o)}}static getPropertyDescriptor(e,t,n){const{get:o,set:i}=Ec(this.prototype,e)??{get(){return this[t]},set(r){this[t]=r}};return{get(){return o==null?void 0:o.call(this)},set(r){const d=o==null?void 0:o.call(this);i.call(this,r),this.requestUpdate(e,d,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Bt}static _$Ei(){if(this.hasOwnProperty(Pe("elementProperties")))return;const e=Ic(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Pe("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Pe("properties"))){const t=this.properties,n=[...Tc(t),...Hc(t)];for(const o of n)this.createProperty(o,t[o])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[n,o]of t)this.elementProperties.set(n,o)}this._$Eh=new Map;for(const[t,n]of this.elementProperties){const o=this._$Eu(t,n);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const o of n)t.unshift(Nt(o))}else e!==void 0&&t.push(Nt(e));return t}static _$Eu(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$Eg=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$ES(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$E_??(this._$E_=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$E_)==null||t.delete(e)}_$ES(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Sc(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$E_)==null||e.forEach(t=>{var n;return(n=t.hostConnected)==null?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$E_)==null||e.forEach(t=>{var n;return(n=t.hostDisconnected)==null?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EO(e,t){var i;const n=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,n);if(o!==void 0&&n.reflect===!0){const r=(((i=n.converter)==null?void 0:i.toAttribute)!==void 0?n.converter:je).toAttribute(t,n.type);this._$Em=e,r==null?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(e,t){var i;const n=this.constructor,o=n._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const r=n.getPropertyOptions(o),d=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)==null?void 0:i.fromAttribute)!==void 0?r.converter:je;this._$Em=o,this[o]=d.fromAttribute(t,r.type),this._$Em=null}}requestUpdate(e,t,n){if(e!==void 0){if(n??(n=this.constructor.getPropertyOptions(e)),!(n.hasChanged??Vt)(this[e],t))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(e,t,n){this._$AL.has(e)||this._$AL.set(e,t),n.reflect===!0&&this._$Em!==e&&(this._$ET??(this._$ET=new Set)).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,r]of this._$Ep)this[i]=r;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[i,r]of o)r.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.C(i,this[i],r)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(n=this._$E_)==null||n.forEach(o=>{var i;return(i=o.hostUpdate)==null?void 0:i.call(o)}),this.update(t)):this._$Ej()}catch(o){throw e=!1,this._$Ej(),o}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$E_)==null||t.forEach(n=>{var o;return(o=n.hostUpdated)==null?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ej(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$ET&&(this._$ET=this._$ET.forEach(t=>this._$EO(t,this[t]))),this._$Ej()}updated(e){}firstUpdated(e){}};ge.elementStyles=[],ge.shadowRootOptions={mode:"open"},ge[Pe("elementProperties")]=new Map,ge[Pe("finalized")]=new Map,rt==null||rt({ReactiveElement:ge}),(re.reactiveElementVersions??(re.reactiveElementVersions=[])).push("2.0.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ve=globalThis,Ge=Ve.trustedTypes,Ot=Ge?Ge.createPolicy("lit-html",{createHTML:s=>s}):void 0,gs="$lit$",ie=`lit$${(Math.random()+"").slice(9)}$`,bs="?"+ie,zc=`<${bs}>`,ve=document,Ee=()=>ve.createComment(""),Te=s=>s===null||typeof s!="object"&&typeof s!="function",$s=Array.isArray,Bc=s=>$s(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",at=`[ 	
\f\r]`,Ce=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Dt=/-->/g,Ut=/>/g,le=RegExp(`>|${at}(?:([^\\s"'>=/]+)(${at}*=${at}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Rt=/'/g,Ft=/"/g,ys=/^(?:script|style|textarea|title)$/i,Oc=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),z=Oc(1),fe=Symbol.for("lit-noChange"),N=Symbol.for("lit-nothing"),jt=new WeakMap,ue=ve.createTreeWalker(ve,129);function ks(s,e){if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ot!==void 0?Ot.createHTML(e):e}const Dc=(s,e)=>{const t=s.length-1,n=[];let o,i=e===2?"<svg>":"",r=Ce;for(let d=0;d<t;d++){const c=s[d];let v,b,m=-1,L=0;for(;L<c.length&&(r.lastIndex=L,b=r.exec(c),b!==null);)L=r.lastIndex,r===Ce?b[1]==="!--"?r=Dt:b[1]!==void 0?r=Ut:b[2]!==void 0?(ys.test(b[2])&&(o=RegExp("</"+b[2],"g")),r=le):b[3]!==void 0&&(r=le):r===le?b[0]===">"?(r=o??Ce,m=-1):b[1]===void 0?m=-2:(m=r.lastIndex-b[2].length,v=b[1],r=b[3]===void 0?le:b[3]==='"'?Ft:Rt):r===Ft||r===Rt?r=le:r===Dt||r===Ut?r=Ce:(r=le,o=void 0);const w=r===le&&s[d+1].startsWith("/>")?" ":"";i+=r===Ce?c+zc:m>=0?(n.push(v),c.slice(0,m)+gs+c.slice(m)+ie+w):c+ie+(m===-2?d:w)}return[ks(s,i+(s[t]||"<?>")+(e===2?"</svg>":"")),n]};let _t=class ws{constructor({strings:e,_$litType$:t},n){let o;this.parts=[];let i=0,r=0;const d=e.length-1,c=this.parts,[v,b]=Dc(e,t);if(this.el=ws.createElement(v,n),ue.currentNode=this.el.content,t===2){const m=this.el.content.firstChild;m.replaceWith(...m.childNodes)}for(;(o=ue.nextNode())!==null&&c.length<d;){if(o.nodeType===1){if(o.hasAttributes())for(const m of o.getAttributeNames())if(m.endsWith(gs)){const L=b[r++],w=o.getAttribute(m).split(ie),V=/([.?@])?(.*)/.exec(L);c.push({type:1,index:i,name:V[2],strings:w,ctor:V[1]==="."?Rc:V[1]==="?"?Fc:V[1]==="@"?jc:tt}),o.removeAttribute(m)}else m.startsWith(ie)&&(c.push({type:6,index:i}),o.removeAttribute(m));if(ys.test(o.tagName)){const m=o.textContent.split(ie),L=m.length-1;if(L>0){o.textContent=Ge?Ge.emptyScript:"";for(let w=0;w<L;w++)o.append(m[w],Ee()),ue.nextNode(),c.push({type:2,index:++i});o.append(m[L],Ee())}}}else if(o.nodeType===8)if(o.data===bs)c.push({type:2,index:i});else{let m=-1;for(;(m=o.data.indexOf(ie,m+1))!==-1;)c.push({type:7,index:i}),m+=ie.length-1}i++}}static createElement(e,t){const n=ve.createElement("template");return n.innerHTML=e,n}};function ke(s,e,t=s,n){var r,d;if(e===fe)return e;let o=n!==void 0?(r=t._$Co)==null?void 0:r[n]:t._$Cl;const i=Te(e)?void 0:e._$litDirective$;return(o==null?void 0:o.constructor)!==i&&((d=o==null?void 0:o._$AO)==null||d.call(o,!1),i===void 0?o=void 0:(o=new i(s),o._$AT(s,t,n)),n!==void 0?(t._$Co??(t._$Co=[]))[n]=o:t._$Cl=o),o!==void 0&&(e=ke(s,o._$AS(s,e.values),o,n)),e}let Uc=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:n}=this._$AD,o=((e==null?void 0:e.creationScope)??ve).importNode(t,!0);ue.currentNode=o;let i=ue.nextNode(),r=0,d=0,c=n[0];for(;c!==void 0;){if(r===c.index){let v;c.type===2?v=new St(i,i.nextSibling,this,e):c.type===1?v=new c.ctor(i,c.name,c.strings,this,e):c.type===6&&(v=new Gc(i,this,e)),this._$AV.push(v),c=n[++d]}r!==(c==null?void 0:c.index)&&(i=ue.nextNode(),r++)}return ue.currentNode=ve,o}p(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},St=class xs{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,n,o){this.type=2,this._$AH=N,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ke(this,e,t),Te(e)?e===N||e==null||e===""?(this._$AH!==N&&this._$AR(),this._$AH=N):e!==this._$AH&&e!==fe&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Bc(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==N&&Te(this._$AH)?this._$AA.nextSibling.data=e:this.$(ve.createTextNode(e)),this._$AH=e}g(e){var i;const{values:t,_$litType$:n}=e,o=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=_t.createElement(ks(n.h,n.h[0]),this.options)),n);if(((i=this._$AH)==null?void 0:i._$AD)===o)this._$AH.p(t);else{const r=new Uc(o,this),d=r.u(this.options);r.p(t),this.$(d),this._$AH=r}}_$AC(e){let t=jt.get(e.strings);return t===void 0&&jt.set(e.strings,t=new _t(e)),t}T(e){$s(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,o=0;for(const i of e)o===t.length?t.push(n=new xs(this.k(Ee()),this.k(Ee()),this,this.options)):n=t[o],n._$AI(i),o++;o<t.length&&(this._$AR(n&&n._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,t);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}},tt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,o,i){this.type=1,this._$AH=N,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=N}_$AI(e,t=this,n,o){const i=this.strings;let r=!1;if(i===void 0)e=ke(this,e,t,0),r=!Te(e)||e!==this._$AH&&e!==fe,r&&(this._$AH=e);else{const d=e;let c,v;for(e=i[0],c=0;c<i.length-1;c++)v=ke(this,d[n+c],t,c),v===fe&&(v=this._$AH[c]),r||(r=!Te(v)||v!==this._$AH[c]),v===N?e=N:e!==N&&(e+=(v??"")+i[c+1]),this._$AH[c]=v}r&&!o&&this.O(e)}O(e){e===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Rc=class extends tt{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===N?void 0:e}},Fc=class extends tt{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==N)}},jc=class extends tt{constructor(e,t,n,o,i){super(e,t,n,o,i),this.type=5}_$AI(e,t=this){if((e=ke(this,e,t,0)??N)===fe)return;const n=this._$AH,o=e===N&&n!==N||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==N&&(n===N||o);o&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}},Gc=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){ke(this,e)}};const lt=Ve.litHtmlPolyfillSupport;lt==null||lt(_t,St),(Ve.litHtmlVersions??(Ve.litHtmlVersions=[])).push("3.1.1");const Zc=(s,e,t)=>{const n=(t==null?void 0:t.renderBefore)??e;let o=n._$litPart$;if(o===void 0){const i=(t==null?void 0:t.renderBefore)??null;n._$litPart$=o=new St(e.insertBefore(Ee(),i),i,void 0,t??{})}return o._$AI(s),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Se=class extends ge{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Zc(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return fe}};var Jt;Se._$litElement$=!0,Se.finalized=!0,(Jt=globalThis.litElementHydrateSupport)==null||Jt.call(globalThis,{LitElement:Se});const ct=globalThis.litElementPolyfillSupport;ct==null||ct({LitElement:Se});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.3");/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Cs=class extends Event{constructor(e,t,n){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=n??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Gt=class{constructor(e,t,n,o){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(i,r)=>{this.unsubscribe&&(this.unsubscribe!==r&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=i,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(i,r)),this.unsubscribe=r},this.host=e,t.context!==void 0){const i=t;this.context=i.context,this.callback=i.callback,this.subscribe=i.subscribe??!1}else this.context=t,this.callback=n,this.subscribe=o??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Cs(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let qc=class{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const n=t||!Object.is(e,this.o);this.o=e,n&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:n}]of this.subscriptions)t(this.o,n)},e!==void 0&&(this.value=e)}addCallback(e,t,n){if(!n)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:o}=this.subscriptions.get(e);e(this.value,o)}clearCallbacks(){this.subscriptions.clear()}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Wc=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}},Zt=class extends qc{constructor(e,t,n){var o,i;super(t.context!==void 0?t.initialValue:n),this.onContextRequest=r=>{const d=r.composedPath()[0];r.context===this.context&&d!==this.host&&(r.stopPropagation(),this.addCallback(r.callback,d,r.subscribe))},this.onProviderRequest=r=>{const d=r.composedPath()[0];if(r.context!==this.context||d===this.host)return;const c=new Set;for(const[v,{consumerHost:b}]of this.subscriptions)c.has(v)||(c.add(v),b.dispatchEvent(new Cs(this.context,v,!0)));r.stopPropagation()},this.host=e,t.context!==void 0?this.context=t.context:this.context=t,this.attachListeners(),(i=(o=this.host).addController)==null||i.call(o,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new Wc(this.context))}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function At({context:s}){return(e,t)=>{const n=new WeakMap;if(typeof t=="object")return t.addInitializer(function(){n.set(this,new Zt(this,{context:s}))}),{get(){return e.get.call(this)},set(o){var i;return(i=n.get(this))==null||i.setValue(o),e.set.call(this,o)},init(o){var i;return(i=n.get(this))==null||i.setValue(o),o}};{e.constructor.addInitializer(r=>{n.set(r,new Zt(r,{context:s}))});const o=Object.getOwnPropertyDescriptor(e,t);let i;if(o===void 0){const r=new WeakMap;i={get:function(){return r.get(this)},set:function(d){n.get(this).setValue(d),r.set(this,d)},configurable:!0,enumerable:!0}}else{const r=o.set;i={...o,set:function(d){n.get(this).setValue(d),r==null||r.call(this,d)}}}return void Object.defineProperty(e,t,i)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Mt({context:s,subscribe:e}){return(t,n)=>{typeof n=="object"?n.addInitializer(function(){new Gt(this,{context:s,callback:o=>{this[n.name]=o},subscribe:e})}):t.constructor.addInitializer(o=>{new Gt(o,{context:s,callback:i=>{o[n]=i},subscribe:e})})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Kc={attribute:!0,type:String,converter:je,reflect:!1,hasChanged:Vt},Xc=(s=Kc,e,t)=>{const{kind:n,metadata:o}=t;let i=globalThis.litPropertyMetadata.get(o);if(i===void 0&&globalThis.litPropertyMetadata.set(o,i=new Map),i.set(t.name,s),n==="accessor"){const{name:r}=t;return{set(d){const c=e.get.call(this);e.set.call(this,d),this.requestUpdate(r,c,s)},init(d){return d!==void 0&&this.C(r,void 0,s),d}}}if(n==="setter"){const{name:r}=t;return function(d){const c=this[r];e.call(this,d),this.requestUpdate(r,c,s)}}throw Error("Unsupported decorator location: "+n)};function C(s){return(e,t)=>typeof t=="object"?Xc(s,e,t):((n,o,i)=>{const r=o.hasOwnProperty(i);return o.constructor.createProperty(i,r?{...n,wrapped:!0}:n),r?Object.getOwnPropertyDescriptor(o,i):void 0})(s,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Z(s){return C({...s,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ue=s=>s??N;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yc=s=>s.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ls={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ps=s=>(...e)=>({_$litDirective$:s,values:e});class Vs{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ae=(s,e)=>{var n;const t=s._$AN;if(t===void 0)return!1;for(const o of t)(n=o._$AO)==null||n.call(o,e,!1),Ae(o,e);return!0},Ze=s=>{let e,t;do{if((e=s._$AM)===void 0)break;t=e._$AN,t.delete(s),s=e}while((t==null?void 0:t.size)===0)},Ss=s=>{for(let e;e=s._$AM;s=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(s))break;t.add(s),ed(e)}};function Jc(s){this._$AN!==void 0?(Ze(this),this._$AM=s,Ss(this)):this._$AM=s}function Qc(s,e=!1,t=0){const n=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(e)if(Array.isArray(n))for(let i=t;i<n.length;i++)Ae(n[i],!1),Ze(n[i]);else n!=null&&(Ae(n,!1),Ze(n));else Ae(this,s)}const ed=s=>{s.type==Ls.CHILD&&(s._$AP??(s._$AP=Qc),s._$AQ??(s._$AQ=Jc))};let td=class extends Vs{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),Ss(this),this.isConnected=e._$AU}_$AO(e,t=!0){var n,o;e!==this.isConnected&&(this.isConnected=e,e?(n=this.reconnected)==null||n.call(this):(o=this.disconnected)==null||o.call(this)),t&&(Ae(this,e),Ze(this))}setValue(e){if(Yc(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $e=()=>new sd;let sd=class{};const dt=new WeakMap,ye=Ps(class extends td{render(s){return N}update(s,[e]){var n;const t=e!==this.G;return t&&this.G!==void 0&&this.ot(void 0),(t||this.rt!==this.lt)&&(this.G=e,this.ct=(n=s.options)==null?void 0:n.host,this.ot(this.lt=s.element)),N}ot(s){if(typeof this.G=="function"){const e=this.ct??globalThis;let t=dt.get(e);t===void 0&&(t=new WeakMap,dt.set(e,t)),t.get(this.G)!==void 0&&this.G.call(this.ct,void 0),t.set(this.G,s),s!==void 0&&this.G.call(this.ct,s)}else this.G.value=s}get rt(){var s,e;return typeof this.G=="function"?(s=dt.get(this.ct??globalThis))==null?void 0:s.get(this.G):(e=this.G)==null?void 0:e.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Re=Ps(class extends Vs{constructor(s){var e;if(super(s),s.type!==Ls.ATTRIBUTE||s.name!=="class"||((e=s.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(s){return" "+Object.keys(s).filter(e=>s[e]).join(" ")+" "}update(s,[e]){var n,o;if(this.it===void 0){this.it=new Set,s.strings!==void 0&&(this.st=new Set(s.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in e)e[i]&&!((n=this.st)!=null&&n.has(i))&&this.it.add(i);return this.render(e)}const t=s.element.classList;for(const i of this.it)i in e||(t.remove(i),this.it.delete(i));for(const i in e){const r=!!e[i];r===this.it.has(i)||(o=this.st)!=null&&o.has(i)||(r?(t.add(i),this.it.add(i)):(t.remove(i),this.it.delete(i)))}return fe}});function nd(s,e={}){return new Function("context",`
    with(context) {
      return ${s}
    }
  `)(e)}const qt="$",od="ot";class B extends Se{constructor(){super(...arguments),this.eventAgent={},this.onEventMap=new Map,this._eventMap=new Map}static get defineName(){return`${od}-${this.componentName}`}static register(){this.componentName&&(this.registerEventAgent(),this.registerExpressionProperties(),customElements.get(this.defineName)||customElements.define(this.defineName,this))}emit(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t}))}static registerEventAgent(){const e=this.prototype.connectedCallback,t=this;this.prototype.connectedCallback=function(){this.eventAgent=t.eventAgent,this.startProxyOnEventListener(),e.call(this)}}addEventListener(e,t,n){if(!this._eventMap||!this.eventAgent)return super.addEventListener(e,t,n),t;const o=t._$committedValue?t._$committedValue:t,i=r=>{if(this.eventAgent[e]===void 0)return o.call(this,r);const d=this.eventAgent[e];return typeof d=="boolean"?d?o.call(this,r):void 0:typeof d=="function"?d.call(this,r)?o.call(this,r):void 0:(warn("Please pass in the correct parameters"),o.call(this,r))};return t._$committedValue?(t._$committedValue=i,super.addEventListener(e,t,n),i):(this._eventMap.set(t,i),super.addEventListener(e,i,n),i)}removeEventListener(e,t,n){const o=this._eventMap.has(t)?this._eventMap.get(t):t;super.removeEventListener(e,o,n),super.removeEventListener(e,t,n)}startProxyOnEventListener(){for(const e in this.eventAgent)this.addOnEventListener(e)}addOnEventListener(e){const t=`on${e}`;Object.defineProperty(this,t,{set:n=>{typeof n=="function"?this.onEventMap.set(t,this.addEventListener(e,n)):this.onEventMap.has(t)&&this.removeEventListener(e,this.onEventMap.get(t))},get:()=>this.onEventMap.get(t)})}static registerExpressionProperties(){this.expressionProperties.forEach(n=>this.registerExpressionProperty(n));const e=this.prototype.connectedCallback,t=this;this.prototype.connectedCallback=function(){t.expressionProperties.forEach(n=>{const o=this,i=o[qt+n];typeof i=="string"&&i&&(o[n]=nd(i,{html:z}))}),e.call(this)}}static registerExpressionProperty(e){const t=qt+e;this.properties={...this.properties,[t]:{type:String}}}}B.componentName="",B.eventAgent={},B.expressionProperties=[];const Le=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:null;function y(s,e,t,n){var o,i=arguments.length,r=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,t,n);else for(var d=s.length-1;d>=0;d--)(o=s[d])&&(r=(i<3?o(r):i>3?o(e,t,r):o(e,t))||r);return i>3&&r&&Object.defineProperty(e,t,r),r}Le.log=(...s)=>{},Le.warn=Le.console.warn,Le.info=Le.console.info,typeof SuppressedError=="function"&&SuppressedError;const As=z`
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
      ${As}
    `}}).componentName="icon-loading";class G extends B{constructor(){super(...arguments),this.block=!1,this.disabled=!1,this.loading=!1,this.submit=!1}render(){return z`
      <div>
        ${this.loading?As:N}
        <slot></slot>
      </div>
    `}}G.componentName="button",G.styles=W`${q(`div {
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
}`)}`,G.eventAgent={click(){return!(this.loading||this.disabled)}},y([C({type:String,reflect:!0})],G.prototype,"type",void 0),y([C({type:String,reflect:!0})],G.prototype,"size",void 0),y([C({type:Boolean,reflect:!0})],G.prototype,"block",void 0),y([C({type:Boolean,reflect:!0})],G.prototype,"disabled",void 0),y([C({type:Boolean})],G.prototype,"loading",void 0),y([C({type:Boolean})],G.prototype,"submit",void 0);class Me extends B{constructor(){super(...arguments),this.direction="horizontal"}render(){return z`<slot></slot>`}}Me.componentName="space",Me.styles=W`${q(`:host {
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
}`)}`,y([C({type:String,reflect:!0})],Me.prototype,"direction",void 0);const Ms="form-context";class Q extends B{constructor(){super(),this._values={}}onSubmit(){this.dispatchEvent(new CustomEvent("submit",{detail:{...this._values}}))}submit(){this.onSubmit()}connectedCallback(){super.connectedCallback(),this.init()}init(){this._values=this.initialValues||{},this.formContext={values:this._values||{},setValue:(e,t)=>{this._values={...this._values,[e]:t}}}}willUpdate(e){e.has("values")&&(this._values={...this.values}),e.has("_values")&&this.formContext&&(this.formContext={...this.formContext,values:this._values})}render(){return z`
     <slot></slot>
    `}}Q.componentName="form",Q.styles=W`${q(`:host {
  display: block;
}`)}`,Q.expressionProperties=["initialValues"],y([C({type:Object,converter:s=>s&&function(e){try{return JSON.parse(e)}catch{return warn("The attribute you passed in does not conform to JSON format!"),null}}(s)})],Q.prototype,"initialValues",void 0),y([C({type:Object})],Q.prototype,"values",void 0),y([Z()],Q.prototype,"_values",void 0),y([At({context:Ms}),C({attribute:!1})],Q.prototype,"formContext",void 0);const id="form-item-context";let ne=class extends B{constructor(){super()}connectedCallback(){super.connectedCallback(),this.formItemContext={value:this.value,setValue:e=>{var t;this.name&&((t=this.formContext)==null||t.setValue(this.name,e))}}}get value(){var e;if(this.name)return(e=this.formContext)==null?void 0:e.values[this.name]}willUpdate(e){e.has("formContext")&&this.formItemContext&&(this.formItemContext={...this.formItemContext,value:this.value})}render(){return z`
      <div class="container">
        <div class="label">${this.label}</div>
        <div class="wrapper">
          <slot></slot>
        </div>
      </div>
    `}};ne.componentName="form-item",ne.styles=W`${q(`:host {
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
}`)}`,y([Mt({context:Ms,subscribe:!0}),C({attribute:!1})],ne.prototype,"formContext",void 0),y([At({context:id}),C({attribute:!1})],ne.prototype,"formItemContext",void 0),y([C({type:String})],ne.prototype,"label",void 0),y([C({type:String})],ne.prototype,"name",void 0);function Et(s){class e extends s{get formItemValue(){var n;return(n=this.formItemContext)==null?void 0:n.value}set formItemValue(n){var o;(o=this.formItemContext)==null||o.setValue(n)}}return y([Mt({context:"form-item-context",subscribe:!0}),C({attribute:!1})],e.prototype,"formItemContext",void 0),e}function xe(s,e){for(const t in e){const n=e[t];s.has(t)&&n&&n(s.get(t))}}let ce=class extends Et(B){constructor(){super(...arguments),this.inputRef=$e()}onInputChange(e){const t=e.target;this.emit("change",t.checked),this.formItemValue=t.checked}willUpdate(e){xe(e,{value:()=>{this._value=this.value},formItemContext:()=>{this._value=this.formItemValue}})}render(){return z`
      <label class="switch">
        <input
          ${ye(this.inputRef)}
          type="checkbox"
          .checked=${this._value}
          @change=${this.onInputChange}
        />
        <div class="slider" />
      </label>
    `}};ce.componentName="switch",ce.styles=W`${q(`:host {
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
}`)}`,y([C({type:String})],ce.prototype,"name",void 0),y([C({type:Boolean})],ce.prototype,"value",void 0),y([Z()],ce.prototype,"_value",void 0);class R extends Et(B){constructor(){super(),this.disabled=!1,this.size="medium",this.clearable=!1}onInput(e){const t=e.target.value;this.formItemValue=t,this.dispatchEvent(new CustomEvent("input",{detail:t})),this._value=t}willUpdate(e){xe(e,{formItemContext:()=>{this._value=this.formItemValue}}),e.has("value")&&(this._value=this.value)}clearInput(){this._value="",this.formItemValue="",this.dispatchEvent(new CustomEvent("input",{detail:""}))}render(){return z`
      <div class="container">
        <input
          class=${`size-${this.size}`}
          maxlength=${Ue(this.maxLength)}
          .placeholder=${Ue(this.placeholder)}
          @input=${e=>this.onInput(e)}
          .value=${Ue(this._value)}
          ?disabled=${this.disabled}
        />
        ${this.clearable&&!this.disabled&&this._value!==void 0&&this._value!==""?z`
        <button size="small"
          @click=${this.clearInput}>
          x
        </button>
      `:null}
      </div>
    `}}R.componentName="input",R.styles=W`${q(`:host {
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
}`)}`,y([C({type:String})],R.prototype,"name",void 0),y([C({type:String})],R.prototype,"value",void 0),y([C({type:String})],R.prototype,"placeholder",void 0),y([C({type:Boolean})],R.prototype,"disabled",void 0),y([C({type:Number})],R.prototype,"maxLength",void 0),y([C({type:String})],R.prototype,"size",void 0),y([C({type:Boolean,reflect:!0})],R.prototype,"clearable",void 0),y([Z()],R.prototype,"_value",void 0);const Es="checkbox-group-context";class oe extends B{get groupValue(){var e;return((e=this.checkboxGroupContext)==null?void 0:e.value)??[]}set groupValue(e){var t;(t=this.checkboxGroupContext)==null||t.setValue(e)}onChange(e){const t=e.target;this.emit("change",t.checked),this.value!==void 0&&(t.checked?this.groupValue=[...this.groupValue,this.value]:this.groupValue=this.groupValue.filter(n=>n!==this.value))}willUpdate(e){xe(e,{checkboxGroupContext:()=>{this.value!==void 0&&(this.groupValue.includes(this.value)?this.isChecked=!0:this.isChecked=!1)},checked:()=>{this.isChecked=this.checked}})}render(){return z`
      <label class="container">
        <input type="checkbox" .checked=${this.isChecked} @change=${this.onChange}/>
        <div class="checkbox"></div>
        <span class="text">
          <slot></slot>
        </span>
      </label>
    `}}oe.componentName="checkbox",oe.styles=W`${q(`:host {
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
}`)}`,y([Mt({context:Es,subscribe:!0}),C({attribute:!1})],oe.prototype,"checkboxGroupContext",void 0),y([C({type:Boolean})],oe.prototype,"checked",void 0),y([C()],oe.prototype,"value",void 0),y([Z()],oe.prototype,"isChecked",void 0);let de=class extends Et(B){connectedCallback(){super.connectedCallback(),this._value=this.value,this.checkboxGroupContext={value:this._value,setValue:e=>{this.onChange(e),this.checkboxGroupContext={...this.checkboxGroupContext,value:[...e]}}}}onChange(e){this.formItemValue=[...e],this._value=[...e],this.emit("change",[...e])}setValue(e){this.checkboxGroupContext={...this.checkboxGroupContext,value:[...e]}}willUpdate(e){xe(e,{formItemContext:()=>{log("formItemContext"),this._value=[...this.formItemValue||[]]},value:()=>{this._value=[...this.value||[]],this.setValue(this._value)}})}render(){return z`
      <slot></slot>
    `}};de.componentName="checkbox-group",de.styles=W`${q(`:host {
  display: block;
}`)}`,y([At({context:Es}),C({attribute:!1})],de.prototype,"checkboxGroupContext",void 0),y([C({type:Array})],de.prototype,"value",void 0),y([Z()],de.prototype,"_value",void 0);const Wt=typeof requestAnimationFrame<"u"?requestAnimationFrame.bind(window):setTimeout;function Ie(s){return 1e3*parseFloat(s)}function Kt(s,e){var c;(c=e.enter)==null||c.call(e,s);let t,n,o,i=[];const r=()=>{s.removeEventListener("transitionstart",void 0),s.removeEventListener("transitionrun",t),s.removeEventListener("transitionend",n),s.removeEventListener("transitioncancel",o),i=[]};var d;return s.addEventListener("transitionrun",t=v=>{i.push(v.propertyName)}),s.addEventListener("transitionend",n=v=>{var b;i=i.filter(m=>m!==v.propertyName),i.length===0&&((b=e.done)==null||b.call(e,s,"end"),r())}),s.addEventListener("transitioncancel",o=v=>{i=i.filter(b=>b!==v.propertyName)}),d=()=>{var m,L;(m=e.run)==null||m.call(e,s);const v=function(w){const V=getComputedStyle(w).transitionDuration.trim().split(",").map(E=>E.trim());let H=Ie(V[0]);for(const E of V){const K=Ie(E);K>H&&(H=K)}return H}(s),b=function(w){const V=getComputedStyle(w).transitionDelay.trim().split(",").map(E=>E.trim());let H=Ie(V[0]);for(const E of V){const K=Ie(E);K>H&&(H=K)}return H}(s);v||b||((L=e.done)==null||L.call(e,s,"noTransition"),r())},Wt(()=>{Wt(d)}),()=>{var v;(v=e.done)==null||v.call(e,s,"cancel"),r()}}let F=class extends B{constructor(){super(...arguments),this.show=!0,this.mounted=!1}get _display(){return this.display?this.display:this.initDisplay}onEnter(){this.addClass("enterClass")}onShow(){this.delClass("enterClass"),this.addClass("showClass")}onHide(){this.addClass("hideClass")}onLeave(){this.addClass("leaveClass")}willUpdate(){var e;(e=this.removeFn)==null||e.call(this),this.show?this.runShow():this.mounted?this.runHide():this.hideHostElement()}firstUpdated(){this.mounted=!0}connectedCallback(){super.connectedCallback(),this.initDisplay=getComputedStyle(this).display}addClass(e){if(this[e])this.classList.add(...this[e].split(/\s+/));else if(this.name){const t=`${this.name}-${Xt(e)}`;this.classList.add(t)}}delClass(e){if(this[e])this.classList.remove(...this[e].split(/\s+/));else if(this.name){const t=`${this.name}-${Xt(e)}`;this.classList.remove(t)}}runShow(){this.removeFn=Kt(this,{enter:()=>{this.showHostElement(),this.onEnter()},run:()=>this.onShow(),done:()=>this.delClass("showClass")})}runHide(){this.removeFn=Kt(this,{enter:()=>this.onHide(),run:()=>this.onLeave(),done:(e,t)=>{this.delClass("hideClass"),this.delClass("leaveClass"),this.hideHostElement(),this.emit("hideover",t)}})}showHostElement(){this.style.display=this._display||"block"}hideHostElement(){this.style.display="none"}render(){return z`<slot></slot>`}};function Xt(s){return s.replace(/[A-Z]/g,e=>"-"+e.toLowerCase())}F.componentName="transition",F.styles=W`
    :host {
      display: block;
    }
  `,y([C({type:Boolean,reflect:!0})],F.prototype,"show",void 0),y([C({type:String,reflect:!0})],F.prototype,"display",void 0),y([C({type:String,reflect:!0})],F.prototype,"name",void 0),y([C({type:String})],F.prototype,"enterClass",void 0),y([C({type:String})],F.prototype,"showClass",void 0),y([C({type:String})],F.prototype,"hideClass",void 0),y([C({type:String})],F.prototype,"leaveClass",void 0);const Ts=z`
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
      ${Ts}
    `}}).componentName="no-data";let U=class extends B{static register(){F.register(),super.register()}constructor(){super(),this.active=!1,this.inputValue="",this.titleRef=$e(),this.inputRef=$e(),this.onSearch=e=>{const t=e.target.value;this.inputValue=t,this.emit("search",t)},this.onListHide=e=>{e.detail==="end"&&(this.inputValue="",this.emit("search",this.inputValue))},this.options=[],this.search=!1}onItemClick(e){this.label=e.label??(typeof e.value=="string"?e.value:void 0),this._value=e.value,this.emit("change",this._value)}get filterOptions(){return this.filter?this.filter(this.inputValue,this.options):this.options}firstUpdated(){var e,t;this.titleRef.value&&(e=this.titleRef.value,t={onFocus:()=>{this.active=!this.active,this.active&&this.updateComplete.then(()=>{var n;(n=this.inputRef.value)==null||n.focus()})},onBlur:()=>{this.active=!1}},e.addEventListener("click",n=>{var o;(o=t.onFocus)==null||o.call(t,n),n.stopPropagation()}),document.addEventListener("click",n=>{var o;(o=t.onBlur)==null||o.call(t,n)}))}willUpdate(e){xe(e,{value:t=>this._value=t})}render(){const e=o=>z`
      <li
        class=${Re({"select-item-selected":this._value===o.value})}
        @click=${()=>this.onItemClick(o)}>${o.label??o.value}
      </li>
    `,t=()=>z`
      <input
        .value=${this.inputValue}
        ${ye(this.inputRef)}
        @input=${this.onSearch}
      />
    `,n=()=>z`
      <div class="select-input-container-label">
        <span class=${Re({"select-placeholder-color":this.active})}>${this.label}<span>
      </div>
    `;return z`
      <div class="select">
        <div
          ${ye(this.titleRef)}
          class=${Re({"select-input":!0,"select-active-border":this.active})}
        >
          ${(()=>{const o=this.search?this._value?this.active?this.inputValue?N:this.label:N:this.inputValue?N:this.placeholder:this._value?N:this.placeholder;return z`
        <div class="select-input-placeholder">
          ${Ue(o)}
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
        ${Ts}
        <span>暂无数据<span>
      </div>
    `}
          </div>
        </ot-transition>
      </div>
    `}};U.componentName="select",U.styles=W`${q(`:host {
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
}`)}`,U.expressionProperties=["options"],y([C({type:Array})],U.prototype,"options",void 0),y([C({type:String})],U.prototype,"value",void 0),y([C({type:String})],U.prototype,"placeholder",void 0),y([C({type:Function})],U.prototype,"filter",void 0),y([C({type:Boolean})],U.prototype,"search",void 0),y([Z()],U.prototype,"_value",void 0),y([Z()],U.prototype,"label",void 0),y([Z()],U.prototype,"active",void 0),y([Z()],U.prototype,"inputValue",void 0);var qe;let J=class extends B{constructor(){super(...arguments),this.autofocus=!1,this.disabled=!1,this.value=0,this.dots=!1,this.max=100,this.min=0,this.range=!1,this.vertical=!1}};y([C({type:Boolean})],J.prototype,"autofocus",void 0),y([C({type:Boolean})],J.prototype,"disabled",void 0),y([C({type:Number})],J.prototype,"value",void 0),y([C({type:Boolean})],J.prototype,"dots",void 0),y([C({type:Number})],J.prototype,"max",void 0),y([C({type:Number})],J.prototype,"min",void 0),y([C({type:Boolean})],J.prototype,"range",void 0),y([C({type:Boolean})],J.prototype,"vertical",void 0),function(s){s.Change="change",s.AfterChange="afterChange"}(qe||(qe={}));let be=class extends J{constructor(){super(...arguments),this.isDragging=!1,this.innerValue=this.value,this.sliderRef=$e(),this.sliderTrackRef=$e(),this.sliderHandleRef=$e(),this.onMouseDown=e=>{this.disabled||e.buttons!==1||(this.isDragging=!0,this.onSliderHandle(e),document.addEventListener("mousemove",this.onMouseMove),document.addEventListener("mouseup",this.onMouseUp))},this.onMouseUp=async()=>{this.isDragging=!1,this.emit(qe.AfterChange,{value:this.innerValue}),document.removeEventListener("mousemove",this.onMouseMove),document.removeEventListener("mouseup",this.onMouseUp)},this.onMouseMove=e=>{e.preventDefault(),this.isDragging&&this.onSliderHandle(e)},this.onSliderHandle=e=>{if(!this.disabled&&this.sliderRef.value){const t=this.sliderRef.value.getBoundingClientRect();if(this.vertical){const n=(t.bottom-e.clientY)/t.height*100;this.setPercentage(n)}else{const n=(e.clientX-t.left)/t.width*100;this.setPercentage(n)}}},this.setPercentage=e=>{const t=Math.min(100,Math.max(0,e));this.sliderRef.value&&this.sliderHandleRef.value&&this.sliderTrackRef.value&&(this.vertical?(this.sliderHandleRef.value.style.top="auto",this.sliderHandleRef.value.style.bottom=`${t}%`,this.sliderTrackRef.value.style.height=`${t}%`):(this.sliderHandleRef.value.style.top="",this.sliderHandleRef.value.style.left=`${t}%`,this.sliderTrackRef.value.style.width=`${t}%`),this.innerValue=this.calculateValue(t))},this.calculateValue=e=>{const{max:t,min:n}=this;return typeof t=="number"&&typeof n=="number"||console.warn("max and min must be a number"),.01*e*(t-n)+n}}updated(e){xe(e,{value:()=>{if(this.value!==void 0){const t=(this.value-this.min)/(this.max-this.min)*100;this.setPercentage(t)}},innerValue:()=>{this.emit(qe.Change,{value:this.innerValue})}})}render(){return z`
      <div
        ${ye(this.sliderRef)}
        class=${Re({slider:!0,disabled:this.disabled,dragging:this.isDragging,horizontal:!this.vertical,vertical:this.vertical})}
        @mousedown=${this.onMouseDown}
        @dragstart=${e=>e.preventDefault()}
      >
        <div class="slider-rail"></div>
        <div
          ${ye(this.sliderTrackRef)}
          class="slider-track"
        ></div>
        <div
          ${ye(this.sliderHandleRef)}
          class="slider-handle"
        ></div>
      </div>
    `}};be.componentName="slider",be.styles=[W`${q(`:host {
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
}`)}`],y([Z()],be.prototype,"isDragging",void 0),y([Z()],be.prototype,"innerValue",void 0);const Yt=Object.freeze({__proto__:null,Button:G,Checkbox:oe,CheckboxGroup:de,Form:Q,FormItem:ne,Input:R,Select:U,Slider:be,Space:Me,Switch:ce,Transition:F});function Hs(){var s,e;for(const t in Yt)(e=(s=Yt[t]).register)==null||e.call(s)}var rd=Object.freeze({__proto__:null,Button:G,Checkbox:oe,CheckboxGroup:de,Form:Q,FormItem:ne,Input:R,Select:U,Slider:be,Space:Me,Switch:ce,Transition:F,html:z,register:Hs});const st=(s,e)=>{const t=s.__vccOpts||s;for(const[n,o]of e)t[n]=o;return t},ad={},ld={t:"1661231422733",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3259",width:"20",height:"20"},cd=h("path",{d:"M682.666667 810.666667c-12.8 0-21.333333-4.266667-29.866667-12.8-17.066667-17.066667-17.066667-42.666667 0-59.733334l226.133333-226.133333-226.133333-226.133333c-17.066667-17.066667-17.066667-42.666667 0-59.733334s42.666667-17.066667 59.733333 0l256 256c17.066667 17.066667 17.066667 42.666667 0 59.733334l-256 256c-8.533333 8.533333-17.066667 12.8-29.866666 12.8zM341.333333 810.666667c-12.8 0-21.333333-4.266667-29.866666-12.8l-256-256c-17.066667-17.066667-17.066667-42.666667 0-59.733334l256-256c17.066667-17.066667 42.666667-17.066667 59.733333 0s17.066667 42.666667 0 59.733334L145.066667 512l226.133333 226.133333c17.066667 17.066667 17.066667 42.666667 0 59.733334-8.533333 8.533333-17.066667 12.8-29.866667 12.8z","p-id":"3260"},null,-1),dd=[cd];function ud(s,e){return a(),u("svg",ld,dd)}const hd=st(ad,[["render",ud]]),pd={},vd={t:"1661231449868",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3541",width:"20",height:"20"},fd=h("path",{d:"M305.6 225.6c-17.6-17.6-43.2-17.6-59.2 0L19.2 460.8c-25.6 30.4-25.6 72 0 97.6l225.6 235.2c8 8 20.8 12.8 30.4 12.8s20.8-4.8 30.4-12.8c17.6-17.6 17.6-43.2 0-59.2L88 512l217.6-225.6c17.6-17.6 17.6-43.2 0-60.8zM1001.6 460.8L774.4 225.6c-17.6-17.6-43.2-17.6-59.2 0s-17.6 43.2 0 59.2L932.8 512 715.2 737.6c-17.6 17.6-17.6 43.2 0 59.2 8 8 17.6 12.8 30.4 12.8 12.8 0 20.8-4.8 30.4-12.8l225.6-235.2c28.8-28.8 28.8-70.4 0-100.8zM612.8 230.4c-20.8-8-46.4 4.8-56 25.6L382.4 742.4c-8 20.8 4.8 46.4 25.6 56 4.8 0 8 4.8 12.8 4.8 17.6 0 33.6-12.8 38.4-30.4l179.2-491.2c8-20.8-4.8-46.4-25.6-51.2z","p-id":"3542"},null,-1),md=[fd];function _d(s,e){return a(),u("svg",vd,md)}const gd=st(pd,[["render",_d]]),bd={},$d={viewBox:"0 0 544 560",fill:"none",xmlns:"http://www.w3.org/2000/svg"},yd=h("path",{d:"M399.503 143.667C399.319 152.501 406.332 159.812 415.167 159.997C424.001 160.181 431.312 153.168 431.497 144.333L399.503 143.667ZM416 120L431.997 120.333C431.999 120.207 432 120.081 432 119.954L416 120ZM360 64L360.046 48.0001C360.03 48 360.015 48 360 48L360 64ZM144 64V48C143.984 48 143.968 48 143.953 48.0001L144 64ZM80 128L64.0001 127.953C64 127.968 64 127.984 64 128L80 128ZM80 344H64C64 344.015 64 344.03 64.0001 344.046L80 344ZM136 400L135.954 416C135.97 416 135.985 416 136 416L136 400ZM160 416C168.837 416 176 408.837 176 400C176 391.163 168.837 384 160 384V416ZM217 160H439V128H217V160ZM439 160C461.644 160 480 178.356 480 201H512C512 160.683 479.317 128 439 128V160ZM480 201V423H512V201H480ZM480 423C480 445.644 461.644 464 439 464V496C479.317 496 512 463.317 512 423H480ZM439 464H217V496H439V464ZM217 464C194.356 464 176 445.644 176 423H144C144 463.317 176.683 496 217 496V464ZM176 423V201H144V423H176ZM176 201C176 178.356 194.356 160 217 160V128C176.683 128 144 160.683 144 201H176ZM431.497 144.333L431.997 120.333L400.003 119.667L399.503 143.667L431.497 144.333ZM432 119.954C431.946 100.888 424.347 82.6173 410.865 69.1349L388.238 91.7624C395.741 99.2658 399.97 109.434 400 120.046L432 119.954ZM410.865 69.1349C397.383 55.6526 379.112 48.0543 360.046 48.0001L359.954 79.9999C370.566 80.0301 380.734 84.2589 388.238 91.7624L410.865 69.1349ZM360 48H144V80H360V48ZM143.953 48.0001C122.767 48.0627 102.467 56.5064 87.4868 71.4868L110.114 94.1142C119.117 85.1118 131.316 80.0376 144.047 79.9999L143.953 48.0001ZM87.4868 71.4868C72.5064 86.4673 64.0627 106.767 64.0001 127.953L95.9999 128.047C96.0376 115.316 101.112 103.117 110.114 94.1142L87.4868 71.4868ZM64 128V344H96V128H64ZM64.0001 344.046C64.0543 363.112 71.6526 381.383 85.1349 394.865L107.762 372.238C100.259 364.734 96.0301 354.566 95.9999 343.954L64.0001 344.046ZM85.1349 394.865C98.6173 408.347 116.888 415.946 135.954 416L136.046 384C125.434 383.97 115.266 379.741 107.762 372.238L85.1349 394.865ZM136 416H160V384H136V416Z",fill:"currentColor"},null,-1),kd=[yd];function wd(s,e){return a(),u("svg",$d,kd)}const xd=st(bd,[["render",wd]]),Ne="vitepress-demo-preview",ze=(s,e,t,n)=>{let o=e===""?`${s}`:`${s}-${e}`;return t&&(o+=`__${t}`),n&&(o+=`--${n}`),o},Is=(s="")=>({b:()=>ze(Ne,s),e:(e="")=>ze(Ne,s,e),m:(e="")=>ze(Ne,s,"",e),bem:(e,t,n)=>ze(Ne,e,t,n)}),Cd=()=>{const s=T(!0);return{isCodeFold:s,setCodeFold:e=>{s.value=e}}},Ld=()=>({copyContent:T(""),clickCopy:async s=>{await navigator.clipboard.writeText(s)}}),Pd={},Vd={width:"20",height:"20",viewBox:"0 0 48 48",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},Sd=h("path",{d:"M24 4L29.2533 7.83204L35.7557 7.81966L37.7533 14.0077L43.0211 17.8197L41 24L43.0211 30.1803L37.7533 33.9923L35.7557 40.1803L29.2533 40.168L24 44L18.7467 40.168L12.2443 40.1803L10.2467 33.9923L4.97887 30.1803L7 24L4.97887 17.8197L10.2467 14.0077L12.2443 7.81966L18.7467 7.83204L24 4Z",fill:"currentColor",stroke:"#333","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),Ad=h("path",{d:"M17 24L22 29L32 19",fill:"currentColor",stroke:"#333","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),Md=[Sd,Ad];function Ed(s,e){return a(),u("svg",Vd,Md)}const Td=st(Pd,[["render",Ed]]),Hd=k({__name:"message-notice",props:{content:{default:"复制成功！"},close:null},setup(s,{expose:e}){const t=s,n=Is(),o=T(!1),i=v=>{o.value=v},r=T(-999),d=v=>{r.value=v};ee(o,v=>{v===!0&&setTimeout(()=>{o.value=!1},3e3)});const c=()=>{t.close()};return e({setVisible:i,setTopHeight:d}),(v,b)=>(a(),x(We,{name:"slide-fade",onAfterLeave:c},{default:f(()=>[o.value?(a(),u("div",{key:0,class:S([l(n).bem("message-notice","container")]),style:ss({top:r.value+"px"})},[g(Td),h("span",null,M(s.content),1)],6)):_("",!0)]),_:1}))}}),ut=[],Id={open:()=>{const s=document.createElement("div"),e=Ys(Hd,{content:"复制成功！",close:()=>{document.body.removeChild(s),ut.pop(),e.unmount()}}),t=e.mount(s);document.body.appendChild(s);const n=ut.length,o=n===0?10:(n+1)*10+n*42;t.setTopHeight(o),t.setVisible(!0),ut.push(t)}},Nd=["innerHTML"],zd=["innerHTML"],Bd=k({__name:"AntDesign",props:{code:null,showCode:null,title:{default:"默认标题"},description:{default:"描述内容"}},setup(s){const e=s,t=Is(),{isCodeFold:n,setCodeFold:o}=Cd(),{copyContent:i,clickCopy:r}=Ld(),d=T(decodeURIComponent(e.code)),c=T(decodeURIComponent(e.showCode)),v=T(null),b=()=>{r(d.value),Id.open()},m=P(()=>{var w;return v.value?(w=v.value)==null?void 0:w.clientHeight:0}),L=w=>{n.value?v.value.style.height="0px":v.value.style.height=`${w}px`};return ae(()=>{const w=m.value;L(w)}),ee(n,()=>{const w=m.value;L(w)}),(w,V)=>(a(),u("div",{class:S([l(t).e("ant-design__container")])},[h("section",{class:S([l(t).bem("preview")])},[p(w.$slots,"default")],2),h("section",{class:S([l(t).bem("description")])},[e.title?(a(),u("div",{key:0,class:S([l(t).bem("description","title")])},M(s.title),3)):_("",!0),e.description?(a(),u("div",{key:1,class:S([l(t).bem("description","content")]),innerHTML:s.description},null,10,Nd)):_("",!0),e.description||!e.title&&!e.description?(a(),u("div",{key:2,class:S([l(t).bem("description","split-line")])},null,2)):_("",!0),h("div",{class:S([l(t).bem("description","handle-btn")])},[l(n)?(a(),x(hd,{key:1,onClick:V[1]||(V[1]=H=>l(o)(!1))})):(a(),x(gd,{key:0,onClick:V[0]||(V[0]=H=>l(o)(!0))})),g(xd,{onClick:b})],2)],2),h("section",{class:S([l(t).bem("source")]),ref_key:"sourceCodeArea",ref:v},[h("div",{innerHTML:c.value,class:"language-vue"},null,8,zd)],2)],2))}});console.log("vue version",Js);console.log("others-ui",rd);Hs();const hu={extends:Ht,Layout:()=>Qs(Ht.Layout,null,{}),enhanceApp({app:s,router:e,siteData:t}){s.component("demo-preview",Bd)}};export{hu as R,Ud as V,Rd as a,Dd as b,xa as c,A as u};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/VPLocalSearchBox.fGrND2V4.js","assets/chunks/framework.FMYHWrFI.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
