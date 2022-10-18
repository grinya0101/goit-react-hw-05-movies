"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[544],{146:function(e,n,t){t.d(n,{Z:function(){return m}});var r,a,c,o,u=t(739),i=t(168),s=t(731),p=t(444),f=(0,p.ZP)(s.rU)(r||(r=(0,i.Z)(["\n  font-size: ",";\n  text-decoration: none;\n  color: ",";\n\n  &:hover {\n    color: red;\n  }\n"])),(function(e){return e.theme.fontSizes.s}),(function(e){return e.theme.colors.black})),l=p.ZP.p(a||(a=(0,i.Z)(["\n  font-size: ",";\n  font-weight: ",";\n  color: ",";\n"])),(function(e){return e.theme.fontSizes.l}),(function(e){return e.theme.fontWeights.preBold}),(function(e){return e.theme.colors.red})),d=p.ZP.ul(c||(c=(0,i.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: ","px;\n"])),(function(e){return e.theme.space[5]})),v=p.ZP.li(o||(o=(0,i.Z)(["\n  text-align: center;\n  list-style: none;\n  border: 1px solid #b6b4b4;\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0px 3px 5px black;\n"]))),h=t(184);function m(e){var n=e.movies,t=e.title,r=void 0===t?null:t,a=(0,u.TH)();return(0,h.jsxs)(h.Fragment,{children:[r&&(0,h.jsx)(l,{children:r}),(0,h.jsx)(d,{children:n.map((function(e){var n=e.id,t=e.original_title,r=e.poster_path;return(0,h.jsx)(v,{children:(0,h.jsxs)(f,{state:{from:a},to:"/movies/".concat(n),children:[(0,h.jsx)("img",{src:r?"".concat("https://image.tmdb.org/t/p/w342/").concat(r):"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",alt:t}),(0,h.jsx)("p",{children:t})]})},n)}))})]})}m.defaultProps={movies:[]}},646:function(e,n,t){t.d(n,{Bc:function(){return s},bG:function(){return l},eQ:function(){return p},p2:function(){return f},yW:function(){return i}});var r=t(861),a=t(757),c=t.n(a),o=t(44),u="83cba2c85d0df477852b094af9fbdddb",i=function(){var e=(0,r.Z)(c().mark((function e(){var n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.ZP.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(u));case 3:return n=e.sent,t=n.data,e.abrupt("return",t.results);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.ZP.get("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(u,"&language=en-US"));case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.ZP.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(u,"&query=").concat(n,"&include_adult=false"));case 3:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.ZP.get("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=83cba2c85d0df477852b094af9fbdddb&language=en-US"));case 3:return t=e.sent,r=t.data,e.abrupt("return",r.cast);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.ZP.get("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=83cba2c85d0df477852b094af9fbdddb&language=en-US"));case 3:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}()},544:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var r=t(861),a=t(885),c=t(757),o=t.n(c),u=t(791),i=t(646),s=t(146),p=t(184);function f(){var e=(0,u.useState)([]),n=(0,a.Z)(e,2),t=n[0],c=n[1];return(0,u.useEffect)((function(){var e=function(){var e=(0,r.Z)(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.yW)();case 3:n=e.sent,c(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,p.jsx)("div",{children:(0,p.jsx)(s.Z,{movies:t,title:"Trending movie:"})})}}}]);
//# sourceMappingURL=544.f8a292c1.chunk.js.map