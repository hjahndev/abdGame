(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[753],{849:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/centerDong",function(){return t(2203)}])},2203:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return o}});var a=t(5893),i=t(7294),u=t(1163),s=t(9473),c=function(){var n=(0,s.v9)((function(n){return n.index.player}));return(0,a.jsxs)("div",{className:"player-stat",children:[(0,a.jsx)("div",{id:"player-name",children:n.name}),"\uccb4\ub825:",n.hp,"/",n.maxHp," \uc815\uc2e0\ub825:",n.mp,"/",n.maxMp," \uacf5\uaca9\ub825:",n.att," \uacbd\ud5d8\uce58: ",n.xp]})},l=function(){var n=(0,s.v9)((function(n){return n})),e=n.index.scripts,t=n.index.day;return(0,a.jsxs)("div",{className:"script",children:[t>1&&t<7?"".concat(t-1,"\uc77c\ucc28."):null,void 0!==e&&t<7?e.map((function(n,e){return(0,a.jsx)("p",{children:n},e)})):null]})},r=t(8062),o=function(){var n=(0,i.useState)(""),e=n[0],t=n[1],o=(0,i.useState)(""),d=o[0],p=o[1],x=(0,i.useRef)(null),f=(0,i.useRef)(null),v=(0,i.useState)(1),h=v[0],m=v[1],g=(0,s.I0)(),j=(0,s.v9)((function(n){return n})),k=j.index.select,y=j.index.sceneStatus,N=(0,i.useState)("onGoing"),_=N[0],C=(N[1],(0,u.useRouter)());return(0,a.jsxs)("div",{className:"centerDong",children:[(0,a.jsx)(l,{}),1===j.index.day&&"input"===j.index.play?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("input",{type:"text",ref:x,value:e,onChange:function(n){t(n.target.value)}}),(0,a.jsx)("button",{className:"centerDong-btn",onClick:function(n){g({type:r.aK,data:{status:_,action:"event",inputData:{userInput:e},gameToken:j.index.gameToken}})},children:"\uc785\ub825"})]}):null,j.index.inputVisible?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("input",{type:"text",ref:f,value:d,onChange:function(n){p(n.target.value)},placeholder:"\uc548\ub155\ud558\uc138\uc694? \uc0c8\ub85c\uc628 \uac1c\ubc1c\uc790 \uc0bc\ubc88\uc785\ub2c8\ub2e4."}),(0,a.jsx)("button",{className:"centerDong-btn",onClick:function(n){g({type:r.NH,data:{status:_,action:"event",inputData:{userInput:d},gameToken:j.index.gameToken}}),p("")},children:"\uc785\ub825"})]}):null,"end"===y?(0,a.jsx)("button",{className:"centerDong-btn",onClick:function(n){g({type:r.NH,data:{status:_,action:"event",gameToken:j.index.gameToken}}),6===j.index.day&&"end"===y&&C.push("/intro")},children:"\ub2e4\uc74c"}):null,"select"===j.index.play?(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{children:k.selectHead}),(0,a.jsx)("select",{onChange:function(n){m(n.target.value)},value:h,children:k.selectOptions.map((function(n){return(0,a.jsx)("option",{value:n.value,children:n.name},n.value)}))}),(0,a.jsx)("button",{className:"centerDong-btn",onClick:function(n){g({type:r.XD,data:{status:_,action:"event",gameToken:j.index.gameToken,inputData:{selected:{SELECT_CD:j.index.selectCode,OPTION_SEQ:h}}}})},children:"\uc120\ud0dd"})]}):null,void 0!==j.index.player?(0,a.jsx)(c,{}):null]})}},1163:function(n,e,t){n.exports=t(387)}},function(n){n.O(0,[774,888,179],(function(){return e=849,n(n.s=e);var e}));var e=n.O();_N_E=e}]);