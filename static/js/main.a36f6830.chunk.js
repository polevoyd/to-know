(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(33)},24:function(e,t,a){},26:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(15),c=a.n(o),l=(a(24),a(26),a(5)),s=a(6),i=a(9),u=a(7),d=a(8),p=a(1),h=a(18),m=a(2),f="ADD_CARDS",v="SHOW_CARD",y="HIDE_CARD",g="CHANGE_CATEGORY",b="SET_CODE_DATA",C="UPDATE_STATE",k="ADD_USERNAME",E="UPDATE_COLORS",O="TOGGLE_MENU",w="UPDATE_CARDS_ARRAY";function S(e){return{type:k,user:e}}function j(){return{type:O}}var D=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).handleReplClick=function(){a.handleCopyClick(),window.open("https://repl.it/languages/".concat(a.formatToLanguage()),"_blank").focus()},a.handleGithubClick=function(){var e=a.props.cards.showCardLink.split("/"),t=e[e.length-4],r=e[e.length-3],n=e[e.length-1],o=["https://github.com"].concat(t).concat(r).concat(["blob/master"]).concat(n).join("/");window.open(o,"_blank").focus()},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=this,t=new XMLHttpRequest;t.open("GET",this.props.link,!0),t.responseType="blob",t.onload=function(){var a=new FileReader;a.readAsText(t.response),a.onload=function(t){var a;e.props.dispatch((a=t.target.result,{type:b,codeData:a}))}},t.send()}},{key:"formatToLanguage",value:function(){switch(this.props.cardToShow.split(".")[this.props.cardToShow.split(".").length-1]){case"js":return"javascript";case"py":return"python3";case"rb":return"ruby";case"html":case"css":return"html";case"java":return"java";case"cpp":return"cpp";case"cs":return"csharp";default:return""}}},{key:"componentDidMount",value:function(){document.body.style.overflow="hidden"}},{key:"componentWillUnmount",value:function(){document.body.removeAttribute("style")}},{key:"handleCopyClick",value:function(){var e=document.querySelector("code").innerText,t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),console.log("Text copied to clipboard!")}},{key:"render",value:function(){var e=n.a.createElement("figure",null,n.a.createElement("pre",null,n.a.createElement("code",{contentEditable:!0,spellCheck:!1,suppressContentEditableWarning:!0},this.props.cards.showCardData)));return n.a.createElement("div",{className:"card-edit-form"},n.a.createElement("div",{className:"card-edit-form-header"},n.a.createElement("div",{className:"text-wrapper"},n.a.createElement("h4",null,this.props.cardToShow)),n.a.createElement("div",{className:"buttons-wrapper"},n.a.createElement("div",{className:"icon-wrap",onClick:this.handleCopyClick,tooltip:"Copy code to clipboard"},n.a.createElement("i",{className:"far fa-clone card-form button copy"})),n.a.createElement("div",{className:"icon-wrap",onClick:this.handleReplClick,tooltip:"Copy and run at Repl.it"},n.a.createElement("i",{className:"fas fa-terminal card-form button repl"})),n.a.createElement("div",{className:"icon-wrap",onClick:this.handleGithubClick,tooltip:"Open at GitHub"},n.a.createElement("i",{className:"fab fa-github-square card-form button github"})),n.a.createElement("div",{className:"icon-wrap",onClick:this.props.handlePanelClicks,tooltip:"Close"},n.a.createElement("i",{className:"far fa-window-close card-form button close"})))),n.a.createElement("div",{className:"code-block"},e))}}]),t}(n.a.Component),N=Object(m.b)(function(e){return{cards:e}})(D),T=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"pickClass",value:function(e){switch(e){case"new":return"card-preview card-preview-new";case"active":return"card-preview card-preview-active";case"complete":return"card-preview card-preview-complete";default:return"card-preview card-preview-new"}}},{key:"getStyleFromState",value:function(e){switch(e){case"new":return{backgroundColor:this.props.cards.categoryColors[0],color:this.props.cards.categoryColors[3]};case"active":return{backgroundColor:this.props.cards.categoryColors[1],color:this.props.cards.categoryColors[3]};case"complete":return{backgroundColor:this.props.cards.categoryColors[2],color:this.props.cards.categoryColors[3]}}}},{key:"render",value:function(){var e=this,t=this.props.cards,a=this.props.category,r=t.cardsObjects.filter(function(e){return e.category===a}).map(function(t){return n.a.createElement("div",{key:a+t.name,style:e.getStyleFromState(a),className:e.pickClass(e.props.category),onClick:function(){return e.props.handleClick(t.name)},onDragStart:function(a){return e.props.onDragStart(a,t.name)},draggable:!0},n.a.createElement("h4",null,"".concat(e.props.addSpacesToName(t.name))))});return n.a.createElement("div",null,r)}}]),t}(n.a.Component),A=Object(m.b)(function(e){return{cards:e}})(T),R=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleClick=a.handleClick.bind(Object(p.a)(Object(p.a)(a))),a.handlePanelClicks=a.handlePanelClicks.bind(Object(p.a)(Object(p.a)(a))),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=JSON.parse(localStorage.getItem("cardsState"));e&&this.props.dispatch({type:C,state:e})}},{key:"handleClick",value:function(e){var t=this.props.cards.user.split("/").splice(3,2).join("/"),a="https://raw.githubusercontent.com/".concat(t,"/master/").concat(e);this.props.dispatch(function(e,t){return{type:v,name:e,link:t}}(e,a))}},{key:"handlePanelClicks",value:function(e){this.props.dispatch({type:y})}},{key:"addSpacesToName",value:function(e){return Object(h.a)(e).map(function(e){return e.charCodeAt(0)>64&&e.charCodeAt(0)<91?" "+e:e}).join("")}},{key:"onDragStart",value:function(e,t){e.dataTransfer.setData("card",t)}},{key:"onDragOver",value:function(e){e.preventDefault()}},{key:"onDrop",value:function(e,t){var a=this,r=e.dataTransfer.getData("card");this.props.dispatch(function(e,t){return{type:g,name:e,newCategory:t}}(r,t)),setTimeout(function(){localStorage.setItem("cardsState",JSON.stringify(a.props.cards))},300)}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"cards-all-results"},this.props.cards.showCard?n.a.createElement(N,{cardToShow:this.addSpacesToName(this.props.cards.showCardName),user:this.props.cards.user,link:this.props.cards.showCardLink,handlePanelClicks:this.handlePanelClicks}):null,n.a.createElement("div",{className:"drag-sections"},n.a.createElement("div",{onDragOver:function(t){return e.onDragOver(t)},onDrop:function(t){return e.onDrop(t,"new")},className:"new"},n.a.createElement(A,{cards:this.props.cards,category:"new",onDragStart:this.onDragStart,handleClick:this.handleClick,addSpacesToName:this.addSpacesToName})),n.a.createElement("div",{onDragOver:function(t){return e.onDragOver(t)},onDrop:function(t){return e.onDrop(t,"active")},className:"active"},n.a.createElement(A,{cards:this.props.cards,category:"active",onDragStart:this.onDragStart,handleClick:this.handleClick,addSpacesToName:this.addSpacesToName})),n.a.createElement("div",{onDragOver:function(t){return e.onDragOver(t)},onDrop:function(t){return e.onDrop(t,"complete")},className:"complete"},n.a.createElement(A,{cards:this.props.cards,category:"complete",onDragStart:this.onDragStart,handleClick:this.handleClick,addSpacesToName:this.addSpacesToName}))))}}]),t}(n.a.Component),I=Object(m.b)(function(e){return{cards:e}})(R),_=function(e){return n.a.createElement("div",{className:"greeting"},n.a.createElement("h1",null,"To Know"),n.a.createElement("p",null,"Hello!"),n.a.createElement("p",null,"This is an app that converts your GitHub repository into a study cards. Every file from a repo as a card, which you can open and drag and drop across three different categories. It makes it easy to study concepts and code challanges, while effortlessly managing them in one place. Hope you'll find it helpful too."),n.a.createElement("p",null,"* app is optimized for desktop use"))},L=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleColorChange=function(e){var t=document.querySelector("#color-one").value,r=document.querySelector("#color-two").value,n=document.querySelector("#color-three").value,o=document.querySelector("#color-font").value;a.props.dispatch({type:E,categoryColors:[t,r,n,o]}),localStorage.setItem("cardsState",JSON.stringify(a.props.cards))},a.handleLinkSubmit=a.handleLinkSubmit.bind(Object(p.a)(Object(p.a)(a))),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"handleLinkSubmit",value:function(e){var t=this;if(e.preventDefault(),e.persist(),new RegExp(/^\https:\/\/github.com\/\w{1,15}\/.{1,70}/).test(e.target[0].value.trim())){var a="https://to-know.herokuapp.com?repo=".concat(e.target[0].value);fetch(a).then(function(e){return e.json()}).then(function(a){var r=a.map(function(e){return{name:e.name,link:e.link,category:"new"}});return t.props.dispatch(S(e.target[0].value)),r}).then(function(e){var a=e;if(localStorage.getItem("cardsState")){var r=JSON.parse(localStorage.getItem("cardsState")).cardsObjects.filter(function(e){return"new"!==e.category}),n=!0,o=!1,c=void 0;try{for(var l,s=r[Symbol.iterator]();!(n=(l=s.next()).done);n=!0){var i=l.value,u=!0,d=!1,p=void 0;try{for(var h,m=a[Symbol.iterator]();!(u=(h=m.next()).done);u=!0){var v=h.value;i.name===v.name&&(v.category=i.category)}}catch(y){d=!0,p=y}finally{try{u||null==m.return||m.return()}finally{if(d)throw p}}}}catch(y){o=!0,c=y}finally{try{n||null==s.return||s.return()}finally{if(o)throw c}}}t.props.dispatch(function(e){return{type:f,newStateCardsArray:e}}(a))}).then(function(){localStorage.setItem("cardsState",JSON.stringify(t.props.cards)),t.props.dispatch(j())})}else console.log("Wrong link format!")}},{key:"setRepositoryLink",value:function(){return localStorage.getItem("cardsState")?JSON.parse(localStorage.getItem("cardsState")).user:"https://github.com/polevoyd/to-know-content"}},{key:"handleResetButtonClick",value:function(){localStorage.removeItem("cardsState"),window.location.reload()}},{key:"render",value:function(){return n.a.createElement("div",{className:"settings-tab",onMouseLeave:this.handleMouseOut},n.a.createElement(_,null),n.a.createElement("p",{className:"text-block"},"Paste a link to a repository and click ",n.a.createElement("b",null,"'Upload'")," to start.",n.a.createElement("br",null),n.a.createElement("br",null),"Press ",n.a.createElement("em",null,n.a.createElement("i",{className:"fas fa-retweet"}))," to upload cards from previous link ",n.a.createElement("br",null),n.a.createElement("br",null),"Press ",n.a.createElement("b",null,"'Reset'")," button to remove all the cards.")," ",n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",{className:"add-card"},n.a.createElement("form",{onSubmit:this.handleLinkSubmit},n.a.createElement("label",null," Link:",n.a.createElement("input",{type:"text",defaultValue:this.setRepositoryLink()})),n.a.createElement("input",{type:"submit",value:"Upload"}))),n.a.createElement("div",{className:"picker-one"},n.a.createElement("label",null,"First Category: "),n.a.createElement("input",{onChange:this.handleColorChange,type:"color",id:"color-one",name:"color-one",value:this.props.cards.categoryColors[0]})),n.a.createElement("div",{className:"picker-two"},n.a.createElement("label",null,"Second Category: "),n.a.createElement("input",{onChange:this.handleColorChange,type:"color",id:"color-two",name:"color-two",value:this.props.cards.categoryColors[1]})),n.a.createElement("div",{className:"picker-three"},n.a.createElement("label",null,"Third Category: "),n.a.createElement("input",{onChange:this.handleColorChange,type:"color",id:"color-three",name:"color-three",value:this.props.cards.categoryColors[2]})),n.a.createElement("div",{className:"button-reset"},n.a.createElement("button",{onClick:this.handleResetButtonClick},"Reset")),n.a.createElement("div",{className:"picker-font"},n.a.createElement("label",null,"Font: "),n.a.createElement("input",{onChange:this.handleColorChange,type:"color",id:"color-font",name:"color-font",value:this.props.cards.categoryColors[4]})),n.a.createElement("p",{className:"name-tag"},n.a.createElement("a",{href:"http://www.polevoy.in",target:"blank"},"www.polevoy.in")," "))}}]),t}(n.a.Component),M=Object(m.b)(function(e){return{cards:e}})(L),P=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleRefreshCards=function(){a.checkIfPreviouslyOpened();var e=a.checkForLinkToFetch(),t="https://to-know.herokuapp.com?repo=".concat(e);fetch(t).then(function(e){return e.json()}).then(function(t){var r=t.map(function(e){return{name:e.name,link:e.link,category:"new"}});return a.props.dispatch(S(e)),r}).then(function(e){var t=e;if(localStorage.getItem("cardsState")){var r=JSON.parse(localStorage.getItem("cardsState")).cardsObjects.filter(function(e){return"new"!==e.category}),n=!0,o=!1,c=void 0;try{for(var l,s=r[Symbol.iterator]();!(n=(l=s.next()).done);n=!0){var i=l.value,u=!0,d=!1,p=void 0;try{for(var h,m=t[Symbol.iterator]();!(u=(h=m.next()).done);u=!0){var f=h.value;i.name===f.name&&(f.category=i.category)}}catch(v){d=!0,p=v}finally{try{u||null==m.return||m.return()}finally{if(d)throw p}}}}catch(v){o=!0,c=v}finally{try{n||null==s.return||s.return()}finally{if(o)throw c}}}a.props.dispatch(function(e){return{type:w,newCardsArray:e}}(t)),localStorage.clear()}).then(function(){localStorage.setItem("cardsState",JSON.stringify(a.props.cards))})},a.handleMenuToggle=a.handleMenuToggle.bind(Object(p.a)(Object(p.a)(a))),a.handleRefreshCards=a.handleRefreshCards.bind(Object(p.a)(Object(p.a)(a))),a.componentDidMount=a.componentDidMount.bind(Object(p.a)(Object(p.a)(a))),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.handleRefreshCards()}},{key:"checkForLinkToFetch",value:function(){return localStorage.getItem("cardsState")&&localStorage.getItem("cardsState").user?JSON.parse(localStorage.getItem("cardsState").user):this.props.cards.user?this.props.cards.user:"https://github.com/polevoyd/cpp-challenges"}},{key:"checkIfPreviouslyOpened",value:function(){localStorage.getItem("cardsState")||this.props.dispatch(j())}},{key:"handleMenuToggle",value:function(){this.props.dispatch(j())}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"menu-icon",onClick:this.handleMenuToggle},n.a.createElement("i",{className:"far fa-caret-square-down"})),n.a.createElement("div",{className:"refresh-icon",onClick:this.handleRefreshCards},n.a.createElement("i",{className:"fas fa-retweet"})),this.props.cards.menuIsOpened?n.a.createElement(M,null):null,n.a.createElement(I,null))}}]),t}(n.a.Component),x=Object(m.b)(function(e){return{cards:e}})(P),F=a(10),U=a(4),G={showCard:!1,showCardName:null,showCardData:null,showCardLink:null,user:"",cardsObjects:[],categoryColors:["#FFFAE2","#FCEC52","#9FD356","#000000"],menuIsOpened:!0},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_CARDS":return Object(U.a)({},e,{cardsObjects:t.newStateCardsArray});case"ADD_USERNAME":return Object(U.a)({},e,{user:t.user});case"SHOW_CARD":return Object(U.a)({},e,{menuIsOpened:!1,showCard:!e.showCard,showCardName:t.name,showCardLink:t.link});case"HIDE_CARD":return Object(U.a)({},G,{showCard:!e.showCard,user:e.user,menuIsOpened:!1,cardsObjects:e.cardsObjects});case"CHANGE_CATEGORY":var a=e.cardsObjects.map(function(e){return e.name===t.name?{name:e.name,category:t.newCategory}:e});return Object(U.a)({},e,{showCardName:"",showCardData:null,showCardLink:null,cardsObjects:a});case"SET_CODE_DATA":return Object(U.a)({},e,{showCardData:t.codeData});case"UPDATE_STATE":return t.state;case"UPDATE_COLORS":return Object(U.a)({},e,{categoryColors:t.categoryColors});case"TOGGLE_MENU":return Object(U.a)({},e,{menuIsOpened:!e.menuIsOpened});case"UPDATE_CARDS_ARRAY":return Object(U.a)({},e,{cardsObjects:t.newCardsArray});case"MENU_CLOSE":return Object(U.a)({},e,{menuIsOpened:!1});default:return e}},J=Object(F.b)(H);c.a.render(n.a.createElement(m.a,{store:J},n.a.createElement(x,null)),document.getElementById("root"))}},[[19,2,1]]]);
//# sourceMappingURL=main.a36f6830.chunk.js.map