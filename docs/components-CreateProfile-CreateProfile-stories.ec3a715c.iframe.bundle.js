(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./src/components/CreateProfile/CreateProfile.css":function(module,exports,__webpack_require__){(exports=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.i,".ltr {\r\n    text-align: left;\r\n}\r\n\r\n.rtl {\r\n    direction: rtl;\r\n    text-align: right;\r\n}",""]),module.exports=exports},"./src/components/CreateProfile/CreateProfile.css":function(module,exports,__webpack_require__){var api=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./src/components/CreateProfile/CreateProfile.css");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./src/components/CreateProfile/CreateProfile.stories.jsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"RTL",(function(){return RTL}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js");var react=__webpack_require__("./node_modules/react/index.js"),react_default=__webpack_require__.n(react),esm_extends=(__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/index.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js")),inheritsLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js"),invoke=__webpack_require__("./node_modules/lodash-es/invoke.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),classNameBuilders=__webpack_require__("./node_modules/semantic-ui-react/dist/es/lib/classNameBuilders.js"),getUnhandledProps=__webpack_require__("./node_modules/semantic-ui-react/dist/es/lib/getUnhandledProps.js"),getElementType=__webpack_require__("./node_modules/semantic-ui-react/dist/es/lib/getElementType.js"),Button=__webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Button/Button.js"),isNil=__webpack_require__("./node_modules/lodash-es/isNil.js"),get=__webpack_require__("./node_modules/lodash-es/get.js"),lib=__webpack_require__("./node_modules/semantic-ui-react/dist/es/lib/index.js"),factories=__webpack_require__("./node_modules/semantic-ui-react/dist/es/lib/factories.js"),Label=__webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Label/Label.js"),Checkbox=__webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Checkbox/Checkbox.js");function Radio(props){var slider=props.slider,toggle=props.toggle,type=props.type,rest=Object(getUnhandledProps.a)(Radio,props),radio=!(slider||toggle)||void 0;return react_default.a.createElement(Checkbox.a,Object(esm_extends.a)({},rest,{type:type,radio:radio,slider:slider,toggle:toggle}))}Radio.handledProps=["slider","toggle","type"],Radio.propTypes={},Radio.defaultProps={type:"radio"};var Radio_Radio=Radio;function FormField(props){var children=props.children,className=props.className,content=props.content,control=props.control,disabled=props.disabled,error=props.error,inline=props.inline,label=props.label,required=props.required,type=props.type,width=props.width,id=props.id,classes=Object(clsx_m.a)(Object(classNameBuilders.a)(disabled,"disabled"),Object(classNameBuilders.a)(error,"error"),Object(classNameBuilders.a)(inline,"inline"),Object(classNameBuilders.a)(required,"required"),Object(classNameBuilders.g)(width,"wide"),"field",className),rest=Object(getUnhandledProps.a)(FormField,props),ElementType=Object(getElementType.a)(FormField,props),errorPointing=Object(get.a)(error,"pointing","above"),errorLabel=Label.a.create(error,{autoGenerateKey:!1,defaultProps:{prompt:!0,pointing:errorPointing,id:id?id+"-error-message":void 0,role:"alert","aria-atomic":!0}}),errorLabelBefore=("below"===errorPointing||"right"===errorPointing)&&errorLabel,errorLabelAfter=("above"===errorPointing||"left"===errorPointing)&&errorLabel;if(Object(isNil.a)(control))return Object(isNil.a)(label)?react_default.a.createElement(ElementType,Object(esm_extends.a)({},rest,{className:classes,id:id}),lib.a.isNil(children)?content:children):react_default.a.createElement(ElementType,Object(esm_extends.a)({},rest,{className:classes,id:id}),errorLabelBefore,Object(factories.b)(label,{autoGenerateKey:!1}),errorLabelAfter);var ariaAttrs={"aria-describedby":id&&error?id+"-error-message":null,"aria-invalid":!!error||void 0},controlProps=Object(esm_extends.a)({},rest,{content:content,children:children,disabled:disabled,required:required,type:type,id:id});return"input"!==control||"checkbox"!==type&&"radio"!==type?control===Checkbox.a||control===Radio_Radio?react_default.a.createElement(ElementType,{className:classes},errorLabelBefore,Object(react.createElement)(control,Object(esm_extends.a)({},ariaAttrs,controlProps,{label:label})),errorLabelAfter):react_default.a.createElement(ElementType,{className:classes},Object(factories.b)(label,{defaultProps:{htmlFor:id},autoGenerateKey:!1}),errorLabelBefore,Object(react.createElement)(control,Object(esm_extends.a)({},ariaAttrs,controlProps)),errorLabelAfter):react_default.a.createElement(ElementType,{className:classes},react_default.a.createElement("label",null,errorLabelBefore,Object(react.createElement)(control,Object(esm_extends.a)({},ariaAttrs,controlProps))," ",label,errorLabelAfter))}FormField.handledProps=["as","children","className","content","control","disabled","error","id","inline","label","required","type","width"],FormField.propTypes={};var Form_FormField=FormField;function FormButton(props){var control=props.control,rest=Object(getUnhandledProps.a)(FormButton,props),ElementType=Object(getElementType.a)(FormButton,props);return react_default.a.createElement(ElementType,Object(esm_extends.a)({},rest,{control:control}))}FormButton.handledProps=["as","control"],FormButton.propTypes={},FormButton.defaultProps={as:Form_FormField,control:Button.a};var Form_FormButton=FormButton;function FormCheckbox(props){var control=props.control,rest=Object(getUnhandledProps.a)(FormCheckbox,props),ElementType=Object(getElementType.a)(FormCheckbox,props);return react_default.a.createElement(ElementType,Object(esm_extends.a)({},rest,{control:control}))}FormCheckbox.handledProps=["as","control"],FormCheckbox.propTypes={},FormCheckbox.defaultProps={as:Form_FormField,control:Checkbox.a};var Form_FormCheckbox=FormCheckbox,Dropdown=__webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Dropdown/Dropdown.js");function FormDropdown(props){var control=props.control,rest=Object(getUnhandledProps.a)(FormDropdown,props),ElementType=Object(getElementType.a)(FormDropdown,props);return react_default.a.createElement(ElementType,Object(esm_extends.a)({},rest,{control:control}))}FormDropdown.handledProps=["as","control"],FormDropdown.propTypes={},FormDropdown.defaultProps={as:Form_FormField,control:Dropdown.a};var Form_FormDropdown=FormDropdown;function FormGroup(props){var children=props.children,className=props.className,grouped=props.grouped,inline=props.inline,unstackable=props.unstackable,widths=props.widths,classes=Object(clsx_m.a)(Object(classNameBuilders.a)(grouped,"grouped"),Object(classNameBuilders.a)(inline,"inline"),Object(classNameBuilders.a)(unstackable,"unstackable"),Object(classNameBuilders.g)(widths,null,!0),"fields",className),rest=Object(getUnhandledProps.a)(FormGroup,props),ElementType=Object(getElementType.a)(FormGroup,props);return react_default.a.createElement(ElementType,Object(esm_extends.a)({},rest,{className:classes}),children)}FormGroup.handledProps=["as","children","className","grouped","inline","unstackable","widths"],FormGroup.propTypes={};var Form_FormGroup=FormGroup,includes=__webpack_require__("./node_modules/lodash-es/includes.js"),map=__webpack_require__("./node_modules/lodash-es/map.js"),utils=__webpack_require__("./node_modules/@fluentui/react-component-ref/dist/es/utils.js"),htmlPropsUtils=__webpack_require__("./node_modules/semantic-ui-react/dist/es/lib/htmlPropsUtils.js"),Icon=__webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Icon/Icon.js"),Input_Input=function(_Component){function Input(){for(var _this,_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(_this=_Component.call.apply(_Component,[this].concat(args))||this).inputRef=Object(react.createRef)(),_this.computeIcon=function(){var _this$props=_this.props,loading=_this$props.loading,icon=_this$props.icon;return Object(isNil.a)(icon)?loading?"spinner":void 0:icon},_this.computeTabIndex=function(){var _this$props2=_this.props,disabled=_this$props2.disabled,tabIndex=_this$props2.tabIndex;return Object(isNil.a)(tabIndex)?disabled?-1:void 0:tabIndex},_this.focus=function(options){return _this.inputRef.current.focus(options)},_this.select=function(){return _this.inputRef.current.select()},_this.handleChange=function(e){var value=Object(get.a)(e,"target.value");Object(invoke.a)(_this.props,"onChange",e,Object(esm_extends.a)({},_this.props,{value:value}))},_this.handleChildOverrides=function(child,defaultProps){return Object(esm_extends.a)({},defaultProps,child.props,{ref:function ref(c){Object(utils.a)(child.ref,c),_this.inputRef.current=c}})},_this.partitionProps=function(){var _this$props3=_this.props,disabled=_this$props3.disabled,type=_this$props3.type,tabIndex=_this.computeTabIndex(),unhandled=Object(getUnhandledProps.a)(Input,_this.props),_partitionHTMLProps=Object(htmlPropsUtils.c)(unhandled),htmlInputProps=_partitionHTMLProps[0],rest=_partitionHTMLProps[1];return[Object(esm_extends.a)({},htmlInputProps,{disabled:disabled,type:type,tabIndex:tabIndex,onChange:_this.handleChange,ref:_this.inputRef}),rest]},_this}return Object(inheritsLoose.a)(Input,_Component),Input.prototype.render=function render(){var _this2=this,_this$props4=this.props,action=_this$props4.action,actionPosition=_this$props4.actionPosition,children=_this$props4.children,className=_this$props4.className,disabled=_this$props4.disabled,error=_this$props4.error,fluid=_this$props4.fluid,focus=_this$props4.focus,icon=_this$props4.icon,iconPosition=_this$props4.iconPosition,input=_this$props4.input,inverted=_this$props4.inverted,label=_this$props4.label,labelPosition=_this$props4.labelPosition,loading=_this$props4.loading,size=_this$props4.size,transparent=_this$props4.transparent,type=_this$props4.type,classes=Object(clsx_m.a)("ui",size,Object(classNameBuilders.a)(disabled,"disabled"),Object(classNameBuilders.a)(error,"error"),Object(classNameBuilders.a)(fluid,"fluid"),Object(classNameBuilders.a)(focus,"focus"),Object(classNameBuilders.a)(inverted,"inverted"),Object(classNameBuilders.a)(loading,"loading"),Object(classNameBuilders.a)(transparent,"transparent"),Object(classNameBuilders.e)(actionPosition,"action")||Object(classNameBuilders.a)(action,"action"),Object(classNameBuilders.e)(iconPosition,"icon")||Object(classNameBuilders.a)(icon||loading,"icon"),Object(classNameBuilders.e)(labelPosition,"labeled")||Object(classNameBuilders.a)(label,"labeled"),"input",className),ElementType=Object(getElementType.a)(Input,this.props),_this$partitionProps=this.partitionProps(),htmlInputProps=_this$partitionProps[0],rest=_this$partitionProps[1];if(!lib.a.isNil(children)){var childElements=Object(map.a)(react.Children.toArray(children),(function(child){return"input"!==child.type?child:Object(react.cloneElement)(child,_this2.handleChildOverrides(child,htmlInputProps))}));return react_default.a.createElement(ElementType,Object(esm_extends.a)({},rest,{className:classes}),childElements)}var actionElement=Button.a.create(action,{autoGenerateKey:!1}),labelElement=Label.a.create(label,{defaultProps:{className:Object(clsx_m.a)("label",Object(includes.a)(labelPosition,"corner")&&labelPosition)},autoGenerateKey:!1});return react_default.a.createElement(ElementType,Object(esm_extends.a)({},rest,{className:classes}),"left"===actionPosition&&actionElement,"right"!==labelPosition&&labelElement,Object(factories.a)(input||type,{defaultProps:htmlInputProps,autoGenerateKey:!1}),Icon.a.create(this.computeIcon(),{autoGenerateKey:!1}),"left"!==actionPosition&&actionElement,"right"===labelPosition&&labelElement)},Input}(react.Component);Input_Input.handledProps=["action","actionPosition","as","children","className","disabled","error","fluid","focus","icon","iconPosition","input","inverted","label","labelPosition","loading","onChange","size","tabIndex","transparent","type"],Input_Input.propTypes={},Input_Input.defaultProps={type:"text"},Input_Input.create=Object(factories.d)(Input_Input,(function(type){return{type:type}}));var elements_Input_Input=Input_Input;function FormInput(props){var control=props.control,rest=Object(getUnhandledProps.a)(FormInput,props),ElementType=Object(getElementType.a)(FormInput,props);return react_default.a.createElement(ElementType,Object(esm_extends.a)({},rest,{control:control}))}FormInput.handledProps=["as","control"],FormInput.propTypes={},FormInput.defaultProps={as:Form_FormField,control:elements_Input_Input};var Form_FormInput=FormInput;function FormRadio(props){var control=props.control,rest=Object(getUnhandledProps.a)(FormRadio,props),ElementType=Object(getElementType.a)(FormRadio,props);return react_default.a.createElement(ElementType,Object(esm_extends.a)({},rest,{control:control}))}FormRadio.handledProps=["as","control"],FormRadio.propTypes={},FormRadio.defaultProps={as:Form_FormField,control:Radio_Radio};var Form_FormRadio=FormRadio;function Select(props){return react_default.a.createElement(Dropdown.a,Object(esm_extends.a)({},props,{selection:!0}))}Select.handledProps=["options"],Select.propTypes={},Select.Divider=Dropdown.a.Divider,Select.Header=Dropdown.a.Header,Select.Item=Dropdown.a.Item,Select.Menu=Dropdown.a.Menu;var Select_Select=Select;function FormSelect(props){var control=props.control,options=props.options,rest=Object(getUnhandledProps.a)(FormSelect,props),ElementType=Object(getElementType.a)(FormSelect,props);return react_default.a.createElement(ElementType,Object(esm_extends.a)({},rest,{control:control,options:options}))}FormSelect.handledProps=["as","control","options"],FormSelect.propTypes={},FormSelect.defaultProps={as:Form_FormField,control:Select_Select};var Form_FormSelect=FormSelect,Ref=__webpack_require__("./node_modules/@fluentui/react-component-ref/dist/es/Ref.js"),TextArea_TextArea=function(_Component){function TextArea(){for(var _this,_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(_this=_Component.call.apply(_Component,[this].concat(args))||this).ref=Object(react.createRef)(),_this.focus=function(){return _this.ref.current.focus()},_this.handleChange=function(e){var value=Object(get.a)(e,"target.value");Object(invoke.a)(_this.props,"onChange",e,Object(esm_extends.a)({},_this.props,{value:value}))},_this.handleInput=function(e){var value=Object(get.a)(e,"target.value");Object(invoke.a)(_this.props,"onInput",e,Object(esm_extends.a)({},_this.props,{value:value}))},_this}return Object(inheritsLoose.a)(TextArea,_Component),TextArea.prototype.render=function render(){var _this$props=this.props,rows=_this$props.rows,value=_this$props.value,rest=Object(getUnhandledProps.a)(TextArea,this.props),ElementType=Object(getElementType.a)(TextArea,this.props);return react_default.a.createElement(Ref.a,{innerRef:this.ref},react_default.a.createElement(ElementType,Object(esm_extends.a)({},rest,{onChange:this.handleChange,onInput:this.handleInput,rows:rows,value:value})))},TextArea}(react.Component);TextArea_TextArea.handledProps=["as","onChange","onInput","rows","value"],TextArea_TextArea.propTypes={},TextArea_TextArea.defaultProps={as:"textarea",rows:3};var addons_TextArea_TextArea=TextArea_TextArea;function FormTextArea(props){var control=props.control,rest=Object(getUnhandledProps.a)(FormTextArea,props),ElementType=Object(getElementType.a)(FormTextArea,props);return react_default.a.createElement(ElementType,Object(esm_extends.a)({},rest,{control:control}))}FormTextArea.handledProps=["as","control"],FormTextArea.propTypes={},FormTextArea.defaultProps={as:Form_FormField,control:addons_TextArea_TextArea};var Form_FormTextArea=FormTextArea,Form_Form=function(_Component){function Form(){for(var _this,_len=arguments.length,_args=new Array(_len),_key=0;_key<_len;_key++)_args[_key]=arguments[_key];return(_this=_Component.call.apply(_Component,[this].concat(_args))||this).handleSubmit=function(e){"string"!=typeof _this.props.action&&Object(invoke.a)(e,"preventDefault");for(var _len2=arguments.length,args=new Array(_len2>1?_len2-1:0),_key2=1;_key2<_len2;_key2++)args[_key2-1]=arguments[_key2];invoke.a.apply(void 0,[_this.props,"onSubmit",e,_this.props].concat(args))},_this}return Object(inheritsLoose.a)(Form,_Component),Form.prototype.render=function render(){var _this$props=this.props,action=_this$props.action,children=_this$props.children,className=_this$props.className,error=_this$props.error,inverted=_this$props.inverted,loading=_this$props.loading,reply=_this$props.reply,size=_this$props.size,success=_this$props.success,unstackable=_this$props.unstackable,warning=_this$props.warning,widths=_this$props.widths,classes=Object(clsx_m.a)("ui",size,Object(classNameBuilders.a)(error,"error"),Object(classNameBuilders.a)(inverted,"inverted"),Object(classNameBuilders.a)(loading,"loading"),Object(classNameBuilders.a)(reply,"reply"),Object(classNameBuilders.a)(success,"success"),Object(classNameBuilders.a)(unstackable,"unstackable"),Object(classNameBuilders.a)(warning,"warning"),Object(classNameBuilders.g)(widths,null,!0),"form",className),rest=Object(getUnhandledProps.a)(Form,this.props),ElementType=Object(getElementType.a)(Form,this.props);return react_default.a.createElement(ElementType,Object(esm_extends.a)({},rest,{action:action,className:classes,onSubmit:this.handleSubmit}),children)},Form}(react.Component);Form_Form.handledProps=["action","as","children","className","error","inverted","loading","onSubmit","reply","size","success","unstackable","warning","widths"],Form_Form.propTypes={},Form_Form.defaultProps={as:"form"},Form_Form.Field=Form_FormField,Form_Form.Button=Form_FormButton,Form_Form.Checkbox=Form_FormCheckbox,Form_Form.Dropdown=Form_FormDropdown,Form_Form.Group=Form_FormGroup,Form_Form.Input=Form_FormInput,Form_Form.Radio=Form_FormRadio,Form_Form.Select=Form_FormSelect,Form_Form.TextArea=Form_FormTextArea;var collections_Form_Form=Form_Form,jsx_runtime=(__webpack_require__("./src/components/CreateProfile/CreateProfile.css"),__webpack_require__("./node_modules/react/jsx-runtime.js"));function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var CreateProfile_CreateProfile_CreateProfile=function CreateProfile(props){var _useState2=_slicedToArray(Object(react.useState)(""),2),name=_useState2[0],setName=_useState2[1],_useState4=_slicedToArray(Object(react.useState)(""),2),password=_useState4[0],setPassword=_useState4[1],_useState6=_slicedToArray(Object(react.useState)(""),2),confirmPassword=_useState6[0],setConfirmPassword=_useState6[1],_useState8=_slicedToArray(Object(react.useState)(!1),2),_useState10=(_useState8[0],_useState8[1],_slicedToArray(Object(react.useState)(!1),2)),position=(_useState10[0],_useState10[1],"ltr"===props.dir?"left":void 0);return Object(jsx_runtime.jsxs)(collections_Form_Form,{children:[Object(jsx_runtime.jsx)(collections_Form_Form.Input,{fluid:!0,icon:"user",iconPosition:position,placeholder:props.nameLabel,value:name,onChange:function onChange(e){return setName(e.target.value)}}),Object(jsx_runtime.jsx)(collections_Form_Form.Input,{fluid:!0,icon:"key",iconPosition:position,placeholder:props.passwordLabel,value:password,onChange:function onChange(e){return setPassword(e.target.value)}}),Object(jsx_runtime.jsx)(collections_Form_Form.Input,{fluid:!0,icon:"key",iconPosition:position,placeholder:props.confirmPasswordLabel,value:confirmPassword,onChange:function onChange(e){return setConfirmPassword(e.target.value)}}),Object(jsx_runtime.jsx)(Button.a,{fluid:!0,type:"submit",primary:!0,disabled:!0,children:props.createProfileLabel})]})};CreateProfile_CreateProfile_CreateProfile.displayName="CreateProfile",CreateProfile_CreateProfile_CreateProfile.defaultProps={dir:"ltr",inverted:!1,nameLabel:"Name",passwordLabel:"Password",confirmPasswordLabel:"Confirm password",createProfileLabel:"Create Profile",advancedOptionsLabel:"Advanced options",developerLabel:"Enable developer mode"};var components_CreateProfile_CreateProfile=CreateProfile_CreateProfile_CreateProfile;try{CreateProfile_CreateProfile_CreateProfile.displayName="CreateProfile",CreateProfile_CreateProfile_CreateProfile.__docgenInfo={description:"",displayName:"CreateProfile",props:{dir:{defaultValue:{value:"ltr"},description:"Defines the direction of the component",name:"dir",required:!1,type:{name:"enum",value:[{value:'"ltr"'},{value:'"rtl"'}]}},inverted:{defaultValue:{value:"false"},description:"Toggles between light and dark modes",name:"inverted",required:!1,type:{name:"boolean"}},nameLabel:{defaultValue:{value:"Name"},description:"The label for the name input field.",name:"nameLabel",required:!1,type:{name:"string"}},passwordLabel:{defaultValue:{value:"Password"},description:"The label for the password input field.",name:"passwordLabel",required:!1,type:{name:"string"}},confirmPasswordLabel:{defaultValue:{value:"Confirm password"},description:"The label for the confirm password input field.",name:"confirmPasswordLabel",required:!1,type:{name:"string"}},advancedOptionsLabel:{defaultValue:{value:"Advanced options"},description:"The label for the advanced options accordion.",name:"advancedOptionsLabel",required:!1,type:{name:"string"}},developerLabel:{defaultValue:{value:"Enable developer mode"},description:"The label for the developer options checkbox.",name:"developerLabel",required:!1,type:{name:"string"}},createProfileLabel:{defaultValue:{value:"Create Profile"},description:"The label for the create profile button.",name:"createProfileLabel",required:!1,type:{name:"string"}},onCreateProfile:{defaultValue:null,description:"The callback function to be called when the user creates a profile.\n@param name - The user's name.\n@param password - The user's password.\n@param isDeveloper - If the user opted for developer mode",name:"onCreateProfile",required:!1,type:{name:"((name: string, password: string, isDeveloper: boolean) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CreateProfile/CreateProfile.tsx#CreateProfile"]={docgenInfo:CreateProfile_CreateProfile_CreateProfile.__docgenInfo,name:"CreateProfile",path:"src/components/CreateProfile/CreateProfile.tsx#CreateProfile"})}catch(__react_docgen_typescript_loader_error){}var _excluded=["dir","inverted"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_exports__.default={title:"Onboarding/CreateProfile",component:components_CreateProfile_CreateProfile,parameters:{storySource:{source:"import React from 'react';\n\nimport { action } from \"@storybook/addon-actions\";\n\nimport CreateProfile from './CreateProfile.tsx';\n\nexport default {\n  title: 'Onboarding/CreateProfile',\n  component: CreateProfile,\n  parameters: {\n    componentSubtitle: 'Displays a form for the user to create their profile',\n    storyshots: { disable: false },\n  },\n  argTypes: {\n    dir: {\n      control: 'radio',\n      options: ['ltr', 'rtl']\n    },\n    inverted: {\n      control: 'boolean'\n    }\n  }\n};\n\nconst Template = ({dir, inverted, ...props}) => {\n  return (\n    <CreateProfile\n      dir={dir}\n      inverted={inverted}\n      {...props}\n    />\n  );\n};\n\nexport const Default = Template.bind({});\nDefault.args = {\n  dir: 'ltr',\n  inverted: false\n}\n\nexport const RTL = Template.bind({});\nRTL.args = {\n  dir: 'rtl',\n  inverted: false\n}\n",locationsMap:{default:{startLoc:{col:17,line:25},endLoc:{col:1,line:33},startBody:{col:17,line:25},endBody:{col:1,line:33}},rtl:{startLoc:{col:17,line:25},endLoc:{col:1,line:33},startBody:{col:17,line:25},endBody:{col:1,line:33}}}},componentSubtitle:"Displays a form for the user to create their profile",storyshots:{disable:!1}},argTypes:{dir:{control:"radio",options:["ltr","rtl"]},inverted:{control:"boolean"}}};var CreateProfile_stories_Template=function Template(_ref){var dir=_ref.dir,inverted=_ref.inverted,props=_objectWithoutProperties(_ref,_excluded);return Object(jsx_runtime.jsx)(components_CreateProfile_CreateProfile,Object.assign({dir:dir,inverted:inverted},props))};CreateProfile_stories_Template.displayName="Template";var Default=CreateProfile_stories_Template.bind({});Default.args={dir:"ltr",inverted:!1};var RTL=CreateProfile_stories_Template.bind({});RTL.args={dir:"rtl",inverted:!1},Default.parameters=Object.assign({storySource:{source:"({dir, inverted, ...props}) => {\n  return (\n    <CreateProfile\n      dir={dir}\n      inverted={inverted}\n      {...props}\n    />\n  );\n}"}},Default.parameters),RTL.parameters=Object.assign({storySource:{source:"({dir, inverted, ...props}) => {\n  return (\n    <CreateProfile\n      dir={dir}\n      inverted={inverted}\n      {...props}\n    />\n  );\n}"}},RTL.parameters)}}]);