!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}n(1),n(5);var r=n(7),i=o(r);ReactDOM.render(React.createElement(i["default"],{level:"2"}),document.getElementById("content1"))},function(e,t,n){var o=n(2);"string"==typeof o&&(o=[[e.id,o,""]]);n(4)(o,{});o.locals&&(e.exports=o.locals)},function(e,t,n){t=e.exports=n(3)(),t.push([e.id,"a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,main,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:'';content:none}table{border-collapse:collapse;border-spacing:0}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t,n){function o(e,t){for(var n=0;n<e.length;n++){var o=e[n],r=p[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(c(o.parts[i],t))}else{for(var a=[],i=0;i<o.parts.length;i++)a.push(c(o.parts[i],t));p[o.id]={id:o.id,refs:1,parts:a}}}}function r(e){for(var t=[],n={},o=0;o<e.length;o++){var r=e[o],i=r[0],a=r[1],s=r[2],l=r[3],c={css:a,media:s,sourceMap:l};n[i]?n[i].parts.push(c):t.push(n[i]={id:i,parts:[c]})}return t}function i(e,t){var n=b(),o=y[y.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),y.push(t);else{if("bottom"!==e.insertAt)throw Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=y.indexOf(e);t>=0&&y.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function l(e){var t=document.createElement("link");return t.rel="stylesheet",i(e,t),t}function c(e,t){var n,o,r;if(t.singleton){var i=g++;n=m||(m=s(t)),o=u.bind(null,n,i,!1),r=u.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=l(t),o=d.bind(null,n),r=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),o=f.bind(null,n),r=function(){a(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}function u(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=x(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t){var n=t.css,o=t.media;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function d(e,t){var n=t.css,o=t.sourceMap;o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var r=new Blob([n],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(r),i&&URL.revokeObjectURL(i)}var p={},h=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}},v=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),b=h(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,g=0,y=[];e.exports=function(e,t){t=t||{},void 0===t.singleton&&(t.singleton=v()),void 0===t.insertAt&&(t.insertAt="bottom");var n=r(e);return o(n,t),function(e){for(var i=[],a=0;a<n.length;a++){var s=n[a],l=p[s.id];l.refs--,i.push(l)}if(e){var c=r(e);o(c,t)}for(var a=0;a<i.length;a++){var l=i[a];if(0===l.refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete p[l.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var o=n(6);"string"==typeof o&&(o=[[e.id,o,""]]);n(4)(o,{singleton:!0});o.locals&&(e.exports=o.locals)},function(e,t,n){t=e.exports=n(3)(),t.push([e.id,"body{font-family:Tahoma,Arial,sans-serif}a{text-decoration:none;color:inherit}ul{list-style:none}.center{text-align:center}.well{background-color:#ffe4b5;border:1px solid #ccc;border-radius:5px;box-shadow:2px 2px 3px #d3d3d3;margin:20px;padding:10px}",""])},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();n(8);var l=n(10),c=o(l),u=React.addons.CSSTransitionGroup,f=function(e){function t(e){r(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.icons=["bullhorn","telegram","balance-scale","coffee","wifi","github","android","html5","bath","thumbs-o-up","bug","child","cutlery","codepen","thumbs-o-down","scissors","bicycle","smile-o","usb","anchor","bluetooth","youtube-square","envira","bank","car","binoculars","camera-retro","firefox","futbol-o","cogs"],n.presets=[{pairs:6,cols:4},{pairs:8,cols:4},{pairs:10,cols:5},{pairs:15,cols:6}],n.restart=n.restart.bind(n),n.changeLevel=n.changeLevel.bind(n),n.logic=new c["default"]({on_show:n.showTile.bind(n),on_hide:n.hideTile.bind(n),on_miss:n.hideTwix.bind(n),on_hit:n.removeTwix.bind(n),on_gameover:n.gameOver.bind(n)}),n.state=n.start(),n}return a(t,e),s(t,[{key:"start",value:function(){var e=+(this.state?this.state.level:this.props.level);if(e<1||e>this.presets.length)throw"you choosed invalid level!";var t=this.presets[e-1];return{tiles:this.logic.start(t.pairs,this.icons.length),button:{caption:"Restart","class":""},time:"",level:e,cols:t.cols}}},{key:"restart",value:function(){this.setState(this.start())}},{key:"changeLevel",value:function(e){this.setState({level:e.target.value})}},{key:"gameOver",value:function(e){this.setState({button:{caption:"Congratulations!","class":"tiles__button--gameover"},time:"Your time: "+e+" s"})}},{key:"showTile",value:function(e){e.show=!0,this.forceUpdate()}},{key:"hideTile",value:function(e){e.show=!1,this.forceUpdate()}},{key:"removeTwix",value:function(e,t){var n=this;setTimeout(function(){e.remove=!0,t.remove=!0,n.forceUpdate()},500)}},{key:"hideTwix",value:function(e,t){var n=this;setTimeout(function(){e.show=!1,t.show=!1,n.forceUpdate()},500)}},{key:"render",value:function(){var e=this,t=this.icons,n=this.logic.pick,o=this.logic,r={width:100*this.state.cols+12+"px"};return React.createElement("div",{className:"tiles",style:r},React.createElement("div",{className:"tiles__table"},this.state.tiles.map(function(r){return React.createElement("div",{className:"tiles__nest",key:r.id},e.cssTransition("tile",500,r.remove?"":React.createElement("div",{className:"tiles__item","data-icon":r.icon,onMouseDown:n.bind(o,r)},e.cssTransition("tile",500,r.show?React.createElement("i",{className:"fa fa-5x fa-"+t[r.icon]}):""))))})),React.createElement("div",{className:"tiles__controls center"},React.createElement("div",null,"Level:",React.createElement("select",{className:"tiles__select",value:this.state.level,onChange:this.changeLevel},React.createElement("option",{value:"1"},"Beginner"),React.createElement("option",{value:"2"},"Medium"),React.createElement("option",{value:"3"},"Expert"),React.createElement("option",{value:"4"},"Crazy"))),React.createElement("div",null,React.createElement("button",{className:"tiles__button "+this.state.button["class"],onClick:this.restart},this.state.button.caption," ",this.state.time))))}},{key:"cssTransition",value:function(e,t,n){return React.createElement(u,{transitionName:e,transitionEnterTimeout:t,transitionLeaveTimeout:t},n)}}]),t}(React.Component);t["default"]=f,f.propTypes={level:React.PropTypes.string},f.defaultProps={level:"2"}},function(e,t,n){var o=n(9);"string"==typeof o&&(o=[[e.id,o,""]]);n(4)(o,{singleton:!0});o.locals&&(e.exports=o.locals)},function(e,t,n){t=e.exports=n(3)(),t.push([e.id,".tiles{color:#477;margin:30px auto;font-size:13px}.tiles__table{border-radius:10px;border:1px solid #26a69a;padding:5px}.tiles__nest{display:inline-block;width:100px;height:100px;box-sizing:border-box;padding:2px;vertical-align:top}.tiles__item{border-radius:5px;box-shadow:inset 0 0 2px orange;text-align:center;padding-top:15px;box-sizing:border-box;height:100%}.tiles__item:hover{cursor:pointer;box-shadow:0 0 10px orange}.tiles__button{font-size:1.2em;padding:10px 50px;background-color:#26a69a;color:#fff;display:inline-block;border-radius:5px;outline:0;border:none}.tiles__button:hover{cursor:pointer;box-shadow:0 0 10px #26a69a}.tiles__button--gameover{background-color:orange}.tiles__select{border-radius:5px;border:1px solid #26a69a;height:25px;margin:20px 5px;outline:0}.tile-enter{opacity:.01;transition:opacity .5s}.tile-enter.tile-enter-active{opacity:1}.tile-leave{opacity:1;transition:opacity .5s}.tile-leave.tile-leave-active{opacity:.01}",""])},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=function(){function e(t){var n=this;o(this,e);var r=function(){};["on_show","on_hide","on_hit","on_miss","on_gameover"].forEach(function(e){n[e]=t[e]||r})}return r(e,[{key:"pick",value:function(e){var t=this.former;null===t?(this.former=e,this.on_show(e)):(t.id==e.id?this.on_hide(e):(this.on_show(e),t.icon==e.icon?(this.on_hit(t,e),--this.count||(this.gameover=!0,this.on_gameover(Math.floor((performance.now()-this.starttime)/1e3)))):this.on_miss(t,e)),this.former=null)}},{key:"start",value:function(e,t){function n(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),o=e[t];e[t]=e[n],e[n]=o}return e}this.count=e,this.former=null,this.gameover=!1;for(var o=[],r=[],i=0,a=t;i<a;i++)o[i]=Math.floor(i%t);n(o);for(var s=0,l=2*e;s<l;s++)r.push({id:s,icon:o[s%e]});return n(r),this.starttime=performance.now(),r}}]),e}();t["default"]=i}]);