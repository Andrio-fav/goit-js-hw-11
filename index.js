import{a as c,S as d,i as l}from"./assets/vendor-BfjKTZs6.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const u="49486795-430aa06a6e639b9f88254bdb1";async function f(a){const o=`https://pixabay.com/api/?key=${u}&q=${encodeURIComponent(a)}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15`;try{return(await c.get(o)).data.hits}catch(t){throw console.error("Error fetching images:",t),new Error("Failed to fetch images.")}}let m=new d(".gallery a");function h(a,o){let t=a.map(s=>`
      <li>
        <a href="${s.largeImageURL}"><img src="${s.webformatURL}" alt="${s.tags}" width="360" height="200" /></a>
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
              <td>${s.likes}</td>
              <td>${s.views}</td>
              <td>${s.comments}</td>
              <td>${s.downloads}</td>
            </tr>
          </tbody>
        </table>
      </li>`).join("");o.innerHTML=t,m.refresh()}const p=document.querySelector(".gallery"),n=document.querySelector(".form");n.addEventListener("submit",y);function y(a){a.preventDefault();const o=n.elements.request.value.trim();if(!o){l.warning({message:"Please enter a search query!"});return}p.innerHTML="",n.elements.request.setAttribute("readonly",!0),n.elements.button.disabled=!0,n.lastElementChild.classList.remove("hidden"),f(o).then(t=>{if(t.length>0)n.elements.request.value="",h(t);else throw new Error("Sorry, no images found. Please try again!")}).catch(t=>{l.error({iconUrl:"img/error.svg",message:t.message})}).finally(()=>{n.elements.request.removeAttribute("readonly"),n.elements.button.disabled=!1,n.lastElementChild.classList.add("hidden")})}
//# sourceMappingURL=index.js.map
