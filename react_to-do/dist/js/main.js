!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}n(1),n(5);var r=n(7),i=o(r),a=n(8),l=o(a),u=n(9),s=o(u),c=[{title:"Вынести мусор",done:!0},{title:"Купить хлеб"},{title:"Завоевать мир"}];l["default"].render(i["default"].createElement(s["default"],{todos:c}),document.getElementById("todo"))},function(e,t,n){var o=n(2);"string"==typeof o&&(o=[[e.id,o,""]]);n(4)(o,{});o.locals&&(e.exports=o.locals)},function(e,t,n){t=e.exports=n(3)(),t.push([e.id,"a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,main,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:'';content:none}table{border-collapse:collapse;border-spacing:0}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t,n){function o(e,t){for(var n=0;n<e.length;n++){var o=e[n],r=d[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(s(o.parts[i],t))}else{for(var a=[],i=0;i<o.parts.length;i++)a.push(s(o.parts[i],t));d[o.id]={id:o.id,refs:1,parts:a}}}}function r(e){for(var t=[],n={},o=0;o<e.length;o++){var r=e[o],i=r[0],a=r[1],l=r[2],u=r[3],s={css:a,media:l,sourceMap:u};n[i]?n[i].parts.push(s):t.push(n[i]={id:i,parts:[s]})}return t}function i(e,t){var n=m(),o=x[x.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),x.push(t);else{if("bottom"!==e.insertAt)throw Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=x.indexOf(e);t>=0&&x.splice(t,1)}function l(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function u(e){var t=document.createElement("link");return t.rel="stylesheet",i(e,t),t}function s(e,t){var n,o,r;if(t.singleton){var i=g++;n=v||(v=l(t)),o=c.bind(null,n,i,!1),r=c.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=u(t),o=f.bind(null,n),r=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=l(t),o=p.bind(null,n),r=function(){a(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}function c(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=y(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t){var n=t.css,o=t.media;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function f(e,t){var n=t.css,o=t.sourceMap;o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var r=new Blob([n],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(r),i&&URL.revokeObjectURL(i)}var d={},h=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}},b=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),m=h(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,g=0,x=[];e.exports=function(e,t){t=t||{},void 0===t.singleton&&(t.singleton=b()),void 0===t.insertAt&&(t.insertAt="bottom");var n=r(e);return o(n,t),function(e){for(var i=[],a=0;a<n.length;a++){var l=n[a],u=d[l.id];u.refs--,i.push(u)}if(e){var s=r(e);o(s,t)}for(var a=0;a<i.length;a++){var u=i[a];if(0===u.refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete d[u.id]}}}};var y=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var o=n(6);"string"==typeof o&&(o=[[e.id,o,""]]);n(4)(o,{singleton:!0});o.locals&&(e.exports=o.locals)},function(e,t,n){t=e.exports=n(3)(),t.push([e.id,"body{font:15px Tahoma,Arial,sans-serif}a{text-decoration:none;color:inherit}ul{list-style:none}.container{margin:0 auto;width:500px;position:relative}.center{text-align:center}.pull-left{float:left}.pull-right{float:right}.well{background-color:#ffe4b5;border:1px solid #ccc;border-radius:5px;box-shadow:2px 2px 3px #d3d3d3;margin:20px;padding:10px}[type=button],button{border:1px solid #aaa;box-shadow:inset 0 3px 5px rgba(0,0,0,.25),2px 2px 3px #d3d3d3;border-radius:6px;font-size:14px;padding:6px 20px;cursor:pointer;margin-left:4px;outline:0}.btn-default{color:#555;background-color:#eee}.btn-primary{color:#fff;background-color:#37b}",""])},function(e,t){e.exports=React},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();n(10),n(13);var u=n(7),s=o(u),c=n(15),p=o(c),f=n(20),d=o(f),h=n(21),b=o(h),m=function(e){function t(e){function n(){return e.todos.map(function(e,t){return void 0===e.id&&(e.id=t),e})}r(this,t);var o=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.appendItem=function(e){var t=o.state.id;o.setState({todos:o.state.todos.concat([{title:e,id:t}]),id:t+1})},o.changeItem=function(e,t,n){var r=function(o){return o.id===e&&("done"===t||"title"===t&&n)&&(o[t]=n),o};o.setState({todos:o.state.todos.map(r)})},o.removeItem=function(e){o.setState({todos:o.state.todos.filter(function(t){return t.id!==e})})},o.state={todos:n(),id:e.todos.length},o}return a(t,e),l(t,[{key:"render",value:function(){var e=this,t=0,n=this.state.todos.length,o=this.state.todos.map(function(n){return n.done&&t++,s["default"].createElement(p["default"],{key:n.id,id:n.id,title:n.title,done:n.done,onChange:e.changeItem,onRemove:e.removeItem})});return s["default"].createElement("div",{className:"todo"},s["default"].createElement("a",{className:"close",href:"/"}),s["default"].createElement("div",{className:"todo__header"},s["default"].createElement("span",null,"TO"),s["default"].createElement("span",null," DO"),s["default"].createElement("span",null," LIST")),s["default"].createElement(d["default"],{onSubmit:this.appendItem}),s["default"].createElement("ul",{className:"todo__list"},o),s["default"].createElement("div",{className:"todo__status"},n?s["default"].createElement("span",null,"Всего дел: ",s["default"].createElement("b",null,n),", завершенных: ",s["default"].createElement("b",null,t),". ",n===t?"Вы молодец!":""):s["default"].createElement("span",null,"Пора бы чем-то заняться!"),s["default"].createElement(b["default"],null)))}}]),t}(s["default"].Component);t["default"]=m,m.propTypes={todos:s["default"].PropTypes.Array},m.defaultProps={todos:[]}},function(e,t,n){var o=n(11);"string"==typeof o&&(o=[[e.id,o,""]]);n(4)(o,{singleton:!0});o.locals&&(e.exports=o.locals)},function(e,t,n){t=e.exports=n(3)(),t.push([e.id,".todo{background:#fff url("+n(12)+") 25px 25px;width:470px;margin:20px auto;min-height:496px;line-height:50px;box-sizing:border-box;padding:5px 25px;border:10px solid #7db4e3;box-shadow:5px 5px 10px #999;border-radius:10px;position:relative}.todo__header{text-align:center;font:700 50px Tahoma,sans-serif;margin-bottom:10px;text-shadow:5px 5px 10px #777}.todo__header span:nth-child(1){color:#ff4500}.todo__header span:nth-child(2){color:gold}.todo__header span:nth-child(3){color:#adff2f}.todo [type=text]{background:transparent;box-sizing:border-box;outline:0;color:#888;line-height:44px;padding:0 10px}.todo__input{font-size:22px;width:100%;border:3px solid #ccc;border-radius:5px}.todo__title{font:italic 18px/44px cursive;border:none;width:296px;cursor:pointer}.todo__title:focus{border:1px solid #dee;border-radius:5px}.todo__title--done{text-decoration:line-through}.todo__list{padding:0;color:#888;margin:0 0 44px;max-height:500px;overflow:auto}.todo__list>li{overflow:hidden;position:relative}.todo__status{position:absolute;bottom:0;width:100%;background-color:#dee;left:0;border-top:1px solid #7db4e3;padding:0 25px;box-sizing:border-box;color:#7db4e3}",""])},function(e,t,n){e.exports=n.p+"img/to-do/cellule.png"},function(e,t,n){var o=n(14);"string"==typeof o&&(o=[[e.id,o,""]]);n(4)(o,{singleton:!0});o.locals&&(e.exports=o.locals)},function(e,t,n){t=e.exports=n(3)(),t.push([e.id,".close{font:700 34px/20px sans-serif;opacity:.3;background:none;border:none;cursor:pointer;position:absolute;top:14px;right:14px}.close:after{content:'\\D7'}.close:hover{opacity:.6}",""])},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(7),s=o(u),c=n(16),p=o(c),f=function(e){function t(e){r(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.changeState=function(e){return n.props.onChange(n.props.id,"done",e)},n.changeTitle=function(){return n.props.onChange(n.props.id,"title",n.input.value)},n.removeItem=function(){return n.props.onRemove(n.props.id)},n}return a(t,e),l(t,[{key:"render",value:function(){var e=this;return s["default"].createElement("li",null,s["default"].createElement("span",{className:"close",title:"Удалить",onClick:this.removeItem}),s["default"].createElement(p["default"],{on:this.props.done,onChange:this.changeState}),s["default"].createElement("input",{type:"text",title:"Редактировать",className:"todo__title todo__title--"+(this.props.done?"done":"pending"),onBlur:this.changeTitle,ref:function(t){e.input=t,t&&(t.value=e.props.title)},placeholder:"Введите хоть что-нибудь"}))}}]),t}(s["default"].Component);t["default"]=f},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();n(17);var u=n(7),s=o(u),c=function(e){function t(e){r(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleChange=function(e){var t=e.target.checked;n.setState({on:t}),n.props.onChange(t,e)},n.handleOver=function(){return n.setState({hover:!0})},n.handleOut=function(){return n.setState({hover:!1})},n.state={on:e.on,hover:!1},n}return a(t,e),l(t,[{key:"render",value:function(){var e=0;this.state.hover&&(e+=29),this.state.on&&(e+=58);var t={backgroundPosition:"0 -"+e+"px"};return s["default"].createElement("label",{className:"r-checkbox"},s["default"].createElement("input",{type:"checkbox",onChange:this.handleChange,onFocus:this.handleOver,onBlur:this.handleOut,defaultChecked:this.state.on}),s["default"].createElement("span",{className:"r-checkbox__img",title:this.state.on?"Продолжить":"Завершить",onMouseOver:this.handleOver,onMouseOut:this.handleOut,style:t}))}}]),t}(s["default"].Component);t["default"]=c,c.propTypes={on:s["default"].PropTypes["boolean"],onChange:s["default"].PropTypes.func},c.defaultProps={on:!1,onChange:function(){}}},function(e,t,n){var o=n(18);"string"==typeof o&&(o=[[e.id,o,""]]);n(4)(o,{singleton:!0});o.locals&&(e.exports=o.locals)},function(e,t,n){t=e.exports=n(3)(),t.push([e.id,".r-checkbox{cursor:pointer;margin-left:14px}.r-checkbox__img{width:29px;height:29px;display:inline-block;background:url("+n(19)+");position:relative;top:6px;margin:0 13px 0 -24px}",""])},function(e,t,n){e.exports=n.p+"img/checkbox/checkbox.png"},function(e,t){"use strict";function n(e){var t=e.onSubmit,n=void 0;return React.createElement("form",{onSubmit:function(e){e.preventDefault(),n.value&&(t(n.value),n.value="")}},React.createElement("input",{type:"text",className:"todo__input",title:"Добавить новое дело",ref:function(e){return n=e},autoFocus:!0,required:!0}))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(7),s=o(u),c=function(e){function t(e){r(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.tick=function(){n.setState({date:new Date})},n.state={date:new Date},n}return a(t,e),l(t,[{key:"componentDidMount",value:function(){this.timerID=setInterval(this.tick,1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"render",value:function(){return s["default"].createElement("span",{className:"pull-right"},this.state.date.toLocaleTimeString())}}]),t}(s["default"].Component);t["default"]=c}]);