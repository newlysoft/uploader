/*!build time : 2014-08-03 12:43:21 PM*/
KISSY.add("kg/uploader/2.0.1/type/base",function(a,b,c){function d(a){var b=this;d.superclass.constructor.call(b,a)}{var e="";b.all}return a.mix(d,{event:{START:"start",STOP:"stop",SUCCESS:"success",ERROR:"error"}}),a.extend(d,c,{upload:function(){},stop:function(){},_processResponse:function(b){var c=this,d=c.get("filter"),f={};if(a.isString(b))try{f=a.JSON.parse(b),d!=e&&(f=d.call(c,b)),f=c._fromUnicode(f)}catch(g){var h=b+"\uff0c\u8fd4\u56de\u7ed3\u679c\u96c6responseText\u683c\u5f0f\u4e0d\u5408\u6cd5\uff01";a.log(h),c.fire("error",{status:-1,result:{msg:h}})}else a.isObject(b)&&(d!=e&&(f=d.call(c,b)),f=c._fromUnicode(b));return a.log("\u670d\u52a1\u5668\u7aef\u8f93\u51fa\uff1a"+a.JSON.stringify(f)),f},_fromUnicode:function(b){function c(b){a.each(b,function(d,e){a.isObject(b[e])?c(b[e]):b[e]=a.isString(d)&&a.fromUnicode(d)||d})}return a.isObject(b)?(c(b),b):b}},{ATTRS:{action:{value:e},data:{value:{}},filter:{value:e}}}),d},{requires:["node","base"]}),KISSY.add("kg/uploader/2.0.1/type/iframe",function(a,b,c){function d(a){var b=this;d.superclass.constructor.call(b,a)}var e="",f=b.all,g="[uploader-iframeType]:",h="ks-uploader-iframe-";return a.mix(d,{tpl:{IFRAME:'<iframe src="javascript:false;" name="{id}" id="{id}" border="no" width="1" height="1" style="display: none;" />',FORM:'<form method="post" enctype="multipart/form-data" action="{action}" target="{target}" style="visibility: hidden;">{hiddenInputs}</form>',HIDDEN_INPUT:'<input type="hidden" name="{name}" value="{value}" />'},event:a.mix(c.event,{CREATE:"create",REMOVE:"remove"})}),a.extend(d,c,{upload:function(b){var c,e=this,h=f(b);return h.length?(e.fire(d.event.START,{input:h}),e.set("fileInput",h),e._create(),(c=e.get("form"))?void c.getDOMNode().submit():(a.log(g+"form\u8282\u70b9\u4e0d\u5b58\u5728\uff01"),!1)):!1},stop:function(){var a=this,b=a.get("iframe");return b.attr("src",'javascript:"<html></html>";'),a._remove(),a.fire(d.event.STOP),a.fire(d.event.ERROR,{status:"abort",msg:"\u4e0a\u4f20\u5931\u8d25\uff0c\u539f\u56e0\uff1aabort"}),a},dataToHidden:function(b){if(!a.isObject(b)||a.isEmptyObject(b))return"";var c=this,d=e,f=c.get("tpl"),g=f.HIDDEN_INPUT;if(!a.isString(g))return"";for(var h in b)d+=a.substitute(g,{name:h,value:b[h]});return d},_createIframe:function(){var b,c,d=this,e=h+a.guid(),i=d.get("tpl"),j=i.IFRAME,k=d.get("iframe");return a.isEmptyObject(k)?a.isString(j)?a.isString(e)?(b=a.substitute(i.IFRAME,{id:e}),c=f(b),d.get("domain")||c.on("load",d._iframeLoadHandler,d),f("body").append(c),d.set("id",e),d.set("iframe",c),f("body").data("UPLOAD_TYPE",d),c):(a.log(g+"id\u5fc5\u987b\u5b58\u5728\u4e14\u4e3a\u5b57\u7b26\u4e32\u7c7b\u578b\uff01"),!1):(a.log(g+"iframe\u7684\u6a21\u677f\u4e0d\u5408\u6cd5\uff01"),!1):k},handleResult:function(a){var b=this;a=b._processResponse(a),b.fire(d.event.SUCCESS,{result:a}),b._remove()},_iframeLoadHandler:function(b){var c=this,f=b.target,g=d.event.ERROR;try{var h=f.contentDocument||window.frames[f.id].document;if(!h||!h.body)return c.fire(g,{msg:"\u670d\u52a1\u5668\u7aef\u8fd4\u56de\u6570\u636e\u6709\u95ee\u9898\uff01"}),!1;var i=h.body.innerHTML;if(i==e)return!1;c.handleResult(i)}catch(j){a.log(j)}},_createForm:function(){var b,c,d,e=this,h=e.get("id"),i=e.get("tpl"),j=i.FORM,k=e.get("data"),l=e.get("action"),m=e.get("fileInput");return a.isString(j)?a.isString(l)?(b=e.dataToHidden(k),b+=e.dataToHidden({type:"iframe"}),d=a.substitute(j,{action:l,target:h,hiddenInputs:b}),c=f(d).append(m),f("body").append(c),e.set("form",c),c):(a.log(g+"action\u53c2\u6570\u4e0d\u5408\u6cd5\uff01"),!1):(a.log(g+"form\u6a21\u677f\u4e0d\u5408\u6cd5\uff01"),!1)},_create:function(){var a=this,b=a._createIframe(),c=a._createForm();a.fire(d.event.CREATE,{iframe:b,form:c})},_remove:function(){var a=this,b=a.get("form");return b?(b.remove(),a.reset("form"),void a.fire(d.event.REMOVE,{form:b})):!1}},{ATTRS:{tpl:{value:d.tpl},id:{value:h+a.guid()},domain:{value:e},iframe:{value:{}},form:{value:e},fileInput:{value:e}}}),d},{requires:["node","./base"]});