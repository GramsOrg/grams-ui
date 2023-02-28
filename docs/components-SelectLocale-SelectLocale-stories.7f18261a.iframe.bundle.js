(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"./node_modules/core-js/modules/es.date.to-string.js":function(module,exports,__webpack_require__){var uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js"),defineBuiltIn=__webpack_require__("./node_modules/core-js/internals/define-built-in.js"),DatePrototype=Date.prototype,nativeDateToString=uncurryThis(DatePrototype.toString),thisTimeValue=uncurryThis(DatePrototype.getTime);"Invalid Date"!=String(new Date(NaN))&&defineBuiltIn(DatePrototype,"toString",(function toString(){var value=thisTimeValue(this);return value==value?nativeDateToString(this):"Invalid Date"}))},"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./src/components/SelectLocale/SelectLocale.css":function(module,exports,__webpack_require__){(exports=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.i,".centered {\r\n    text-align: center;\r\n    width: 100%;\r\n    align-items: center;\r\n}\r\n",""]),module.exports=exports},"./node_modules/semantic-ui-react/dist/es/elements/List/List.js":function(module,__webpack_exports__,__webpack_require__){"use strict";var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),inheritsLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js"),map=__webpack_require__("./node_modules/lodash-es/map.js"),invoke=__webpack_require__("./node_modules/lodash-es/invoke.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),react=__webpack_require__("./node_modules/react/index.js"),react_default=__webpack_require__.n(react),classNameBuilders=__webpack_require__("./node_modules/semantic-ui-react/dist/es/lib/classNameBuilders.js"),getUnhandledProps=__webpack_require__("./node_modules/semantic-ui-react/dist/es/lib/getUnhandledProps.js"),getElementType=__webpack_require__("./node_modules/semantic-ui-react/dist/es/lib/getElementType.js"),lib=__webpack_require__("./node_modules/semantic-ui-react/dist/es/lib/index.js"),factories=__webpack_require__("./node_modules/semantic-ui-react/dist/es/lib/factories.js");function ListDescription(props){var children=props.children,className=props.className,content=props.content,classes=Object(clsx_m.a)(className,"description"),rest=Object(getUnhandledProps.a)(ListDescription,props),ElementType=Object(getElementType.a)(ListDescription,props);return react_default.a.createElement(ElementType,Object(esm_extends.a)({},rest,{className:classes}),lib.a.isNil(children)?content:children)}ListDescription.handledProps=["as","children","className","content"],ListDescription.propTypes={},ListDescription.create=Object(factories.d)(ListDescription,(function(content){return{content:content}}));var List_ListDescription=ListDescription;function ListHeader(props){var children=props.children,className=props.className,content=props.content,classes=Object(clsx_m.a)("header",className),rest=Object(getUnhandledProps.a)(ListHeader,props),ElementType=Object(getElementType.a)(ListHeader,props);return react_default.a.createElement(ElementType,Object(esm_extends.a)({},rest,{className:classes}),lib.a.isNil(children)?content:children)}ListHeader.handledProps=["as","children","className","content"],ListHeader.propTypes={},ListHeader.create=Object(factories.d)(ListHeader,(function(content){return{content:content}}));var List_ListHeader=ListHeader;function ListContent(props){var children=props.children,className=props.className,content=props.content,description=props.description,floated=props.floated,header=props.header,verticalAlign=props.verticalAlign,classes=Object(clsx_m.a)(Object(classNameBuilders.d)(floated,"floated"),Object(classNameBuilders.e)(verticalAlign),"content",className),rest=Object(getUnhandledProps.a)(ListContent,props),ElementType=Object(getElementType.a)(ListContent,props);return lib.a.isNil(children)?react_default.a.createElement(ElementType,Object(esm_extends.a)({},rest,{className:classes}),List_ListHeader.create(header),List_ListDescription.create(description),content):react_default.a.createElement(ElementType,Object(esm_extends.a)({},rest,{className:classes}),children)}ListContent.handledProps=["as","children","className","content","description","floated","header","verticalAlign"],ListContent.propTypes={},ListContent.create=Object(factories.d)(ListContent,(function(content){return{content:content}}));var List_ListContent=ListContent,Icon=__webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Icon/Icon.js");function ListIcon(props){var className=props.className,verticalAlign=props.verticalAlign,classes=Object(clsx_m.a)(Object(classNameBuilders.e)(verticalAlign),className),rest=Object(getUnhandledProps.a)(ListIcon,props);return react_default.a.createElement(Icon.a,Object(esm_extends.a)({},rest,{className:classes}))}ListIcon.handledProps=["className","verticalAlign"],ListIcon.propTypes={},ListIcon.create=Object(factories.d)(ListIcon,(function(name){return{name:name}}));var List_ListIcon=ListIcon,isPlainObject=__webpack_require__("./node_modules/lodash-es/isPlainObject.js"),Image=__webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Image/Image.js"),ListItem_ListItem=function(_Component){function ListItem(){for(var _this,_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(_this=_Component.call.apply(_Component,[this].concat(args))||this).handleClick=function(e){_this.props.disabled||Object(invoke.a)(_this.props,"onClick",e,_this.props)},_this}return Object(inheritsLoose.a)(ListItem,_Component),ListItem.prototype.render=function render(){var _this$props=this.props,active=_this$props.active,children=_this$props.children,className=_this$props.className,content=_this$props.content,description=_this$props.description,disabled=_this$props.disabled,header=_this$props.header,icon=_this$props.icon,image=_this$props.image,value=_this$props.value,ElementType=Object(getElementType.a)(ListItem,this.props),classes=Object(clsx_m.a)(Object(classNameBuilders.a)(active,"active"),Object(classNameBuilders.a)(disabled,"disabled"),Object(classNameBuilders.a)("li"!==ElementType,"item"),className),rest=Object(getUnhandledProps.a)(ListItem,this.props),valueProp="li"===ElementType?{value:value}:{"data-value":value};if(!lib.a.isNil(children))return react_default.a.createElement(ElementType,Object(esm_extends.a)({},valueProp,{role:"listitem",className:classes,onClick:this.handleClick},rest),children);var iconElement=List_ListIcon.create(icon,{autoGenerateKey:!1}),imageElement=Image.a.create(image,{autoGenerateKey:!1});if(!Object(react.isValidElement)(content)&&Object(isPlainObject.a)(content))return react_default.a.createElement(ElementType,Object(esm_extends.a)({},valueProp,{role:"listitem",className:classes,onClick:this.handleClick},rest),iconElement||imageElement,List_ListContent.create(content,{autoGenerateKey:!1,defaultProps:{header:header,description:description}}));var headerElement=List_ListHeader.create(header,{autoGenerateKey:!1}),descriptionElement=List_ListDescription.create(description,{autoGenerateKey:!1});return iconElement||imageElement?react_default.a.createElement(ElementType,Object(esm_extends.a)({},valueProp,{role:"listitem",className:classes,onClick:this.handleClick},rest),iconElement||imageElement,(content||headerElement||descriptionElement)&&react_default.a.createElement(List_ListContent,null,headerElement,descriptionElement,content)):react_default.a.createElement(ElementType,Object(esm_extends.a)({},valueProp,{role:"listitem",className:classes,onClick:this.handleClick},rest),headerElement,descriptionElement,content)},ListItem}(react.Component);ListItem_ListItem.handledProps=["active","as","children","className","content","description","disabled","header","icon","image","onClick","value"],ListItem_ListItem.propTypes={},ListItem_ListItem.create=Object(factories.d)(ListItem_ListItem,(function(content){return{content:content}}));var List_ListItem=ListItem_ListItem;function ListList(props){var children=props.children,className=props.className,content=props.content,rest=Object(getUnhandledProps.a)(ListList,props),ElementType=Object(getElementType.a)(ListList,props),classes=Object(clsx_m.a)(Object(classNameBuilders.a)("ul"!==ElementType&&"ol"!==ElementType,"list"),className);return react_default.a.createElement(ElementType,Object(esm_extends.a)({},rest,{className:classes}),lib.a.isNil(children)?content:children)}ListList.handledProps=["as","children","className","content"],ListList.propTypes={};var List_ListList=ListList,List_List=function(_Component){function List(){for(var _this,_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(_this=_Component.call.apply(_Component,[this].concat(args))||this).handleItemOverrides=function(predefinedProps){return{onClick:function onClick(e,itemProps){Object(invoke.a)(predefinedProps,"onClick",e,itemProps),Object(invoke.a)(_this.props,"onItemClick",e,itemProps)}}},_this}return Object(inheritsLoose.a)(List,_Component),List.prototype.render=function render(){var _this2=this,_this$props=this.props,animated=_this$props.animated,bulleted=_this$props.bulleted,celled=_this$props.celled,children=_this$props.children,className=_this$props.className,content=_this$props.content,divided=_this$props.divided,floated=_this$props.floated,horizontal=_this$props.horizontal,inverted=_this$props.inverted,items=_this$props.items,link=_this$props.link,ordered=_this$props.ordered,relaxed=_this$props.relaxed,selection=_this$props.selection,size=_this$props.size,verticalAlign=_this$props.verticalAlign,classes=Object(clsx_m.a)("ui",size,Object(classNameBuilders.a)(animated,"animated"),Object(classNameBuilders.a)(bulleted,"bulleted"),Object(classNameBuilders.a)(celled,"celled"),Object(classNameBuilders.a)(divided,"divided"),Object(classNameBuilders.a)(horizontal,"horizontal"),Object(classNameBuilders.a)(inverted,"inverted"),Object(classNameBuilders.a)(link,"link"),Object(classNameBuilders.a)(ordered,"ordered"),Object(classNameBuilders.a)(selection,"selection"),Object(classNameBuilders.b)(relaxed,"relaxed"),Object(classNameBuilders.d)(floated,"floated"),Object(classNameBuilders.e)(verticalAlign),"list",className),rest=Object(getUnhandledProps.a)(List,this.props),ElementType=Object(getElementType.a)(List,this.props);return lib.a.isNil(children)?lib.a.isNil(content)?react_default.a.createElement(ElementType,Object(esm_extends.a)({role:"list",className:classes},rest),Object(map.a)(items,(function(item){return List_ListItem.create(item,{overrideProps:_this2.handleItemOverrides})}))):react_default.a.createElement(ElementType,Object(esm_extends.a)({role:"list",className:classes},rest),content):react_default.a.createElement(ElementType,Object(esm_extends.a)({role:"list",className:classes},rest),children)},List}(react.Component);List_List.handledProps=["animated","as","bulleted","celled","children","className","content","divided","floated","horizontal","inverted","items","link","onItemClick","ordered","relaxed","selection","size","verticalAlign"],List_List.propTypes={},List_List.Content=List_ListContent,List_List.Description=List_ListDescription,List_List.Header=List_ListHeader,List_List.Icon=List_ListIcon,List_List.Item=List_ListItem,List_List.List=List_ListList;__webpack_exports__.a=List_List},"./node_modules/semantic-ui-react/dist/es/elements/Segment/Segment.js":function(module,__webpack_exports__,__webpack_require__){"use strict";var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),react=__webpack_require__("./node_modules/react/index.js"),react_default=__webpack_require__.n(react),classNameBuilders=__webpack_require__("./node_modules/semantic-ui-react/dist/es/lib/classNameBuilders.js"),getUnhandledProps=__webpack_require__("./node_modules/semantic-ui-react/dist/es/lib/getUnhandledProps.js"),getElementType=__webpack_require__("./node_modules/semantic-ui-react/dist/es/lib/getElementType.js"),lib=__webpack_require__("./node_modules/semantic-ui-react/dist/es/lib/index.js");function SegmentGroup(props){var children=props.children,className=props.className,compact=props.compact,content=props.content,horizontal=props.horizontal,piled=props.piled,raised=props.raised,size=props.size,stacked=props.stacked,classes=Object(clsx_m.a)("ui",size,Object(classNameBuilders.a)(compact,"compact"),Object(classNameBuilders.a)(horizontal,"horizontal"),Object(classNameBuilders.a)(piled,"piled"),Object(classNameBuilders.a)(raised,"raised"),Object(classNameBuilders.a)(stacked,"stacked"),"segments",className),rest=Object(getUnhandledProps.a)(SegmentGroup,props),ElementType=Object(getElementType.a)(SegmentGroup,props);return react_default.a.createElement(ElementType,Object(esm_extends.a)({},rest,{className:classes}),lib.a.isNil(children)?content:children)}SegmentGroup.handledProps=["as","children","className","compact","content","horizontal","piled","raised","size","stacked"],SegmentGroup.propTypes={};var Segment_SegmentGroup=SegmentGroup;function SegmentInline(props){var children=props.children,className=props.className,content=props.content,classes=Object(clsx_m.a)("inline",className),rest=Object(getUnhandledProps.a)(SegmentInline,props),ElementType=Object(getElementType.a)(SegmentInline,props);return react_default.a.createElement(ElementType,Object(esm_extends.a)({},rest,{className:classes}),lib.a.isNil(children)?content:children)}SegmentInline.handledProps=["as","children","className","content"],SegmentInline.propTypes={};var Segment_SegmentInline=SegmentInline;function Segment(props){var attached=props.attached,basic=props.basic,children=props.children,circular=props.circular,className=props.className,clearing=props.clearing,color=props.color,compact=props.compact,content=props.content,disabled=props.disabled,floated=props.floated,inverted=props.inverted,loading=props.loading,placeholder=props.placeholder,padded=props.padded,piled=props.piled,raised=props.raised,secondary=props.secondary,size=props.size,stacked=props.stacked,tertiary=props.tertiary,textAlign=props.textAlign,vertical=props.vertical,classes=Object(clsx_m.a)("ui",color,size,Object(classNameBuilders.a)(basic,"basic"),Object(classNameBuilders.a)(circular,"circular"),Object(classNameBuilders.a)(clearing,"clearing"),Object(classNameBuilders.a)(compact,"compact"),Object(classNameBuilders.a)(disabled,"disabled"),Object(classNameBuilders.a)(inverted,"inverted"),Object(classNameBuilders.a)(loading,"loading"),Object(classNameBuilders.a)(placeholder,"placeholder"),Object(classNameBuilders.a)(piled,"piled"),Object(classNameBuilders.a)(raised,"raised"),Object(classNameBuilders.a)(secondary,"secondary"),Object(classNameBuilders.a)(stacked,"stacked"),Object(classNameBuilders.a)(tertiary,"tertiary"),Object(classNameBuilders.a)(vertical,"vertical"),Object(classNameBuilders.b)(attached,"attached"),Object(classNameBuilders.b)(padded,"padded"),Object(classNameBuilders.c)(textAlign),Object(classNameBuilders.d)(floated,"floated"),"segment",className),rest=Object(getUnhandledProps.a)(Segment,props),ElementType=Object(getElementType.a)(Segment,props);return react_default.a.createElement(ElementType,Object(esm_extends.a)({},rest,{className:classes}),lib.a.isNil(children)?content:children)}Segment.handledProps=["as","attached","basic","children","circular","className","clearing","color","compact","content","disabled","floated","inverted","loading","padded","piled","placeholder","raised","secondary","size","stacked","tertiary","textAlign","vertical"],Segment.Group=Segment_SegmentGroup,Segment.Inline=Segment_SegmentInline,Segment.propTypes={};__webpack_exports__.a=Segment},"./src/components/SelectLocale/SelectLocale.css":function(module,exports,__webpack_require__){var api=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./src/components/SelectLocale/SelectLocale.css");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./src/components/SelectLocale/SelectLocale.stories.jsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"Centered",(function(){return Centered}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js");var react=__webpack_require__("./node_modules/react/index.js"),esm=__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/index.js"),Segment=(__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Segment/Segment.js")),List=__webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/List/List.js"),Dropdown=__webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Dropdown/Dropdown.js"),Button=__webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Button/Button.js"),jsx_runtime=(__webpack_require__("./src/components/SelectLocale/SelectLocale.css"),__webpack_require__("./node_modules/react/jsx-runtime.js"));function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var defaultProps={inverted:!1,centered:!1,fluid:!0,selectLabel:"Select language",confirmLabel:"Select",locales:[{key:"en",value:"en",text:"English"},{key:"ar",value:"ar",text:"عربي"},{key:"de",value:"de",text:"Deutsch"},{key:"fr",value:"fr",text:"Français"},{key:"es",value:"es",text:"Español"},{key:"zh",value:"zh",text:"中文"}]},SelectLocale_SelectLocale_SelectLocale=function SelectLocale(props){var _useState2=_slicedToArray(Object(react.useState)(""),2),selected=_useState2[0],setSelected=_useState2[1],className=props.centered?"centered":"";return Object(jsx_runtime.jsx)(Segment.a,{basic:!0,className:className,children:Object(jsx_runtime.jsxs)(List.a,{children:[Object(jsx_runtime.jsx)(List.a.Item,{className:"mb-small",children:Object(jsx_runtime.jsx)(Dropdown.a,{selection:!0,fluid:props.fluid,options:props.locales,onChange:function onValueChange(event,data){var _data$value,_props$onChange,val=(null===(_data$value=data.value)||void 0===_data$value?void 0:_data$value.toString())||"";setSelected(val),null==props||null===(_props$onChange=props.onChange)||void 0===_props$onChange||_props$onChange.call(props,val)},placeholder:props.selectLabel})}),Object(jsx_runtime.jsx)(List.a.Item,{children:Object(jsx_runtime.jsx)(Button.a,{disabled:!selected,inverted:props.inverted,primary:!props.inverted,fluid:props.fluid,onClick:function onClick(){var _props$onSelect;return null==props||null===(_props$onSelect=props.onSelect)||void 0===_props$onSelect?void 0:_props$onSelect.call(props,selected)},children:props.confirmLabel})})]})})};SelectLocale_SelectLocale_SelectLocale.displayName="SelectLocale",SelectLocale_SelectLocale_SelectLocale.defaultProps=defaultProps;var components_SelectLocale_SelectLocale=SelectLocale_SelectLocale_SelectLocale;try{SelectLocale_SelectLocale_SelectLocale.displayName="SelectLocale",SelectLocale_SelectLocale_SelectLocale.__docgenInfo={description:"",displayName:"SelectLocale",props:{inverted:{defaultValue:{value:"false"},description:"Toggles between light and dark modes",name:"inverted",required:!1,type:{name:"boolean"}},centered:{defaultValue:{value:"false"},description:"Toggles the element to be centered relative to the parent",name:"centered",required:!1,type:{name:"boolean"}},fluid:{defaultValue:{value:"true"},description:"Toggles to take the maximum width of the parent element",name:"fluid",required:!1,type:{name:"boolean"}},selectLabel:{defaultValue:{value:"Select language"},description:"Default label for the locale select",name:"selectLabel",required:!1,type:{name:"string"}},confirmLabel:{defaultValue:{value:"Select"},description:"Label for the confirm button",name:"confirmLabel",required:!1,type:{name:"string"}},locales:{defaultValue:{value:"[\n  { key: 'en', value: 'en', text: 'English' },\n  { key: 'ar', value: 'ar', text: 'عربي' },\n  { key: 'de', value: 'de', text: 'Deutsch' },\n  { key: 'fr', value: 'fr', text: 'Français' },\n  { key: 'es', value: 'es', text: 'Español' },\n  { key: 'zh', value: 'zh', text: '中文' },\n]"},description:"Locale options appearing to the user",name:"locales",required:!1,type:{name:"DropdownItemProps[]"}},onChange:{defaultValue:null,description:"Triggers every time the user changes the locale from the dropdown",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},onSelect:{defaultValue:null,description:"Triggers on user confirms their selection",name:"onSelect",required:!1,type:{name:"((value: string) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SelectLocale/SelectLocale.tsx#SelectLocale"]={docgenInfo:SelectLocale_SelectLocale_SelectLocale.__docgenInfo,name:"SelectLocale",path:"src/components/SelectLocale/SelectLocale.tsx#SelectLocale"})}catch(__react_docgen_typescript_loader_error){}var _excluded=["inverted"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_exports__.default={title:"Onboarding/SelectLocale",component:components_SelectLocale_SelectLocale,parameters:{storySource:{source:"import React from 'react';\n\nimport { action } from \"@storybook/addon-actions\";\n\nimport SelectLocale from './SelectLocale.tsx';\n\nexport default {\n  title: 'Onboarding/SelectLocale',\n  component: SelectLocale,\n  parameters: {\n    componentSubtitle: 'Allows the user to select and confirm their locale',\n    storyshots: { disable: false },\n  },\n  argTypes: {\n    inverted: {\n      control: 'boolean'\n    },\n    centered: {\n      control: 'boolean'\n    },\n    fluid: {\n      control: 'boolean'\n    }\n  }\n};\n\nconst Template = ({inverted, ...props}) => {\n  return (\n    <SelectLocale\n      inverted={inverted}\n      onChange={action(\"Trigger onChange()\")}\n      onSelect={action(\"Trigger onSelect()\")}\n      {...props}\n    />\n  );\n};\n\nexport const Default = Template.bind({});\nDefault.args = {\n  inverted: false\n}\n\nexport const Centered = Template.bind({});\nCentered.args = {\n  inverted: false,\n  centered: true,\n  fluid: false\n}\n",locationsMap:{default:{startLoc:{col:17,line:27},endLoc:{col:1,line:36},startBody:{col:17,line:27},endBody:{col:1,line:36}},centered:{startLoc:{col:17,line:27},endLoc:{col:1,line:36},startBody:{col:17,line:27},endBody:{col:1,line:36}}}},componentSubtitle:"Allows the user to select and confirm their locale",storyshots:{disable:!1}},argTypes:{inverted:{control:"boolean"},centered:{control:"boolean"},fluid:{control:"boolean"}}};var SelectLocale_stories_Template=function Template(_ref){var inverted=_ref.inverted,props=_objectWithoutProperties(_ref,_excluded);return Object(jsx_runtime.jsx)(components_SelectLocale_SelectLocale,Object.assign({inverted:inverted,onChange:Object(esm.action)("Trigger onChange()"),onSelect:Object(esm.action)("Trigger onSelect()")},props))};SelectLocale_stories_Template.displayName="Template";var Default=SelectLocale_stories_Template.bind({});Default.args={inverted:!1};var Centered=SelectLocale_stories_Template.bind({});Centered.args={inverted:!1,centered:!0,fluid:!1},Default.parameters=Object.assign({storySource:{source:'({inverted, ...props}) => {\n  return (\n    <SelectLocale\n      inverted={inverted}\n      onChange={action("Trigger onChange()")}\n      onSelect={action("Trigger onSelect()")}\n      {...props}\n    />\n  );\n}'}},Default.parameters),Centered.parameters=Object.assign({storySource:{source:'({inverted, ...props}) => {\n  return (\n    <SelectLocale\n      inverted={inverted}\n      onChange={action("Trigger onChange()")}\n      onSelect={action("Trigger onSelect()")}\n      {...props}\n    />\n  );\n}'}},Centered.parameters)}}]);