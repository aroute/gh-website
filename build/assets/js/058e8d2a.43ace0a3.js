"use strict";(self.webpackChunkgh_website=self.webpackChunkgh_website||[]).push([[831],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var r=n.createContext({}),c=function(e){var t=n.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(r.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(a),m=i,h=p["".concat(r,".").concat(m)]||p[m]||d[m]||o;return a?n.createElement(h,s(s({ref:t},u),{},{components:a})):n.createElement(h,s({ref:t},u))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,s=new Array(o);s[0]=m;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l[p]="string"==typeof e?e:i,s[1]=l;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),i=a(6010);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,i.Z)(o.tabItem,s),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(7462),i=a(7294),o=a(6010),s=a(2466),l=a(6550),r=a(1980),c=a(7392),u=a(12);function p(e){return function(e){return i.Children.map(e,(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:i}}=e;return{value:t,label:a,attributes:n,default:i}}))}function d(e){const{values:t,children:a}=e;return(0,i.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,r._X)(o),(0,i.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=d(e),[s,l]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[r,c]=h({queryString:a,groupId:n}),[p,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,i.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),g=(()=>{const e=r??p;return m({value:e,tabValues:o})?e:null})();(0,i.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:s,selectValue:(0,i.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),f(e)}),[c,f,o]),tabValues:o}}var g=a(2389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:l,selectValue:r,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),d=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==l&&(p(t),r(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:s}=e;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},s,{className:(0,o.Z)("tabs__item",k.tabItem,s?.className,{"tabs__item--active":l===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=f(e);return i.createElement("div",{className:(0,o.Z)("tabs-container",k.tabList)},i.createElement(b,(0,n.Z)({},e,t)),i.createElement(y,(0,n.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return i.createElement(v,(0,n.Z)({key:String(t)},e))}},2911:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=a(7462),i=(a(7294),a(3905)),o=a(4866),s=a(5162);const l={position:4},r="4. MAS Core",c={unversionedId:"tas-workshop/mas-core",id:"tas-workshop/mas-core",title:"4. MAS Core",description:"IBM Maximo Application Suite using Red Hat OpenShift Pipelines",source:"@site/docs/tas-workshop/4-mas-core.md",sourceDirName:"tas-workshop",slug:"/tas-workshop/mas-core",permalink:"/tas-workshop/mas-core",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{position:4},sidebar:"workshopSidebar",previous:{title:"3. Red Hat OpenShift",permalink:"/tas-workshop/redhat-openShift"},next:{title:"5. Maximo to Manage Migration",permalink:"/tas-workshop/maximo-to-MAS-manage"}},u={},p=[{value:"IBM Maximo Application Suite using Red Hat OpenShift Pipelines",id:"ibm-maximo-application-suite-using-red-hat-openshift-pipelines",level:2},{value:"OpenShift log in",id:"openshift-log-in",level:3},{value:"MAS CLI (Pipelines method)",id:"mas-cli-pipelines-method",level:3},{value:"Platforms covered in this section:",id:"platforms-covered-in-this-section",level:4},{value:"IBM Maximo Application Suite using Red Hat Ansible",id:"ibm-maximo-application-suite-using-red-hat-ansible",level:2},{value:"OpenShift log in",id:"openshift-log-in-1",level:3},{value:"Ansible (One Click MAS)",id:"ansible-one-click-mas",level:3},{value:"Platforms covered in this section:",id:"platforms-covered-in-this-section-1",level:4}],d={toc:p},m="wrapper";function h(e){let{components:t,...l}=e;return(0,i.kt)(m,(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"4-mas-core"},"4. MAS Core"),(0,i.kt)("h2",{id:"ibm-maximo-application-suite-using-red-hat-openshift-pipelines"},"IBM Maximo Application Suite using Red Hat OpenShift Pipelines"),(0,i.kt)("p",null,"The upcoming steps will guide you through the process of configuring Red Hat's ",(0,i.kt)("inlineCode",{parentName:"p"},"podman")," utility for provisioning IBM's Maximo Application Suite (MAS) using OpenShift Pipelines (Interactive MAS CLI). However, before you begin building MAS, it's crucial to confirm that your OpenShift installation has been successful through IBM's automation."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The pipeline method is meant to be followed only on an OpenShift built using the IBM automation tool.")),(0,i.kt)("h3",{id:"openshift-log-in"},"OpenShift log in"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Return to the Terminal and copy the output provided by the daffy automation at the conclusion of the successful installation. Paste this content into a Text Editor and save it, as you will need to refer to this information later.")),(0,i.kt)("details",null,(0,i.kt)("summary",null," Screenshot"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"VSCode01",src:a(661).Z,width:"1458",height:"892"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"VSCode01",src:a(8450).Z,width:"1750",height:"1278"}))),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Copy your Web Console URL. Paste the URL into your Firefox browser and proceed. If you encounter any self-signed certificate warnings, accept them and continue. This will direct you to the OpenShift dashboard.")),(0,i.kt)("details",null,(0,i.kt)("summary",null," Screenshot"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"VSCode01",src:a(5448).Z,width:"1556",height:"1322"}))),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Select ",(0,i.kt)("inlineCode",{parentName:"li"},"Daffy htpasswd Provider"),". Enter ",(0,i.kt)("inlineCode",{parentName:"li"},"ocpadmin")," as your username and copy/paste the password from the Text Editor file. Click the ",(0,i.kt)("strong",{parentName:"li"},"Log in")," button to access OpenShift.")),(0,i.kt)("details",null,(0,i.kt)("summary",null," Screenshot"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"VSCode01",src:a(9757).Z,width:"2340",height:"1154"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"VSCode01",src:a(9824).Z,width:"1814",height:"1120"}))),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Click on the three-dot menu and hide the banner from the view.")),(0,i.kt)("details",null,(0,i.kt)("summary",null," Screenshot"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"VSCode01",src:a(8760).Z,width:"3072",height:"1396"}))),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"The OpenShift dashboard might seem overwhelming initially. Make sure that your green check marks align with the screenshot. If they don't match, please raise your hand for assistance.")),(0,i.kt)("details",null,(0,i.kt)("summary",null," Screenshot"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"VSCode01",src:a(4770).Z,width:"3072",height:"1398"}))),(0,i.kt)("h3",{id:"mas-cli-pipelines-method"},"MAS CLI (Pipelines method)"),(0,i.kt)("p",null,"Watch this quick video to follow the steps."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://youtu.be/YY0WfH7oKcc"},"https://youtu.be/YY0WfH7oKcc")),(0,i.kt)("iframe",{width:"100%",height:"465",src:"https://www.youtube.com/embed/YY0WfH7oKcc?si=RhRM5a_sz19vHfMv",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Commands run in this step")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open Passwords.txt file from the desktop for reference.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd mas8\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"podman run -it --pull always -v ${PWD}:/mas8:Z --name ibmmas quay.io/ibmmas/cli:7.3.1\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"oc login ... (use your oc login string)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mas install\n")),(0,i.kt)("h4",{id:"platforms-covered-in-this-section"},"Platforms covered in this section:"),(0,i.kt)(o.Z,{defaultValue:"Platform",values:[{label:"Platform \u2192",value:"Platform"},{label:"Red Hat Cloud",value:"Red Hat Cloud"},{label:"IBM Automation",value:"IBM Automation"},{label:"MAS Pipelines",value:"MAS Pipelines"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Platform",mdxType:"TabItem"},"Click on the tabs to uncover the platforms covered in this section."),(0,i.kt)(s.Z,{value:"Red Hat Cloud",mdxType:"TabItem"},"The Red Hat Cloud account is utilized to obtain the entitlement token for OpenShift."),(0,i.kt)(s.Z,{value:"IBM Automation",mdxType:"TabItem"},'IBM\'s automation script, known as "daffy," is employed to provision OpenShift on VMware vSphere using what is commonly known as IPI method.'),(0,i.kt)(s.Z,{value:"MAS Pipelines",mdxType:"TabItem"},"Maximo Application Suite's Pipelines method is a command line terminal, question/answer based interactive CLI method. It's foundation is based on MAS DevOps Ansible deployment code.")),(0,i.kt)("h2",{id:"ibm-maximo-application-suite-using-red-hat-ansible"},"IBM Maximo Application Suite using Red Hat Ansible"),(0,i.kt)("p",null,"The upcoming steps will guide you through the process of configuring Red Hat's ",(0,i.kt)("inlineCode",{parentName:"p"},"podman")," utility for provisioning IBM's Maximo Application Suite (MAS) using Red Hat's Ansible DevOps code (MasDevOps). However, before you begin building MAS, it's crucial to confirm that your OpenShift installation has been successful through IBM's automation."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The direct Ansible method is meant to be followed only on an OpenShift built using the Assisted Installer method.")),(0,i.kt)("h3",{id:"openshift-log-in-1"},"OpenShift log in"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Return to the VS Code terminal and copy the output provided by the daffy automation at the conclusion of the successful installation during Stage 1 of 2 earlier. Paste this content into a Notepad file and save it, as you will need to refer to this information later.")),(0,i.kt)("details",null,(0,i.kt)("summary",null," Screenshot"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"VSCode01",src:a(1126).Z,width:"3072",height:"1198"}))),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Copy your Web Console URL.")),(0,i.kt)("details",null,(0,i.kt)("summary",null," Screenshot"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"VSCode01",src:a(4723).Z,width:"2270",height:"520"}))),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Paste the URL into your Firefox browser and proceed. If you encounter any self-signed certificate warnings, accept them and continue. This will direct you to the OpenShift dashboard.")),(0,i.kt)("details",null,(0,i.kt)("summary",null," Screenshot"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"VSCode01",src:a(2553).Z,width:"2536",height:"1278"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"VSCode01",src:a(852).Z,width:"2352",height:"1502"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"VSCode01",src:a(1846).Z,width:"3072",height:"1568"}))),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Select ",(0,i.kt)("inlineCode",{parentName:"li"},"Daffy htpasswd Provider"),". Enter ",(0,i.kt)("inlineCode",{parentName:"li"},"ocpadmin")," as your username and copy/paste the password from the Notepad file. Click the ",(0,i.kt)("strong",{parentName:"li"},"Log in")," button to access OpenShift.")),(0,i.kt)("details",null,(0,i.kt)("summary",null," Screenshot"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"VSCode01",src:a(4110).Z,width:"3072",height:"1562"}))),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Click on the three-dot menu and hide the banner from the view.")),(0,i.kt)("details",null,(0,i.kt)("summary",null," Screenshot"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"VSCode01",src:a(4220).Z,width:"3064",height:"1488"}))),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"The OpenShift dashboard might seem overwhelming initially. Make sure that your green check marks align with the screenshot. If they don't match, please raise your hand for assistance.")),(0,i.kt)("details",null,(0,i.kt)("summary",null," Screenshot"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"VSCode01",src:a(9088).Z,width:"3072",height:"1570"}))),(0,i.kt)("h3",{id:"ansible-one-click-mas"},"Ansible (One Click MAS)"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go back to the VS Code editor and create a new remote terminal.")),(0,i.kt)("details",null,(0,i.kt)("summary",null," Screenshot"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"VSCode01",src:a(1527).Z,width:"3058",height:"1570"}))),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"In the newly created terminal, which is running under ",(0,i.kt)("inlineCode",{parentName:"li"},"admin")," user, change directory to ",(0,i.kt)("inlineCode",{parentName:"li"},"mas8"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cd mas8\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Upload your AppPoint license to the mas8 directory (delete and replace).")),(0,i.kt)("details",null,(0,i.kt)("summary",null," Screenshot"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"VSCode01",src:a(2933).Z,width:"3072",height:"1578"}))),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Run this command to fetch the author's convenient bash scripts for installing MAS using the MasDevOps One Click Ansible code.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"bash <(curl -sL https://ibm.biz/BdyWKj)\n")),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Run this command to launch Red Hat's ",(0,i.kt)("inlineCode",{parentName:"li"},"podman")," utility for MasDevOps CLI. ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"podman run -it --pull always -v ${PWD}:/scripts:Z --name ibmmas quay.io/ibmmas/cli:7.1.0\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This podman command will require about a minute or two to execute. It will then take you inside the container, and your bash prompt will change accordingly.")),(0,i.kt)("details",null,(0,i.kt)("summary",null," Screenshot"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"VSCode01",src:a(2767).Z,width:"3072",height:"1580"}))),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Change directory.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cd /scripts\n")),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"From your notepad file saved earlier, copy/paste your specific ",(0,i.kt)("strong",{parentName:"li"},"OC Login command")," command.")),(0,i.kt)("details",null,(0,i.kt)("summary",null," Screenshot"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"VSCode01",src:a(3159).Z,width:"2374",height:"680"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"VSCode01",src:a(9331).Z,width:"1986",height:"580"}))),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},"Install MAS Core via Ansible.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"./1_core.sh\n")),(0,i.kt)("details",null,(0,i.kt)("summary",null," Screenshot"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"VSCode01",src:a(4323).Z,width:"3066",height:"1556"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"VSCode01",src:a(1908).Z,width:"2348",height:"1010"}))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Upon running '1_core.sh', your terminal will initiate the Ansible process, which will proceed to deploy MAS Core automatically. The anticipated duration for this process is around 40 minutes, and it should conclude successfully. Throughout this process, there are three types of messages you might encounter: waiting messages, error messages, and success messages. As long as your terminal displays continuous activity, everything is proceeding as expected. Messages in green, yellow, teal, and grey colors are all normal indicators. However, if you encounter any messages in red and your command output abruptly ends, please raise your hand for assistance.")),(0,i.kt)("ol",{start:8},(0,i.kt)("li",{parentName:"ol"},"After approximately 45 minutes, the Ansible automation process will successfully conclude, and you'll return to the command prompt. Scroll up to find the MAS URL along with the initial username and password details.")),(0,i.kt)("details",null,(0,i.kt)("summary",null," Screenshot"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"VSCode01",src:a(7617).Z,width:"3058",height:"1572"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"VSCode01",src:a(52).Z,width:"3070",height:"1570"}))),(0,i.kt)("ol",{start:9},(0,i.kt)("li",{parentName:"ol"},"In case you missed it, the initial (superuser) credentials can be found in the Secrets section of the ",(0,i.kt)("inlineCode",{parentName:"li"},"mas-{instanceId}-core")," project within OpenShift. ")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"VSCode01",src:a(5684).Z,width:"3070",height:"1392"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"VSCode01",src:a(3058).Z,width:"3024",height:"1384"})),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"platforms-covered-in-this-section-1"},"Platforms covered in this section:"),(0,i.kt)(o.Z,{defaultValue:"Platform",values:[{label:"Platform \u2192",value:"Platform"},{label:"IBM Automation",value:"IBM Automation"},{label:"Red Hat Ansible",value:"Red Hat Ansible"},{label:"MasDevOps",value:"MasDevOps"},{label:"IBM Maximo Application Suite",value:"IBM Maximo Application Suite"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Platform",mdxType:"TabItem"},"Click on the tabs to uncover the platforms covered in this section."),(0,i.kt)(s.Z,{value:"IBM Automation",mdxType:"TabItem"},'IBM\'s automation script, known as "daffy," is employed to provision Red Hat OpenShift on VMware vSphere.'),(0,i.kt)(s.Z,{value:"Red Hat Ansible",mdxType:"TabItem"},"Red Hat's Ansible is used to provision IBM Maximo Application Suite on Red Hat OpenShift running on-premises on VMware's virtualization technology."),(0,i.kt)(s.Z,{value:"MasDevOps",mdxType:"TabItem"},"MasDevOps is an Ansible collection of deployment code supporting devops for IBM Maximo Application Suite"),(0,i.kt)(s.Z,{value:"IBM Maximo Application Suite",mdxType:"TabItem"},"IBM Maximo Application Suite is a set of applications for enterprise asset monitoring, management, predictive maintenance and reliability planning.")),(0,i.kt)("hr",null))}h.isMDXComponent=!0},661:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mas001-9d6ec771d8c41e6b5836267a85eda639.png"},8450:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mas002-79863a640b442b82ec47e4a3bec84aa9.png"},5448:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mas003-eaa54096ab1c277c500a52008cc9893b.png"},9757:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mas004-efe7c6d9d6492b0d32cd94ac448c764a.png"},9824:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mas005-0287240af6235fc997a432fa7041eabc.png"},8760:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mas006-8d8a8e55a86106b368db0e76ce0fc1e5.png"},4770:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mas007-f1df49093cd1d94fcfebe6afb284cc68.png"},1126:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mas01-7705b3a50f161a08a1411333783d49b1.png"},4723:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mas02-6c61e7a9a2261d84f500f7a8e059607b.png"},2553:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mas03-abb6b63f627e4da74c0b47134cc72348.png"},852:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mas04-fa95c5856ff5ae01a7d25735edad3d4b.png"},1846:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mas05-164be369bad9e434c5780899555a947d.png"},4110:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mas06-df1e935f5bd088be0967c334af0bac44.png"},4220:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mas07-0dcfa709b8bbbee970daecf9cec559ec.png"},9088:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mas08-ae446aedb176ddccd674aa81959076fb.png"},1527:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mas09-e2eeacd1e4a954d0f0884b3c4965e595.png"},2933:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mas10-9c59a9395353668c0435e10c6e6e84c3.png"},3159:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mas11-dc7fd45773ff09ec4c198d1b3b83b48c.png"},2767:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mas12-bc50d1d44c8744975eca59a4754e22d8.png"},9331:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mas13-d89367db5bb19fc6fab86a6aefd22019.png"},4323:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mas14-29dcb0a0d3de974ec8bcf654a194240e.png"},1908:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mas15-1916c1c33e65951d6cc14285e80ba47a.png"},7617:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mas16-77f88b7e911aa1a3302762d1331020f0.png"},52:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mas17-11bd4af03e5e1b15c1f89bf3d77d2eff.png"},5684:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mas18-e23616e961e441b88275012c8a41c224.png"},3058:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mas19-6bd436ca6baab09681c8bee3b84b4636.png"}}]);