import{A as a,S as p}from"./assets/vendor-DpF08Fhr.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))e(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&e(r)}).observe(document,{childList:!0,subtree:!0});function i(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function e(o){if(o.ep)return;o.ep=!0;const n=i(o);fetch(o.href,n)}})();document.addEventListener("DOMContentLoaded",function(){const t=document.querySelectorAll(".accordion-item-about-me");t.forEach(s=>{s.querySelector(".accordion-header-about-me").addEventListener("click",()=>{const e=s.classList.contains("open");t.forEach(o=>o.classList.remove("open")),e||s.classList.add("open")})})});document.addEventListener("DOMContentLoaded",()=>{new a(".accordion-container"),new a(".container-second",{duration:500,showMultiple:!0,onToggle:function(i,e){console.log(i)}}),new a([".accordion-container",".container-second"]),new a(".accordion-container").detachEvents(),new a(".accordion-container",{duration:300,showMultiple:!1,elementClass:"ac",triggerClass:"ac-trigger",panelClass:"ac-panel",activeClass:"is-active",onOpen:i=>{const e=i.querySelector(".ac-panel"),o=i.querySelector(".ac-icon");e&&(e.style.maxHeight=`${e.scrollHeight}px`,e.style.overflow="visible"),o&&(o.style.transform="rotate(180deg)")},onClose:i=>{const e=i.querySelector(".ac-panel"),o=i.querySelector(".ac-icon");e&&(e.style.maxHeight=null,e.style.overflow="hidden"),o&&(o.style.transform="rotate(0deg)")}});const s=document.createElement("style");s.textContent=".ac .ac-trigger::after { display: none !important; }",document.head.appendChild(s)});const v=document.querySelector(".header_menu_img"),l=document.querySelector(".modal_window"),w=document.querySelector(".x_icon"),h=document.querySelector(".menu_trigger"),g=document.querySelector(".menu");v.addEventListener("click",()=>{l.classList.toggle("active")});w.addEventListener("click",()=>{l.classList.remove("active")});h.addEventListener("click",()=>{g.classList.toggle("active")});document.querySelectorAll(".modal_list_item").forEach(t=>{t.addEventListener("click",()=>{l.classList.remove("active")})});document.querySelectorAll(".order_btn").forEach(t=>{t.addEventListener("click",()=>{l.classList.remove("active")})});document.addEventListener("DOMContentLoaded",()=>{new p(".swiper",{slidesPerView:1,spaceBetween:16,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0},keyboard:{enabled:!0},mousewheel:!0,on:{init:function(){t(this)},slideChange:function(){t(this)}}});function t(s){const i=document.querySelector(".swiper-button-prev"),e=document.querySelector(".swiper-button-next");s.isBeginning?(i.setAttribute("disabled","true"),i.classList.add("disabled")):(i.removeAttribute("disabled"),i.classList.remove("disabled")),s.isEnd?(e.setAttribute("disabled","true"),e.classList.add("disabled")):(e.removeAttribute("disabled"),e.classList.remove("disabled"))}});document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("reviews-list");function s(n){t.innerHTML="",n.forEach(r=>{const c=document.createElement("li");c.classList.add("swiper-slide","reviews-list-item"),c.innerHTML=`
                <img class="review-image" src="${r.avatar_url}" alt="${r.author}" width="48" height="48">
                <h3 class="reviews-names">${r.author}</h3>
                <p class="reviews-text">${r.review}</p>
            `,t.appendChild(c)}),requestAnimationFrame(i)}function i(){const n=document.querySelectorAll(".reviews-list-item");let r=0;n.forEach(c=>{c.style.height="auto",r=Math.max(r,c.offsetHeight)}),n.forEach(c=>{c.style.height=`${r}px`})}async function e(){try{const n=await fetch("https://portfolio-js.b.goit.study/api/reviews");if(!n.ok)throw new Error("Failed to fetch reviews");const r=await n.json();r&&Array.isArray(r)&&r.length>0?s(r):t.innerHTML='<li style="color: red;">Not found</li>'}catch(n){t.innerHTML='<li style="color: red;">Not found</li>',alert("reviews not found"),console.error("Reviews error:",n)}}function o(){const n=new p(".swiper-reviews",{speed:400,spaceBetween:16,slidesPerView:1,navigation:{nextEl:".swiper-button-next-reviews",prevEl:".swiper-button-prev-reviews",disabledClass:"swiper-button-disabled-reviews"},breakpoints:{768:{slidesPerView:2,speed:400,spaceBetween:16},1440:{slidesPerView:4,speed:400,spaceBetween:16}}});n.on("slideChange",function(){const r=n.navigation.prevEl,c=n.navigation.nextEl;r.disabled=n.isBeginning,c.disabled=n.isEnd})}e().then(()=>{o()})});const y="https://portfolio-js.b.goit.study/api/requests",d=document.querySelector(".form-subscribe"),b=document.querySelector(".close-button"),u=document.querySelector(".model_overlay"),f=document.querySelector(".info_item");d.querySelector(".mail_js");d.addEventListener("submit",L);function L(t){t.preventDefault();const s=t.target.elements.email.value,i=t.target.elements.comment.value;fetch(y,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:s,comment:i})}).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}).then(e=>E(e)).then(e=>f.insertAdjacentHTML("beforeend",S(e))).catch(e=>console.log(e.message))}function E(t){return[t]}function S(t){return u.classList.remove("visibility-hidden"),t.map(({title:s,message:i})=>`
        <div class="text_info">
        <p>${s}</p>
        </div>
        <div class="supporting_text">
        <p>${i}</p>
        </div>
    `).join("")}b.addEventListener("click",m);u.addEventListener("click",m);document.addEventListener("keydown",function(t){if(t.code==="Escape")return m()});function m(t){u.classList.add("visibility-hidden"),f.innerHTML="",d.reset()}
//# sourceMappingURL=index.js.map
