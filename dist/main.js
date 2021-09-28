(()=>{"use strict";var e={};!function e(t,a,n,o){var r=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL);function i(){}function l(e){var n=a.exports.Promise,o=void 0!==n?n:t.Promise;return"function"==typeof o?new o(e):(e(i,i),null)}var s,c,d,u,h,f,g,m,b=(d=Math.floor(1e3/60),u={},h=0,"function"==typeof requestAnimationFrame&&"function"==typeof cancelAnimationFrame?(s=function(e){var t=Math.random();return u[t]=requestAnimationFrame((function a(n){h===n||h+d-1<n?(h=n,delete u[t],e()):u[t]=requestAnimationFrame(a)})),t},c=function(e){u[e]&&cancelAnimationFrame(u[e])}):(s=function(e){return setTimeout(e,d)},c=function(e){return clearTimeout(e)}),{frame:s,cancel:c}),p=(m={},function(){if(f)return f;if(!n&&r){var t=["var CONFETTI, SIZE = {}, module = {};","("+e.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join("\n");try{f=new Worker(URL.createObjectURL(new Blob([t])))}catch(e){return void 0!==typeof console&&"function"==typeof console.warn&&console.warn("🎊 Could not load worker",e),null}!function(e){function t(t,a){e.postMessage({options:t||{},callback:a})}e.init=function(t){var a=t.transferControlToOffscreen();e.postMessage({canvas:a},[a])},e.fire=function(a,n,o){if(g)return t(a,null),g;var r=Math.random().toString(36).slice(2);return g=l((function(n){function i(t){t.data.callback===r&&(delete m[r],e.removeEventListener("message",i),g=null,o(),n())}e.addEventListener("message",i),t(a,r),m[r]=i.bind(null,{data:{callback:r}})}))},e.reset=function(){for(var t in e.postMessage({reset:!0}),m)m[t](),delete m[t]}}(f)}return f}),v={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function y(e,t,a){return function(e,t){return t?t(e):e}(e&&null!=e[t]?e[t]:v[t],a)}function w(e){return e<0?0:Math.floor(e)}function M(e){return parseInt(e,16)}function C(e){return e.map(k)}function k(e){var t=String(e).replace(/[^0-9a-f]/gi,"");return t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:M(t.substring(0,2)),g:M(t.substring(2,4)),b:M(t.substring(4,6))}}function x(e){e.width=document.documentElement.clientWidth,e.height=document.documentElement.clientHeight}function A(e){var t=e.getBoundingClientRect();e.width=t.width,e.height=t.height}function E(e,a){var i,s=!e,c=!!y(a||{},"resize"),d=y(a,"disableForReducedMotion",Boolean),u=r&&y(a||{},"useWorker")?p():null,h=s?x:A,f=!(!e||!u||!e.__confetti_initialized),g="function"==typeof matchMedia&&matchMedia("(prefers-reduced-motion)").matches;function m(t,a,r){for(var s,c,d,u,f=y(t,"particleCount",w),g=y(t,"angle",Number),m=y(t,"spread",Number),p=y(t,"startVelocity",Number),v=y(t,"decay",Number),M=y(t,"gravity",Number),k=y(t,"drift",Number),x=y(t,"colors",C),A=y(t,"ticks",Number),E=y(t,"shapes"),I=y(t,"scalar"),S=function(e){var t=y(e,"origin",Object);return t.x=y(t,"x",Number),t.y=y(t,"y",Number),t}(t),T=f,P=[],O=e.width*S.x,B=e.height*S.y;T--;)P.push((void 0,void 0,c=(s={x:O,y:B,angle:g,spread:m,startVelocity:p,color:x[T%x.length],shape:E[(0,u=E.length,Math.floor(Math.random()*(u-0))+0)],ticks:A,decay:v,gravity:M,drift:k,scalar:I}).angle*(Math.PI/180),d=s.spread*(Math.PI/180),{x:s.x,y:s.y,wobble:10*Math.random(),velocity:.5*s.startVelocity+Math.random()*s.startVelocity,angle2D:-c+(.5*d-Math.random()*d),tiltAngle:Math.random()*Math.PI,color:s.color,shape:s.shape,tick:0,totalTicks:s.ticks,decay:s.decay,drift:s.drift,random:Math.random()+5,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:3*s.gravity,ovalScalar:.6,scalar:s.scalar}));return i?i.addFettis(P):(i=function(e,t,a,r,i){var s,c,d=t.slice(),u=e.getContext("2d"),h=l((function(t){function l(){s=c=null,u.clearRect(0,0,r.width,r.height),i(),t()}s=b.frame((function t(){!n||r.width===o.width&&r.height===o.height||(r.width=e.width=o.width,r.height=e.height=o.height),r.width||r.height||(a(e),r.width=e.width,r.height=e.height),u.clearRect(0,0,r.width,r.height),d=d.filter((function(e){return function(e,t){t.x+=Math.cos(t.angle2D)*t.velocity+t.drift,t.y+=Math.sin(t.angle2D)*t.velocity+t.gravity,t.wobble+=.1,t.velocity*=t.decay,t.tiltAngle+=.1,t.tiltSin=Math.sin(t.tiltAngle),t.tiltCos=Math.cos(t.tiltAngle),t.random=Math.random()+5,t.wobbleX=t.x+10*t.scalar*Math.cos(t.wobble),t.wobbleY=t.y+10*t.scalar*Math.sin(t.wobble);var a=t.tick++/t.totalTicks,n=t.x+t.random*t.tiltCos,o=t.y+t.random*t.tiltSin,r=t.wobbleX+t.random*t.tiltCos,i=t.wobbleY+t.random*t.tiltSin;return e.fillStyle="rgba("+t.color.r+", "+t.color.g+", "+t.color.b+", "+(1-a)+")",e.beginPath(),"circle"===t.shape?e.ellipse?e.ellipse(t.x,t.y,Math.abs(r-n)*t.ovalScalar,Math.abs(i-o)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):function(e,t,a,n,o,r,i,l,s){e.save(),e.translate(t,a),e.rotate(r),e.scale(n,o),e.arc(0,0,1,0,l,void 0),e.restore()}(e,t.x,t.y,Math.abs(r-n)*t.ovalScalar,Math.abs(i-o)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):(e.moveTo(Math.floor(t.x),Math.floor(t.y)),e.lineTo(Math.floor(t.wobbleX),Math.floor(o)),e.lineTo(Math.floor(r),Math.floor(i)),e.lineTo(Math.floor(n),Math.floor(t.wobbleY))),e.closePath(),e.fill(),t.tick<t.totalTicks}(u,e)})),d.length?s=b.frame(t):l()})),c=l}));return{addFettis:function(e){return d=d.concat(e),h},canvas:e,promise:h,reset:function(){s&&b.cancel(s),c&&c()}}}(e,P,h,a,r)).promise}function v(a){var n=d||y(a,"disableForReducedMotion",Boolean),o=y(a,"zIndex",Number);if(n&&g)return l((function(e){e()}));s&&i?e=i.canvas:s&&!e&&(e=function(e){var t=document.createElement("canvas");return t.style.position="fixed",t.style.top="0px",t.style.left="0px",t.style.pointerEvents="none",t.style.zIndex=e,t}(o),document.body.appendChild(e)),c&&!f&&h(e);var r={width:e.width,height:e.height};function b(){if(u){var t={getBoundingClientRect:function(){if(!s)return e.getBoundingClientRect()}};return h(t),void u.postMessage({resize:{width:t.width,height:t.height}})}r.width=r.height=null}function p(){i=null,c&&t.removeEventListener("resize",b),s&&e&&(document.body.removeChild(e),e=null,f=!1)}return u&&!f&&u.init(e),f=!0,u&&(e.__confetti_initialized=!0),c&&t.addEventListener("resize",b,!1),u?u.fire(a,r,p):m(a,r,p)}return v.reset=function(){u&&u.reset(),i&&i.reset()},v}a.exports=E(null,{useWorker:!0,resize:!0}),a.exports.create=E}(function(){return"undefined"!=typeof window?window:"undefined"!=typeof self?self:this||{}}(),e,!1);const t=e.exports;e.exports.create;const a=[{name:"London",population:"10,979,000"},{name:"Manchester",population:"2,727,000"},{name:"Birmingham",population:"2,605,000"},{name:"Leeds",population:"1,890,000"},{name:"Glasgow",population:"1,259,000"}],n=[{minAge:0,maxAge:4,amountOfPeople:3.86},{minAge:5,maxAge:9,amountOfPeople:4.15},{minAge:10,maxAge:14,amountOfPeople:3.95},{minAge:15,maxAge:19,amountOfPeople:3.66}],o={labels:["A","B","C","D","E"],scores:[10,20,30,40,45],skills:[50,40,30,20,50]};console.log(a),console.log(n);const r=document.querySelector("button"),i={particleCount:100,startVelocity:30,spread:360,shapes:["square","square","circle"],gravity:0,particleCount:500,colors:["#22577A","#38A3A5","#57CC99","#80ED99"]};r.addEventListener("click",(()=>{t(i)}));const l=document.getElementById("myChart"),s=(new Chart(l,{type:"bar",data:{labels:["Red","Blue","Yellow","Green","Purple","Orange"],datasets:[{label:"# of Votes",data:[12,19,3,5,2,3],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]},options:{scales:{y:{beginAtZero:!0}}}}),document.getElementById("cities-graph")),c=document.getElementById("population-graph"),d=document.getElementById("custom-data-graph"),u=a.map((e=>e.name)),h=a.map((e=>parseInt(e.population.split(",").join(""))));console.log(u),console.log(h),new Chart(s,{type:"bar",data:{labels:u,datasets:[{label:"Number of Votes",data:h,backgroundColor:["#22577A","#38A3A5","#57CC99","#80ED99"]}]},options:{plugins:{legend:{position:"bottom"}}}});const f=n.map((e=>e.amountOfPeople)),g=n.map((e=>`${e.minAge}-${e.maxAge}`));console.log(f),console.log(g),new Chart(c,{type:"doughnut",data:{labels:g,datasets:[{data:f,backgroundColor:["#22577A","#38A3A5","#57CC99","#80ED99"]}]},options:{plugins:{legend:{position:"bottom"}}}}),new Chart(d,{type:"radar",data:{labels:o.labels,datasets:[{label:"Scores",data:o.scores,fill:!0,backgroundColor:"#57cc998a",pointBackgroundColor:"#22577A"},{label:"Skills",data:o.skills,fill:!0,backgroundColor:"#22577a60",pointBackgroundColor:"#57CC99"}]}})})();