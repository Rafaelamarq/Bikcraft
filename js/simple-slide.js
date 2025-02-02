window.SimpleSlide=class{constructor(t){this.config={slide:t.slide,auto:!1!==t.auto,nav:!!t.nav&&t.nav,time:t.time?t.time:5e3,pauseOnHover:!!t.pauseOnHover&&t.pauseOnHover},this.pause=!1,this.activeClass="active",this.slide=document.querySelector(`[data-slide="${this.config.slide}"]`),this.slide&&(this.items=[...this.slide.children],this.init())}activateSlide(t){this.items.forEach(t=>t.classList.remove(this.activeClass)),t?(t.classList.add(this.activeClass),this.activateNav(t)):(this.items[0].classList.add(this.activeClass),this.activateNav(this.items[0]))}activateNav(t){if(this.config.nav){const i=this.items.indexOf(t),e=[...this.nav.children];e.forEach(t=>t.classList.remove(this.activeClass)),e[i].classList.add(this.activeClass)}}pauseOnHover(){this.items.forEach(t=>{t.addEventListener("mouseenter",()=>this.pause=!0),t.addEventListener("mouseleave",()=>this.pause=!1)})}rotateSlide(){if(!this.pause){const t=this.slide.querySelector(".active").nextElementSibling;this.activateSlide(t)}}initAutoSlide(){!0===this.config.auto&&(clearInterval(this.autoSlide),this.autoSlide=setInterval(this.rotateSlide,this.config.time))}createNavigation(){this.nav=document.createElement("div"),this.nav.setAttribute("data-slide-nav",this.config.slide),this.items.forEach((t,i)=>{this.nav.innerHTML+=`<button data-slide-item="${i}">${i+1}</button>`}),this.slide.after(this.nav)}handleNavigationEvent({currentTarget:t}){const i=t.getAttribute("data-slide-item");this.activateSlide(this.items[i]),this.initAutoSlide()}bindEventsToNavigation(){[...this.nav.children].forEach(t=>{t.addEventListener("click",this.handleNavigationEvent)})}initNavigation(){this.createNavigation(),this.bindEventsToNavigation()}bindFunctions(){this.rotateSlide=this.rotateSlide.bind(this),this.handleNavigationEvent=this.handleNavigationEvent.bind(this)}init(){this.bindFunctions(),this.initAutoSlide(),this.config.nav&&this.initNavigation(),this.config.pauseOnHover&&this.pauseOnHover(),this.activateSlide(this.items[0])}};



new SimpleSlide({
  slide: 'quote', // nome do atributo data-slide="principal"
  nav: true, // se deve ou não mostrar a navegação
  auto: true, // se o slide deve passar automaticamente
  time: 5000, // tempo de transição dos slides
  pauseOnHover: true, // pausa a transição automática
});

new SimpleSlide({
  slide: 'portfolio', // nome do atributo data-slide="principal"
  nav: true, // se deve ou não mostrar a navegação
  auto: true, // se o slide deve passar automaticamente
  time: 5000, // tempo de transição dos slides
  pauseOnHover: true, // pausa a transição automática
});