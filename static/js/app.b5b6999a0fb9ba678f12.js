webpackJsonp([1],{NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n("CLCt");var o=n("7+uW"),a=n("PXmv"),i=n("/ocq");console.clear();var s={beforeCreate:function(){console.log("beforeCreate")},created:function(){console.log("created"),this.fetcher=fetch("https://raw.githubusercontent.com/AndreSteenveld/Chessy/master/package.json",{mode:"cors"}).then(function(e){return e.json()})},beforeMount:function(){console.log("beforeMount")},mounted:function(){console.log("mounted"),this.getName()},beforeUpdate:function(){console.log("beforeUpdate")},updated:function(){console.log("updated")},activated:function(){console.log("activated")},data:function(){return console.log("data"),{name:null,name_input:null}},methods:{getName:function(){var e=this;console.log("getName"),this.fetcher.then(function(t){return e.name=t.name})},changeName:function(){this.name=this.name_input||this.name}}},u={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[e._v("Hallo "+e._s(e.name))]),e._v(" "),n("p",[e._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet urna leo. Duis nunc libero, gravida ac orci et, viverra venenatis mi. Nunc quis placerat dolor. Quisque sit amet eleifend metus, in mattis lectus. Suspendisse scelerisque est non magna ultrices hendrerit. Phasellus quis odio porta, mollis metus at, tincidunt sem. Suspendisse porttitor risus ex, et placerat velit commodo id. Duis dapibus feugiat placerat. Donec non massa risus. Duis in fringilla libero, et pharetra sem. Nullam euismod turpis tortor, quis pharetra eros semper faucibus.\n\nNunc volutpat massa risus, lacinia tristique purus tempus sit amet. Morbi sed egestas diam. Fusce tempor vitae nisl at semper. In mattis metus nisl, non vulputate neque convallis at. Pellentesque condimentum auctor scelerisque. Sed feugiat risus vitae purus ornare, nec venenatis nunc pharetra. Donec et tortor nec felis cursus commodo vitae nec velit. Integer quis mauris eu libero lobortis condimentum. Pellentesque vel erat eu elit commodo porttitor. Duis vel risus velit. Vivamus non urna ligula. Aenean condimentum diam orci, in feugiat augue facilisis a.")]),e._v(" "),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.name_input,expression:"name_input"}],attrs:{type:"text",placeholder:"Voornaam"},domProps:{value:e.name_input},on:{input:function(t){t.target.composing||(e.name_input=t.target.value)}}}),e._v(" "),n("button",{on:{click:e.changeName}},[e._v("Verander mijn naam!")])])])},staticRenderFns:[]},r=n("VU/8")(s,u,!1,null,null,null).exports;o.a.use(i.a);new i.a({routes:[{path:"/",name:"Home",component:r}]});o.a.use(a.a),o.a.config.productionTip=!1,o.a.customElement("home-component",r)}},["NHnr"]);
//# sourceMappingURL=app.b5b6999a0fb9ba678f12.js.map