
window.addEventListener('load',()=>{
 setTimeout(()=>document.getElementById('loader').style.display='none',1500);
});

const glow=document.querySelector('.cursor-glow');
document.addEventListener('mousemove',e=>{
 if(glow){
  glow.style.left=e.clientX+'px';
  glow.style.top=e.clientY+'px';
 }
 const dot=document.createElement('div');
 dot.className='paint-dot';
 dot.style.left=e.pageX+'px';
 dot.style.top=e.pageY+'px';
 document.body.appendChild(dot);
 setTimeout(()=>dot.remove(),1000);
});

function filterGallery(cat){
 document.querySelectorAll('.gallery-item').forEach(i=>{
  i.style.display=(cat==='all'||i.dataset.cat===cat)?'flex':'none';
 });
}
