"use strict";(self.webpackChunkweb_components_toolbox_storybook=self.webpackChunkweb_components_toolbox_storybook||[]).push([[3740],{"./src/web-components-toolbox/src/es/components/atoms/iframe/Iframe.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Iframe});var _prototypes_Intersection_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/web-components-toolbox/src/es/components/prototypes/Intersection.js");class Iframe extends((0,_prototypes_Intersection_js__WEBPACK_IMPORTED_MODULE_0__.l)()){constructor(){for(var options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)args[_key-1]=arguments[_key];super(Object.assign(options,{intersectionObserverInit:{}}),...args)}connectedCallback(){super.connectedCallback(),this.shouldRenderCSS()&&this.renderCSS(),this.intersecting||(this.intersecting=this.shouldRenderHTML()?this.renderHTML():()=>console.warn("No required template tag found within this component: ",this))}intersectionCallback(entries,observer){(this.isIntersecting=entries&&entries[0]&&entries[0].isIntersecting)&&(this.intersecting(),this.intersectionObserveStop())}shouldRenderCSS(){return!this.root.querySelector(":host > style[_css], ".concat(this.tagName," > style[_css]"))}shouldRenderHTML(){return this.template}renderCSS(){this.css="\n      :host {\n        line-height: 0;\n      }\n      :host, :host > iframe {\n        ".concat(this.iframe&&this.iframe.getAttribute("width")&&!this.iframe.getAttribute("width").includes("%")&&this.iframe.getAttribute("height")&&!this.iframe.getAttribute("height").includes("%")?"aspect-ratio: ".concat(this.iframe.getAttribute("width")," / ").concat(this.iframe.getAttribute("height"),";"):console.warn("This component requires an Iframe with fix/absolute width and height values: ",this)||"","\n        width: 100%;\n        height: auto;\n        ").concat(this.hasAttribute("background-color")?"background-color: ".concat(this.getAttribute("background-color"),";"):"","\n        max-height: var(--max-height, ").concat(this.hasAttribute("keep-aspect-ratio")?"max-content":"75vh",");\n      }\n    ")}renderHTML(){if(this.hasAttribute("preload")&&!document.head.querySelector('link[href="'.concat(this.iframe.getAttribute("src"),'"]'))){var link=document.createElement("link");link.setAttribute("rel","preload"),link.setAttribute("as","document"),link.setAttribute("href",this.iframe.getAttribute("src")),document.head.appendChild(link)}var templateContent=this.template.content;return this.template.remove(),()=>setTimeout((()=>{this.html=templateContent}),this.getAttribute("timeout")&&null!==this.getAttribute("timeout")?Number(this.getAttribute("timeout")):200)}get template(){return this.root.querySelector("template")}get iframe(){return this.template&&this.template.content.querySelector("iframe")||this.root.querySelector("iframe")}}},"./src/web-components-toolbox/src/es/components/prototypes/Intersection.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>Intersection});var _Shadow_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/web-components-toolbox/src/es/components/prototypes/Shadow.js"),Intersection=function Intersection(){var ChosenClass=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,_Shadow_js__WEBPACK_IMPORTED_MODULE_0__.j)();return class Intersection extends ChosenClass{constructor(){for(var options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{intersectionObserverInit:void 0},_len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)args[_key-1]=arguments[_key];super(options,...args),this.isObserving=!1;var intersectionObserverInit=this.getAttribute("intersectionObserverInit")?Intersection.parseAttribute(this.getAttribute("intersectionObserverInit")):options.intersectionObserverInit;try{if(intersectionObserverInit){intersectionObserverInit=Object.assign({root:void 0,rootMargin:"200px 0px 200px 0px",threshold:0},intersectionObserverInit);var intersectionObserver=new IntersectionObserver(this.intersectionCallback.bind(this),intersectionObserverInit);this.intersectionObserveStart=()=>{this.isObserving||(intersectionObserver.observe(this),this.isObserving=!0)},this.intersectionObserveStop=()=>{this.isObserving&&(intersectionObserver.disconnect(),this.isObserving=!1)}}else this.intersectionObserveStart=()=>{},this.intersectionObserveStop=()=>{},console.warn("IntersectionObserver got not started, due to missing options.intersectionObserverInit. At least supply an empty object to activate the observer with the default settings!")}catch(error){this.intersectionObserveStart=()=>{},this.intersectionObserveStop=()=>{},console.warn("IntersectionObserver got not started, due to missing support!")}}connectedCallback(){super.connectedCallback(),this.intersectionObserveStart()}disconnectedCallback(){super.disconnectedCallback(),this.intersectionObserveStop()}intersectionCallback(entries,observer){}}}}}]);