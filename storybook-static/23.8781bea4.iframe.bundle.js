/*! For license information please see 23.8781bea4.iframe.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[23,9,38,41,64,65,66],{"./node_modules/core-js/internals/array-reduce.js":function(module,exports,__webpack_require__){var aCallable=__webpack_require__("./node_modules/core-js/internals/a-callable.js"),toObject=__webpack_require__("./node_modules/core-js/internals/to-object.js"),IndexedObject=__webpack_require__("./node_modules/core-js/internals/indexed-object.js"),lengthOfArrayLike=__webpack_require__("./node_modules/core-js/internals/length-of-array-like.js"),$TypeError=TypeError,createMethod=function(IS_RIGHT){return function(that,callbackfn,argumentsLength,memo){aCallable(callbackfn);var O=toObject(that),self=IndexedObject(O),length=lengthOfArrayLike(O),index=IS_RIGHT?length-1:0,i=IS_RIGHT?-1:1;if(argumentsLength<2)for(;;){if(index in self){memo=self[index],index+=i;break}if(index+=i,IS_RIGHT?index<0:length<=index)throw $TypeError("Reduce of empty array with no initial value")}for(;IS_RIGHT?index>=0:length>index;index+=i)index in self&&(memo=callbackfn(memo,self[index],index,O));return memo}};module.exports={left:createMethod(!1),right:createMethod(!0)}},"./node_modules/core-js/modules/es.array.reverse.js":function(module,exports,__webpack_require__){"use strict";var $=__webpack_require__("./node_modules/core-js/internals/export.js"),uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js"),isArray=__webpack_require__("./node_modules/core-js/internals/is-array.js"),nativeReverse=uncurryThis([].reverse),test=[1,2];$({target:"Array",proto:!0,forced:String(test)===String(test.reverse())},{reverse:function reverse(){return isArray(this)&&(this.length=this.length),nativeReverse(this)}})},"./node_modules/core-js/modules/web.set-interval.js":function(module,exports,__webpack_require__){var $=__webpack_require__("./node_modules/core-js/internals/export.js"),global=__webpack_require__("./node_modules/core-js/internals/global.js"),setInterval=__webpack_require__("./node_modules/core-js/internals/schedulers-fix.js")(global.setInterval,!0);$({global:!0,bind:!0,forced:global.setInterval!==setInterval},{setInterval:setInterval})},"./node_modules/core-js/modules/web.set-timeout.js":function(module,exports,__webpack_require__){var $=__webpack_require__("./node_modules/core-js/internals/export.js"),global=__webpack_require__("./node_modules/core-js/internals/global.js"),setTimeout=__webpack_require__("./node_modules/core-js/internals/schedulers-fix.js")(global.setTimeout,!0);$({global:!0,bind:!0,forced:global.setTimeout!==setTimeout},{setTimeout:setTimeout})},"./node_modules/core-js/modules/web.timers.js":function(module,exports,__webpack_require__){__webpack_require__("./node_modules/core-js/modules/web.set-interval.js"),__webpack_require__("./node_modules/core-js/modules/web.set-timeout.js")},"./src/web-components-toolbox/src/es/components/atoms/input/Input.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",(function(){return Input}));__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.async-iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.math.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.json.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.object.create.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.promise.js"),__webpack_require__("./node_modules/core-js/modules/es.array.reverse.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.reflect.construct.js"),__webpack_require__("./node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/web.timers.js"),__webpack_require__("./node_modules/core-js/modules/es.array.reduce.js"),__webpack_require__("./node_modules/core-js/modules/es.string.split.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/es.string.replace.js"),__webpack_require__("./node_modules/core-js/modules/es.string.search.js"),__webpack_require__("./node_modules/core-js/modules/es.array.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.string.includes.js");var _prototypes_Shadow_js__WEBPACK_IMPORTED_MODULE_36__=__webpack_require__("./src/web-components-toolbox/src/es/components/prototypes/Shadow.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return exports};var exports={},Op=Object.prototype,hasOwn=Op.hasOwnProperty,defineProperty=Object.defineProperty||function(obj,key,desc){obj[key]=desc.value},$Symbol="function"==typeof Symbol?Symbol:{},iteratorSymbol=$Symbol.iterator||"@@iterator",asyncIteratorSymbol=$Symbol.asyncIterator||"@@asyncIterator",toStringTagSymbol=$Symbol.toStringTag||"@@toStringTag";function define(obj,key,value){return Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}),obj[key]}try{define({},"")}catch(err){define=function define(obj,key,value){return obj[key]=value}}function wrap(innerFn,outerFn,self,tryLocsList){var protoGenerator=outerFn&&outerFn.prototype instanceof Generator?outerFn:Generator,generator=Object.create(protoGenerator.prototype),context=new Context(tryLocsList||[]);return defineProperty(generator,"_invoke",{value:makeInvokeMethod(innerFn,self,context)}),generator}function tryCatch(fn,obj,arg){try{return{type:"normal",arg:fn.call(obj,arg)}}catch(err){return{type:"throw",arg:err}}}exports.wrap=wrap;var ContinueSentinel={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var IteratorPrototype={};define(IteratorPrototype,iteratorSymbol,(function(){return this}));var getProto=Object.getPrototypeOf,NativeIteratorPrototype=getProto&&getProto(getProto(values([])));NativeIteratorPrototype&&NativeIteratorPrototype!==Op&&hasOwn.call(NativeIteratorPrototype,iteratorSymbol)&&(IteratorPrototype=NativeIteratorPrototype);var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(IteratorPrototype);function defineIteratorMethods(prototype){["next","throw","return"].forEach((function(method){define(prototype,method,(function(arg){return this._invoke(method,arg)}))}))}function AsyncIterator(generator,PromiseImpl){function invoke(method,arg,resolve,reject){var record=tryCatch(generator[method],generator,arg);if("throw"!==record.type){var result=record.arg,value=result.value;return value&&"object"==_typeof(value)&&hasOwn.call(value,"__await")?PromiseImpl.resolve(value.__await).then((function(value){invoke("next",value,resolve,reject)}),(function(err){invoke("throw",err,resolve,reject)})):PromiseImpl.resolve(value).then((function(unwrapped){result.value=unwrapped,resolve(result)}),(function(error){return invoke("throw",error,resolve,reject)}))}reject(record.arg)}var previousPromise;defineProperty(this,"_invoke",{value:function value(method,arg){function callInvokeWithMethodAndArg(){return new PromiseImpl((function(resolve,reject){invoke(method,arg,resolve,reject)}))}return previousPromise=previousPromise?previousPromise.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(innerFn,self,context){var state="suspendedStart";return function(method,arg){if("executing"===state)throw new Error("Generator is already running");if("completed"===state){if("throw"===method)throw arg;return doneResult()}for(context.method=method,context.arg=arg;;){var delegate=context.delegate;if(delegate){var delegateResult=maybeInvokeDelegate(delegate,context);if(delegateResult){if(delegateResult===ContinueSentinel)continue;return delegateResult}}if("next"===context.method)context.sent=context._sent=context.arg;else if("throw"===context.method){if("suspendedStart"===state)throw state="completed",context.arg;context.dispatchException(context.arg)}else"return"===context.method&&context.abrupt("return",context.arg);state="executing";var record=tryCatch(innerFn,self,context);if("normal"===record.type){if(state=context.done?"completed":"suspendedYield",record.arg===ContinueSentinel)continue;return{value:record.arg,done:context.done}}"throw"===record.type&&(state="completed",context.method="throw",context.arg=record.arg)}}}function maybeInvokeDelegate(delegate,context){var methodName=context.method,method=delegate.iterator[methodName];if(void 0===method)return context.delegate=null,"throw"===methodName&&delegate.iterator.return&&(context.method="return",context.arg=void 0,maybeInvokeDelegate(delegate,context),"throw"===context.method)||"return"!==methodName&&(context.method="throw",context.arg=new TypeError("The iterator does not provide a '"+methodName+"' method")),ContinueSentinel;var record=tryCatch(method,delegate.iterator,context.arg);if("throw"===record.type)return context.method="throw",context.arg=record.arg,context.delegate=null,ContinueSentinel;var info=record.arg;return info?info.done?(context[delegate.resultName]=info.value,context.next=delegate.nextLoc,"return"!==context.method&&(context.method="next",context.arg=void 0),context.delegate=null,ContinueSentinel):info:(context.method="throw",context.arg=new TypeError("iterator result is not an object"),context.delegate=null,ContinueSentinel)}function pushTryEntry(locs){var entry={tryLoc:locs[0]};1 in locs&&(entry.catchLoc=locs[1]),2 in locs&&(entry.finallyLoc=locs[2],entry.afterLoc=locs[3]),this.tryEntries.push(entry)}function resetTryEntry(entry){var record=entry.completion||{};record.type="normal",delete record.arg,entry.completion=record}function Context(tryLocsList){this.tryEntries=[{tryLoc:"root"}],tryLocsList.forEach(pushTryEntry,this),this.reset(!0)}function values(iterable){if(iterable){var iteratorMethod=iterable[iteratorSymbol];if(iteratorMethod)return iteratorMethod.call(iterable);if("function"==typeof iterable.next)return iterable;if(!isNaN(iterable.length)){var i=-1,next=function next(){for(;++i<iterable.length;)if(hasOwn.call(iterable,i))return next.value=iterable[i],next.done=!1,next;return next.value=void 0,next.done=!0,next};return next.next=next}}return{next:doneResult}}function doneResult(){return{value:void 0,done:!0}}return GeneratorFunction.prototype=GeneratorFunctionPrototype,defineProperty(Gp,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),defineProperty(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,toStringTagSymbol,"GeneratorFunction"),exports.isGeneratorFunction=function(genFun){var ctor="function"==typeof genFun&&genFun.constructor;return!!ctor&&(ctor===GeneratorFunction||"GeneratorFunction"===(ctor.displayName||ctor.name))},exports.mark=function(genFun){return Object.setPrototypeOf?Object.setPrototypeOf(genFun,GeneratorFunctionPrototype):(genFun.__proto__=GeneratorFunctionPrototype,define(genFun,toStringTagSymbol,"GeneratorFunction")),genFun.prototype=Object.create(Gp),genFun},exports.awrap=function(arg){return{__await:arg}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,asyncIteratorSymbol,(function(){return this})),exports.AsyncIterator=AsyncIterator,exports.async=function(innerFn,outerFn,self,tryLocsList,PromiseImpl){void 0===PromiseImpl&&(PromiseImpl=Promise);var iter=new AsyncIterator(wrap(innerFn,outerFn,self,tryLocsList),PromiseImpl);return exports.isGeneratorFunction(outerFn)?iter:iter.next().then((function(result){return result.done?result.value:iter.next()}))},defineIteratorMethods(Gp),define(Gp,toStringTagSymbol,"Generator"),define(Gp,iteratorSymbol,(function(){return this})),define(Gp,"toString",(function(){return"[object Generator]"})),exports.keys=function(val){var object=Object(val),keys=[];for(var key in object)keys.push(key);return keys.reverse(),function next(){for(;keys.length;){var key=keys.pop();if(key in object)return next.value=key,next.done=!1,next}return next.done=!0,next}},exports.values=values,Context.prototype={constructor:Context,reset:function reset(skipTempReset){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(resetTryEntry),!skipTempReset)for(var name in this)"t"===name.charAt(0)&&hasOwn.call(this,name)&&!isNaN(+name.slice(1))&&(this[name]=void 0)},stop:function stop(){this.done=!0;var rootRecord=this.tryEntries[0].completion;if("throw"===rootRecord.type)throw rootRecord.arg;return this.rval},dispatchException:function dispatchException(exception){if(this.done)throw exception;var context=this;function handle(loc,caught){return record.type="throw",record.arg=exception,context.next=loc,caught&&(context.method="next",context.arg=void 0),!!caught}for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i],record=entry.completion;if("root"===entry.tryLoc)return handle("end");if(entry.tryLoc<=this.prev){var hasCatch=hasOwn.call(entry,"catchLoc"),hasFinally=hasOwn.call(entry,"finallyLoc");if(hasCatch&&hasFinally){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0);if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}else if(hasCatch){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0)}else{if(!hasFinally)throw new Error("try statement without catch or finally");if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}}}},abrupt:function abrupt(type,arg){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc<=this.prev&&hasOwn.call(entry,"finallyLoc")&&this.prev<entry.finallyLoc){var finallyEntry=entry;break}}finallyEntry&&("break"===type||"continue"===type)&&finallyEntry.tryLoc<=arg&&arg<=finallyEntry.finallyLoc&&(finallyEntry=null);var record=finallyEntry?finallyEntry.completion:{};return record.type=type,record.arg=arg,finallyEntry?(this.method="next",this.next=finallyEntry.finallyLoc,ContinueSentinel):this.complete(record)},complete:function complete(record,afterLoc){if("throw"===record.type)throw record.arg;return"break"===record.type||"continue"===record.type?this.next=record.arg:"return"===record.type?(this.rval=this.arg=record.arg,this.method="return",this.next="end"):"normal"===record.type&&afterLoc&&(this.next=afterLoc),ContinueSentinel},finish:function finish(finallyLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.finallyLoc===finallyLoc)return this.complete(entry.completion,entry.afterLoc),resetTryEntry(entry),ContinueSentinel}},catch:function _catch(tryLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc===tryLoc){var record=entry.completion;if("throw"===record.type){var thrown=record.arg;resetTryEntry(entry)}return thrown}}throw new Error("illegal catch attempt")},delegateYield:function delegateYield(iterable,resultName,nextLoc){return this.delegate={iterator:values(iterable),resultName:resultName,nextLoc:nextLoc},"next"===this.method&&(this.arg=void 0),ContinueSentinel}},exports}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"),"symbol"===_typeof(key)?key:String(key)),descriptor)}var arg,key}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self)}(this,result)}}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}var Input=function(_Shadow){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(Input,_Shadow);var _super=_createSuper(Input);function Input(){var _this,options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Input);for(var _len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)args[_key-1]=arguments[_key];return(_this=_super.call.apply(_super,[this,Object.assign(options,{mode:"open"})].concat(args))).allowedTypes=["text","number","email","password","tel","url","search"],_this.setAttribute("role",_this.inputType),_this.setAttribute("aria-label",_this.inputType),_this.children.length||(_this.labelText=_this.textContent),_this.lastValue="",_this.clickListener=function(event){var retry=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(_this.lastValue!==_this.inputField.value)if(_this.lastValue=_this.inputField.value,_this.getAttribute("search")){if(!_this.inputField.value)return;location.href="".concat(_this.getAttribute("search")).concat(encodeURIComponent(_this.inputField.value))}else _this.dispatchEvent(new CustomEvent(_this.getAttribute("submit-search")||"submit-search",{bubbles:!0,cancelable:!0,composed:!0,detail:{key:_this.inputId,value:_this.inputField.value}}));else retry&&event.composedPath()[0]===_this.inputField&&setTimeout((function(){return _this.clickListener(event,!1)}),50)},_this.changeListener=function(event){return _this.clickListener(event)},_this.keydownTimeoutId=null,_this.keydownListener=function(event){_this.root.querySelector(":focus")===_this.inputField&&(_this.hasAttribute("any-key-listener")||13===event.keyCode)&&(clearTimeout(_this.keydownTimeoutId),_this.keydownTimeoutId=setTimeout((function(){return _this.clickListener(event)}),13===event.keyCode?0:1e3))},_this.answerEventListener=function(){var _ref=_asyncToGenerator(_regeneratorRuntime().mark((function _callee2(event){var searchTerm;return _regeneratorRuntime().wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:if(searchTerm=event.detail.searchTerm,!_this.getAttribute("active-detail-property-name")){_context2.next=5;break}return _context2.next=4,_this.getAttribute("active-detail-property-name").split(":").reduce(function(){var _ref2=_asyncToGenerator(_regeneratorRuntime().mark((function _callee(accumulator,propertyName){return _regeneratorRuntime().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(propertyName=propertyName.replace(/-([a-z]{1})/g,(function(match,p1){return p1.toUpperCase()})),!(accumulator instanceof Promise)){_context.next=5;break}return _context.next=4,accumulator;case 4:accumulator=_context.sent;case 5:return _context.abrupt("return",accumulator[propertyName]);case 6:case"end":return _context.stop()}}),_callee)})));return function(_x2,_x3){return _ref2.apply(this,arguments)}}(),event.detail);case 4:searchTerm=_context2.sent;case 5:searchTerm&&(_this.inputField.value=searchTerm,_this.lastValue=_this.inputField.value);case 6:case"end":return _context2.stop()}}),_callee2)})));return function(_x){return _ref.apply(this,arguments)}}(),_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Input,[{key:"connectedCallback",value:function connectedCallback(){this.shouldComponentRenderHTML()&&this.renderHTML(),this.shouldComponentRenderCSS()&&this.renderCSS(),this.disabled=this.hasAttribute("disabled"),this.readonly=this.hasAttribute("readonly"),this.error=this.hasAttribute("error"),this.placeholder&&this.inputField&&this.inputField.setAttribute("placeholder",this.placeholder),this.autocomplete&&this.inputField&&this.inputField.setAttribute("autocomplete",this.autocomplete),!this.search||!this.searchButton||this.readonly||this.disabled||this.error||(this.hasAttribute("delete-listener")?this.addEventListener("click",this.clickListener):this.searchButton.addEventListener("click",this.clickListener),this.hasAttribute("change-listener")&&this.inputField.addEventListener("change",this.changeListener),document.addEventListener("keydown",this.keydownListener),this.getAttribute("search")&&location.href.includes(this.getAttribute("search"))&&(this.inputField.value=decodeURIComponent(location.href.split(this.getAttribute("search"))[1])),this.getAttribute("answer-event-name")&&document.body.addEventListener(this.getAttribute("answer-event-name"),this.answerEventListener))}},{key:"disconnectedCallback",value:function disconnectedCallback(){!this.search||!this.searchButton||this.readonly||this.disabled||this.error||(this.hasAttribute("delete-listener")?this.removeEventListener("click",this.clickListener):this.searchButton.removeEventListener("click",this.clickListener),this.hasAttribute("change-listener")&&this.inputField.removeEventListener("change",this.changeListener),document.removeEventListener("keydown",this.keydownListener),this.getAttribute("answer-event-name")&&document.body.removeEventListener(this.getAttribute("answer-event-name"),this.answerEventListener))}},{key:"attributeChangedCallback",value:function attributeChangedCallback(name){this[name]=this.hasAttribute(name)}},{key:"shouldComponentRenderCSS",value:function shouldComponentRenderCSS(){return!this.root.querySelector("style[_css]")}},{key:"shouldComponentRenderHTML",value:function shouldComponentRenderHTML(){return!this.inputField}},{key:"renderCSS",value:function renderCSS(){this.css="\n      *,\n      *::before,\n      *::after {\n        box-sizing: border-box;\n      }\n\n      :host {\n        display: block;\n      }\n\n      .mui-form-group {\n        font-family: var(--font-family);\n        margin-bottom: var(--margin-bottom, var(--content-spacing));\n        max-width: var(--max-width, none);\n      }\n\n      label {\n        font-size: var(--font-size);\n        font-weight: 700;\n        letter-spacing: 0.03em;\n        line-height: 1;\n        color: var(--color);\n        display: block;\n        margin-bottom: 0.625em;\n      }\n\n      input {\n        caret-color: var(--caret-color, var(--input-color, var(--color-secondary, var(--color))));\n        display: block;\n        padding: 0.625em 1em;\n        width: 100%;\n        font-family: inherit;\n        font-size: var(--input-font-size, var(--font-size));\n        line-height: 1.4;\n        color: var(--input-color, var(--color));\n        appearance: none;\n        background: var(--input-bg-color, var(--m-gray-200));\n        border: var(--border, 1px solid transparent);\n        transition: background ease-out .3s, border-color ease-out .3s;\n      }\n\n      input::placeholder {\n        color: var(--placeholder-color, var(--m-gray-500));\n        opacity: 1;\n      }\n\n      input:focus {\n        outline: none;\n        box-shadow: none;\n      }\n\n      input:focus:not(:read-only):not(:invalid) {\n        background: #fff;\n        border: var(--border-focus, var(--border, 1px solid transparent));\n        border-color: var(--border-color-focus, var(--border-color, var(--m-gray-500)));\n      }\n\n      input:visited {\n        text-decoration: none;\n      }\n\n      input:disabled,\n      input:read-only {\n        cursor: not-allowed;\n      }\n\n      :host([search]) .mui-form-group {\n        position: relative;\n      }\n\n      :host([search]) input {\n        border-color: var(--search-input-border-color, var(--m-gray-300));\n        padding: var(--search-input-padding, 0.75em var(--content-spacing));\n        padding-right: max(2.5em, 35px);\n        border-radius: var(--border-radius, 0.5em);\n        width: var(--search-input-width-big, var(--search-input-width, 100%));\n        min-width: 9.7em;\n      }\n\n      :host([search]) input::-webkit-search-cancel-button {\n        margin-right: 0.5em;\n      }\n\n      :host([search]) button {\n        position: absolute;\n        bottom: 0.5em;\n        right: 0.47em;\n        padding: 0;\n        border: 0;\n        background: transparent;\n        outline: none;\n        appearance: none;\n        box-shadow: none;\n        font-family: inherit;\n        font-size: var(--input-font-size, var(--font-size));\n        line-height: var(--input-line-height, 0.5em);\n        color: var(--icon-color, var(--color-secondary, var(--color)));\n        font-style: normal;\n        cursor: pointer;\n        transition: color ease-out .3s;\n      }\n\n      :host([search]) button svg {\n        height: var(--svg-size, 2em);\n        width: var(--svg-size, 2em);\n      }\n\n      :host([disabled]) button,\n      :host([readonly]) button {\n        cursor: not-allowed;\n      }\n\n      :host([error]) label,\n      :host([error]) input::placeholder,\n      :host([search]) button.error,\n      label.error {\n        color: var(--color-error, var(--m-red-700));\n      }\n\n      :host([error]) input,\n      :host([error]) input:focus,\n      input:invalid {\n        border-color: var(--color-error, var(--m-red-700));\n        color: var(--color-error, var(--m-red-700));\n        background: var(--input-color-bg-error, var(--m-yellow-300));\n      }\n\n      @media (hover: hover) {\n        input:hover:not(:disabled):not(:read-only):not(:invalid) {\n          border-color: var(--border-color-hover, var(--border-color, var(--m-gray-500)));\n          caret-color: var(--caret-color-hover, var(--input-color-hover, var(--color-hover, var(--color))));\n        }\n\n        :host([search]) input:hover {\n          border-color: var(--search-input-border-color-hover, var(--search-input-border-color, var(--m-gray-300)));\n        }\n\n        :host([search]:hover) button {\n          color: var(--icon-color-hover, var(--color-hover, var(--color)));\n        }\n\n        :host([error]) input:hover:not(:disabled):not(:read-only) {\n          border-color: var(--color-error-hover, var(--color-error, var(--m-red-700)));\n        }\n      }\n\n      @media only screen and (max-width: _max-width_) {\n        :host([search]) input {\n          padding: var(--search-input-padding-mobile, var(--search-input-padding, 0.75em var(--content-spacing-mobile)));\n          border-radius: var(--border-radius-mobile, var(--border-radius, 0.571em));\n        }\n        :host([search]) button {\n          right: var(--content-spacing-mobile);\n        }\n        .mui-form-group {\n          max-width: var(--max-width-mobile, var(--max-width, none));\n        }\n        :host([search]) input::-webkit-search-cancel-button {\n          margin-right: 2.5em;\n        }\n        label, input, :host([search]) button {\n          font-size: var(--font-size-mobile, var(--font-size));\n        }\n      }\n    "}},{key:"renderHTML",value:function renderHTML(){this.html='\n      <div class="mui-form-group">\n        '.concat(this.renderLabelHTML(),'\n        <input id="').concat(this.inputId,'" name="').concat(this.inputId,'" type="').concat(this.inputType,'" />\n        ').concat(this.renderSearchHTML(),"\n      </div>\n    "),this.inputField.setAttribute("enterkeyhint",this.hasAttribute("enterkeyhint")?this.getAttribute("enterkeyhint"):"search")}},{key:"renderLabelHTML",value:function renderLabelHTML(){return this.labelText?'<label for="'.concat(this.inputId,'">').concat(this.labelText,"</label>"):""}},{key:"renderSearchHTML",value:function renderSearchHTML(){return this.search?'\n    <button type="button" title="Search">\n      <svg width="100%" height="100%" viewBox="0 0 24 24" stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">\n      <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" class="icon-stroke-width" stroke-linecap="round" stroke-linejoin="round"></path>\n      <path d="M21 21L16.65 16.65" class="icon-stroke-width" stroke-linecap="round" stroke-linejoin="round"></path>\n      </svg>\n    </button>':""}},{key:"inputId",get:function get(){return this.getAttribute("inputId")}},{key:"inputType",get:function get(){return this.hasAttribute("type")&&this.allowedTypes.includes(this.getAttribute("type"))?this.getAttribute("type"):"text"}},{key:"labelField",get:function get(){return this.root.querySelector("label")}},{key:"inputField",get:function get(){return this.root.querySelector("input")}},{key:"searchButton",get:function get(){return this.root.querySelector("button")}},{key:"placeholder",get:function get(){return this.getAttribute("placeholder")}},{key:"autocomplete",get:function get(){return this.getAttribute("autocomplete")}},{key:"search",get:function get(){return this.hasAttribute("search")}},{key:"disabled",get:function get(){return this.hasAttribute("disabled")},set:function set(isDisabled){this.inputField&&(isDisabled?this.inputField.setAttribute("disabled",""):this.inputField.removeAttribute("disabled"))}},{key:"readonly",get:function get(){return this.hasAttribute("readonly")},set:function set(isReadOnly){this.inputField&&(isReadOnly?this.inputField.setAttribute("readonly",""):this.inputField.removeAttribute("readonly"))}},{key:"error",get:function get(){return this.hasAttribute("error")},set:function set(isInvalid){this.labelField&&(isInvalid?this.labelField.classList.add("error"):this.labelField.classList.remove("error")),this.textareaField&&(isInvalid?this.textareaField.setAttribute("aria-invalid","true"):this.textareaField.removeAttribute("aria-invalid")),this.searchButton&&(isInvalid?this.searchButton.classList.add("error"):this.searchButton.classList.remove("error"))}}],[{key:"observedAttributes",get:function get(){return["readonly","disabled","error"]}}]),Input}(Object(_prototypes_Shadow_js__WEBPACK_IMPORTED_MODULE_36__.a)())}}]);
//# sourceMappingURL=23.8781bea4.iframe.bundle.js.map