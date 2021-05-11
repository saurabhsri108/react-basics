(this["webpackJsonpreact-academind-tutorial"]=this["webpackJsonpreact-academind-tutorial"]||[]).push([[0],{12:function(e,t,c){e.exports={item:"MeetupItem_item__1xuT-",image:"MeetupItem_image__3O1op",content:"MeetupItem_content__2fpVd",actions:"MeetupItem_actions__1EqLH"}},13:function(e,t,c){e.exports={header:"MainNavigation_header__AF496",logo:"MainNavigation_logo__1U7fS",active:"MainNavigation_active__2x21S",badge:"MainNavigation_badge__1ypz0"}},19:function(e,t,c){e.exports={card:"Card_card__1zAp_"}},20:function(e,t,c){e.exports={list:"MeetupList_list__3CaU8"}},22:function(e,t,c){e.exports={main:"Layout_main__1PWGP"}},28:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var i=c(1),n=c(18),r=c.n(n),s=(c(28),c(2)),a=c(23),o=c(11),d=c(12),j=c.n(d),u=c(19),l=c.n(u),b=c(0),h=function(e){return Object(b.jsx)("div",{className:l.a.card,children:e.children})},O=Object(i.createContext)({favourites:[],totalFavourites:0,addFavorite:function(e){},removeFavorite:function(e){},itemIsFavorite:function(e){}}),x=function(e){var t=Object(i.useState)([]),c=Object(o.a)(t,2),n=c[0],r=c[1],s={favourites:n,totalFavourites:n.length,addFavorite:function(e){r((function(t){return t.concat(e)}))},removeFavorite:function(e){r((function(t){return t.filter((function(t){return t.id!==e}))}))},itemIsFavorite:function(e){return n.some((function(t){return t.id===e}))}};return Object(b.jsx)(O.Provider,{value:s,children:e.children})},m=O,f=function(e){var t=Object(i.useContext)(m),c=t.itemIsFavorite(e.id);return Object(b.jsx)("li",{className:j.a.item,children:Object(b.jsxs)(h,{children:[Object(b.jsx)("div",{className:j.a.image,children:Object(b.jsx)("img",{src:e.image,alt:e.title})}),Object(b.jsxs)("div",{className:j.a.content,children:[Object(b.jsx)("h3",{children:e.title}),Object(b.jsx)("address",{children:e.address}),Object(b.jsx)("p",{children:e.description})]}),Object(b.jsx)("div",{className:j.a.actions,children:Object(b.jsx)("button",{onClick:function(){c?t.removeFavorite(e.id):t.addFavorite({id:e.id,title:e.title,address:e.address,image:e.image,description:e.description})},children:c?"Remove From Favourite":"To Favourite"})})]})})},p=c(20),v=c.n(p),_=function(e){return Object(b.jsx)("ul",{className:v.a.list,children:e.meetups.map((function(e){return Object(b.jsx)(f,{id:e.id,title:e.title,image:e.image,address:e.address,description:e.description},e.id)}))})},g=function(){var e=Object(i.useState)(!0),t=Object(o.a)(e,2),c=t[0],n=t[1],r=Object(i.useState)([]),s=Object(o.a)(r,2),d=s[0],j=s[1];return Object(i.useEffect)((function(){fetch("https://react-general-c6862-default-rtdb.firebaseio.com/meetups.json").then((function(e){return e.json()})).then((function(e){var t=[];for(var c in e){var i=Object(a.a)({id:c},e[c]);t.push(i)}n(!1),j(t)}))}),[]),c?Object(b.jsx)("section",{children:"Loading..."}):Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"All Meetups"}),Object(b.jsx)(_,{meetups:d})]})},F=c(9),N=c.n(F),M=function(e){var t=Object(i.useRef)(),c=Object(i.useRef)(),n=Object(i.useRef)(),r=Object(i.useRef)();return Object(b.jsx)(h,{children:Object(b.jsxs)("form",{className:N.a.form,onSubmit:function(i){i.preventDefault();var s={title:t.current.value,image:c.current.value,address:n.current.value,description:r.current.value};e.onAddMeetup(s)},children:[Object(b.jsxs)("div",{className:N.a.control,children:[Object(b.jsx)("label",{htmlFor:"title",children:"Meetup Title"}),Object(b.jsx)("input",{type:"text",required:!0,id:"title",ref:t})]}),Object(b.jsxs)("div",{className:N.a.control,children:[Object(b.jsx)("label",{htmlFor:"image",children:"Meetup Image"}),Object(b.jsx)("input",{type:"url",required:!0,id:"image",ref:c})]}),Object(b.jsxs)("div",{className:N.a.control,children:[Object(b.jsx)("label",{htmlFor:"address",children:"Address"}),Object(b.jsx)("input",{type:"text",required:!0,id:"address",ref:n})]}),Object(b.jsxs)("div",{className:N.a.control,children:[Object(b.jsx)("label",{htmlFor:"description",children:"Description"}),Object(b.jsx)("textarea",{id:"description",required:!0,rows:"5",ref:r})]}),Object(b.jsx)("div",{className:N.a.actions,children:Object(b.jsx)("button",{children:"Add Meetup"})})]})})},y=function(){var e=Object(s.f)();return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Add New Meetup"}),Object(b.jsx)(M,{onAddMeetup:function(t){fetch("https://react-general-c6862-default-rtdb.firebaseio.com/meetups.json",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(){e.replace("/")})).catch((function(e){return console.log(e)}))}})]})},w=function(){var e,t=Object(i.useContext)(m);return e=0===t.totalFavourites?Object(b.jsx)("p",{children:"You have no favourite yet! Add some?"}):Object(b.jsx)(_,{meetups:t.favourites}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"My Favourite Meetups"}),e]})},A=c(7),I=c(13),C=c.n(I),S=function(){var e=Object(i.useContext)(m);return Object(b.jsxs)("header",{className:C.a.header,children:[Object(b.jsx)("div",{className:C.a.logo,children:"React Meetups"}),Object(b.jsx)("nav",{children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)(A.b,{to:"/",children:"All Meetups Page"})}),Object(b.jsx)("li",{children:Object(b.jsx)(A.b,{to:"/new-meetup",children:"New Meetup Page"})}),Object(b.jsx)("li",{children:Object(b.jsxs)(A.b,{to:"/favourites",children:["Favourite Page",Object(b.jsx)("span",{className:C.a.badge,children:e.totalFavourites})]})})]})})]})},P=c(22),R=c.n(P),q=function(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)(S,{}),Object(b.jsx)("main",{className:R.a.main,children:e.children})]})},T=function(){return Object(b.jsx)(q,{children:Object(b.jsxs)(s.c,{children:[Object(b.jsx)(s.a,{path:"/",exact:!0,children:Object(b.jsx)(g,{})}),Object(b.jsx)(s.a,{path:"/new-meetup",children:Object(b.jsx)(y,{})}),Object(b.jsx)(s.a,{path:"/favourites",children:Object(b.jsx)(w,{})})]})})};r.a.render(Object(b.jsx)(x,{children:Object(b.jsx)(A.a,{children:Object(b.jsx)(T,{})})}),document.getElementById("root"))},9:function(e,t,c){e.exports={form:"NewMeetupForm_form__2909K",control:"NewMeetupForm_control__2BZIg",actions:"NewMeetupForm_actions__2d_V8"}}},[[38,1,2]]]);
//# sourceMappingURL=main.e2146145.chunk.js.map