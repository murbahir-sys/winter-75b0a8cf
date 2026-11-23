(function(){const I=e=>e-Math.floor(e),k=(e,t,a)=>e<t?t:e>a?a:e,h=(e,t,a)=>{const o=k((a-e)/(t-e),0,1);return o*o*(3-2*o)},_=(e,t,a)=>e+(t-e)*a,W=e=>I(Math.sin(e*127.1)*43758.5453),q=(e,t)=>{e=I(e*123.34),t=I(t*456.21);const a=e*(e+45.32)+t*(t+45.32);return e+=a,t+=a,I(e*t)},B=e=>{const t=Math.floor(e);let a=e-t;return a=a*a*(3-2*a),_(W(t),W(t+1),a)},j=(e,t)=>{const a=Math.floor(e),o=Math.floor(t);let f=e-a,g=t-o;return f=f*f*(3-2*f),g=g*g*(3-2*g),_(_(q(a,o),q(a+1,o),f),_(q(a,o+1),q(a+1,o+1),f),g)},A=(e,t,a,o,f,g)=>{const v=Math.abs(e-a)-f,n=Math.abs(t-o)-g;return Math.hypot(Math.max(v,0),Math.max(n,0))+Math.min(Math.max(v,n),0)},dt=(e,t)=>t<0?_(4.85,1.45,h(.4,8.4,e)):_(4.6,1.1,h(0,7.6,e)),lt=e=>(e<0?7.1:6.4)-.5*B(e*1.7+3);function ft(e,t){const a=e<0?-1:1,o=.45*B(t*1.3+a*7)+.25*B(t*3.7+a*3)-.3;return Math.max(Math.abs(e)-dt(t,a)-o,Math.max(-t-.6,t-lt(e)))}const O=[];(function(){let e=-1,t=0;for(;e<8.4;){const a=_(1.5,.62,h(-.5,7.5,e))*(.85+.3*W(t*3.1+.7)),o=e+a*.5,f=[];let g=-dt(o,-1)-.7-W(t*7.7)*.6*a,v=0;for(;g<dt(o,1)+.7;){const n=W(t*17.3+v*7.9+.31),m=a*(.95+1*W(t*13.1+v*2.3)),l=g+m*.5,u=o+(W(t*5.3+v*1.7)-.5)*a*.4;if(ft(l,u)<-.05*a){const M=m*.62,E=a*.66*(.85+.3*W(v*4.1+t)),b=5+Math.floor(W(n*13.7)*4),y=W(n*5.1)*6.283,p=[(W(n*31)-.5)*.35*M,(.15+(W(n*57)-.5)*.3)*E],L=.42+.25*W(n*91),r=[],d=[];for(let w=0;w<b;w++){const C=y+6.2832*(w+.55*(W(n*7.3+w*1.91)-.5))/b,R=.86+.26*W(n*3.9+w*2.37),S=Math.cos(C)*M*R,c=Math.sin(C)*E*R;r.push([S,c])}r.forEach(w=>d.push(Math.atan2(w[1]-p[1],w[0]-p[0])));const H=[];for(let w=0;w<b;w++){const C=r[w],R=r[(w+1)%b],S=R[0]-C[0],c=R[1]-C[1],x=Math.hypot(S,c)||1,i=c/x,V=-S/x,z=Math.abs((p[0]-C[0])*i+(p[1]-C[1])*V),$=(.55+1.7*W(n*11.1+w*3.7))*.45*Math.min(M,E)/Math.max(.05,(1-L)*z);H.push({ox:i,oy:V,el:x,sl:$,j:(W(n*19+w)-.5)*.25})}f.push({cx:l,cy:u,rx:M,ry:E,V:r,A:d,F:H,P:p,kin:L,n:b,s:n,z:-u+(W(t*4.4+v)-.5)*.7*a,fx:(W(n*41)-.5)*.5,fy:.25+(W(n*67)-.5)*.5,rust:n>.91})}g+=m*(.62+.14*W(t+v*9.9)),v++}O.push({lo:e-a*.5,hi:e+a*1.5,st:f}),e+=a*.64,t++}})();function ht(e,t,a){const o=t-e.cx-e.P[0],f=a-e.cy-e.P[1];let g=Math.atan2(f,o),v=0;for(let p=0;p<e.n;p++){const L=e.A[p],r=e.A[(p+1)%e.n];let d=g-L,H=r-L;if(d-=Math.floor(d/6.2832)*6.2832,H-=Math.floor(H/6.2832)*6.2832,d<=H){v=p;break}}const n=e.V[v],m=e.V[(v+1)%e.n],l=e.F[v],u=t-e.cx,M=a-e.cy,E=-((u-n[0])*l.ox+(M-n[1])*l.oy),b=[e.P[0]+(n[0]-e.P[0])*e.kin,e.P[1]+(n[1]-e.P[1])*e.kin],y=-((u-b[0])*l.ox+(M-b[1])*l.oy);return[E,y>0?-1:v,y]}function st(e,t,a){let o=9,f=null,g=-1e9,v=null;for(const n of O)if(!(t<n.lo||t>n.hi))for(const m of n.st){if(Math.abs(e-m.cx)>m.rx*1.3||Math.abs(t-m.cy)>m.ry*1.3)continue;const l=ht(m,e,t);-l[0]<o&&(o=-l[0]),a&&l[0]>0&&m.z>g&&(g=m.z,f=m,v=l)}return a?[o,f,v]:o}function it(e,t){return t<-.6?Math.max(st(e,t),-t-.6):Math.min(st(e,t),ft(e,t)+.35)}function at(e,t){const[,a,o]=st(e,t,!0),f=(.4+.6*h(-.4,3,t))*(1-.45*h(5,8.5,t))*(1-.3*h(2.5,5,Math.abs(e))),g=.82+.18*j(e*23,t*23)+(q(Math.floor(e*50),Math.floor(t*50))>.92?.2:0)-(q(Math.floor(e*50)+7,Math.floor(t*50)+3)>.9?.16:0);if(!a){const i=.5+.5*j(e*3,t*3);return[.03*i+.035*f,.025*i+.022*f,.026*i+.01*f]}const[v,n,m]=o;let l,u=0;if(n<0)l=P(a.fx,a.fy,1),u=h(.035,0,m);else{const i=a.F[n];l=P(i.ox*i.sl+i.j,i.oy*i.sl+i.j*.5,1),u=h(.035,0,-m)*.6}l=P(l[0]+(j(e*9+a.s*9,t*9)-.5)*.12,l[1]+(j(e*9+4,t*9+a.s*7)-.5)*.12,l[2]);const M=.5+.5*l[1],E=Math.max(0,F(l,G))*f,b=Math.max(0,F(l,T)),y=_(.72,1,h(0,.18,v))*(n>=0&&a.F[n].oy<-.5?.82:1),p=Math.abs(e),L=t>4&&t<8.4?_(.6,1,h(0,.6,p-K(Math.min(t,8.3)))):1;let r=a.rust?[.56,.44,.36]:[.47,.45,.44];const d=.62+.5*W(a.s*77);r=r.map(i=>i*d);const H=h(1.1,.15,t);r=r.map(i=>i*(1-.55*H));const w=.7*h(.6,0,t)*h(.35,.7,j(e*3.5,t*8));r=[_(r[0],.1,w),_(r[1],.14,w),_(r[2],.08,w)];const C=y*g*L*(1+.22*u);let R=r[0]*(.02+.08*M+.6*E+.14*b)*C,S=r[1]*(.02+.08*M+.39*E+.17*b)*C,c=r[2]*(.025+.11*M+.19*E+.27*b)*C;const x=H*Math.pow(Math.max(0,F(l,P(G[0],G[1],G[2]+1))),24)*f;return R+=.5*x,S+=.35*x,c+=.2*x,[R,S,c]}const K=e=>e<5.7?1.85-.12*h(5.45,5.7,e):e<7.85?1.15:e<8.05?1.22:e<8.3?1.36:1.25;function ot(e){const t=k((e-14.2)/1.25,0,1);let a=_(.44,.66,t*t);return a+=.05*Math.max(0,Math.sin((e-14.2)*9)),a}function D(e,t){const a=Math.abs(e);let o=it(e,t);return t>4.2&&t<8.4&&(o=Math.min(o,Math.max(a-K(t),Math.max(4.4-t,t-8.4)))),o=Math.min(o,Math.max(a-_(.62,.5,h(8.4,8.8,t))-.04*Math.sin((t-8.4)*15.7),Math.max(8.35-t,t-8.82))),o=Math.min(o,A(e,t,0,11.5,_(.47,.42,k((t-8.8)/5.5,0,1)),2.72)),o=Math.min(o,Math.max(a-ot(t),Math.max(14.2-t,t-15.45))),o=Math.min(o,Math.hypot(a-.62,t-15.32)-.11),o=Math.min(o,Math.max(a-.76,Math.abs(t-15.53)-.08)),t>15.55&&(o=Math.min(o,s(e/Y,ct+(t-ct)/Y)*Y)),o}const Y=1.3,ct=15.61;function s(e,t){const a=Math.abs(e);let o=9;const f=.35;o=Math.min(o,Math.hypot(e,(t-16.05-f)/2.1)-.2),o=Math.min(o,Math.max(a-.16+(t-15.7-f)*.2,Math.abs(t-15.82-f)-.1)),o=Math.min(o,Math.hypot(a-.17,t-16.64-f)-.1),o=Math.min(o,Math.max(Math.abs(t-16.6-f+(a-.24)*.3)-.035,Math.abs(a-.29)-.06)),o=Math.min(o,A(a,t,0,16.6+f,.06,.1)),o=Math.min(o,Math.max(a-.12+(t-16.78-f)*.3,Math.abs(t-16.88-f)-.11)),o=Math.min(o,Math.hypot(e,t-17-f)-.04);const g=16.12+f+a*.22+h(.4,.5,I(a*5+.2))*.08*h(.75,1.05,a),v=16.48+f+a*.3-.16*h(.95,1.32,a);return o=Math.min(o,Math.max(Math.max(a-1.32,t-v),g-t)),o=Math.min(o,mt(e,t)),o}function mt(e,t){const a=Math.hypot(e,t-15.98);let o=Math.abs(a-.3)-.06-.025*Math.sin(Math.atan2(t-15.98,e)*14);return o=Math.min(o,A(e,t,0,16.17,.012,.1)),o=Math.min(o,A(e,t,0,15.93,.025,.17),A(e,t,0,16.05,.1,.018)),o=Math.min(o,Math.max(Math.abs(Math.hypot(e,t-15.86)-.14)-.022,t-15.82)),o}const G=(()=>{const e=[.38,-.5,.78],t=Math.hypot(...e);return e.map(a=>a/t)})(),T=(()=>{const e=[-.72,.5,.48],t=Math.hypot(...e);return e.map(a=>a/t)})(),P=(e,t,a)=>{const o=Math.hypot(e,t,a)||1;return[e/o,t/o,a/o]},F=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2];function U(e,t,a,o){const f=Math.max(0,F(e,G)),g=Math.max(0,F(e,T)),v=Math.pow(Math.max(0,F(e,P(G[0],G[1],G[2]+1))),14),n=Math.pow(Math.max(0,F(e,P(T[0],T[1],T[2]+1))),10),m=o*(1-.45*h(8.5,17,a));return[.035+.16*f*m+.04*g+.9*v*m+.22*n,.026+.1*f*m+.05*g+.6*v*m+.27*n,.018+.04*f*m+.07*g+.3*v*m+.36*n]}function nt(e,t){const o=D(e,t),f=(D(e+.03,t)-D(e-.03,t))/(2*.03),g=(D(e,t+.03)-D(e,t-.03))/(2*.03),v=h(t<8.4?-.04:-.1,0,o);let n=P(f*v*1.6,g*v*1.6,1);const m=Math.abs(e);let l,u,M;const E=t>ct,b=E?e/Y:e,y=E?ct+(t-ct)/Y:t,p=E&&mt(b,y)<.005;if(!p&&t<8.6&&!(t>4.2&&t<8.4&&m<K(t))&&it(e,t)<=.02)[l,u,M]=at(e,t);else if(!p&&t<8.4){const L=K(t),r=e/L;let d;t<5.7||t>7.85?d=P(r*.9,0,1):d=r<-.414?P(-.707,0,.707):r>.414?P(.707,0,.707):[0,0,1],t>8.05&&t<8.3&&(d=P(d[0],-.55,d[2])),t>7.85&&t<8.05&&(d=P(d[0],.5,d[2])),n=P(d[0]+n[0]*.3,d[1]+n[1]*.3,d[2]);const H=Math.max(0,F(n,G))*(1.15-.45*h(4.4,8.4,t)),w=Math.max(0,F(n,T)),C=t>7.6&&t<7.85?_(.45,1,h(7.62,7.84,t)):1,R=(t-4.4)/.62,S=Math.floor(R),c=Math.abs(I(R)-.5)*.62,x=Math.abs(I(e/.78+S%2*.5)-.5)*.78,i=(t>5.7&&t<7.85?.62+.38*h(.012,.03,Math.min(.31-c,Math.abs(r)<.414?x:1)):1)*(1+.25*h(.03,0,Math.abs(t-5.7))-.35*h(.03,0,Math.abs(t-5.66))+.3*h(.025,0,Math.abs(t-8.29))+.2*h(.02,0,Math.abs(t-7.87))-.4*h(.02,0,Math.abs(t-8.04))+.25*h(.02,0,Math.abs(t-4.62))-.3*h(.02,0,Math.abs(t-4.58))),V=Math.abs(Math.abs(r)-.414)<.02&&t>5.7&&t<7.85?1.12:1,z=t>6.6&&t<7.45&&m<.42?m>.38||t<6.64||t>7.41?1.12:.9:1,$=C*i*V*z*(.84+.16*j(e*24,t*24)+(q(Math.floor(e*55),Math.floor(t*55))>.93?.12:0))*(.92+.1*j(e*3+S,t*3))*(t<5.7?.78-.15*h(5.4,5.7,t):1)*(r<-.414&&t>5.7&&t<7.85?.8:1);l=(.04+.5*H+.09*w)*$,u=(.037+.39*H+.11*w)*$,M=(.04+.27*H+.16*w)*$}else if(!p&&t<14.2&&t>=8.82){const L=_(.47,.42,k((t-8.8)/5.5,0,1)),r=k(e/L,-.999,.999),d=.04*Math.sin(Math.asin(r)*10);n=P(r+d,0,Math.sqrt(1-r*r));const H=1.05-.5*h(8.8,14.2,t),w=Math.max(0,F(n,G)+.15)*H,C=Math.max(0,F(n,T)),R=Math.pow(Math.max(0,F(n,P(T[0],T[1],T[2]+1))),20);l=.03+.6*w+.12*C+.2*R,u=.028+.46*w+.15*C+.25*R,M=.03+.3*w+.21*C+.33*R}else{if(t>=14.2&&t<15.45&&!p){const r=t<14.8?0:1,d=e*(r?7:6)+r*.5,H=(t-(r?14.8:14.2))/.6,w=H-(.55+.3*Math.abs(Math.sin(d*Math.PI)));n=P(n[0]+.12*Math.sin(d*Math.PI*2)*H,n[1]-1.1*h(-.04,.06,w)*h(.22,.08,w)+.15,n[2])}if(y>16.3&&Math.abs(b)>.3&&!p){const r=y-(16.47+Math.abs(b)*.22);n=P(n[0]+.12*Math.sin((m*3-r*4)*6),n[1]+.3-.6*h(.05,.3,r),n[2])}t>=8.3&&t<8.82&&(n=P(n[0]*.5+e*.9,Math.cos((t-8.35)*6.7)*.8,1)),[l,u,M]=U(n,b,y,p?1.25:t>=14.2&&t<15.45?.75:1);const L=E?1.95:1.5;if(E){const r=h(-.09,0,o)*Math.max(0,-f*.7+g*.7);l+=.16*r,u+=.2*r,M+=.28*r}return[l*L,u*L,M*L]}return[l*1.45,u*1.45,M*1.45]}const tt=-.2,N=tt-.03,Z=e=>e<-.03?-9:N-.004+.13*h(-.02,.09,e)+.007*B(e*48)+.0035*B(e*160)+.012*h(.1,.45,e),J=.125,Mt=Z(J),rt=(()=>{const e=[-.75,.55,.45],t=Math.hypot(...e);return e.map(a=>a/t)})();function xt(e,t,a){const o=Z(e);let f=0,g=0,v=0,n=0;if(t>N-.006&&(f=k((o-t)/a+.5,0,1)*k((t-(N-.006))/a,0,1),f>0)){const M=(c,x)=>{const i=c*70,V=x*105,z=1-Math.abs(j(i*.55,V*.4)-.5)*2;return .5*z*z+.28*j(i*1.6,V*1.3)+.1*j(i*4.5,V*4.5)+.22*h(.35,.65,I(V*.11+B(i*.35)*.7))},b=M(e,t),y=-(M(e-.0015,t)-M(e+.0015,t))/(2*.0015)*.01,p=-(M(e,t+.0015)-M(e,t-.0015))/(2*.0015)*.01,L=P(y,p,1),r=Math.max(0,F(L,rt)),d=.55+.45*L[1],H=.45+.55*h(.15,.65,b),w=.85+.15*j(e*900,t*900)+(q(Math.floor(e*1500),Math.floor(t*1500))>.93?.18:0),C=_(1,.55,h(o-.004,o-.09,t))*H*w;g=(.07*d+.3*r)*C,v=(.066*d+.31*r)*C,n=(.088*d+.4*r)*C;const R=h(.012,0,o-t)*.55+h(.004,0,o-t)*.4;g+=.55*R,v+=.6*R,n+=.82*R;const S=h(.012,0,t-N)*(.5+.5*B(e*300));g=g*(1-.3*S)+.08*S*r,v=v*(1-.3*S)+.1*S*r,n=n*(1-.3*S)+.14*S*r}const m=(t-Mt)/1.4,l=(J-e)/1.4;let u=null;if(m>-.012&&m<.1&&l>-.045&&l<.06){const M=_(.0085,.0058,k(m/.07,0,1));if(m<.07&&Math.abs(l)<M){const p=.75+.7*h(M,-M,l);u=I(m*42)>=.5?[.3*p,.07*p,.07*p]:[.38*p,.37*p,.42*p]}m>.068&&m<.072&&Math.abs(l)<.0095&&(u=[.12,.1,.11]),m>.072&&m<.084&&Math.abs(l)<.0052&&(u=[1.5,1.2,.8]),m>.084&&m<.092&&Math.abs(l)<.0065-(m-.084)*.8&&(u=[.16,.1,.09]);const E=.009,b=.046,y=.022;if(l>E&&l<b&&m<y&&m>-.012){const p=h(b,E,l);u=[.13+.12*p,.12+.12*p,.15+.16*p];const L=Math.abs(l-.028),r=Math.abs(m-.009);if(L<.0055&&r<.0045)u=L<8e-4||r<6e-4?[.3,.18,.08]:[1.35,.9,.42];else{const d=Math.exp(-Math.hypot(L,r)*160)*.5;u=[u[0]+d,u[1]+d*.62,u[2]+d*.25]}}if(l>E-.003&&l<b+.003&&m>=y&&m<y+.013-Math.abs(l-(E+b)/2)*.6){const p=h(y+.004,y+.012-Math.abs(l-(E+b)/2)*.6,m);u=[.1+.25*p,.07+.25*p,.08+.32*p]}u&&([g,v,n]=u,f=1)}return[g,v,n,f]}const et={x0:-6,x1:6,y0:-.8,y1:18.2},Q=e=>Math.round(k(Math.pow(k(e,0,1.6)/1.6,1/2.2),0,1)*255),pt=(e,t)=>{const a=.3*e[0]+.59*e[1]+.11*e[2],o=h(.02,.5,a),f=[_(.93,1.05,o),_(.95,1,o),_(1.07,.93,o)][t];return Math.round(k(Math.pow(1-Math.exp(-1.7*e[t]*f*.97),.96),0,1)*255)};function X(e,t,a,o){const f=a.mon=new Uint8Array(e.w*e.h*4),g=a.ov=new Uint8ClampedArray(e.w*e.h*4),v=a.cape=new Uint8Array(t.w*t.h*4),n=(e.x1-e.x0)/e.w,m=(t.u1-t.u0)/t.w,l=[];for(let u=0;u<e.h;u+=o)l.push(()=>{for(let M=u;M<Math.min(e.h,u+o);M++){const E=e.y0+(M+.5)/e.h*(e.y1-e.y0);for(let b=0;b<e.w;b++){const y=e.x0+(b+.5)/e.w*(e.x1-e.x0);let p=D(y,E);if(p>2.5*n)continue;let L=y,r=E;if(p>-.3*n){const R=n*.5,S=D(y+R,E)-D(y-R,E),c=D(y,E+R)-D(y,E-R),x=Math.hypot(S,c)||1,i=Math.max(p,0)+.6*n;L=y-S/x*i,r=E-c/x*i}const d=nt(L,r),H=(M*e.w+b)*4,w=((e.h-1-M)*e.w+b)*4,C=k(.5-p/n,0,1);C>0&&(f[H]=Q(d[0]),f[H+1]=Q(d[1]),f[H+2]=Q(d[2]),f[H+3]=Math.round(C*255)),g[w]=pt(d,0),g[w+1]=pt(d,1),g[w+2]=pt(d,2),g[w+3]=Math.round(k(.5-(p-1.6*n)/n,0,1)*255)}}});for(let u=0;u<t.h;u+=o)l.push(()=>{for(let M=u;M<Math.min(t.h,u+o);M++){const E=t.y0+(M+.5)/t.h*(t.y1-t.y0);for(let b=0;b<t.w;b++){const y=t.u0+(b+.5)/t.w*(t.u1-t.u0),p=xt(y,E,m),L=(M*t.w+b)*4;p[3]<=0||(v[L]=Q(p[0]),v[L+1]=Q(p[1]),v[L+2]=Q(p[2]),v[L+3]=Math.round(p[3]*255))}}});return Object.assign(a,{M:e,Cp:t,lampY:Mt+.083*1.4,lampU:J}),l}function gt(e,t){t=t||{};const a=Math.round(k(t.mw||320,160,520)/2)*2,o=Math.round(k(t.cw||512,256,768)),f=Object.assign({w:a,h:Math.round(a*(et.y1-et.y0)/(et.x1-et.x0))},et),g={w:o,h:Math.round(o*.45),u0:-.04,u1:.56,y0:N-.01,y1:N+.26},v=Object.assign({},f,{w:Math.round(a/4),h:Math.round(f.h/4)}),n=Object.assign({},g,{w:Math.round(o/4),h:Math.round(g.h/4)}),m={},l={},u=X(v,n,m,8),M=X(f,g,l,6),E=window.requestIdleCallback?y=>requestIdleCallback(y,{timeout:120}):y=>setTimeout(()=>y(null),16),b=(y,p,L)=>{const r=d=>{const H=performance.now(),w=d&&!d.didTimeout?k(d.timeRemaining(),6,12):10;for(;y.length&&performance.now()-H<w;)y.shift()();y.length?L?setTimeout(r,0):E(r):p()};L?setTimeout(r,0):E(r)};b(u,()=>{m.coarse=!0,(t.coarse||e)(m),b(M,()=>e(l))},!0)}window.SCENE={bake:gt,MON:et}})(),function(){const I=document.getElementById("gl"),k=Object.assign({bx:.415,by:-.27,ms:.034,ck:.32},window.SCENE?SCENE.MON:{x0:-6,x1:6,y0:-.8,y1:18.2}),h=T=>(Math.round(T*1e6)/1e6).toFixed(6),_=/monchk/.test(location.hash);function W(T){T=T||q;const P=innerWidth,F=innerHeight,U=Math.min(P,F),nt=1+T.zm*.06,tt=k.ms*T.msk,N=k.bx-T.cam*k.ck+T.mox+k.x0*tt,Z=k.by+k.y1*tt-(T.pary*.012-T.sy*.09-T.lift);return{x:P/2+N*nt*U,y:F/2-Z*nt*U,k:nt,m:U,w0:(k.x1-k.x0)*tt*U,h0:(k.y1-k.y0)*tt*U}}const q={scr:0,ly:0,lift:0,heart:1,cool:0,fill:0,burst:0,cam:0,par:0,tint:0,streak:0,beat:0,hy:0,hs:1,mx:0,my:0,mo:0,zm:0,lk:0,lp:0,pary:0,rx:0,ry:0,rp:1,fw:0,sy:0,lv:3,mox:0,msk:1,hx:0,cpx:0,wm:1},B=Object.assign({},q),j=matchMedia("(prefers-reduced-motion: reduce)").matches,A={ok:!1,rm:j,set(T){Object.assign(B,T)},jump(T){Object.assign(B,T),Object.assign(q,T)},state:q,target:B};window.GL=A;const dt=(navigator.hardwareConcurrency||4)<=4||(navigator.deviceMemory||4)<=3,lt=[{s:.42,q:.5},{s:.55,q:.65},{s:.7,q:.8},{s:.85,q:1},{s:1,q:1}],ft=/lv=([0-4])/.exec(location.hash);let O=ft?+ft[1]:dt?2:3,ht=lt[O].s,st=lt[O].q,it=!1,at=0,K=0,ot=1,D=1;q.lv=B.lv=O,j&&(q.wm=B.wm=0),document.documentElement.classList.toggle("lq",O<2);function Y(){ot=Math.max(1,Math.round(at*ht)),D=Math.max(1,Math.round(K*ht)),s&&s.viewport(0,0,ot,D),I.style.transform=ot<at||D<K?`scale(${(at/ot).toFixed(5)},${(K/D).toFixed(5)})`:"",it=!1}function ct(){const T=Math.min(window.devicePixelRatio||1,2);let P=innerWidth*T,F=innerHeight*T;const U=Math.min(1,1400/Math.max(P,F));at=Math.round(P*U),K=Math.round(F*U),(I.width!==at||I.height!==K)&&(I.width=at,I.height=K),Y()}let s;const mt=!!window.WebGLRenderingContext&&!/nogl/.test(location.hash);A.ok=mt,mt?document.documentElement.classList.add("gl"):document.documentElement.classList.add("no-gl"),mt&&requestAnimationFrame(()=>setTimeout(G,0));function G(){ct();try{s=I.getContext("webgl",{antialias:!1,alpha:!0,premultipliedAlpha:!0,powerPreference:"high-performance",preserveDrawingBuffer:!1})}catch{}if(!s){A.ok=!1,document.documentElement.classList.remove("gl"),document.documentElement.classList.add("no-gl"),requestAnimationFrame(()=>document.documentElement.classList.add("gl-ready"));return}et();const T="attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}",P=`
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
const vec2 MB0=vec2(${h(k.bx)},${h(k.by)}); const float MS=${h(k.ms)}; // v19: памятник — главный герой, ≈25% высоты экрана; v20: на интро правее — снежинка его не касается
vec2 monB(){return vec2(MB0.x-cam*${h(k.ck)}+mox,MB0.y);}
vec4 monT(vec2 p){ vec2 c=(p-vec2(${h(k.x0)},${h(k.y0)}))/vec2(${h(k.x1-k.x0)},${h(k.y1-k.y0)}); if(c.x<0.||c.x>1.||c.y<0.||c.y>1.) return vec4(0.); return dec(texture2D(TM,c)); }
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
    if(abs(p.x)<${h(k.x1)} && p.y<${h(k.y1)} && p.y>-11.){
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
}`,F=document.documentElement;let U=/Apple/.test(navigator.vendor||"")?null:s.getExtension("KHR_parallel_shader_compile");function nt(c,x){const i=s.createShader(c);return s.shaderSource(i,x),s.compileShader(i),i}let tt,N,Z,J=!1;A.ok=!0,F.classList.add("gl");function Mt(){N&&!s.getShaderParameter(N,s.COMPILE_STATUS)&&console.warn(s.getShaderInfoLog(N)),A.ok=!1,F.classList.remove("gl"),F.classList.add("no-gl"),requestAnimationFrame(()=>F.classList.add("gl-ready"))}const rt={};function xt(){if(J)return;if(!s.getProgramParameter(Z,s.LINK_STATUS))return Mt();s.useProgram(Z);const c=s.createBuffer();s.bindBuffer(s.ARRAY_BUFFER,c),s.bufferData(s.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),s.STATIC_DRAW);const x=s.getAttribLocation(Z,"p");s.enableVertexAttribArray(x),s.vertexAttribPointer(x,2,s.FLOAT,!1,0,0),["R","t","q",...Object.keys(q)].forEach(i=>rt[i]=s.getUniformLocation(Z,i)),s.uniform1i(s.getUniformLocation(Z,"TM"),0),s.uniform1i(s.getUniformLocation(Z,"TC"),1),et(),A.scene&&pt(),Y(),S=!0,R||(R=!0,l=performance.now(),requestAnimationFrame(E))}function et(){if(A.baking||!window.SCENE)return;A.baking=!0;const c=Math.min(innerWidth,innerHeight),x=Math.min(window.devicePixelRatio||1,2),i=V=>{A.scene=V,a(V),S&&!J&&s&&pt()};SCENE.bake(i,{mw:12*.034*c*x,cw:.6*1.35*c*x,coarse:i})}let Q=[];function pt(){const c=A.scene;Q.forEach(x=>s.deleteTexture(x)),Q=[],[[c.mon,c.M],[c.cape,c.Cp]].forEach(([x,i],V)=>{const z=s.createTexture();Q.push(z),s.activeTexture(s.TEXTURE0+V),s.bindTexture(s.TEXTURE_2D,z),s.texImage2D(s.TEXTURE_2D,0,s.RGBA,i.w,i.h,0,s.RGBA,s.UNSIGNED_BYTE,x),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MAG_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}),A.jump({ly:c.lampY}),A.set({scr:1})}const X=document.createElement("canvas");X.id="monx",X.setAttribute("aria-hidden","true"),I.parentNode.insertBefore(X,I);let gt=!1,e=!1,t=0;function a(c){!c.ov||_||(X.width=c.M.w,X.height=c.M.h,X.getContext("2d").putImageData(new ImageData(c.ov,c.M.w,c.M.h),0,0),e=!0)}function o(){const c=(1-Math.min(1,Math.max(0,(q.cam-1.3)/.7))**2*(3-2*Math.min(1,Math.max(0,(q.cam-1.3)/.7))))*q.scr,x=e&&!J&&c>.004;if(x!==gt&&(gt=x,X.style.display=x?"block":"none"),!x)return;const i=W(),V=i.w0.toFixed(2);V!==t&&(t=V,X.style.width=i.w0.toFixed(2)+"px",X.style.height=i.h0.toFixed(2)+"px"),X.style.transform=`translate3d(${i.x.toFixed(2)}px,${i.y.toFixed(2)}px,0) scale(${i.k.toFixed(5)})`}function f(){if(tt=nt(s.VERTEX_SHADER,T),N=nt(s.FRAGMENT_SHADER,(_?`#define MONCHK
`:"")+P),Z=s.createProgram(),s.attachShader(Z,tt),s.attachShader(Z,N),s.linkProgram(Z),U){const c=()=>{if(J)return;const x=s.getProgramParameter(Z,U.COMPLETION_STATUS_KHR);typeof x!="boolean"?(U=null,xt()):x?xt():requestAnimationFrame(c)};requestAnimationFrame(c)}else requestAnimationFrame(()=>setTimeout(xt,0))}f(),I.addEventListener("webglcontextlost",c=>{c.preventDefault(),J=!0,gt=!1,X.style.display="none",Q=[],R=!1,A.ok=!1,F.classList.remove("gl"),F.classList.add("no-gl")},!1),I.addEventListener("webglcontextrestored",()=>{J=!1,A.ok=!0,F.classList.remove("no-gl"),F.classList.add("gl"),Y(),f()},!1);function g(c,x){c=Math.max(0,Math.min(4,c)),c!==O&&(O=c,B.lv=c,document.documentElement.classList.toggle("lq",c<2),ht=lt[c].s,st=lt[c].q,it=!0,x&&Y())}A.pulse=()=>{it&&Y()};let v=60;const n=[];A.quality=()=>({level:O,fps:Math.round(v),scale:+ht.toFixed(2),q:st,w:ot,h:D,pending:it}),Object.defineProperty(A,"level",{get:()=>O}),addEventListener("resize",ct),addEventListener("pointermove",c=>{B.par=(c.clientX/innerWidth-.5)*2},{passive:!0}),addEventListener("pointermove",c=>{B.pary=(c.clientY/innerHeight-.5)*2},{passive:!0}),addEventListener("deviceorientation",c=>{c.gamma!=null&&(B.par=Math.max(-1,Math.min(1,c.gamma/30))),c.beta!=null&&(B.pary=Math.max(-1,Math.min(1,(c.beta-45)/35)))},{passive:!0});let m=0,l=0,u=0;const M={streak:9,burst:2.2,zm:3.2,lk:6,fw:1.6,lv:1.2};function E(c){if(J){R=!1;return}m||(m=l=c);const x=Math.min(.05,(c-l)/1e3);l=c,u+=x*(j?.25:1);for(const i in B)q[i]+=(B[i]-q[i])*Math.min(1,x*(M[i]||2.6));s.uniform2f(rt.R,ot,D),s.uniform1f(rt.t,u),A.t=u,s.uniform1f(rt.q,st);for(const i in q)s.uniform1f(rt[i],q[i]);o(),s.drawArrays(s.TRIANGLES,0,3),A.ready||(A.ready=!0,requestAnimationFrame(()=>document.documentElement.classList.add("gl-ready"))),C(c),document.hidden?R=!1:requestAnimationFrame(E)}let b=0,y=0,p=0,L=0,r=-1e9,d=1e4,H=0,w=0;function C(c){const x=c-w;if(w=c,ft||(y||(y=c+700),c<y)||c<H||x<=0||x>4e3)return;if(n.push(x),n.length>90&&n.shift(),!b){b=c+1e3,n.length=0;return}if(c<b||n.length<4)return;const i=c-m<3200;b=c+(i?1e3:2e3);const V=n.slice().sort((vt,ut)=>vt-ut),z=V[V.length>>1];v=1e3/(n.reduce((vt,ut)=>vt+ut,0)/n.length);const $=Math.min(v,1e3/z);$<(i?50:46)?(g(i?O-1:$<15?0:O-($<30?2:1),$<35),c-r<15e3&&(d=Math.min(d*2,8e4)),L=c,p=0,n.length=0):1e3/z>=56&&v>=50&&c-L>d?++p>=3&&(g(O+1,!1),r=c,p=0,n.length=0):p=0}let R=!1,S=!1;document.addEventListener("visibilitychange",()=>{S&&!document.hidden&&!R&&(R=!0,l=performance.now(),H=l+600,n.length=0,requestAnimationFrame(E))}),A.monRect=W,A.MP=k,A.lightRect=function(c){c=c||q;const x=innerWidth,i=innerHeight,V=Math.min(x,i),z=1+c.zm*.06,$=c.pary*.012-c.sy*.09-c.lift,vt=-.2,ut=vt-.03,Et=vt-.045,Lt=1.35,bt=-.12-c.cam*.15+c.cpx-.125*Lt,Tt=Et+((c.ly||ut+.12)-ut)*Lt,wt=kt=>x/2+kt*z*V,yt=kt=>i/2-(kt-$)*z*V;return{x0:wt(bt-.022),x1:wt(bt+.07),y0:yt(Tt+.035),y1:yt(Et-.005),lamp:[wt(bt),yt(Tt)]}},A.uv=(c,x)=>{const i=Math.min(innerWidth,innerHeight);return[(c-innerWidth/2)/i,(innerHeight/2-x)/i]}}}();
