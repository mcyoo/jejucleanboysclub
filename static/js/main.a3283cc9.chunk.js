(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{66:function(e,t,n){},72:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n(1),i=n.n(c),a=n(19),l=n.n(a),r=n(8),d=n(6),o=n.n(d),j=n(20),x=n(21),m=n(22),b=n(27),u=n(26),h=n(23),p=n.n(h),f=window.kakao,O=function(){return Object(c.useEffect)((function(){var e=document.getElementById("myMap"),t={center:new f.maps.LatLng(33.512917,126.898868),level:8};new f.maps.Map(e,t)}),[]),Object(s.jsx)("div",{id:"myMap",className:"mt-10 w-max h-screen lg:h-screen sm:h-64"})},v=n(24),g=n.n(v),y=(n(66),n(25)),w=n.n(y),N=n.p+"static/media/linkicon1.875cc7c3.png",k=n.p+"static/media/linkicon2.8ee21667.png",D=n.p+"static/media/linkicon3.47d38eac.png",L=n(7),M=n.n(L),S=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(x.a)(this,n);for(var s=arguments.length,c=new Array(s),i=0;i<s;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={isLoading:!1,movies:[]},e.getMovies=Object(j.a)(o.a.mark((function t(){var n,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:n=t.sent,s=n.data.data.movies,e.setState({movies:s,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("touchmove",(function(e){e.preventDefault()}),!1)}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=(e.movies,{dots:!0,infinite:!0,speed:200,slidesToShow:1,slidesToScroll:1,appendDots:function(e){return Object(s.jsx)("div",{style:{position:"fixed",padding:"25px",backgroundColor:"white",textAlign:"center",borderTop:"1px solid #e2e8f0"},children:Object(s.jsxs)("div",{style:{flex:1},children:[" ",e," "]})})},customPaging:function(e){return 0===e?Object(s.jsx)("div",{style:{flex:1,width:"3em"},children:Object(s.jsx)("img",{alt:"linkicon1",src:N})}):1===e?Object(s.jsx)("div",{style:{flex:1,width:"3em"},children:Object(s.jsx)("img",{alt:"linkicon2",src:k})}):2===e?Object(s.jsx)("div",{style:{flex:1,width:"3em"},children:Object(s.jsx)("img",{alt:"linkicon3",src:D})}):void 0}});return Object(s.jsx)("section",{className:"",children:t?Object(s.jsx)("div",{className:"flex",children:Object(s.jsx)("span",{className:"",children:"Loading..."})}):Object(s.jsx)("div",{className:"",children:Object(s.jsxs)(g.a,Object(r.a)(Object(r.a)({},n),{},{children:[Object(s.jsx)("div",{className:"w-full",children:Object(s.jsxs)("div",{className:"text-5xl lg:text-5xl sm:text-xl lg:mx-32 sm:mx-8",children:[Object(s.jsxs)("div",{className:"mb-10 lg:mb-10 sm:mb-8",children:[Object(s.jsx)("h4",{children:"\uc6b0\ub9ac\ub294"}),Object(s.jsx)(w.a,{cursorRenderer:function(e){return Object(s.jsx)("h1",{children:e})},displayTextRenderer:function(e,t){return Object(s.jsx)("h2",{children:e.split("").map((function(e,t){var n="".concat(t);return Object(s.jsx)("span",{children:e},n)}))})},text:["\uc4f0\ub808\uae30\ub97c \uc90d\uc2b5\ub2c8\ub2e4.","\uc9c0\uc5ed\uc0ac\ud68c\uc5d0 \uae30\uc5ec\ud569\ub2c8\ub2e4.","jejucleanboysclub\uc785\ub2c8\ub2e4."],speed:120,typingDelay:1200,eraseDelay:1500,eraseSpeed:100})]}),Object(s.jsxs)("div",{className:"border-t border-gray-400 text-3xl lg:text-3xl sm:text-xl",children:[Object(s.jsxs)("div",{className:"mt-10 flex justify-between",children:[Object(s.jsx)("div",{className:"flex",children:"\ub204\uc801 \ud65c\ub3d9\ud69f\uc218"}),Object(s.jsx)("div",{className:"flex",children:Object(s.jsx)(M.a,{end:30,delay:1})})]}),Object(s.jsxs)("div",{className:"mt-10 flex justify-between",children:[Object(s.jsx)("div",{className:"flex",children:"\ucc38\uc5ec\uc778\uc6d0"}),Object(s.jsx)("div",{className:"flex",children:Object(s.jsx)(M.a,{end:30,delay:1})})]})]})]})}),Object(s.jsxs)("div",{className:"text-center text-lg w-full",children:["\uc791\uc804 \uc9c0\uc5ed",Object(s.jsx)("div",{onMouseDown:function(e){e.preventDefault(),e.stopPropagation()},onTouchStart:function(e){e.preventDefault(),e.stopPropagation()},className:"mx-32 lg:mx-64 sm:mx-12",children:Object(s.jsx)(O,{})})]}),Object(s.jsx)("div",{className:"text-center text-lg w-full",children:Object(s.jsx)("h3",{children:"\uba85\uc608\uc758 \uc804\ub2f9"})})]}))})})}}]),n}(i.a.Component);n(72),n(73),n(74);l.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(S,{})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.a3283cc9.chunk.js.map