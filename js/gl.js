(function(){const k=e=>e-Math.floor(e),M=(e,t,a)=>e<t?t:e>a?a:e,m=(e,t,a)=>{const n=M((a-e)/(t-e),0,1);return n*n*(3-2*n)},L=(e,t,a)=>e+(t-e)*a,u=e=>k(Math.sin(e*127.1)*43758.5453),I=(e,t)=>{e=k(e*123.34),t=k(t*456.21);const a=e*(e+45.32)+t*(t+45.32);return e+=a,t+=a,k(e*t)},A=e=>{const t=Math.floor(e);let a=e-t;return a=a*a*(3-2*a),L(u(t),u(t+1),a)},Z=(e,t)=>{const a=Math.floor(e),n=Math.floor(t);let i=e-a,s=t-n;return i=i*i*(3-2*i),s=s*s*(3-2*s),L(L(I(a,n),I(a+1,n),i),L(I(a,n+1),I(a+1,n+1),i),s)},x=(e,t,a,n,i,s)=>{const l=Math.abs(e-a)-i,E=Math.abs(t-n)-s;return Math.hypot(Math.max(l,0),Math.max(E,0))+Math.min(Math.max(l,E),0)},U=(e,t)=>t<0?L(4.9,1.5,m(.4,8.3,e))-(e>4.6?0:.15*(k(e*1.3)>=.5)):L(4.5,1.1,m(0,7.8,e))+.25*(k(e*1.1+.3)>=.5);function D(e,t){let a=Math.max(Math.abs(e)-U(t,Math.sign(e)),Math.max(-t-.6,t-(e<0?8.2:7.6)-.25*A(e*2)));a=Math.min(a,x(e,t,0,5,1.85,.6)),a=Math.min(a,x(e,t,0,6.75,1.15,1.2)),a=Math.min(a,x(e,t,0,8.1,1.25,.2)),a=Math.min(a,x(e,t,0,8.55,.65,.25)),a=Math.min(a,x(e,t,0,11.5,L(.48,.43,M((t-8.8)/5.5,0,1)),2.75)),a=Math.min(a,Math.max(Math.abs(e)-L(.46,.7,m(14.2,15.4,t)),Math.abs(t-14.85)-.65)),a=Math.min(a,x(e,t,0,15.52,.74,.07));const n=Math.abs(e);a=Math.min(a,x(e,t,0,16.05,.12,.5));const i=16.2+n*.38+Math.max(0,Math.sin(n*13))*.14,s=16.55+n*.5;return a=Math.min(a,Math.max(Math.max(n-1.35,t-s),i-t)),a=Math.min(a,Math.hypot(n-.14,t-16.66)-.1),a=Math.min(a,Math.abs(Math.hypot(e,t-15.93)-.31)-.065),a}function z(e,t){let a=Math.abs(Math.hypot(e,t-15.93)-.31)-.065;return a=Math.min(a,x(e,t,0,15.35,.025,.26),x(e,t,0,14.75,.04,.36),x(e,t,0,15.02,.22,.03)),a=Math.min(a,Math.max(Math.abs(Math.hypot(e,t-14.68)-.26)-.035,t-14.6)),a}function q(e,t){const a=M(D(e-.28,t+.2)/.28,0,1);let n,i,s;if(t<4.4||Math.abs(e)>1.9&&t<8.4){const l=e*.7+Math.floor(t*1.1)*.5+.3*A(t*3),E=t*1.1,r=Math.floor(l),f=Math.floor(E),R=l-r,d=E-f,w=m(0,.09,Math.min(Math.min(R,1-R)*.8,Math.min(d,1-d))),p=(.6+.5*I(r,f))*(.45+.55*w)*(e<0?1.2:.75)*(.8+.4*A(e*3+t*2));n=.075*p,i=.062*p,s=.07*p}else if(t<8.3){[n,i,s]=e<-.7?[.11,.105,.13]:e>.7?[.05,.05,.065]:[.08,.078,.095];const l=1-.25*m(.06,0,Math.abs(k(t*.9)-.5)-.45);n*=l,i*=l,s*=l}else if(t<8.8||t>14.2){const l=1+.4*Math.sin(t*9);n=.075*l,i=.06*l,s=.045*l}else{const l=.55+.45*m(.45,-.45,e);n=.14*l,i=.135*l,s=.15*l}return n+=.55*a*.26,i+=.62*a*.26,s+=.8*a*.26,z(e,t)<0&&(n=.16+.4*a,i=.12+.32*a,s=.08+.2*a),[n,i,s]}const P=-.2,T=P-.03,C=e=>e<-.03?-9:T-.004+.13*m(-.02,.09,e)+.007*A(e*48)+.0035*A(e*160)+.012*m(.1,.45,e),F=.125,V=C(F);function o(e,t,a){const n=C(e);let i=0,s=0,l=0,E=0;if(t>T-.006&&(i=M((n-t)/a+.5,0,1)*M((t-(T-.006))/a,0,1),i>0)){const w=L(1,.48,m(n-.004,n-.08,t))*(.75+.5*Z(e*38,t*110))*(1-.5*m(.55,.75,Z(e*90,t*30)));s=.05*w,l=.042*w,E=.07*w;const p=m(.007,0,n-t)*.16;s+=.5*p,l+=.55*p,E+=.75*p}const r=(t-V)/1.4,f=(F-e)/1.4;let R=0,d=null;if(r>-.01&&r<.1&&Math.abs(f)<.04){const w=L(.0085,.0058,M(r/.07,0,1));if(r<.07&&Math.abs(f)<w){const p=.6+.6*m(w,-w,f);d=k(r*42)>=.5?[.12*p,.05*p,.06*p]:[.16*p,.15*p,.18*p]}r>.068&&r<.072&&Math.abs(f)<.0095&&(d=[.05,.04,.05]),r>.072&&r<.084&&Math.abs(f)<.0052&&(d=[1.4,1.15,.77]),r>.084&&r<.092&&Math.abs(f)<.0065-(r-.084)*.8&&(d=[.05,.035,.04]),f>.008&&f<.032&&r<.016&&r>-.01&&(d=f>.018&&f<.024&&r>.004&&r<.01?[.9,.6,.29]:[.06,.05,.07]),f>.006&&f<.034&&r>=.016&&r<.024-Math.abs(f-.02)*.55&&(d=[.04,.03,.04]),d&&(R=1,[s,l,E]=d,i=1)}return[s,l,E,i]}const H=e=>Math.round(M(Math.pow(M(e,0,1.6)/1.6,1/2.2),0,1)*255),y={w:168,h:258,x0:-6,x1:6,y0:-.8,y1:17.6},v={w:384,h:172,u0:-.04,u1:.56,y0:T-.01,y1:T+.26};function B(e){const t=new Uint8Array(y.w*y.h*4),a=new Uint8Array(v.w*v.h*4),n=(y.x1-y.x0)/y.w,i=(v.u1-v.u0)/v.w,s=[];for(let r=0;r<y.h;r+=16)s.push(()=>{for(let f=r;f<Math.min(y.h,r+16);f++){const R=y.y0+(f+.5)/y.h*(y.y1-y.y0);for(let d=0;d<y.w;d++){const w=y.x0+(d+.5)/y.w*(y.x1-y.x0),p=D(w,R),g=(f*y.w+d)*4;if(p>n)continue;const j=M(.5-p/n,0,1),_=q(w,R);t[g]=H(_[0]),t[g+1]=H(_[1]),t[g+2]=H(_[2]),t[g+3]=Math.round(j*255)}}});for(let r=0;r<v.h;r+=12)s.push(()=>{for(let f=r;f<Math.min(v.h,r+12);f++){const R=v.y0+(f+.5)/v.h*(v.y1-v.y0);for(let d=0;d<v.w;d++){const w=v.u0+(d+.5)/v.w*(v.u1-v.u0),p=o(w,R,i),g=(f*v.w+d)*4;p[3]<=0||(a[g]=H(p[0]),a[g+1]=H(p[1]),a[g+2]=H(p[2]),a[g+3]=Math.round(p[3]*255))}}});const l=window.requestIdleCallback?r=>requestIdleCallback(r,{timeout:300}):r=>setTimeout(()=>r({timeRemaining:()=>8}),16),E=r=>{const f=performance.now();for(;s.length&&performance.now()-f<6;)s.shift()();s.length?l(E):e({mon:t,cape:a,M:y,Cp:v,lampY:V+.083*1.4,lampU:F})};l(E)}window.SCENE={bake:B}})(),function(){const k=document.getElementById("gl"),M={scr:0,ly:0,heart:1,cool:0,fill:0,burst:0,cam:0,par:0,tint:0,streak:0,beat:0,hy:0,hs:1,mx:0,my:0,mo:0,zm:0,lk:0,lp:0,pary:0,rx:0,ry:0,rp:1,fw:0,sy:0,lv:3},m=Object.assign({},M),L=matchMedia("(prefers-reduced-motion: reduce)").matches,u={ok:!1,rm:L,set(v){Object.assign(m,v)},jump(v){Object.assign(m,v),Object.assign(M,v)},state:M,target:m};window.GL=u;const I=(navigator.hardwareConcurrency||4)<=4||(navigator.deviceMemory||4)<=3,A=[{s:.42,q:.5},{s:.55,q:.65},{s:.7,q:.8},{s:.85,q:1},{s:1,q:1}],Z=/lv=([0-4])/.exec(location.hash);let x=Z?+Z[1]:I?2:3,U=A[x].s,D=A[x].q,z=!1,q=0,P=0,T=1,C=1;M.lv=m.lv=x,document.documentElement.classList.toggle("lq",x<2);function F(){T=Math.max(1,Math.round(q*U)),C=Math.max(1,Math.round(P*U)),o&&o.viewport(0,0,T,C),k.style.transform=T<q||C<P?`scale(${(q/T).toFixed(5)},${(P/C).toFixed(5)})`:"",z=!1}function V(){const v=Math.min(window.devicePixelRatio||1,2);let B=innerWidth*v,e=innerHeight*v;const t=Math.min(1,1400/Math.max(B,e));q=Math.round(B*t),P=Math.round(e*t),(k.width!==q||k.height!==P)&&(k.width=q,k.height=P),F()}let o;const H=!!window.WebGLRenderingContext&&!/nogl/.test(location.hash);u.ok=H,H?document.documentElement.classList.add("gl"):document.documentElement.classList.add("no-gl"),H&&requestAnimationFrame(()=>setTimeout(y,0));function y(){V();try{o=k.getContext("webgl",{antialias:!1,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:!1})}catch{}if(!o){u.ok=!1,document.documentElement.classList.remove("gl"),document.documentElement.classList.add("no-gl"),requestAnimationFrame(()=>document.documentElement.classList.add("gl-ready"));return}const v="attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}",B=`
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
uniform vec2 R; uniform sampler2D TM,TC; uniform float t,q,scr,ly,heart,cool,fill,burst,cam,par,tint,streak,beat,hy,hs,mx,my,mo,zm,lk,lp,pary,rx,ry,rp,fw,sy,lv;
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
float capeX0(){return -.13-cam*.15;}
const float CWL=HZ-.03; // линия воды у мыса
// всё, что зависит только от времени и камеры, считается один раз на пиксель (sceneInit), а не в каждом вызове
float gV,gLn,gFl,gX0,gB; vec2 gL,gD;
void sceneInit(){ gV=vis()*scr; gX0=capeX0(); if(gV<.01) return; gL=vec2(gX0-.125,ly);
  float a=t*.42, s=sin(a); gD=normalize(vec2(s,-.085)); gLn=abs(s); gFl=pow(max(cos(a),0.),10.); }
// луч маяка: вращается, при развороте к зрителю — вспышка
float beamI(vec2 uv){
  if(gV<.01) return 0.;
  vec2 v=uv-gL; float al=dot(v,gD); if(al<0.) return 0.;
  float pe=abs(v.x*gD.y-v.y*gD.x);
  return gV*exp(-al*1.3/(gLn+.04))*smoothstep(.075*al+.003,0.,pe)*smoothstep(0.,.025,al)*(.3+.7*gLn);
}
// мыс с маяком и памятник заранее нарисованы в текстуры (выпечка в начале файла): здесь только выборка
vec4 dec(vec4 s){ s.rgb=pow(s.rgb,vec3(2.2))*1.6; return s; }
vec4 capeT(vec2 uv){ vec2 c=vec2((gX0-uv.x+.04)/.6,(uv.y-(CWL-.01))/.27); if(c.x<0.||c.x>1.||c.y<0.||c.y>1.) return vec4(0.); return dec(texture2D(TC,c)); }
// Памятник затопленным кораблям: в метрах, 0 — вода
const vec2 MB0=vec2(.34,HZ-.2); const float MS=.028; // экранных единиц на метр
vec2 monB(){return vec2(MB0.x-cam*.3,MB0.y);}
vec4 monT(vec2 p){ vec2 c=vec2((p.x+6.)/12.,(p.y+.8)/18.4); if(c.x<0.||c.x>1.||c.y<0.||c.y>1.) return vec4(0.); return dec(texture2D(TM,c)); }
vec3 world(vec2 uv,float asp){
  float w=uv.x+cam*0.25, V=gV;
  // небо: тёмно-синее вверху, тёплое у горизонта
  vec3 col=mix(vec3(.20,.085,.075),vec3(.035,.035,.085),smoothstep(HZ,HZ+.38,uv.y));
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
    vec3 sea=mix(vec3(.05,.03,.05),vec3(.008,.01,.022),smoothstep(0.,.5,dy));
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
      if(abs(uv.x-gL.x)<.09) sea+=vec3(1.,.78,.5)*exp(-abs(uv.x-gL.x+(rip-.5)*.02)*70.)*exp(-max(CWL-uv.y,0.)*5.)*(.12+.5*gFl)*(.4+rip)*V;
      if(dy<.25) sea+=vec3(1.,.8,.55)*beamI(vec2(uv.x,2.*CWL-uv.y))*.22*rip;
      if(uv.y<CWL && uv.y>CWL-.28) sea=mix(sea,vec3(.01,.008,.018),.75*V*capeT(vec2(uv.x+(rip-.5)*.012,2.*CWL-uv.y)).a);
    }
    if(fw>.01) sea+=fireworks(vec2(uv.x+(rip-.5)*.02,2.*HZ-uv.y),asp)*fw*exp(-dy*3.)*.35;
    col=sea;
  }
  if(V>.01){
    // мыс со скалами и маяком (текстура) + прибой у подножия
    vec4 cp=capeT(uv);
    if(cp.a>0.){ vec3 rc=cp.rgb; float u=gX0-uv.x;
      rc+=vec3(.8,.85,1.)*smoothstep(.006,0.,uv.y-CWL)*smoothstep(.09,0.,u)*(.5+.5*sin(t*2.+u*90.))*.25;
      col=mix(col,rc,cp.a*V); }
    float ld=length(uv-gL);
    if(ld<.35) col+=vec3(1.,.82,.55)*(exp(-ld*70.)*(.35+.9*gFl)+exp(-ld*14.)*.06*(1.+2.*gFl))*V;
    col+=vec3(1.,.85,.65)*gB*.2;
    // памятник: силуэт, луч маяка по нему и отражение в воде
    vec2 p=(uv-monB())/MS;
    if(abs(p.x)<6. && p.y<17.6 && p.y>-11.){
      if(p.y>-.8){ vec4 m=monT(p); if(m.a>0.) col=mix(col,m.rgb+vec3(1.,.82,.6)*gB*.7,m.a*V); }
      if(p.y<0.){ float rp=n1(p.y*2.5+t*1.4)*n1(p.x*1.5-t);
        vec4 m=monT(vec2(p.x+(rp-.5)*(.4-p.y*.06),-p.y));
        col=mix(col,vec3(.012,.01,.02)+vec3(.5,.55,.75)*rp*rp*.05,.7*m.a*V*smoothstep(-11.,-3.,p.y));
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
  vec2 uv0=uv; uv=uv/(1.+zm*.06)+vec2(0.,pary*.012-sy*.09);
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
  col+=snowFx(uv)*(1.+6.*gB); // снежинки вспыхивают в луче маяка
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
}`,e=document.documentElement;let t=/Apple/.test(navigator.vendor||"")?null:o.getExtension("KHR_parallel_shader_compile");function a(c,b){const h=o.createShader(c);return o.shaderSource(h,b),o.compileShader(h),h}let n,i,s,l=!1;u.ok=!0,e.classList.add("gl");function E(){i&&!o.getShaderParameter(i,o.COMPILE_STATUS)&&console.warn(o.getShaderInfoLog(i)),u.ok=!1,e.classList.remove("gl"),e.classList.add("no-gl"),requestAnimationFrame(()=>e.classList.add("gl-ready"))}const r={};function f(){if(l)return;if(!o.getProgramParameter(s,o.LINK_STATUS))return E();o.useProgram(s);const c=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,c),o.bufferData(o.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),o.STATIC_DRAW);const b=o.getAttribLocation(s,"p");o.enableVertexAttribArray(b),o.vertexAttribPointer(b,2,o.FLOAT,!1,0,0),["R","t","q",...Object.keys(M)].forEach(h=>r[h]=o.getUniformLocation(s,h)),o.uniform1i(o.getUniformLocation(s,"TM"),0),o.uniform1i(o.getUniformLocation(s,"TC"),1),u.scene?R():window.SCENE&&!u.baking&&(u.baking=!0,SCENE.bake(h=>{u.scene=h,!l&&o&&R()})),F(),re=!0,S||(S=!0,_=performance.now(),requestAnimationFrame(K))}function R(){const c=u.scene;[[c.mon,c.M],[c.cape,c.Cp]].forEach(([b,h],G)=>{const N=o.createTexture();o.activeTexture(o.TEXTURE0+G),o.bindTexture(o.TEXTURE_2D,N),o.texImage2D(o.TEXTURE_2D,0,o.RGBA,h.w,h.h,0,o.RGBA,o.UNSIGNED_BYTE,b),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAG_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}),u.jump({ly:c.lampY}),u.set({scr:1})}function d(){if(n=a(o.VERTEX_SHADER,v),i=a(o.FRAGMENT_SHADER,B),s=o.createProgram(),o.attachShader(s,n),o.attachShader(s,i),o.linkProgram(s),t){const c=()=>{if(l)return;const b=o.getProgramParameter(s,t.COMPLETION_STATUS_KHR);typeof b!="boolean"?(t=null,f()):b?f():requestAnimationFrame(c)};requestAnimationFrame(c)}else requestAnimationFrame(()=>setTimeout(f,0))}d(),k.addEventListener("webglcontextlost",c=>{c.preventDefault(),l=!0,S=!1,u.ok=!1,e.classList.remove("gl"),e.classList.add("no-gl")},!1),k.addEventListener("webglcontextrestored",()=>{l=!1,u.ok=!0,e.classList.remove("no-gl"),e.classList.add("gl"),F(),d()},!1);function w(c,b){c=Math.max(0,Math.min(4,c)),c!==x&&(x=c,m.lv=c,document.documentElement.classList.toggle("lq",c<2),U=A[c].s,D=A[c].q,z=!0,b&&F())}u.pulse=()=>{z&&F()};let p=60;const g=[];u.quality=()=>({level:x,fps:Math.round(p),scale:+U.toFixed(2),q:D,w:T,h:C,pending:z}),Object.defineProperty(u,"level",{get:()=>x}),addEventListener("resize",V),addEventListener("pointermove",c=>{m.par=(c.clientX/innerWidth-.5)*2},{passive:!0}),addEventListener("pointermove",c=>{m.pary=(c.clientY/innerHeight-.5)*2},{passive:!0}),addEventListener("deviceorientation",c=>{c.gamma!=null&&(m.par=Math.max(-1,Math.min(1,c.gamma/30))),c.beta!=null&&(m.pary=Math.max(-1,Math.min(1,(c.beta-45)/35)))},{passive:!0});let j=0,_=0,Y=0;const se={streak:9,burst:2.2,zm:3.2,lk:6,fw:1.6,lv:1.2};function K(c){if(l){S=!1;return}j||(j=_=c);const b=Math.min(.05,(c-_)/1e3);_=c,Y+=b*(L?.25:1);for(const h in m)M[h]+=(m[h]-M[h])*Math.min(1,b*(se[h]||2.6));o.uniform2f(r.R,T,C),o.uniform1f(r.t,Y),u.t=Y,o.uniform1f(r.q,D);for(const h in M)o.uniform1f(r[h],M[h]);o.drawArrays(o.TRIANGLES,0,3),u.ready||(u.ready=!0,requestAnimationFrame(()=>document.documentElement.classList.add("gl-ready"))),ne(c),document.hidden?S=!1:requestAnimationFrame(K)}let W=0,$=0,X=0,te=0,ae=-1e9,J=1e4,oe=0,ce=0;function ne(c){const b=c-ce;if(ce=c,Z||($||($=c+700),c<$)||c<oe||b<=0||b>4e3)return;if(g.push(b),g.length>90&&g.shift(),!W){W=c+1e3,g.length=0;return}if(c<W||g.length<4)return;const h=c-j<3200;W=c+(h?1e3:2e3);const G=g.slice().sort((Q,ee)=>Q-ee),N=G[G.length>>1];p=1e3/(g.reduce((Q,ee)=>Q+ee,0)/g.length);const O=Math.min(p,1e3/N);O<(h?50:46)?(w(h?x-1:O<15?0:x-(O<30?2:1),O<35),c-ae<15e3&&(J=Math.min(J*2,8e4)),te=c,X=0,g.length=0):1e3/N>=56&&p>=50&&c-te>J?++X>=3&&(w(x+1,!1),ae=c,X=0,g.length=0):X=0}let S=!1,re=!1;document.addEventListener("visibilitychange",()=>{re&&!document.hidden&&!S&&(S=!0,_=performance.now(),oe=_+600,g.length=0,requestAnimationFrame(K))}),u.uv=(c,b)=>{const h=Math.min(innerWidth,innerHeight);return[(c-innerWidth/2)/h,(innerHeight/2-b)/h]}}}();
