import{A as a,S as p}from"./assets/vendor-DpF08Fhr.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))t(n);new MutationObserver(n=>{for(const e of n)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function r(n){const e={};return n.integrity&&(e.integrity=n.integrity),n.referrerPolicy&&(e.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?e.credentials="include":n.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function t(n){if(n.ep)return;n.ep=!0;const e=r(n);fetch(n.href,e)}})();document.addEventListener("DOMContentLoaded",()=>{new a(".accordion-about-me",{duration:300,showMultiple:!1,openOnInit:[0]})});document.addEventListener("DOMContentLoaded",()=>{new a(".accordion-container"),new a(".container-second",{duration:500,showMultiple:!0,onToggle:function(r,t){console.log(r)}}),new a([".accordion-container",".container-second"]),new a(".accordion-container").detachEvents(),new a(".accordion-container",{duration:300,showMultiple:!1,elementClass:"ac",triggerClass:"ac-trigger",panelClass:"ac-panel",activeClass:"is-active",onOpen:r=>{const t=r.querySelector(".ac-panel"),n=r.querySelector(".ac-icon");t&&(t.style.maxHeight=`${t.scrollHeight}px`,t.style.overflow="visible"),n&&(n.style.transform="rotate(180deg)")},onClose:r=>{const t=r.querySelector(".ac-panel"),n=r.querySelector(".ac-icon");t&&(t.style.maxHeight=null,t.style.overflow="hidden"),n&&(n.style.transform="rotate(0deg)")}});const s=document.createElement("style");s.textContent=".ac .ac-trigger::after { display: none !important; }",document.head.appendChild(s)});const v=document.querySelector(".header_menu_img"),l=document.querySelector(".modal_window"),w=document.querySelector(".x_icon"),h=document.querySelector(".menu_trigger"),g=document.querySelector(".menu");v.addEventListener("click",()=>{l.classList.toggle("active")});w.addEventListener("click",()=>{l.classList.remove("active")});h.addEventListener("click",()=>{g.classList.toggle("active")});document.querySelectorAll(".modal_list_item").forEach(o=>{o.addEventListener("click",()=>{l.classList.remove("active")})});document.querySelectorAll(".order_btn").forEach(o=>{o.addEventListener("click",()=>{l.classList.remove("active")})});document.addEventListener("DOMContentLoaded",function(){const o=document.getElementById("reviews-list");function s(e){o.innerHTML="",e.forEach(i=>{const c=document.createElement("li");c.classList.add("swiper-slide","reviews-list-item"),c.innerHTML=`
                <img class="review-image" src="${i.avatar_url}" alt="${i.author}" width="48" height="48">
                <h3 class="reviews-names">${i.author}</h3>
                <p class="reviews-text">${i.review}</p>
            `,o.appendChild(c)}),requestAnimationFrame(r)}function r(){const e=document.querySelectorAll(".reviews-list-item");let i=0;e.forEach(c=>{c.style.height="auto",i=Math.max(i,c.offsetHeight)}),e.forEach(c=>{c.style.height=`${i}px`})}async function t(){try{const e=await fetch("https://portfolio-js.b.goit.study/api/reviews");if(!e.ok)throw new Error("Failed to fetch reviews");const i=await e.json();i&&Array.isArray(i)&&i.length>0?s(i):o.innerHTML='<li style="color: red;">Not found</li>'}catch(e){o.innerHTML='<li style="color: red;">Not found</li>',alert("reviews not found"),console.error("Reviews error:",e)}}function n(){const e=new p(".swiper-reviews",{speed:400,spaceBetween:16,slidesPerView:1,navigation:{nextEl:".swiper-button-next-reviews",prevEl:".swiper-button-prev-reviews",disabledClass:"swiper-button-disabled-reviews"},breakpoints:{768:{slidesPerView:2,speed:400,spaceBetween:16},1440:{slidesPerView:4,speed:400,spaceBetween:16}}});e.on("slideChange",function(){const i=e.navigation.prevEl,c=e.navigation.nextEl;i.disabled=e.isBeginning,c.disabled=e.isEnd})}t().then(()=>{n()})});const y="https://portfolio-js.b.goit.study/api/requests",d=document.querySelector(".form-subscribe"),L=document.querySelector(".close-button"),u=document.querySelector(".model_overlay"),f=document.querySelector(".info_item");d.querySelector(".mail_js");d.addEventListener("submit",E);function E(o){o.preventDefault();const s=o.target.elements.email.value,r=o.target.elements.comment.value;fetch(y,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:s,comment:r})}).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()}).then(t=>b(t)).then(t=>f.insertAdjacentHTML("beforeend",S(t))).catch(t=>console.log(t.message))}function b(o){return[o]}function S(o){return u.classList.remove("visibility-hidden"),o.map(({title:s,message:r})=>`
        <div class="text_info">
        <p>${s}</p>
        </div>
        <div class="supporting_text">
        <p>${r}</p>
        </div>
    `).join("")}L.addEventListener("click",m);u.addEventListener("click",m);document.addEventListener("keydown",function(o){if(o.code==="Escape")return m()});function m(o){u.classList.add("visibility-hidden"),f.innerHTML="",d.reset()}
//# sourceMappingURL=index.js.map
