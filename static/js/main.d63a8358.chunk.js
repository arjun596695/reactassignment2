(this.webpackJsonpassignment2=this.webpackJsonpassignment2||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(3),i=n.n(s),l=(n(12),n.p,n(13),n(4)),u=n(5),h=n(7),j=n(6),r=n(0),b=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleUsernameChange=function(e){a.setState({username:e.target.value})},a.handleFeedbackChange=function(e){a.setState({feedback:e.target.value})},a.handleEmailChange=function(e){a.setState({email:e.target.value})},a.handleSubjectsChange=function(e){a.setState({subjects:e.target.value})},a.handleSubmit=function(e){alert("".concat(a.state.username," ").concat(a.state.feedback," ").concat(a.state.email," ").concat(a.state.subjects)),e.preventDefault()},a.state={username:"",feedback:"",email:"",subjects:""},a}return Object(u.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(r.jsx)("div",{children:Object(r.jsx)("h1",{children:"Registration"})}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{children:"First Name"}),Object(r.jsx)("input",{type:"text",value:this.state.username,onChange:this.handleUsernameChange})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{children:"Last Name"}),Object(r.jsx)("input",{value:this.state.feedback,onChange:this.handleFeedbackChange})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{children:"Email"}),Object(r.jsx)("input",{value:this.state.email,onChange:this.handleEmailChange})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{children:"Subjects"}),Object(r.jsxs)("select",{value:this.state.sub,onChange:this.handleSubjectsChange,children:[Object(r.jsx)("option",{value:"datamining",children:"DataMining"}),Object(r.jsx)("option",{value:"angular",children:"Angular"}),Object(r.jsx)("option",{value:"vue",children:"Vue"})]})]}),Object(r.jsx)("button",{type:"submit",children:"Submit"})]})}}]),n}(a.Component);var d=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(b,{})})},o=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(d,{})}),document.getElementById("root")),o()}},[[15,1,2]]]);
//# sourceMappingURL=main.d63a8358.chunk.js.map