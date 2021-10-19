(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{WDWg:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return p}));var a=n("Fcif"),o=n("+I+c"),b=n("/FXl"),r=n("TjRS"),c=n("3re2"),i=(n("RD2v"),n("aD51"),{});void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/example.mdx"}});var l=r.a;function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(b.b)(l,Object(a.a)({},n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("img",{src:"https://raw.githubusercontent.com/dericgw/react-tiny-fab/master/logo.png"}),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"A tiny (~700 byte gzip) WAI-ARIA compliant Floating Action Button for React")),Object(b.b)("h2",{id:"install"},"Install"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre"},"npm install react-tiny-fab\nyarn add react-tiny-fab\n")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("inlineCode",{parentName:"p"},"react-tiny-fab")," v3 and up now relies on React version 16.8 and up because it is implemented using ",Object(b.b)("a",{href:"https://reactjs.org/docs/hooks-intro.html",parentName:"p"},"React Hooks"))),Object(b.b)("h2",{id:"usage"},"Usage"),Object(b.b)("p",null,"There are two components available for import - ",Object(b.b)("inlineCode",{parentName:"p"},"Fab")," and ",Object(b.b)("inlineCode",{parentName:"p"},"Action"),". You import them like this:"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre"},"import { Fab, Action } from 'react-tiny-fab';\nimport 'react-tiny-fab/dist/styles.css';\n")),Object(b.b)("h2",{id:"example"},"Example"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Check the bottom right of the screen")),Object(b.b)(c.b,{icon:Object(b.b)("span",null,"+"),mainButtonStyles:{backgroundColor:"#e74c3c"},mdxType:"Fab"},Object(b.b)(c.a,{text:"Add Something",style:{backgroundColor:"#3498db"},onClick:function(){return alert("It works!")},mdxType:"Action"},Object(b.b)("p",null,"+")),Object(b.b)(c.a,{text:"Assign Something",style:{backgroundColor:"#3498db"},onClick:function(){return alert("It still works!")},mdxType:"Action"},Object(b.b)("p",null,"="))),Object(b.b)("p",null,"Here is an example of how you would use the components:"),Object(b.b)("pre",null,Object(b.b)("code",{className:"language-js",parentName:"pre"},'// The Fab is the main button. Pass any component to the icon prop and choose\n// either click or hover for the event (default is hover)\n<Fab\n  mainButtonStyles={mainButtonStyles}\n  actionButtonStyles={actionButtonStyles}\n  style={style}\n  icon={<MdAdd />}\n  event={event}\n  alwaysShowTitle={true}\n  onClick={someFunctionForTheMainButton}\n>\n  // The Action components are the "buttons" that appear when the Fab is open. You can use the out-of-the-box Action\n  // component or you can use a custom component of any type and style it any way that you\'d like. The "text" prop\n  // is the popup label that appears when the Action component is hovered.\n  <Action\n    text="Email"\n    onClick={handleEmailOnClick}\n  />\n  <Action\n      text="Help"\n      onClick={handleHelpOnClick}\n    >\n    <i className="fa fa-help" />\n  </Action>\n  // Using a custom component for this one. See another example in "example/src/index.js"\n  <SomeCustomComponent\n    text="Foobar!"\n    onClick={handleTheFooBarOnClick}\n  >\n      <i className="fa fa-foo-bar-fa-foo" />\n    </SomeCustomComponent>\n</Fab>\n')),Object(b.b)("h2",{id:"components"},"Components"),Object(b.b)("h3",{id:"fab-"},Object(b.b)("inlineCode",{parentName:"h3"},"<Fab />")),Object(b.b)("p",null,"This is the main component that controls the Floating Action Button."),Object(b.b)("h4",{id:"props"},"Props"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr"},"Prop"),Object(b.b)("th",{parentName:"tr"},"Type"),Object(b.b)("th",{parentName:"tr"},"Default"),Object(b.b)("th",{parentName:"tr"},"Required"),Object(b.b)("th",{parentName:"tr"},"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr"},Object(b.b)("inlineCode",{parentName:"td"},"mainButtonStyles")),Object(b.b)("td",{parentName:"tr"},"React.CSSProperties"),Object(b.b)("td",{parentName:"tr"}),Object(b.b)("td",{parentName:"tr"},"false"),Object(b.b)("td",{parentName:"tr"},"This object is passed to the main button's ",Object(b.b)("inlineCode",{parentName:"td"},"style")," prop so use React styles to style the button.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr"},Object(b.b)("inlineCode",{parentName:"td"},"style")),Object(b.b)("td",{parentName:"tr"},"React.CSSProperties"),Object(b.b)("td",{parentName:"tr"},Object(b.b)("inlineCode",{parentName:"td"},"{ bottom: 24, right: 24 }")),Object(b.b)("td",{parentName:"tr"},"false"),Object(b.b)("td",{parentName:"tr"},"How do you want to style the FAB, specifically the position of the FAB? Use ",Object(b.b)("inlineCode",{parentName:"td"},"top"),", ",Object(b.b)("inlineCode",{parentName:"td"},"left"),", ",Object(b.b)("inlineCode",{parentName:"td"},"bottom"),", ",Object(b.b)("inlineCode",{parentName:"td"},"right")," properties to declare where you want the FAB to be positioned as well as any other styles.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr"},Object(b.b)("inlineCode",{parentName:"td"},"icon")),Object(b.b)("td",{parentName:"tr"},"React Element/Component"),Object(b.b)("td",{parentName:"tr"}),Object(b.b)("td",{parentName:"tr"},"true"),Object(b.b)("td",{parentName:"tr"},"This element/component will be the used as the icon for the main button. This can be text, or a Font Awesome icon, or any other component.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr"},Object(b.b)("inlineCode",{parentName:"td"},"event")),Object(b.b)("td",{parentName:"tr"},"'hover'"),Object(b.b)("td",{parentName:"tr"},"'click'"),Object(b.b)("td",{parentName:"tr"},"'hover'"),Object(b.b)("td",{parentName:"tr"},"false")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr"},Object(b.b)("inlineCode",{parentName:"td"},"children")),Object(b.b)("td",{parentName:"tr"},"React Element/Component"),Object(b.b)("td",{parentName:"tr"}),Object(b.b)("td",{parentName:"tr"},"false"),Object(b.b)("td",{parentName:"tr"},"This is the children that will be mapped and rendered. This can be anything. There can be up to 6, but no more than 6. An ",Object(b.b)("inlineCode",{parentName:"td"},"Action")," component is provided out of the box.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr"},Object(b.b)("inlineCode",{parentName:"td"},"alwaysShowTitle")),Object(b.b)("td",{parentName:"tr"},"boolean"),Object(b.b)("td",{parentName:"tr"},"false"),Object(b.b)("td",{parentName:"tr"},"false"),Object(b.b)("td",{parentName:"tr"},"If the title of the ",Object(b.b)("inlineCode",{parentName:"td"},"Action")," component should always be shown (not just on hover), set this to true and the title will always be shown")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr"},Object(b.b)("inlineCode",{parentName:"td"},"onClick")),Object(b.b)("td",{parentName:"tr"},"function"),Object(b.b)("td",{parentName:"tr"},"null"),Object(b.b)("td",{parentName:"tr"},"false"),Object(b.b)("td",{parentName:"tr"},"If you only need to use the main button for something, then you can attach an ",Object(b.b)("inlineCode",{parentName:"td"},"onClick")," handler to the main button. The React Synthetic Event will be passed in just like a normal ",Object(b.b)("inlineCode",{parentName:"td"},"onClick"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr"},Object(b.b)("inlineCode",{parentName:"td"},"text")),Object(b.b)("td",{parentName:"tr"},"string"),Object(b.b)("td",{parentName:"tr"},"null"),Object(b.b)("td",{parentName:"tr"},"false"),Object(b.b)("td",{parentName:"tr"},"If you attach an ",Object(b.b)("inlineCode",{parentName:"td"},"onClick")," handler to the main button, then the original ",Object(b.b)("inlineCode",{parentName:"td"},"Action")," components would not show. Instead you can attach ",Object(b.b)("inlineCode",{parentName:"td"},"text")," to display while user hover the FAB")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr"},Object(b.b)("inlineCode",{parentName:"td"},"...props")),Object(b.b)("td",{parentName:"tr"},"Anything"),Object(b.b)("td",{parentName:"tr"}),Object(b.b)("td",{parentName:"tr"},"false"),Object(b.b)("td",{parentName:"tr"},"Anything you can add to a React component, you can add here.")))),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Based on the ",Object(b.b)("inlineCode",{parentName:"p"},"position")," prop, the FAB will figure out the direction of the ",Object(b.b)("inlineCode",{parentName:"p"},"<Action />")," ",Object(b.b)("inlineCode",{parentName:"p"},"text")," and also which way to\nexpand when hovered/clicked (up or down).")),Object(b.b)("h3",{id:"action-"},Object(b.b)("inlineCode",{parentName:"h3"},"<Action />")),Object(b.b)("p",null,'This component represents the smaller buttons that appear when the main button is hovered/clicked. Now, you do not have\nto use this component. You can use your own custom component(s) and create something totally different than a Floating\nAction Button. For instance, you could create your own "Support Button" that when clicked, will display a chat box or\nsome type of form that submits a contact request.'),Object(b.b)("h4",{id:"props-1"},"Props"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr"},"Prop"),Object(b.b)("th",{parentName:"tr"},"Type"),Object(b.b)("th",{parentName:"tr"},"Default"),Object(b.b)("th",{parentName:"tr"},"Required"),Object(b.b)("th",{parentName:"tr"},"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr"},Object(b.b)("inlineCode",{parentName:"td"},"text")),Object(b.b)("td",{parentName:"tr"},"string"),Object(b.b)("td",{parentName:"tr"},'""'),Object(b.b)("td",{parentName:"tr"},"false"),Object(b.b)("td",{parentName:"tr"},"This is the text that will be displayed when one of the actions is hovered.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr"},Object(b.b)("inlineCode",{parentName:"td"},"children")),Object(b.b)("td",{parentName:"tr"},"React Element/Component"),Object(b.b)("td",{parentName:"tr"}),Object(b.b)("td",{parentName:"tr"},"false"),Object(b.b)("td",{parentName:"tr"},"This will be the icon/text for the action.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr"},Object(b.b)("inlineCode",{parentName:"td"},"...props")),Object(b.b)("td",{parentName:"tr"},"Anything"),Object(b.b)("td",{parentName:"tr"}),Object(b.b)("td",{parentName:"tr"},"false"),Object(b.b)("td",{parentName:"tr"},"Anything you can add to a React component, you can add here, e.g. (",Object(b.b)("inlineCode",{parentName:"td"},"onClick"),", ",Object(b.b)("inlineCode",{parentName:"td"},"style"),", etc.)")))),Object(b.b)("h2",{id:"demo"},"Demo"),Object(b.b)("p",null,"Check out the ",Object(b.b)("inlineCode",{parentName:"p"},"index.html")," file in the ",Object(b.b)("inlineCode",{parentName:"p"},"example")," folder for an example of the traditional FAB and also a form pop-up that could be used to send contact information, or something else."),Object(b.b)("h2",{id:"contributing"},"Contributing"),Object(b.b)("p",null,"If you find a bug, submit an issue with enough information to reproduce the bug. If you have a fix, please do not hesitate to submit a PR. If you feel that the API needs to be modified, open an issue so that we can discuss it first."),Object(b.b)("h3",{id:"running-the-dev-environment"},"Running the dev environment"),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},"Clone the repo - ",Object(b.b)("inlineCode",{parentName:"li"},"git clone https://github.com/dericgw/react-tiny-fab.git")," && ",Object(b.b)("inlineCode",{parentName:"li"},"cd react-tiny-fab")),Object(b.b)("li",{parentName:"ol"},"Install the dependencies - ",Object(b.b)("inlineCode",{parentName:"li"},"npm i")),Object(b.b)("li",{parentName:"ol"},"Run the example - ",Object(b.b)("inlineCode",{parentName:"li"},"npm start")," ",Object(b.b)("em",{parentName:"li"},"Visit http://localhost:5000"))),Object(b.b)("p",null,"Once you get that going, you should be able to make changes and the page should refresh automatically when those changes are saved."),Object(b.b)("h3",{id:"testing"},"Testing"),Object(b.b)("p",null,"This package is only one JS file and it is tested pretty good. Make sure that none of the tests are breaking if changes\nare made. Also, if you add new functionality and it ",Object(b.b)("em",{parentName:"p"},"warrants")," testing, please add tests. If you need help with this, I\nwill gladly help."),Object(b.b)("h2",{id:"issues"},"Issues"),Object(b.b)("p",null,"If you find an issue, head over to the Issues section and let me know about it. If you want to be super cool, you can submit a PR that fixes the issue."),Object(b.b)("h2",{id:"license-mit"},"License (MIT)"),Object(b.b)("p",null,Object(b.b)("a",{href:"https://github.com/dericgw/react-tiny-fab/blob/master/LICENSE",parentName:"p"},"Check it out here.")))}void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/example.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-example-mdx-b9cf3f6add7edaadb8b5.js.map