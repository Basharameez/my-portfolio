// ===== GLOBAL VARIABLES =====
let isLoading = true;
let currentSection = 'home';
let isMenuOpen = false;
let skillsAnimated = false;
let statsAnimated = false;
let webglInitialized = false;

// Theme management
let currentTheme = localStorage.getItem('theme') || 'light';

// WebGL variables
let canvas, gl, program;
let particles = [];
let mouseX = 0, mouseY = 0;

// ===== DOM ELEMENTS =====
const elements = {
  loadingScreen: null,
  navbar: null,
  navMenu: null,
  themeToggle: null,
  mobileMenuToggle: null,
  backToTop: null,
  cursorFollower: null,
  contactForm: null,
  toast: null,
  certificateModal: null,
  webglCanvas: null
};

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
  initializeElements();
  initializeTheme();
  initializeLoadingScreen();
  initializeCursorFollower();
  initializeNavigation();
  initializeScrollAnimations();
  initializeWebGL();
  initializeContactForm();
  initializeTypingAnimation();
  initializeParallaxEffects();
  initializeIntersectionObserver();
  
  // Initialize after a short delay to ensure DOM is fully loaded
  setTimeout(() => {
    finishLoading();
  }, 2500);
});

// ===== ELEMENT INITIALIZATION =====
function initializeElements() {
  elements.loadingScreen = document.getElementById('loadingScreen');
  elements.navbar = document.getElementById('navbar');
  elements.navMenu = document.getElementById('navMenu');
  elements.themeToggle = document.getElementById('themeToggle');
  elements.mobileMenuToggle = document.getElementById('mobileMenuToggle');
  elements.backToTop = document.getElementById('backToTop');
  elements.cursorFollower = document.getElementById('cursorFollower');
  elements.contactForm = document.getElementById('contactForm');
  elements.toast = document.getElementById('toast');
  elements.certificateModal = document.getElementById('certificateModal');
  elements.webglCanvas = document.getElementById('webglCanvas');
}

// ===== THEME MANAGEMENT =====
function initializeTheme() {
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon();
  
  if (elements.themeToggle) {
    elements.themeToggle.addEventListener('click', toggleTheme);
  }
}

function toggleTheme() {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);
  localStorage.setItem('theme', currentTheme);
  updateThemeIcon();
  
  // Add smooth transition effect
  document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
  setTimeout(() => {
    document.body.style.transition = '';
  }, 300);
}

function updateThemeIcon() {
  if (!elements.themeToggle) return;
  
  const sunIcon = elements.themeToggle.querySelector('.bi-sun');
  const moonIcon = elements.themeToggle.querySelector('.bi-moon-stars');
  
  if (currentTheme === 'dark') {
    if (sunIcon) sunIcon.style.opacity = '1';
    if (moonIcon) moonIcon.style.opacity = '0';
  } else {
    if (sunIcon) sunIcon.style.opacity = '0';
    if (moonIcon) moonIcon.style.opacity = '1';
  }
}

// ===== LOADING SCREEN =====
function initializeLoadingScreen() {
  if (!elements.loadingScreen) return;
  
  // Animate loading progress
  const progressBar = elements.loadingScreen.querySelector('.loading-progress');
  if (progressBar) {
    setTimeout(() => {
      progressBar.style.width = '100%';
    }, 500);
  }
}

function finishLoading() {
  if (!elements.loadingScreen) return;
  
  elements.loadingScreen.classList.add('hidden');
  document.body.style.overflow = 'auto';
  
  // Start animations after loading
  setTimeout(() => {
    initializeCountupAnimations();
    initializeSkillAnimations();
  }, 500);
}

// ===== CURSOR FOLLOWER =====
function initializeCursorFollower() {
  if (!elements.cursorFollower) return;
  
  let mouseX = 0, mouseY = 0;
  let followerX = 0, followerY = 0;
  
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    elements.cursorFollower.style.opacity = '1';
  });
  
  document.addEventListener('mouseleave', () => {
    elements.cursorFollower.style.opacity = '0';
  });
  
  function updateCursor() {
    followerX += (mouseX - followerX) * 0.1;
    followerY += (mouseY - followerY) * 0.1;
    
    elements.cursorFollower.style.left = followerX + 'px';
    elements.cursorFollower.style.top = followerY + 'px';
    
    requestAnimationFrame(updateCursor);
  }
  
  updateCursor();
  
  // Add hover effects for interactive elements
  const interactiveElements = document.querySelectorAll('a, button, .project-card, .certificate-card, .skill-item');
  
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      elements.cursorFollower.style.transform = 'translate(-50%, -50%) scale(1.5)';
      elements.cursorFollower.style.opacity = '0.8';
    });
    
    el.addEventListener('mouseleave', () => {
      elements.cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
      elements.cursorFollower.style.opacity = '1';
    });
  });
}

