(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,n,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return l(85)}])},85:function(e,n,l){"use strict";l.r(n);var t=l(5893),o=l(7294),r=l(2729),s=l.n(r);let a=()=>{let[e,n]=(0,o.useState)([[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]),[l,r]=(0,o.useState)({x:0,y:0,front:[1,0]}),a=[[0,1],[1,0],[0,-1],[-1,0]],i=()=>{let l=[];for(let t=0;t<e.length;t++)for(let o=0;o<e[t].length;o++)if(t%2==1&&o%2==1){l.push([o,t]);let r=[...e];r[o][t]=1,n(r)}return console.log("両方奇数を１にする↓"),console.table(e),l},c=()=>{let t=i(),o=[...e];for(let n of t){let[l,t]=n,r=Math.floor(4*Math.random()),s=a[r],[i,c]=s,_=t+c,u=l+i;_>=0&&_<e.length&&u>=0&&u<e[0].length&&(o[u][_]=1)}n(o),console.log("迷路盤↓"),console.table(e),console.log("front"),console.log(l)},_=()=>{let{x:e,y:n,front:t}=l,[o,s]=t,a=[0,0];1===o?a=[s,o]:1===s?a=[-s,o]:-1===o?a=[s,o]:-1===s&&(a=[-s,o]);let i=e+a[0],c=n+a[1];r({x:i,y:c,front:a})},u=()=>{let{x:e,y:n,front:t}=l,[o,s]=t;r({...l,x:e+o,y:n+s})},d=()=>{let{front:e}=l,[n,t]=e,o=[0,0];-1===t?o=[t,n]:-1===n?o=[t,-n]:1===t?o=[t,n]:1===n&&(o=[t,-n]),r({...l,front:o})},f=()=>{let{x:n,y:t,front:o}=l,[r,s]=o,a=[0,0];1===r?a=[s,r]:1===s?a=[-s,r]:-1===r?a=[s,r]:-1===s&&(a=[-s,r]);let i=n+a[0],c=t+a[1],f=n+r,h=t+s;i>=0&&i<e.length&&c>=0&&c<e[0].length&&0===e[i][c]?(_(),console.log("leftmove実行")):f>=0&&f<e.length&&h>=0&&h<e[0].length&&0===e[f][h]?(u(),console.log("goMove実行")):(d(),console.log("turnright実行"))};console.log("human",l);let h=(e,n)=>{if(1===e&&0===n)return 270;if(0===e&&-1===n);else if(-1===e&&0===n)return 90;else if(0===e&&1===n)return 180;return 0};return(0,t.jsxs)("div",{className:s().container,children:[(0,t.jsxs)("div",{className:s().top,children:[(0,t.jsx)("button",{className:s().generationbu,onClick:c,children:"生成"}),(0,t.jsx)("button",{className:s().humanbu,onClick:f,children:"探索"})]}),(0,t.jsx)("div",{className:s().maze,children:e.map((e,n)=>e.map((e,o)=>(0,t.jsxs)("div",{className:s().cell,children:[1===e&&(0,t.jsx)("div",{className:s().pillar}),l.x===n&&l.y===o&&(0,t.jsx)("div",{className:s().position,children:(0,t.jsx)("div",{className:s().arrow,style:{transform:"rotate(".concat(h(l.front[0],l.front[1]),"deg)")}})})]},"".concat(n,"-").concat(o))))})]})};n.default=a},2729:function(e){e.exports={container:"index_container__gnN1f",maze:"index_maze__HlHhr",cell:"index_cell__3W8ZQ",pillar:"index_pillar__bsd7F",position:"index_position__qm_M0",arrow:"index_arrow__BVfKK",top:"index_top__uMqHF",generationbu:"index_generationbu__j3I9R",humanbu:"index_humanbu__yKQMU"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);