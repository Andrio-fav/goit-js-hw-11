import{a as d,S as c,i as l}from"./assets/vendor-BfjKTZs6.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();function u(s){const n="https://pixabay.com/api/?key="+"49486795-430aa06a6e639b9f88254bdb1"+"&q="+encodeURIComponent(s)+"&image_type=photo&orientation=horizontal&safesearch=true";return d.get(n).then(r=>[...r.data.hits])}let f=new c(".gallery a");function m(s,t){let n=s.map(r=>`
      <li>
        <a href="${r.largeImageURL}"><img src="${r.webformatURL}" alt="${r.tags}" width="360" height="200" /></a>
        <table class="caption">
          <thead>
            <tr>
              <th>Likes</th>
              <th>Views</th>
              <th>Comments</th>
              <th>Downloads</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${r.likes}</td>
              <td>${r.views}</td>
              <td>${r.comments}</td>
              <td>${r.downloads}</td>
            </tr>
          </tbody>
        </table>
      </li>`).join("");t.innerHTML=n,f.refresh()}l.settings({position:"topRight",iconColor:"#fff",messageColor:"#fff"});document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelector(".gallery"),t=document.querySelector(".form"),n=t.querySelector("button"),r=t.lastElementChild;if(!t){console.error("Form element not found");return}t.addEventListener("submit",e);function e(o){o.preventDefault();const i=t.elements.request.value.trim();if(!i){l.warning({message:"Please enter a search query!"});return}s.innerHTML="",t.elements.request.setAttribute("readonly",!0),n.disabled=!0,r.classList.remove("hidden"),u(i).then(a=>{if(a.length>0)t.elements.request.value="",m(a,s);else throw new Error("Sorry, no images found. Please try again!")}).catch(a=>{l.error({iconUrl:"img/error.svg",message:a.message})}).finally(()=>{t.elements.request.removeAttribute("readonly"),n.disabled=!1,r.classList.add("hidden")})}});
//# sourceMappingURL=index.js.map
