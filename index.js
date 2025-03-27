import{a as d,S as c,i as a}from"./assets/vendor-BfjKTZs6.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function u(i){const s="https://pixabay.com/api/?key="+"49486795-430aa06a6e639b9f88254bdb1"+"&q="+encodeURIComponent(i)+"&image_type=photo&orientation=horizontal&safesearch=true";return d.get(s).then(t=>[...t.data.hits])}let f=new c(".gallery a");function m(i,o){let s=i.map(t=>`
      <li>
        <a href="${t.largeImageURL}"><img src="${t.webformatURL}" alt="${t.tags}" width="360" height="200" /></a>
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
              <td>${t.likes}</td>
              <td>${t.views}</td>
              <td>${t.comments}</td>
              <td>${t.downloads}</td>
            </tr>
          </tbody>
        </table>
      </li>`).join("");o.innerHTML=s,f.refresh()}const h=document.querySelector(".gallery"),n=document.querySelector(".form");n.addEventListener("submit",y);function y(i){i.preventDefault();const o=n.elements.request.value.trim();if(!o){a.warning({message:"Please enter a search query!"});return}h.innerHTML="",n.elements.request.setAttribute("readonly",!0),n.elements.button.disabled=!0,n.lastElementChild.classList.remove("hidden"),u(o).then(s=>{if(s.length>0)n.elements.request.value="",m(s);else throw new Error("Sorry, no images found. Please try again!")}).catch(s=>{a.error({iconUrl:"img/error.svg",message:s.message})}).finally(()=>{n.elements.request.removeAttribute("readonly"),n.elements.button.disabled=!1,n.lastElementChild.classList.add("hidden")})}
//# sourceMappingURL=index.js.map
