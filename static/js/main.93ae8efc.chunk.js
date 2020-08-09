(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],{144:function(e,t,a){e.exports=a(233)},149:function(e,t,a){},151:function(e,t,a){},233:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),s=a.n(c),o=(a(149),a(77)),i=a(102),u=a(141),l=a(117),m=a(36),f=a(242),p=a(105),b=a(235),v=(a(150),a(151),a(41)),h=a.n(v),d=a(65),g=a(118),j=a(119),y=new(function(){function e(){Object(g.a)(this,e),this.apiKey="e3cafce94e3a863833765608b4d85428",this.baseUrl="https://api.themoviedb.org/3",this.imageBaseUrl="https://image.tmdb.org/t/p"}return Object(j.a)(e,[{key:"createGuestSession",value:function(){var e=Object(d.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this.baseUrl,"/authentication/guest_session/new?api_key=").concat(this.apiKey));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getSearchList",value:function(){var e=Object(d.a)(h.a.mark((function e(t){var a,n,r,c,s,o=arguments;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=o.length>1&&void 0!==o[1]?o[1]:"a",n=o.length>2&&void 0!==o[2]?o[2]:1,r=t?"&seisson_id=".concat(t):"",c=""!==a?a:"a",e.prev=4,e.next=7,fetch("".concat(this.baseUrl,"/search/movie?api_key=").concat(this.apiKey).concat(r,"&query=").concat(c,"&page=").concat(n));case 7:s=e.sent,e.next=13;break;case 10:return e.prev=10,e.t0=e.catch(4),e.abrupt("return",{error:e.t0,results:[]});case 13:return e.abrupt("return",s.json());case 14:case"end":return e.stop()}}),e,this,[[4,10]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getImagePath",value:function(e,t){return null!==t?"".concat(this.imageBaseUrl,"/w").concat(e).concat(t):"https://raw.githubusercontent.com/SaniRouke/Images/master/not-found.png"}},{key:"rateMovie",value:function(){var e=Object(d.a)(h.a.mark((function e(t,a,n){var r,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={value:n},e.next=3,fetch("".concat(this.baseUrl,"/movie/").concat(a,"/rating?api_key=").concat(this.apiKey,"&guest_session_id=").concat(t),{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(r)});case 3:return c=e.sent,e.abrupt("return",c.json());case 5:case"end":return e.stop()}}),e,this)})));return function(t,a,n){return e.apply(this,arguments)}}()},{key:"getRatedListGuestSession",value:function(){var e=Object(d.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("\n    ".concat(this.baseUrl,"/guest_session/").concat(t,"/rated/movies?api_key=").concat(this.apiKey,"&language=en-US&sort_by=created_at.asc"));case 3:a=e.sent,e.next=9;break;case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",{error:e.t0,results:[]});case 9:return e.abrupt("return",a.json());case 10:case"end":return e.stop()}}),e,this,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getGenres",value:function(){var e=Object(d.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this.baseUrl,"/genre/movie/list?api_key=").concat(this.apiKey,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}()),O=a(120),E=a(239);function _(e){var t=e.fetchData,a=e.disabled,c=Object(n.useState)(""),s=Object(m.a)(c,2),o=s[0],i=s[1],u=Object(n.useRef)(null);Object(n.useEffect)((function(){u.current.focus()}));var l=Object(n.useMemo)((function(){return Object(O.debounce)(t,400)}),[t]);return r.a.createElement(E.a,{className:"Search",ref:u,placeholder:"Type to search...",disabled:a,value:o,onChange:function(e){var t=e.target.value;i(t),l(t)}})}var k=a(243),S=a(237);function w(e){var t=e.error,a=e.children,n=e.className,c=e.currentPage,s=e.setPage,o=r.a.Children.count(a)>0?null:r.a.createElement(k.a,{type:"info",message:"Movies not Found",style:{paddingLeft:50,fontSize:30}}),i=t?r.a.createElement(k.a,{type:"error",message:"The Internet may not be available",style:{paddingLeft:50,fontSize:30}}):null;return r.a.createElement(r.a.Fragment,null,i||o||r.a.createElement("ul",{className:n},a),r.a.createElement(S.a,{className:"Pagination",size:"small",total:50,current:c,onChange:s}))}w.defaultProps={error:null};var N=a(238),M=a(244),I=a(240),x=a(241),P=a(236);function C(e){var t=e.className,a=e.data,c=e.sessionID,s=e.genres,o=Object(n.useState)(),i=Object(m.a)(o,2),u=i[0],l=i[1],f=Object(n.useState)("black"),p=Object(m.a)(f,2),b=p[0],v=p[1],h=a.id,d=a.title,g=a.poster_path,j=a.release_date,O=a.overview,E=a.vote_average,_=a.genre_ids,k=N.a.Paragraph;Object(n.useEffect)((function(){E>=0&&E<3&&v("#E90000"),E>=3&&E<5&&v("#E97E00"),E>=5&&E<7&&v("#E9D100"),E>=7&&v("#66E900")}),[E]);var S=r.a.createElement("img",{src:y.getImagePath(185,g),alt:a.title}),w=j?Object(P.a)(new Date(j),"MMMM d, yyyy"):"-/-/-",C=_.map((function(e){return r.a.createElement(M.a,{className:"MovieItem__tag",key:e},s[e])}));return r.a.createElement(I.a,{className:t,cover:S,bodyStyle:{padding:"10px 20px 40px"},bordered:!1},r.a.createElement("div",{className:"MovieItem__header"},r.a.createElement("h3",{className:"MovieItem__title"},d),r.a.createElement("div",{className:"MovieItem__rate-circle",style:{borderColor:b}},E)),r.a.createElement("p",{className:"MovieItem__date"},w),r.a.createElement("div",{className:"MovieItem__tag-wrapper"},s&&_?C:null),r.a.createElement(k,{className:"MovieItem__overview",ellipsis:{rows:5,expandable:!0,symbol:"more"}},O),r.a.createElement(x.a,{className:"MovieItem__rate-stars",count:10,defaultValue:0,value:u,onChange:function(e){l(e),y.rateMovie(c,h,e)},allowHalf:!0}))}function U(){var e=Object(n.useState)(!0),t=Object(m.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(null),v=Object(m.a)(s,2),h=v[0],d=v[1],g=Object(n.useState)("search"),j=Object(m.a)(g,2),O=j[0],E=j[1],k=Object(n.useState)([]),S=Object(m.a)(k,2),N=S[0],M=S[1],I=Object(n.useState)(null),x=Object(m.a)(I,2),P=x[0],U=x[1],L=Object(n.useState)(1),T=Object(m.a)(L,2),D=T[0],G=T[1],K=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)((function(){Promise.resolve(y.getGenres()).then((function(e){r(e.genres)}))}),[]);var c=[];for(var s in a)if(Object.prototype.hasOwnProperty.call(a,s)){var f=c,p=Object(l.a)(f).slice(0);c=[].concat(Object(u.a)(p),[a[s]])}return c.reduce((function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];return Object(i.a)(Object(i.a)({},e),{},Object(o.a)({},a[0].id,a[0].name))}),{})}(),z=Object(n.useState)(""),R=Object(m.a)(z,2),B=R[0],J=R[1],A=function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"search";c(!0),J(t),Promise.resolve("rated"===n?y.getRatedListGuestSession(e):y.getSearchList(e,t,a)).then((function(e){var t=e.error,a=e.results;return c(!1),M(a),U(t),a}))},F=Object(n.useCallback)((function(){return A(h,B,D,O)}),[h,B,D,O]);Object(n.useEffect)((function(){Promise.resolve(y.createGuestSession()).then((function(e){d(e.guest_session_id)}))}),[]),Object(n.useEffect)((function(){F(),window.scrollTo(0,0)}),[D,O,F]),Object(n.useEffect)((function(){G(1)}),[B]);var q=f.a.Content,H=p.a.TabPane,V=N.map((function(e){return r.a.createElement("li",{className:"li-MovieItem",key:e.id},r.a.createElement(C,{className:"MovieItem",data:e,sessionID:h,genres:K}))}));return r.a.createElement("div",{className:"App"},r.a.createElement(f.a,{className:"Layout"},r.a.createElement(q,{className:"Content"},r.a.createElement(p.a,{className:"Tabs",size:"large",centered:!0,onTabClick:E},r.a.createElement(H,{tab:"Search",key:"search"}),r.a.createElement(H,{tab:"Rated",key:"rated"})),r.a.createElement(_,{fetchData:function(e){return A(h,e,D)},disabled:"rated"===O}),r.a.createElement(b.a,{spinning:a,size:"large"},r.a.createElement(w,{className:"MoviesList",error:P,currentPage:D,setPage:G},V)))))}C.defaultProps={sessionID:null,genres:null},s.a.render(r.a.createElement(U,null),document.getElementById("root"))}},[[144,1,2]]]);
//# sourceMappingURL=main.93ae8efc.chunk.js.map