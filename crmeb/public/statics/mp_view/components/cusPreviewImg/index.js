(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/cusPreviewImg/index"],{1464:function(t,n,e){"use strict";e.r(n);var r=e("500f"),u=e.n(r);for(var i in r)"default"!==i&&function(t){e.d(n,t,(function(){return r[t]}))}(i);n["default"]=u.a},2594:function(t,n,e){"use strict";e.r(n);var r=e("5dca"),u=e("1464");for(var i in u)"default"!==i&&function(t){e.d(n,t,(function(){return u[t]}))}(i);e("cb3a");var c,a=e("f0c5"),o=Object(a["a"])(u["default"],r["b"],r["c"],!1,null,"657ba202",null,!1,r["a"],c);n["default"]=o.exports},"500f":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r={name:"cusPreviewImg",props:{list:{type:Array,required:!0,default:function(){return[]}},circular:{type:Boolean,default:!0},duration:{type:Number,default:500}},data:function(){return{currentIndex:0,showBox:!1}},watch:{list:function(t){}},methods:{changeSwiper:function(t){this.currentIndex=t.target.current,this.$emit("changeSwitch",t.target.current)},open:function(t){t&&this.list.length&&(this.currentIndex=this.list.map((function(t){return t.suk})).indexOf(t),this.showBox=!0)},close:function(){this.showBox=!1},shareFriend:function(){this.$emit("shareFriend")}}};n.default=r},"5dca":function(t,n,e){"use strict";var r;e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return r}));var u=function(){var t=this,n=t.$createElement,e=(t._self._c,t.showBox&&t.list.length>0?Number(t.currentIndex):null);t.$mp.data=Object.assign({},{$root:{m0:e}})},i=[]},a586:function(t,n,e){},cb3a:function(t,n,e){"use strict";var r=e("a586"),u=e.n(r);u.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/cusPreviewImg/index-create-component',
    {
        'components/cusPreviewImg/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("2594"))
        })
    },
    [['components/cusPreviewImg/index-create-component']]
]);