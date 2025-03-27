import{a as m,S as y,i as l}from"./assets/vendor-BfjKTZs6.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();function f(s){const n="https://pixabay.com/api/?key="+"49486795-430aa06a6e639b9f88254bdb1"+"&q="+encodeURIComponent(s)+"&image_type=photo&orientation=horizontal&safesearch=true";return m.get(n).then(r=>[...r.data.hits])}let g=new y(".gallery a");function h(s,t){let n=s.map(r=>`
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
      </li>`).join("");t.innerHTML=n,g.refresh()}l.settings({position:"topRight",iconColor:"#fff",messageColor:"#fff"});const p=document.querySelector(".gallery"),a=document.querySelector(".form"),i=document.querySelector(".load-more");let d="",u=1;a.addEventListener("submit",b);i.addEventListener("click",L);function b(s){if(s.preventDefault(),d=a.elements.request.value.trim(),!d){l.warning({message:"Please enter a search query!"});return}u=1,p.innerHTML="",a.elements.request.setAttribute("readonly",!0),a.elements.button.disabled=!0,a.lastElementChild.classList.remove("hidden"),i.classList.add("hidden"),f(d).then(({hits:t,totalHits:n})=>{if(t.length===0)throw new Error("Sorry, no images found. Please try again!");h(t),n>15&&i.classList.remove("hidden")}).catch(t=>{l.error({message:t.message})}).finally(()=>{a.elements.request.removeAttribute("readonly"),a.elements.button.disabled=!1,a.lastElementChild.classList.add("hidden")})}function L(){u+=1,i.disabled=!0,f(d).then(({hits:s,totalHits:t})=>{if(s.length===0){l.info({message:"We're sorry, but you've reached the end of search results."}),i.classList.add("hidden");return}h(s);const n=Math.ceil(t/15);u>=n&&(i.classList.add("hidden"),l.info({message:"We're sorry, but you've reached the end of search results."}))}).catch(s=>{l.error({message:s.message})}).finally(()=>{i.disabled=!1})}
//# sourceMappingURL=index.js.map
