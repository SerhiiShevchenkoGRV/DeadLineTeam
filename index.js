import"./assets/vendor-CsMCLY2v.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",()=>{new Accordion(".accordion-container",{duration:300,showMultiple:!1,elementClass:"ac",triggerClass:"ac-trigger",panelClass:"ac-panel",activeClass:"is-active",onOpen:o=>{const r=o.querySelector(".ac-panel"),c=o.querySelector(".icon use");r&&(r.style.maxHeight=r.scrollHeight+"px",r.style.overflow="visible"),c&&c.setAttribute("xlink:href","#icon-arrowUP")},onClose:o=>{const r=o.querySelector(".ac-panel"),c=o.querySelector(".icon use");r&&(r.style.maxHeight=null,r.style.overflow="hidden"),c&&c.setAttribute("xlink:href","#icon-arrowDOWN")}});const n=document.createElement("style");n.textContent=".ac .ac-trigger::after { display: none !important; }",document.head.appendChild(n)});const l=document.querySelector(".header_menu_img"),i=document.querySelector(".modal_window"),a=document.querySelector(".x_icon"),d=document.querySelector(".menu_trigger"),u=document.querySelector(".menu");l.addEventListener("click",()=>{i.classList.toggle("active")});a.addEventListener("click",()=>{i.classList.remove("active")});d.addEventListener("click",()=>{u.classList.toggle("active")});document.querySelectorAll(".modal_list_item").forEach(n=>{n.addEventListener("click",()=>{i.classList.remove("active")})});document.querySelectorAll(".order_btn").forEach(n=>{n.addEventListener("click",()=>{i.classList.remove("active")})});
//# sourceMappingURL=index.js.map
