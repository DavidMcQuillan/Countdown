!function(n){var t={};function r(e){if(t[e])return t[e].exports;var o=t[e]={i:e,l:!1,exports:{}};return n[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=n,r.c=t,r.d=function(n,t,e){r.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:e})},r.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(t,"a",t),t},r.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},r.p="/",r(r.s=0)}([function(n,t,r){"use strict";var e,o;Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"operators",function(){return f}),t.solve=s,t.isOperatorPositionPermutationValid=p,t.getValidOperatorPositionPermutations=v,t.writeExpression=y;var u=-1,i=99999,l="",a=function(){return function(n,t,r){this.text=n,this.displayLinear=t,this.action=r}}();var f=[new a("+",!0,function(n,t){return n<t?null:n+t}),new a("-",!0,function(n,t){var r=n-t;return r===t?null:r<=0?null:r}),new a("x",!1,function(n,t){return n<t?null:1===t?null:n*t}),new a("\xf7",!1,function(n,t){if(1===t)return null;var r,e=n/t;return(r=e)>>0!==r?null:e})];function s(n,t){return e=n,function n(t,r,e,o){r.length===e&&o(r);for(var u=0,i=t;u<i.length;u++){var l=i[u];r.push(l),t.splice(t.indexOf(l),1),n(t,r,e,o),t.push(r.pop())}}(o=t,[],o.length,h),[u,l]}function c(n,t,r){var o=Math.abs(n-e);if(!(o>i)){var a=y(t.slice(0,r));o===i&&a.length>l.length||(u=n,i=o,l=a)}}function p(n,t){for(var r=0,e=0,o=0,u=t;o<u.length;o++){var i=u[o];if(r+=i-e,e=i,r<2)return!1;r-=2}return 0===r}function v(n){var t=n-1,r=n+t,e=[];return function n(t,r,e,o,u,i){if(o===u)return void i(t);for(var l=r;l<=e&&e-l+1>=u-o;l++)t[o]=l,n(t,l+1,e,o+1,u,i)}([],2,r-2,0,t-1,function(n){(n=n.slice()).push(r-1),p(0,n)&&e.push(n)}),e}function h(n){for(var t=0,r=v(n.length);t<r.length;t++){for(var e=r[t],o=n.slice(),u=0,i=e;u<i.length;u++){var l=i[u];o.splice(l,0,-1)}g(o,e,e.length-1)}}function g(n,t,r){for(var e=0===r,o=0,u=f;o<u.length;o++){var i=u[o];n[t[r]]=i,e?d(n):g(n,t,r-1)}}function d(n){if(0!==n.length)for(var t=[],r=0,e=0,o=n;e<o.length;e++){var u=o[e];if(r++,"number"!==typeof u){if(t.length<2)return;var i=t.pop(),l=t.pop(),a=u.action(l,i);if(null===a)return;c(a,n,r),t.push(a)}else t.push(u)}}self.onmessage=function(n){var t,r=n.data;"calculate"===r[0]?s(r[1],r[2]):"respond"===r[0]&&(t=[u,l],self.postMessage(t))};var x=function(){function n(n,t){this.text=n,this.operator=t}return n.prototype.toString=function(){return this.text},n}();function y(n){for(var t=[],r=f[2],e=n.length,o=0,u=n;o<u.length;o++){var i=u[o];if("number"!==typeof i){var l=i,a=t.pop(),s=t.pop(),c=t.length;c<e&&(e=c);var p=h(s,l)?"("+s.text+")":s.text;p+=" "+l.text+" ",p+=h(a,l)?"("+a.text+")":a.text;var v=new x(p,l);t.push(v)}else t.push(new x(i.toString(),null))}return e>0&&t.splice(0,e),t.join(" ");function h(n,t){return null!==n.operator&&!(t.displayLinear&&n.operator.displayLinear||t===r&&n.operator===r)}}}]);
//# sourceMappingURL=3f359050524844199701.worker.js.map