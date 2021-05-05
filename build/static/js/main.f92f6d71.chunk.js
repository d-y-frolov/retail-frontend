(this.webpackJsonpretail=this.webpackJsonpretail||[]).push([[0],{106:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},109:function(e,t,a){},134:function(e,t,a){},135:function(e,t,a){},136:function(e,t,a){},139:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(10),c=a.n(r),s=(a(106),a(107),a(51)),i=a(15),o=a(182),u="/cash",d="/backoffice",l="/reports",p=[{path:u,label:"POS"},{path:d,label:"BackOffice"},{path:l,label:"Reports"},{path:"/",label:"About"}],h=(a(108),a(109),a(2)),j=function(){return Object(h.jsx)("nav",{children:p.map((function(e,t){return Object(h.jsx)(o.a,{component:s.b,exact:!0,to:e.path,style:{margin:20},children:e.label},t)}))})},b=a(20),f=a(183),O=a(177),m=a(9),x=a(12),v=a.n(x),g=a(21),y="https://retail-back-end.herokuapp.com/",w="product",_="check",k="cash-register",N=a(22),C=a.n(N),I="[request-status] sent",S="[request-status] succeeded",q="[request-status] failed",D="[request-status] none";function E(){return{type:I}}function R(e){return{type:S,payload:e}}function B(e){return{type:q,payload:e}}function P(e){return{type:D,payload:e}}var F="[backoffice]-get-products",T="[backoffice]-add-product",W="[backoffice]-update-product",A="[backoffice]-remove-product",U="[backoffice]-get-cashes",H="[backoffice]-get-groups",G="[backoffice]-get-units",M="[backoffice]-get-checks";function Q(e,t){return t?parseInt(e):parseFloat(e)}function L(e,t){return t?parseInt(e).toFixed(0):parseFloat(e).toFixed(3)}function Y(e){return(Math.round(100*e)/100).toLocaleString("iw-en",{style:"currency",currency:"ILS"})}a(134);var J=a(50),K=a.n(J),V=a(181),z={id:"",name:"",groupId:"",groupName:"",unitId:"",unitName:"",tax:17,price:0,remainder:0,manufacturer:"",country:"",pieceUnit:!0};var X=a(85),Z=a(32),$=a.n(Z),ee=function(e){var t=e.datasource,a=e.needBtn,n=e.onBtnClickCallback,r=e.columns;return 0!==t.length||r?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:$.a.header,children:function(){var e=[];if(r)for(var n=0;n<r.length;n++)e.push(Object(h.jsx)("div",{style:{width:"".concat(r[n].width,"px")},className:$.a.headerItem,children:r[n].headerName},n));else{var c=t[0];for(var s in c)e.push(Object(h.jsx)("div",{style:{width:"".concat(100/Object.keys(c).length,"%")},className:$.a.headerItem,children:s},s))}return e.push(Object(h.jsx)("div",{style:{width:"".concat(20+(a?40:0),"px")},className:$.a.headerBtn,children:"\xa0"},e.length)),e}()}),Object(h.jsx)("div",{className:$.a.wrapper,children:Object(h.jsx)("div",{className:$.a.body,children:t.map((function(e,t){return Object(h.jsx)("div",{className:$.a.bodyLine,children:function(){var c=[];if(r)for(var s=function(t){c.push(Object(h.jsx)("div",{style:{width:"".concat(r[t].width,"px"),textAlign:"".concat("number"===r[t].type?"right":"left")},className:$.a.bodyItem,children:r[t].field.split(",").map((function(t){return function(e){var t=e;switch(typeof e){case"boolean":Object(X.a)("formattedValue"),t=!0===e?"YES":"no"}return t}(e[t])})).join(" ")},t))},i=0;i<r.length;i++)s(i);else for(var o in e)c.push(Object(h.jsx)("div",{style:{width:"".concat(100/Object.keys(e).length,"%")},className:$.a.bodyItem,children:"boolean"===typeof e[o]?!0===e[o]?"YES":"no":e[o]},o));return a&&c.push(Object(h.jsx)("button",{style:{width:"".concat(40,"px")},className:$.a.bodyBtn,onClick:function(){n(e,t)},children:"..."},c.length)),c}()},t)}))})})]}):Object(h.jsx)(h.Fragment,{children:"empty datasource"})},te=a(62),ae=a(7),ne=a(179),re=a(185),ce=a(184),se=a(176),ie=a(56),oe=a.n(ie);function ue(e){var t=e.detail,a=e.index,r=e.closeHandler,c=(Object(m.b)(),Object(n.useState)(Object(ae.a)({},t))),s=Object(b.a)(c,2),i=s[0],o=s[1],u=Object(n.useState)(!1),d=Object(b.a)(u,2),l=d[0],p=d[1],j=Object(n.useState)(!1),x=Object(b.a)(j,2),v=x[0],g=x[1],y=Object(m.c)((function(e){return e.backoffice.groups})),w=Object(m.c)((function(e){return e.backoffice.units})),_=(Object(m.c)((function(e){return e.requestStatus})),-1===a),k=Object(n.useRef)(null),N=Object(n.useRef)(null),C=function(e){var t=e.target;return o(Object(ae.a)(Object(ae.a)({},i),{},Object(te.a)({},t.id,"checkbox"===t.type?t.checked:t.value)))};return Object(h.jsxs)("div",{className:oe.a.modalBackground,children:[Object(h.jsx)(V.a,{anchorOrigin:{vertical:"top",horizontal:"left"},open:l,autoHideDuration:2e3,onClose:function(){return p(!1)},message:"Barcode is empty"}),Object(h.jsx)(V.a,{anchorOrigin:{vertical:"top",horizontal:"left"},open:v,autoHideDuration:2e3,onClose:function(){return g(!1)},message:"Name is empty"}),Object(h.jsxs)("div",{className:oe.a.modal,children:[Object(h.jsx)("div",{className:oe.a.headerWrapper,children:Object(h.jsx)(f.a,{type:"text",ref:k,error:!i.id,required:!0,label:"Barcode",variant:"outlined",id:"id",value:i.id,onChange:C,disabled:!_})}),Object(h.jsxs)("div",{className:oe.a.inputWrapper,children:[Object(h.jsx)(f.a,{type:"text",ref:N,error:!i.name,required:!0,label:"Name",variant:"outlined",id:"name",value:i.name,onChange:C}),Object(h.jsxs)(se.a,{required:!0,children:[Object(h.jsx)(ce.a,{id:"group-select-label",children:"Group"}),Object(h.jsxs)(ne.a,{labelId:"group-select-label",id:"group-select",value:i.groupId,onChange:function(e){var t=e.target;o(Object(ae.a)(Object(ae.a)({},i),{},{groupId:t.value,groupName:y.find((function(e){return e.id===t.value})).name}))},children:["   ",y.map((function(e,t){return Object(h.jsx)(re.a,{value:e.id,children:e.name},t)}))]})]}),Object(h.jsx)(f.a,{type:"number",required:!0,label:"Price",variant:"outlined",id:"price",value:i.price,onChange:C}),Object(h.jsx)(f.a,{type:"number",required:!0,label:"Tax(%)",variant:"outlined",id:"tax",value:i.tax,onChange:C}),Object(h.jsx)(f.a,{type:"number",required:!0,label:"Remainder",variant:"outlined",id:"remainder",value:i.remainder,onChange:C}),Object(h.jsxs)(se.a,{required:!0,children:[Object(h.jsx)(ce.a,{id:"unit-select-label",children:"Unit"}),Object(h.jsxs)(ne.a,{labelId:"unit-select-label",id:"unit-select",value:i.unitId,onChange:function(e){var t=e.target,a=w.find((function(e){return e.id===t.value}));o(Object(ae.a)(Object(ae.a)({},i),{},{unitId:t.value,unitName:a.name,pieceUnit:a.pieceUnit}))},children:["   ",w.map((function(e,t){return Object(h.jsx)(re.a,{value:e.id,children:e.name},t)}))]})]}),Object(h.jsx)(f.a,{type:"text",label:"Manufacturer",variant:"outlined",id:"manufacturer",value:i.manufacturer,onChange:C}),Object(h.jsx)(f.a,{type:"text",label:"Country",variant:"outlined",id:"country",value:i.country,onChange:C})]}),Object(h.jsxs)("div",{className:"buttonWrapper",children:[Object(h.jsx)(O.a,{variant:"contained",color:"primary",onClick:function(){return function(){if(i.name)if(_){if(!i.id)return void p(!0);r(i,-1)}else r(i,a);else g(!0)}()},disableElevation:!0,children:_?"Add":"Ok"}),Object(h.jsx)(O.a,{variant:"contained",color:"default",onClick:function(){r({})},disableElevation:!0,children:_?"Close":"Cancel"}),_?Object(h.jsx)(h.Fragment,{}):Object(h.jsx)(O.a,{variant:"contained",color:"secondary",onClick:function(){r(i,-2)},disableElevation:!0,children:"Delete"})]})]})]})}var de=function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),s=Object(b.a)(c,2),i=(s[0],s[1],Object(n.useState)({show:!1})),o=Object(b.a)(i,2),u=o[0],d=o[1],l=Object(m.b)(),p=(Object(m.c)((function(e){return e.backoffice.cashes})),Object(m.c)((function(e){return e.backoffice.groups}))),j=Object(m.c)((function(e){return e.backoffice.units})),x=Object(m.c)((function(e){return e.backoffice.products})),_=(Object(m.c)((function(e){return e.backoffice.checks})),Object(m.c)((function(e){return e.requestStatus})));Object(n.useEffect)((function(){l(function(){var e=Object(g.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(E()),e.next=3,C.a.get("".concat(y,"/").concat(k)).then((function(e){return t({type:U,payload:e.data}),t(R()),e.data})).catch((function(e){e.response?(t(B(e.response.data)),console.error(e.response.data)):e.request?(t(B(e.request.status)),console.error(e.request)):(t(B(e.message)),console.error(e))}));case 3:e.sent;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),l(function(){var e=Object(g.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(E()),e.next=3,C.a.get("".concat(y,"/").concat("group")).then((function(e){return t({type:H,payload:e.data}),t(R()),e.data})).catch((function(e){e.response?(t(B(e.resonse.data)),console.error(e.response.data)):e.request?(t(B(e.request.status)),console.error(e.request)):(t(B(e.message)),console.error(e))}));case 3:e.sent;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),l(function(){var e=Object(g.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(E()),e.next=3,C.a.get("".concat(y,"/").concat("unit")).then((function(e){return t({type:G,payload:e.data}),t(R()),e.data})).catch((function(e){e.response?(t(B(e.response.data)),console.error(e.response.data)):e.request?(t(B(e.request.status)),console.error(e.request.status)):(t(B(e.message)),console.error(e))}));case 3:e.sent;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]);var N=function(e,t){d({show:!0,product:e,index:t})};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(V.a,{anchorOrigin:{vertical:"top",horizontal:"left"},open:_.requestStatus===q||_.requestStatus===S&&""!==_.infoString,autoHideDuration:2e3,onClose:function(){return l(P())},message:_.infoString}),u.show?Object(h.jsx)(ue,{detail:u.product,index:u.index,closeHandler:function(e,t){var a,n;if(-1!==t)if(d({show:!1}),-2!==t)if(e.id)l((r=e,function(){var e=Object(g.a)(v.a.mark((function e(t){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={id:r.id,name:r.name,groupId:r.groupId,unitId:r.unitId,price:r.price,remainder:r.remainder,tax:r.tax,manufacturer:r.manufacturer,country:r.country},t(E()),e.next=4,C.a.put("".concat(y,"/").concat(w),a).then((function(e){return t({type:W,payload:r}),t(R("Product updated")),e.data})).catch((function(e){e.response?(t(B("Not updated: ".concat(e.response.data.message))),console.error(e.response)):e.request?(t(B("Not updated: ".concat(e.request.status))),console.error(e.request)):(t(B("Not updated: ".concat(e.message))),console.error(e))}));case 4:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));else var r;else l((n=e.id,function(){var e=Object(g.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(E()),e.next=3,C.a.delete("".concat(y,"/").concat(w,"/").concat(n)).then((function(e){return t({type:A,payload:n}),t(R("Product deleted")),e.data})).catch((function(e){e.response?(t(B("Not deleted: ".concat(e.response.data))),console.error("ERROR RESPONSE: ".concat(e.response.data))):e.request?(t(B("Not deleted: ".concat(e.request.status))),console.error("ERROR REQUEST: ".concat(e.request))):(t(B("Not deleted: ".concat(e.message))),console.error("ERROR: ".concat(e)))}));case 3:e.sent;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));else l((a=e,function(){var e=Object(g.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={id:a.id,name:a.name,groupId:a.groupId,unitId:a.unitId,price:a.price,remainder:a.remainder,tax:a.tax,manufacturer:a.manufacturer,country:a.country},t(E()),e.next=4,C.a.post("".concat(y,"/").concat(w),n).then((function(e){return t({type:T,payload:a}),t(R("Product added")),e.data})).catch((function(e){e.response?(t(B("Not added: ".concat(e.response.data.message))),console.log("ERR RESPONSE :",e.response)):e.request?(t(B("Not added: ".concat(e.request.status))),console.log("ERR REQUEST :",e.request)):(t(B("Not added: ".concat(e.message))),console.log("ERROR :",e))}));case 4:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}}):Object(h.jsx)(h.Fragment,{}),Object(h.jsxs)("div",{className:K.a.wrapBackoffice,children:[Object(h.jsxs)("div",{className:K.a.wrapProducts,children:[Object(h.jsx)("span",{children:"products"}),Object(h.jsxs)("div",{className:K.a.wrapProductsControl,children:[Object(h.jsx)(f.a,{required:!0,id:"outlined-required",label:"Part of barcode or name",variant:"outlined",onChange:function(e){return r(e.target.value)},value:a}),Object(h.jsx)(O.a,{variant:"contained",id:"find-products",color:"primary",onClick:function(){return l((e=a,function(){var t=Object(g.a)(v.a.mark((function t(a){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(E()),t.next=3,C.a.get("".concat(y,"/").concat(w,"?search=").concat(e)).then((function(e){return a({type:F,payload:e.data}),a(R("Found products: ".concat(e.data.length))),e.data})).catch((function(e){e.response?(a(B(e.response.data.message)),console.error(e.response.data)):e.request?(a(B(e.request.status)),console.error(e.request.data)):(a(B(e.message)),console.error(e))}));case 3:t.sent;case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));var e},children:"Find"}),Object(h.jsx)(O.a,{variant:"contained",id:"add-product",color:"primary",onClick:function(){var e=z;p[0]&&(e.groupId=p[0].id,e.groupName=p[0].name),j[0]&&(e.unitId=j[0].id,e.unitName=j[0].name,e.pieceUnit=j[0].pieceUnit),N(e,-1)},children:"Add"})]}),Object(h.jsx)(ee,{datasource:x,columns:[{field:"groupId,id,name",headerName:"Group / Code / Name",width:120},{field:"price",headerName:"Price",width:65,type:"number"},{field:"remainder",headerName:"Remainder",width:60,type:"number"},{field:"tax",headerName:"Tax %",width:30,type:"number"},{field:"country,manufacturer",headerName:"Country Manuf",width:55}],needBtn:!0,onBtnClickCallback:N})]}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:K.a.wrapGroups,children:[Object(h.jsx)("span",{children:"product groups"}),Object(h.jsx)(ee,{datasource:p,needBtn:!1})]}),Object(h.jsxs)("div",{className:K.a.wrapUnits,children:[Object(h.jsx)("span",{children:"units"}),Object(h.jsx)(ee,{datasource:j,needBtn:!1})]})]})]})]})},le=a(29),pe=a(25),he=a.n(pe),je="[cash]-set-products",be="[cash]-set-info",fe="[cash]-save-check",Oe="[cash]-add-detail",me="[cash]-del-detail",xe="[cash]-update-detail",ve="[cash]-clear-details";a(135),a(136);var ge=function(e){var t=e.detail,a=e.index,r=e.closeHandler,c=Object(n.useState)(L(t.quantity,t.pieceUnit)),s=Object(b.a)(c,2),i=s[0],o=s[1],u=Object(n.useState)(t.price.toFixed(2)),d=Object(b.a)(u,2),l=d[0],p=d[1];return Object(h.jsx)("div",{className:"modalBackground",children:Object(h.jsxs)("div",{className:"modal",children:[Object(h.jsxs)("div",{className:"headerWrapper",children:[Object(h.jsx)("span",{children:t.id}),Object(h.jsx)("span",{children:t.name})]}),Object(h.jsx)(f.a,{type:"number",required:!0,label:"Quantity",variant:"outlined",value:i,onChange:function(e){o(e.target.value)},onBlur:function(e){""===e.target.value&&o(0)}}),Object(h.jsx)(f.a,{type:"number",required:!0,label:"Price",variant:"outlined",value:l,onChange:function(e){p(e.target.value)},onBlur:function(e){""===e.target.value&&p(0)}}),Object(h.jsxs)("div",{className:"buttonWrapper",children:[Object(h.jsx)(O.a,{variant:"contained",color:"primary",onClick:function(){return function(){var e=Q(i,t.pieceUnit);r(Object(ae.a)(Object(ae.a)({},t),{},{price:Math.floor(100*parseFloat(l))/100,quantity:e,sum:Math.floor(l*e*100)/100}),a)}()},disableElevation:!0,children:"Ok"}),Object(h.jsx)(O.a,{variant:"contained",color:"default",onClick:function(){r()},disableElevation:!0,children:"Cancel"}),Object(h.jsx)(O.a,{variant:"contained",color:"secondary",onClick:function(){r({},a)},disableElevation:!0,children:"Delete"})]})]})})},ye=a(18),we=a.n(ye);function _e(e){var t=e.check,a=e.details,n=e.checkId,r=e.closeHandler,c=Object(m.c)((function(e){return e.cash.cashInfo}));var s=n.split("::")[1].split(",")[0],i=new Date(n.split("::")[1].split(",")[1]),o=i.getFullYear()+"-"+i.getMonth()+"-"+i.getDate()+" "+i.getHours()+":"+i.getMinutes();return console.log(s,o),Object(h.jsx)("div",{className:we.a.modalWrapper,children:Object(h.jsxs)("div",{className:we.a.modalWindow,children:[Object(h.jsxs)("div",{className:we.a.checkWrapper,children:[Object(h.jsxs)("span",{children:[" ",c.info," "]}),Object(h.jsxs)("span",{children:[" Check \u2116 ",s,"\xa0\xa0\xa0",i.toLocaleString()]}),Object(h.jsx)("div",{className:we.a.headerWrapper,children:Object(h.jsxs)("div",{className:we.a.detailWrapper,children:[Object(h.jsx)("span",{className:we.a.spanDetailId,children:"code"}),Object(h.jsx)("span",{className:we.a.spanDetailName,children:"product name"}),Object(h.jsx)("span",{className:we.a.spanDetailPrice,children:"price"}),Object(h.jsx)("span",{className:we.a.spanDetailQuantity,children:"qnty"}),Object(h.jsx)("span",{className:we.a.spanDetailSum,children:"sum"})]})}),Object(h.jsx)("div",{className:we.a.detailsWrapper,children:a.map((function(e,t){return Object(h.jsxs)("div",{className:we.a.detailWrapper,children:[Object(h.jsx)("span",{className:we.a.spanDetailId,children:e.id}),Object(h.jsx)("span",{className:we.a.spanDetailName,children:e.name}),Object(h.jsx)("span",{className:we.a.spanDetailPrice,children:e.price}),Object(h.jsx)("span",{className:we.a.spanDetailQuantity,children:e.quantity}),Object(h.jsx)("span",{className:we.a.spanDetailSum,children:e.sum})]},t)}))}),Object(h.jsxs)("span",{className:we.a.spanTotal,children:[" TOTAL: ",Y(t.sum)," "]}),Object(h.jsxs)("span",{className:we.a.spanVAT,children:[" including VAT: ",Y(a.map((function(e){return e.sum*e.tax/100})).reduce((function(e,t){return e+t})))," "]})]}),Object(h.jsx)(O.a,{variant:"contained",color:"primary",onClick:r,disableElevation:!0,children:"Close"})]})})}var ke=function(){var e=Object(m.b)(),t=Object(n.useState)(""),a=Object(b.a)(t,2),r=a[0],c=a[1];function s(){return{id:"",name:"",groupId:"",unitId:"",price:0,remainder:0,tax:0}}var i=Object(n.useState)(s),o=Object(b.a)(i,2),u=o[0],d=o[1],l=Object(n.useState)(1),p=Object(b.a)(l,2),j=p[0],x=p[1],N=Object(n.useState)({show:!1}),I=Object(b.a)(N,2),q=I[0],D=I[1],F=Object(n.useState)({show:!1}),T=Object(b.a)(F,2),W=T[0],A=T[1];Object(n.useEffect)((function(){e(function(){var e=Object(g.a)(v.a.mark((function e(t){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.get("".concat(y,"/").concat(w)).then((function(e){return e.data}));case 3:a=e.sent,t({type:je,payload:a}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()),e(function(){var e=Object(g.a)(v.a.mark((function e(t){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.get("".concat(y,"/").concat(k,"/").concat(2)).then((function(e){return e.data}));case 3:a=e.sent,t({type:be,payload:a||{id:-1,name:"Unknown cash register with CASH_ID=".concat(2),info:""}}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())}),[]);var U=Object(m.c)((function(e){return e.cash.products})),H=Object(m.c)((function(e){return e.cash.details})),G=Object(m.c)((function(e){return e.cash.cashInfo})),M=Object(m.c)((function(e){return e.requestStatus})),J=Object(n.useRef)(null);function K(t){if(t||u&&u.id){var a=t||u,n=Q(j,a.pieceUnit),r={id:a.id,name:a.name,price:a.price,quantity:n,unitId:a.unitId,sum:Math.floor(a.price*n*100)/100,tax:a.tax,groupId:a.groupId,pieceUnit:a.pieceUnit};e(function(e){return{type:Oe,payload:e}}(r)),d({id:"",name:"",groupId:"",unitId:"",price:0,remainder:0,tax:0})}c(""),x(1)}function V(){H.length&&(e({type:ve,payload:[]}),d({id:"",name:"",groupId:"",unitId:"",price:0,remainder:0,tax:0}),c(""),x(1))}function z(){if(H.length){var t=function(){return e=H.map((function(e){return e.price*e.quantity})).reduce((function(e,t){return e+t}),0),Math.round(100*e)/100;var e}();A({show:!0,check:{sum:t},details:Object(le.a)(H)}),e(function(e,t,a,n){return function(){var r=Object(g.a)(v.a.mark((function r(c){var s,i;return v.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return s=e.map((function(e){return{productDto:{id:e.id},quantity:e.quantity,price:e.price,sum:parseFloat(e.sum)}})),i={id:String(t),cash:{id:a},details:s,sum:parseFloat(n)},console.log(i.dateTime),c(E()),r.next=6,C.a.post("".concat(y,"/").concat(_),i).then((function(e){return c({type:fe,payload:[]}),c(R("".concat(e.data.type,":: ").concat(e.data.payload))),console.log(e.data),e.data})).catch((function(e){e.response?(c(B(e.response.data)),console.log(e.response.data)):e.request?(c(B(e.request.status)),console.log(e.request)):(c(B(e.message)),console.log(e))}));case 6:r.sent;case 7:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}(H,0,2,parseFloat(t)))}}Object(n.useEffect)((function(){console.log("changed details"),J.current.scrollIntoView(!1)}),[H]);var X=[{field:"_n",headerName:"\u2116",width:20},{field:"id",headerName:"Code/name",width:120},{field:"price",headerName:"Price",width:70,type:"number"},{field:"quantity",headerName:"Quantity",width:70,type:"number"},{field:"unitId",headerName:"Unit",width:35},{field:"_btn",headerName:"...",width:45}];return Object(h.jsxs)(h.Fragment,{children:[q.show?Object(h.jsx)(ge,{detail:q.detail,index:q.index,closeHandler:function(t,a){D({show:!1}),t&&(t.id?e(function(e,t){return{type:xe,payload:{detail:e,index:t}}}(t,a)):e(function(e){return{type:me,payload:e}}(a)))}}):Object(h.jsx)(h.Fragment,{}),W.show&&M.requestStatus===S?Object(h.jsx)(_e,{check:W.check,checkId:M.infoString,details:W.details,closeHandler:function(){A({show:!1}),e(P())}}):Object(h.jsx)(h.Fragment,{}),Object(h.jsxs)("div",{className:he.a.wrapper,children:[Object(h.jsxs)("div",{className:he.a.checkwrapper,children:[Object(h.jsxs)("div",{className:he.a.infowrapper,children:[Object(h.jsx)("span",{children:G.name}),Object(h.jsx)("span",{children:G.info})]}),Object(h.jsx)("div",{className:he.a.headerwrapper,children:Object(h.jsx)("div",{className:he.a.header,children:X.map((function(e,t){return Object(h.jsxs)("span",{style:{width:"".concat(e.width,"px")},children:[e.headerName," "]},t)}))})}),Object(h.jsxs)("div",{className:he.a.gridwrapper,children:[H.map((function(e,t){return Object(h.jsxs)("div",{className:he.a.gridrowwrapper,children:[Object(h.jsx)("span",{style:{width:"".concat(X[0].width,"px"),textAlign:"number"===X[0].type?"right":"left"},children:t+1}),Object(h.jsxs)("span",{style:{width:"".concat(X[1].width,"px"),textAlign:"number"===X[1].type?"right":"left"},children:[e.id,Object(h.jsx)("br",{}),e.name]}),Object(h.jsx)("span",{style:{width:"".concat(X[2].width,"px"),textAlign:"number"===X[2].type?"right":"left"},children:Y(e.price)}),Object(h.jsx)("span",{style:{width:"".concat(X[3].width,"px"),textAlign:"number"===X[3].type?"right":"left"},children:L(e.quantity,e.pieceUnit)}),Object(h.jsx)("span",{style:{width:"".concat(X[4].width,"px"),textAlign:"number"===X[4].type?"right":"center"},children:e.unitId}),Object(h.jsx)("button",{style:{width:"".concat(X[5].width,"px")},onClick:function(){D({show:!0,detail:e,index:t})},children:"..."})]},t)})),Object(h.jsx)("div",{ref:J})]})]}),Object(h.jsxs)("div",{className:he.a.controlwrapper,children:[Object(h.jsxs)("div",{className:he.a.inputwrapper,children:[Object(h.jsx)(O.a,{variant:"contained",color:"primary",onClick:function(){return function(){if(U&&U.length){var e=U.length,t=Math.floor(Math.random()*e);U[t].id,K(Object(ae.a)({},U[t]))}}()},disableElevation:!0,children:"SCAN"}),Object(h.jsx)("div",{className:he.a.productinfo,children:u&&u.id?Object(h.jsxs)(h.Fragment,{children:[u.id,"  ",Object(h.jsx)("br",{})," ",u.name," ",u.price.toFixed(2)," ",u.tax,"%"]}):Object(h.jsx)(h.Fragment,{})})]}),Object(h.jsxs)("div",{className:he.a.inputwrapper,children:[Object(h.jsx)(f.a,{id:"inputBarcode",label:"Barcode",variant:"outlined",value:r,onChange:function(e){return c(e.target.value)}}),Object(h.jsx)(O.a,{variant:"outlined",color:"primary",onClick:function(){return function(){var e=U.find((function(e){return e.id===r}));e&&d(Object(ae.a)({},e)),c("")}()},disableElevation:!0,children:"Find"}),Object(h.jsx)(f.a,{type:"number",style:{width:"120px"},id:"inputQuantity",label:"Quantity",variant:"outlined",value:j,onChange:function(e){return x(e.target.value)}}),Object(h.jsx)(O.a,{variant:"contained",color:"primary",onClick:function(){return K()},disableElevation:!0,children:"ADD"})]}),Object(h.jsxs)("div",{style:{display:"flex"},children:[Object(h.jsxs)("div",{className:he.a.totalwrapper,children:[Object(h.jsx)("span",{children:"TOTAL"}),Object(h.jsxs)("span",{children:[Y(H.map((function(e){return e.price*e.quantity})).reduce((function(e,t){return e+t}),0))," "]}),Object(h.jsx)(O.a,{variant:"contained",color:"primary",onClick:function(){return z()},disableElevation:!0,children:"PAY CHECK"})]}),Object(h.jsx)("div",{className:he.a.cancelwrapper,children:Object(h.jsx)(O.a,{variant:"contained",color:"secondary",onClick:function(){return V()},disableElevation:!0,children:"Clear check"})})]})]})]})]})},Ne=a(178),Ce="[reports] set sales data",Ie="[reports] set group sales data",Se="[reports] set start date",qe="[reports] set finish date";function De(e,t){return function(){var a=Object(g.a)(v.a.mark((function a(n){var r;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n(E()),a.next=4,C.a.get("".concat(y,"/").concat("report/sales","?from=").concat(e,"&to=").concat(t)).then((function(e){return e.data}));case 4:r=a.sent,n({type:Ce,payload:r}),n(R()),a.next=13;break;case 9:a.prev=9,a.t0=a.catch(0),n(B(a.t0.message)),console.dir(a.t0);case 13:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()}function Ee(e,t){return function(){var a=Object(g.a)(v.a.mark((function a(n){var r;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,C.a.get("".concat(y,"/").concat("report/group-sales","?from=").concat(e,"&to=").concat(t)).then((function(e){return e.data}));case 3:r=a.sent,n({type:Ie,payload:r}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),console.log("ERROR",a.t0);case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}()}var Re=a(86);function Be(e){return Object(le.a)(e).map((function(e){return{x:e.stringDate,y:e.sum}}))}function Pe(e){var t=[{label:"Series 1",data:Be(e)}];return Object(h.jsx)(Re.Chart,{data:t,axes:[{primary:!0,type:"ordinal",position:"bottom"},{type:"linear",position:"left"}]})}var Fe=function(){var e=Object(m.b)(),t=Object(m.c)((function(e){return e.report.sales})),a=Object(m.c)((function(e){return e.report.groupSales})),r=Object(m.c)((function(e){return e.requestStatus})),c=Object(m.c)((function(e){return e.report.from})),s=Object(m.c)((function(e){return e.report.to}));return Object(n.useEffect)((function(){e(De(c,s)),e(Ee(c,s))}),[]),Object(h.jsxs)("div",{style:{marginTop:"20px"},children:[Object(h.jsx)("h3",{style:{margin:"10px 0",backgroundColor:"navy",color:"white"},children:"Sales report"}),Object(h.jsxs)("label",{children:["From ",Object(h.jsx)("input",{type:"date",onChange:function(t){return e(function(e){return{type:Se,payload:e}}(t.target.value))},value:c})]}),Object(h.jsxs)("label",{children:[" to ",Object(h.jsx)("input",{type:"date",onChange:function(t){return e(function(e){return{type:qe,payload:e}}(t.target.value))},value:s})]}),Object(h.jsx)("button",{onClick:function(){e(De(c,s)),e(Ee(c,s))},children:"Report"}),r.requestStatus===I?Object(h.jsx)("div",{style:{display:"flex",width:"80vw",height:"30vh",justifyContent:"center",alignItems:"center"},children:Object(h.jsx)(Ne.a,{})}):r.requestStatus===q?Object(h.jsx)("div",{style:{display:"flex",width:"80vw",height:"30vh",justifyContent:"center",alignItems:"center"},children:Object(h.jsx)("span",{children:r.infoString})}):Object(h.jsx)("div",{style:{width:"80vw",height:"30vh"},children:Pe(t)}),Object(h.jsxs)("h3",{style:{margin:"10px 0",backgroundColor:"navy",color:"white"},children:["TOTAL :",Y(a.map((function(e){return e.data.map((function(e){return e.sum})).reduce((function(e,t){return e+t}),0)})).reduce((function(e,t){return e+t}),0))]}),Object(h.jsx)("ol",{children:a.map((function(e,t){return Object(h.jsxs)("li",{children:[e.groupName,". ",Object(h.jsxs)("b",{children:["(",Y(e.data.map((function(e){return e.sum})).reduce((function(e,t){return e+t}),0)),")"]}),Object(h.jsx)("ul",{children:e.data.map((function(t,a){return Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{children:t.stringDate})," \xa0\xa0 ",Object(h.jsx)("span",{style:{color:"darkgreen"},children:Y(t.sum)})]},e.groupId+a)}))})]},t)}))})]})},Te=a(34),We=a.n(Te),Ae=function(e){var t=e.history;return Object(h.jsxs)("div",{className:We.a.wrapper,children:[Object(h.jsx)("h2",{children:"Retail Demo Application"}),Object(h.jsx)("button",{className:"".concat(We.a.mrgntop30px," ").concat(We.a.cursorPointer),onClick:function(){return t.push(u)},children:"POS"}),Object(h.jsx)("p",{children:'The POS tab emulates a POS terminal and allows you to make sales of goods. Pressing the SCAN button simulates the reading of the product by a barcode scanner. In this case, the goods are selected in random order. You can change the quantity and price of a product by clicking the "..." button in the product line. You can also manually enter the desired barcode and immediately indicate the required quantity of goods. The generated check can be paid by pressing "PAY CHECK" or canceled by pressing "CLEAR CHECK".'}),Object(h.jsx)("button",{className:"".concat(We.a.mrgntop30px," ").concat(We.a.cursorPointer),onClick:function(){return t.push(d)},children:"BackOffice"}),Object(h.jsx)("p",{children:"The BackOffice tab allows you to search, view, add, modify and delete goods. Also, there you can see what groups of goods and units of measurement of goods are."}),Object(h.jsx)("button",{className:"".concat(We.a.mrgntop30px," ").concat(We.a.cursorPointer),onClick:function(){return t.push(l)},children:"Reports"}),Object(h.jsx)("p",{children:"On the REPORTS tab it is possible to see sales by day in the form of a chart and in the form of a report of sales by groups and dates within a certain period."}),Object(h.jsx)("h4",{className:We.a.mrgntop30px,children:"Backend part"}),Object(h.jsxs)("p",{children:["The backend part was implemented in Java using Spring Web and Spring Data JPA. H2 is used as a database.",Object(h.jsx)("br",{}),"GitHub: ",Object(h.jsx)("a",{href:"https://github.com/d-y-frolov/retail-backend",target:"_blank",children:"https://github.com/d-y-frolov/retail-backend"})]}),Object(h.jsx)("h4",{className:We.a.mrgntop30px,children:"Frontend part"}),Object(h.jsxs)("p",{children:["The frontend part is made in Javascript as a single page application using React. Redux is used as a centralized store.",Object(h.jsx)("br",{}),"GitHub: ",Object(h.jsx)("a",{href:"https://github.com/d-y-frolov/retail-frontend",target:"_blank",children:"https://github.com/d-y-frolov/retail-frontend"})]})]})};var Ue=function(){return Object(h.jsxs)(s.a,{children:[Object(h.jsx)(j,{}),Object(h.jsxs)(i.c,{children:[Object(h.jsx)(i.a,{path:u,exact:!0,component:ke}),Object(h.jsx)(i.a,{path:d,exact:!0,component:de}),Object(h.jsx)(i.a,{path:l,exact:!0,component:Fe}),Object(h.jsx)(i.a,{path:"/",exact:!0,component:Ae})]})]})},He=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,187)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))},Ge={cashInfo:{},details:[],products:[]};var Me={products:[],cashes:[],groups:[],units:[],checks:[]};var Qe={sales:[],groupSales:[],from:function(){var e=new Date;return e.setMonth(e.getMonth()-1),e.toISOString().substr(0,10)}(),to:(new Date).toISOString().substr(0,10)};var Le={requestStatus:D,infoString:""};var Ye=a(46),Je=a(87),Ke=Object(Ye.c)({cash:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case be:return{details:e.details,products:e.products,cashInfo:t.payload};case je:return{details:e.details,products:t.payload.slice(0),cashInfo:e.cashInfo};case Oe:return{details:[].concat(Object(le.a)(e.details),[t.payload]),products:e.products,cashInfo:e.cashInfo};case xe:var a=Object(le.a)(e.details);return a[t.payload.index]=Object(ae.a)({},t.payload.detail),{details:a,products:e.products,cashInfo:e.cashInfo};case me:var n=Object(le.a)(e.details);return n.splice(t.payload,1),{details:n,products:e.products,cashInfo:e.cashInfo};case fe:return{details:t.payload,products:e.products,cashInfo:e.cashInfo};case ve:return Object(ae.a)(Object(ae.a)({},e),{},{details:t.payload})}return e},backoffice:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:return Object(ae.a)(Object(ae.a)({},e),{},{products:t.payload});case T:return Object(ae.a)(Object(ae.a)({},e),{},{products:[t.payload].concat(Object(le.a)(e.products))});case W:var a=t.payload,n=e.products.findIndex((function(e){return e.id===a.id})),r=Object(le.a)(e.products);return r.splice(n,1,a),Object(ae.a)(Object(ae.a)({},e),{},{products:r});case A:var c=t.payload,s=e.products.findIndex((function(e){return e.id===c})),i=Object(le.a)(e.products);return i.splice(s,1),Object(ae.a)(Object(ae.a)({},e),{},{products:i});case U:return Object(ae.a)(Object(ae.a)({},e),{},{cashes:t.payload});case H:return Object(ae.a)(Object(ae.a)({},e),{},{groups:t.payload});case G:return Object(ae.a)(Object(ae.a)({},e),{},{units:t.payload});case M:return Object(ae.a)(Object(ae.a)({},e),{},{checks:t.payload});default:return e}},report:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Qe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ce:return Object(ae.a)(Object(ae.a)({},e),{},{sales:t.payload});case Ie:return Object(ae.a)(Object(ae.a)({},e),{},{groupSales:t.payload});case Se:return Object(ae.a)(Object(ae.a)({},e),{},{from:t.payload});case qe:return Object(ae.a)(Object(ae.a)({},e),{},{to:t.payload});default:return e}},requestStatus:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return{requestStatus:I,infoString:t.payload?t.payload:""};case S:return{requestStatus:S,infoString:t.payload?t.payload:""};case q:return{requestStatus:q,infoString:t.payload?t.payload:""};case D:return{requestStatus:D,infoString:t.payload?t.payload:""};default:return e}}}),Ve=Object(Ye.d)(Ke,Object(Ye.a)(Je.a));c.a.render(Object(h.jsx)(m.a,{store:Ve,children:Object(h.jsx)(Ue,{})}),document.getElementById("root")),He()},18:function(e,t,a){e.exports={modalWrapper:"Check_modalWrapper__32Jpt",modalWindow:"Check_modalWindow__2AF5-",checkWrapper:"Check_checkWrapper__2afO2",headerWrapper:"Check_headerWrapper__2mS5Q",detailsWrapper:"Check_detailsWrapper__F7vsh",detailWrapper:"Check_detailWrapper__w7yDR",spanDetailId:"Check_spanDetailId__3OWxc",spanDetailName:"Check_spanDetailName__3-QtK",spanDetailPrice:"Check_spanDetailPrice__1vjhq",spanDetailQuantity:"Check_spanDetailQuantity__S8RU1",spanDetailSum:"Check_spanDetailSum__1Fs9r",spanTotal:"Check_spanTotal__1eDEc"}},25:function(e,t,a){e.exports={wrapper:"Cash_wrapper__4hKGu",infowrapper:"Cash_infowrapper__3Sr8A",inputwrapper:"Cash_inputwrapper__2vcUu",gridwrapper:"Cash_gridwrapper__30Ovg",gridrowwrapper:"Cash_gridrowwrapper__3p87q",header:"Cash_header__3FjJz",headerwrapper:"Cash_headerwrapper__3Ep9B",totalwrapper:"Cash_totalwrapper__2LIFw",cancelwrapper:"Cash_cancelwrapper__2bUGH",productinfo:"Cash_productinfo__-EFAM"}},32:function(e,t,a){e.exports={wrapper:"TableGrid_wrapper__1NRNu",header:"TableGrid_header__31tYR",headerItem:"TableGrid_headerItem__sgaOF",headerBtn:"TableGrid_headerBtn__3QZQW",body:"TableGrid_body__3iYUO",bodyLine:"TableGrid_bodyLine__3EtDB",bodyBtn:"TableGrid_bodyBtn__1phiV",bodyItem:"TableGrid_bodyItem__2wdU-"}},34:function(e,t,a){e.exports={wrapper:"Retail_wrapper__o36Jq",mrgntop30px:"Retail_mrgntop30px__1muk4",cursorPointer:"Retail_cursorPointer__1TVhA"}},50:function(e,t,a){e.exports={wrapBackoffice:"Backoffice_wrapBackoffice__2eXYO",wrapProducts:"Backoffice_wrapProducts__2MnIw",wrapProductsControl:"Backoffice_wrapProductsControl__ghY5c",wrapGroups:"Backoffice_wrapGroups__1KdNX",wrapUnits:"Backoffice_wrapUnits__1veh_",wrapCashes:"Backoffice_wrapCashes__1hC48",wrapChecks:"Backoffice_wrapChecks__1m2oY"}},56:function(e,t,a){e.exports={modalBackground:"ProductDetail_modalBackground__rBMA_",modal:"ProductDetail_modal__2mdtm",headerWrapper:"ProductDetail_headerWrapper___7hnB",inputWrapper:"ProductDetail_inputWrapper__2nET7",buttonWrapper:"ProductDetail_buttonWrapper__3TDD-"}}},[[139,1,2]]]);
//# sourceMappingURL=main.f92f6d71.chunk.js.map