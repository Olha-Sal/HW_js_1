import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),o=document.querySelector("body");let r=null;function d(){return`#${Math.floor(Math.random()*16777215).toString(16)}`}t.addEventListener("click",()=>{r=setInterval(()=>{o.style.backgroundColor=d()},1e3),e.removeAttribute("disabled"),t.setAttribute("disabled",!0)});e.addEventListener("click",()=>{clearInterval(r),t.removeAttribute("disabled"),e.setAttribute("disabled",!0)});
//# sourceMappingURL=commonHelpers.js.map
