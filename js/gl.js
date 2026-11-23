(function(){const V=e=>e-Math.floor(e),y=(e,t,o)=>e<t?t:e>o?o:e,m=(e,t,o)=>{const n=y((o-e)/(t-e),0,1);return n*n*(3-2*n)},I=(e,t,o)=>e+(t-e)*o,W=e=>V(Math.sin(e*127.1)*43758.5453),R=(e,t)=>{e=V(e*123.34),t=V(t*456.21);const o=e*(e+45.32)+t*(t+45.32);return e+=o,t+=o,V(e*t)},B=e=>{const t=Math.floor(e);let o=e-t;return o=o*o*(3-2*o),I(W(t),W(t+1),o)},Y=(e,t)=>{const o=Math.floor(e),n=Math.floor(t);let l=e-o,g=t-n;return l=l*l*(3-2*l),g=g*g*(3-2*g),I(I(R(o,n),R(o+1,n),l),I(R(o,n+1),R(o+1,n+1),l),g)},H=(e,t,o,n,l,g)=>{const u=Math.abs(e-o)-l,s=Math.abs(t-n)-g;return Math.hypot(Math.max(u,0),Math.max(s,0))+Math.min(Math.max(u,s),0)},Rt=(e,t)=>t<0?I(4.85,1.45,m(.4,8.4,e)):I(4.6,1.1,m(0,7.6,e)),dt=e=>(e<0?7.1:6.4)-.5*B(e*1.7+3);function kt(e,t){const o=e<0?-1:1,n=.45*B(t*1.3+o*7)+.25*B(t*3.7+o*3)-.3;return Math.max(Math.abs(e)-Rt(t,o)-n,Math.max(-t-.6,t-dt(e)))}const et=[];(function(){let e=-1,t=0;for(;e<8.4;){const o=I(1.5,.62,m(-.5,7.5,e))*(.85+.3*W(t*3.1+.7)),n=e+o*.5,l=[];let g=-Rt(n,-1)-.7-W(t*7.7)*.6*o,u=0;for(;g<Rt(n,1)+.7;){const s=W(t*17.3+u*7.9+.31),v=o*(.95+1*W(t*13.1+u*2.3)),p=g+v*.5,d=n+(W(t*5.3+u*1.7)-.5)*o*.4;if(kt(p,d)<-.05*o){const M=v*.62,E=o*.66*(.85+.3*W(u*4.1+t)),b=5+Math.floor(W(s*13.7)*4),k=W(s*5.1)*6.283,f=[(W(s*31)-.5)*.35*M,(.15+(W(s*57)-.5)*.3)*E],T=.42+.25*W(s*91),r=[],x=[];for(let w=0;w<b;w++){const S=k+6.2832*(w+.55*(W(s*7.3+w*1.91)-.5))/b,C=.86+.26*W(s*3.9+w*2.37),O=Math.cos(S)*M*C,_=Math.sin(S)*E*C;r.push([O,_])}r.forEach(w=>x.push(Math.atan2(w[1]-f[1],w[0]-f[0])));const P=[];for(let w=0;w<b;w++){const S=r[w],C=r[(w+1)%b],O=C[0]-S[0],_=C[1]-S[1],D=Math.hypot(O,_)||1,L=_/D,tt=-O/D,ut=Math.abs((f[0]-S[0])*L+(f[1]-S[1])*tt),it=(.55+1.7*W(s*11.1+w*3.7))*.45*Math.min(M,E)/Math.max(.05,(1-T)*ut);P.push({ox:L,oy:tt,el:D,sl:it,j:(W(s*19+w)-.5)*.25})}l.push({cx:p,cy:d,rx:M,ry:E,V:r,A:x,F:P,P:f,kin:T,n:b,s,z:-d+(W(t*4.4+u)-.5)*.7*o,fx:(W(s*41)-.5)*.5,fy:.25+(W(s*67)-.5)*.5,rust:s>.91})}g+=v*(.62+.14*W(t+u*9.9)),u++}et.push({lo:e-o*.5,hi:e+o*1.5,st:l}),e+=o*.64,t++}})();function Ft(e,t,o){const n=t-e.cx-e.P[0],l=o-e.cy-e.P[1];let g=Math.atan2(l,n),u=0;for(let f=0;f<e.n;f++){const T=e.A[f],r=e.A[(f+1)%e.n];let x=g-T,P=r-T;if(x-=Math.floor(x/6.2832)*6.2832,P-=Math.floor(P/6.2832)*6.2832,x<=P){u=f;break}}const s=e.V[u],v=e.V[(u+1)%e.n],p=e.F[u],d=t-e.cx,M=o-e.cy,E=-((d-s[0])*p.ox+(M-s[1])*p.oy),b=[e.P[0]+(s[0]-e.P[0])*e.kin,e.P[1]+(s[1]-e.P[1])*e.kin],k=-((d-b[0])*p.ox+(M-b[1])*p.oy);return[E,k>0?-1:u,k]}function K(e,t,o){let n=9,l=null,g=-1e9,u=null;for(const s of et)if(!(t<s.lo||t>s.hi))for(const v of s.st){if(Math.abs(e-v.cx)>v.rx*1.3||Math.abs(t-v.cy)>v.ry*1.3)continue;const p=Ft(v,e,t);-p[0]<n&&(n=-p[0]),o&&p[0]>0&&v.z>g&&(g=v.z,l=v,u=p)}return o?[n,l,u]:n}function xt(e,t){return t<-.6?Math.max(K(e,t),-t-.6):Math.min(K(e,t),kt(e,t)+.35)}function At(e,t){const[,o,n]=K(e,t,!0),l=(.4+.6*m(-.4,3,t))*(1-.45*m(5,8.5,t))*(1-.3*m(2.5,5,Math.abs(e))),g=.82+.18*Y(e*23,t*23)+(R(Math.floor(e*50),Math.floor(t*50))>.92?.2:0)-(R(Math.floor(e*50)+7,Math.floor(t*50)+3)>.9?.16:0);if(!o){const L=.5+.5*Y(e*3,t*3);return[.03*L+.035*l,.025*L+.022*l,.026*L+.01*l]}const[u,s,v]=n;let p,d=0;if(s<0)p=N(o.fx,o.fy,1),d=m(.035,0,v);else{const L=o.F[s];p=N(L.ox*L.sl+L.j,L.oy*L.sl+L.j*.5,1),d=m(.035,0,-v)*.6}p=N(p[0]+(Y(e*9+o.s*9,t*9)-.5)*.12,p[1]+(Y(e*9+4,t*9+o.s*7)-.5)*.12,p[2]);const M=.5+.5*p[1],E=Math.max(0,A(p,c))*l,b=Math.max(0,A(p,J)),k=I(.72,1,m(0,.18,u))*(s>=0&&o.F[s].oy<-.5?.82:1),f=Math.abs(e),T=t>4&&t<8.4?I(.6,1,m(0,.6,f-ot(Math.min(t,8.3)))):1;let r=o.rust?[.56,.44,.36]:[.47,.45,.44];const x=.62+.5*W(o.s*77);r=r.map(L=>L*x);const P=m(1.1,.15,t);r=r.map(L=>L*(1-.55*P));const w=.7*m(.6,0,t)*m(.35,.7,Y(e*3.5,t*8));r=[I(r[0],.1,w),I(r[1],.14,w),I(r[2],.08,w)];const S=k*g*T*(1+.22*d);let C=r[0]*(.02+.08*M+.6*E+.14*b)*S,O=r[1]*(.02+.08*M+.39*E+.17*b)*S,_=r[2]*(.025+.11*M+.19*E+.27*b)*S;const D=P*Math.pow(Math.max(0,A(p,N(c[0],c[1],c[2]+1))),24)*l;return C+=.5*D,O+=.35*D,_+=.2*D,[C,O,_]}const ot=e=>e<5.7?1.85-.12*m(5.45,5.7,e):e<7.85?1.15:e<8.05?1.22:e<8.3?1.36:1.25;function ct(e){const t=y((e-14.2)/1.25,0,1);let o=I(.44,.66,t*t);return o+=.05*Math.max(0,Math.sin((e-14.2)*9)),o}function Z(e,t){const o=Math.abs(e);let n=xt(e,t);return t>4.2&&t<8.4&&(n=Math.min(n,Math.max(o-ot(t),Math.max(4.4-t,t-8.4)))),n=Math.min(n,Math.max(o-I(.62,.5,m(8.4,8.8,t))-.04*Math.sin((t-8.4)*15.7),Math.max(8.35-t,t-8.82))),n=Math.min(n,H(e,t,0,11.5,I(.47,.42,y((t-8.8)/5.5,0,1)),2.72)),n=Math.min(n,Math.max(o-ct(t),Math.max(14.2-t,t-15.45))),n=Math.min(n,Math.hypot(o-.62,t-15.32)-.11),n=Math.min(n,Math.max(o-.76,Math.abs(t-15.53)-.08)),t>15.55&&(n=Math.min(n,ft(e/X,G+(t-G)/X)*X)),n}const X=1.3,G=15.61;function ft(e,t){const o=Math.abs(e);let n=9;const l=.35;n=Math.min(n,Math.hypot(e,(t-16.05-l)/2.1)-.2),n=Math.min(n,Math.max(o-.16+(t-15.7-l)*.2,Math.abs(t-15.82-l)-.1)),n=Math.min(n,Math.hypot(o-.17,t-16.64-l)-.1),n=Math.min(n,Math.max(Math.abs(t-16.6-l+(o-.24)*.3)-.035,Math.abs(o-.29)-.06)),n=Math.min(n,H(o,t,0,16.6+l,.06,.1)),n=Math.min(n,Math.max(o-.12+(t-16.78-l)*.3,Math.abs(t-16.88-l)-.11)),n=Math.min(n,Math.hypot(e,t-17-l)-.04);const g=16.12+l+o*.22+m(.4,.5,V(o*5+.2))*.08*m(.75,1.05,o),u=16.48+l+o*.3-.16*m(.95,1.32,o);return n=Math.min(n,Math.max(Math.max(o-1.32,t-u),g-t)),n=Math.min(n,Lt(e,t)),n}function Lt(e,t){const o=Math.hypot(e,t-15.98);let n=Math.abs(o-.3)-.06-.025*Math.sin(Math.atan2(t-15.98,e)*14);return n=Math.min(n,H(e,t,0,16.17,.012,.1)),n=Math.min(n,H(e,t,0,15.93,.025,.17),H(e,t,0,16.05,.1,.018)),n=Math.min(n,Math.max(Math.abs(Math.hypot(e,t-15.86)-.14)-.022,t-15.82)),n}const c=(()=>{const e=[.38,-.5,.78],t=Math.hypot(...e);return e.map(o=>o/t)})(),J=(()=>{const e=[-.72,.5,.48],t=Math.hypot(...e);return e.map(o=>o/t)})(),N=(e,t,o)=>{const n=Math.hypot(e,t,o)||1;return[e/n,t/n,o/n]},A=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2];function st(e,t,o,n){const l=Math.max(0,A(e,c)),g=Math.max(0,A(e,J)),u=Math.pow(Math.max(0,A(e,N(c[0],c[1],c[2]+1))),14),s=Math.pow(Math.max(0,A(e,N(J[0],J[1],J[2]+1))),10),v=n*(1-.45*m(8.5,17,o));return[.035+.16*l*v+.04*g+.9*u*v+.22*s,.026+.1*l*v+.05*g+.6*u*v+.27*s,.018+.04*l*v+.07*g+.3*u*v+.36*s]}function $(e,t){const n=Z(e,t),l=(Z(e+.03,t)-Z(e-.03,t))/(2*.03),g=(Z(e,t+.03)-Z(e,t-.03))/(2*.03),u=m(t<8.4?-.04:-.1,0,n);let s=N(l*u*1.6,g*u*1.6,1);const v=Math.abs(e);let p,d,M;const E=t>G,b=E?e/X:e,k=E?G+(t-G)/X:t,f=E&&Lt(b,k)<.005;if(!f&&t<8.6&&!(t>4.2&&t<8.4&&v<ot(t))&&xt(e,t)<=.02)[p,d,M]=At(e,t);else if(!f&&t<8.4){const T=ot(t),r=e/T;let x;t<5.7||t>7.85?x=N(r*.9,0,1):x=r<-.414?N(-.707,0,.707):r>.414?N(.707,0,.707):[0,0,1],t>8.05&&t<8.3&&(x=N(x[0],-.55,x[2])),t>7.85&&t<8.05&&(x=N(x[0],.5,x[2])),s=N(x[0]+s[0]*.3,x[1]+s[1]*.3,x[2]);const P=Math.max(0,A(s,c))*(1.15-.45*m(4.4,8.4,t)),w=Math.max(0,A(s,J)),S=t>7.6&&t<7.85?I(.45,1,m(7.62,7.84,t)):1,C=(t-4.4)/.62,O=Math.floor(C),_=Math.abs(V(C)-.5)*.62,D=Math.abs(V(e/.78+O%2*.5)-.5)*.78,L=(t>5.7&&t<7.85?.62+.38*m(.012,.03,Math.min(.31-_,Math.abs(r)<.414?D:1)):1)*(1+.25*m(.03,0,Math.abs(t-5.7))-.35*m(.03,0,Math.abs(t-5.66))+.3*m(.025,0,Math.abs(t-8.29))+.2*m(.02,0,Math.abs(t-7.87))-.4*m(.02,0,Math.abs(t-8.04))+.25*m(.02,0,Math.abs(t-4.62))-.3*m(.02,0,Math.abs(t-4.58))),tt=Math.abs(Math.abs(r)-.414)<.02&&t>5.7&&t<7.85?1.12:1,ut=t>6.6&&t<7.45&&v<.42?v>.38||t<6.64||t>7.41?1.12:.9:1,it=S*L*tt*ut*(.84+.16*Y(e*24,t*24)+(R(Math.floor(e*55),Math.floor(t*55))>.93?.12:0))*(.92+.1*Y(e*3+O,t*3))*(t<5.7?.78-.15*m(5.4,5.7,t):1)*(r<-.414&&t>5.7&&t<7.85?.8:1);p=(.04+.5*P+.09*w)*it,d=(.037+.39*P+.11*w)*it,M=(.04+.27*P+.16*w)*it}else if(!f&&t<14.2&&t>=8.82){const T=I(.47,.42,y((t-8.8)/5.5,0,1)),r=y(e/T,-.999,.999),x=.04*Math.sin(Math.asin(r)*10);s=N(r+x,0,Math.sqrt(1-r*r));const P=1.05-.5*m(8.8,14.2,t),w=Math.max(0,A(s,c)+.15)*P,S=Math.max(0,A(s,J)),C=Math.pow(Math.max(0,A(s,N(J[0],J[1],J[2]+1))),20);p=.03+.6*w+.12*S+.2*C,d=.028+.46*w+.15*S+.25*C,M=.03+.3*w+.21*S+.33*C}else{if(t>=14.2&&t<15.45&&!f){const r=t<14.8?0:1,x=e*(r?7:6)+r*.5,P=(t-(r?14.8:14.2))/.6,w=P-(.55+.3*Math.abs(Math.sin(x*Math.PI)));s=N(s[0]+.12*Math.sin(x*Math.PI*2)*P,s[1]-1.1*m(-.04,.06,w)*m(.22,.08,w)+.15,s[2])}if(k>16.3&&Math.abs(b)>.3&&!f){const r=k-(16.47+Math.abs(b)*.22);s=N(s[0]+.12*Math.sin((v*3-r*4)*6),s[1]+.3-.6*m(.05,.3,r),s[2])}t>=8.3&&t<8.82&&(s=N(s[0]*.5+e*.9,Math.cos((t-8.35)*6.7)*.8,1)),[p,d,M]=st(s,b,k,f?1.25:t>=14.2&&t<15.45?.75:1);const T=E?1.95:1.5;if(E){const r=m(-.09,0,n)*Math.max(0,-l*.7+g*.7);p+=.16*r,d+=.2*r,M+=.28*r}return[p*T,d*T,M*T]}return[p*1.45,d*1.45,M*1.45]}const q=-.2,Q=q-.03,ht=e=>e<-.03?-9:Q-.004+.13*m(-.02,.09,e)+.007*B(e*48)+.0035*B(e*160)+.012*m(.1,.45,e),nt=.125,mt=ht(nt),at=(()=>{const e=[-.75,.55,.45],t=Math.hypot(...e);return e.map(o=>o/t)})();function Ct(e,t,o){const n=ht(e);let l=0,g=0,u=0,s=0;if(t>Q-.006&&(l=y((n-t)/o+.5,0,1)*y((t-(Q-.006))/o,0,1),l>0)){const M=(_,D)=>{const L=_*70,tt=D*105,ut=1-Math.abs(Y(L*.55,tt*.4)-.5)*2;return .5*ut*ut+.28*Y(L*1.6,tt*1.3)+.1*Y(L*4.5,tt*4.5)+.22*m(.35,.65,V(tt*.11+B(L*.35)*.7))},b=M(e,t),k=-(M(e-.0015,t)-M(e+.0015,t))/(2*.0015)*.01,f=-(M(e,t+.0015)-M(e,t-.0015))/(2*.0015)*.01,T=N(k,f,1),r=Math.max(0,A(T,at)),x=.55+.45*T[1],P=.45+.55*m(.15,.65,b),w=.85+.15*Y(e*900,t*900)+(R(Math.floor(e*1500),Math.floor(t*1500))>.93?.18:0),S=I(1,.55,m(n-.004,n-.09,t))*P*w;g=(.07*x+.3*r)*S,u=(.066*x+.31*r)*S,s=(.088*x+.4*r)*S;const C=m(.012,0,n-t)*.55+m(.004,0,n-t)*.4;g+=.55*C,u+=.6*C,s+=.82*C;const O=m(.012,0,t-Q)*(.5+.5*B(e*300));g=g*(1-.3*O)+.08*O*r,u=u*(1-.3*O)+.1*O*r,s=s*(1-.3*O)+.14*O*r}const v=(t-mt)/1.4,p=(nt-e)/1.4;let d=null;if(v>-.012&&v<.1&&p>-.045&&p<.06){const M=I(.0085,.0058,y(v/.07,0,1));if(v<.07&&Math.abs(p)<M){const f=.75+.7*m(M,-M,p);d=V(v*42)>=.5?[.3*f,.07*f,.07*f]:[.38*f,.37*f,.42*f]}v>.068&&v<.072&&Math.abs(p)<.0095&&(d=[.12,.1,.11]),v>.072&&v<.084&&Math.abs(p)<.0052&&(d=[1.5,1.2,.8]),v>.084&&v<.092&&Math.abs(p)<.0065-(v-.084)*.8&&(d=[.16,.1,.09]);const E=.009,b=.046,k=.022;if(p>E&&p<b&&v<k&&v>-.012){const f=m(b,E,p);d=[.13+.12*f,.12+.12*f,.15+.16*f];const T=Math.abs(p-.028),r=Math.abs(v-.009);if(T<.0055&&r<.0045)d=T<8e-4||r<6e-4?[.3,.18,.08]:[1.35,.9,.42];else{const x=Math.exp(-Math.hypot(T,r)*160)*.5;d=[d[0]+x,d[1]+x*.62,d[2]+x*.25]}}if(p>E-.003&&p<b+.003&&v>=k&&v<k+.013-Math.abs(p-(E+b)/2)*.6){const f=m(k+.004,k+.012-Math.abs(p-(E+b)/2)*.6,v);d=[.1+.25*f,.07+.25*f,.08+.32*f]}d&&([g,u,s]=d,l=1)}return[g,u,s,l]}const pt={x0:-6,x1:6,y0:-.8,y1:18.2},vt=e=>Math.round(y(Math.pow(y(e,0,1.6)/1.6,1/2.2),0,1)*255),U=(e,t)=>{const o=.3*e[0]+.59*e[1]+.11*e[2],n=m(.02,.5,o),l=[I(.93,1.05,n),I(.95,1,n),I(1.07,.93,n)][t];return Math.round(y(Math.pow(1-Math.exp(-1.7*e[t]*l*.97),.96),0,1)*255)};function gt(e,t,o,n){const l=o.mon=new Uint8Array(e.w*e.h*4),g=o.ov=new Uint8ClampedArray(e.w*e.h*4),u=o.cape=new Uint8Array(t.w*t.h*4),s=(e.x1-e.x0)/e.w,v=(t.u1-t.u0)/t.w,p=[];for(let d=0;d<e.h;d+=n)p.push(()=>{for(let M=d;M<Math.min(e.h,d+n);M++){const E=e.y0+(M+.5)/e.h*(e.y1-e.y0);for(let b=0;b<e.w;b++){const k=e.x0+(b+.5)/e.w*(e.x1-e.x0);let f=Z(k,E);if(f>2.5*s)continue;let T=k,r=E;if(f>-.3*s){const C=s*.5,O=Z(k+C,E)-Z(k-C,E),_=Z(k,E+C)-Z(k,E-C),D=Math.hypot(O,_)||1,L=Math.max(f,0)+.6*s;T=k-O/D*L,r=E-_/D*L}const x=$(T,r),P=(M*e.w+b)*4,w=((e.h-1-M)*e.w+b)*4,S=y(.5-f/s,0,1);S>0&&(l[P]=vt(x[0]),l[P+1]=vt(x[1]),l[P+2]=vt(x[2]),l[P+3]=Math.round(S*255)),g[w]=U(x,0),g[w+1]=U(x,1),g[w+2]=U(x,2),g[w+3]=Math.round(y(.5-(f-1.6*s)/s,0,1)*255)}}});for(let d=0;d<t.h;d+=n)p.push(()=>{for(let M=d;M<Math.min(t.h,d+n);M++){const E=t.y0+(M+.5)/t.h*(t.y1-t.y0);for(let b=0;b<t.w;b++){const k=t.u0+(b+.5)/t.w*(t.u1-t.u0),f=Ct(k,E,v),T=(M*t.w+b)*4;f[3]<=0||(u[T]=vt(f[0]),u[T+1]=vt(f[1]),u[T+2]=vt(f[2]),u[T+3]=Math.round(f[3]*255))}}});return Object.assign(o,{M:e,Cp:t,lampY:mt+.083*1.4,lampU:nt}),p}function Mt(e,t){t=t||{};const o=Math.round(y(t.mw||320,160,520)/2)*2,n=Math.round(y(t.cw||512,256,768)),l=Object.assign({w:o,h:Math.round(o*(pt.y1-pt.y0)/(pt.x1-pt.x0))},pt),g={w:n,h:Math.round(n*.45),u0:-.04,u1:.56,y0:Q-.01,y1:Q+.26},u=Object.assign({},l,{w:Math.round(o/4),h:Math.round(l.h/4)}),s=Object.assign({},g,{w:Math.round(n/4),h:Math.round(g.h/4)}),v={},p={},d=gt(u,s,v,8),M=gt(l,g,p,6),E=window.requestIdleCallback?k=>requestIdleCallback(k,{timeout:120}):k=>setTimeout(()=>k(null),16),b=(k,f,T)=>{const r=x=>{const P=performance.now(),w=x&&!x.didTimeout?y(x.timeRemaining(),6,12):10;for(;k.length&&performance.now()-P<w;)k.shift()();k.length?T?setTimeout(r,0):E(r):f()};T?setTimeout(r,0):E(r)};b(d,()=>{v.coarse=!0,(t.coarse||e)(v),b(M,()=>e(p))},!0)}window.SCENE={bake:Mt,MON:pt}})(),function(){const V=document.getElementById("gl"),y=Object.assign({bx:.415,by:-.27,ms:.034,ck:.32},window.SCENE?SCENE.MON:{x0:-6,x1:6,y0:-.8,y1:18.2}),m=A=>(Math.round(A*1e6)/1e6).toFixed(6),I=/monchk/.test(location.hash);function W(A){A=A||R;const st=innerWidth,$=innerHeight,q=Math.min(st,$),Q=1+A.zm*.06,ht=y.ms*A.msk,nt=y.bx-A.cam*y.ck+A.mox+y.x0*ht,mt=y.by+y.y1*ht-(A.pary*.012-A.sy*.09-A.lift);return{x:st/2+nt*Q*q,y:$/2-mt*Q*q,k:Q,m:q,w0:(y.x1-y.x0)*ht*q,h0:(y.y1-y.y0)*ht*q}}const R={scr:0,ly:0,lift:0,heart:1,cool:0,fill:0,burst:0,cam:0,par:0,tint:0,streak:0,beat:0,hy:0,hs:1,mx:0,my:0,mo:0,zm:0,lk:0,lp:0,pary:0,rx:0,ry:0,rp:1,fw:0,sy:0,lv:3,mox:0,msk:1,hx:0,cpx:0,wm:1},B=Object.assign({},R),Y=matchMedia("(prefers-reduced-motion: reduce)").matches,H={ok:!1,rm:Y,set(A){Object.assign(B,A)},jump(A){Object.assign(B,A),Object.assign(R,A)},state:R,target:B};window.GL=H;const Rt=(navigator.hardwareConcurrency||4)<=4||(navigator.deviceMemory||4)<=3,dt=[{s:.42,q:.5},{s:.55,q:.65},{s:.7,q:.8},{s:.85,q:1},{s:1,q:1}],kt=/lv=([0-4])/.exec(location.hash);let et=1;const Ft=()=>Math.min(1,.42/(dt[0].s*Math.max(1,ct/innerWidth)));let K=kt?+kt[1]:Rt?2:3,xt=dt[K].s,At=dt[K].q,ot=!1,ct=0,Z=0,X=1,G=1;R.lv=B.lv=K,Y&&(R.wm=B.wm=0),document.documentElement.classList.toggle("lq",K<2);function ft(){X=Math.max(1,Math.round(ct*xt*et)),G=Math.max(1,Math.round(Z*xt*et)),c&&c.viewport(0,0,X,G),V.style.transform=X<ct||G<Z?`scale(${(ct/X).toFixed(5)},${(Z/G).toFixed(5)})`:"",ot=!1}function Lt(){const A=Math.min(window.devicePixelRatio||1,2);let st=innerWidth*A,$=innerHeight*A;const q=Math.min(1,1400/Math.max(st,$));ct=Math.round(st*q),Z=Math.round($*q),(V.width!==ct||V.height!==Z)&&(V.width=ct,V.height=Z),ft()}let c;const J=!!window.WebGLRenderingContext&&!/nogl/.test(location.hash);H.ok=J,J?document.documentElement.classList.add("gl"):document.documentElement.classList.add("no-gl"),J&&requestAnimationFrame(()=>setTimeout(N,0));function N(){Lt();try{c=V.getContext("webgl",{antialias:!1,alpha:!0,premultipliedAlpha:!0,powerPreference:"high-performance",preserveDrawingBuffer:!1})}catch{}if(!c){H.ok=!1,document.documentElement.classList.remove("gl"),document.documentElement.classList.add("no-gl"),requestAnimationFrame(()=>document.documentElement.classList.add("gl-ready"));return}E();const A="attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}",st=`
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
uniform vec2 R; uniform sampler2D TM,TC; uniform float t,q,scr,ly,lift,heart,cool,fill,burst,cam,par,tint,streak,beat,hy,hs,mx,my,mo,zm,lk,lp,pary,rx,ry,rp,fw,sy,lv,mox,msk,hx,cpx,wm;
#define PI 3.14159265
float h11(float n){return fract(sin(n*127.1)*43758.5453);}
float h21(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}
float n1(float x){float i=floor(x),f=fract(x);f=f*f*(3.-2.*f);return mix(h11(i),h11(i+1.),f);}
float ridge(float x,float s){float a=0.,m=.55,f=1.;for(int i=0;i<5;i++){float v=n1(x*f+s*17.3);a+=m*(i<2?1.-abs(2.*v-1.):v);f*=2.07;m*=.48;}return a;}
float dot2(vec2 v){return dot(v,v);}
float n2(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h21(i),h21(i+vec2(1.,0.)),f.x),mix(h21(i+vec2(0.,1.)),h21(i+1.),f.x),f.y);}
// салют над бухтой (только на финале)
vec3 fireworks(vec2 uv,float asp){
  vec3 c=vec3(0.);
  for(int k=0;k<3;k++){
    float fk=float(k); if(fk>1.5 && lv<1.5) break; float fw3=fk>1.5?clamp(lv-1.5,0.,1.):1.; float P=3.4+fk*.7, tk=t+fk*1.37, id=floor(tk/P), ph=fract(tk/P);
    vec2 ce=vec2((h11(id*3.1+fk*7.)-.5)*1.4*min(asp,1.4),.3+.42*h11(id*5.7+fk));
    vec3 hue=mix(vec3(1.,.45,.3),mix(vec3(1.,.82,.55),vec3(1.,.3,.45),h11(id+fk*3.)),h11(id*9.1+fk));
    float e=pow(1.-ph,1.6)*1.5, r=.24*(1.-pow(1.-min(ph*1.4,1.),3.));
    // взлёт: короткий след снизу вверх
    if(ph<.05){ float ly=mix(-.2,ce.y,ph/.05); c+=hue*exp(-length((uv-vec2(ce.x,ly))*vec2(1.,.35))*120.)*.8; continue; }
    float dc=length(uv-ce); if(dc>r+.06) { c+=hue*exp(-dc*9.)*e*e*.02; continue; }
    // только ближайшие 3 искры по углу вместо перебора всех 20
    vec2 rv=uv-ce+vec2(0.,ph*ph*.06); float ai=floor(atan(rv.y,rv.x)/6.2832*20.+.5);
    for(int j=-1;j<=1;j++){ if(j!=0 && lv<.8) continue; float fi=mod(ai+float(j)+20.,20.);
      float a=fi/20.*6.2832+(h11(fi+id)-.5)*.12; vec2 pp=ce+vec2(cos(a),sin(a))*r*(.85+.15*h11(fi*3.+id))-vec2(0.,ph*ph*.06);
      float d=length(uv-pp); c+=hue*(.00006/(d*d+.00004))*e*fw3*(.6+.4*sin(t*30.+fi)); }
    c+=hue*exp(-dc*9.)*e*e*.035;
  }
  return c;
}
mat2 rot(float a){float c=cos(a),s=sin(a);return mat2(c,-s,s,c);}
float smin(float a,float b,float k){float h=clamp(.5+.5*(b-a)/k,0.,1.);return mix(b,a,h)-k*h*(1.-h);}

// ---------- мир ----------
const float HZ=-0.20;
float lightsRow(float x){ // огни набережной
  float c=floor(x*90.); float f=fract(x*90.)-.5;
  return step(.45,h11(c*3.1))*smoothstep(.22,0.,abs(f));
}
// ---------- v18: сцена первого экрана ----------
// мыс с маяком слева, Памятник затопленным кораблям справа в воде; всё уходит, когда камера идёт к следующим шагам
float vis(){return 1.-smoothstep(1.3,2.,cam);}
float capeX0(){return -.12-cam*.15+cpx;}
const float CWL=HZ-.03; // линия воды у мыса в текстуре
const float CK=1.35, CW2=HZ-.045; // v19: мыс крупнее и ближе
// всё, что зависит только от времени и камеры, считается один раз на пиксель (sceneInit), а не в каждом вызове
float gV,gLn,gFl,gX0,gB,gMA; vec2 gL,gD;
void sceneInit(){ gV=vis()*scr; gX0=capeX0(); if(gV<.01) return; gL=vec2(gX0-.125*CK,CW2+(ly-CWL)*CK);
  float a=t*.42, s=sin(a); gD=normalize(vec2(s,-.085)); gLn=abs(s); gFl=pow(max(cos(a),0.),10.); }
// луч маяка: вращается, при развороте к зрителю — вспышка
float beamI(vec2 uv){
  if(gV<.01) return 0.;
  vec2 v=uv-gL; float al=dot(v,gD); if(al<0.) return 0.;
  float pe=abs(v.x*gD.y-v.y*gD.x);
  return gV*exp(-al*1.3/(gLn+.04))*smoothstep(.11*al+.004,0.,pe)*smoothstep(0.,.025,al)*(.3+.7*gLn);
}
// мыс с маяком и памятник заранее нарисованы в текстуры (выпечка в начале файла): здесь только выборка
vec4 dec(vec4 s){ s.rgb=pow(s.rgb,vec3(2.2))*1.6; return s; }
vec4 capeT(vec2 uv){ vec2 c=vec2(((gX0-uv.x)/CK+.04)/.6,((uv.y-CW2)/CK+.01)/.27); if(c.x<0.||c.x>1.||c.y<0.||c.y>1.) return vec4(0.); return dec(texture2D(TC,c)); }
// Памятник затопленным кораблям: в метрах, 0 — вода
const vec2 MB0=vec2(${m(y.bx)},${m(y.by)}); const float MS=${m(y.ms)}; // v19: памятник — главный герой, ≈25% высоты экрана; v20: на интро правее — снежинка его не касается
vec2 monB(){return vec2(MB0.x-cam*${m(y.ck)}+mox,MB0.y);}
vec4 monT(vec2 p){ vec2 c=(p-vec2(${m(y.x0)},${m(y.y0)}))/vec2(${m(y.x1-y.x0)},${m(y.y1-y.y0)}); if(c.x<0.||c.x>1.||c.y<0.||c.y>1.) return vec4(0.); return dec(texture2D(TM,c)); }
vec3 world(vec2 uv,float asp){
  float w=uv.x+cam*0.25, V=gV;
  // небо: тёмно-синее вверху, тёплое у горизонта
  vec3 col=mix(vec3(.28,.13,.11),vec3(.05,.05,.11),smoothstep(HZ,HZ+.4,uv.y));
  col=mix(col,vec3(.008,.012,.04),smoothstep(HZ+.3,.95,uv.y));
  col+=vec3(.55,.2,.1)*exp(-max(uv.y-HZ,0.)*9.)*(.18+.25*tint);
  // звёзды: яркие редкие и мелкие частые, мерцают
  vec2 su=uv+vec2(cam*.05,0.); float sk=smoothstep(HZ+.12,.45,uv.y);
  if(sk>0.){ vec2 g=su*70.; vec2 c=floor(g), f=fract(g)-.5; float h=h21(c+31.);
    if(h>.965){ vec2 o=(vec2(h21(c+7.),h21(c+13.))-.5)*.6;
      col+=vec3(1.,.93,.88)*smoothstep(.16,.0,length(f-o))*(.55+.45*sin(t*(1.5+h*3.)+h*60.))*sk*1.4; } }
  if(sk>0.){ vec2 sg=floor(su*150.); float sh=h21(sg);
    col+=vec3(.85,.88,1.)*step(.9955,sh)*sk*(.35+.25*sin(t*2.+sh*40.)); }
  // редкая падающая звезда
  { float k=floor(t/9.), ph=fract(t/9.);
    if(ph<.07 && uv.y>HZ+.25){ vec2 a=vec2(h11(k*3.1)*.7-.25,.55+h11(k*5.3)*.35); vec2 dd=normalize(vec2(-1.,-.42));
      vec2 hd=a+dd*ph/.07*.5; vec2 e=uv-hd; float al=clamp(dot(e,-dd),0.,.16); float ds=length(e+dd*al);
      col+=vec3(1.,.92,.85)*smoothstep(.003,0.,ds)*(1.-al/.16)*sin(ph/.07*3.14)*1.4; } }
  // луна в дымке
  vec2 mp=mix(vec2(-.42*asp+cam*.02,.48),vec2(mx,my),mo);
  float md=length(uv-mp);
  col+=vec3(1.,.88,.76)*(smoothstep(.042,.038,md)*.8+exp(-md*9.)*.16+exp(-md*3.2)*.04);
  col+=vec3(1.,.75,.6)*smoothstep(.012,0.,abs(md-.075))*.03;
  // горы: 3 слоя с воздушной перспективой — дальние светлее и синее, растворяются в небе у горизонта
  float bay=smoothstep(.0,.75,abs(w*.9-.05));
  for(int i=0;i<3;i++){
    float fi=float(i);
    float x=w*(1.0+fi*.7)+cam*(.08+fi*.22)+par*(.01+fi*.02);
    float hgt=(uv.y>HZ && uv.y<HZ+.37)?HZ+.01+(0.34-fi*.09)*ridge(x*(1.1+fi*.8),fi+1.)*(.35+.65*bay):HZ;
    if(uv.y<hgt && uv.y>HZ){
      float k=fi/2.;
      vec3 mc=mix(vec3(.075,.06,.11),vec3(.02,.016,.03),k);
      mc=mix(mc,col,(1.-k)*.42);
      float snow=smoothstep(.06,.0,hgt-uv.y)*smoothstep(HZ+.16,HZ+.30,hgt)*(1.-k)*(.6+.4*n1(x*40.));
      mc+=vec3(.5,.52,.66)*snow*.3;
      if(i==2){
        vec2 g=vec2(x*60.,uv.y*60.); vec2 c=floor(g); vec2 f=fract(g)-.5;
        float on=step(.86,h21(c))*step(uv.y,hgt-.012)*smoothstep(HZ+.10,HZ,uv.y);
        float tw=.6+.4*sin(t*1.5+h21(c+3.)*30.);
        mc+=vec3(1.,.62,.3)*on*smoothstep(.18,0.,length(f))*1.6*tw;
        mc+=vec3(1.,.55,.3)*on*exp(-length(f)*4.)*.08;
      }
      col=mc;
    }
  }
  // огни Севастополя на дальнем берегу: кварталы-скопления
  if(abs(uv.y-HZ-.006)<.02){ float city=.35+.65*smoothstep(.35,.6,n1(w*7.+3.)); col+=vec3(1.,.7,.4)*lightsRow(w)*city*smoothstep(.006,0.,abs(uv.y-HZ-.006))*1.25; }
  // v20: редкая чайка — пролетает раз в ~17 с, машет крыльями, подсвечена луной и лучом маяка
  if(gV>.01){ float k=floor(t/17.), ph=fract(t/17.);
    if(ph<.42){ float pp=ph/.42; vec2 gp=vec2(mix(-.62,.62,pp)*(h11(k*2.3)>.5?1.:-1.),HZ+.2+.16*h11(k*4.7)+.035*sin(pp*7.));
      vec2 e=(uv-gp)*vec2(h11(k*2.3)>.5?1.:-1.,1.);
      if(abs(e.x)<.03 && abs(e.y)<.02){ float fl=sin(t*9.)*.6; vec2 a2=vec2(abs(e.x),e.y);
        float wy=a2.x*(.35+fl*.5)-a2.x*a2.x*(6.+fl*4.); // крыло — дуга «чайки»
        float dw=abs(a2.y-wy)-.0018*(1.-a2.x/.024); dw=max(dw,a2.x-.024);
        float db=length(e/vec2(1.6,1.))-.0028;
        float g=smoothstep(.0012,0.,min(dw,db));
        col=mix(col,vec3(.52,.55,.62)+vec3(1.,.85,.6)*gB*1.5,g*gV*.9); } } }
  // море
  if(uv.y<HZ){
    float dy=HZ-uv.y;
    vec3 sea=mix(vec3(.10,.065,.09),vec3(.01,.012,.026),smoothstep(0.,.45,dy));
    float rip=n1(uv.y*160./(dy+.05)*.05+t*.8)*n1(w*30.+uv.y*90.);
    float refl=dy<.35?lightsRow(w+(rip-.5)*.05)*(.35+.65*smoothstep(.35,.6,n1(w*7.+3.)))*exp(-dy*9.)*(.3+1.*rip*rip):0.;
    sea+=vec3(1.,.6,.35)*refl*.32;
    sea+=vec3(.6,.25,.15)*exp(-dy*12.)*.22;
    // лунная дорожка и мерцание воды
    sea+=vec3(1.,.87,.74)*exp(-abs(uv.x-mp.x)*(16.-dy*8.))*exp(-dy*2.6)*rip*.42;
    float gl1=lv<1.?0.:step(.984,h21(floor(vec2((uv.x-mp.x)*240.,dy*520./(dy*6.+.3)))+floor(t*5.)));
    vec3 spk=vec3(1.,.9,.8)*gl1*exp(-abs(uv.x-mp.x)*(6.+dy*18.))*exp(-dy*3.)*.95; // v25: искры дорожки ярче и шире, фон не светлеет; кладутся поверх отражения мыса
    // v24: живая бухта — мягкие бегущие гребни на лунной дорожке; в reduced-motion и медленном режиме застывают
    float mot=wm*clamp(lv-1.,0.,1.), tw=t*mot;
    float mpa=exp(-abs(uv.x-mp.x)*(10.-dy*4.))*exp(-dy*2.2);
    if(mpa>.03){ float cr=sin(dy*240./(dy*5.+.25)-tw*1.7+n1(uv.x*14.+tw*.25)*5.); spk+=vec3(1.,.9,.78)*mpa*smoothstep(.72,1.,cr)*(.35+.65*rip*rip)*.3; } // v25: гребни уже и контрастнее — блик, а не пелена
    if(lv>2.5 && dy<.3){ float gl2=step(.993,h21(floor(vec2(uv.x*300.,dy*700./(dy*6.+.3)))+floor(t*3.))); sea+=vec3(.7,.75,.95)*gl2*exp(-dy*2.)*.18; }
    if(V>.01){
      // отсвет маяка: дорожка под лампой и отражение луча; отражение мыса
      if(abs(uv.x-gL.x)<.09) sea+=vec3(1.,.78,.5)*exp(-abs(uv.x-gL.x+(rip-.5)*.02)*70.)*exp(-max(CW2-uv.y,0.)*5.)*(.12+.5*gFl)*(.4+rip)*V;
      if(dy<.35) sea+=vec3(1.,.8,.55)*beamI(vec2(uv.x,2.*CW2-uv.y))*.55*(.3+rip); // световая полоса луча на воде
      // v24: блик луча на воде — пятно там, где луч касается волны; бежит вместе с вращением (sin — вбок, cos>0 — к зрителю, ближе и ниже)
      if(mot>.01){ float sa=sin(t*.42), fa=max(cos(t*.42),0.); vec2 gp=vec2(gL.x+sa*(.3-.12*fa),CW2-.012-.085*fa*fa);
        vec2 e=(uv-gp)/vec2(.05+.07*(1.-fa),.005+.011*fa);
        if(abs(e.x)<3. && abs(e.y)<3.){ float sh=smoothstep(.35,.8,n1(uv.x*70.-tw*.6+n1(dy*140./(dy*4.+.2)+tw*1.3)*3.));
          sea+=vec3(1.,.82,.58)*exp(-dot(e,e))*(.25+1.1*sh)*(.25+.75*smoothstep(-.2,.6,cos(t*.42)))*.95*V*mot; } }
      if(uv.y<CW2 && uv.y>CW2-.36) sea=mix(sea,vec3(.015,.012,.025),.7*V*capeT(vec2(uv.x+(rip-.5)*.012,2.*CW2-uv.y)).a);
    }
    sea+=spk; // блики волн видны и на тёмном отражении мыса (грани волн ловят луну)
#ifdef FW
    if(fw>.01) sea+=fireworks(vec2(uv.x+(rip-.5)*.02,2.*HZ-uv.y),asp)*fw*exp(-dy*3.)*.35;
#endif
    col=sea;
  }
  // v20: огни судна вдали — медленно идёт вдоль горизонта (топовый белый, бортовой красный) и дорожка на воде
  if(abs(uv.y-HZ)<.06){ float sx=-.75+1.5*fract(t/140.+.35), ex=uv.x-sx;
    if(abs(ex)<.05){ float ey=uv.y-HZ;
      col+=vec3(1.,.95,.85)*exp(-length(vec2(ex,ey-.011))*900.)*1.1+vec3(1.,.25,.2)*exp(-length(vec2(ex-.007,ey-.004))*1000.)*.9;
      col+=vec3(1.,.85,.7)*exp(-length(vec2(ex,ey-.008))*160.)*.05; // ореол
      if(ey<0.) col+=vec3(1.,.85,.7)*exp(-abs(ex+(n1(uv.y*400.+t*3.)-.5)*.004)*600.)*exp(ey*40.)*.35; } }
  if(V>.01){
    // мыс со скалами и маяком (текстура) + прибой у подножия
    vec4 cp=capeT(uv);
    if(cp.a>0.){ vec3 rc=cp.rgb; float u=gX0-uv.x;
      rc+=vec3(.8,.85,1.)*smoothstep(.008,0.,uv.y-CW2)*smoothstep(.12,0.,u)*(.5+.5*sin(t*2.+u*90.))*.25;
      col=mix(col,rc,cp.a*V); }
    float ld=length(uv-gL);
    if(ld<.35) col+=vec3(1.,.82,.55)*(exp(-ld*70.)*(.35+.9*gFl)+exp(-ld*14.)*.06*(1.+2.*gFl))*V;
    col+=vec3(1.,.85,.65)*gB*.34; // явный конус луча по небу
    // огни набережной у памятника и их дорожки на воде
    { vec2 B=monB(); float ex=uv.x-B.x, ey=uv.y-(B.y+.012);
      if(abs(ex)<.45 && ey<.03 && ey>-.22){ float c=floor(ex/.032+.5), fx=ex-c*.032, on=step(.3,h11(c*7.1+3.))*step(.05*msk,abs(ex));
        if(ey>-.006) col+=vec3(1.,.72,.42)*on*(exp(-length(vec2(fx,ey))*300.)*1.3+exp(-length(vec2(fx,ey))*70.)*.1)*V;
        else col+=vec3(1.,.7,.4)*on*exp(-abs(fx+(n1(uv.y*140.+t*2.)-.5)*.006)*380.)*exp(ey*10.)*.3*V; } }
    // памятник: силуэт, луч маяка по нему и отражение в воде
    vec2 p=(uv-monB())/(MS*msk);
    if(abs(p.x)<${m(y.x1)} && p.y<${m(y.y1)} && p.y>-11.){
#ifdef MONCHK
      if(p.y>-.8){ vec4 m=monT(p); if(m.a>0.) col=mix(col,m.rgb+vec3(1.,.82,.6)*gB*.5,m.a*V); }
#endif
      if(p.y<0.){ float rp=n1(p.y*2.5+t*1.4)*n1(p.x*1.5-t);
        vec4 m=monT(vec2(p.x+(rp-.5)*(.5-p.y*.07),-p.y*1.05));
        col=mix(col,m.rgb*(.35+.5*rp)+vec3(.012,.01,.02),.8*m.a*V*smoothstep(-13.,-2.,p.y)); // тёплое отражение в воде
        // v20: лёгкая волна и пена у подножия — бегущие гребешки, пена клочьями, тёплый отсвет прожекторов на воде
        float wv=p.y+.12+.13*sin(p.x*2.2-t*1.9)+.07*sin(p.x*5.3+t*2.7), hw=4.9-p.y*.2;
        float fm=smoothstep(.3,0.,abs(wv))*smoothstep(hw+.6,hw-.4,abs(p.x))*smoothstep(.3,.75,n1(p.x*2.6-t*1.3+p.y*3.));
        col+=vec3(.8,.86,1.)*fm*.42*V;
        col+=vec3(1.,.72,.42)*smoothstep(1.6,0.,-p.y)*smoothstep(hw+1.2,0.,abs(p.x))*(.5+.5*sin(p.x*7.+p.y*9.-t*3.))*.06*V; // пятно тёплого света на ряби
      }
    }
  }
#ifdef FW
  if(fw>.01 && uv.y>HZ) col+=fireworks(uv,asp)*fw*smoothstep(HZ,HZ+.08,uv.y);
#endif
  return col;
}
vec3 snowFx(vec2 uv){
  vec3 c=vec3(0.);
  for(int k=0;k<3;k++){
    float fk=float(k); if(fk>1.5 && lv<1.) break; float s=6.+fk*5.;
    vec2 p=uv*s; p.y+=t*(.35+.18*fk); p.x+=sin(t*.25+fk*2.)*.6+cam*(1.+fk);
    vec2 ce=floor(p); vec2 f=fract(p)-.5;
    vec2 o=(vec2(h21(ce),h21(ce+5.))-.5)*.7;
    float d=length(f-o);
    c+=vec3(1.,.93,.9)*smoothstep(.07-fk*.015,0.,d)*step(.55,h21(ce+9.))*(.45-fk*.11);
  }
  // близкие крупные хлопья в расфокусе — глубина
  if(lv<2.) return c;
  vec2 p=uv*2.6; p.y+=t*.95; p.x+=sin(t*.2)*.4+cam*3.5+par*.25;
  vec2 ce=floor(p); vec2 f=fract(p)-.5; vec2 o=(vec2(h21(ce+2.),h21(ce+7.))-.5)*.6;
  c+=vec3(1.,.9,.86)*smoothstep(.17,.02,length(f-o))*step(.78,h21(ce+11.))*.07*clamp(lv-2.,0.,1.);
  return c;
}

// ---------- стеклянная снежинка (v17): тонкие лучи с веточками, кристальный гранёный профиль ----------
float br(vec2 p,float x,float L,float w){ vec2 a=p-vec2(x,0.); return length(a-vec2(.5,.866)*clamp(dot(a,vec2(.5,.866)),0.,L))-w; }
float sdFlake(vec2 p){
  // свёртка в сектор 0–30° отражениями (без atan): луч вдоль x, соседние лучи — зеркала
  p=abs(p); p-=2.*min(dot(p,vec2(.866,-.5)),0.)*vec2(.866,-.5); p-=2.*min(dot(p,vec2(.5,-.866)),0.)*vec2(.5,-.866);
  float d=length(vec2(p.x-clamp(p.x,0.,.88),p.y))-mix(.03,.014,clamp(p.x/.88,0.,1.)); // луч сужается к кончику
  d=min(d,br(p,.24,.17,.017)); d=min(d,br(p,.44,.23,.016)); d=min(d,br(p,.62,.17,.014)); d=min(d,br(p,.77,.08,.012));
  d=min(d,abs(max(p.x*.866+p.y*.5,p.y)-.13)-.014); // шестиугольное кольцо
  d=min(d,max(p.x*.866+p.y*.5,p.y)-.05);           // маленькая пластинка в центре
  return d;
}
float shp2(vec2 p){ return sdFlake(p*1.42)/1.42; }
float pulse(){float b=fract(t*(.85+fill*.6));return (exp(-b*9.)*.6+exp(-max(b-.18,0.)*9.)*.4*step(.18,b))*(.3+fill*.7);}
mat2 RA,RB,RC; // повороты фигуры считаются один раз на пиксель, а не на каждом шаге луча
vec3 hp(vec3 p){p.xy*=RA;p.xz*=RB;p.yz*=RC;return p;}
float gPu,gSc; // v26: пульс и масштаб снежинки — один раз на пиксель, а не на каждом шаге луча (раньше pulse() считался ~40 раз)
float mapH(vec3 p){
  float sc=gSc;
  p/=sc; p=hp(p);
  float r2=length(p.xy); float d2=r2>.67?r2-.635:shp2(p.xy); // далеко от лучей — дешёвая оценка (только для шага луча)
  float th=.010+clamp(-d2,0.,.1)*1.15; // гранёный хребет вдоль каждого луча — свет ломается на гранях
  float dz=abs(p.z)-th;
  return (length(max(vec2(d2,dz),0.))+min(max(d2,dz),0.)-.003)*.7*sc;
}
vec3 nH(vec3 p){vec2 e=vec2(.0015,-.0015);return normalize(e.xyy*mapH(p+e.xyy)+e.yyx*mapH(p+e.yyx)+e.yxy*mapH(p+e.yxy)+e.xxx*mapH(p+e.xxx));}

void main(){
  vec2 uv=(gl_FragCoord.xy-.5*R)/min(R.x,R.y);
  float asp=R.x/R.y;
  vec2 uv0=uv; uv=uv/(1.+zm*.06)+vec2(0.,pary*.012-sy*.09-lift); // lift: на экране вопроса горизонт поднят, памятник над текстом
  // волна-преломление от точки касания при переходе
  vec2 uvA=uv; float ring=0.;
  if(rp<.999 && lv>.5){ vec2 rv=uv0-vec2(rx,ry); float rd0=length(rv); ring=exp(-pow((rd0-rp*1.9)*9.,2.))*(1.-rp)*(1.-rp);
    uv+=rv/(rd0+.001)*ring*.06; }
  sceneInit(); gB=beamI(uv); // луч в этом пикселе — один раз
  // v21: сам памятник — отдельный чёткий слой под холстом; здесь только «окно» по его альфе (без волны-преломления, чтобы совпадало со слоем)
  gMA=0.;
#ifndef MONCHK
  if(gV>.01){ vec2 pm=(uvA-monB())/(MS*msk); gMA=monT(pm).a*gV; }
#endif
  vec3 col=world(uv,asp);
  col=col*(1.-gMA)+vec3(1.,.82,.6)*gB*.5*gMA; // луч маяка скользит и по памятнику
  vec3 ro=vec3(0.,0.,3.2);
  // ---------- снежинка ----------
#ifdef HEART // v26: снежинка — только в программах, где она видна (в SwiftShader/слабых GPU мёртвые ветки тоже стоят кадров)
  if(heart>.01){
    RA=rot(t*.07); RB=rot(sin(t*.45)*.5+burst*.5); RC=rot(.12*sin(t*.33));
    vec2 hu=uv-vec2(hx,hy);
    vec3 rd=normalize(vec3(hu,-2.1));
    // силуэт на экране с учётом поворота: по нему ореол и отсечение лучей мимо фигуры
    float d2s=shp2((hu/hs)*1.52*RA);
    float halo=exp(-max(d2s,0.)*(10.-5.*fill))*(.05+.55*fill+.25*beat)*(1.-burst);
    col+=mix(vec3(1.,.66,.74),vec3(.62,.78,1.),cool)*halo*heart*.55; // остывая, ореол уходит в холодный голубой
    float tt=0.,hit=0.; vec3 p; gPu=pulse(); gSc=hs*(1.+.035*gPu+.05*beat+burst*.25);
    float b=dot(ro,rd),c=dot(ro,ro)-1.5*hs*hs,h=b*b-c;
    // плоская снежинка при любом повороте остаётся внутри своего силуэта: лучи далеко от него не трассируем
#ifndef NOMARCH // v26: лёгкий проход без трассировки снежинки (сама снежинка — вторым проходом в своём прямоугольнике)
    if(h>0. && (burst>.01 || d2s<.1)){
      tt=max(-b-sqrt(h),0.); float tx=min(-b+sqrt(h),6.); // v26: луч, вышедший из ограничивающей сферы, уже ничего не встретит — дальше не шагаем
      for(int i=0;i<64;i++){
        if(float(i)>64.*q) break;
        p=ro+rd*tt; float d=mapH(p);
        if(d<.0012){hit=1.;break;}
        tt+=d; if(tt>tx) break;
      }
    }
    if(hit>.5){
      vec3 n=nH(p), v=-rd;
      vec3 lp=hp(p/(hs*(1.+burst*.25)));
      // растворение на частицы
      float hn=mix(h21(floor(lp.xy*46.)+floor(lp.z*46.)*7.),1.-(lp.y*.5+.5),.45);
      float keep=step(burst*1.05,hn);
      float edge=smoothstep(.08,0.,hn-burst*1.05)*step(.001,burst);
      float fr=pow(1.-max(dot(n,v),0.),2.);
      // преломление смягчено к ровному ледяному тону: без резкой границы по линии горизонта
      float sv=gV; gV=0.; vec3 refr=mix(world(uv+n.xy*.1,asp)*1.15,vec3(.30,.27,.36),.62); gV=sv; // в преломлении сцена не нужна
      vec3 r=reflect(rd,n);
      // отражение — мягкое аналитическое небо (без второго просчёта мира): верх светлее, тёплый блик сбоку
      vec3 env=mix(vec3(.16,.12,.2),vec3(.85,.8,.95),smoothstep(-.3,.9,r.y))+vec3(1.,.7,.6)*smoothstep(.55,.95,r.x)*.5;
      // лёгкая радужная дисперсия по краям граней
      vec3 irid=.5+.5*cos(2.*PI*(vec3(0.,.33,.67)+fr*1.6+dot(n.xy,vec2(.8,.5))*.9+t*.03));
      vec3 l1=normalize(vec3(-.4,.8,.6)), l2=normalize(vec3(.7,.2,.5));
      float facet=.55+.45*dot(n,l1);
      float sp=pow(max(dot(reflect(-l1,n),v),0.),70.)+.5*pow(max(dot(reflect(-l2,n),v),0.),40.);
      float rr=length(lp.xy);
      // внутреннее свечение: ровное по всей снежинке, чуть ярче к центру; растёт при удержании
      float gl=(.15+fill*1.)*(1.+.35*gPu)*(.65+.35*smoothstep(.6,0.,rr));
      vec3 hc=refr*facet*(1.-fr*.4);
      hc+=mix(vec3(1.,.74,.8),vec3(.7,.84,1.),cool)*gl*(1.-fr*.55);
      hc+=vec3(.75,.88,1.)*cool*fill*.5*pow(fr,1.5)*(.6+.4*sin(t*3.+lp.x*9.)); // иней по краям граней, пока остывает
      hc+=env*fr*mix(vec3(1.),irid,.55)*.75;
      hc+=irid*fr*.22;
      hc+=vec3(1.)*sp*1.5;
      // искорки на гранях
      hc+=vec3(1.,.95,.9)*step(.985,h21(floor(lp.xy*34.)+floor(t*2.5)))*smoothstep(.2,.8,facet)*.9;
      hc+=vec3(1.,.86,.9)*edge*2.2; // край рассыпания — бело-розовые искры
      col=mix(col,hc,heart*keep); gMA*=1.-heart*keep;
    }
#endif
    // частицы: пыль вокруг и взрыв
    float np=24.+40.*burst;
    // пыль вокруг снежинки: вдали от него вклад нулевой — пропускаем цикл
    if(burst>=.999 || (burst<.01 && length(uv-vec2(hx,hy))>hs*1.932/(3.2-.92*hs)+.26)) np=-1.;
    for(int i=0;i<64;i++){
      float fi=float(i); if(fi>np*q) break;
      vec3 dir=normalize(vec3(h11(fi*1.3)-.5,h11(fi*2.7)-.5,h11(fi*4.1)-.5));
      float rr=(.62+.3*h11(fi*5.9))+burst*(1.2+2.2*h11(fi*7.7));
      vec3 pp=dir*rr*hs; pp.xz*=rot(t*(.15+.2*h11(fi))); pp.y+=sin(t*.7+fi)*.03;
      float s=2.1/(3.2-pp.z);
      vec2 sp2=pp.xy*s+vec2(hx,hy);
      float d=length(uv-sp2);
      float a=(.00045+.0006*burst)/(d*d+.00025)*.02;
      vec3 pc=mix(vec3(1.,.55,.4),vec3(1.,.85,.75),h11(fi*8.8));
      col+=pc*a*heart*(.25+.75*fill)*(1.-smoothstep(.6,1.,burst));
    }
  }
#endif
  col+=snowFx(uv)*(1.+7.*gB); // снежинки вспыхивают в луче маяка
  col+=vec3(1.,.75,.6)*ring*.12;
  // анаморфный блик
  col+=vec3(1.,.55,.45)*exp(-abs(uv.y-hy)*40.)*streak*1.3+vec3(1.,.8,.7)*streak*.18;
  // световая засветка при переходах (light leak)
  if(lk>.001){ vec2 lc=vec2(lp*1.25*max(asp,.6),.15-lp*.1);
    col+=vec3(1.,.42,.22)*exp(-length((uv0-lc)*vec2(.55,1.))*2.6)*lk*.55+vec3(1.,.75,.5)*exp(-abs(uv0.x-lc.x+uv0.y*.35)*9.)*lk*.12; }
  // грейд
  col*=1.-.38*dot2(uv0*vec2(.7/max(asp,.6),.85));
  float lum=dot(col,vec3(.3,.59,.11));
  col*=mix(vec3(.93,.95,1.07),vec3(1.05,1.,.93),smoothstep(.02,.5,lum)); // холодные тени, тёплые света
  col=1.-exp(-col*1.7);
  // v26: виньетка (была отдельным полноэкранным DOM-слоем .vig) — теперь здесь, тот же градиент: минус один слой композиции
  vec2 sp=gl_FragCoord.xy/R; float va=.231*clamp((length(vec2((sp.x-.5)/1.3,(.55-sp.y)/.95))-.62)/.38,0.,1.);
  gl_FragColor=vec4(mix(pow(col,vec3(.96)),vec3(.0196,.0078,.0157)*(1.-gMA),va),1.-gMA); // премультиплицированная альфа: в окне виден слой памятника, снег и луч — поверх
}`,$=document.documentElement;let q=/Apple/.test(navigator.vendor||"")?null:c.getExtension("KHR_parallel_shader_compile");function Q(a,i){const h=c.createShader(a);return c.shaderSource(h,i),c.compileShader(h),h}let ht,nt,mt,at=!1;H.ok=!0,$.classList.add("gl");function Ct(){nt&&!c.getShaderParameter(nt,c.COMPILE_STATUS)&&console.warn(c.getShaderInfoLog(nt)),H.ok=!1,$.classList.remove("gl"),$.classList.add("no-gl"),requestAnimationFrame(()=>$.classList.add("gl-ready"))}const pt={},vt={f:`#define HEART
#define FW
`,h:`#define HEART
`,b:"",hl:`#define HEART
#define NOMARCH
`,fl:`#define HEART
#define FW
#define NOMARCH
`},U={};let gt=null;function Mt(a){const i=Q(c.VERTEX_SHADER,A),h=Q(c.FRAGMENT_SHADER,(I?`#define MONCHK
`:"")+vt[a]+st),F=c.createProgram();return c.attachShader(F,i),c.attachShader(F,h),c.bindAttribLocation(F,0,"p"),c.linkProgram(F),U[a]={P:F,f:h,U:null,ok:!1}}function e(a){c.useProgram(a.P),a.U={},["R","t","q",...Object.keys(R)].forEach(i=>a.U[i]=c.getUniformLocation(a.P,i)),c.uniform1i(c.getUniformLocation(a.P,"TM"),0),c.uniform1i(c.getUniformLocation(a.P,"TC"),1),a.ok=!0,gt=a}const t=["hl","h","b","fl"];let o=0;function n(a,i){if(!at&&(o=1,a.forEach(h=>U[h]||Mt(h)),!q&&i)){const h=()=>{if(R.beat>.5)return setTimeout(h,500);l(!0)};setTimeout(h,i)}}function l(a){if(!(!o||at))for(const i of t){const h=U[i];if(!(!h||h.ok||h.bad)){if(q&&!a){if(c.getProgramParameter(h.P,q.COMPLETION_STATUS_KHR)!==!0)continue}else if(!a)continue;c.getProgramParameter(h.P,c.LINK_STATUS)?e(h):h.bad=!0}}}const g=/fullprog/.test(location.hash),u=a=>U[a]&&U[a].ok?U[a]:null;function s(a){a!==gt&&(c.useProgram(a.P),gt=a);const i=a.U;c.uniform2f(i.R,X,G),c.uniform1f(i.t,tt),c.uniform1f(i.q,At);for(const h in R)c.uniform1f(i[h],R[h])}function v(){const a=Math.sqrt(1.5)*R.hs,i=a<3.2?2.1*Math.tan(Math.asin(a/3.2)):99,h=R.burst>.01?i:Math.min(i,.755/1.52*R.hs*1.03),F=1+R.zm*.06,z=Math.min(X,G),j=R.pary*.012-R.sy*.09-R.lift,rt=.5*X+R.hx*F*z,lt=.5*G+(R.hy-j)*F*z,wt=(h+.065)*F*z+2,Et=Math.max(0,Math.floor(rt-wt)),yt=Math.max(0,Math.floor(lt-wt)),Pt=Math.min(X,Math.ceil(rt+wt)),Tt=Math.min(G,Math.ceil(lt+wt));return Pt>Et&&Tt>yt?[Et,yt,Pt-Et,Tt-yt]:null}let p="f";function d(a){const i=a||g||R.fw>.01?"f":R.heart>.01?"h":"b";if(!q&&o&&!a){const j=i==="b"?U.b:U[i+"l"];j&&!j.ok&&!j.bad&&l(!0)}if(i==="b"){const j=u("b")||u("hl");if(j)return s(j),p=j===U.b?"b":"hl",c.drawArrays(c.TRIANGLES,0,3)}const h=i!=="b"&&!a&&!g?u(i+"l"):null,F=u(i)||U.f;if(!h)return s(F),p=F===U.f?"f":i,c.drawArrays(c.TRIANGLES,0,3);s(h),c.drawArrays(c.TRIANGLES,0,3);const z=v();p=i+"l+"+(F===U.f?"f":i),z&&(c.enable(c.SCISSOR_TEST),c.scissor(z[0],z[1],z[2],z[3]),s(F),c.drawArrays(c.TRIANGLES,0,3),c.disable(c.SCISSOR_TEST))}H.prog=()=>p,H.pstat=()=>({extra:o,par:!!q,p:Object.keys(U).map(a=>a+":"+(U[a].ok?"ok":U[a].bad?"bad":"wait")).join(" "),box:v()}),H.snap=a=>{d(a);const i=new Uint8Array(X*G*4);return c.readPixels(0,0,X,G,c.RGBA,c.UNSIGNED_BYTE,i),i};function M(){if(at)return;if(!c.getProgramParameter(mt,c.LINK_STATUS))return Ct();const a=c.createBuffer();c.bindBuffer(c.ARRAY_BUFFER,a),c.bufferData(c.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),c.STATIC_DRAW),c.enableVertexAttribArray(0),c.vertexAttribPointer(0,2,c.FLOAT,!1,0,0),e(U.f),Object.assign(pt,U.f.U),E(),H.scene&&k(),ft(),Ot=!0,bt||(bt=!0,L=performance.now(),requestAnimationFrame(it)),q?setTimeout(()=>{n(["hl","h"],0),setTimeout(()=>n(["b","fl"],0),600)},300):(["hl","h"].forEach(i=>U[i]||Mt(i)),o=1,l(!0),setTimeout(()=>n(["b","fl"],0),1200))}function E(){if(H.baking||!window.SCENE)return;H.baking=!0;const a=Math.min(innerWidth,innerHeight),i=Math.min(window.devicePixelRatio||1,2),h=F=>{H.scene=F,P(F),Ot&&!at&&c&&k()};SCENE.bake(h,{mw:12*.034*a*i,cw:.6*1.35*a*i,coarse:h})}let b=[];function k(){const a=H.scene;b.forEach(i=>c.deleteTexture(i)),b=[],[[a.mon,a.M],[a.cape,a.Cp]].forEach(([i,h],F)=>{const z=c.createTexture();b.push(z),c.activeTexture(c.TEXTURE0+F),c.bindTexture(c.TEXTURE_2D,z),c.texImage2D(c.TEXTURE_2D,0,c.RGBA,h.w,h.h,0,c.RGBA,c.UNSIGNED_BYTE,i),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MIN_FILTER,c.LINEAR),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MAG_FILTER,c.LINEAR),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_S,c.CLAMP_TO_EDGE),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_T,c.CLAMP_TO_EDGE)}),H.jump({ly:a.lampY}),H.set({scr:1})}const f=document.createElement("canvas");f.id="monx",f.setAttribute("aria-hidden","true"),V.parentNode.insertBefore(f,V);let T=!1,r=!1,x=0;function P(a){!a.ov||I||(f.width=a.M.w,f.height=a.M.h,f.getContext("2d").putImageData(new ImageData(a.ov,a.M.w,a.M.h),0,0),r=!0)}function w(){const a=(1-Math.min(1,Math.max(0,(R.cam-1.3)/.7))**2*(3-2*Math.min(1,Math.max(0,(R.cam-1.3)/.7))))*R.scr,i=r&&!at&&a>.004;if(i!==T&&(T=i,f.style.display=i?"block":"none"),!i)return;const h=W(),F=h.w0.toFixed(2);F!==x&&(x=F,f.style.width=h.w0.toFixed(2)+"px",f.style.height=h.h0.toFixed(2)+"px"),f.style.transform=`translate3d(${h.x.toFixed(2)}px,${h.y.toFixed(2)}px,0) scale(${h.k.toFixed(5)})`}function S(){for(const i in U)delete U[i];o=0,gt=null;const a=Mt("f");if(mt=a.P,nt=a.f,q||(o=1,Mt("hl"),Mt("h")),q){const i=()=>{if(at)return;const h=c.getProgramParameter(mt,q.COMPLETION_STATUS_KHR);typeof h!="boolean"?(q=null,M()):h?M():requestAnimationFrame(i)};requestAnimationFrame(i)}else requestAnimationFrame(()=>setTimeout(M,0))}S(),V.addEventListener("webglcontextlost",a=>{a.preventDefault(),at=!0,T=!1,f.style.display="none",b=[],bt=!1,H.ok=!1,$.classList.remove("gl"),$.classList.add("no-gl")},!1),V.addEventListener("webglcontextrestored",()=>{at=!1,H.ok=!0,$.classList.remove("no-gl"),$.classList.add("gl"),ft(),S()},!1);function C(a,i){a=Math.max(0,Math.min(4,a)),a!==K&&(K=a,B.lv=a,document.documentElement.classList.toggle("lq",a<2),xt=dt[a].s,At=dt[a].q,ot=!0,i&&ft())}H.pulse=()=>{ot&&ft(),q||l(!0)};let O=60;const _=[];H.quality=()=>({level:K,ex:+et.toFixed(2),fps:Math.round(O),scale:+xt.toFixed(2),q:At,w:X,h:G,pending:ot}),Object.defineProperty(H,"level",{get:()=>K}),addEventListener("resize",Lt),addEventListener("pointermove",a=>{B.par=(a.clientX/innerWidth-.5)*2},{passive:!0}),addEventListener("pointermove",a=>{B.pary=(a.clientY/innerHeight-.5)*2},{passive:!0}),addEventListener("deviceorientation",a=>{a.gamma!=null&&(B.par=Math.max(-1,Math.min(1,a.gamma/30))),a.beta!=null&&(B.pary=Math.max(-1,Math.min(1,(a.beta-45)/35)))},{passive:!0});let D=0,L=0,tt=0;const ut={streak:9,burst:2.2,zm:3.2,lk:6,fw:1.6,lv:1.2};function it(a){if(at){bt=!1;return}D||(D=L=a);const i=Math.min(.05,(a-L)/1e3);L=a,tt+=i*(Y?.25:1);for(const h in B)R[h]+=(B[h]-R[h])*Math.min(1,i*(ut[h]||2.6));q&&l(!1),H.t=tt,w(),d(!1),H.ready||(H.ready=!0,requestAnimationFrame(()=>document.documentElement.classList.add("gl-ready"))),jt(a),document.hidden?bt=!1:requestAnimationFrame(it)}let St=0,_t=0,Ht=0,It=0,Nt=-1e9,Wt=1e4,Vt=0,Bt=0;function jt(a){const i=a-Bt;if(Bt=a,kt||(_t||(_t=a+700),a<_t)||a<Vt||i<=0||i>4e3)return;if(_.push(i),_.length>90&&_.shift(),!St){St=a+1e3,_.length=0;return}if(a<St||_.length<4)return;const h=a-D<3200;St=a+(h?600:2e3);const F=_.slice().sort((rt,lt)=>rt-lt),z=F[F.length>>1];O=1e3/(_.reduce((rt,lt)=>rt+lt,0)/_.length);const j=Math.min(O,1e3/z);j<(h?50:46)&&K===0&&et>Ft()+.01?(et=Math.max(Ft(),et*(j<25?.64:.8)),ft(),It=a,Ht=0,_.length=0):j<(h?50:46)?(C(h?K-(j<25?2:1):j<15?0:K-(j<30?2:1),j<35),a-Nt<15e3&&(Wt=Math.min(Wt*2,8e4)),It=a,Ht=0,_.length=0):1e3/z>=56&&O>=50&&a-It>Wt?++Ht>=3&&(et<1?(et=Math.min(1,et/.8),ot=!0):C(K+1,!1),Nt=a,Ht=0,_.length=0):Ht=0}let bt=!1,Ot=!1;document.addEventListener("visibilitychange",()=>{Ot&&!document.hidden&&!bt&&(bt=!0,L=performance.now(),Vt=L+600,_.length=0,requestAnimationFrame(it))}),H.monRect=W,H.MP=y,H.lightRect=function(a){a=a||R;const i=innerWidth,h=innerHeight,F=Math.min(i,h),z=1+a.zm*.06,j=a.pary*.012-a.sy*.09-a.lift,rt=-.2,lt=rt-.03,wt=rt-.045,Et=1.35,yt=-.12-a.cam*.15+a.cpx-.125*Et,Pt=wt+((a.ly||lt+.12)-lt)*Et,Tt=qt=>i/2+qt*z*F,Ut=qt=>h/2-(qt-j)*z*F;return{x0:Tt(yt-.022),x1:Tt(yt+.07),y0:Ut(Pt+.035),y1:Ut(wt-.005),lamp:[Tt(yt),Ut(Pt)]}},H.uv=(a,i)=>{const h=Math.min(innerWidth,innerHeight);return[(a-innerWidth/2)/h,(innerHeight/2-i)/h]}}}();
