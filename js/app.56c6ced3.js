(function(e){function t(t){for(var c,i,r=t[0],l=t[1],o=t[2],E=0,O=[];E<r.length;E++)i=r[E],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&O.push(s[i][0]),s[i]=0;for(c in l)Object.prototype.hasOwnProperty.call(l,c)&&(e[c]=l[c]);d&&d(t);while(O.length)O.shift()();return a.push.apply(a,o||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],c=!0,r=1;r<n.length;r++){var l=n[r];0!==s[l]&&(c=!1)}c&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var c={},s={app:0},a=[];function i(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=c,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)i.d(n,c,function(t){return e[t]}.bind(null,c));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/terminal-hacking/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var o=0;o<r.length;o++)t(r[o]);var d=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),s={id:"app-component"},a={id:"container"},i={class:"terminal-outer-1"},r={class:"modal"},l={class:"align-center"},o=Object(c["g"])("div",null,"***Terminal Hacking Game***",-1),d=Object(c["g"])("br",null,null,-1),E={class:"align-left modal-logo"},O=Object(c["g"])("br",null,null,-1),u=Object(c["g"])("br",null,null,-1),h=Object(c["g"])("div",{style:{"font-size":".8em","padding-left":"10px"}},[Object(c["g"])("div",null," CONTROLS "),Object(c["g"])("div",null,[Object(c["f"])(" SINGLE CLICK / CURSOR KEY..............inspect"),Object(c["g"])("br"),Object(c["f"])(" DOUBLE CLICK / ENTER KEY ...............select"),Object(c["g"])("br")]),Object(c["g"])("br"),Object(c["g"])("div",null," ELEMENTS "),Object(c["g"])("div",null,[Object(c["f"])(" WORDS.......................Possible Passwords"),Object(c["g"])("br"),Object(c["f"])(' BRACKET GROUPS..........Remove "dud" passwords ')])],-1);function b(e,t,n,b,L,v){var p=Object(c["k"])("AsciiCrab"),j=Object(c["k"])("GameBoard");return Object(c["h"])(),Object(c["c"])("div",s,[Object(c["g"])("div",a,[Object(c["g"])("div",i,[L.showShroud?(Object(c["h"])(),Object(c["c"])("div",{key:0,class:["shroud",{"animate__animated animate__fadeOut":L.animate}],onClick:t[1]||(t[1]=Object(c["o"])((function(){return v.hideShroud&&v.hideShroud.apply(v,arguments)}),["stop"]))},[Object(c["g"])("div",r,[Object(c["g"])("div",l,[o,d,Object(c["g"])("div",E,[Object(c["g"])(p)]),O,u]),h])],2)):Object(c["d"])("",!0),Object(c["g"])(j)])])])}n("fb6a");var L=n("e525"),v=n.n(L),p={id:"gameboard"},j={class:"outer"},R={class:"main-screen"},f={key:0,class:"animate__animated animate__fadeIn"},g={class:"top"},T=Object(c["g"])("div",null,"CRABCO INDUSTRIES (TM) CRUSTLINK PROTOCOL",-1),I={key:0,class:"animate__animated animate__fadeIn"},S=Object(c["g"])("div",null,"ENTER PASSWORD NOW",-1),m={class:"game-progress"},y=Object(c["g"])("br",null,null,-1),A=Object(c["g"])("br",null,null,-1),C=Object(c["g"])("br",null,null,-1),N={class:"align-right"},w={class:"align-right"},D=Object(c["f"])(" TIME"),P={key:0,class:"msg animate__animated animate__fadeIn"},k=Object(c["e"])(' LOADING...<span class="text-btn active">.</span><br><br><br><div> CONTROLS </div><div class="sub"> SINGLE CLICK / CURSOR KEY...inspect<br> DOUBLE CLICK / ENTER KEY....select<br></div><br><br><div> ELEMENTS </div><div class="sub"> WORDS.......................Possible Passwords<br> BRACKET GROUPS..............Remove &quot;dud&quot; passwords </div><div class="sub"></div>',12),x={key:1,class:"msg animate__animated animate__fadeIn"},_=Object(c["g"])("br",null,null,-1),M=Object(c["g"])("br",null,null,-1),G=Object(c["g"])("div",null,[Object(c["f"])("Thank you for playing!"),Object(c["g"])("br"),Object(c["g"])("br"),Object(c["g"])("br")],-1),U=Object(c["g"])("div",null,[Object(c["f"])(" This project was inspired by the terminal hacking mini game in our favourte RPG series. "),Object(c["g"])("br"),Object(c["g"])("br")],-1),H=Object(c["g"])("div",null,[Object(c["f"])(" Originally made with love that turned a grind and appreciation for the effort in the little things. "),Object(c["g"])("br"),Object(c["g"])("br")],-1),V=Object(c["g"])("div",null," Toggle the start button to play again. ",-1),B={key:2,class:"row"},Y={class:"col left"},F=Object(c["g"])("span",{class:"lazy-spacer"},"..",-1),z={class:"col middle"},W=Object(c["g"])("span",{class:"lazy-spacer"},"..",-1),K={class:"col right"},X=Object(c["g"])("br",null,null,-1),Q=Object(c["g"])("div",null,">",-1),q={class:"ctrl-btn-wrap"},J=Object(c["g"])("div",{class:"btn-panel",style:{"margin-right":"auto"}},[Object(c["g"])("div",{class:"screw screw-a"}),Object(c["g"])("div",{class:"screw screw-b"}),Object(c["g"])("div",{class:"screw screw-c"}),Object(c["g"])("div",{class:"screw screw-d"}),Object(c["g"])("div",{class:"logo"},[Object(c["f"])(" CRABCO Terminal "),Object(c["g"])("div",{style:{"text-align":"center"}},[Object(c["g"])("img",{class:"logo-img",src:v.a})])])],-1),$={class:"btn-panel level"},Z=Object(c["e"])('<div class="screw screw-a"></div><div class="screw screw-b"></div><div class="screw screw-c"></div><div class="screw screw-d"></div><div style="text-align:center;">Level</div>',5),ee={class:"level-wrap"},te=Object(c["g"])("div",{class:"level-btn-text"},"1",-1),ne=Object(c["g"])("div",{class:"level-btn-light"},null,-1),ce=Object(c["g"])("div",{class:"level-btn-text"},"2",-1),se=Object(c["g"])("div",{class:"level-btn-light"},null,-1),ae=Object(c["g"])("div",{class:"level-btn-text"},"3",-1),ie=Object(c["g"])("div",{class:"level-btn-light"},null,-1),re={class:"btn-panel",style:{"padding-bottom":"0"}},le=Object(c["e"])('<div class="screw screw-a"></div><div class="screw screw-b"></div><div class="screw screw-c"></div><div class="screw screw-d"></div><div style="text-align:center;">Start</div>',5),oe=Object(c["g"])("div",{class:"start-btn-inner"},null,-1),de={style:{display:"none"}};function Ee(e,t,n,s,a,i){var r=Object(c["k"])("AsciiCrab"),l=Object(c["k"])("ColumnItem"),o=Object(c["k"])("PuzzleColumn");return Object(c["h"])(),Object(c["c"])("div",p,[Object(c["g"])("div",j,[Object(c["g"])("div",{class:["inner",{active:a.hasStarted}]},[Object(c["g"])("div",null,[(Object(c["h"])(!0),Object(c["c"])(c["a"],null,Object(c["i"])(e.screenCols,(function(e){return Object(c["h"])(),Object(c["c"])("span",{class:"lazy-spacer",key:e},".")})),128))]),Object(c["g"])("div",R,[Object(c["g"])("div",null,[(Object(c["h"])(!0),Object(c["c"])(c["a"],null,Object(c["i"])(e.screenRows,(function(e){return Object(c["h"])(),Object(c["c"])("div",{class:"lazy-spacer",key:e},"..")})),128))]),a.hasStarted?(Object(c["h"])(),Object(c["c"])("div",f,[Object(c["g"])("div",g,[T,e.displayMode===a.DISPLAY_MODE.GAME?(Object(c["h"])(),Object(c["c"])("div",I,[S,Object(c["g"])("div",m,[Object(c["g"])("div",null,[y,Object(c["f"])(" "+Object(c["l"])(e.attemptsRemaining)+" ATTEMPTS(S) LEFT ",1),(Object(c["h"])(!0),Object(c["c"])(c["a"],null,Object(c["i"])(e.attemptsRemaining,(function(e){return Object(c["h"])(),Object(c["c"])("span",{key:e}," ■ ")})),128)),A,C]),Object(c["g"])("div",N,[Object(c["g"])("div",w,[Object(c["f"])(Object(c["l"])(e.currentStep+1)+"/"+Object(c["l"])(a.LEVEL_STEPS[e.currentLevel])+" STEP ",1),Object(c["g"])("div",null,[(Object(c["h"])(!0),Object(c["c"])(c["a"],null,Object(c["i"])(i.timerCount,(function(e){return Object(c["h"])(),Object(c["c"])("span",{key:e}," ■ ")})),128)),D])])])])])):Object(c["d"])("",!0)]),e.displayMode===a.DISPLAY_MODE.LOADING?(Object(c["h"])(),Object(c["c"])("div",P,[k])):Object(c["d"])("",!0),e.displayMode===a.DISPLAY_MODE.CREDITS?(Object(c["h"])(),Object(c["c"])("div",x,[Object(c["g"])(r),_,M,G,U,H,V])):Object(c["d"])("",!0),e.displayMode===a.DISPLAY_MODE.GAME&&e.nodeList&&e.nodeList.length===e.lastRightIdx+1?(Object(c["h"])(),Object(c["c"])("div",B,[Object(c["g"])("div",Y,[Object(c["g"])(o,{hexList:e.leftHexList},{default:Object(c["m"])((function(){return[(Object(c["h"])(!0),Object(c["c"])(c["a"],null,Object(c["i"])(e.nodeList.slice(0,e.lastLeftIdx+1),(function(t){return Object(c["h"])(),Object(c["c"])(l,{key:t.key,node:t,onSelect:i.onSelect,selected:e.selected},null,8,["node","onSelect","selected"])})),128))]})),_:1},8,["hexList"])]),F,Object(c["g"])("div",z,[Object(c["g"])(o,{hexList:e.rightHexList},{default:Object(c["m"])((function(){return[(Object(c["h"])(!0),Object(c["c"])(c["a"],null,Object(c["i"])(e.nodeList.slice(e.lastLeftIdx+1,e.lastRightIdx+1),(function(t){return Object(c["h"])(),Object(c["c"])(l,{key:t.key,node:t,onSelect:i.onSelect,selected:e.selected},null,8,["node","onSelect","selected"])})),128))]})),_:1},8,["hexList"])]),W,Object(c["g"])("div",K,[Object(c["g"])("div",null,[(Object(c["h"])(!0),Object(c["c"])(c["a"],null,Object(c["i"])(e.feedbackRows,(function(e){return Object(c["h"])(),Object(c["c"])("div",{key:e.key}," >"+Object(c["l"])(e.val),1)})),128)),X,Q])])])):Object(c["d"])("",!0)])):Object(c["d"])("",!0),Object(c["g"])("div",null,[(Object(c["h"])(!0),Object(c["c"])(c["a"],null,Object(c["i"])(e.screenRows,(function(e){return Object(c["h"])(),Object(c["c"])("div",{class:"lazy-spacer",key:e},"..")})),128))])]),Object(c["g"])("div",null,[(Object(c["h"])(!0),Object(c["c"])(c["a"],null,Object(c["i"])(e.screenCols,(function(e){return Object(c["h"])(),Object(c["c"])("span",{class:"lazy-spacer",key:e},".")})),128))])],2),Object(c["g"])("div",q,[J,Object(c["g"])("div",$,[Z,Object(c["g"])("div",ee,[Object(c["g"])("div",{class:["level-btn",{active:a.hasStarted&&e.currentLevel===a.LEVEL_TYPE.LEVEL_1}]},[te,ne],2),Object(c["g"])("div",{class:["level-btn middle",{active:a.hasStarted&&e.currentLevel===a.LEVEL_TYPE.LEVEL_2}]},[ce,se],2),Object(c["g"])("div",{class:["level-btn",{active:a.hasStarted&&e.currentLevel===a.LEVEL_TYPE.LEVEL_3}]},[ae,ie],2)])]),Object(c["g"])("div",re,[le,Object(c["g"])("button",{class:["start-btn",{active:a.hasStarted}],onClick:t[1]||(t[1]=Object(c["o"])((function(){return i.toggleStarted()}),["stop"]))},[oe],2)])])]),Object(c["g"])("pre",de,Object(c["l"])(JSON.stringify({selected:e.selected,wordList:e.wordList,passWord:e.passWord},null,"\t"))+"\n    ",1)])}n("99af"),n("4de4"),n("4160"),n("a15b"),n("d81d"),n("a434"),n("a9e3"),n("b64b"),n("d3b7"),n("ac1f"),n("25f0"),n("1276"),n("159b");var Oe,ue,he,be,Le,ve=n("2909"),pe=n("3835"),je=n("53ca"),Re=n("5530"),fe=n("ade3"),ge={LOADING:"LOADING",GAME:"GAME",CREDITS:"CREDITS"},Te={LEVEL_1:"LEVEL_1",LEVEL_2:"LEVEL_2",LEVEL_3:"LEVEL_3"},Ie=(Oe={},Object(fe["a"])(Oe,Te.LEVEL_1,10),Object(fe["a"])(Oe,Te.LEVEL_2,15),Object(fe["a"])(Oe,Te.LEVEL_3,20),Oe),Se=(ue={},Object(fe["a"])(ue,Te.LEVEL_1,30),Object(fe["a"])(ue,Te.LEVEL_2,25),Object(fe["a"])(ue,Te.LEVEL_3,20),ue),me=(he={},Object(fe["a"])(he,Te.LEVEL_1,4),Object(fe["a"])(he,Te.LEVEL_2,5),Object(fe["a"])(he,Te.LEVEL_3,7),he),ye=(be={},Object(fe["a"])(be,Te.LEVEL_1,2),Object(fe["a"])(be,Te.LEVEL_2,2),Object(fe["a"])(be,Te.LEVEL_3,1),be),Ae=(Le={},Object(fe["a"])(Le,Te.LEVEL_1,6),Object(fe["a"])(Le,Te.LEVEL_2,7),Object(fe["a"])(Le,Te.LEVEL_3,8),Le),Ce=[{left:"(",right:")"},{left:"{",right:"}"},{left:"[",right:"]"},{left:"<",right:">"}],Ne={LEVEL_1:["NUMBER","PEOPLE","LITTLE","DIFFER","BEFORE","FOLLOW","CHANGE","ANIMAL","MOTHER","FATHER","SHOULD","ANSWER","SCHOOL","ALWAYS","LETTER","SECOND","FRIEND","ENOUGH","THOUGH","FAMILY","DIRECT","HAPPEN","BETTER","DURING","GROUND","LISTEN","TRAVEL","SIMPLE","TOWARD","CENTER","PERSON","APPEAR","GOVERN","NOTICE","FIGURE","BEAUTY","MINUTE","STRONG","BEHIND","STREET","COURSE","OBJECT","DECIDE","ISLAND","SYSTEM","RECORD","COMMON","WONDER","EQUATE","ENGINE","SETTLE","WEIGHT","MATTER","CIRCLE","DIVIDE","SUDDEN","SQUARE","REASON","LENGTH","REGION","ENERGY","FOREST","WINDOW","SUMMER","WINTER","BRIGHT","FINISH","FLOWER","CLOTHE","EITHER","RESULT","PHRASE","SILENT","FINGER","EXCITE","MIDDLE","MOMENT","SPRING","NATION","METHOD","DESIGN","BOTTOM","SINGLE","TWENTY","CREASE","MELODY","OFFICE","SYMBOL","EXCEPT","GARDEN","CHOOSE","GENTLE","DOCTOR","PLEASE","LOCATE","INSECT","CAUGHT","PERIOD","EFFECT","EXPECT","MODERN","CORNER","SUPPLY","DANGER","CREATE","RATHER","STRING","DEPEND","FAMOUS","DOLLAR","STREAM","PLANET","COLONY","SEARCH","YELLOW","DESERT","SPREAD","INVENT","COTTON","CHANCE","GATHER","COLUMN","SELECT","REPEAT","PLURAL","OXYGEN","PRETTY","SEASON","MAGNET","SILVER","BRANCH","SUFFIX","AFRAID","SISTER","BOUGHT","VALLEY","DOUBLE","ARRIVE","MASTER","PARENT","CHARGE","PROPER","MARKET","DEGREE","SPEECH","NATURE","MOTION","LIQUID"],LEVEL_2:["THROUGH","PICTURE","COUNTRY","BETWEEN","THOUGHT","EXAMPLE","SCIENCE","MEASURE","PRODUCT","NUMERAL","PROBLEM","HUNDRED","MORNING","SEVERAL","AGAINST","PATTERN","CERTAIN","MACHINE","CORRECT","CONTAIN","DEVELOP","SPECIAL","PRODUCE","NOTHING","SURFACE","BROUGHT","DISTANT","PRESENT","GENERAL","INCLUDE","PERHAPS","SUBJECT","BROTHER","BELIEVE","WRITTEN","WEATHER","MILLION","STRANGE","VILLAGE","WHETHER","CENTURY","NATURAL","OBSERVE","SECTION","RECEIVE","TROUBLE","SUGGEST","COLLECT","CONTROL","DECIMAL","CAPTAIN","PROTECT","HISTORY","ELEMENT","STUDENT","IMAGINE","PROVIDE","CAPITAL","SOLDIER","PROCESS","OPERATE","COMPARE","CURRENT","SUCCESS","COMPANY","ARRANGE","STRETCH","REQUIRE","PREPARE","DISCUSS","FORWARD","SIMILAR","EVENING","CONNECT","STATION","SEGMENT","INSTANT","SUPPORT"],LEVEL_3:["SENTENCE","TOGETHER","CHILDREN","MOUNTAIN","QUESTION","COMPLETE","REMEMBER","INTEREST","MULTIPLY","POSSIBLE","THOUSAND","LANGUAGE","POSITION","MATERIAL","SYLLABLE","PROBABLE","FRACTION","EXERCISE","DESCRIBE","CONSIDER","INDUSTRY","STRAIGHT","SURPRISE","PRACTICE","SEPARATE","INDICATE","ELECTRIC","NEIGHBOR","TRIANGLE","CONTINUE","SUBTRACT","OPPOSITE","SHOULDER","PROPERTY","MOLECULE","SOLUTION","DIVISION","ORIGINAL","POPULATE","QUOTIENT"]},we=(n("c975"),function(e,t){var n=e||Te.LEVEL_1,c=t||0;return{currentLevel:n,currentStep:c,displayMode:ge.LOADING,countDown:Se[n],countDownActive:!1,attemptsRemaining:4,screenRows:22,screenCols:66,rowCount:17,colCount:12,hexValue:63300,tabIndex:0,charIndex:0,nodeList:[],leftHexList:[],rightHexList:[],feedbackRows:[],feedbackRowsKey:1,wordList:[],passWord:"",fillerChars:"~!@#$%^&_-+=\\?/,:;*.",origKeyDown:null,selected:{},lastLeftIdx:0,lastRightIdx:0}}),De=function(e,t){return Math.floor(Math.random()*(t-e)+e)},Pe=function(e,t,n){return t.slice(0,e).map((function(e){return{sort:Math.random(),val:e}})).sort((function(e,t){return e.sort-t.sort})).map((function(e){return e.val})).map((function(e){var t=De(0,n.length-1),c=De(0,n.length-1),s=n.substr(t,c);return"".concat(e.left).concat(s).concat(e.right)}))},ke=function(e,t){var n=0,c=t.length,s=[],a=10,i=0;while(i<a&&s.length<e){var r=De(n,c),l=t[r];-1===s.indexOf(l)&&s.push(l),i++}return s},xe={class:"puzzle-column"},_e=Object(c["g"])("span",{class:"lazy-spacer"},".",-1),Me={class:"text col-grid"};function Ge(e,t,n,s,a,i){return Object(c["h"])(),Object(c["c"])("div",xe,[Object(c["g"])("div",null,[(Object(c["h"])(!0),Object(c["c"])(c["a"],null,Object(c["i"])(n.hexList,(function(e){return Object(c["h"])(),Object(c["c"])("div",{key:e.key,class:"hex"},Object(c["l"])(e.val),1)})),128))]),_e,Object(c["g"])("div",Me,[Object(c["j"])(e.$slots,"default")])])}var Ue={name:"PuzzleColumn",props:{hexList:{type:Array,default:function(){return[]}}}};Ue.render=Ge;var He=Ue;function Ve(e,t,n,s,a,i){return Object(c["h"])(!0),Object(c["c"])(c["a"],null,Object(c["i"])(n.node.valList,(function(e,t){return Object(c["h"])(),Object(c["c"])("span",{key:e.charIndex,innerHTML:"".concat(e.char),id:"char_".concat(e.charIndex),tabindex:n.node.key,class:[{active:i.isActive&&("filler"!==n.node.type||"filler"===n.node.type&&n.selected.charIndex===e.charIndex)},"char-span noSelect text-btn"],"data-key":n.node.key,onKeyup:[Object(c["n"])((function(c){return i.handleSelect(c,"select",{node:n.node,nodeIdx:t,charIndex:e.charIndex})}),["space"]),Object(c["n"])((function(c){return i.handleSelect(c,"select",{node:n.node,nodeIdx:t,charIndex:e.charIndex})}),["enter"])],onDblclick:Object(c["o"])((function(c){return i.handleSelect(c,"select",{node:n.node,nodeIdx:t,charIndex:e.charIndex})}),["stop"]),onFocus:Object(c["o"])((function(c){return i.handleSelect(c,"focus",{node:n.node,nodeIdx:t,charIndex:e.charIndex})}),["stop"])},null,42,["innerHTML","id","tabindex","data-key","onKeyup","onDblclick","onFocus"])})),128)}var Be={props:{selected:{type:Object,default:function(){return{}}},node:{type:Object,default:function(){return{}}},onFocus:{type:Function,default:void 0},onSelect:{type:Function,default:void 0}},data:function(){return{selectedFiller:!1}},computed:{isActive:function(){return this.node.key===this.selected.key&&!this.selectedFiller}},methods:{handleSelect:function(e,t,n){try{e.preventDefault(),e.stopPropagation();var c=n.nodeIdx,s=n.node,a=s.type,i=s.valList,r=a;"helper"===a&&i.length>2&&c>0&&c<i.length-1?(r="filler",this.selectedFiller=!0):this.selectedFiller=!1;var l=Object(Re["a"])(Object(Re["a"])({},n),{},{node:Object(Re["a"])(Object(Re["a"])({},n.node),{},{type:r}),command:t});this.onSelect(l)}catch(o){console.log("!!!!!!!ERROR-handleSelect!!!!!!!!!!!"),console.log(o)}}}};Be.render=Ve;var Ye=Be,Fe=Object(c["e"])('<div><span class="lazy-spacer">.</span><span class="lazy-spacer">.</span><span class="lazy-spacer">.</span><span class="lazy-spacer">.</span> | | </div><div><span class="lazy-spacer">.</span> (\\(<span class="lazy-spacer">.</span>_<span class="lazy-spacer">.</span>)/) </div><div><span class="lazy-spacer">.</span><span class="lazy-spacer">.</span><span class="lazy-spacer">.</span><span>{{</span><span class="lazy-spacer">.</span><span class="lazy-spacer">.</span> }} </div>',3);function ze(e,t){return Object(c["h"])(),Object(c["c"])("div",null,[Fe])}const We={};We.render=ze;var Ke=We,Xe=n("e1bd"),Qe={name:"GameBoard",components:{PuzzleColumn:He,ColumnItem:Ye,AsciiCrab:Ke},data:function(){return Object(Re["a"])({hasStarted:!1,requiresDomEvents:!0,gameBoard:{x:{w:880,s:1},y:{h:710,s:1}},countDownRef:null,DISPLAY_MODE:ge,LEVEL_TYPE:Te,LEVEL_STEPS:Ie,LEVEL_TIMER:Se},we())},computed:{timerCount:function(){return parseInt(this.countDown/5,10)}},methods:{toggleStarted:function(){var e=this;this.hasStarted=!this.hasStarted,this.hasStarted?setTimeout((function(){e.displayMode=ge.LOADING,e.reset()}),1500):(this.countDownActive=!1,clearTimeout(this.countDownRef),this.displayMode=ge.LOADING)},getHexString:function(){var e="0x";return"".concat(e).concat(Number(this.hexValue++>>>0).toString(16))},getRandomFillerChar:function(){var e=0,t=this.fillerChars.length-1,n=De(e,t);return this.fillerChars[n]},loadGameWords:function(){var e=me[this.currentLevel];this.wordList=ke(2*e,Ne[this.currentLevel]);var t=De(0,this.wordList.length-1);this.passWord=this.wordList[t]},loadHexList:function(){for(var e=[],t=0;t<this.rowCount;t++)e.push({key:t,val:this.getHexString()});return e},getColumnCharsRowList:function(e){var t=this,n=e.map((function(e){return{type:"word",val:e,valList:e.split("").map((function(e){return{key:t.getRandId(),char:e}}))}})),c=n.length,s=Pe(ye[this.currentLevel],Ce,this.fillerChars),a=s.join("").length,i=s.map((function(e){return{type:"helper",val:e,valList:e.split("").map((function(e){return{key:t.getRandId(),char:e}}))}})),r=this.colCount*this.rowCount,l=Ae[this.currentLevel]*n.length,o=r-l-a;n=n.concat(i);for(var d=0;d<o-c;d++){var E=this.getRandomFillerChar();n.push({type:"filler",val:E,valList:[{key:this.getRandId(),char:E}]})}for(var O=[],u=0;u<c;u++){var h=this.getRandomFillerChar();O.push({type:"filler",val:h,valList:[{key:this.getRandId(),char:h}]})}var b=n.map((function(e){return{__sort:Math.random(),__val:e}})).sort((function(e,t){return e.__sort-t.__sort})).map((function(e){return e.__val})),L=[];return b.forEach((function(e){"word"===e.type&&L.push(O.shift()),L.push(e)})),L.map((function(e){var n=t.tabIndex++;return Object(Re["a"])(Object(Re["a"])({},e),{},{key:n,valList:e.valList.map((function(e){return Object(Re["a"])(Object(Re["a"])({},e),{},{charIndex:t.charIndex++,key:n})}))})}))},clearfeedbackRows:function(){this.feedbackRows.splice(0,this.feedbackRows.length)},appendfeedbackRows:function(e){15===this.feedbackRows.length&&this.feedbackRows.shift(),this.feedbackRows.push({key:this.feedbackRowsKey++,val:e})},handleKeyEvents:function(e){e.preventDefault();var t=this.selected,n=t.charIndex,c=t.key,s=t.type,a=this.lastRightIdx,i=this.nodeList[this.lastRightIdx].valList[this.nodeList[this.lastRightIdx].valList.length-1].charIndex,r=null,l=e.key;"Tab"===l&&(l=e.shiftKey?"ArrowLeft":"ArrowRight");try{switch(l){case"ArrowLeft":if("word"===s)if(0===c)r=i;else{var o=this.nodeList[c-1].valList[this.nodeList[c-1].valList.length-1].charIndex;r=o}else r=n>0?n-1:i;break;case"a":case"ArrowUp":var d=n-this.colCount;d<0&&(d=i+1+d),r=d;break;case"ArrowRight":if("word"===s)if(c===a)r=0;else{var E=this.nodeList[c+1].valList[0].charIndex;r=E}else r=n<i?n+1:0;break;case"z":case"ArrowDown":var O=n+this.colCount;O>i&&(O=O-i-1),r=O;break}null!=r&&document.getElementById("char_".concat(r)).focus()}catch(u){console.log(u)}},onSelect:function(e){var t=e.command,n=e.node,c=e.nodeIdx,s=e.charIndex;try{if(this.attemptsRemaining<1)return!1;var a=n.key,i=n.type,r=n.val,l=n.valList;if(this.selected=Object(Re["a"])(Object(Re["a"])({},this.selected),{},{key:a,type:i,val:r,valList:l,nodeIdx:c,charIndex:s,command:t}),"select"===t){var o=i;"word"==o?this.onWordSelect():"helper"==o&&(this.removeDud(),this.appendfeedbackRows("DUD REMOVED"))}}catch(d){console.log("!!!!!!!ERROR-onSelect!!!!!!!!!!!"),console.log(d)}},removeDud:function(){var e=this.passWord,t=this.nodeList.filter((function(t){return"word"===t.type&&t.val!==e})),n=t[De(0,t.length-1)];this.dashDud(this.selected.key),this.dashDud(n.key)},dashDud:function(e){this.nodeList[e].type="filler",this.nodeList[e].valList.forEach((function(e){e.char="-"})),this.nodeList[e].val=this.nodeList[e].valList.map((function(e){return e.char})).join("")},onWordSelect:function(){for(var e=this,t=this.passWord,n=this.selected.val,c=!0,s=0,a=0;a<this.passWord.length;a++)t.charAt(a)===n.charAt(a)?s++:c=!1;this.appendfeedbackRows(this.selected.val),c?(this.countDownActive=!1,this.clearfeedbackRows(),this.appendfeedbackRows("Exact Match!"),this.currentLevel===this.LEVEL_TYPE.LEVEL_3?(this.appendfeedbackRows("Please wait"),this.appendfeedbackRows("while System"),this.appendfeedbackRows("is accessed"),setTimeout((function(){return e.displayMode=ge.CREDITS}),2e3)):(this.appendfeedbackRows("Accessing"),this.appendfeedbackRows("next step"),setTimeout((function(){return e.loadNextLevel()}),1600))):(this.attemptsRemaining--,this.resetClock(),0===this.attemptsRemaining?(this.countDownActive=!1,this.lockOut()):(this.appendfeedbackRows("Entry Denied"),this.appendfeedbackRows("".concat(s,"/").concat(t.length," correct"))))},lockOut:function(){this.clearfeedbackRows(),this.appendfeedbackRows("Locked Out"),this.appendfeedbackRows("NO ATTEMPTS LEFT")},resetClock:function(){this.countDown=this.LEVEL_TIMER[this.currentLevel]},startTimer:function(){var e=this;console.log("This start timer"),this.countDownActive&&(this.countDown>=1?(this.countDown--,this.countDownRef=setTimeout((function(){e.startTimer()}),1e3)):(this.appendfeedbackRows("TIME EXPIRED"),this.appendfeedbackRows("attempt removed"),this.attemptsRemaining--,this.attemptsRemaining>0?(clearTimeout(this.countDownRef),this.resetClock(),this.startTimer()):(this.countDownActive=!1,this.lockOut())))},getRandId:function(){return Object(Xe["a"])()},loadNextLevel:function(){if(this.currentStep===this.LEVEL_STEPS[this.currentLevel]-1){var e=this.currentLevel===this.LEVEL_TYPE.LEVEL_1?this.LEVEL_TYPE.LEVEL_2:this.LEVEL_TYPE.LEVEL_3;this.currentStep=0,this.reset(e)}else this.currentStep++,this.reset(this.currentLevel,this.currentStep)},reset:function(e,t){var n=this,c=we(e,t);Object.keys(c).forEach((function(e){var t=c[e];Array.isArray(t)?n[e].splice(0,n[e].length):"object"===Object(je["a"])(t)?n[e]={}:n[e]=t})),this.initializeGame(),this.displayMode=ge.GAME},initializeGame:function(){var e=this,t=me[this.currentLevel];this.loadGameWords();var n=this.getColumnCharsRowList(this.wordList.slice(0,t));this.lastLeftIdx=n[n.length-1].key,n=n.concat(this.getColumnCharsRowList(this.wordList.slice(t,this.wordList.length))),this.lastRightIdx=n[n.length-1].key,this.leftHexList=this.loadHexList(),this.rightHexList=this.loadHexList(),this.nodeList.splice(0,this.nodeList.length),n.forEach((function(t){return e.nodeList.push(t)}));var c=Object(pe["a"])(this.nodeList,1),s=c[0];this.selected={key:s.key,type:s.type,val:s.val,valList:Object(ve["a"])(s.valList),nodeIdx:0,charIndex:0},this.requiresDomEvents&&(window.addEventListener("keydown",this.handleKeyEvents),this.requiresDomEvents=!1),setTimeout((function(){e.countDownActive=!0,e.startTimer()}),500)},calcScale:function(e,t){return t/e},scaleScreen:function(){var e=document.getElementById("app-component"),t=e.offsetWidth,n=e.offsetHeight;this.gameBoard.x.s=this.calcScale(this.gameBoard.x.w,t),this.gameBoard.y.s=this.calcScale(this.gameBoard.y.h,n);var c=this.gameBoard.x.s<this.gameBoard.y.s?this.gameBoard.x.s:this.gameBoard.y.s,s=document.getElementById("container");s.style.transform="scale("+c+")",s.style.left=Math.abs(parseInt((this.gameBoard.x.w*c-t)/2,10))+"px",s.style.top=Math.abs(parseInt((this.gameBoard.y.h*c-n)/3,10))+"px"}},mounted:function(){window.addEventListener("resize",this.scaleScreen),this.scaleScreen()},unmounted:function(){window.removeEventListener("keydown",this.handleKeyEvents),window.removeEventListener("resize",this.scaleScreen)}};Qe.render=Ee;var qe=Qe,Je={name:"App",data:function(){return{showShroud:!0,animate:!1}},methods:{hideShroud:function(){var e=this;this.animate=!0,setTimeout((function(){e.showShroud=!1}),1e3)}},components:{GameBoard:qe,AsciiCrab:Ke}};Je.render=b;var $e=Je;n("a347");Object(c["b"])($e).mount("#app")},a347:function(e,t,n){},e525:function(e,t,n){e.exports=n.p+"img/crabflat-grey.96265b80.svg"}});
//# sourceMappingURL=app.56c6ced3.js.map