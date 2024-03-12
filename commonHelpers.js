import{S as u,i}from"./assets/vendor-7659544d.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const p=new u(".gallery a",{captionsData:"alt",captionDelay:250}),d=document.querySelector(".gallery");function m({webformatURL:t,largeImageURL:r,tags:o,likes:a,views:e,comments:s,downloads:n}){return` 
  <li class="gallery-item">
  <a class="gallery-link" href="${r}">
    <img
      class="gallery-image"
      src="${t}"
      alt="${o}"
      width="360"
      height = "220"
    />
  </a>
  <p class="large-image"> largeImageURL: "${r}"</p>
  <div class ="container-images">  
  <p class="tags"> <span class="text">tags</span> "${o}"</p>
      <p class = "likes"><span class="text"> likes</span> "${a}"</p>
      <p class="likes"> <span class="text">views</span>"${e}"</p>
      <p class="likes"> <span class="text">comments</span>"${s}"</p>
      <p class="likes"> <span class="text">downloads</span>"${n}"</p>
      </div>
</li>`}function g(t){return t.map(m).join("")}function h(t,r){d.insertAdjacentHTML("beforeend",g(r))}function y(){p.refresh()}const L="https://pixabay.com/api/",b="42814531-6217cd85928bc5270423ce53d";function S(t){const r=new URLSearchParams({key:b,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}),o=`${L}/?${r}`;return fetch(o).then(a=>{if(!a.ok)throw new Error(a.status);return a.json()})}const $=document.querySelector(".search-form"),l=document.querySelector(".loader"),c=document.querySelector(".gallery");$.addEventListener("submit",t=>{t.preventDefault(),c.innerHTML="";const r=t.target.elements.search.value.trim();if(r===""){i.warning({titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ffa000",message:"Please enter a search query",position:"topRight"});return}w(),S(r).then(o=>{if(o.hits.length===0)return i.error({title:"Error",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ef4040",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});h(c,o.hits),y()}).catch(o=>{console.log(o)}).finally(()=>{f()}),t.target.reset()});function w(){l&&(l.style.display="block")}function f(){const t=document.querySelector(".loader");t&&(t.style.display="none")}document.addEventListener("DOMContentLoaded",f);
//# sourceMappingURL=commonHelpers.js.map
