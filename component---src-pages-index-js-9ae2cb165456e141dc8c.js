(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{145:function(e,t,a){"use strict";a.r(t);var i=a(161),r=a(0),n=a.n(r),s=a(146),o=a(152),d=a(162),l=a(163),c=a.n(l),u=function(){return n.a.createElement(s.b,{query:"2878221864",render:function(e){return n.a.createElement(c.a,{fluid:e.placeholderImage.childImageSharp.fluid})},data:d})},A=a(150);t.default=function(){return n.a.createElement(s.b,{query:"1341731270",render:function(e){return n.a.createElement(o.a,null,n.a.createElement(A.a,{title:"Home"}),n.a.createElement("div",{style:{maxWidth:"300px",marginBottom:"1.45rem"}},n.a.createElement(u,null)),n.a.createElement("h3",null,e.site.siteMetadata.description))},data:i})}},146:function(e,t,a){"use strict";a.d(t,"b",function(){return c});var i=a(0),r=a.n(i),n=a(4),s=a.n(n),o=a(33),d=a.n(o);a.d(t,"a",function(){return d.a});a(147);var l=r.a.createContext({}),c=function(e){return r.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};c.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},147:function(e,t,a){var i;e.exports=(i=a(149))&&i.default||i},148:function(e){e.exports={data:{site:{siteMetadata:{title:"Open Meditations"}}}}},149:function(e,t,a){"use strict";a.r(t);a(34);var i=a(0),r=a.n(i),n=a(4),s=a.n(n),o=a(55),d=a(2),l=function(e){var t=e.location,a=d.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};l.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=l},150:function(e,t,a){"use strict";var i=a(151),r=a(0),n=a.n(r),s=a(4),o=a.n(s),d=a(154),l=a.n(d);function c(e){var t=e.description,a=e.lang,r=e.meta,s=e.title,o=i.data.site,d=t||o.siteMetadata.description;return n.a.createElement(l.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:s},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:d}].concat(r)})}c.defaultProps={lang:"en",meta:[],description:""},c.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),title:o.a.string.isRequired},t.a=c},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Open Meditations",description:"Simple Meditations Without the Ads or Intros | Join every day for a 10 minute guided meditation to support your daily practice.",author:"Derick Olson"}}}}},152:function(e,t,a){"use strict";var i=a(148),r=a(0),n=a.n(r),s=a(4),o=a.n(s),d=a(146),l=function(e){var t=e.siteTitle;return n.a.createElement("header",{style:{background:"#5daade",marginBottom:"1.45rem"}},n.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},n.a.createElement("h1",{style:{margin:0}},n.a.createElement(d.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};l.propTypes={siteTitle:o.a.string},l.defaultProps={siteTitle:""};var c=l,u=function(){return n.a.createElement("footer",{style:{position:"absolute",bottom:0,width:"100%",textAlign:"center",margin:"9px"}},"© ",(new Date).getFullYear()," made with"," ",n.a.createElement("span",{role:"img","aria-label":"Heart"},"❤️"),"in nyc")},A=(a(153),function(e){e.data;var t=e.children;return n.a.createElement(d.b,{query:"755544856",render:function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(c,{siteTitle:e.site.siteMetadata.title}),n.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},n.a.createElement("main",null,t),n.a.createElement(u,null)))},data:i})});A.propTypes={children:o.a.node.isRequired};t.a=A},161:function(e){e.exports={data:{site:{siteMetadata:{description:"Simple Meditations Without the Ads or Intros | Join every day for a 10 minute guided meditation to support your daily practice."}}}}},162:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAMCBAH/xAAVAQEBAAAAAAAAAAAAAAAAAAABAP/aAAwDAQACEAMQAAAB9neQ4dwOHYswX//EABwQAAMBAAIDAAAAAAAAAAAAAAECAwAREhQhMv/aAAgBAQABBQKitIBByFzuLRlQK3kyy+s3z0G//8QAFhEAAwAAAAAAAAAAAAAAAAAAESAh/9oACAEDAQE/AYE//8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAHxAAAgEEAgMAAAAAAAAAAAAAAAEREiExMgIQUXGh/9oACAEBAAY/AsQX5VKPBp9FDfsqc2NCE3CM9f/EAB0QAAIDAAIDAAAAAAAAAAAAAAERACExQVFxkbH/2gAIAQEAAT8hMlZQOxK4rOlzRAQ+VmUO2T+wFbQhLZ2n6EAgqwj6I+YSdz//2gAMAwEAAgADAAAAEJP3fv/EABgRAAMBAQAAAAAAAAAAAAAAAAABERBh/9oACAEDAQE/EI3RCK5//8QAFxEAAwEAAAAAAAAAAAAAAAAAARARIf/aAAgBAgEBPxCkFXF//8QAHhABAAMAAQUBAAAAAAAAAAAAAQARITFBUXGhsdH/2gAIAQEAAT8QQrDEPJaX3AAghs4ZvM8AR+AIcXMCKTrXhL9SgB111lm2pD2AAKz1AEDWYjvFLsX2r8n/2Q==",aspectRatio:1,src:"/dericko.github.io-gatsby/static/55610fc780c632cab1acc6d23ebb50ac/c83a6/om-logo.jpg",srcSet:"/dericko.github.io-gatsby/static/55610fc780c632cab1acc6d23ebb50ac/24f62/om-logo.jpg 75w,\n/dericko.github.io-gatsby/static/55610fc780c632cab1acc6d23ebb50ac/cb3d3/om-logo.jpg 150w,\n/dericko.github.io-gatsby/static/55610fc780c632cab1acc6d23ebb50ac/c83a6/om-logo.jpg 300w,\n/dericko.github.io-gatsby/static/55610fc780c632cab1acc6d23ebb50ac/f709c/om-logo.jpg 450w,\n/dericko.github.io-gatsby/static/55610fc780c632cab1acc6d23ebb50ac/775d9/om-logo.jpg 600w,\n/dericko.github.io-gatsby/static/55610fc780c632cab1acc6d23ebb50ac/2b1a3/om-logo.jpg 900w,\n/dericko.github.io-gatsby/static/55610fc780c632cab1acc6d23ebb50ac/952f1/om-logo.jpg 1865w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},163:function(e,t,a){"use strict";var i=a(8);t.__esModule=!0,t.default=void 0;var r,n=i(a(7)),s=i(a(35)),o=i(a(75)),d=i(a(76)),l=i(a(0)),c=i(a(4)),u=function(e){var t=(0,d.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},A=Object.create({}),f=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return A[a]||!1},p=new WeakMap;var g=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){if(p.has(e.target)){var t=p.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),p.delete(e.target),t())}})},{rootMargin:"200px"})),r);return a&&(a.observe(e),p.set(e,t)),function(){a.unobserve(e),p.delete(e)}},h=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",d=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"";return"<picture>"+i+"<img "+(e.loading?'loading="'+e.loading+'" ':"")+o+d+a+r+t+s+n+l+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},m=l.default.forwardRef(function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.nativeLazyLoadSupported,A=e.loading,f=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","nativeLazyLoadSupported","loading"]),p={};return u&&(p.loading=A),l.default.createElement("img",(0,d.default)({sizes:a,srcSet:i,src:r},f,{onLoad:s,onError:c,ref:t},p,{style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});m.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var b=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,r=!1,n=t.fadeIn,o=!1,d=f(t);!d&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,r=!0),"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype&&(i=!0,o=!0),"undefined"==typeof window&&(i=!1),t.critical&&(i=!0,r=!1);var c=!(t.critical&&!t.fadeIn);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,IOSupported:r,fadeIn:n,hasNoScript:c,seenBefore:d,nativeLazyLoadSupported:o},a.imageRef=l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:f(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.state.nativeLazyLoadSupported||this.state.IOSupported&&e&&(this.cleanUpListeners=g(e,function(){var e=f(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,A[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,A=void 0===c?{}:c,f=e.placeholderClassName,p=e.fluid,g=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,E=e.Tag,w=e.itemProp,S=(e.critical,u(this.props).loading);var v=this.state.nativeLazyLoadSupported,L=this.state.imgLoaded||!1===this.state.fadeIn,R=!0===this.state.fadeIn&&!this.state.imgCached,I=(0,d.default)({opacity:L?1:0,transition:R?"opacity "+y+"ms":"none"},o),j="boolean"==typeof b?"lightgray":b,B={transitionDelay:y+"ms"},Q=(0,d.default)({opacity:this.state.imgLoaded?0:1},R&&B,o,A),x={title:t,alt:this.state.isVisible?"":a,style:Q,className:f};if(p){var z=p;return l.default.createElement(E,{className:(i||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(z.srcSet)},l.default.createElement(E,{style:{width:"100%",paddingBottom:100/z.aspectRatio+"%"}}),j&&l.default.createElement(E,{title:t,style:(0,d.default)({backgroundColor:j,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},R&&B)}),z.base64&&l.default.createElement(m,(0,d.default)({src:z.base64},x)),z.tracedSVG&&l.default.createElement(m,(0,d.default)({src:z.tracedSVG},x)),this.state.isVisible&&l.default.createElement("picture",null,z.srcSetWebp&&l.default.createElement("source",{type:"image/webp",srcSet:z.srcSetWebp,sizes:z.sizes}),l.default.createElement(m,{alt:a,title:t,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,nativeLazyLoadSupported:v,loading:S})),this.state.hasNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,d.default)({alt:a,title:t,loading:S},z))}}))}if(g){var M=g,O=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},n);return"inherit"===n.display&&delete O.display,l.default.createElement(E,{className:(i||"")+" gatsby-image-wrapper",style:O,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},j&&l.default.createElement(E,{title:t,style:(0,d.default)({backgroundColor:j,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},R&&B)}),M.base64&&l.default.createElement(m,(0,d.default)({src:M.base64},x)),M.tracedSVG&&l.default.createElement(m,(0,d.default)({src:M.tracedSVG},x)),this.state.isVisible&&l.default.createElement("picture",null,M.srcSetWebp&&l.default.createElement("source",{type:"image/webp",srcSet:M.srcSetWebp,sizes:M.sizes}),l.default.createElement(m,{alt:a,title:t,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,nativeLazyLoadSupported:v,loading:S})),this.state.hasNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,d.default)({alt:a,title:t,loading:S},M))}}))}return null},t}(l.default.Component);b.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var y=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),E=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});b.propTypes={resolutions:y,sizes:E,fixed:y,fluid:E,fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"])};var w=b;t.default=w}}]);
//# sourceMappingURL=component---src-pages-index-js-9ae2cb165456e141dc8c.js.map