// ===== NAVIGATION =====
function initializeNavigation() {
  if (elements.mobileMenuToggle && elements.navMenu) {
    elements.mobileMenuToggle.addEventListener('click', toggleMobileMenu);
  }
  
  // Add scroll listener for navbar
  window.addEventListener('scroll', handleNavbarScroll);
  
  // Add click listeners for navigation links
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      scrollToSection(targetId);
      closeMobileMenu();
    });
  });
  
  // Initialize back to top button
  if (elements.backToTop) {
    elements.backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

function toggleMobileMenu() {
  isMenuOpen = !isMenuOpen;
  elements.navMenu.classList.toggle('active');
  elements.mobileMenuToggle.classList.toggle('active');
  document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
}

function closeMobileMenu() {
  if (isMenuOpen) {
    isMenuOpen = false;
    elements.navMenu.classList.remove('active');
    elements.mobileMenuToggle.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

function handleNavbarScroll() {
  const scrollY = window.scrollY;
  
  // Add scrolled class to navbar
  if (scrollY > 50) {
    elements.navbar.classList.add('scrolled');
  } else {
    elements.navbar.classList.remove('scrolled');
  }
  
  // Show/hide back to top button
  if (elements.backToTop) {
    if (scrollY > 500) {
      elements.backToTop.classList.add('visible');
    } else {
      elements.backToTop.classList.remove('visible');
    }
  }
  
  // Update active navigation link
  updateActiveNavLink();
}

function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  let currentSectionId = '';
  
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 100 && rect.bottom >= 100) {
      currentSectionId = section.id;
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSectionId}`) {
      link.classList.add('active');
    }
  });
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (!section) return;
  
  const offsetTop = section.getBoundingClientRect().top + window.pageYOffset - 80;
  
  window.scrollTo({
    top: offsetTop,
    behavior: 'smooth'
  });
}

// ===== SCROLL ANIMATIONS =====
function initializeScrollAnimations() {
  // Animate elements on scroll
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.glass-card, .project-card, .certificate-card, .skill-item');
    
    elements.forEach(element => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      if (rect.top < windowHeight * 0.8 && rect.bottom > 0) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };
  
  // Initial setup
  const elements = document.querySelectorAll('.glass-card, .project-card, .certificate-card, .skill-item');
  elements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });
  
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Initial call
}

// ===== WEBGL BACKGROUND ANIMATION =====
function initializeWebGL() {
  if (!elements.webglCanvas) return;
  
  canvas = elements.webglCanvas;
  gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
  
  if (!gl) {
    console.warn('WebGL not supported');
    return;
  }
  
  setupWebGL();
  createParticles();
  animateWebGL();
  
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();
  
  // Mouse interaction
  document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
  });
  
  webglInitialized = true;
}

function setupWebGL() {
  // Vertex shader
  const vertexShaderSource = `
    attribute vec2 a_position;
    attribute float a_size;
    attribute vec3 a_color;
    varying vec3 v_color;
    uniform vec2 u_resolution;
    uniform vec2 u_mouse;
    uniform float u_time;
    
    void main() {
      vec2 position = a_position;
      
      // Mouse interaction
      vec2 mouseForce = u_mouse - position;
      float distance = length(mouseForce);
      if (distance < 0.3) {
        position += normalize(mouseForce) * (0.3 - distance) * 0.1;
      }
      
      // Convert to clip space
      vec2 clipSpace = ((position + 1.0) / 2.0) * 2.0 - 1.0;
      gl_Position = vec4(clipSpace, 0.0, 1.0);
      gl_PointSize = a_size;
      v_color = a_color;
    }
  `;
  
  // Fragment shader
  const fragmentShaderSource = `
    precision mediump float;
    varying vec3 v_color;
    
    void main() {
      float distance = length(gl_PointCoord - vec2(0.5));
      if (distance > 0.5) discard;
      
      float alpha = 1.0 - distance * 2.0;
      gl_FragColor = vec4(v_color, alpha * 0.6);
    }
  `;
  
  const vertexShader = createShader(gl.VERTEX_SHADER, vertexShaderSource);
  const fragmentShader = createShader(gl.FRAGMENT_SHADER, fragmentShaderSource);
  
  program = createProgram(vertexShader, fragmentShader);
  gl.useProgram(program);
}

function createShader(type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error('Shader compilation error:', gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  
  return shader;
}

function createProgram(vertexShader, fragmentShader) {
  const program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error('Program linking error:', gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
    return null;
  }
  
  return program;
}

function createParticles() {
  const particleCount = 100;
  particles = [];
  
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: (Math.random() - 0.5) * 2,
      y: (Math.random() - 0.5) * 2,
      vx: (Math.random() - 0.5) * 0.02,
      vy: (Math.random() - 0.5) * 0.02,
      size: Math.random() * 3 + 1,
      color: [
        Math.random() * 0.5 + 0.5,
        Math.random() * 0.5 + 0.7,
        1.0
      ]
    });
  }
}

function animateWebGL() {
  if (!webglInitialized || !gl || !program) return;
  
  // Update particles
  particles.forEach(particle => {
    particle.x += particle.vx;
    particle.y += particle.vy;
    
    // Boundary checking
    if (particle.x > 1 || particle.x < -1) particle.vx *= -1;
    if (particle.y > 1 || particle.y < -1) particle.vy *= -1;
  });
  // Render
  gl.clearColor(0, 0, 0, 0);
  gl.clear(gl.COLOR_BUFFER_BIT);
  gl.enable(gl.BLEND);
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
  
  // Create buffers
  const positions = [];
  const sizes = [];
  const colors = [];
  
  particles.forEach(particle => {
    positions.push(particle.x, particle.y);
    sizes.push(particle.size);
    colors.push(...particle.color);
  });
  
  // Position buffer
  const positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
  
  const positionLocation = gl.getAttribLocation(program, 'a_position');
  gl.enableVertexAttribArray(positionLocation);
  gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
  
  // Size buffer
  const sizeBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, sizeBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(sizes), gl.STATIC_DRAW);
  
  const sizeLocation = gl.getAttribLocation(program, 'a_size');
  gl.enableVertexAttribArray(sizeLocation);
  gl.vertexAttribPointer(sizeLocation, 1, gl.FLOAT, false, 0, 0);
  
  // Color buffer
  const colorBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
  
  const colorLocation = gl.getAttribLocation(program, 'a_color');
  gl.enableVertexAttribArray(colorLocation);
  gl.vertexAttribPointer(colorLocation, 3, gl.FLOAT, false, 0, 0);
  
  // Set uniforms
  const mouseLocation = gl.getUniformLocation(program, 'u_mouse');
  gl.uniform2f(mouseLocation, mouseX, mouseY);
  
  const timeLocation = gl.getUniformLocation(program, 'u_time');
  gl.uniform1f(timeLocation, Date.now() * 0.001);
  
  // Draw
  gl.drawArrays(gl.POINTS, 0, particles.length);
  
  requestAnimationFrame(animateWebGL);
}

function resizeCanvas() {
  if (!canvas) return;
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  if (gl) {
    gl.viewport(0, 0, canvas.width, canvas.height);
    
    const resolutionLocation = gl.getUniformLocation(program, 'u_resolution');
    if (resolutionLocation) {
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
    }
  }
}

// ===== TYPING ANIMATION =====
function initializeTypingAnimation() {
  const typingElement = document.querySelector('.typing-text');
  if (!typingElement) return;
  
  const phrases = [
    "Hello, I'm",
    "Welcome, I'm",
    "Hi there, I'm",
    "Greetings, I'm"
  ];
  
  let currentPhrase = 0;
  let currentChar = 0;
  let isDeleting = false;
  
  function typeWriter() {
    const phrase = phrases[currentPhrase];
    
    if (!isDeleting) {
      typingElement.textContent = phrase.substring(0, currentChar + 1);
      currentChar++;
      
      if (currentChar === phrase.length) {
        setTimeout(() => {
          isDeleting = true;
        }, 2000);
      }
    } else {
      typingElement.textContent = phrase.substring(0, currentChar - 1);
      currentChar--;
      
      if (currentChar === 0) {
        isDeleting = false;
        currentPhrase = (currentPhrase + 1) % phrases.length;
      }
    }
    
    const speed = isDeleting ? 100 : 150;
    setTimeout(typeWriter, speed);
  }
  
  typeWriter();
}

// ===== COUNTUP ANIMATIONS =====
function initializeCountupAnimations() {
  if (statsAnimated) return;
  
  const statNumbers = document.querySelectorAll('.stat-number[data-count]');
  
  statNumbers.forEach(stat => {
    const target = parseInt(stat.dataset.count);
    let current = 0;
    const increment = target / 50;
    
    const updateCount = () => {
      current += increment;
      
      if (current >= target) {
        stat.textContent = target;
      } else {
        stat.textContent = Math.floor(current);
        requestAnimationFrame(updateCount);
      }
    };
    
    updateCount();
  });
  
  statsAnimated = true;
}

// ===== SKILL ANIMATIONS =====
function initializeSkillAnimations() {
  if (skillsAnimated) return;
  
  const skillBars = document.querySelectorAll('.skill-progress[data-width]');
  
  skillBars.forEach((bar, index) => {
    setTimeout(() => {
      const width = bar.dataset.width + '%';
      bar.style.width = width;
    }, index * 200);
  });
  
  skillsAnimated = true;
}

// ===== PARALLAX EFFECTS =====
function initializeParallaxEffects() {
  const parallaxElements = document.querySelectorAll('.floating-icon');
  
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    parallaxElements.forEach((el, index) => {
      const speed = (index + 1) * 0.3;
      el.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });
}

// ===== INTERSECTION OBSERVER =====
function initializeIntersectionObserver() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        
        // Trigger specific animations based on section
        if (entry.target.id === 'skills' && !skillsAnimated) {
          setTimeout(initializeSkillAnimations, 500);
        }
        
        if (entry.target.id === 'home' && !statsAnimated) {
          setTimeout(initializeCountupAnimations, 500);
        }
      }
    });
  }, observerOptions);
  
  // Observe all sections
  const sections = document.querySelectorAll('section[id]');
  sections.forEach(section => {
    observer.observe(section);
  });
}

// ===== CONTACT FORM =====
function initializeContactForm() {
  if (!elements.contactForm) return;
  
  elements.contactForm.addEventListener('submit', handleFormSubmit);
}

async function handleFormSubmit(e) {
  e.preventDefault();
  
  const formData = new FormData(e.target);
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message')
  };
  
  // Validate form data
  if (!validateFormData(data)) {
    showToast('Please fill in all fields correctly.', 'error');
    return;
  }
  
  // Show loading state
  const submitBtn = e.target.querySelector('button[type="submit"]');
  submitBtn.classList.add('loading');
  
  try {
    // Simulate form submission (replace with actual API call)
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    showToast('Message sent successfully! I\'ll get back to you soon.', 'success');
    e.target.reset();
  } catch (error) {
    showToast('Failed to send message. Please try again.', 'error');
  } finally {
    submitBtn.classList.remove('loading');
  }
}

function validateFormData(data) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  return (
    data.name.trim().length > 0 &&
    data.email.trim().length > 0 &&
    emailRegex.test(data.email) &&
    data.subject.trim().length > 0 &&
    data.message.trim().length > 10
  );
}

// ===== TOAST NOTIFICATIONS =====
function showToast(message, type = 'success') {
  if (!elements.toast) return;
  
  const toastIcon = elements.toast.querySelector('.toast-icon');
  const toastMessage = elements.toast.querySelector('.toast-message');
  
  // Set content
  toastMessage.textContent = message;
  
  // Set icon based on type
  if (type === 'success') {
    toastIcon.innerHTML = '✓';
    elements.toast.className = 'toast success';
  } else if (type === 'error') {
    toastIcon.innerHTML = '✕';
    elements.toast.className = 'toast error';
  }
  
  // Show toast
  elements.toast.classList.add('show');
  
  // Hide after 5 seconds
  setTimeout(() => {
    elements.toast.classList.remove('show');
  }, 5000);
}

// ===== CERTIFICATE MODAL =====
function openCertificate(imageSrc) {
  if (!elements.certificateModal) return;
  
  const modalImage = elements.certificateModal.querySelector('#certificateImage');
  modalImage.src = imageSrc;
  
  elements.certificateModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCertificate() {
  if (!elements.certificateModal) return;
  
  elements.certificateModal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// ===== PROJECT INTERACTIONS =====
function initializeProjectInteractions() {
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)';
    });
  });
}

// ===== SMOOTH SCROLLING FOR ANCHOR LINKS =====
function initializeSmoothScrolling() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        const offsetTop = targetSection.getBoundingClientRect().top + window.pageYOffset - 80;
        
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ===== PERFORMANCE OPTIMIZATIONS =====
function optimizePerformance() {
  // Debounce scroll events
  let scrollTimeout;
  const originalScrollHandler = handleNavbarScroll;
  
  handleNavbarScroll = function() {
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }
    
    scrollTimeout = setTimeout(originalScrollHandler, 10);
  };
  
  // Throttle resize events
  let resizeTimeout;
  const originalResizeHandler = resizeCanvas;
  
  resizeCanvas = function() {
    if (resizeTimeout) {
      clearTimeout(resizeTimeout);
    }
    
    resizeTimeout = setTimeout(originalResizeHandler, 100);
  };
}

// ===== ERROR HANDLING =====
function setupErrorHandling() {
  window.addEventListener('error', (e) => {
    console.error('JavaScript Error:', e.error);
    
    // Show user-friendly error message
    if (elements.toast) {
      showToast('Something went wrong. Please refresh the page.', 'error');
    }
  });
  
  // Handle unhandled promise rejections
  window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled Promise Rejection:', e.reason);
    e.preventDefault();
  });
}

// ===== ACCESSIBILITY IMPROVEMENTS =====
function improveAccessibility() {
  // Add focus management for modals
  const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
  
  document.addEventListener('keydown', (e) => {
    // Close modal on Escape key
    if (e.key === 'Escape') {
      if (elements.certificateModal && elements.certificateModal.classList.contains('active')) {
        closeCertificate();
      }
      
      if (isMenuOpen) {
        closeMobileMenu();
      }
    }
    
    // Trap focus in modals
    if (elements.certificateModal && elements.certificateModal.classList.contains('active')) {
      const focusableContent = elements.certificateModal.querySelectorAll(focusableElements);
      const firstElement = focusableContent[0];
      const lastElement = focusableContent[focusableContent.length - 1];
      
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    }
  });
  
  // Add skip-to-content link
  const skipLink = document.createElement('a');
  skipLink.href = '#main';
  skipLink.textContent = 'Skip to main content';
  skipLink.className = 'skip-link';
  skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 6px;
    background: var(--primary-color);
    color: white;
    padding: 8px;
    text-decoration: none;
    border-radius: 4px;
    z-index: 1000;
    transition: top 0.3s;
  `;
  
  skipLink.addEventListener('focus', () => {
    skipLink.style.top = '6px';
  });
  
  skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-40px';
  });
  
  document.body.insertAdjacentElement('afterbegin', skipLink);
}

