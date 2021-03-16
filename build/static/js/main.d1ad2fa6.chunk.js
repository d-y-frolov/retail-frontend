(this.webpackJsonpretail=this.webpackJsonpretail||[]).push([[0],{104:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){},132:function(e,t,a){},133:function(e,t,a){},134:function(e,t,a){},137:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(9),c=a.n(r),i=(a(104),a(105),a(51)),s=a(15),o=a(182),u="/cash",d="/backoffice",l="/reports",p=[{path:u,label:"POS"},{path:d,label:"BackOffice"},{path:l,label:"Reports"},{path:"/",label:"About"}],h=(a(106),a(107),a(2)),j=function(){return Object(h.jsx)("nav",{children:p.map((function(e,t){return Object(h.jsx)(o.a,{component:i.b,exact:!0,to:e.path,style:{margin:20},children:e.label},t)}))})},b=a(20),f=a(183),O=a(177),m=a(12),x=a(11),v=a.n(x),y=a(21),g="https://retail-back-end.herokuapp.com/",w="product",_="check",k="cash-register",C=a(22),N=a.n(C),I="[backoffice]-get-products",S="[backoffice]-add-product",D="[backoffice]-update-product",T="[backoffice]-remove-product",B="[backoffice]-get-cashes",E="[backoffice]-get-groups",q="[backoffice]-get-units",P="[backoffice]-get-checks";function F(e,t){return t?parseInt(e):parseFloat(e)}function R(e,t){return t?parseInt(e).toFixed(0):parseFloat(e).toFixed(3)}function W(e){return(Math.round(100*e)/100).toLocaleString("iw-en",{style:"currency",currency:"ILS"})}a(132);var A=a(50),U=a.n(A),G={id:"",name:"",groupId:"",groupName:"",unitId:"",unitName:"",tax:17,price:0,remainder:0,manufacturer:"",country:"",pieceUnit:!0};var H=a(85),Q=a(32),M=a.n(Q),L=function(e){var t=e.datasource,a=e.needBtn,n=e.onBtnClickCallback,r=e.columns;return 0!==t.length||r?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:M.a.header,children:function(){var e=[];if(r)for(var n=0;n<r.length;n++)e.push(Object(h.jsx)("div",{style:{width:"".concat(r[n].width,"px")},className:M.a.headerItem,children:r[n].headerName},n));else{var c=t[0];for(var i in c)e.push(Object(h.jsx)("div",{style:{width:"".concat(100/Object.keys(c).length,"%")},className:M.a.headerItem,children:i},i))}return e.push(Object(h.jsx)("div",{style:{width:"".concat(20+(a?40:0),"px")},className:M.a.headerBtn,children:"\xa0"},e.length)),e}()}),Object(h.jsx)("div",{className:M.a.wrapper,children:Object(h.jsx)("div",{className:M.a.body,children:t.map((function(e,t){return Object(h.jsx)("div",{className:M.a.bodyLine,children:function(){var c=[];if(r)for(var i=function(t){c.push(Object(h.jsx)("div",{style:{width:"".concat(r[t].width,"px"),textAlign:"".concat("number"===r[t].type?"right":"left")},className:M.a.bodyItem,children:r[t].field.split(",").map((function(t){return function(e){var t=e;switch(typeof e){case"boolean":Object(H.a)("formattedValue"),t=!0===e?"YES":"no"}return t}(e[t])})).join(" ")},t))},s=0;s<r.length;s++)i(s);else for(var o in e)c.push(Object(h.jsx)("div",{style:{width:"".concat(100/Object.keys(e).length,"%")},className:M.a.bodyItem,children:"boolean"===typeof e[o]?!0===e[o]?"YES":"no":e[o]},o));return a&&c.push(Object(h.jsx)("button",{style:{width:"".concat(40,"px")},className:M.a.bodyBtn,onClick:function(){n(e,t)},children:"..."},c.length)),c}()},t)}))})})]}):Object(h.jsx)(h.Fragment,{children:"empty datasource"})},Y=a(62),J=a(7),K=a(179),V=a(185),z=a(184),X=a(176),Z=a(181),$=a(56),ee=a.n($);function te(e){var t=e.detail,a=e.index,r=e.closeHandler,c=Object(n.useState)(Object(J.a)({},t)),i=Object(b.a)(c,2),s=i[0],o=i[1],u=Object(n.useState)(!1),d=Object(b.a)(u,2),l=d[0],p=d[1],j=Object(n.useState)(!1),x=Object(b.a)(j,2),v=x[0],y=x[1],g=Object(m.c)((function(e){return e.backoffice.groups})),w=Object(m.c)((function(e){return e.backoffice.units})),_=-1===a,k=Object(n.useRef)(null),C=Object(n.useRef)(null),N=function(e){var t=e.target;return o(Object(J.a)(Object(J.a)({},s),{},Object(Y.a)({},t.id,"checkbox"===t.type?t.checked:t.value)))};return Object(h.jsxs)("div",{className:ee.a.modalBackground,children:[Object(h.jsx)(Z.a,{anchorOrigin:{vertical:"top",horizontal:"left"},open:l,autoHideDuration:3e3,onClose:function(){return p(!1)},message:"Barcode is empty"}),Object(h.jsx)(Z.a,{anchorOrigin:{vertical:"top",horizontal:"left"},open:v,autoHideDuration:3e3,onClose:function(){return y(!1)},message:"Name is empty"}),Object(h.jsxs)("div",{className:ee.a.modal,children:[Object(h.jsx)("div",{className:ee.a.headerWrapper,children:Object(h.jsx)(f.a,{type:"text",ref:k,error:!s.id,required:!0,label:"Barcode",variant:"outlined",id:"id",value:s.id,onChange:N,disabled:!_})}),Object(h.jsxs)("div",{className:ee.a.inputWrapper,children:[Object(h.jsx)(f.a,{type:"text",ref:C,error:!s.name,required:!0,label:"Name",variant:"outlined",id:"name",value:s.name,onChange:N}),Object(h.jsxs)(X.a,{required:!0,children:[Object(h.jsx)(z.a,{id:"group-select-label",children:"Group"}),Object(h.jsxs)(K.a,{labelId:"group-select-label",id:"group-select",value:s.groupId,onChange:function(e){var t=e.target;o(Object(J.a)(Object(J.a)({},s),{},{groupId:t.value,groupName:g.find((function(e){return e.id===t.value})).name}))},children:["   ",g.map((function(e,t){return Object(h.jsx)(V.a,{value:e.id,children:e.name},t)}))]})]}),Object(h.jsx)(f.a,{type:"number",required:!0,label:"Price",variant:"outlined",id:"price",value:s.price,onChange:N}),Object(h.jsx)(f.a,{type:"number",required:!0,label:"Tax(%)",variant:"outlined",id:"tax",value:s.tax,onChange:N}),Object(h.jsx)(f.a,{type:"number",required:!0,label:"Remainder",variant:"outlined",id:"remainder",value:s.remainder,onChange:N}),Object(h.jsxs)(X.a,{required:!0,children:[Object(h.jsx)(z.a,{id:"unit-select-label",children:"Unit"}),Object(h.jsxs)(K.a,{labelId:"unit-select-label",id:"unit-select",value:s.unitId,onChange:function(e){var t=e.target,a=w.find((function(e){return e.id===t.value}));o(Object(J.a)(Object(J.a)({},s),{},{unitId:t.value,unitName:a.name,pieceUnit:a.pieceUnit}))},children:["   ",w.map((function(e,t){return Object(h.jsx)(V.a,{value:e.id,children:e.name},t)}))]})]}),Object(h.jsx)(f.a,{type:"text",label:"Manufacturer",variant:"outlined",id:"manufacturer",value:s.manufacturer,onChange:N}),Object(h.jsx)(f.a,{type:"text",label:"Country",variant:"outlined",id:"country",value:s.country,onChange:N})]}),Object(h.jsxs)("div",{className:"buttonWrapper",children:[Object(h.jsx)(O.a,{variant:"contained",color:"primary",onClick:function(){return function(){if(s.name)if(_){if(!s.id)return void p(!0);r(s,-1)}else r(s,a);else y(!0)}()},disableElevation:!0,children:_?"Add":"Ok"}),Object(h.jsx)(O.a,{variant:"contained",color:"default",onClick:function(){r({})},disableElevation:!0,children:_?"Close":"Cancel"}),_?Object(h.jsx)(h.Fragment,{}):Object(h.jsx)(O.a,{variant:"contained",color:"secondary",onClick:function(){r(s,-2)},disableElevation:!0,children:"Delete"})]})]})]})}var ae=function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),i=Object(b.a)(c,2),s=(i[0],i[1],Object(n.useState)({show:!1})),o=Object(b.a)(s,2),u=o[0],d=o[1],l=Object(m.b)(),p=(Object(m.c)((function(e){return e.backoffice.cashes})),Object(m.c)((function(e){return e.backoffice.groups}))),j=Object(m.c)((function(e){return e.backoffice.units})),x=Object(m.c)((function(e){return e.backoffice.products}));Object(m.c)((function(e){return e.backoffice.checks}));Object(n.useEffect)((function(){l(function(){var e=Object(y.a)(v.a.mark((function e(t){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("".concat(g,"/").concat(k)).then((function(e){return e.data}));case 3:a=e.sent,t({type:B,payload:a}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()),l(function(){var e=Object(y.a)(v.a.mark((function e(t){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("".concat(g,"/").concat("group")).then((function(e){return e.data}));case 3:a=e.sent,t({type:E,payload:a}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()),l(function(){var e=Object(y.a)(v.a.mark((function e(t){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("".concat(g,"/").concat("unit")).then((function(e){return e.data}));case 3:a=e.sent,t({type:q,payload:a}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())}),[]);var _=function(e,t){d({show:!0,product:e,index:t})};return Object(h.jsxs)(h.Fragment,{children:[u.show?Object(h.jsx)(te,{detail:u.product,index:u.index,closeHandler:function(e,t){var a,n;if(-1!==t)if(d({show:!1}),-2!==t)if(e.id)l((r=e,function(){var e=Object(y.a)(v.a.mark((function e(t){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={id:r.id,name:r.name,groupId:r.groupId,unitId:r.unitId,price:r.price,remainder:r.remainder,tax:r.tax,manufacturer:r.manufacturer,country:r.country},e.prev=1,e.next=4,N.a.put("".concat(g,"/").concat(w),a).then((function(e){return e.data}));case 4:e.sent,t({type:D,payload:r}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()));else var r;else l((n=e.id,function(){var e=Object(y.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.delete("".concat(g,"/").concat(w,"/").concat(n)).then((function(e){return e.data}));case 3:e.sent,t({type:T,payload:n}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()));else l((a=e,function(){var e=Object(y.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={id:a.id,name:a.name,groupId:a.groupId,unitId:a.unitId,price:a.price,remainder:a.remainder,tax:a.tax,manufacturer:a.manufacturer,country:a.country},e.prev=1,e.next=4,N.a.post("".concat(g,"/").concat(w),n).then((function(e){return e.data}));case 4:e.sent,t({type:S,payload:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()))}}):Object(h.jsx)(h.Fragment,{}),Object(h.jsxs)("div",{className:U.a.wrapBackoffice,children:[Object(h.jsxs)("div",{className:U.a.wrapProducts,children:[Object(h.jsx)("span",{children:"products"}),Object(h.jsxs)("div",{className:U.a.wrapProductsControl,children:[Object(h.jsx)(f.a,{required:!0,id:"outlined-required",label:"Part of barcode or name",variant:"outlined",onChange:function(e){return r(e.target.value)},value:a}),Object(h.jsx)(O.a,{variant:"contained",id:"find-products",color:"primary",onClick:function(){return l((e=a,function(){var t=Object(y.a)(v.a.mark((function t(a){var n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,N.a.get("".concat(g,"/").concat(w,"?search=").concat(e)).then((function(e){return e.data}));case 3:n=t.sent,a({type:I,payload:n}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:"Find"}),Object(h.jsx)(O.a,{variant:"contained",id:"add-product",color:"primary",onClick:function(){var e=G;p[0]&&(e.groupId=p[0].id,e.groupName=p[0].name),j[0]&&(e.unitId=j[0].id,e.unitName=j[0].name,e.pieceUnit=j[0].pieceUnit),_(e,-1)},children:"Add"})]}),Object(h.jsx)(L,{datasource:x,columns:[{field:"groupId,id,name",headerName:"Group / Code / Name",width:120},{field:"price",headerName:"Price",width:65,type:"number"},{field:"remainder",headerName:"Remainder",width:60,type:"number"},{field:"tax",headerName:"Tax %",width:30,type:"number"},{field:"country,manufacturer",headerName:"Country Manuf",width:55}],needBtn:!0,onBtnClickCallback:_})]}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:U.a.wrapGroups,children:[Object(h.jsx)("span",{children:"product groups"}),Object(h.jsx)(L,{datasource:p,needBtn:!1})]}),Object(h.jsxs)("div",{className:U.a.wrapUnits,children:[Object(h.jsx)("span",{children:"units"}),Object(h.jsx)(L,{datasource:j,needBtn:!1})]})]})]})]})},ne=a(29),re=a(25),ce=a.n(re),ie="[cash]-set-products",se="[cash]-set-info",oe="[cash]-save-check",ue="[cash]-add-detail",de="[cash]-del-detail",le="[cash]-update-detail",pe="[cash]-clear-details";a(133),a(134);var he=function(e){var t=e.detail,a=e.index,r=e.closeHandler,c=Object(n.useState)(R(t.quantity,t.pieceUnit)),i=Object(b.a)(c,2),s=i[0],o=i[1],u=Object(n.useState)(t.price.toFixed(2)),d=Object(b.a)(u,2),l=d[0],p=d[1];return Object(h.jsx)("div",{className:"modalBackground",children:Object(h.jsxs)("div",{className:"modal",children:[Object(h.jsxs)("div",{className:"headerWrapper",children:[Object(h.jsx)("span",{children:t.id}),Object(h.jsx)("span",{children:t.name})]}),Object(h.jsx)(f.a,{type:"number",required:!0,label:"Quantity",variant:"outlined",value:s,onChange:function(e){o(e.target.value)},onBlur:function(e){""===e.target.value&&o(0)}}),Object(h.jsx)(f.a,{type:"number",required:!0,label:"Price",variant:"outlined",value:l,onChange:function(e){p(e.target.value)},onBlur:function(e){""===e.target.value&&p(0)}}),Object(h.jsxs)("div",{className:"buttonWrapper",children:[Object(h.jsx)(O.a,{variant:"contained",color:"primary",onClick:function(){return function(){var e=F(s,t.pieceUnit);r(Object(J.a)(Object(J.a)({},t),{},{price:Math.floor(100*parseFloat(l))/100,quantity:e,sum:Math.floor(l*e*100)/100}),a)}()},disableElevation:!0,children:"Ok"}),Object(h.jsx)(O.a,{variant:"contained",color:"default",onClick:function(){r()},disableElevation:!0,children:"Cancel"}),Object(h.jsx)(O.a,{variant:"contained",color:"secondary",onClick:function(){r({},a)},disableElevation:!0,children:"Delete"})]})]})})},je=a(18),be=a.n(je);function fe(e){var t=e.check,a=e.details,n=e.closeHandler,r=Object(m.c)((function(e){return e.cash.cashInfo}));return Object(h.jsx)("div",{className:be.a.modalWrapper,children:Object(h.jsxs)("div",{className:be.a.modalWindow,children:[Object(h.jsxs)("div",{className:be.a.checkWrapper,children:[Object(h.jsxs)("span",{children:[" ",r.info," "]}),Object(h.jsx)("span",{children:" check "}),Object(h.jsx)("div",{className:be.a.headerWrapper,children:Object(h.jsxs)("div",{className:be.a.detailWrapper,children:[Object(h.jsx)("span",{className:be.a.spanDetailId,children:"code"}),Object(h.jsx)("span",{className:be.a.spanDetailName,children:"product name"}),Object(h.jsx)("span",{className:be.a.spanDetailPrice,children:"price"}),Object(h.jsx)("span",{className:be.a.spanDetailQuantity,children:"qnty"}),Object(h.jsx)("span",{className:be.a.spanDetailSum,children:"sum"})]})}),Object(h.jsx)("div",{className:be.a.detailsWrapper,children:a.map((function(e,t){return Object(h.jsxs)("div",{className:be.a.detailWrapper,children:[Object(h.jsx)("span",{className:be.a.spanDetailId,children:e.id}),Object(h.jsx)("span",{className:be.a.spanDetailName,children:e.name}),Object(h.jsx)("span",{className:be.a.spanDetailPrice,children:e.price}),Object(h.jsx)("span",{className:be.a.spanDetailQuantity,children:e.quantity}),Object(h.jsx)("span",{className:be.a.spanDetailSum,children:e.sum})]},t)}))}),Object(h.jsxs)("span",{className:be.a.spanTotal,children:[" TOTAL: ",W(t.sum)," "]}),Object(h.jsxs)("span",{className:be.a.spanVAT,children:[" including VAT: ",W(a.map((function(e){return e.sum*e.tax/100})).reduce((function(e,t){return e+t})))," "]})]}),Object(h.jsx)(O.a,{variant:"contained",color:"primary",onClick:n,disableElevation:!0,children:"Close"})]})})}var Oe=function(){var e=Object(m.b)(),t=Object(n.useState)(""),a=Object(b.a)(t,2),r=a[0],c=a[1];function i(){return{id:"",name:"",groupId:"",unitId:"",price:0,remainder:0,tax:0}}var s=Object(n.useState)(i),o=Object(b.a)(s,2),u=o[0],d=o[1],l=Object(n.useState)(1),p=Object(b.a)(l,2),j=p[0],x=p[1],C=Object(n.useState)({show:!1}),I=Object(b.a)(C,2),S=I[0],D=I[1],T=Object(n.useState)({show:!1}),B=Object(b.a)(T,2),E=B[0],q=B[1];Object(n.useEffect)((function(){e(function(){var e=Object(y.a)(v.a.mark((function e(t){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("".concat(g,"/").concat(w)).then((function(e){return e.data}));case 3:a=e.sent,t({type:ie,payload:a}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()),e(function(){var e=Object(y.a)(v.a.mark((function e(t){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("".concat(g,"/").concat(k,"/").concat(2)).then((function(e){return e.data}));case 3:a=e.sent,t({type:se,payload:a||{id:-1,name:"Unknown cash register with CASH_ID=".concat(2),info:""}}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())}),[]);var P=Object(m.c)((function(e){return e.cash.products})),A=Object(m.c)((function(e){return e.cash.details})),U=Object(m.c)((function(e){return e.cash.cashInfo})),G=Object(n.useRef)(null);function H(t){if(t||u&&u.id){var a=t||u,n=F(j,a.pieceUnit),r={id:a.id,name:a.name,price:a.price,quantity:n,unitId:a.unitId,sum:Math.floor(a.price*n*100)/100,tax:a.tax,groupId:a.groupId,pieceUnit:a.pieceUnit};e(function(e){return{type:ue,payload:e}}(r)),d({id:"",name:"",groupId:"",unitId:"",price:0,remainder:0,tax:0})}c(""),x(1)}function Q(){A.length&&(e({type:pe,payload:[]}),d({id:"",name:"",groupId:"",unitId:"",price:0,remainder:0,tax:0}),c(""),x(1))}function M(){if(A.length){var t=function(){return e=A.map((function(e){return e.price*e.quantity})).reduce((function(e,t){return e+t}),0),Math.round(100*e)/100;var e}();q({show:!0,check:{sum:t},details:Object(ne.a)(A)}),e(function(e,t,a,n){return function(){var r=Object(y.a)(v.a.mark((function r(c){var i,s;return v.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return i=e.map((function(e){return{productDto:{id:e.id},quantity:e.quantity,price:e.price,sum:parseFloat(e.sum)}})),s={id:String(t),cash:{id:a},dateTime:(new Date).toJSON(),details:i,sum:parseFloat(n)},r.prev=2,r.next=5,N.a.post("".concat(g,"/").concat(_),s).then((function(e){return e.data}));case 5:r.sent,c({type:oe,payload:[]}),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(2),console.log(r.t0);case 13:case"end":return r.stop()}}),r,null,[[2,10]])})));return function(e){return r.apply(this,arguments)}}()}(A,0,2,parseFloat(t)))}}Object(n.useEffect)((function(){console.log("changed details"),G.current.scrollIntoView(!1)}),[A]);var L=[{field:"_n",headerName:"\u2116",width:20},{field:"id",headerName:"Code/name",width:120},{field:"price",headerName:"Price",width:70,type:"number"},{field:"quantity",headerName:"Quantity",width:70,type:"number"},{field:"unitId",headerName:"Unit",width:35},{field:"_btn",headerName:"...",width:45}];return Object(h.jsxs)(h.Fragment,{children:[S.show?Object(h.jsx)(he,{detail:S.detail,index:S.index,closeHandler:function(t,a){D({show:!1}),t&&(t.id?e(function(e,t){return{type:le,payload:{detail:e,index:t}}}(t,a)):e(function(e){return{type:de,payload:e}}(a)))}}):Object(h.jsx)(h.Fragment,{}),E.show?Object(h.jsx)(fe,{check:E.check,details:E.details,closeHandler:function(){q({show:!1})}}):Object(h.jsx)(h.Fragment,{}),Object(h.jsxs)("div",{className:ce.a.wrapper,children:[Object(h.jsxs)("div",{className:ce.a.checkwrapper,children:[Object(h.jsxs)("div",{className:ce.a.infowrapper,children:[Object(h.jsx)("span",{children:U.name}),Object(h.jsx)("span",{children:U.info})]}),Object(h.jsx)("div",{className:ce.a.headerwrapper,children:Object(h.jsx)("div",{className:ce.a.header,children:L.map((function(e,t){return Object(h.jsxs)("span",{style:{width:"".concat(e.width,"px")},children:[e.headerName," "]},t)}))})}),Object(h.jsxs)("div",{className:ce.a.gridwrapper,children:[A.map((function(e,t){return Object(h.jsxs)("div",{className:ce.a.gridrowwrapper,children:[Object(h.jsx)("span",{style:{width:"".concat(L[0].width,"px"),textAlign:"number"===L[0].type?"right":"left"},children:t+1}),Object(h.jsxs)("span",{style:{width:"".concat(L[1].width,"px"),textAlign:"number"===L[1].type?"right":"left"},children:[e.id,Object(h.jsx)("br",{}),e.name]}),Object(h.jsx)("span",{style:{width:"".concat(L[2].width,"px"),textAlign:"number"===L[2].type?"right":"left"},children:W(e.price)}),Object(h.jsx)("span",{style:{width:"".concat(L[3].width,"px"),textAlign:"number"===L[3].type?"right":"left"},children:R(e.quantity,e.pieceUnit)}),Object(h.jsx)("span",{style:{width:"".concat(L[4].width,"px"),textAlign:"number"===L[4].type?"right":"center"},children:e.unitId}),Object(h.jsx)("button",{style:{width:"".concat(L[5].width,"px")},onClick:function(){D({show:!0,detail:e,index:t})},children:"..."})]},t)})),Object(h.jsx)("div",{ref:G})]})]}),Object(h.jsxs)("div",{className:ce.a.controlwrapper,children:[Object(h.jsxs)("div",{className:ce.a.inputwrapper,children:[Object(h.jsx)(O.a,{variant:"contained",color:"primary",onClick:function(){return function(){if(P&&P.length){var e=P.length,t=Math.floor(Math.random()*e);P[t].id,H(Object(J.a)({},P[t]))}}()},disableElevation:!0,children:"SCAN"}),Object(h.jsx)("div",{className:ce.a.productinfo,children:u&&u.id?Object(h.jsxs)(h.Fragment,{children:[u.id,"  ",Object(h.jsx)("br",{})," ",u.name," ",u.price.toFixed(2)," ",u.tax,"%"]}):Object(h.jsx)(h.Fragment,{})})]}),Object(h.jsxs)("div",{className:ce.a.inputwrapper,children:[Object(h.jsx)(f.a,{id:"inputBarcode",label:"Barcode",variant:"outlined",value:r,onChange:function(e){return c(e.target.value)}}),Object(h.jsx)(O.a,{variant:"outlined",color:"primary",onClick:function(){return function(){var e=P.find((function(e){return e.id===r}));e&&d(Object(J.a)({},e)),c("")}()},disableElevation:!0,children:"Find"}),Object(h.jsx)(f.a,{type:"number",style:{width:"120px"},id:"inputQuantity",label:"Quantity",variant:"outlined",value:j,onChange:function(e){return x(e.target.value)}}),Object(h.jsx)(O.a,{variant:"contained",color:"primary",onClick:function(){return H()},disableElevation:!0,children:"ADD"})]}),Object(h.jsxs)("div",{style:{display:"flex"},children:[Object(h.jsxs)("div",{className:ce.a.totalwrapper,children:[Object(h.jsx)("span",{children:"TOTAL"}),Object(h.jsxs)("span",{children:[W(A.map((function(e){return e.price*e.quantity})).reduce((function(e,t){return e+t}),0))," "]}),Object(h.jsx)(O.a,{variant:"contained",color:"primary",onClick:function(){return M()},disableElevation:!0,children:"PAY CHECK"})]}),Object(h.jsx)("div",{className:ce.a.cancelwrapper,children:Object(h.jsx)(O.a,{variant:"contained",color:"secondary",onClick:function(){return Q()},disableElevation:!0,children:"Clear check"})})]})]})]})]})},me=a(178),xe="[request-status] sent",ve="[request-status] succeeded",ye="[request-status] failed";var ge="[reports] set sales data",we="[reports] set group sales data",_e="[reports] set start date",ke="[reports] set finish date";function Ce(e,t){return function(){var a=Object(y.a)(v.a.mark((function a(n){var r;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n({type:xe}),a.next=4,N.a.get("".concat(g,"/").concat("report/sales","?from=").concat(e,"&to=").concat(t)).then((function(e){return e.data}));case 4:r=a.sent,n({type:ge,payload:r}),n({type:ve,payload:void 0}),a.next=13;break;case 9:a.prev=9,a.t0=a.catch(0),n((c=a.t0.message,{type:ye,payload:c})),console.dir(a.t0);case 13:case"end":return a.stop()}var c}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()}function Ne(e,t){return function(){var a=Object(y.a)(v.a.mark((function a(n){var r;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,N.a.get("".concat(g,"/").concat("report/group-sales","?from=").concat(e,"&to=").concat(t)).then((function(e){return e.data}));case 3:r=a.sent,n({type:we,payload:r}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),console.log("ERROR",a.t0);case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}()}var Ie=a(86);function Se(e){return Object(ne.a)(e).map((function(e){return{x:e.stringDate,y:e.sum}}))}function De(e){var t=[{label:"Series 1",data:Se(e)}];return Object(h.jsx)(Ie.Chart,{data:t,axes:[{primary:!0,type:"ordinal",position:"bottom"},{type:"linear",position:"left"}]})}var Te=function(){var e=Object(m.b)(),t=Object(m.c)((function(e){return e.report.sales})),a=Object(m.c)((function(e){return e.report.groupSales})),r=Object(m.c)((function(e){return e.requestStatus})),c=Object(m.c)((function(e){return e.report.from})),i=Object(m.c)((function(e){return e.report.to}));return Object(n.useEffect)((function(){e(Ce(c,i)),e(Ne(c,i))}),[]),Object(h.jsxs)("div",{style:{marginTop:"20px"},children:[Object(h.jsx)("h3",{style:{margin:"10px 0",backgroundColor:"navy",color:"white"},children:"Sales report"}),Object(h.jsxs)("label",{children:["From ",Object(h.jsx)("input",{type:"date",onChange:function(t){return e(function(e){return{type:_e,payload:e}}(t.target.value))},value:c})]}),Object(h.jsxs)("label",{children:[" to ",Object(h.jsx)("input",{type:"date",onChange:function(t){return e(function(e){return{type:ke,payload:e}}(t.target.value))},value:i})]}),Object(h.jsx)("button",{onClick:function(){e(Ce(c,i)),e(Ne(c,i))},children:"Report"}),r.requestStatus===xe?Object(h.jsx)("div",{style:{display:"flex",width:"80vw",height:"30vh",justifyContent:"center",alignItems:"center"},children:Object(h.jsx)(me.a,{})}):r.requestStatus===ye?Object(h.jsx)("div",{style:{display:"flex",width:"80vw",height:"30vh",justifyContent:"center",alignItems:"center"},children:Object(h.jsx)("span",{children:r.infoString})}):Object(h.jsx)("div",{style:{width:"80vw",height:"30vh"},children:De(t)}),Object(h.jsxs)("h3",{style:{margin:"10px 0",backgroundColor:"navy",color:"white"},children:["TOTAL :",W(a.map((function(e){return e.data.map((function(e){return e.sum})).reduce((function(e,t){return e+t}),0)})).reduce((function(e,t){return e+t}),0))]}),Object(h.jsx)("ol",{children:a.map((function(e,t){return Object(h.jsxs)("li",{children:[e.groupName,". ",Object(h.jsxs)("b",{children:["(",W(e.data.map((function(e){return e.sum})).reduce((function(e,t){return e+t}),0)),")"]}),Object(h.jsx)("ul",{children:e.data.map((function(t,a){return Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{children:t.stringDate})," \xa0\xa0 ",Object(h.jsx)("span",{style:{color:"darkgreen"},children:W(t.sum)})]},e.groupId+a)}))})]},t)}))})]})},Be=a(34),Ee=a.n(Be),qe=function(e){var t=e.history;return Object(h.jsxs)("div",{className:Ee.a.wrapper,children:[Object(h.jsx)("h2",{children:"Retail Demo Application"}),Object(h.jsx)("button",{className:"".concat(Ee.a.mrgntop30px," ").concat(Ee.a.cursorPointer),onClick:function(){return t.push(u)},children:"POS"}),Object(h.jsx)("p",{children:'The POS tab emulates a POS terminal and allows you to make sales of goods. Pressing the SCAN button simulates the reading of the product by a barcode scanner. In this case, the goods are selected in random order. You can change the quantity and price of a product by clicking the "..." button in the product line. You can also manually enter the desired barcode and immediately indicate the required quantity of goods. The generated check can be paid by pressing "PAY CHECK" or canceled by pressing "CLEAR CHECK".'}),Object(h.jsx)("button",{className:"".concat(Ee.a.mrgntop30px," ").concat(Ee.a.cursorPointer),onClick:function(){return t.push(d)},children:"BackOffice"}),Object(h.jsx)("p",{children:"The BackOffice tab allows you to search, view, add, modify and delete goods. Also, there you can see what groups of goods and units of measurement of goods are."}),Object(h.jsx)("button",{className:"".concat(Ee.a.mrgntop30px," ").concat(Ee.a.cursorPointer),onClick:function(){return t.push(l)},children:"Reports"}),Object(h.jsx)("p",{children:"On the REPORTS tab it is possible to see sales by day in the form of a chart and in the form of a report of sales by groups and dates within a certain period."}),Object(h.jsx)("h4",{className:Ee.a.mrgntop30px,children:"Backend part"}),Object(h.jsxs)("p",{children:["The backend part was implemented in Java using Spring Web and Spring Data JPA. H2 is used as a database.",Object(h.jsx)("br",{}),"GitHub: ",Object(h.jsx)("a",{href:"https://github.com/d-y-frolov/retail-backend",target:"_blank",children:"https://github.com/d-y-frolov/retail-backend"})]}),Object(h.jsx)("h4",{className:Ee.a.mrgntop30px,children:"Frontend part"}),Object(h.jsxs)("p",{children:["The frontend part is made in Javascript as a single page application using React. Redux is used as a centralized store.",Object(h.jsx)("br",{}),"GitHub: ",Object(h.jsx)("a",{href:"https://github.com/d-y-frolov/retail-frontend",target:"_blank",children:"https://github.com/d-y-frolov/retail-frontend"})]})]})};var Pe=function(){return Object(h.jsxs)(i.a,{children:[Object(h.jsx)(j,{}),Object(h.jsxs)(s.c,{children:[Object(h.jsx)(s.a,{path:u,exact:!0,component:Oe}),Object(h.jsx)(s.a,{path:d,exact:!0,component:ae}),Object(h.jsx)(s.a,{path:l,exact:!0,component:Te}),Object(h.jsx)(s.a,{path:"/",exact:!0,component:qe})]})]})},Fe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,187)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))},Re={cashInfo:{},details:[],products:[]};var We={products:[],cashes:[],groups:[],units:[],checks:[]};var Ae={sales:[],groupSales:[],from:function(){var e=new Date;return e.setMonth(e.getMonth()-1),e.toISOString().substr(0,10)}(),to:(new Date).toISOString().substr(0,10)};var Ue={requestStatus:xe,infoString:""};var Ge=a(46),He=a(87),Qe=Object(Ge.c)({cash:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case se:return{details:e.details,products:e.products,cashInfo:t.payload};case ie:return{details:e.details,products:t.payload.slice(0),cashInfo:e.cashInfo};case ue:return{details:[].concat(Object(ne.a)(e.details),[t.payload]),products:e.products,cashInfo:e.cashInfo};case le:var a=Object(ne.a)(e.details);return a[t.payload.index]=Object(J.a)({},t.payload.detail),{details:a,products:e.products,cashInfo:e.cashInfo};case de:var n=Object(ne.a)(e.details);return n.splice(t.payload,1),{details:n,products:e.products,cashInfo:e.cashInfo};case oe:return{details:t.payload,products:e.products,cashInfo:e.cashInfo};case pe:return Object(J.a)(Object(J.a)({},e),{},{details:t.payload})}return e},backoffice:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return Object(J.a)(Object(J.a)({},e),{},{products:t.payload});case S:return Object(J.a)(Object(J.a)({},e),{},{products:[t.payload].concat(Object(ne.a)(e.products))});case D:var a=t.payload,n=e.products.findIndex((function(e){return e.id===a.id})),r=Object(ne.a)(e.products);return r.splice(n,1,a),Object(J.a)(Object(J.a)({},e),{},{products:r});case T:var c=t.payload,i=e.products.findIndex((function(e){return e.id===c})),s=Object(ne.a)(e.products);return s.splice(i,1),Object(J.a)(Object(J.a)({},e),{},{products:s});case B:return Object(J.a)(Object(J.a)({},e),{},{cashes:t.payload});case E:return Object(J.a)(Object(J.a)({},e),{},{groups:t.payload});case q:return Object(J.a)(Object(J.a)({},e),{},{units:t.payload});case P:return Object(J.a)(Object(J.a)({},e),{},{checks:t.payload});default:return e}},report:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ge:return Object(J.a)(Object(J.a)({},e),{},{sales:t.payload});case we:return Object(J.a)(Object(J.a)({},e),{},{groupSales:t.payload});case _e:return Object(J.a)(Object(J.a)({},e),{},{from:t.payload});case ke:return Object(J.a)(Object(J.a)({},e),{},{to:t.payload});default:return e}},requestStatus:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case xe:return console.log("REDUCER REQUEST STATUS: "+xe),{requestStatus:xe,infoString:t.payload?t.payload:""};case ve:return console.log("REDUCER REQUEST STATUS: "+ve),{requestStatus:ve,infoString:t.payload?t.payload:""};case ye:return console.log("REDUCER REQUEST STATUS: "+ye),{requestStatus:ye,infoString:t.payload?t.payload:""};default:return e}}}),Me=Object(Ge.d)(Qe,Object(Ge.a)(He.a));c.a.render(Object(h.jsx)(m.a,{store:Me,children:Object(h.jsx)(Pe,{})}),document.getElementById("root")),Fe()},18:function(e,t,a){e.exports={modalWrapper:"Check_modalWrapper__32Jpt",modalWindow:"Check_modalWindow__2AF5-",checkWrapper:"Check_checkWrapper__2afO2",headerWrapper:"Check_headerWrapper__2mS5Q",detailsWrapper:"Check_detailsWrapper__F7vsh",detailWrapper:"Check_detailWrapper__w7yDR",spanDetailId:"Check_spanDetailId__3OWxc",spanDetailName:"Check_spanDetailName__3-QtK",spanDetailPrice:"Check_spanDetailPrice__1vjhq",spanDetailQuantity:"Check_spanDetailQuantity__S8RU1",spanDetailSum:"Check_spanDetailSum__1Fs9r",spanTotal:"Check_spanTotal__1eDEc"}},25:function(e,t,a){e.exports={wrapper:"Cash_wrapper__4hKGu",infowrapper:"Cash_infowrapper__3Sr8A",inputwrapper:"Cash_inputwrapper__2vcUu",gridwrapper:"Cash_gridwrapper__30Ovg",gridrowwrapper:"Cash_gridrowwrapper__3p87q",header:"Cash_header__3FjJz",headerwrapper:"Cash_headerwrapper__3Ep9B",totalwrapper:"Cash_totalwrapper__2LIFw",cancelwrapper:"Cash_cancelwrapper__2bUGH",productinfo:"Cash_productinfo__-EFAM"}},32:function(e,t,a){e.exports={wrapper:"TableGrid_wrapper__1NRNu",header:"TableGrid_header__31tYR",headerItem:"TableGrid_headerItem__sgaOF",headerBtn:"TableGrid_headerBtn__3QZQW",body:"TableGrid_body__3iYUO",bodyLine:"TableGrid_bodyLine__3EtDB",bodyBtn:"TableGrid_bodyBtn__1phiV",bodyItem:"TableGrid_bodyItem__2wdU-"}},34:function(e,t,a){e.exports={wrapper:"Retail_wrapper__o36Jq",mrgntop30px:"Retail_mrgntop30px__1muk4",cursorPointer:"Retail_cursorPointer__1TVhA"}},50:function(e,t,a){e.exports={wrapBackoffice:"Backoffice_wrapBackoffice__2eXYO",wrapProducts:"Backoffice_wrapProducts__2MnIw",wrapProductsControl:"Backoffice_wrapProductsControl__ghY5c",wrapGroups:"Backoffice_wrapGroups__1KdNX",wrapUnits:"Backoffice_wrapUnits__1veh_",wrapCashes:"Backoffice_wrapCashes__1hC48",wrapChecks:"Backoffice_wrapChecks__1m2oY"}},56:function(e,t,a){e.exports={modalBackground:"ProductDetail_modalBackground__rBMA_",modal:"ProductDetail_modal__2mdtm",headerWrapper:"ProductDetail_headerWrapper___7hnB",inputWrapper:"ProductDetail_inputWrapper__2nET7",buttonWrapper:"ProductDetail_buttonWrapper__3TDD-"}}},[[137,1,2]]]);
//# sourceMappingURL=main.d1ad2fa6.chunk.js.map