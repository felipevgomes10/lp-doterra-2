"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(n){var r={};function o(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=n,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==_typeof(e)&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(t,e,n){function r(){f.forEach(function(t,e){t.style.border=l===e?"2px solid #91cc14":"2px solid transparent"})}var o,u,c,f,i,l;n.r(e),u=document.querySelector(".slider-wrapper"),c=document.querySelector(".slider"),f=document.querySelectorAll(".comment"),n=document.querySelector(".btn-left"),e=document.querySelector(".btn-right"),i=f.length-1,l=0,r(),n.addEventListener("click",function(){o=u.offsetWidth,0<l?--l:l=i,c.style.transform="translateX(-".concat(o*l,"px)"),r()}),e.addEventListener("click",function(){o=u.offsetWidth,l<i?(l+=1,c.style.transform="translateX(-".concat(o*l,"px)")):(c.style.transform="translateX(0)",l=0),r()}),window.addEventListener("resize",function(){setTimeout(function(){o=u.offsetWidth,c.style.transform="translateX(-".concat(o*l,"px)")},3e3)})}]);