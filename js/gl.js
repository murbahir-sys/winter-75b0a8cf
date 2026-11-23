(function(){const O=e=>e-Math.floor(e),k=(e,t,n)=>e<t?t:e>n?n:e,p=(e,t,n)=>{const c=k((n-e)/(t-e),0,1);return c*c*(3-2*c)},U=(e,t,n)=>e+(t-e)*n,C=e=>O(Math.sin(e*127.1)*43758.5453),g=(e,t)=>{e=O(e*123.34),t=O(t*456.21);const n=e*(e+45.32)+t*(t+45.32);return e+=n,t+=n,O(e*t)},N=e=>{const t=Math.floor(e);let n=e-t;return n=n*n*(3-2*n),U(C(t),C(t+1),n)},Y=(e,t)=>{const n=Math.floor(e),c=Math.floor(t);let r=e-n,h=t-c;return r=r*r*(3-2*r),h=h*h*(3-2*h),U(U(g(n,c),g(n+1,c),r),U(g(n,c+1),g(n+1,c+1),r),h)},E=(e,t,n,c,r,h)=>{const v=Math.abs(e-n)-r,s=Math.abs(t-c)-h;return Math.hypot(Math.max(v,0),Math.max(s,0))+Math.min(Math.max(v,s),0)},tt=(e,t)=>t<0?U(4.85,1.45,p(.4,8.4,e)):U(4.6,1.1,p(0,7.6,e)),ot=e=>(e<0?7.1:6.4)-.5*N(e*1.7+3);function pt(e,t){const n=e<0?-1:1,c=.45*N(t*1.3+n*7)+.25*N(t*3.7+n*3)-.3;return Math.max(Math.abs(e)-tt(t,n)-c,Math.max(-t-.6,t-ot(e)))}const st=[];(function(){let e=-1,t=0;for(;e<8.4;){const n=U(1.5,.62,p(-.5,7.5,e))*(.85+.3*C(t*3.1+.7)),c=e+n*.5,r=[];let h=-tt(c,-1)-.7-C(t*7.7)*.6*n,v=0;for(;h<tt(c,1)+.7;){const s=C(t*17.3+v*7.9+.31),f=n*(.95+1*C(t*13.1+v*2.3)),u=h+f*.5,M=c+(C(t*5.3+v*1.7)-.5)*n*.4;if(pt(u,M)<-.05*n){const w=f*.62,A=n*.66*(.85+.3*C(v*4.1+t)),T=5+Math.floor(C(s*13.7)*4),d=C(s*5.1)*6.283,x=[(C(s*31)-.5)*.35*w,(.15+(C(s*57)-.5)*.3)*A],R=.42+.25*C(s*91),m=[],b=[];for(let y=0;y<T;y++){const S=d+6.2832*(y+.55*(C(s*7.3+y*1.91)-.5))/T,H=.86+.26*C(s*3.9+y*2.37),I=Math.cos(S)*w*H,j=Math.sin(S)*A*H;m.push([I,j])}m.forEach(y=>b.push(Math.atan2(y[1]-x[1],y[0]-x[0])));const _=[];for(let y=0;y<T;y++){const S=m[y],H=m[(y+1)%T],I=H[0]-S[0],j=H[1]-S[1],K=Math.hypot(I,j)||1,P=j/K,rt=-I/K,xt=Math.abs((x[0]-S[0])*P+(x[1]-S[1])*rt),yt=(.55+1.7*C(s*11.1+y*3.7))*.45*Math.min(w,A)/Math.max(.05,(1-R)*xt);_.push({ox:P,oy:rt,el:K,sl:yt,j:(C(s*19+y)-.5)*.25})}r.push({cx:u,cy:M,rx:w,ry:A,V:m,A:b,F:_,P:x,kin:R,n:T,s,z:-M+(C(t*4.4+v)-.5)*.7*n,fx:(C(s*41)-.5)*.5,fy:.25+(C(s*67)-.5)*.5,rust:s>.91})}h+=f*(.62+.14*C(t+v*9.9)),v++}st.push({lo:e-n*.5,hi:e+n*1.5,st:r}),e+=n*.64,t++}})();function vt(e,t,n){const c=t-e.cx-e.P[0],r=n-e.cy-e.P[1];let h=Math.atan2(r,c),v=0;for(let x=0;x<e.n;x++){const R=e.A[x],m=e.A[(x+1)%e.n];let b=h-R,_=m-R;if(b-=Math.floor(b/6.2832)*6.2832,_-=Math.floor(_/6.2832)*6.2832,b<=_){v=x;break}}const s=e.V[v],f=e.V[(v+1)%e.n],u=e.F[v],M=t-e.cx,w=n-e.cy,A=-((M-s[0])*u.ox+(w-s[1])*u.oy),T=[e.P[0]+(s[0]-e.P[0])*e.kin,e.P[1]+(s[1]-e.P[1])*e.kin],d=-((M-T[0])*u.ox+(w-T[1])*u.oy);return[A,d>0?-1:v,d]}function dt(e,t,n){let c=9,r=null,h=-1e9,v=null;for(const s of st)if(!(t<s.lo||t>s.hi))for(const f of s.st){if(Math.abs(e-f.cx)>f.rx*1.3||Math.abs(t-f.cy)>f.ry*1.3)continue;const u=vt(f,e,t);-u[0]<c&&(c=-u[0]),n&&u[0]>0&&f.z>h&&(h=f.z,r=f,v=u)}return n?[c,r,v]:c}function At(e,t){return t<-.6?Math.max(dt(e,t),-t-.6):Math.min(dt(e,t),pt(e,t)+.35)}function Nt(e,t){const[,n,c]=dt(e,t,!0),r=(.4+.6*p(-.4,3,t))*(1-.45*p(5,8.5,t))*(1-.3*p(2.5,5,Math.abs(e))),h=.82+.18*Y(e*23,t*23)+(g(Math.floor(e*50),Math.floor(t*50))>.92?.2:0)-(g(Math.floor(e*50)+7,Math.floor(t*50)+3)>.9?.16:0);if(!n){const P=.5+.5*Y(e*3,t*3);return[.03*P+.035*r,.025*P+.022*r,.026*P+.01*r]}const[v,s,f]=c;let u,M=0;if(s<0)u=D(n.fx,n.fy,1),M=p(.035,0,f);else{const P=n.F[s];u=D(P.ox*P.sl+P.j,P.oy*P.sl+P.j*.5,1),M=p(.035,0,-f)*.6}u=D(u[0]+(Y(e*9+n.s*9,t*9)-.5)*.12,u[1]+(Y(e*9+4,t*9+n.s*7)-.5)*.12,u[2]);const w=.5+.5*u[1],A=Math.max(0,q(u,V))*r,T=Math.max(0,q(u,Q)),d=U(.72,1,p(0,.18,v))*(s>=0&&n.F[s].oy<-.5?.82:1),x=Math.abs(e),R=t>4&&t<8.4?U(.6,1,p(0,.6,x-ht(Math.min(t,8.3)))):1;let m=n.rust?[.56,.44,.36]:[.47,.45,.44];const b=.62+.5*C(n.s*77);m=m.map(P=>P*b);const _=p(1.1,.15,t);m=m.map(P=>P*(1-.55*_));const y=.7*p(.6,0,t)*p(.35,.7,Y(e*3.5,t*8));m=[U(m[0],.1,y),U(m[1],.14,y),U(m[2],.08,y)];const S=d*h*R*(1+.22*M);let H=m[0]*(.02+.08*w+.6*A+.14*T)*S,I=m[1]*(.02+.08*w+.39*A+.17*T)*S,j=m[2]*(.025+.11*w+.19*A+.27*T)*S;const K=_*Math.pow(Math.max(0,q(u,D(V[0],V[1],V[2]+1))),24)*r;return H+=.5*K,I+=.35*K,j+=.2*K,[H,I,j]}const ht=e=>e<5.7?1.85-.12*p(5.45,5.7,e):e<7.85?1.15:e<8.05?1.22:e<8.3?1.36:1.25;function G(e){const t=k((e-14.2)/1.25,0,1);let n=U(.44,.66,t*t);return n+=.05*Math.max(0,Math.sin((e-14.2)*9)),n}function W(e,t){const n=Math.abs(e);let c=At(e,t);return t>4.2&&t<8.4&&(c=Math.min(c,Math.max(n-ht(t),Math.max(4.4-t,t-8.4)))),c=Math.min(c,Math.max(n-U(.62,.5,p(8.4,8.8,t))-.04*Math.sin((t-8.4)*15.7),Math.max(8.35-t,t-8.82))),c=Math.min(c,E(e,t,0,11.5,U(.47,.42,k((t-8.8)/5.5,0,1)),2.72)),c=Math.min(c,Math.max(n-G(t),Math.max(14.2-t,t-15.45))),c=Math.min(c,Math.hypot(n-.62,t-15.32)-.11),c=Math.min(c,Math.max(n-.76,Math.abs(t-15.53)-.08)),t>15.55&&(c=Math.min(c,mt(e/it,gt+(t-gt)/it)*it)),c}const it=1.3,gt=15.61;function mt(e,t){const n=Math.abs(e);let c=9;const r=.35;c=Math.min(c,Math.hypot(e,(t-16.05-r)/2.1)-.2),c=Math.min(c,Math.max(n-.16+(t-15.7-r)*.2,Math.abs(t-15.82-r)-.1)),c=Math.min(c,Math.hypot(n-.17,t-16.64-r)-.1),c=Math.min(c,Math.max(Math.abs(t-16.6-r+(n-.24)*.3)-.035,Math.abs(n-.29)-.06)),c=Math.min(c,E(n,t,0,16.6+r,.06,.1)),c=Math.min(c,Math.max(n-.12+(t-16.78-r)*.3,Math.abs(t-16.88-r)-.11)),c=Math.min(c,Math.hypot(e,t-17-r)-.04);const h=16.12+r+n*.22+p(.4,.5,O(n*5+.2))*.08*p(.75,1.05,n),v=16.48+r+n*.3-.16*p(.95,1.32,n);return c=Math.min(c,Math.max(Math.max(n-1.32,t-v),h-t)),c=Math.min(c,_t(e,t)),c}function _t(e,t){const n=Math.hypot(e,t-15.98);let c=Math.abs(n-.3)-.06-.025*Math.sin(Math.atan2(t-15.98,e)*14);return c=Math.min(c,E(e,t,0,16.17,.012,.1)),c=Math.min(c,E(e,t,0,15.93,.025,.17),E(e,t,0,16.05,.1,.018)),c=Math.min(c,Math.max(Math.abs(Math.hypot(e,t-15.86)-.14)-.022,t-15.82)),c}const V=(()=>{const e=[.38,-.5,.78],t=Math.hypot(...e);return e.map(n=>n/t)})(),Q=(()=>{const e=[-.72,.5,.48],t=Math.hypot(...e);return e.map(n=>n/t)})(),D=(e,t,n)=>{const c=Math.hypot(e,t,n)||1;return[e/c,t/c,n/c]},q=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2];function It(e,t,n,c){const r=Math.max(0,q(e,V)),h=Math.max(0,q(e,Q)),v=Math.pow(Math.max(0,q(e,D(V[0],V[1],V[2]+1))),14),s=Math.pow(Math.max(0,q(e,D(Q[0],Q[1],Q[2]+1))),10),f=c*(1-.45*p(8.5,17,n));return[.035+.16*r*f+.04*h+.9*v*f+.22*s,.026+.1*r*f+.05*h+.6*v*f+.27*s,.018+.04*r*f+.07*h+.3*v*f+.36*s]}function Xt(e,t){const c=W(e,t),r=(W(e+.03,t)-W(e-.03,t))/(2*.03),h=(W(e,t+.03)-W(e,t-.03))/(2*.03),v=p(t<8.4?-.04:-.1,0,c);let s=D(r*v*1.6,h*v*1.6,1);const f=Math.abs(e);let u,M,w;const A=t>gt,T=A?e/it:e,d=A?gt+(t-gt)/it:t,x=A&&_t(T,d)<.005;if(!x&&t<8.6&&!(t>4.2&&t<8.4&&f<ht(t))&&At(e,t)<=.02)[u,M,w]=Nt(e,t);else if(!x&&t<8.4){const R=ht(t),m=e/R;let b;t<5.7||t>7.85?b=D(m*.9,0,1):b=m<-.414?D(-.707,0,.707):m>.414?D(.707,0,.707):[0,0,1],t>8.05&&t<8.3&&(b=D(b[0],-.55,b[2])),t>7.85&&t<8.05&&(b=D(b[0],.5,b[2])),s=D(b[0]+s[0]*.3,b[1]+s[1]*.3,b[2]);const _=Math.max(0,q(s,V))*(1.15-.45*p(4.4,8.4,t)),y=Math.max(0,q(s,Q)),S=t>7.6&&t<7.85?U(.45,1,p(7.62,7.84,t)):1,H=(t-4.4)/.62,I=Math.floor(H),j=Math.abs(O(H)-.5)*.62,K=Math.abs(O(e/.78+I%2*.5)-.5)*.78,P=(t>5.7&&t<7.85?.62+.38*p(.012,.03,Math.min(.31-j,Math.abs(m)<.414?K:1)):1)*(1+.25*p(.03,0,Math.abs(t-5.7))-.35*p(.03,0,Math.abs(t-5.66))+.3*p(.025,0,Math.abs(t-8.29))+.2*p(.02,0,Math.abs(t-7.87))-.4*p(.02,0,Math.abs(t-8.04))+.25*p(.02,0,Math.abs(t-4.62))-.3*p(.02,0,Math.abs(t-4.58))),rt=Math.abs(Math.abs(m)-.414)<.02&&t>5.7&&t<7.85?1.12:1,xt=t>6.6&&t<7.45&&f<.42?f>.38||t<6.64||t>7.41?1.12:.9:1,yt=S*P*rt*xt*(.84+.16*Y(e*24,t*24)+(g(Math.floor(e*55),Math.floor(t*55))>.93?.12:0))*(.92+.1*Y(e*3+I,t*3))*(t<5.7?.78-.15*p(5.4,5.7,t):1)*(m<-.414&&t>5.7&&t<7.85?.8:1);u=(.04+.5*_+.09*y)*yt,M=(.037+.39*_+.11*y)*yt,w=(.04+.27*_+.16*y)*yt}else if(!x&&t<14.2&&t>=8.82){const R=U(.47,.42,k((t-8.8)/5.5,0,1)),m=k(e/R,-.999,.999),b=.04*Math.sin(Math.asin(m)*10);s=D(m+b,0,Math.sqrt(1-m*m));const _=1.05-.5*p(8.8,14.2,t),y=Math.max(0,q(s,V)+.15)*_,S=Math.max(0,q(s,Q)),H=Math.pow(Math.max(0,q(s,D(Q[0],Q[1],Q[2]+1))),20);u=.03+.6*y+.12*S+.2*H,M=.028+.46*y+.15*S+.25*H,w=.03+.3*y+.21*S+.33*H}else{if(t>=14.2&&t<15.45&&!x){const m=t<14.8?0:1,b=e*(m?7:6)+m*.5,_=(t-(m?14.8:14.2))/.6,y=_-(.55+.3*Math.abs(Math.sin(b*Math.PI)));s=D(s[0]+.12*Math.sin(b*Math.PI*2)*_,s[1]-1.1*p(-.04,.06,y)*p(.22,.08,y)+.15,s[2])}if(d>16.3&&Math.abs(T)>.3&&!x){const m=d-(16.47+Math.abs(T)*.22);s=D(s[0]+.12*Math.sin((f*3-m*4)*6),s[1]+.3-.6*p(.05,.3,m),s[2])}t>=8.3&&t<8.82&&(s=D(s[0]*.5+e*.9,Math.cos((t-8.35)*6.7)*.8,1)),[u,M,w]=It(s,T,d,x?1.25:t>=14.2&&t<15.45?.75:1);const R=A?1.95:1.5;if(A){const m=p(-.09,0,c)*Math.max(0,-r*.7+h*.7);u+=.16*m,M+=.2*m,w+=.28*m}return[u*R,M*R,w*R]}return[u*1.45,M*1.45,w*1.45]}const Z=-.2,at=Z-.03,bt=e=>e<-.03?-9:at-.004+.13*p(-.02,.09,e)+.007*N(e*48)+.0035*N(e*160)+.012*p(.1,.45,e),ut=.125,$=bt(ut),nt=(()=>{const e=[-.75,.55,.45],t=Math.hypot(...e);return e.map(n=>n/t)})();function J(e,t,n){const c=bt(e);let r=0,h=0,v=0,s=0;if(t>at-.006&&(r=k((c-t)/n+.5,0,1)*k((t-(at-.006))/n,0,1),r>0)){const w=(j,K)=>{const P=j*70,rt=K*105,xt=1-Math.abs(Y(P*.55,rt*.4)-.5)*2;return .5*xt*xt+.28*Y(P*1.6,rt*1.3)+.1*Y(P*4.5,rt*4.5)+.22*p(.35,.65,O(rt*.11+N(P*.35)*.7))},T=w(e,t),d=-(w(e-.0015,t)-w(e+.0015,t))/(2*.0015)*.01,x=-(w(e,t+.0015)-w(e,t-.0015))/(2*.0015)*.01,R=D(d,x,1),m=Math.max(0,q(R,nt)),b=.55+.45*R[1],_=.45+.55*p(.15,.65,T),y=.85+.15*Y(e*900,t*900)+(g(Math.floor(e*1500),Math.floor(t*1500))>.93?.18:0),S=U(1,.55,p(c-.004,c-.09,t))*_*y;h=(.07*b+.3*m)*S,v=(.066*b+.31*m)*S,s=(.088*b+.4*m)*S;const H=p(.012,0,c-t)*.55+p(.004,0,c-t)*.4;h+=.55*H,v+=.6*H,s+=.82*H;const I=p(.012,0,t-at)*(.5+.5*N(e*300));h=h*(1-.3*I)+.08*I*m,v=v*(1-.3*I)+.1*I*m,s=s*(1-.3*I)+.14*I*m}const f=(t-$)/1.4,u=(ut-e)/1.4;let M=null;if(f>-.012&&f<.1&&u>-.045&&u<.06){const w=U(.0085,.0058,k(f/.07,0,1));if(f<.07&&Math.abs(u)<w){const x=.75+.7*p(w,-w,u);M=O(f*42)>=.5?[.3*x,.07*x,.07*x]:[.38*x,.37*x,.42*x]}f>.068&&f<.072&&Math.abs(u)<.0095&&(M=[.12,.1,.11]),f>.072&&f<.084&&Math.abs(u)<.0052&&(M=[1.5,1.2,.8]),f>.084&&f<.092&&Math.abs(u)<.0065-(f-.084)*.8&&(M=[.16,.1,.09]);const A=.009,T=.046,d=.022;if(u>A&&u<T&&f<d&&f>-.012){const x=p(T,A,u);M=[.13+.12*x,.12+.12*x,.15+.16*x];const R=Math.abs(u-.028),m=Math.abs(f-.009);if(R<.0055&&m<.0045)M=R<8e-4||m<6e-4?[.3,.18,.08]:[1.35,.9,.42];else{const b=Math.exp(-Math.hypot(R,m)*160)*.5;M=[M[0]+b,M[1]+b*.62,M[2]+b*.25]}}if(u>A-.003&&u<T+.003&&f>=d&&f<d+.013-Math.abs(u-(A+T)/2)*.6){const x=p(d+.004,d+.012-Math.abs(u-(A+T)/2)*.6,f);M=[.1+.25*x,.07+.25*x,.08+.32*x]}M&&([h,v,s]=M,r=1)}return[h,v,s,r]}const z={x0:-6,x1:6,y0:-.8,y1:18.2},et=e=>Math.round(k(Math.pow(k(e,0,1.6)/1.6,1/2.2),0,1)*255),wt=(e,t)=>{const n=.3*e[0]+.59*e[1]+.11*e[2],c=p(.02,.5,n),r=[U(.93,1.05,c),U(.95,1,c),U(1.07,.93,c)][t];return Math.round(k(Math.pow(1-Math.exp(-1.7*e[t]*r*.97),.96),0,1)*255)};function Pt(e,t,n,c){const r=n.mon=new Uint8Array(e.w*e.h*4),h=n.ov=new Uint8ClampedArray(e.w*e.h*4),v=n.cape=new Uint8Array(t.w*t.h*4),s=(e.x1-e.x0)/e.w,f=(t.u1-t.u0)/t.w,u=[];for(let M=0;M<e.h;M+=c)u.push(()=>{for(let w=M;w<Math.min(e.h,M+c);w++){const A=e.y0+(w+.5)/e.h*(e.y1-e.y0);for(let T=0;T<e.w;T++){const d=e.x0+(T+.5)/e.w*(e.x1-e.x0);let x=W(d,A);if(x>2.5*s)continue;let R=d,m=A;if(x>-.3*s){const H=s*.5,I=W(d+H,A)-W(d-H,A),j=W(d,A+H)-W(d,A-H),K=Math.hypot(I,j)||1,P=Math.max(x,0)+.6*s;R=d-I/K*P,m=A-j/K*P}const b=Xt(R,m),_=(w*e.w+T)*4,y=((e.h-1-w)*e.w+T)*4,S=k(.5-x/s,0,1);S>0&&(r[_]=et(b[0]),r[_+1]=et(b[1]),r[_+2]=et(b[2]),r[_+3]=Math.round(S*255)),h[y]=wt(b,0),h[y+1]=wt(b,1),h[y+2]=wt(b,2),h[y+3]=Math.round(k(.5-(x-1.6*s)/s,0,1)*255)}}});for(let M=0;M<t.h;M+=c)u.push(()=>{for(let w=M;w<Math.min(t.h,M+c);w++){const A=t.y0+(w+.5)/t.h*(t.y1-t.y0);for(let T=0;T<t.w;T++){const d=t.u0+(T+.5)/t.w*(t.u1-t.u0),x=J(d,A,f),R=(w*t.w+T)*4;x[3]<=0||(v[R]=et(x[0]),v[R+1]=et(x[1]),v[R+2]=et(x[2]),v[R+3]=Math.round(x[3]*255))}}});return Object.assign(n,{M:e,Cp:t,lampY:$+.083*1.4,lampU:ut}),u}function a(e,t){t=t||{};const n=Math.round(k(t.mw||320,160,520)/2)*2,c=Math.round(k(t.cw||512,256,768)),r=Object.assign({w:n,h:Math.round(n*(z.y1-z.y0)/(z.x1-z.x0))},z),h={w:c,h:Math.round(c*.45),u0:-.04,u1:.56,y0:at-.01,y1:at+.26},v=Object.assign({},r,{w:Math.round(n/4),h:Math.round(r.h/4)}),s=Object.assign({},h,{w:Math.round(c/4),h:Math.round(h.h/4)}),f={},u={},M=Pt(v,s,f,8),w=Pt(r,h,u,6),A=window.requestIdleCallback?d=>requestIdleCallback(d,{timeout:120}):d=>setTimeout(()=>d(null),16),T=(d,x,R)=>{const m=b=>{const _=performance.now(),y=b&&!b.didTimeout?k(b.timeRemaining(),6,12):10;for(;d.length&&performance.now()-_<y;)d.shift()();d.length?R?setTimeout(m,0):A(m):x()};R?setTimeout(m,0):A(m)};T(M,()=>{f.coarse=!0,(t.coarse||e)(f),T(w,()=>e(u))},!0)}window.SCENE={bake:a,MON:z}})(),function(){const O=document.getElementById("gl"),k=Object.assign({bx:.415,by:-.27,ms:.034,ck:.32},window.SCENE?SCENE.MON:{x0:-6,x1:6,y0:-.8,y1:18.2}),p=n=>(Math.round(n*1e6)/1e6).toFixed(6),U=/monchk/.test(location.hash);function C(n){n=n||g;const c=G(),r=W(),h=it(),v=Math.min(c,r),s=1+n.zm*.06,f=k.ms*n.msk,u=k.bx-n.cam*k.ck+n.mox+k.x0*f,M=k.by+k.y1*f-(n.pary*.012-n.sy*.09-n.lift);return{x:c/2+u*s*v,y:h+r/2-M*s*v,k:s,m:v,w0:(k.x1-k.x0)*f*v,h0:(k.y1-k.y0)*f*v}}const g={scr:0,ly:0,lift:0,heart:1,cool:0,fill:0,burst:0,cam:0,par:0,tint:0,streak:0,beat:0,hy:0,hs:1,mx:0,my:0,mo:0,zm:0,lk:0,lp:0,pary:0,rx:0,ry:0,rp:1,fw:0,sy:0,lv:3,mox:0,msk:1,hx:0,cpx:0,wm:1},N=Object.assign({},g),Y=matchMedia("(prefers-reduced-motion: reduce)").matches,E={ok:!1,rm:Y,set(n){Object.assign(N,n)},jump(n){Object.assign(N,n),Object.assign(g,n)},state:g,target:N};window.GL=E;let tt=0,ot=0,pt=0,st=null,vt=null,dt=0;function At(n){try{const c=document.createElement("div");c.style.cssText="position:fixed;left:0;bottom:0;width:0;height:100"+n+";visibility:hidden;pointer-events:none",document.documentElement.appendChild(c);const r=c.getBoundingClientRect().height;return c.remove(),r||0}catch{return 0}}function Nt(){const n=Math.max(1,document.documentElement.clientWidth||innerWidth),c=window.visualViewport;if(c&&c.height>0&&(c.scale||1)<=1.01)return{w:Math.max(1,Math.round(c.width||n)),h:Math.max(1,Math.round(c.height)),top:Math.round(c.offsetTop||0)};const r=At("svh"),h=At("lvh"),v=At("dvh"),s=r&&h&&h-r>=24?r:v||r||innerHeight;return{w:Math.max(1,Math.round(n)),h:Math.max(1,Math.round(s)),top:0}}function ht(n){const c=Nt(),r=tt&&tt>ot!=c.w>c.h,h=tt&&Math.abs(c.w-tt)>2;return!ot||n||h||r||Math.abs(c.h-ot)>1||Math.abs(c.top-pt)>1?(tt=c.w,ot=c.h,pt=c.top,document.documentElement.style.setProperty("--app-h",ot+"px"),document.documentElement.style.setProperty("--app-top",pt+"px")):tt=c.w,{w:tt,h:ot,top:pt}}const G=()=>tt||document.documentElement.clientWidth||innerWidth,W=()=>ot||innerHeight,it=()=>pt;E.view=()=>({w:G(),h:W(),top:it()}),ht(!0);const gt=(navigator.hardwareConcurrency||4)<=4||(navigator.deviceMemory||4)<=3,mt=[{s:.42,q:.5},{s:.55,q:.65},{s:.7,q:.8},{s:.85,q:1},{s:1,q:1}],_t=/lv=([0-4])/.exec(location.hash);let V=1,Q=0;const D=()=>window.devicePixelRatio||1,q=()=>D()>=2?2:0,It=()=>{const n=q();return!n||!$?0:Math.min(1,n/Math.max(1e-6,$/Math.max(1,G())))},Xt=()=>{const n=It(),c=Math.min(1,.42/(mt[0].s*Math.max(1,$/G())));return n?Math.min(1,Math.max(n/Math.max(1e-6,at),c)):c};let Z=_t?+_t[1]:gt?2:3,at=mt[Z].s,bt=mt[Z].q,ut=!1,$=0,nt=0,J=1,z=1;g.lv=N.lv=Z,Y&&(g.wm=N.wm=0),document.documentElement.classList.toggle("lq",Z<2);function et(){let n=at*V;const c=q();c&&($&&G()&&(n=Math.max(n,c/($/G()))),nt&&W()&&(n=Math.max(n,c/(nt/W())))),n=Math.max(0,Math.min(1,n)),J=Math.max(1,Math.min($,Math.round($*n))),z=Math.max(1,Math.min(nt,Math.round(nt*n))),a&&a.viewport(0,0,J,z),O.style.transform=J<$||z<nt?`scale(${($/J).toFixed(5)},${(nt/z).toFixed(5)})`:"",ut=!1}function wt(){ot||ht(!0);const n=D(),c=q()||1;let r=G()*n,h=W()*n;const v=Math.min(1,4096/Math.max(r,h,1));let s=Math.round(r*v),f=Math.round(h*v);s=Math.max(s,Math.round(G()*c)),f=Math.max(f,Math.round(W()*c)),O.width!==s||O.height!==f?($=s,nt=f,O.width=$,O.height=nt,st=null,vt=null,dt=0):($=s,nt=f),et()}function Pt(){const n=tt,c=ot;ht(!1),(tt!==n||ot!==c)&&wt()}let a;const e=!!window.WebGLRenderingContext&&!/nogl/.test(location.hash);E.ok=e,e?document.documentElement.classList.add("gl"):document.documentElement.classList.add("no-gl"),e&&requestAnimationFrame(()=>setTimeout(t,0));function t(){wt();try{a=O.getContext("webgl",{antialias:!1,alpha:!0,premultipliedAlpha:!0,powerPreference:"high-performance",preserveDrawingBuffer:!1})}catch{}if(!a){E.ok=!1,document.documentElement.classList.remove("gl"),document.documentElement.classList.add("no-gl"),requestAnimationFrame(()=>document.documentElement.classList.add("gl-ready"));return}te();const n="attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}",c=`
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
const vec2 MB0=vec2(${p(k.bx)},${p(k.by)}); const float MS=${p(k.ms)}; // v19: памятник — главный герой, ≈25% высоты экрана; v20: на интро правее — снежинка его не касается
vec2 monB(){return vec2(MB0.x-cam*${p(k.ck)}+mox,MB0.y);}
vec4 monT(vec2 p){ vec2 c=(p-vec2(${p(k.x0)},${p(k.y0)}))/vec2(${p(k.x1-k.x0)},${p(k.y1-k.y0)}); if(c.x<0.||c.x>1.||c.y<0.||c.y>1.) return vec4(0.); return dec(texture2D(TM,c)); }
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
    if(abs(p.x)<${p(k.x1)} && p.y<${p(k.y1)} && p.y>-11.){
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
}`,r=document.documentElement;let h=/Apple/.test(navigator.vendor||"")?null:a.getExtension("KHR_parallel_shader_compile");function v(o,i){const l=a.createShader(o);return a.shaderSource(l,i),a.compileShader(l),l}let s,f,u,M=!1;E.ok=!0,r.classList.add("gl");function w(){f&&!a.getShaderParameter(f,a.COMPILE_STATUS)&&console.warn(a.getShaderInfoLog(f)),E.ok=!1,r.classList.remove("gl"),r.classList.add("no-gl"),requestAnimationFrame(()=>r.classList.add("gl-ready"))}const A={},T={f:`#define HEART
#define FW
`,h:`#define HEART
`,b:"",hl:`#define HEART
#define NOMARCH
`,fl:`#define HEART
#define FW
#define NOMARCH
`},d={};let x=null;function R(o){const i=v(a.VERTEX_SHADER,n),l=v(a.FRAGMENT_SHADER,(U?`#define MONCHK
`:"")+T[o]+c),L=a.createProgram();return a.attachShader(L,i),a.attachShader(L,l),a.bindAttribLocation(L,0,"p"),a.linkProgram(L),d[o]={P:L,f:l,U:null,ok:!1}}function m(o){a.useProgram(o.P),o.U={},["R","t","q",...Object.keys(g)].forEach(i=>o.U[i]=a.getUniformLocation(o.P,i)),a.uniform1i(a.getUniformLocation(o.P,"TM"),0),a.uniform1i(a.getUniformLocation(o.P,"TC"),1),o.ok=!0,x=o}const b=["hl","h","b","fl"];let _=0;function y(o,i){if(!M&&(_=1,o.forEach(l=>d[l]||R(l)),!h&&i)){const l=()=>{if(g.beat>.5)return setTimeout(l,500);S(!0)};setTimeout(l,i)}}function S(o){if(!(!_||M))for(const i of b){const l=d[i];if(!(!l||l.ok||l.bad)){if(h&&!o){if(a.getProgramParameter(l.P,h.COMPLETION_STATUS_KHR)!==!0)continue}else if(!o)continue;a.getProgramParameter(l.P,a.LINK_STATUS)?m(l):l.bad=!0}}}const H=/fullprog/.test(location.hash),I=o=>d[o]&&d[o].ok?d[o]:null;function j(o){o!==x&&(a.useProgram(o.P),x=o);const i=o.U;a.uniform2f(i.R,J,z),a.uniform1f(i.t,Zt),a.uniform1f(i.q,bt);for(const l in g)a.uniform1f(i[l],g[l])}function K(){const o=Math.sqrt(1.5)*g.hs,i=o<3.2?2.1*Math.tan(Math.asin(o/3.2)):99,l=.755/1.52*g.hs,L=l*(1.03+.28*g.fill+.2*g.beat),X=g.burst>.01?g.hs*1.932/(3.2-.92*g.hs)+.26:0,F=g.burst>.01?Math.max(i,X):Math.min(i,Math.max(L,X)),B=1+g.zm*.06,ft=Math.min(J,z),Mt=.065+.05*g.fill+.08*Math.max(0,g.burst),Bt=g.pary*.012-g.sy*.09-g.lift,Ct=.5*J+g.hx*B*ft,St=.5*z+(g.hy-Bt)*B*ft,Tt=(F+Mt)*B*ft+2,kt=Math.max(0,Math.floor(Ct-Tt)),Rt=Math.max(0,Math.floor(St-Tt)),Ht=Math.min(J,Math.ceil(Ct+Tt)),re=Math.min(z,Math.ceil(St+Tt));return Ht>kt&&re>Rt?[kt,Rt,Ht-kt,re-Rt]:null}let P=null;function rt(){if(P||!a)return P;const o="attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}",i="precision mediump float;uniform sampler2D u;uniform vec2 B,S;void main(){gl_FragColor=texture2D(u,(gl_FragCoord.xy-B)/S);}",l=a.createProgram(),L=(X,F)=>{const B=a.createShader(X);a.shaderSource(B,F),a.compileShader(B),a.attachShader(l,B)};return L(a.VERTEX_SHADER,o),L(a.FRAGMENT_SHADER,i),a.linkProgram(l),a.getProgramParameter(l,a.LINK_STATUS)?(P={P:l,U:{u:a.getUniformLocation(l,"u"),B:a.getUniformLocation(l,"B"),S:a.getUniformLocation(l,"S")}},P):(P={bad:!0},P)}function xt(o){!a||!o||o[2]<2||o[3]<2||(st||(st=a.createTexture()),a.activeTexture(a.TEXTURE2),a.bindTexture(a.TEXTURE_2D,st),a.copyTexImage2D(a.TEXTURE_2D,0,a.RGBA,o[0],o[1],o[2],o[3],0),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),vt=o.slice())}function yt(o){const i=rt();return!i||i.bad||!st?!1:(a.useProgram(i.P),x=null,a.activeTexture(a.TEXTURE2),a.bindTexture(a.TEXTURE_2D,st),a.uniform1i(i.U.u,2),a.uniform2f(i.U.B,o[0],o[1]),a.uniform2f(i.U.S,o[2],o[3]),a.enable(a.SCISSOR_TEST),a.scissor(o[0],o[1],o[2],o[3]),a.drawArrays(a.TRIANGLES,0,3),a.disable(a.SCISSOR_TEST),!0)}let Ft="f";function Jt(o){const i=o||H||g.fw>.01?"f":g.heart>.01?"h":"b";if(!h&&_&&!o){const B=i==="b"?d.b:d[i+"l"];B&&!B.ok&&!B.bad&&S(!0)}if(i==="b"){const B=I("b")||I("hl");if(B)return j(B),Ft=B===d.b?"b":"hl",a.drawArrays(a.TRIANGLES,0,3)}const l=i!=="b"&&!o&&!H?I(i+"l"):null,L=I(i)||d.f;if(!l)return j(L),Ft=L===d.f?"f":i,a.drawArrays(a.TRIANGLES,0,3);j(l),a.drawArrays(a.TRIANGLES,0,3);const X=K();Ft=i+"l+"+(L===d.f?"f":i);const F=g.heart>.01&&g.fill<.02&&g.burst<.01&&g.fw<.01&&g.lk<.01&&Math.abs(g.zm)<.02&&g.rp>.98;if(!F)dt=0,vt=null;else if(vt&&st&&dt++&1&&yt(vt)){Ft+="+cache";return}X&&(a.enable(a.SCISSOR_TEST),a.scissor(X[0],X[1],X[2],X[3]),j(L),a.drawArrays(a.TRIANGLES,0,3),a.disable(a.SCISSOR_TEST),F&&xt(X))}E.prog=()=>Ft,E.pstat=()=>({extra:_,par:!!h,p:Object.keys(d).map(o=>o+":"+(d[o].ok?"ok":d[o].bad?"bad":"wait")).join(" "),box:K()}),E.snap=o=>{Jt(o);const i=new Uint8Array(J*z*4);return a.readPixels(0,0,J,z,a.RGBA,a.UNSIGNED_BYTE,i),i};function Vt(){if(M)return;if(!a.getProgramParameter(u,a.LINK_STATUS))return w();const o=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,o),a.bufferData(a.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),a.STATIC_DRAW),a.enableVertexAttribArray(0),a.vertexAttribPointer(0,2,a.FLOAT,!1,0,0),m(d.f),Object.assign(A,d.f.U),te(),E.scene&&ee(),et(),Qt=!0,Et||(Et=!0,Lt=performance.now(),requestAnimationFrame(Gt)),h?setTimeout(()=>{y(["hl","h"],0),setTimeout(()=>y(["b","fl"],0),600)},300):(["hl","h"].forEach(i=>d[i]||R(i)),_=1,S(!0),setTimeout(()=>y(["b","fl"],0),1200))}function te(){if(E.baking||!window.SCENE)return;E.baking=!0;const o=Math.min(G(),W()),i=Math.min(window.devicePixelRatio||1,2),l=L=>{E.scene=L,le(L),Qt&&!M&&a&&ee()};SCENE.bake(l,{mw:12*.034*o*i,cw:.6*1.35*o*i,coarse:l})}let Wt=[];function ee(){const o=E.scene;Wt.forEach(l=>a.deleteTexture(l)),Wt=[];const i=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic");Q=i?Math.min(16,a.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY_EXT)||1):0,[[o.mon,o.M],[o.cape,o.Cp]].forEach(([l,L],X)=>{const F=a.createTexture();Wt.push(F),a.activeTexture(a.TEXTURE0+X),a.bindTexture(a.TEXTURE_2D,F),a.texImage2D(a.TEXTURE_2D,0,a.RGBA,L.w,L.h,0,a.RGBA,a.UNSIGNED_BYTE,l),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),i&&Q>1&&a.texParameterf(a.TEXTURE_2D,i.TEXTURE_MAX_ANISOTROPY_EXT,Q)}),E.jump({ly:o.lampY}),E.set({scr:1}),window.__emblem&&!E._fitLy&&(E._fitLy=!0,window.__emblem())}const lt=document.createElement("canvas");lt.id="monx",lt.setAttribute("aria-hidden","true"),O.parentNode.insertBefore(lt,O);let qt=!1,oe=!1,ae=0;function le(o){!o.ov||U||(lt.width=o.M.w,lt.height=o.M.h,lt.getContext("2d").putImageData(new ImageData(o.ov,o.M.w,o.M.h),0,0),oe=!0)}function fe(){const o=(1-Math.min(1,Math.max(0,(g.cam-1.3)/.7))**2*(3-2*Math.min(1,Math.max(0,(g.cam-1.3)/.7))))*g.scr,i=oe&&!M&&o>.004;if(i!==qt&&(qt=i,lt.style.display=i?"block":"none"),!i)return;const l=C(),L=l.w0.toFixed(2);L!==ae&&(ae=L,lt.style.width=l.w0.toFixed(2)+"px",lt.style.height=l.h0.toFixed(2)+"px"),lt.style.transform=`translate3d(${l.x.toFixed(2)}px,${l.y.toFixed(2)}px,0) scale(${l.k.toFixed(5)})`}function ne(){for(const i in d)delete d[i];_=0,x=null;const o=R("f");if(u=o.P,f=o.f,h||(_=1,R("hl"),R("h")),h){const i=()=>{if(M)return;const l=a.getProgramParameter(u,h.COMPLETION_STATUS_KHR);typeof l!="boolean"?(h=null,Vt()):l?Vt():requestAnimationFrame(i)};requestAnimationFrame(i)}else requestAnimationFrame(()=>setTimeout(Vt,0))}ne(),O.addEventListener("webglcontextlost",o=>{o.preventDefault(),M=!0,qt=!1,lt.style.display="none",Wt=[],st=null,vt=null,P=null,dt=0,Et=!1,E.ok=!1,r.classList.remove("gl"),r.classList.add("no-gl")},!1),O.addEventListener("webglcontextrestored",()=>{M=!1,E.ok=!0,r.classList.remove("no-gl"),r.classList.add("gl"),et(),ne()},!1);function zt(o,i){o=Math.max(0,Math.min(4,o)),o!==Z&&(Z=o,N.lv=o,document.documentElement.classList.toggle("lq",o<2),at=mt[o].s,bt=mt[o].q,ut=!0,i&&et())}E.pulse=()=>{ut&&et(),h||S(!0)};let Dt=60;const ct=[];E.quality=()=>({level:Z,ex:+V.toFixed(2),fps:Math.round(Dt),scale:+at.toFixed(2),q:bt,w:J,h:z,pending:ut,bufW:$,bufH:nt,cssW:G(),cssH:W(),dpr:D(),floor:q()}),E.FLAKE_TEX_SIZE=1024,E.flakeTex=()=>({kind:"sdf",size:E.FLAKE_TEX_SIZE,anisotropy:Q,canvas:{w:O.width,h:O.height,cssW:G(),cssH:W(),workW:J,workH:z}}),E.forceQuality=(o,i)=>{o!=null&&o!==Z?zt(o,!0):o!=null&&(at=mt[Z].s,bt=mt[Z].q),i!=null&&(V=i),et()},Object.defineProperty(E,"level",{get:()=>Z}),addEventListener("resize",Pt),addEventListener("orientationchange",()=>{ht(!0),wt()}),window.visualViewport&&(visualViewport.addEventListener("resize",Pt),visualViewport.addEventListener("scroll",Pt)),addEventListener("pointermove",o=>{N.par=(o.clientX/innerWidth-.5)*2},{passive:!0}),addEventListener("pointermove",o=>{N.pary=(o.clientY/innerHeight-.5)*2},{passive:!0}),addEventListener("deviceorientation",o=>{o.gamma!=null&&(N.par=Math.max(-1,Math.min(1,o.gamma/30))),o.beta!=null&&(N.pary=Math.max(-1,Math.min(1,(o.beta-45)/35)))},{passive:!0});let jt=0,Lt=0,Zt=0;const he={streak:9,burst:2.2,zm:3.2,lk:6,fw:1.6,lv:1.2};function Gt(o){if(M){Et=!1;return}jt||(jt=Lt=o);const i=Math.min(.05,(o-Lt)/1e3);Lt=o,Zt+=i*(Y?.25:1);for(const l in N)g[l]+=(N[l]-g[l])*Math.min(1,i*(he[l]||2.6));h&&S(!1),E.t=Zt,fe(),Jt(!1),E.ready||(E.ready=!0,requestAnimationFrame(()=>document.documentElement.classList.add("gl-ready"))),me(o),document.hidden?Et=!1:requestAnimationFrame(Gt)}let Ot=0,Kt=0,Ut=0,$t=0,ce=-1e9,Yt=1e4,se=0,ie=0;function me(o){const i=o-ie;if(ie=o,_t||(Kt||(Kt=o+700),o<Kt)||o<se||i<=0||i>4e3)return;if(ct.push(i),ct.length>90&&ct.shift(),!Ot){Ot=o+1e3,ct.length=0;return}if(o<Ot||ct.length<4)return;const l=o-jt<3200;Ot=o+(l?600:2e3);const L=ct.slice().sort((ft,Mt)=>ft-Mt),X=L[L.length>>1];Dt=1e3/(ct.reduce((ft,Mt)=>ft+Mt,0)/ct.length);const F=Math.min(Dt,1e3/X),B=It()&&(J+1)/Math.max(1,G())<=q()+.02;F<(l?50:46)&&Z===0&&V>Xt()+.01&&!B?(V=Math.max(Xt(),V*(F<25?.64:.8)),et(),$t=o,Ut=0,ct.length=0):F<(l?50:46)&&!(B&&Z===0)?(zt(l?Z-(F<25?2:1):F<15?0:Z-(F<30?2:1),F<35),o-ce<15e3&&(Yt=Math.min(Yt*2,8e4)),$t=o,Ut=0,ct.length=0):1e3/X>=56&&Dt>=50&&o-$t>Yt?++Ut>=3&&(V<1?(V=Math.min(1,V/.8),ut=!0):zt(Z+1,!1),ce=o,Ut=0,ct.length=0):Ut=0}let Et=!1,Qt=!1;document.addEventListener("visibilitychange",()=>{Qt&&!document.hidden&&!Et&&(Et=!0,Lt=performance.now(),se=Lt+600,ct.length=0,requestAnimationFrame(Gt))}),E.monRect=C,E.MP=k,E.flakeProj=function(o){o=o||g;const i=G(),l=W(),L=it(),X=Math.min(i,l),F=1+o.zm*.06,B=o.pary*.012-o.sy*.09-o.lift;return{cx:i/2+(o.hx||0)*F*X,cy:L+l/2-((o.hy||0)-B)*F*X,R:.894/1.52*(o.hs||0)*F*X,hx:o.hx,hy:o.hy,hs:o.hs}},E.lightRect=function(o){o=o||g;const i=G(),l=W(),L=it(),X=Math.min(i,l),F=1+o.zm*.06,B=o.pary*.012-o.sy*.09-o.lift,ft=-.2,Mt=ft-.03,Bt=ft-.045,Ct=1.35,St=-.12-o.cam*.15+o.cpx-.125*Ct,Tt=Bt+((o.ly||Mt+.12)-Mt)*Ct,kt=Ht=>i/2+Ht*F*X,Rt=Ht=>L+l/2-(Ht-B)*F*X;return{x0:kt(St-.022),x1:kt(St+.07),y0:Rt(Tt+.035),y1:Rt(Bt-.005),lamp:[kt(St),Rt(Tt)]}},E.uv=(o,i)=>{const l=G(),L=W(),X=it(),F=Math.min(l,L);return[(o-l/2)/F,(L/2-(i-X))/F]}}}();
