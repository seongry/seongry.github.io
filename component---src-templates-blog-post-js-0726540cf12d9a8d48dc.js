(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{147:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return p});a(33);var n=a(7),r=a.n(n),A=a(0),i=a.n(A),o=a(151),l=a(154),s=a(160),c=a(158),m=a(152),d=(a(145),a(185)),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,a=this.props.pageContext,n=a.previous,r=a.next,A={identifier:e.id,title:e.frontmatter.title};return i.a.createElement(s.a,{location:this.props.location,title:t},i.a.createElement(c.a,{title:e.frontmatter.title,description:e.frontmatter.description||e.excerpt}),i.a.createElement("h1",null,e.frontmatter.title),i.a.createElement("p",{className:"parse__subtitle",style:Object.assign({},Object(m.b)(-.2),{display:"block",marginBottom:Object(m.a)(1),marginTop:Object(m.a)(-1)})},i.a.createElement("span",{className:"material-icons",style:Object.assign({},Object(m.b)(-.2))},"calendar_today"),i.a.createElement("span",null,e.frontmatter.date)),i.a.createElement("div",{className:"section__post",dangerouslySetInnerHTML:{__html:e.html}}),i.a.createElement("hr",{style:{marginBottom:Object(m.a)(1)}}),i.a.createElement(l.a,null),i.a.createElement("ul",{className:"pagination"},i.a.createElement("li",null,n&&i.a.createElement(o.a,{to:n.fields.slug,rel:"prev"},i.a.createElement("div",{className:"pagination-button"},i.a.createElement("span",{className:"material-icons"},"navigate_before"),i.a.createElement("span",{className:"title"},n.frontmatter.title)))),i.a.createElement("li",null,r&&i.a.createElement(o.a,{to:r.fields.slug,rel:"next"},i.a.createElement("div",{className:"pagination-button"},i.a.createElement("span",{className:"title"},r.frontmatter.title),i.a.createElement("span",{className:"material-icons"},"navigate_next"))))),i.a.createElement(d.DiscussionEmbed,{shortname:"raina",config:A}))},t}(i.a.Component);t.default=u;var p="2761936148"},151:function(e,t,a){"use strict";a.d(t,"b",function(){return c});var n=a(0),r=a.n(n),A=a(4),i=a.n(A),o=a(32),l=a.n(o);a.d(t,"a",function(){return l.a});a(153);var s=r.a.createContext({}),c=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};c.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},152:function(e,t,a){"use strict";a.d(t,"b",function(){return A}),a.d(t,"a",function(){return i});var n=a(165),r=new(a.n(n).a)({baseFontSize:"16px",baseLineHeight:1.666,headerFontFamily:["Nanum Gothic"],bodyFontFamily:["Nanum Gothic"]});var A=r.scale,i=r.rhythm;r.options},153:function(e,t,a){var n;e.exports=(n=a(156))&&n.default||n},154:function(e,t,a){"use strict";a(163);var n=a(157),r=a(0),A=a.n(r),i=a(151),o=a(164),l=a.n(o),s=a(152);var c="3932108081";t.a=function(){return A.a.createElement(i.b,{query:c,render:function(e){var t=e.site.siteMetadata.author;return A.a.createElement("div",{style:{display:"flex"}},A.a.createElement(l.a,{fixed:e.avatar.childImageSharp.fixed,alt:t,style:{marginRight:Object(s.a)(.5),marginBottom:"auto",marginTop:"auto",minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),A.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},A.a.createElement("p",{style:{margin:0,fontWeight:900,fontSize:"1.3rem"}},t),A.a.createElement("p",{style:{margin:0}},"개발문서 읽는 게 즐거운 프런트 엔드 개발자입니다. 누군가에게 도움이 되길 믿으며 기록을 남깁니다.")))},data:n})}},156:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),A=a(4),i=a.n(A),o=a(55),l=a(2),s=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},157:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAMEBQL/xAAXAQADAQAAAAAAAAAAAAAAAAAAAQID/9oADAMBAAIQAxAAAAHUyLkCq8zSJewqMVl//8QAHRAAAgICAwEAAAAAAAAAAAAAAgMBEgARFCEiMf/aAAgBAQABBQJx1CChZchWllsGBF4qrB6z7CvQ/wD/xAAXEQADAQAAAAAAAAAAAAAAAAAAAREQ/9oACAEDAQE/AUTKf//EABURAQEAAAAAAAAAAAAAAAAAABEg/9oACAECAQE/ASP/xAAbEAADAAIDAAAAAAAAAAAAAAAAAREhQRASIv/aAAgBAQAGPwKpWi3jJ6cMl1s6xvhlZ//EABwQAQADAAMBAQAAAAAAAAAAAAEAESExQVGBwf/aAAgBAQABPyFbV6eRQrDxywIaK7jCIraCItDP1ENynDzkVc9/JdtBo4lr5tep/9oADAMBAAIAAwAAABDY18P/xAAYEQEBAAMAAAAAAAAAAAAAAAARAAEhUf/aAAgBAwEBPxABGMal2//EABcRAAMBAAAAAAAAAAAAAAAAAAABEUH/2gAIAQIBAT8QeilcIj//xAAeEAEAAgICAwEAAAAAAAAAAAABESEAMWFxUYGxwf/aAAgBAQABPxAmQqBqki44bIayQjzf7gjS6GyON5FqGQoJr7hpKmbpkmyKYWaPWs1AuF9MRLRstPeHw2AAOCs//9k=",width:50,height:50,src:"/static/6a2618febf09a1407f090a6e427b9df2/7e494/profile.jpg",srcSet:"/static/6a2618febf09a1407f090a6e427b9df2/7e494/profile.jpg 1x,\n/static/6a2618febf09a1407f090a6e427b9df2/36cc2/profile.jpg 1.5x,\n/static/6a2618febf09a1407f090a6e427b9df2/0a3a6/profile.jpg 2x,\n/static/6a2618febf09a1407f090a6e427b9df2/75d16/profile.jpg 3x"}}},site:{siteMetadata:{author:"SeongRyeong Kim"}}}}},158:function(e,t,a){"use strict";var n=a(159),r=a(0),A=a.n(r),i=a(4),o=a.n(i),l=a(166),s=a.n(l);function c(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,o=e.title,l=n.data.site,c=t||l.siteMetadata.description;return A.a.createElement(s.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:o},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:c}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}c.defaultProps={lang:"en",meta:[],keywords:[]},c.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=c},159:function(e){e.exports={data:{site:{siteMetadata:{title:"나 같은 사람을 위한 개발로그",description:"A log about Web development written by raina",author:"SeongRyeong Kim"}}}}},160:function(e,t,a){"use strict";var n=a(34),r=a.n(n),A=a(7),i=a.n(A),o=a(0),l=a.n(o),s=a(151),c=(a(33),a(152)),m=a(154);var d=function(e){return l.a.createElement("header",{className:"section__header main"},l.a.createElement("div",{className:"title",style:Object.assign({},Object(c.b)(1.5))},l.a.createElement(s.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},l.a.createElement("p",null,"나 같은"),l.a.createElement("p",null,"사람을 위한"),l.a.createElement("p",null,"개발로그"))),l.a.createElement("div",{className:"profile-section"},l.a.createElement("div",{className:"profile"},l.a.createElement(m.a,null))))},u=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={},a.handleScroll=a.handleScroll.bind(r()(a)),a}i()(t,e);var a=t.prototype;return a.handleScroll=function(){this.setState({scroll:window.scrollY})},a.componentDidMount=function(){var e=document.querySelector("header");this.setState({top:e.offsetTop,height:e.offsetHeight}),window.addEventListener("scroll",this.handleScroll,!0)},a.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},a.render=function(){var e,t=this.props,a=t.location,n=t.title,r=t.children,A=this.state.scroll>this.state.top?"section__header--fixed":"";return e="/"===a.pathname?d():l.a.createElement("header",{className:"section__header post "+A},l.a.createElement(s.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)),l.a.createElement("div",{style:{height:"100%"}},e,l.a.createElement("main",{className:"intro__main"},r),l.a.createElement("footer",null,"©raina, Built with Gatsby-blog-starter"))},t}(l.a.Component);t.a=u}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-0726540cf12d9a8d48dc.js.map