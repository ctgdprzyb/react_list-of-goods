(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{14:function(t,e,s){},16:function(t,e,s){"use strict";s.r(e);var n,r=s(4),c=s.n(r),o=s(5),i=s(6),a=s(8),l=s(7),u=s(1),b=s(2),h=s.n(b),d=(s(13),s(14),s(0)),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(n||(n={}));var p=function(t){Object(a.a)(s,t);var e=Object(l.a)(s);function s(){var t;Object(o.a)(this,s);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={isReversed:!1,sortType:0},t.sortAlphabetically=function(){t.setState({sortType:1})},t.sortByLength=function(){t.setState({sortType:2})},t.reverseSort=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t.resetSort=function(){t.setState({isReversed:!1,sortType:0})},t}return Object(i.a)(s,[{key:"render",value:function(){var t=function(t,e){var s,n=e.sortType,r=e.isReversed,c=Object(u.a)(t);switch(n){case 1:s=Object(u.a)(c).sort((function(t,e){return t.localeCompare(e)}));break;case 2:s=Object(u.a)(c).sort((function(t,e){return t.length-e.length}));break;default:s=Object(u.a)(c)}return r&&s.reverse(),console.debug(n,r),s}(j,this.state);return Object(d.jsxs)("div",{className:"section content",children:[Object(d.jsxs)("div",{className:"buttons",children:[Object(d.jsx)("button",{type:"button",className:1===this.state.sortType?"button is-success":"button is-success is-light",onClick:this.sortAlphabetically,children:"Sort alphabetically"}),Object(d.jsx)("button",{type:"button",className:2===this.state.sortType?"button is-success":"button is-success is-light",onClick:this.sortByLength,children:"Sort by length"}),Object(d.jsx)("button",{type:"button",className:!0===this.state.isReversed?"button is-success":"button is-success is-light",onClick:this.reverseSort,children:"Reverse"}),!1===this.state.isReversed&&0===this.state.sortType?null:Object(d.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:this.resetSort,children:"Reset"})]}),Object(d.jsx)("ul",{children:Object(d.jsx)("ul",{children:t.map((function(t){return Object(d.jsx)("li",{"data-cy":"Good",children:t},t)}))})})]})}}]),s}(h.a.Component);c.a.render(Object(d.jsx)(p,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.3babe02a.chunk.js.map