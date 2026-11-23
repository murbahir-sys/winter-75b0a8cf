(function(){const N=e=>e-Math.floor(e),T=(e,t,n)=>e<t?t:e>n?n:e,h=(e,t,n)=>{const c=T((n-e)/(t-e),0,1);return c*c*(3-2*c)},U=(e,t,n)=>e+(t-e)*n,C=e=>N(Math.sin(e*127.1)*43758.5453),d=(e,t)=>{e=N(e*123.34),t=N(t*456.21);const n=e*(e+45.32)+t*(t+45.32);return e+=n,t+=n,N(e*t)},X=e=>{const t=Math.floor(e);let n=e-t;return n=n*n*(3-2*n),U(C(t),C(t+1),n)},J=(e,t)=>{const n=Math.floor(e),c=Math.floor(t);let f=e-n,b=t-c;return f=f*f*(3-2*f),b=b*b*(3-2*b),U(U(d(n,c),d(n+1,c),f),U(d(n,c+1),d(n+1,c+1),f),b)},L=(e,t,n,c,f,b)=>{const x=Math.abs(e-n)-f,s=Math.abs(t-c)-b;return Math.hypot(Math.max(x,0),Math.max(s,0))+Math.min(Math.max(x,s),0)},Lt=(e,t)=>t<0?U(4.85,1.45,h(.4,8.4,e)):U(4.6,1.1,h(0,7.6,e)),Mt=e=>(e<0?7.1:6.4)-.5*X(e*1.7+3);function kt(e,t){const n=e<0?-1:1,c=.45*X(t*1.3+n*7)+.25*X(t*3.7+n*3)-.3;return Math.max(Math.abs(e)-Lt(t,n)-c,Math.max(-t-.6,t-Mt(e)))}const et=[];(function(){let e=-1,t=0;for(;e<8.4;){const n=U(1.5,.62,h(-.5,7.5,e))*(.85+.3*C(t*3.1+.7)),c=e+n*.5,f=[];let b=-Lt(c,-1)-.7-C(t*7.7)*.6*n,x=0;for(;b<Lt(c,1)+.7;){const s=C(t*17.3+x*7.9+.31),p=n*(.95+1*C(t*13.1+x*2.3)),m=b+p*.5,v=c+(C(t*5.3+x*1.7)-.5)*n*.4;if(kt(m,v)<-.05*n){const g=p*.62,w=n*.66*(.85+.3*C(x*4.1+t)),E=5+Math.floor(C(s*13.7)*4),k=C(s*5.1)*6.283,u=[(C(s*31)-.5)*.35*g,(.15+(C(s*57)-.5)*.3)*w],R=.42+.25*C(s*91),l=[],M=[];for(let y=0;y<E;y++){const F=k+6.2832*(y+.55*(C(s*7.3+y*1.91)-.5))/E,A=.86+.26*C(s*3.9+y*2.37),D=Math.cos(F)*g*A,Z=Math.sin(F)*w*A;l.push([D,Z])}l.forEach(y=>M.push(Math.atan2(y[1]-u[1],y[0]-u[0])));const S=[];for(let y=0;y<E;y++){const F=l[y],A=l[(y+1)%E],D=A[0]-F[0],Z=A[1]-F[1],G=Math.hypot(D,Z)||1,H=Z/G,nt=-D/G,ft=Math.abs((u[0]-F[0])*H+(u[1]-F[1])*nt),xt=(.55+1.7*C(s*11.1+y*3.7))*.45*Math.min(g,w)/Math.max(.05,(1-R)*ft);S.push({ox:H,oy:nt,el:G,sl:xt,j:(C(s*19+y)-.5)*.25})}f.push({cx:m,cy:v,rx:g,ry:w,V:l,A:M,F:S,P:u,kin:R,n:E,s,z:-v+(C(t*4.4+x)-.5)*.7*n,fx:(C(s*41)-.5)*.5,fy:.25+(C(s*67)-.5)*.5,rust:s>.91})}b+=p*(.62+.14*C(t+x*9.9)),x++}et.push({lo:e-n*.5,hi:e+n*1.5,st:f}),e+=n*.64,t++}})();function Ft(e,t,n){const c=t-e.cx-e.P[0],f=n-e.cy-e.P[1];let b=Math.atan2(f,c),x=0;for(let u=0;u<e.n;u++){const R=e.A[u],l=e.A[(u+1)%e.n];let M=b-R,S=l-R;if(M-=Math.floor(M/6.2832)*6.2832,S-=Math.floor(S/6.2832)*6.2832,M<=S){x=u;break}}const s=e.V[x],p=e.V[(x+1)%e.n],m=e.F[x],v=t-e.cx,g=n-e.cy,w=-((v-s[0])*m.ox+(g-s[1])*m.oy),E=[e.P[0]+(s[0]-e.P[0])*e.kin,e.P[1]+(s[1]-e.P[1])*e.kin],k=-((v-E[0])*m.ox+(g-E[1])*m.oy);return[w,k>0?-1:x,k]}function K(e,t,n){let c=9,f=null,b=-1e9,x=null;for(const s of et)if(!(t<s.lo||t>s.hi))for(const p of s.st){if(Math.abs(e-p.cx)>p.rx*1.3||Math.abs(t-p.cy)>p.ry*1.3)continue;const m=Ft(p,e,t);-m[0]<c&&(c=-m[0]),n&&m[0]>0&&p.z>b&&(b=p.z,f=p,x=m)}return n?[c,f,x]:c}function bt(e,t){return t<-.6?Math.max(K(e,t),-t-.6):Math.min(K(e,t),kt(e,t)+.35)}function Pt(e,t){const[,n,c]=K(e,t,!0),f=(.4+.6*h(-.4,3,t))*(1-.45*h(5,8.5,t))*(1-.3*h(2.5,5,Math.abs(e))),b=.82+.18*J(e*23,t*23)+(d(Math.floor(e*50),Math.floor(t*50))>.92?.2:0)-(d(Math.floor(e*50)+7,Math.floor(t*50)+3)>.9?.16:0);if(!n){const H=.5+.5*J(e*3,t*3);return[.03*H+.035*f,.025*H+.022*f,.026*H+.01*f]}const[x,s,p]=c;let m,v=0;if(s<0)m=O(n.fx,n.fy,1),v=h(.035,0,p);else{const H=n.F[s];m=O(H.ox*H.sl+H.j,H.oy*H.sl+H.j*.5,1),v=h(.035,0,-p)*.6}m=O(m[0]+(J(e*9+n.s*9,t*9)-.5)*.12,m[1]+(J(e*9+4,t*9+n.s*7)-.5)*.12,m[2]);const g=.5+.5*m[1],w=Math.max(0,P(m,a))*f,E=Math.max(0,P(m,Q)),k=U(.72,1,h(0,.18,x))*(s>=0&&n.F[s].oy<-.5?.82:1),u=Math.abs(e),R=t>4&&t<8.4?U(.6,1,h(0,.6,u-ct(Math.min(t,8.3)))):1;let l=n.rust?[.56,.44,.36]:[.47,.45,.44];const M=.62+.5*C(n.s*77);l=l.map(H=>H*M);const S=h(1.1,.15,t);l=l.map(H=>H*(1-.55*S));const y=.7*h(.6,0,t)*h(.35,.7,J(e*3.5,t*8));l=[U(l[0],.1,y),U(l[1],.14,y),U(l[2],.08,y)];const F=k*b*R*(1+.22*v);let A=l[0]*(.02+.08*g+.6*w+.14*E)*F,D=l[1]*(.02+.08*g+.39*w+.17*E)*F,Z=l[2]*(.025+.11*g+.19*w+.27*E)*F;const G=S*Math.pow(Math.max(0,P(m,O(a[0],a[1],a[2]+1))),24)*f;return A+=.5*G,D+=.35*G,Z+=.2*G,[A,D,Z]}const ct=e=>e<5.7?1.85-.12*h(5.45,5.7,e):e<7.85?1.15:e<8.05?1.22:e<8.3?1.36:1.25;function it(e){const t=T((e-14.2)/1.25,0,1);let n=U(.44,.66,t*t);return n+=.05*Math.max(0,Math.sin((e-14.2)*9)),n}function V(e,t){const n=Math.abs(e);let c=bt(e,t);return t>4.2&&t<8.4&&(c=Math.min(c,Math.max(n-ct(t),Math.max(4.4-t,t-8.4)))),c=Math.min(c,Math.max(n-U(.62,.5,h(8.4,8.8,t))-.04*Math.sin((t-8.4)*15.7),Math.max(8.35-t,t-8.82))),c=Math.min(c,L(e,t,0,11.5,U(.47,.42,T((t-8.8)/5.5,0,1)),2.72)),c=Math.min(c,Math.max(n-it(t),Math.max(14.2-t,t-15.45))),c=Math.min(c,Math.hypot(n-.62,t-15.32)-.11),c=Math.min(c,Math.max(n-.76,Math.abs(t-15.53)-.08)),t>15.55&&(c=Math.min(c,ht(e/j,z+(t-z)/j)*j)),c}const j=1.3,z=15.61;function ht(e,t){const n=Math.abs(e);let c=9;const f=.35;c=Math.min(c,Math.hypot(e,(t-16.05-f)/2.1)-.2),c=Math.min(c,Math.max(n-.16+(t-15.7-f)*.2,Math.abs(t-15.82-f)-.1)),c=Math.min(c,Math.hypot(n-.17,t-16.64-f)-.1),c=Math.min(c,Math.max(Math.abs(t-16.6-f+(n-.24)*.3)-.035,Math.abs(n-.29)-.06)),c=Math.min(c,L(n,t,0,16.6+f,.06,.1)),c=Math.min(c,Math.max(n-.12+(t-16.78-f)*.3,Math.abs(t-16.88-f)-.11)),c=Math.min(c,Math.hypot(e,t-17-f)-.04);const b=16.12+f+n*.22+h(.4,.5,N(n*5+.2))*.08*h(.75,1.05,n),x=16.48+f+n*.3-.16*h(.95,1.32,n);return c=Math.min(c,Math.max(Math.max(n-1.32,t-x),b-t)),c=Math.min(c,St(e,t)),c}function St(e,t){const n=Math.hypot(e,t-15.98);let c=Math.abs(n-.3)-.06-.025*Math.sin(Math.atan2(t-15.98,e)*14);return c=Math.min(c,L(e,t,0,16.17,.012,.1)),c=Math.min(c,L(e,t,0,15.93,.025,.17),L(e,t,0,16.05,.1,.018)),c=Math.min(c,Math.max(Math.abs(Math.hypot(e,t-15.86)-.14)-.022,t-15.82)),c}const a=(()=>{const e=[.38,-.5,.78],t=Math.hypot(...e);return e.map(n=>n/t)})(),Q=(()=>{const e=[-.72,.5,.48],t=Math.hypot(...e);return e.map(n=>n/t)})(),O=(e,t,n)=>{const c=Math.hypot(e,t,n)||1;return[e/c,t/c,n/c]},P=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2];function lt(e,t,n,c){const f=Math.max(0,P(e,a)),b=Math.max(0,P(e,Q)),x=Math.pow(Math.max(0,P(e,O(a[0],a[1],a[2]+1))),14),s=Math.pow(Math.max(0,P(e,O(Q[0],Q[1],Q[2]+1))),10),p=c*(1-.45*h(8.5,17,n));return[.035+.16*f*p+.04*b+.9*x*p+.22*s,.026+.1*f*p+.05*b+.6*x*p+.27*s,.018+.04*f*p+.07*b+.3*x*p+.36*s]}function $(e,t){const c=V(e,t),f=(V(e+.03,t)-V(e-.03,t))/(2*.03),b=(V(e,t+.03)-V(e,t-.03))/(2*.03),x=h(t<8.4?-.04:-.1,0,c);let s=O(f*x*1.6,b*x*1.6,1);const p=Math.abs(e);let m,v,g;const w=t>z,E=w?e/j:e,k=w?z+(t-z)/j:t,u=w&&St(E,k)<.005;if(!u&&t<8.6&&!(t>4.2&&t<8.4&&p<ct(t))&&bt(e,t)<=.02)[m,v,g]=Pt(e,t);else if(!u&&t<8.4){const R=ct(t),l=e/R;let M;t<5.7||t>7.85?M=O(l*.9,0,1):M=l<-.414?O(-.707,0,.707):l>.414?O(.707,0,.707):[0,0,1],t>8.05&&t<8.3&&(M=O(M[0],-.55,M[2])),t>7.85&&t<8.05&&(M=O(M[0],.5,M[2])),s=O(M[0]+s[0]*.3,M[1]+s[1]*.3,M[2]);const S=Math.max(0,P(s,a))*(1.15-.45*h(4.4,8.4,t)),y=Math.max(0,P(s,Q)),F=t>7.6&&t<7.85?U(.45,1,h(7.62,7.84,t)):1,A=(t-4.4)/.62,D=Math.floor(A),Z=Math.abs(N(A)-.5)*.62,G=Math.abs(N(e/.78+D%2*.5)-.5)*.78,H=(t>5.7&&t<7.85?.62+.38*h(.012,.03,Math.min(.31-Z,Math.abs(l)<.414?G:1)):1)*(1+.25*h(.03,0,Math.abs(t-5.7))-.35*h(.03,0,Math.abs(t-5.66))+.3*h(.025,0,Math.abs(t-8.29))+.2*h(.02,0,Math.abs(t-7.87))-.4*h(.02,0,Math.abs(t-8.04))+.25*h(.02,0,Math.abs(t-4.62))-.3*h(.02,0,Math.abs(t-4.58))),nt=Math.abs(Math.abs(l)-.414)<.02&&t>5.7&&t<7.85?1.12:1,ft=t>6.6&&t<7.45&&p<.42?p>.38||t<6.64||t>7.41?1.12:.9:1,xt=F*H*nt*ft*(.84+.16*J(e*24,t*24)+(d(Math.floor(e*55),Math.floor(t*55))>.93?.12:0))*(.92+.1*J(e*3+D,t*3))*(t<5.7?.78-.15*h(5.4,5.7,t):1)*(l<-.414&&t>5.7&&t<7.85?.8:1);m=(.04+.5*S+.09*y)*xt,v=(.037+.39*S+.11*y)*xt,g=(.04+.27*S+.16*y)*xt}else if(!u&&t<14.2&&t>=8.82){const R=U(.47,.42,T((t-8.8)/5.5,0,1)),l=T(e/R,-.999,.999),M=.04*Math.sin(Math.asin(l)*10);s=O(l+M,0,Math.sqrt(1-l*l));const S=1.05-.5*h(8.8,14.2,t),y=Math.max(0,P(s,a)+.15)*S,F=Math.max(0,P(s,Q)),A=Math.pow(Math.max(0,P(s,O(Q[0],Q[1],Q[2]+1))),20);m=.03+.6*y+.12*F+.2*A,v=.028+.46*y+.15*F+.25*A,g=.03+.3*y+.21*F+.33*A}else{if(t>=14.2&&t<15.45&&!u){const l=t<14.8?0:1,M=e*(l?7:6)+l*.5,S=(t-(l?14.8:14.2))/.6,y=S-(.55+.3*Math.abs(Math.sin(M*Math.PI)));s=O(s[0]+.12*Math.sin(M*Math.PI*2)*S,s[1]-1.1*h(-.04,.06,y)*h(.22,.08,y)+.15,s[2])}if(k>16.3&&Math.abs(E)>.3&&!u){const l=k-(16.47+Math.abs(E)*.22);s=O(s[0]+.12*Math.sin((p*3-l*4)*6),s[1]+.3-.6*h(.05,.3,l),s[2])}t>=8.3&&t<8.82&&(s=O(s[0]*.5+e*.9,Math.cos((t-8.35)*6.7)*.8,1)),[m,v,g]=lt(s,E,k,u?1.25:t>=14.2&&t<15.45?.75:1);const R=w?1.95:1.5;if(w){const l=h(-.09,0,c)*Math.max(0,-f*.7+b*.7);m+=.16*l,v+=.2*l,g+=.28*l}return[m*R,v*R,g*R]}return[m*1.45,v*1.45,g*1.45]}const W=-.2,tt=W-.03,mt=e=>e<-.03?-9:tt-.004+.13*h(-.02,.09,e)+.007*X(e*48)+.0035*X(e*160)+.012*h(.1,.45,e),st=.125,pt=mt(st),ot=(()=>{const e=[-.75,.55,.45],t=Math.hypot(...e);return e.map(n=>n/t)})();function Wt(e,t,n){const c=mt(e);let f=0,b=0,x=0,s=0;if(t>tt-.006&&(f=T((c-t)/n+.5,0,1)*T((t-(tt-.006))/n,0,1),f>0)){const g=(Z,G)=>{const H=Z*70,nt=G*105,ft=1-Math.abs(J(H*.55,nt*.4)-.5)*2;return .5*ft*ft+.28*J(H*1.6,nt*1.3)+.1*J(H*4.5,nt*4.5)+.22*h(.35,.65,N(nt*.11+X(H*.35)*.7))},E=g(e,t),k=-(g(e-.0015,t)-g(e+.0015,t))/(2*.0015)*.01,u=-(g(e,t+.0015)-g(e,t-.0015))/(2*.0015)*.01,R=O(k,u,1),l=Math.max(0,P(R,ot)),M=.55+.45*R[1],S=.45+.55*h(.15,.65,E),y=.85+.15*J(e*900,t*900)+(d(Math.floor(e*1500),Math.floor(t*1500))>.93?.18:0),F=U(1,.55,h(c-.004,c-.09,t))*S*y;b=(.07*M+.3*l)*F,x=(.066*M+.31*l)*F,s=(.088*M+.4*l)*F;const A=h(.012,0,c-t)*.55+h(.004,0,c-t)*.4;b+=.55*A,x+=.6*A,s+=.82*A;const D=h(.012,0,t-tt)*(.5+.5*X(e*300));b=b*(1-.3*D)+.08*D*l,x=x*(1-.3*D)+.1*D*l,s=s*(1-.3*D)+.14*D*l}const p=(t-pt)/1.4,m=(st-e)/1.4;let v=null;if(p>-.012&&p<.1&&m>-.045&&m<.06){const g=U(.0085,.0058,T(p/.07,0,1));if(p<.07&&Math.abs(m)<g){const u=.75+.7*h(g,-g,m);v=N(p*42)>=.5?[.3*u,.07*u,.07*u]:[.38*u,.37*u,.42*u]}p>.068&&p<.072&&Math.abs(m)<.0095&&(v=[.12,.1,.11]),p>.072&&p<.084&&Math.abs(m)<.0052&&(v=[1.5,1.2,.8]),p>.084&&p<.092&&Math.abs(m)<.0065-(p-.084)*.8&&(v=[.16,.1,.09]);const w=.009,E=.046,k=.022;if(m>w&&m<E&&p<k&&p>-.012){const u=h(E,w,m);v=[.13+.12*u,.12+.12*u,.15+.16*u];const R=Math.abs(m-.028),l=Math.abs(p-.009);if(R<.0055&&l<.0045)v=R<8e-4||l<6e-4?[.3,.18,.08]:[1.35,.9,.42];else{const M=Math.exp(-Math.hypot(R,l)*160)*.5;v=[v[0]+M,v[1]+M*.62,v[2]+M*.25]}}if(m>w-.003&&m<E+.003&&p>=k&&p<k+.013-Math.abs(m-(w+E)/2)*.6){const u=h(k+.004,k+.012-Math.abs(m-(w+E)/2)*.6,p);v=[.1+.25*u,.07+.25*u,.08+.32*u]}v&&([b,x,s]=v,f=1)}return[b,x,s,f]}const ut={x0:-6,x1:6,y0:-.8,y1:18.2},vt=e=>Math.round(T(Math.pow(T(e,0,1.6)/1.6,1/2.2),0,1)*255),I=(e,t)=>{const n=.3*e[0]+.59*e[1]+.11*e[2],c=h(.02,.5,n),f=[U(.93,1.05,c),U(.95,1,c),U(1.07,.93,c)][t];return Math.round(T(Math.pow(1-Math.exp(-1.7*e[t]*f*.97),.96),0,1)*255)};function dt(e,t,n,c){const f=n.mon=new Uint8Array(e.w*e.h*4),b=n.ov=new Uint8ClampedArray(e.w*e.h*4),x=n.cape=new Uint8Array(t.w*t.h*4),s=(e.x1-e.x0)/e.w,p=(t.u1-t.u0)/t.w,m=[];for(let v=0;v<e.h;v+=c)m.push(()=>{for(let g=v;g<Math.min(e.h,v+c);g++){const w=e.y0+(g+.5)/e.h*(e.y1-e.y0);for(let E=0;E<e.w;E++){const k=e.x0+(E+.5)/e.w*(e.x1-e.x0);let u=V(k,w);if(u>2.5*s)continue;let R=k,l=w;if(u>-.3*s){const A=s*.5,D=V(k+A,w)-V(k-A,w),Z=V(k,w+A)-V(k,w-A),G=Math.hypot(D,Z)||1,H=Math.max(u,0)+.6*s;R=k-D/G*H,l=w-Z/G*H}const M=$(R,l),S=(g*e.w+E)*4,y=((e.h-1-g)*e.w+E)*4,F=T(.5-u/s,0,1);F>0&&(f[S]=vt(M[0]),f[S+1]=vt(M[1]),f[S+2]=vt(M[2]),f[S+3]=Math.round(F*255)),b[y]=I(M,0),b[y+1]=I(M,1),b[y+2]=I(M,2),b[y+3]=Math.round(T(.5-(u-1.6*s)/s,0,1)*255)}}});for(let v=0;v<t.h;v+=c)m.push(()=>{for(let g=v;g<Math.min(t.h,v+c);g++){const w=t.y0+(g+.5)/t.h*(t.y1-t.y0);for(let E=0;E<t.w;E++){const k=t.u0+(E+.5)/t.w*(t.u1-t.u0),u=Wt(k,w,p),R=(g*t.w+E)*4;u[3]<=0||(x[R]=vt(u[0]),x[R+1]=vt(u[1]),x[R+2]=vt(u[2]),x[R+3]=Math.round(u[3]*255))}}});return Object.assign(n,{M:e,Cp:t,lampY:pt+.083*1.4,lampU:st}),m}function wt(e,t){t=t||{};const n=Math.round(T(t.mw||320,160,520)/2)*2,c=Math.round(T(t.cw||512,256,768)),f=Object.assign({w:n,h:Math.round(n*(ut.y1-ut.y0)/(ut.x1-ut.x0))},ut),b={w:c,h:Math.round(c*.45),u0:-.04,u1:.56,y0:tt-.01,y1:tt+.26},x=Object.assign({},f,{w:Math.round(n/4),h:Math.round(f.h/4)}),s=Object.assign({},b,{w:Math.round(c/4),h:Math.round(b.h/4)}),p={},m={},v=dt(x,s,p,8),g=dt(f,b,m,6),w=window.requestIdleCallback?k=>requestIdleCallback(k,{timeout:120}):k=>setTimeout(()=>k(null),16),E=(k,u,R)=>{const l=M=>{const S=performance.now(),y=M&&!M.didTimeout?T(M.timeRemaining(),6,12):10;for(;k.length&&performance.now()-S<y;)k.shift()();k.length?R?setTimeout(l,0):w(l):u()};R?setTimeout(l,0):w(l)};E(v,()=>{p.coarse=!0,(t.coarse||e)(p),E(g,()=>e(m))},!0)}window.SCENE={bake:wt,MON:ut}})(),function(){const N=document.getElementById("gl"),T=Object.assign({bx:.415,by:-.27,ms:.034,ck:.32},window.SCENE?SCENE.MON:{x0:-6,x1:6,y0:-.8,y1:18.2}),h=P=>(Math.round(P*1e6)/1e6).toFixed(6),U=/monchk/.test(location.hash);function C(P){P=P||d;const lt=innerWidth,$=innerHeight,W=Math.min(lt,$),tt=1+P.zm*.06,mt=T.ms*P.msk,st=T.bx-P.cam*T.ck+P.mox+T.x0*mt,pt=T.by+T.y1*mt-(P.pary*.012-P.sy*.09-P.lift);return{x:lt/2+st*tt*W,y:$/2-pt*tt*W,k:tt,m:W,w0:(T.x1-T.x0)*mt*W,h0:(T.y1-T.y0)*mt*W}}const d={scr:0,ly:0,lift:0,heart:1,cool:0,fill:0,burst:0,cam:0,par:0,tint:0,streak:0,beat:0,hy:0,hs:1,mx:0,my:0,mo:0,zm:0,lk:0,lp:0,pary:0,rx:0,ry:0,rp:1,fw:0,sy:0,lv:3,mox:0,msk:1,hx:0,cpx:0,wm:1},X=Object.assign({},d),J=matchMedia("(prefers-reduced-motion: reduce)").matches,L={ok:!1,rm:J,set(P){Object.assign(X,P)},jump(P){Object.assign(X,P),Object.assign(d,P)},state:d,target:X};window.GL=L;const Lt=(navigator.hardwareConcurrency||4)<=4||(navigator.deviceMemory||4)<=3,Mt=[{s:.42,q:.5},{s:.55,q:.65},{s:.7,q:.8},{s:.85,q:1},{s:1,q:1}],kt=/lv=([0-4])/.exec(location.hash);let et=1;const Ft=()=>Math.min(1,.42/(Mt[0].s*Math.max(1,it/innerWidth)));let K=kt?+kt[1]:Lt?2:3,bt=Mt[K].s,Pt=Mt[K].q,ct=!1,it=0,V=0,j=1,z=1;d.lv=X.lv=K,J&&(d.wm=X.wm=0),document.documentElement.classList.toggle("lq",K<2);function ht(){j=Math.max(1,Math.round(it*bt*et)),z=Math.max(1,Math.round(V*bt*et)),a&&a.viewport(0,0,j,z),N.style.transform=j<it||z<V?`scale(${(it/j).toFixed(5)},${(V/z).toFixed(5)})`:"",ct=!1}function St(){const P=Math.min(window.devicePixelRatio||1,2);let lt=innerWidth*P,$=innerHeight*P;const W=Math.min(1,1400/Math.max(lt,$));it=Math.round(lt*W),V=Math.round($*W),(N.width!==it||N.height!==V)&&(N.width=it,N.height=V),ht()}let a;const Q=!!window.WebGLRenderingContext&&!/nogl/.test(location.hash);L.ok=Q,Q?document.documentElement.classList.add("gl"):document.documentElement.classList.add("no-gl"),Q&&requestAnimationFrame(()=>setTimeout(O,0));function O(){St();try{a=N.getContext("webgl",{antialias:!1,alpha:!0,premultipliedAlpha:!0,powerPreference:"high-performance",preserveDrawingBuffer:!1})}catch{}if(!a){L.ok=!1,document.documentElement.classList.remove("gl"),document.documentElement.classList.add("no-gl"),requestAnimationFrame(()=>document.documentElement.classList.add("gl-ready"));return}S();const P="attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}",lt=`
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
const vec2 MB0=vec2(${h(T.bx)},${h(T.by)}); const float MS=${h(T.ms)}; // v19: памятник — главный герой, ≈25% высоты экрана; v20: на интро правее — снежинка его не касается
vec2 monB(){return vec2(MB0.x-cam*${h(T.ck)}+mox,MB0.y);}
vec4 monT(vec2 p){ vec2 c=(p-vec2(${h(T.x0)},${h(T.y0)}))/vec2(${h(T.x1-T.x0)},${h(T.y1-T.y0)}); if(c.x<0.||c.x>1.||c.y<0.||c.y>1.) return vec4(0.); return dec(texture2D(TM,c)); }
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
    if(abs(p.x)<${h(T.x1)} && p.y<${h(T.y1)} && p.y>-11.){
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
}`,$=document.documentElement;let W=/Apple/.test(navigator.vendor||"")?null:a.getExtension("KHR_parallel_shader_compile");function tt(o,r){const i=a.createShader(o);return a.shaderSource(i,r),a.compileShader(i),i}let mt,st,pt,ot=!1;L.ok=!0,$.classList.add("gl");function Wt(){st&&!a.getShaderParameter(st,a.COMPILE_STATUS)&&console.warn(a.getShaderInfoLog(st)),L.ok=!1,$.classList.remove("gl"),$.classList.add("no-gl"),requestAnimationFrame(()=>$.classList.add("gl-ready"))}const ut={},vt={f:`#define HEART
#define FW
`,h:`#define HEART
`,b:"",hl:`#define HEART
#define NOMARCH
`,fl:`#define HEART
#define FW
#define NOMARCH
`},I={};let dt=null;function wt(o){const r=tt(a.VERTEX_SHADER,P),i=tt(a.FRAGMENT_SHADER,(U?`#define MONCHK
`:"")+vt[o]+lt),_=a.createProgram();return a.attachShader(_,r),a.attachShader(_,i),a.bindAttribLocation(_,0,"p"),a.linkProgram(_),I[o]={P:_,f:i,U:null,ok:!1}}function e(o){a.useProgram(o.P),o.U={},["R","t","q",...Object.keys(d)].forEach(r=>o.U[r]=a.getUniformLocation(o.P,r)),a.uniform1i(a.getUniformLocation(o.P,"TM"),0),a.uniform1i(a.getUniformLocation(o.P,"TC"),1),o.ok=!0,dt=o}const t=["hl","h","b","fl"];let n=0;function c(o,r){if(!ot&&(n=1,o.forEach(i=>I[i]||wt(i)),!W&&r)){const i=()=>{if(d.beat>.5)return setTimeout(i,500);f(!0)};setTimeout(i,r)}}function f(o){if(!(!n||ot))for(const r of t){const i=I[r];if(!(!i||i.ok||i.bad)){if(W&&!o){if(a.getProgramParameter(i.P,W.COMPLETION_STATUS_KHR)!==!0)continue}else if(!o)continue;a.getProgramParameter(i.P,a.LINK_STATUS)?e(i):i.bad=!0}}}const b=/fullprog/.test(location.hash),x=o=>I[o]&&I[o].ok?I[o]:null;function s(o){o!==dt&&(a.useProgram(o.P),dt=o);const r=o.U;a.uniform2f(r.R,j,z),a.uniform1f(r.t,Ot),a.uniform1f(r.q,Pt);for(const i in d)a.uniform1f(r[i],d[i])}function p(){const o=Math.sqrt(1.5)*d.hs,r=o<3.2?2.1*Math.tan(Math.asin(o/3.2)):99,i=.755/1.52*d.hs,_=i*(1.03+.28*d.fill+.2*d.beat),q=d.burst>.01?d.hs*1.932/(3.2-.92*d.hs)+.26:0,Y=d.burst>.01?Math.max(r,q):Math.min(r,Math.max(_,q)),B=1+d.zm*.06,rt=Math.min(j,z),It=.065+.05*d.fill+.08*Math.max(0,d.burst),Dt=d.pary*.012-d.sy*.09-d.lift,At=.5*j+d.hx*B*rt,Ht=.5*z+(d.hy-Dt)*B*rt,gt=(Y+It)*B*rt+2,Et=Math.max(0,Math.floor(At-gt)),Tt=Math.max(0,Math.floor(Ht-gt)),Kt=Math.min(j,Math.ceil(At+gt)),$t=Math.min(z,Math.ceil(Ht+gt));return Kt>Et&&$t>Tt?[Et,Tt,Kt-Et,$t-Tt]:null}let m=0,v=null,g=null,w=null;function E(){if(w||!a)return w;const o="attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}",r="precision mediump float;uniform sampler2D u;uniform vec2 B,S;void main(){gl_FragColor=texture2D(u,(gl_FragCoord.xy-B)/S);}",i=a.createProgram(),_=(q,Y)=>{const B=a.createShader(q);a.shaderSource(B,Y),a.compileShader(B),a.attachShader(i,B)};return _(a.VERTEX_SHADER,o),_(a.FRAGMENT_SHADER,r),a.linkProgram(i),a.getProgramParameter(i,a.LINK_STATUS)?(w={P:i,U:{u:a.getUniformLocation(i,"u"),B:a.getUniformLocation(i,"B"),S:a.getUniformLocation(i,"S")}},w):(w={bad:!0},w)}function k(o){!a||!o||o[2]<2||o[3]<2||(v||(v=a.createTexture()),a.activeTexture(a.TEXTURE2),a.bindTexture(a.TEXTURE_2D,v),a.copyTexImage2D(a.TEXTURE_2D,0,a.RGBA,o[0],o[1],o[2],o[3],0),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),g=o.slice())}function u(o){const r=E();return!r||r.bad||!v?!1:(a.useProgram(r.P),dt=null,a.activeTexture(a.TEXTURE2),a.bindTexture(a.TEXTURE_2D,v),a.uniform1i(r.U.u,2),a.uniform2f(r.U.B,o[0],o[1]),a.uniform2f(r.U.S,o[2],o[3]),a.enable(a.SCISSOR_TEST),a.scissor(o[0],o[1],o[2],o[3]),a.drawArrays(a.TRIANGLES,0,3),a.disable(a.SCISSOR_TEST),!0)}let R="f";function l(o){const r=o||b||d.fw>.01?"f":d.heart>.01?"h":"b";if(!W&&n&&!o){const B=r==="b"?I.b:I[r+"l"];B&&!B.ok&&!B.bad&&f(!0)}if(r==="b"){const B=x("b")||x("hl");if(B)return s(B),R=B===I.b?"b":"hl",a.drawArrays(a.TRIANGLES,0,3)}const i=r!=="b"&&!o&&!b?x(r+"l"):null,_=x(r)||I.f;if(!i)return s(_),R=_===I.f?"f":r,a.drawArrays(a.TRIANGLES,0,3);s(i),a.drawArrays(a.TRIANGLES,0,3);const q=p();R=r+"l+"+(_===I.f?"f":r);const Y=d.heart>.01&&d.fill<.02&&d.burst<.01&&d.fw<.01&&d.lk<.01&&Math.abs(d.zm)<.02&&d.rp>.98;if(!Y)m=0,g=null;else if(g&&v&&m++&1&&u(g)){R+="+cache";return}q&&(a.enable(a.SCISSOR_TEST),a.scissor(q[0],q[1],q[2],q[3]),s(_),a.drawArrays(a.TRIANGLES,0,3),a.disable(a.SCISSOR_TEST),Y&&k(q))}L.prog=()=>R,L.pstat=()=>({extra:n,par:!!W,p:Object.keys(I).map(o=>o+":"+(I[o].ok?"ok":I[o].bad?"bad":"wait")).join(" "),box:p()}),L.snap=o=>{l(o);const r=new Uint8Array(j*z*4);return a.readPixels(0,0,j,z,a.RGBA,a.UNSIGNED_BYTE,r),r};function M(){if(ot)return;if(!a.getProgramParameter(pt,a.LINK_STATUS))return Wt();const o=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,o),a.bufferData(a.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),a.STATIC_DRAW),a.enableVertexAttribArray(0),a.vertexAttribPointer(0,2,a.FLOAT,!1,0,0),e(I.f),Object.assign(ut,I.f.U),S(),L.scene&&F(),ht(),jt=!0,yt||(yt=!0,Rt=performance.now(),requestAnimationFrame(Nt)),W?setTimeout(()=>{c(["hl","h"],0),setTimeout(()=>c(["b","fl"],0),600)},300):(["hl","h"].forEach(r=>I[r]||wt(r)),n=1,f(!0),setTimeout(()=>c(["b","fl"],0),1200))}function S(){if(L.baking||!window.SCENE)return;L.baking=!0;const o=Math.min(innerWidth,innerHeight),r=Math.min(window.devicePixelRatio||1,2),i=_=>{L.scene=_,H(_),jt&&!ot&&a&&F()};SCENE.bake(i,{mw:12*.034*o*r,cw:.6*1.35*o*r,coarse:i})}let y=[];function F(){const o=L.scene;y.forEach(r=>a.deleteTexture(r)),y=[],[[o.mon,o.M],[o.cape,o.Cp]].forEach(([r,i],_)=>{const q=a.createTexture();y.push(q),a.activeTexture(a.TEXTURE0+_),a.bindTexture(a.TEXTURE_2D,q),a.texImage2D(a.TEXTURE_2D,0,a.RGBA,i.w,i.h,0,a.RGBA,a.UNSIGNED_BYTE,r),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}),L.jump({ly:o.lampY}),L.set({scr:1}),window.__emblem&&!L._fitLy&&(L._fitLy=!0,window.__emblem())}const A=document.createElement("canvas");A.id="monx",A.setAttribute("aria-hidden","true"),N.parentNode.insertBefore(A,N);let D=!1,Z=!1,G=0;function H(o){!o.ov||U||(A.width=o.M.w,A.height=o.M.h,A.getContext("2d").putImageData(new ImageData(o.ov,o.M.w,o.M.h),0,0),Z=!0)}function nt(){const o=(1-Math.min(1,Math.max(0,(d.cam-1.3)/.7))**2*(3-2*Math.min(1,Math.max(0,(d.cam-1.3)/.7))))*d.scr,r=Z&&!ot&&o>.004;if(r!==D&&(D=r,A.style.display=r?"block":"none"),!r)return;const i=C(),_=i.w0.toFixed(2);_!==G&&(G=_,A.style.width=i.w0.toFixed(2)+"px",A.style.height=i.h0.toFixed(2)+"px"),A.style.transform=`translate3d(${i.x.toFixed(2)}px,${i.y.toFixed(2)}px,0) scale(${i.k.toFixed(5)})`}function ft(){for(const r in I)delete I[r];n=0,dt=null;const o=wt("f");if(pt=o.P,st=o.f,W||(n=1,wt("hl"),wt("h")),W){const r=()=>{if(ot)return;const i=a.getProgramParameter(pt,W.COMPLETION_STATUS_KHR);typeof i!="boolean"?(W=null,M()):i?M():requestAnimationFrame(r)};requestAnimationFrame(r)}else requestAnimationFrame(()=>setTimeout(M,0))}ft(),N.addEventListener("webglcontextlost",o=>{o.preventDefault(),ot=!0,D=!1,A.style.display="none",y=[],v=null,g=null,w=null,m=0,yt=!1,L.ok=!1,$.classList.remove("gl"),$.classList.add("no-gl")},!1),N.addEventListener("webglcontextrestored",()=>{ot=!1,L.ok=!0,$.classList.remove("no-gl"),$.classList.add("gl"),ht(),ft()},!1);function xt(o,r){o=Math.max(0,Math.min(4,o)),o!==K&&(K=o,X.lv=o,document.documentElement.classList.toggle("lq",o<2),bt=Mt[o].s,Pt=Mt[o].q,ct=!0,r&&ht())}L.pulse=()=>{ct&&ht(),W||f(!0)};let Ut=60;const at=[];L.quality=()=>({level:K,ex:+et.toFixed(2),fps:Math.round(Ut),scale:+bt.toFixed(2),q:Pt,w:j,h:z,pending:ct}),Object.defineProperty(L,"level",{get:()=>K}),addEventListener("resize",St),addEventListener("pointermove",o=>{X.par=(o.clientX/innerWidth-.5)*2},{passive:!0}),addEventListener("pointermove",o=>{X.pary=(o.clientY/innerHeight-.5)*2},{passive:!0}),addEventListener("deviceorientation",o=>{o.gamma!=null&&(X.par=Math.max(-1,Math.min(1,o.gamma/30))),o.beta!=null&&(X.pary=Math.max(-1,Math.min(1,(o.beta-45)/35)))},{passive:!0});let Bt=0,Rt=0,Ot=0;const Yt={streak:9,burst:2.2,zm:3.2,lk:6,fw:1.6,lv:1.2};function Nt(o){if(ot){yt=!1;return}Bt||(Bt=Rt=o);const r=Math.min(.05,(o-Rt)/1e3);Rt=o,Ot+=r*(J?.25:1);for(const i in X)d[i]+=(X[i]-d[i])*Math.min(1,r*(Yt[i]||2.6));W&&f(!1),L.t=Ot,nt(),l(!1),L.ready||(L.ready=!0,requestAnimationFrame(()=>document.documentElement.classList.add("gl-ready"))),Jt(o),document.hidden?yt=!1:requestAnimationFrame(Nt)}let Ct=0,Xt=0,_t=0,qt=0,zt=-1e9,Vt=1e4,Zt=0,Gt=0;function Jt(o){const r=o-Gt;if(Gt=o,kt||(Xt||(Xt=o+700),o<Xt)||o<Zt||r<=0||r>4e3)return;if(at.push(r),at.length>90&&at.shift(),!Ct){Ct=o+1e3,at.length=0;return}if(o<Ct||at.length<4)return;const i=o-Bt<3200;Ct=o+(i?600:2e3);const _=at.slice().sort((B,rt)=>B-rt),q=_[_.length>>1];Ut=1e3/(at.reduce((B,rt)=>B+rt,0)/at.length);const Y=Math.min(Ut,1e3/q);Y<(i?50:46)&&K===0&&et>Ft()+.01?(et=Math.max(Ft(),et*(Y<25?.64:.8)),ht(),qt=o,_t=0,at.length=0):Y<(i?50:46)?(xt(i?K-(Y<25?2:1):Y<15?0:K-(Y<30?2:1),Y<35),o-zt<15e3&&(Vt=Math.min(Vt*2,8e4)),qt=o,_t=0,at.length=0):1e3/q>=56&&Ut>=50&&o-qt>Vt?++_t>=3&&(et<1?(et=Math.min(1,et/.8),ct=!0):xt(K+1,!1),zt=o,_t=0,at.length=0):_t=0}let yt=!1,jt=!1;document.addEventListener("visibilitychange",()=>{jt&&!document.hidden&&!yt&&(yt=!0,Rt=performance.now(),Zt=Rt+600,at.length=0,requestAnimationFrame(Nt))}),L.monRect=C,L.MP=T,L.lightRect=function(o){o=o||d;const r=innerWidth,i=innerHeight,_=Math.min(r,i),q=1+o.zm*.06,Y=o.pary*.012-o.sy*.09-o.lift,B=-.2,rt=B-.03,It=B-.045,Dt=1.35,At=-.12-o.cam*.15+o.cpx-.125*Dt,Ht=It+((o.ly||rt+.12)-rt)*Dt,gt=Tt=>r/2+Tt*q*_,Et=Tt=>i/2-(Tt-Y)*q*_;return{x0:gt(At-.022),x1:gt(At+.07),y0:Et(Ht+.035),y1:Et(It-.005),lamp:[gt(At),Et(Ht)]}},L.uv=(o,r)=>{const i=Math.min(innerWidth,innerHeight);return[(o-innerWidth/2)/i,(innerHeight/2-r)/i]}}}();
