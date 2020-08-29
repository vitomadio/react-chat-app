(this["webpackJsonpreact-chat-app"]=this["webpackJsonpreact-chat-app"]||[]).push([[0],{124:function(e,t,a){e.exports=a(150)},129:function(e,t,a){},150:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),i=a.n(c),s=a(55),o=(a(129),a(15)),u=a(61),l=a(10),d="GET_ALL_USERS",p="GET_CURRENT_USER",m="GET_USERS_WITH_CHATS",h="SET_USERS_WITH_CHATS",f="GET_CHAT_MESSAGES",v="RESET_CHAT_MESSAGES",b="ON_DELETE_MESSAGE",g="ON_DELETE_CHAT",E="GET_USER_CHATS",C="ON_CURRENT_CHAT_USER",y=function(e,t){switch(t.type){case h:return Object(l.a)(Object(l.a)({},e),{},{usersWithChats:[t.payload].concat(Object(u.a)(e.usersWithChats.filter((function(e){return e.uid!==t.payload.uid}))))});case C:return Object(l.a)(Object(l.a)({},e),{},{usersWithChats:e.usersWithChats.filter((function(e){return e.uid!==t.payload}))});case f:return Object(l.a)(Object(l.a)({},e),{},{messages:[].concat(Object(u.a)(e.messages.filter((function(e){return e.chatId!==t.payload.chatId}))),[t.payload])});case E:return Object(l.a)(Object(l.a)({},e),{},{userChats:[].concat(Object(u.a)(e.userChats.filter((function(e){return e.uid!==t.payload.uid}))),[t.payload])});case v:return Object(l.a)(Object(l.a)({},e),{},{messages:[]});case b:return Object(l.a)(Object(l.a)({},e),{},{messages:e.messages.filter((function(e){return e.chatId!==t.payload}))});case g:return Object(l.a)(Object(l.a)({},e),{},{messages:e.usersWithChats.uid===t.payload?[]:e.messages});default:return e}},j=a(8),O=a.n(j),w=a(13),x=a(103),U=a(104),k=a(62),S=a.n(k),I=a(105),N=a.n(I),W=(a(140),a(141),a(142),a(143),{apiKey:"AIzaSyBYn18FTAPHBgMWeAWb8nGleAZbh6wGYTw",authDomain:"chatroomreact-4ee9b.firebaseapp.com",databaseURL:"https://chatroomreact-4ee9b.firebaseio.com",projectId:"chatroomreact-4ee9b",storageBucket:"chatroomreact-4ee9b.appspot.com",messagingSenderId:"813914403482",appId:"1:813914403482:web:1caeaaa7d33b93321f2523"}),R=new(function(){function e(){var t=this;Object(x.a)(this,e),this.auth=void 0,this.db=void 0,this.rtdb=void 0,this.storage=void 0,this.login=function(){var e=Object(w.a)(O.a.mark((function e(a,n){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.auth.signInWithEmailAndPassword(a,n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),this.logout=function(){t.auth.signOut()},this.register=function(){var e=Object(w.a)(O.a.mark((function e(a,n,r){var c,i,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.auth.createUserWithEmailAndPassword(n,r);case 3:return i=e.sent,s=i.user,e.next=7,null===(c=t.auth.currentUser)||void 0===c?void 0:c.updateProfile({displayName:a});case 7:return e.next=9,t.db.collection("Users").doc("".concat(null===s||void 0===s?void 0:s.uid)).set({displayName:null===s||void 0===s?void 0:s.displayName,email:null===s||void 0===s?void 0:s.email,photoURL:null===s||void 0===s?void 0:s.photoURL,emailVerified:null===s||void 0===s?void 0:s.emailVerified,uid:null===s||void 0===s?void 0:s.uid});case 9:return e.abrupt("return",e.sent);case 12:return e.prev=12,e.t0=e.catch(0),e.abrupt("return",{status:"error",text:e.t0});case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,a,n){return e.apply(this,arguments)}}(),this.updateProfileAvatar=function(e){t.storage.ref().child(e).getDownloadURL().then((function(e){var a;return null===(a=t.auth.currentUser)||void 0===a?void 0:a.updateProfile({photoURL:e})})).catch((function(e){throw e}))},this.updateUserProfile=function(){var e=Object(w.a)(O.a.mark((function e(a,n){var r,c,i,s,o;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n&&(null===(r=t.auth.currentUser)||void 0===r||r.updateProfile({displayName:n})),!a){e.next=10;break}return c=t.storage.ref(),i=c.child("images/".concat(null===a||void 0===a?void 0:a.name)),e.next=7,i.put(a);case 7:s=e.sent,o=s.metadata,t.updateProfileAvatar(o.fullPath);case 10:return e.abrupt("return",{status:"success",text:"Your profile has been updated"});case 13:return e.prev=13,e.t0=e.catch(0),e.abrupt("return",{status:"error",text:e.t0});case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t,a){return e.apply(this,arguments)}}(),this.getCurrentUser=function(){var e=t.auth.currentUser;return null!=e?{displayName:e.displayName,email:e.email,photoURL:e.photoURL,emailVerified:e.emailVerified,uid:e.uid}:null},this.getUsers=Object(w.a)(O.a.mark((function e(){var a,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.db.collection("Users").get();case 2:return a=e.sent,n=[],a.forEach((function(e){n.push(Object(l.a)(Object(l.a)({},e.data()),{},{uid:e.id}))})),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)}))),this.getChatUsers=function(e,a){try{t.rtdb.ref("users-chats/".concat(e)).on("child_added",(function(e){a({type:m,payload:e.key})}))}catch(n){throw n}},this.getCurrentChatUser=function(e,a){t.rtdb.ref("/current-user-chat/".concat(e)).on("child_changed",(function(e){a({type:h,payload:Object(l.a)(Object(l.a)({},e.val()),{},{uid:e.key})})})),t.rtdb.ref("/current-user-chat/".concat(e)).once("value",(function(e){e.forEach((function(e){a({type:h,payload:Object(l.a)(Object(l.a)({},e.val()),{},{uid:e.key})})}))}))},this.setCurrentChatUser=function(){var e=Object(w.a)(O.a.mark((function e(a,n){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,t.rtdb.ref("/current-user-chat/".concat(a.uid,"/").concat(n.uid)).set(Object(l.a)(Object(l.a)({},n),{},{createdAt:N.a.database.ServerValue.TIMESTAMP})),e.next=7;break;case 4:throw e.prev=4,e.t0=e.catch(0),e.t0;case 7:case"end":return e.stop()}}),e,null,[[0,4]])})));return function(t,a){return e.apply(this,arguments)}}(),this.setChatAsRead=function(){var e=Object(w.a)(O.a.mark((function e(a,n){var r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.rtdb.ref("users-chats/".concat(a,"/").concat(n));case 3:return r=e.sent,e.next=6,r.once("value",(function(e){e.forEach((function(e){t.rtdb.ref("users-chats/".concat(a,"/").concat(n)).child("".concat(e.key)).update({read:!0})}))}));case 6:e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,a){return e.apply(this,arguments)}}(),this.getCurrentChat=function(){var e=Object(w.a)(O.a.mark((function e(a,n,r){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.rtdb.ref("users-chats/".concat(a,"/").concat(n)).on("child_added",(function(e){r({type:f,payload:Object(l.a)(Object(l.a)({},e.val()),{},{chatId:e.key})})}));case 3:return e.next=5,t.rtdb.ref("users-chats/".concat(a,"/").concat(n)).once("value",(function(e){r({type:f,payload:Object(l.a)(Object(l.a)({},e.val()),{},{chatId:e.key})})}));case 5:e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a,n){return e.apply(this,arguments)}}(),this.getUserChats=function(){var e=Object(w.a)(O.a.mark((function e(a,n){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.rtdb.ref("users-chats/".concat(a)).on("child_added",(function(e){e.forEach((function(t){n({type:E,payload:Object(l.a)(Object(l.a)({},t.val()),{},{user:e.key})})}))}));case 3:return e.next=5,t.rtdb.ref("users-chats/".concat(a)).on("child_changed",(function(e){e.forEach((function(t){n({type:E,payload:Object(l.a)(Object(l.a)({},t.val()),{},{user:e.key})})}))}));case 5:e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}(),this.addNewMessageToChat=function(e){try{var a=t.rtdb.ref("users-chats/".concat(e.senderId,"/").concat(e.receiverId,"/")).push().key;a&&(t.rtdb.ref("users-chats/".concat(e.senderId,"/").concat(e.receiverId)).child(a).set(Object(l.a)(Object(l.a)({},e),{},{uid:a,read:!0,user:e.receiverId})),t.rtdb.ref("users-chats/".concat(e.receiverId,"/").concat(e.senderId)).child(a).set(Object(l.a)(Object(l.a)({},e),{},{uid:a,user:e.senderId})))}catch(n){throw n}},this.removeFromUsersWithChats=function(){var e=Object(w.a)(O.a.mark((function e(a,n,r){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.rtdb.ref("current-user-chat/".concat(a,"/").concat(n));case 3:e.sent.remove(),r({type:C,payload:n}),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,a,n){return e.apply(this,arguments)}}(),this.deleteMessage=function(){var e=Object(w.a)(O.a.mark((function e(a,n){var r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="users-chats/".concat(a.senderId,"/").concat(a.receiverId,"/").concat(a.chatId),"receiver"===n&&(r="users-chats/".concat(a.receiverId,"/").concat(a.senderId,"/").concat(a.chatId)),e.prev=2,e.next=5,t.rtdb.ref(r);case 5:return e.sent.remove(),e.abrupt("return",a.chatId);case 10:throw e.prev=10,e.t0=e.catch(2),e.t0;case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t,a){return e.apply(this,arguments)}}(),this.deleteChat=function(){var e=Object(w.a)(O.a.mark((function e(a,n,r){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.rtdb.ref("users-chats/".concat(a.uid,"/").concat(n.uid));case 3:e.sent.remove(),r({type:g,payload:n.uid}),t.removeFromUsersWithChats(a.uid,n.uid,r),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,a,n){return e.apply(this,arguments)}}(),S.a.initializeApp(W),this.auth=S.a.auth(),this.db=S.a.firestore(),this.rtdb=S.a.database(),this.storage=S.a.storage()}return Object(U.a)(e,[{key:"isInitialized",value:function(){var e=this;return new Promise((function(t){e.auth.onAuthStateChanged(t)}))}}]),e}()),A=function(){var e=Object(w.a)(O.a.mark((function e(t,a){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",R.setCurrentChatUser(t,a));case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),T=function(){var e=Object(w.a)(O.a.mark((function e(t,a){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:R.setChatAsRead(t,a);case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),B=function(){var e=Object(w.a)(O.a.mark((function e(t,a){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",R.getCurrentChatUser(t.uid,a));case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),_={setChatUser:A,setChatAsRead:T,resetChatMessages:function(e){e({type:v,payload:null})},getCurrentChat:function(){var e=Object(w.a)(O.a.mark((function e(t,a,n){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:R.getCurrentChat(t,a,n);case 1:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),getUsersWithChats:function(){var e=Object(w.a)(O.a.mark((function e(t,a){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:R.getUserChats(t,a);case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),sendMessage:function(){var e=Object(w.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:R.addNewMessageToChat(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getInitialChatUser:B,removeFromUsersWithChats:function(){var e=Object(w.a)(O.a.mark((function e(t,a,n){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",R.removeFromUsersWithChats(t,a,n));case 1:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),deleteMessage:function(){var e=Object(w.a)(O.a.mark((function e(t,a,n){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=n,e.t1=b,e.next=4,R.deleteMessage(t,a);case 4:e.t2=e.sent,e.t3={type:e.t1,payload:e.t2},(0,e.t0)(e.t3);case 7:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),deleteChat:function(){var e=Object(w.a)(O.a.mark((function e(t,a,n){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",R.deleteChat(t,a,n));case 1:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}()},L=function(e,t){switch(t.type){case d:return Object(l.a)(Object(l.a)({},e),{},{users:t.payload});case p:return Object(l.a)(Object(l.a)({},e),{},{currentUser:t.payload});case m:return Object(l.a)(Object(l.a)({},e),{},{chatUsers:[].concat(Object(u.a)(e.chatUsers),[t.payload])});default:return e}},P={getAllUsers:function(){var e=Object(w.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=t,e.t1=d,e.next=4,R.getUsers();case 4:return e.t2=e.sent,e.t3={type:e.t1,payload:e.t2},e.abrupt("return",(0,e.t0)(e.t3));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getCurrentUser:function(){var e=Object(w.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=t,e.t1=p,e.next=4,R.getCurrentUser();case 4:return e.t2=e.sent,e.t3={type:e.t1,payload:e.t2},e.abrupt("return",(0,e.t0)(e.t3));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getChatUsers:function(e,t){return R.getChatUsers(e,t)}},M={users:[],usersWithChats:[],currentUser:null,messages:[],chatUsers:[],userChats:[]},D=r.a.createContext(M),F=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return function(e,a){return t.reduce((function(e,t){return t(e,a)}),e)}}(L,y);function G(e){var t=r.a.useReducer(F,M),a=Object(o.a)(t,2),n=a[0],c=a[1];return r.a.createElement(D.Provider,{value:{state:n,dispatch:c}},e.children)}var H=a(16),z=a(48),V=a(181),Y=a(182),Z=a(211),q=a(63),K=a(204),J=a(185),$=a(208),X=a(186),Q=a(187),ee=a(188),te=a(111),ae=a.n(te),ne=a(177),re=Object(ne.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function ce(e){var t;return e?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)||(t="Invalid email address"):t="Required",t}function ie(e){var t;return e?/^([a-zA-Z0-9@*#-]{8,15})$/.test(e)||(t="Your pasword must contain at least:\n \n        -1 uppercase letter. \n\n        -1 lowercase letter. \n\n        -1 number. \n\n        -1 special character. \n\n        And must be at leat 8 characters long."):t="Required",t}function se(e){var t;return e||(t="Required"),t}var oe=a(207),ue=function(e){var t=e.status,a=e.text;return r.a.createElement(r.a.Fragment,null,r.a.createElement(oe.a,{severity:t},r.a.createElement("p",null,a)))},le=Object(H.f)((function(e){var t=Object(n.useState)(),a=Object(o.a)(t,2),c=a[0],i=a[1],s=Object(n.useState)(!0),u=Object(o.a)(s,2),l=u[0],d=u[1],p=re(),m=function(){var t=Object(w.a)(O.a.mark((function t(a,n){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!n){t.next=7;break}return t.next=4,R.login(a.email,a.password);case 4:e.history.push("/chat"),t.next=10;break;case 7:return t.next=9,R.register(a.name,a.email,a.password);case 9:e.history.push("/chat");case 10:t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),i({status:"error",text:t.t0.message});case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e,a){return t.apply(this,arguments)}}();return r.a.createElement(V.a,{component:"main",maxWidth:"xs"},r.a.createElement(Y.a,null),r.a.createElement("div",{className:p.paper},r.a.createElement(Z.a,{className:p.avatar},r.a.createElement(ae.a,null)),r.a.createElement(q.a,{component:"h1",variant:"h5"},l?"Sign in":"Sign Up"),c&&r.a.createElement(ue,{status:c.status,text:c.text}),r.a.createElement(z.b,{validateOnBlur:!0,initialValues:{name:"",email:"",password:"",confirm:""},onSubmit:function(e,t){var a=t.setSubmitting;m(e,l),a(!1)}},(function(e){var t=e.values,a=e.errors,n=e.touched,c=e.handleChange,i=e.handleBlur,s=e.handleSubmit,o=e.isSubmitting;return r.a.createElement("form",{onSubmit:s},!l&&r.a.createElement(K.a,{variant:"outlined",margin:"normal",fullWidth:!0,name:"name",label:"Name",id:"name",onChange:c,onBlur:i,value:t.name}),r.a.createElement(z.a,{name:"email",value:t.email,validate:ce,render:function(){return r.a.createElement(K.a,{variant:"outlined",margin:"normal",fullWidth:!0,id:"email",label:"Email Address",type:"email",autoComplete:"email",onChange:c,onBlur:i,name:"email"})}}),a.email&&n.email&&r.a.createElement(ue,{status:"error",text:a.email}),r.a.createElement(z.a,{name:"password",value:t.password,validate:ie,render:function(){return r.a.createElement(K.a,{id:"password",name:"password",variant:"outlined",margin:"normal",fullWidth:!0,autoComplete:"current-password",type:"password",label:"Password",onChange:c,onBlur:i})}}),a.password&&n.password&&r.a.createElement(ue,{status:"error",text:a.password}),!l&&r.a.createElement(r.a.Fragment,null,r.a.createElement(z.a,{name:"confirm",value:t.confirm,validate:function(e){return function(e,t){var a;return t?e&&t&&t!==e&&(a="Password confirmation does not match your password"):a="Required",a}(t.password,e)},render:function(){return r.a.createElement(K.a,{variant:"outlined",margin:"normal",fullWidth:!0,name:"confirm",label:"Confirm password",id:"confirm",type:"password",onChange:c,onBlur:i})}}),n.confirm&&a.confirm&&r.a.createElement(ue,{status:"error",text:a.confirm})),l&&r.a.createElement(J.a,{control:r.a.createElement($.a,{value:"remember",color:"primary"}),label:"Remember me"}),r.a.createElement(X.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:p.submit,disabled:o},l?"Sign In":"Sign Up"),r.a.createElement(Q.a,{container:!0},r.a.createElement(Q.a,{item:!0,xs:!0},r.a.createElement(ee.a,{href:"#",variant:"body2"},"Forgot password?")),r.a.createElement(Q.a,{item:!0},r.a.createElement(ee.a,{href:"#",variant:"body2",onClick:function(){return d(!l)}},l?"Don't have an account? Sign Up":"Already have an account? Sign In"))))}))))})),de=a(152),pe=a(4),me=a(189),he=a(190),fe=a(180),ve=a(194),be=a(191),ge=a(192),Ee=a(193),Ce=a(195),ye=a(196),je=Object(ne.a)((function(e){return{toolbar:{paddingRight:24},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:300,width:"calc(100% - ".concat(300,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flex:1},iconsWrapper:{flex:1,display:"flex",alignItems:"center",justifyContent:"flex-end"}}})),Oe=Object(H.f)((function(e){var t,a,c,i,s,u=je(),l=r.a.useContext(D),d=l.state,p=l.dispatch,m=Object(n.useState)(0),h=Object(o.a)(m,2),f=h[0],v=h[1],b=null===(t=d.currentUser)||void 0===t?void 0:t.uid;Object(n.useEffect)((function(){if(d.userChats.length>0){var e=d.userChats.filter((function(e){return!e.read})).length;v(e)}}),[d.userChats,b]);var g=function(){var t=Object(w.a)(O.a.mark((function t(){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,R.logout();case 2:e.history.replace("/");case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return r.a.createElement(me.a,{position:"absolute",className:Object(pe.a)(u.appBar,e.open&&u.appBarShift)},r.a.createElement(he.a,{className:u.toolbar},r.a.createElement(fe.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:e.handleDrawerOpen,className:Object(pe.a)(u.menuButton,e.open&&u.menuButtonHidden)},r.a.createElement(be.a,null)),r.a.createElement(fe.a,{onClick:e.handleDrawerClose,className:Object(pe.a)(u.menuButton,!e.open&&u.menuButtonHidden)},r.a.createElement(ge.a,null)),r.a.createElement(q.a,{component:"span",variant:"h5",color:"inherit",className:u.title},(null===(a=d.usersWithChats[0])||void 0===a?void 0:a.displayName)||(null===(c=d.usersWithChats[0])||void 0===c?void 0:c.email)),r.a.createElement("div",{className:u.iconsWrapper},r.a.createElement(q.a,{component:"span"},"Hello ".concat((null===(i=d.currentUser)||void 0===i?void 0:i.displayName)||(null===(s=d.currentUser)||void 0===s?void 0:s.email),"!")),r.a.createElement(fe.a,{color:"inherit",onClick:function(){_.resetChatMessages(p),e.history.push("/profile")}},r.a.createElement(Ee.a,{fontSize:"large"})),f>0&&r.a.createElement(fe.a,{color:"inherit"},r.a.createElement(ve.a,{badgeContent:f,color:"secondary"},r.a.createElement(Ce.a,{fontSize:"large"}))),r.a.createElement(fe.a,{color:"inherit",onClick:function(e){e.preventDefault(),g()}},r.a.createElement(ye.a,{fontSize:"large"})))))})),we=a(209),xe=a(212),Ue=a(200),ke=a(184),Se=a(199),Ie=a(197),Ne=a(205),We=a(198),Re=a(112),Ae=a.n(Re),Te=Object(ne.a)((function(e){return{active:{backgroundColor:e.palette.grey[700]},closed:{paddingLeft:"0 !important"},orange:{backgroundColor:"orange"},small:{width:e.spacing(5),height:e.spacing(5)}}})),Be=function(e){var t,a=e.user,c=e.currentUser,i=e.activeChat,s=e.index,u=e.open,l=Te(),d=Object(n.useContext)(D),p=d.state,m=d.dispatch,h=Object(n.useState)(),f=Object(o.a)(h,2),v=f[0],b=f[1];Object(n.useEffect)((function(){if(a){var e=p.userChats.filter((function(e){return e.user===a.uid})).filter((function(e){return!1===e.read})).length;b(e)}}),[p.userChats,c.uid,a]);return r.a.createElement(Ie.a,{key:a.uid,button:!0,onClick:function(e){e.stopPropagation(),p.usersWithChats.length>0&&!p.chatUsers.some((function(e){return e===p.usersWithChats[0].uid}))&&_.removeFromUsersWithChats(c.uid,p.usersWithChats[0].uid,m),_.resetChatMessages(m),_.setChatAsRead(c.uid,a.uid);var t=setTimeout((function(){_.getCurrentChat(c.uid,a.uid,m),_.setChatUser(c,a),clearTimeout(t)}),200)},className:Object(pe.a)(0===s?l.active:"",u?"":l.closed)},r.a.createElement(Ne.a,{mr:2},(null===a||void 0===a?void 0:a.photoURL)?r.a.createElement(fe.a,{color:"inherit"},r.a.createElement(ve.a,{badgeContent:v,color:"secondary"},r.a.createElement(Z.a,{alt:(null===a||void 0===a?void 0:a.displayName)||(null===a||void 0===a?void 0:a.email)||void 0,src:(null===a||void 0===a?void 0:a.photoURL)||void 0,className:l.small}))):r.a.createElement(fe.a,{color:"inherit"},r.a.createElement(ve.a,{badgeContent:v,color:"secondary"},r.a.createElement(Z.a,{className:Object(pe.a)(l.orange,l.small)},null===a||void 0===a||null===(t=a.displayName)||void 0===t?void 0:t.slice(0,2))))),u&&r.a.createElement(r.a.Fragment,null,r.a.createElement(We.a,{primary:a.displayName||a.email}),i&&r.a.createElement(Ae.a,{onClick:function(e){e.stopPropagation(),_.deleteChat(c,a,m),_.resetChatMessages(m)}})))},_e=a(38),Le=a(17),Pe=Object(ne.a)((function(e){return{drawerPaper:{position:"relative",whiteSpace:"nowrap",width:300,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(_e.a)({position:"relative",overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),search:Object(_e.a)({position:"relative",borderRadius:e.shape.borderRadius,marginRight:e.spacing(3),marginTop:e.spacing(2),marginBottom:e.spacing(2),backgroundColor:Object(Le.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(Le.b)(e.palette.common.white,.25)},width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(_e.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),usersList:{padding:0}}}));function Me(e){var t=e.open,a=Pe(),c=r.a.useContext(D),i=c.state,s=c.dispatch,u=Object(n.useState)(""),l=Object(o.a)(u,2),d=l[0],p=l[1];Object(n.useEffect)((function(){P.getAllUsers(s)}),[s]);return r.a.createElement(we.a,{variant:"permanent",classes:{paper:Object(pe.a)(a.drawerPaper,!t&&a.drawerPaperClose)},open:t},r.a.createElement("div",{className:a.search},r.a.createElement("div",{className:a.searchIcon},r.a.createElement(Se.a,null)),r.a.createElement(xe.a,{placeholder:"Search\u2026",classes:{root:a.inputRoot,input:a.inputInput},inputProps:{"aria-label":"search"},onChange:function(e){var t=e.target.value.toLowerCase();p(t)}})),r.a.createElement(Ue.a,null),i.users&&i.currentUser&&r.a.createElement(r.a.Fragment,null,i.usersWithChats.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement(ke.a,{component:"nav","aria-label":"secondary mailbox folders",className:a.usersList},i.usersWithChats.filter((function(e){return e.displayName.toLowerCase().includes(d)})).map((function(e,a){return r.a.createElement(Be,{key:e.uid,user:e,currentUser:i.currentUser,activeChat:!0,index:a,open:t})}))),r.a.createElement(Ue.a,null)),r.a.createElement(ke.a,{component:"nav","aria-label":"secondary mailbox folders",className:a.usersList},i.users.filter((function(e){return e.uid!==i.currentUser.uid&&!i.usersWithChats.some((function(t){return t.uid===e.uid}))})).map((function(e){return r.a.createElement(Be,{key:e.uid,user:e,currentUser:i.currentUser,open:t})})))))}var De=a(183),Fe=Object(ne.a)((function(e){return{chatInput:{padding:e.spacing(2),flex:1},formControl:{display:"flex",flexDirection:"row"},inputField:{flexGrow:1,marginRight:e.spacing(2)},submit:{flex:1,width:60,height:60,maxWidth:60,borderRadius:"50%"}}})),Ge=function(){var e=Object(n.useContext)(D).state,t=Fe(),a=function(t){_.sendMessage({senderId:e.currentUser.uid,receiverId:e.usersWithChats[0].uid,text:t.text,read:!1})};return r.a.createElement(r.a.Fragment,null,r.a.createElement(z.b,{validateOnBlur:!0,initialValues:{text:""},onSubmit:function(e,t){var n=t.resetForm;a(e),n({})}},(function(e){var n=e.handleSubmit,c=e.handleChange,i=e.values,s=e.handleBlur,o=e.resetForm;return r.a.createElement("form",{onSubmit:n},r.a.createElement(De.a,{fullWidth:!0,className:t.formControl},r.a.createElement(z.a,{touched:!0,validate:se,name:"text",render:function(){return r.a.createElement(K.a,{value:i.text||"",name:"text",id:"outlined-basic",label:"Write your message",variant:"outlined",multiline:!0,rowsMax:2,onBlur:s,onChange:c,className:t.inputField,onKeyDown:function(e){"Enter"===e.key&&a(i)},onKeyUp:function(e){"Enter"===e.key&&o({})}})}}),r.a.createElement(X.a,{type:"submit",variant:"contained",color:"secondary",className:t.submit,disabled:""===i.text},"Send")))})))},He=function(e){var t=e.handleDelete;return n.createElement(X.a,{variant:"contained",color:"secondary",fullWidth:!0,onClick:t},"Delete message")},ze=Object(ne.a)((function(e){return{root:{display:"flex",maxHeight:"100vh"},appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{display:"flex",flexDirection:"column",height:"calc(100% - 64px)"},chatContainer:{flexGrow:1,borderBottom:"1px solid ".concat(e.palette.grey[700]),overflowY:"auto"},messageGrid:{cursor:"pointer","&:hover":{backgroundColor:e.palette.grey[800]},padding:e.spacing(1)},receivedMessagePaper:{backgroundColor:"#9fa8da",maxWidth:"60%",padding:e.spacing(1),float:"left"},sentMessagePaper:{backgroundColor:"#7986cb",maxWidth:"60%",padding:e.spacing(1),float:"right"},chatInput:{padding:e.spacing(2),flex:1},formControl:{display:"flex",flexDirection:"row"},inputField:{flexGrow:1,marginRight:e.spacing(2)},submit:{flex:1,width:60,height:60,maxWidth:60,borderRadius:"50%"}}})),Ve=a(210),Ye=Object(ne.a)((function(e){return Object(Ve.a)({paper:{position:"absolute",width:400,padding:e.spacing(2),backgroundColor:e.palette.background.paper,justifyContent:"center",alignItems:"center",top:"50%",left:"50%",transform:"translate(-50%, -50%)",outline:"none"}})})),Ze=a(206),qe=function(e){var t=e.children,a=e.openModal,n=e.handleClose,c=Ye();return r.a.createElement(Ze.a,{open:a,onClose:n,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description"},r.a.createElement("div",{className:c.paper},t))},Ke=function(){var e,t,a=Object(n.useContext)(D),c=a.state,i=a.dispatch,s=ze(),u=Object(n.useState)(!1),l=Object(o.a)(u,2),d=l[0],p=l[1],m=Object(n.useState)(!0),h=Object(o.a)(m,2),f=h[0],v=h[1],b=Object(n.useState)(),g=Object(o.a)(b,2),E=g[0],C=g[1],y=Object(n.useState)(),j=Object(o.a)(y,2),O=j[0],w=j[1],x=c.currentUser||null,U=function(){v(!f)};return Object(n.useEffect)((function(){null==x&&P.getCurrentUser(i)}),[i,x]),Object(n.useEffect)((function(){var e,t;(null===(e=c.currentUser)||void 0===e?void 0:e.uid)&&(_.getInitialChatUser(c.currentUser,i),P.getChatUsers(null===(t=c.currentUser)||void 0===t?void 0:t.uid,i),_.getUsersWithChats(c.currentUser.uid,i))}),[null===x||void 0===x?void 0:x.uid,c.currentUser]),Object(n.useEffect)((function(){c.usersWithChats.length>0&&0===c.messages.length&&(_.getCurrentChat(c.currentUser.uid,c.usersWithChats[0].uid,i),_.setChatAsRead(c.currentUser.uid,c.usersWithChats[0].uid))}),[null===(e=c.usersWithChats[0])||void 0===e?void 0:e.uid]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:s.root},r.a.createElement(Y.a,null),r.a.createElement(Oe,{handleDrawerOpen:U,handleDrawerClose:U,open:f}),r.a.createElement(Me,{open:f}),r.a.createElement("main",{className:s.content},r.a.createElement("div",{className:s.appBarSpacer}),r.a.createElement(V.a,{maxWidth:"lg",className:s.container,disableGutters:!0},r.a.createElement(Q.a,{item:!0,xs:12,className:s.chatContainer,onClick:function(){var e;_.setChatAsRead(c.currentUser.uid,null===(e=c.usersWithChats[0])||void 0===e?void 0:e.uid)}},(null===(t=c.usersWithChats)||void 0===t?void 0:t.length)>0&&c.messages.filter((function(e){return e.receiverId===c.usersWithChats[0].uid||e.senderId===c.usersWithChats[0].uid})).map((function(e){return e.receiverId===c.currentUser.uid?r.a.createElement(Q.a,{className:s.messageGrid,container:!0,key:e.chatId,onClick:function(){p(!0),w(e),C("receiver")}},r.a.createElement(de.a,{className:s.receivedMessagePaper},e.text)):r.a.createElement(Q.a,{className:s.messageGrid,container:!0,justify:"flex-end",key:e.chatId,onClick:function(){p(!0),w(e),C("sender")}},r.a.createElement(de.a,{className:s.sentMessagePaper},e.text))}))),r.a.createElement(Q.a,{item:!0,xs:12,className:s.chatInput},r.a.createElement(Ge,null))))),r.a.createElement(qe,{openModal:d,handleClose:function(){p(!1)},children:r.a.createElement(He,{handleDelete:function(){O&&E&&_.deleteMessage(O,E,i),p(!1)}})}))},Je=a(201),$e=Object(ne.a)((function(e){var t;return{layout:Object(_e.a)({display:"flex",flexDirection:"column",alignItems:"center",paddingTop:e.spacing(2),justifyContent:"center",width:"auto",marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(2)),{width:600,marginLeft:"auto",marginRight:"auto"}),paper:(t={marginTop:e.spacing(1),marginBottom:e.spacing(3),width:500,padding:e.spacing(2)},Object(_e.a)(t,e.breakpoints.up(600+2*e.spacing(3)),{marginTop:e.spacing(6),marginBottom:e.spacing(6),padding:e.spacing(3)}),Object(_e.a)(t,"display","flex"),t),appBar:{position:"relative"},title:{flexGrow:1},btnsWrapper:{marginTop:0},avatarWrapper:{position:"relative",cursor:"pointer"},editIcon:{position:"absolute",top:0,right:-10,zIndex:3,cursor:"pointer"},fileInput:{display:"none"},orange:{backgroundColor:"orange"},large:{width:e.spacing(10),height:e.spacing(10)}}})),Xe=Object(H.f)((function(e){var t,a=$e(),c=Object(n.useState)(),i=Object(o.a)(c,2),s=i[0],u=i[1],l=Object(n.useState)(),d=Object(o.a)(l,2),p=d[0],m=d[1],h=Object(n.useState)(),f=Object(o.a)(h,2),v=f[0],b=f[1],g=Object(n.useState)(),E=Object(o.a)(g,2),C=E[0],y=E[1],j=Object(n.useState)(R.getCurrentUser()),x=Object(o.a)(j,2),U=x[0],k=x[1],S=function(){var e=Object(w.a)(O.a.mark((function e(){var t,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.updateUserProfile(v,s);case 2:"success"===(null===(t=e.sent)||void 0===t?void 0:t.status)&&k(R.getCurrentUser()),m(t),a=setTimeout((function(){m(null),clearTimeout(a)}),3e3);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(Y.a,null),r.a.createElement(me.a,{position:"absolute",color:"default",className:a.appBar},r.a.createElement(he.a,null,r.a.createElement(q.a,{variant:"h5",color:"inherit",noWrap:!0,className:a.title},"Profile"),r.a.createElement(X.a,{startIcon:r.a.createElement(ye.a,null),onClick:function(){return e.history.goBack()}},"Go Back"))),r.a.createElement("main",{className:a.layout},p&&r.a.createElement(ue,{status:p.status,text:p.text}),r.a.createElement(de.a,{className:a.paper},r.a.createElement(Q.a,{container:!0,alignItems:"center",direction:"column",spacing:2},r.a.createElement(Q.a,{item:!0},U&&r.a.createElement("div",{className:a.avatarWrapper},r.a.createElement("input",{id:"raised-button-file",type:"file",accept:"image/.jpg,.png,.jpeg",className:a.fileInput,onChange:function(e){if(e.preventDefault(),e.target.files){var t=URL.createObjectURL(e.target.files[0]);b(e.target.files[0]),y(t)}}}),r.a.createElement("label",{htmlFor:"raised-button-file"},r.a.createElement(Je.a,{color:"primary",fontSize:"large",className:a.editIcon})),C||U.photoURL?r.a.createElement(Z.a,{alt:(null===U||void 0===U?void 0:U.displayName)||(null===U||void 0===U?void 0:U.email)||void 0,src:C||U.photoURL||void 0,className:a.large}):r.a.createElement(Z.a,{className:Object(pe.a)(a.orange,a.large)},null===U||void 0===U||null===(t=U.displayName)||void 0===t?void 0:t.slice(0,2)))),r.a.createElement(Q.a,{item:!0,xs:12},r.a.createElement(K.a,{id:"outlined-basic",label:"Name",variant:"outlined",defaultValue:null===U||void 0===U?void 0:U.displayName,fullWidth:!0,margin:"normal",onChange:function(e){return u(e.target.value)}}),r.a.createElement(K.a,{id:"outlined-basic",label:"Email",variant:"outlined",defaultValue:null===U||void 0===U?void 0:U.email,fullWidth:!0,margin:"normal",disabled:!0}),r.a.createElement(Q.a,{container:!0,justify:"flex-end",spacing:2,alignItems:"center",className:a.btnsWrapper},r.a.createElement(Q.a,{item:!0},r.a.createElement(X.a,{variant:"contained",color:"primary",onClick:function(e){e.preventDefault(),S()},disabled:(null==s||""===s)&&null==C},"Update")),r.a.createElement(Q.a,{item:!0},r.a.createElement(X.a,{variant:"contained",color:"secondary",onClick:function(){return e.history.goBack()}},"Cancel"))))))))})),Qe=a(113),et=a(202),tt=a(203),at=Object(Qe.a)({palette:{type:"dark"}}),nt=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){R.isInitialized().then((function(e){c(e)}))}),[]),!1!==a?r.a.createElement(et.a,{theme:at},r.a.createElement(H.c,null,r.a.createElement(H.a,{exact:!0,path:"/",component:le}),r.a.createElement(H.a,{path:"/chat",component:Ke}),r.a.createElement(H.a,{path:"/profile",component:Xe}))):r.a.createElement(tt.a,null)};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,{basename:"/react-chat-app"},r.a.createElement(G,null,r.a.createElement(nt,null)))),document.getElementById("root"))}},[[124,1,2]]]);
//# sourceMappingURL=main.82b54710.chunk.js.map