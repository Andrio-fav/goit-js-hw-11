import{a as c,S as u,i as a}from"./assets/vendor-DVva8SYe.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function f(n){const r="https://pixabay.com/api/?key="+"49486795-430aa06a6e639b9f88254bdb1"+"&q="+encodeURIComponent(n)+"&image_type=photo&orientation=horizontal&safesearch=true";return c.get(r).then(i=>[...i.data.hits])}function m(n,o){let r=n.map(e=>`
      <li>
        <a href="${e.largeImageURL}"><img src="${e.webformatURL}" alt="${e.tags}" width="360" height="200" /></a>
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
              <td>${e.likes}</td>
              <td>${e.views}</td>
              <td>${e.comments}</td>
              <td>${e.downloads}</td>
            </tr>
          </tbody>
        </table>
      </li>`).join("");o.innerHTML=r,new u(".gallery a").refresh()}a.settings({position:"topRight",iconColor:"#fff",messageColor:"#fff"});const d=document.querySelector(".gallery"),s=document.querySelector(".form");s.addEventListener("submit",h);function h(n){n.preventDefault();const o=s.elements.request.value.trim();if(!o){a.warning({message:"Please enter a search query!"});return}d.innerHTML="",s.elements.request.setAttribute("readonly",!0),s.elements.button.disabled=!0,s.lastElementChild.classList.remove("hidden"),f(o).then(r=>{if(r.length>0)s.elements.request.value="",m(r,d);else throw new Error("Sorry, no images found. Please try again!")}).catch(r=>{a.error({iconUrl:"img/error.svg",message:r.message})}).finally(()=>{s.elements.request.removeAttribute("readonly"),s.elements.button.disabled=!1,s.lastElementChild.classList.add("hidden")})}
//# sourceMappingURL=index.js.map
