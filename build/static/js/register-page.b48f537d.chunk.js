(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[5],{103:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));t(104);var s=t(105),n=t(1),r=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(s.a,{as:"input",type:"submit",value:"Sign in",size:"sm"})})}},108:function(e,a,t){e.exports={form:"Register_form__1WbbE",title:"Register_title__fzW5p",label:"Register_label__3nnyz",input:"Register_input__2bX9H"}},116:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return d}));var s=t(20),n=t(0),r=t(13),l=t(2),c=t(19),o=t(28),i=(t(17),t(103)),u=t(108),m=t.n(u),b=t(1);function d(){var e=Object(r.b)(),a=Object(r.c)(c.a),t=Object(n.useState)(""),u=Object(s.a)(t,2),d=u[0],p=u[1],j=Object(n.useState)(""),h=Object(s.a)(j,2),f=h[0],O=h[1],w=Object(n.useState)(""),g=Object(s.a)(w,2),x=g[0],_=g[1],v=Object(n.useCallback)((function(e){var a={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(a.email="Invalid email address"):a.email="Required",e.name?e.name.length<3&&(a.name="Name should be longer then 3 symbols"):a.name="Required",e.password?(e.password.length<8||e.password.length>12)&&(a.password="Password should be longer then 7 symbols and shorter than 12 symbols"):a.password="Required",e.confirmPassword!==e.password&&(a.confirmPassword="Password is not confirmed!"),a}),[]),N=function(e){var a=e.target,t=a.name,s=a.value;switch(t){case"name":return p(s);case"email":return O(s);case"password":return _(s);default:return}},y=function(){p(""),O(""),_("")};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{className:m.a.title,children:"Create account"}),Object(b.jsxs)("form",{onSubmit:function(a){a.preventDefault(),v&&e(Object(o.d)({name:d,email:f,password:x})),v&&y()},className:m.a.form,autoComplete:"off",children:[Object(b.jsxs)("label",{className:m.a.label,children:["Name",Object(b.jsx)("input",{className:m.a.input,type:"text",name:"name",value:d,placeholder:"Your name",onChange:N})]}),Object(b.jsxs)("label",{className:m.a.label,children:["Email",Object(b.jsx)("input",{className:m.a.input,type:"email",name:"email",value:f,placeholder:"Your email",onChange:N})]}),Object(b.jsxs)("label",{className:m.a.label,children:["Password",Object(b.jsx)("input",{required:!0,className:m.a.input,type:"password",name:"password",value:x,placeholder:"Your password",onChange:N})]}),Object(b.jsx)(i.a,{})]}),a&&Object(b.jsx)(l.a,{to:"/"})]})}}}]);
//# sourceMappingURL=register-page.b48f537d.chunk.js.map