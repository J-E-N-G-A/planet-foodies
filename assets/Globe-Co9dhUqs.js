import{g as b,n as G,q as V,o as d,h as v,s as y,F as L}from"./index-BE-X1eO1.js";var A=["x","y","z"],h=function(t){Object.assign(this,{uniforms:{},geometry:{vertices:[{x:0,y:0,z:0}]},mode:0,modifiers:{},attributes:[],multiplier:1,buffers:[]}),Object.assign(this,t),this.prepareProgram(),this.prepareUniforms(),this.prepareAttributes()};h.prototype.compileShader=function(t,e){var i=this.gl.createShader(t);return this.gl.shaderSource(i,e),this.gl.compileShader(i),i},h.prototype.prepareProgram=function(){var t=this.gl,e=this.vertex,i=this.fragment,o=t.createProgram();t.attachShader(o,this.compileShader(35633,e)),t.attachShader(o,this.compileShader(35632,i)),t.linkProgram(o),t.useProgram(o),this.program=o},h.prototype.prepareUniforms=function(){for(var t=Object.keys(this.uniforms),e=0;e<t.length;e+=1){var i=this.gl.getUniformLocation(this.program,t[e]);this.uniforms[t[e]].location=i}},h.prototype.prepareAttributes=function(){this.geometry.vertices!==void 0&&this.attributes.push({name:"aPosition",size:3}),this.geometry.normal!==void 0&&this.attributes.push({name:"aNormal",size:3}),this.attributeKeys=[];for(var t=0;t<this.attributes.length;t+=1)this.attributeKeys.push(this.attributes[t].name),this.prepareAttribute(this.attributes[t])},h.prototype.prepareAttribute=function(t){for(var e=this.geometry,i=this.multiplier,o=e.vertices,n=e.normal,r=new Float32Array(i*o.length*t.size),a=0;a<i;a+=1)for(var s=t.data&&t.data(a,i),f=a*o.length*t.size,l=0;l<o.length;l+=1)for(var c=0;c<t.size;c+=1){var u=this.modifiers[t.name];r[f]=u!==void 0?u(s,l,c,this):t.name==="aPosition"?o[l][A[c]]:t.name==="aNormal"?n[l][A[c]]:s[c],f+=1}this.attributes[this.attributeKeys.indexOf(t.name)].data=r,this.prepareBuffer(this.attributes[this.attributeKeys.indexOf(t.name)])},h.prototype.prepareBuffer=function(t){var e=t.data,i=t.name,o=t.size,n=this.gl.createBuffer();this.gl.bindBuffer(34962,n),this.gl.bufferData(34962,e,35044);var r=this.gl.getAttribLocation(this.program,i);this.gl.enableVertexAttribArray(r),this.gl.vertexAttribPointer(r,o,5126,!1,0,0),this.buffers[this.attributeKeys.indexOf(t.name)]={buffer:n,location:r,size:o}},h.prototype.render=function(t){var e=this,i=this.uniforms,o=this.multiplier,n=this.gl;n.useProgram(this.program);for(var r=0;r<this.buffers.length;r+=1){var a=this.buffers[r],s=a.location,f=a.buffer,l=a.size;n.enableVertexAttribArray(s),n.bindBuffer(34962,f),n.vertexAttribPointer(s,l,5126,!1,0,0)}Object.keys(t).forEach(function(c){i[c].value=t[c].value}),Object.keys(i).forEach(function(c){var u=i[c];e.uniformMap[u.type](u.location,u.value)}),n.drawArrays(this.mode,0,o*this.geometry.vertices.length),this.onRender&&this.onRender(this)},h.prototype.destroy=function(){for(var t=0;t<this.buffers.length;t+=1)this.gl.deleteBuffer(this.buffers[t].buffer);this.gl.deleteProgram(this.program),this.gl=null};var p=function(t){var e=this,i=t||{},o=i.canvas;o===void 0&&(o=document.querySelector("canvas"));var n=i.context;n===void 0&&(n={});var r=i.contextType;r===void 0&&(r="experimental-webgl");var a=i.settings;a===void 0&&(a={});var s=o.getContext(r,Object.assign({alpha:!1,antialias:!1},n));Object.assign(this,{gl:s,canvas:o,uniforms:{},instances:new Map,shouldRender:!0}),Object.assign(this,{devicePixelRatio:1,clearColor:[1,1,1,1],position:{x:0,y:0,z:2},clip:[.001,100]}),Object.assign(this,a),this.uniformMap={float:function(f,l){return s.uniform1f(f,l)},vec2:function(f,l){return s.uniform2fv(f,l)},vec3:function(f,l){return s.uniform3fv(f,l)},vec4:function(f,l){return s.uniform4fv(f,l)},mat2:function(f,l){return s.uniformMatrix2fv(f,!1,l)},mat3:function(f,l){return s.uniformMatrix3fv(f,!1,l)},mat4:function(f,l){return s.uniformMatrix4fv(f,!1,l)}},s.enable(s.DEPTH_TEST),s.depthFunc(s.LEQUAL),s.getContextAttributes().alpha===!1&&(s.clearColor.apply(s,this.clearColor),s.clearDepth(1)),this.onSetup&&this.onSetup(s),window.addEventListener("resize",function(){return e.resize()}),this.resize(),this.render()};p.prototype.resize=function(){var t=this.gl,e=this.canvas,i=this.devicePixelRatio,o=this.position;e.width=e.clientWidth*i,e.height=e.clientHeight*i;var n=t.drawingBufferWidth,r=t.drawingBufferHeight,a=n/r;t.viewport(0,0,n,r);var s=Math.tan(Math.PI/180*22.5),f=[1,0,0,0,0,1,0,0,0,0,1,0,o.x,o.y,(a<1?1:a)*-o.z,1];this.uniforms.uProjectionMatrix={type:"mat4",value:[.5/s,0,0,0,0,a/s*.5,0,0,0,0,-(this.clip[1]+this.clip[0])/(this.clip[1]-this.clip[0]),-1,0,0,-2*this.clip[1]*(this.clip[0]/(this.clip[1]-this.clip[0])),0]},this.uniforms.uViewMatrix={type:"mat4",value:[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]},this.uniforms.uModelMatrix={type:"mat4",value:f}},p.prototype.toggle=function(t){t!==this.shouldRender&&(this.shouldRender=t!==void 0?t:!this.shouldRender,this.shouldRender&&this.render())},p.prototype.render=function(){var t=this;this.gl.clear(16640),this.instances.forEach(function(e){e.render(t.uniforms)}),this.onRender&&this.onRender(this),this.shouldRender&&requestAnimationFrame(function(){return t.render()})},p.prototype.add=function(t,e){e===void 0&&(e={uniforms:{}}),e.uniforms===void 0&&(e.uniforms={}),Object.assign(e.uniforms,JSON.parse(JSON.stringify(this.uniforms))),Object.assign(e,{gl:this.gl,uniformMap:this.uniformMap});var i=new h(e);return this.instances.set(t,i),i},p.prototype.remove=function(t){var e=this.instances.get(t);e!==void 0&&(e.destroy(),this.instances.delete(t))},p.prototype.destroy=function(){var t=this;this.instances.forEach(function(e,i){e.destroy(),t.instances.delete(i)}),this.toggle(!1)};var E="phi",R="theta",B="mapSamples",P="mapBrightness",S="baseColor",k="markerColor",F="glowColor",m="markers",D="diffuse",x="devicePixelRatio",U="dark",O="offset",Q="scale",T="opacity",j="mapBaseBrightness",w={[E]:"A",[R]:"B",[B]:"l",[P]:"E",[S]:"R",[k]:"S",[F]:"y",[D]:"F",[U]:"G",[O]:"x",[Q]:"C",[T]:"H",[j]:"I"},{PI:g,sin:z,cos:C}=Math,M=t=>[].concat(...t.map(e=>{let[i,o]=e.location;i=i*g/180,o=o*g/180-g;let n=C(i);return[-n*C(o),z(i),n*z(o),e.size]}),[0,0,0,0]),N=(t,e)=>{let i=(r,a,s)=>({type:r,value:typeof e[a]>"u"?s:e[a]}),o=t.getContext("webgl")?"webgl":"experimental-webgl",n=new p({canvas:t,contextType:o,context:{alpha:!0,stencil:!1,antialias:!0,depth:!1,preserveDrawingBuffer:!1,...e.context},settings:{[x]:e[x]||1,onSetup:r=>{let a=r.RGB,s=r.UNSIGNED_BYTE,f=r.TEXTURE_2D,l=r.createTexture();r.bindTexture(f,l),r.texImage2D(f,0,a,1,1,0,a,s,new Uint8Array([0,0,0,0]));let c=new Image;c.onload=()=>{r.bindTexture(f,l),r.texImage2D(f,0,a,a,s,c),r.generateMipmap(f);let u=r.getParameter(r.CURRENT_PROGRAM),I=r.getUniformLocation(u,"J");r.texParameteri(f,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(f,r.TEXTURE_MAG_FILTER,r.NEAREST),r.uniform1i(I,0)},c.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAACAAQAAAADMzoqnAAAAAXNSR0IArs4c6QAABA5JREFUeNrV179uHEUAx/Hf3JpbF+E2VASBsmVKTBcpKJs3SMEDcDwBiVJAAewYEBUivIHT0uUBIt0YCovKD0CRjUC4QfHYh8hYXu+P25vZ2Zm9c66gMd/GJ/tz82d3bk8GN4SrByYF2366FNTACIAkivVAAazQdnf3MvAlbNUQfOPAdQDvSAimMWhwy4I2g4SU+Kp04ISLpPBAKLxPyic3O/CCi+Y7rUJbiodcpDOFY7CgxCEXmdYD2EYK2s5lApOx5pEDDYCUwM1XdJUwBV11QQMg59kePSCaPAASQMEL2hwo6TJFgxpg+TgC2ymXPbuvc40awr3D1QCFfbH9kcoqAOkZozpQo0aqAGQRKCog/+tjkgbNFEtg2FffBvBGlSxHoAaAa1u6X4PBAwDiR8FFsrQgeUhfJTSALaB9jy5NCybJPn1SVFiWk7ywN+KzhH1aKAuydhGkbEF4lWohLXDXavlyFgHY7LBnLRdlAP6BS5Cc8RfVDXbkwN/oIvmY+6obbNeBP0JwTuMGu9gTzy1Q4RS/cWpfzszeYwd+CAFrtBW/Hur0gLbJGlD+/OjVwe/drfBxkbbg63dndEDfiEBlAd7ac0BPe1D6Jd8dfbLH+RI0OzseFB5s01/M+gMdAeluLOCAuaUA9Lezo/vSgXoCX9rtEiXnp7Q1W/CNyWcd8DXoS6jH/YZ5vAJEWY2dXFQe2TUgaFaNejCzJ98g6HnlVrsE58sDcYqg+9XY75fPqdoh/kRQWiXKg8MWlJQxUFMPjqnyujhFBE7UxIMjyszk0QwQlFsezImsyvUYYYVED2pk6m0Tg8T04Fwjk2kdAwSACqlM6gRRt3vQYAFGX0Ah7Ebx1H+MDRI5ui0QldH4j7FGcm90XdxD2Jg1AOEAVAKhEFXSn4cKUELurIAKwJ3MArypPscQaLhJFICJ0ohjDySAdH8AhDtCiTuMycH8CXzhH9jUACAO5uMhoAwA5i+T6WAKmmAqnLy80wxHqIPFYpqCwxGaYLt4Dyievg5kEoVEUAhs6pqKgFtDQYOuaXypaWKQfIuwwoGSZgfLsu/XAtI8cGN+h7Cc1A5oLOMhwlIPXuhu48AIvsSBkvtV9wsJRKCyYLfq5lTrQMFd1a262oqBck9K1V0YjQg0iEYYgpS1A9GlXQV5cykwm4A7BzVsxQqo7E+zCegO7Ma7yKgsuOcfKbMBwLC8wvVNYDsANYalEpOAa6zpWjTeMKGwEwC1CiQewJc5EKfgy7GmRAZA4vUVGwE2dPM/g0xuAInE/yG5aZ8ISxWGfYigUVbdyBElTHh2uCwGdfCkOLGgQVBh3Ewp+/QK4CDlR5Ws/Zf7yhCf8pH7vinWAvoVCQ6zz0NX5V/6GkAVV+2/5qsJ/gU8bsxpM8IeAQAAAABJRU5ErkJggg=="}}});return n.add("",{vertex:"attribute vec3 aPosition;uniform mat4 uProjectionMatrix;uniform mat4 uModelMatrix;uniform mat4 uViewMatrix;void main(){gl_Position=uProjectionMatrix*uModelMatrix*uViewMatrix*vec4(aPosition,1.);}",fragment:"precision highp float;uniform vec2 t,x;uniform vec3 R,S,y;uniform vec4 z[64];uniform float A,B,l,C,D,E,F,G,H,I;uniform sampler2D J;float K=1./l;mat3 L(float a,float b){float c=cos(a),d=cos(b),e=sin(a),f=sin(b);return mat3(d,f*e,-f*c,0.,c,e,f,d*-e,d*c);}vec3 w(vec3 c,out float v){c=c.xzy;float p=max(2.,floor(log2(2.236068*l*3.141593*(1.-c.z*c.z))*.72021));vec2 g=floor(pow(1.618034,p)/2.236068*vec2(1.,1.618034)+.5),d=fract((g+1.)*.618034)*6.283185-3.883222,e=-2.*g,f=vec2(atan(c.y,c.x),c.z-1.),q=floor(vec2(e.y*f.x-d.y*(f.y*l+1.),-e.x*f.x+d.x*(f.y*l+1.))/(d.x*e.y-e.x*d.y));float n=3.141593;vec3 r;for(float h=0.;h<4.;h+=1.){vec2 s=vec2(mod(h,2.),floor(h*.5));float j=dot(g,q+s);if(j>l)continue;float a=j,b=0.;if(a>=524288.)a-=524288.,b+=.803894;if(a>=262144.)a-=262144.,b+=.901947;if(a>=131072.)a-=131072.,b+=.950973;if(a>=65536.)a-=65536.,b+=.475487;if(a>=32768.)a-=32768.,b+=.737743;if(a>=16384.)a-=16384.,b+=.868872;if(a>=8192.)a-=8192.,b+=.934436;if(a>=4096.)a-=4096.,b+=.467218;if(a>=2048.)a-=2048.,b+=.733609;if(a>=1024.)a-=1024.,b+=.866804;if(a>=512.)a-=512.,b+=.433402;if(a>=256.)a-=256.,b+=.216701;if(a>=128.)a-=128.,b+=.108351;if(a>=64.)a-=64.,b+=.554175;if(a>=32.)a-=32.,b+=.777088;if(a>=16.)a-=16.,b+=.888544;if(a>=8.)a-=8.,b+=.944272;if(a>=4.)a-=4.,b+=.472136;if(a>=2.)a-=2.,b+=.236068;if(a>=1.)a-=1.,b+=.618034;float k=fract(b)*6.283185,i=1.-2.*j*K,m=sqrt(1.-i*i);vec3 o=vec3(cos(k)*m,sin(k)*m,i);float u=length(c-o);if(u<n)n=u,r=o;}v=n;return r.xzy;}void main(){vec2 b=(gl_FragCoord.xy/t*2.-1.)/C-x*vec2(1.,-1.)/t;b.x*=t.x/t.y;float c=dot(b,b);vec4 M=vec4(0.);float m=0.;if(c<=.64){for(int d=0;d<2;d++){vec4 e=vec4(0.);float a;vec3 u=vec3(0.,0.,1.),f=normalize(vec3(b,sqrt(.64-c)));f.z*=d>0?-1.:1.,u.z*=d>0?-1.:1.;vec3 g=f*L(B,A),h=w(g,a);float n=asin(h.y),i=acos(-h.x/cos(n));i=h.z<0.?-i:i;float N=max(texture2D(J,vec2(i*.5/3.141593,-(n/3.141593+.5))).x,I),O=smoothstep(8e-3,0.,a),j=dot(f,u),v=pow(j,F)*E,o=N*O*v,T=mix((1.-o)*pow(j,.4),o,G)+.1;e+=vec4(R*T,1.);int U=int(D);float p=0.;for(int k=0;k<64;k++){if(k>=U)break;vec4 q=z[k];vec3 r=q.xyz,P=r-g;float s=q.w;if(dot(P,P)>s*s*4.)continue;vec3 V=w(r,a);a=length(V-g),a<s?p+=smoothstep(s*.5,0.,a):0.;}p=min(1.,p*v),e.xyz=mix(e.xyz,S,p),e.xyz+=pow(1.-j,4.)*y,M+=e*(1.+(d>0?-H:H))/2.;}m=pow(dot(normalize(vec3(-b,sqrt(1.-c))),vec3(0.,0.,1.)),4.)*smoothstep(0.,1.,.2/(c-.64));}else{float Q=sqrt(.2/(c-.64));m=smoothstep(.5,1.,Q/(Q+1.));}gl_FragColor=M+vec4(m*y,m);}",uniforms:{t:{type:"vec2",value:[e.width,e.height]},A:i("float",E),B:i("float",R),l:i("float",B),E:i("float",P),I:i("float",j),R:i("vec3",S),S:i("vec3",k),F:i("float",D),y:i("vec3",F),G:i("float",U),z:{type:"vec4",value:M(e[m])},D:{type:"float",value:e[m].length},x:i("vec2",O,[0,0]),C:i("float",Q,1),H:i("float",T,1)},mode:4,geometry:{vertices:[{x:-100,y:100,z:0},{x:-100,y:-100,z:0},{x:100,y:100,z:0},{x:100,y:-100,z:0},{x:-100,y:-100,z:0},{x:100,y:100,z:0}]},onRender:({uniforms:r})=>{let a={};if(e.onRender){a=e.onRender(a)||a;for(let s in w)a[s]!==void 0&&(r[w[s]].value=a[s]);a[m]!==void 0&&(r.z.value=M(a[m]),r.D.value=a[m].length),a.width&&a.height&&(r.t.value=[a.width,a.height])}}}),n};const Y=(t,e)=>{const i=t.__vccOpts||t;for(const[o,n]of e)i[o]=n;return i},K={__name:"Globe",props:{size:Number,center:Boolean},setup(t){const e=t;var i=e.size;const o=b(),n=b(0);var r;return G(()=>{r=N(o.value,{devicePixelRatio:2,width:i*2,height:i*2,phi:0,theta:.5,dark:.8,diffuse:1.2,mapSamples:5e3,mapBrightness:6,baseColor:[.6,.5,.7],markerColor:[.1,.8,1],glowColor:[.6,.5,1],markers:[{location:[41.8781,-87.6298],size:.1}],onRender:a=>{a.phi=n.value,n.value+=.03}})}),V(()=>{r.destroy()}),(a,s)=>(d(),v(L,null,[e.center?(d(),v("canvas",{key:0,id:"globeCentered",ref_key:"el",ref:o},null,512)):y("",!0),e.center?y("",!0):(d(),v("canvas",{key:1,id:"globeRight",ref_key:"el",ref:o},null,512))],64))}},X=Y(K,[["__scopeId","data-v-4c07768b"]]);export{X as G,Y as _};
