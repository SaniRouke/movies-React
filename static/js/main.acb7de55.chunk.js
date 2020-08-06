(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],{144:function(e,t,a){e.exports=a(233)},149:function(e,t,a){},151:function(e,t,a){},233:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),s=a.n(c),o=(a(149),a(77)),i=a(102),u=a(141),l=a(117),f=a(38),m=a(242),p=a(105),v=a(235),b=(a(150),a(151),a(41)),h=a.n(b),d=a(65),g=a(118),y=a(119),j=new(function(){function e(){Object(g.a)(this,e),this.apiKey="e3cafce94e3a863833765608b4d85428",this.baseUrl="https://api.themoviedb.org/3",this.imageBaseUrl="https://image.tmdb.org/t/p"}return Object(y.a)(e,[{key:"createGuestSession",value:function(){var e=Object(d.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this.baseUrl,"/authentication/guest_session/new?api_key=").concat(this.apiKey));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getSearchList",value:function(){var e=Object(d.a)(h.a.mark((function e(t){var a,n,r,c,s,o=arguments;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=o.length>1&&void 0!==o[1]?o[1]:"a",n=o.length>2&&void 0!==o[2]?o[2]:1,r=t?"&seisson_id=".concat(t):"",c=""!==a?a:"a",console.log("ID in API:",t,r),e.prev=5,e.next=8,fetch("".concat(this.baseUrl,"/search/movie?api_key=").concat(this.apiKey).concat(r,"&query=").concat(c,"&page=").concat(n));case 8:s=e.sent,e.next=14;break;case 11:return e.prev=11,e.t0=e.catch(5),e.abrupt("return",{error:e.t0,results:[]});case 14:return e.abrupt("return",s.json());case 15:case"end":return e.stop()}}),e,this,[[5,11]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getImagePath",value:function(e,t){return null!==t?"".concat(this.imageBaseUrl,"/w").concat(e).concat(t):"https://avatanplus.com/files/resources/original/57b1a0f710a0b1568ddcc51c.jpg"}},{key:"rateMovie",value:function(){var e=Object(d.a)(h.a.mark((function e(t,a,n){var r,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={value:n},e.next=3,fetch("".concat(this.baseUrl,"/movie/").concat(a,"/rating?api_key=").concat(this.apiKey,"&guest_session_id=").concat(t),{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(r)});case 3:return c=e.sent,console.log("ID in API:",t,a),e.abrupt("return",c.json());case 6:case"end":return e.stop()}}),e,this)})));return function(t,a,n){return e.apply(this,arguments)}}()},{key:"getRatedListGuestSession",value:function(){var e=Object(d.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("ID in API:",t),e.prev=1,e.next=4,fetch("\n    ".concat(this.baseUrl,"/guest_session/").concat(t,"/rated/movies?api_key=").concat(this.apiKey,"&language=en-US&sort_by=created_at.asc"));case 4:a=e.sent,e.next=10;break;case 7:return e.prev=7,e.t0=e.catch(1),e.abrupt("return",{error:e.t0,results:[]});case 10:return e.abrupt("return",a.json());case 11:case"end":return e.stop()}}),e,this,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getGenres",value:function(){var e=Object(d.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this.baseUrl,"/genre/movie/list?api_key=").concat(this.apiKey,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}()),O=a(120),E=a(239);function _(e){var t=e.fetchData,a=e.disabled,c=Object(n.useState)(""),s=Object(f.a)(c,2),o=s[0],i=s[1],u=Object(n.useRef)(null);Object(n.useEffect)((function(){u.current.focus()}));var l=Object(n.useMemo)((function(){return Object(O.debounce)(t,400)}),[t]);return r.a.createElement(E.a,{className:"Search",ref:u,placeholder:"Type to search...",disabled:a,value:o,onChange:function(e){!function(e){i(e.target.value)}(e),l(e.target.value)}})}var k=a(243),w=a(237);function S(e){var t=e.error,a=e.children,n=e.className,c=e.currentPage,s=e.setPage,o=r.a.Children.count(a)>0?null:r.a.createElement(k.a,{type:"info",message:"Movies not Found",style:{paddingLeft:50,fontSize:30}}),i=t?r.a.createElement(k.a,{type:"error",message:"The Internet may not be available",style:{paddingLeft:50,fontSize:30}}):null;return r.a.createElement(r.a.Fragment,null,i||o||r.a.createElement("ul",{className:n},a),r.a.createElement(w.a,{className:"Pagination",size:"small",total:50,current:c,onChange:s}))}S.defaultProps={error:null};var I=a(238),N=a(244),P=a(240),M=a(241),x=a(236);function D(e){var t=e.className,a=e.data,c=e.sessionID,s=e.genres,o=Object(n.useState)(),i=Object(f.a)(o,2),u=i[0],l=i[1],m=Object(n.useState)("black"),p=Object(f.a)(m,2),v=p[0],b=p[1],h=a.id,d=a.title,g=a.poster_path,y=a.release_date,O=a.overview,E=a.vote_average,_=a.genre_ids,k=I.a.Paragraph;Object(n.useEffect)((function(){E>=0&&E<3&&b("#E90000"),E>=3&&E<5&&b("#E97E00"),E>=5&&E<7&&b("#E9D100"),E>=7&&b("#66E900")}),[E]);var w=r.a.createElement("img",{src:j.getImagePath(185,g),alt:a.title}),S=y?Object(x.a)(new Date(y),"MMMM d, yyyy"):"-/-/-",D=_.map((function(e){return r.a.createElement(N.a,{className:"MovieItem__tag",key:e},s[e])}));return r.a.createElement(P.a,{className:t,cover:w,bodyStyle:{padding:"10px 20px 40px"},bordered:!1},r.a.createElement("div",{className:"MovieItem__header"},r.a.createElement("h3",{className:"MovieItem__title"},d),r.a.createElement("div",{className:"MovieItem__rate-circle",style:{borderColor:v}},E)),r.a.createElement("p",{className:"MovieItem__date"},S),r.a.createElement("div",{className:"MovieItem__tag-wrapper"},s&&_?D:null),r.a.createElement(k,{className:"MovieItem__overview",ellipsis:{rows:5,expandable:!0,symbol:"more"}},O),r.a.createElement(M.a,{className:"MovieItem__rate-stars",count:10,defaultValue:0,value:u,onChange:function(e){l(e),j.rateMovie(c,h,e)},allowHalf:!0}))}function U(){var e=Object(n.useState)(!0),t=Object(f.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(null),b=Object(f.a)(s,2),h=b[0],d=b[1],g=Object(n.useState)("search"),y=Object(f.a)(g,2),O=y[0],E=y[1],k=Object(n.useState)([]),w=Object(f.a)(k,2),I=w[0],N=w[1],P=Object(n.useState)(null),M=Object(f.a)(P,2),x=M[0],U=M[1],C=Object(n.useState)(1),L=Object(f.a)(C,2),T=L[0],G=L[1],K=function(){var e=Object(n.useState)([]),t=Object(f.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)((function(){Promise.resolve().then((function(){return j.getGenres()})).then((function(e){r(e.genres)}))}),[]);var c=[];for(var s in a)if(Object.prototype.hasOwnProperty.call(a,s)){var m=c,p=Object(l.a)(m).slice(0);c=[].concat(Object(u.a)(p),[a[s]])}return c.reduce((function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];return Object(i.a)(Object(i.a)({},e),{},Object(o.a)({},a[0].id,a[0].name))}),{})}();function z(e){c(!0),Promise.resolve().then((function(){return"rated"===O?j.getRatedListGuestSession(h):j.getSearchList(h,e,T)})).then((function(e){var t=e.error,a=e.results;return c(!1),N(a),U(t),a}))}Object(n.useEffect)((function(){console.log("useEffect init"),Promise.resolve().then((function(){return j.createGuestSession()})).then((function(e){d(e.guest_session_id)}))}),[]),Object(n.useEffect)((function(){console.log("useEffect Page"),z(),window.scrollTo(0,0)}),[T,O]);var A=m.a.Content,R=p.a.TabPane,B=I.map((function(e){return r.a.createElement("li",{className:"li-MovieItem",key:e.id},r.a.createElement(D,{className:"MovieItem",data:e,sessionID:h,genres:K}))}));return console.log("render"),r.a.createElement("div",{className:"App"},r.a.createElement(m.a,{className:"Layout"},r.a.createElement(A,{className:"Content"},r.a.createElement(p.a,{className:"Tabs",size:"large",centered:!0,onTabClick:E},r.a.createElement(R,{tab:"Search",key:"search"}),r.a.createElement(R,{tab:"Rated",key:"rated"})),r.a.createElement(_,{fetchData:z,disabled:"rated"===O}),r.a.createElement(v.a,{spinning:a,size:"large"},r.a.createElement(S,{className:"MoviesList",error:x,currentPage:T,setPage:G},B)))))}D.defaultProps={sessionID:null,genres:null},s.a.render(r.a.createElement(U,null),document.getElementById("root"))}},[[144,1,2]]]);
//# sourceMappingURL=main.acb7de55.chunk.js.map