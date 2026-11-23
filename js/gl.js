(function(){const A=e=>e-Math.floor(e),E=(e,t,c)=>e<t?t:e>c?c:e,h=(e,t,c)=>{const a=E((c-e)/(t-e),0,1);return a*a*(3-2*a)},_=(e,t,c)=>e+(t-e)*c,y=e=>A(Math.sin(e*127.1)*43758.5453),D=(e,t)=>{e=A(e*123.34),t=A(t*456.21);const c=e*(e+45.32)+t*(t+45.32);return e+=c,t+=c,A(e*t)},V=e=>{const t=Math.floor(e);let c=e-t;return c=c*c*(3-2*c),_(y(t),y(t+1),c)},Y=(e,t)=>{const c=Math.floor(e),a=Math.floor(t);let s=e-c,m=t-a;return s=s*s*(3-2*s),m=m*m*(3-2*m),_(_(D(c,a),D(c+1,a),s),_(D(c,a+1),D(c+1,a+1),s),m)},H=(e,t,c,a,s,m)=>{const g=Math.abs(e-c)-s,i=Math.abs(t-a)-m;return Math.hypot(Math.max(g,0),Math.max(i,0))+Math.min(Math.max(g,i),0)},$=(e,t)=>{const c=Math.floor(e),a=Math.floor(t);let s=9,m=9,g=0,i=0,l=0;for(let p=-1;p<=1;p++)for(let u=-1;u<=1;u++){const x=c+u,d=a+p,f=x+.15+.7*D(x,d),v=d+.15+.7*D(x+17.3,d+4.1),r=Math.hypot(e-f,t-v);r<s?(m=s,s=r,g=f,i=v,l=D(x+3.7,d+9.2)):r<m&&(m=r)}return[s,m,g,i,l]},st=(e,t)=>{const c=t<2.6?1.25:.95,a=t<2.6?.95:.75,s=$(e/c,t/a);return s[2]*=c,s[3]*=a,s[5]=c,s[6]=a,s},tt=(e,t)=>t<0?_(4.85,1.45,h(.4,8.4,e)):_(4.6,1.1,h(0,7.6,e));function j(e,t){const c=e<0?-1:1,a=(e<0?8.3:7.5)-.5*V(e*1.7+3),s=.32*V(t*1.6+c*7)+.22*V(t*4.1+c*3)-.2;return Math.max(Math.abs(e)-tt(t,c)-s,Math.max(-t-.6,t-a))}const U=e=>e<5.7?1.85-.12*h(5.45,5.7,e):e<7.85?1.15:e<8.05?1.22:e<8.3?1.36:1.25;function X(e){const t=E((e-14.2)/1.25,0,1);let c=_(.44,.66,t*t);return c+=.05*Math.max(0,Math.sin((e-14.2)*9)),c}function F(e,t){const c=Math.abs(e);let a=j(e,t);t>4.2&&t<8.4&&(a=Math.min(a,Math.max(c-U(t),Math.max(4.4-t,t-8.4)))),a=Math.min(a,Math.max(c-_(.62,.5,h(8.4,8.8,t))-.04*Math.sin((t-8.4)*15.7),Math.max(8.35-t,t-8.82))),a=Math.min(a,H(e,t,0,11.5,_(.47,.42,E((t-8.8)/5.5,0,1)),2.72)),a=Math.min(a,Math.max(c-X(t),Math.max(14.2-t,t-15.45))),a=Math.min(a,Math.hypot(c-.62,t-15.32)-.11),a=Math.min(a,Math.max(c-.76,Math.abs(t-15.53)-.08));const s=.35;a=Math.min(a,Math.hypot(e,(t-16.05-s)/2.1)-.2),a=Math.min(a,Math.max(c-.16+(t-15.7-s)*.2,Math.abs(t-15.82-s)-.1)),a=Math.min(a,Math.hypot(c-.17,t-16.64-s)-.1),a=Math.min(a,Math.max(Math.abs(t-16.6-s+(c-.24)*.3)-.035,Math.abs(c-.29)-.06)),a=Math.min(a,H(c,t,0,16.6+s,.06,.1)),a=Math.min(a,Math.max(c-.12+(t-16.78-s)*.3,Math.abs(t-16.88-s)-.11)),a=Math.min(a,Math.hypot(e,t-17-s)-.04);const m=16.12+s+c*.22+h(.4,.5,A(c*5+.2))*.08*h(.75,1.05,c),g=16.48+s+c*.3-.16*h(.95,1.32,c);return a=Math.min(a,Math.max(Math.max(c-1.32,t-g),m-t)),a=Math.min(a,G(e,t)),a}function G(e,t){const c=Math.hypot(e,t-15.98);let a=Math.abs(c-.3)-.06-.025*Math.sin(Math.atan2(t-15.98,e)*14);return a=Math.min(a,H(e,t,0,16.17,.012,.1)),a=Math.min(a,H(e,t,0,15.93,.025,.17),H(e,t,0,16.05,.1,.018)),a=Math.min(a,Math.max(Math.abs(Math.hypot(e,t-15.86)-.14)-.022,t-15.82)),a}const z=(()=>{const e=[.38,-.5,.78],t=Math.hypot(...e);return e.map(c=>c/t)})(),o=(()=>{const e=[-.72,.5,.48],t=Math.hypot(...e);return e.map(c=>c/t)})(),R=(e,t,c)=>{const a=Math.hypot(e,t,c)||1;return[e/a,t/a,c/a]},P=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2];function W(e,t,c,a){const s=Math.max(0,P(e,z)),m=Math.max(0,P(e,o)),g=Math.pow(Math.max(0,P(e,R(z[0],z[1],z[2]+1))),14),i=Math.pow(Math.max(0,P(e,R(o[0],o[1],o[2]+1))),10),l=a*(1-.45*h(8.5,17,c));return[.035+.16*s*l+.04*m+.9*g*l+.22*i,.026+.1*s*l+.05*m+.6*g*l+.27*i,.018+.04*s*l+.07*m+.3*g*l+.36*i]}function et(e,t){const a=F(e,t),s=(F(e+.03,t)-F(e-.03,t))/(2*.03),m=(F(e,t+.03)-F(e,t-.03))/(2*.03),g=h(-.14,0,a);let i=R(s*g*1.6,m*g*1.6,1);const l=Math.abs(e);let p,u,x;const d=G(e,t)<.005;if(!d&&j(e,t)<=0&&!(t>4.2&&t<8.4&&l<U(t))){const f=st(e,t),v=(e-f[2])/f[5],r=(t-f[3])/f[6],w=f[1]-f[0],T=Math.atan2(r,v),q=Math.floor(T/1.2566+f[4]*5)*1.2566+.6,C=(.25+h(0,.45,Math.hypot(v,r)))*1.3,ot=D(f[4]*91,3.3)-.5;i=R(Math.cos(q)*C+ot*.8+i[0]*.5,Math.sin(q)*C+i[1]*.5,1);const n=.5+.55*f[4]+.15*Y(e*7,t*7),b=.22+.78*h(.008+.03*f[4],.09,w),M=(.35+.65*h(-.4,3,t))*(1-.5*h(5,8.5,t))*(1-.35*h(2.5,5,l)),O=Math.pow(Math.max(0,P(i,z)),1.5)*M,K=Math.pow(Math.max(0,P(i,o)),1.5),ct=1-.45*h(.9,0,t),Q=n*b*ct;p=(.025+.42*O+.06*K)*Q,u=(.022+.27*O+.08*K)*Q,x=(.028+.13*O+.12*K)*Q,f[4]>.82&&(p*=1.25,u*=1.05)}else if(!d&&t<8.4){const f=U(t),v=e/f;let r;t<5.7||t>7.85?r=R(v*.9,0,1):r=v<-.414?R(-.707,0,.707):v>.414?R(.707,0,.707):[0,0,1],t>8.05&&t<8.3&&(r=R(r[0],-.55,r[2])),t>7.85&&t<8.05&&(r=R(r[0],.5,r[2])),i=R(r[0]+i[0]*.3,r[1]+i[1]*.3,r[2]);const w=Math.max(0,P(i,z))*(1.15-.45*h(4.4,8.4,t)),T=Math.max(0,P(i,o)),q=t>7.6&&t<7.85?.55:1,C=1-.12*h(.05,0,Math.abs(A(t*1.25)-.5)-.45),ot=Math.abs(Math.abs(v)-.414)<.02&&t>5.7&&t<7.85?1.12:1,n=t>6.6&&t<7.45&&l<.42?l>.38||t<6.64||t>7.41?1.12:.9:1,b=q*C*ot*n*(.9+.2*Y(e*5,t*5))*(v<-.414&&t>5.7&&t<7.85?.8:1);p=(.04+.56*w+.08*T)*b,u=(.034+.4*w+.1*T)*b,x=(.034+.23*w+.15*T)*b}else if(!d&&t<14.2&&t>=8.82){const f=_(.47,.42,E((t-8.8)/5.5,0,1)),v=E(e/f,-.999,.999),r=.04*Math.sin(Math.asin(v)*10);i=R(v+r,0,Math.sqrt(1-v*v));const w=1.05-.5*h(8.8,14.2,t),T=Math.max(0,P(i,z)+.15)*w,q=Math.max(0,P(i,o)),C=Math.pow(Math.max(0,P(i,R(o[0],o[1],o[2]+1))),20);p=.03+.6*T+.12*q+.2*C,u=.028+.46*T+.15*q+.25*C,x=.03+.3*T+.21*q+.33*C}else{if(t>=14.2&&t<15.45&&!d){const f=t<14.8?0:1,v=e*(f?7:6)+f*.5,r=(t-(f?14.8:14.2))/.6,w=r-(.55+.3*Math.abs(Math.sin(v*Math.PI)));i=R(i[0]+.12*Math.sin(v*Math.PI*2)*r,i[1]-1.1*h(-.04,.06,w)*h(.22,.08,w)+.15,i[2])}if(t>16.3&&l>.3&&!d){const f=t-(16.47+l*.22);i=R(i[0]+.12*Math.sin((l*3-f*4)*6),i[1]+.3-.6*h(.05,.3,f),i[2])}return t>=8.3&&t<8.82&&(i=R(i[0]*.5+e*.9,Math.cos((t-8.35)*6.7)*.8,1)),[p,u,x]=W(i,e,t,d?1.25:t>=14.2&&t<15.45?.75:1),[p*1.5,u*1.5,x*1.5]}return[p*1.45,u*1.45,x*1.45]}const Z=-.2,I=Z-.03,J=e=>e<-.03?-9:I-.004+.13*h(-.02,.09,e)+.007*V(e*48)+.0035*V(e*160)+.012*h(.1,.45,e),at=.125,N=J(at);function B(e,t,c){const a=J(e);let s=0,m=0,g=0,i=0;if(t>I-.006&&(s=E((a-t)/c+.5,0,1)*E((t-(I-.006))/c,0,1),s>0)){const x=(J(e+.004)-J(e-.004))/.008,d=$(e*60,t*95),f=h(.02,.12,d[1]-d[0]),v=_(1,.5,h(a-.004,a-.09,t))*(.7+.45*d[4])*f*(.85+.3*Y(e*38,t*110)),r=E(.35+.5*x,0,1)*(.6+.4*d[4]);m=(.1+.13*r)*v,g=(.095+.14*r)*v,i=(.13+.2*r)*v;const w=h(.012,0,a-t)*.55+h(.004,0,a-t)*.4;m+=.55*w,g+=.6*w,i+=.82*w;const T=h(.012,0,t-I)*(.5+.5*V(e*300));m+=.1*T,g+=.12*T,i+=.16*T}const l=(t-N)/1.4,p=(at-e)/1.4;let u=null;if(l>-.012&&l<.1&&p>-.045&&p<.06){const x=_(.0085,.0058,E(l/.07,0,1));if(l<.07&&Math.abs(p)<x){const r=.75+.7*h(x,-x,p);u=A(l*42)>=.5?[.3*r,.07*r,.07*r]:[.38*r,.37*r,.42*r]}l>.068&&l<.072&&Math.abs(p)<.0095&&(u=[.12,.1,.11]),l>.072&&l<.084&&Math.abs(p)<.0052&&(u=[1.5,1.2,.8]),l>.084&&l<.092&&Math.abs(p)<.0065-(l-.084)*.8&&(u=[.16,.1,.09]);const d=.009,f=.046,v=.022;if(p>d&&p<f&&l<v&&l>-.012){const r=h(f,d,p);u=[.13+.12*r,.12+.12*r,.15+.16*r];const w=Math.abs(p-.028),T=Math.abs(l-.009);if(w<.0055&&T<.0045)u=w<8e-4||T<6e-4?[.3,.18,.08]:[1.35,.9,.42];else{const q=Math.exp(-Math.hypot(w,T)*160)*.5;u=[u[0]+q,u[1]+q*.62,u[2]+q*.25]}}if(p>d-.003&&p<f+.003&&l>=v&&l<v+.013-Math.abs(p-(d+f)/2)*.6){const r=h(v+.004,v+.012-Math.abs(p-(d+f)/2)*.6,l);u=[.1+.25*r,.07+.25*r,.08+.32*r]}u&&([m,g,i]=u,s=1)}return[m,g,i,s]}const S=e=>Math.round(E(Math.pow(E(e,0,1.6)/1.6,1/2.2),0,1)*255),L={w:320,h:490,x0:-6,x1:6,y0:-.8,y1:17.6},k={w:384,h:172,u0:-.04,u1:.56,y0:I-.01,y1:I+.26};function nt(e){const t=new Uint8Array(L.w*L.h*4),c=new Uint8Array(k.w*k.h*4),a=(L.x1-L.x0)/L.w,s=(k.u1-k.u0)/k.w,m=[];for(let l=0;l<L.h;l+=16)m.push(()=>{for(let p=l;p<Math.min(L.h,l+16);p++){const u=L.y0+(p+.5)/L.h*(L.y1-L.y0);for(let x=0;x<L.w;x++){const d=L.x0+(x+.5)/L.w*(L.x1-L.x0),f=F(d,u),v=(p*L.w+x)*4;if(f>a)continue;const r=E(.5-f/a,0,1),w=et(d,u);t[v]=S(w[0]),t[v+1]=S(w[1]),t[v+2]=S(w[2]),t[v+3]=Math.round(r*255)}}});for(let l=0;l<k.h;l+=12)m.push(()=>{for(let p=l;p<Math.min(k.h,l+12);p++){const u=k.y0+(p+.5)/k.h*(k.y1-k.y0);for(let x=0;x<k.w;x++){const d=k.u0+(x+.5)/k.w*(k.u1-k.u0),f=B(d,u,s),v=(p*k.w+x)*4;f[3]<=0||(c[v]=S(f[0]),c[v+1]=S(f[1]),c[v+2]=S(f[2]),c[v+3]=Math.round(f[3]*255))}}});const g=window.requestIdleCallback?l=>requestIdleCallback(l,{timeout:300}):l=>setTimeout(()=>l({timeRemaining:()=>8}),16),i=l=>{const p=performance.now();for(;m.length&&performance.now()-p<6;)m.shift()();m.length?g(i):e({mon:t,cape:c,M:L,Cp:k,lampY:N+.083*1.4,lampU:at})};g(i)}window.SCENE={bake:nt}})(),function(){const A=document.getElementById("gl"),E={scr:0,ly:0,lift:0,heart:1,cool:0,fill:0,burst:0,cam:0,par:0,tint:0,streak:0,beat:0,hy:0,hs:1,mx:0,my:0,mo:0,zm:0,lk:0,lp:0,pary:0,rx:0,ry:0,rp:1,fw:0,sy:0,lv:3},h=Object.assign({},E),_=matchMedia("(prefers-reduced-motion: reduce)").matches,y={ok:!1,rm:_,set(W){Object.assign(h,W)},jump(W){Object.assign(h,W),Object.assign(E,W)},state:E,target:h};window.GL=y;const D=(navigator.hardwareConcurrency||4)<=4||(navigator.deviceMemory||4)<=3,V=[{s:.42,q:.5},{s:.55,q:.65},{s:.7,q:.8},{s:.85,q:1},{s:1,q:1}],Y=/lv=([0-4])/.exec(location.hash);let H=Y?+Y[1]:D?2:3,$=V[H].s,st=V[H].q,tt=!1,j=0,U=0,X=1,F=1;E.lv=h.lv=H,document.documentElement.classList.toggle("lq",H<2);function G(){X=Math.max(1,Math.round(j*$)),F=Math.max(1,Math.round(U*$)),o&&o.viewport(0,0,X,F),A.style.transform=X<j||F<U?`scale(${(j/X).toFixed(5)},${(U/F).toFixed(5)})`:"",tt=!1}function z(){const W=Math.min(window.devicePixelRatio||1,2);let et=innerWidth*W,Z=innerHeight*W;const I=Math.min(1,1400/Math.max(et,Z));j=Math.round(et*I),U=Math.round(Z*I),(A.width!==j||A.height!==U)&&(A.width=j,A.height=U),G()}let o;const R=!!window.WebGLRenderingContext&&!/nogl/.test(location.hash);y.ok=R,R?document.documentElement.classList.add("gl"):document.documentElement.classList.add("no-gl"),R&&requestAnimationFrame(()=>setTimeout(P,0));function P(){z();try{o=A.getContext("webgl",{antialias:!1,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:!1})}catch{}if(!o){y.ok=!1,document.documentElement.classList.remove("gl"),document.documentElement.classList.add("no-gl"),requestAnimationFrame(()=>document.documentElement.classList.add("gl-ready"));return}const W="attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}",et=`
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
float gV,gLn,gFl,gX0,gB; vec2 gL,gD;
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
      if(p.y>-.8){ vec4 m=monT(p); if(m.a>0.) col=mix(col,m.rgb+vec3(1.,.82,.6)*gB*.7,m.a*V); }
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
  float ring=0.;
  if(rp<.999 && lv>.5){ vec2 rv=uv0-vec2(rx,ry); float rd0=length(rv); ring=exp(-pow((rd0-rp*1.9)*9.,2.))*(1.-rp)*(1.-rp);
    uv+=rv/(rd0+.001)*ring*.06; }
  sceneInit(); gB=beamI(uv); // луч в этом пикселе — один раз
  vec3 col=world(uv,asp);
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
      col=mix(col,hc,heart*keep);
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
  gl_FragColor=vec4(pow(col,vec3(.96)),1.);
}`,Z=document.documentElement;let I=/Apple/.test(navigator.vendor||"")?null:o.getExtension("KHR_parallel_shader_compile");function J(n,b){const M=o.createShader(n);return o.shaderSource(M,b),o.compileShader(M),M}let at,N,B,S=!1;y.ok=!0,Z.classList.add("gl");function L(){N&&!o.getShaderParameter(N,o.COMPILE_STATUS)&&console.warn(o.getShaderInfoLog(N)),y.ok=!1,Z.classList.remove("gl"),Z.classList.add("no-gl"),requestAnimationFrame(()=>Z.classList.add("gl-ready"))}const k={};function nt(){if(S)return;if(!o.getProgramParameter(B,o.LINK_STATUS))return L();o.useProgram(B);const n=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,n),o.bufferData(o.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),o.STATIC_DRAW);const b=o.getAttribLocation(B,"p");o.enableVertexAttribArray(b),o.vertexAttribPointer(b,2,o.FLOAT,!1,0,0),["R","t","q",...Object.keys(E)].forEach(M=>k[M]=o.getUniformLocation(B,M)),o.uniform1i(o.getUniformLocation(B,"TM"),0),o.uniform1i(o.getUniformLocation(B,"TC"),1),y.scene?e():window.SCENE&&!y.baking&&(y.baking=!0,SCENE.bake(M=>{y.scene=M,!S&&o&&e()})),G(),ot=!0,C||(C=!0,g=performance.now(),requestAnimationFrame(p))}function e(){const n=y.scene;[[n.mon,n.M],[n.cape,n.Cp]].forEach(([b,M],O)=>{const K=o.createTexture();o.activeTexture(o.TEXTURE0+O),o.bindTexture(o.TEXTURE_2D,K),o.texImage2D(o.TEXTURE_2D,0,o.RGBA,M.w,M.h,0,o.RGBA,o.UNSIGNED_BYTE,b),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAG_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}),y.jump({ly:n.lampY}),y.set({scr:1})}function t(){if(at=J(o.VERTEX_SHADER,W),N=J(o.FRAGMENT_SHADER,et),B=o.createProgram(),o.attachShader(B,at),o.attachShader(B,N),o.linkProgram(B),I){const n=()=>{if(S)return;const b=o.getProgramParameter(B,I.COMPLETION_STATUS_KHR);typeof b!="boolean"?(I=null,nt()):b?nt():requestAnimationFrame(n)};requestAnimationFrame(n)}else requestAnimationFrame(()=>setTimeout(nt,0))}t(),A.addEventListener("webglcontextlost",n=>{n.preventDefault(),S=!0,C=!1,y.ok=!1,Z.classList.remove("gl"),Z.classList.add("no-gl")},!1),A.addEventListener("webglcontextrestored",()=>{S=!1,y.ok=!0,Z.classList.remove("no-gl"),Z.classList.add("gl"),G(),t()},!1);function c(n,b){n=Math.max(0,Math.min(4,n)),n!==H&&(H=n,h.lv=n,document.documentElement.classList.toggle("lq",n<2),$=V[n].s,st=V[n].q,tt=!0,b&&G())}y.pulse=()=>{tt&&G()};let a=60;const s=[];y.quality=()=>({level:H,fps:Math.round(a),scale:+$.toFixed(2),q:st,w:X,h:F,pending:tt}),Object.defineProperty(y,"level",{get:()=>H}),addEventListener("resize",z),addEventListener("pointermove",n=>{h.par=(n.clientX/innerWidth-.5)*2},{passive:!0}),addEventListener("pointermove",n=>{h.pary=(n.clientY/innerHeight-.5)*2},{passive:!0}),addEventListener("deviceorientation",n=>{n.gamma!=null&&(h.par=Math.max(-1,Math.min(1,n.gamma/30))),n.beta!=null&&(h.pary=Math.max(-1,Math.min(1,(n.beta-45)/35)))},{passive:!0});let m=0,g=0,i=0;const l={streak:9,burst:2.2,zm:3.2,lk:6,fw:1.6,lv:1.2};function p(n){if(S){C=!1;return}m||(m=g=n);const b=Math.min(.05,(n-g)/1e3);g=n,i+=b*(_?.25:1);for(const M in h)E[M]+=(h[M]-E[M])*Math.min(1,b*(l[M]||2.6));o.uniform2f(k.R,X,F),o.uniform1f(k.t,i),y.t=i,o.uniform1f(k.q,st);for(const M in E)o.uniform1f(k[M],E[M]);o.drawArrays(o.TRIANGLES,0,3),y.ready||(y.ready=!0,requestAnimationFrame(()=>document.documentElement.classList.add("gl-ready"))),q(n),document.hidden?C=!1:requestAnimationFrame(p)}let u=0,x=0,d=0,f=0,v=-1e9,r=1e4,w=0,T=0;function q(n){const b=n-T;if(T=n,Y||(x||(x=n+700),n<x)||n<w||b<=0||b>4e3)return;if(s.push(b),s.length>90&&s.shift(),!u){u=n+1e3,s.length=0;return}if(n<u||s.length<4)return;const M=n-m<3200;u=n+(M?1e3:2e3);const O=s.slice().sort((Q,lt)=>Q-lt),K=O[O.length>>1];a=1e3/(s.reduce((Q,lt)=>Q+lt,0)/s.length);const ct=Math.min(a,1e3/K);ct<(M?50:46)?(c(M?H-1:ct<15?0:H-(ct<30?2:1),ct<35),n-v<15e3&&(r=Math.min(r*2,8e4)),f=n,d=0,s.length=0):1e3/K>=56&&a>=50&&n-f>r?++d>=3&&(c(H+1,!1),v=n,d=0,s.length=0):d=0}let C=!1,ot=!1;document.addEventListener("visibilitychange",()=>{ot&&!document.hidden&&!C&&(C=!0,g=performance.now(),w=g+600,s.length=0,requestAnimationFrame(p))}),y.uv=(n,b)=>{const M=Math.min(innerWidth,innerHeight);return[(n-innerWidth/2)/M,(innerHeight/2-b)/M]}}}();
