(window.webpackJsonp=window.webpackJsonp||[]).push([[3,6],{256:function(t,e,n){"use strict";var r=n(13),o=n(1),l=n(3),d=n(104),c=n(18),f=n(14),h=n(190),m=n(38),v=n(103),w=n(189),x=n(4),I=n(80).f,y=n(33).f,N=n(17).f,T=n(257),k=n(191).trim,_="Number",C=o.Number,S=C.prototype,E=o.TypeError,z=l("".slice),O=l("".charCodeAt),A=function(t){var e=w(t,"number");return"bigint"==typeof e?e:F(e)},F=function(t){var e,n,r,o,l,d,c,code,f=w(t,"number");if(v(f))throw E("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=k(f),43===(e=O(f,0))||45===e){if(88===(n=O(f,2))||120===n)return NaN}else if(48===e){switch(O(f,1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+f}for(d=(l=z(f,2)).length,c=0;c<d;c++)if((code=O(l,c))<48||code>o)return NaN;return parseInt(l,r)}return+f};if(d(_,!C(" 0o1")||!C("0b1")||C("+0x1"))){for(var W,M=function(t){var e=arguments.length<1?0:C(A(t)),n=this;return m(S,n)&&x((function(){T(n)}))?h(Object(e),n,M):e},P=r?I(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),j=0;P.length>j;j++)f(C,W=P[j])&&!f(M,W)&&N(M,W,y(C,W));M.prototype=S,S.constructor=M,c(o,_,M)}},257:function(t,e,n){var r=n(3);t.exports=r(1..valueOf)},259:function(t,e,n){"use strict";n.r(e);n(256);var r={props:{question:{type:Object,required:!0},index:{type:Number,required:!0}},data:function(){return{questionIsOpen:!1}},methods:{toggleQuestion:function(){this.questionIsOpen=!this.questionIsOpen}}},o=n(22),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pt-6"},[n("dt",{staticClass:"text-lg"},[n("button",{staticClass:"\n\t\t\t\t\ttext-left\n\t\t\t\t\tw-full\n\t\t\t\t\tflex\n\t\t\t\t\tjustify-between\n\t\t\t\t\titems-start\n\t\t\t\t\ttext-gray-400\n\t\t\t\t",attrs:{type:"button","aria-controls":"faq-0","aria-expanded":"false"},on:{click:t.toggleQuestion}},[n("span",{staticClass:"font-medium text-white"},[t._v("\n\t\t\t\t\t"+t._s(t.question.question)+"\n\t\t\t\t")]),t._v(" "),n("span",{staticClass:"ml-6 h-7 flex items-center"},[n("svg",{staticClass:"rotate-0 h-6 w-6 transform",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"}})])])])]),t._v(" "),n("dd",{directives:[{name:"show",rawName:"v-show",value:t.questionIsOpen||0===t.index,expression:"questionIsOpen || index === 0"}],staticClass:"mt-2 pr-12",attrs:{id:"faq-0"}},[n("div",{staticClass:"text-base text-gray-300",domProps:{innerHTML:t._s(t.question.answer)}})])])}),[],!1,null,null,null);e.default=component.exports},263:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{questionIsOpen:!1,questions:[{question:"Wie sieht mein Training aus?",answer:"Mein Training ist sehr vielseitig und spielerisch gestaltet. Gleichzeitig gehen wir mit höchster Konzentration und Zielstrebigkeit vor. Aspekte der Ausdauer, Kraft, Schnelligkeit, Balance, Koordination, Konzentration und mentalen Stärke finden dabei in meinem Training ihren Platz. Auch Verletzungen bekommen wir wieder in den Griff."},{question:"Für wen ist mein Training geeignet?",answer:"Das Training ist grundsätzlich für jeden geeignet, der daran interessiert ist seinen Körper auf das nächste Level zu bringen. Es sind keine Vorkenntnisse notwendig, um mit einem Training bei mir zu starten. Jeder ist willkommen!"},{question:"Was solltest du mitbringen?",answer:"Für das Training solltest du bereit sein die nötige Arbeit zu investieren."},{question:"Welche Ergebnisse kannst du erwarten?",answer:"Die Ergebnisse, die wir zusammen erreichen hängen davon ab, wieviel Zeit du investierst und wie qualitativ hochwertig du die einzelnen Trainingseinheiten durchführst. Sprich – es hängt vor allem von dir ab. Ich kann dir den optimalen Weg ebnen, doch betreten musst du ihn selbst."},{question:"Was kostet das?",answer:'<h2 class="mb-2">Meine Stundensätze setzen sich folgendermaßen zusammen</h2><ul class="space-y-1 mb-2"><li>1 Personal Trainer Stunde/Woche - 80€ die Stunde</li><li>2 Personal Trainer Stunde/Woche - 70€ die Stunde</li><li>3 Personal Trainer Stunde/Woche - 60€ die Stunde</li><li>4 Personal Trainer Stunde/Woche - 50€ die Stunde</li></ul>'}]}},methods:{handleToggleQuestion:function(){console.log("Toggle"),this.questionIsOpen=!this.questionIsOpen}}},o=n(22),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"relative",attrs:{id:"faq"}},[n("div",{staticClass:"px-4"},[n("div",{staticClass:"\n\t\t\t\tabsolute\n\t\t\t\ttop-0\n\t\t\t\tleft-0\n\t\t\t\th-full\n\t\t\t\tw-full\n\t\t\t\tbg-gray-900\n\t\t\t\tz-20\n\t\t\t"}),t._v(" "),n("div",{staticClass:"\n\t\t\t\tmax-w-7xl\n\t\t\t\tmx-auto\n\t\t\t\tpy-12\n\t\t\t\tpx-4\n\t\t\t\tsm:py-16 sm:px-6\n\t\t\t\tlg:px-8\n\t\t\t\trelative\n\t\t\t\tz-20\n\t\t\t"},[n("div",{staticClass:"max-w-3xl mx-auto divide-y divide-gray-700"},[n("h2",{staticClass:"\n\t\t\t\t\t\ttext-center text-3xl\n\t\t\t\t\t\tfont-extrabold\n\t\t\t\t\t\ttext-orange-200\n\t\t\t\t\t\tsm:text-4xl\n\t\t\t\t\t\ttext-uppercase\n\t\t\t\t\t\tfont-display\n\t\t\t\t\t\tuppercase\n\t\t\t\t\t"},[t._v("\n\t\t\t\t\tHäufig gestellte Fragen\n\t\t\t\t")]),t._v(" "),n("dl",{staticClass:"mt-6 space-y-6 divide-y divide-gray-700"},t._l(t.questions,(function(e,i){return n("QA",{key:i,attrs:{question:e,open:t.questionIsOpen,index:i}})})),1)])])])])}),[],!1,null,"89ca024e",null);e.default=component.exports;installComponents(component,{QA:n(259).default})}}]);