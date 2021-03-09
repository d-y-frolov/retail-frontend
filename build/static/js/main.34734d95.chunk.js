(this.webpackJsonpretail=this.webpackJsonpretail||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},126:function(e,t,a){},127:function(e,t,a){},128:function(e,t,a){},131:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),o=a.n(c),i=(a(98),a(99),a(48)),s=a(15),d=a(170),u="/cash",l="/backoffice",p="/reports",h=[{path:u,label:"POS"},{path:l,label:"BackOffice"},{path:p,label:"Reports"},{path:"/",label:"About"}],b=(a(100),a(101),a(2)),j=function(){return Object(b.jsx)("nav",{children:h.map((function(e,t){return Object(b.jsx)(d.a,{component:i.b,exact:!0,to:e.path,style:{margin:20},children:e.label},t)}))})},f=a(19),O=a(171),x=a(168),m=a(13),v=a(8),g=a.n(v),y=a(17),w="https://retail-back-end.herokuapp.com/",_="product",k="check",C="cash-register",N=a(18),I=a.n(N),E="[backoffice]-get-products",D="[backoffice]-add-product",P="[backoffice]-update-product",S="[backoffice]-remove-product",B="[backoffice]-get-cashes",R="[backoffice]-get-groups",A="[backoffice]-get-units",T="[backoffice]-get-checks";function F(e,t){return t?parseInt(e):parseFloat(e)}function q(e,t){return t?parseInt(e).toFixed(0):parseFloat(e).toFixed(3)}function U(e){return(Math.round(100*e)/100).toLocaleString("iw-en",{style:"currency",currency:"ILS"})}a(126);var M=a(47),L=a.n(M),G={id:"",name:"",groupId:"",groupName:"",unitId:"",unitName:"",tax:0,price:0,remainder:0,manufacturer:"",country:"",pieceUnit:!0};var W=a(81),H=a(28),Y=a.n(H),V=function(e){var t=e.datasource,a=e.needBtn,n=e.onBtnClickCallback,r=e.columns;function c(e){var t=e;switch(typeof e){case"boolean":Object(W.a)("formattedValue"),t=!0===e?"YES":"no"}return t}return 0!==t.length||r?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:Y.a.header,children:function(){var e=[];if(r)for(var n=0;n<r.length;n++)e.push(Object(b.jsx)("div",{style:{width:"".concat(r[n].width,"px")},className:Y.a.headerItem,children:r[n].headerName},n));else{var c=t[0];for(var o in c)e.push(Object(b.jsx)("div",{style:{width:"".concat(100/Object.keys(c).length,"%")},className:Y.a.headerItem,children:o},o))}return e.push(Object(b.jsx)("div",{style:{width:"".concat(20+(a?40:0),"px")},className:Y.a.headerBtn,children:"\xa0"},e.length)),e}()}),Object(b.jsx)("div",{className:Y.a.wrapper,children:Object(b.jsx)("div",{className:Y.a.body,children:t.map((function(e,t){return Object(b.jsx)("div",{className:Y.a.bodyLine,children:function(){var o=[];if(r)for(var i=0;i<r.length;i++)o.push(Object(b.jsx)("div",{style:{width:"".concat(r[i].width,"px"),textAlign:"".concat("number"===r[i].type?"right":"left")},className:Y.a.bodyItem,children:c(e[r[i].field])},i));else for(var s in e)o.push(Object(b.jsx)("div",{style:{width:"".concat(100/Object.keys(e).length,"%")},className:Y.a.bodyItem,children:"boolean"===typeof e[s]?!0===e[s]?"YES":"no":e[s]},s));return a&&o.push(Object(b.jsx)("button",{style:{width:"".concat(40,"px")},className:Y.a.bodyBtn,onClick:function(){n(e,t)},children:"..."},o.length)),o}()},t)}))})})]}):Object(b.jsx)(b.Fragment,{children:"empty datasource"})},J=a(57),K=a(5),Q=a(169),X=a(173),z=a(172),Z=a(167),$=a(52),ee=a.n($);function te(e){var t=e.detail,a=e.index,r=e.closeHandler,c=Object(n.useState)(Object(K.a)({},t)),o=Object(f.a)(c,2),i=o[0],s=o[1];console.log("InProductDetail:",t,a);var d=Object(m.c)((function(e){return e.backoffice.groups})),u=Object(m.c)((function(e){return e.backoffice.units})),l=-1===a,p=function(e){var t=e.target;return s(Object(K.a)(Object(K.a)({},i),{},Object(J.a)({},t.id,"checkbox"===t.type?t.checked:t.value)))};return Object(b.jsx)("div",{className:ee.a.modalBackground,children:Object(b.jsxs)("div",{className:ee.a.modal,children:[Object(b.jsx)("div",{className:ee.a.headerWrapper,children:Object(b.jsx)(O.a,{type:"text",required:!0,label:"Barcode",variant:"outlined",id:"id",value:i.id,onChange:p,disabled:!l})}),Object(b.jsxs)("div",{className:ee.a.inputWrapper,children:[Object(b.jsx)(O.a,{type:"text",required:!0,label:"Name",variant:"outlined",id:"name",value:i.name,onChange:p}),Object(b.jsxs)(Z.a,{required:!0,children:[Object(b.jsx)(z.a,{id:"group-select-label",children:"Group"}),Object(b.jsxs)(Q.a,{labelId:"group-select-label",id:"group-select",value:i.groupId,onChange:function(e){var t=e.target;s(Object(K.a)(Object(K.a)({},i),{},{groupId:t.value,groupName:d.find((function(e){return e.id===t.value})).name}))},children:["   ",d.map((function(e,t){return Object(b.jsx)(X.a,{value:e.id,children:e.name},t)}))]})]}),Object(b.jsx)(O.a,{type:"number",required:!0,label:"Price",variant:"outlined",id:"price",value:i.price,onChange:p}),Object(b.jsx)(O.a,{type:"number",required:!0,label:"Tax(%)",variant:"outlined",id:"tax",value:i.tax,onChange:p}),Object(b.jsx)(O.a,{type:"number",required:!0,label:"Remainder",variant:"outlined",id:"remainder",value:i.remainder,onChange:p}),Object(b.jsxs)(Z.a,{required:!0,children:[Object(b.jsx)(z.a,{id:"unit-select-label",children:"Unit"}),Object(b.jsxs)(Q.a,{labelId:"unit-select-label",id:"unit-select",value:i.unitId,onChange:function(e){var t=e.target,a=u.find((function(e){return e.id===t.value}));s(Object(K.a)(Object(K.a)({},i),{},{unitId:t.value,unitName:a.name,pieceUnit:a.pieceUnit}))},children:["   ",u.map((function(e,t){return Object(b.jsx)(X.a,{value:e.id,children:e.name},t)}))]})]}),Object(b.jsx)(O.a,{type:"text",label:"Manufacturer",variant:"outlined",id:"manufacturer",value:i.manufacturer,onChange:p}),Object(b.jsx)(O.a,{type:"text",label:"Country",variant:"outlined",id:"country",value:i.country,onChange:p})]}),Object(b.jsxs)("div",{className:"buttonWrapper",children:[Object(b.jsx)(x.a,{variant:"contained",color:"primary",onClick:function(){r(i,l?-1:a)},disableElevation:!0,children:l?"Add":"Ok"}),Object(b.jsx)(x.a,{variant:"contained",color:"default",onClick:function(){r({})},disableElevation:!0,children:l?"Close":"Cancel"}),l?Object(b.jsx)(b.Fragment,{}):Object(b.jsx)(x.a,{variant:"contained",color:"secondary",onClick:function(){r(i,-2)},disableElevation:!0,children:"Delete"})]})]})})}var ae=function(){var e=Object(n.useState)(""),t=Object(f.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),o=Object(f.a)(c,2),i=(o[0],o[1],Object(n.useState)({show:!1})),s=Object(f.a)(i,2),d=s[0],u=s[1],l=Object(m.b)(),p=(Object(m.c)((function(e){return e.backoffice.cashes})),Object(m.c)((function(e){return e.backoffice.groups}))),h=Object(m.c)((function(e){return e.backoffice.units})),j=Object(m.c)((function(e){return e.backoffice.products}));Object(m.c)((function(e){return e.backoffice.checks}));Object(n.useEffect)((function(){l(function(){var e=Object(y.a)(g.a.mark((function e(t){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.get("".concat(w,"/").concat(C)).then((function(e){return e.data}));case 3:a=e.sent,t({type:B,payload:a}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()),l(function(){var e=Object(y.a)(g.a.mark((function e(t){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.get("".concat(w,"/").concat("group")).then((function(e){return e.data}));case 3:a=e.sent,t({type:R,payload:a}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()),l(function(){var e=Object(y.a)(g.a.mark((function e(t){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.get("".concat(w,"/").concat("unit")).then((function(e){return e.data}));case 3:a=e.sent,t({type:A,payload:a}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())}),[]);var v=function(e,t){u({show:!0,product:e,index:t})};return Object(b.jsxs)(b.Fragment,{children:[d.show?Object(b.jsx)(te,{detail:d.product,index:d.index,closeHandler:function(e,t){return-1===t?(console.log("After ProductDetail ADD_PRODUCT: ",e,t),void l((a=e,function(){var e=Object(y.a)(g.a.mark((function e(t){var n,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={id:a.id,name:a.name,groupId:a.groupId,unitId:a.unitId,price:a.price,remainder:a.remainder,tax:a.tax,manufacturer:a.manufacturer,country:a.country},e.prev=1,e.next=4,I.a.post("".concat(w,"/").concat(_),n).then((function(e){return e.data}));case 4:r=e.sent,console.log(r),t({type:D,payload:a}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()))):(u({show:!1}),-2===t?(console.log("After ProductDetail REMOVE_PRODUCT: ",e,t),void l((n=e.id,function(){var e=Object(y.a)(g.a.mark((function e(t){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.delete("".concat(w,"/").concat(_,"/").concat(n)).then((function(e){return e.data}));case 3:a=e.sent,console.log(a),console.log("ACTIONS_REMOVE_PRODUCT:ID="+n),t({type:S,payload:n}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()))):e.id?(console.log("After ProductDetail UPDATE_PRODUCT: ",e,t),void l((r=e,function(){var e=Object(y.a)(g.a.mark((function e(t){var a,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={id:r.id,name:r.name,groupId:r.groupId,unitId:r.unitId,price:r.price,remainder:r.remainder,tax:r.tax,manufacturer:r.manufacturer,country:r.country},e.prev=1,e.next=4,I.a.put("".concat(w,"/").concat(_),a).then((function(e){return e.data}));case 4:n=e.sent,console.log(n),t({type:P,payload:r}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()))):void console.log("After ProductDetail CANCEL: ",e,t));var a,n,r}}):Object(b.jsx)(b.Fragment,{}),Object(b.jsxs)("div",{className:L.a.wrapBackoffice,children:[Object(b.jsxs)("div",{className:L.a.wrapProducts,children:[Object(b.jsx)("span",{children:"products"}),Object(b.jsxs)("div",{className:L.a.wrapProductsControl,children:[Object(b.jsx)(O.a,{required:!0,id:"outlined-required",label:"Part of barcode or name",variant:"outlined",onChange:function(e){return r(e.target.value)},value:a}),Object(b.jsx)(x.a,{variant:"contained",id:"find-products",color:"primary",onClick:function(){return l((e=a,function(){var t=Object(y.a)(g.a.mark((function t(a){var n;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,I.a.get("".concat(w,"/").concat(_,"?search=").concat(e)).then((function(e){return e.data}));case 3:n=t.sent,a({type:E,payload:n}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:"Find"}),Object(b.jsx)(x.a,{variant:"contained",id:"add-product",color:"primary",onClick:function(){v(G,-1)},children:"Add"})]}),Object(b.jsx)(V,{datasource:j,columns:[{field:"id",headerName:"Code",width:120},{field:"name",headerName:"Name",width:120},{field:"groupId",headerName:"Group",width:50},{field:"price",headerName:"Price",width:80,type:"number"},{field:"remainder",headerName:"Remainder",width:70,type:"number"},{field:"unitId",headerName:"Unit",width:50},{field:"tax",headerName:"Tax %",width:30,type:"number"},{field:"country",headerName:"Country",width:70},{field:"manufacturer",headerName:"Manufact",width:70}],needBtn:!0,onBtnClickCallback:v})]}),Object(b.jsxs)("div",{className:L.a.wrapGroups,children:[Object(b.jsx)("span",{children:"product groups"}),Object(b.jsx)(V,{datasource:p,needBtn:!1})]}),Object(b.jsxs)("div",{className:L.a.wrapUnits,children:[Object(b.jsx)("span",{children:"units"}),Object(b.jsx)(V,{datasource:h,needBtn:!1})]})]})]})},ne=a(20),re=a.n(ne),ce="[cash]-set-products",oe="[cash]-set-info",ie="[cash]-save-check",se="[cash]-add-detail",de="[cash]-del-detail",ue="[cash]-update-detail",le="[cash]-clear-details";a(127),a(128);var pe=function(e){var t=e.detail,a=e.index,r=e.closeHandler;console.log("PROPS",t,a,r);var c=Object(n.useState)(q(t.quantity,t.pieceUnit)),o=Object(f.a)(c,2),i=o[0],s=o[1],d=Object(n.useState)(t.price.toFixed(2)),u=Object(f.a)(d,2),l=u[0],p=u[1];return Object(b.jsx)("div",{className:"modalBackground",children:Object(b.jsxs)("div",{className:"modal",children:[Object(b.jsxs)("div",{className:"headerWrapper",children:[Object(b.jsx)("span",{children:t.id}),Object(b.jsx)("span",{children:t.name})]}),Object(b.jsx)(O.a,{type:"number",required:!0,label:"Quantity",variant:"outlined",value:i,onChange:function(e){return s(e.target.value)}}),Object(b.jsx)(O.a,{type:"number",required:!0,label:"Price",variant:"outlined",value:l,onChange:function(e){return p(e.target.value)}}),Object(b.jsxs)("div",{className:"buttonWrapper",children:[Object(b.jsx)(x.a,{variant:"contained",color:"primary",onClick:function(){return function(){var e=F(i,t.pieceUnit);r(Object(K.a)(Object(K.a)({},t),{},{price:Math.floor(100*parseFloat(l))/100,quantity:e,sum:Math.floor(l*e*100)/100}),a)}()},disableElevation:!0,children:"Ok"}),Object(b.jsx)(x.a,{variant:"contained",color:"default",onClick:function(){r()},disableElevation:!0,children:"Cancel"}),Object(b.jsx)(x.a,{variant:"contained",color:"secondary",onClick:function(){r({},a)},disableElevation:!0,children:"Delete"})]})]})})},he=function(){var e=Object(m.b)(),t=Object(n.useState)(""),a=Object(f.a)(t,2),r=a[0],c=a[1];function o(){return{id:"",name:"",groupId:"",unitId:"",price:0,remainder:0,tax:0}}var i=Object(n.useState)(o),s=Object(f.a)(i,2),d=s[0],u=s[1],l=Object(n.useState)(1),p=Object(f.a)(l,2),h=p[0],j=p[1],v=Object(n.useState)({show:!1}),N=Object(f.a)(v,2),E=N[0],D=N[1];Object(n.useEffect)((function(){e(function(){var e=Object(y.a)(g.a.mark((function e(t){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.get("".concat(w,"/").concat(_)).then((function(e){return e.data}));case 3:a=e.sent,t({type:ce,payload:a}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()),e(function(){var e=Object(y.a)(g.a.mark((function e(t){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.get("".concat(w,"/").concat(C,"/").concat(2)).then((function(e){return e.data}));case 3:a=e.sent,console.log("CASH_INFO",a),t({type:oe,payload:a||{id:-1,name:"Unknown cash register with CASH_ID=".concat(2),info:""}}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[]);var P=Object(m.c)((function(e){return e.cash.products})),S=Object(m.c)((function(e){return e.cash.details})),B=Object(m.c)((function(e){return e.cash.cashInfo})),R=Object(n.useRef)(null);function A(t){if(t||d&&d.id){var a=t||d,n=F(h,a.pieceUnit),r={id:a.id,name:a.name,price:a.price,quantity:n,unitId:a.unitId,sum:Math.floor(a.price*n*100)/100,tax:a.tax,groupId:a.groupId,pieceUnit:a.pieceUnit};e(function(e){return{type:se,payload:e}}(r)),u({id:"",name:"",groupId:"",unitId:"",price:0,remainder:0,tax:0})}c(""),j(1)}function T(){S.length&&(e({type:le,payload:[]}),u({id:"",name:"",groupId:"",unitId:"",price:0,remainder:0,tax:0}),c(""),j(1))}function M(){S.length&&e(function(e,t,a,n){return function(){var r=Object(y.a)(g.a.mark((function r(c){var o,i,s;return g.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=e.map((function(e){return{productDto:{id:e.id},quantity:e.quantity,price:e.price,sum:parseFloat(e.sum)}})),i={id:String(t),cash:{id:a},dateTime:(new Date).toJSON(),details:o,sum:parseFloat(n)},console.log("CHECK BODY:",i),r.prev=3,r.next=6,I.a.post("".concat(w,"/").concat(k),i).then((function(e){return e.data}));case 6:s=r.sent,console.log(s),c({type:ie,payload:[]}),r.next=15;break;case 12:r.prev=12,r.t0=r.catch(3),console.log(r.t0);case 15:case"end":return r.stop()}}),r,null,[[3,12]])})));return function(e){return r.apply(this,arguments)}}()}(S,0,2,parseFloat(function(){return e=S.map((function(e){return e.price*e.quantity})).reduce((function(e,t){return e+t}),0),Math.round(100*e)/100;var e}())))}Object(n.useEffect)((function(){console.log("changed details"),R.current.scrollIntoView(!1)}),[S]);var L=[{field:"_n",headerName:"\u2116",width:20},{field:"id",headerName:"Code",width:120},{field:"name",headerName:"Name",width:120},{field:"price",headerName:"Price",width:80,type:"number"},{field:"quantity",headerName:"Quantity",width:80,type:"number"},{field:"unitId",headerName:"Unit",width:50},{field:"_btn",headerName:"...",width:80}];return Object(b.jsxs)(b.Fragment,{children:[E.show?Object(b.jsx)(pe,{detail:E.detail,index:E.index,closeHandler:function(t,a){if(D({show:!1}),t){if(!t.id)return console.log("EditDetail result: DELETE"),void e(function(e){return{type:de,payload:e}}(a));console.log("EditDetail result: OK"),e(function(e,t){return{type:ue,payload:{detail:e,index:t}}}(t,a))}else console.log("EditDetail result: CANCEL")}}):Object(b.jsx)(b.Fragment,{}),Object(b.jsxs)("div",{className:re.a.wrapper,children:[Object(b.jsxs)("div",{className:re.a.checkwrapper,children:[Object(b.jsxs)("div",{className:re.a.infowrapper,children:[Object(b.jsx)("span",{children:B.name}),Object(b.jsx)("span",{children:B.info})]}),Object(b.jsx)("div",{className:re.a.headerwrapper,children:Object(b.jsx)("div",{className:re.a.header,children:L.map((function(e,t){return Object(b.jsxs)("span",{style:{width:"".concat(e.width,"px")},children:[e.headerName," "]},t)}))})}),Object(b.jsxs)("div",{className:re.a.gridwrapper,children:[S.map((function(e,t){return Object(b.jsxs)("div",{className:re.a.gridrowwrapper,children:[Object(b.jsx)("span",{style:{width:"".concat(L[0].width,"px"),textAlign:"number"===L[0].type?"right":"left"},children:t+1}),Object(b.jsx)("span",{style:{width:"".concat(L[1].width,"px"),textAlign:"number"===L[1].type?"right":"left"},children:e.id}),Object(b.jsx)("span",{style:{width:"".concat(L[2].width,"px"),textAlign:"number"===L[2].type?"right":"left"},children:e.name}),Object(b.jsx)("span",{style:{width:"".concat(L[3].width,"px"),textAlign:"number"===L[3].type?"right":"left"},children:U(e.price)}),Object(b.jsx)("span",{style:{width:"".concat(L[4].width,"px"),textAlign:"number"===L[4].type?"right":"left"},children:q(e.quantity,e.pieceUnit)}),Object(b.jsx)("span",{style:{width:"".concat(L[5].width,"px"),textAlign:"number"===L[5].type?"right":"left"},children:e.unitId}),Object(b.jsx)(x.a,{variant:"outlined",disableElevation:!0,onClick:function(){D({show:!0,detail:e,index:t})},children:"..."})]},t)})),Object(b.jsx)("div",{ref:R})]})]}),Object(b.jsxs)("div",{className:re.a.controlwrapper,children:[Object(b.jsxs)("div",{className:re.a.inputwrapper,children:[Object(b.jsx)(x.a,{variant:"contained",color:"primary",onClick:function(){return function(){if(P&&P.length){var e=P.length,t=Math.floor(Math.random()*e),a=P[t].id;console.log(e,t,a,P,P[t]),A(Object(K.a)({},P[t]))}}()},disableElevation:!0,children:"SCAN"}),Object(b.jsx)("div",{className:re.a.productinfo,children:d&&d.id?Object(b.jsxs)(b.Fragment,{children:[d.id,"  ",Object(b.jsx)("br",{})," ",d.name," ",d.price.toFixed(2)," ",d.tax,"%"]}):Object(b.jsx)(b.Fragment,{})})]}),Object(b.jsxs)("div",{className:re.a.inputwrapper,children:[Object(b.jsx)(O.a,{required:!0,id:"outlined-required",label:"Barcode",variant:"outlined",value:r,onChange:function(e){return c(e.target.value)}}),Object(b.jsx)(x.a,{variant:"outlined",color:"primary",onClick:function(){return function(){var e=P.find((function(e){return e.id===r}));e&&u(Object(K.a)({},e)),c("")}()},disableElevation:!0,children:"Find"}),Object(b.jsx)(O.a,{type:"number",required:!0,id:"outlined-required",label:"Quantity",variant:"outlined",value:h,onChange:function(e){return j(e.target.value)}}),Object(b.jsx)(x.a,{variant:"contained",color:"primary",onClick:function(){return A()},disableElevation:!0,children:"ADD"})]}),Object(b.jsxs)("div",{style:{display:"flex"},children:[Object(b.jsxs)("div",{className:re.a.totalwrapper,children:[Object(b.jsx)("span",{children:"TOTAL"}),Object(b.jsxs)("span",{children:[U(S.map((function(e){return e.price*e.quantity})).reduce((function(e,t){return e+t}),0))," "]}),Object(b.jsx)(x.a,{variant:"contained",color:"primary",onClick:function(){return M()},disableElevation:!0,children:"Done / PAY CHECK"})]}),Object(b.jsx)("div",{className:re.a.cancelwrapper,children:Object(b.jsx)(x.a,{variant:"contained",color:"secondary",onClick:function(){return T()},disableElevation:!0,children:"Cancel / Clear check"})})]})]})]})]})},be=a(23),je="[reports] set sales data",fe="[reports] set group sales data",Oe="[reports] set start date",xe="[reports] set finish date";function me(e,t){return function(){var a=Object(y.a)(g.a.mark((function a(n){var r;return g.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,I.a.get("".concat(w,"/").concat("report/sales","?from=").concat(e,"&to=").concat(t)).then((function(e){return e.data}));case 3:r=a.sent,n({type:je,payload:r}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),console.log("ERROR",a.t0);case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}()}function ve(e,t){return function(){var a=Object(y.a)(g.a.mark((function a(n){var r;return g.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,I.a.get("".concat(w,"/").concat("report/group-sales","?from=").concat(e,"&to=").concat(t)).then((function(e){return e.data}));case 3:r=a.sent,n({type:fe,payload:r}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),console.log("ERROR",a.t0);case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}()}var ge=a(82);function ye(e){return Object(be.a)(e).map((function(e){return{x:e.stringDate,y:e.sum}}))}function we(e){console.log(e);var t=[{label:"Series 1",data:ye(e)}],a=r.a.useMemo((function(){return[{primary:!0,type:"ordinal",position:"bottom"},{type:"linear",position:"left"}]}),[]);return Object(b.jsx)("div",{style:{width:"80vw",height:"30vh"},children:Object(b.jsx)(ge.Chart,{data:t,axes:a})})}var _e=function(){var e=Object(m.b)(),t=Object(m.c)((function(e){return e.report.sales})),a=Object(m.c)((function(e){return e.report.groupSales})),r=Object(m.c)((function(e){return e.report.from})),c=Object(m.c)((function(e){return e.report.to}));return Object(n.useEffect)((function(){e(me(r,c)),e(ve(r,c))}),[]),Object(b.jsxs)("div",{style:{marginTop:"20px"},children:[Object(b.jsx)("h3",{style:{margin:"10px 0",backgroundColor:"navy",color:"white"},children:"Sales report"}),Object(b.jsxs)("label",{children:["From ",Object(b.jsx)("input",{type:"date",onChange:function(t){return e(function(e){return{type:Oe,payload:e}}(t.target.value))},value:r})]}),Object(b.jsxs)("label",{children:[" to ",Object(b.jsx)("input",{type:"date",onChange:function(t){return e(function(e){return{type:xe,payload:e}}(t.target.value))},value:c})]}),Object(b.jsx)("button",{onClick:function(){e(me(r,c)),e(ve(r,c))},children:"Report"}),we(t),console.log(t),Object(b.jsxs)("h3",{style:{margin:"10px 0",backgroundColor:"navy",color:"white"},children:["TOTAL :",U(a.map((function(e){return e.data.map((function(e){return e.sum})).reduce((function(e,t){return e+t}),0)})).reduce((function(e,t){return e+t}),0))]}),Object(b.jsx)("ol",{children:a.map((function(e,t){return Object(b.jsxs)("li",{children:[e.groupName,". ",Object(b.jsxs)("b",{children:["(",U(e.data.map((function(e){return e.sum})).reduce((function(e,t){return e+t}),0)),")"]}),Object(b.jsx)("ul",{children:e.data.map((function(t,a){return Object(b.jsxs)("li",{children:[Object(b.jsx)("span",{children:t.stringDate})," \xa0\xa0 ",Object(b.jsx)("span",{style:{color:"darkgreen"},children:U(t.sum)})]},e.groupId+a)}))})]},t)}))})]})},ke=a(31),Ce=a.n(ke),Ne=function(e){var t=e.history;return Object(b.jsxs)("div",{className:Ce.a.wrapper,children:[Object(b.jsx)("h2",{children:"Retail Demo Application"}),Object(b.jsx)("button",{className:"".concat(Ce.a.mrgntop30px," ").concat(Ce.a.cursorPointer),onClick:function(){return t.push(u)},children:"POS"}),Object(b.jsx)("p",{children:'The POS tab emulates a POS terminal and allows you to make sales of goods. Pressing the SCAN button simulates the reading of the product by a barcode scanner. In this case, the goods are selected in random order. You can change the quantity and price of a product by clicking the "..." button in the product line. You can also manually enter the desired barcode and immediately indicate the required quantity of goods. The generated check can be paid by pressing "DONE / PAY CHECK" or canceled by pressing "CANCEL / CLEAR CHECK".'}),Object(b.jsx)("button",{className:"".concat(Ce.a.mrgntop30px," ").concat(Ce.a.cursorPointer),onClick:function(){return t.push(l)},children:"BackOffice"}),Object(b.jsx)("p",{children:"The BackOffice tab allows you to search, view, add, modify and delete goods. Also, there you can see what groups of goods and units of measurement of goods are."}),Object(b.jsx)("button",{className:"".concat(Ce.a.mrgntop30px," ").concat(Ce.a.cursorPointer),onClick:function(){return t.push(p)},children:"Reports"}),Object(b.jsx)("p",{children:"On the REPORTS tab it is possible to see sales by day in the form of a chart and in the form of a report of sales by groups and dates within a certain period."}),Object(b.jsx)("h4",{className:Ce.a.mrgntop30px,children:"Backend part"}),Object(b.jsx)("p",{children:"The backend part was implemented in Java using Spring Web and Spring Data JPA. H2 is used as a database."}),Object(b.jsx)("h4",{className:Ce.a.mrgntop30px,children:"Frontend part"}),Object(b.jsx)("p",{children:"The frontend part is made in Javascript as a single page application using React. Redux is used as a centralized store."})]})};var Ie=function(){return Object(b.jsxs)(i.a,{children:[Object(b.jsx)(j,{}),Object(b.jsxs)(s.c,{children:[Object(b.jsx)(s.a,{path:u,exact:!0,component:he}),Object(b.jsx)(s.a,{path:l,exact:!0,component:ae}),Object(b.jsx)(s.a,{path:p,exact:!0,component:_e}),Object(b.jsx)(s.a,{path:"/",exact:!0,component:Ne})]})]})},Ee=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,175)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),c(e),o(e)}))},De={cashInfo:{},details:[],products:[]};var Pe={products:[],cashes:[],groups:[],units:[],checks:[]};var Se={sales:[],groupSales:[],from:function(){var e=new Date;return e.setMonth(e.getMonth()-1),e.toISOString().substr(0,10)}(),to:(new Date).toISOString().substr(0,10)};var Be=a(43),Re=a(83),Ae=Object(Be.c)({cash:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case oe:return{details:e.details,products:e.products,cashInfo:t.payload};case ce:return{details:e.details,products:t.payload.slice(0),cashInfo:e.cashInfo};case se:return{details:[].concat(Object(be.a)(e.details),[t.payload]),products:e.products,cashInfo:e.cashInfo};case ue:var a=Object(be.a)(e.details);return a[t.payload.index]=Object(K.a)({},t.payload.detail),{details:a,products:e.products,cashInfo:e.cashInfo};case de:var n=Object(be.a)(e.details);return n.splice(t.payload,1),{details:n,products:e.products,cashInfo:e.cashInfo};case ie:return{details:t.payload,products:e.products,cashInfo:e.cashInfo};case le:return Object(K.a)(Object(K.a)({},e),{},{details:t.payload})}return e},backoffice:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return console.log(Object(K.a)(Object(K.a)({},e),{},{products:t.payload})),Object(K.a)(Object(K.a)({},e),{},{products:t.payload});case D:return console.log(Object(K.a)(Object(K.a)({},e),{},{products:[t.payload].concat(Object(be.a)(e.products))})),Object(K.a)(Object(K.a)({},e),{},{products:[t.payload].concat(Object(be.a)(e.products))});case P:var a=t.payload,n=e.products.findIndex((function(e){return e.id===a.id})),r=Object(be.a)(e.products);return r.splice(n,1,a),console.log(Object(K.a)(Object(K.a)({},e),{},{products:r})),Object(K.a)(Object(K.a)({},e),{},{products:r});case S:var c=t.payload,o=e.products.findIndex((function(e){return e.id===c})),i=Object(be.a)(e.products);return console.log("REDUCER REMOVE PRODUCT: ID="+c+", INDEX="+o,Object(be.a)(i)),i.splice(o,1),console.log("REDUCER REMOVE PRODUCT: AFTER SPLICE: ",Object(be.a)(i)),console.log(Object(K.a)(Object(K.a)({},e),{},{products:i})),Object(K.a)(Object(K.a)({},e),{},{products:i});case B:return console.log(Object(K.a)(Object(K.a)({},e),{},{cashes:t.payload})),Object(K.a)(Object(K.a)({},e),{},{cashes:t.payload});case R:return console.log(Object(K.a)(Object(K.a)({},e),{},{groups:t.payload})),Object(K.a)(Object(K.a)({},e),{},{groups:t.payload});case A:return console.log(Object(K.a)(Object(K.a)({},e),{},{units:t.payload})),Object(K.a)(Object(K.a)({},e),{},{units:t.payload});case T:return console.log(Object(K.a)(Object(K.a)({},e),{},{checks:t.payload})),Object(K.a)(Object(K.a)({},e),{},{checks:t.payload});default:return console.log(e),e}},report:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case je:return Object(K.a)(Object(K.a)({},e),{},{sales:t.payload});case fe:return Object(K.a)(Object(K.a)({},e),{},{groupSales:t.payload});case Oe:return Object(K.a)(Object(K.a)({},e),{},{from:t.payload});case xe:return Object(K.a)(Object(K.a)({},e),{},{to:t.payload});default:return e}}}),Te=Object(Be.d)(Ae,Object(Be.a)(Re.a));o.a.render(Object(b.jsx)(m.a,{store:Te,children:Object(b.jsx)(Ie,{})}),document.getElementById("root")),Ee()},20:function(e,t,a){e.exports={wrapper:"Cash_wrapper__4hKGu",infowrapper:"Cash_infowrapper__3Sr8A",inputwrapper:"Cash_inputwrapper__2vcUu",gridwrapper:"Cash_gridwrapper__30Ovg",gridrowwrapper:"Cash_gridrowwrapper__3p87q",header:"Cash_header__3FjJz",headerwrapper:"Cash_headerwrapper__3Ep9B",totalwrapper:"Cash_totalwrapper__2LIFw",cancelwrapper:"Cash_cancelwrapper__2bUGH",productinfo:"Cash_productinfo__-EFAM"}},28:function(e,t,a){e.exports={wrapper:"TableGrid_wrapper__1NRNu",header:"TableGrid_header__31tYR",headerItem:"TableGrid_headerItem__sgaOF",headerBtn:"TableGrid_headerBtn__3QZQW",body:"TableGrid_body__3iYUO",bodyLine:"TableGrid_bodyLine__3EtDB",bodyBtn:"TableGrid_bodyBtn__1phiV",bodyItem:"TableGrid_bodyItem__2wdU-"}},31:function(e,t,a){e.exports={wrapper:"Retail_wrapper__o36Jq",mrgntop30px:"Retail_mrgntop30px__1muk4",cursorPointer:"Retail_cursorPointer__1TVhA"}},47:function(e,t,a){e.exports={wrapBackoffice:"Backoffice_wrapBackoffice__2eXYO",wrapProducts:"Backoffice_wrapProducts__2MnIw",wrapProductsControl:"Backoffice_wrapProductsControl__ghY5c","add-product":"Backoffice_add-product__ciqV8",wrapGroups:"Backoffice_wrapGroups__1KdNX",wrapUnits:"Backoffice_wrapUnits__1veh_",wrapCashes:"Backoffice_wrapCashes__1hC48",wrapChecks:"Backoffice_wrapChecks__1m2oY"}},52:function(e,t,a){e.exports={modalBackground:"ProductDetail_modalBackground__rBMA_",modal:"ProductDetail_modal__2mdtm",headerWrapper:"ProductDetail_headerWrapper___7hnB",inputWrapper:"ProductDetail_inputWrapper__2nET7",buttonWrapper:"ProductDetail_buttonWrapper__3TDD-"}},98:function(e,t,a){},99:function(e,t,a){}},[[131,1,2]]]);
//# sourceMappingURL=main.34734d95.chunk.js.map