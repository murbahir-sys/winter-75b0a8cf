(function(){const V=e=>e-Math.floor(e),T=(e,t,n)=>e<t?t:e>n?n:e,m=(e,t,n)=>{const c=T((n-e)/(t-e),0,1);return c*c*(3-2*c)},I=(e,t,n)=>e+(t-e)*n,D=e=>V(Math.sin(e*127.1)*43758.5453),x=(e,t)=>{e=V(e*123.34),t=V(t*456.21);const n=e*(e+45.32)+t*(t+45.32);return e+=n,t+=n,V(e*t)},N=e=>{const t=Math.floor(e);let n=e-t;return n=n*n*(3-2*n),I(D(t),D(t+1),n)},K=(e,t)=>{const n=Math.floor(e),c=Math.floor(t);let l=e-n,M=t-c;return l=l*l*(3-2*l),M=M*M*(3-2*M),I(I(x(n,c),x(n+1,c),l),I(x(n,c+1),x(n+1,c+1),l),M)},A=(e,t,n,c,l,M)=>{const u=Math.abs(e-n)-l,i=Math.abs(t-c)-M;return Math.hypot(Math.max(u,0),Math.max(i,0))+Math.min(Math.max(u,i),0)},Y=(e,t)=>t<0?I(4.85,1.45,m(.4,8.4,e)):I(4.6,1.1,m(0,7.6,e)),et=e=>(e<0?7.1:6.4)-.5*N(e*1.7+3);function ut(e,t){const n=e<0?-1:1,c=.45*N(t*1.3+n*7)+.25*N(t*3.7+n*3)-.3;return Math.max(Math.abs(e)-Y(t,n)-c,Math.max(-t-.6,t-et(e)))}const nt=[];(function(){let e=-1,t=0;for(;e<8.4;){const n=I(1.5,.62,m(-.5,7.5,e))*(.85+.3*D(t*3.1+.7)),c=e+n*.5,l=[];let M=-Y(c,-1)-.7-D(t*7.7)*.6*n,u=0;for(;M<Y(c,1)+.7;){const i=D(t*17.3+u*7.9+.31),d=n*(.95+1*D(t*13.1+u*2.3)),v=M+d*.5,h=c+(D(t*5.3+u*1.7)-.5)*n*.4;if(ut(v,h)<-.05*n){const g=d*.62,y=n*.66*(.85+.3*D(u*4.1+t)),E=5+Math.floor(D(i*13.7)*4),k=D(i*5.1)*6.283,p=[(D(i*31)-.5)*.35*g,(.15+(D(i*57)-.5)*.3)*y],R=.42+.25*D(i*91),f=[],b=[];for(let w=0;w<E;w++){const C=k+6.2832*(w+.55*(D(i*7.3+w*1.91)-.5))/E,F=.86+.26*D(i*3.9+w*2.37),B=Math.cos(C)*g*F,Z=Math.sin(C)*y*F;f.push([B,Z])}f.forEach(w=>b.push(Math.atan2(w[1]-p[1],w[0]-p[0])));const H=[];for(let w=0;w<E;w++){const C=f[w],F=f[(w+1)%E],B=F[0]-C[0],Z=F[1]-C[1],G=Math.hypot(B,Z)||1,S=Z/G,ot=-B/G,rt=Math.abs((p[0]-C[0])*S+(p[1]-C[1])*ot),xt=(.55+1.7*D(i*11.1+w*3.7))*.45*Math.min(g,y)/Math.max(.05,(1-R)*rt);H.push({ox:S,oy:ot,el:G,sl:xt,j:(D(i*19+w)-.5)*.25})}l.push({cx:v,cy:h,rx:g,ry:y,V:f,A:b,F:H,P:p,kin:R,n:E,s:i,z:-h+(D(t*4.4+u)-.5)*.7*n,fx:(D(i*41)-.5)*.5,fy:.25+(D(i*67)-.5)*.5,rust:i>.91})}M+=d*(.62+.14*D(t+u*9.9)),u++}nt.push({lo:e-n*.5,hi:e+n*1.5,st:l}),e+=n*.64,t++}})();function vt(e,t,n){const c=t-e.cx-e.P[0],l=n-e.cy-e.P[1];let M=Math.atan2(l,c),u=0;for(let p=0;p<e.n;p++){const R=e.A[p],f=e.A[(p+1)%e.n];let b=M-R,H=f-R;if(b-=Math.floor(b/6.2832)*6.2832,H-=Math.floor(H/6.2832)*6.2832,b<=H){u=p;break}}const i=e.V[u],d=e.V[(u+1)%e.n],v=e.F[u],h=t-e.cx,g=n-e.cy,y=-((h-i[0])*v.ox+(g-i[1])*v.oy),E=[e.P[0]+(i[0]-e.P[0])*e.kin,e.P[1]+(i[1]-e.P[1])*e.kin],k=-((h-E[0])*v.ox+(g-E[1])*v.oy);return[y,k>0?-1:u,k]}function dt(e,t,n){let c=9,l=null,M=-1e9,u=null;for(const i of nt)if(!(t<i.lo||t>i.hi))for(const d of i.st){if(Math.abs(e-d.cx)>d.rx*1.3||Math.abs(t-d.cy)>d.ry*1.3)continue;const v=vt(d,e,t);-v[0]<c&&(c=-v[0]),n&&v[0]>0&&d.z>M&&(M=d.z,l=d,u=v)}return n?[c,l,u]:c}function kt(e,t){return t<-.6?Math.max(dt(e,t),-t-.6):Math.min(dt(e,t),ut(e,t)+.35)}function Vt(e,t){const[,n,c]=dt(e,t,!0),l=(.4+.6*m(-.4,3,t))*(1-.45*m(5,8.5,t))*(1-.3*m(2.5,5,Math.abs(e))),M=.82+.18*K(e*23,t*23)+(x(Math.floor(e*50),Math.floor(t*50))>.92?.2:0)-(x(Math.floor(e*50)+7,Math.floor(t*50)+3)>.9?.16:0);if(!n){const S=.5+.5*K(e*3,t*3);return[.03*S+.035*l,.025*S+.022*l,.026*S+.01*l]}const[u,i,d]=c;let v,h=0;if(i<0)v=_(n.fx,n.fy,1),h=m(.035,0,d);else{const S=n.F[i];v=_(S.ox*S.sl+S.j,S.oy*S.sl+S.j*.5,1),h=m(.035,0,-d)*.6}v=_(v[0]+(K(e*9+n.s*9,t*9)-.5)*.12,v[1]+(K(e*9+4,t*9+n.s*7)-.5)*.12,v[2]);const g=.5+.5*v[1],y=Math.max(0,j(v,X))*l,E=Math.max(0,j(v,Q)),k=I(.72,1,m(0,.18,u))*(i>=0&&n.F[i].oy<-.5?.82:1),p=Math.abs(e),R=t>4&&t<8.4?I(.6,1,m(0,.6,p-ft(Math.min(t,8.3)))):1;let f=n.rust?[.56,.44,.36]:[.47,.45,.44];const b=.62+.5*D(n.s*77);f=f.map(S=>S*b);const H=m(1.1,.15,t);f=f.map(S=>S*(1-.55*H));const w=.7*m(.6,0,t)*m(.35,.7,K(e*3.5,t*8));f=[I(f[0],.1,w),I(f[1],.14,w),I(f[2],.08,w)];const C=k*M*R*(1+.22*h);let F=f[0]*(.02+.08*g+.6*y+.14*E)*C,B=f[1]*(.02+.08*g+.39*y+.17*E)*C,Z=f[2]*(.025+.11*g+.19*y+.27*E)*C;const G=H*Math.pow(Math.max(0,j(v,_(X[0],X[1],X[2]+1))),24)*l;return F+=.5*G,B+=.35*G,Z+=.2*G,[F,B,Z]}const ft=e=>e<5.7?1.85-.12*m(5.45,5.7,e):e<7.85?1.15:e<8.05?1.22:e<8.3?1.36:1.25;function ht(e){const t=T((e-14.2)/1.25,0,1);let n=I(.44,.66,t*t);return n+=.05*Math.max(0,Math.sin((e-14.2)*9)),n}function z(e,t){const n=Math.abs(e);let c=kt(e,t);return t>4.2&&t<8.4&&(c=Math.min(c,Math.max(n-ft(t),Math.max(4.4-t,t-8.4)))),c=Math.min(c,Math.max(n-I(.62,.5,m(8.4,8.8,t))-.04*Math.sin((t-8.4)*15.7),Math.max(8.35-t,t-8.82))),c=Math.min(c,A(e,t,0,11.5,I(.47,.42,T((t-8.8)/5.5,0,1)),2.72)),c=Math.min(c,Math.max(n-ht(t),Math.max(14.2-t,t-15.45))),c=Math.min(c,Math.hypot(n-.62,t-15.32)-.11),c=Math.min(c,Math.max(n-.76,Math.abs(t-15.53)-.08)),t>15.55&&(c=Math.min(c,gt(e/st,Mt+(t-Mt)/st)*st)),c}const st=1.3,Mt=15.61;function gt(e,t){const n=Math.abs(e);let c=9;const l=.35;c=Math.min(c,Math.hypot(e,(t-16.05-l)/2.1)-.2),c=Math.min(c,Math.max(n-.16+(t-15.7-l)*.2,Math.abs(t-15.82-l)-.1)),c=Math.min(c,Math.hypot(n-.17,t-16.64-l)-.1),c=Math.min(c,Math.max(Math.abs(t-16.6-l+(n-.24)*.3)-.035,Math.abs(n-.29)-.06)),c=Math.min(c,A(n,t,0,16.6+l,.06,.1)),c=Math.min(c,Math.max(n-.12+(t-16.78-l)*.3,Math.abs(t-16.88-l)-.11)),c=Math.min(c,Math.hypot(e,t-17-l)-.04);const M=16.12+l+n*.22+m(.4,.5,V(n*5+.2))*.08*m(.75,1.05,n),u=16.48+l+n*.3-.16*m(.95,1.32,n);return c=Math.min(c,Math.max(Math.max(n-1.32,t-u),M-t)),c=Math.min(c,Rt(e,t)),c}function Rt(e,t){const n=Math.hypot(e,t-15.98);let c=Math.abs(n-.3)-.06-.025*Math.sin(Math.atan2(t-15.98,e)*14);return c=Math.min(c,A(e,t,0,16.17,.012,.1)),c=Math.min(c,A(e,t,0,15.93,.025,.17),A(e,t,0,16.05,.1,.018)),c=Math.min(c,Math.max(Math.abs(Math.hypot(e,t-15.86)-.14)-.022,t-15.82)),c}const X=(()=>{const e=[.38,-.5,.78],t=Math.hypot(...e);return e.map(n=>n/t)})(),Q=(()=>{const e=[-.72,.5,.48],t=Math.hypot(...e);return e.map(n=>n/t)})(),_=(e,t,n)=>{const c=Math.hypot(e,t,n)||1;return[e/c,t/c,n/c]},j=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2];function St(e,t,n,c){const l=Math.max(0,j(e,X)),M=Math.max(0,j(e,Q)),u=Math.pow(Math.max(0,j(e,_(X[0],X[1],X[2]+1))),14),i=Math.pow(Math.max(0,j(e,_(Q[0],Q[1],Q[2]+1))),10),d=c*(1-.45*m(8.5,17,n));return[.035+.16*l*d+.04*M+.9*u*d+.22*i,.026+.1*l*d+.05*M+.6*u*d+.27*i,.018+.04*l*d+.07*M+.3*u*d+.36*i]}function bt(e,t){const c=z(e,t),l=(z(e+.03,t)-z(e-.03,t))/(2*.03),M=(z(e,t+.03)-z(e,t-.03))/(2*.03),u=m(t<8.4?-.04:-.1,0,c);let i=_(l*u*1.6,M*u*1.6,1);const d=Math.abs(e);let v,h,g;const y=t>Mt,E=y?e/st:e,k=y?Mt+(t-Mt)/st:t,p=y&&Rt(E,k)<.005;if(!p&&t<8.6&&!(t>4.2&&t<8.4&&d<ft(t))&&kt(e,t)<=.02)[v,h,g]=Vt(e,t);else if(!p&&t<8.4){const R=ft(t),f=e/R;let b;t<5.7||t>7.85?b=_(f*.9,0,1):b=f<-.414?_(-.707,0,.707):f>.414?_(.707,0,.707):[0,0,1],t>8.05&&t<8.3&&(b=_(b[0],-.55,b[2])),t>7.85&&t<8.05&&(b=_(b[0],.5,b[2])),i=_(b[0]+i[0]*.3,b[1]+i[1]*.3,b[2]);const H=Math.max(0,j(i,X))*(1.15-.45*m(4.4,8.4,t)),w=Math.max(0,j(i,Q)),C=t>7.6&&t<7.85?I(.45,1,m(7.62,7.84,t)):1,F=(t-4.4)/.62,B=Math.floor(F),Z=Math.abs(V(F)-.5)*.62,G=Math.abs(V(e/.78+B%2*.5)-.5)*.78,S=(t>5.7&&t<7.85?.62+.38*m(.012,.03,Math.min(.31-Z,Math.abs(f)<.414?G:1)):1)*(1+.25*m(.03,0,Math.abs(t-5.7))-.35*m(.03,0,Math.abs(t-5.66))+.3*m(.025,0,Math.abs(t-8.29))+.2*m(.02,0,Math.abs(t-7.87))-.4*m(.02,0,Math.abs(t-8.04))+.25*m(.02,0,Math.abs(t-4.62))-.3*m(.02,0,Math.abs(t-4.58))),ot=Math.abs(Math.abs(f)-.414)<.02&&t>5.7&&t<7.85?1.12:1,rt=t>6.6&&t<7.45&&d<.42?d>.38||t<6.64||t>7.41?1.12:.9:1,xt=C*S*ot*rt*(.84+.16*K(e*24,t*24)+(x(Math.floor(e*55),Math.floor(t*55))>.93?.12:0))*(.92+.1*K(e*3+B,t*3))*(t<5.7?.78-.15*m(5.4,5.7,t):1)*(f<-.414&&t>5.7&&t<7.85?.8:1);v=(.04+.5*H+.09*w)*xt,h=(.037+.39*H+.11*w)*xt,g=(.04+.27*H+.16*w)*xt}else if(!p&&t<14.2&&t>=8.82){const R=I(.47,.42,T((t-8.8)/5.5,0,1)),f=T(e/R,-.999,.999),b=.04*Math.sin(Math.asin(f)*10);i=_(f+b,0,Math.sqrt(1-f*f));const H=1.05-.5*m(8.8,14.2,t),w=Math.max(0,j(i,X)+.15)*H,C=Math.max(0,j(i,Q)),F=Math.pow(Math.max(0,j(i,_(Q[0],Q[1],Q[2]+1))),20);v=.03+.6*w+.12*C+.2*F,h=.028+.46*w+.15*C+.25*F,g=.03+.3*w+.21*C+.33*F}else{if(t>=14.2&&t<15.45&&!p){const f=t<14.8?0:1,b=e*(f?7:6)+f*.5,H=(t-(f?14.8:14.2))/.6,w=H-(.55+.3*Math.abs(Math.sin(b*Math.PI)));i=_(i[0]+.12*Math.sin(b*Math.PI*2)*H,i[1]-1.1*m(-.04,.06,w)*m(.22,.08,w)+.15,i[2])}if(k>16.3&&Math.abs(E)>.3&&!p){const f=k-(16.47+Math.abs(E)*.22);i=_(i[0]+.12*Math.sin((d*3-f*4)*6),i[1]+.3-.6*m(.05,.3,f),i[2])}t>=8.3&&t<8.82&&(i=_(i[0]*.5+e*.9,Math.cos((t-8.35)*6.7)*.8,1)),[v,h,g]=St(i,E,k,p?1.25:t>=14.2&&t<15.45?.75:1);const R=y?1.95:1.5;if(y){const f=m(-.09,0,c)*Math.max(0,-l*.7+M*.7);v+=.16*f,h+=.2*f,g+=.28*f}return[v*R,h*R,g*R]}return[v*1.45,h*1.45,g*1.45]}const mt=-.2,tt=mt-.03,J=e=>e<-.03?-9:tt-.004+.13*m(-.02,.09,e)+.007*N(e*48)+.0035*N(e*160)+.012*m(.1,.45,e),$=.125,pt=J($),_t=(()=>{const e=[-.75,.55,.45],t=Math.hypot(...e);return e.map(n=>n/t)})();function Ht(e,t,n){const c=J(e);let l=0,M=0,u=0,i=0;if(t>tt-.006&&(l=T((c-t)/n+.5,0,1)*T((t-(tt-.006))/n,0,1),l>0)){const g=(Z,G)=>{const S=Z*70,ot=G*105,rt=1-Math.abs(K(S*.55,ot*.4)-.5)*2;return .5*rt*rt+.28*K(S*1.6,ot*1.3)+.1*K(S*4.5,ot*4.5)+.22*m(.35,.65,V(ot*.11+N(S*.35)*.7))},E=g(e,t),k=-(g(e-.0015,t)-g(e+.0015,t))/(2*.0015)*.01,p=-(g(e,t+.0015)-g(e,t-.0015))/(2*.0015)*.01,R=_(k,p,1),f=Math.max(0,j(R,_t)),b=.55+.45*R[1],H=.45+.55*m(.15,.65,E),w=.85+.15*K(e*900,t*900)+(x(Math.floor(e*1500),Math.floor(t*1500))>.93?.18:0),C=I(1,.55,m(c-.004,c-.09,t))*H*w;M=(.07*b+.3*f)*C,u=(.066*b+.31*f)*C,i=(.088*b+.4*f)*C;const F=m(.012,0,c-t)*.55+m(.004,0,c-t)*.4;M+=.55*F,u+=.6*F,i+=.82*F;const B=m(.012,0,t-tt)*(.5+.5*N(e*300));M=M*(1-.3*B)+.08*B*f,u=u*(1-.3*B)+.1*B*f,i=i*(1-.3*B)+.14*B*f}const d=(t-pt)/1.4,v=($-e)/1.4;let h=null;if(d>-.012&&d<.1&&v>-.045&&v<.06){const g=I(.0085,.0058,T(d/.07,0,1));if(d<.07&&Math.abs(v)<g){const p=.75+.7*m(g,-g,v);h=V(d*42)>=.5?[.3*p,.07*p,.07*p]:[.38*p,.37*p,.42*p]}d>.068&&d<.072&&Math.abs(v)<.0095&&(h=[.12,.1,.11]),d>.072&&d<.084&&Math.abs(v)<.0052&&(h=[1.5,1.2,.8]),d>.084&&d<.092&&Math.abs(v)<.0065-(d-.084)*.8&&(h=[.16,.1,.09]);const y=.009,E=.046,k=.022;if(v>y&&v<E&&d<k&&d>-.012){const p=m(E,y,v);h=[.13+.12*p,.12+.12*p,.15+.16*p];const R=Math.abs(v-.028),f=Math.abs(d-.009);if(R<.0055&&f<.0045)h=R<8e-4||f<6e-4?[.3,.18,.08]:[1.35,.9,.42];else{const b=Math.exp(-Math.hypot(R,f)*160)*.5;h=[h[0]+b,h[1]+b*.62,h[2]+b*.25]}}if(v>y-.003&&v<E+.003&&d>=k&&d<k+.013-Math.abs(v-(y+E)/2)*.6){const p=m(k+.004,k+.012-Math.abs(v-(y+E)/2)*.6,d);h=[.1+.25*p,.07+.25*p,.08+.32*p]}h&&([M,u,i]=h,l=1)}return[M,u,i,l]}const o={x0:-6,x1:6,y0:-.8,y1:18.2},it=e=>Math.round(T(Math.pow(T(e,0,1.6)/1.6,1/2.2),0,1)*255),Ft=(e,t)=>{const n=.3*e[0]+.59*e[1]+.11*e[2],c=m(.02,.5,n),l=[I(.93,1.05,c),I(.95,1,c),I(1.07,.93,c)][t];return Math.round(T(Math.pow(1-Math.exp(-1.7*e[t]*l*.97),.96),0,1)*255)};function P(e,t,n,c){const l=n.mon=new Uint8Array(e.w*e.h*4),M=n.ov=new Uint8ClampedArray(e.w*e.h*4),u=n.cape=new Uint8Array(t.w*t.h*4),i=(e.x1-e.x0)/e.w,d=(t.u1-t.u0)/t.w,v=[];for(let h=0;h<e.h;h+=c)v.push(()=>{for(let g=h;g<Math.min(e.h,h+c);g++){const y=e.y0+(g+.5)/e.h*(e.y1-e.y0);for(let E=0;E<e.w;E++){const k=e.x0+(E+.5)/e.w*(e.x1-e.x0);let p=z(k,y);if(p>2.5*i)continue;let R=k,f=y;if(p>-.3*i){const F=i*.5,B=z(k+F,y)-z(k-F,y),Z=z(k,y+F)-z(k,y-F),G=Math.hypot(B,Z)||1,S=Math.max(p,0)+.6*i;R=k-B/G*S,f=y-Z/G*S}const b=bt(R,f),H=(g*e.w+E)*4,w=((e.h-1-g)*e.w+E)*4,C=T(.5-p/i,0,1);C>0&&(l[H]=it(b[0]),l[H+1]=it(b[1]),l[H+2]=it(b[2]),l[H+3]=Math.round(C*255)),M[w]=Ft(b,0),M[w+1]=Ft(b,1),M[w+2]=Ft(b,2),M[w+3]=Math.round(T(.5-(p-1.6*i)/i,0,1)*255)}}});for(let h=0;h<t.h;h+=c)v.push(()=>{for(let g=h;g<Math.min(t.h,h+c);g++){const y=t.y0+(g+.5)/t.h*(t.y1-t.y0);for(let E=0;E<t.w;E++){const k=t.u0+(E+.5)/t.w*(t.u1-t.u0),p=Ht(k,y,d),R=(g*t.w+E)*4;p[3]<=0||(u[R]=it(p[0]),u[R+1]=it(p[1]),u[R+2]=it(p[2]),u[R+3]=Math.round(p[3]*255))}}});return Object.assign(n,{M:e,Cp:t,lampY:pt+.083*1.4,lampU:$}),v}function L(e,t){t=t||{};const n=Math.round(T(t.mw||320,160,520)/2)*2,c=Math.round(T(t.cw||512,256,768)),l=Object.assign({w:n,h:Math.round(n*(o.y1-o.y0)/(o.x1-o.x0))},o),M={w:c,h:Math.round(c*.45),u0:-.04,u1:.56,y0:tt-.01,y1:tt+.26},u=Object.assign({},l,{w:Math.round(n/4),h:Math.round(l.h/4)}),i=Object.assign({},M,{w:Math.round(c/4),h:Math.round(M.h/4)}),d={},v={},h=P(u,i,d,8),g=P(l,M,v,6),y=window.requestIdleCallback?k=>requestIdleCallback(k,{timeout:120}):k=>setTimeout(()=>k(null),16),E=(k,p,R)=>{const f=b=>{const H=performance.now(),w=b&&!b.didTimeout?T(b.timeRemaining(),6,12):10;for(;k.length&&performance.now()-H<w;)k.shift()();k.length?R?setTimeout(f,0):y(f):p()};R?setTimeout(f,0):y(f)};E(h,()=>{d.coarse=!0,(t.coarse||e)(d),E(g,()=>e(v))},!0)}window.SCENE={bake:L,MON:o}})(),function(){const V=document.getElementById("gl"),T=Object.assign({bx:.415,by:-.27,ms:.034,ck:.32},window.SCENE?SCENE.MON:{x0:-6,x1:6,y0:-.8,y1:18.2}),m=P=>(Math.round(P*1e6)/1e6).toFixed(6),I=/monchk/.test(location.hash);function D(P){P=P||x;const L=ht(),e=z(),t=st(),n=Math.min(L,e),c=1+P.zm*.06,l=T.ms*P.msk,M=T.bx-P.cam*T.ck+P.mox+T.x0*l,u=T.by+T.y1*l-(P.pary*.012-P.sy*.09-P.lift);return{x:L/2+M*c*n,y:t+e/2-u*c*n,k:c,m:n,w0:(T.x1-T.x0)*l*n,h0:(T.y1-T.y0)*l*n}}const x={scr:0,ly:0,lift:0,heart:1,cool:0,fill:0,burst:0,cam:0,par:0,tint:0,streak:0,beat:0,hy:0,hs:1,mx:0,my:0,mo:0,zm:0,lk:0,lp:0,pary:0,rx:0,ry:0,rp:1,fw:0,sy:0,lv:3,mox:0,msk:1,hx:0,cpx:0,wm:1},N=Object.assign({},x),K=matchMedia("(prefers-reduced-motion: reduce)").matches,A={ok:!1,rm:K,set(P){Object.assign(N,P)},jump(P){Object.assign(N,P),Object.assign(x,P)},state:x,target:N};window.GL=A;let Y=0,et=0,ut=0,nt=null,vt=null,dt=0;function kt(P){try{const L=document.createElement("div");L.style.cssText="position:fixed;left:0;bottom:0;width:0;height:100"+P+";visibility:hidden;pointer-events:none",document.documentElement.appendChild(L);const e=L.getBoundingClientRect().height;return L.remove(),e||0}catch{return 0}}function Vt(){const P=Math.max(1,document.documentElement.clientWidth||innerWidth),L=window.visualViewport;if(L&&L.height>0&&(L.scale||1)<=1.01)return{w:Math.max(1,Math.round(L.width||P)),h:Math.max(1,Math.round(L.height)),top:Math.round(L.offsetTop||0)};const e=kt("svh"),t=kt("lvh"),n=kt("dvh"),c=e&&t&&t-e>=24?e:n||e||innerHeight;return{w:Math.max(1,Math.round(P)),h:Math.max(1,Math.round(c)),top:0}}function ft(P){const L=Vt(),e=Y&&Y>et!=L.w>L.h,t=Y&&Math.abs(L.w-Y)>2;return!et||P||t||e||Math.abs(L.h-et)>1||Math.abs(L.top-ut)>1?(Y=L.w,et=L.h,ut=L.top,document.documentElement.style.setProperty("--app-h",et+"px"),document.documentElement.style.setProperty("--app-top",ut+"px")):Y=L.w,{w:Y,h:et,top:ut}}const ht=()=>Y||document.documentElement.clientWidth||innerWidth,z=()=>et||innerHeight,st=()=>ut;A.view=()=>({w:ht(),h:z(),top:st()}),ft(!0);const Mt=(navigator.hardwareConcurrency||4)<=4||(navigator.deviceMemory||4)<=3,gt=[{s:.42,q:.5},{s:.55,q:.65},{s:.7,q:.8},{s:.85,q:1},{s:1,q:1}],Rt=/lv=([0-4])/.exec(location.hash);let X=1;const Q=()=>Math.min(1,.42/(gt[0].s*Math.max(1,mt/ht())));let _=Rt?+Rt[1]:Mt?2:3,j=gt[_].s,St=gt[_].q,bt=!1,mt=0,tt=0,J=1,$=1;x.lv=N.lv=_,K&&(x.wm=N.wm=0),document.documentElement.classList.toggle("lq",_<2);function pt(){J=Math.max(1,Math.round(mt*j*X)),$=Math.max(1,Math.round(tt*j*X)),o&&o.viewport(0,0,J,$),V.style.transform=J<mt||$<tt?`scale(${(mt/J).toFixed(5)},${(tt/$).toFixed(5)})`:"",bt=!1}function _t(){et||ft(!0);const P=Math.min(window.devicePixelRatio||1,2);let L=ht()*P,e=z()*P;const t=Math.min(1,1400/Math.max(L,e)),n=Math.round(L*t),c=Math.round(e*t);V.width!==n||V.height!==c?(mt=n,tt=c,V.width=mt,V.height=tt,nt=null,vt=null,dt=0):(mt=n,tt=c),pt()}function Ht(){const P=Y,L=et;ft(!1),(Y!==P||et!==L)&&_t()}let o;const it=!!window.WebGLRenderingContext&&!/nogl/.test(location.hash);A.ok=it,it?document.documentElement.classList.add("gl"):document.documentElement.classList.add("no-gl"),it&&requestAnimationFrame(()=>setTimeout(Ft,0));function Ft(){_t();try{o=V.getContext("webgl",{antialias:!1,alpha:!0,premultipliedAlpha:!0,powerPreference:"high-performance",preserveDrawingBuffer:!1})}catch{}if(!o){A.ok=!1,document.documentElement.classList.remove("gl"),document.documentElement.classList.add("no-gl"),requestAnimationFrame(()=>document.documentElement.classList.add("gl-ready"));return}xt();const P="attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}",L=`
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
}`,e=document.documentElement;let t=/Apple/.test(navigator.vendor||"")?null:o.getExtension("KHR_parallel_shader_compile");function n(a,s){const r=o.createShader(a);return o.shaderSource(r,s),o.compileShader(r),r}let c,l,M,u=!1;A.ok=!0,e.classList.add("gl");function i(){l&&!o.getShaderParameter(l,o.COMPILE_STATUS)&&console.warn(o.getShaderInfoLog(l)),A.ok=!1,e.classList.remove("gl"),e.classList.add("no-gl"),requestAnimationFrame(()=>e.classList.add("gl-ready"))}const d={},v={f:`#define HEART
#define FW
`,h:`#define HEART
`,b:"",hl:`#define HEART
#define NOMARCH
`,fl:`#define HEART
#define FW
#define NOMARCH
`},h={};let g=null;function y(a){const s=n(o.VERTEX_SHADER,P),r=n(o.FRAGMENT_SHADER,(I?`#define MONCHK
`:"")+v[a]+L),U=o.createProgram();return o.attachShader(U,s),o.attachShader(U,r),o.bindAttribLocation(U,0,"p"),o.linkProgram(U),h[a]={P:U,f:r,U:null,ok:!1}}function E(a){o.useProgram(a.P),a.U={},["R","t","q",...Object.keys(x)].forEach(s=>a.U[s]=o.getUniformLocation(a.P,s)),o.uniform1i(o.getUniformLocation(a.P,"TM"),0),o.uniform1i(o.getUniformLocation(a.P,"TC"),1),a.ok=!0,g=a}const k=["hl","h","b","fl"];let p=0;function R(a,s){if(!u&&(p=1,a.forEach(r=>h[r]||y(r)),!t&&s)){const r=()=>{if(x.beat>.5)return setTimeout(r,500);f(!0)};setTimeout(r,s)}}function f(a){if(!(!p||u))for(const s of k){const r=h[s];if(!(!r||r.ok||r.bad)){if(t&&!a){if(o.getProgramParameter(r.P,t.COMPLETION_STATUS_KHR)!==!0)continue}else if(!a)continue;o.getProgramParameter(r.P,o.LINK_STATUS)?E(r):r.bad=!0}}}const b=/fullprog/.test(location.hash),H=a=>h[a]&&h[a].ok?h[a]:null;function w(a){a!==g&&(o.useProgram(a.P),g=a);const s=a.U;o.uniform2f(s.R,J,$),o.uniform1f(s.t,qt),o.uniform1f(s.q,St);for(const r in x)o.uniform1f(s[r],x[r])}function C(){const a=Math.sqrt(1.5)*x.hs,s=a<3.2?2.1*Math.tan(Math.asin(a/3.2)):99,r=.755/1.52*x.hs,U=r*(1.03+.28*x.fill+.2*x.beat),W=x.burst>.01?x.hs*1.932/(3.2-.92*x.hs)+.26:0,q=x.burst>.01?Math.max(s,W):Math.min(s,Math.max(U,W)),O=1+x.zm*.06,lt=Math.min(J,$),Wt=.065+.05*x.fill+.08*Math.max(0,x.burst),Ot=x.pary*.012-x.sy*.09-x.lift,Ct=.5*J+x.hx*O*lt,Lt=.5*$+(x.hy-Ot)*O*lt,yt=(q+Wt)*O*lt+2,Et=Math.max(0,Math.floor(Ct-yt)),Tt=Math.max(0,Math.floor(Lt-yt)),Pt=Math.min(J,Math.ceil(Ct+yt)),ne=Math.min($,Math.ceil(Lt+yt));return Pt>Et&&ne>Tt?[Et,Tt,Pt-Et,ne-Tt]:null}let F=null;function B(){if(F||!o)return F;const a="attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}",s="precision mediump float;uniform sampler2D u;uniform vec2 B,S;void main(){gl_FragColor=texture2D(u,(gl_FragCoord.xy-B)/S);}",r=o.createProgram(),U=(W,q)=>{const O=o.createShader(W);o.shaderSource(O,q),o.compileShader(O),o.attachShader(r,O)};return U(o.VERTEX_SHADER,a),U(o.FRAGMENT_SHADER,s),o.linkProgram(r),o.getProgramParameter(r,o.LINK_STATUS)?(F={P:r,U:{u:o.getUniformLocation(r,"u"),B:o.getUniformLocation(r,"B"),S:o.getUniformLocation(r,"S")}},F):(F={bad:!0},F)}function Z(a){!o||!a||a[2]<2||a[3]<2||(nt||(nt=o.createTexture()),o.activeTexture(o.TEXTURE2),o.bindTexture(o.TEXTURE_2D,nt),o.copyTexImage2D(o.TEXTURE_2D,0,o.RGBA,a[0],a[1],a[2],a[3],0),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAG_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),vt=a.slice())}function G(a){const s=B();return!s||s.bad||!nt?!1:(o.useProgram(s.P),g=null,o.activeTexture(o.TEXTURE2),o.bindTexture(o.TEXTURE_2D,nt),o.uniform1i(s.U.u,2),o.uniform2f(s.U.B,a[0],a[1]),o.uniform2f(s.U.S,a[2],a[3]),o.enable(o.SCISSOR_TEST),o.scissor(a[0],a[1],a[2],a[3]),o.drawArrays(o.TRIANGLES,0,3),o.disable(o.SCISSOR_TEST),!0)}let S="f";function ot(a){const s=a||b||x.fw>.01?"f":x.heart>.01?"h":"b";if(!t&&p&&!a){const O=s==="b"?h.b:h[s+"l"];O&&!O.ok&&!O.bad&&f(!0)}if(s==="b"){const O=H("b")||H("hl");if(O)return w(O),S=O===h.b?"b":"hl",o.drawArrays(o.TRIANGLES,0,3)}const r=s!=="b"&&!a&&!b?H(s+"l"):null,U=H(s)||h.f;if(!r)return w(U),S=U===h.f?"f":s,o.drawArrays(o.TRIANGLES,0,3);w(r),o.drawArrays(o.TRIANGLES,0,3);const W=C();S=s+"l+"+(U===h.f?"f":s);const q=x.heart>.01&&x.fill<.02&&x.burst<.01&&x.fw<.01&&x.lk<.01&&Math.abs(x.zm)<.02&&x.rp>.98;if(!q)dt=0,vt=null;else if(vt&&nt&&dt++&1&&G(vt)){S+="+cache";return}W&&(o.enable(o.SCISSOR_TEST),o.scissor(W[0],W[1],W[2],W[3]),w(U),o.drawArrays(o.TRIANGLES,0,3),o.disable(o.SCISSOR_TEST),q&&Z(W))}A.prog=()=>S,A.pstat=()=>({extra:p,par:!!t,p:Object.keys(h).map(a=>a+":"+(h[a].ok?"ok":h[a].bad?"bad":"wait")).join(" "),box:C()}),A.snap=a=>{ot(a);const s=new Uint8Array(J*$*4);return o.readPixels(0,0,J,$,o.RGBA,o.UNSIGNED_BYTE,s),s};function rt(){if(u)return;if(!o.getProgramParameter(M,o.LINK_STATUS))return i();const a=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,a),o.bufferData(o.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),o.STATIC_DRAW),o.enableVertexAttribArray(0),o.vertexAttribPointer(0,2,o.FLOAT,!1,0,0),E(h.f),Object.assign(d,h.f.U),xt(),A.scene&&$t(),pt(),Kt=!0,wt||(wt=!0,At=performance.now(),requestAnimationFrame(jt)),t?setTimeout(()=>{R(["hl","h"],0),setTimeout(()=>R(["b","fl"],0),600)},300):(["hl","h"].forEach(s=>h[s]||y(s)),p=1,f(!0),setTimeout(()=>R(["b","fl"],0),1200))}function xt(){if(A.baking||!window.SCENE)return;A.baking=!0;const a=Math.min(ht(),z()),s=Math.min(window.devicePixelRatio||1,2),r=U=>{A.scene=U,ce(U),Kt&&!u&&o&&$t()};SCENE.bake(r,{mw:12*.034*a*s,cw:.6*1.35*a*s,coarse:r})}let It=[];function $t(){const a=A.scene;It.forEach(s=>o.deleteTexture(s)),It=[],[[a.mon,a.M],[a.cape,a.Cp]].forEach(([s,r],U)=>{const W=o.createTexture();It.push(W),o.activeTexture(o.TEXTURE0+U),o.bindTexture(o.TEXTURE_2D,W),o.texImage2D(o.TEXTURE_2D,0,o.RGBA,r.w,r.h,0,o.RGBA,o.UNSIGNED_BYTE,s),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAG_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}),A.jump({ly:a.lampY}),A.set({scr:1}),window.__emblem&&!A._fitLy&&(A._fitLy=!0,window.__emblem())}const ct=document.createElement("canvas");ct.id="monx",ct.setAttribute("aria-hidden","true"),V.parentNode.insertBefore(ct,V);let Nt=!1,Yt=!1,Jt=0;function ce(a){!a.ov||I||(ct.width=a.M.w,ct.height=a.M.h,ct.getContext("2d").putImageData(new ImageData(a.ov,a.M.w,a.M.h),0,0),Yt=!0)}function se(){const a=(1-Math.min(1,Math.max(0,(x.cam-1.3)/.7))**2*(3-2*Math.min(1,Math.max(0,(x.cam-1.3)/.7))))*x.scr,s=Yt&&!u&&a>.004;if(s!==Nt&&(Nt=s,ct.style.display=s?"block":"none"),!s)return;const r=D(),U=r.w0.toFixed(2);U!==Jt&&(Jt=U,ct.style.width=r.w0.toFixed(2)+"px",ct.style.height=r.h0.toFixed(2)+"px"),ct.style.transform=`translate3d(${r.x.toFixed(2)}px,${r.y.toFixed(2)}px,0) scale(${r.k.toFixed(5)})`}function Qt(){for(const s in h)delete h[s];p=0,g=null;const a=y("f");if(M=a.P,l=a.f,t||(p=1,y("hl"),y("h")),t){const s=()=>{if(u)return;const r=o.getProgramParameter(M,t.COMPLETION_STATUS_KHR);typeof r!="boolean"?(t=null,rt()):r?rt():requestAnimationFrame(s)};requestAnimationFrame(s)}else requestAnimationFrame(()=>setTimeout(rt,0))}Qt(),V.addEventListener("webglcontextlost",a=>{a.preventDefault(),u=!0,Nt=!1,ct.style.display="none",It=[],nt=null,vt=null,F=null,dt=0,wt=!1,A.ok=!1,e.classList.remove("gl"),e.classList.add("no-gl")},!1),V.addEventListener("webglcontextrestored",()=>{u=!1,A.ok=!0,e.classList.remove("no-gl"),e.classList.add("gl"),pt(),Qt()},!1);function te(a,s){a=Math.max(0,Math.min(4,a)),a!==_&&(_=a,N.lv=a,document.documentElement.classList.toggle("lq",a<2),j=gt[a].s,St=gt[a].q,bt=!0,s&&pt())}A.pulse=()=>{bt&&pt(),t||f(!0)};let Dt=60;const at=[];A.quality=()=>({level:_,ex:+X.toFixed(2),fps:Math.round(Dt),scale:+j.toFixed(2),q:St,w:J,h:$,pending:bt}),Object.defineProperty(A,"level",{get:()=>_}),addEventListener("resize",Ht),addEventListener("orientationchange",()=>{ft(!0),_t()}),window.visualViewport&&(visualViewport.addEventListener("resize",Ht),visualViewport.addEventListener("scroll",Ht)),addEventListener("pointermove",a=>{N.par=(a.clientX/innerWidth-.5)*2},{passive:!0}),addEventListener("pointermove",a=>{N.pary=(a.clientY/innerHeight-.5)*2},{passive:!0}),addEventListener("deviceorientation",a=>{a.gamma!=null&&(N.par=Math.max(-1,Math.min(1,a.gamma/30))),a.beta!=null&&(N.pary=Math.max(-1,Math.min(1,(a.beta-45)/35)))},{passive:!0});let Xt=0,At=0,qt=0;const ie={streak:9,burst:2.2,zm:3.2,lk:6,fw:1.6,lv:1.2};function jt(a){if(u){wt=!1;return}Xt||(Xt=At=a);const s=Math.min(.05,(a-At)/1e3);At=a,qt+=s*(K?.25:1);for(const r in N)x[r]+=(N[r]-x[r])*Math.min(1,s*(ie[r]||2.6));t&&f(!1),A.t=qt,se(),ot(!1),A.ready||(A.ready=!0,requestAnimationFrame(()=>document.documentElement.classList.add("gl-ready"))),re(a),document.hidden?wt=!1:requestAnimationFrame(jt)}let Bt=0,zt=0,Ut=0,Zt=0,ee=-1e9,Gt=1e4,oe=0,ae=0;function re(a){const s=a-ae;if(ae=a,Rt||(zt||(zt=a+700),a<zt)||a<oe||s<=0||s>4e3)return;if(at.push(s),at.length>90&&at.shift(),!Bt){Bt=a+1e3,at.length=0;return}if(a<Bt||at.length<4)return;const r=a-Xt<3200;Bt=a+(r?600:2e3);const U=at.slice().sort((O,lt)=>O-lt),W=U[U.length>>1];Dt=1e3/(at.reduce((O,lt)=>O+lt,0)/at.length);const q=Math.min(Dt,1e3/W);q<(r?50:46)&&_===0&&X>Q()+.01?(X=Math.max(Q(),X*(q<25?.64:.8)),pt(),Zt=a,Ut=0,at.length=0):q<(r?50:46)?(te(r?_-(q<25?2:1):q<15?0:_-(q<30?2:1),q<35),a-ee<15e3&&(Gt=Math.min(Gt*2,8e4)),Zt=a,Ut=0,at.length=0):1e3/W>=56&&Dt>=50&&a-Zt>Gt?++Ut>=3&&(X<1?(X=Math.min(1,X/.8),bt=!0):te(_+1,!1),ee=a,Ut=0,at.length=0):Ut=0}let wt=!1,Kt=!1;document.addEventListener("visibilitychange",()=>{Kt&&!document.hidden&&!wt&&(wt=!0,At=performance.now(),oe=At+600,at.length=0,requestAnimationFrame(jt))}),A.monRect=D,A.MP=T,A.lightRect=function(a){a=a||x;const s=ht(),r=z(),U=st(),W=Math.min(s,r),q=1+a.zm*.06,O=a.pary*.012-a.sy*.09-a.lift,lt=-.2,Wt=lt-.03,Ot=lt-.045,Ct=1.35,Lt=-.12-a.cam*.15+a.cpx-.125*Ct,yt=Ot+((a.ly||Wt+.12)-Wt)*Ct,Et=Pt=>s/2+Pt*q*W,Tt=Pt=>U+r/2-(Pt-O)*q*W;return{x0:Et(Lt-.022),x1:Et(Lt+.07),y0:Tt(yt+.035),y1:Tt(Ot-.005),lamp:[Et(Lt),Tt(yt)]}},A.uv=(a,s)=>{const r=ht(),U=z(),W=st(),q=Math.min(r,U);return[(a-r/2)/q,(U/2-(s-W))/q]}}}();
