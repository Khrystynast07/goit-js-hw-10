import"./assets/styles-qLVd-Mi_.js";import{i as r}from"./assets/vendor-BbbuE1sJ.js";const o=document.querySelector(".form");o.addEventListener("submit",m);function m(e){e.preventDefault();const s=e.target.elements.state.value,i=e.target.elements.delay.value;n(i,s).then(t=>{r.success({title:"Success",message:t,position:"topRight"})}).catch(t=>{r.error({title:"Error",message:t,position:"topRight"})}),e.currentTarget.reset()}function n(e,s){return new Promise((i,t)=>{setTimeout(()=>{s==="fulfilled"?i(`✅ Fulfilled promise in ${e}ms`):t(`❌ Rejected promise in ${e}ms`)},e)})}
//# sourceMappingURL=2-snackbar.js.map