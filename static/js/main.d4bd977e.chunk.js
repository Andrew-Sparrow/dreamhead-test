(this["webpackJsonpdreamhead-test"]=this["webpackJsonpdreamhead-test"]||[]).push([[0],{46:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(16),i=a.n(s),r=(a(46),a(12)),l=a(11),o=a(34),u=a.n(o),d=null!==localStorage.getItem("token")?localStorage.getItem("token"):"",j=a(20),m=(a(3),["All","Favorites","Family","Work"]),p="All",b="/contacts",h=a(40),O=a(13),_=a(1);var g=function(e){var t=e.id,a=e.name,c=e.lastName,n=e.group,s=e.phone,i=e.email,r=e.avatar;return Object(_.jsxs)("li",{className:"contact",id:t,children:[Object(_.jsx)("img",{className:"contact__left",src:null===r?"https://iupac.org/wp-content/uploads/2018/05/default-avatar.png":r,alt:"avatar"}),Object(_.jsxs)("div",{className:"contact__right",children:[Object(_.jsxs)("p",{className:"contact__data",children:["Name: ",Object(_.jsx)("span",{className:"contact__name",children:a})]}),Object(_.jsxs)("p",{className:"contact__data",children:["Last Name: ",Object(_.jsx)("span",{className:"contact__name",children:c})]}),Object(_.jsxs)("p",{className:"contact__data",children:["Group: ",Object(_.jsx)("span",{className:"contact__name",children:n})]}),Object(_.jsxs)("p",{className:"contact__data",children:["Phone: ",Object(_.jsx)("span",{className:"contact__name",children:s})]}),Object(_.jsxs)("p",{className:"contact__data",children:["Email: ",Object(_.jsx)("span",{className:"contact__name",children:i})]})]})]})},f=a(4),v=a.n(f),N=(v.a.shape({id:v.a.number.isRequired,name:v.a.string.isRequired,lastName:v.a.string.isRequired,phone:v.a.string,email:v.a.string,avatar:v.a.oneOfType([v.a.string,v.a.oneOf([null])]),group:v.a.oneOfType([v.a.string,v.a.oneOf([null])])}),a(35)),x=a.n(N),y=function(e){var t=e.pageCount,a=e.onPageNumberClick,c=e.forcePage;return Object(_.jsx)(x.a,{previousLabel:"previous",nextLabel:"next",breakLabel:"...",breakClassName:"break-me",pageCount:t,marginPagesDisplayed:2,pageRangeDisplayed:3,onPageChange:a,containerClassName:"pagination",activeClassName:"active",forcePage:c})},C="";var k=function(e){var t=e.items,a=e.initialPageNumber,n=e.activeTabName,s=t.slice(0,3),i=Math.ceil(t.length/3),r=s,l=Object(c.useReducer)((function(e,t){switch(t.type){case"changePageNumber":return Object(O.a)(Object(O.a)({},e),{},{pageNumber:t.payload});case"changeSlicedItems":return Object(O.a)(Object(O.a)({},e),{},{slicedItems:t.payload});default:throw new Error}}),a,(function(e){return{pageNumber:e,slicedItems:r}})),o=Object(h.a)(l,2),u=o[0],d=o[1];return Object(c.useEffect)((function(){C!==n&&(d({type:"changeSlicedItems",payload:[]}),d({type:"changeSlicedItems",payload:r}),d({type:"changePageNumber",payload:0})),C=n}),[n,r]),Object(_.jsxs)(c.Fragment,{children:[Object(_.jsx)("ul",{className:"cities__places-list places__list tabs__content",children:u.slicedItems.map((function(e){return Object(_.jsx)(g,{id:e.id,name:e.name,lastName:e.lastName,group:e.group,phone:e.phone,email:e.email,avatar:e.avatar},e.id)}))}),t.length>3&&Object(_.jsx)(y,{pageCount:i,onPageNumberClick:function(e){var a=Math.ceil(3*e.selected);r=t.slice(a,a+3),d({type:"changePageNumber",payload:e.selected}),d({type:"changeSlicedItems",payload:r})},forcePage:u.pageNumber})]})};var P=function(e){var t=e.children,a=e.className;return Object(_.jsxs)("div",{className:a,children:[Object(_.jsx)("header",{className:"header",children:Object(_.jsx)("div",{className:"container",children:Object(_.jsx)("div",{className:"header__wrapper",children:Object(_.jsx)("div",{className:"header__left",children:Object(_.jsx)("h2",{className:"header__title",children:"Contacts"})})})})}),t]})},w=function(e,t){return function(a){return Object(_.jsx)(P,{className:t,children:Object(_.jsx)(e,Object(O.a)({},a))})}};w.displayName="withLayout";var F=w,I="contacts/changeGroup",T="contacts/loadContacts",L="places/isFavorite",S="places/redirectToRoute",D=Object(r.b)(I,(function(e){return{payload:e}})),A=Object(r.b)(T,(function(e){return{payload:e}})),G=Object(r.b)(L,(function(e,t){return{payload:{id:e,newPlace:t}}})),R=(Object(r.b)(S,(function(e){return{payload:e}})),a(19)),U=a(10),E=a(41),q=a(36),M=a(37),B=a(38),J=a.n(B),W=function(){function e(){Object(q.a)(this,e)}return Object(M.a)(e,null,[{key:"adaptToClient",value:function(e){var t=Object.assign({},e,{host:Object.assign({},e.host,{avatarUrl:e.host.avatar_url,isPro:e.host.is_pro}),isFavorite:e.is_favorite,isPremium:e.is_premium,maxAdults:e.max_adults,previewImage:e.preview_image});return delete t.host.avatar_url,delete t.host.is_pro,delete t.is_favorite,delete t.is_premium,delete t.max_adults,delete t.preview_image,t}},{key:"adaptPlacesToClient",value:function(e){var t=this;return e.map((function(e){return t.adaptToClient(e)}))}},{key:"getFilteredContacts",value:function(e,t){return e===p?t:t.filter((function(t){return t.group===e}))}},{key:"generateIdKeys",value:function(e){return new Array(e).fill("").map((function(){return J()(10)}))}},{key:"getUpdatedContacts",value:function(e,t,a){var c=Object(E.a)(t),n=c.findIndex((function(t){return t.id===e}));return c[n].isFavorite=a.isFavorite,c}}]),e}();W.formatDate=function(e){return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"short"})};var K=W,z=Object(r.c)({contacts:[],isDataLoaded:!1,activeGroupName:"All"},(function(e){e.addCase(D,(function(e,t){e.activeGroupName=t.payload})).addCase(A,(function(e,t){e.contacts=t.payload,e.isDataLoaded=!0})).addCase(G,(function(e,t){e.places=K.getUpdatedContacts(t.payload.id,e.places,t.payload.newPlace)}))})),H="CONTACTS",Q=Object(U.b)(Object(R.a)({},H,z)),V=function(e){return e[H].contacts},X=function(e){return e[H].activeGroupName};var Y=function(e){var t=Object(l.c)(X),a=Object(l.b)(),c=function(e){e.preventDefault(),a(D(e.currentTarget.dataset.city))};return Object(_.jsx)("div",{className:"tabs",children:Object(_.jsx)("section",{className:"locations container",children:Object(_.jsx)("ul",{className:"locations__list tabs__list",children:m.map((function(e){return Object(_.jsx)("li",{className:"locations__item",children:Object(_.jsx)(j.b,{"data-city":e,className:"locations__item-link tabs__item ".concat(e===t&&"tabs__item--active"),to:"#",onClick:c,children:Object(_.jsx)("span",{children:e})})},e)}))})})})};var Z=function(e){var t=e.activeGroupName;return Object(_.jsx)("div",{className:"cities",children:Object(_.jsxs)("div",{className:"cities__places-container cities__places-container--empty container",children:[Object(_.jsx)("section",{className:"cities__no-places",children:Object(_.jsxs)("div",{className:"cities__status-wrapper tabs__content",children:[Object(_.jsx)("b",{className:"cities__status",children:"No contacts available"}),Object(_.jsxs)("p",{className:"cities__status-description",children:['We could not find any contacts available at the moment in "',t,'" group']})]})}),Object(_.jsx)("div",{className:"cities__right-section"})]})})};F((function(){var e=Object(l.c)(X),t=Object(l.c)(V),a=K.getFilteredContacts(e,t);return Object(_.jsxs)("main",{className:"page__main page__main--index",children:[Object(_.jsx)("h1",{className:"visually-hidden",children:"Cities"}),Object(_.jsx)(Y,{}),0===a.length?Object(_.jsx)(Z,{activeGroupName:e}):Object(_.jsx)("div",{className:"cities",children:Object(_.jsx)("div",{className:"cities__places-container container",children:Object(_.jsxs)("section",{className:"cities__places places",children:[Object(_.jsx)("h2",{className:"visually-hidden",children:"Contacts"}),Object(_.jsxs)("b",{className:"places__found",children:[a.length," contacts in `",e,"` group"]}),Object(_.jsx)(k,{items:a,initialPageNumber:0,activeTabName:e})]})})})]})}));F((function(){return Object(_.jsxs)("div",{style:{margin:"auto",width:"200px"},children:[Object(_.jsx)("h1",{style:{textAlign:"center"},children:"404"}),Object(_.jsx)("h2",{children:"Page Not Found"})]})}));var $=function(){return Object(_.jsx)("p",{className:"loading",children:"Loading..."})};var ee=function(){return Object(_.jsx)($,{})},te=a(5),ae=Object(te.a)(),ce=function(e){return function(e){return function(t){return t.type===S&&ae.push(t.payload),e(t)}}},ne=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,72)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),s(e),i(e)}))},se=function(){var e=u.a.create({baseURL:"https://heroku-dreamhead-api.herokuapp.com",timeout:5e3,headers:{"x-token":d}});return e.interceptors.response.use((function(e){return e}),(function(){})),e}(),ie=Object(r.a)({reducer:Q,middleware:function(e){return e({thunk:{extraArgument:se}}).concat(ce)}});ie.dispatch((function(e,t,a){return a.get(b).then((function(t){var a=t.data;e(A(a))})).catch((function(e){}))})),i.a.render(Object(_.jsx)(n.a.StrictMode,{children:Object(_.jsx)(l.a,{store:ie,children:Object(_.jsx)(ee,{})})}),document.getElementById("root")),ne()}},[[71,1,2]]]);
//# sourceMappingURL=main.d4bd977e.chunk.js.map