"use strict";(self.webpackChunkweb_components_toolbox_storybook=self.webpackChunkweb_components_toolbox_storybook||[]).push([[7194],{"./src/web-components-toolbox/src/es/components/atoms/hotspot/Hotspot.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Hotspot});var _prototypes_Shadow_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/web-components-toolbox/src/es/components/prototypes/Shadow.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"==typeof key?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var importMeta={url:new URL("./src/web-components-toolbox/src/es/components/atoms/hotspot/Hotspot.js",document.baseURI).href};class Hotspot extends((0,_prototypes_Shadow_js__WEBPACK_IMPORTED_MODULE_0__.j)()){constructor(){for(var options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)args[_key-1]=arguments[_key];super(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({importMetaUrl:importMeta.url},options),...args),this.hasRendered=!1,this.buttonClickListener=e=>{this.classList.contains("active")?(this.classList.remove("active"),document.body.removeEventListener("click",this.clickListener)):(this.classList.add("active"),document.body.addEventListener("click",this.clickListener))},this.clickListener=e=>{e.composedPath()[0]!==this.buttonOpen&&(this.classList.remove("active"),document.body.removeEventListener("click",this.clickListener))}}connectedCallback(){this.shouldRenderCSS()&&this.renderCSS(),this.shouldRenderHTML()&&this.renderHTML(),this.buttonOpen.addEventListener("click",this.buttonClickListener),this.buttonClose.addEventListener("click",this.buttonClickListener)}disconnectedCallback(){this.buttonOpen.removeEventListener("click",this.buttonClickListener),this.buttonClose.removeEventListener("click",this.buttonClickListener)}shouldRenderCSS(){return!this.root.querySelector(":host > style[_css], ".concat(this.tagName," > style[_css]"))}shouldRenderHTML(){return!this.hasRendered}renderCSS(){return this.css="\n      :host{\n        ".concat(null!=this.getAttribute("top")?"\n          position: absolute;\n          top: ".concat(this.getAttribute("top"),"%;         \n          left: ").concat(this.getAttribute("left"),"%;\n        "):"position: relative;","\n      }\n\n      :host .btn-close{\n        background-color: transparent;\n        background-image: url(_import-meta-url_./icons/close-orange-large.svg);\n        background-repeat: no-repeat;\n        background-size: contain;\n        border-radius: 50%;\n        border: 0;\n        display: block;\n        height: var(--btn-close-size, 1rem);\n        padding: 0;\n        position: absolute;\n        right: var(--btn-close-right, var(--content-padding, 1.25rem));\n        top: var(--btn-close-top, var(--content-padding, 1.25rem));\n        width: var(--btn-close-size, 1rem);;\n      }\n\n      :host .btn-open {\n        background-color: transparent;\n        border: 0;\n        padding: 0;\n      }\n\n      :host .btn-open:after {\n        border-radius: 50%;\n        cursor: pointer;\n        position: absolute;\n      }\n\n      :host .btn-open:after{\n        background-position: 50% 50%;\n        background-repeat: no-repeat;\n        box-shadow: var(--btn-open-after-box-shadow, 0 0 0 0 transparent);\n        content: '';\n        transition: transform .2s ease-out,\n          box-shadow .2s ease-out,\n          background-color .2s ease-out;\n      }\n\n      :host .sr-only {\n        border: 0;\n        clip: rect(0,0,0,0);\n        height: 1px;\n        margin: -1px;\n        overflow: hidden;\n        padding: 0;\n        position: absolute;\n        width: 1px;\n      }\n\n      :host .content{\n        background-color: var(--content-background-color, #fff);\n        outline: 0;\n        z-index: 100;\n      }\n\n      @media screen and (min-width: _max-width_){\n        :host .content{\n          left: 50%;\n          padding: var(--content-padding, 1.25rem);\n          position: absolute;\n          top: 50%;\n          transform: scale(0) translate(-50%,-50%);\n          transition: transform 250ms cubic-bezier(.755,.05,.855,.06);\n          width: var(--content-width, 22rem);\n        }\n        :host(.active) .content{\n          transition: transform .4s 250ms cubic-bezier(.755,.05,.855,.06);\n          visibility: visible;\n        }\n        :host .content:after{\n          border: solid var(--after-border-width, 0.75rem) var(--content-background-color, #fff);\n          box-shadow: 3px 3px 15px -1px transparent;\n          content: ' ';\n          height: 0;\n          margin-left: calc(var(--after-border-width, 0.75rem) * -1);\n          pointer-events: none;\n          position: absolute;\n          transition: box-shadow .1s cubic-bezier(.755,.05,.855,.06),\n            transform .1s cubic-bezier(.755,.05,.855,.06);\n          width: 0;\n          z-index: -1;\n        }\n        :host(.active) .content > *{\n          opacity: 1;\n          transition: opacity 250ms .4s ease-out;\n        }\n        :host .content > *{\n          opacity: 0;\n          transition: opacity 75ms ease-in;\n        }\n      }\n\n      @media screen and (max-width: _max-width_){\n        :host .content{\n          animation: fadeOutBottom 1s ease;\n          backface-visibility: hidden;\n          border-radius: 10px 10px 0 0;\n          bottom: 0;\n          box-shadow: 0 0 0.625rem 0 rgb(83 83 83 / 20%);\n          left: 0;\n          overflow-x: hidden;\n          overflow-y: scroll;\n          padding: 0 1.25rem 1.25rem;\n          position: fixed;\n          right: 0;\n          top: auto;\n          transition: height .3s, animation .3s ease-in-out, visibility 1s ease;\n          visibility: hidden;\n          white-space: normal;\n        }\n        @keyframes fadeOutBottom{\n          0% {\n            transform: translateY(0);\n          }\n          100% {\n            transform: translateY(100%);\n          }\n        }\n        :host(.active) .content{\n          animation: fadeInBottom 1s ease;\n          visibility: visible;\n        }\n        @keyframes fadeInBottom{\n          0% {\n            transform: translateY(100%);\n          }\n          100% {\n            transform: translateY(0);\n          }\n        }\n        :host .content:before{\n          background-color: var(--button-background-color, var(--color-secondary, #ff6600));\n          border-radius: 4px;\n          content: '';\n          height: 4px;\n          left: 50%;\n          position: absolute;\n          top: 0.625rem;\n          transform: translateX(-50%);\n          width: 2.5rem;\n        }\n        :host .content-title{\n          font-size: 1.8rem;\n          margin-bottom: 0.75rem;\n          min-height: 2.5rem;\n          padding: 10px 0 0.75rem;\n          position: relative;\n        }\n        :host .content-title:after{\n          background-color: #f3f2f0;\n          bottom: 0;\n          content: '';\n          height: 2px;\n          left: -1rem;\n          position: absolute;\n          width: calc(100% + 36px);\n        }\n        :host .btn-open {\n          box-shadow: none;\n        }        \n      }\n    "),this.fetchTemplate()}fetchTemplate(){var styles=[{path:"".concat(this.importMetaUrl,"../../../../css/style.css"),namespaceFallback:!0}];switch(this.getAttribute("place")){case"left":styles.push({path:"".concat(this.importMetaUrl,"./place/left.css"),namespaceFallback:!0});break;case"right":styles.push({path:"".concat(this.importMetaUrl,"./place/right.css"),namespaceFallback:!0});break;case"top":styles.push({path:"".concat(this.importMetaUrl,"./place/top.css"),namespaceFallback:!0});break;default:styles.push({path:"".concat(this.importMetaUrl,"./place/bottom.css"),namespaceFallback:!0})}return"hotspot-helper-"===this.getAttribute("namespace")?this.fetchCSS([{path:"".concat(this.importMetaUrl,"./helper-/helper-.css"),namespace:!1},...styles],!1):this.fetchCSS([{path:"".concat(this.importMetaUrl,"./default-/default-.css"),namespace:!1},...styles],!1)}renderHTML(){this.hasRendered=!0,this.buttonOpen.classList.add("btn-open"),this.buttonClose.classList.add("btn-close"),Array.from(this.span).forEach((node=>{this.buttonOpen.appendChild(node),node.classList.contains("sr-close")&&this.buttonClose.appendChild(node.cloneNode())})),null!=this.content.querySelector("h3")&&(this.divTitle.classList.add("content-title"),this.divTitle.appendChild(this.content.querySelector("h3")),this.content.prepend(this.divTitle)),this.content.appendChild(this.buttonClose),this.html=this.buttonOpen}get content(){return this.root.querySelector(".content")}get divTitle(){return this._divTitle||(this._divTitle=document.createElement("div"))}get buttonOpen(){return this._buttonOpen||(this._buttonOpen=document.createElement("button"))}get buttonClose(){return this._buttonClose||(this._buttonClose=document.createElement("button"))}get span(){return this.root.querySelectorAll("span.sr-only")}}}}]);