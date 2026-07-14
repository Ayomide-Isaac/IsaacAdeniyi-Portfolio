document.addEventListener('DOMContentLoaded',()=>console.log('Module1A'));
const btn=document.getElementById('menuBtn');
const nav=document.getElementById('nav');
btn.onclick=()=>{nav.style.display=nav.style.display==='flex'?'none':'flex';nav.style.flexDirection='column';};
document.querySelectorAll('a[href^="#"]').forEach(a=>{
a.onclick=e=>{
e.preventDefault();
document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'});
if(window.innerWidth<900)nav.style.display='none';
};
});
