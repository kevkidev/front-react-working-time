(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[5],{45:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return v}));var l=t(6),r=t(8),n=t(15),m=t(14),i=t(0),c=t.n(i),s=t(17);var o=t(23),u=t(2),p=t(12),d=function(e){Object(n.a)(t,e);var a=Object(m.a)(t);function t(e){var r;return Object(l.a)(this,t),(r=a.call(this,e)).state={id:"",secret:""},r.handleSubmit=r.handleSubmit.bind(Object(o.a)(r)),r.handleFormChange=r.handleFormChange.bind(Object(o.a)(r)),r}return Object(r.a)(t,[{key:"handleFormChange",value:function(e){var a,t,l;this.setState((a={},t=e.target.name,l=e.target.value,t in a?Object.defineProperty(a,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):a[t]=l,a))}},{key:"handleSubmit",value:function(e){var a=p.a.checkForm(this.state)?"/profil":"/auth";this.props.history.push(a),e.preventDefault()}},{key:"render",value:function(){return c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"inputEmail"},"Identifiant"),c.a.createElement("input",{type:"email",className:"form-control",id:"inputEmail",name:"id","aria-describedby":"emailHelp",placeholder:"Veuillez saisir votre email de connexion.",value:this.state.id,onChange:this.handleFormChange}),c.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"C'est l'adresse email que vous avez utiliser lors de votre enregistrement.")),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Mot de passe"),c.a.createElement("input",{type:"password",className:"form-control",id:"exampleInputPassword1",name:"secret",placeholder:"Veuillez saisir votre mot de passe",value:this.state.secret,onChange:this.handleFormChange})),c.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Entrer"))}}]),t}(c.a.Component),h=Object(u.g)(d);function b(){return c.a.createElement("form",null,c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"inputEmail"},"Email"),c.a.createElement("input",{type:"email",className:"form-control",id:"inputEmail","aria-describedby":"emailHelp",placeholder:"Veuillez saisir votre adresse email."}),c.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"Cet email sera utile pour activer votre compte et vous connecter par la suite.")),c.a.createElement("div",{className:"form-group form-check"},c.a.createElement("input",{type:"checkbox",className:"form-check-input",id:"exampleCheck1"}),c.a.createElement("label",{className:"form-check-label",htmlFor:"exampleCheck1"},"J'accepte les ",c.a.createElement("a",{href:"#"},"conditions d'utilisation"),".")),c.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Je m'enregistrer"))}var v=function(e){Object(n.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return s.a.getAuthSP().drop(),c.a.createElement(i.Fragment,null,c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm"},c.a.createElement("h2",null,"Je cr\xe9e un compte:"),c.a.createElement(b,null)),c.a.createElement("div",{className:"col-sm"},c.a.createElement("h2",null,"Je me connecte:"),c.a.createElement(h,null))))}}]),t}(c.a.Component)}}]);
//# sourceMappingURL=5.ee28f1ce.chunk.js.map