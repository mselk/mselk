(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(2407)}])},9749:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(6495).Z,r=i(2648).Z,o=i(1598).Z,a=i(7273).Z,l=o(i(7294)),s=r(i(3121)),c=i(2675),d=i(139),u=i(8730);i(7238);var A=r(i(9824));let g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function f(e){return void 0!==e.default}function h(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function m(e,t,i,r,o){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let a="decode"in e?e.decode():Promise.resolve();a.catch(()=>{}).then(()=>{if(e.parentNode){if(null==i?void 0:i.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let o=!1,a=!1;i.current(n({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>o,isPropagationStopped:()=>a,persist(){},preventDefault(){o=!0,t.preventDefault()},stopPropagation(){a=!0,t.stopPropagation()}}))}(null==r?void 0:r.current)&&r.current(e)}})}let p=l.forwardRef((e,t)=>{var{imgAttributes:i,heightInt:r,widthInt:o,qualityInt:s,className:c,imgStyle:d,blurStyle:u,isLazy:A,fill:g,placeholder:f,loading:h,srcString:p,config:w,unoptimized:b,loader:v,onLoadRef:E,onLoadingCompleteRef:y,onLoad:C,onError:_}=e,j=a(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","onLoad","onError"]);return h=A?"lazy":h,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},j,i,{width:o,height:r,decoding:"async","data-nimg":g?"fill":"1",className:c,loading:h,style:n({},d,u),ref:l.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(_&&(e.src=e.src),e.complete&&m(e,p,E,y,b))},[p,E,y,_,b,t]),onLoad(e){let t=e.currentTarget;m(t,p,E,y,b)},onError(e){let{style:t}=e.currentTarget;"transparent"===t.color&&(t.color=""),"blur"===f&&t.backgroundImage&&(t.backgroundSize="",t.backgroundPosition="",t.backgroundRepeat="",t.backgroundImage=""),_&&_(e)}})))}),w=l.forwardRef((e,t)=>{let i,r;var o,{src:m,sizes:w,unoptimized:b=!1,priority:v=!1,loading:E,className:y,quality:C,width:_,height:j,fill:x,style:I,onLoad:S,onLoadingComplete:k,placeholder:z="empty",blurDataURL:Q,layout:B,objectFit:M,objectPosition:P,lazyBoundary:R,lazyRoot:D}=e,O=a(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let N=l.useContext(u.ImageConfigContext),L=l.useMemo(()=>{let e=g||N||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t);return n({},e,{allSizes:t,deviceSizes:i})},[N]),T=O,F=T.loader||A.default;if(delete T.loader,"__next_img_default"in F){if("custom"===L.loader)throw Error('Image with src "'.concat(m,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let U=F;F=e=>{let{config:t}=e,i=a(e,["config"]);return U(i)}}if(B){"fill"===B&&(x=!0);let G={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[B];G&&(I=n({},I,G));let W={responsive:"100vw",fill:"100vw"}[B];W&&!w&&(w=W)}let H="",J=h(_),K=h(j);if("object"==typeof(o=m)&&(f(o)||void 0!==o.src)){let V=f(m)?m.default:m;if(!V.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(V)));if(!V.height||!V.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(V)));if(i=V.blurWidth,r=V.blurHeight,Q=Q||V.blurDataURL,H=V.src,!x){if(J||K){if(J&&!K){let Z=J/V.width;K=Math.round(V.height*Z)}else if(!J&&K){let q=K/V.height;J=Math.round(V.width*q)}}else J=V.width,K=V.height}}let Y=!v&&("lazy"===E||void 0===E);((m="string"==typeof m?m:H).startsWith("data:")||m.startsWith("blob:"))&&(b=!0,Y=!1),L.unoptimized&&(b=!0);let X=h(C),$=Object.assign(x?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:M,objectPosition:P}:{},{color:"transparent"},I),ee="blur"===z&&Q?{backgroundSize:$.objectFit||"cover",backgroundPosition:$.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:J,heightInt:K,blurWidth:i,blurHeight:r,blurDataURL:Q}),'")')}:{},et=function(e){let{config:t,src:i,unoptimized:n,width:r,quality:o,sizes:a,loader:l}=e;if(n)return{src:i,srcSet:void 0,sizes:void 0};let{widths:s,kind:c}=function(e,t,i){let{deviceSizes:n,allSizes:r}=e;if(i){let o=/(^|\s)(1?\d?\d)vw/g,a=[];for(let l;l=o.exec(i);l)a.push(parseInt(l[2]));if(a.length){let s=.01*Math.min(...a);return{widths:r.filter(e=>e>=n[0]*s),kind:"w"}}return{widths:r,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let c=[...new Set([t,2*t].map(e=>r.find(t=>t>=e)||r[r.length-1]))];return{widths:c,kind:"x"}}(t,r,a),d=s.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:s.map((e,n)=>"".concat(l({config:t,src:i,quality:o,width:e})," ").concat("w"===c?e:n+1).concat(c)).join(", "),src:l({config:t,src:i,quality:o,width:s[d]})}}({config:L,src:m,unoptimized:b,width:J,quality:X,sizes:w,loader:F}),ei=m,en={imageSrcSet:et.srcSet,imageSizes:et.sizes,crossOrigin:T.crossOrigin},er=l.useRef(S);l.useEffect(()=>{er.current=S},[S]);let eo=l.useRef(k);l.useEffect(()=>{eo.current=k},[k]);let ea=n({isLazy:Y,imgAttributes:et,heightInt:K,widthInt:J,qualityInt:X,className:y,imgStyle:$,blurStyle:ee,loading:E,config:L,fill:x,unoptimized:b,placeholder:z,loader:F,srcString:ei,onLoadRef:er,onLoadingCompleteRef:eo},T);return l.default.createElement(l.default.Fragment,null,l.default.createElement(p,Object.assign({},ea,{ref:t})),v?l.default.createElement(s.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+et.src+et.srcSet+et.sizes,rel:"preload",as:"image",href:et.srcSet?void 0:et.src},en))):null)});t.default=w,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:i,blurWidth:n,blurHeight:r,blurDataURL:o}=e,a=n||t,l=r||i,s=o.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return a&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(a," ").concat(l,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(n&&r?"1":"20","'/%3E").concat(s,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(o,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(o,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function i(e){let{config:t,src:i,width:n,quality:r}=e;return i.endsWith(".svg")&&!t.dangerouslyAllowSVG?i:"".concat(t.path,"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(r||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i.__next_img_default=!0,t.default=i},2407:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return u}});var n=i(5893),r=i(9008),o=i.n(r),a=i(5675),l=i.n(a),s=i(7160),c=i.n(s),d={src:"/mselk//_next/static/media/melissa.41a61301.jpg",height:1085,width:1086,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAKQJ/8QAHhAAAgEDBQAAAAAAAAAAAAAAAQIDAAQREhMhMUH/2gAIAQEAAT8Aa3nmdlkaA6Ajqdr3nI7r/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAEDE1L/2gAIAQIBAT8Ask0z/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAEDE1L/2gAIAQMBAT8Arjyj/9k=",blurWidth:8,blurHeight:8};function u(){return(0,n.jsxs)("div",{className:c().container,children:[(0,n.jsxs)(o(),{children:[(0,n.jsx)("title",{children:"Blog"}),(0,n.jsx)("meta",{name:"description",content:"Traveling blog"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsxs)("main",{children:[(0,n.jsx)("h1",{className:c().headline,children:"Welcome to my Blog"}),(0,n.jsx)("p",{children:" This was my adventure in the Caribbean."}),(0,n.jsx)(l(),{alt:"woman in a beach",src:d,width:"1086",height:"1085"})]})]})}},7160:function(e){e.exports={headline:"Home_headline__v4QOU",container:"Home_container__bCOhY"}},9008:function(e,t,i){e.exports=i(3121)},5675:function(e,t,i){e.exports=i(9749)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);