(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{21:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(12),s=a.n(r),o=(a(21),a(9)),l=a(27),i=a(28),j=a(29),b=a(30),u=a(31),d=a(3),h=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(o.a)(r,2),h=s[0],O=s[1],p=Object(n.useState)(""),f=Object(o.a)(p,2),m=f[0],x=f[1];return Object(d.jsxs)(l.a,{children:[Object(d.jsxs)(i.a,{children:[Object(d.jsx)(j.a,{for:"exampleEmail",children:"Email"}),Object(d.jsx)(b.a,{type:"email",name:"email",id:"exampleEmail",placeholder:"with a placeholder",onChange:function(e){console.log(e.target.value),c(e.target.value)}})]}),Object(d.jsxs)(i.a,{children:[Object(d.jsx)(j.a,{for:"exampleUsername",children:"Username"}),Object(d.jsx)(b.a,{type:"Username",name:"Username",id:"exampleUsername",placeholder:"with a placeholder",onChange:function(e){console.log(e.target.value),x(e.target.value)}})]}),Object(d.jsxs)(i.a,{children:[Object(d.jsx)(j.a,{for:"examplePassword",children:"Password"}),Object(d.jsx)(b.a,{type:"password",name:"password",id:"examplePassword",placeholder:"password placeholder",onChange:function(e){console.log(e.target.value),O(e.target.value)}})]}),Object(d.jsx)("br",{}),Object(d.jsx)(u.a,{color:"primary",onClick:function(){fetch("/register_user",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a,password:h,Username:m})}).then((function(e){return e.json()})).then((function(e){console.log("Success:",e)})).catch((function(e){console.error("Error:",e)}))},children:"Submit"})]})},O=a(13),p=a(14),f=a(16),m=a(15),x=function(e){Object(f.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(O.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).states={},e}return Object(p.a)(a,[{key:"render",value:function(){return Object(d.jsx)(c.a.Fragment,{children:Object(d.jsx)("nav",{className:"navbar navbar-light bg-light",children:Object(d.jsx)("div",{className:"container-fluid",children:Object(d.jsx)("a",{className:"navbar-brand",href:"#",children:"ProjectVM"})})})})}}]),a}(n.Component),g=x,v=a(32),w=a(33),y=a(34);var S=function(){var e=Object(n.useState)({}),t=Object(o.a)(e,2);return t[0],t[1],Object(n.useEffect)((function(){fetch("/api").then((function(e){if(200===e.status)return e.json()})).then((function(e){return console.log(e)})).then((function(e){return console.log(e)}))}),[]),Object(d.jsxs)(v.a,{className:"App",fluid:"sm",children:[Object(d.jsx)(g,{}),Object(d.jsx)(w.a,{xs:"3",children:Object(d.jsxs)(y.a,{children:[Object(d.jsx)(h,{}),Object(d.jsx)("br",{})]})})]})};a(25);s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(S,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.3ed44499.chunk.js.map