/* Мир сайта: зимний Крым ночью (горы в тумане, море, огни, снег),
   стеклянное переливающееся сердце. Один шейдер, без библиотек. */
(function () {
  const cv = document.getElementById('gl');
  const S = { heart: 1, fill: 0, burst: 0, cam: 0, par: 0, tint: 0, streak: 0, beat: 0, hy: 0, hs: 1, mx: 0, my: 0, mo: 0, zm: 0, lk: 0, lp: 0, pary: 0 };
  const T = Object.assign({}, S);
  const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const api = { ok: false, rm: RM, set(o) { Object.assign(T, o); }, jump(o) { Object.assign(T, o); Object.assign(S, o); }, state: S, target: T };
  window.GL = api;
  let gl;
  try { gl = cv.getContext('webgl', { antialias: false, alpha: false, powerPreference: 'high-performance', preserveDrawingBuffer: false }); } catch (e) {}
  if (!gl) { document.documentElement.classList.add('no-gl'); return; }

  const vs = 'attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}';
  const fs = `
precision highp float;
uniform vec2 R; uniform float t,q,heart,fill,burst,cam,par,tint,streak,beat,hy,hs,mx,my,mo,zm,lk,lp,pary;
#define PI 3.14159265
float h11(float n){return fract(sin(n*127.1)*43758.5453);}
float h21(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}
float n1(float x){float i=floor(x),f=fract(x);f=f*f*(3.-2.*f);return mix(h11(i),h11(i+1.),f);}
float ridge(float x,float s){float a=0.,m=.55,f=1.;for(int i=0;i<5;i++){float v=n1(x*f+s*17.3);a+=m*(i<2?1.-abs(2.*v-1.):v);f*=2.07;m*=.48;}return a;}
float dot2(vec2 v){return dot(v,v);}
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
    float hgt=HZ+.01+(0.34-fi*.09)*ridge(x*(1.1+fi*.8),fi+1.)*(.35+.65*bay);
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
    // туман
    float fy=HZ+.05+fi*.035;
    float fog=exp(-abs(uv.y-fy)*(14.+fi*4.))*(.5+.5*n1(x*2.5+t*.06+fi*5.));
    col+=vec3(.42,.22,.22)*fog*(.16-fi*.03);
  }
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
    float gl1=step(.986,h21(floor(vec2((uv.x-mp.x)*240.,dy*520./(dy*6.+.3)))+floor(t*5.)));
    sea+=vec3(1.,.9,.78)*gl1*exp(-abs(uv.x-mp.x)*(9.+dy*30.))*exp(-dy*4.)*.55; // блёстки на лунной дорожке
    col=sea;
  }
  return col;
}
vec3 snowFx(vec2 uv){
  vec3 c=vec3(0.);
  for(int k=0;k<3;k++){
    float fk=float(k); float s=6.+fk*5.;
    vec2 p=uv*s; p.y+=t*(.35+.18*fk); p.x+=sin(t*.25+fk*2.)*.6+cam*(1.+fk);
    vec2 ce=floor(p); vec2 f=fract(p)-.5;
    vec2 o=(vec2(h21(ce),h21(ce+5.))-.5)*.7;
    float d=length(f-o);
    c+=vec3(1.,.93,.9)*smoothstep(.07-fk*.015,0.,d)*step(.55,h21(ce+9.))*(.45-fk*.11);
  }
  // близкие крупные хлопья в расфокусе — глубина
  vec2 p=uv*2.6; p.y+=t*.95; p.x+=sin(t*.2)*.4+cam*3.5+par*.25;
  vec2 ce=floor(p); vec2 f=fract(p)-.5; vec2 o=(vec2(h21(ce+2.),h21(ce+7.))-.5)*.6;
  c+=vec3(1.,.9,.86)*smoothstep(.17,.02,length(f-o))*step(.78,h21(ce+11.))*.07;
  return c;
}

// ---------- сердце ----------
float sdHeart(vec2 p){
  p.x=abs(p.x);
  if(p.y+p.x>1.0) return sqrt(dot2(p-vec2(0.25,0.75)))-0.35355;
  return sqrt(min(dot2(p-vec2(0.0,1.0)),dot2(p-0.5*max(p.x+p.y,0.0))))*sign(p.x-p.y);
}
float pulse(){float b=fract(t*(.85+fill*.6));return (exp(-b*9.)*.6+exp(-max(b-.18,0.)*9.)*.4*step(.18,b))*(.3+fill*.7);}
vec3 hp(vec3 p){p.xz*=rot(sin(t*.45)*.55+burst*2.);p.yz*=rot(.12*sin(t*.33));return p;}
float mapH(vec3 p){
  float sc=hs*(1.+.035*pulse()+.05*beat+burst*.25);
  p/=sc; p=hp(p);
  vec2 qv=p.xy*1.25+vec2(0.,.62);
  float d2=sdHeart(qv)/1.25;
  float th=.30*sqrt(clamp(-d2*3.2,0.,1.))+.035;
  float dz=abs(p.z)-th;
  return (length(max(vec2(d2,dz),0.))+min(max(d2,dz),0.)-.03)*.7*sc;
}
vec3 nH(vec3 p){vec2 e=vec2(.0015,-.0015);return normalize(e.xyy*mapH(p+e.xyy)+e.yyx*mapH(p+e.yyx)+e.yxy*mapH(p+e.yxy)+e.xxx*mapH(p+e.xxx));}

void main(){
  vec2 uv=(gl_FragCoord.xy-.5*R)/min(R.x,R.y);
  float asp=R.x/R.y;
  vec2 uv0=uv; uv=uv/(1.+zm*.06)+vec2(0.,pary*.012);
  vec3 col=world(uv,asp);
  vec3 ro=vec3(0.,0.,3.2);
  // ---------- сердце ----------
  if(heart>.01){
    vec2 hu=uv-vec2(0.,hy);
    vec3 rd=normalize(vec3(hu,-2.1));
    float d2s=sdHeart((hu/hs)*1.52*1.25+vec2(0.,.62))/1.25;
    float halo=exp(-max(d2s,0.)*(6.-3.*fill))*(.10+.5*fill+.25*beat)*(1.-burst);
    col+=vec3(1.,.30,.28)*halo*heart*.5;
    float tt=0.,hit=0.; vec3 p;
    float b=dot(ro,rd),c=dot(ro,ro)-1.5*hs*hs,h=b*b-c;
    if(h>0.){
      tt=max(-b-sqrt(h),0.);
      for(int i=0;i<64;i++){
        if(float(i)>64.*q) break;
        p=ro+rd*tt; float d=mapH(p);
        if(d<.0015){hit=1.;break;}
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
      float fr=pow(1.-max(dot(n,v),0.),2.2);
      vec3 refr=world(uv+n.xy*.16*(1.-fr),asp)*vec3(1.,.9,.95)*1.15;
      vec3 r=reflect(rd,n);
      vec3 env=world(vec2(r.x*.7,r.y*.5-.05),asp)*1.4;
      env+=vec3(1.,.95,.9)*smoothstep(.55,.9,r.y)*smoothstep(.6,.1,abs(r.x))*1.3;
      env+=vec3(1.,.55,.4)*smoothstep(.6,.95,r.x)*.6;
      vec3 irid=.5+.5*cos(2.*PI*(vec3(0.,.33,.67)+fr*1.3+dot(n,vec3(.3,.6,.2))*.7+t*.04));
      float py=p.y/hs, lvl=mix(-1.05,.95,fill);
      float lit=smoothstep(lvl+.07,lvl-.07,py);
      vec3 glow=mix(vec3(1.,.18,.25),vec3(1.,.6,.42),clamp(-py*.6+.5,0.,1.));
      vec3 l=normalize(vec3(.5,.8,.6));
      float sp=pow(max(dot(reflect(-l,n),v),0.),90.);
      vec3 hc=refr*(1.-lit*.75)*(1.-fr*.5);
      hc+=glow*lit*(.55+.6*(1.-fr))*(1.+.4*pulse());
      hc+=env*fr*mix(vec3(1.),irid,.8)*.9;
      hc+=irid*fr*.18;
      hc+=vec3(1.)*sp*1.6;
      hc+=vec3(1.,.8,.6)*smoothstep(.03,0.,abs(py-lvl))*step(.01,fill)*step(fill,.99)*.7;
      hc+=vec3(1.,.7,.5)*edge*2.;
      col=mix(col,hc,heart*keep);
    }
    // частицы: пыль вокруг и взрыв
    float np=24.+40.*burst;
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
}`;
  function sh(type, src) { const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) { console.warn(gl.getShaderInfoLog(s)); return null; } return s; }
  const v = sh(gl.VERTEX_SHADER, vs), f = sh(gl.FRAGMENT_SHADER, fs);
  if (!v || !f) { document.documentElement.classList.add('no-gl'); return; }
  const pr = gl.createProgram(); gl.attachShader(pr, v); gl.attachShader(pr, f); gl.linkProgram(pr);
  if (!gl.getProgramParameter(pr, gl.LINK_STATUS)) { document.documentElement.classList.add('no-gl'); return; }
  gl.useProgram(pr);
  const buf = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(pr, 'p'); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
  const U = {}; ['R', 't', 'q', ...Object.keys(S)].forEach(k => U[k] = gl.getUniformLocation(pr, k));
  api.ok = true; document.documentElement.classList.add('gl');

  // качество: слабым устройствам — меньше пикселей и шагов
  const weak = (navigator.hardwareConcurrency || 4) <= 4 || (navigator.deviceMemory || 4) <= 3;
  let scale = weak ? 0.6 : 0.85, q = weak ? 0.7 : 1;
  function size() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2) * scale;
    let w = innerWidth * dpr, h = innerHeight * dpr; const k = Math.min(1, 1400 / Math.max(w, h));
    cv.width = Math.round(w * k); cv.height = Math.round(h * k); gl.viewport(0, 0, cv.width, cv.height);
  }
  addEventListener('resize', size); size();
  // параллакс от пальца/мыши и наклона
  addEventListener('pointermove', e => { T.par = (e.clientX / innerWidth - .5) * 2; }, { passive: true });
  addEventListener('pointermove', e => { T.pary = (e.clientY / innerHeight - .5) * 2; }, { passive: true });
  addEventListener('deviceorientation', e => { if (e.gamma != null) T.par = Math.max(-1, Math.min(1, e.gamma / 30)); if (e.beta != null) T.pary = Math.max(-1, Math.min(1, (e.beta - 45) / 35)); }, { passive: true });

  const t0 = performance.now(); let last = t0, frames = 0, acc = 0, tt = 0;
  const fast = { streak: 9, burst: 2.2, zm: 3.2, lk: 6 };
  function loop(now) {
    const dt = Math.min(0.05, (now - last) / 1000); last = now; tt += dt * (RM ? 0.25 : 1);
    for (const k in T) S[k] += (T[k] - S[k]) * Math.min(1, dt * (fast[k] || 2.6));
    gl.uniform2f(U.R, cv.width, cv.height); gl.uniform1f(U.t, tt); gl.uniform1f(U.q, q);
    for (const k in S) gl.uniform1f(U[k], S[k]);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    frames++; acc += dt;
    if (acc > 1.5) { const fps = frames / acc;
      if (fps < 42 && scale > 0.4) { scale = Math.max(0.4, scale - 0.12); if (scale < 0.55) q = Math.max(0.5, q - 0.1); size(); }
      frames = 0; acc = 0; }
    if (!document.hidden) requestAnimationFrame(loop); else setTimeout(() => requestAnimationFrame(loop), 500);
  }
  requestAnimationFrame(loop);
})();
