const menuButton = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav-menu');
menuButton?.addEventListener('click', () => { const open = nav.classList.toggle('open'); menuButton.classList.toggle('open', open); menuButton.setAttribute('aria-expanded', open); });
document.querySelectorAll('.nav-menu a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuButton.classList.remove('open');}));
const tabs = document.querySelectorAll('.tab'); const panels = document.querySelectorAll('.solution-panel');
tabs.forEach(tab=>tab.addEventListener('click',()=>{tabs.forEach(t=>t.classList.remove('active'));panels.forEach(p=>p.classList.remove('active'));tab.classList.add('active');document.getElementById(tab.dataset.tab).classList.add('active');}));
document.querySelectorAll('details').forEach(detail=>detail.addEventListener('toggle',()=>{if(detail.open){document.querySelectorAll('details').forEach(other=>{if(other!==detail)other.open=false})}}));
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const el=document.querySelector(a.getAttribute('href'));if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth',block:'start'});}}));
document.getElementById('year').textContent=new Date().getFullYear();
const watch = new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in-view');watch.unobserve(e.target)}}),{threshold:.13});
document.querySelectorAll('.bento,.journey-step,.why-list article,.pricing-grid-pro article').forEach(el=>watch.observe(el));


const leadRange=document.getElementById('leadRange'),orderRange=document.getElementById('orderRange');
const fmt=n=>new Intl.NumberFormat('en-IN').format(Math.round(n));
function updateROI(){if(!leadRange||!orderRange)return;const leads=+leadRange.value,aov=+orderRange.value,engaged=Math.round(leads*.85),extra=Math.round(leads*.075),value=extra*aov;document.getElementById('leadValue').textContent=fmt(leads);document.getElementById('orderValue').textContent=fmt(aov);document.getElementById('engagedValue').textContent=fmt(engaged);document.getElementById('conversionValue').textContent=fmt(extra);document.getElementById('roiValue').textContent=fmt(value)}
leadRange?.addEventListener('input',updateROI);orderRange?.addEventListener('input',updateROI);updateROI();


// Ultra motion interactions
const loader=document.getElementById('pageLoader');
window.addEventListener('load',()=>setTimeout(()=>loader?.classList.add('is-loaded'),420));
const scrollProgress=document.getElementById('scrollProgress');
const setProgress=()=>{const top=window.scrollY;const h=document.documentElement.scrollHeight-window.innerHeight; if(scrollProgress)scrollProgress.style.width=`${Math.min(100,(top/h)*100)}%`;};
window.addEventListener('scroll',setProgress,{passive:true});setProgress();
const glow=document.getElementById('cursorGlow');
if(window.matchMedia('(pointer:fine)').matches){window.addEventListener('pointermove',e=>{glow?.classList.add('on');if(glow){glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px';}});document.addEventListener('mouseleave',()=>glow?.classList.remove('on'));}
const motionObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('revealed');motionObserver.unobserve(entry.target)}}),{threshold:.13});
document.querySelectorAll('.section-head,.industry-head,.comparison-head,.pricing-head,.journey-top,.why-sticky,.roi-copy,.security-layout>div:last-child,.resource-feature').forEach(el=>{el.classList.add('motion-reveal');motionObserver.observe(el)});
document.querySelectorAll('.industry-card,.template-grid>article,.story-grid article,.bento').forEach(el=>watch.observe(el));
if(window.matchMedia('(pointer:fine)').matches&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){document.querySelectorAll('.bento,.industry-card,.template-grid>article,.story-grid article,.pricing-grid-pro article').forEach(card=>{card.classList.add('tilt-card');card.addEventListener('pointermove',e=>{const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(800px) rotateX(${y*-4}deg) rotateY(${x*5}deg) translateY(-5px)`});card.addEventListener('pointerleave',()=>card.style.transform='');});}
