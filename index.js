import{a as c,S as d,i as l}from"./assets/vendor-BfjKTZs6.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const u="49486795-430aa06a6e639b9f88254bdb1";async function f(n){const o=`https://pixabay.com/api/?key=${u}&q=${encodeURIComponent(n)}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15`;try{return(await c.get(o)).data.hits}catch(t){throw console.error("Error fetching images:",t),new Error("Failed to fetch images.")}}const m=new d(".gallery a",{captionsData:"alt",captionDelay:250});function p(n,o=!1){const t=document.querySelector(".gallery");o&&(t.innerHTML="");const a=n.map(e=>`
      <li class="gallery-item">
        <a href="${e.largeImageURL}">
          <img src="${e.webformatURL}" alt="${e.tags}" width="360" height="200">
        </a>
        <div class="image-info">
          <p><strong>Likes:</strong> ${e.likes}</p>
          <p><strong>Views:</strong> ${e.views}</p>
          <p><strong>Comments:</strong> ${e.comments}</p>
          <p><strong>Downloads:</strong> ${e.downloads}</p>
        </div>
      </li>`).join("");t.insertAdjacentHTML("beforeend",a),m.refresh()}const g=document.querySelector(".gallery"),s=document.querySelector(".form");s.addEventListener("submit",h);function h(n){n.preventDefault();const o=s.elements.request.value.trim();if(!o){l.warning({message:"Please enter a search query!"});return}g.innerHTML="",s.elements.request.setAttribute("readonly",!0),s.elements.button.disabled=!0,s.lastElementChild.classList.remove("hidden"),f(o).then(t=>{if(t.length>0)s.elements.request.value="",p(t);else throw new Error("Sorry, no images found. Please try again!")}).catch(t=>{l.error({iconUrl:"img/error.svg",message:t.message})}).finally(()=>{s.elements.request.removeAttribute("readonly"),s.elements.button.disabled=!1,s.lastElementChild.classList.add("hidden")})}
//# sourceMappingURL=index.js.map
