(function(){const _=e=>e-Math.floor(e),k=(e,t,a)=>e<t?t:e>a?a:e,l=(e,t,a)=>{const o=k((a-e)/(t-e),0,1);return o*o*(3-2*o)},A=(e,t,a)=>e+(t-e)*a,b=e=>_(Math.sin(e*127.1)*43758.5453),O=(e,t)=>{e=_(e*123.34),t=_(t*456.21);const a=e*(e+45.32)+t*(t+45.32);return e+=a,t+=a,_(e*t)},j=e=>{const t=Math.floor(e);let a=e-t;return a=a*a*(3-2*a),A(b(t),b(t+1),a)},B=(e,t)=>{const a=Math.floor(e),o=Math.floor(t);let i=e-a,m=t-o;return i=i*i*(3-2*i),m=m*m*(3-2*m),A(A(O(a,o),O(a+1,o),i),A(O(a,o+1),O(a+1,o+1),i),m)},W=(e,t,a,o,i,m)=>{const p=Math.abs(e-a)-i,s=Math.abs(t-o)-m;return Math.hypot(Math.max(p,0),Math.max(s,0))+Math.min(Math.max(p,s),0)},$=(e,t)=>t<0?A(4.85,1.45,l(.4,8.4,e)):A(4.6,1.1,l(0,7.6,e)),rt=e=>(e<0?8.3:7.5)-.5*j(e*1.7+3);function at(e,t){const a=e<0?-1:1,o=.45*j(t*1.3+a*7)+.25*j(t*3.7+a*3)-.3;return Math.max(Math.abs(e)-$(t,a)-o,Math.max(-t-.6,t-rt(e)))}const K=[];(function(){let e=-1,t=0;for(;e<8.4;){const a=A(1.5,.62,l(-.5,7.5,e))*(.85+.3*b(t*3.1+.7)),o=e+a*.5,i=[];let m=-$(o,-1)-.7-b(t*7.7)*.6*a,p=0;for(;m<$(o,1)+.7;){const s=b(t*17.3+p*7.9+.31),r=a*(.95+1*b(t*13.1+p*2.3)),h=m+r*.5,v=o+(b(t*5.3+p*1.7)-.5)*a*.4;if(at(h,v)<-.05*a){const w=(b(t*9.1+p*3.3)-.5)*.5;i.push({cx:h,cy:v,rx:r*.6,ry:a*.64*(.85+.3*b(p*4.1+t)),ca:Math.cos(w),sa:Math.sin(w),p:2.6+1.8*b(t*2.9+p*5.1),s,z:-v+(b(t*4.4+p)-.5)*.7*a,tx:(b(s*31)-.5)*.7,ty:.2+(b(s*57)-.5)*.5,rust:s>.91})}m+=r*(.62+.14*b(t+p*9.9)),p++}K.push({lo:e-a*.5,hi:e+a*1.5,st:i}),e+=a*.64,t++}})();function J(e,t,a){const o=t-e.cx,i=a-e.cy,m=(o*e.ca+i*e.sa)/e.rx,p=(-o*e.sa+i*e.ca)/e.ry,s=Math.atan2(p,m),r=1+.09*Math.sin(s*3+e.s*20)+.06*Math.sin(s*5+e.s*41)+.035*Math.sin(s*9+e.s*7);return[Math.pow(Math.pow(Math.abs(m),e.p)+Math.pow(Math.abs(p),e.p),1/e.p)/r,m/r,p/r]}function N(e,t,a){let o=9,i=null,m=-1e9,p=null;for(const s of K)if(!(t<s.lo||t>s.hi))for(const r of s.st){if(Math.abs(e-r.cx)>r.rx*1.35||Math.abs(t-r.cy)>r.ry*1.6)continue;const h=J(r,e,t),v=(h[0]-1)*Math.min(r.rx,r.ry);v<o&&(o=v),a&&h[0]<1&&r.z>m&&(m=r.z,i=r,p=h)}return a?[o,i,p]:o}function Y(e,t){return t<-.6?Math.max(N(e,t),-t-.6):Math.min(N(e,t),at(e,t)+.35)}function ot(e,t){const[,a,o]=N(e,t,!0),i=(.4+.6*l(-.4,3,t))*(1-.45*l(5,8.5,t))*(1-.3*l(2.5,5,Math.abs(e))),m=.8+.2*B(e*23,t*23)+(O(Math.floor(e*50),Math.floor(t*50))>.92?.22:0)-(O(Math.floor(e*50)+7,Math.floor(t*50)+3)>.9?.18:0);if(!a){const H=.5+.5*B(e*3,t*3);return[.022*H+.03*i,.018*H+.018*i,.02*H+.008*i]}const[p,s,r]=o,h=l(.4,1,p),v=5+Math.floor(a.s*3),w=Math.floor((Math.atan2(r,s)/6.2832+.5+a.s)*v)/v*6.2832+a.s*2;let g=T(a.tx*(1-h)+Math.cos(w)*h*1.3+s*h*.5,a.ty*(1-h)+Math.sin(w)*h*1.3+r*h*.5,1);const M=B(e*6+a.s*9,t*6)-.5,u=B(e*6+3.3,t*6+a.s*5)-.5;g=T(g[0]+M*.55,g[1]+u*.55,g[2]);const f=.55+.45*g[1],y=Math.max(0,q(g,P))*i,E=Math.max(0,q(g,D)),L=(.4+.6*l(1,.68,p))*A(.5,1,l(-1,-.15,r))*A(1,.8,l(.6,1,r));let R=a.rust?[.58,.45,.36]:[.5,.48,.46];const Z=.6+.6*b(a.s*77);R=R.map(H=>H*Z);const U=l(1.1,.15,t);R=R.map(H=>H*(1-.55*U));const F=.7*l(.6,0,t)*l(.35,.7,B(e*3.5,t*8));R=[A(R[0],.1,F),A(R[1],.14,F),A(R[2],.08,F)];const S=L*m;let c=R[0]*(.025+.09*f+.62*y+.13*E)*S,x=R[1]*(.025+.09*f+.4*y+.16*E)*S,d=R[2]*(.03+.12*f+.2*y+.26*E)*S;const C=U*Math.pow(Math.max(0,q(g,T(P[0],P[1],P[2]+1))),24)*i;return c+=.5*C,x+=.35*C,d+=.2*C,[c,x,d]}const nt=e=>e<5.7?1.85-.12*l(5.45,5.7,e):e<7.85?1.15:e<8.05?1.22:e<8.3?1.36:1.25;function n(e){const t=k((e-14.2)/1.25,0,1);let a=A(.44,.66,t*t);return a+=.05*Math.max(0,Math.sin((e-14.2)*9)),a}function V(e,t){const a=Math.abs(e);let o=Y(e,t);t>4.2&&t<8.4&&(o=Math.min(o,Math.max(a-nt(t),Math.max(4.4-t,t-8.4)))),o=Math.min(o,Math.max(a-A(.62,.5,l(8.4,8.8,t))-.04*Math.sin((t-8.4)*15.7),Math.max(8.35-t,t-8.82))),o=Math.min(o,W(e,t,0,11.5,A(.47,.42,k((t-8.8)/5.5,0,1)),2.72)),o=Math.min(o,Math.max(a-n(t),Math.max(14.2-t,t-15.45))),o=Math.min(o,Math.hypot(a-.62,t-15.32)-.11),o=Math.min(o,Math.max(a-.76,Math.abs(t-15.53)-.08));const i=.35;o=Math.min(o,Math.hypot(e,(t-16.05-i)/2.1)-.2),o=Math.min(o,Math.max(a-.16+(t-15.7-i)*.2,Math.abs(t-15.82-i)-.1)),o=Math.min(o,Math.hypot(a-.17,t-16.64-i)-.1),o=Math.min(o,Math.max(Math.abs(t-16.6-i+(a-.24)*.3)-.035,Math.abs(a-.29)-.06)),o=Math.min(o,W(a,t,0,16.6+i,.06,.1)),o=Math.min(o,Math.max(a-.12+(t-16.78-i)*.3,Math.abs(t-16.88-i)-.11)),o=Math.min(o,Math.hypot(e,t-17-i)-.04);const m=16.12+i+a*.22+l(.4,.5,_(a*5+.2))*.08*l(.75,1.05,a),p=16.48+i+a*.3-.16*l(.95,1.32,a);return o=Math.min(o,Math.max(Math.max(a-1.32,t-p),m-t)),o=Math.min(o,pt(e,t)),o}function pt(e,t){const a=Math.hypot(e,t-15.98);let o=Math.abs(a-.3)-.06-.025*Math.sin(Math.atan2(t-15.98,e)*14);return o=Math.min(o,W(e,t,0,16.17,.012,.1)),o=Math.min(o,W(e,t,0,15.93,.025,.17),W(e,t,0,16.05,.1,.018)),o=Math.min(o,Math.max(Math.abs(Math.hypot(e,t-15.86)-.14)-.022,t-15.82)),o}const P=(()=>{const e=[.38,-.5,.78],t=Math.hypot(...e);return e.map(a=>a/t)})(),D=(()=>{const e=[-.72,.5,.48],t=Math.hypot(...e);return e.map(a=>a/t)})(),T=(e,t,a)=>{const o=Math.hypot(e,t,a)||1;return[e/o,t/o,a/o]},q=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2];function mt(e,t,a,o){const i=Math.max(0,q(e,P)),m=Math.max(0,q(e,D)),p=Math.pow(Math.max(0,q(e,T(P[0],P[1],P[2]+1))),14),s=Math.pow(Math.max(0,q(e,T(D[0],D[1],D[2]+1))),10),r=o*(1-.45*l(8.5,17,a));return[.035+.16*i*r+.04*m+.9*p*r+.22*s,.026+.1*i*r+.05*m+.6*p*r+.27*s,.018+.04*i*r+.07*m+.3*p*r+.36*s]}function vt(e,t){const o=V(e,t),i=(V(e+.03,t)-V(e-.03,t))/(2*.03),m=(V(e,t+.03)-V(e,t-.03))/(2*.03),p=l(t<8.4?-.04:-.1,0,o);let s=T(i*p*1.6,m*p*1.6,1);const r=Math.abs(e);let h,v,w;const g=pt(e,t)<.005;if(!g&&t<8.6&&!(t>4.2&&t<8.4&&r<nt(t))&&Y(e,t)<=.02)[h,v,w]=ot(e,t);else if(!g&&t<8.4){const M=nt(t),u=e/M;let f;t<5.7||t>7.85?f=T(u*.9,0,1):f=u<-.414?T(-.707,0,.707):u>.414?T(.707,0,.707):[0,0,1],t>8.05&&t<8.3&&(f=T(f[0],-.55,f[2])),t>7.85&&t<8.05&&(f=T(f[0],.5,f[2])),s=T(f[0]+s[0]*.3,f[1]+s[1]*.3,f[2]);const y=Math.max(0,q(s,P))*(1.15-.45*l(4.4,8.4,t)),E=Math.max(0,q(s,D)),L=t>7.6&&t<7.85?A(.45,1,l(7.62,7.84,t)):1,R=(t-4.4)/.62,Z=Math.floor(R),U=Math.abs(_(R)-.5)*.62,F=Math.abs(_(e/.78+Z%2*.5)-.5)*.78,S=(t>5.7&&t<7.85?.62+.38*l(.012,.03,Math.min(.31-U,Math.abs(u)<.414?F:1)):1)*(1+.25*l(.03,0,Math.abs(t-5.7))-.35*l(.03,0,Math.abs(t-5.66))+.3*l(.025,0,Math.abs(t-8.29))+.2*l(.02,0,Math.abs(t-7.87))-.4*l(.02,0,Math.abs(t-8.04))+.25*l(.02,0,Math.abs(t-4.62))-.3*l(.02,0,Math.abs(t-4.58))),c=Math.abs(Math.abs(u)-.414)<.02&&t>5.7&&t<7.85?1.12:1,x=t>6.6&&t<7.45&&r<.42?r>.38||t<6.64||t>7.41?1.12:.9:1,d=L*S*c*x*(.84+.16*B(e*24,t*24)+(O(Math.floor(e*55),Math.floor(t*55))>.93?.12:0))*(.92+.1*B(e*3+Z,t*3))*(t<5.7?.78-.15*l(5.4,5.7,t):1)*(u<-.414&&t>5.7&&t<7.85?.8:1);h=(.04+.56*y+.08*E)*d,v=(.034+.4*y+.1*E)*d,w=(.034+.23*y+.15*E)*d}else if(!g&&t<14.2&&t>=8.82){const M=A(.47,.42,k((t-8.8)/5.5,0,1)),u=k(e/M,-.999,.999),f=.04*Math.sin(Math.asin(u)*10);s=T(u+f,0,Math.sqrt(1-u*u));const y=1.05-.5*l(8.8,14.2,t),E=Math.max(0,q(s,P)+.15)*y,L=Math.max(0,q(s,D)),R=Math.pow(Math.max(0,q(s,T(D[0],D[1],D[2]+1))),20);h=.03+.6*E+.12*L+.2*R,v=.028+.46*E+.15*L+.25*R,w=.03+.3*E+.21*L+.33*R}else{if(t>=14.2&&t<15.45&&!g){const M=t<14.8?0:1,u=e*(M?7:6)+M*.5,f=(t-(M?14.8:14.2))/.6,y=f-(.55+.3*Math.abs(Math.sin(u*Math.PI)));s=T(s[0]+.12*Math.sin(u*Math.PI*2)*f,s[1]-1.1*l(-.04,.06,y)*l(.22,.08,y)+.15,s[2])}if(t>16.3&&r>.3&&!g){const M=t-(16.47+r*.22);s=T(s[0]+.12*Math.sin((r*3-M*4)*6),s[1]+.3-.6*l(.05,.3,M),s[2])}return t>=8.3&&t<8.82&&(s=T(s[0]*.5+e*.9,Math.cos((t-8.35)*6.7)*.8,1)),[h,v,w]=mt(s,e,t,g?1.25:t>=14.2&&t<15.45?.75:1),[h*1.5,v*1.5,w*1.5]}return[h*1.45,v*1.45,w*1.45]}const ct=-.2,I=ct-.03,G=e=>e<-.03?-9:I-.004+.13*l(-.02,.09,e)+.007*j(e*48)+.0035*j(e*160)+.012*l(.1,.45,e),it=.125,Q=G(it),lt=(()=>{const e=[-.75,.55,.45],t=Math.hypot(...e);return e.map(a=>a/t)})();function ut(e,t,a){const o=G(e);let i=0,m=0,p=0,s=0;if(t>I-.006&&(i=k((o-t)/a+.5,0,1)*k((t-(I-.006))/a,0,1),i>0)){const w=(c,x)=>{const d=c*70,C=x*105,H=1-Math.abs(B(d*.55,C*.4)-.5)*2;return .5*H*H+.28*B(d*1.6,C*1.3)+.1*B(d*4.5,C*4.5)+.22*l(.35,.65,_(C*.11+j(d*.35)*.7))},M=w(e,t),u=-(w(e-.0015,t)-w(e+.0015,t))/(2*.0015)*.01,f=-(w(e,t+.0015)-w(e,t-.0015))/(2*.0015)*.01,y=T(u,f,1),E=Math.max(0,q(y,lt)),L=.55+.45*y[1],R=.45+.55*l(.15,.65,M),Z=.85+.15*B(e*900,t*900)+(O(Math.floor(e*1500),Math.floor(t*1500))>.93?.18:0),U=A(1,.55,l(o-.004,o-.09,t))*R*Z;m=(.07*L+.3*E)*U,p=(.066*L+.31*E)*U,s=(.088*L+.4*E)*U;const F=l(.012,0,o-t)*.55+l(.004,0,o-t)*.4;m+=.55*F,p+=.6*F,s+=.82*F;const S=l(.012,0,t-I)*(.5+.5*j(e*300));m=m*(1-.3*S)+.08*S*E,p=p*(1-.3*S)+.1*S*E,s=s*(1-.3*S)+.14*S*E}const r=(t-Q)/1.4,h=(it-e)/1.4;let v=null;if(r>-.012&&r<.1&&h>-.045&&h<.06){const w=A(.0085,.0058,k(r/.07,0,1));if(r<.07&&Math.abs(h)<w){const f=.75+.7*l(w,-w,h);v=_(r*42)>=.5?[.3*f,.07*f,.07*f]:[.38*f,.37*f,.42*f]}r>.068&&r<.072&&Math.abs(h)<.0095&&(v=[.12,.1,.11]),r>.072&&r<.084&&Math.abs(h)<.0052&&(v=[1.5,1.2,.8]),r>.084&&r<.092&&Math.abs(h)<.0065-(r-.084)*.8&&(v=[.16,.1,.09]);const g=.009,M=.046,u=.022;if(h>g&&h<M&&r<u&&r>-.012){const f=l(M,g,h);v=[.13+.12*f,.12+.12*f,.15+.16*f];const y=Math.abs(h-.028),E=Math.abs(r-.009);if(y<.0055&&E<.0045)v=y<8e-4||E<6e-4?[.3,.18,.08]:[1.35,.9,.42];else{const L=Math.exp(-Math.hypot(y,E)*160)*.5;v=[v[0]+L,v[1]+L*.62,v[2]+L*.25]}}if(h>g-.003&&h<M+.003&&r>=u&&r<u+.013-Math.abs(h-(g+M)/2)*.6){const f=l(u+.004,u+.012-Math.abs(h-(g+M)/2)*.6,r);v=[.1+.25*f,.07+.25*f,.08+.32*f]}v&&([m,p,s]=v,i=1)}return[m,p,s,i]}const X=e=>Math.round(k(Math.pow(k(e,0,1.6)/1.6,1/2.2),0,1)*255),st=(e,t)=>{const a=.3*e[0]+.59*e[1]+.11*e[2],o=l(.02,.5,a),i=[A(.93,1.05,o),A(.95,1,o),A(1.07,.93,o)][t];return Math.round(k(Math.pow(1-Math.exp(-1.7*e[t]*i*.97),.96),0,1)*255)};function z(e,t,a,o){const i=a.mon=new Uint8Array(e.w*e.h*4),m=a.ov=new Uint8ClampedArray(e.w*e.h*4),p=a.cape=new Uint8Array(t.w*t.h*4),s=(e.x1-e.x0)/e.w,r=(t.u1-t.u0)/t.w,h=[];for(let v=0;v<e.h;v+=o)h.push(()=>{for(let w=v;w<Math.min(e.h,v+o);w++){const g=e.y0+(w+.5)/e.h*(e.y1-e.y0);for(let M=0;M<e.w;M++){const u=e.x0+(M+.5)/e.w*(e.x1-e.x0);let f=V(u,g);if(f>2.5*s)continue;let y=u,E=g;if(f>-.3*s){const F=s*.5,S=V(u+F,g)-V(u-F,g),c=V(u,g+F)-V(u,g-F),x=Math.hypot(S,c)||1,d=Math.max(f,0)+.6*s;y=u-S/x*d,E=g-c/x*d}const L=vt(y,E),R=(w*e.w+M)*4,Z=((e.h-1-w)*e.w+M)*4,U=k(.5-f/s,0,1);U>0&&(i[R]=X(L[0]),i[R+1]=X(L[1]),i[R+2]=X(L[2]),i[R+3]=Math.round(U*255)),m[Z]=st(L,0),m[Z+1]=st(L,1),m[Z+2]=st(L,2),m[Z+3]=Math.round(k(.5-(f-1.6*s)/s,0,1)*255)}}});for(let v=0;v<t.h;v+=o)h.push(()=>{for(let w=v;w<Math.min(t.h,v+o);w++){const g=t.y0+(w+.5)/t.h*(t.y1-t.y0);for(let M=0;M<t.w;M++){const u=t.u0+(M+.5)/t.w*(t.u1-t.u0),f=ut(u,g,r),y=(w*t.w+M)*4;f[3]<=0||(p[y]=X(f[0]),p[y+1]=X(f[1]),p[y+2]=X(f[2]),p[y+3]=Math.round(f[3]*255))}}});return Object.assign(a,{M:e,Cp:t,lampY:Q+.083*1.4,lampU:it}),h}function ft(e,t){t=t||{};const a=Math.round(k(t.mw||320,160,520)/2)*2,o=Math.round(k(t.cw||512,256,768)),i={w:a,h:Math.round(a*18.4/12),x0:-6,x1:6,y0:-.8,y1:17.6},m={w:o,h:Math.round(o*.45),u0:-.04,u1:.56,y0:I-.01,y1:I+.26},p=Object.assign({},i,{w:Math.round(a/4),h:Math.round(i.h/4)}),s=Object.assign({},m,{w:Math.round(o/4),h:Math.round(m.h/4)}),r={},h={},v=z(p,s,r,8),w=z(i,m,h,6),g=window.requestIdleCallback?u=>requestIdleCallback(u,{timeout:120}):u=>setTimeout(()=>u(null),16),M=(u,f,y)=>{const E=L=>{const R=performance.now(),Z=L&&!L.didTimeout?k(L.timeRemaining(),6,12):10;for(;u.length&&performance.now()-R<Z;)u.shift()();u.length?y?setTimeout(E,0):g(E):f()};y?setTimeout(E,0):g(E)};M(v,()=>{r.coarse=!0,(t.coarse||e)(r),M(w,()=>e(h))},!0)}window.SCENE={bake:ft}})(),function(){const _=document.getElementById("gl"),k={scr:0,ly:0,lift:0,heart:1,cool:0,fill:0,burst:0,cam:0,par:0,tint:0,streak:0,beat:0,hy:0,hs:1,mx:0,my:0,mo:0,zm:0,lk:0,lp:0,pary:0,rx:0,ry:0,rp:1,fw:0,sy:0,lv:3},l=Object.assign({},k),A=matchMedia("(prefers-reduced-motion: reduce)").matches,b={ok:!1,rm:A,set(P){Object.assign(l,P)},jump(P){Object.assign(l,P),Object.assign(k,P)},state:k,target:l};window.GL=b;const O=(navigator.hardwareConcurrency||4)<=4||(navigator.deviceMemory||4)<=3,j=[{s:.42,q:.5},{s:.55,q:.65},{s:.7,q:.8},{s:.85,q:1},{s:1,q:1}],B=/lv=([0-4])/.exec(location.hash);let W=B?+B[1]:O?2:3,$=j[W].s,rt=j[W].q,at=!1,K=0,J=0,N=1,Y=1;k.lv=l.lv=W,document.documentElement.classList.toggle("lq",W<2);function ot(){N=Math.max(1,Math.round(K*$)),Y=Math.max(1,Math.round(J*$)),n&&n.viewport(0,0,N,Y),_.style.transform=N<K||Y<J?`scale(${(K/N).toFixed(5)},${(J/Y).toFixed(5)})`:"",at=!1}function nt(){const P=Math.min(window.devicePixelRatio||1,2);let D=innerWidth*P,T=innerHeight*P;const q=Math.min(1,1400/Math.max(D,T));K=Math.round(D*q),J=Math.round(T*q),(_.width!==K||_.height!==J)&&(_.width=K,_.height=J),ot()}let n;const V=!!window.WebGLRenderingContext&&!/nogl/.test(location.hash);b.ok=V,V?document.documentElement.classList.add("gl"):document.documentElement.classList.add("no-gl"),V&&requestAnimationFrame(()=>setTimeout(pt,0));function pt(){nt();try{n=_.getContext("webgl",{antialias:!1,alpha:!0,premultipliedAlpha:!0,powerPreference:"high-performance",preserveDrawingBuffer:!1})}catch{}if(!n){b.ok=!1,document.documentElement.classList.remove("gl"),document.documentElement.classList.add("no-gl"),requestAnimationFrame(()=>document.documentElement.classList.add("gl-ready"));return}ut();const P="attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}",D=`
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
uniform vec2 R; uniform sampler2D TM,TC; uniform float t,q,scr,ly,lift,heart,cool,fill,burst,cam,par,tint,streak,beat,hy,hs,mx,my,mo,zm,lk,lp,pary,rx,ry,rp,fw,sy,lv;
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
const vec2 MB0=vec2(.415,HZ-.07); const float MS=.034; // v19: памятник — главный герой, ≈25% высоты экрана; v20: на интро правее — снежинка его не касается
vec2 monB(){return vec2(MB0.x-cam*.32,MB0.y);}
vec4 monT(vec2 p){ vec2 c=vec2((p.x+6.)/12.,(p.y+.8)/18.4); if(c.x<0.||c.x>1.||c.y<0.||c.y>1.) return vec4(0.); return dec(texture2D(TM,c)); }
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
      if(abs(ex)<.45 && ey<.03 && ey>-.22){ float c=floor(ex/.032+.5), fx=ex-c*.032, on=step(.3,h11(c*7.1+3.))*step(.05,abs(ex));
        if(ey>-.006) col+=vec3(1.,.72,.42)*on*(exp(-length(vec2(fx,ey))*300.)*1.3+exp(-length(vec2(fx,ey))*70.)*.1)*V;
        else col+=vec3(1.,.7,.4)*on*exp(-abs(fx+(n1(uv.y*140.+t*2.)-.5)*.006)*380.)*exp(ey*10.)*.3*V; } }
    // памятник: силуэт, луч маяка по нему и отражение в воде
    vec2 p=(uv-monB())/MS;
    if(abs(p.x)<6. && p.y<17.6 && p.y>-11.){
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
  gMA=0.; if(gV>.01){ vec2 pm=(uvA-monB())/MS; if(abs(pm.x)<6. && pm.y>-.8 && pm.y<17.6) gMA=monT(pm).a*gV; }
  vec3 col=world(uv,asp);
  col=col*(1.-gMA)+vec3(1.,.82,.6)*gB*.5*gMA; // луч маяка скользит и по памятнику
  vec3 ro=vec3(0.,0.,3.2);
  // ---------- снежинка ----------
  if(heart>.01){
    RA=rot(t*.07); RB=rot(sin(t*.45)*.5+burst*.5); RC=rot(.12*sin(t*.33));
    vec2 hu=uv-vec2(0.,hy);
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
    if(burst>=.999 || (burst<.01 && length(uv-vec2(0.,hy))>hs*1.932/(3.2-.92*hs)+.26)) np=-1.;
    for(int i=0;i<64;i++){
      float fi=float(i); if(fi>np*q) break;
      vec3 dir=normalize(vec3(h11(fi*1.3)-.5,h11(fi*2.7)-.5,h11(fi*4.1)-.5));
      float rr=(.62+.3*h11(fi*5.9))+burst*(1.2+2.2*h11(fi*7.7));
      vec3 pp=dir*rr*hs; pp.xz*=rot(t*(.15+.2*h11(fi))); pp.y+=sin(t*.7+fi)*.03;
      float s=2.1/(3.2-pp.z);
      vec2 sp2=pp.xy*s+vec2(0.,hy);
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
}`,T=document.documentElement;let q=/Apple/.test(navigator.vendor||"")?null:n.getExtension("KHR_parallel_shader_compile");function mt(c,x){const d=n.createShader(c);return n.shaderSource(d,x),n.compileShader(d),d}let vt,ct,I,G=!1;b.ok=!0,T.classList.add("gl");function it(){ct&&!n.getShaderParameter(ct,n.COMPILE_STATUS)&&console.warn(n.getShaderInfoLog(ct)),b.ok=!1,T.classList.remove("gl"),T.classList.add("no-gl"),requestAnimationFrame(()=>T.classList.add("gl-ready"))}const Q={};function lt(){if(G)return;if(!n.getProgramParameter(I,n.LINK_STATUS))return it();n.useProgram(I);const c=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,c),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),n.STATIC_DRAW);const x=n.getAttribLocation(I,"p");n.enableVertexAttribArray(x),n.vertexAttribPointer(x,2,n.FLOAT,!1,0,0),["R","t","q",...Object.keys(k)].forEach(d=>Q[d]=n.getUniformLocation(I,d)),n.uniform1i(n.getUniformLocation(I,"TM"),0),n.uniform1i(n.getUniformLocation(I,"TC"),1),ut(),b.scene&&st(),ot(),S=!0,F||(F=!0,h=performance.now(),requestAnimationFrame(g))}function ut(){if(b.baking||!window.SCENE)return;b.baking=!0;const c=Math.min(innerWidth,innerHeight),x=Math.min(window.devicePixelRatio||1,2),d=C=>{b.scene=C,a(C),S&&!G&&n&&st()};SCENE.bake(d,{mw:12*.034*c*x,cw:.6*1.35*c*x,coarse:d})}let X=[];function st(){const c=b.scene;X.forEach(x=>n.deleteTexture(x)),X=[],[[c.mon,c.M],[c.cape,c.Cp]].forEach(([x,d],C)=>{const H=n.createTexture();X.push(H),n.activeTexture(n.TEXTURE0+C),n.bindTexture(n.TEXTURE_2D,H),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,d.w,d.h,0,n.RGBA,n.UNSIGNED_BYTE,x),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}),b.jump({ly:c.lampY}),b.set({scr:1})}const z=document.createElement("canvas");z.id="monx",z.setAttribute("aria-hidden","true"),_.parentNode.insertBefore(z,_);let ft=!1,e=!1,t=0;function a(c){c.ov&&(z.width=c.M.w,z.height=c.M.h,z.getContext("2d").putImageData(new ImageData(c.ov,c.M.w,c.M.h),0,0),e=!0)}function o(){const c=(1-Math.min(1,Math.max(0,(k.cam-1.3)/.7))**2*(3-2*Math.min(1,Math.max(0,(k.cam-1.3)/.7))))*k.scr,x=e&&!G&&c>.004;if(x!==ft&&(ft=x,z.style.display=x?"block":"none"),!x)return;const d=innerWidth,C=innerHeight,H=Math.min(d,C),tt=1+k.zm*.06,et=.034,ht=.415-k.cam*.32-6*et,dt=-.27+17.6*et-(k.pary*.012-k.sy*.09-k.lift);H!==t&&(t=H,z.style.width=(12*et*H).toFixed(2)+"px",z.style.height=(18.4*et*H).toFixed(2)+"px"),z.style.transform=`translate3d(${(d/2+ht*tt*H).toFixed(2)}px,${(C/2-dt*tt*H).toFixed(2)}px,0) scale(${tt.toFixed(5)})`}function i(){if(vt=mt(n.VERTEX_SHADER,P),ct=mt(n.FRAGMENT_SHADER,D),I=n.createProgram(),n.attachShader(I,vt),n.attachShader(I,ct),n.linkProgram(I),q){const c=()=>{if(G)return;const x=n.getProgramParameter(I,q.COMPLETION_STATUS_KHR);typeof x!="boolean"?(q=null,lt()):x?lt():requestAnimationFrame(c)};requestAnimationFrame(c)}else requestAnimationFrame(()=>setTimeout(lt,0))}i(),_.addEventListener("webglcontextlost",c=>{c.preventDefault(),G=!0,ft=!1,z.style.display="none",X=[],F=!1,b.ok=!1,T.classList.remove("gl"),T.classList.add("no-gl")},!1),_.addEventListener("webglcontextrestored",()=>{G=!1,b.ok=!0,T.classList.remove("no-gl"),T.classList.add("gl"),ot(),i()},!1);function m(c,x){c=Math.max(0,Math.min(4,c)),c!==W&&(W=c,l.lv=c,document.documentElement.classList.toggle("lq",c<2),$=j[c].s,rt=j[c].q,at=!0,x&&ot())}b.pulse=()=>{at&&ot()};let p=60;const s=[];b.quality=()=>({level:W,fps:Math.round(p),scale:+$.toFixed(2),q:rt,w:N,h:Y,pending:at}),Object.defineProperty(b,"level",{get:()=>W}),addEventListener("resize",nt),addEventListener("pointermove",c=>{l.par=(c.clientX/innerWidth-.5)*2},{passive:!0}),addEventListener("pointermove",c=>{l.pary=(c.clientY/innerHeight-.5)*2},{passive:!0}),addEventListener("deviceorientation",c=>{c.gamma!=null&&(l.par=Math.max(-1,Math.min(1,c.gamma/30))),c.beta!=null&&(l.pary=Math.max(-1,Math.min(1,(c.beta-45)/35)))},{passive:!0});let r=0,h=0,v=0;const w={streak:9,burst:2.2,zm:3.2,lk:6,fw:1.6,lv:1.2};function g(c){if(G){F=!1;return}r||(r=h=c);const x=Math.min(.05,(c-h)/1e3);h=c,v+=x*(A?.25:1);for(const d in l)k[d]+=(l[d]-k[d])*Math.min(1,x*(w[d]||2.6));n.uniform2f(Q.R,N,Y),n.uniform1f(Q.t,v),b.t=v,n.uniform1f(Q.q,rt);for(const d in k)n.uniform1f(Q[d],k[d]);o(),n.drawArrays(n.TRIANGLES,0,3),b.ready||(b.ready=!0,requestAnimationFrame(()=>document.documentElement.classList.add("gl-ready"))),U(c),document.hidden?F=!1:requestAnimationFrame(g)}let M=0,u=0,f=0,y=0,E=-1e9,L=1e4,R=0,Z=0;function U(c){const x=c-Z;if(Z=c,B||(u||(u=c+700),c<u)||c<R||x<=0||x>4e3)return;if(s.push(x),s.length>90&&s.shift(),!M){M=c+1e3,s.length=0;return}if(c<M||s.length<4)return;const d=c-r<3200;M=c+(d?1e3:2e3);const C=s.slice().sort((et,ht)=>et-ht),H=C[C.length>>1];p=1e3/(s.reduce((et,ht)=>et+ht,0)/s.length);const tt=Math.min(p,1e3/H);tt<(d?50:46)?(m(d?W-1:tt<15?0:W-(tt<30?2:1),tt<35),c-E<15e3&&(L=Math.min(L*2,8e4)),y=c,f=0,s.length=0):1e3/H>=56&&p>=50&&c-y>L?++f>=3&&(m(W+1,!1),E=c,f=0,s.length=0):f=0}let F=!1,S=!1;document.addEventListener("visibilitychange",()=>{S&&!document.hidden&&!F&&(F=!0,h=performance.now(),R=h+600,s.length=0,requestAnimationFrame(g))}),b.uv=(c,x)=>{const d=Math.min(innerWidth,innerHeight);return[(c-innerWidth/2)/d,(innerHeight/2-x)/d]}}}();
