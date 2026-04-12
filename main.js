// Loader hide
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) {
      loader.style.opacity = '0';
      loader.style.pointerEvents = 'none';
      setTimeout(() => loader.style.display = 'none', 600);
    }
  }, 2000);
});

// Header scroll class
document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (header) {
      header.classList.toggle('scrolled', window.scrollY > 60);
    }
  });
});

// Mobile menu functions
function openMobile() {
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenu) {
    mobileMenu.classList.add('open');
    document.body.classList.add('menu-open');
  }
}

function closeMobile() {
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenu) {
    mobileMenu.classList.remove('open');
    document.body.classList.remove('menu-open');
  }
}

// Scroll fade-up animation
document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
});

// Home page tab switcher
function switchTab(btn, tab) {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  grid.classList.add('fade-out');

  setTimeout(() => {
    let products = [];

    switch(tab) {
      case 'men':
        products = [
          { img: 'assets/images/products/richshoe2.png', fallback: 'assets/images/products/richshoe1.png', name: 'Classic Oxford Formal', brand: 'Buckaroo · Woodland', badge: 'Popular' },
          { img: 'assets/images/products/whitesneakers.png', fallback: 'assets/images/products/richshoe4.png', name: 'Athletic Sports Shoe', brand: 'Skechers · Campus', badge: 'Trending' },
          { img: 'assets/images/products/richshoe1.png', fallback: 'assets/images/products/premiumshoes2.png', name: 'Outdoor Boots', brand: 'Woodland · Red Chief', badge: 'Rugged' },
          { img: 'assets/images/products/premiumshoes2.png', fallback: 'assets/images/products/whitesneakers.png', name: 'Comfort Slippers', brand: 'Crocs · Bata', badge: 'Casual' }
        ];
        break;
      case 'women':
        products = [
          { img: 'assets/images/products/richshoe4.png', fallback: 'assets/images/products/richshoe2.png', name: 'Elegant Block Heels', brand: 'UCB · Red Tape', badge: 'New' },
          { img: 'assets/images/products/premiumshoes2.png', fallback: 'assets/images/products/whitesneakers.png', name: 'Comfort Sandals', brand: 'Bata · Crocs', badge: 'Popular' },
          { img: 'assets/images/products/whitesneakers.png', fallback: 'assets/images/products/hightopshoe.png', name: 'Ladies Sneakers', brand: 'Campus · Skechers', badge: 'Trending' },
          { img: 'assets/images/products/richshoe2.png', fallback: 'assets/images/products/richshoe1.png', name: 'Party Heels', brand: 'Red Tape · Lee Cooper', badge: 'Elegant' }
        ];
        break;
      case 'kids':
        products = [
          { img: 'assets/images/products/whitesneakers.png', fallback: 'assets/images/products/hightopshoe.png', name: 'School Shoes', brand: 'Bata · Campus', badge: 'Durable' },
          { img: 'assets/images/products/premiumshoes2.png', fallback: 'assets/images/products/richshoe4.png', name: 'Kids Sandals', brand: 'Crocs · Bata', badge: 'Comfy' },
          { img: 'assets/images/products/hightopshoe.png', fallback: 'assets/images/products/whitesneakers.png', name: 'Sports Shoes', brand: 'Campus · Skechers', badge: 'Active' },
          { img: 'assets/images/products/richshoe1.png', fallback: 'assets/images/products/richshoe2.png', name: 'Casual Flip Flops', brand: 'Crocs · Red Chief', badge: 'Summer' }
        ];
        break;
      case 'sports':
        products = [
          { img: 'assets/images/products/whitesneakers.png', fallback: 'assets/images/products/richshoe1.png', name: 'Performance Running', brand: 'Skechers · Campus', badge: 'Pro' },
          { img: 'assets/images/products/richshoe1.png', fallback: 'assets/images/products/premiumshoes2.png', name: 'Hiking Boots', brand: 'Woodland · Red Chief', badge: 'Adventure' },
          { img: 'assets/images/products/hightopshoe.png', fallback: 'assets/images/products/whitesneakers.png', name: 'Training Shoes', brand: 'Skechers · One8', badge: 'Fitness' },
          { img: 'assets/images/products/richshoe2.png', fallback: 'assets/images/products/hightopshoe.png', name: 'Street Sport', brand: 'One8 · Lee Cooper', badge: 'Urban' }
        ];
        break;
    }

    grid.innerHTML = products.map(p => `
      <div class="product-card fade-up visible">
        <img src="${p.img}" alt="${p.name}" onerror="this.src='${p.fallback}'; this.onerror=null;">
        <h4>${p.name}</h4>
        <p class="brand-line">${p.brand}</p>
        <span class="product-badge">${p.badge}</span>
        <a href="contact.html" class="btn btn-red" style="padding: 10px 20px; font-size: 0.75rem;">Enquire Now</a>
      </div>
    `).join('');

    grid.classList.remove('fade-out');
  }, 300);
}

// Collection page filter
function filterProd(btn, cat) {
  const grid = document.getElementById('collGrid');
  if (!grid) return;

  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const cards = grid.querySelectorAll('.product-big-card');

  cards.forEach(card => {
    const dataCat = card.getAttribute('data-cat');
    if (cat === 'all' || (dataCat && dataCat.includes(cat))) {
      card.classList.remove('hidden');
      card.style.opacity = '0';
      setTimeout(() => card.style.opacity = '1', 50);
    } else {
      card.classList.add('hidden');
    }
  });
}

