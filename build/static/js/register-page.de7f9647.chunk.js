(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[5],{103:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));t(104);var s=t(105),n=t(1),r=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(s.a,{as:"input",type:"submit",value:"Sign in",size:"sm"})})}},108:function(e,a,t){e.exports={form:"Register_form__1WbbE",title:"Register_title__fzW5p",label:"Register_label__3nnyz",input:"Register_input__2bX9H"}},116:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return p}));var s=t(19),n=t(0),r=t(13),o=t(2),l=t(18),c=t(28),i=t(20),u=t(103),m=t(108),b=t.n(m),d=t(1);function p(){var e=Object(r.b)(),a=Object(r.c)(l.a),t=Object(n.useState)(""),m=Object(s.a)(t,2),p=m[0],j=m[1],h=Object(n.useState)(""),w=Object(s.a)(h,2),f=w[0],O=w[1],g=Object(n.useState)(""),v=Object(s.a)(g,2),x=v[0],_=v[1],N=Object(n.useCallback)((function(e){var a={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(a.email="Invalid email address"):a.email="Required",e.name?e.name.length<3&&(a.name="Name should be longer then 3 symbols"):a.name="Required",e.password?(e.password.length<8||e.password.length>12)&&(a.password="Password should be longer then 7 symbols and shorter than 12 symbols"):a.password="Required",e.confirmPassword!==e.password&&(a.confirmPassword="Password is not confirmed!"),a}),[]),y=function(e){var a=e.target,t=a.name,s=a.value;switch(t){case"name":return j(s);case"email":return O(s);case"password":return _(s);default:return}},C=function(){j(""),O(""),_("")};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h2",{className:b.a.title,children:"Create account"}),Object(d.jsxs)("form",{onSubmit:function(a){a.preventDefault();var t=N({name:p,email:f,password:x});void 0===t.password&&(e(Object(c.d)({name:p,email:f,password:x})),i.b.success("You are registered!",{position:"top-center",autoClose:2500})),void 0!==t.password&&i.b.error("".concat(t.password),{position:"top-center",autoClose:4e3}),C()},className:b.a.form,autoComplete:"off",children:[Object(d.jsxs)("label",{className:b.a.label,children:["Name",Object(d.jsx)("input",{className:b.a.input,type:"text",name:"name",value:p,placeholder:"Your name",onChange:y})]}),Object(d.jsxs)("label",{className:b.a.label,children:["Email",Object(d.jsx)("input",{className:b.a.input,type:"email",name:"email",value:f,placeholder:"Your email",onChange:y})]}),Object(d.jsxs)("label",{className:b.a.label,children:["Password",Object(d.jsx)("input",{required:!0,className:b.a.input,type:"password",name:"password",value:x,placeholder:"Enter password",onChange:y})]}),Object(d.jsx)(u.a,{})]}),a&&Object(d.jsx)(o.a,{to:"/"})]})}}}]);
//# sourceMappingURL=register-page.de7f9647.chunk.js.map