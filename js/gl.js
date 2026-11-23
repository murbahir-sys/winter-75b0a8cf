(function(){const N=e=>e-Math.floor(e),T=(e,t,n)=>e<t?t:e>n?n:e,m=(e,t,n)=>{const c=T((n-e)/(t-e),0,1);return c*c*(3-2*c)},D=(e,t,n)=>e+(t-e)*n,W=e=>N(Math.sin(e*127.1)*43758.5453),x=(e,t)=>{e=N(e*123.34),t=N(t*456.21);const n=e*(e+45.32)+t*(t+45.32);return e+=n,t+=n,N(e*t)},X=e=>{const t=Math.floor(e);let n=e-t;return n=n*n*(3-2*n),D(W(t),W(t+1),n)},K=(e,t)=>{const n=Math.floor(e),c=Math.floor(t);let l=e-n,M=t-c;return l=l*l*(3-2*l),M=M*M*(3-2*M),D(D(x(n,c),x(n+1,c),l),D(x(n,c+1),x(n+1,c+1),l),M)},R=(e,t,n,c,l,M)=>{const u=Math.abs(e-n)-l,i=Math.abs(t-c)-M;return Math.hypot(Math.max(u,0),Math.max(i,0))+Math.min(Math.max(u,i),0)},Y=(e,t)=>t<0?D(4.85,1.45,m(.4,8.4,e)):D(4.6,1.1,m(0,7.6,e)),et=e=>(e<0?7.1:6.4)-.5*X(e*1.7+3);function ut(e,t){const n=e<0?-1:1,c=.45*X(t*1.3+n*7)+.25*X(t*3.7+n*3)-.3;return Math.max(Math.abs(e)-Y(t,n)-c,Math.max(-t-.6,t-et(e)))}const nt=[];(function(){let e=-1,t=0;for(;e<8.4;){const n=D(1.5,.62,m(-.5,7.5,e))*(.85+.3*W(t*3.1+.7)),c=e+n*.5,l=[];let M=-Y(c,-1)-.7-W(t*7.7)*.6*n,u=0;for(;M<Y(c,1)+.7;){const i=W(t*17.3+u*7.9+.31),d=n*(.95+1*W(t*13.1+u*2.3)),v=M+d*.5,h=c+(W(t*5.3+u*1.7)-.5)*n*.4;if(ut(v,h)<-.05*n){const g=d*.62,y=n*.66*(.85+.3*W(u*4.1+t)),E=5+Math.floor(W(i*13.7)*4),k=W(i*5.1)*6.283,p=[(W(i*31)-.5)*.35*g,(.15+(W(i*57)-.5)*.3)*y],A=.42+.25*W(i*91),f=[],b=[];for(let w=0;w<E;w++){const C=k+6.2832*(w+.55*(W(i*7.3+w*1.91)-.5))/E,U=.86+.26*W(i*3.9+w*2.37),V=Math.cos(C)*g*U,Z=Math.sin(C)*y*U;f.push([V,Z])}f.forEach(w=>b.push(Math.atan2(w[1]-p[1],w[0]-p[0])));const F=[];for(let w=0;w<E;w++){const C=f[w],U=f[(w+1)%E],V=U[0]-C[0],Z=U[1]-C[1],G=Math.hypot(V,Z)||1,_=Z/G,ot=-V/G,lt=Math.abs((p[0]-C[0])*_+(p[1]-C[1])*ot),xt=(.55+1.7*W(i*11.1+w*3.7))*.45*Math.min(g,y)/Math.max(.05,(1-A)*lt);F.push({ox:_,oy:ot,el:G,sl:xt,j:(W(i*19+w)-.5)*.25})}l.push({cx:v,cy:h,rx:g,ry:y,V:f,A:b,F,P:p,kin:A,n:E,s:i,z:-h+(W(t*4.4+u)-.5)*.7*n,fx:(W(i*41)-.5)*.5,fy:.25+(W(i*67)-.5)*.5,rust:i>.91})}M+=d*(.62+.14*W(t+u*9.9)),u++}nt.push({lo:e-n*.5,hi:e+n*1.5,st:l}),e+=n*.64,t++}})();function vt(e,t,n){const c=t-e.cx-e.P[0],l=n-e.cy-e.P[1];let M=Math.atan2(l,c),u=0;for(let p=0;p<e.n;p++){const A=e.A[p],f=e.A[(p+1)%e.n];let b=M-A,F=f-A;if(b-=Math.floor(b/6.2832)*6.2832,F-=Math.floor(F/6.2832)*6.2832,b<=F){u=p;break}}const i=e.V[u],d=e.V[(u+1)%e.n],v=e.F[u],h=t-e.cx,g=n-e.cy,y=-((h-i[0])*v.ox+(g-i[1])*v.oy),E=[e.P[0]+(i[0]-e.P[0])*e.kin,e.P[1]+(i[1]-e.P[1])*e.kin],k=-((h-E[0])*v.ox+(g-E[1])*v.oy);return[y,k>0?-1:u,k]}function dt(e,t,n){let c=9,l=null,M=-1e9,u=null;for(const i of nt)if(!(t<i.lo||t>i.hi))for(const d of i.st){if(Math.abs(e-d.cx)>d.rx*1.3||Math.abs(t-d.cy)>d.ry*1.3)continue;const v=vt(d,e,t);-v[0]<c&&(c=-v[0]),n&&v[0]>0&&d.z>M&&(M=d.z,l=d,u=v)}return n?[c,l,u]:c}function kt(e,t){return t<-.6?Math.max(dt(e,t),-t-.6):Math.min(dt(e,t),ut(e,t)+.35)}function Vt(e,t){const[,n,c]=dt(e,t,!0),l=(.4+.6*m(-.4,3,t))*(1-.45*m(5,8.5,t))*(1-.3*m(2.5,5,Math.abs(e))),M=.82+.18*K(e*23,t*23)+(x(Math.floor(e*50),Math.floor(t*50))>.92?.2:0)-(x(Math.floor(e*50)+7,Math.floor(t*50)+3)>.9?.16:0);if(!n){const _=.5+.5*K(e*3,t*3);return[.03*_+.035*l,.025*_+.022*l,.026*_+.01*l]}const[u,i,d]=c;let v,h=0;if(i<0)v=H(n.fx,n.fy,1),h=m(.035,0,d);else{const _=n.F[i];v=H(_.ox*_.sl+_.j,_.oy*_.sl+_.j*.5,1),h=m(.035,0,-d)*.6}v=H(v[0]+(K(e*9+n.s*9,t*9)-.5)*.12,v[1]+(K(e*9+4,t*9+n.s*7)-.5)*.12,v[2]);const g=.5+.5*v[1],y=Math.max(0,j(v,q))*l,E=Math.max(0,j(v,Q)),k=D(.72,1,m(0,.18,u))*(i>=0&&n.F[i].oy<-.5?.82:1),p=Math.abs(e),A=t>4&&t<8.4?D(.6,1,m(0,.6,p-ht(Math.min(t,8.3)))):1;let f=n.rust?[.56,.44,.36]:[.47,.45,.44];const b=.62+.5*W(n.s*77);f=f.map(_=>_*b);const F=m(1.1,.15,t);f=f.map(_=>_*(1-.55*F));const w=.7*m(.6,0,t)*m(.35,.7,K(e*3.5,t*8));f=[D(f[0],.1,w),D(f[1],.14,w),D(f[2],.08,w)];const C=k*M*A*(1+.22*h);let U=f[0]*(.02+.08*g+.6*y+.14*E)*C,V=f[1]*(.02+.08*g+.39*y+.17*E)*C,Z=f[2]*(.025+.11*g+.19*y+.27*E)*C;const G=F*Math.pow(Math.max(0,j(v,H(q[0],q[1],q[2]+1))),24)*l;return U+=.5*G,V+=.35*G,Z+=.2*G,[U,V,Z]}const ht=e=>e<5.7?1.85-.12*m(5.45,5.7,e):e<7.85?1.15:e<8.05?1.22:e<8.3?1.36:1.25;function it(e){const t=T((e-14.2)/1.25,0,1);let n=D(.44,.66,t*t);return n+=.05*Math.max(0,Math.sin((e-14.2)*9)),n}function z(e,t){const n=Math.abs(e);let c=kt(e,t);return t>4.2&&t<8.4&&(c=Math.min(c,Math.max(n-ht(t),Math.max(4.4-t,t-8.4)))),c=Math.min(c,Math.max(n-D(.62,.5,m(8.4,8.8,t))-.04*Math.sin((t-8.4)*15.7),Math.max(8.35-t,t-8.82))),c=Math.min(c,R(e,t,0,11.5,D(.47,.42,T((t-8.8)/5.5,0,1)),2.72)),c=Math.min(c,Math.max(n-it(t),Math.max(14.2-t,t-15.45))),c=Math.min(c,Math.hypot(n-.62,t-15.32)-.11),c=Math.min(c,Math.max(n-.76,Math.abs(t-15.53)-.08)),t>15.55&&(c=Math.min(c,gt(e/ct,Mt+(t-Mt)/ct)*ct)),c}const ct=1.3,Mt=15.61;function gt(e,t){const n=Math.abs(e);let c=9;const l=.35;c=Math.min(c,Math.hypot(e,(t-16.05-l)/2.1)-.2),c=Math.min(c,Math.max(n-.16+(t-15.7-l)*.2,Math.abs(t-15.82-l)-.1)),c=Math.min(c,Math.hypot(n-.17,t-16.64-l)-.1),c=Math.min(c,Math.max(Math.abs(t-16.6-l+(n-.24)*.3)-.035,Math.abs(n-.29)-.06)),c=Math.min(c,R(n,t,0,16.6+l,.06,.1)),c=Math.min(c,Math.max(n-.12+(t-16.78-l)*.3,Math.abs(t-16.88-l)-.11)),c=Math.min(c,Math.hypot(e,t-17-l)-.04);const M=16.12+l+n*.22+m(.4,.5,N(n*5+.2))*.08*m(.75,1.05,n),u=16.48+l+n*.3-.16*m(.95,1.32,n);return c=Math.min(c,Math.max(Math.max(n-1.32,t-u),M-t)),c=Math.min(c,Rt(e,t)),c}function Rt(e,t){const n=Math.hypot(e,t-15.98);let c=Math.abs(n-.3)-.06-.025*Math.sin(Math.atan2(t-15.98,e)*14);return c=Math.min(c,R(e,t,0,16.17,.012,.1)),c=Math.min(c,R(e,t,0,15.93,.025,.17),R(e,t,0,16.05,.1,.018)),c=Math.min(c,Math.max(Math.abs(Math.hypot(e,t-15.86)-.14)-.022,t-15.82)),c}const q=(()=>{const e=[.38,-.5,.78],t=Math.hypot(...e);return e.map(n=>n/t)})(),Q=(()=>{const e=[-.72,.5,.48],t=Math.hypot(...e);return e.map(n=>n/t)})(),H=(e,t,n)=>{const c=Math.hypot(e,t,n)||1;return[e/c,t/c,n/c]},j=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2];function St(e,t,n,c){const l=Math.max(0,j(e,q)),M=Math.max(0,j(e,Q)),u=Math.pow(Math.max(0,j(e,H(q[0],q[1],q[2]+1))),14),i=Math.pow(Math.max(0,j(e,H(Q[0],Q[1],Q[2]+1))),10),d=c*(1-.45*m(8.5,17,n));return[.035+.16*l*d+.04*M+.9*u*d+.22*i,.026+.1*l*d+.05*M+.6*u*d+.27*i,.018+.04*l*d+.07*M+.3*u*d+.36*i]}function bt(e,t){const c=z(e,t),l=(z(e+.03,t)-z(e-.03,t))/(2*.03),M=(z(e,t+.03)-z(e,t-.03))/(2*.03),u=m(t<8.4?-.04:-.1,0,c);let i=H(l*u*1.6,M*u*1.6,1);const d=Math.abs(e);let v,h,g;const y=t>Mt,E=y?e/ct:e,k=y?Mt+(t-Mt)/ct:t,p=y&&Rt(E,k)<.005;if(!p&&t<8.6&&!(t>4.2&&t<8.4&&d<ht(t))&&kt(e,t)<=.02)[v,h,g]=Vt(e,t);else if(!p&&t<8.4){const A=ht(t),f=e/A;let b;t<5.7||t>7.85?b=H(f*.9,0,1):b=f<-.414?H(-.707,0,.707):f>.414?H(.707,0,.707):[0,0,1],t>8.05&&t<8.3&&(b=H(b[0],-.55,b[2])),t>7.85&&t<8.05&&(b=H(b[0],.5,b[2])),i=H(b[0]+i[0]*.3,b[1]+i[1]*.3,b[2]);const F=Math.max(0,j(i,q))*(1.15-.45*m(4.4,8.4,t)),w=Math.max(0,j(i,Q)),C=t>7.6&&t<7.85?D(.45,1,m(7.62,7.84,t)):1,U=(t-4.4)/.62,V=Math.floor(U),Z=Math.abs(N(U)-.5)*.62,G=Math.abs(N(e/.78+V%2*.5)-.5)*.78,_=(t>5.7&&t<7.85?.62+.38*m(.012,.03,Math.min(.31-Z,Math.abs(f)<.414?G:1)):1)*(1+.25*m(.03,0,Math.abs(t-5.7))-.35*m(.03,0,Math.abs(t-5.66))+.3*m(.025,0,Math.abs(t-8.29))+.2*m(.02,0,Math.abs(t-7.87))-.4*m(.02,0,Math.abs(t-8.04))+.25*m(.02,0,Math.abs(t-4.62))-.3*m(.02,0,Math.abs(t-4.58))),ot=Math.abs(Math.abs(f)-.414)<.02&&t>5.7&&t<7.85?1.12:1,lt=t>6.6&&t<7.45&&d<.42?d>.38||t<6.64||t>7.41?1.12:.9:1,xt=C*_*ot*lt*(.84+.16*K(e*24,t*24)+(x(Math.floor(e*55),Math.floor(t*55))>.93?.12:0))*(.92+.1*K(e*3+V,t*3))*(t<5.7?.78-.15*m(5.4,5.7,t):1)*(f<-.414&&t>5.7&&t<7.85?.8:1);v=(.04+.5*F+.09*w)*xt,h=(.037+.39*F+.11*w)*xt,g=(.04+.27*F+.16*w)*xt}else if(!p&&t<14.2&&t>=8.82){const A=D(.47,.42,T((t-8.8)/5.5,0,1)),f=T(e/A,-.999,.999),b=.04*Math.sin(Math.asin(f)*10);i=H(f+b,0,Math.sqrt(1-f*f));const F=1.05-.5*m(8.8,14.2,t),w=Math.max(0,j(i,q)+.15)*F,C=Math.max(0,j(i,Q)),U=Math.pow(Math.max(0,j(i,H(Q[0],Q[1],Q[2]+1))),20);v=.03+.6*w+.12*C+.2*U,h=.028+.46*w+.15*C+.25*U,g=.03+.3*w+.21*C+.33*U}else{if(t>=14.2&&t<15.45&&!p){const f=t<14.8?0:1,b=e*(f?7:6)+f*.5,F=(t-(f?14.8:14.2))/.6,w=F-(.55+.3*Math.abs(Math.sin(b*Math.PI)));i=H(i[0]+.12*Math.sin(b*Math.PI*2)*F,i[1]-1.1*m(-.04,.06,w)*m(.22,.08,w)+.15,i[2])}if(k>16.3&&Math.abs(E)>.3&&!p){const f=k-(16.47+Math.abs(E)*.22);i=H(i[0]+.12*Math.sin((d*3-f*4)*6),i[1]+.3-.6*m(.05,.3,f),i[2])}t>=8.3&&t<8.82&&(i=H(i[0]*.5+e*.9,Math.cos((t-8.35)*6.7)*.8,1)),[v,h,g]=St(i,E,k,p?1.25:t>=14.2&&t<15.45?.75:1);const A=y?1.95:1.5;if(y){const f=m(-.09,0,c)*Math.max(0,-l*.7+M*.7);v+=.16*f,h+=.2*f,g+=.28*f}return[v*A,h*A,g*A]}return[v*1.45,h*1.45,g*1.45]}const mt=-.2,tt=mt-.03,J=e=>e<-.03?-9:tt-.004+.13*m(-.02,.09,e)+.007*X(e*48)+.0035*X(e*160)+.012*m(.1,.45,e),$=.125,pt=J($),_t=(()=>{const e=[-.75,.55,.45],t=Math.hypot(...e);return e.map(n=>n/t)})();function Ht(e,t,n){const c=J(e);let l=0,M=0,u=0,i=0;if(t>tt-.006&&(l=T((c-t)/n+.5,0,1)*T((t-(tt-.006))/n,0,1),l>0)){const g=(Z,G)=>{const _=Z*70,ot=G*105,lt=1-Math.abs(K(_*.55,ot*.4)-.5)*2;return .5*lt*lt+.28*K(_*1.6,ot*1.3)+.1*K(_*4.5,ot*4.5)+.22*m(.35,.65,N(ot*.11+X(_*.35)*.7))},E=g(e,t),k=-(g(e-.0015,t)-g(e+.0015,t))/(2*.0015)*.01,p=-(g(e,t+.0015)-g(e,t-.0015))/(2*.0015)*.01,A=H(k,p,1),f=Math.max(0,j(A,_t)),b=.55+.45*A[1],F=.45+.55*m(.15,.65,E),w=.85+.15*K(e*900,t*900)+(x(Math.floor(e*1500),Math.floor(t*1500))>.93?.18:0),C=D(1,.55,m(c-.004,c-.09,t))*F*w;M=(.07*b+.3*f)*C,u=(.066*b+.31*f)*C,i=(.088*b+.4*f)*C;const U=m(.012,0,c-t)*.55+m(.004,0,c-t)*.4;M+=.55*U,u+=.6*U,i+=.82*U;const V=m(.012,0,t-tt)*(.5+.5*X(e*300));M=M*(1-.3*V)+.08*V*f,u=u*(1-.3*V)+.1*V*f,i=i*(1-.3*V)+.14*V*f}const d=(t-pt)/1.4,v=($-e)/1.4;let h=null;if(d>-.012&&d<.1&&v>-.045&&v<.06){const g=D(.0085,.0058,T(d/.07,0,1));if(d<.07&&Math.abs(v)<g){const p=.75+.7*m(g,-g,v);h=N(d*42)>=.5?[.3*p,.07*p,.07*p]:[.38*p,.37*p,.42*p]}d>.068&&d<.072&&Math.abs(v)<.0095&&(h=[.12,.1,.11]),d>.072&&d<.084&&Math.abs(v)<.0052&&(h=[1.5,1.2,.8]),d>.084&&d<.092&&Math.abs(v)<.0065-(d-.084)*.8&&(h=[.16,.1,.09]);const y=.009,E=.046,k=.022;if(v>y&&v<E&&d<k&&d>-.012){const p=m(E,y,v);h=[.13+.12*p,.12+.12*p,.15+.16*p];const A=Math.abs(v-.028),f=Math.abs(d-.009);if(A<.0055&&f<.0045)h=A<8e-4||f<6e-4?[.3,.18,.08]:[1.35,.9,.42];else{const b=Math.exp(-Math.hypot(A,f)*160)*.5;h=[h[0]+b,h[1]+b*.62,h[2]+b*.25]}}if(v>y-.003&&v<E+.003&&d>=k&&d<k+.013-Math.abs(v-(y+E)/2)*.6){const p=m(k+.004,k+.012-Math.abs(v-(y+E)/2)*.6,d);h=[.1+.25*p,.07+.25*p,.08+.32*p]}h&&([M,u,i]=h,l=1)}return[M,u,i,l]}const o={x0:-6,x1:6,y0:-.8,y1:18.2},rt=e=>Math.round(T(Math.pow(T(e,0,1.6)/1.6,1/2.2),0,1)*255),Ft=(e,t)=>{const n=.3*e[0]+.59*e[1]+.11*e[2],c=m(.02,.5,n),l=[D(.93,1.05,c),D(.95,1,c),D(1.07,.93,c)][t];return Math.round(T(Math.pow(1-Math.exp(-1.7*e[t]*l*.97),.96),0,1)*255)};function S(e,t,n,c){const l=n.mon=new Uint8Array(e.w*e.h*4),M=n.ov=new Uint8ClampedArray(e.w*e.h*4),u=n.cape=new Uint8Array(t.w*t.h*4),i=(e.x1-e.x0)/e.w,d=(t.u1-t.u0)/t.w,v=[];for(let h=0;h<e.h;h+=c)v.push(()=>{for(let g=h;g<Math.min(e.h,h+c);g++){const y=e.y0+(g+.5)/e.h*(e.y1-e.y0);for(let E=0;E<e.w;E++){const k=e.x0+(E+.5)/e.w*(e.x1-e.x0);let p=z(k,y);if(p>2.5*i)continue;let A=k,f=y;if(p>-.3*i){const U=i*.5,V=z(k+U,y)-z(k-U,y),Z=z(k,y+U)-z(k,y-U),G=Math.hypot(V,Z)||1,_=Math.max(p,0)+.6*i;A=k-V/G*_,f=y-Z/G*_}const b=bt(A,f),F=(g*e.w+E)*4,w=((e.h-1-g)*e.w+E)*4,C=T(.5-p/i,0,1);C>0&&(l[F]=rt(b[0]),l[F+1]=rt(b[1]),l[F+2]=rt(b[2]),l[F+3]=Math.round(C*255)),M[w]=Ft(b,0),M[w+1]=Ft(b,1),M[w+2]=Ft(b,2),M[w+3]=Math.round(T(.5-(p-1.6*i)/i,0,1)*255)}}});for(let h=0;h<t.h;h+=c)v.push(()=>{for(let g=h;g<Math.min(t.h,h+c);g++){const y=t.y0+(g+.5)/t.h*(t.y1-t.y0);for(let E=0;E<t.w;E++){const k=t.u0+(E+.5)/t.w*(t.u1-t.u0),p=Ht(k,y,d),A=(g*t.w+E)*4;p[3]<=0||(u[A]=rt(p[0]),u[A+1]=rt(p[1]),u[A+2]=rt(p[2]),u[A+3]=Math.round(p[3]*255))}}});return Object.assign(n,{M:e,Cp:t,lampY:pt+.083*1.4,lampU:$}),v}function L(e,t){t=t||{};const n=Math.round(T(t.mw||320,160,520)/2)*2,c=Math.round(T(t.cw||512,256,768)),l=Object.assign({w:n,h:Math.round(n*(o.y1-o.y0)/(o.x1-o.x0))},o),M={w:c,h:Math.round(c*.45),u0:-.04,u1:.56,y0:tt-.01,y1:tt+.26},u=Object.assign({},l,{w:Math.round(n/4),h:Math.round(l.h/4)}),i=Object.assign({},M,{w:Math.round(c/4),h:Math.round(M.h/4)}),d={},v={},h=S(u,i,d,8),g=S(l,M,v,6),y=window.requestIdleCallback?k=>requestIdleCallback(k,{timeout:120}):k=>setTimeout(()=>k(null),16),E=(k,p,A)=>{const f=b=>{const F=performance.now(),w=b&&!b.didTimeout?T(b.timeRemaining(),6,12):10;for(;k.length&&performance.now()-F<w;)k.shift()();k.length?A?setTimeout(f,0):y(f):p()};A?setTimeout(f,0):y(f)};E(h,()=>{d.coarse=!0,(t.coarse||e)(d),E(g,()=>e(v))},!0)}window.SCENE={bake:L,MON:o}})(),function(){const N=document.getElementById("gl"),T=Object.assign({bx:.415,by:-.27,ms:.034,ck:.32},window.SCENE?SCENE.MON:{x0:-6,x1:6,y0:-.8,y1:18.2}),m=S=>(Math.round(S*1e6)/1e6).toFixed(6),D=/monchk/.test(location.hash);function W(S){S=S||x;const L=it(),e=z(),t=ct(),n=Math.min(L,e),c=1+S.zm*.06,l=T.ms*S.msk,M=T.bx-S.cam*T.ck+S.mox+T.x0*l,u=T.by+T.y1*l-(S.pary*.012-S.sy*.09-S.lift);return{x:L/2+M*c*n,y:t+e/2-u*c*n,k:c,m:n,w0:(T.x1-T.x0)*l*n,h0:(T.y1-T.y0)*l*n}}const x={scr:0,ly:0,lift:0,heart:1,cool:0,fill:0,burst:0,cam:0,par:0,tint:0,streak:0,beat:0,hy:0,hs:1,mx:0,my:0,mo:0,zm:0,lk:0,lp:0,pary:0,rx:0,ry:0,rp:1,fw:0,sy:0,lv:3,mox:0,msk:1,hx:0,cpx:0,wm:1},X=Object.assign({},x),K=matchMedia("(prefers-reduced-motion: reduce)").matches,R={ok:!1,rm:K,set(S){Object.assign(X,S)},jump(S){Object.assign(X,S),Object.assign(x,S)},state:x,target:X};window.GL=R;let Y=0,et=0,ut=0,nt=null,vt=null,dt=0;function kt(S){try{const L=document.createElement("div");L.style.cssText="position:fixed;left:0;bottom:0;width:0;height:100"+S+";visibility:hidden;pointer-events:none",document.documentElement.appendChild(L);const e=L.getBoundingClientRect().height;return L.remove(),e||0}catch{return 0}}function Vt(){const S=Math.max(1,document.documentElement.clientWidth||innerWidth),L=window.visualViewport;if(L&&L.height>0&&(L.scale||1)<=1.01)return{w:Math.max(1,Math.round(L.width||S)),h:Math.max(1,Math.round(L.height)),top:Math.round(L.offsetTop||0)};const e=kt("svh"),t=kt("lvh"),n=kt("dvh"),c=e&&t&&t-e>=24?e:n||e||innerHeight;return{w:Math.max(1,Math.round(S)),h:Math.max(1,Math.round(c)),top:0}}function ht(S){const L=Vt(),e=Y&&Y>et!=L.w>L.h,t=Y&&Math.abs(L.w-Y)>2;return!et||S||t||e||Math.abs(L.h-et)>1||Math.abs(L.top-ut)>1?(Y=L.w,et=L.h,ut=L.top,document.documentElement.style.setProperty("--app-h",et+"px"),document.documentElement.style.setProperty("--app-top",ut+"px")):Y=L.w,{w:Y,h:et,top:ut}}const it=()=>Y||document.documentElement.clientWidth||innerWidth,z=()=>et||innerHeight,ct=()=>ut;R.view=()=>({w:it(),h:z(),top:ct()}),ht(!0);const Mt=(navigator.hardwareConcurrency||4)<=4||(navigator.deviceMemory||4)<=3,gt=[{s:.42,q:.5},{s:.55,q:.65},{s:.7,q:.8},{s:.85,q:1},{s:1,q:1}],Rt=/lv=([0-4])/.exec(location.hash);let q=1;const Q=()=>Math.min(1,.42/(gt[0].s*Math.max(1,mt/it())));let H=Rt?+Rt[1]:Mt?2:3,j=gt[H].s,St=gt[H].q,bt=!1,mt=0,tt=0,J=1,$=1;x.lv=X.lv=H,K&&(x.wm=X.wm=0),document.documentElement.classList.toggle("lq",H<2);function pt(){J=Math.max(1,Math.round(mt*j*q)),$=Math.max(1,Math.round(tt*j*q)),o&&o.viewport(0,0,J,$),N.style.transform=J<mt||$<tt?`scale(${(mt/J).toFixed(5)},${(tt/$).toFixed(5)})`:"",bt=!1}function _t(){et||ht(!0);const S=Math.min(window.devicePixelRatio||1,2);let L=it()*S,e=z()*S;const t=Math.min(1,1400/Math.max(L,e)),n=Math.round(L*t),c=Math.round(e*t);N.width!==n||N.height!==c?(mt=n,tt=c,N.width=mt,N.height=tt,nt=null,vt=null,dt=0):(mt=n,tt=c),pt()}function Ht(){const S=Y,L=et;ht(!1),(Y!==S||et!==L)&&_t()}let o;const rt=!!window.WebGLRenderingContext&&!/nogl/.test(location.hash);R.ok=rt,rt?document.documentElement.classList.add("gl"):document.documentElement.classList.add("no-gl"),rt&&requestAnimationFrame(()=>setTimeout(Ft,0));function Ft(){_t();try{o=N.getContext("webgl",{antialias:!1,alpha:!0,premultipliedAlpha:!0,powerPreference:"high-performance",preserveDrawingBuffer:!1})}catch{}if(!o){R.ok=!1,document.documentElement.classList.remove("gl"),document.documentElement.classList.add("no-gl"),requestAnimationFrame(()=>document.documentElement.classList.add("gl-ready"));return}xt();const S="attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}",L=`
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
const vec2 MB0=vec2(${m(T.bx)},${m(T.by)}); const float MS=${m(T.ms)}; // v19: памятник — главный герой, ≈25% высоты экрана; v20: на интро правее — снежинка его не касается
vec2 monB(){return vec2(MB0.x-cam*${m(T.ck)}+mox,MB0.y);}
vec4 monT(vec2 p){ vec2 c=(p-vec2(${m(T.x0)},${m(T.y0)}))/vec2(${m(T.x1-T.x0)},${m(T.y1-T.y0)}); if(c.x<0.||c.x>1.||c.y<0.||c.y>1.) return vec4(0.); return dec(texture2D(TM,c)); }
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
    if(abs(p.x)<${m(T.x1)} && p.y<${m(T.y1)} && p.y>-11.){
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
    if(burst>=.999 || (burst<.01 && fill<.02) || (burst<.01 && length(uv-vec2(hx,hy))>hs*1.932/(3.2-.92*hs)+.26)) np=-1.; // v30: в покое пыль не считаем
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
}`,e=document.documentElement;let t=/Apple/.test(navigator.vendor||"")?null:o.getExtension("KHR_parallel_shader_compile");function n(a,s){const r=o.createShader(a);return o.shaderSource(r,s),o.compileShader(r),r}let c,l,M,u=!1;R.ok=!0,e.classList.add("gl");function i(){l&&!o.getShaderParameter(l,o.COMPILE_STATUS)&&console.warn(o.getShaderInfoLog(l)),R.ok=!1,e.classList.remove("gl"),e.classList.add("no-gl"),requestAnimationFrame(()=>e.classList.add("gl-ready"))}const d={},v={f:`#define HEART
#define FW
`,h:`#define HEART
`,b:"",hl:`#define HEART
#define NOMARCH
`,fl:`#define HEART
#define FW
#define NOMARCH
`},h={};let g=null;function y(a){const s=n(o.VERTEX_SHADER,S),r=n(o.FRAGMENT_SHADER,(D?`#define MONCHK
`:"")+v[a]+L),P=o.createProgram();return o.attachShader(P,s),o.attachShader(P,r),o.bindAttribLocation(P,0,"p"),o.linkProgram(P),h[a]={P,f:r,U:null,ok:!1}}function E(a){o.useProgram(a.P),a.U={},["R","t","q",...Object.keys(x)].forEach(s=>a.U[s]=o.getUniformLocation(a.P,s)),o.uniform1i(o.getUniformLocation(a.P,"TM"),0),o.uniform1i(o.getUniformLocation(a.P,"TC"),1),a.ok=!0,g=a}const k=["hl","h","b","fl"];let p=0;function A(a,s){if(!u&&(p=1,a.forEach(r=>h[r]||y(r)),!t&&s)){const r=()=>{if(x.beat>.5)return setTimeout(r,500);f(!0)};setTimeout(r,s)}}function f(a){if(!(!p||u))for(const s of k){const r=h[s];if(!(!r||r.ok||r.bad)){if(t&&!a){if(o.getProgramParameter(r.P,t.COMPLETION_STATUS_KHR)!==!0)continue}else if(!a)continue;o.getProgramParameter(r.P,o.LINK_STATUS)?E(r):r.bad=!0}}}const b=/fullprog/.test(location.hash),F=a=>h[a]&&h[a].ok?h[a]:null;function w(a){a!==g&&(o.useProgram(a.P),g=a);const s=a.U;o.uniform2f(s.R,J,$),o.uniform1f(s.t,qt),o.uniform1f(s.q,St);for(const r in x)o.uniform1f(s[r],x[r])}function C(){const a=Math.sqrt(1.5)*x.hs,s=a<3.2?2.1*Math.tan(Math.asin(a/3.2)):99,r=.755/1.52*x.hs,P=r*(1.03+.28*x.fill+.2*x.beat),I=x.burst>.01?x.hs*1.932/(3.2-.92*x.hs)+.26:0,B=x.burst>.01?Math.max(s,I):Math.min(s,Math.max(P,I)),O=1+x.zm*.06,ft=Math.min(J,$),Bt=.065+.05*x.fill+.08*Math.max(0,x.burst),Ot=x.pary*.012-x.sy*.09-x.lift,Ct=.5*J+x.hx*O*ft,Lt=.5*$+(x.hy-Ot)*O*ft,yt=(B+Bt)*O*ft+2,Et=Math.max(0,Math.floor(Ct-yt)),Tt=Math.max(0,Math.floor(Lt-yt)),Pt=Math.min(J,Math.ceil(Ct+yt)),ne=Math.min($,Math.ceil(Lt+yt));return Pt>Et&&ne>Tt?[Et,Tt,Pt-Et,ne-Tt]:null}let U=null;function V(){if(U||!o)return U;const a="attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}",s="precision mediump float;uniform sampler2D u;uniform vec2 B,S;void main(){gl_FragColor=texture2D(u,(gl_FragCoord.xy-B)/S);}",r=o.createProgram(),P=(I,B)=>{const O=o.createShader(I);o.shaderSource(O,B),o.compileShader(O),o.attachShader(r,O)};return P(o.VERTEX_SHADER,a),P(o.FRAGMENT_SHADER,s),o.linkProgram(r),o.getProgramParameter(r,o.LINK_STATUS)?(U={P:r,U:{u:o.getUniformLocation(r,"u"),B:o.getUniformLocation(r,"B"),S:o.getUniformLocation(r,"S")}},U):(U={bad:!0},U)}function Z(a){!o||!a||a[2]<2||a[3]<2||(nt||(nt=o.createTexture()),o.activeTexture(o.TEXTURE2),o.bindTexture(o.TEXTURE_2D,nt),o.copyTexImage2D(o.TEXTURE_2D,0,o.RGBA,a[0],a[1],a[2],a[3],0),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAG_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),vt=a.slice())}function G(a){const s=V();return!s||s.bad||!nt?!1:(o.useProgram(s.P),g=null,o.activeTexture(o.TEXTURE2),o.bindTexture(o.TEXTURE_2D,nt),o.uniform1i(s.U.u,2),o.uniform2f(s.U.B,a[0],a[1]),o.uniform2f(s.U.S,a[2],a[3]),o.enable(o.SCISSOR_TEST),o.scissor(a[0],a[1],a[2],a[3]),o.drawArrays(o.TRIANGLES,0,3),o.disable(o.SCISSOR_TEST),!0)}let _="f";function ot(a){const s=a||b||x.fw>.01?"f":x.heart>.01?"h":"b";if(!t&&p&&!a){const O=s==="b"?h.b:h[s+"l"];O&&!O.ok&&!O.bad&&f(!0)}if(s==="b"){const O=F("b")||F("hl");if(O)return w(O),_=O===h.b?"b":"hl",o.drawArrays(o.TRIANGLES,0,3)}const r=s!=="b"&&!a&&!b?F(s+"l"):null,P=F(s)||h.f;if(!r)return w(P),_=P===h.f?"f":s,o.drawArrays(o.TRIANGLES,0,3);w(r),o.drawArrays(o.TRIANGLES,0,3);const I=C();_=s+"l+"+(P===h.f?"f":s);const B=x.heart>.01&&x.fill<.02&&x.burst<.01&&x.fw<.01&&x.lk<.01&&Math.abs(x.zm)<.02&&x.rp>.98;if(!B)dt=0,vt=null;else if(vt&&nt&&dt++&1&&G(vt)){_+="+cache";return}I&&(o.enable(o.SCISSOR_TEST),o.scissor(I[0],I[1],I[2],I[3]),w(P),o.drawArrays(o.TRIANGLES,0,3),o.disable(o.SCISSOR_TEST),B&&Z(I))}R.prog=()=>_,R.pstat=()=>({extra:p,par:!!t,p:Object.keys(h).map(a=>a+":"+(h[a].ok?"ok":h[a].bad?"bad":"wait")).join(" "),box:C()}),R.snap=a=>{ot(a);const s=new Uint8Array(J*$*4);return o.readPixels(0,0,J,$,o.RGBA,o.UNSIGNED_BYTE,s),s};function lt(){if(u)return;if(!o.getProgramParameter(M,o.LINK_STATUS))return i();const a=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,a),o.bufferData(o.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),o.STATIC_DRAW),o.enableVertexAttribArray(0),o.vertexAttribPointer(0,2,o.FLOAT,!1,0,0),E(h.f),Object.assign(d,h.f.U),xt(),R.scene&&$t(),pt(),Kt=!0,wt||(wt=!0,At=performance.now(),requestAnimationFrame(zt)),t?setTimeout(()=>{A(["hl","h"],0),setTimeout(()=>A(["b","fl"],0),600)},300):(["hl","h"].forEach(s=>h[s]||y(s)),p=1,f(!0),setTimeout(()=>A(["b","fl"],0),1200))}function xt(){if(R.baking||!window.SCENE)return;R.baking=!0;const a=Math.min(it(),z()),s=Math.min(window.devicePixelRatio||1,2),r=P=>{R.scene=P,ce(P),Kt&&!u&&o&&$t()};SCENE.bake(r,{mw:12*.034*a*s,cw:.6*1.35*a*s,coarse:r})}let It=[];function $t(){const a=R.scene;It.forEach(s=>o.deleteTexture(s)),It=[],[[a.mon,a.M],[a.cape,a.Cp]].forEach(([s,r],P)=>{const I=o.createTexture();It.push(I),o.activeTexture(o.TEXTURE0+P),o.bindTexture(o.TEXTURE_2D,I),o.texImage2D(o.TEXTURE_2D,0,o.RGBA,r.w,r.h,0,o.RGBA,o.UNSIGNED_BYTE,s),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAG_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}),R.jump({ly:a.lampY}),R.set({scr:1}),window.__emblem&&!R._fitLy&&(R._fitLy=!0,window.__emblem())}const st=document.createElement("canvas");st.id="monx",st.setAttribute("aria-hidden","true"),N.parentNode.insertBefore(st,N);let Nt=!1,Yt=!1,Jt=0;function ce(a){!a.ov||D||(st.width=a.M.w,st.height=a.M.h,st.getContext("2d").putImageData(new ImageData(a.ov,a.M.w,a.M.h),0,0),Yt=!0)}function se(){const a=(1-Math.min(1,Math.max(0,(x.cam-1.3)/.7))**2*(3-2*Math.min(1,Math.max(0,(x.cam-1.3)/.7))))*x.scr,s=Yt&&!u&&a>.004;if(s!==Nt&&(Nt=s,st.style.display=s?"block":"none"),!s)return;const r=W(),P=r.w0.toFixed(2);P!==Jt&&(Jt=P,st.style.width=r.w0.toFixed(2)+"px",st.style.height=r.h0.toFixed(2)+"px"),st.style.transform=`translate3d(${r.x.toFixed(2)}px,${r.y.toFixed(2)}px,0) scale(${r.k.toFixed(5)})`}function Qt(){for(const s in h)delete h[s];p=0,g=null;const a=y("f");if(M=a.P,l=a.f,t||(p=1,y("hl"),y("h")),t){const s=()=>{if(u)return;const r=o.getProgramParameter(M,t.COMPLETION_STATUS_KHR);typeof r!="boolean"?(t=null,lt()):r?lt():requestAnimationFrame(s)};requestAnimationFrame(s)}else requestAnimationFrame(()=>setTimeout(lt,0))}Qt(),N.addEventListener("webglcontextlost",a=>{a.preventDefault(),u=!0,Nt=!1,st.style.display="none",It=[],nt=null,vt=null,U=null,dt=0,wt=!1,R.ok=!1,e.classList.remove("gl"),e.classList.add("no-gl")},!1),N.addEventListener("webglcontextrestored",()=>{u=!1,R.ok=!0,e.classList.remove("no-gl"),e.classList.add("gl"),pt(),Qt()},!1);function te(a,s){a=Math.max(0,Math.min(4,a)),a!==H&&(H=a,X.lv=a,document.documentElement.classList.toggle("lq",a<2),j=gt[a].s,St=gt[a].q,bt=!0,s&&pt())}R.pulse=()=>{bt&&pt(),t||f(!0)};let Dt=60;const at=[];R.quality=()=>({level:H,ex:+q.toFixed(2),fps:Math.round(Dt),scale:+j.toFixed(2),q:St,w:J,h:$,pending:bt}),Object.defineProperty(R,"level",{get:()=>H}),addEventListener("resize",Ht),addEventListener("orientationchange",()=>{ht(!0),_t()}),window.visualViewport&&(visualViewport.addEventListener("resize",Ht),visualViewport.addEventListener("scroll",Ht)),addEventListener("pointermove",a=>{X.par=(a.clientX/innerWidth-.5)*2},{passive:!0}),addEventListener("pointermove",a=>{X.pary=(a.clientY/innerHeight-.5)*2},{passive:!0}),addEventListener("deviceorientation",a=>{a.gamma!=null&&(X.par=Math.max(-1,Math.min(1,a.gamma/30))),a.beta!=null&&(X.pary=Math.max(-1,Math.min(1,(a.beta-45)/35)))},{passive:!0});let Xt=0,At=0,qt=0;const ie={streak:9,burst:2.2,zm:3.2,lk:6,fw:1.6,lv:1.2};function zt(a){if(u){wt=!1;return}Xt||(Xt=At=a);const s=Math.min(.05,(a-At)/1e3);At=a,qt+=s*(K?.25:1);for(const r in X)x[r]+=(X[r]-x[r])*Math.min(1,s*(ie[r]||2.6));t&&f(!1),R.t=qt,se(),ot(!1),R.ready||(R.ready=!0,requestAnimationFrame(()=>document.documentElement.classList.add("gl-ready"))),re(a),document.hidden?wt=!1:requestAnimationFrame(zt)}let Wt=0,jt=0,Ut=0,Zt=0,ee=-1e9,Gt=1e4,oe=0,ae=0;function re(a){const s=a-ae;if(ae=a,Rt||(jt||(jt=a+700),a<jt)||a<oe||s<=0||s>4e3)return;if(at.push(s),at.length>90&&at.shift(),!Wt){Wt=a+1e3,at.length=0;return}if(a<Wt||at.length<4)return;const r=a-Xt<3200;Wt=a+(r?600:2e3);const P=at.slice().sort((O,ft)=>O-ft),I=P[P.length>>1];Dt=1e3/(at.reduce((O,ft)=>O+ft,0)/at.length);const B=Math.min(Dt,1e3/I);B<(r?50:46)&&H===0&&q>Q()+.01?(q=Math.max(Q(),q*(B<25?.64:.8)),pt(),Zt=a,Ut=0,at.length=0):B<(r?50:46)?(te(r?H-(B<25?2:1):B<15?0:H-(B<30?2:1),B<35),a-ee<15e3&&(Gt=Math.min(Gt*2,8e4)),Zt=a,Ut=0,at.length=0):1e3/I>=56&&Dt>=50&&a-Zt>Gt?++Ut>=3&&(q<1?(q=Math.min(1,q/.8),bt=!0):te(H+1,!1),ee=a,Ut=0,at.length=0):Ut=0}let wt=!1,Kt=!1;document.addEventListener("visibilitychange",()=>{Kt&&!document.hidden&&!wt&&(wt=!0,At=performance.now(),oe=At+600,at.length=0,requestAnimationFrame(zt))}),R.monRect=W,R.MP=T,R.flakeProj=function(a){a=a||x;const s=it(),r=z(),P=ct(),I=Math.min(s,r),B=1+a.zm*.06,O=a.pary*.012-a.sy*.09-a.lift;return{cx:s/2+(a.hx||0)*B*I,cy:P+r/2-((a.hy||0)-O)*B*I,R:.894/1.52*(a.hs||0)*B*I,hx:a.hx,hy:a.hy,hs:a.hs}},R.lightRect=function(a){a=a||x;const s=it(),r=z(),P=ct(),I=Math.min(s,r),B=1+a.zm*.06,O=a.pary*.012-a.sy*.09-a.lift,ft=-.2,Bt=ft-.03,Ot=ft-.045,Ct=1.35,Lt=-.12-a.cam*.15+a.cpx-.125*Ct,yt=Ot+((a.ly||Bt+.12)-Bt)*Ct,Et=Pt=>s/2+Pt*B*I,Tt=Pt=>P+r/2-(Pt-O)*B*I;return{x0:Et(Lt-.022),x1:Et(Lt+.07),y0:Tt(yt+.035),y1:Tt(Ot-.005),lamp:[Et(Lt),Tt(yt)]}},R.uv=(a,s)=>{const r=it(),P=z(),I=ct(),B=Math.min(r,P);return[(a-r/2)/B,(P/2-(s-I))/B]}}}();
