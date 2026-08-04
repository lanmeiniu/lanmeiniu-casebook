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
