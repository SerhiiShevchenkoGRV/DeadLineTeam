import{A as a,S as p}from"./assets/vendor-DpF08Fhr.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))e(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&e(s)}).observe(document,{childList:!0,subtree:!0});function i(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function e(o){if(o.ep)return;o.ep=!0;const t=i(o);fetch(o.href,t)}})();document.addEventListener("DOMContentLoaded",()=>{new a(".accordion-about-me",{duration:300,showMultiple:!1,openOnInit:[0]})});document.addEventListener("DOMContentLoaded",()=>{new a(".accordion-container"),new a(".container-second",{duration:500,showMultiple:!0,onToggle:function(i,e){console.log(i)}}),new a([".accordion-container",".container-second"]),new a(".accordion-container").detachEvents(),new a(".accordion-container",{duration:300,showMultiple:!1,elementClass:"ac",triggerClass:"ac-trigger",panelClass:"ac-panel",activeClass:"is-active",onOpen:i=>{const e=i.querySelector(".ac-panel"),o=i.querySelector(".ac-icon");e&&(e.style.maxHeight=`${e.scrollHeight}px`,e.style.overflow="visible"),o&&(o.style.transform="rotate(180deg)")},onClose:i=>{const e=i.querySelector(".ac-panel"),o=i.querySelector(".ac-icon");e&&(e.style.maxHeight=null,e.style.overflow="hidden"),o&&(o.style.transform="rotate(0deg)")}});const r=document.createElement("style");r.textContent=".ac .ac-trigger::after { display: none !important; }",document.head.appendChild(r)});const v=document.querySelector(".header_menu_img"),l=document.querySelector(".modal_window"),w=document.querySelector(".x_icon"),h=document.querySelector(".menu_trigger"),g=document.querySelector(".menu");v.addEventListener("click",()=>{l.classList.toggle("active")});w.addEventListener("click",()=>{l.classList.remove("active")});h.addEventListener("click",()=>{g.classList.toggle("active")});document.querySelectorAll(".modal_list_item").forEach(n=>{n.addEventListener("click",()=>{l.classList.remove("active")})});document.querySelectorAll(".order_btn").forEach(n=>{n.addEventListener("click",()=>{l.classList.remove("active")})});document.addEventListener("DOMContentLoaded",()=>{new p(".swiper",{slidesPerView:1,spaceBetween:16,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0},keyboard:{enabled:!0},mousewheel:!0,on:{init:function(){n(this)},slideChange:function(){n(this)}}});function n(r){const i=document.querySelector(".swiper-button-prev"),e=document.querySelector(".swiper-button-next");r.isBeginning?(i.setAttribute("disabled","true"),i.classList.add("disabled")):(i.removeAttribute("disabled"),i.classList.remove("disabled")),r.isEnd?(e.setAttribute("disabled","true"),e.classList.add("disabled")):(e.removeAttribute("disabled"),e.classList.remove("disabled"))}});document.addEventListener("DOMContentLoaded",function(){const n=document.getElementById("reviews-list");function r(t){n.innerHTML="",t.forEach(s=>{const c=document.createElement("li");c.classList.add("swiper-slide","reviews-list-item"),c.innerHTML=`
                <img class="review-image" src="${s.avatar_url}" alt="${s.author}" width="48" height="48">
                <h3 class="reviews-names">${s.author}</h3>
                <p class="reviews-text">${s.review}</p>
            `,n.appendChild(c)}),requestAnimationFrame(i)}function i(){const t=document.querySelectorAll(".reviews-list-item");let s=0;t.forEach(c=>{c.style.height="auto",s=Math.max(s,c.offsetHeight)}),t.forEach(c=>{c.style.height=`${s}px`})}async function e(){try{const t=await fetch("https://portfolio-js.b.goit.study/api/reviews");if(!t.ok)throw new Error("Failed to fetch reviews");const s=await t.json();s&&Array.isArray(s)&&s.length>0?r(s):n.innerHTML='<li style="color: red;">Not found</li>'}catch(t){n.innerHTML='<li style="color: red;">Not found</li>',alert("reviews not found"),console.error("Reviews error:",t)}}function o(){const t=new p(".swiper-reviews",{speed:400,spaceBetween:16,slidesPerView:1,navigation:{nextEl:".swiper-button-next-reviews",prevEl:".swiper-button-prev-reviews",disabledClass:"swiper-button-disabled-reviews"},breakpoints:{768:{slidesPerView:2,speed:400,spaceBetween:16},1440:{slidesPerView:4,speed:400,spaceBetween:16}}});t.on("slideChange",function(){const s=t.navigation.prevEl,c=t.navigation.nextEl;s.disabled=t.isBeginning,c.disabled=t.isEnd})}e().then(()=>{o()})});const y="https://portfolio-js.b.goit.study/api/requests",d=document.querySelector(".form-subscribe"),b=document.querySelector(".close-button"),u=document.querySelector(".model_overlay"),f=document.querySelector(".info_item");d.querySelector(".mail_js");d.addEventListener("submit",L);function L(n){n.preventDefault();const r=n.target.elements.email.value,i=n.target.elements.comment.value;fetch(y,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:r,comment:i})}).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}).then(e=>E(e)).then(e=>f.insertAdjacentHTML("beforeend",S(e))).catch(e=>console.log(e.message))}function E(n){return[n]}function S(n){return u.classList.remove("visibility-hidden"),n.map(({title:r,message:i})=>`
        <div class="text_info">
        <p>${r}</p>
        </div>
        <div class="supporting_text">
        <p>${i}</p>
        </div>
    `).join("")}b.addEventListener("click",m);u.addEventListener("click",m);document.addEventListener("keydown",function(n){if(n.code==="Escape")return m()});function m(n){u.classList.add("visibility-hidden"),f.innerHTML="",d.reset()}
//# sourceMappingURL=index.js.map
