(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"6GVF":function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return O}));n("E5k/");var o=n("q1tI"),r=n.n(o),i=n("SbOt"),a=n("7oih"),s=n("9CUm"),c=n("p3AD"),u=n("7evw"),l=n("vOnD"),d=n("Wbzz"),p=l.c.ul.withConfig({displayName:"Pagination__PaginationList",componentId:"cvnv4h-0"})(["width:100%;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-between;list-style:none;padding:5rem 0 2.5rem 0;margin:0;@media screen and (max-width:768px){padding:4rem 0.8rem 0.8rem 0.8rem;justify-content:center;}"]),f=Object(l.c)(d.Link).withConfig({displayName:"Pagination__PaginationLink",componentId:"cvnv4h-1"})(["display:flex;border-radius:4em;padding:0.4rem 1.5rem;border:solid transparent;background:linear-gradient(135deg,#b55af3 10%,#9c68f9 100%);box-shadow:inset 0 0 0 100px white;:hover{box-shadow:none;span{color:#ffffff;}}"]),m=l.c.span.withConfig({displayName:"Pagination__Title",componentId:"cvnv4h-2"})(["max-width:20rem;text-overflow:ellipsis;white-space:nowrap;word-wrap:normal;overflow:hidden;"]),h=function(e){var t=e.previous,n=e.next;return r.a.createElement(p,null,r.a.createElement("li",null,t&&r.a.createElement(f,{to:t.fields.slug,rel:"prev"},r.a.createElement("span",{className:"material-icons"},"navigate_before"),r.a.createElement(m,null,t.frontmatter.title))),r.a.createElement("li",null,n&&r.a.createElement(f,{to:n.fields.slug,rel:"next"},r.a.createElement(m,null,n.frontmatter.title),r.a.createElement("span",{className:"material-icons"},"navigate_next"))))},g=l.c.div.withConfig({displayName:"TagList__TagLayout",componentId:"sc-1ah9113-0"})(["background-color:",";border-radius:4px;display:flex;flex-direction:row;align-items:center;padding:8px;margin-top:8px;"],(function(e){return e.theme.colors.gray2})),y=l.c.span.withConfig({displayName:"TagList__Tag",componentId:"sc-1ah9113-1"})(["color:",";padding:2px 8px;font-size:12px;:hover{cursor:pointer;color:",";}"],(function(e){return e.theme.colors.black}),(function(e){return e.theme.colors.purple})),b=l.c.span.withConfig({displayName:"TagList__TagIcon",componentId:"sc-1ah9113-2"})(["font-size:20px;"]),w=function(e){var t=e.tags;return r.a.createElement(g,null,r.a.createElement(b,{className:"material-icons"},"local_offer"),t.length>0&&t.map((function(e,t){return r.a.createElement(y,{key:t},"#",e)})))};var v=l.c.h1.withConfig({displayName:"BlogPost__Title",componentId:"g9sani-0"})(["margin-top:2.5rem;"]),_=l.c.p.withConfig({displayName:"BlogPost__SubTitle",componentId:"g9sani-1"})(["span + span{margin-left:4px;}"]),C=l.c.section.withConfig({displayName:"BlogPost__Post",componentId:"g9sani-2"})(["h1,h2,h3{margin-top:1em;padding:0.3em 0;}p{margin-bottom:0.8125rem;.language-text{background-color:#ffdeeb;color:#e55475;padding:0.3em;text-shadow:none;}}a:not(.gatsby-resp-image-link){border-bottom:2px solid ",";:hover{color:#fff;background:",";border:0;}}.gatsby-resp-image-link{padding:1rem;}blockquote{border-left:4px solid ",";margin:0;padding:0 1.666rem;color:#676767;}hr{background:",";}"],(function(e){return e.theme.colors.yellow}),(function(e){return e.theme.colors.yellow}),(function(e){return e.theme.colors.gray1}),(function(e){return e.theme.colors.gray2})),E=Object(l.c)(u.DiscussionEmbed).withConfig({displayName:"BlogPost__StyledDiscussionEmbed",componentId:"g9sani-3"})(["width:100%;"]),I=function(e){var t,n;function o(){return e.apply(this,arguments)||this}return n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,n=this.props.data.markdownRemark.frontmatter.tags,o=this.props.pageContext,u=o.previous,l=o.next,d={identifier:e.id,title:e.frontmatter.title};return r.a.createElement(a.a,{location:this.props.location,title:t},r.a.createElement(s.a,{title:e.frontmatter.title,description:e.frontmatter.description||e.excerpt}),r.a.createElement(v,null,e.frontmatter.title),r.a.createElement(_,{style:Object.assign(Object.assign({},Object(c.b)(-.2)),{},{marginBottom:Object(c.a)(1),marginTop:Object(c.a)(-1)})},r.a.createElement("span",{className:"material-icons",style:Object.assign({},Object(c.b)(-.2))},"calendar_today"),r.a.createElement("span",null,e.frontmatter.date),r.a.createElement(w,{tags:n})),r.a.createElement(C,{dangerouslySetInnerHTML:{__html:e.html},style:{marginBottom:Object(c.a)(1)}}),r.a.createElement(i.a,null),r.a.createElement(h,{previous:u,next:l}),r.a.createElement(E,{shortname:"koal",config:d}))},o}(r.a.Component),O=(t.default=I,"1159323781")},"7evw":function(e,t,n){"use strict";n("R48M"),Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=t.CommentEmbed=t.CommentCount=void 0;var o=n("UZsz"),r=n("Bp/N"),i=n("HhXV");t.CommentCount=o.CommentCount,t.CommentEmbed=r.CommentEmbed,t.DiscussionEmbed=i.DiscussionEmbed;var a={CommentCount:o.CommentCount,CommentEmbed:r.CommentEmbed,DiscussionEmbed:i.DiscussionEmbed};t.default=a},"Bp/N":function(e,t,n){"use strict";n("YBKJ"),n("q8oJ"),n("C9fy"),n("8npG"),n("LagC"),n("pS08"),n("R48M"),Object.defineProperty(t,"__esModule",{value:!0}),t.CommentEmbed=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=a(n("q1tI")),i=a(n("17x9"));function a(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var u=t.CommentEmbed=function(e){function t(){return s(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"getSrc",value:function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")}},{key:"render",value:function(){return r.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0"})}}]),t}(r.default.Component);u.defaultProps={showMedia:!0,showParentComment:!0,width:420,height:320},u.propTypes={commentId:i.default.string.isRequired,showMedia:i.default.bool,showParentComment:i.default.bool,width:i.default.number,height:i.default.number}},HhXV:function(e,t,n){"use strict";n("JHok"),n("LagC"),n("pS08"),n("E5k/"),n("R48M"),Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=void 0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=c(n("q1tI")),a=c(n("17x9")),s=n("ZMnY");function c(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var d=["preData","preInit","onInit","onReady","afterRender","preReset","onIdentify","beforeComment","onNewComment","onPaginate"];(t.DiscussionEmbed=function(e){function t(){return u(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,s.shallowComparison)(this.props,e)}},{key:"componentDidUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;window&&window.DISQUS&&e.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,s.insertScript)("https://"+this.props.shortname+".disqus.com/embed.js","dsq-embed-scr",e.body))}},{key:"cleanInstance",value:function(){var e=window.document;(0,s.removeScript)("dsq-embed-scr",e.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var t=e.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild)}},{key:"getDisqusConfig",value:function(e){return function(){var t=this;this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.page.remote_auth_s3=e.remoteAuthS3,this.page.api_key=e.apiKey,d.forEach((function(n){t.callbacks[n]=[e[n]]}))}}},{key:"render",value:function(){return i.default.createElement("div",o({},this.props,{id:"disqus_thread"}))}}]),t}(i.default.Component)).propTypes={shortname:a.default.string.isRequired,config:a.default.shape({identifier:a.default.string,url:a.default.string,title:a.default.string,preData:a.default.func,preInit:a.default.func,onInit:a.default.func,onReady:a.default.func,afterRender:a.default.func,preReset:a.default.func,onIdentify:a.default.func,beforeComment:a.default.func,onNewComment:a.default.func,onPaginate:a.default.func}).isRequired}},UZsz:function(e,t,n){"use strict";n("LagC"),n("pS08"),n("R48M"),Object.defineProperty(t,"__esModule",{value:!0}),t.CommentCount=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=s(n("q1tI")),i=s(n("17x9")),a=n("ZMnY");function s(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var l=(0,a.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1);(t.CommentCount=function(e){function t(){return c(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,a.shallowComparison)(this.props,e)}},{key:"componentDidUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;e.getElementById("dsq-count-scr")?l():(0,a.insertScript)("https://"+this.props.shortname+".disqus.com/count.js","dsq-count-scr",e.body)}},{key:"cleanInstance",value:function(){var e=window.document.body;(0,a.removeScript)("dsq-count-scr",e),window.DISQUSWIDGETS=void 0}},{key:"render",value:function(){return r.default.createElement("span",{className:"disqus-comment-count","data-disqus-identifier":this.props.config.identifier,"data-disqus-url":this.props.config.url},this.props.children)}}]),t}(r.default.Component)).propTypes={shortname:i.default.string.isRequired,config:i.default.shape({identifier:i.default.string,url:i.default.string,title:i.default.string}).isRequired}},ZMnY:function(e,t,n){"use strict";n("m210"),n("4DPX"),n("Ggvi"),n("rzGZ"),n("Dq+y"),n("8npG"),n("YbXK"),n("ToIb"),n("wZFJ"),n("MIFh"),n("R48M"),Object.defineProperty(t,"__esModule",{value:!0}),t.insertScript=function(e,t,n){var o=window.document.createElement("script");return o.async=!0,o.src=e,o.id=t,n.appendChild(o),o},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var o=void 0;return function(){var r=this,i=arguments,a=function(){o=null,n||e.apply(r,i)},s=n&&!o;window.clearTimeout(o),o=setTimeout(a,t),s&&e.apply(r,i)}},t.isReactElement=a,t.shallowComparison=function(e,t){var n=new Set(Object.keys(e),Object.keys(t)),o=!0,r=!1,i=void 0;try{for(var s,c=n[Symbol.iterator]();!(o=(s=c.next()).done);o=!0){var u=s.value;if(e[u]!==t[u]&&!a(e[u]))return!0}}catch(l){r=!0,i=l}finally{try{!o&&c.return&&c.return()}finally{if(r)throw i}}return!1};var o,r=n("q1tI"),i=(o=r)&&o.__esModule?o:{default:o};function a(e){return!!i.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return i.default.isValidElement(e)}))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-42319a0d1d3842d29155.js.map