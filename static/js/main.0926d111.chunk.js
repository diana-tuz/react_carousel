(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(4),a=n.n(c),i=n(2),s=n(1),l=(n(9),n(10),n(0)),b=function(e){var t=e.images,n=e.step,c=e.frameSize,a=e.itemWidth,b=e.animationDuration,o=e.infinite,m=Object(s.useState)(0),j=Object(i.a)(m,2),r=j[0],u=j[1],d=Object(s.useState)(c),h=Object(i.a)(d,2),p=h[0],g=h[1];Object(s.useEffect)((function(){g(r+c)}),[c,r]);return Object(l.jsxs)("div",{className:"Carousel",style:{width:"".concat(a*c,"px")},children:[Object(l.jsx)("ul",{className:"Carousel__list",style:{transition:"transform ".concat(b,"ms ease-in-out")},children:t.slice(r,p).map((function(e){return Object(l.jsx)("li",{className:"Carousel__image",children:Object(l.jsx)("img",{src:e,alt:e,style:{width:"".concat(a,"px")}})},e)}))}),Object(l.jsxs)("div",{className:"Carousel__buttons",children:[Object(l.jsx)("button",{className:"Carousel__bnt",type:"button",onClick:function(){r>0&&(u(r-n),g(p-n))},disabled:0===r,children:"Prev"}),Object(l.jsx)("button",{className:"Carousel__bnt",type:"button","data-cy":"next",onClick:function(){p<t.length&&(g(p+n),u(r+n)),o&&p===t.length-1&&(u(0),g(c))},disabled:p>=t.length&&!1===o,children:"Next"})]})]})},o=function(){var e=["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],t=Object(s.useState)(3),n=Object(i.a)(t,2),c=n[0],a=n[1],o=Object(s.useState)(3),m=Object(i.a)(o,2),j=m[0],r=m[1],u=Object(s.useState)(130),d=Object(i.a)(u,2),h=d[0],p=d[1],g=Object(s.useState)(1e3),O=Object(i.a)(g,2),_=O[0],x=O[1],f=Object(s.useState)(!1),N=Object(i.a)(f,2),k=N[0],v=N[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{"data-cy":"title",className:"App__title",children:"Carousel with ".concat(e.length," images")}),Object(l.jsxs)("div",{className:"block",children:[Object(l.jsxs)("div",{className:"block__element",children:[Object(l.jsx)("label",{htmlFor:"Width",className:"block__label",children:"Item Width:"}),Object(l.jsx)("input",{onChange:function(e){p(+e.target.value)},value:h,type:"number",id:"Width",className:"block__input"})]}),Object(l.jsxs)("div",{className:"block__element",children:[Object(l.jsx)("label",{htmlFor:"Size",className:"block__label",children:"Frame Size:"}),Object(l.jsx)("input",{onChange:function(e){r(+e.target.value)},value:j,type:"number",id:"Size",className:"block__input",min:1,max:e.length})]}),Object(l.jsxs)("div",{className:"block__element",children:[Object(l.jsx)("label",{htmlFor:"Step",className:"block__label",children:"Step:"}),Object(l.jsx)("input",{onChange:function(e){a(+e.target.value)},value:c,type:"number",id:"Step",className:"block__input",min:1,max:e.length})]}),Object(l.jsxs)("div",{className:"block__element",children:[Object(l.jsx)("label",{htmlFor:"Animation",className:"block__label",children:"Animation Duration:"}),Object(l.jsx)("input",{onChange:function(e){x(+e.target.value)},value:_,type:"number",id:"Animation",className:"block__input"})]}),Object(l.jsxs)("div",{className:"block__checkbox",children:[Object(l.jsx)("label",{htmlFor:"infinite",children:"Infinite"}),Object(l.jsx)("input",{checked:k,onChange:function(e){v(e.target.checked)},type:"checkbox",name:"Infinite",id:"1"})]})]}),Object(l.jsx)(b,{images:e,step:c,frameSize:j,itemWidth:h,animationDuration:_,infinite:k})]})};a.a.render(Object(l.jsx)(o,{}),document.getElementById("root"))},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.0926d111.chunk.js.map