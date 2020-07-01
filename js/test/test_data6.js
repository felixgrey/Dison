export default (function a(){
!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r=e();for(var o in r)("object"==typeof exports?exports:t)[o]=r[o]}}(this,(function(){return function(t){var e={};function r(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=t,r.c=e,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=10)}([function(t,e,r){"use strict";function o(){return[{left:0,top:0,width:0,height:0,colspan:8,rowspan:3,innerHTML:"\n    可以在初始化中指定默认参数\n<code>\n{\n    //指定容器横向被分为多少格（默认值为足够初始化的最小值）\n    ncols: 16,\n    //指定默认空白区域（默认全0）\n    space: { left: 2, right: 2, top: 4, bottom: 0 }, \n    //指定默认拖拽捕获区域（默认全0，表示除了空白外的区域可拖拽）\n    capture: { top: 0, right: 0, bottom: 0, left: 0 }\n}\n</code>\n    "},{left:0,top:0,width:0,height:0,col:9,row:0,colspan:7,rowspan:3,innerHTML:'\n                <br><button style="color:white;background-color:black;">只允许从该按钮上方拖拽</button>\n<code>\n{\n    col: 9,\n    row: 0,\n    colspan: 7,\n    rowspan: 4,\n    capture: (e, t) => t.target.tagName === "BUTTON"\n}\n</code>\n    ',capture:function(t,e){return"BUTTON"===e.target.tagName}},{left:0,top:0,width:0,height:0,colspan:4,rowspan:7,innerHTML:'\n                <span style="\n                display:block;\n                width:0;height:0;\n                z-index: 1000;\n                border: 20px solid;\n                border-color: aqua blue red green;\n                "></span>\n                （类似上图的区域划分）<br>\n                只能在以下区域拖拽<br>\n                (1):容器中心点和顶边做三角形<br>\n                (2):容器右侧边和距离右侧边 10px 的平行线做四边形<br>\n                (3):容器中心点和距离底部 10px 的平行线做三角形<br>\n                (3):容器左侧边和距离左侧边 10px 的平行线做四边形<br>\n<code>\n{\n    colspan: 4,\n    rowspan: 6,\n    capture: {\n        top: 0,\n        right: -10,\n        bottom: 10,\n        left: -10\n    }\n}\n</code>\n    ',capture:{top:0,right:-10,bottom:10,left:-10}},{left:0,top:0,width:0,height:0,colspan:4,rowspan:4,style:{border:"solid black",borderWidth:"10px 20px"},innerHTML:"\n    只能从该容器边框部分拖拽\n<code>\n{\n    colspan: 4,\n    rowspan: 4,\n    capture: {\n        top: -10,\n        right: -20,\n        bottom: -10,\n        left: -20\n    }\n}\n</code>\n    ",capture:{top:-10,right:-20,bottom:-10,left:-20}},{left:0,top:0,width:0,height:0,colspan:4,rowspan:5,innerHTML:"\n                单独指定空白区域:<br>\n                (1)顶部 20px ,底部 30px 为空白<br>\n                (2)左右两侧溢出贴合 space-right space-left 值为 2 的容器\n<code>\n{\n    colspan: 4,\n    rowspan: 5,\n    space: {\n        top: 20,\n        right: -2,\n        bottom: 30,\n        left: -2\n    }\n}\n</code>\n    ",space:{top:20,right:-2,bottom:30,left:-2}},{left:0,top:0,width:0,height:0,col:8,row:0,colspan:4,rowspan:3,innerHTML:'\n                不指定 "col" "row" 或指定了非法值会自动根据现有摆放状态自动选择合适位置放置\n<code>\n{\n    col:8,\n    row:0,\n    colspan: 4,\n    rowspan: 3\n}\n</code>\n    '}]}function n(){return{ncols:Math.min(window.innerWidth/70|0,16),space:{left:2,right:2,top:4,bottom:0},capture:{top:0,right:0,bottom:0,left:0}}}r.r(e),r.d(e,"get_models",(function(){return o})),r.d(e,"get_option",(function(){return n}))},function(t,e,r){"use strict";var o,n=this&&this.__assign||function(){return(n=Object.assign||function(t){for(var e,r=1,o=arguments.length;r<o;r++)for(var n in e=arguments[r])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),function(t){t[t.USE_CHECK=1]="USE_CHECK",t[t.FILL_EACHMODEL=16]="FILL_EACHMODEL",t[t.USE_OFFSET=256]="USE_OFFSET",t[t.USE_EACHOFFSET=4096]="USE_EACHOFFSET"}(o||(o={}));var i=function(){function t(e,r){void 0===e&&(e=[]),void 0===r&&(r={}),this.options=r,this.model_map=new Array,this.model_list=new Array,this.options.ncols>0||(this.options.ncols=e.reduce((function(t,e){return Math.max(t,(e.col||0)+(e.colspan||1))}),1));var o=this._fill(e,t.FLAGS.USE_CHECK|t.FLAGS.FILL_EACHMODEL);this.append(o)}return Object.defineProperty(t.prototype,"ncols",{get:function(){return this.options.ncols},set:function(t){this.setNCols(t)},enumerable:!0,configurable:!0}),t.prototype.setNCols=function(e,r){if(e!==this.options.ncols){this.model_map.splice(0,this.model_map.length);var o=this.model_list.splice(0,this.model_list.length);if(r&&1!==r)for(var n=e-this.options.ncols,i=0,s=o;i<s.length;i++){(u=s[i]).col+=n}this.options.ncols=e;for(var a=0,c=o;a<c.length;a++){(u=c[a]).colspan>e&&(u.colspan=e),u.colspan+u.col>e&&(u.col=e-u.colspan)}for(var l=0,p=this._fill(o,t.FLAGS.USE_CHECK|t.FLAGS.FILL_EACHMODEL);l<p.length;l++){var u=p[l];this.alloc(u),this.fill(u)}}},t.prototype.fill=function(e){e instanceof Array||(e=[e]),this._fill(e,t.FLAGS.FILL_EACHMODEL)},t.prototype.clear=function(t){var e=this.model_list.indexOf(t),r=0;for(~e&&this.model_list.splice(e,1);~(e=this.model_map.indexOf(t));)r++,this.model_map[e]=void 0;return r},t.prototype.remove=function(t){t instanceof Array||(t=[t]),this._fill(t)},t.prototype.move=function(e,r,o){return void 0===o&&(o=0),e instanceof Array||(e=[e]),this.remove(e),this._fill(e,o|t.FLAGS.FILL_EACHMODEL|t.FLAGS.USE_OFFSET,r)},t.prototype.getModel=function(t,e){if(t>=0&&e>=0&&t<this.ncols)return this.model_map[t+e*this.ncols]},t.prototype.format=function(t,e,r){return void 0===e&&(e=t.col),void 0===r&&(r=t.row),t.col=Math.round(Math.max(Math.min(e,this.ncols-t.colspan),0)),t.row=Math.round(Math.max(r,0)),t},t.prototype.trim=function(){for(var t=Math.ceil(this.model_map.length/this.ncols),e=[],r=1;r<t;r++)for(var o=0;o<this.ncols;o++){var n=r*this.ncols+o,i=this.model_map[n];if(i&&i.row===r){var s=this._pathTest([i],[0,-r-1],i);s>0&&(e.push(i),this.move([i],[0,-s])),o+=i.colspan-1}}return e},t.prototype.append=function(e){e instanceof Array||(e=[e]);for(var r=0,o=e;r<o.length;r++){var n=o[r];n.colspan>this.ncols&&(n.colspan=this.ncols);for(var i=Math.ceil(this.model_map.length/this.ncols),s=0,a=0,c={col:0,row:i,colspan:n.colspan,rowspan:n.rowspan},l=0,p=this.ncols-n.colspan;l<=p;l++){c.col=l;var u=this._pathTest([c],[0,-i-1],c);s<u&&(s=u,a=l)}n.col=a,n.row=i-s,this._fill([n],t.FLAGS.FILL_EACHMODEL)}},t.prototype.alloc=function(e,r,o,i){void 0===r&&(r=this.format({col:e.col,row:e.row,colspan:e.colspan,rowspan:e.rowspan})),void 0===o&&(o=this.cover(r));var s=o.slice();if(0===o.length)return s;if(i||(i=this.calcWrap(o)),i.colspan+i.rowspan>1.6*(r.colspan+r.rowspan)||!this._compress(r,o,i,e)){o.sort((function(t,e){return t.row-e.row}));for(var a=n({},r),c=0;c<o.length;c++){var l=o[c];this._compress(a,[l],l,void 0,!1)?o.splice(c--,1):(a.col>l.col&&(a.colspan+=a.col-l.col,a.col=l.col),a.col+a.colspan<l.col+l.colspan&&(a.colspan=l.col+l.colspan-a.col))}if(0===o.length)return s;var p=[],u=[];i=this.calcWrap(o);for(var f=r.colspan-Math.max(i.col-r.col,0)-Math.max(r.col+r.colspan-i.colspan-i.col,0),_=[{col:Math.max(r.col,i.col),row:r.row,colspan:f,rowspan:0}],h={},d=[new Array(f).fill(r.rowspan)];_.length;){var v=[],y={},m=[];for(var g in h)h[g].sort((function(t,e){return t.row-e.row}));for(c=0;c<_.length;c++){for(var b=_[c],w=d[c],E=(T=b.col)+b.colspan;T<E;T++){if(C=h[T]){for(var O=0,M=0;M<C.length-1;M++){var S=C[M];if(!(S.row<b.row))break;O+=C[M+1].row-(S.row+S.rowspan)}w[T-b.col]-=O}}if((k=Math.max.apply(Number,w))>0)if(d[c]=k,-1===(M=p.indexOf(b)))M=p.length,p.push(b),u.push(k);else{if(u[M]>=k)continue;u[M]=k}else _.splice(c,1),d.splice(c,1),c--}for(M=0;M<_.length;M++){b=_[M];var k=d[M];var T=b.col;t:for(E=T+b.colspan;T<E;T++)for(var x=b.row+b.rowspan,L=x+k;x<L;x++){var P=this.model_map[T+x*this.ncols];if(P){var A=v.indexOf(P),U=(w=void 0,L-x+Math.max(b.row-P.row,0));if(-1===A){var C,D=p.indexOf(P);if(D>=0&&u[D]>=U)continue t;v.push(P),m.push(w=new Array(P.colspan).fill(0)),(C=y[T]||(y[T]=[])).push({row:P.row,rowspan:P.rowspan})}else w=m[A];w[T-P.col]=Math.max(w[T-P.col],U);break}}}_=v,h=y,d=m}p.splice(0,1),u.splice(0,1),this.move(p,u.map((function(t){return[0,t]})),t.FLAGS.USE_EACHOFFSET),s=s.concat(p)}return s},t.prototype.cover=function(t){for(var e=[],r=t.col,o=t.row,n=0;n<t.rowspan;n++)for(var i=0;i<t.colspan;i++){var s=this.model_map[i+r+(n+o)*this.ncols];if(void 0!==s){~e.indexOf(s)||e.push(s);var a=s.colspan+s.col-1;i+r<a&&(i=a-r)}}return e},t.prototype.calcWrap=function(t){for(var e={col:t[0].col,row:t[0].row,colspan:t[0].colspan,rowspan:t[0].rowspan},r=1;r<t.length;r++){var o=t[r];e.col>o.col&&(e.colspan+=e.col-o.col,e.col=o.col),e.row>o.row&&(e.rowspan+=e.row-o.row,e.row=o.row),e.colspan+e.col<o.col+o.colspan&&(e.colspan+=o.col+o.colspan-e.col-e.colspan),e.rowspan+e.row<o.row+o.rowspan&&(e.rowspan+=o.row+o.rowspan-e.row-e.rowspan)}return e},t.prototype.calcOffset=function(t,e){return{l:t.col-(e.col+e.colspan),r:t.col+t.colspan-e.col,t:t.row-(e.row+e.rowspan),b:t.row+t.rowspan-e.row}},t.prototype._fill=function(e,r,o){void 0===r&&(r=0);var n=t.FLAGS,i=r&n.USE_CHECK?[]:void 0,s=this.model_map,a=this.model_list,c=this.ncols;t:for(var l=0;l<e.length;l++){var p=e[l];if(r&n.USE_CHECK&&(isFinite(p.colspan)||(p.colspan=1),isFinite(p.rowspan)||(p.rowspan=1),isNaN(p.col+p.row)||p.col<0||p.col+p.colspan>c))i.push(p);else{var u=a.indexOf(p);if(r&n.FILL_EACHMODEL){if(-1!==u)continue;a.push(p)}else u>=0&&a.splice(u,1);r&n.USE_EACHOFFSET?(p.col+=o[l][0],p.row+=o[l][1]):r&n.USE_OFFSET&&(p.col+=o[0],p.row+=o[1]);for(var f=p.col,_=p.row,h=p.colspan,d=p.rowspan,v=0;v<d;v++)for(var y=0;y<h;y++){var m=y+f+(v+_)*c;if(r&n.USE_CHECK&&void 0!==s[m]){do{for(;y--;)s[y+f+(v+_)*c]=void 0;y=h}while(v--);r&n.FILL_EACHMODEL&&a.pop(),i.push(p);continue t}s[m]=r&n.FILL_EACHMODEL?p:o}}}return i},t.prototype._pathTest=function(t,e,r){void 0===r&&(r=this.calcWrap(t));for(var o=0|e[0],n=0|e[1],i=0,s=0,a=0,c=o&&o/Math.abs(o),l=n&&n/Math.abs(n);i!==o||s!==n;){if(i!==o?i+=c:s+=l,r.col+i<0||r.col+i+r.colspan>this.ncols||r.row+s<0)return a;for(var p=0,u=t;p<u.length;p++)for(var f=u[p],_=f.row,h=_+f.rowspan;_<h;_++)for(var d=f.col,v=d+f.colspan;d<v;d++){var y=d+i+(_+s)*this.ncols;if(this.model_map[y]&&-1===t.indexOf(this.model_map[y]))return a}a+=1}return!0},t.prototype._compress=function(t,e,r,o,n){void 0===e&&(e=this.cover(t)),void 0===r&&(r=this.calcWrap(e)),void 0===n&&(n=!0);var i=r.colspan/r.rowspan,s=t.rowspan/t.colspan,a=(i+s)/4;i=a+i/2,s=a+s/2;var c=this.calcOffset(t,r),l=o?this.calcOffset(o,r):c,p=[Math.abs(s*l.l),[c.l,0]],u=[Math.abs(s*l.r),[c.r,0],p];p.push(u),u.push(p);var f,_=[Math.abs(i*l.t),[0,c.t]];n&&(f=[Math.abs(i*l.b),[0,c.b]],_.push(f),f.push(_));for(var h=(n?[p,u,_,f]:[p,u,_]).sort((function(t,e){return t[0]-e[0]})),d=0;d<h.length;d++){var v=h.lastIndexOf(h[d][2]);if(v>d&&(h.splice(v,1),h.splice(d+1,0,h[d][2])),!0===this._pathTest(e,h[d][1],r))return this.move(e,h[d][1]),!0}return!1},t.FLAGS=o,t}();e.default=i},,function(t,e,r){"use strict";var o,n=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),i=this&&this.__assign||function(){return(i=Object.assign||function(t){for(var e,r=1,o=arguments.length;r<o;r++)for(var n in e=arguments[r])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var s=r(1);e.MutexModel=s.default;var a=r(4);e.InputListener=a;var c=function(t){function e(e,r,o){void 0===o&&(o={});var n=t.call(this,r,o)||this;return n.vessel=e,n.inputListener=null,n._client_width=0,n.resize=function(t,e){void 0===t&&(t=n.options.ncols);var r=n.clientWidth;t===n.ncols&&n._client_width===r||(n.setNCols(t,e),n._client_width=r,n._update(n.model_list))},n.dragStart=function(t,e){var r=n.vessel.getBoundingClientRect(),o=e.clientX-r.left,i=e.clientY-r.top;return n.target_box=n._get_box(o,i,t,e),!!(!n.target_box||n.options.onPick&&n.options.onPick(t,e,n.target_box))||(t.preventDefault(),n.target_box.dragging=!0,void n.remove(n.target_box))},n.dragMove=function(t,e,r){if(n.target_box.left+=e[0],n.target_box.top+=e[1],n._stay_timeout&&(window.clearTimeout(n._stay_timeout),n._stay_timeout=null),n.options.onMove&&n.options.onMove(t,r,n.target_box))return n.inputListener.break(),void(n.target_box=null);n._e=t,n._t=r,n._stay_timeout=window.setTimeout(n.put,300)},n.dragEnd=function(t,e){n._stay_timeout&&window.clearTimeout(n._stay_timeout),n._e=t,n._t=e,n.put(!0)},n.put=function(t,e,r,o){void 0===e&&(e=n.target_box),void 0===r&&(r=n._e),void 0===o&&(o=n._t),n._stay_timeout=void 0;var s=n.cellSize,a=e.space||n.space,c=(e.left-a.left)/s,l=(e.top-a.top)/s,p={col:c,row:l,colspan:e.colspan,rowspan:e.rowspan},u=n.format(i({},p)),f=n.cover(u),_=t?n.options.onDrop:n.options.onStay;if(_&&_(r,o,e,f))return t||n.inputListener.break(),void(n.target_box=null);if(f.length){var h=n.calcWrap(f);u.col===h.col&&u.row===h.row&&e.colspan===h.colspan&&e.rowspan===h.rowspan&&Math.abs(p.col-h.col)+Math.abs(p.row-h.row)<.1/Math.sqrt(s/60)&&Math.abs(e.col-h.col)/e.colspan+Math.abs(e.row-h.row)/e.rowspan>1?n.move(f,[e.col-h.col,e.row-h.row]):n.alloc(p,u,f,h)}n.format(e,c,l),!0===t&&(e.dragging=!1,n.fill(e),n._update([e]),n.target_box=null)},n.vessel=e,n.inputListener=new a(e,{dragStart:n.dragStart,dragMove:n.dragMove,dragEnd:n.dragEnd}),n.activate(),n}return n(e,t),e.prototype.disable=function(){this.inputListener.disable()},Object.defineProperty(e.prototype,"capture",{get:function(){return this.options.capture||e.capture},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"space",{get:function(){return this.options.space||e.space},enumerable:!0,configurable:!0}),e.prototype.activate=function(){this.resize(),this.inputListener.activate()},e.prototype.remove=function(e){t.prototype.remove.call(this,e)},e.prototype.add=function(t){t instanceof Array||(t=[t]);for(var e=0,r=t;e<r.length;e++){var o=r[e];o.col>=0&&o.col+o.colspan<=this.ncols&&o.row>=0?(this.alloc(o),this.fill(o)):this.append(o)}this._update(t)},Object.defineProperty(e.prototype,"clientWidth",{get:function(){return isFinite(this.options.client_width)?this.options.client_width:this.vessel.clientWidth},enumerable:!0,configurable:!0}),e.prototype.update=function(e,r){if(e){if(t.prototype.clear.call(this,e),r instanceof Object)for(var o in r)e[o]=r[o];this.alloc(e),this.fill(e),this._update(e)}else this._update(this.model_list)},e.prototype._update=function(t){t instanceof Array||(t=[t]);for(var e,r,o,n,i=this.cellSize,s=0,a=t;s<a.length;s++){var c=a[s],l=c.space||this.space,p=l.left,u=void 0===p?0:p,f=l.right,_=void 0===f?0:f,h=l.top,d=void 0===h?0:h,v=l.bottom,y=void 0===v?0:v;e=i*c.col+u,r=i*c.row+d,o=i*c.colspan-u-_,n=i*c.rowspan-d-y,e!==c.left&&(c.left=e),r!==c.top&&(c.top=r),o!==c.width&&(c.width=o),n!==c.height&&(c.height=n)}},Object.defineProperty(e.prototype,"cellSize",{get:function(){return this.clientWidth/this.ncols},enumerable:!0,configurable:!0}),e.prototype._get_box=function(t,e,r,o){var n=this.cellSize,i=this.getModel(t/n|0,e/n|0);function s(t,e,r){return r>=0?e<t-r:e>=t+r&&e<t}if(i){var a=i.capture||this.capture;if(a instanceof Function){var c=a(r,o,i);return!0===c?i:!1===c?void 0:c}var l=i.space||this.space,p=l.top,u=void 0===p?0:p,f=l.right,_=void 0===f?0:f,h=l.bottom,d=void 0===h?0:h,v=l.left,y=void 0===v?0:v,m=a.top,g=void 0===m?0:m,b=a.right,w=void 0===b?0:b,E=a.bottom,O=void 0===E?0:E,M=a.left,S=void 0===M?0:M,k=i.col*n+y,T=i.row*n+u,x=i.colspan*n-_-y,L=i.rowspan*n-u-d,P=t-k-x/2,A=e-T-L/2,U=Math.sqrt(Math.pow(P,2)+Math.pow(A,2)),C=Math.atan2(A,P),D=2*Math.atan(x/L),H=(Math.PI-D)/2,N=Math.PI/2;switch(!0){case C<-H&&C>-D-H:return s(L/2,U*Math.cos(N+C),g)&&i;case Math.abs(C)<=H:return s(x/2,U*Math.cos(C),w)&&i;case C>H&&C<H+D:return s(L/2,Math.abs(U*Math.cos(N+C)),O)&&i;case Math.abs(C)>=D+H:return s(x/2,Math.abs(U*Math.cos(C)),S)&&i}}},e.prototype.receive=function(t,e,r){this.target_box&&(window.clearTimeout(this._stay_timeout),this.put(!0),this.inputListener.break()),this.target_box=r,t&&e?(this.inputListener.addPoint(e),this._stay_timeout=window.setTimeout(this.put,300)):this.put(!0)},e.prototype.move=function(e,r,o){void 0===o&&(o=0);var n=t.prototype.move.call(this,e,r,o);return this._update(e),n},e.space={top:0,right:0,bottom:0,left:0},e.capture={top:0,right:0,bottom:0,left:0},e.InputListener=a,e.MutexModel=s.default,e}(s.default);e.MutexBox=c;try{window.MutexBox=c}catch(t){}e.default=c},function(t,e,r){window,t.exports=function(t){var e={};function r(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=t,r.c=e,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function s(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function p(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function f(t,e,r){return e&&u(t.prototype,e),r&&u(t,r),t}var _={rotate:/^rotate$/,pinch:/^pinch$/,dragMove2:/^dragMove2$/,dragStart:/^dragStart$/,dragMove:/^dragMove$/,dragEnd:/^dragEnd$/,click:/^click$/},h=function(){function t(e,r){var o=this;p(this,t),this._activated_listener={},this._registered_listener={rotate:null,pinch:null,dragMove:null,dragStart:null,dragEnd:null,dragMove2:null,click:null,keyDown:{_parts:[],_reference:0},keyUp:{_reference:0},keyPress:{_reference:0}},this.mouse_mask=1,this.target=null,this.pointX="pageX",this.pointY="pageY",this._listener_status={},this._points=[],this._identifiers=[];var n=!1;this.target=e,r&&(!0===r?n=!0:(n=["capture","passive","passive"].forEach((function(t){void 0!==r[t]&&((n||(n={}))[t]=r[t])})),["pointX","pointY","mouse_mask"].forEach((function(t){void 0!==r[t]&&(o[t]=r[t])})))),this._listener_options=n}return f(t,[{key:"setListener",value:function(t){for(var e in t)if(!this._listener_status[e]!=!t[e]){var r=d.EVENT_CONFIG[e],o=r[0],n=r[1],i=r[2]||this.target;t[e]?i.addEventListener(o,this[n],this._listener_options):i.removeEventListener(o,this[n],this._listener_options),this._listener_status[e]=!!t[e]}}},{key:"eventDispenser",value:function(t,e){if(this._identifiers[0]===d.MOUSE_EVENT_ID)Math.pow(2,t.button)&this.mouse_mask&&e(t,t,0);else if(t.changedTouches)for(var r=0;r<t.changedTouches.length;r++){var o=this._identifiers.indexOf(t.changedTouches[r].identifier);-1!==o&&e(t,t.changedTouches[r],o)}}},{key:"_is_mouse_event",get:function(){return this._identifiers[0]===d.MOUSE_EVENT_ID}}]),t}();h.EVENT_CONFIG={MOUSE_DOWN:["mousedown","cursorDown"],MOUSE_MOVE:["mousemove","cursorMove",window],MOUSE_UP:["mouseup","cursorUp",window],TOUCH_START:["touchstart","cursorDown"],TOUCH_MOVE:["touchmove","cursorMove",window],TOUCH_END:["touchend","cursorUp",window],TOUCH_CANCEL:["touchcancel","cursorUp",window],KEY_DOWN:["keydown","keyDown"],KEY_UP:["keyup","keyUp"],KEY_PRESS:["keypress","keyPress"]},h.CURSOR_EVENT_HANDLES=Object.keys(_),h.STATES={IS_DRAG:1,IS_ROTATE:2,IS_PINCH:4,MOUSE_DOWN:"MOUSE_DOWN",MOUSE_MOVE:"MOUSE_MOVE",MOUSE_UP:"MOUSE_UP",TOUCH_START:"TOUCH_START",TOUCH_MOVE:"TOUCH_MOVE",TOUCH_END:"TOUCH_END",TOUCH_CANCEL:"TOUCH_CANCEL",KEY_DOWN:"KEY_DOWN",KEY_UP:"KEY_UP",KEY_PRESS:"KEY_PRESS"},h.PATTERN_MAP=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},_,{},{keyDown:/^\S+_keyDown$/,keyUp:/^\S+_keyUp$/,keyPress:/^\S+_keyPress$/}),h.MOUSE_EVENT_ID=-9007199254740991,h._PRIVATE_METHODS={update_key_listener:function(t,e,r,o){d._PRIVATE_METHODS.match_keys(e,(function(e){var n=t[e];n||(n=t[e]=[]);var i=n.indexOf(r);o?i>=0&&(t._reference--,n.length>1?n.splice(i,1):delete t[e]):(t._reference++,~i||n.push(r))}))},match_keys:function(t,e){var r=t.match(/(\w+?| )(?=$|\||,|\+)/g);if(r=r?r.map((function(t){return t.toLocaleLowerCase()})):[],!e)return r;var o=r,n=Array.isArray(o),i=0;for(o=n?o:o[Symbol.iterator]();;){var s;if(n){if(i>=o.length)break;s=o[i++]}else{if((i=o.next()).done)break;s=i.value}if(e(s))break}},get_keys:function(t){return t.code&&t.key!==t.code?[t.key.toLocaleLowerCase(),t.code.toLocaleLowerCase()]:[t.key.toLocaleLowerCase()]}},h._LISTENER_PREPROCESSOR={keyDown:function(t,e,r){var o,n=t.slice(0,-8).split(","),i=r?function(t,r,o){if(o){var n=t[r];if(n){var i=n._listeners.indexOf(e);-1!==i&&(n._listeners.splice(i,1),function t(e){var r=e._parent;--e._reference<=0&&r&&(delete r[e._key],t(r))}(n))}}}:function(t,r,n){var i=t[r];i||((i=t[r]={_parent:t,_key:r,_reference:0,_parts:t._parts.concat(r)})._path=i._parts.join("+"),t._reference++),o.push(i),n&&(i._reference++,i._listeners?-1===i._listeners.indexOf(e)&&i._listeners.push(e):i._listeners=[e])};n.forEach((function(t){o=[this._registered_listener.keyDown],t.split("+").forEach((function(t,e,r){var n=o,s=d._PRIVATE_METHODS.match_keys(t),a=r.length===e+1;o=[];var c=n,l=Array.isArray(c),p=0;for(c=l?c:c[Symbol.iterator]();;){var u;if(l){if(p>=c.length)break;u=c[p++]}else{if((p=c.next()).done)break;u=p.value}var f=u,_=s,h=Array.isArray(_),v=0;for(_=h?_:_[Symbol.iterator]();;){var y;if(h){if(v>=_.length)break;y=_[v++]}else{if((v=_.next()).done)break;y=v.value}i(f,y,a)}}}),this)}),this)},keyUp:function(t,e,r){d._PRIVATE_METHODS.update_key_listener(this._registered_listener.keyUp,t,e,r)},keyPress:function(t,e,r){d._PRIVATE_METHODS.update_key_listener(this._registered_listener.keyPress,t,e,r)}};var d=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(o,t);var e,r=(e=o,function(){var t,r=c(e);if(a()){var o=c(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return s(this,t)});function o(t,e,n){var s;return p(this,o),(s=r.call(this,t,n))._mesh_value=4,s._process_status=0,s._process_values={kd_tasks:[]},s.cursorDown=function(t){var e,r=s._points;if(s._identifiers[0]!==o.MOUSE_EVENT_ID)if(t.changedTouches&&r.length<s._max_points){var n=t.changedTouches,i=Array.isArray(n),a=0;for(n=i?n:n[Symbol.iterator]();;){var c;if(i){if(a>=n.length)break;c=n[a++]}else{if((a=n.next()).done)break;c=a.value}var l=c;if(-1===s._identifiers.indexOf(l.identifier)){e=l;break}}}else 0===r.length&&Math.pow(2,t.button)&s.mouse_mask&&(e=t);e&&s.addPoint(e,t)},s._move=function(t,e,r){var o=s._activated_listener,n=s._points[r],i=e[s.pointX],a=e[s.pointY];if(o.dragMove){var c=[i-n.mx,a-n.my];o.dragMove(t,c,e)?(n.mx=i-c[0],n.my=a-c[1]):(n.mx=i,n.my=a)}o.click&&Math.abs(i-n.dx)+Math.abs(a-n.dy)>s._mesh_value&&(o.click=!1)},s._move2=function(t,e,r){var n=o.STATES,i=s._activated_listener,a=s._process_values,c=s._points,l=c[r],p=c[1===r?0:1],u=e[s.pointX]-l.mx,f=e[s.pointY]-l.my;if(i.dragMove2){var _=[u/2,f/2];i.dragMove2(t,_,e)&&(u-=2*_[0],f-=2*_[1])}l.mx=l.mx+u,l.my=l.my+f;var h=(l.mx+p.mx)/2,d=(l.my+p.my)/2;if(i.pinch){var v=Math.sqrt(Math.pow(l.mx-p.mx,2)+Math.pow(l.my-p.my,2));s._process_status&n.IS_PINCH?i.pinch(t,-(a.sd-(a.sd=v))):Math.abs(v-a.sd)>s._mesh_value&&(s._process_status|=n.IS_PINCH,i.pinch(t,-(a.sd-(a.sd=v)),[h,d]))}if(i.rotate){var y=0===r?1:r,m=c[0].mx-c[y].mx,g=c[0].my-c[y].my,b=Math.atan2(g,m);b*a.ra<=0&&(a.ra=-a.ra),s._process_status&n.IS_ROTATE?(i.rotate(t,b-a.ra),a.ra=b):Math.abs(b-a.ra)>.01*Math.PI&&(s._process_status|=n.IS_ROTATE,i.rotate(t,b-a.ra,[h,d]),a.ra=b)}},s.cursorMove=function(t){s.eventDispenser(t,s._points.length<2?s._move:s._move2)},s._leave=function(t,e,r){var n;s._identifiers.splice(r,1),s._points.splice(r,1);var a=o.STATES,c=s._identifiers.length,l=s._activated_listener;switch(!0){case c<1:s.setListener((i(n={},a.MOUSE_DOWN,!0),i(n,a.MOUSE_MOVE,!1),i(n,a.MOUSE_UP,!1),i(n,a.TOUCH_MOVE,!1),i(n,a.TOUCH_END,!1),i(n,a.TOUCH_CANCEL,!1),n)),s._process_status=0,t&&(l.dragEnd&&l.dragEnd(t,e),l.click&&l.click(t,e));break;case t&&c<s._max_points:if(s._process_status=a.IS_DRAG,t.targetTouches&&t.targetTouches.length>=s._max_points){var p=t.targetTouches,u=Array.isArray(p),f=0;for(p=u?p:p[Symbol.iterator]();;){var _;if(u){if(f>=p.length)break;_=p[f++]}else{if((f=p.next()).done)break;_=f.value}var h=_;if(-1===s._identifiers.indexOf(h.identifier)){s.registPoint(t,h);break}}}}},s.cursorUp=function(t){s.eventDispenser(t,s._leave)},s.keyDown=function(t){var e=s._process_values.kd_tasks;function r(r){if(r){for(var o=r._listeners?r._listeners.length:0,n=0;n<o;n++)if(!0===r._listeners[n](t,r._path))return!0;r._reference>o&&-1===e.indexOf(r)&&e.push(r)}}var n=o._PRIVATE_METHODS.get_keys(t);if(!e.some((function(t){return n.some((function(e){return r(t[e])}))}))){var i=n,a=Array.isArray(i),c=0;for(i=a?i:i[Symbol.iterator]();;){var l;if(a){if(c>=i.length)break;l=i[c++]}else{if((c=i.next()).done)break;l=c.value}var p=l;if(r(s._registered_listener.keyDown[p]))break}}},s.keyUp=function(t){for(var e=o._PRIVATE_METHODS.get_keys(t),r=s._process_values.kd_tasks,n=function(t){e.some((function(e){return-1!==r[t]._parts.indexOf(e)}))&&r.splice(t--,1),i=t},i=0;i<r.length;i++)n(i);var a=s._registered_listener.keyUp,c=e,l=Array.isArray(c),p=0;for(c=l?c:c[Symbol.iterator]();;){var u;if(l){if(p>=c.length)break;u=c[p++]}else{if((p=c.next()).done)break;u=p.value}var f=u;a[f]&&a[f].some((function(e){return e(t)}))}},s.keyPress=function(t){var e=o._PRIVATE_METHODS.get_keys(t),r=s._registered_listener.keyPress,n=e,i=Array.isArray(n),a=0;for(n=i?n:n[Symbol.iterator]();;){var c;if(i){if(a>=n.length)break;c=n[a++]}else{if((a=n.next()).done)break;c=a.value}var l=c;r[l]&&r[l].some((function(e){return e(t)}))}},s.registListener(e),s}return f(o,[{key:"on",value:function(t,e){return this.updateListener(i({},t,e))}},{key:"off",value:function(t,e){return this.updateListener(i({},t,e),!0)}},{key:"activate",value:function(){this.updateListener()}},{key:"disable",value:function(){var t=this;this.setListener(Object.keys(this._listener_status).reduce((function(e,r){return t._listener_status[r]&&(e[r]=!1),e}),{}))}},{key:"updateListener",value:function(t,e){var r,n=this._registered_listener,s=o.STATES;if(t)for(var a in t)for(var c in o.PATTERN_MAP)o.PATTERN_MAP[c].test(a)&&(o._LISTENER_PREPROCESSOR[c]?t[a]&&o._LISTENER_PREPROCESSOR[c].call(this,a,t[a],e):n[c]=e?null:t[a]);this._max_points=n.pinch||n.rotate||n.dragMove2?2:1;var l=!!(n.dragStart||n.dragMove||n.dragMove2||n.dragEnd||n.click||n.pinch||n.rotate);return this.setListener((i(r={},s.MOUSE_DOWN,l),i(r,s.TOUCH_START,l),i(r,s.KEY_DOWN,n.keyDown._reference>0),i(r,s.KEY_UP,n.keyDown._reference>0||n.keyUp._reference>0),i(r,s.KEY_PRESS,n.keyPress._reference>0),r)),this}},{key:"break",value:function(){for(var t=this._identifiers.length;--t>=0;)this._leave(void 0,void 0,t)}},{key:"removePoint",value:function(t){isNaN(t)&&(t=t?this._identifiers.indexOf(t.identifier||o.MOUSE_EVENT_ID):0),this._leave(void 0,void 0,t)}},{key:"addPoint",value:function(t,e){var r=this._points,n=o.CURSOR_EVENT_HANDLES.length;if(0===r.length){var i=this._registered_listener,s=e&&i.dragStart&&i.dragStart(e,t)||!1;if(!0===s)return;n=0,o.CURSOR_EVENT_HANDLES.reduce((function(t,e){return i[e]&&(!1===s||~s.indexOf(e))?(n++,t[e]=i[e]):delete t[e],t}),this._activated_listener)}(n>1||n>0&&!this._activated_listener.dragStart)&&this.registPoint(e,t)}},{key:"registPoint",value:function(t){var e,r,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,s=o.STATES,a=this._points,c=this._activated_listener,l=n[this.pointX],p=n[this.pointY];switch(a.push({dx:l,dy:p,mx:l,my:p}),this._identifiers.push(isNaN(n.identifier)?o.MOUSE_EVENT_ID:n.identifier),a.length){case 1:this._process_status=s.IS_DRAG,r=this._is_mouse_event,this.setListener((i(e={},s.MOUSE_DOWN,r),i(e,s.MOUSE_MOVE,r),i(e,s.MOUSE_UP,r),i(e,s.TOUCH_MOVE,!r),i(e,s.TOUCH_END,!r),i(e,s.TOUCH_CANCEL,!r),e));break;case 2:this._process_values.sd=Math.sqrt(Math.pow(a[0].mx-a[1].mx,2)+Math.pow(a[0].my-a[1].my,2)),this._process_values.ra=Math.atan2(a[0].my-a[1].my,a[0].mx-a[1].mx),c.click&&(c.click=!1)}}},{key:"registListener",value:function(t){this.updateListener(t)}},{key:"removeListener",value:function(t){t&&this.updateListener(t,!0)}}]),o}(h);try{window.InputListener=d}catch(t){}t.exports=d}])},,,,,,function(t,e,r){"use strict";r.r(e);var o=r(0),n=r(3).default,i=document.createElement("ul");i.className="mutex-box",document.body.appendChild(i);var s=0,a=Object(o.get_option)(),c=Array.prototype.concat.apply([],new Array(10).fill(0).map(o.get_models));p(c);var l=new n(i,c,a);function p(t){var e=function(){if(o){if(n>=r.length)return"break";a=r[n++]}else{if((n=r.next()).done)return"break";a=n.value}var t,e=a,c=e.element?e.element():((t=document.createElement("li")).className="mb-item",e.innerHTML&&(t.innerHTML=e.innerHTML),t);if(e.style)for(var l in e.style)c.style[l]=e.style[l];i.appendChild(c);var p=e.left,u=e.top,f=e.width,_=e.height,h=e.dragging;Object.defineProperties(e,{left:{get:function(){return p},set:function(t){p=t,c.style.left=p+"px"}},top:{get:function(){return u},set:function(t){u=t,c.style.top=u+"px"}},width:{get:function(){return f},set:function(t){f=t,c.style.width=f+"px"}},height:{get:function(){return _},set:function(t){_=t,c.style.height=_+"px"}},dragging:{get:function(){return h},set:function(t){h=t,c.style.zIndex=++s,c.className=h?"mb-item dragging":"mb-item"}}})},r=t,o=Array.isArray(r),n=0;for(r=o?r:r[Symbol.iterator]();;){var a;if("break"===e())break}return t}btn_col_inc.onclick=function(){l.resize(a.ncols+1)},btn_col_dec.onclick=function(){l.resize(a.ncols-1)},btn_trim.onclick=function(){l.trim()},btn_add.onclick=function(){l.add(p(Object(o.get_models)().map((function(t){return t.col=void 0,t}))))},console.log(l)}])}));
//# sourceMappingURL=test.js.map
}).toString()