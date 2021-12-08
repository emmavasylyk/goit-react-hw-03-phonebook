(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={LableFilter:"Filter_LableFilter__2ffja",InputFilter:"Filter_InputFilter__sHDye"}},12:function(t,e,n){t.exports={Container:"Container_Container__1Pzhq"}},20:function(t,e,n){},22:function(t,e,n){},26:function(t,e,n){"use strict";n.r(e);var a=n(2),r=n.n(a),c=n(11),o=n.n(c),s=(n(20),n(14)),i=n(4),u=n(5),l=n(7),m=n(6),d=n(15),b=(n(21),n(22),n(1)),h=n.n(b),p=n(12),f=n.n(p),j=n(0),C=function(t){var e=t.children;return Object(j.jsx)("div",{className:f.a.Container,children:e})};C.protoTypes={children:h.a.string};var v=C,g=n(13),O=n(3),x=n.n(O),_=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.hundleChange=function(e){var n=e.currentTarget,a=n.name,r=n.value;t.setState(Object(g.a)({},a,r))},t.hundleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(j.jsxs)("form",{onSubmit:this.hundleSubmit,children:[Object(j.jsxs)("label",{className:x.a.LableName,children:["Name",Object(j.jsx)("input",{className:x.a.InputForm,placeholder:"Ivan Petrov",type:"text",name:"name",value:e,onChange:this.hundleChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),Object(j.jsxs)("label",{className:x.a.LableName,children:["Number",Object(j.jsx)("input",{className:x.a.InputForm,placeholder:"111-11-11",type:"tel",name:"number",value:n,onChange:this.hundleChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),Object(j.jsx)("button",{className:x.a.ButtonContactForm,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),F=_,L=n(8),y=n.n(L),N=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(j.jsx)("ul",{children:e.map((function(t){var e=t.id,a=t.name,r=t.number;return Object(j.jsxs)("li",{className:y.a.ContactListItem,children:[Object(j.jsxs)("p",{className:y.a.ContactList,children:[a,": ",r]}),Object(j.jsx)("button",{className:y.a.ContactListButton,type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))})};N.protoTypes={contacts:h.a.arrayOf(h.a.shape({id:h.a.string.isRequired,name:h.a.string.isRequired,number:h.a.number.isRequired})),onDeleteContact:h.a.arrayOf(h.a.shape({id:h.a.string.isRequired}))};var S=N,I=n(10),k=n.n(I),D=function(t){var e=t.value,n=t.onChange;return Object(j.jsxs)("label",{className:k.a.LableFilter,children:["Find contacts by name",Object(j.jsx)("input",{className:k.a.InputFilter,placeholder:"Ivan Petrov",type:"text",value:e,onChange:n})]})};D.protoTypes={value:h.a.string.isRequired,onChange:h.a.string.isRequired};var q=D,w=["Title"],A=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.formSubmitHandler=function(e){var n=t.state.contacts,a={id:Object(d.a)(),name:e.name,number:e.number};n.find((function(t){return t.name===a.name}))?alert("".concat(a.name," \u0443\u0436\u0435 \u0435\u0441\u0442\u044c")):t.setState((function(t){var e=t.contacts;return{contacts:[a].concat(Object(s.a)(e))}}))},t.getVisibleContactList=function(){var e=t.state,n=e.filter,a=e.contacts,r=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(r)}))},t.deleteContactList=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&(console.log("\u041e\u0431\u043d\u043e\u0432\u0438\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0435 contacts"),localStorage.setItem("contacts",JSON.stringify(this.state.contacts)))}},{key:"render",value:function(){var t=this.state.filter;return Object(j.jsxs)(v,{children:[Object(j.jsx)("h1",{className:w,children:"Phonebook"}),Object(j.jsx)(F,{onSubmit:this.formSubmitHandler}),Object(j.jsx)("h2",{className:w,children:"Contacts"}),Object(j.jsx)(q,{value:t,onChange:this.changeFilter}),Object(j.jsx)(S,{contacts:this.getVisibleContactList(),onDeleteContact:this.deleteContactList})]})}}]),n}(a.Component),B=A,P=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),a(t),r(t),c(t),o(t)}))};o.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(B,{})}),document.getElementById("root")),P()},3:function(t,e,n){t.exports={LableName:"ContactForm_LableName__1kG3y",InputForm:"ContactForm_InputForm__1F8fD",ButtonContactForm:"ContactForm_ButtonContactForm__nuk9Y"}},8:function(t,e,n){t.exports={ContactListItem:"ContactList_ContactListItem__2IDqt",ContactListButton:"ContactList_ContactListButton___1PVN",ContactList:"ContactList_ContactList__2aps0"}}},[[26,1,2]]]);
//# sourceMappingURL=main.7310d191.chunk.js.map