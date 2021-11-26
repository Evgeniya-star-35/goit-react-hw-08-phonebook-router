(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[4],{108:function(e,t,n){e.exports={form:"Form_form__3DV7u",label:"Form_label__32End",input:"Form_input__15fWI",button:"Form_button__5bcY3",btnText:"Form_btnText__3eC4X"}},109:function(e,t,n){e.exports={text:"Filter_text__1hULH",value:"Filter_value__1OLhv"}},110:function(e,t,n){e.exports={name:"Contact_name__pg3E0",number:"Contact_number__1vgxi"}},111:function(e,t,n){e.exports={item:"ContactsList_item__3idEH",button:"ContactsList_button__3V7Di"}},112:function(e,t,n){e.exports={title:"Phonebook_title__HYIUD",contactTitle:"Phonebook_contactTitle__1yCdm"}},116:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return T}));var a=n(19),c=n(0),r=n(13),s=n(26),o=n(29),u=function(e){return e.contacts.contacts},i=function(e){return e.filter},b=Object(o.a)([u,i],(function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))})),l=n(12),m=n(108),j=n.n(m),d=n(1);function p(){var e=Object(c.useState)(""),t=Object(a.a)(e,2),n=t[0],o=t[1],i=Object(c.useState)(""),b=Object(a.a)(i,2),m=b[0],p=b[1],h=Object(r.c)(u),_=Object(r.b)(),O=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":o(a);break;case"number":p(a);break;default:return}},x=function(){o(""),p("")};return Object(d.jsxs)("form",{className:j.a.form,onSubmit:function(e){if(e.preventDefault(),h.some((function(e){return e.name.toLowerCase()===n.toLowerCase()})))return x(),alert("".concat(n," is already in the directory"));_(Object(l.a)({name:n,number:m})),s.b.success("Contact added to the phonebook!",{position:"top-center",autoClose:4e3}),x()},children:[Object(d.jsxs)("label",{className:j.a.label,children:["Name",Object(d.jsx)("input",{onChange:O,value:n,className:j.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(d.jsxs)("label",{className:j.a.label,children:["Phone number",Object(d.jsx)("input",{value:m,className:j.a.input,onChange:O,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(d.jsx)("button",{className:j.a.button,type:"submit",children:Object(d.jsx)("span",{className:j.a.btnText,children:" Add contact"})})]})}var h=n(40),_=n(109),O=n.n(_);function x(){var e=Object(r.c)(i),t=Object(r.b)();return Object(d.jsxs)("label",{className:O.a.text,children:["Find contacts by name",Object(d.jsx)("input",{className:O.a.value,type:"text",value:e,onChange:function(e){t(Object(h.a)(e.currentTarget.value))}})]})}var f=n(3),v=n.n(f),C=n(110),N=n.n(C);function g(e){var t=e.name,n=e.number;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("span",{className:N.a.name,children:[t,":"]}),Object(d.jsx)("span",{className:N.a.number,children:n})]})}g.propType={name:v.a.string.isRequired,number:v.a.number.isRequired};var k=n(111),y=n.n(k);function F(){var e=Object(r.c)(b),t=Object(r.b)();return Object(d.jsx)("ul",{children:e.length>0&&e.map((function(e){var n=e.name,a=e.number,c=e.id;return Object(d.jsxs)("li",{className:y.a.item,children:[Object(d.jsx)(g,{name:n,number:a}),Object(d.jsx)("button",{className:y.a.button,type:"button",onClick:function(){return function(e){t(Object(l.b)(e)),s.b.success("Contact deleted!",{position:"top-center",autoClose:4e3})}(c)},children:"Delete"})]},c)}))})}var w=n(112),L=n.n(w);function T(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h2",{className:L.a.title,children:"Phonebook"}),Object(d.jsx)(p,{}),Object(d.jsx)(x,{}),Object(d.jsx)("h3",{className:L.a.contactTitle,children:"Contacts"}),Object(d.jsx)(F,{})]})}}}]);
//# sourceMappingURL=phonebook-page.9c52de14.chunk.js.map