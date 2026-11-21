/* Мир сайта: зимний Крым ночью (горы в тумане, море, луна, огни, снег)
   и тонкий светящийся контур сердца, который «зажигают» удержанием.
   Один шейдер, без библиотек. */
(function () {
  const cv = document.getElementById('gl');
  const S = { heart: 1, fill: 0, burst: 0, glow: 0, cam: 0, par: 0, tint: 0, streak: 0, beat: 0, hx: 0, hy: 0, hs: 0.2 };
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
uniform vec2 R; uniform float t,q,heart,fill,burst,glow,cam,par,tint,streak,beat,hx,hy,hs;
#define PI 3.14159265
float h11(float n){return fract(sin(n*127.1)*43758.5453);}
float h21(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}
float n1(float x){float i=floor(x),f=fract(x);f=f*f*(3.-2.*f);return mix(h11(i),h11(i+1.),f);}
float ridge(float x,float s){float a=0.,m=.55,f=1.;for(int i=0;i<5;i++){float v=n1(x*f+s*17.3);a+=m*(i<2?1.-abs(2.*v-1.):v);f*=2.07;m*=.48;}return a;}
float dot2(vec2 v){return dot(v,v);}
mat2 rot(float a){float c=cos(a),s=sin(a);return mat2(c,-s,s,c);}
float smin(float a,float b,float k){float h=clamp(.5+.5*(b-a)/k,0.,1.);return mix(b,a,h)-k*h*(1.-h);}

// ---------- мир ----------
float HZ=-0.20;
float lightsRow(float x){ // огни набережной
  float c=floor(x*90.); float f=fract(x*90.)-.5;
  return step(.45,h11(c*3.1))*smoothstep(.22,0.,abs(f));
}
vec3 world(vec2 uv,float asp){
  float w=uv.x+cam*0.25;
  // небо
  vec3 col=mix(vec3(.10,.035,.045),vec3(.012,.012,.03),smoothstep(HZ,.75,uv.y));
  col+=vec3(.55,.18,.10)*exp(-max(uv.y-HZ,0.)*7.)*(.28+.22*tint+.3*glow);
  col+=vec3(.25,.06,.12)*exp(-length(uv-vec2(.6*asp,.55))*2.5)*.25;
  // звёзды
  vec2 sgp=(uv+vec2(cam*.05,0.))*110.; vec2 sg=floor(sgp); float sh=h21(sg);
  float sd=length(fract(sgp)-.5-(vec2(h21(sg+1.),h21(sg+2.))-.5)*.5);
  col+=vec3(1.,.9,.85)*step(.993,sh)*smoothstep(.16,.02,sd)*smoothstep(HZ+.15,.5,uv.y)*(.45+.4*sin(t*1.6+sh*40.));
  // луна в дымке
  vec2 mp=vec2((asp<1.?-.27:-.3*asp)+cam*.02,(asp<1.?.48+(1.-asp)*.14:.3));
  float md=length(uv-mp);
  col+=vec3(1.,.86,.72)*(smoothstep(.042,.038,md)*.8+exp(-md*9.)*.18);
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
        mc+=vec3(1.,.62,.3)*on*smoothstep(.18,0.,length(f))*(1.+.9*glow)*tw;
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
  if(abs(uv.y-HZ-.006)<.02){ col+=vec3(1.,.7,.4)*lightsRow(w)*smoothstep(.006,0.,abs(uv.y-HZ-.006))*(.8+.8*glow); }
  // море
  if(uv.y<HZ){
    float dy=HZ-uv.y;
    vec3 sea=mix(vec3(.05,.025,.04),vec3(.01,.008,.016),smoothstep(0.,.5,dy));
    float rip=n1(uv.y*160./(dy+.05)*.05+t*.8)*n1(w*30.+uv.y*90.);
    float refl=lightsRow(w+ (rip-.5)*.05)*exp(-dy*9.)*(.3+1.*rip*rip);
    sea+=vec3(1.,.6,.35)*refl*(.22+.25*glow);
    sea+=vec3(.6,.25,.15)*exp(-dy*12.)*.25;
    // лунная дорожка
    sea+=vec3(1.,.85,.7)*exp(-abs(uv.x-mp.x)*18.)*exp(-dy*3.)*rip*.35;
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
  return c;
}

// ---------- сердце (тонкий контур) ----------
float sdHeart(vec2 p){
  p.x=abs(p.x);
  if(p.y+p.x>1.0) return sqrt(dot2(p-vec2(0.25,0.75)))-0.35355;
  return sqrt(min(dot2(p-vec2(0.0,1.0)),dot2(p-0.5*max(p.x+p.y,0.0))))*sign(p.x-p.y);
}
float pulse(){float b=fract(t*(.75+fill*.5));return (exp(-b*9.)*.6+exp(-max(b-.18,0.)*9.)*.4*step(.18,b));}
// точка на контуре сердца: u∈[0,1] — от нижнего кончика до ямки сверху, sd — сторона (±1)
const float HL=1.8178; // длина половины контура: отрезок .7071 + дуга .3536*PI
vec2 hpt(float u,float sd){
  float s=u*HL; vec2 p;
  if(s<.7071) p=vec2(.5,.5)*(s/.7071);
  else { float a=-PI*.25+(s-.7071)/.35355; p=vec2(.25,.75)+.35355*vec2(cos(a),sin(a)); }
  return vec2(p.x*sd,p.y-.52);
}
float hparam(vec2 k){ // обратное: параметр ближайшей точки контура
  vec2 p=vec2(abs(k.x),k.y+.52);
  if(p.x+p.y>1.) return (.7071+(atan(p.y-.75,p.x-.25)+PI*.25)*.35355)/HL;
  return clamp((p.x+p.y)*.7071,0.,.7071)/HL;
}
vec2 hcurve(float a){return hpt(fract(a*2.),a<.5?1.:-1.);}
// сердце в экранных координатах: d — расстояние до контура (в долях экрана), k — локальные коорд.
float heartD(vec2 uv,out vec2 k){
  float sc=hs*(1.+.025*pulse()*fill+.03*beat);
  k=(uv-vec2(hx,hy))/sc;
  return sdHeart(k*1.0+vec2(0.,.52))*sc;
}
vec3 heartCol(vec2 uv){
  vec3 c=vec3(0.);
  vec2 k; float d=heartD(uv,k);
  float px=1.5/min(R.x,R.y);
  // уровень «зажжённости»: снизу вверх
  float u=hparam(k);
  float lit=fill>.995?1.:smoothstep(fill+.005,fill-.05,u)*step(.001,fill);
  // растворение в пыль: мягкий шум вдоль контура
  float ua=hparam(k)*(k.x<0.?-1.:1.);
  float dn=n1(ua*9.+3.)*.6+n1(ua*31.)*.4;
  float keep=1.-smoothstep(dn-.15,dn+.05,burst*1.25);
  float w=.0016+.0012*lit;
  float line=smoothstep(w+px,w,abs(d));
  vec3 warm=mix(vec3(1.,.42,.38),vec3(1.,.78,.58),lit*.7+.15*pulse()*lit);
  vec3 cold=vec3(.85,.78,.82);
  vec3 lc=mix(cold*.45,warm*1.6,lit);
  c+=lc*line*keep;
  // мягкое свечение вокруг линии
  float gl1=exp(-abs(d)*(260.-120.*lit))*(.05+.35*lit)*(1.+.6*pulse()*lit+.5*beat);
  c+=warm*gl1*keep;
  // тёплая дымка внутри, когда загорелось
  float inside=smoothstep(.0,-.05,d);
  c+=vec3(1.,.4,.35)*inside*.07*fill*fill*(1.-burst);
  // искра — бегущая точка, «зажигающая» контур
  if(fill>.01&&fill<.995){
    for(int s=0;s<2;s++){
      vec2 sp=hpt(fill,s==0?1.:-1.)*hs+vec2(hx,hy);
      float dd=length(uv-sp);
      c+=vec3(1.,.85,.7)*(.00012/(dd*dd+.00006))*(.6+.4*sin(t*30.+float(s)));
    }
  }
  return c;
}
vec3 dust(vec2 uv){
  vec3 c=vec3(0.);
  if(burst<.001) return c;
  float np=70.*q;
  for(int i=0;i<70;i++){
    float fi=float(i); if(fi>np) break;
    float a=h11(fi*1.7);
    vec2 o=hcurve(a)*hs+vec2(hx,hy);
    vec2 dir=normalize(hcurve(a)+vec2(0.,.05)+(vec2(h11(fi*3.1),h11(fi*5.3))-.5)*.8);
    float sp=(.08+.35*h11(fi*7.7))*hs*5.;
    float b=burst;
    vec2 pos=o+dir*sp*(1.-pow(1.-b,2.2))+vec2(sin(t*.8+fi)*.01,b*b*.06);
    float dd=length(uv-pos);
    float sz=.0025+.004*h11(fi*9.1);
    float life=smoothstep(0.,.08,b)*(1.-smoothstep(.45+.4*h11(fi*2.2),1.,b));
    c+=mix(vec3(1.,.55,.42),vec3(1.,.9,.8),h11(fi*4.4))*exp(-dd*dd/(sz*sz))*life*.9;
  }
  return c;
}

void main(){
  vec2 uv=(gl_FragCoord.xy-.5*R)/min(R.x,R.y);
  float asp=R.x/R.y;
  HZ=-.2-max(1.-asp,0.)*.3; // на вытянутом экране горизонт ниже — больше неба
  vec3 col=world(uv,asp);
  if(heart>.01){
    vec3 hcol=heartCol(uv);
    // отражение на воде — мягкая дрожащая дорожка света под сердцем
    if(uv.y<HZ){
      float dy=HZ-uv.y;
      float rip=n1(uv.y*260./(dy+.08)*.04+t*1.3)*n1(uv.x*40.+uv.y*120.);
      float colw=exp(-pow((uv.x-hx+(rip-.5)*.02)/(hs*(.35+dy*1.2)),2.));
      float lit=fill*(1.-burst*.7);
      hcol+=vec3(1.,.55,.42)*colw*exp(-dy*4.)*(.03+.2*lit)*(.4+1.2*rip);
    }
    // волна света, расходящаяся от сердца
    float r=length((uv-vec2(hx,hy))*vec2(1.,1.25));
    float wave=exp(-pow((r-burst*1.6)*7.,2.))*smoothstep(1.,.4,burst)*smoothstep(0.,.05,burst);
    hcol+=vec3(1.,.6,.45)*wave*.12;
    hcol+=vec3(1.,.45,.38)*exp(-r/hs*2.2)*fill*.12*(1.-burst*.8);
    col+=(hcol+dust(uv))*heart;
  }
  col+=snowFx(uv);
  // анаморфный блик
  col+=vec3(1.,.55,.45)*exp(-abs(uv.y-HZ)*40.)*streak*.6+vec3(1.,.8,.7)*streak*.08;
  // грейд
  col*=1.-.38*dot2(uv*vec2(.7/max(asp,.6),.85));
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
  addEventListener('deviceorientation', e => { if (e.gamma != null) T.par = Math.max(-1, Math.min(1, e.gamma / 30)); }, { passive: true });

  const t0 = performance.now(); let last = t0, frames = 0, acc = 0, tt = 0;
  const fast = { streak: 9, burst: 0.9, glow: 1.2 };
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
