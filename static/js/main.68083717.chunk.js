(window["webpackJsonppomodoro-clock"]=window["webpackJsonppomodoro-clock"]||[]).push([[0],{17:function(e,n,t){e.exports=t(28)},28:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(7),o=t.n(i),s=t(1),c=t(8),l=t(9),u=t(13),m=t(10),f=t(14),d=t(2);t(22);function p(){var e=Object(s.a)(["\n  font-size: 1rem;\n"]);return p=function(){return e},e}function b(){var e=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 20px;\n  height: 20px;\n  padding: 10px;\n  border: 2px solid;\n  border-radius: 50%;\n"]);return b=function(){return e},e}function g(){var e=Object(s.a)(["\n  margin: 0 0 5px 0;\n"]);return g=function(){return e},e}function v(){var e=Object(s.a)(["\n  font-size: 2rem;\n  margin: 5px;\n"]);return v=function(){return e},e}function h(){var e=Object(s.a)(["\n  display: flex;\n  align-items: center;\n"]);return h=function(){return e},e}function x(){var e=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-size: 1.5rem;\n"]);return x=function(){return e},e}function k(){var e=Object(s.a)(["\n  margin: 0 0 5px 0;\n"]);return k=function(){return e},e}function S(e){return a.a.createElement(j.Break,null,a.a.createElement(j.P,{id:"break-label"},"Break Length"),a.a.createElement(j.BreakControls,null,a.a.createElement(j.Arrows,{id:"break-decrement",className:"fas fa-arrow-down",onClick:e.handleSettings}),a.a.createElement(j.BreakLength,{id:"break-length"},e.break),a.a.createElement(j.Arrows,{id:"break-increment",className:"fas fa-arrow-up",onClick:e.handleSettings})))}var j={};function y(){var e=Object(s.a)(["\n  font-size: 1rem;\n"]);return y=function(){return e},e}function w(){var e=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 20px;\n  height: 20px;\n  padding: 10px;\n  border: 2px solid;\n  border-radius: 50%;\n"]);return w=function(){return e},e}function O(){var e=Object(s.a)(["\n  margin: 0 0 5px 0;\n"]);return O=function(){return e},e}function E(){var e=Object(s.a)(["\n  font-size: 2rem;\n  margin: 5px;\n"]);return E=function(){return e},e}function C(){var e=Object(s.a)(["\n  display: flex;\n  align-items: center;\n"]);return C=function(){return e},e}function L(){var e=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-size: 1.5rem;\n"]);return L=function(){return e},e}function T(e){return a.a.createElement(z.Session,null,a.a.createElement(z.P,{id:"session-label"},"Session Length"),a.a.createElement(z.SessionControls,null,a.a.createElement(z.Arrows,{id:"session-decrement",className:"fas fa-arrow-down",onClick:e.handleSettings}),a.a.createElement(z.SessionLength,{id:"session-length"},e.session),a.a.createElement(z.Arrows,{id:"session-increment",className:"fas fa-arrow-up",onClick:e.handleSettings})))}j.P=d.a.p(k()),j.Break=d.a.div(x()),j.BreakControls=d.a.div(h()),j.BreakLength=d.a.div(v()),j.P=d.a.p(g()),j.Icon=d.a.i(b()),j.Arrows=Object(d.a)(j.Icon)(p());var z={};function I(){var e=Object(s.a)(["\n  box-sizing: border-box;\n  display: flex;\n  @media (max-width: 400px){\n    flex-direction: column;\n  }\n  justify-content: space-between;\n  margin: 10px;\n"]);return I=function(){return e},e}function A(e){return a.a.createElement(B.Settings,null,a.a.createElement(S,{break:e.break,handleSettings:e.handleSettings}),a.a.createElement(T,{session:e.session,handleSettings:e.handleSettings}))}z.Session=d.a.div(L()),z.SessionControls=d.a.div(C()),z.SessionLength=d.a.div(E()),z.P=d.a.p(O()),z.Icon=d.a.i(w()),z.Arrows=Object(d.a)(z.Icon)(y());var B={};function N(){var e=Object(s.a)(["\n  font-size: 1rem\n"]);return N=function(){return e},e}function P(){var e=Object(s.a)(["\n  font-size: 1.5rem;\n  height: 50px;\n  width: 50px;\n  margin: 0 5px 0 0;\n"]);return P=function(){return e},e}function J(){var e=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 20px;\n  height: 20px;\n  padding: 10px;\n  border: 2px solid;\n  border-radius: 50%;\n"]);return J=function(){return e},e}function M(){var e=Object(s.a)(["\n  font-size: 3rem;\n  font-weight: bold;\n"]);return M=function(){return e},e}function R(){var e=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return R=function(){return e},e}function W(){var e=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-size: 1.5rem;\n  width: 190px;\n  height: 190px;\n  padding: 10px;\n  border: 2px solid;\n  border-radius: 50%;\n  margin: 0 0 10px 0;\n"]);return W=function(){return e},e}function D(){var e=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]);return D=function(){return e},e}function V(){var e=Object(s.a)(["\n  margin: 30px 0 10px 0;\n"]);return V=function(){return e},e}function _(e){return a.a.createElement(q.Clock,null,a.a.createElement(q.TimeCircle,null,a.a.createElement(q.TimerLabel,{id:"timer-label"},e.timerType),a.a.createElement(q.TimeLeft,{id:"time-left"},e.timer())),a.a.createElement(q.ClockControls,null,a.a.createElement(q.StartStop,{id:"start_stop",className:e.start?"fas fa-pause":"fas fa-play",onClick:e.startStop}),a.a.createElement(q.Reset,{id:"reset",className:"fas fa-redo",onClick:e.reset})))}B.Settings=d.a.div(I());var q={};function F(){var e=Object(s.a)(["\n  width: 450px;\n  font-family: Verdana, sans-serif;\n"]);return F=function(){return e},e}function G(){var e=Object(s.a)(["\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  background: tomato;\n"]);return G=function(){return e},e}function H(){var e=Object(s.a)(["\n  font-size: 2.5rem;\n  text-align: center;\n  margin-bottom: 30px;\n"]);return H=function(){return e},e}q.TimerLabel=d.a.p(V()),q.Clock=d.a.div(D()),q.TimeCircle=d.a.div(W()),q.ClockControls=d.a.div(R()),q.TimeLeft=d.a.div(M()),q.Icon=d.a.i(J()),q.StartStop=Object(d.a)(q.Icon)(P()),q.Reset=Object(d.a)(q.Icon)(N());var K=function(e){function n(){var e,t;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=Object(u.a)(this,(e=Object(m.a)(n)).call.apply(e,[this].concat(a)))).state={breakL:5,sessionL:25,timer:1,start:!1,timerType:"Session"},t.timeConvertor=function(){var e=t.state.timer,n=Math.floor(e/60),r=e%60;return n=n<10?"0".concat(n):n,r=r<10?"0".concat(r):r,"".concat(n,":").concat(r)},t.countdown=function(){if(0!==t.state.timer)t.setState({timer:t.state.timer-1}),t.timeConvertor();else{t.playAlarm();var e=t.state.timerType,n=t.state.breakL,r=t.state.sessionL;t.setState({timer:"Session"===e?60*n:60*r,timerType:"Session"===e?"Break":"Session"})}},t.repeatCountdown=null,t.startStop=function(){var e=t.state.start;!1===e?t.repeatCountdown=setInterval(t.countdown,1e3):!0===e&&clearInterval(t.repeatCountdown),t.setState({start:!e})},t.handleSettings=function(e){console.log(e.target),clearInterval(t.repeatCountdown),t.setState({start:!1});var n=t.state.breakL,r=t.state.sessionL;switch(e.target.id){case"break-decrement":if(1===n)break;t.setState({breakL:n-1});break;case"break-increment":if(60===n)break;t.setState({breakL:n+1});break;case"session-decrement":if(1===r)break;t.setState({sessionL:r-1,timer:60*(r-1)});break;case"session-increment":if(60===r)break;t.setState({sessionL:r+1,timer:60*(r+1)})}},t.reset=function(){clearInterval(t.repeatCountdown),t.setState({breakL:5,sessionL:25,timer:1500,start:!1,timerType:"Session"}),t.alarmSound.pause(),t.alarmSound.currentTime=0},t.playAlarm=function(){t.alarmSound.volume=.05,t.alarmSound.play()},t}return Object(f.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){document.body.style.margin=0}},{key:"render",value:function(){var e=this;return a.a.createElement(Q.Wrapper,null,a.a.createElement(Q.App,null,a.a.createElement(Q.Title,null,"Pomodoro Clock"),a.a.createElement(A,{break:this.state.breakL,session:this.state.sessionL,handleSettings:this.handleSettings}),a.a.createElement(_,{timer:this.timeConvertor,startStop:this.startStop,start:this.state.start,reset:this.reset,timerType:this.state.timerType}),a.a.createElement("audio",{id:"beep",src:"https://goo.gl/65cBl1",preload:"auto",ref:function(n){e.alarmSound=n}})))}}]),n}(a.a.Component),Q={};Q.Title=d.a.h1(H()),Q.Wrapper=d.a.div(G()),Q.App=d.a.div(F()),o.a.render(a.a.createElement(K,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.68083717.chunk.js.map