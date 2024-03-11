import{S as f,i as l}from"./assets/vendor-7659544d.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const u=new f(".gallery a",{captionsData:"alt",captionDelay:250}),m=document.querySelector(".gallery");function p({webformatURL:o,largeImageURL:t,tags:n,likes:i,views:e,comments:r,downloads:s}){return` 
  <li class="gallery-item">
  <a class="gallery-link" href="${t}">
    <img
      class="gallery-image"
      src="${o}"
      alt="${n}"
      width="360"
      height = "220"
    />
  </a>
  <p> largeImageURL: "${t}"</p>
  <p> tags: "${n}"</p>
      <p>likes: "${i}"</p>
      <p> views: "${e}"</p>
      <p> comments"${r}"</p>
      <p> downloads: "${s}"</p>
</li>`}function d(o){return o.map(p).join("")}function g(o,t){m.insertAdjacentHTML("beforeend",d(t))}function h(){u.refresh}const y="https://pixabay.com/api/",L="42814531-6217cd85928bc5270423ce53d";function b(o){const t=new URLSearchParams({key:L,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}),n=`${y}/?${t}`;return fetch(n).then(i=>{if(!i.ok)throw new Error(i.status);return i.json()})}const $=document.querySelector(".search-form"),a=document.querySelector(".loader"),c=document.querySelector(".gallery");$.addEventListener("submit",o=>{o.preventDefault(),c.innerHTML="";const t=o.target.elements.search.value.trim();if(t===""){l.warning({titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ffa000",message:"Please enter a search query",position:"topRight"});return}S(),b(t).then(n=>{if(n.hits.length===0)return l.error({title:"Error",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ef4040",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});g(c,n.hits),h()}).catch(n=>{console.log(n)}).finally(()=>{w()}),o.target.reset()});function S(){a&&(a.style.display="block")}function w(){a&&(a.style.display="none")}
//# sourceMappingURL=commonHelpers.js.map
