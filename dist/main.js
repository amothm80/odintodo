(()=>{"use strict";var e={365:(e,t,n)=>{n.d(t,{A:()=>c});var o=n(601),d=n.n(o),a=n(314),r=n.n(a)()(d());r.push([e.id,"/* styles.css */\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n:root {\n  --blue-200: #bfdbfe;\n  --slate-200: #e2e8f0;\n  --slate-400: #94a3b8;\n  --blue-400: #60a5fa;\n  --red-400: #f87171;\n  --neutral-50: #fafafa;\n  font-family: ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji',\n    'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\n  font-weight: 500;\n}\n\n\nhtml {\n  width: max(100%, 800px);\n  height: 100%;\n}\nbody {\n  height: 100%;\n  width: max(100%, 800px);\n  display: flex;\n  flex-direction: row;\n}\n\n#sidebar {\n  width: 300px;\n  height: 100%;\n  background-color: var(--slate-200);\n  display: flex;\n  flex-direction: column;\n  gap: 100px;\n}\n\n#sidebar-header {\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n  align-items: center;\n  flex-grow: 0;\n  padding: 10px;\n}\n\n#user-icon {\n  flex-grow: 0;\n  align-self: center;\n}\n\n#user-name {\n  flex-grow: 1;\n}\n\n#user-notif {\n  flex-grow: 0;\n  width: 30px;\n  height: 30px;\n\n  border: 0px;\n  background-color: var(--slate-200);\n  border-radius: 20px;\n}\n\n#notif-img {\n  width: 28px;\n  height: 28px;\n  border: 0px;\n  outline: 0px;\n}\n\n#user-icon {\n  width: 30px;\n  height: 30px;\n}\n\n#projects {\n  /* grid-row: 4; */\n\n  flex-grow: 1;\n\n  padding: 0 10px 0 10px;\n}\n\n#sidebar-footer {\n  /* grid-row: 9; */\n  display: flex;\n  flex-direction: row;\n  flex-grow: 0;\n  height: 50px;\n  width: 100%;\n  box-shadow: -2px 0 2px 1px black;\n  justify-content: center;\n  align-items: center;\n}\n\n#project-list{\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  gap: 10px;\n}\n\n.project-cell {\n  width: 100%;\n  /* height: 100%; */\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n\n}\n\n.project-button {\n  font-family: ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji',\n    'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\n  width: 100%;\n  background-color: var(--slate-200);\n  border: 0;\n  height: 40px;\n  text-align: left;\n  border-radius: 10px;\n  font-weight: 500;\n  padding: 0 10px 0 10px;\n  box-shadow: 0px 0px 2px 1px grey;\n}\n\n.project-button:hover {\n  background-color: var(--slate-400);\n  color: var(--neutral-50);\n  opacity: 0.8;\n}\n\n.project-button:active {\n  background-color: var(--slate-400);\n  color: var(--neutral-50);\n  opacity: 1;\n}\n\n\n\n#main-content {\n  width: max(100%, 800px);\n  background-color: var(--neutral-50);\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n#project-title {\n  flex-grow: 0;\n  height: 200px;\n  padding: 10px;\n  align-content: end;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-end;\n  gap: 20px;\n}\n\n#task-list {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 0 10px 0 10px;\n}\n\n#main-content-footer {\n  flex-grow: 0;\n  height: 50px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  box-shadow: 1px 0px 2px 1px black;\n  padding: 0 10px 0 10px;\n  align-items: center;\n}\n\n.edit-project-title{\n  width: 30px;\n  height: 30px;\n  /* background-color: var(--red-400); */\n  background-color: var(--neutral-50);\n  border: 0px;\n}\n.project-cell-button-image{\n  width: 29px;\n  height: 29px;\n  background-size: cover; \n}\n\n.task-cell {\n  padding: 0 10px 0 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 10px;\n  box-shadow: 0px 0px 2px 1px lightgray;\n  border-radius: 10px;\n}\n\n.task-cell-high{\n  display: flex;\n  flex: row;\n  justify-content: flex-start;\n  height: 30px;\n  align-items: center;\n  gap: 10px;\n}\n\n.task-checkbox, .task-due, .task-priority{\n  flex: 0 0 auto;\n}\n\n.task-title{\n  flex: 0 1 100%;\n}\n\n.task-description {\n  align-self: center;\n  justify-self: left;\n  flex-grow: 1;\n}\n\n.task-cell-mid{\n  height: 60px;\n}\n\n.task-cell-low{\n  height: 40px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  gap: 10px;\npadding-bottom: 10px;\npadding-right: 10px;\n}\n\n.task-edit-button{\n width: 30px;\n height: 30px;\n /* background-color: var(--blue-400); */\n background-color: var(--neutral-50);\n border: 0px;\n}\n\n.task-delete-button{\n  width: 30px;\n  height: 30px;\n  /* background-color: var(--red-400); */\n  background-color: var(--neutral-50);\n  border: 0px;\n}\n\n.task-cell-button-image{\n  width: 29px;\n  height: 29px;\n  background-size: cover;\n}\n\n.footer-button-add{\n  width: 150px;\n  height: 30px;\n  border: 0;\n  background-color: var(--blue-400);\n  border-radius: 10px;\n  box-shadow: 0px 0px 1px 1px gray;\n  color: white;\n  opacity: 0.9;\n}\n\n.footer-button-delete{\n  width: 150px;\n  height: 30px;\n  border: 0;  \n  background-color: var(--red-400);\n  border-radius: 10px;\n  box-shadow: 0px 0px 1px 1px gray;\n  color: white;\n  opacity: 0.9;\n}\n\n.footer-button-add:hover, .footer-button-delete:hover {\n  opacity: 0.5;\n} \n\n.footer-button-add:active, .footer-button-delete:active {\n  opacity: 1;\n}\n\n/*dialog*/\ndialog {\n  border: 1px;\n  border-radius: 8px;\n  inset-inline-start: 0px;\n  inset-inline-end: 0px;\n  width: fit-content;\n  height: fit-content;\n  margin: auto;\n  border-width: initial;\n  /* border-style: solid; */\n  border-color: initial;\n  border-image: initial;\n  padding: 1em;\n}\n\ndialog::backdrop {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n\nform div{\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: auto;\n  gap:10px;\n}",""]);const c=r},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,d,a){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(o)for(var c=0;c<this.length;c++){var i=this[c][0];null!=i&&(r[i]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);o&&r[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),d&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=d):s[4]="".concat(d)),t.push(s))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},r=[],c=0;c<e.length;c++){var i=e[c],l=o.base?i[0]+o.base:i[0],s=a[l]||0,u="".concat(l," ").concat(s);a[l]=s+1;var p=n(u),m={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=d(m,o);o.byIndex=c,t.splice(c,0,{identifier:u,updater:f,references:1})}r.push(u)}return r}function d(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,d){var a=o(e=e||[],d=d||{});return function(e){e=e||[];for(var r=0;r<a.length;r++){var c=n(a[r]);t[c].references--}for(var i=o(e,d),l=0;l<a.length;l++){var s=n(a[l]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}a=i}}},659:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var d=void 0!==n.layer;d&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,d&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var d=t[o];if(void 0!==d)return d.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var d=o.length-1;d>-1&&(!e||!/^http(s?):/.test(e));)e=o[d--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0;var o=n(72),d=n.n(o),a=n(825),r=n.n(a),c=n(659),i=n.n(c),l=n(56),s=n.n(l),u=n(540),p=n.n(u),m=n(113),f=n.n(m),g=n(365),h={};h.styleTagTransform=f(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=p(),d()(g.A,h),g.A&&g.A.locals&&g.A.locals;const y={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let k;const x=new Uint8Array(16);function E(){if(!k){if("undefined"==typeof crypto||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");k=crypto.getRandomValues.bind(crypto)}return k(x)}const I=[];for(let e=0;e<256;++e)I.push((e+256).toString(16).slice(1));const b=function(e,t,n){if(y.randomUUID&&!t&&!e)return y.randomUUID();const o=(e=e||{}).random||(e.rng||E)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t){n=n||0;for(let e=0;e<16;++e)t[n+e]=o[e];return t}return function(e,t=0){return(I[e[t+0]]+I[e[t+1]]+I[e[t+2]]+I[e[t+3]]+"-"+I[e[t+4]]+I[e[t+5]]+"-"+I[e[t+6]]+I[e[t+7]]+"-"+I[e[t+8]]+I[e[t+9]]+"-"+I[e[t+10]]+I[e[t+11]]+I[e[t+12]]+I[e[t+13]]+I[e[t+14]]+I[e[t+15]]).toLowerCase()}(o)},T=n.p+"1ce1f523c16f7af7ecc0.png",v=n.p+"f98ed10524ac47f26faf.png";function j(e,t){const n=t.readTodoProjectByUUID(e),o=t.readTodoTasksForProject(n),d=document.getElementById("task-list");for(;d.lastElementChild;)d.removeChild(d.lastElementChild);d.innerHTML="",o.forEach(((n,o)=>{const a=n.getTodoTask(),r=a.taskUUID,c=document.createElement("input");c.className="task-checkbox",c.id=`task-checkbox-${r.slice(24)}`,c.dataset.taskUUID=r,c.type="checkbox",c.checked=a.taskCompleted,c.addEventListener("change",(e=>{!function(e,t){e.target.checked?t.setTodoTaskCompleted(e.target.dataset.taskUUID):t.unsetTodoTaskCompleted(e.target.dataset.taskUUID)}(e,t)}));const i=document.createElement("p");i.className="task-title",i.id=`task-title-${r.slice(24)}`,i.innerHTML=a.taskTitle;const l=document.createElement("p");l.className="task-due",l.id=`task-due-${r.slice(24)}`,l.innerHTML=a.taskDueDate;const s=document.createElement("p");s.className="task-priority",s.id=`task-priority-${r.slice(24)}`,s.innerHTML=a.taskPriority;const u=document.createElement("p");u.className="task-description",u.id=`task-description-${r.slice(24)}`,u.innerHTML=a.taskDescription;const p=document.createElement("button");p.type="button",p.className="task-edit-button",p.id=`task-edit-button-${r.slice(24)}`,p.dataset.projectUUID=e,p.dataset.taskUUID=r;const m=document.createElement("img");m.src=v,m.className="task-cell-button-image",m.id="task-edit-image",p.appendChild(m),p.addEventListener("click",(e=>function(e,t){const n=document.getElementById(e.target.parentElement.id).dataset.taskUUID,o=document.getElementById(e.target.parentElement.id).dataset.projectUUID,d=t.readTodoTaskByUUID(n),a=document.getElementById("new-task-control");for(;a.lastElementChild;)a.removeChild(a.lastElementChild);a.innerHTML="";const r=document.createElement("button");r.className="edit-task-buttons",r.id=`edit-task-submit-${n.slice(24)}`,r.type="submit",r.dataset.taskUUID=n,r.dataset.projectUUID=o,r.innerHTML="Submit";const c=document.createElement("button");c.className="edit-task-buttons",c.id="edit-task-cancel",c.innerHTML="Cancel",a.appendChild(r),a.appendChild(c),document.getElementById("task-title-input").value=d.getTodoTask().taskTitle,document.getElementById("task-description-input").value=d.getTodoTask().taskDescription,document.getElementById("task-priority-input").value=d.getTodoTask().taskPriority,document.getElementById("task-duedate-input").value=d.getTodoTask().taskDueDate,r.addEventListener("click",(e=>function(e,t){if(e.preventDefault(),"edit-task-submit"==e.target.id.slice(0,16)){const n=document.getElementById(e.target.id).dataset.taskUUID,o=document.getElementById(e.target.id).dataset.projectUUID;t.modifyTodoTask(document.getElementById("task-title-input").value,document.getElementById("task-description-input").value,document.getElementById("task-duedate-input").value,document.getElementById("task-priority-input").value,n),j(o,t),document.getElementById("add-task-dialog").close()}}(e,t)),{once:!0}),c.addEventListener("click",(()=>{document.getElementById("add-task-dialog").close()}),{once:!0}),document.getElementById("add-task-dialog").showModal()}(e,t)));const f=document.createElement("button");f.type="button",f.className="task-delete-button",f.id=`task-delete-button-${o}`,f.dataset.projectUUID=e,f.dataset.taskUUID=n.getTodoTask().taskUUID;const g=document.createElement("img");g.src=T,g.className="task-cell-button-image",g.id="task-delete-image",f.appendChild(g),f.addEventListener("click",(e=>function(e,t){const n=document.getElementById(e.target.parentElement.id).dataset.projectUUID,o=document.getElementById(e.target.parentElement.id).dataset.taskUUID,d=t.readTodoTaskByUUID(o).getTodoTask().taskTitle,a=document.getElementById("confirm-message");for(;a.lastElementChild;)a.removeChild(a.lastElementChild);a.innerHTML=`<h3>Are you sure you want to delete "${d}"?</h3>`;const r=document.getElementById("confirm-control");for(;r.lastElementChild;)r.removeChild(r.lastElementChild);r.innerHTML="";const c=document.createElement("button");c.className="confirm-buttons",c.id=`confirm-delete-${o.slice(24)}`,c.dataset.taskUUID=o,c.dataset.projectUUID=n,c.type="submit",c.innerHTML="Confrim";const i=document.createElement("button");i.className="confirm-buttons",i.id="cancel-delete",i.innerHTML="Cancel",r.appendChild(c),r.appendChild(i),c.addEventListener("click",(e=>function(e,t){if(e.preventDefault(),"confirm-delete"==e.target.id.slice(0,14)){const n=document.getElementById(e.target.id).dataset.taskUUID,o=document.getElementById(e.target.id).dataset.projectUUID;t.deleteTodoTaskByUUID(n),j(o,t),document.getElementById("confirm-dialog").close()}}(e,t))),i.addEventListener("click",(()=>{document.getElementById("confirm-dialog").close()})),document.getElementById("confirm-dialog").showModal()}(e,t)));const h=document.createElement("div");h.className="task-cell-high",h.appendChild(c),h.appendChild(i),h.appendChild(s),h.appendChild(l);const y=document.createElement("div");y.className="task-cell-mid",y.appendChild(u);const k=document.createElement("div");k.className="task-cell-low",k.appendChild(p),k.appendChild(f);const x=document.createElement("div");x.className="task-cell",x.appendChild(h),x.appendChild(y),x.appendChild(k),d.appendChild(x)}))}function U(e,t){const n=document.getElementById(e.target.id).dataset.projectUUID,o=t.readTodoProjectByUUID(n).getTodoProject().projectTitle,d=document.getElementById("confirm-message");for(;d.lastElementChild;)d.removeChild(d.lastElementChild);d.innerHTML=`<h3>Are you sure you want to delete "${o}"?</h3>`;const a=document.getElementById("confirm-control");for(;a.lastElementChild;)a.removeChild(a.lastElementChild);a.innerHTML="";const r=document.createElement("button");r.className="confirm-buttons",r.id=`confirm-delete-${n.slice(24)}`,r.dataset.projectUUID=n,r.type="submit",r.innerHTML="Confirm";const c=document.createElement("button");c.className="confirm-buttons",c.id="cancel-delete",c.innerHTML="Cancel",a.appendChild(r),a.appendChild(c),r.addEventListener("click",(e=>{e.preventDefault(),function(e,t){if("confirm-delete"==e.target.id.slice(0,14)){const n=document.getElementById(e.target.id).dataset.projectUUID;t.deleteTodoProjectByUUID(n),B(t),function(){for(;document.getElementById("project-title").lastElementChild;)document.getElementById("project-title").removeChild(document.getElementById("project-title").lastElementChild);for(;document.getElementById("task-list").lastElementChild;)document.getElementById("task-list").removeChild(document.getElementById("task-list").lastElementChild);for(;document.getElementById("main-content-footer").lastElementChild;)document.getElementById("main-content-footer").removeChild(document.getElementById("main-content-footer").lastElementChild)}(),C(t),document.getElementById("confirm-dialog").close()}}(e,t)}),{once:!0}),c.addEventListener("click",(e=>{e.preventDefault(),document.getElementById("confirm-dialog").close()}),{once:!0}),document.getElementById("confirm-dialog").showModal()}function w(e,t){const n=t.readTodoProjectByUUID(e),o=document.getElementById("project-title");o.innerHTML=`<h1>${n.getTodoProject().projectTitle}</h1>`;const d=document.createElement("button");d.dataset.projectUUID=e,d.id=`edit-proj-title-but-${e.slice(24)}`,d.className="edit-project-title";const a=document.createElement("img");a.src=v,a.className="project-cell-button-image",a.id="project-edit-image",d.appendChild(a),d.addEventListener("click",(()=>{!function(e,t){document.getElementById("new-project-submit").replaceWith(document.getElementById("new-project-submit").cloneNode(!0)),document.getElementById("new-project-cancel").replaceWith(document.getElementById("new-project-cancel").cloneNode(!0)),document.getElementById("new-project-submit").addEventListener("click",(n=>{n.preventDefault(),function(e,t,n){"new-project-submit"==e.target.id&&(t.modifyTodoProject(document.getElementById("project-name-input").value,n),B(t),j(n,t),w(n,t),document.getElementById("add-project-dialog").close())}(n,e,t)})),document.getElementById("new-project-cancel").addEventListener("click",(e=>{e.preventDefault(),document.getElementById("add-project-dialog").close()})),document.getElementById("project-name-input").value=e.readTodoProjectByUUID(t).getTodoProject().projectTitle,document.getElementById("add-project-dialog").showModal()}(t,e)})),o.appendChild(d);const r=document.getElementById("main-content-footer");for(;r.lastElementChild;)r.removeChild(r.lastElementChild);r.innerHTML="";const c=document.createElement("button");c.className="footer-button-add",c.id=`add-task-but-${e.slice(24)}`,c.dataset.projectUUID=e,c.innerHTML="Add Task",c.addEventListener("click",(e=>{e.preventDefault(),function(e,t){document.getElementById("task-title-input").value="",document.getElementById("task-description-input").value="",document.getElementById("task-duedate-input").value="";const n=document.getElementById(e.target.id).dataset.projectUUID,o=document.getElementById("new-task-control");for(;o.lastElementChild;)o.removeChild(o.lastElementChild);o.innerHTML="";const d=document.createElement("button");d.className="new-task-buttons",d.id=`new-task-submit-${n.slice(24)}`,d.dataset.projectUUID=n,d.type="submit",d.innerHTML="Submit";const a=document.createElement("button");a.className="new-task-buttons",a.id="new-task-cancel",a.innerHTML="Cancel",o.appendChild(d),o.appendChild(a),d.addEventListener("click",(e=>{e.preventDefault(),function(e,t){if(e.preventDefault(),"new-task-submit"==e.target.id.slice(0,15)){const n=document.getElementById(e.target.id).dataset.projectUUID;t.addTodoTask(document.getElementById("task-title-input").value,"",n,document.getElementById("task-description-input").value,document.getElementById("task-duedate-input").value,document.getElementById("task-priority-input").value,!1),j(n,t),document.getElementById("add-task-dialog").close()}}(e,t)}),{once:!0}),a.addEventListener("click",(e=>{e.preventDefault(),document.getElementById("add-task-dialog").close()}),{once:!0}),document.getElementById("add-task-dialog").showModal()}(e,t)}));const i=document.createElement("button");i.className="footer-button-delete",i.id=`del-proj-but-${e.slice(24)}`,i.dataset.projectUUID=e,i.innerHTML="Delete Project",i.addEventListener("click",(e=>{e.preventDefault(),U(e,t)})),r.appendChild(c),r.appendChild(i)}function B(e){const t=e.readTodoProjects(),n=document.querySelector("#project-list");for(;n.lastElementChild;)n.removeChild(n.lastElementChild);n.innerHTML="",t.forEach((t=>{const o=document.createElement("button");o.type="button",o.className="project-button",o.id=`project-button-${t.getTodoProject().projectUUID.slice(24)}`,o.dataset.projectUUID=t.getTodoProject().projectUUID,t.getTodoProject().projectTitle.length>30?o.innerHTML=t.getTodoProject().projectTitle.slice(0,27)+"...":o.innerHTML=t.getTodoProject().projectTitle,o.addEventListener("click",(t=>{!function(e,t){const n=document.getElementById(e.target.id).dataset.projectUUID;j(n,t),w(n,t)}(t,e)}));const d=document.createElement("div");d.className="project-cell",d.appendChild(o),n.appendChild(d)}))}function C(e){document.getElementById("new-project-submit").replaceWith(document.getElementById("new-project-submit").cloneNode(!0)),document.getElementById("new-project-cancel").replaceWith(document.getElementById("new-project-cancel").cloneNode(!0)),document.getElementById("new-project-submit").addEventListener("click",(t=>{t.preventDefault(),function(e,t){"new-project-submit"==e.target.id&&(t.addTodoProject(document.getElementById("project-name-input").value,""),B(t),document.getElementById("add-project-dialog").close())}(t,e)})),document.getElementById("new-project-cancel").addEventListener("click",(e=>{e.preventDefault(),document.getElementById("add-project-dialog").close()})),document.getElementById("project-name-input").value="",document.getElementById("add-proj-but").addEventListener("click",(()=>{document.getElementById("add-project-dialog").showModal()}))}!function(){const e=function(){const e=[],t=[];function n(){const n=[],o=[];for(const t of e)n.push(t.getTodoTask());for(const e of t)o.push(e.getTodoProject());localStorage.setItem("todoTasks",JSON.stringify(n)),localStorage.setItem("todoProjects",JSON.stringify(o))}function o(t,o,d,a,r,c,i,l){e.push(function(e,t,n,o,d,a,r){let c=e,i="";i=""==t?b():t;const l=n;let s=o,u=d,p=a,m=r;return{getTodoTask:function(){return{taskTitle:c,taskUUID:i,taskProjectUUID:l,taskDescription:s,taskDueDate:u,taskPriority:p,taskCompleted:m}},modifyTodoTask:function(e,t,n,o){c=e,s=t,u=n,p=o},setTaskCompleted:function(){m=!0},unsetTaskCompleted:function(){m=!1}}}(t,o,d,a,r,c,i)),l||n()}function d(e,o,d){t.push(function(e,t){let n=e,o="";return o=""==t?b():t,{getTodoProject:function(){return{projectTitle:n,projectUUID:o}},modifyTodoProject:function(e){n=e}}}(e,o)),d||n()}function a(t){return e.find((e=>e.getTodoTask().taskUUID==t))}function r(t){return e.filter((e=>e.getTodoTask().taskProjectUUID==t.getTodoProject().projectUUID))}function c(e){return t.find((t=>t.getTodoProject().projectUUID==e))}return function(){const e=JSON.parse(localStorage.getItem("todoTasks")),t=JSON.parse(localStorage.getItem("todoProjects"));if(e)for(const t of e)o(t.taskTitle,t.taskUUID,t.taskProjectUUID,t.taskDescription,t.taskDueDate,t.taskPriority,t.taskCompleted,!0);if(t)for(const e of t)d(e.projectTitle,e.projectUUID,!0)}(),{addTodoTask:o,addTodoProject:d,readTodoTaskByIndex:function(t){return e[t]},readTodoTaskByUUID:a,readTodoTasks:function(){return e},readTodoProjectByIndex:function(e){return t[e]},readTodoProjectByUUID:c,readTodoProjects:function(){return t},readTodoTasksForProject:r,modifyTodoTask:function(e,t,o,d,r){a(r).modifyTodoTask(e,t,o,d),n()},modifyTodoProject:function(e,t){c(t).modifyTodoProject(e),n()},deleteTodoTaskByIndex:function(t){e.splice(t,1),n()},deleteTodoTaskByUUID:function(t){e.splice(e.findIndex((e=>e.getTodoTask().taskUUID==t)),1),n()},deleteTodoProjectByIndex:function(e){t.splice(e,1),n()},deleteTodoProjectByUUID:function(o){const d=r(c(o));for(const t of d)e.splice(e.findIndex((e=>e.getTodoTask().taskUUID==t.getTodoTask().taskUUID)),1);t.splice(t.findIndex((e=>e.getTodoProject().projectUUID==o)),1),n()},setTodoTaskCompleted:function(e){a(e).setTaskCompleted(),n()},unsetTodoTaskCompleted:function(e){a(e).unsetTaskCompleted(),n()}}}();B(e),C(e)}()})();