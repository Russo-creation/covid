(this.webpackJsonpcovid=this.webpackJsonpcovid||[]).push([[0],{16:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"d",(function(){return a})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return o}));var r="STATISTICS_GET",a="STATISTICS_GET_SUCCESS",c="STATISTICS_GET_FAILURE",o="STATISTICS_GET_REQUEST"},31:function(e,t,n){"use strict";t.a={light:{main:"#de393f",hoverMain:"#9c2126",accent:"#f49000",hoverAccent:"#c97700",textPrimary:"#ffffff",textSecondary:"#d0d0d0",grayColor:"#707070"}}},32:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var r="SCROLL_CHANGE",a=function(){return function(e){e({type:r})}}},46:function(e,t,n){e.exports=n(58)},51:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(15),o=n.n(c),i=(n(51),n(26)),l=n(31),s=n(20),u=n(2),d=a.a.lazy((function(){return Promise.all([n.e(3),n.e(4)]).then(n.bind(null,180))})),h=a.a.lazy((function(){return n.e(5).then(n.bind(null,181))})),f=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(u.c,null,a.a.createElement(u.a,{path:"/",component:d}),a.a.createElement(u.a,{component:h})))};var g=function(){return a.a.createElement(i.a,{theme:l.a},a.a.createElement(s.a,null,a.a.createElement(f,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var p=n(10),v=n(37),m=n(38),E=n(4),S=n(16),T=n(29),C=function e(t,n,r,a,c,o){Object(T.a)(this,e),this.country=t,this.confirmed=n,this.deaths=r,this.recovered=a,this.active=c,this.date=o},b={statistics:[],loading:!1,error:null},y=n(32),k={scrollTrackSet:0,scrollTrackPercentage:0,scrollTrackPercentageExact:0,actualScene:0,scrollTrackerListFolds:["HomeContent","SymptomsContent","StatisticsContent","LiveCounterContent"],scrollTrackerListCharts:["FirstChart","SecondChart","ThirdChart"],scrollTrackChartsIndex:0},w=function(e){for(var t=e.length-1;t>=0;t--){var n=document.getElementById(e[t]);if(null!==n){var r=n.getBoundingClientRect(),a=window.innerHeight/2;if(r.top-a<=0){for(var c=r.height,o=window.scrollY,i=window.innerHeight,l=0,s=e.length-1;s>=0;s--)t>s&&(l+=document.getElementById(e[s]).getBoundingClientRect().height);t>0&&(l=l-i+a);var u=c;0===t?u=u-i+a:t===e.length-1&&(u-=a);var d=100*(o-l)/u;return{index:t,percentage:1*d.toFixed(2),percentageExact:d/100}}}}},j=Object(p.combineReducers)({statistics:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S.d:var n=[],r=0;n=t.payload.reduce((function(e,t){var n=t.Date.split("-")[1];return e[n]?e[n].data.push(new C(t.Country,t.Confirmed,t.Deaths,t.Recovered,t.Active,t.Date)):e[n]={group:String(r++),dateGrup:t.Date.split("-")[0]+"-"+t.Date.split("-")[1],data:[new C(t.Country,t.Confirmed,t.Deaths,t.Recovered,t.Active,t.Date)]},e}),{});var a=Object.keys(n).map((function(e){return n[e]}));return console.log(a),Object(E.a)(Object(E.a)({},e),{},{statistics:a,loading:!1,error:null});case S.b:return Object(E.a)(Object(E.a)({},e),{},{loading:!1,error:t.error});case S.c:return Object(E.a)(Object(E.a)({},e),{},{loading:!0,error:null});default:return e}},scrollTracker:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y.a:var n=w(e.scrollTrackerListFolds);n||(n={index:0,percentage:0,percentageExact:0});var r=w(e.scrollTrackerListCharts),a=0;return r&&(a=r.index),Object(E.a)(Object(E.a)({},e),{},{scrollTrackPercentage:n.percentage,scrollTrackPercentageExact:n.percentageExact,scrollTrackSet:n.index,scrollTrackChartsIndex:a});default:return e}}}),O=n(45);var x=[v.a,function(){return function(e){return function(t){var n=t.promise,r=t.type,a=Object(O.a)(t,["promise","type"]);if(!n||"function"!==typeof n.then)return e(t);var c="".concat(r,"_SUCCESS"),o="".concat(r,"_FAILURE"),i="".concat(r,"_REQUEST");return e(Object(E.a)({type:i},a)),n.then((function(e){if(e.ok)return e.json();throw new Error(e.status)})).then((function(t){e(Object(E.a)({type:c,payload:t},a))})).catch((function(t){e(Object(E.a)({type:o,error:t.message},a))}))}}}],I=Object(p.createStore)(j,{},Object(m.composeWithDevTools)(p.applyMiddleware.apply(void 0,x))),L=n(27),_=n(24),A=n(40),R=n(42),D=n(60);_.a.use(A.a).use(R.a).use(D.e).init({defaultLanguage:"en",otherLanguages:["pl"],fallbackLng:"en",defaultNS:"translation",interpolation:{escapeValue:!1},loadPath:"./covid/locales/{{lng}}/{{ns}}.json"});_.a;o.a.render(a.a.createElement(L.a,{store:I},a.a.createElement(r.Suspense,{fallback:null},a.a.createElement(a.a.StrictMode,null,a.a.createElement(g,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.99388df4.chunk.js.map