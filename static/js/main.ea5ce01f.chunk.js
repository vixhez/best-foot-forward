(this["webpackJsonpbest-foot-forward"]=this["webpackJsonpbest-foot-forward"]||[]).push([[0],{21:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(1),r=a.n(s),c=a(10),i=a.n(c),l=(a(21),a(2)),m=function(){return Object(n.jsx)("h1",{children:"Best Foot Forward"})},h=a(3),j=a(5),d=a(6),o=a(4),b=a(8),u=a(7),O=a.p+"static/media/tshirt.6eedd0a1.svg",p=a.p+"static/media/vest.948383a5.svg",y=a.p+"static/media/heartShirt.188c7629.svg",g=a.p+"static/media/collaredShirt.ed4d0dac.svg",x=a.p+"static/media/jumper.f547a088.svg",f=a.p+"static/media/bananas.4a3842e0.png",C=a.p+"static/media/clouds.d6e7f452.png",N=a.p+"static/media/cosmos.87e86044.png",v=a.p+"static/media/ducks.f1c8a986.png",k=a.p+"static/media/paisley.a99fa9b5.jpg",T=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(j.a)(this,a),(n=t.call(this,e)).state={info:e.info,team1Name:e.team1Name,team2Name:e.team2Name,amountPlayers:e.amountPlayers,team1Kit:e.team1Kit,team2Kit:e.team2Kit,team1Design:e.team1Design,team2Design:e.team2Design,team1Banner:e.team1Banner,team2Banner:e.team2Banner},n.handleChangePlayers=n.handleChangePlayers.bind(Object(o.a)(n)),n.handleChangeTeam1=n.handleChangeTeam1.bind(Object(o.a)(n)),n.handleChangeTeam2=n.handleChangeTeam2.bind(Object(o.a)(n)),n.handleClickTeam1Kit=n.handleClickTeam1Kit.bind(Object(o.a)(n)),n.handleClickTeam2Kit=n.handleClickTeam2Kit.bind(Object(o.a)(n)),n.handleClickTeam1Design=n.handleClickTeam1Design.bind(Object(o.a)(n)),n.handleClickTeam2Design=n.handleClickTeam2Design.bind(Object(o.a)(n)),n.handleChangeTeam1Banner=n.handleChangeTeam1Banner.bind(Object(o.a)(n)),n.handleChangeTeam2Banner=n.handleChangeTeam2Banner.bind(Object(o.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(o.a)(n)),n}return Object(d.a)(a,[{key:"handleChangePlayers",value:function(e){this.setState({amountPlayers:+e.currentTarget.value})}},{key:"handleChangeTeam1",value:function(e){this.setState({team1Name:e.currentTarget.value})}},{key:"handleChangeTeam2",value:function(e){this.setState({team2Name:e.currentTarget.value})}},{key:"handleClickTeam1Kit",value:function(e){e.preventDefault(),this.setState({team1Kit:e.currentTarget.firstElementChild.src})}},{key:"handleClickTeam2Kit",value:function(e){e.preventDefault(),this.setState({team2Kit:e.currentTarget.firstElementChild.src})}},{key:"handleClickTeam1Design",value:function(e){e.preventDefault(),this.setState({team1Design:e.currentTarget.firstElementChild.src})}},{key:"handleClickTeam2Design",value:function(e){e.preventDefault(),this.setState({team2Design:e.currentTarget.firstElementChild.src})}},{key:"handleChangeTeam1Banner",value:function(e){this.setState({team1Banner:e.currentTarget.value})}},{key:"handleChangeTeam2Banner",value:function(e){this.setState({team2Banner:e.currentTarget.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.settingsCompleted(Object(h.a)({},this.state))}},{key:"render",value:function(){var e=this.state,t=e.team1Name,a=e.team2Name,s=e.amountPlayers,r=e.team1Kit,c=e.team2Kit,i=e.team1Design,l=e.team2Design,m=e.team1Banner,h=e.team2Banner;return Object(n.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(n.jsx)("div",{className:"quantityParent",children:Object(n.jsxs)("section",{className:"playerQuantityInput",children:[Object(n.jsx)("label",{htmlFor:"players",children:"How many on each team? (3-11)"}),Object(n.jsx)("input",{type:"number",id:"players",name:"players",min:"3",max:"11",onChange:this.handleChangePlayers,value:s})]})}),Object(n.jsxs)("div",{className:"sectionsParent",children:[Object(n.jsx)("section",{className:"player1",children:Object(n.jsxs)("div",{className:"teamNameInput",children:[Object(n.jsx)("label",{htmlFor:"team1",children:"Team 1 Name"}),Object(n.jsx)("input",{type:"text",id:"team1",onChange:this.handleChangeTeam1,value:t}),Object(n.jsx)("h3",{children:t}),Object(n.jsx)("div",{className:"chosenStyleParent",children:Object(n.jsx)("div",{className:"chosenStyle",style:{backgroundImage:"url(".concat(i,")")},children:Object(n.jsx)("img",{src:r,alt:"Chosen football kit"})})}),Object(n.jsxs)("div",{class:"teamKits",children:[Object(n.jsx)("a",{href:"/",onClick:this.handleClickTeam1Kit,className:"tshirt",children:Object(n.jsx)("img",{src:O,alt:"Tshirt"})}),Object(n.jsx)("a",{href:"/",onClick:this.handleClickTeam1Kit,className:"vest",children:Object(n.jsx)("img",{src:p,alt:"Vest",style:{color:"green"}})}),Object(n.jsx)("a",{href:"/",onClick:this.handleClickTeam1Kit,className:"heartShirt",children:Object(n.jsx)("img",{src:y,alt:"Shirt with heart on"})}),Object(n.jsx)("a",{href:"/",onClick:this.handleClickTeam1Kit,className:"collaredShirt",children:Object(n.jsx)("img",{src:g,alt:"Collared shirt"})}),Object(n.jsx)("a",{href:"/",onClick:this.handleClickTeam1Kit,className:"jumper",children:Object(n.jsx)("img",{src:x,alt:"Jumper"})})]}),Object(n.jsxs)("div",{className:"teamDesigns",children:[Object(n.jsx)("a",{href:"/",onClick:this.handleClickTeam1Design,className:"bananas",children:Object(n.jsx)("img",{src:f,alt:"Banana pattern"})}),Object(n.jsx)("a",{href:"/",onClick:this.handleClickTeam1Design,className:"clouds",children:Object(n.jsx)("img",{src:C,alt:"Swirly cloud pattern"})}),Object(n.jsx)("a",{href:"/",onClick:this.handleClickTeam1Design,className:"cosmos",children:Object(n.jsx)("img",{src:N,alt:"Cosmos landscape pattern"})}),Object(n.jsx)("a",{href:"/",onClick:this.handleClickTeam1Design,className:"ducks",children:Object(n.jsx)("img",{src:v,alt:"Duck pattern"})}),Object(n.jsx)("a",{href:"/",onClick:this.handleClickTeam1Design,className:"paisley",children:Object(n.jsx)("img",{src:k,alt:"Paisley pattern"})})]}),Object(n.jsxs)("div",{className:"teamBannerInput",children:[Object(n.jsx)("label",{htmlFor:"team1Banner",children:"Team 1 Banner Message"}),Object(n.jsx)("input",{type:"text",maxLength:"35",id:"team1Banner",onChange:this.handleChangeTeam1Banner,value:m})]})]})}),Object(n.jsx)("section",{className:"player2",children:Object(n.jsxs)("div",{className:"teamNameInput",children:[Object(n.jsx)("label",{htmlFor:"team2",children:"Team 2 Name"}),Object(n.jsx)("input",{type:"text",id:"team1",onChange:this.handleChangeTeam2,value:a}),Object(n.jsx)("h3",{children:a}),Object(n.jsx)("div",{className:"chosenStyleParent",children:Object(n.jsx)("div",{className:"chosenStyle",style:{backgroundImage:"url(".concat(l,")"),backgroundSize:"cover"},children:Object(n.jsx)("img",{src:c,alt:"Chosen football kit"})})}),Object(n.jsxs)("div",{class:"teamKits",children:[Object(n.jsx)("a",{href:"/",onClick:this.handleClickTeam2Kit,className:"tshirt",children:Object(n.jsx)("img",{src:O,alt:"Tshirt"})}),Object(n.jsx)("a",{href:"/",onClick:this.handleClickTeam2Kit,className:"vest",children:Object(n.jsx)("img",{src:p,alt:"Vest"})}),Object(n.jsx)("a",{href:"/",onClick:this.handleClickTeam2Kit,className:"heartShirt",children:Object(n.jsx)("img",{src:y,alt:"Shirt with heart on"})}),Object(n.jsx)("a",{href:"/",onClick:this.handleClickTeam2Kit,className:"collaredShirt",children:Object(n.jsx)("img",{src:g,alt:"Collared shirt"})}),Object(n.jsx)("a",{href:"/",onClick:this.handleClickTeam2Kit,className:"jumper",children:Object(n.jsx)("img",{src:x,alt:"Jumper"})})]}),Object(n.jsxs)("div",{className:"teamDesigns",children:[Object(n.jsx)("a",{href:"/",onClick:this.handleClickTeam2Design,className:"bananas",children:Object(n.jsx)("img",{src:f,alt:"Banana pattern"})}),Object(n.jsx)("a",{href:"/",onClick:this.handleClickTeam2Design,className:"clouds",children:Object(n.jsx)("img",{src:C,alt:"Cloud pattern"})}),Object(n.jsx)("a",{href:"/",onClick:this.handleClickTeam2Design,className:"cosmos",children:Object(n.jsx)("img",{src:N,alt:"Cosmos landscape pattern"})}),Object(n.jsx)("a",{href:"/",onClick:this.handleClickTeam2Design,className:"ducks",children:Object(n.jsx)("img",{src:v,alt:"Duck pattern"})}),Object(n.jsx)("a",{href:"/",onClick:this.handleClickTeam2Design,className:"paisley",children:Object(n.jsx)("img",{src:k,alt:"Paisley pattern"})})]}),Object(n.jsxs)("div",{className:"teamBannerInput",children:[Object(n.jsx)("label",{htmlFor:"teamBanner",children:"Team 2 Banner Message"}),Object(n.jsx)("input",{type:"text",maxLength:"35",id:"team2Banner",onChange:this.handleChangeTeam2Banner,value:h})]})]})})]}),Object(n.jsx)("div",{className:"buttonParent",children:Object(n.jsx)("button",{className:"btn",type:"submit",children:"Save Settings"})})]})}}]),a}(s.Component),S=Object(l.b)((function(e){return{info:e.info,team1Name:e.team1Name,team2Name:e.team2Name,amountPlayers:e.amountPlayers,team1Kit:e.team1Kit,team2Kit:e.team2Kit,team1Design:e.team1Design,team2Design:e.team2Design,team1Banner:e.team1Banner,team2Banner:e.team2Banner}}),(function(e){return{settingsCompleted:function(t){return e(function(e){return{type:"SETTINGS_COMPLETED",data:e}}(t))}}}))(T),D=function(){return Object(n.jsxs)("div",{className:"sidebarSettingsAndAbout",children:[Object(n.jsxs)("div",{className:"sidebarWelcome",children:[Object(n.jsx)("h6",{children:"Welcome!"}),Object(n.jsx)("p",{children:"Best Foot Forward allows you to create, customise and coordinate your own football teams, all while feeling a bit like you are floating in the serene backwaters of space."})]}),Object(n.jsxs)("div",{className:"sidebarSettings",children:[Object(n.jsx)("h6",{children:"Guidance"}),Object(n.jsx)("p",{children:"Begin by choosing the number of players you would like on each team. You can then proceed to innovating your very own team name. Then, step into the sports boutique to try on different combinations of team kits and designs. Do this by clicking the clothing and pattern icons to mix and match. Next, think up a banner message to be held by the team's supporters during the match. Do the same for the second team and then click 'Save Settings'."})]}),Object(n.jsxs)("div",{className:"sidebarAbout",children:[Object(n.jsx)("h6",{children:"About"}),Object(n.jsxs)("p",{children:["This app is the fruit of an assigned technical challenge as part of Develop Me's Coding Fellowship Bootcamp. You are very welcome to check out the code",Object(n.jsx)("a",{href:"https://github.com/vixhez/best-foot-forward",target:"_blank",rel:"noreferrer",children:" here"}),"."]})]})]})},P=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(j.a)(this,a),(n=t.call(this,e)).state={players:e.players,playerComplete:e.playerComplete},n.handleChangePlayerName=n.handleChangePlayerName.bind(Object(o.a)(n)),n.handleChangePlayerSkills=n.handleChangePlayerSkills.bind(Object(o.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(o.a)(n)),n}return Object(d.a)(a,[{key:"handleChangePlayerName",value:function(e){var t=e.currentTarget.value;this.setState({players:Object(h.a)(Object(h.a)({},this.state.players),{},{playerName:t})})}},{key:"handleChangePlayerSkills",value:function(e){var t=+e.currentTarget.value;this.setState({players:Object(h.a)(Object(h.a)({},this.state.players),{},{playerSkills:t})})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({playerComplete:!0}),this.props.playerAdded(Object(h.a)({},this.state))}},{key:"render",value:function(){var e=this.state,t=e.players;return e.playerComplete?Object(n.jsxs)("p",{children:[t.playerName," added!"]}):Object(n.jsx)("div",{id:this.props.id,children:Object(n.jsx)("form",{onSubmit:this.handleSubmit,children:Object(n.jsxs)("div",{className:"playerFormParent",children:[Object(n.jsx)("label",{htmlFor:"playerName",children:"Player Name"}),Object(n.jsx)("input",{type:"text",id:this.props.id,onChange:this.handleChangePlayerName,value:t.playerName}),Object(n.jsx)("label",{htmlFor:"playerSkills",children:"Skill Level"}),Object(n.jsx)("input",{className:"skillSlider",type:"range",min:"0",max:"10",value:+t.playerSkills,id:this.props.id,onChange:this.handleChangePlayerSkills}),Object(n.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Confirm Player"})]})})})}}]),a}(s.Component),B=Object(l.b)((function(e){return{players:e.players,playersArray:e.playersArray,playerComplete:e.playerComplete}}),(function(e){return{playerAdded:function(t){return e(function(e){return{type:"PLAYER_ADDED",data:e}}(t))}}}))(P),K=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(j.a)(this,a),(n=t.call(this,e)).state={amountPlayers:e.amountPlayers},n}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state.amountPlayers;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("ul",{children:Object(n.jsx)("li",{children:function(){for(var t=[],a=1;a<=2*e;a++)t.push(Object(n.jsx)(B,{id:a},a));return t}()})})})}}]),a}(s.Component),A=Object(l.b)((function(e){return{players:e.players,amountPlayers:e.amountPlayers}}),(function(e){return{playerDetailsCompleted:function(t){return e(function(e){return{type:"PLAYER_DETAILS_COMPLETED",data:e}}(t))}}}))(K),w=function(e){var t=e.playersArray;e.players;return t.map((function(e,t){return Object(n.jsx)("div",{className:"playerListParent",children:Object(n.jsx)("ul",{className:"playerListUl",children:Object(n.jsxs)("li",{className:"playerListLi",children:[Object(n.jsx)("span",{children:"Player:"})," ",e.playerName,Object(n.jsx)("span",{children:", skill level:"})," ",e.playerSkills]},t)})})}))},E=Object(l.b)((function(e){return{playersArray:e.playersArray,players:e.players}}))(w),_=function(e){e.teamsCreated;return Object(n.jsx)("p",{className:"playerFormWarn",children:"The game cannot begin until you press 'Confirm Player' on all players!"})},L=Object(l.b)((function(e){return{teamsCreated:e.teamsCreated}}))(_),R=function(e){var t=e.playersReset;return Object(n.jsx)("button",{onClick:t,className:"btn resetButton",children:"Restart"})},F=Object(l.b)(null,(function(e){return{playersReset:function(){return e({type:"PLAYERS_RESET"})}}}))(R),I=function(e){var t=e.sortRandomly;return Object(n.jsx)("button",{onClick:t,class:"btn randomButton",children:"Sort Players Randomly"})},M=Object(l.b)(null,(function(e){return{sortRandomly:function(){return e({type:"SORT_RANDOMLY"})}}}))(I),Y=function(e){var t=e.sortBySkills;return Object(n.jsx)("button",{onClick:t,class:"btn skillButton",children:"Sort Players By Skill"})},G=Object(l.b)(null,(function(e){return{sortBySkills:function(){return e({type:"SORT_BY_SKILLS"})}}}))(Y),H=function(){return Object(n.jsxs)("div",{className:"sidebarPlayersInstructions",children:[Object(n.jsxs)("div",{className:"sidebarSettings",children:[Object(n.jsx)("h6",{children:"Guidance"}),Object(n.jsx)("p",{children:"Great designing! Now it's time to tell the app your player's names and skill levels. The number of player fields on your left is based on how many people you told us would be on each team. Fill out each field and then press 'Confirm Player'. You then have the choice to sort your teams randomly or, for fairer teams, based on their skills levels. If it's all gone horribly wrong, just press restart!"})]}),Object(n.jsxs)("div",{className:"sidebarAbout",children:[Object(n.jsx)("h6",{children:"About"}),Object(n.jsxs)("p",{children:["This app is the fruit of an assigned technical challenge as part of Develop Me's Coding Fellowship Bootcamp. You are very welcome to check out the code",Object(n.jsx)("a",{href:"https://github.com/vixhez/best-foot-forward",target:"_blank",rel:"noreferrer",children:" here"}),"."]})]})]})},J=function(e){var t=e.teamName;return Object(n.jsx)("h2",{className:"teamHeader",children:t})},z=Object(l.b)((function(e){return{teamName:e.team1Name}}))(J),U=function(e){e.teamName;var t=e.team;return t.map((function(e,a){return Object(n.jsx)("div",{children:Object(n.jsx)("ul",{children:Object(n.jsx)("li",{children:t[a]},a)})})}))},V=Object(l.b)((function(e){return{team:e.team1}}))(U),W=Object(l.b)((function(e){return{teamName:e.team2Name}}))(J),q=Object(l.b)((function(e){return{team:e.team2}}))(U),X=function(e){var t=e.startMatch;return Object(n.jsx)("button",{onClick:t,class:"btn startMatch",children:"Start Match!"})},Q=Object(l.b)(null,(function(e){return{startMatch:function(){return e({type:"START_MATCH"})}}}))(X),Z=function(e){var t=e.backOneStep;return Object(n.jsx)("button",{onClick:t,className:"btn backOneButton",children:"Back"})},$=Object(l.b)(null,(function(e){return{backOneStep:function(){return e({type:"BACK_ONE_STEP"})}}}))(Z),ee=function(e){var t=e.team,a=e.teamKit,s=e.teamDesign;return t.map((function(e,r){return Object(n.jsx)("div",{className:"matchTeams",children:Object(n.jsx)("ul",{children:Object(n.jsxs)("li",{class:r,children:[Object(n.jsx)("div",{className:"matchDesigns",style:{backgroundImage:"url(".concat(s,")")},children:Object(n.jsx)("img",{className:"matchKits",src:"".concat(a),alt:"Players with chosen kit"})}),t[r]]},r)})})}))},te=Object(l.b)((function(e){return{team:e.team1,teamKit:e.team1Kit,teamDesign:e.team1Design}}))(ee),ae=Object(l.b)((function(e){return{team:e.team2,teamKit:e.team2Kit,teamDesign:e.team2Design}}))(ee),ne=a.p+"static/media/team1Crowd.1515069e.png",se=a.p+"static/media/team2Crowd.7dda7c7f.png",re=function(e){e.team1Kit,e.team2Kit;var t=e.team1Design,a=e.team2Design,s=e.team1Banner,r=e.team2Banner,c=e.team1Name,i=e.team2Name;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"headerParent",children:Object(n.jsxs)("h2",{children:[c," ",Object(n.jsx)("span",{children:"vs"})," ",i]})}),Object(n.jsxs)("div",{className:"matchParent",children:[Object(n.jsx)("div",{className:"matchTeam1Parent",children:Object(n.jsxs)("div",{className:"team1Crowd",style:{backgroundImage:"url(".concat(t,")")},children:[Object(n.jsx)("div",{className:"team1CrowdImage",children:Object(n.jsx)("img",{src:ne,alt:"Cartoon crowd"})}),Object(n.jsx)("p",{className:"teamBanner",children:s})]})}),Object(n.jsxs)("div",{className:"teamsOnPitch",children:[Object(n.jsxs)("div",{className:"team1OnPitch",children:[" ",Object(n.jsx)(te,{})]}),Object(n.jsx)("div",{className:"team2OnPitch",children:Object(n.jsx)(ae,{})})]}),Object(n.jsx)("div",{className:"matchTeam2Parent",children:Object(n.jsxs)("div",{className:"team2Crowd",style:{backgroundImage:"url(".concat(a,")")},children:[Object(n.jsx)("div",{className:"team2CrowdImage",children:Object(n.jsx)("img",{src:se,alt:"Cartoon crowd"})}),Object(n.jsx)("p",{className:"teamBanner",children:r})]})})]})]})},ce=Object(l.b)((function(e){return{team1Kit:e.team1Kit,team2Kit:e.team2Kit,team1Design:e.team1Design,team2Design:e.team2Design,team1Banner:e.team1Banner,team2Banner:e.team2Banner,team1Name:e.team1Name,team2Name:e.team2Name}}))(re),ie=function(e){var t=e.info,a=e.teamsCreated,s=e.playersCreated;return t?Object(n.jsx)("div",{children:a?s?Object(n.jsxs)("div",{className:"match",children:[Object(n.jsx)(m,{}),Object(n.jsx)(ce,{}),Object(n.jsx)("div",{className:"matchResetButton",children:Object(n.jsx)(F,{})})]}):Object(n.jsxs)("div",{className:"playerConfirm",children:[Object(n.jsx)(m,{}),Object(n.jsxs)("div",{className:"teamsParent",children:[Object(n.jsxs)("div",{className:"team1Parent",children:[Object(n.jsx)(z,{}),Object(n.jsx)(V,{})]}),Object(n.jsxs)("div",{className:"team2Parent",children:[Object(n.jsx)(W,{}),Object(n.jsx)(q,{})]})]}),Object(n.jsxs)("div",{className:"buttons",children:[Object(n.jsx)("div",{className:"playButtonParent",children:Object(n.jsx)(Q,{})}),Object(n.jsxs)("div",{className:"backResetButtonParent",children:[Object(n.jsx)($,{}),Object(n.jsx)(F,{})]})]})]}):Object(n.jsxs)("div",{className:"playerForm",children:[Object(n.jsxs)("main",{children:[Object(n.jsx)(m,{}),Object(n.jsx)(A,{}),Object(n.jsx)(L,{}),Object(n.jsxs)("div",{className:"randomSkillButtonsParent",children:[Object(n.jsx)(M,{}),Object(n.jsx)(G,{})]}),Object(n.jsx)("div",{className:"resetButtonParent",children:Object(n.jsx)(F,{})})]}),Object(n.jsxs)("aside",{children:[Object(n.jsx)(E,{}),Object(n.jsx)(H,{})]})]})}):Object(n.jsxs)("div",{className:"landingPage",children:[Object(n.jsxs)("main",{children:[Object(n.jsx)(m,{}),Object(n.jsx)(S,{})]}),Object(n.jsx)("aside",{children:Object(n.jsx)(D,{})})]})},le=Object(l.b)((function(e){return{info:e.info,teamsCreated:e.teamsCreated,playersCreated:e.playersCreated}}))(ie),me=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,29)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),r(e),c(e)}))},he=a(9),je={players:{playerName:"",playerSkills:5},playersArray:[],amountPlayers:3,team1Name:"Team Uno",team2Name:"Team Dos",team1Kit:"",team2Kit:"",team1Design:"",team2Design:"",team1Banner:"",team2Banner:"",team1:"",team2:"",info:!1,playerComplete:!1,teamsCreated:!1,playersCreated:!1},de=function(e){return e.playersArray.length<2*e.amountPlayers?Object(h.a)(Object(h.a)({},e),{},{teamsCreated:!1}):e},oe=function(e,t){switch(t.type){case"SETTINGS_COMPLETED":return function(e,t){return Object(h.a)(Object(h.a)({},e),{},{info:!0,team1Name:t.data.team1Name,team2Name:t.data.team2Name,amountPlayers:t.data.amountPlayers,team1Kit:t.data.team1Kit,team2Kit:t.data.team2Kit,team1Design:t.data.team1Design,team2Design:t.data.team2Design,team1Banner:t.data.team1Banner,team2Banner:t.data.team2Banner})}(e,t);case"PLAYERS_RESET":return Object(h.a)(Object(h.a)({},je),{},{team1Name:e.team1Name,team2Name:e.team2Name,amountPlayers:e.amountPlayers,team1Kit:e.team1Kit,team2Kit:e.team2Kit,team1Design:e.team1Design,team2Design:e.team2Design,team1Banner:e.team1Banner,team2Banner:e.team2Banner});case"PLAYER_ADDED":return function(e,t){return Object(h.a)(Object(h.a)({},e),{},{players:{playerName:t.data.players.playerName,playerSkills:t.data.players.playerSkills},playersArray:e.playersArray.concat(t.data.players)})}(e,t);case"SORT_RANDOMLY":return de(function(e){var t=e.playersArray.length/2,a=[];e.playersArray.sort((function(e,t){return.5-Math.random()})),e.playersArray.map((function(e){return a.push(e.playerName)}));var n=a.splice(0,t),s=a;return Object(h.a)(Object(h.a)({},e),{},{team1:n,team2:s,teamsCreated:!0})}(e));case"SORT_BY_SKILLS":return de(function(e){var t=[],a=[],n=e.playersArray.length/2,s=0;e.playersArray.map((function(e){return e.playerSkills>6?t.push(e.playerName):a.push(e.playerName)}));for(var r=Math.ceil(e.playersArray.length/a.length),c=0;c<=a.length-1;c++){var i=a[c];t.splice(s,0,i),s+=r}var l=t.splice(0,n),m=t;return Object(h.a)(Object(h.a)({},e),{},{team1:l,team2:m,teamsCreated:!0})}(e));case"START_MATCH":return function(e){return Object(h.a)(Object(h.a)({},e),{},{playersCreated:!0})}(e);case"BACK_ONE_STEP":return Object(h.a)(Object(h.a)({},je),{},{team1Name:e.team1Name,team2Name:e.team2Name,amountPlayers:e.amountPlayers,team1Kit:e.team1Kit,team2Kit:e.team2Kit,team1Design:e.team1Design,team2Design:e.team2Design,team1Banner:e.team1Banner,team2Banner:e.team2Banner,info:!0});default:return e}},be=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||he.c,ue=Object(he.d)(oe,je,be(Object(he.a)()));i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(l.a,{store:ue,children:Object(n.jsx)(le,{})})}),document.getElementById("root")),me()}},[[28,1,2]]]);
//# sourceMappingURL=main.ea5ce01f.chunk.js.map