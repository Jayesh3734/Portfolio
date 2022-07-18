"use strict";(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[656],{6656:function(e,t,n){n.r(t),n.d(t,{default:function(){return E}});var r=n(2791),o=n(1523),c=n(6842),a=n(184),i=function(e){var t=e.data;return(0,a.jsx)("article",{className:"degree-container",children:(0,a.jsxs)("header",{children:[(0,a.jsx)("h4",{className:"degree",children:t.degree}),(0,a.jsxs)("p",{className:"school",children:[(0,a.jsx)("a",{href:t.link,children:t.school}),", ",t.year,", ",t.cgpa," "]})]})})},s=function(e){var t=e.data;return(0,a.jsxs)("div",{className:"education",children:[(0,a.jsx)("div",{className:"link-to",id:"education"}),(0,a.jsx)("div",{className:"title",children:(0,a.jsx)("h3",{children:"Education"})}),t.map((function(e){return(0,a.jsx)(i,{data:e},e.school)}))]})};s.defaultProps={data:[]};var l=s;function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=n(9611);function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function f(e,t){if(t&&("object"===d(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function m(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=y(e);if(t){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}var g=n(4942),b=n(1413),h=function(e){var t=e.handleClick,n=e.active,r=e.label;return(0,a.jsx)("button",{className:"skillbutton ".concat(n[r]?"skillbutton-active":""),type:"button",onClick:function(){return t(r)},children:r})},v=function(e){var t=e.data,n=e.categories,r=t.category,o=t.competency,c=t.title,i={background:n.filter((function(e){return r.includes(e.name)})).map((function(e){return e.color}))[0]},s=(0,b.Z)((0,b.Z)({},i),{},{width:"".concat(String(Math.min(100,Math.max(o/5*100,0))),"%")});return(0,a.jsxs)("div",{className:"skillbar clearfix",children:[(0,a.jsx)("div",{className:"skillbar-title",style:i,children:(0,a.jsx)("span",{children:c})}),(0,a.jsx)("div",{className:"skillbar-bar",style:s}),(0,a.jsxs)("div",{className:"skill-bar-percent",children:[o," / 5"]})]})};v.defaultProps={categories:[]};var j=v,k=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&(0,p.Z)(e,t)}(c,e);var t,n,r,o=m(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=o.call(this,e)).handleChildClick=function(e){t.setState((function(t){var n=Object.keys(t.buttons).reduce((function(n,r){return(0,b.Z)((0,b.Z)({},n),{},(0,g.Z)({},r,e===r&&!t.buttons[r]))}),{});return n.All=!Object.keys(t.buttons).some((function(e){return n[e]})),{buttons:n}}))},t.state=function(e){var t=e.categories,n=e.skills;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return(0,b.Z)((0,b.Z)({},e),{},(0,g.Z)({},t,!1))}),{All:!0}),skills:n}}({categories:e.categories,skills:e.skills}),t}return t=c,(n=[{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,n){return e.state.buttons[n]?n:t}),"All");return this.state.skills.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(e){return"All"===t||e.category.includes(t)})).map((function(t){return(0,a.jsx)(j,{categories:e.props.categories,data:t},t.title)}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return(0,a.jsx)(h,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return(0,a.jsxs)("div",{className:"skills",children:[(0,a.jsx)("div",{className:"link-to",id:"skills"}),(0,a.jsxs)("div",{className:"title",children:[(0,a.jsx)("h3",{children:"Skills"}),(0,a.jsx)("p",{children:"Note: I think these sections are silly, but everyone seems to have one. Here is a *mostly* honest overview of my skills."})]}),(0,a.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),(0,a.jsx)("div",{className:"skill-row-container",children:this.getRows()})]})}}])&&u(t.prototype,n),r&&u(t,r),Object.defineProperty(t,"prototype",{writable:!1}),c}(r.Component);k.defaultProps={skills:[],categories:[]};var S=k,x=[{school:"Institute of Infrastructure, Technology, Research and Management",degree:"B.Tech Mechanical Engineering",link:"https://iitram.ac.in",year:"2019 - 2023",cgpa:"{CGPA: 7.88}"},{school:"St. Aloysius Junior College",degree:"HSC, Science",year:"2016 - 2018",cgpa:"{Percentage: 84.92 %}"}],D=n(907);var O=n(181);var w,P=[{title:"Javascript",competency:4,category:["Web Development","Languages","Javascript"]},{title:"Node.JS",competency:3,category:["Web Development","Javascript"]},{title:"React",competency:3,category:["Web Development","Javascript"]},{title:"Heroku",competency:2,category:["Web Development","Tools"]},{title:"MongoDB",competency:3,category:["Web Development","Databases"]},{title:"jQuery",competency:3,category:["Web Development","Javascript"]},{title:"Bootstrap",competency:4,category:["Web Development","Javascript"]},{title:"PostgreSQL/SQLite3/SQL",competency:3,category:["Web Development","Databases","Languages"]},{title:"Express.JS",competency:2,category:["Web Development","Javascript"]},{title:"Git",competency:3,category:["Tools"]},{title:"Numpy",competency:3,category:["Data Science","Data Engineering"]},{title:"Tensorflow + Keras",competency:2,category:["Data Science"]},{title:"Jupyter",competency:3,category:["Data Science"]},{title:"HTML + SASS/SCSS/CSS",competency:3,category:["Web Development","Languages"]},{title:"Python",competency:4,category:["Languages"]},{title:"C/C++",competency:4,category:["Languages"]},{title:"Java",competency:4,category:["Android Development","Languages"]},{title:"Kotlin",competency:4,category:["Android Development","Languages"]},{title:"MATLAB",competency:2,category:["Languages"]},{title:"Data Visualization",competency:3,category:["Data Science"]},{title:"Pandas",competency:3,category:["Data Engineering","Data Science"]},{title:"Matplotlib",competency:3,category:["Data Engineering","Data Science"]},{title:"Scikit-Learn",competency:3,category:["Data Engineering","Data Science"]},{title:"Flutter",competency:2,category:["Android Development"]},{title:"OpenCV",competency:3,category:["Data Science","Data Engineering"]},{title:"Ajax",competency:3,category:["Web Development","Javascript"]},{title:"React-Redux",competency:3,category:["Web Development","Javascript"]},{title:"NPM",competency:3,category:["Web Development","Tools"]},{title:"Postman",competency:3,category:["Web Development","Tools"]},{title:"Insomnia",competency:3,category:["Web Development","Tools"]},{title:"MS Azure",competency:2,category:["Cloud"]},{title:"Firebase",competency:2,category:["Web Development","Android Development"]},{title:"XML",competency:3,category:["Languages","Android Development"]}].map((function(e){return(0,b.Z)((0,b.Z)({},e),{},{category:e.category.sort()})})),N=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],C=(w=new Set(P.reduce((function(e,t){var n=t.category;return e.concat(n)}),[])),function(e){if(Array.isArray(e))return(0,D.Z)(e)}(w)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(w)||(0,O.Z)(w)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort().map((function(e,t){return{name:e,color:N[t]}})),A=["Education","Skills"],E=function(){return(0,a.jsx)(c.Z,{title:"Resume",description:"I'm a junior undergrad \u2013 Final year student at IITRAM, majoring in Mechanical Engineering and pursuing minors in Computer Science. I aspire to become a Software Engineer, not because it\u2019s in vogue, but simply because I love the endless possibilities and novelties that this domain holds. A student at heart - continuously evolving and looking to learn new things.",children:(0,a.jsxs)("article",{className:"post",id:"resume",children:[(0,a.jsx)("header",{children:(0,a.jsxs)("div",{className:"title",children:[(0,a.jsx)("h2",{"data-testid":"heading",children:(0,a.jsx)(o.rU,{to:"resume",children:"Resume"})}),(0,a.jsx)("div",{className:"link-container",children:A.map((function(e){return(0,a.jsx)("h4",{children:(0,a.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),(0,a.jsx)(l,{data:x}),(0,a.jsx)(S,{skills:P,categories:C})]})})}},4942:function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})},1413:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(4942);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}}}]);
//# sourceMappingURL=656.a85c1cd2.chunk.js.map