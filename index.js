import{a as u,S as d,i as l}from"./assets/vendor-BfjKTZs6.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function f(n){const o="https://pixabay.com/api/?key="+"49486795-430aa06a6e639b9f88254bdb1"+"&q="+encodeURIComponent(n)+"&image_type=photo&orientation=horizontal&safesearch=true";return u.get(o).then(i=>[...i.data.hits])}new d(".gallery a",{captionsData:"alt",captionDelay:250});l.settings({position:"topRight",iconColor:"#fff",messageColor:"#fff"});const c=document.querySelector(".gallery"),r=document.querySelector(".form");r.addEventListener("submit",m);function m(n){n.preventDefault();const s=r.elements.request.value.trim();if(!s){l.warning({message:"Please enter a search query!"});return}c.innerHTML="",r.elements.request.setAttribute("readonly",!0),r.elements.button.disabled=!0,r.lastElementChild.classList.remove("hidden"),f(s).then(o=>{if(o.length>0)r.elements.request.value="",renderGallary(o,c);else throw new Error("Sorry, no images found. Please try again!")}).catch(o=>{l.error({iconUrl:"img/error.svg",message:o.message})}).finally(()=>{r.elements.request.removeAttribute("readonly"),r.elements.button.disabled=!1,r.lastElementChild.classList.add("hidden")})}
//# sourceMappingURL=index.js.map
