(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./src/example.mdx":function(e,t,n){"use strict";n.r(t);var a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=n("./node_modules/react/index.js"),l=n.n(i),c=n("./node_modules/@mdx-js/react/dist/index.es.js"),b=n("./node_modules/docz/dist/index.esm.js"),r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),s=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),p=(n("./src/styles.scss"),function(e){return l.a.createElement("button",Object(a.a)({type:"button"},e,{className:"rtf--ab"}),e.children)}),d=function(e){return l.a.createElement("button",Object(a.a)({type:"button",className:"rtf--mb"},e),e.children)};d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MB",filename:"src/index.jsx"}});var m={bottom:24,right:24},u=function(e){var t=e.event,n=void 0===t?"hover":t,a=e.position,o=void 0===a?m:a,c=e.alwaysShowTitle,b=void 0!==c&&c,p=e.children,u=e.icon,j=e.mainButtonStyles,h=Object(i.useState)(!1),O=Object(s.a)(h,2),A=O[0],g=O[1],C=function(){return g(!0)},y=function(){return g(!1)};return l.a.createElement("ul",{onMouseEnter:function(){return"hover"===n&&C()},onMouseLeave:function(){return"hover"===n&&y()},className:"rtf ".concat(A?"open":"closed"),style:o},l.a.createElement("li",{className:"rtf--mb__c"},l.a.createElement(d,{onClick:function(){return"click"===n?A?y():C():null},style:j,role:"button","aria-label":"Floating menu",tabIndex:"0"},u),l.a.createElement("ul",null,function(){6<l.a.Children.count(p)&&console.warn("react-tiny-fab only supports up to 6 action buttons");var e=b||!A;return l.a.Children.map(p,function(t,n){return t&&l.a.createElement("li",{className:"rtf--ab__c ".concat("top"in o?"top":"")},l.a.cloneElement(t,Object(r.a)({"data-testid":"action-button-".concat(n),"aria-label":t.props.text||"Menu button ".concat(n+1),"aria-hidden":e},t.props,{onClick:function(){return function(e){g(!1),setTimeout(function(){e()},1)}(t.props.onClick)}})),t.props.text&&l.a.createElement("span",{className:"".concat("right"in o?"right":""," ").concat(b?"always-show":""),"aria-hidden":e},t.props.text))})}())))};"undefined"!=typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AB",filename:"src/index.jsx"}}),"undefined"!=typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Fab",filename:"src/index.jsx"}}),n.d(t,"default",function(){return O});var j={},h="wrapper";function O(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)(h,Object(a.a)({},j,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("img",{alt:"React Tiny FAB",src:"https://raw.githubusercontent.com/dericgw/react-tiny-fab/master/logo.png"})),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"A tiny (~700 byte gzip) WAI-ARIA compliant Floating Action Button for React")),Object(c.b)("h2",{id:"install"},"Install"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"   npm install react-tiny-fab\n   yarn add react-tiny-fab\n")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"react-tiny-fab")," v3 now relies on React version 16.8 and up because it is implemented using ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactjs.org/docs/hooks-intro.html"}),"React Hooks"))),Object(c.b)("h2",{id:"usage"},"Usage"),Object(c.b)("p",null,"There are two components available for import - ",Object(c.b)("inlineCode",{parentName:"p"},"Fab")," and ",Object(c.b)("inlineCode",{parentName:"p"},"Action"),". You import them like this:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"   import { Fab, Action } from 'react-tiny-fab';\n   import 'react-tiny-fab/dist/styles.css';\n")),Object(c.b)("h2",{id:"example"},"Example"),Object(c.b)("p",null,"Here is an example of how you would use the components:"),Object(c.b)(b.c,{__position:0,__code:"<h4>Check the bottom right of the screen</h4>\n<Fab icon={<span>+</span>} mainButtonStyles={{ backgroundColor: '#e74c3c' }}>\n  <Action\n    text=\"Add Something\"\n    style={{ backgroundColor: '#3498db' }}\n    onClick={() => alert('It works!')}\n  >\n    +\n  </Action>\n  <Action\n    text=\"Assign Something\"\n    style={{ backgroundColor: '#3498db' }}\n    onClick={() => alert('It still works!')}\n  >\n    =\n  </Action>\n</Fab>",__scope:{props:this?this.props:n,Playground:b.c,Fab:u,Action:p},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwdh5FdY12gPAAvP1-TtSD2AAMVcDwlgAQUlAZzDQo1ZXaD04AEchcIg9hA0ldC6NNRUwVQXQUWOU4sOcAhEixdhuHYYB1iiARnlQK52gABnYJMZiwdo92rGYOxYGdFIAFnU9gADZ1M09YwGA4iiGgRJFP4ZxDgRB1MBgoR-CWIhqEoOAdIRCzqysmhnAgLDLnYABGAytPkXj-KmMi5gk9gIyg8gbCgdAw1QjkJLEVLoxkdgUTEmBuGAbCRLKuB5C3GtgAy6BsuCAAyVrxkSeZKGaJqspy7hBrlMBkMo6h2nYAB-DZmrDCM8quPqWtQOLqykGQqzfMwYXVY4YDAMIoCmeb8sKtakuXasE3YggcEIzIUivAh6prWs8AM1NNh2fFui8G5jX6FJCD2ZoJm6OByC6OgKw-lcE2Ijw4ZrWJqAqxg_PcMQAGopAx1AxFW17XqiNBr3CCJUGqrEKqgjwJW2RC2gwRwoCFRSAGIYAAdgM8gk2Y1DCaJl6icYCju39K6iYsWgsAIPgQDIzt2Cco8JgKfgkde0rYBp9g6Z2RnkPQFm2bldmkwMgBOAAOKoJvkIXpYsah7CgWJtgqk7uAK-IMgIR8mzzIVtjgABCV8neFrWayxmOpHFqiRdesWxsl52a1l-X-DIuB8hScxVdHGwZ01qXpZ18rgFp-mjeZyhWbLc3Ldt-3BZjl3UDdj2vbyn2QlgYVA6mFFoCgYOBFDiOOSj17k6Jvhy5rBO0_nqQEZFqQbruh6nvqhO5k2swvxARjyEkVRsH_OAsEA3QQIMMC8N2m6ligvIYBErJUM4k1NT9W0u16KSErnAHAEM84AL4tQASZFrwpRmKdKMa0PDk2ZKJeYCtUH_X9CAKSOACEzDQuQOCecABy3pyr8GFGAc05oSLiBXMAGYHxMrLSFlIbBFNNoqkljte0CV2B6ngZJRB_dkEJi4egrqVCQBSNwT0UhcAKFHgVjQuhRBEZ4OAAQnARCRbMNYbNOgHDJDyJ4fFGBUxMAHVCEdaCvkXhURSrTEQEQiBXAAEwxQnBAIGBAvEGVQrwswgiEYpTSusGArAXSSXaMMGJAhAoWEFPkCWKUbGHQIA4tJVEtIWHiCMeCcBnDDBGJYF4sAUoHSgHAGA-SZr9ToA0lGqAGkk1QGTHBVN4CxT7gVaS1ZBEAG1bA6nmG0kqo4GhwHGXQAAuilD-X9aARhqXUj8vELCCMoBMiJ_SpkEBmXM1AEZUQMk2UMqxijfLdEkt7AqdSjmzImWs-IGzeHbOufoDI-zTrRNiUNeJlBEkTXansV5lyvmoAEuSGJfz-4AszINOJCSMhgo6iQ2581PmFhhVMCIGIqn3IORGJFUwUVyhIR7Ca00IxjL2dNLFdSTpXF2XQeaC12CoDsVAS56xBFmiojqLu7tvqSQ_gIQio1TqDO1tMl5HL1kwChTWJ5FSjz7AjA8qSSNJXSr4jilcSgoqqvkCEq5-KJzkARQMlcEBmgRm3vYNhYYPhMwDktMMeUComTfNLfiDc_xFIEKc-UZpzQxFQIkc0B0PB7FQEkEqoQ5jqjsCmocpkQhp31mgmFr5cXQoEq4forgAASXBMDmEkoU4ppTRgVIIFUgAPs29gYcGV0Ata9LoBA-jmGda6ugOAogzAjF65pqUMpLAgKSpGjB3aKP8MoyhFVijqPoR4AA-lum1AASYA7QIgzAmmgPsjj0nTSPbsiail2jyGKHVGOwBt5YudBeGAT1x14Dfh3OU6BoiuEjfAGI6B2hXGKEK6g5p5HmgPRAB9DSM7tBLRAIDcFAhQHAxsPRA4wFZ3YK29gxQ9R0ChPI9g8H2BYyiohv9KHS3mhsJ2Og2HUPlsrc0v9uiMq4d2XAJDztXZiu2FcHVUHUAiu7jsb9fG7g4GEx7DkgnXryBns-3j_Z-M4AI-CiRGdax4z_dspRKiq7FAPZ0PxhBT3mFSU45kV7AY2fYHetCB7jM1lrYkEpZTG1VKvd5uA5o4BlNvXKdonmH2z2duxpjnHUAVXYxWljK0_3z2lo1PAcn8PYAIDFlOICdL4xjuppeUh3Yiw5Ga7tE5Rz9rOinOxSNqB6kGDAM8egBAVR-QIGLrX2sABlxQxIqnCmAMWSHLrM2umhlHgCdvMFe9lqBwvtGZdke9j6kYAYIEB2go8eD8DjWXCuoldbMIvVRKOa9F1TfIau6hBBaHmk0Tu8gjCl4JmEX-xTOwKqEsxBNv9lcKodK6RTHptU_27f2yBrgCsOkwbzadgzQhdb8HkajjOcWMPzgVoRVm0QCjsCvKEbHzs9seAaOGLACslIU7nn-hbugCu1kkMIjLtY7FiGAExea8gpA8_nZISrK4hdQHqpc81vF-EEQRuReB_h2CJ2ZDL1AJ8z4gPO_AcBZwtAUGAvoBgoZnu6urNUELYUChXC8AIKcMHvC4tkvJLxABWdSuL7MSyuJAGo6BcUjBsLQEL_kIqoFGJkGYuKsLmkvlgK4Vsk82y97pAo5pYBgACewJSuL3YohCzrq4EfnS4tagpvZcqaym5e5o830sCpGHr5TzIMKrICCIOaIUfi0CLV6z0XrhaiaoncHAdvHiJwiCyBGJMkU3eYBSKq6WI-YUOYUtCCkcfUBd_COMVvY-hSyiUjgTxcAh8WBiwVOxzfpb54tJXYv1AYDn5rC73vOeX8pLT_pD_SMo5RxrzoRInexvxrFakQDRSOCrwbxKmK1AOX33zXyuHFDqS3x3wOH8heGSGP1P0_xrF2QlCwKuGPytjwJi0v1gPcBwCCxCzKXgMzkQJ9w31QLQHQIhUINEhzxPzPxjgIPICIK4NIL_yRnAJoDwHNCWgjEijymgOH333HyuBXzgDgloAAE0IxzQTIlJ1I8oIY_YpCl85DR819LR5x4JiCcAlIkweCvt2By9j16DXolCFC99R8VCYB1CtCdCSo4hYADCyDhCl5RCJgJC2EIxPEZCY5nDD9FD993D1DzRIpPFtCsBdDfCYB_CojGCqJTC4J7IuClIrYbCM57DdlHCGDR8XClD4ipDkjvC9C_DpCAil4YtgjxDJCkxIjbDoiO9Yi3CsgEjIobYUi0j9CmisjjCJZcjzCuCkjijnZSjEFZCEDKiYjXCYUaihiRifCxjDDVNAjpY2jQjmoIwDIuiM4eiJ9qiBiNDvFtiGiMjxjujsjoNMA8iLC595jDidMyjlijC281jri1DwiDJ7j0jMjbDyCRDEAxDjisoIw3dziW9Vjej1jlCbjzQkwlIwTdi8ClCTC3iZjj8hiviiZFjyiZZ5DAS4ibisScTGi9iawoSgiYSQjJC_VyjLi-iNiMSkwvDUidiGS8SXjt9CT8icDIpSTXpyS_inCqTUSgSPCZ9-TRihSY5mT9jqxVpVozBADXtt1d1m8dJOwbd2BPEPcsBncS1Xd2BzRzTPd1gjBEBSELQlpQC39t8_p3FiDcVtTeI9S68q9NhrNs83czJLT1gcR0AJgrgwyHTqxY949E8k8hCLda4kIMAJCG4zZ2YTI8z8zcUWA_J3jOBE00AYBY1YAIzqx1A8gYgwAY1759A-8utcV4g_Ft8XhP17gB9Wz1hvcqIrgugVC2Bn91g7cpxH9S9xyhQHdMgWA8hYylIABSXFS3ULDsUYYgnPdgIyHwOSOmCMJSJYY8nPE8nAaKZTHcvc9gG2YyA81wI8k858rgzxG2VVXoAQOAM2QUNAWgAQXFfYd2Z0Kcsc7Sb_FIH09Yc0EYGADwbYF4c0SVS0B6UC3FYKC0WCkM23BuAPAVbMpudmMASKYi4i9C4CK3cKK4IY-MiwRvUA_EpglAis1g_YNE8fV8-Yv0yWPU4Aw0qvIsskGYjwVmHYL3K7agK4Eib8qAcIMCmWXZKC6sZzbPSKWivsCC6ilI3_asD0sTRI7Y3PdYRiwc5gli7fNiy4zi3FR5OA2QvggQoyqWEyySsytAtihyzgnA0kgc1y6ShuOSofY9Jc1clcLktEmo80N3Fcwwj080FSq4cMofA2BmDM9AIclIQ8087K88rmREofY0vSSCs04yPc5K2cjIeKjsCARckq6s16KgRuK4IPLsofDCyiiKSKNSeqmsdcvwE4EYbclSG8h8p8s88a4ks4k83c4yO8_czKx8nKiak_d8ofcvFS-ghKqKbE0KqWIWIWI4yQ6Qhi-Uq4mk4EzQ-kjIpSQwly0Usw8Uk_SUtan4pYpGcKxUzwq6o8ww_a9YQ6sIiIk6lEs6_oi6pI76m6oKkU6Yx6kkl6hwv4j686pUiG-o8EqG41dYA61k9osIzo4GgEhUlGwY4Y9G_QzG5ymGsUj4t3UkmU96067k9E4ErY8mvwymzUi_f63GuEh8M4wmg_YmsGpUu00E9m66266mh6j43AlcBmpeZGkW9Qu4iWn6ofP66sAGk4xEwWqokmjQuktWzmio1fKYmmgooohG34xmkG5mmoo2gUh49WrGrUnm2E9kpEyku2iK3klUwUyW6GyYnIi24_Kw-m16-gpWnk4EvkyG367GswHU1AXi-NIMmAbC3cuawPLgGMrO9SlKuudALMpq9gdmVwCuyuws2wIS_ItAYCissAKs3FWs0eBsrMvQGgFs_8ts92AuOPWgIgHshEPs7SCS9fYc4nGJNciqpuEveS_WWeqqhcns6K3aiwPqzcwanc4a-8hasapayaq83enwOaicfew-88t8j8vob8puX80el2cIButC_szSnSiwGCuChCi0ZC7KVwYq-e8imgL-zOrwLKXFRqnM0ikiyKK0uSVgrasqyyCi_IKiqKJK9YRM2nLS7Epy1aE-fybYABv8TQagO-I3UCEAKvfgVAShfgK4fgH4YsaoSqn8MkRkEABpfgRJfIagBh9gfgMOywzydYfgcoSGCAGYCWARnOEqPCKpdhqpTAMkSgRIXMPIEnbiV0osP4UsUR6sfgDpWRlQWna-AxiwcRmACZKtfg-AAR2Q8RoSExgAPUihPxEa4ZXGoU1FccihMhwBthPwsZrB8YjStD8YCaCc8VR21M1z0dwF0EgBSGvnIe0CbKoekhAEHqEtoAYaYdNBD20foTmH4HkAUEdiAA",mdxType:"Playground"},Object(c.b)("h4",null,"Check the bottom right of the screen"),Object(c.b)(u,{icon:Object(c.b)("span",null,"+"),mainButtonStyles:{backgroundColor:"#e74c3c"},mdxType:"Fab"},Object(c.b)(p,{text:"Add Something",style:{backgroundColor:"#3498db"},onClick:function(){return alert("It works!")},mdxType:"Action"},"+"),Object(c.b)(p,{text:"Assign Something",style:{backgroundColor:"#3498db"},onClick:function(){return alert("It still works!")},mdxType:"Action"},"="))),Object(c.b)("p",null,"Here is an example of how you would use the components:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'// The Fab is the main button. Pass any component to the icon prop and choose \n// either click or hover for the event (default is hover)\n<Fab\n  mainButtonStyles={mainButtonStyles}\n  actionButtonStyles={actionButtonStyles}\n  position={position}\n  icon={<MdAdd />}\n  event={event}\n  alwaysShowTitle={true}\n>\n  // The Action components are the "buttons" that appear when the Fab is open. You can use the out-of-the-box Action \n  // component or you can use a custom component of any type and style it any way that you\'d like. The "text" prop\n  // is the popup label that appears when the Action component is hovered.\n  <Action\n    text="Email"\n    onClick={handleEmailOnClick}\n  >\n  <Action\n      text="Help"\n      onClick={handleHelpOnClick}\n    >\n    <i className="fa fa-help" />\n  </Action>\n  // Using a custom component for this one. See another example in "example/src/index.js"\n  <SomeCustomComponent\n    text="Foobar!"\n    onClick={handleTheFooBarOnClick}\n  >\n      <i className="fa fa-foo-bar-fa-foo" />\n    </SomeCustomComponent>\n</Fab>\n')),Object(c.b)("h2",{id:"components"},"Components"),Object(c.b)("h3",{id:"fab-"},Object(c.b)("inlineCode",{parentName:"h3"},"<Fab />")),Object(c.b)("p",null,"This is the main component that controls the Floating Action Button."),Object(c.b)("h4",{id:"props"},"Props"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Prop"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"mainButtonStyles")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"React.CSSProperties object"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"{}"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"false"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"This object is passed to the main button's ",Object(c.b)("inlineCode",{parentName:"td"},"style")," prop so use React styles to style the button.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"position")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"object"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"{ bottom: 24, right: 24 }")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"false"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Where do you want your FAB to be located? Use ",Object(c.b)("inlineCode",{parentName:"td"},"top"),", ",Object(c.b)("inlineCode",{parentName:"td"},"left"),", ",Object(c.b)("inlineCode",{parentName:"td"},"bottom"),", ",Object(c.b)("inlineCode",{parentName:"td"},"right")," properties to declare where you want the FAB to be positioned.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"icon")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"React Element/Component"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"true"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"This element/component will be the used as the icon for the main button. This can be text, or a Font Awesome icon, or any other component.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"event")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"'hover'"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"false"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"What type of event do you want to make the FAB menu active? This can be either ",Object(c.b)("inlineCode",{parentName:"td"},"click")," or ",Object(c.b)("inlineCode",{parentName:"td"},"hover"),".")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"children")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"React Element/Component"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"false"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"This is the children that will be mapped and rendered. This can be anything. There can be up to 6, but no more than 6. An ",Object(c.b)("inlineCode",{parentName:"td"},"Action")," component is provided out of the box.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"alwaysShowTitle")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"boolean"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"false"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"false"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"If the title of the ",Object(c.b)("inlineCode",{parentName:"td"},"Action")," component should always be shown (not just on hover), set this to true and the title will always be shown")))),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Based on the ",Object(c.b)("inlineCode",{parentName:"p"},"position")," prop, the FAB will figure out the direction of the ",Object(c.b)("inlineCode",{parentName:"p"},"<Action />")," ",Object(c.b)("inlineCode",{parentName:"p"},"text")," and also which way to\nexpand when hovered/clicked (up or down).")),Object(c.b)("h3",{id:"action-"},Object(c.b)("inlineCode",{parentName:"h3"},"<Action />")),Object(c.b)("p",null,'This component represents the smaller buttons that appear when the main button is hovered/clicked. Now, you do not have\nto use this component. You can use your own custom component(s) and create something totally different than a Floating\nAction Button. For instance, you could create your own "Support Button" that when clicked, will display a chat box or\nsome type of form that submits a contact request.'),Object(c.b)("h4",{id:"props-1"},"Props"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Prop"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"text")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),'""'),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"false"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"This is the text that will be displayed when one of the actions is hovered.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"children")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"React Element/Component"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"false"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"This will be the icon/text for the action.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"...props")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Anything"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"false"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Anything you can add to a React component, you can add here, e.g. (",Object(c.b)("inlineCode",{parentName:"td"},"onClick"),", ",Object(c.b)("inlineCode",{parentName:"td"},"style"),", etc.)")))),Object(c.b)("h2",{id:"demo"},"Demo"),Object(c.b)("p",null,"Check out the ",Object(c.b)("inlineCode",{parentName:"p"},"index.html")," file in the ",Object(c.b)("inlineCode",{parentName:"p"},"example")," folder for an example of the traditional FAB and also a form pop-up that could be used to send contact information, or something else."),Object(c.b)("h2",{id:"contributing"},"Contributing"),Object(c.b)("p",null,"If you find a bug, submit an issue with enough information to reproduce the bug. If you have a fix, please do not hesitate to submit a PR. If you feel that the API needs to be modified, open an issue so that we can discuss it first."),Object(c.b)("h3",{id:"running-the-dev-environment"},"Running the dev environment"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"Clone the repo - ",Object(c.b)("inlineCode",{parentName:"li"},"git clone https://github.com/dericgw/react-tiny-fab.git")," && ",Object(c.b)("inlineCode",{parentName:"li"},"cd react-tiny-fab")),Object(c.b)("li",{parentName:"ol"},"Install the dependencies - ",Object(c.b)("inlineCode",{parentName:"li"},"npm i")),Object(c.b)("li",{parentName:"ol"},"Run the example - ",Object(c.b)("inlineCode",{parentName:"li"},"npm start")," ",Object(c.b)("em",{parentName:"li"},"Visit ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"http://localhost:5000"}),"http://localhost:5000")))),Object(c.b)("p",null,"Once you get that going, you should be able to make changes and the page should refresh automatically when those changes are saved."),Object(c.b)("h3",{id:"testing"},"Testing"),Object(c.b)("p",null,"This package is only one JS file and it is tested pretty good. Make sure that none of the tests are breaking if changes\nare made. Also, if you add new functionality and it ",Object(c.b)("em",{parentName:"p"},"warrants")," testing, please add tests. If you need help with this, I\nwill gladly help."),Object(c.b)("h2",{id:"issues"},"Issues"),Object(c.b)("p",null,"If you find an issue, head over to the Issues section and let me know about it. If you want to be super cool, you can submit a PR that fixes the issue."),Object(c.b)("h2",{id:"license-mit"},"License (MIT)"),Object(c.b)("p",null,Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"./LICENSE.md"}),"Check it out here.")))}O&&O===O&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/example.mdx"}}),O.isMDXComponent=!0},"./src/styles.scss":function(e,t,n){}}]);
//# sourceMappingURL=src-example.af74937a1c47e40e72c1.js.map