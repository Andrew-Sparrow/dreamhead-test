(this["webpackJsonpdreamhead-test"]=this["webpackJsonpdreamhead-test"]||[]).push([[0],{46:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(16),i=a.n(s),r=(a(46),a(12)),l=a(11),o=a(34),d=a.n(o),u=null!==localStorage.getItem("token")?localStorage.getItem("token"):"",j=a(20),m=a(3),p="/",b=["All","Favorites","Family","Work"],h="All",O="/contacts",g=a(40),_=a(13),v=a(1);var f=function(e){var t=e.id,a=e.name,c=e.lastName,n=e.group,s=e.phone,i=e.email,r=e.avatar;return Object(v.jsxs)("li",{className:"contact",id:t,children:[Object(v.jsx)("img",{className:"contact__left",src:null===r?"https://iupac.org/wp-content/uploads/2018/05/default-avatar.png":r,alt:"avatar"}),Object(v.jsxs)("div",{className:"contact__right",children:[Object(v.jsxs)("p",{className:"contact__data",children:["Name: ",Object(v.jsx)("span",{className:"contact__name",children:a})]}),Object(v.jsxs)("p",{className:"contact__data",children:["Last Name: ",Object(v.jsx)("span",{className:"contact__name",children:c})]}),Object(v.jsxs)("p",{className:"contact__data",children:["Group: ",Object(v.jsx)("span",{className:"contact__name",children:n})]}),Object(v.jsxs)("p",{className:"contact__data",children:["Phone: ",Object(v.jsx)("span",{className:"contact__name",children:s})]}),Object(v.jsxs)("p",{className:"contact__data",children:["Email: ",Object(v.jsx)("span",{className:"contact__name",children:i})]})]})]})},x=a(4),N=a.n(x),y=(N.a.shape({id:N.a.number.isRequired,name:N.a.string.isRequired,lastName:N.a.string.isRequired,phone:N.a.string,email:N.a.string,avatar:N.a.oneOfType([N.a.string,N.a.oneOf([null])]),group:N.a.oneOfType([N.a.string,N.a.oneOf([null])])}),a(35)),C=a.n(y),k=function(e){var t=e.pageCount,a=e.onPageNumberClick,c=e.forcePage;return Object(v.jsx)(C.a,{previousLabel:"previous",nextLabel:"next",breakLabel:"...",breakClassName:"break-me",pageCount:t,marginPagesDisplayed:2,pageRangeDisplayed:3,onPageChange:a,containerClassName:"pagination",activeClassName:"active",forcePage:c})},P="";var w=function(e){var t=e.items,a=e.initialPageNumber,n=e.activeTabName,s=t.slice(0,3),i=Math.ceil(t.length/3),r=s,l=Object(c.useReducer)((function(e,t){switch(t.type){case"changePageNumber":return Object(_.a)(Object(_.a)({},e),{},{pageNumber:t.payload});case"changeSlicedItems":return Object(_.a)(Object(_.a)({},e),{},{slicedItems:t.payload});default:throw new Error}}),a,(function(e){return{pageNumber:e,slicedItems:r}})),o=Object(g.a)(l,2),d=o[0],u=o[1];return Object(c.useEffect)((function(){P!==n&&(u({type:"changeSlicedItems",payload:[]}),u({type:"changeSlicedItems",payload:r}),u({type:"changePageNumber",payload:0})),P=n}),[n,r]),Object(v.jsxs)(c.Fragment,{children:[Object(v.jsx)("ul",{className:"cities__places-list places__list tabs__content",children:d.slicedItems.map((function(e){return Object(v.jsx)(f,{id:e.id,name:e.name,lastName:e.lastName,group:e.group,phone:e.phone,email:e.email,avatar:e.avatar},e.id)}))}),t.length>3&&Object(v.jsx)(k,{pageCount:i,onPageNumberClick:function(e){var a=Math.ceil(3*e.selected);r=t.slice(a,a+3),u({type:"changePageNumber",payload:e.selected}),u({type:"changeSlicedItems",payload:r})},forcePage:d.pageNumber})]})};var F=function(e){var t=e.children,a=e.className;return Object(v.jsxs)("div",{className:a,children:[Object(v.jsx)("header",{className:"header",children:Object(v.jsx)("div",{className:"container",children:Object(v.jsx)("div",{className:"header__wrapper",children:Object(v.jsx)("div",{className:"header__left",children:Object(v.jsx)("h2",{className:"header__title",children:"Contacts"})})})})}),t]})},I=function(e,t){return function(a){return Object(v.jsx)(F,{className:t,children:Object(v.jsx)(e,Object(_.a)({},a))})}};I.displayName="withLayout";var L=I,T="contacts/changeGroup",S="contacts/loadContacts",D="places/isFavorite",A="places/redirectToRoute",G=Object(r.b)(T,(function(e){return{payload:e}})),R=Object(r.b)(S,(function(e){return{payload:e}})),U=Object(r.b)(D,(function(e,t){return{payload:{id:e,newPlace:t}}})),E=(Object(r.b)(A,(function(e){return{payload:e}})),a(19)),q=a(10),M=a(41),B=a(36),J=a(37),W=a(38),K=a.n(W),z=function(){function e(){Object(B.a)(this,e)}return Object(J.a)(e,null,[{key:"adaptToClient",value:function(e){var t=Object.assign({},e,{host:Object.assign({},e.host,{avatarUrl:e.host.avatar_url,isPro:e.host.is_pro}),isFavorite:e.is_favorite,isPremium:e.is_premium,maxAdults:e.max_adults,previewImage:e.preview_image});return delete t.host.avatar_url,delete t.host.is_pro,delete t.is_favorite,delete t.is_premium,delete t.max_adults,delete t.preview_image,t}},{key:"adaptPlacesToClient",value:function(e){var t=this;return e.map((function(e){return t.adaptToClient(e)}))}},{key:"getFilteredContacts",value:function(e,t){return e===h?t:t.filter((function(t){return t.group===e}))}},{key:"generateIdKeys",value:function(e){return new Array(e).fill("").map((function(){return K()(10)}))}},{key:"getUpdatedContacts",value:function(e,t,a){var c=Object(M.a)(t),n=c.findIndex((function(t){return t.id===e}));return c[n].isFavorite=a.isFavorite,c}}]),e}();z.formatDate=function(e){return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"short"})};var H=z,Q=Object(r.c)({contacts:[],isDataLoaded:!1,activeGroupName:"All"},(function(e){e.addCase(G,(function(e,t){e.activeGroupName=t.payload})).addCase(R,(function(e,t){e.contacts=t.payload,e.isDataLoaded=!0})).addCase(U,(function(e,t){e.places=H.getUpdatedContacts(t.payload.id,e.places,t.payload.newPlace)}))})),V="CONTACTS",X=Object(q.b)(Object(E.a)({},V,Q)),Y=function(e){return e[V].contacts},Z=function(e){return e[V].isDataLoaded},$=function(e){return e[V].activeGroupName};var ee=function(e){var t=Object(l.c)($),a=Object(l.b)(),c=function(e){e.preventDefault(),a(G(e.currentTarget.dataset.city))};return Object(v.jsx)("div",{className:"tabs",children:Object(v.jsx)("section",{className:"locations container",children:Object(v.jsx)("ul",{className:"locations__list tabs__list",children:b.map((function(e){return Object(v.jsx)("li",{className:"locations__item",children:Object(v.jsx)(j.b,{"data-city":e,className:"locations__item-link tabs__item ".concat(e===t&&"tabs__item--active"),to:"#",onClick:c,children:Object(v.jsx)("span",{children:e})})},e)}))})})})};var te=function(e){var t=e.activeGroupName;return Object(v.jsx)("div",{className:"cities",children:Object(v.jsxs)("div",{className:"cities__places-container cities__places-container--empty container",children:[Object(v.jsx)("section",{className:"cities__no-places",children:Object(v.jsxs)("div",{className:"cities__status-wrapper tabs__content",children:[Object(v.jsx)("b",{className:"cities__status",children:"No contacts available"}),Object(v.jsxs)("p",{className:"cities__status-description",children:['We could not find any contacts available at the moment in "',t,'" group']})]})}),Object(v.jsx)("div",{className:"cities__right-section"})]})})};var ae=L((function(){var e=Object(l.c)($),t=Object(l.c)(Y),a=H.getFilteredContacts(e,t);return Object(v.jsxs)("main",{className:"page__main page__main--index",children:[Object(v.jsx)("h1",{className:"visually-hidden",children:"Cities"}),Object(v.jsx)(ee,{}),0===a.length?Object(v.jsx)(te,{activeGroupName:e}):Object(v.jsx)("div",{className:"cities",children:Object(v.jsx)("div",{className:"cities__places-container container",children:Object(v.jsxs)("section",{className:"cities__places places",children:[Object(v.jsx)("h2",{className:"visually-hidden",children:"Contacts"}),Object(v.jsxs)("b",{className:"places__found",children:[a.length," contacts in `",e,"` group"]}),Object(v.jsx)(w,{items:a,initialPageNumber:0,activeTabName:e})]})})})]})}));var ce=L((function(){return Object(v.jsxs)("div",{style:{margin:"auto",width:"200px"},children:[Object(v.jsx)("h1",{style:{textAlign:"center"},children:"404"}),Object(v.jsx)("h2",{children:"Page Not Found"})]})}));var ne=function(){return Object(v.jsx)("p",{children:"Loading..."})};var se=function(){return Object(l.c)(Z)?Object(v.jsx)(j.a,{children:Object(v.jsxs)(m.c,{children:[Object(v.jsx)(m.a,{exact:!0,path:p,children:Object(v.jsx)(ae,{className:"page page--gray page--index"})}),Object(v.jsx)(m.a,{children:Object(v.jsx)(ce,{})})]})}):Object(v.jsx)(ne,{})},ie=a(5),re=Object(ie.a)(),le=function(e){return function(e){return function(t){return t.type===A&&re.push(t.payload),e(t)}}},oe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,72)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),s(e),i(e)}))},de=function(){var e=d.a.create({baseURL:"https://heroku-dreamhead-api.herokuapp.com",timeout:5e3,headers:{"x-token":u}});return e.interceptors.response.use((function(e){return e}),(function(){})),e}(),ue=Object(r.a)({reducer:X,middleware:function(e){return e({thunk:{extraArgument:de}}).concat(le)}});ue.dispatch((function(e,t,a){return a.get(O).then((function(t){var a=t.data;e(R(a))})).catch((function(e){}))})),i.a.render(Object(v.jsx)(n.a.StrictMode,{children:Object(v.jsx)(l.a,{store:ue,children:Object(v.jsx)(se,{})})}),document.getElementById("root")),oe()}},[[71,1,2]]]);
//# sourceMappingURL=main.512a6c19.chunk.js.map