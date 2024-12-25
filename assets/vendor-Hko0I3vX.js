var x={exports:{}};(function(m){(function(y){var f=0,g=function E(u,p){var v=this,C=this,h=!1;if(Array.isArray(u))return!!u.length&&u.map(function(t){return new E(t,p)});var i={init:function(){this.options=Object.assign({duration:600,ariaEnabled:!0,collapse:!0,showMultiple:!1,onlyChildNodes:!0,openOnInit:[],elementClass:"ac",triggerClass:"ac-trigger",panelClass:"ac-panel",activeClass:"is-active",beforeOpen:function(){},onOpen:function(){},beforeClose:function(){},onClose:function(){}},p);var t=typeof u=="string";this.container=t?document.querySelector(u):u,this.createDefinitions(),C.attachEvents()},createDefinitions:function(){var t=this,e=this.options,n=e.elementClass,s=e.openOnInit,a=e.onlyChildNodes?this.container.childNodes:this.container.querySelectorAll(c(n));this.elements=Array.from(a).filter(function(r){return r.classList&&r.classList.contains(n)}),this.firstElement=this.elements[0],this.lastElement=this.elements[this.elements.length-1],this.elements.filter(function(r){return!r.classList.contains("js-enabled")}).forEach(function(r){r.classList.add("js-enabled"),t.generateIDs(r),t.setARIA(r),t.setTransition(r);var o=t.elements.indexOf(r);f++,s.includes(o)?t.showElement(r,!1):t.closeElement(r,!1)})},setTransition:function(t){var e=arguments.length>1&&arguments[1]!==void 0&&arguments[1],n=this.options,s=n.duration,a=n.panelClass,r=t.querySelector(c(a)),o=A("transitionDuration");r.style[o]=e?null:"".concat(s,"ms")},generateIDs:function(t){var e=this.options,n=e.triggerClass,s=e.panelClass,a=t.querySelector(c(n)),r=t.querySelector(c(s));t.setAttribute("id",t.id||"ac-".concat(f)),a.setAttribute("id",a.id||"ac-trigger-".concat(f)),r.setAttribute("id",r.id||"ac-panel-".concat(f))},removeIDs:function(t){var e=this.options,n=e.triggerClass,s=e.panelClass,a=t.querySelector(c(n)),r=t.querySelector(c(s));t.id.startsWith("ac-")&&t.removeAttribute("id"),a.id.startsWith("ac-")&&a.removeAttribute("id"),r.id.startsWith("ac-")&&r.removeAttribute("id")},setARIA:function(t){var e=this.options,n=e.ariaEnabled,s=e.triggerClass,a=e.panelClass;if(n){var r=t.querySelector(c(s)),o=t.querySelector(c(a));r.setAttribute("role","button"),r.setAttribute("aria-controls",o.id),r.setAttribute("aria-disabled",!1),r.setAttribute("aria-expanded",!1),o.setAttribute("role","region"),o.setAttribute("aria-labelledby",r.id)}},updateARIA:function(t,e){var n=e.ariaExpanded,s=e.ariaDisabled,a=this.options,r=a.ariaEnabled,o=a.triggerClass;if(r){var l=t.querySelector(c(o));l.setAttribute("aria-expanded",n),l.setAttribute("aria-disabled",s)}},removeARIA:function(t){var e=this.options,n=e.ariaEnabled,s=e.triggerClass,a=e.panelClass;if(n){var r=t.querySelector(c(s)),o=t.querySelector(c(a));r.removeAttribute("role"),r.removeAttribute("aria-controls"),r.removeAttribute("aria-disabled"),r.removeAttribute("aria-expanded"),o.removeAttribute("role"),o.removeAttribute("aria-labelledby")}},focus:function(t,e){t.preventDefault();var n=this.options.triggerClass;e.querySelector(c(n)).focus()},focusFirstElement:function(t){this.focus(t,this.firstElement),this.currFocusedIdx=0},focusLastElement:function(t){this.focus(t,this.lastElement),this.currFocusedIdx=this.elements.length-1},focusNextElement:function(t){var e=this.currFocusedIdx+1;if(e>this.elements.length-1)return this.focusFirstElement(t);this.focus(t,this.elements[e]),this.currFocusedIdx=e},focusPrevElement:function(t){var e=this.currFocusedIdx-1;if(e<0)return this.focusLastElement(t);this.focus(t,this.elements[e]),this.currFocusedIdx=e},showElement:function(t){var e=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],n=this.options,s=n.panelClass,a=n.activeClass,r=n.collapse,o=n.beforeOpen;e&&o(t);var l=t.querySelector(c(s)),d=l.scrollHeight;t.classList.add(a),requestAnimationFrame(function(){requestAnimationFrame(function(){l.style.height=e?"".concat(d,"px"):"auto"})}),this.updateARIA(t,{ariaExpanded:!0,ariaDisabled:!r})},closeElement:function(t){var e=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],n=this.options,s=n.panelClass,a=n.activeClass,r=n.beforeClose,o=t.querySelector(c(s)),l=o.scrollHeight;t.classList.remove(a),e?(r(t),requestAnimationFrame(function(){o.style.height="".concat(l,"px"),requestAnimationFrame(function(){o.style.height=0})})):o.style.height=0,this.updateARIA(t,{ariaExpanded:!1,ariaDisabled:!1})},toggleElement:function(t){var e=this.options,n=e.activeClass,s=e.collapse,a=t.classList.contains(n);if(!a||s)return a?this.closeElement(t):this.showElement(t)},closeElements:function(){var t=this,e=this.options,n=e.activeClass;e.showMultiple||this.elements.forEach(function(s,a){s.classList.contains(n)&&a!==t.currFocusedIdx&&t.closeElement(s)})},handleClick:function(t){var e=this,n=t.currentTarget;this.elements.forEach(function(s,a){s.contains(n)&&t.target.nodeName!=="A"&&(e.currFocusedIdx=a,e.closeElements(),e.focus(t,s),e.toggleElement(s))})},handleKeydown:function(t){switch(t.key){case"ArrowUp":return this.focusPrevElement(t);case"ArrowDown":return this.focusNextElement(t);case"Home":return this.focusFirstElement(t);case"End":return this.focusLastElement(t);default:return null}},handleFocus:function(t){var e=t.currentTarget,n=this.elements.find(function(s){return s.contains(e)});this.currFocusedIdx=this.elements.indexOf(n)},handleTransitionEnd:function(t){if(t.stopPropagation(),t.propertyName==="height"){var e=this.options,n=e.onOpen,s=e.onClose,a=t.currentTarget,r=parseInt(a.style.height),o=this.elements.find(function(l){return l.contains(a)});r>0?(a.style.height="auto",n(o)):s(o)}}};this.attachEvents=function(){if(!h){var t=i.options,e=t.triggerClass,n=t.panelClass;i.handleClick=i.handleClick.bind(i),i.handleKeydown=i.handleKeydown.bind(i),i.handleFocus=i.handleFocus.bind(i),i.handleTransitionEnd=i.handleTransitionEnd.bind(i),i.elements.forEach(function(s){var a=s.querySelector(c(e)),r=s.querySelector(c(n));a.addEventListener("click",i.handleClick),a.addEventListener("keydown",i.handleKeydown),a.addEventListener("focus",i.handleFocus),r.addEventListener("webkitTransitionEnd",i.handleTransitionEnd),r.addEventListener("transitionend",i.handleTransitionEnd)}),h=!0}},this.detachEvents=function(){if(h){var t=i.options,e=t.triggerClass,n=t.panelClass;i.elements.forEach(function(s){var a=s.querySelector(c(e)),r=s.querySelector(c(n));a.removeEventListener("click",i.handleClick),a.removeEventListener("keydown",i.handleKeydown),a.removeEventListener("focus",i.handleFocus),r.removeEventListener("webkitTransitionEnd",i.handleTransitionEnd),r.removeEventListener("transitionend",i.handleTransitionEnd)}),h=!1}},this.toggle=function(t){var e=i.elements[t];e&&i.toggleElement(e)},this.open=function(t){var e=i.elements[t];e&&i.showElement(e)},this.openAll=function(){var t=i.options,e=t.activeClass,n=t.onOpen;i.elements.forEach(function(s){s.classList.contains(e)||(i.showElement(s,!1),n(s))})},this.close=function(t){var e=i.elements[t];e&&i.closeElement(e)},this.closeAll=function(){var t=i.options,e=t.activeClass,n=t.onClose;i.elements.forEach(function(s){s.classList.contains(e)&&(i.closeElement(s,!1),n(s))})},this.destroy=function(){v.detachEvents(),v.openAll(),i.elements.forEach(function(t){i.removeIDs(t),i.removeARIA(t),i.setTransition(t,!0)}),h=!0},this.update=function(){i.createDefinitions(),v.detachEvents(),v.attachEvents()};var A=function(t){return typeof document.documentElement.style[t]=="string"?t:(t=b(t),t="webkit".concat(t))},b=function(t){return t.charAt(0).toUpperCase()+t.slice(1)},c=function(t){return".".concat(CSS.escape(t))};i.init()};m.exports!==void 0?m.exports=g:y.Accordion=g})(window)})(x);var w={exports:{}};(function(m){(function(y){var f=0,g=function E(u,p){var v=this,C=this,h=!1;if(Array.isArray(u))return u.length?u.map(function(t){return new E(t,p)}):!1;var i={init:function(){var e={duration:600,ariaEnabled:!0,collapse:!0,showMultiple:!1,onlyChildNodes:!0,openOnInit:[],elementClass:"ac",triggerClass:"ac-trigger",panelClass:"ac-panel",activeClass:"is-active",beforeOpen:function(){},onOpen:function(){},beforeClose:function(){},onClose:function(){}};this.options=Object.assign(e,p);var n=typeof u=="string";this.container=n?document.querySelector(u):u,this.createDefinitions(),C.attachEvents()},createDefinitions:function(){var e=this,n=this.options,s=n.elementClass,a=n.openOnInit,r=n.onlyChildNodes,o=r?this.container.childNodes:this.container.querySelectorAll(c(s));this.elements=Array.from(o).filter(function(l){return l.classList&&l.classList.contains(s)}),this.firstElement=this.elements[0],this.lastElement=this.elements[this.elements.length-1],this.elements.filter(function(l){return!l.classList.contains("js-enabled")}).forEach(function(l){l.classList.add("js-enabled"),e.generateIDs(l),e.setARIA(l),e.setTransition(l);var d=e.elements.indexOf(l);f++,a.includes(d)?e.showElement(l,!1):e.closeElement(l,!1)})},setTransition:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=this.options,a=s.duration,r=s.panelClass,o=e.querySelector(c(r)),l=A("transitionDuration");o.style[l]=n?null:"".concat(a,"ms")},generateIDs:function(e){var n=this.options,s=n.triggerClass,a=n.panelClass,r=e.querySelector(c(s)),o=e.querySelector(c(a));e.setAttribute("id",e.id||"ac-".concat(f)),r.setAttribute("id",r.id||"ac-trigger-".concat(f)),o.setAttribute("id",o.id||"ac-panel-".concat(f))},removeIDs:function(e){var n=this.options,s=n.triggerClass,a=n.panelClass,r=e.querySelector(c(s)),o=e.querySelector(c(a));e.id.startsWith("ac-")&&e.removeAttribute("id"),r.id.startsWith("ac-")&&r.removeAttribute("id"),o.id.startsWith("ac-")&&o.removeAttribute("id")},setARIA:function(e){var n=this.options,s=n.ariaEnabled,a=n.triggerClass,r=n.panelClass;if(s){var o=e.querySelector(c(a)),l=e.querySelector(c(r));o.setAttribute("role","button"),o.setAttribute("aria-controls",l.id),o.setAttribute("aria-disabled",!1),o.setAttribute("aria-expanded",!1),l.setAttribute("role","region"),l.setAttribute("aria-labelledby",o.id)}},updateARIA:function(e,n){var s=n.ariaExpanded,a=n.ariaDisabled,r=this.options,o=r.ariaEnabled,l=r.triggerClass;if(o){var d=e.querySelector(c(l));d.setAttribute("aria-expanded",s),d.setAttribute("aria-disabled",a)}},removeARIA:function(e){var n=this.options,s=n.ariaEnabled,a=n.triggerClass,r=n.panelClass;if(s){var o=e.querySelector(c(a)),l=e.querySelector(c(r));o.removeAttribute("role"),o.removeAttribute("aria-controls"),o.removeAttribute("aria-disabled"),o.removeAttribute("aria-expanded"),l.removeAttribute("role"),l.removeAttribute("aria-labelledby")}},focus:function(e,n){e.preventDefault();var s=this.options.triggerClass,a=n.querySelector(c(s));a.focus()},focusFirstElement:function(e){this.focus(e,this.firstElement),this.currFocusedIdx=0},focusLastElement:function(e){this.focus(e,this.lastElement),this.currFocusedIdx=this.elements.length-1},focusNextElement:function(e){var n=this.currFocusedIdx+1;if(n>this.elements.length-1)return this.focusFirstElement(e);this.focus(e,this.elements[n]),this.currFocusedIdx=n},focusPrevElement:function(e){var n=this.currFocusedIdx-1;if(n<0)return this.focusLastElement(e);this.focus(e,this.elements[n]),this.currFocusedIdx=n},showElement:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,s=this.options,a=s.panelClass,r=s.activeClass,o=s.collapse,l=s.beforeOpen;n&&l(e);var d=e.querySelector(c(a)),I=d.scrollHeight;e.classList.add(r),requestAnimationFrame(function(){requestAnimationFrame(function(){d.style.height=n?"".concat(I,"px"):"auto"})}),this.updateARIA(e,{ariaExpanded:!0,ariaDisabled:!o})},closeElement:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,s=this.options,a=s.panelClass,r=s.activeClass,o=s.beforeClose,l=e.querySelector(c(a)),d=l.scrollHeight;e.classList.remove(r),n?(o(e),requestAnimationFrame(function(){l.style.height="".concat(d,"px"),requestAnimationFrame(function(){l.style.height=0})})):l.style.height=0,this.updateARIA(e,{ariaExpanded:!1,ariaDisabled:!1})},toggleElement:function(e){var n=this.options,s=n.activeClass,a=n.collapse,r=e.classList.contains(s);if(!(r&&!a))return r?this.closeElement(e):this.showElement(e)},closeElements:function(){var e=this,n=this.options,s=n.activeClass,a=n.showMultiple;a||this.elements.forEach(function(r,o){var l=r.classList.contains(s);l&&o!==e.currFocusedIdx&&e.closeElement(r)})},handleClick:function(e){var n=this,s=e.currentTarget;this.elements.forEach(function(a,r){a.contains(s)&&e.target.nodeName!=="A"&&(n.currFocusedIdx=r,n.closeElements(),n.focus(e,a),n.toggleElement(a))})},handleKeydown:function(e){switch(e.key){case"ArrowUp":return this.focusPrevElement(e);case"ArrowDown":return this.focusNextElement(e);case"Home":return this.focusFirstElement(e);case"End":return this.focusLastElement(e);default:return null}},handleFocus:function(e){var n=e.currentTarget,s=this.elements.find(function(a){return a.contains(n)});this.currFocusedIdx=this.elements.indexOf(s)},handleTransitionEnd:function(e){if(e.stopPropagation(),e.propertyName==="height"){var n=this.options,s=n.onOpen,a=n.onClose,r=e.currentTarget,o=parseInt(r.style.height),l=this.elements.find(function(d){return d.contains(r)});o>0?(r.style.height="auto",s(l)):a(l)}}};this.attachEvents=function(){if(!h){var t=i.options,e=t.triggerClass,n=t.panelClass;i.handleClick=i.handleClick.bind(i),i.handleKeydown=i.handleKeydown.bind(i),i.handleFocus=i.handleFocus.bind(i),i.handleTransitionEnd=i.handleTransitionEnd.bind(i),i.elements.forEach(function(s){var a=s.querySelector(c(e)),r=s.querySelector(c(n));a.addEventListener("click",i.handleClick),a.addEventListener("keydown",i.handleKeydown),a.addEventListener("focus",i.handleFocus),r.addEventListener("webkitTransitionEnd",i.handleTransitionEnd),r.addEventListener("transitionend",i.handleTransitionEnd)}),h=!0}},this.detachEvents=function(){if(h){var t=i.options,e=t.triggerClass,n=t.panelClass;i.elements.forEach(function(s){var a=s.querySelector(c(e)),r=s.querySelector(c(n));a.removeEventListener("click",i.handleClick),a.removeEventListener("keydown",i.handleKeydown),a.removeEventListener("focus",i.handleFocus),r.removeEventListener("webkitTransitionEnd",i.handleTransitionEnd),r.removeEventListener("transitionend",i.handleTransitionEnd)}),h=!1}},this.toggle=function(t){var e=i.elements[t];e&&i.toggleElement(e)},this.open=function(t){var e=i.elements[t];e&&i.showElement(e)},this.openAll=function(){var t=i.options,e=t.activeClass,n=t.onOpen;i.elements.forEach(function(s){var a=s.classList.contains(e);a||(i.showElement(s,!1),n(s))})},this.close=function(t){var e=i.elements[t];e&&i.closeElement(e)},this.closeAll=function(){var t=i.options,e=t.activeClass,n=t.onClose;i.elements.forEach(function(s){var a=s.classList.contains(e);a&&(i.closeElement(s,!1),n(s))})},this.destroy=function(){v.detachEvents(),v.openAll(),i.elements.forEach(function(t){i.removeIDs(t),i.removeARIA(t),i.setTransition(t,!0)}),h=!0},this.update=function(){i.createDefinitions(),v.detachEvents(),v.attachEvents()};var A=function(e){return typeof document.documentElement.style[e]=="string"||(e=b(e),e="webkit".concat(e)),e},b=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},c=function(e){return".".concat(CSS.escape(e))};i.init()};m.exports=g})()})(w);
//# sourceMappingURL=vendor-Hko0I3vX.js.map
