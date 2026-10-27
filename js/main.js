(() => {
  const copy={
    tr:{skip:'İçeriğe geç',about:'Hakkımda',projects:'Projeler',experience:'Tecrübe',portfolioLabel:'Yavuz Selim Kara / Kişisel portfolyo',role:'Yazılım geliştirici',profileHandle:"GitHub’da @yskara0",greeting:'Merhaba, ben Yavuz.',bio:'Mobil uygulamalar ve backend sistemleriyle ilgileniyorum. Yeni şeyler öğrenmeyi ve öğrendiklerimi projelerde denemeyi seviyorum.',bioSecond:'Burası, üzerinde çalıştığım projeleri ve yazılım yolculuğumu bir araya getirdiğim kişisel alanım.',viewProjects:'Projelerime göz at',projectsIntro:'Üzerinde çalıştığım ürünler, projelerdeki rolüm ve kullandığım teknolojiler.',experienceIntro:'Çalıştığım ekipler ve yer aldığım işler.',tubitakStart:'Şubat 2025',tubitakEnd:'Haziran 2026',scholar:'Bursiyer',tubitakDescription:'Matter protokolü ve görüntü işleme üzerine çalışmalar.',imageProcessing:'Görüntü işleme',internStart:'Temmuz 2025',internEnd:'Eylül 2025',internRole:'Mobil Geliştirici Stajyeri',internDescription:'Mobil uygulama geliştirme alanında staj.',closingTitle:'Tanıştığımıza sevindim.',closingText:'Diğer çalışmalarımı GitHub profilimde bulabilirsin.',githubProfile:'GitHub profilim',title:'Yavuz Selim Kara — Portfolyo',description:"Yavuz Selim Kara’nın kişisel portfolyosu. Yazılım projeleri ve deneyimleri.",technologies:'Kullanılan teknolojiler',count:n=>`${n} proje`},
    en:{skip:'Skip to content',about:'About',projects:'Projects',experience:'Experience',portfolioLabel:'Yavuz Selim Kara / Personal portfolio',role:'Software developer',profileHandle:'@yskara0 on GitHub',greeting:'Hi, I’m Yavuz.',bio:'I’m interested in mobile applications and backend systems. I enjoy learning new things and putting them into practice through projects.',bioSecond:'This is my personal space for sharing the projects I work on and my journey in software.',viewProjects:'Explore my projects',projectsIntro:'Products I’ve worked on, my role in each project and the technologies behind them.',experienceIntro:'The teams I’ve worked with and the work I’ve been part of.',tubitakStart:'February 2025',tubitakEnd:'June 2026',scholar:'Research Scholar',tubitakDescription:'Work on the Matter protocol and image processing.',imageProcessing:'Image processing',internStart:'July 2025',internEnd:'September 2025',internRole:'Mobile Developer Intern',internDescription:'Internship focused on mobile application development.',closingTitle:'Glad you stopped by.',closingText:'You can find more of my work on my GitHub profile.',githubProfile:'My GitHub profile',title:'Yavuz Selim Kara — Portfolio',description:'Yavuz Selim Kara’s personal portfolio. Software projects and experience.',technologies:'Technologies used',count:n=>`${n} ${n===1?'project':'projects'}`}
  };
  const projects=window.portfolioProjects||[];
  const container=document.querySelector('#projects-container');
  const create=(tag,className,text)=>{const el=document.createElement(tag);if(className)el.className=className;if(text)el.textContent=text;return el;};
  let observer;
  function animateSections(){
    observer?.disconnect();
    if(matchMedia('(prefers-reduced-motion: reduce)').matches||!('IntersectionObserver' in window))return;
    observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}}),{threshold:.06});
    document.querySelectorAll('.project,.experience-entry').forEach(el=>{if(el.getBoundingClientRect().top>innerHeight){el.classList.add('reveal');observer.observe(el);}});
  }
  function renderProjects(language){
    const t=copy[language];container.replaceChildren();
    document.querySelector('#project-count').textContent=t.count(projects.length);
    projects.forEach(project=>{
      const data=project[language]||project.tr;
      const article=create('article','project');article.id=`project-${project.id}`;
      const info=create('div','project-info');
      const badges=create('div','project-badges');badges.append(create('span','project-type',data.projectType));if(project.private)badges.append(create('span','private-badge',data.privateLabel));
      const heading=create('h3','',data.name);heading.id=`title-${project.id}`;article.setAttribute('aria-labelledby',heading.id);
      info.append(badges,heading,create('p','project-subtitle',data.subtitle),create('p','project-description',data.description));
      const role=create('div','project-role');role.append(create('h4','',data.roleTitle),create('p','',data.role));info.append(role);
      const list=create('ul','project-highlights');data.highlights.forEach(item=>list.append(create('li','',item)));info.append(list);
      const tags=create('ul','tags');tags.setAttribute('aria-label',t.technologies);project.tags.forEach(tag=>tags.append(create('li','',tag)));info.append(tags);
      if(project.liveUrl){
        try{const url=new URL(project.liveUrl);if(url.protocol==='https:'){const actions=create('div','project-links');const link=create('a','text-link',data.liveLabel);link.href=url.href;link.target='_blank';link.rel='noopener noreferrer';actions.append(link);info.append(actions);}}catch{}
      }
      info.append(create('p','project-note',data.note));
      const visual=create('div','project-visual architecture');visual.append(create('p','visual-caption',data.visualLabel),create('h4','visual-title',data.visualTitle));
      const layers=create('div','architecture-layers');data.layers.forEach(([label,tech])=>{const layer=create('div','architecture-layer');const text=create('div');text.append(create('span','layer-label',label),create('strong','layer-tech',tech));layer.append(text);layers.append(layer);});
      visual.append(layers,create('p','visual-foot',data.foundation));article.append(info,visual);container.append(article);
    });
    animateSections();
  }
  function setLanguage(language){
    const lang=language==='en'?'en':'tr';const t=copy[lang];
    document.documentElement.lang=lang;document.title=t.title;
    document.querySelector('meta[name="description"]').content=t.description;
    document.querySelector('nav').setAttribute('aria-label',lang==='en'?'Main navigation':'Ana menü');
    document.querySelectorAll('[data-i18n]').forEach(el=>el.textContent=t[el.dataset.i18n]);
    document.querySelectorAll('[data-language]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.language===lang)));
    try{localStorage.setItem('portfolio-language',lang);}catch{}
    const url=new URL(location.href);url.searchParams.set('lang',lang);history.replaceState(null,'',url);
    renderProjects(lang);
  }
  document.querySelectorAll('[data-language]').forEach(button=>button.addEventListener('click',()=>setLanguage(button.dataset.language)));
  let saved;try{saved=localStorage.getItem('portfolio-language');}catch{}
  setLanguage(new URLSearchParams(location.search).get('lang')||saved||'tr');
  document.querySelector('#year').textContent=new Date().getFullYear();
  matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change',()=>{document.querySelectorAll('.reveal').forEach(el=>el.classList.remove('reveal'));animateSections();});
})();