// ===== LAZY LOADING FOR IMAGES =====
function initializeLazyLoading() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });
    
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => {
      imageObserver.observe(img);
    });
  }
}

// ===== SERVICE WORKER REGISTRATION =====
function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('SW registered: ', registration);
        })
        .catch(registrationError => {
          console.log('SW registration failed: ', registrationError);
        });
    });
  }
}

// ===== ANALYTICS AND TRACKING =====
function initializeAnalytics() {
  // Track page views
  function trackPageView() {
    // Replace with your analytics code
    console.log('Page view tracked:', window.location.pathname);
  }
  
  // Track interactions
  function trackInteraction(category, action, label) {
    // Replace with your analytics code
    console.log('Interaction tracked:', { category, action, label });
  }
  
  // Track form submissions
  if (elements.contactForm) {
    elements.contactForm.addEventListener('submit', () => {
      trackInteraction('Form', 'Submit', 'Contact Form');
    });
  }
  
  // Track navigation clicks
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      trackInteraction('Navigation', 'Click', link.textContent);
    });
  });
  
  trackPageView();
}

// ===== ADDITIONAL INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
  // Additional initializations
  setTimeout(() => {
    initializeProjectInteractions();
    initializeSmoothScrolling();
    optimizePerformance();
    setupErrorHandling();
    improveAccessibility();
    initializeLazyLoading();
    initializeAnalytics();
  }, 1000);
});

// ===== GLOBAL UTILITY FUNCTIONS =====

// Debounce function
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle function
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Format date function
function formatDate(date) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(new Date(date));
}

// Check if element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// ===== EXPORT FOR TESTING =====
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    toggleTheme,
    showToast,
    openCertificate,
    closeCertificate,
    validateFormData,
    debounce,
    throttle,
    formatDate,
    isInViewport
  };
}

// ===== GLOBAL ERROR RECOVERY =====
window.addEventListener('load', () => {
  // Ensure critical elements are initialized even if some scripts fail
  if (!webglInitialized) {
    console.warn('WebGL initialization failed, continuing without animations');
  }
  
  // Final fallback to ensure page is usable
  setTimeout(() => {
    if (elements.loadingScreen && !elements.loadingScreen.classList.contains('hidden')) {
      finishLoading();
    }
  }, 5000);
});
