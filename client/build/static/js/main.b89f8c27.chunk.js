(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{119:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n(8),a=n.n(c),s=n(148),r=n(158),o=n(155),l=n(156),j=n(65),d=n.n(j),u=n(16),h=n(151),b=n(66),f=n(5),p=Object(s.a)((function(e){return Object(r.a)({root:{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center"},wheel:{width:"100%",height:"100%",display:"grid",placeItems:"center"}})})),O=function(e){var t=e.socket,n=p(),c=Object(i.useState)(0),a=Object(u.a)(c,2),s=a[0],r=a[1],o=Object(i.useState)(!1),l=Object(u.a)(o,2),j=l[0],d=l[1],O=Object(i.useState)(0),m=Object(u.a)(O,2),x=m[0],g=m[1];Object(i.useEffect)((function(){t.on("wheel",(function(e){r(e.prize),console.log(e.prize),d(e.spin)})),t.on("time",(function(e){g(e.timer)}))}),[]);return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:n.root,children:[Object(f.jsx)("div",{className:n.wheel,children:Object(f.jsx)(b.Wheel,{data:[{option:"0"},{option:"1"},{option:"2"},{option:"3"},{option:"4"},{option:"5"},{option:"6"},{option:"7"},{option:"8"},{option:"9"}],mustStartSpinning:j,onStopSpinning:function(){d(!1)},prizeNumber:s,backgroundColors:["#3e3e3e","#df3428"],textColors:["#ffffff"]})}),Object(f.jsxs)(h.a,{variant:"h4",children:["Spinning in: ",25-x]})]})})},m=n(73),x=n(153),g=n(154),v=n(157),w=n(72),y=Object(s.a)((function(e){return Object(r.a)({root:{width:"100%",height:"80vh",display:"flex",justifyContent:"space-around",flexDirection:"column"},paper:{width:"100%",height:"100%"},chat:{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"flex-end",overflow:"auto"},text:{wordBreak:"break-all",padding:10,margin:10,whiteSpace:"pre-line"}})})),k=!1;setInterval((function(){k=!0}),1e3);var S=function(e){var t=e.socket,n=y(),c=Object(i.useState)(""),a=Object(u.a)(c,2),s=a[0],r=a[1],o=Object(i.useState)([]),l=Object(u.a)(o,2),j=l[0],d=l[1];return Object(i.useEffect)((function(){t.on("message",(function(e){d((function(t){return[].concat(Object(m.a)(t),[e])}))}))}),[]),Object(w.a)("keydown",(function(e){if(console.log(e),!e.shiftKey&&k&&13===e.keyCode){if(console.log("Enter pressed"),!s.trim())return;if(s.trim().length>800)return;e.preventDefault(),t.emit("message",{name:"Tronikel",message:s.replace(/[\r\n]+/g,"\n").trim()}),r(""),k=!1}})),Object(f.jsxs)("div",{className:n.root,children:[Object(f.jsx)(x.a,{variant:"outlined",className:n.paper,children:Object(f.jsx)("div",{className:n.chat,children:Object(f.jsx)("div",{children:j.map((function(e){return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(x.a,{elevation:15,className:n.text,children:[Object(f.jsxs)(h.a,{variant:"button",children:[e.name,":"]}),Object(f.jsx)(g.a,{}),Object(f.jsx)(h.a,{variant:"subtitle1",children:e.message})]})})}))})})}),Object(f.jsx)("div",{style:{height:15}}),Object(f.jsx)(v.a,{variant:"outlined",label:"Message",value:s,maxRows:5,multiline:!0,onChange:function(e){return r(e.target.value)}})]})},N=d()(),C=Object(s.a)((function(e){return Object(r.a)({root:{width:"100%",height:"100%",display:"grid",placeItems:"center"},grid:{width:"100%",height:"100%"}})})),I=function(){var e=C();return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(o.a,{children:Object(f.jsx)("div",{className:e.root,children:Object(f.jsxs)(l.a,{className:e.grid,container:!0,spacing:6,direction:"row",justifyContent:"space-around",alignItems:"center",children:[Object(f.jsx)(l.a,{item:!0,xs:12,sm:12,md:3,lg:3,xl:3,children:Object(f.jsx)(S,{socket:N})}),Object(f.jsx)(l.a,{item:!0,xs:12,sm:12,md:4,lg:4,xl:4,children:Object(f.jsx)(O,{socket:N})})]})})})})};a.a.render(Object(f.jsx)(I,{}),document.getElementById("root"))}},[[119,1,2]]]);