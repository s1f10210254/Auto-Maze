(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,n,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return l(85)}])},85:function(e,n,l){"use strict";l.r(n);var o=l(5893),t=l(7294),s=l(2729),i=l.n(s);let a=()=>{let[e,n]=(0,t.useState)([[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]),[l,s]=(0,t.useState)({x:4,y:4,front:[1,0]}),a=[[0,1],[1,0],[0,-1],[-1,0]],c=()=>{let l=[];for(let o=0;o<e.length;o++)for(let t=0;t<e[o].length;t++)if(o%2==1&&t%2==1){l.push([t,o]);let s=[...e];s[t][o]=1,n(s)}return console.log("両方奇数を１にする↓"),console.table(e),l},r=()=>{let o=c(),t=[...e];for(let n of o){let[l,o]=n,s=Math.floor(4*Math.random()),i=a[s],[c,r]=i,_=o+r,u=l+c;_>=0&&_<e.length&&u>=0&&u<e[0].length&&(t[u][_]=1)}n(t),console.log("迷路盤↓"),console.table(e),console.log("front"),console.log(l)},_=()=>{let{x:e,y:n,front:o}=l,t=e+o[0],i=n+o[1];s(e=>({...e,x:t,y:i}))},u=()=>{let{x:n,y:o,front:t}=l,i=[t[0]-1,t[1]-1];s(e=>({...e,front:i}));let a=n+t[1],c=o+t[0];console.log("newFront",i),console.log("人間の次のX座標",a,"人間の次のY座標",c);let r=[t[1],t[0]];s(e=>({...e,front:r})),a>=0&&a<e.length&&c>=0&&c<e[0].length&&0===e[c][a]&&(_(),console.log("leftMove実行")),console.log(l)};return(0,o.jsxs)("div",{className:i().container,children:[(0,o.jsxs)("div",{className:i().top,children:[(0,o.jsx)("button",{className:i().generationbu,onClick:r,children:"生成"}),(0,o.jsx)("button",{className:i().humanbu,onClick:u,children:"探索"})]}),(0,o.jsx)("div",{className:i().maze,children:e.map((e,n)=>e.map((e,t)=>(0,o.jsxs)("div",{className:i().cell,children:[1===e&&(0,o.jsx)("div",{className:i().pillar}),l.x===n&&l.y===t&&(0,o.jsx)("div",{className:i().position})]},"".concat(n,"-").concat(t))))})]})};n.default=a},2729:function(e){e.exports={container:"index_container__gnN1f",maze:"index_maze__HlHhr",cell:"index_cell__3W8ZQ",pillar:"index_pillar__bsd7F",position:"index_position__qm_M0",top:"index_top__uMqHF",generationbu:"index_generationbu__j3I9R",humanbu:"index_humanbu__yKQMU"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);