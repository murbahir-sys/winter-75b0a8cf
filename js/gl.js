(function(){const q=e=>e-Math.floor(e),T=(e,t,n)=>e<t?t:e>n?n:e,u=(e,t,n)=>{const c=T((n-e)/(t-e),0,1);return c*c*(3-2*c)},U=(e,t,n)=>e+(t-e)*n,C=e=>q(Math.sin(e*127.1)*43758.5453),v=(e,t)=>{e=q(e*123.34),t=q(t*456.21);const n=e*(e+45.32)+t*(t+45.32);return e+=n,t+=n,q(e*t)},j=e=>{const t=Math.floor(e);let n=e-t;return n=n*n*(3-2*n),U(C(t),C(t+1),n)},Y=(e,t)=>{const n=Math.floor(e),c=Math.floor(t);let l=e-n,w=t-c;return l=l*l*(3-2*l),w=w*w*(3-2*w),U(U(v(n,c),v(n+1,c),l),U(v(n,c+1),v(n+1,c+1),l),w)},R=(e,t,n,c,l,w)=>{const b=Math.abs(e-n)-l,i=Math.abs(t-c)-w;return Math.hypot(Math.max(b,0),Math.max(i,0))+Math.min(Math.max(b,i),0)},Q=(e,t)=>t<0?U(4.85,1.45,u(.4,8.4,e)):U(4.6,1.1,u(0,7.6,e)),et=e=>(e<0?7.1:6.4)-.5*j(e*1.7+3);function st(e,t){const n=e<0?-1:1,c=.45*j(t*1.3+n*7)+.25*j(t*3.7+n*3)-.3;return Math.max(Math.abs(e)-Q(t,n)-c,Math.max(-t-.6,t-et(e)))}const mt=[];(function(){let e=-1,t=0;for(;e<8.4;){const n=U(1.5,.62,u(-.5,7.5,e))*(.85+.3*C(t*3.1+.7)),c=e+n*.5,l=[];let w=-Q(c,-1)-.7-C(t*7.7)*.6*n,b=0;for(;w<Q(c,1)+.7;){const i=C(t*17.3+b*7.9+.31),r=n*(.95+1*C(t*13.1+b*2.3)),m=w+r*.5,d=c+(C(t*5.3+b*1.7)-.5)*n*.4;if(st(m,d)<-.05*n){const y=r*.62,k=n*.66*(.85+.3*C(b*4.1+t)),g=5+Math.floor(C(i*13.7)*4),E=C(i*5.1)*6.283,p=[(C(i*31)-.5)*.35*y,(.15+(C(i*57)-.5)*.3)*k],A=.42+.25*C(i*91),h=[],x=[];for(let M=0;M<g;M++){const H=E+6.2832*(M+.55*(C(i*7.3+M*1.91)-.5))/g,F=.86+.26*C(i*3.9+M*2.37),O=Math.cos(H)*y*F,z=Math.sin(H)*k*F;h.push([O,z])}h.forEach(M=>x.push(Math.atan2(M[1]-p[1],M[0]-p[0])));const _=[];for(let M=0;M<g;M++){const H=h[M],F=h[(M+1)%g],O=F[0]-H[0],z=F[1]-H[1],$=Math.hypot(O,z)||1,S=z/$,nt=-O/$,lt=Math.abs((p[0]-H[0])*S+(p[1]-H[1])*nt),bt=(.55+1.7*C(i*11.1+M*3.7))*.45*Math.min(y,k)/Math.max(.05,(1-A)*lt);_.push({ox:S,oy:nt,el:$,sl:bt,j:(C(i*19+M)-.5)*.25})}l.push({cx:m,cy:d,rx:y,ry:k,V:h,A:x,F:_,P:p,kin:A,n:g,s:i,z:-d+(C(t*4.4+b)-.5)*.7*n,fx:(C(i*41)-.5)*.5,fy:.25+(C(i*67)-.5)*.5,rust:i>.91})}w+=r*(.62+.14*C(t+b*9.9)),b++}mt.push({lo:e-n*.5,hi:e+n*1.5,st:l}),e+=n*.64,t++}})();function At(e,t,n){const c=t-e.cx-e.P[0],l=n-e.cy-e.P[1];let w=Math.atan2(l,c),b=0;for(let p=0;p<e.n;p++){const A=e.A[p],h=e.A[(p+1)%e.n];let x=w-A,_=h-A;if(x-=Math.floor(x/6.2832)*6.2832,_-=Math.floor(_/6.2832)*6.2832,x<=_){b=p;break}}const i=e.V[b],r=e.V[(b+1)%e.n],m=e.F[b],d=t-e.cx,y=n-e.cy,k=-((d-i[0])*m.ox+(y-i[1])*m.oy),g=[e.P[0]+(i[0]-e.P[0])*e.kin,e.P[1]+(i[1]-e.P[1])*e.kin],E=-((d-g[0])*m.ox+(y-g[1])*m.oy);return[k,E>0?-1:b,E]}function xt(e,t,n){let c=9,l=null,w=-1e9,b=null;for(const i of mt)if(!(t<i.lo||t>i.hi))for(const r of i.st){if(Math.abs(e-r.cx)>r.rx*1.3||Math.abs(t-r.cy)>r.ry*1.3)continue;const m=At(r,e,t);-m[0]<c&&(c=-m[0]),n&&m[0]>0&&r.z>w&&(w=r.z,l=r,b=m)}return n?[c,l,b]:c}function wt(e,t){return t<-.6?Math.max(xt(e,t),-t-.6):Math.min(xt(e,t),st(e,t)+.35)}function ut(e,t){const[,n,c]=xt(e,t,!0),l=(.4+.6*u(-.4,3,t))*(1-.45*u(5,8.5,t))*(1-.3*u(2.5,5,Math.abs(e))),w=.82+.18*Y(e*23,t*23)+(v(Math.floor(e*50),Math.floor(t*50))>.92?.2:0)-(v(Math.floor(e*50)+7,Math.floor(t*50)+3)>.9?.16:0);if(!n){const S=.5+.5*Y(e*3,t*3);return[.03*S+.035*l,.025*S+.022*l,.026*S+.01*l]}const[b,i,r]=c;let m,d=0;if(i<0)m=W(n.fx,n.fy,1),d=u(.035,0,r);else{const S=n.F[i];m=W(S.ox*S.sl+S.j,S.oy*S.sl+S.j*.5,1),d=u(.035,0,-r)*.6}m=W(m[0]+(Y(e*9+n.s*9,t*9)-.5)*.12,m[1]+(Y(e*9+4,t*9+n.s*7)-.5)*.12,m[2]);const y=.5+.5*m[1],k=Math.max(0,G(m,D))*l,g=Math.max(0,G(m,J)),E=U(.72,1,u(0,.18,b))*(i>=0&&n.F[i].oy<-.5?.82:1),p=Math.abs(e),A=t>4&&t<8.4?U(.6,1,u(0,.6,p-ot(Math.min(t,8.3)))):1;let h=n.rust?[.56,.44,.36]:[.47,.45,.44];const x=.62+.5*C(n.s*77);h=h.map(S=>S*x);const _=u(1.1,.15,t);h=h.map(S=>S*(1-.55*_));const M=.7*u(.6,0,t)*u(.35,.7,Y(e*3.5,t*8));h=[U(h[0],.1,M),U(h[1],.14,M),U(h[2],.08,M)];const H=E*w*A*(1+.22*d);let F=h[0]*(.02+.08*y+.6*k+.14*g)*H,O=h[1]*(.02+.08*y+.39*k+.17*g)*H,z=h[2]*(.025+.11*y+.19*k+.27*g)*H;const $=_*Math.pow(Math.max(0,G(m,W(D[0],D[1],D[2]+1))),24)*l;return F+=.5*$,O+=.35*$,z+=.2*$,[F,O,z]}const ot=e=>e<5.7?1.85-.12*u(5.45,5.7,e):e<7.85?1.15:e<8.05?1.22:e<8.3?1.36:1.25;function Lt(e){const t=T((e-14.2)/1.25,0,1);let n=U(.44,.66,t*t);return n+=.05*Math.max(0,Math.sin((e-14.2)*9)),n}function at(e,t){const n=Math.abs(e);let c=wt(e,t);return t>4.2&&t<8.4&&(c=Math.min(c,Math.max(n-ot(t),Math.max(4.4-t,t-8.4)))),c=Math.min(c,Math.max(n-U(.62,.5,u(8.4,8.8,t))-.04*Math.sin((t-8.4)*15.7),Math.max(8.35-t,t-8.82))),c=Math.min(c,R(e,t,0,11.5,U(.47,.42,T((t-8.8)/5.5,0,1)),2.72)),c=Math.min(c,Math.max(n-Lt(t),Math.max(14.2-t,t-15.45))),c=Math.min(c,Math.hypot(n-.62,t-15.32)-.11),c=Math.min(c,Math.max(n-.76,Math.abs(t-15.53)-.08)),t>15.55&&(c=Math.min(c,rt(e/it,pt+(t-pt)/it)*it)),c}const it=1.3,pt=15.61;function rt(e,t){const n=Math.abs(e);let c=9;const l=.35;c=Math.min(c,Math.hypot(e,(t-16.05-l)/2.1)-.2),c=Math.min(c,Math.max(n-.16+(t-15.7-l)*.2,Math.abs(t-15.82-l)-.1)),c=Math.min(c,Math.hypot(n-.17,t-16.64-l)-.1),c=Math.min(c,Math.max(Math.abs(t-16.6-l+(n-.24)*.3)-.035,Math.abs(n-.29)-.06)),c=Math.min(c,R(n,t,0,16.6+l,.06,.1)),c=Math.min(c,Math.max(n-.12+(t-16.78-l)*.3,Math.abs(t-16.88-l)-.11)),c=Math.min(c,Math.hypot(e,t-17-l)-.04);const w=16.12+l+n*.22+u(.4,.5,q(n*5+.2))*.08*u(.75,1.05,n),b=16.48+l+n*.3-.16*u(.95,1.32,n);return c=Math.min(c,Math.max(Math.max(n-1.32,t-b),w-t)),c=Math.min(c,Ht(e,t)),c}function Ht(e,t){const n=Math.hypot(e,t-15.98);let c=Math.abs(n-.3)-.06-.025*Math.sin(Math.atan2(t-15.98,e)*14);return c=Math.min(c,R(e,t,0,16.17,.012,.1)),c=Math.min(c,R(e,t,0,15.93,.025,.17),R(e,t,0,16.05,.1,.018)),c=Math.min(c,Math.max(Math.abs(Math.hypot(e,t-15.86)-.14)-.022,t-15.82)),c}const D=(()=>{const e=[.38,-.5,.78],t=Math.hypot(...e);return e.map(n=>n/t)})(),J=(()=>{const e=[-.72,.5,.48],t=Math.hypot(...e);return e.map(n=>n/t)})(),W=(e,t,n)=>{const c=Math.hypot(e,t,n)||1;return[e/c,t/c,n/c]},G=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2];function vt(e,t,n,c){const l=Math.max(0,G(e,D)),w=Math.max(0,G(e,J)),b=Math.pow(Math.max(0,G(e,W(D[0],D[1],D[2]+1))),14),i=Math.pow(Math.max(0,G(e,W(J[0],J[1],J[2]+1))),10),r=c*(1-.45*u(8.5,17,n));return[.035+.16*l*r+.04*w+.9*b*r+.22*i,.026+.1*l*r+.05*w+.6*b*r+.27*i,.018+.04*l*r+.07*w+.3*b*r+.36*i]}function gt(e,t){const c=at(e,t),l=(at(e+.03,t)-at(e-.03,t))/(2*.03),w=(at(e,t+.03)-at(e,t-.03))/(2*.03),b=u(t<8.4?-.04:-.1,0,c);let i=W(l*b*1.6,w*b*1.6,1);const r=Math.abs(e);let m,d,y;const k=t>pt,g=k?e/it:e,E=k?pt+(t-pt)/it:t,p=k&&Ht(g,E)<.005;if(!p&&t<8.6&&!(t>4.2&&t<8.4&&r<ot(t))&&wt(e,t)<=.02)[m,d,y]=ut(e,t);else if(!p&&t<8.4){const A=ot(t),h=e/A;let x;t<5.7||t>7.85?x=W(h*.9,0,1):x=h<-.414?W(-.707,0,.707):h>.414?W(.707,0,.707):[0,0,1],t>8.05&&t<8.3&&(x=W(x[0],-.55,x[2])),t>7.85&&t<8.05&&(x=W(x[0],.5,x[2])),i=W(x[0]+i[0]*.3,x[1]+i[1]*.3,x[2]);const _=Math.max(0,G(i,D))*(1.15-.45*u(4.4,8.4,t)),M=Math.max(0,G(i,J)),H=t>7.6&&t<7.85?U(.45,1,u(7.62,7.84,t)):1,F=(t-4.4)/.62,O=Math.floor(F),z=Math.abs(q(F)-.5)*.62,$=Math.abs(q(e/.78+O%2*.5)-.5)*.78,S=(t>5.7&&t<7.85?.62+.38*u(.012,.03,Math.min(.31-z,Math.abs(h)<.414?$:1)):1)*(1+.25*u(.03,0,Math.abs(t-5.7))-.35*u(.03,0,Math.abs(t-5.66))+.3*u(.025,0,Math.abs(t-8.29))+.2*u(.02,0,Math.abs(t-7.87))-.4*u(.02,0,Math.abs(t-8.04))+.25*u(.02,0,Math.abs(t-4.62))-.3*u(.02,0,Math.abs(t-4.58))),nt=Math.abs(Math.abs(h)-.414)<.02&&t>5.7&&t<7.85?1.12:1,lt=t>6.6&&t<7.45&&r<.42?r>.38||t<6.64||t>7.41?1.12:.9:1,bt=H*S*nt*lt*(.84+.16*Y(e*24,t*24)+(v(Math.floor(e*55),Math.floor(t*55))>.93?.12:0))*(.92+.1*Y(e*3+O,t*3))*(t<5.7?.78-.15*u(5.4,5.7,t):1)*(h<-.414&&t>5.7&&t<7.85?.8:1);m=(.04+.5*_+.09*M)*bt,d=(.037+.39*_+.11*M)*bt,y=(.04+.27*_+.16*M)*bt}else if(!p&&t<14.2&&t>=8.82){const A=U(.47,.42,T((t-8.8)/5.5,0,1)),h=T(e/A,-.999,.999),x=.04*Math.sin(Math.asin(h)*10);i=W(h+x,0,Math.sqrt(1-h*h));const _=1.05-.5*u(8.8,14.2,t),M=Math.max(0,G(i,D)+.15)*_,H=Math.max(0,G(i,J)),F=Math.pow(Math.max(0,G(i,W(J[0],J[1],J[2]+1))),20);m=.03+.6*M+.12*H+.2*F,d=.028+.46*M+.15*H+.25*F,y=.03+.3*M+.21*H+.33*F}else{if(t>=14.2&&t<15.45&&!p){const h=t<14.8?0:1,x=e*(h?7:6)+h*.5,_=(t-(h?14.8:14.2))/.6,M=_-(.55+.3*Math.abs(Math.sin(x*Math.PI)));i=W(i[0]+.12*Math.sin(x*Math.PI*2)*_,i[1]-1.1*u(-.04,.06,M)*u(.22,.08,M)+.15,i[2])}if(E>16.3&&Math.abs(g)>.3&&!p){const h=E-(16.47+Math.abs(g)*.22);i=W(i[0]+.12*Math.sin((r*3-h*4)*6),i[1]+.3-.6*u(.05,.3,h),i[2])}t>=8.3&&t<8.82&&(i=W(i[0]*.5+e*.9,Math.cos((t-8.35)*6.7)*.8,1)),[m,d,y]=vt(i,g,E,p?1.25:t>=14.2&&t<15.45?.75:1);const A=k?1.95:1.5;if(k){const h=u(-.09,0,c)*Math.max(0,-l*.7+w*.7);m+=.16*h,d+=.2*h,y+=.28*h}return[m*A,d*A,y*A]}return[m*1.45,d*1.45,y*1.45]}const tt=-.2,K=tt-.03,dt=e=>e<-.03?-9:K-.004+.13*u(-.02,.09,e)+.007*j(e*48)+.0035*j(e*160)+.012*u(.1,.45,e),yt=.125,It=dt(yt),o=(()=>{const e=[-.75,.55,.45],t=Math.hypot(...e);return e.map(n=>n/t)})();function Ft(e,t,n){const c=dt(e);let l=0,w=0,b=0,i=0;if(t>K-.006&&(l=T((c-t)/n+.5,0,1)*T((t-(K-.006))/n,0,1),l>0)){const y=(z,$)=>{const S=z*70,nt=$*105,lt=1-Math.abs(Y(S*.55,nt*.4)-.5)*2;return .5*lt*lt+.28*Y(S*1.6,nt*1.3)+.1*Y(S*4.5,nt*4.5)+.22*u(.35,.65,q(nt*.11+j(S*.35)*.7))},g=y(e,t),E=-(y(e-.0015,t)-y(e+.0015,t))/(2*.0015)*.01,p=-(y(e,t+.0015)-y(e,t-.0015))/(2*.0015)*.01,A=W(E,p,1),h=Math.max(0,G(A,o)),x=.55+.45*A[1],_=.45+.55*u(.15,.65,g),M=.85+.15*Y(e*900,t*900)+(v(Math.floor(e*1500),Math.floor(t*1500))>.93?.18:0),H=U(1,.55,u(c-.004,c-.09,t))*_*M;w=(.07*x+.3*h)*H,b=(.066*x+.31*h)*H,i=(.088*x+.4*h)*H;const F=u(.012,0,c-t)*.55+u(.004,0,c-t)*.4;w+=.55*F,b+=.6*F,i+=.82*F;const O=u(.012,0,t-K)*(.5+.5*j(e*300));w=w*(1-.3*O)+.08*O*h,b=b*(1-.3*O)+.1*O*h,i=i*(1-.3*O)+.14*O*h}const r=(t-It)/1.4,m=(yt-e)/1.4;let d=null;if(r>-.012&&r<.1&&m>-.045&&m<.06){const y=U(.0085,.0058,T(r/.07,0,1));if(r<.07&&Math.abs(m)<y){const p=.75+.7*u(y,-y,m);d=q(r*42)>=.5?[.3*p,.07*p,.07*p]:[.38*p,.37*p,.42*p]}r>.068&&r<.072&&Math.abs(m)<.0095&&(d=[.12,.1,.11]),r>.072&&r<.084&&Math.abs(m)<.0052&&(d=[1.5,1.2,.8]),r>.084&&r<.092&&Math.abs(m)<.0065-(r-.084)*.8&&(d=[.16,.1,.09]);const k=.009,g=.046,E=.022;if(m>k&&m<g&&r<E&&r>-.012){const p=u(g,k,m);d=[.13+.12*p,.12+.12*p,.15+.16*p];const A=Math.abs(m-.028),h=Math.abs(r-.009);if(A<.0055&&h<.0045)d=A<8e-4||h<6e-4?[.3,.18,.08]:[1.35,.9,.42];else{const x=Math.exp(-Math.hypot(A,h)*160)*.5;d=[d[0]+x,d[1]+x*.62,d[2]+x*.25]}}if(m>k-.003&&m<g+.003&&r>=E&&r<E+.013-Math.abs(m-(k+g)/2)*.6){const p=u(E+.004,E+.012-Math.abs(m-(k+g)/2)*.6,r);d=[.1+.25*p,.07+.25*p,.08+.32*p]}d&&([w,b,i]=d,l=1)}return[w,b,i,l]}const Mt={x0:-6,x1:6,y0:-.8,y1:18.2},L=e=>Math.round(T(Math.pow(T(e,0,1.6)/1.6,1/2.2),0,1)*255),I=(e,t)=>{const n=.3*e[0]+.59*e[1]+.11*e[2],c=u(.02,.5,n),l=[U(.93,1.05,c),U(.95,1,c),U(1.07,.93,c)][t];return Math.round(T(Math.pow(1-Math.exp(-1.7*e[t]*l*.97),.96),0,1)*255)};function B(e,t,n,c){const l=n.mon=new Uint8Array(e.w*e.h*4),w=n.ov=new Uint8ClampedArray(e.w*e.h*4),b=n.cape=new Uint8Array(t.w*t.h*4),i=(e.x1-e.x0)/e.w,r=(t.u1-t.u0)/t.w,m=[];for(let d=0;d<e.h;d+=c)m.push(()=>{for(let y=d;y<Math.min(e.h,d+c);y++){const k=e.y0+(y+.5)/e.h*(e.y1-e.y0);for(let g=0;g<e.w;g++){const E=e.x0+(g+.5)/e.w*(e.x1-e.x0);let p=at(E,k);if(p>2.5*i)continue;let A=E,h=k;if(p>-.3*i){const F=i*.5,O=at(E+F,k)-at(E-F,k),z=at(E,k+F)-at(E,k-F),$=Math.hypot(O,z)||1,S=Math.max(p,0)+.6*i;A=E-O/$*S,h=k-z/$*S}const x=gt(A,h),_=(y*e.w+g)*4,M=((e.h-1-y)*e.w+g)*4,H=T(.5-p/i,0,1);H>0&&(l[_]=L(x[0]),l[_+1]=L(x[1]),l[_+2]=L(x[2]),l[_+3]=Math.round(H*255)),w[M]=I(x,0),w[M+1]=I(x,1),w[M+2]=I(x,2),w[M+3]=Math.round(T(.5-(p-1.6*i)/i,0,1)*255)}}});for(let d=0;d<t.h;d+=c)m.push(()=>{for(let y=d;y<Math.min(t.h,d+c);y++){const k=t.y0+(y+.5)/t.h*(t.y1-t.y0);for(let g=0;g<t.w;g++){const E=t.u0+(g+.5)/t.w*(t.u1-t.u0),p=Ft(E,k,r),A=(y*t.w+g)*4;p[3]<=0||(b[A]=L(p[0]),b[A+1]=L(p[1]),b[A+2]=L(p[2]),b[A+3]=Math.round(p[3]*255))}}});return Object.assign(n,{M:e,Cp:t,lampY:It+.083*1.4,lampU:yt}),m}function V(e,t){t=t||{};const n=Math.round(T(t.mw||320,160,520)/2)*2,c=Math.round(T(t.cw||512,256,768)),l=Object.assign({w:n,h:Math.round(n*(Mt.y1-Mt.y0)/(Mt.x1-Mt.x0))},Mt),w={w:c,h:Math.round(c*.45),u0:-.04,u1:.56,y0:K-.01,y1:K+.26},b=Object.assign({},l,{w:Math.round(n/4),h:Math.round(l.h/4)}),i=Object.assign({},w,{w:Math.round(c/4),h:Math.round(w.h/4)}),r={},m={},d=B(b,i,r,8),y=B(l,w,m,6),k=window.requestIdleCallback?E=>requestIdleCallback(E,{timeout:120}):E=>setTimeout(()=>E(null),16),g=(E,p,A)=>{const h=x=>{const _=performance.now(),M=x&&!x.didTimeout?T(x.timeRemaining(),6,12):10;for(;E.length&&performance.now()-_<M;)E.shift()();E.length?A?setTimeout(h,0):k(h):p()};A?setTimeout(h,0):k(h)};g(d,()=>{r.coarse=!0,(t.coarse||e)(r),g(y,()=>e(m))},!0)}window.SCENE={bake:V,MON:Mt}})(),function(){const q=document.getElementById("gl"),T=Object.assign({bx:.415,by:-.27,ms:.034,ck:.32},window.SCENE?SCENE.MON:{x0:-6,x1:6,y0:-.8,y1:18.2}),u=L=>(Math.round(L*1e6)/1e6).toFixed(6),U=/monchk/.test(location.hash);function C(L){L=L||v;const I=ut(),B=ot(),V=Lt(),e=Math.min(I,B),t=1+L.zm*.06,n=T.ms*L.msk,c=T.bx-L.cam*T.ck+L.mox+T.x0*n,l=T.by+T.y1*n-(L.pary*.012-L.sy*.09-L.lift);return{x:I/2+c*t*e,y:V+B/2-l*t*e,k:t,m:e,w0:(T.x1-T.x0)*n*e,h0:(T.y1-T.y0)*n*e}}const v={scr:0,ly:0,lift:0,heart:1,cool:0,fill:0,burst:0,cam:0,par:0,tint:0,streak:0,beat:0,hy:0,hs:1,mx:0,my:0,mo:0,zm:0,lk:0,lp:0,pary:0,rx:0,ry:0,rp:1,fw:0,sy:0,lv:3,mox:0,msk:1,hx:0,cpx:0,wm:1},j=Object.assign({},v),Y=matchMedia("(prefers-reduced-motion: reduce)").matches,R={ok:!1,rm:Y,set(L){Object.assign(j,L)},jump(L){Object.assign(j,L),Object.assign(v,L)},state:v,target:j};window.GL=R;let Q=0,et=0,st=null,mt=null,At=0;function xt(L){try{const I=document.createElement("div");I.style.cssText="position:fixed;left:0;bottom:0;width:0;height:100"+L+";visibility:hidden;pointer-events:none",document.documentElement.appendChild(I);const B=I.getBoundingClientRect().height;return I.remove(),B||0}catch{return 0}}function wt(L){const I=Math.max(1,document.documentElement.clientWidth||innerWidth),B=Math.max(xt("svh"),xt("lvh"),xt("dvh"),innerHeight),V=xt("dvh")||innerHeight,e=Q&&Q>et!=I>V,t=Q&&Math.abs(I-Q)>2;return!et||L||t||e||Math.abs(B-et)>120?(Q=I,et=Math.max(1,Math.round(B)),document.documentElement.style.setProperty("--app-h",et+"px")):Q=I,{w:Q,h:et}}const ut=()=>Q||document.documentElement.clientWidth||innerWidth,ot=()=>et||innerHeight,Lt=()=>innerHeight-ot();R.view=()=>({w:ut(),h:ot(),top:Lt()}),wt(!0);const at=(navigator.hardwareConcurrency||4)<=4||(navigator.deviceMemory||4)<=3,it=[{s:.42,q:.5},{s:.55,q:.65},{s:.7,q:.8},{s:.85,q:1},{s:1,q:1}],pt=/lv=([0-4])/.exec(location.hash);let rt=1;const Ht=()=>Math.min(1,.42/(it[0].s*Math.max(1,vt/ut())));let D=pt?+pt[1]:at?2:3,J=it[D].s,W=it[D].q,G=!1,vt=0,gt=0,tt=1,K=1;v.lv=j.lv=D,Y&&(v.wm=j.wm=0),document.documentElement.classList.toggle("lq",D<2);function dt(){tt=Math.max(1,Math.round(vt*J*rt)),K=Math.max(1,Math.round(gt*J*rt)),o&&o.viewport(0,0,tt,K),q.style.transform=tt<vt||K<gt?`scale(${(vt/tt).toFixed(5)},${(gt/K).toFixed(5)})`:"",G=!1}function yt(){et||wt(!0);const L=Math.min(window.devicePixelRatio||1,2);let I=ut()*L,B=ot()*L;const V=Math.min(1,1400/Math.max(I,B)),e=Math.round(I*V),t=Math.round(B*V);q.width!==e||q.height!==t?(vt=e,gt=t,q.width=vt,q.height=gt,st=null,mt=null,At=0):(vt=e,gt=t),dt()}function It(){const L=Q,I=et;wt(!1),(Q!==L||et!==I)&&yt()}let o;const Ft=!!window.WebGLRenderingContext&&!/nogl/.test(location.hash);R.ok=Ft,Ft?document.documentElement.classList.add("gl"):document.documentElement.classList.add("no-gl"),Ft&&requestAnimationFrame(()=>setTimeout(Mt,0));function Mt(){yt();try{o=q.getContext("webgl",{antialias:!1,alpha:!0,premultipliedAlpha:!0,powerPreference:"high-performance",preserveDrawingBuffer:!1})}catch{}if(!o){R.ok=!1,document.documentElement.classList.remove("gl"),document.documentElement.classList.add("no-gl"),requestAnimationFrame(()=>document.documentElement.classList.add("gl-ready"));return}nt();const L="attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}",I=`
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
const vec2 MB0=vec2(${u(T.bx)},${u(T.by)}); const float MS=${u(T.ms)}; // v19: памятник — главный герой, ≈25% высоты экрана; v20: на интро правее — снежинка его не касается
vec2 monB(){return vec2(MB0.x-cam*${u(T.ck)}+mox,MB0.y);}
vec4 monT(vec2 p){ vec2 c=(p-vec2(${u(T.x0)},${u(T.y0)}))/vec2(${u(T.x1-T.x0)},${u(T.y1-T.y0)}); if(c.x<0.||c.x>1.||c.y<0.||c.y>1.) return vec4(0.); return dec(texture2D(TM,c)); }
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
    if(abs(p.x)<${u(T.x1)} && p.y<${u(T.y1)} && p.y>-11.){
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
}`,B=document.documentElement;let V=/Apple/.test(navigator.vendor||"")?null:o.getExtension("KHR_parallel_shader_compile");function e(a,s){const f=o.createShader(a);return o.shaderSource(f,s),o.compileShader(f),f}let t,n,c,l=!1;R.ok=!0,B.classList.add("gl");function w(){n&&!o.getShaderParameter(n,o.COMPILE_STATUS)&&console.warn(o.getShaderInfoLog(n)),R.ok=!1,B.classList.remove("gl"),B.classList.add("no-gl"),requestAnimationFrame(()=>B.classList.add("gl-ready"))}const b={},i={f:`#define HEART
#define FW
`,h:`#define HEART
`,b:"",hl:`#define HEART
#define NOMARCH
`,fl:`#define HEART
#define FW
#define NOMARCH
`},r={};let m=null;function d(a){const s=e(o.VERTEX_SHADER,L),f=e(o.FRAGMENT_SHADER,(U?`#define MONCHK
`:"")+i[a]+I),P=o.createProgram();return o.attachShader(P,s),o.attachShader(P,f),o.bindAttribLocation(P,0,"p"),o.linkProgram(P),r[a]={P,f,U:null,ok:!1}}function y(a){o.useProgram(a.P),a.U={},["R","t","q",...Object.keys(v)].forEach(s=>a.U[s]=o.getUniformLocation(a.P,s)),o.uniform1i(o.getUniformLocation(a.P,"TM"),0),o.uniform1i(o.getUniformLocation(a.P,"TC"),1),a.ok=!0,m=a}const k=["hl","h","b","fl"];let g=0;function E(a,s){if(!l&&(g=1,a.forEach(f=>r[f]||d(f)),!V&&s)){const f=()=>{if(v.beat>.5)return setTimeout(f,500);p(!0)};setTimeout(f,s)}}function p(a){if(!(!g||l))for(const s of k){const f=r[s];if(!(!f||f.ok||f.bad)){if(V&&!a){if(o.getProgramParameter(f.P,V.COMPLETION_STATUS_KHR)!==!0)continue}else if(!a)continue;o.getProgramParameter(f.P,o.LINK_STATUS)?y(f):f.bad=!0}}}const A=/fullprog/.test(location.hash),h=a=>r[a]&&r[a].ok?r[a]:null;function x(a){a!==m&&(o.useProgram(a.P),m=a);const s=a.U;o.uniform2f(s.R,tt,K),o.uniform1f(s.t,Xt),o.uniform1f(s.q,W);for(const f in v)o.uniform1f(s[f],v[f])}function _(){const a=Math.sqrt(1.5)*v.hs,s=a<3.2?2.1*Math.tan(Math.asin(a/3.2)):99,f=.755/1.52*v.hs,P=f*(1.03+.28*v.fill+.2*v.beat),N=v.burst>.01?v.hs*1.932/(3.2-.92*v.hs)+.26:0,Z=v.burst>.01?Math.max(s,N):Math.min(s,Math.max(P,N)),X=1+v.zm*.06,ht=Math.min(tt,K),Bt=.065+.05*v.fill+.08*Math.max(0,v.burst),Ot=v.pary*.012-v.sy*.09-v.lift,Ct=.5*tt+v.hx*X*ht,St=.5*K+(v.hy-Ot)*X*ht,Tt=(Z+Bt)*X*ht+2,kt=Math.max(0,Math.floor(Ct-Tt)),Rt=Math.max(0,Math.floor(St-Tt)),_t=Math.min(tt,Math.ceil(Ct+Tt)),oe=Math.min(K,Math.ceil(St+Tt));return _t>kt&&oe>Rt?[kt,Rt,_t-kt,oe-Rt]:null}let M=null;function H(){if(M||!o)return M;const a="attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}",s="precision mediump float;uniform sampler2D u;uniform vec2 B,S;void main(){gl_FragColor=texture2D(u,(gl_FragCoord.xy-B)/S);}",f=o.createProgram(),P=(N,Z)=>{const X=o.createShader(N);o.shaderSource(X,Z),o.compileShader(X),o.attachShader(f,X)};return P(o.VERTEX_SHADER,a),P(o.FRAGMENT_SHADER,s),o.linkProgram(f),o.getProgramParameter(f,o.LINK_STATUS)?(M={P:f,U:{u:o.getUniformLocation(f,"u"),B:o.getUniformLocation(f,"B"),S:o.getUniformLocation(f,"S")}},M):(M={bad:!0},M)}function F(a){!o||!a||a[2]<2||a[3]<2||(st||(st=o.createTexture()),o.activeTexture(o.TEXTURE2),o.bindTexture(o.TEXTURE_2D,st),o.copyTexImage2D(o.TEXTURE_2D,0,o.RGBA,a[0],a[1],a[2],a[3],0),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAG_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),mt=a.slice())}function O(a){const s=H();return!s||s.bad||!st?!1:(o.useProgram(s.P),m=null,o.activeTexture(o.TEXTURE2),o.bindTexture(o.TEXTURE_2D,st),o.uniform1i(s.U.u,2),o.uniform2f(s.U.B,a[0],a[1]),o.uniform2f(s.U.S,a[2],a[3]),o.enable(o.SCISSOR_TEST),o.scissor(a[0],a[1],a[2],a[3]),o.drawArrays(o.TRIANGLES,0,3),o.disable(o.SCISSOR_TEST),!0)}let z="f";function $(a){const s=a||A||v.fw>.01?"f":v.heart>.01?"h":"b";if(!V&&g&&!a){const X=s==="b"?r.b:r[s+"l"];X&&!X.ok&&!X.bad&&p(!0)}if(s==="b"){const X=h("b")||h("hl");if(X)return x(X),z=X===r.b?"b":"hl",o.drawArrays(o.TRIANGLES,0,3)}const f=s!=="b"&&!a&&!A?h(s+"l"):null,P=h(s)||r.f;if(!f)return x(P),z=P===r.f?"f":s,o.drawArrays(o.TRIANGLES,0,3);x(f),o.drawArrays(o.TRIANGLES,0,3);const N=_();z=s+"l+"+(P===r.f?"f":s);const Z=v.heart>.01&&v.fill<.02&&v.burst<.01&&v.fw<.01&&v.lk<.01&&Math.abs(v.zm)<.02&&v.rp>.98;if(!Z)At=0,mt=null;else if(mt&&st&&At++&1&&O(mt)){z+="+cache";return}N&&(o.enable(o.SCISSOR_TEST),o.scissor(N[0],N[1],N[2],N[3]),x(P),o.drawArrays(o.TRIANGLES,0,3),o.disable(o.SCISSOR_TEST),Z&&F(N))}R.prog=()=>z,R.pstat=()=>({extra:g,par:!!V,p:Object.keys(r).map(a=>a+":"+(r[a].ok?"ok":r[a].bad?"bad":"wait")).join(" "),box:_()}),R.snap=a=>{$(a);const s=new Uint8Array(tt*K*4);return o.readPixels(0,0,tt,K,o.RGBA,o.UNSIGNED_BYTE,s),s};function S(){if(l)return;if(!o.getProgramParameter(c,o.LINK_STATUS))return w();const a=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,a),o.bufferData(o.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),o.STATIC_DRAW),o.enableVertexAttribArray(0),o.vertexAttribPointer(0,2,o.FLOAT,!1,0,0),y(r.f),Object.assign(b,r.f.U),nt(),R.scene&&bt(),dt(),Gt=!0,Et||(Et=!0,Pt=performance.now(),requestAnimationFrame(qt)),V?setTimeout(()=>{E(["hl","h"],0),setTimeout(()=>E(["b","fl"],0),600)},300):(["hl","h"].forEach(s=>r[s]||d(s)),g=1,p(!0),setTimeout(()=>E(["b","fl"],0),1200))}function nt(){if(R.baking||!window.SCENE)return;R.baking=!0;const a=Math.min(ut(),ot()),s=Math.min(window.devicePixelRatio||1,2),f=P=>{R.scene=P,ae(P),Gt&&!l&&o&&bt()};SCENE.bake(f,{mw:12*.034*a*s,cw:.6*1.35*a*s,coarse:f})}let lt=[];function bt(){const a=R.scene;lt.forEach(s=>o.deleteTexture(s)),lt=[],[[a.mon,a.M],[a.cape,a.Cp]].forEach(([s,f],P)=>{const N=o.createTexture();lt.push(N),o.activeTexture(o.TEXTURE0+P),o.bindTexture(o.TEXTURE_2D,N),o.texImage2D(o.TEXTURE_2D,0,o.RGBA,f.w,f.h,0,o.RGBA,o.UNSIGNED_BYTE,s),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAG_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}),R.jump({ly:a.lampY}),R.set({scr:1}),window.__emblem&&!R._fitLy&&(R._fitLy=!0,window.__emblem())}const ft=document.createElement("canvas");ft.id="monx",ft.setAttribute("aria-hidden","true"),q.parentNode.insertBefore(ft,q);let Nt=!1,Kt=!1,$t=0;function ae(a){!a.ov||U||(ft.width=a.M.w,ft.height=a.M.h,ft.getContext("2d").putImageData(new ImageData(a.ov,a.M.w,a.M.h),0,0),Kt=!0)}function ne(){const a=(1-Math.min(1,Math.max(0,(v.cam-1.3)/.7))**2*(3-2*Math.min(1,Math.max(0,(v.cam-1.3)/.7))))*v.scr,s=Kt&&!l&&a>.004;if(s!==Nt&&(Nt=s,ft.style.display=s?"block":"none"),!s)return;const f=C(),P=f.w0.toFixed(2);P!==$t&&($t=P,ft.style.width=f.w0.toFixed(2)+"px",ft.style.height=f.h0.toFixed(2)+"px"),ft.style.transform=`translate3d(${f.x.toFixed(2)}px,${f.y.toFixed(2)}px,0) scale(${f.k.toFixed(5)})`}function Yt(){for(const s in r)delete r[s];g=0,m=null;const a=d("f");if(c=a.P,n=a.f,V||(g=1,d("hl"),d("h")),V){const s=()=>{if(l)return;const f=o.getProgramParameter(c,V.COMPLETION_STATUS_KHR);typeof f!="boolean"?(V=null,S()):f?S():requestAnimationFrame(s)};requestAnimationFrame(s)}else requestAnimationFrame(()=>setTimeout(S,0))}Yt(),q.addEventListener("webglcontextlost",a=>{a.preventDefault(),l=!0,Nt=!1,ft.style.display="none",lt=[],st=null,mt=null,M=null,At=0,Et=!1,R.ok=!1,B.classList.remove("gl"),B.classList.add("no-gl")},!1),q.addEventListener("webglcontextrestored",()=>{l=!1,R.ok=!0,B.classList.remove("no-gl"),B.classList.add("gl"),dt(),Yt()},!1);function Jt(a,s){a=Math.max(0,Math.min(4,a)),a!==D&&(D=a,j.lv=a,document.documentElement.classList.toggle("lq",a<2),J=it[a].s,W=it[a].q,G=!0,s&&dt())}R.pulse=()=>{G&&dt(),V||p(!0)};let Dt=60;const ct=[];R.quality=()=>({level:D,ex:+rt.toFixed(2),fps:Math.round(Dt),scale:+J.toFixed(2),q:W,w:tt,h:K,pending:G}),Object.defineProperty(R,"level",{get:()=>D}),addEventListener("resize",It),addEventListener("orientationchange",()=>{wt(!0),yt()}),addEventListener("pointermove",a=>{j.par=(a.clientX/innerWidth-.5)*2},{passive:!0}),addEventListener("pointermove",a=>{j.pary=(a.clientY/innerHeight-.5)*2},{passive:!0}),addEventListener("deviceorientation",a=>{a.gamma!=null&&(j.par=Math.max(-1,Math.min(1,a.gamma/30))),a.beta!=null&&(j.pary=Math.max(-1,Math.min(1,(a.beta-45)/35)))},{passive:!0});let Vt=0,Pt=0,Xt=0;const ce={streak:9,burst:2.2,zm:3.2,lk:6,fw:1.6,lv:1.2};function qt(a){if(l){Et=!1;return}Vt||(Vt=Pt=a);const s=Math.min(.05,(a-Pt)/1e3);Pt=a,Xt+=s*(Y?.25:1);for(const f in j)v[f]+=(j[f]-v[f])*Math.min(1,s*(ce[f]||2.6));V&&p(!1),R.t=Xt,ne(),$(!1),R.ready||(R.ready=!0,requestAnimationFrame(()=>document.documentElement.classList.add("gl-ready"))),se(a),document.hidden?Et=!1:requestAnimationFrame(qt)}let Wt=0,jt=0,Ut=0,zt=0,Qt=-1e9,Zt=1e4,te=0,ee=0;function se(a){const s=a-ee;if(ee=a,pt||(jt||(jt=a+700),a<jt)||a<te||s<=0||s>4e3)return;if(ct.push(s),ct.length>90&&ct.shift(),!Wt){Wt=a+1e3,ct.length=0;return}if(a<Wt||ct.length<4)return;const f=a-Vt<3200;Wt=a+(f?600:2e3);const P=ct.slice().sort((X,ht)=>X-ht),N=P[P.length>>1];Dt=1e3/(ct.reduce((X,ht)=>X+ht,0)/ct.length);const Z=Math.min(Dt,1e3/N);Z<(f?50:46)&&D===0&&rt>Ht()+.01?(rt=Math.max(Ht(),rt*(Z<25?.64:.8)),dt(),zt=a,Ut=0,ct.length=0):Z<(f?50:46)?(Jt(f?D-(Z<25?2:1):Z<15?0:D-(Z<30?2:1),Z<35),a-Qt<15e3&&(Zt=Math.min(Zt*2,8e4)),zt=a,Ut=0,ct.length=0):1e3/N>=56&&Dt>=50&&a-zt>Zt?++Ut>=3&&(rt<1?(rt=Math.min(1,rt/.8),G=!0):Jt(D+1,!1),Qt=a,Ut=0,ct.length=0):Ut=0}let Et=!1,Gt=!1;document.addEventListener("visibilitychange",()=>{Gt&&!document.hidden&&!Et&&(Et=!0,Pt=performance.now(),te=Pt+600,ct.length=0,requestAnimationFrame(qt))}),R.monRect=C,R.MP=T,R.lightRect=function(a){a=a||v;const s=ut(),f=ot(),P=Lt(),N=Math.min(s,f),Z=1+a.zm*.06,X=a.pary*.012-a.sy*.09-a.lift,ht=-.2,Bt=ht-.03,Ot=ht-.045,Ct=1.35,St=-.12-a.cam*.15+a.cpx-.125*Ct,Tt=Ot+((a.ly||Bt+.12)-Bt)*Ct,kt=_t=>s/2+_t*Z*N,Rt=_t=>P+f/2-(_t-X)*Z*N;return{x0:kt(St-.022),x1:kt(St+.07),y0:Rt(Tt+.035),y1:Rt(Ot-.005),lamp:[kt(St),Rt(Tt)]}},R.uv=(a,s)=>{const f=ut(),P=ot(),N=Lt(),Z=Math.min(f,P);return[(a-f/2)/Z,(P/2-(s-N))/Z]}}}();