// Threads Animation (WebGL)
document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('threads-canvas');
  if (!canvas) return;

  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
  if (!gl) return;

  const vertexShaderSrc = `
    attribute vec2 position;
    attribute vec2 uv;
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position, 0.0, 1.0);
    }
  `;

  const fragmentShaderSrc = `
    precision highp float;
    uniform float iTime;
    uniform vec3 iResolution;
    uniform vec3 uColor;
    uniform float uAmplitude;
    uniform float uDistance;
    uniform vec2 uMouse;
    
    #define PI 3.1415926538
    
    const int u_line_count = 40;
    const float u_line_width = 7.0;
    const float u_line_blur = 10.0;
    
    float Perlin2D(vec2 P) {
        vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);
        vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);
        Pi = Pi - floor(Pi * (1.0 / 71.0)) * 71.0;
        Pi = Pi * Pi * (Pi * 0.837187 + 0.313787);
        vec4 hash_x = fract(Pi.xxxx * (1.0 / 951.135664));
        vec4 hash_y = fract(Pi.yyyy * (1.0 / 642.949883));
        vec4 grad_x = hash_x - 0.49999;
        vec4 grad_y = hash_y - 0.49999;
        vec4 grad_results = inversesqrt(grad_x * grad_x + grad_y * grad_y)
            * (grad_x * Pf.xzxz + grad_y * Pf.yyww);
        grad_results *= 1.4142135623730950;
        vec4 blend = Pf.xy * Pf.xy * Pf.xy * (Pf.xy * (Pf.xy * 6.0 - 15.0) + 10.0);
        vec4 blend2 = vec4(blend, vec2(1.0 - blend));
        return dot(grad_results, blend2.zxzx * blend2.wwyy);
    }
    
    float pixel(float count, vec2 resolution) {
        return (1.0 / max(resolution.x, resolution.y)) * count;
    }
    
    float lineFn(vec2 st, float width, float perc, float offset, vec2 mouse, float time, float amplitude, float distance) {
        float split_offset = (perc * 0.4);
        float split_point = 0.1 + split_offset;
        float amplitude_normal = smoothstep(split_point, 0.7, st.x);
        float amplitude_strength = 0.5;
        float finalAmplitude = amplitude_normal * amplitude_strength * amplitude * (1.0 + (mouse.y - 0.5) * 0.2);
        float time_scaled = time / 10.0 + (mouse.x - 0.5) * 1.0;
        float blur = smoothstep(split_point, split_point + 0.05, st.x) * perc;
        float xnoise = mix(
            Perlin2D(vec2(time_scaled, st.x + perc) * 2.5),
            Perlin2D(vec2(time_scaled, st.x + time_scaled) * 3.5) / 1.5,
            st.x * 0.3
        );
        float y = 0.5 + (perc - 0.5) * distance + xnoise / 2.0 * finalAmplitude;
        float line_start = smoothstep(y + (width / 2.0) + (u_line_blur * pixel(1.0, iResolution.xy) * blur), y, st.y);
        float line_end = smoothstep(y, y - (width / 2.0) - (u_line_blur * pixel(1.0, iResolution.xy) * blur), st.y);
        return clamp((line_start - line_end) * (1.0 - smoothstep(0.0, 1.0, pow(perc, 0.3))), 0.0, 1.0);
    }
    
    void main() {
        vec2 uv = gl_FragCoord.xy / iResolution.xy;
        float line_strength = 1.0;
        for (int i = 0; i < u_line_count; i++) {
            float p = float(i) / float(u_line_count);
            line_strength *= (1.0 - lineFn(uv, u_line_width * pixel(1.0, iResolution.xy) * (1.0 - p), p, (PI * 1.0) * p, uMouse, iTime, uAmplitude, uDistance));
        }
        float colorVal = 1.0 - line_strength;
        gl_FragColor = vec4(uColor * colorVal, colorVal * 0.6);
    }
  `;

  function createShader(gl, type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  }

  function createProgram(gl, vs, fs) {
    const program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      gl.deleteProgram(program);
      return null;
    }
    return program;
  }

  const vs = createShader(gl, gl.VERTEX_SHADER, vertexShaderSrc);
  const fs = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSrc);
  const program = createProgram(gl, vs, fs);
  
  const positionLocation = gl.getAttribLocation(program, 'position');
  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

  const uniforms = {
    iTime: gl.getUniformLocation(program, 'iTime'),
    iResolution: gl.getUniformLocation(program, 'iResolution'),
    uColor: gl.getUniformLocation(program, 'uColor'),
    uAmplitude: gl.getUniformLocation(program, 'uAmplitude'),
    uDistance: gl.getUniformLocation(program, 'uDistance'),
    uMouse: gl.getUniformLocation(program, 'uMouse')
  };

  gl.useProgram(program);
  gl.enableVertexAttribArray(positionLocation);
  gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

  let mouseX = 0.5, mouseY = 0.5;
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.addEventListener('mousemove', (e) => {
      const rect = hero.getBoundingClientRect();
      mouseX = (e.clientX - rect.left) / rect.width;
      mouseY = 1.0 - (e.clientY - rect.top) / rect.height;
    });
  }

  function resize() {
    if (!canvas) return;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    gl.viewport(0, 0, canvas.width, canvas.height);
  }
  window.addEventListener('resize', resize);
  resize();

  function render(time) {
    if (!canvas || canvas.width === 0) {
      requestAnimationFrame(render);
      return;
    }
    gl.uniform1f(uniforms.iTime, time * 0.001);
    gl.uniform3f(uniforms.iResolution, canvas.width, canvas.height, canvas.width / canvas.height);
    gl.uniform3f(uniforms.uColor, 0.77, 0.12, 0.23);
    gl.uniform1f(uniforms.uAmplitude, 1.0);
    gl.uniform1f(uniforms.uDistance, 0.0);
    gl.uniform2f(uniforms.uMouse, mouseX, mouseY);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
});