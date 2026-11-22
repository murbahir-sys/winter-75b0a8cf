(function(){const p=document.getElementById("gl"),f={heart:1,fill:0,burst:0,cam:0,par:0,tint:0,streak:0,beat:0,hy:0,hs:1,mx:0,my:0,mo:0,zm:0,lk:0,lp:0,pary:0,rx:0,ry:0,rp:1,fw:0,sy:0,lv:3},c=Object.assign({},f),G=matchMedia("(prefers-reduced-motion: reduce)").matches,r={ok:!1,rm:G,set(n){Object.assign(c,n)},jump(n){Object.assign(c,n),Object.assign(f,n)},state:f,target:c};window.GL=r;const ae=(navigator.hardwareConcurrency||4)<=4||(navigator.deviceMemory||4)<=3,L=[{s:.42,q:.5},{s:.55,q:.65},{s:.7,q:.8},{s:.85,q:1},{s:1,q:1}],z=/lv=([0-4])/.exec(location.hash);let l=z?+z[1]:ae?2:3,R=L[l].s,P=L[l].q,A=!1,h=0,d=0,u=1,x=1;f.lv=c.lv=l,document.documentElement.classList.toggle("lq",l<2);function b(){u=Math.max(1,Math.round(h*R)),x=Math.max(1,Math.round(d*R)),t&&t.viewport(0,0,u,x),p.style.transform=u<h||x<d?`scale(${(h/u).toFixed(5)},${(d/x).toFixed(5)})`:"",A=!1}function N(){const n=Math.min(window.devicePixelRatio||1,2);let E=innerWidth*n,i=innerHeight*n;const g=Math.min(1,1400/Math.max(E,i));h=Math.round(E*g),d=Math.round(i*g),(p.width!==h||p.height!==d)&&(p.width=h,p.height=d),b()}let t;const S=!!window.WebGLRenderingContext&&!/nogl/.test(location.hash);r.ok=S,S?document.documentElement.classList.add("gl"):document.documentElement.classList.add("no-gl"),S&&requestAnimationFrame(()=>setTimeout(oe,0));function oe(){N();try{t=p.getContext("webgl",{antialias:!1,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:!1})}catch{}if(!t){r.ok=!1,document.documentElement.classList.remove("gl"),document.documentElement.classList.add("no-gl"),requestAnimationFrame(()=>document.documentElement.classList.add("gl-ready"));return}const n="attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}",E=`
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
uniform vec2 R; uniform float t,q,heart,fill,burst,cam,par,tint,streak,beat,hy,hs,mx,my,mo,zm,lk,lp,pary,rx,ry,rp,fw,sy,lv;
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
vec3 world(vec2 uv,float asp){
  float w=uv.x+cam*0.25;
  // небо
  vec3 col=mix(vec3(.10,.035,.045),vec3(.012,.012,.03),smoothstep(HZ,.75,uv.y));
  col+=vec3(.55,.18,.10)*exp(-max(uv.y-HZ,0.)*7.)*(.35+.25*tint);
  col+=vec3(.25,.06,.12)*exp(-length(uv-vec2(.6*asp,.55))*2.5)*.25;
  // звёзды
  vec2 sg=floor((uv+vec2(cam*.05,0.))*140.); float sh=h21(sg);
  col+=vec3(1.,.9,.85)*step(.9965,sh)*smoothstep(HZ+.15,.5,uv.y)*(.5+.5*sin(t*2.+sh*40.));
  // луна в дымке
  vec2 mp=mix(vec2(-.42*asp+cam*.02,.48),vec2(mx,my),mo); // mo: луна встаёт в «небо» эмблемы
  float md=length(uv-mp);
  col+=vec3(1.,.86,.72)*(smoothstep(.042,.038,md)*.8+exp(-md*9.)*.18+exp(-md*3.2)*.045);
  col+=vec3(1.,.7,.55)*smoothstep(.012,0.,abs(md-.075))*.035; // тонкое гало
  // горы: 3 слоя, туман между ними
  float bay=smoothstep(.0,.75,abs(w*.9-.05));
  for(int i=0;i<3;i++){
    float fi=float(i);
    float x=w*(1.0+fi*.7)+cam*(.08+fi*.22)+par*(.01+fi*.02);
    // хребет считаем только в полосе, где гора вообще может быть (выше HZ+.37 и в море — не нужен): картинка та же, кадр дешевле
    float hgt=(uv.y>HZ && uv.y<HZ+.37)?HZ+.01+(0.34-fi*.09)*ridge(x*(1.1+fi*.8),fi+1.)*(.35+.65*bay):HZ;
    if(uv.y<hgt && uv.y>HZ){
      float k=fi/2.;
      vec3 mc=mix(vec3(.13,.07,.10),vec3(.025,.012,.02),k);
      // снег на дальних вершинах
      float snow=smoothstep(.06,.0,hgt-uv.y)*smoothstep(HZ+.16,HZ+.30,hgt)*(1.-k)*(.6+.4*n1(x*40.));
      mc+=vec3(.55,.5,.6)*snow*.35;
      // огни на склонах ближнего слоя
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
  // v16: туман и дымка над водой убраны — без пелены, чёткие слои гор
  // огни набережной
  if(abs(uv.y-HZ-.006)<.02){ col+=vec3(1.,.7,.4)*lightsRow(w)*smoothstep(.006,0.,abs(uv.y-HZ-.006))*1.2; }
  // море
  if(uv.y<HZ){
    float dy=HZ-uv.y;
    vec3 sea=mix(vec3(.05,.025,.04),vec3(.01,.008,.016),smoothstep(0.,.5,dy));
    float rip=n1(uv.y*160./(dy+.05)*.05+t*.8)*n1(w*30.+uv.y*90.);
    float refl=lightsRow(w+ (rip-.5)*.05)*exp(-dy*9.)*(.3+1.*rip*rip);
    sea+=vec3(1.,.6,.35)*refl*.32;
    sea+=vec3(.6,.25,.15)*exp(-dy*12.)*.25;
    // лунная дорожка
    sea+=vec3(1.,.85,.7)*exp(-abs(uv.x-mp.x)*18.)*exp(-dy*3.)*rip*.35;
    float gl1=lv<1.?0.:step(.986,h21(floor(vec2((uv.x-mp.x)*240.,dy*520./(dy*6.+.3)))+floor(t*5.)));
    sea+=vec3(1.,.9,.78)*gl1*exp(-abs(uv.x-mp.x)*(9.+dy*30.))*exp(-dy*4.)*.55; // блёстки на лунной дорожке
    if(fw>.01) sea+=fireworks(vec2(uv.x+(rip-.5)*.02,2.*HZ-uv.y),asp)*fw*exp(-dy*3.)*.35;
    col=sea;
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
  vec3 col=world(uv,asp);
  vec3 ro=vec3(0.,0.,3.2);
  // ---------- снежинка ----------
  if(heart>.01){
    RA=rot(t*.07); RB=rot(sin(t*.45)*.5+burst*2.); RC=rot(.12*sin(t*.33));
    vec2 hu=uv-vec2(0.,hy);
    vec3 rd=normalize(vec3(hu,-2.1));
    // силуэт на экране с учётом поворота: по нему ореол и отсечение лучей мимо фигуры
    float d2s=shp2((hu/hs)*1.52*RA);
    float halo=exp(-max(d2s,0.)*(10.-5.*fill))*(.05+.55*fill+.25*beat)*(1.-burst);
    col+=vec3(1.,.66,.74)*halo*heart*.55;
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
      vec3 refr=mix(world(uv+n.xy*.1,asp)*1.15,vec3(.30,.27,.36),.62);
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
      hc+=vec3(1.,.74,.8)*gl*(1.-fr*.55);
      hc+=env*fr*mix(vec3(1.),irid,.55)*.75;
      hc+=irid*fr*.22;
      hc+=vec3(1.)*sp*1.5;
      // искорки на гранях
      hc+=vec3(1.,.95,.9)*step(.985,h21(floor(lp.xy*34.)+floor(t*2.5)))*smoothstep(.2,.8,facet)*.9;
      hc+=vec3(1.,.7,.5)*edge*2.;
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
  col+=snowFx(uv);
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
}`,i=document.documentElement;let g=/Apple/.test(navigator.vendor||"")?null:t.getExtension("KHR_parallel_shader_compile");function U(e,o){const a=t.createShader(e);return t.shaderSource(a,o),t.compileShader(a),a}let W,k,v,w=!1;r.ok=!0,i.classList.add("gl");function re(){k&&!t.getShaderParameter(k,t.COMPILE_STATUS)&&console.warn(t.getShaderInfoLog(k)),r.ok=!1,i.classList.remove("gl"),i.classList.add("no-gl"),requestAnimationFrame(()=>i.classList.add("gl-ready"))}const H={};function _(){if(w)return;if(!t.getProgramParameter(v,t.LINK_STATUS))return re();t.useProgram(v);const e=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,e),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),t.STATIC_DRAW);const o=t.getAttribLocation(v,"p");t.enableVertexAttribArray(o),t.vertexAttribPointer(o,2,t.FLOAT,!1,0,0),["R","t","q",...Object.keys(f)].forEach(a=>H[a]=t.getUniformLocation(v,a)),b(),Q=!0,m||(m=!0,y=performance.now(),requestAnimationFrame(j))}function D(){if(W=U(t.VERTEX_SHADER,n),k=U(t.FRAGMENT_SHADER,E),v=t.createProgram(),t.attachShader(v,W),t.attachShader(v,k),t.linkProgram(v),g){const e=()=>{if(w)return;const o=t.getProgramParameter(v,g.COMPLETION_STATUS_KHR);typeof o!="boolean"?(g=null,_()):o?_():requestAnimationFrame(e)};requestAnimationFrame(e)}else requestAnimationFrame(()=>setTimeout(_,0))}D(),p.addEventListener("webglcontextlost",e=>{e.preventDefault(),w=!0,m=!1,r.ok=!1,i.classList.remove("gl"),i.classList.add("no-gl")},!1),p.addEventListener("webglcontextrestored",()=>{w=!1,r.ok=!0,i.classList.remove("no-gl"),i.classList.add("gl"),b(),D()},!1);function K(e,o){e=Math.max(0,Math.min(4,e)),e!==l&&(l=e,c.lv=e,document.documentElement.classList.toggle("lq",e<2),R=L[e].s,P=L[e].q,A=!0,o&&b())}r.pulse=()=>{A&&b()};let M=60;const s=[];r.quality=()=>({level:l,fps:Math.round(M),scale:+R.toFixed(2),q:P,w:u,h:x,pending:A}),Object.defineProperty(r,"level",{get:()=>l}),addEventListener("resize",N),addEventListener("pointermove",e=>{c.par=(e.clientX/innerWidth-.5)*2},{passive:!0}),addEventListener("pointermove",e=>{c.pary=(e.clientY/innerHeight-.5)*2},{passive:!0}),addEventListener("deviceorientation",e=>{e.gamma!=null&&(c.par=Math.max(-1,Math.min(1,e.gamma/30))),e.beta!=null&&(c.pary=Math.max(-1,Math.min(1,(e.beta-45)/35)))},{passive:!0});let T=0,y=0,V=0;const ce={streak:9,burst:2.2,zm:3.2,lk:6,fw:1.6,lv:1.2};function j(e){if(w){m=!1;return}T||(T=y=e);const o=Math.min(.05,(e-y)/1e3);y=e,V+=o*(G?.25:1);for(const a in c)f[a]+=(c[a]-f[a])*Math.min(1,o*(ce[a]||2.6));t.uniform2f(H.R,u,x),t.uniform1f(H.t,V),t.uniform1f(H.q,P);for(const a in f)t.uniform1f(H[a],f[a]);t.drawArrays(t.TRIANGLES,0,3),r.ready||(r.ready=!0,requestAnimationFrame(()=>document.documentElement.classList.add("gl-ready"))),le(e),document.hidden?m=!1:requestAnimationFrame(j)}let q=0,C=0,F=0,Y=0,X=-1e9,I=1e4,$=0,J=0;function le(e){const o=e-J;if(J=e,z||(C||(C=e+700),e<C)||e<$||o<=0||o>4e3)return;if(s.push(o),s.length>90&&s.shift(),!q){q=e+1e3,s.length=0;return}if(e<q||s.length<4)return;const a=e-T<3200;q=e+(a?1e3:2e3);const ee=s.slice().sort((O,B)=>O-B),te=ee[ee.length>>1];M=1e3/(s.reduce((O,B)=>O+B,0)/s.length);const Z=Math.min(M,1e3/te);Z<(a?50:46)?(K(a?l-1:Z<15?0:l-(Z<30?2:1),Z<35),e-X<15e3&&(I=Math.min(I*2,8e4)),Y=e,F=0,s.length=0):1e3/te>=56&&M>=50&&e-Y>I?++F>=3&&(K(l+1,!1),X=e,F=0,s.length=0):F=0}let m=!1,Q=!1;document.addEventListener("visibilitychange",()=>{Q&&!document.hidden&&!m&&(m=!0,y=performance.now(),$=y+600,s.length=0,requestAnimationFrame(j))}),r.uv=(e,o)=>{const a=Math.min(innerWidth,innerHeight);return[(e-innerWidth/2)/a,(innerHeight/2-o)/a]}}})();
