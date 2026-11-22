(function(){const k=e=>e-Math.floor(e),M=(e,t,o)=>e<t?t:e>o?o:e,p=(e,t,o)=>{const n=M((o-e)/(t-e),0,1);return n*n*(3-2*n)},L=(e,t,o)=>e+(t-e)*o,d=e=>k(Math.sin(e*127.1)*43758.5453),Z=(e,t)=>{e=k(e*123.34),t=k(t*456.21);const o=e*(e+45.32)+t*(t+45.32);return e+=o,t+=o,k(e*t)},A=e=>{const t=Math.floor(e);let o=e-t;return o=o*o*(3-2*o),L(d(t),d(t+1),o)},I=(e,t)=>{const o=Math.floor(e),n=Math.floor(t);let l=e-o,s=t-n;return l=l*l*(3-2*l),s=s*s*(3-2*s),L(L(Z(o,n),Z(o+1,n),l),L(Z(o,n+1),Z(o+1,n+1),l),s)},g=(e,t,o,n,l,s)=>{const i=Math.abs(e-o)-l,E=Math.abs(t-n)-s;return Math.hypot(Math.max(i,0),Math.max(E,0))+Math.min(Math.max(i,E),0)},S=(e,t)=>t<0?L(4.9,1.5,p(.4,8.3,e))-(e>4.6?0:.15*(k(e*1.3)>=.5)):L(4.5,1.1,p(0,7.8,e))+.25*(k(e*1.1+.3)>=.5);function U(e,t){let o=Math.max(Math.abs(e)-S(t,Math.sign(e)),Math.max(-t-.6,t-(e<0?8.2:7.6)-.25*A(e*2)));o=Math.min(o,g(e,t,0,5,1.85,.6)),o=Math.min(o,g(e,t,0,6.75,1.15,1.2)),o=Math.min(o,g(e,t,0,8.1,1.25,.2)),o=Math.min(o,g(e,t,0,8.55,.65,.25)),o=Math.min(o,g(e,t,0,11.5,L(.48,.43,M((t-8.8)/5.5,0,1)),2.75)),o=Math.min(o,Math.max(Math.abs(e)-L(.46,.7,p(14.2,15.4,t)),Math.abs(t-14.85)-.65)),o=Math.min(o,g(e,t,0,15.52,.74,.07));const n=Math.abs(e);o=Math.min(o,g(e,t,0,16.05,.12,.5));const l=16.2+n*.38+Math.max(0,Math.sin(n*13))*.14,s=16.55+n*.5;return o=Math.min(o,Math.max(Math.max(n-1.35,t-s),l-t)),o=Math.min(o,Math.hypot(n-.14,t-16.66)-.1),o=Math.min(o,Math.abs(Math.hypot(e,t-15.93)-.31)-.065),o}function D(e,t){let o=Math.abs(Math.hypot(e,t-15.93)-.31)-.065;return o=Math.min(o,g(e,t,0,15.35,.025,.26),g(e,t,0,14.75,.04,.36),g(e,t,0,15.02,.22,.03)),o=Math.min(o,Math.max(Math.abs(Math.hypot(e,t-14.68)-.26)-.035,t-14.6)),o}function q(e,t){const o=M(U(e-.28,t+.2)/.28,0,1);let n,l,s;if(t<4.4||Math.abs(e)>1.9&&t<8.4){const i=e*.7+Math.floor(t*1.1)*.5+.3*A(t*3),E=t*1.1,r=Math.floor(i),f=Math.floor(E),R=i-r,x=E-f,w=p(0,.09,Math.min(Math.min(R,1-R)*.8,Math.min(x,1-x))),v=(.6+.5*Z(r,f))*(.45+.55*w)*(e<0?1.2:.75)*(.8+.4*A(e*3+t*2)),u=p(1.5,7,t)*(1-p(2.2,4.8,Math.abs(e)));n=.075*v+.3*u*v,l=.062*v+.2*u*v,s=.07*v+.1*u*v}else if(t<8.3){[n,l,s]=e<-.7?[.42,.32,.22]:e>.7?[.2,.15,.11]:[.34,.26,.18];const i=(1-.25*p(.06,0,Math.abs(k(t*.9)-.5)-.45))*(1.15-.35*p(4.4,8.3,t));n*=i,l*=i,s*=i}else if(t<8.8||t>14.2){const i=(1+.4*Math.sin(t*9))*(1-.4*p(14.2,17,t));n=.36*i,l=.25*i,s=.13*i}else{const i=(.5+.5*p(.45,-.3,e))*(1.1-.4*p(8.8,14.2,t));n=.78*i,l=.62*i,s=.46*i}return n+=.55*o*.26,l+=.62*o*.26,s+=.8*o*.26,D(e,t)<0&&(n=.6+.4*o,l=.44+.32*o,s=.2+.2*o),[n,l,s]}const P=-.2,T=P-.03,_=e=>e<-.03?-9:T-.004+.13*p(-.02,.09,e)+.007*A(e*48)+.0035*A(e*160)+.012*p(.1,.45,e),F=.125,z=_(F);function a(e,t,o){const n=_(e);let l=0,s=0,i=0,E=0;if(t>T-.006&&(l=M((n-t)/o+.5,0,1)*M((t-(T-.006))/o,0,1),l>0)){const w=L(1,.48,p(n-.004,n-.08,t))*(.75+.5*I(e*38,t*110))*(1-.5*p(.55,.75,I(e*90,t*30)));s=.085*w,i=.075*w,E=.115*w;const v=p(.011,0,n-t)*.5+p(.004,0,n-t)*.35;s+=.5*v,i+=.55*v,E+=.75*v}const r=(t-z)/1.4,f=(F-e)/1.4;let R=0,x=null;if(r>-.01&&r<.1&&Math.abs(f)<.04){const w=L(.0085,.0058,M(r/.07,0,1));if(r<.07&&Math.abs(f)<w){const v=.6+.6*p(w,-w,f);x=k(r*42)>=.5?[.12*v,.05*v,.06*v]:[.16*v,.15*v,.18*v]}r>.068&&r<.072&&Math.abs(f)<.0095&&(x=[.05,.04,.05]),r>.072&&r<.084&&Math.abs(f)<.0052&&(x=[1.4,1.15,.77]),r>.084&&r<.092&&Math.abs(f)<.0065-(r-.084)*.8&&(x=[.05,.035,.04]),f>.008&&f<.032&&r<.016&&r>-.01&&(x=f>.018&&f<.024&&r>.004&&r<.01?[.9,.6,.29]:[.06,.05,.07]),f>.006&&f<.034&&r>=.016&&r<.024-Math.abs(f-.02)*.55&&(x=[.04,.03,.04]),x&&(R=1,[s,i,E]=x,l=1)}return[s,i,E,l]}const H=e=>Math.round(M(Math.pow(M(e,0,1.6)/1.6,1/2.2),0,1)*255),y={w:168,h:258,x0:-6,x1:6,y0:-.8,y1:17.6},h={w:384,h:172,u0:-.04,u1:.56,y0:T-.01,y1:T+.26};function V(e){const t=new Uint8Array(y.w*y.h*4),o=new Uint8Array(h.w*h.h*4),n=(y.x1-y.x0)/y.w,l=(h.u1-h.u0)/h.w,s=[];for(let r=0;r<y.h;r+=16)s.push(()=>{for(let f=r;f<Math.min(y.h,r+16);f++){const R=y.y0+(f+.5)/y.h*(y.y1-y.y0);for(let x=0;x<y.w;x++){const w=y.x0+(x+.5)/y.w*(y.x1-y.x0),v=U(w,R),u=(f*y.w+x)*4;if(v>n)continue;const W=M(.5-v/n,0,1),C=q(w,R);t[u]=H(C[0]),t[u+1]=H(C[1]),t[u+2]=H(C[2]),t[u+3]=Math.round(W*255)}}});for(let r=0;r<h.h;r+=12)s.push(()=>{for(let f=r;f<Math.min(h.h,r+12);f++){const R=h.y0+(f+.5)/h.h*(h.y1-h.y0);for(let x=0;x<h.w;x++){const w=h.u0+(x+.5)/h.w*(h.u1-h.u0),v=a(w,R,l),u=(f*h.w+x)*4;v[3]<=0||(o[u]=H(v[0]),o[u+1]=H(v[1]),o[u+2]=H(v[2]),o[u+3]=Math.round(v[3]*255))}}});const i=window.requestIdleCallback?r=>requestIdleCallback(r,{timeout:300}):r=>setTimeout(()=>r({timeRemaining:()=>8}),16),E=r=>{const f=performance.now();for(;s.length&&performance.now()-f<6;)s.shift()();s.length?i(E):e({mon:t,cape:o,M:y,Cp:h,lampY:z+.083*1.4,lampU:F})};i(E)}window.SCENE={bake:V}})(),function(){const k=document.getElementById("gl"),M={scr:0,ly:0,lift:0,heart:1,cool:0,fill:0,burst:0,cam:0,par:0,tint:0,streak:0,beat:0,hy:0,hs:1,mx:0,my:0,mo:0,zm:0,lk:0,lp:0,pary:0,rx:0,ry:0,rp:1,fw:0,sy:0,lv:3},p=Object.assign({},M),L=matchMedia("(prefers-reduced-motion: reduce)").matches,d={ok:!1,rm:L,set(h){Object.assign(p,h)},jump(h){Object.assign(p,h),Object.assign(M,h)},state:M,target:p};window.GL=d;const Z=(navigator.hardwareConcurrency||4)<=4||(navigator.deviceMemory||4)<=3,A=[{s:.42,q:.5},{s:.55,q:.65},{s:.7,q:.8},{s:.85,q:1},{s:1,q:1}],I=/lv=([0-4])/.exec(location.hash);let g=I?+I[1]:Z?2:3,S=A[g].s,U=A[g].q,D=!1,q=0,P=0,T=1,_=1;M.lv=p.lv=g,document.documentElement.classList.toggle("lq",g<2);function F(){T=Math.max(1,Math.round(q*S)),_=Math.max(1,Math.round(P*S)),a&&a.viewport(0,0,T,_),k.style.transform=T<q||_<P?`scale(${(q/T).toFixed(5)},${(P/_).toFixed(5)})`:"",D=!1}function z(){const h=Math.min(window.devicePixelRatio||1,2);let V=innerWidth*h,e=innerHeight*h;const t=Math.min(1,1400/Math.max(V,e));q=Math.round(V*t),P=Math.round(e*t),(k.width!==q||k.height!==P)&&(k.width=q,k.height=P),F()}let a;const H=!!window.WebGLRenderingContext&&!/nogl/.test(location.hash);d.ok=H,H?document.documentElement.classList.add("gl"):document.documentElement.classList.add("no-gl"),H&&requestAnimationFrame(()=>setTimeout(y,0));function y(){z();try{a=k.getContext("webgl",{antialias:!1,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:!1})}catch{}if(!a){d.ok=!1,document.documentElement.classList.remove("gl"),document.documentElement.classList.add("no-gl"),requestAnimationFrame(()=>document.documentElement.classList.add("gl-ready"));return}const h="attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}",V=`
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
const vec2 MB0=vec2(.355,HZ-.07); const float MS=.034; // v19: памятник — главный герой, ≈25% высоты экрана
vec2 monB(){return vec2(MB0.x-cam*.25,MB0.y);}
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
        col+=vec3(.75,.82,1.)*smoothstep(.35,0.,abs(p.y+.1))*step(abs(p.x),4.9)*(.4+.6*sin(t*2.3+p.x*3.))*.18*V; // пена у скалы
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
}`,e=document.documentElement;let t=/Apple/.test(navigator.vendor||"")?null:a.getExtension("KHR_parallel_shader_compile");function o(c,b){const m=a.createShader(c);return a.shaderSource(m,b),a.compileShader(m),m}let n,l,s,i=!1;d.ok=!0,e.classList.add("gl");function E(){l&&!a.getShaderParameter(l,a.COMPILE_STATUS)&&console.warn(a.getShaderInfoLog(l)),d.ok=!1,e.classList.remove("gl"),e.classList.add("no-gl"),requestAnimationFrame(()=>e.classList.add("gl-ready"))}const r={};function f(){if(i)return;if(!a.getProgramParameter(s,a.LINK_STATUS))return E();a.useProgram(s);const c=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,c),a.bufferData(a.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),a.STATIC_DRAW);const b=a.getAttribLocation(s,"p");a.enableVertexAttribArray(b),a.vertexAttribPointer(b,2,a.FLOAT,!1,0,0),["R","t","q",...Object.keys(M)].forEach(m=>r[m]=a.getUniformLocation(s,m)),a.uniform1i(a.getUniformLocation(s,"TM"),0),a.uniform1i(a.getUniformLocation(s,"TC"),1),d.scene?R():window.SCENE&&!d.baking&&(d.baking=!0,SCENE.bake(m=>{d.scene=m,!i&&a&&R()})),F(),re=!0,B||(B=!0,C=performance.now(),requestAnimationFrame(Y))}function R(){const c=d.scene;[[c.mon,c.M],[c.cape,c.Cp]].forEach(([b,m],G)=>{const N=a.createTexture();a.activeTexture(a.TEXTURE0+G),a.bindTexture(a.TEXTURE_2D,N),a.texImage2D(a.TEXTURE_2D,0,a.RGBA,m.w,m.h,0,a.RGBA,a.UNSIGNED_BYTE,b),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}),d.jump({ly:c.lampY}),d.set({scr:1})}function x(){if(n=o(a.VERTEX_SHADER,h),l=o(a.FRAGMENT_SHADER,V),s=a.createProgram(),a.attachShader(s,n),a.attachShader(s,l),a.linkProgram(s),t){const c=()=>{if(i)return;const b=a.getProgramParameter(s,t.COMPLETION_STATUS_KHR);typeof b!="boolean"?(t=null,f()):b?f():requestAnimationFrame(c)};requestAnimationFrame(c)}else requestAnimationFrame(()=>setTimeout(f,0))}x(),k.addEventListener("webglcontextlost",c=>{c.preventDefault(),i=!0,B=!1,d.ok=!1,e.classList.remove("gl"),e.classList.add("no-gl")},!1),k.addEventListener("webglcontextrestored",()=>{i=!1,d.ok=!0,e.classList.remove("no-gl"),e.classList.add("gl"),F(),x()},!1);function w(c,b){c=Math.max(0,Math.min(4,c)),c!==g&&(g=c,p.lv=c,document.documentElement.classList.toggle("lq",c<2),S=A[c].s,U=A[c].q,D=!0,b&&F())}d.pulse=()=>{D&&F()};let v=60;const u=[];d.quality=()=>({level:g,fps:Math.round(v),scale:+S.toFixed(2),q:U,w:T,h:_,pending:D}),Object.defineProperty(d,"level",{get:()=>g}),addEventListener("resize",z),addEventListener("pointermove",c=>{p.par=(c.clientX/innerWidth-.5)*2},{passive:!0}),addEventListener("pointermove",c=>{p.pary=(c.clientY/innerHeight-.5)*2},{passive:!0}),addEventListener("deviceorientation",c=>{c.gamma!=null&&(p.par=Math.max(-1,Math.min(1,c.gamma/30))),c.beta!=null&&(p.pary=Math.max(-1,Math.min(1,(c.beta-45)/35)))},{passive:!0});let W=0,C=0,K=0;const se={streak:9,burst:2.2,zm:3.2,lk:6,fw:1.6,lv:1.2};function Y(c){if(i){B=!1;return}W||(W=C=c);const b=Math.min(.05,(c-C)/1e3);C=c,K+=b*(L?.25:1);for(const m in p)M[m]+=(p[m]-M[m])*Math.min(1,b*(se[m]||2.6));a.uniform2f(r.R,T,_),a.uniform1f(r.t,K),d.t=K,a.uniform1f(r.q,U);for(const m in M)a.uniform1f(r[m],M[m]);a.drawArrays(a.TRIANGLES,0,3),d.ready||(d.ready=!0,requestAnimationFrame(()=>document.documentElement.classList.add("gl-ready"))),ne(c),document.hidden?B=!1:requestAnimationFrame(Y)}let j=0,$=0,X=0,te=0,oe=-1e9,J=1e4,ae=0,ce=0;function ne(c){const b=c-ce;if(ce=c,I||($||($=c+700),c<$)||c<ae||b<=0||b>4e3)return;if(u.push(b),u.length>90&&u.shift(),!j){j=c+1e3,u.length=0;return}if(c<j||u.length<4)return;const m=c-W<3200;j=c+(m?1e3:2e3);const G=u.slice().sort((Q,ee)=>Q-ee),N=G[G.length>>1];v=1e3/(u.reduce((Q,ee)=>Q+ee,0)/u.length);const O=Math.min(v,1e3/N);O<(m?50:46)?(w(m?g-1:O<15?0:g-(O<30?2:1),O<35),c-oe<15e3&&(J=Math.min(J*2,8e4)),te=c,X=0,u.length=0):1e3/N>=56&&v>=50&&c-te>J?++X>=3&&(w(g+1,!1),oe=c,X=0,u.length=0):X=0}let B=!1,re=!1;document.addEventListener("visibilitychange",()=>{re&&!document.hidden&&!B&&(B=!0,C=performance.now(),ae=C+600,u.length=0,requestAnimationFrame(Y))}),d.uv=(c,b)=>{const m=Math.min(innerWidth,innerHeight);return[(c-innerWidth/2)/m,(innerHeight/2-b)/m]}}}();
