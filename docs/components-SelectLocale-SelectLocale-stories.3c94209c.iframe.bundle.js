(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./src/components/SelectLocale/SelectLocale.css":function(module,exports,__webpack_require__){(exports=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.i,".centered {\r\n    text-align: center;\r\n    width: 100%;\r\n    align-items: center;\r\n}\r\n",""]),module.exports=exports},"./src/components/SelectLocale/SelectLocale.css":function(module,exports,__webpack_require__){var api=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./src/components/SelectLocale/SelectLocale.css");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./src/components/SelectLocale/SelectLocale.stories.jsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"Centered",(function(){return Centered}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js");var react=__webpack_require__("./node_modules/react/index.js"),esm=__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/index.js"),Segment=(__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Segment/Segment.js")),List=__webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/List/List.js"),Dropdown=__webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Dropdown/Dropdown.js"),Button=__webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Button/Button.js"),jsx_runtime=(__webpack_require__("./src/components/SelectLocale/SelectLocale.css"),__webpack_require__("./node_modules/react/jsx-runtime.js"));function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var defaultProps={inverted:!1,centered:!1,fluid:!0,selectLabel:"Select language",confirmLabel:"Select",locales:[{key:"en",value:"en",text:"English"},{key:"ar",value:"ar",text:"عربي"},{key:"de",value:"de",text:"Deutsch"},{key:"fr",value:"fr",text:"Français"},{key:"es",value:"es",text:"Español"},{key:"zh",value:"zh",text:"中文"}]},SelectLocale_SelectLocale_SelectLocale=function SelectLocale(props){var _useState2=_slicedToArray(Object(react.useState)(""),2),selected=_useState2[0],setSelected=_useState2[1],className=props.centered?"centered":"";return Object(jsx_runtime.jsx)(Segment.a,{basic:!0,className:className,children:Object(jsx_runtime.jsxs)(List.a,{children:[Object(jsx_runtime.jsx)(List.a.Item,{className:"mb-small",children:Object(jsx_runtime.jsx)(Dropdown.a,{selection:!0,fluid:props.fluid,options:props.locales,onChange:function onValueChange(event,data){var _data$value,_props$onChange,val=(null===(_data$value=data.value)||void 0===_data$value?void 0:_data$value.toString())||"";setSelected(val),null==props||null===(_props$onChange=props.onChange)||void 0===_props$onChange||_props$onChange.call(props,val)},placeholder:props.selectLabel})}),Object(jsx_runtime.jsx)(List.a.Item,{children:Object(jsx_runtime.jsx)(Button.a,{disabled:!selected,inverted:props.inverted,primary:!props.inverted,fluid:props.fluid,onClick:function onClick(){var _props$onSelect;return null==props||null===(_props$onSelect=props.onSelect)||void 0===_props$onSelect?void 0:_props$onSelect.call(props,selected)},children:props.confirmLabel})})]})})};SelectLocale_SelectLocale_SelectLocale.displayName="SelectLocale",SelectLocale_SelectLocale_SelectLocale.defaultProps=defaultProps;var components_SelectLocale_SelectLocale=SelectLocale_SelectLocale_SelectLocale;try{SelectLocale_SelectLocale_SelectLocale.displayName="SelectLocale",SelectLocale_SelectLocale_SelectLocale.__docgenInfo={description:"",displayName:"SelectLocale",props:{inverted:{defaultValue:{value:"false"},description:"Toggles between light and dark modes",name:"inverted",required:!1,type:{name:"boolean"}},centered:{defaultValue:{value:"false"},description:"Toggles the element to be centered relative to the parent",name:"centered",required:!1,type:{name:"boolean"}},fluid:{defaultValue:{value:"true"},description:"Toggles to take the maximum width of the parent element",name:"fluid",required:!1,type:{name:"boolean"}},selectLabel:{defaultValue:{value:"Select language"},description:"Default label for the locale select",name:"selectLabel",required:!1,type:{name:"string"}},confirmLabel:{defaultValue:{value:"Select"},description:"Label for the confirm button",name:"confirmLabel",required:!1,type:{name:"string"}},locales:{defaultValue:{value:"[\n  { key: 'en', value: 'en', text: 'English' },\n  { key: 'ar', value: 'ar', text: 'عربي' },\n  { key: 'de', value: 'de', text: 'Deutsch' },\n  { key: 'fr', value: 'fr', text: 'Français' },\n  { key: 'es', value: 'es', text: 'Español' },\n  { key: 'zh', value: 'zh', text: '中文' },\n]"},description:"Locale options appearing to the user",name:"locales",required:!1,type:{name:"DropdownItemProps[]"}},onChange:{defaultValue:null,description:"Triggers every time the user changes the locale from the dropdown",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},onSelect:{defaultValue:null,description:"Triggers on user confirms their selection",name:"onSelect",required:!1,type:{name:"((value: string) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SelectLocale/SelectLocale.tsx#SelectLocale"]={docgenInfo:SelectLocale_SelectLocale_SelectLocale.__docgenInfo,name:"SelectLocale",path:"src/components/SelectLocale/SelectLocale.tsx#SelectLocale"})}catch(__react_docgen_typescript_loader_error){}var _excluded=["inverted"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_exports__.default={title:"Onboarding/SelectLocale",component:components_SelectLocale_SelectLocale,parameters:{storySource:{source:"import React from 'react';\n\nimport { action } from \"@storybook/addon-actions\";\n\nimport SelectLocale from './SelectLocale.tsx';\n\nexport default {\n  title: 'Onboarding/SelectLocale',\n  component: SelectLocale,\n  parameters: {\n    componentSubtitle: 'Allows the user to select and confirm their locale',\n    storyshots: { disable: false },\n  },\n  argTypes: {\n    inverted: {\n      control: 'boolean'\n    },\n    centered: {\n      control: 'boolean'\n    },\n    fluid: {\n      control: 'boolean'\n    }\n  }\n};\n\nconst Template = ({inverted, ...props}) => {\n  return (\n    <SelectLocale\n      inverted={inverted}\n      onChange={action(\"Trigger onChange()\")}\n      onSelect={action(\"Trigger onSelect()\")}\n      {...props}\n    />\n  );\n};\n\nexport const Default = Template.bind({});\nDefault.args = {\n  inverted: false\n}\n\nexport const Centered = Template.bind({});\nCentered.args = {\n  inverted: false,\n  centered: true,\n  fluid: false\n}\n",locationsMap:{default:{startLoc:{col:17,line:27},endLoc:{col:1,line:36},startBody:{col:17,line:27},endBody:{col:1,line:36}},centered:{startLoc:{col:17,line:27},endLoc:{col:1,line:36},startBody:{col:17,line:27},endBody:{col:1,line:36}}}},componentSubtitle:"Allows the user to select and confirm their locale",storyshots:{disable:!1}},argTypes:{inverted:{control:"boolean"},centered:{control:"boolean"},fluid:{control:"boolean"}}};var SelectLocale_stories_Template=function Template(_ref){var inverted=_ref.inverted,props=_objectWithoutProperties(_ref,_excluded);return Object(jsx_runtime.jsx)(components_SelectLocale_SelectLocale,Object.assign({inverted:inverted,onChange:Object(esm.action)("Trigger onChange()"),onSelect:Object(esm.action)("Trigger onSelect()")},props))};SelectLocale_stories_Template.displayName="Template";var Default=SelectLocale_stories_Template.bind({});Default.args={inverted:!1};var Centered=SelectLocale_stories_Template.bind({});Centered.args={inverted:!1,centered:!0,fluid:!1},Default.parameters=Object.assign({storySource:{source:'({inverted, ...props}) => {\n  return (\n    <SelectLocale\n      inverted={inverted}\n      onChange={action("Trigger onChange()")}\n      onSelect={action("Trigger onSelect()")}\n      {...props}\n    />\n  );\n}'}},Default.parameters),Centered.parameters=Object.assign({storySource:{source:'({inverted, ...props}) => {\n  return (\n    <SelectLocale\n      inverted={inverted}\n      onChange={action("Trigger onChange()")}\n      onSelect={action("Trigger onSelect()")}\n      {...props}\n    />\n  );\n}'}},Centered.parameters)}}]);