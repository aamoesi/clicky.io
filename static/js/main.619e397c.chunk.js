(this.webpackJsonpclickgame=this.webpackJsonpclickgame||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"Buzz","image":"./assets/images/buzz.jpeg","clicked":false},{"id":2,"name":"Woody","image":"./assets/images/woody.jpeg","clicked":false},{"id":3,"name":"Bo","image":"./assets/images/bo.jpg","clicked":false},{"id":4,"name":"Hamm","image":"./assets/images/hamm.jpg","clicked":false},{"id":5,"name":"Slinky","image":"./assets/images/slinky.jpg","clicked":false},{"id":6,"name":"Potato Head","image":"./assets/images/mrpotatohead.jpg","clicked":false},{"id":7,"name":"Sarge","image":"./assets/images/sarge.jpg","clicked":false},{"id":8,"name":"Andy","image":"./assets/images/andy.jpg","clicked":false},{"id":9,"name":"Sid","image":"./assets/images/sid.png","clicked":false},{"id":10,"name":"Shark","image":"./assets/images/shark.jpg","clicked":false},{"id":11,"name":"Mrs. Potato Head","image":"./assets/images/mrspotatohead.jpg","clicked":false},{"id":12,"name":"Rex","image":"./assets/images/rex.jpeg","clicked":false}]')},,,function(e,a,t){e.exports=t(20)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),i=t(2),c=t.n(i),m=(t(14),t(3)),r=t(4),l=t(7),o=t(5),d=t(8),g=(t(15),function(e){return n.a.createElement("div",{className:"card col-md-3",onClick:function(){return e.setClicked(e.id)}},n.a.createElement("div",{className:"img-container text-center"},n.a.createElement("img",{className:"img img-thumbnail",alt:e.name,src:e.image})))}),u=(t(16),function(e){return n.a.createElement("div",{className:"wrapper"},e.children)}),f=(t(17),function(e){return n.a.createElement("nav",{className:"navbar navbar-fixed-top col-md-12"},e.children)}),h=(t(18),function(e){return n.a.createElement("header",{className:"header col-md-12"},e.children)}),p=t(6),k=(t(19),0),S=0,y="Click an image to begin!",E=function(e){function a(){var e,t;Object(m.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(t=Object(l.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(n)))).state={matches:p,score:k,topScore:S,message:y},t.setClicked=function(e){var a=t.state.matches,s=a.filter((function(a){return a.id===e}));if(s[0].clicked){k=0,y="Someone's poisoned the water hole!";for(var n=0;n<a.length;n++)a[n].clicked=!1;t.setState({message:y}),t.setState({score:k}),t.setState({matches:a})}else if(k<11)s[0].clicked=!0,k++,y="To infinity, and beyond!",k>S&&(S=k,t.setState({topScore:S})),a.sort((function(e,a){return.5-Math.random()})),t.setState({matches:a}),t.setState({score:k}),t.setState({message:y});else{s[0].clicked=!0,k=0,y="You're my favorite deputy! You Win!",S=12,t.setState({topScore:S});for(var i=0;i<a.length;i++)a[i].clicked=!1;a.sort((function(e,a){return.5-Math.random()})),t.setState({matches:a}),t.setState({score:k}),t.setState({message:y})}},t}return Object(d.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement(u,null,n.a.createElement(f,null,n.a.createElement("ul",null,n.a.createElement("li",null,"ClickyGame"),n.a.createElement("li",null,this.state.message),n.a.createElement("li",{className:"scoreSummary"},"Correct Guesses: ",this.state.score," | Best Score: ",this.state.topScore))),n.a.createElement(h,null,n.a.createElement("img",{className:"logo",src:"../assets/images/logo.png",alt:"Toy Story Logo"}),n.a.createElement("h3",{className:"headerText"},"Win the game by clicking each picture only once!")),this.state.matches.map((function(a){return n.a.createElement(g,{setClicked:e.setClicked,id:a.id,key:a.id,name:a.name,image:a.image})})))}}]),a}(s.Component);c.a.render(n.a.createElement(E,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.619e397c.chunk.js.map