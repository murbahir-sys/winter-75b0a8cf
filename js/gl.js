(function(){const V=e=>e-Math.floor(e),y=(e,t,a)=>e<t?t:e>a?a:e,h=(e,t,a)=>{const o=y((a-e)/(t-e),0,1);return o*o*(3-2*o)},_=(e,t,a)=>e+(t-e)*a,q=e=>V(Math.sin(e*127.1)*43758.5453),I=(e,t)=>{e=V(e*123.34),t=V(t*456.21);const a=e*(e+45.32)+t*(t+45.32);return e+=a,t+=a,V(e*t)},D=e=>{const t=Math.floor(e);let a=e-t;return a=a*a*(3-2*a),_(q(t),q(t+1),a)},Z=(e,t)=>{const a=Math.floor(e),o=Math.floor(t);let f=e-a,x=t-o;return f=f*f*(3-2*f),x=x*x*(3-2*x),_(_(I(a,o),I(a+1,o),f),_(I(a,o+1),I(a+1,o+1),f),x)},H=(e,t,a,o,f,x)=>{const p=Math.abs(e-a)-f,c=Math.abs(t-o)-x;return Math.hypot(Math.max(p,0),Math.max(c,0))+Math.min(Math.max(p,c),0)},pt=(e,t)=>t<0?_(4.85,1.45,h(.4,8.4,e)):_(4.6,1.1,h(0,7.6,e)),lt=e=>(e<0?7.1:6.4)-.5*D(e*1.7+3);function ft(e,t){const a=e<0?-1:1,o=.45*D(t*1.3+a*7)+.25*D(t*3.7+a*3)-.3;return Math.max(Math.abs(e)-pt(t,a)-o,Math.max(-t-.6,t-lt(e)))}const z=[];(function(){let e=-1,t=0;for(;e<8.4;){const a=_(1.5,.62,h(-.5,7.5,e))*(.85+.3*q(t*3.1+.7)),o=e+a*.5,f=[];let x=-pt(o,-1)-.7-q(t*7.7)*.6*a,p=0;for(;x<pt(o,1)+.7;){const c=q(t*17.3+p*7.9+.31),m=a*(.95+1*q(t*13.1+p*2.3)),l=x+m*.5,u=o+(q(t*5.3+p*1.7)-.5)*a*.4;if(ft(l,u)<-.05*a){const M=m*.62,E=a*.66*(.85+.3*q(p*4.1+t)),b=5+Math.floor(q(c*13.7)*4),k=q(c*5.1)*6.283,v=[(q(c*31)-.5)*.35*M,(.15+(q(c*57)-.5)*.3)*E],T=.42+.25*q(c*91),i=[],d=[];for(let w=0;w<b;w++){const C=k+6.2832*(w+.55*(q(c*7.3+w*1.91)-.5))/b,R=.86+.26*q(c*3.9+w*2.37),S=Math.cos(C)*M*R,n=Math.sin(C)*E*R;i.push([S,n])}i.forEach(w=>d.push(Math.atan2(w[1]-v[1],w[0]-v[0])));const A=[];for(let w=0;w<b;w++){const C=i[w],R=i[(w+1)%b],S=R[0]-C[0],n=R[1]-C[1],g=Math.hypot(S,n)||1,r=n/g,B=-S/g,G=Math.abs((v[0]-C[0])*r+(v[1]-C[1])*B),Q=(.55+1.7*q(c*11.1+w*3.7))*.45*Math.min(M,E)/Math.max(.05,(1-T)*G);A.push({ox:r,oy:B,el:g,sl:Q,j:(q(c*19+w)-.5)*.25})}f.push({cx:l,cy:u,rx:M,ry:E,V:i,A:d,F:A,P:v,kin:T,n:b,s:c,z:-u+(q(t*4.4+p)-.5)*.7*a,fx:(q(c*41)-.5)*.5,fy:.25+(q(c*67)-.5)*.5,rust:c>.91})}x+=m*(.62+.14*q(t+p*9.9)),p++}z.push({lo:e-a*.5,hi:e+a*1.5,st:f}),e+=a*.64,t++}})();function ht(e,t,a){const o=t-e.cx-e.P[0],f=a-e.cy-e.P[1];let x=Math.atan2(f,o),p=0;for(let v=0;v<e.n;v++){const T=e.A[v],i=e.A[(v+1)%e.n];let d=x-T,A=i-T;if(d-=Math.floor(d/6.2832)*6.2832,A-=Math.floor(A/6.2832)*6.2832,d<=A){p=v;break}}const c=e.V[p],m=e.V[(p+1)%e.n],l=e.F[p],u=t-e.cx,M=a-e.cy,E=-((u-c[0])*l.ox+(M-c[1])*l.oy),b=[e.P[0]+(c[0]-e.P[0])*e.kin,e.P[1]+(c[1]-e.P[1])*e.kin],k=-((u-b[0])*l.ox+(M-b[1])*l.oy);return[E,k>0?-1:p,k]}function st(e,t,a){let o=9,f=null,x=-1e9,p=null;for(const c of z)if(!(t<c.lo||t>c.hi))for(const m of c.st){if(Math.abs(e-m.cx)>m.rx*1.3||Math.abs(t-m.cy)>m.ry*1.3)continue;const l=ht(m,e,t);-l[0]<o&&(o=-l[0]),a&&l[0]>0&&m.z>x&&(x=m.z,f=m,p=l)}return a?[o,f,p]:o}function it(e,t){return t<-.6?Math.max(st(e,t),-t-.6):Math.min(st(e,t),ft(e,t)+.35)}function at(e,t){const[,a,o]=st(e,t,!0),f=(.4+.6*h(-.4,3,t))*(1-.45*h(5,8.5,t))*(1-.3*h(2.5,5,Math.abs(e))),x=.82+.18*Z(e*23,t*23)+(I(Math.floor(e*50),Math.floor(t*50))>.92?.2:0)-(I(Math.floor(e*50)+7,Math.floor(t*50)+3)>.9?.16:0);if(!a){const r=.5+.5*Z(e*3,t*3);return[.03*r+.035*f,.025*r+.022*f,.026*r+.01*f]}const[p,c,m]=o;let l,u=0;if(c<0)l=P(a.fx,a.fy,1),u=h(.035,0,m);else{const r=a.F[c];l=P(r.ox*r.sl+r.j,r.oy*r.sl+r.j*.5,1),u=h(.035,0,-m)*.6}l=P(l[0]+(Z(e*9+a.s*9,t*9)-.5)*.12,l[1]+(Z(e*9+4,t*9+a.s*7)-.5)*.12,l[2]);const M=.5+.5*l[1],E=Math.max(0,F(l,X))*f,b=Math.max(0,F(l,L)),k=_(.72,1,h(0,.18,p))*(c>=0&&a.F[c].oy<-.5?.82:1),v=Math.abs(e),T=t>4&&t<8.4?_(.6,1,h(0,.6,v-$(Math.min(t,8.3)))):1;let i=a.rust?[.56,.44,.36]:[.47,.45,.44];const d=.62+.5*q(a.s*77);i=i.map(r=>r*d);const A=h(1.1,.15,t);i=i.map(r=>r*(1-.55*A));const w=.7*h(.6,0,t)*h(.35,.7,Z(e*3.5,t*8));i=[_(i[0],.1,w),_(i[1],.14,w),_(i[2],.08,w)];const C=k*x*T*(1+.22*u);let R=i[0]*(.02+.08*M+.6*E+.14*b)*C,S=i[1]*(.02+.08*M+.39*E+.17*b)*C,n=i[2]*(.025+.11*M+.19*E+.27*b)*C;const g=A*Math.pow(Math.max(0,F(l,P(X[0],X[1],X[2]+1))),24)*f;return R+=.5*g,S+=.35*g,n+=.2*g,[R,S,n]}const $=e=>e<5.7?1.85-.12*h(5.45,5.7,e):e<7.85?1.15:e<8.05?1.22:e<8.3?1.36:1.25;function ot(e){const t=y((e-14.2)/1.25,0,1);let a=_(.44,.66,t*t);return a+=.05*Math.max(0,Math.sin((e-14.2)*9)),a}function W(e,t){const a=Math.abs(e);let o=it(e,t);return t>4.2&&t<8.4&&(o=Math.min(o,Math.max(a-$(t),Math.max(4.4-t,t-8.4)))),o=Math.min(o,Math.max(a-_(.62,.5,h(8.4,8.8,t))-.04*Math.sin((t-8.4)*15.7),Math.max(8.35-t,t-8.82))),o=Math.min(o,H(e,t,0,11.5,_(.47,.42,y((t-8.8)/5.5,0,1)),2.72)),o=Math.min(o,Math.max(a-ot(t),Math.max(14.2-t,t-15.45))),o=Math.min(o,Math.hypot(a-.62,t-15.32)-.11),o=Math.min(o,Math.max(a-.76,Math.abs(t-15.53)-.08)),t>15.55&&(o=Math.min(o,s(e/K,ct+(t-ct)/K)*K)),o}const K=1.3,ct=15.61;function s(e,t){const a=Math.abs(e);let o=9;const f=.35;o=Math.min(o,Math.hypot(e,(t-16.05-f)/2.1)-.2),o=Math.min(o,Math.max(a-.16+(t-15.7-f)*.2,Math.abs(t-15.82-f)-.1)),o=Math.min(o,Math.hypot(a-.17,t-16.64-f)-.1),o=Math.min(o,Math.max(Math.abs(t-16.6-f+(a-.24)*.3)-.035,Math.abs(a-.29)-.06)),o=Math.min(o,H(a,t,0,16.6+f,.06,.1)),o=Math.min(o,Math.max(a-.12+(t-16.78-f)*.3,Math.abs(t-16.88-f)-.11)),o=Math.min(o,Math.hypot(e,t-17-f)-.04);const x=16.12+f+a*.22+h(.4,.5,V(a*5+.2))*.08*h(.75,1.05,a),p=16.48+f+a*.3-.16*h(.95,1.32,a);return o=Math.min(o,Math.max(Math.max(a-1.32,t-p),x-t)),o=Math.min(o,mt(e,t)),o}function mt(e,t){const a=Math.hypot(e,t-15.98);let o=Math.abs(a-.3)-.06-.025*Math.sin(Math.atan2(t-15.98,e)*14);return o=Math.min(o,H(e,t,0,16.17,.012,.1)),o=Math.min(o,H(e,t,0,15.93,.025,.17),H(e,t,0,16.05,.1,.018)),o=Math.min(o,Math.max(Math.abs(Math.hypot(e,t-15.86)-.14)-.022,t-15.82)),o}const X=(()=>{const e=[.38,-.5,.78],t=Math.hypot(...e);return e.map(a=>a/t)})(),L=(()=>{const e=[-.72,.5,.48],t=Math.hypot(...e);return e.map(a=>a/t)})(),P=(e,t,a)=>{const o=Math.hypot(e,t,a)||1;return[e/o,t/o,a/o]},F=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2];function O(e,t,a,o){const f=Math.max(0,F(e,X)),x=Math.max(0,F(e,L)),p=Math.pow(Math.max(0,F(e,P(X[0],X[1],X[2]+1))),14),c=Math.pow(Math.max(0,F(e,P(L[0],L[1],L[2]+1))),10),m=o*(1-.45*h(8.5,17,a));return[.035+.16*f*m+.04*x+.9*p*m+.22*c,.026+.1*f*m+.05*x+.6*p*m+.27*c,.018+.04*f*m+.07*x+.3*p*m+.36*c]}function nt(e,t){const o=W(e,t),f=(W(e+.03,t)-W(e-.03,t))/(2*.03),x=(W(e,t+.03)-W(e,t-.03))/(2*.03),p=h(t<8.4?-.04:-.1,0,o);let c=P(f*p*1.6,x*p*1.6,1);const m=Math.abs(e);let l,u,M;const E=t>ct,b=E?e/K:e,k=E?ct+(t-ct)/K:t,v=E&&mt(b,k)<.005;if(!v&&t<8.6&&!(t>4.2&&t<8.4&&m<$(t))&&it(e,t)<=.02)[l,u,M]=at(e,t);else if(!v&&t<8.4){const T=$(t),i=e/T;let d;t<5.7||t>7.85?d=P(i*.9,0,1):d=i<-.414?P(-.707,0,.707):i>.414?P(.707,0,.707):[0,0,1],t>8.05&&t<8.3&&(d=P(d[0],-.55,d[2])),t>7.85&&t<8.05&&(d=P(d[0],.5,d[2])),c=P(d[0]+c[0]*.3,d[1]+c[1]*.3,d[2]);const A=Math.max(0,F(c,X))*(1.15-.45*h(4.4,8.4,t)),w=Math.max(0,F(c,L)),C=t>7.6&&t<7.85?_(.45,1,h(7.62,7.84,t)):1,R=(t-4.4)/.62,S=Math.floor(R),n=Math.abs(V(R)-.5)*.62,g=Math.abs(V(e/.78+S%2*.5)-.5)*.78,r=(t>5.7&&t<7.85?.62+.38*h(.012,.03,Math.min(.31-n,Math.abs(i)<.414?g:1)):1)*(1+.25*h(.03,0,Math.abs(t-5.7))-.35*h(.03,0,Math.abs(t-5.66))+.3*h(.025,0,Math.abs(t-8.29))+.2*h(.02,0,Math.abs(t-7.87))-.4*h(.02,0,Math.abs(t-8.04))+.25*h(.02,0,Math.abs(t-4.62))-.3*h(.02,0,Math.abs(t-4.58))),B=Math.abs(Math.abs(i)-.414)<.02&&t>5.7&&t<7.85?1.12:1,G=t>6.6&&t<7.45&&m<.42?m>.38||t<6.64||t>7.41?1.12:.9:1,Q=C*r*B*G*(.84+.16*Z(e*24,t*24)+(I(Math.floor(e*55),Math.floor(t*55))>.93?.12:0))*(.92+.1*Z(e*3+S,t*3))*(t<5.7?.78-.15*h(5.4,5.7,t):1)*(i<-.414&&t>5.7&&t<7.85?.8:1);l=(.04+.5*A+.09*w)*Q,u=(.037+.39*A+.11*w)*Q,M=(.04+.27*A+.16*w)*Q}else if(!v&&t<14.2&&t>=8.82){const T=_(.47,.42,y((t-8.8)/5.5,0,1)),i=y(e/T,-.999,.999),d=.04*Math.sin(Math.asin(i)*10);c=P(i+d,0,Math.sqrt(1-i*i));const A=1.05-.5*h(8.8,14.2,t),w=Math.max(0,F(c,X)+.15)*A,C=Math.max(0,F(c,L)),R=Math.pow(Math.max(0,F(c,P(L[0],L[1],L[2]+1))),20);l=.03+.6*w+.12*C+.2*R,u=.028+.46*w+.15*C+.25*R,M=.03+.3*w+.21*C+.33*R}else{if(t>=14.2&&t<15.45&&!v){const i=t<14.8?0:1,d=e*(i?7:6)+i*.5,A=(t-(i?14.8:14.2))/.6,w=A-(.55+.3*Math.abs(Math.sin(d*Math.PI)));c=P(c[0]+.12*Math.sin(d*Math.PI*2)*A,c[1]-1.1*h(-.04,.06,w)*h(.22,.08,w)+.15,c[2])}if(k>16.3&&Math.abs(b)>.3&&!v){const i=k-(16.47+Math.abs(b)*.22);c=P(c[0]+.12*Math.sin((m*3-i*4)*6),c[1]+.3-.6*h(.05,.3,i),c[2])}t>=8.3&&t<8.82&&(c=P(c[0]*.5+e*.9,Math.cos((t-8.35)*6.7)*.8,1)),[l,u,M]=O(c,b,k,v?1.25:t>=14.2&&t<15.45?.75:1);const T=E?1.95:1.5;if(E){const i=h(-.09,0,o)*Math.max(0,-f*.7+x*.7);l+=.16*i,u+=.2*i,M+=.28*i}return[l*T,u*T,M*T]}return[l*1.45,u*1.45,M*1.45]}const tt=-.2,U=tt-.03,j=e=>e<-.03?-9:U-.004+.13*h(-.02,.09,e)+.007*D(e*48)+.0035*D(e*160)+.012*h(.1,.45,e),Y=.125,xt=j(Y),rt=(()=>{const e=[-.75,.55,.45],t=Math.hypot(...e);return e.map(a=>a/t)})();function ut(e,t,a){const o=j(e);let f=0,x=0,p=0,c=0;if(t>U-.006&&(f=y((o-t)/a+.5,0,1)*y((t-(U-.006))/a,0,1),f>0)){const M=(n,g)=>{const r=n*70,B=g*105,G=1-Math.abs(Z(r*.55,B*.4)-.5)*2;return .5*G*G+.28*Z(r*1.6,B*1.3)+.1*Z(r*4.5,B*4.5)+.22*h(.35,.65,V(B*.11+D(r*.35)*.7))},b=M(e,t),k=-(M(e-.0015,t)-M(e+.0015,t))/(2*.0015)*.01,v=-(M(e,t+.0015)-M(e,t-.0015))/(2*.0015)*.01,T=P(k,v,1),i=Math.max(0,F(T,rt)),d=.55+.45*T[1],A=.45+.55*h(.15,.65,b),w=.85+.15*Z(e*900,t*900)+(I(Math.floor(e*1500),Math.floor(t*1500))>.93?.18:0),C=_(1,.55,h(o-.004,o-.09,t))*A*w;x=(.07*d+.3*i)*C,p=(.066*d+.31*i)*C,c=(.088*d+.4*i)*C;const R=h(.012,0,o-t)*.55+h(.004,0,o-t)*.4;x+=.55*R,p+=.6*R,c+=.82*R;const S=h(.012,0,t-U)*(.5+.5*D(e*300));x=x*(1-.3*S)+.08*S*i,p=p*(1-.3*S)+.1*S*i,c=c*(1-.3*S)+.14*S*i}const m=(t-xt)/1.4,l=(Y-e)/1.4;let u=null;if(m>-.012&&m<.1&&l>-.045&&l<.06){const M=_(.0085,.0058,y(m/.07,0,1));if(m<.07&&Math.abs(l)<M){const v=.75+.7*h(M,-M,l);u=V(m*42)>=.5?[.3*v,.07*v,.07*v]:[.38*v,.37*v,.42*v]}m>.068&&m<.072&&Math.abs(l)<.0095&&(u=[.12,.1,.11]),m>.072&&m<.084&&Math.abs(l)<.0052&&(u=[1.5,1.2,.8]),m>.084&&m<.092&&Math.abs(l)<.0065-(m-.084)*.8&&(u=[.16,.1,.09]);const E=.009,b=.046,k=.022;if(l>E&&l<b&&m<k&&m>-.012){const v=h(b,E,l);u=[.13+.12*v,.12+.12*v,.15+.16*v];const T=Math.abs(l-.028),i=Math.abs(m-.009);if(T<.0055&&i<.0045)u=T<8e-4||i<6e-4?[.3,.18,.08]:[1.35,.9,.42];else{const d=Math.exp(-Math.hypot(T,i)*160)*.5;u=[u[0]+d,u[1]+d*.62,u[2]+d*.25]}}if(l>E-.003&&l<b+.003&&m>=k&&m<k+.013-Math.abs(l-(E+b)/2)*.6){const v=h(k+.004,k+.012-Math.abs(l-(E+b)/2)*.6,m);u=[.1+.25*v,.07+.25*v,.08+.32*v]}u&&([x,p,c]=u,f=1)}return[x,p,c,f]}const et={x0:-6,x1:6,y0:-.8,y1:18.2},J=e=>Math.round(y(Math.pow(y(e,0,1.6)/1.6,1/2.2),0,1)*255),vt=(e,t)=>{const a=.3*e[0]+.59*e[1]+.11*e[2],o=h(.02,.5,a),f=[_(.93,1.05,o),_(.95,1,o),_(1.07,.93,o)][t];return Math.round(y(Math.pow(1-Math.exp(-1.7*e[t]*f*.97),.96),0,1)*255)};function N(e,t,a,o){const f=a.mon=new Uint8Array(e.w*e.h*4),x=a.ov=new Uint8ClampedArray(e.w*e.h*4),p=a.cape=new Uint8Array(t.w*t.h*4),c=(e.x1-e.x0)/e.w,m=(t.u1-t.u0)/t.w,l=[];for(let u=0;u<e.h;u+=o)l.push(()=>{for(let M=u;M<Math.min(e.h,u+o);M++){const E=e.y0+(M+.5)/e.h*(e.y1-e.y0);for(let b=0;b<e.w;b++){const k=e.x0+(b+.5)/e.w*(e.x1-e.x0);let v=W(k,E);if(v>2.5*c)continue;let T=k,i=E;if(v>-.3*c){const R=c*.5,S=W(k+R,E)-W(k-R,E),n=W(k,E+R)-W(k,E-R),g=Math.hypot(S,n)||1,r=Math.max(v,0)+.6*c;T=k-S/g*r,i=E-n/g*r}const d=nt(T,i),A=(M*e.w+b)*4,w=((e.h-1-M)*e.w+b)*4,C=y(.5-v/c,0,1);C>0&&(f[A]=J(d[0]),f[A+1]=J(d[1]),f[A+2]=J(d[2]),f[A+3]=Math.round(C*255)),x[w]=vt(d,0),x[w+1]=vt(d,1),x[w+2]=vt(d,2),x[w+3]=Math.round(y(.5-(v-1.6*c)/c,0,1)*255)}}});for(let u=0;u<t.h;u+=o)l.push(()=>{for(let M=u;M<Math.min(t.h,u+o);M++){const E=t.y0+(M+.5)/t.h*(t.y1-t.y0);for(let b=0;b<t.w;b++){const k=t.u0+(b+.5)/t.w*(t.u1-t.u0),v=ut(k,E,m),T=(M*t.w+b)*4;v[3]<=0||(p[T]=J(v[0]),p[T+1]=J(v[1]),p[T+2]=J(v[2]),p[T+3]=Math.round(v[3]*255))}}});return Object.assign(a,{M:e,Cp:t,lampY:xt+.083*1.4,lampU:Y}),l}function dt(e,t){t=t||{};const a=Math.round(y(t.mw||320,160,520)/2)*2,o=Math.round(y(t.cw||512,256,768)),f=Object.assign({w:a,h:Math.round(a*(et.y1-et.y0)/(et.x1-et.x0))},et),x={w:o,h:Math.round(o*.45),u0:-.04,u1:.56,y0:U-.01,y1:U+.26},p=Object.assign({},f,{w:Math.round(a/4),h:Math.round(f.h/4)}),c=Object.assign({},x,{w:Math.round(o/4),h:Math.round(x.h/4)}),m={},l={},u=N(p,c,m,8),M=N(f,x,l,6),E=window.requestIdleCallback?k=>requestIdleCallback(k,{timeout:120}):k=>setTimeout(()=>k(null),16),b=(k,v,T)=>{const i=d=>{const A=performance.now(),w=d&&!d.didTimeout?y(d.timeRemaining(),6,12):10;for(;k.length&&performance.now()-A<w;)k.shift()();k.length?T?setTimeout(i,0):E(i):v()};T?setTimeout(i,0):E(i)};b(u,()=>{m.coarse=!0,(t.coarse||e)(m),b(M,()=>e(l))},!0)}window.SCENE={bake:dt,MON:et}})(),function(){const V=document.getElementById("gl"),y=Object.assign({bx:.415,by:-.27,ms:.034,ck:.32},window.SCENE?SCENE.MON:{x0:-6,x1:6,y0:-.8,y1:18.2}),h=L=>(Math.round(L*1e6)/1e6).toFixed(6),_=/monchk/.test(location.hash);function q(L){L=L||I;const P=innerWidth,F=innerHeight,O=Math.min(P,F),nt=1+L.zm*.06,tt=y.ms*L.msk,U=y.bx-L.cam*y.ck+L.mox+y.x0*tt,j=y.by+y.y1*tt-(L.pary*.012-L.sy*.09-L.lift);return{x:P/2+U*nt*O,y:F/2-j*nt*O,k:nt,m:O,w0:(y.x1-y.x0)*tt*O,h0:(y.y1-y.y0)*tt*O}}const I={scr:0,ly:0,lift:0,heart:1,cool:0,fill:0,burst:0,cam:0,par:0,tint:0,streak:0,beat:0,hy:0,hs:1,mx:0,my:0,mo:0,zm:0,lk:0,lp:0,pary:0,rx:0,ry:0,rp:1,fw:0,sy:0,lv:3,mox:0,msk:1,hx:0},D=Object.assign({},I),Z=matchMedia("(prefers-reduced-motion: reduce)").matches,H={ok:!1,rm:Z,set(L){Object.assign(D,L)},jump(L){Object.assign(D,L),Object.assign(I,L)},state:I,target:D};window.GL=H;const pt=(navigator.hardwareConcurrency||4)<=4||(navigator.deviceMemory||4)<=3,lt=[{s:.42,q:.5},{s:.55,q:.65},{s:.7,q:.8},{s:.85,q:1},{s:1,q:1}],ft=/lv=([0-4])/.exec(location.hash);let z=ft?+ft[1]:pt?2:3,ht=lt[z].s,st=lt[z].q,it=!1,at=0,$=0,ot=1,W=1;I.lv=D.lv=z,document.documentElement.classList.toggle("lq",z<2);function K(){ot=Math.max(1,Math.round(at*ht)),W=Math.max(1,Math.round($*ht)),s&&s.viewport(0,0,ot,W),V.style.transform=ot<at||W<$?`scale(${(at/ot).toFixed(5)},${($/W).toFixed(5)})`:"",it=!1}function ct(){const L=Math.min(window.devicePixelRatio||1,2);let P=innerWidth*L,F=innerHeight*L;const O=Math.min(1,1400/Math.max(P,F));at=Math.round(P*O),$=Math.round(F*O),(V.width!==at||V.height!==$)&&(V.width=at,V.height=$),K()}let s;const mt=!!window.WebGLRenderingContext&&!/nogl/.test(location.hash);H.ok=mt,mt?document.documentElement.classList.add("gl"):document.documentElement.classList.add("no-gl"),mt&&requestAnimationFrame(()=>setTimeout(X,0));function X(){ct();try{s=V.getContext("webgl",{antialias:!1,alpha:!0,premultipliedAlpha:!0,powerPreference:"high-performance",preserveDrawingBuffer:!1})}catch{}if(!s){H.ok=!1,document.documentElement.classList.remove("gl"),document.documentElement.classList.add("no-gl"),requestAnimationFrame(()=>document.documentElement.classList.add("gl-ready"));return}et();const L="attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}",P=`
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
uniform vec2 R; uniform sampler2D TM,TC; uniform float t,q,scr,ly,lift,heart,cool,fill,burst,cam,par,tint,streak,beat,hy,hs,mx,my,mo,zm,lk,lp,pary,rx,ry,rp,fw,sy,lv,mox,msk,hx;
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
float capeX0(){return -.12-cam*.15;}
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
const vec2 MB0=vec2(${h(y.bx)},${h(y.by)}); const float MS=${h(y.ms)}; // v19: памятник — главный герой, ≈25% высоты экрана; v20: на интро правее — снежинка его не касается
vec2 monB(){return vec2(MB0.x-cam*${h(y.ck)}+mox,MB0.y);}
vec4 monT(vec2 p){ vec2 c=(p-vec2(${h(y.x0)},${h(y.y0)}))/vec2(${h(y.x1-y.x0)},${h(y.y1-y.y0)}); if(c.x<0.||c.x>1.||c.y<0.||c.y>1.) return vec4(0.); return dec(texture2D(TM,c)); }
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
    sea+=vec3(1.,.9,.8)*gl1*exp(-abs(uv.x-mp.x)*(8.+dy*25.))*exp(-dy*3.5)*.6;
    if(lv>2.5 && dy<.3){ float gl2=step(.993,h21(floor(vec2(uv.x*300.,dy*700./(dy*6.+.3)))+floor(t*3.))); sea+=vec3(.7,.75,.95)*gl2*exp(-dy*2.)*.18; }
    if(V>.01){
      // отсвет маяка: дорожка под лампой и отражение луча; отражение мыса
      if(abs(uv.x-gL.x)<.09) sea+=vec3(1.,.78,.5)*exp(-abs(uv.x-gL.x+(rip-.5)*.02)*70.)*exp(-max(CW2-uv.y,0.)*5.)*(.12+.5*gFl)*(.4+rip)*V;
      if(dy<.35) sea+=vec3(1.,.8,.55)*beamI(vec2(uv.x,2.*CW2-uv.y))*.55*(.3+rip); // световая полоса луча на воде
      if(uv.y<CW2 && uv.y>CW2-.36) sea=mix(sea,vec3(.015,.012,.025),.7*V*capeT(vec2(uv.x+(rip-.5)*.012,2.*CW2-uv.y)).a);
    }
    if(fw>.01) sea+=fireworks(vec2(uv.x+(rip-.5)*.02,2.*HZ-uv.y),asp)*fw*exp(-dy*3.)*.35;
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
    if(abs(p.x)<${h(y.x1)} && p.y<${h(y.y1)} && p.y>-11.){
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
  if(fw>.01 && uv.y>HZ) col+=fireworks(uv,asp)*fw*smoothstep(HZ,HZ+.08,uv.y);
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
float mapH(vec3 p){
  float sc=hs*(1.+.035*pulse()+.05*beat+burst*.25);
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
  if(heart>.01){
    RA=rot(t*.07); RB=rot(sin(t*.45)*.5+burst*.5); RC=rot(.12*sin(t*.33));
    vec2 hu=uv-vec2(hx,hy);
    vec3 rd=normalize(vec3(hu,-2.1));
    // силуэт на экране с учётом поворота: по нему ореол и отсечение лучей мимо фигуры
    float d2s=shp2((hu/hs)*1.52*RA);
    float halo=exp(-max(d2s,0.)*(10.-5.*fill))*(.05+.55*fill+.25*beat)*(1.-burst);
    col+=mix(vec3(1.,.66,.74),vec3(.62,.78,1.),cool)*halo*heart*.55; // остывая, ореол уходит в холодный голубой
    float tt=0.,hit=0.; vec3 p;
    float b=dot(ro,rd),c=dot(ro,ro)-1.5*hs*hs,h=b*b-c;
    // плоская снежинка при любом повороте остаётся внутри своего силуэта: лучи далеко от него не трассируем
    if(h>0. && (burst>.01 || d2s<.1)){
      tt=max(-b-sqrt(h),0.);
      for(int i=0;i<64;i++){
        if(float(i)>64.*q) break;
        p=ro+rd*tt; float d=mapH(p);
        if(d<.0012){hit=1.;break;}
        tt+=d; if(tt>6.) break;
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
      float gl=(.15+fill*1.)*(1.+.35*pulse())*(.65+.35*smoothstep(.6,0.,rr));
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
  gl_FragColor=vec4(pow(col,vec3(.96)),1.-gMA); // премультиплицированная альфа: в окне виден слой памятника, снег и луч — поверх
}`,F=document.documentElement;let O=/Apple/.test(navigator.vendor||"")?null:s.getExtension("KHR_parallel_shader_compile");function nt(n,g){const r=s.createShader(n);return s.shaderSource(r,g),s.compileShader(r),r}let tt,U,j,Y=!1;H.ok=!0,F.classList.add("gl");function xt(){U&&!s.getShaderParameter(U,s.COMPILE_STATUS)&&console.warn(s.getShaderInfoLog(U)),H.ok=!1,F.classList.remove("gl"),F.classList.add("no-gl"),requestAnimationFrame(()=>F.classList.add("gl-ready"))}const rt={};function ut(){if(Y)return;if(!s.getProgramParameter(j,s.LINK_STATUS))return xt();s.useProgram(j);const n=s.createBuffer();s.bindBuffer(s.ARRAY_BUFFER,n),s.bufferData(s.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),s.STATIC_DRAW);const g=s.getAttribLocation(j,"p");s.enableVertexAttribArray(g),s.vertexAttribPointer(g,2,s.FLOAT,!1,0,0),["R","t","q",...Object.keys(I)].forEach(r=>rt[r]=s.getUniformLocation(j,r)),s.uniform1i(s.getUniformLocation(j,"TM"),0),s.uniform1i(s.getUniformLocation(j,"TC"),1),et(),H.scene&&vt(),K(),S=!0,R||(R=!0,l=performance.now(),requestAnimationFrame(E))}function et(){if(H.baking||!window.SCENE)return;H.baking=!0;const n=Math.min(innerWidth,innerHeight),g=Math.min(window.devicePixelRatio||1,2),r=B=>{H.scene=B,a(B),S&&!Y&&s&&vt()};SCENE.bake(r,{mw:12*.034*n*g,cw:.6*1.35*n*g,coarse:r})}let J=[];function vt(){const n=H.scene;J.forEach(g=>s.deleteTexture(g)),J=[],[[n.mon,n.M],[n.cape,n.Cp]].forEach(([g,r],B)=>{const G=s.createTexture();J.push(G),s.activeTexture(s.TEXTURE0+B),s.bindTexture(s.TEXTURE_2D,G),s.texImage2D(s.TEXTURE_2D,0,s.RGBA,r.w,r.h,0,s.RGBA,s.UNSIGNED_BYTE,g),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MAG_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}),H.jump({ly:n.lampY}),H.set({scr:1})}const N=document.createElement("canvas");N.id="monx",N.setAttribute("aria-hidden","true"),V.parentNode.insertBefore(N,V);let dt=!1,e=!1,t=0;function a(n){!n.ov||_||(N.width=n.M.w,N.height=n.M.h,N.getContext("2d").putImageData(new ImageData(n.ov,n.M.w,n.M.h),0,0),e=!0)}function o(){const n=(1-Math.min(1,Math.max(0,(I.cam-1.3)/.7))**2*(3-2*Math.min(1,Math.max(0,(I.cam-1.3)/.7))))*I.scr,g=e&&!Y&&n>.004;if(g!==dt&&(dt=g,N.style.display=g?"block":"none"),!g)return;const r=q(),B=r.w0.toFixed(2);B!==t&&(t=B,N.style.width=r.w0.toFixed(2)+"px",N.style.height=r.h0.toFixed(2)+"px"),N.style.transform=`translate3d(${r.x.toFixed(2)}px,${r.y.toFixed(2)}px,0) scale(${r.k.toFixed(5)})`}function f(){if(tt=nt(s.VERTEX_SHADER,L),U=nt(s.FRAGMENT_SHADER,(_?`#define MONCHK
`:"")+P),j=s.createProgram(),s.attachShader(j,tt),s.attachShader(j,U),s.linkProgram(j),O){const n=()=>{if(Y)return;const g=s.getProgramParameter(j,O.COMPLETION_STATUS_KHR);typeof g!="boolean"?(O=null,ut()):g?ut():requestAnimationFrame(n)};requestAnimationFrame(n)}else requestAnimationFrame(()=>setTimeout(ut,0))}f(),V.addEventListener("webglcontextlost",n=>{n.preventDefault(),Y=!0,dt=!1,N.style.display="none",J=[],R=!1,H.ok=!1,F.classList.remove("gl"),F.classList.add("no-gl")},!1),V.addEventListener("webglcontextrestored",()=>{Y=!1,H.ok=!0,F.classList.remove("no-gl"),F.classList.add("gl"),K(),f()},!1);function x(n,g){n=Math.max(0,Math.min(4,n)),n!==z&&(z=n,D.lv=n,document.documentElement.classList.toggle("lq",n<2),ht=lt[n].s,st=lt[n].q,it=!0,g&&K())}H.pulse=()=>{it&&K()};let p=60;const c=[];H.quality=()=>({level:z,fps:Math.round(p),scale:+ht.toFixed(2),q:st,w:ot,h:W,pending:it}),Object.defineProperty(H,"level",{get:()=>z}),addEventListener("resize",ct),addEventListener("pointermove",n=>{D.par=(n.clientX/innerWidth-.5)*2},{passive:!0}),addEventListener("pointermove",n=>{D.pary=(n.clientY/innerHeight-.5)*2},{passive:!0}),addEventListener("deviceorientation",n=>{n.gamma!=null&&(D.par=Math.max(-1,Math.min(1,n.gamma/30))),n.beta!=null&&(D.pary=Math.max(-1,Math.min(1,(n.beta-45)/35)))},{passive:!0});let m=0,l=0,u=0;const M={streak:9,burst:2.2,zm:3.2,lk:6,fw:1.6,lv:1.2};function E(n){if(Y){R=!1;return}m||(m=l=n);const g=Math.min(.05,(n-l)/1e3);l=n,u+=g*(Z?.25:1);for(const r in D)I[r]+=(D[r]-I[r])*Math.min(1,g*(M[r]||2.6));s.uniform2f(rt.R,ot,W),s.uniform1f(rt.t,u),H.t=u,s.uniform1f(rt.q,st);for(const r in I)s.uniform1f(rt[r],I[r]);o(),s.drawArrays(s.TRIANGLES,0,3),H.ready||(H.ready=!0,requestAnimationFrame(()=>document.documentElement.classList.add("gl-ready"))),C(n),document.hidden?R=!1:requestAnimationFrame(E)}let b=0,k=0,v=0,T=0,i=-1e9,d=1e4,A=0,w=0;function C(n){const g=n-w;if(w=n,ft||(k||(k=n+700),n<k)||n<A||g<=0||g>4e3)return;if(c.push(g),c.length>90&&c.shift(),!b){b=n+1e3,c.length=0;return}if(n<b||c.length<4)return;const r=n-m<3200;b=n+(r?1e3:2e3);const B=c.slice().sort((gt,Mt)=>gt-Mt),G=B[B.length>>1];p=1e3/(c.reduce((gt,Mt)=>gt+Mt,0)/c.length);const Q=Math.min(p,1e3/G);Q<(r?50:46)?(x(r?z-1:Q<15?0:z-(Q<30?2:1),Q<35),n-i<15e3&&(d=Math.min(d*2,8e4)),T=n,v=0,c.length=0):1e3/G>=56&&p>=50&&n-T>d?++v>=3&&(x(z+1,!1),i=n,v=0,c.length=0):v=0}let R=!1,S=!1;document.addEventListener("visibilitychange",()=>{S&&!document.hidden&&!R&&(R=!0,l=performance.now(),A=l+600,c.length=0,requestAnimationFrame(E))}),H.monRect=q,H.MP=y,H.uv=(n,g)=>{const r=Math.min(innerWidth,innerHeight);return[(n-innerWidth/2)/r,(innerHeight/2-g)/r]}}}();
