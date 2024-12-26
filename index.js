import{A as f,S as m}from"./assets/vendor-DpF08Fhr.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll(".accordion-item-about-me");e.forEach(i=>{i.querySelector(".accordion-header-about-me").addEventListener("click",()=>{const t=i.classList.contains("open");e.forEach(s=>s.classList.remove("open")),t||i.classList.add("open")})})});document.addEventListener("DOMContentLoaded",()=>{new f(".accordion-container",{duration:300,showMultiple:!1,elementClass:"ac",triggerClass:"ac-trigger",panelClass:"ac-panel",activeClass:"is-active",onOpen:i=>{const o=i.querySelector(".ac-panel"),t=i.querySelector(".ac-icon");o&&(o.style.maxHeight=`${o.scrollHeight}px`,o.style.overflow="visible"),t&&(t.style.transform="rotate(180deg)")},onClose:i=>{const o=i.querySelector(".ac-panel"),t=i.querySelector(".ac-icon");o&&(o.style.maxHeight=null,o.style.overflow="hidden"),t&&(t.style.transform="rotate(0deg)")}});const e=document.createElement("style");e.textContent=`
    .ac .ac-trigger::after {
      display: none !important;
    }
  `,document.head.appendChild(e)});const v=document.querySelector(".header_menu_img"),a=document.querySelector(".modal_window"),h=document.querySelector(".x_icon"),w=document.querySelector(".menu_trigger"),g=document.querySelector(".menu");v.addEventListener("click",()=>{a.classList.toggle("active")});h.addEventListener("click",()=>{a.classList.remove("active")});w.addEventListener("click",()=>{g.classList.toggle("active")});document.querySelectorAll(".modal_list_item").forEach(e=>{e.addEventListener("click",()=>{a.classList.remove("active")})});document.querySelectorAll(".order_btn").forEach(e=>{e.addEventListener("click",()=>{a.classList.remove("active")})});document.addEventListener("DOMContentLoaded",()=>{new m(".swiper",{slidesPerView:1,spaceBetween:16,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0},keyboard:{enabled:!0},mousewheel:!0,on:{init:function(){e(this)},slideChange:function(){e(this)}}});function e(i){const o=document.querySelector(".swiper-button-prev"),t=document.querySelector(".swiper-button-next");i.isBeginning?(o.setAttribute("disabled","true"),o.classList.add("disabled")):(o.removeAttribute("disabled"),o.classList.remove("disabled")),i.isEnd?(t.setAttribute("disabled","true"),t.classList.add("disabled")):(t.removeAttribute("disabled"),t.classList.remove("disabled"))}});document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("reviews-list");function i(n){e.innerHTML="",n.forEach(r=>{const c=document.createElement("li");c.classList.add("swiper-slide","reviews-list-item"),c.innerHTML=`
                <img class="review-image" src="${r.avatar_url}" alt="${r.author}" width="48" height="48">
                <h3 class="reviews-names">${r.author}</h3>
                <p class="reviews-text">${r.review}</p>
            `,e.appendChild(c)}),requestAnimationFrame(o)}function o(){const n=document.querySelectorAll(".reviews-list-item");let r=0;n.forEach(c=>{c.style.height="auto",r=Math.max(r,c.offsetHeight)}),n.forEach(c=>{c.style.height=`${r}px`})}async function t(){try{const n=await fetch("https://portfolio-js.b.goit.study/api/reviews");if(!n.ok)throw new Error("Failed to fetch reviews");const r=await n.json();r&&Array.isArray(r)&&r.length>0?i(r):e.innerHTML='<li style="color: red;">Not found</li>'}catch(n){e.innerHTML='<li style="color: red;">Not found</li>',alert("reviews not found"),console.error("Reviews error:",n)}}function s(){const n=new m(".swiper-reviews",{speed:400,spaceBetween:16,slidesPerView:1,navigation:{nextEl:".swiper-button-next-reviews",prevEl:".swiper-button-prev-reviews",disabledClass:"swiper-button-disabled-reviews"},breakpoints:{768:{slidesPerView:2,speed:400,spaceBetween:16},1440:{slidesPerView:4,speed:400,spaceBetween:16}}});n.on("slideChange",function(){const r=n.navigation.prevEl,c=n.navigation.nextEl;r.disabled=n.isBeginning,c.disabled=n.isEnd})}t().then(()=>{s()})});const y="https://portfolio-js.b.goit.study/api/requests",l=document.querySelector(".form-subscribe"),b=document.querySelector(".close-button"),d=document.querySelector(".model_overlay"),p=document.querySelector(".info_item");l.querySelector(".mail_js");l.addEventListener("submit",L);function L(e){e.preventDefault();const i=e.target.elements.email.value,o=e.target.elements.comment.value;fetch(y,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:i,comment:o})}).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()}).then(t=>E(t)).then(t=>p.insertAdjacentHTML("beforeend",S(t))).catch(t=>console.log(t.message))}function E(e){return[e]}function S(e){return d.classList.remove("visibility-hidden"),e.map(({title:i,message:o})=>`
        <div class="text_info">
        <p>${i}</p>
        </div>
        <div class="supporting_text">
        <p>${o}</p>
        </div>
    `).join("")}b.addEventListener("click",u);d.addEventListener("click",u);document.addEventListener("keydown",function(e){if(e.code==="Escape")return u()});function u(e){d.classList.add("visibility-hidden"),p.innerHTML="",l.reset()}
//# sourceMappingURL=index.js.map
