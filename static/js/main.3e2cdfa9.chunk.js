(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(7),a=n.n(c),o=n(2),i=n(3),s=n(5),r=n(4),l=n(1),u=n.n(l),d=(n(12),n(13),n(0)),m=function(e){Object(s.a)(n,e);var t=Object(r.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={dateNow:new Date},e.timeID=0,e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timeID=window.setInterval((function(){e.setState({dateNow:new Date}),console.info(e.state.dateNow.toUTCString().slice(-12,-4))}),1e3)}},{key:"componentDidUpdate",value:function(e){e.name!==this.props.name&&console.debug("Renamed from ".concat(e.name," to ").concat(this.props.name))}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timeID)}},{key:"render",value:function(){var e=this.state.dateNow,t=this.props.name;return Object(d.jsxs)("div",{className:"Clock",children:[Object(d.jsx)("strong",{className:"Clock__name",children:t})," time is ",Object(d.jsx)("span",{className:"Clock__time",children:e.toUTCString().slice(-12,-4)})]})}}]),n}(u.a.Component);function h(){var e=Date.now().toString().slice(-4);return"Clock-".concat(e)}var v=function(e){Object(s.a)(n,e);var t=Object(r.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={hasClock:!0,clockName:"Clock-0"},e.timeId=0,e.handleContextMenu=function(t){t.preventDefault(),e.setState({hasClock:!1})},e.handleClick=function(){e.setState({hasClock:!0})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("contextmenu",this.handleContextMenu),document.addEventListener("click",this.handleClick),this.timeId=window.setInterval((function(){e.setState({clockName:h()})}),3300)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("contextmenu",this.handleContextMenu),document.removeEventListener("click",this.handleClick),window.clearInterval(this.timeId)}},{key:"render",value:function(){var e=this.state,t=e.hasClock,n=e.clockName;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"React clock"}),t&&Object(d.jsx)(m,{name:n})]})}}]),n}(u.a.Component);a.a.render(Object(d.jsx)(v,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.3e2cdfa9.chunk.js.map