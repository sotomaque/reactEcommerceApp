(this["webpackJsonpecommerce-app"]=this["webpackJsonpecommerce-app"]||[]).push([[0],{38:function(e,t,a){},39:function(e,t,a){},47:function(e,t,a){e.exports=a(84)},58:function(e,t,a){},60:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(27),i=a.n(c),l=a(11),s=a(4),o=a(41),m=a(12),u=a(29),p=a(42),d=a.n(p),b=a(43),h=a.n(b),g=a(6),f="SET_CURRENT_USER",E={currentUser:null},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(g.a)({},e,{currentUser:t.payload});default:return e}},y={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART",REMOVE_ITEM:"REMOVE_ITEM"},O=a(46),k=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(g.a)({},e,{quantity:e.quantity+1}):e})):[].concat(Object(O.a)(e),[Object(g.a)({},t,{quantity:1})])},N=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(g.a)({},e,{quantity:e.quantity-1}):e}))},w={hidden:!0,cartItems:[]},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y.TOGGLE_CART_HIDDEN:return Object(g.a)({},e,{hidden:!e.hidden});case y.ADD_ITEM:return Object(g.a)({},e,{cartItems:k(e.cartItems,t.payload)});case y.CLEAR_ITEM_FROM_CART:return Object(g.a)({},e,{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});case y.REMOVE_ITEM:return Object(g.a)({},e,{cartItems:N(e.cartItems,t.payload)});default:return e}},C={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;return t.type,e},I={collections:{hats:{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},sneakers:{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},jackets:{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},womens:{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},mens:{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}}},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;return t.type,e},S={key:"root",storage:h.a,whitelist:["cart"]},x=Object(m.c)({user:v,cart:j,directory:U,shop:T}),R=Object(u.a)(S,x),A=[d.a],M=Object(m.d)(R,m.a.apply(void 0,A)),P=Object(u.b)(M),B=(a(58),a(7)),_=a.n(B),D=a(19),G=a(20),q=a(22),J=a(21),L=a(23),H=a(16),F=a(3);a(60);function W(){return(W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function V(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var z=r.a.createElement("title",null,"Group"),K=r.a.createElement("desc",null,"Created with Sketch."),Y=r.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2})))),Q=function(e){var t=e.svgRef,a=e.title,n=V(e,["svgRef","title"]);return r.a.createElement("svg",W({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:t},n),void 0===a?z:a?r.a.createElement("title",null,a):null,K,Y)},X=r.a.forwardRef((function(e,t){return r.a.createElement(Q,W({svgRef:t},e))})),$=(a.p,a(25)),Z=a.n($),ee=(a(61),a(65),function(e,t){var a,n,r,c;return _.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:if(e){i.next=2;break}return i.abrupt("return");case 2:return a=ae.doc("users/".concat(e.uid)),i.next=5,_.a.awrap(a.get());case 5:if(i.sent.exists){i.next=17;break}return n=e.displayName,r=e.email,c=new Date,i.prev=9,i.next=12,_.a.awrap(a.set(Object(g.a)({displayName:n,email:r,createdAt:c},t)));case 12:i.next=17;break;case 14:i.prev=14,i.t0=i.catch(9),console.log("error creating user",i.t0);case 17:return i.abrupt("return",a);case 18:case"end":return i.stop()}}),null,null,[[9,14]])});Z.a.initializeApp({apiKey:"AIzaSyAbhP6UJBMsIOpkLa_yJIF0as9qAcF6a3I",authDomain:"ecommerce-db-eb1e3.firebaseapp.com",databaseURL:"https://ecommerce-db-eb1e3.firebaseio.com",projectId:"ecommerce-db-eb1e3",storageBucket:"ecommerce-db-eb1e3.appspot.com",messagingSenderId:"667817773462",appId:"1:667817773462:web:540c89ece2503e5868b5b7"});var te=Z.a.auth(),ae=Z.a.firestore(),ne=new Z.a.auth.GoogleAuthProvider;ne.setCustomParameters({prompt:"select_account"});var re=function(){return te.signInWithPopup(ne)},ce=function(){return{type:y.TOGGLE_CART_HIDDEN}},ie=function(e){return{type:y.ADD_ITEM,payload:e}},le=function(e){return e.cart},se=Object(F.a)([le],(function(e){return e.cartItems})),oe=Object(F.a)([le],(function(e){return e.hidden})),me=Object(F.a)([se],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),ue=Object(F.a)([se],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)}));function pe(){return(pe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function de(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var be=r.a.createElement("g",null),he=r.a.createElement("g",null),ge=r.a.createElement("g",null),fe=r.a.createElement("g",null),Ee=r.a.createElement("g",null),ve=r.a.createElement("g",null),ye=r.a.createElement("g",null),Oe=r.a.createElement("g",null),ke=r.a.createElement("g",null),Ne=r.a.createElement("g",null),we=r.a.createElement("g",null),je=r.a.createElement("g",null),Ce=r.a.createElement("g",null),Ue=r.a.createElement("g",null),Ie=r.a.createElement("g",null),Te=function(e){var t=e.svgRef,a=e.title,n=de(e,["svgRef","title"]);return r.a.createElement("svg",pe({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t},n),a?r.a.createElement("title",null,a):null,r.a.createElement("g",null,r.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),be,he,ge,fe,Ee,ve,ye,Oe,ke,Ne,we,je,Ce,Ue,Ie)},Se=r.a.forwardRef((function(e,t){return r.a.createElement(Te,pe({svgRef:t},e))})),xe=(a.p,a(67),Object(F.b)({itemCount:me})),Re=Object(s.b)(xe,(function(e){return{toggleCartHidden:function(){return e(ce())}}}))((function(e){var t=e.toggleCartHidden,a=e.itemCount;return r.a.createElement("div",{className:"cart-icon",onClick:t},r.a.createElement(Se,{className:"shopping-icon"}),r.a.createElement("span",{className:"item-count"},a))})),Ae=a(15),Me=(a(68),function(e){var t=e.children,a=e.isGoogleSignIn,n=e.inverted,c=Object(Ae.a)(e,["children","isGoogleSignIn","inverted"]);return r.a.createElement("button",Object.assign({className:"".concat(n?"inverted":""," ").concat(a?"google-sign-in":"","\n                    custom-button")},c),t)}),Pe=(a(69),function(e){var t=e.item,a=t.imageUrl,n=t.price,c=t.name,i=t.quantity;return r.a.createElement("div",{className:"cart-item"},r.a.createElement("img",{src:a,alt:"item"}),r.a.createElement("div",{className:"item-details"},r.a.createElement("span",{className:"name"},c),r.a.createElement("span",{className:"price"},i," x $",n)))}),Be=(a(70),Object(F.b)({cartItems:se})),_e=Object(H.g)(Object(s.b)(Be,null)((function(e){var t=e.cartItems,a=e.history,n=e.dispatch;return r.a.createElement("div",{className:"cart-dropdown"},r.a.createElement("div",{className:"cart-items"},t.length?t.map((function(e){return r.a.createElement(Pe,{key:e.id,item:e})})):r.a.createElement("span",{className:"empty-message"},"Your Cart is Empty")),r.a.createElement(Me,{onClick:function(){a.push("/checkout"),n(ce())}},"GO TO CHECKOUT"))}))),De=Object(F.a)([function(e){return e.user}],(function(e){return e.currentUser})),Ge=(a(72),Object(F.b)({currentUser:De,hidden:oe})),qe=Object(s.b)(Ge)((function(e){var t=e.currentUser,a=e.hidden;return r.a.createElement("div",{className:"header"},r.a.createElement(l.b,{to:"/"},r.a.createElement(X,{className:"logo"})),r.a.createElement("div",{className:"options"},r.a.createElement(l.b,{className:"option",to:"/shop"},"SHOP"),r.a.createElement(l.b,{className:"option",to:"/shop"},"CONTACT"),t?r.a.createElement("div",{className:"option",onClick:function(){return te.signOut()}},"SIGN OUT"):r.a.createElement(l.b,{className:"option",to:"/signin"},"SIGN IN"),r.a.createElement(Re,null)),a?null:r.a.createElement(_e,null))})),Je=Object(F.a)([function(e){return e.directory}],(function(e){return e.sections})),Le=(a(38),Object(H.g)((function(e){var t=e.title,a=e.imageUrl,n=e.size,c=e.history,i=e.linkUrl,l=e.match;return r.a.createElement("div",{className:"".concat(n," menu-item"),onClick:function(){return c.push("".concat(l.url).concat(i))}},r.a.createElement("div",{className:"background-image",style:{backgroundImage:"url(".concat(a,")")}}),r.a.createElement("div",{className:"content"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("span",{className:"subtitle"},"Shop Now")))}))),He=(a(39),Object(F.b)({sections:Je})),Fe=Object(s.b)(He)((function(e){var t=e.sections;return r.a.createElement("div",{className:"directory-menu"},t.map((function(e){var t=e.id,a=Object(Ae.a)(e,["id"]);return r.a.createElement(Le,Object.assign({key:t},a))})))})),We=(a(73),function(){return r.a.createElement("div",{className:"homepage"},r.a.createElement(Fe,null))}),Ve=(a(74),Object(s.b)(null,(function(e){return{addItem:function(t){return e(ie(t))}}}))((function(e){var t=e.item,a=e.addItem,n=t.name,c=t.price,i=t.imageUrl;return r.a.createElement("div",{className:"collection-item"},r.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(i,")")}}),r.a.createElement("div",{className:"collection-footer"},r.a.createElement("span",{className:"name"},n),r.a.createElement("span",{className:"price"},c)),r.a.createElement(Me,{onClick:function(){return a(t)},inverted:!0},"Add to Cart"))}))),ze=(a(75),function(e){var t=e.title,a=e.items;return r.a.createElement("div",{className:"collection-preview"},r.a.createElement("h1",null,t.toUpperCase()),r.a.createElement("div",{className:"preview"},a.filter((function(e,t){return t<4})).map((function(e){return r.a.createElement(Ve,{key:e.id,item:e})}))))}),Ke=Object(F.a)([function(e){return e.shop}],(function(e){return e.collections})),Ye=Object(F.a)([Ke],(function(e){return Object.keys(e).map((function(t){return e[t]}))})),Qe=(a(76),Object(F.b)({collections:Ye})),Xe=Object(s.b)(Qe)((function(e){var t=e.collections;return r.a.createElement("div",{className:"collections-overview"},t.map((function(e){var t=e.id,a=Object(Ae.a)(e,["id"]);return r.a.createElement(ze,Object.assign({key:t},a))})))})),$e=(a(77),Object(s.b)((function(e,t){return{collection:(a=t.match.params.collectionId,Object(F.a)([Ke],(function(e){return e[a]})))(e)};var a}))((function(e){var t=e.collection,a=t.title,n=t.items;return r.a.createElement("div",{className:"collection-page"},r.a.createElement("h2",{className:"title"},a),r.a.createElement("div",{className:"items"},n.map((function(e){return r.a.createElement(Ve,{key:e.id,item:e})}))))}))),Ze=function(e){var t=e.match;return r.a.createElement("div",{className:"shop-page"},r.a.createElement(H.b,{exact:!0,path:"".concat(t.path),component:Xe}),r.a.createElement(H.b,{path:"".concat(t.path,"/:collectionId"),component:$e}))},et=a(18),tt=(a(78),function(e){var t=e.handleChange,a=e.label,n=Object(Ae.a)(e,["handleChange","label"]);return r.a.createElement("div",{className:"group"},r.a.createElement("input",Object.assign({className:"form-input",onChange:t},n)),a?r.a.createElement("label",{className:"".concat(n.value.length?"shrink":""," form-input-label")},a):null)}),at=(a(79),function(e){function t(e){var a;return Object(D.a)(this,t),(a=Object(q.a)(this,Object(J.a)(t).call(this,e))).handleSubmit=function(e){var t,n,r;return _.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return e.preventDefault(),t=a.state,n=t.email,r=t.password,c.prev=2,c.next=5,_.a.awrap(te.signInWithEmailAndPassword(n,r));case 5:a.setState({email:"",password:""}),c.next=11;break;case 8:c.prev=8,c.t0=c.catch(2),console.log(c.t0);case 11:case"end":return c.stop()}}),null,null,[[2,8]])},a.handleChange=function(e){var t=e.target,n=t.value,r=t.name;a.setState(Object(et.a)({},r,n))},a.state={email:"",password:""},a}return Object(L.a)(t,e),Object(G.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"sign-in"},r.a.createElement("h2",{className:"title"},"I already have an account"),r.a.createElement("span",null,"Sign in with your email"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(tt,{name:"email",type:"email",value:this.state.email,handleChange:this.handleChange,label:"email",required:!0}),r.a.createElement(tt,{name:"password",type:"password",value:this.state.password,handleChange:this.handleChange,label:"password",required:!0}),r.a.createElement("div",{className:"buttons"},r.a.createElement(Me,{type:"submit"},"Sign in"),r.a.createElement(Me,{onClick:re,isGoogleSignIn:!0}," ","Sign in with Google"," "))))}}]),t}(n.Component)),nt=(a(80),function(e){function t(e){var a;return Object(D.a)(this,t),(a=Object(q.a)(this,Object(J.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(et.a)({},n,r))},a.handleSubmit=function(e){var t,n,r,c,i,l,s;return _.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(e.preventDefault(),t=a.state,n=t.displayName,r=t.email,c=t.password,i=t.confirmPassword,c===i){o.next=5;break}return alert("passwords dont match"),o.abrupt("return");case 5:return o.prev=5,o.next=8,_.a.awrap(te.createUserWithEmailAndPassword(r,c));case 8:return l=o.sent,s=l.user,o.next=12,_.a.awrap(ee(s,{displayName:n}));case 12:a.setState({diplayName:"",email:"",password:"",confirmPassword:""}),o.next=18;break;case 15:o.prev=15,o.t0=o.catch(5),console.log("error creating user",o.t0);case 18:case"end":return o.stop()}}),null,null,[[5,15]])},a.state={displayName:"",email:"",password:"",confirmPassword:""},a}return Object(L.a)(t,e),Object(G.a)(t,[{key:"render",value:function(){var e=this.state,t=e.displayName,a=e.email,n=e.password,c=e.confirmPassword;return r.a.createElement("div",{className:"sign-up"},r.a.createElement("h2",{className:"title"},"I do not have an account"),r.a.createElement("span",null,"Sign up with your email"),r.a.createElement("form",{className:"sign-up-form",onSubmit:this.handleSubmit},r.a.createElement(tt,{name:"displayName",type:"text",value:t,handleChange:this.handleChange,label:"Display Name",required:!0}),r.a.createElement(tt,{name:"email",type:"email",value:a,handleChange:this.handleChange,label:"Email",required:!0}),r.a.createElement(tt,{name:"password",type:"password",value:n,handleChange:this.handleChange,label:"Password",required:!0}),r.a.createElement(tt,{name:"confirmPassword",type:"password",value:c,handleChange:this.handleChange,label:"Confirm Password",required:!0}),r.a.createElement(Me,{type:"submit"},"SIGN UP")))}}]),t}(n.Component)),rt=(a(81),function(){return r.a.createElement("div",{className:"sign-in-and-sign-up"},r.a.createElement(at,null),r.a.createElement(nt,null))}),ct=(a(82),Object(s.b)(null,(function(e){return{clearItem:function(t){return e(function(e){return{type:y.CLEAR_ITEM_FROM_CART,payload:e}}(t))},addItem:function(t){return e(ie(t))},removeItem:function(t){return e(function(e){return{type:y.REMOVE_ITEM,payload:e}}(t))}}}))((function(e){var t=e.cartItem,a=e.clearItem,n=e.addItem,c=e.removeItem,i=t.name,l=t.imageUrl,s=t.price,o=t.quantity;return r.a.createElement("div",{className:"checkout-item"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:l,alt:"item"})),r.a.createElement("span",{className:"name"},i),r.a.createElement("span",{className:"quantity"},r.a.createElement("div",{className:"arrow",onClick:function(){return c(t)}},"\u276e"),r.a.createElement("span",{className:"value"},o),r.a.createElement("div",{className:"arrow",onClick:function(){return n(t)}},"\u276f")),r.a.createElement("span",{className:"price"},"$",s),r.a.createElement("div",{className:"remove-button",onClick:function(){return a(t)}},"\u2715"))}))),it=a(45),lt=a.n(it),st=function(e){var t=e.price,a=100*t;return r.a.createElement(lt.a,{label:"Pay Now",name:"E Commerce",image:"https://svgshare.com/i/CUz.svg",description:"Your total is $".concat(t),amount:a,panelLabel:"Pay Now",token:function(e){console.log(e),alert("Payment Successful")},stripeKey:"pk_test_PpjNmtJUnLCUux4Fpc1rR7Ri00Iwmb6HKC"})},ot=(a(83),Object(F.b)({cartItems:se,total:ue})),mt=Object(s.b)(ot,null)((function(e){var t=e.cartItems,a=e.total;return r.a.createElement("div",{className:"checkout-page"},r.a.createElement("div",{className:"checkout-header"},r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Product")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Description")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Quantity")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Price")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Remove"))),t.map((function(e){return r.a.createElement(ct,{key:e.id,cartItem:e})})),r.a.createElement("div",{className:"total"},r.a.createElement("span",null,"Total: $",a)),r.a.createElement("div",{className:"test-warning"},"*Please use the following test CC for payments*",r.a.createElement("br",null),r.a.createElement("table",null,r.a.createElement("tr",null,r.a.createElement("th",null,"CC Number"),r.a.createElement("th",null,"Expiration"),r.a.createElement("th",null,"CCV")),r.a.createElement("tr",null,r.a.createElement("td",null,"4242 4242 4242 4242"),r.a.createElement("td",null,"Any Future Date"),r.a.createElement("td",null,"Any 3 digits")))),r.a.createElement(st,{price:a}))})),ut=function(e){function t(){var e,a;Object(D.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(q.a)(this,(e=Object(J.a)(t)).call.apply(e,[this].concat(r)))).unsubscribeFromAuth=null,a}return Object(L.a)(t,e),Object(G.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.setCurrentUser;this.unsubscribeFromAuth=te.onAuthStateChanged((function(t){return _.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(!t){a.next=5;break}return a.next=3,_.a.awrap(ee(t));case 3:a.sent.onSnapshot((function(t){e(Object(g.a)({id:t.id},t.data()))}));case 5:e(t);case 6:case"end":return a.stop()}}))}))}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(qe,null),r.a.createElement(H.d,null,r.a.createElement(H.b,{exact:!0,path:"/",component:We}),r.a.createElement(H.b,{exact:!0,path:"/signin",render:function(){return e.props.currentUser?r.a.createElement(H.a,{to:"/"}):r.a.createElement(rt,null)}}),r.a.createElement(H.b,{path:"/shop",component:Ze}),r.a.createElement(H.b,{exact:!0,path:"/checkout",component:mt})))}}]),t}(n.Component),pt=Object(F.b)({currentUser:De}),dt=Object(s.b)(pt,(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:f,payload:e}}(t))}}}))(ut);i.a.render(r.a.createElement(s.a,{store:M},r.a.createElement(l.a,null,r.a.createElement(o.a,{persistor:P},r.a.createElement(dt,null)))),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.3168150e.chunk.js.map