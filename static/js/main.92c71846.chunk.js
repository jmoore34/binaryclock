(this.webpackJsonpbinaryclock=this.webpackJsonpbinaryclock||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){},22:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(9),i=n.n(c),o=(n(17),n(2)),s=n(5),u=(n(18),n(6));function v(t){return[t/10>>0,t%10]}var d,j,m,b=n(1),f=u.a.div(d||(d=Object(s.a)(['\n  display: grid;\n  grid-template-areas:\n    ". .   .   .  .   .  ."\n    ". d16 d8  d4 d2  d1 ."\n    ". h8  mm8 m8 ss8 s8 ."\n    ". h4  mm4 m4 ss4 s4 ."\n    ". h2  mm2 m2 ss2 s2 ."\n    ". h1  mm1 m1 ss1 s1 ."\n    ". .   .   .  .   .  .";\n  grid-template-columns: 1fr repeat(5, 17vmin) 1fr;\n  grid-template-rows: 1fr repeat(5, 17vmin) 1fr;\n  width: 100vw;\n  height: 100vh;\n  grid-gap: 2vmin;\n'])));!function(t){t.Date="purple",t.Second="red",t.Minute="green",t.Hour="blue"}(m||(m={}));var g=u.a.div(j||(j=Object(s.a)(["\n  grid-area: ",";\n  background-color: ",";\n  opacity: ",";\n"])),(function(t){return t.area}),(function(t){return t.variant}),(function(t){return t.active?.9:.3}));var l=function(){var t=function(){var t=Object(a.useState)(new Date),e=Object(o.a)(t,2),n=e[0],r=e[1],c=setTimeout((function t(){var e=new Date;r(e);var n=1e3-e.getMilliseconds()+5;c=setTimeout(t,n)}),0);return Object(a.useEffect)((function(){return function(){return clearTimeout(c)}})),n}(),e=t.getDate(),n=t.getHours()%12;0===n&&(n=12);var r=v(t.getMinutes()),c=Object(o.a)(r,2),i=c[0],s=c[1],u=v(t.getSeconds()),d=Object(o.a)(u,2),j=d[0],l=d[1];return Object(b.jsxs)(f,{children:[[1,2,4,8].map((function(t){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(g,{variant:m.Date,area:"d".concat(t),active:e&t}),Object(b.jsx)(g,{variant:m.Hour,area:"h".concat(t),active:n&t}),Object(b.jsx)(g,{variant:m.Minute,area:"m".concat(t),active:s&t}),Object(b.jsx)(g,{variant:m.Minute,area:"mm".concat(t),active:i&t}),Object(b.jsx)(g,{variant:m.Second,area:"s".concat(t),active:l&t}),Object(b.jsx)(g,{variant:m.Second,area:"ss".concat(t),active:j&t})]})})),Object(b.jsx)(g,{variant:m.Date,area:"d16",active:16&e})]})},O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),a(t),r(t),c(t),i(t)}))};i.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(l,{})}),document.getElementById("root")),O()}},[[22,1,2]]]);
//# sourceMappingURL=main.92c71846.chunk.js.map