// lanmeiniu Technical Casebook interactions
document.querySelectorAll('.project-tab').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.project-tab').forEach(x=>x.classList.remove('active'));
    document.querySelectorAll('.case').forEach(x=>x.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.case).classList.add('active');
  });
});

document.querySelectorAll('.case').forEach(c=>{
  c.querySelectorAll('.subtab').forEach(btn=>{
    btn.addEventListener('click',()=>{
      c.querySelectorAll('.subtab').forEach(x=>x.classList.remove('active'));
      c.querySelectorAll('.panel').forEach(x=>x.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(btn.dataset.panel).classList.add('active');
    });
  });
});



document.querySelectorAll('.portfolio-image-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const box=document.getElementById('lightbox');
    document.getElementById('lightboxImage').src=btn.dataset.lightboxSrc;
    document.getElementById('lightboxProject').textContent=btn.dataset.lightboxProject;
    document.getElementById('lightboxTitle').textContent=btn.dataset.lightboxTitle;
    box.classList.add('open');
    box.setAttribute('aria-hidden','false');
  });
});
function closeLightbox(){
  const box=document.getElementById('lightbox');
  box.classList.remove('open');
  box.setAttribute('aria-hidden','true');
}
document.getElementById('lightboxClose').addEventListener('click',closeLightbox);
document.getElementById('lightbox').addEventListener('click',e=>{
  if(e.target.id==='lightbox') closeLightbox();
});
document.addEventListener('keydown',e=>{
  if(e.key==='Escape') closeLightbox();
});


// Basic anti-copy layer.
// Note: public frontend content can still be inspected via DevTools/source.
document.addEventListener('copy', (e) => e.preventDefault());
document.addEventListener('cut', (e) => e.preventDefault());
document.addEventListener('contextmenu', (e) => e.preventDefault());

document.addEventListener('dragstart', (e) => {
  if (e.target && e.target.tagName === 'IMG') {
    e.preventDefault();
  }
});

document.addEventListener('keydown', (e) => {
  const mod = e.ctrlKey || e.metaKey;
  if (!mod) return;
  const key = e.key.toLowerCase();
  if (key === 'c' || key === 'x' || key === 'a') {
    e.preventDefault();
  }
});
