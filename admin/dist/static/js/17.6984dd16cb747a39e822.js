webpackJsonp([17],{"bc+A":function(e,t){},j2j5:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("Xxa5"),n=r.n(a),o=r("exGp"),i=r.n(o),l=r("Dd8w"),c=r.n(l),s=r("NYxO"),u=(r("g1wi"),{data:function(){return{token:"",column_chapter_id:this.$route.params.column_chapter_id,detail:null,categoryList:[],formValidate:{title:"",author:"",content:""},ruleValidate:{title:[{required:!0,message:"文章标题不能为空",trigger:"blur"}],author:[{required:!0,message:"文章作者不能为空",trigger:"blur"}],content:[{required:!0,message:"文章内容不能为空",trigger:"blur"}]}}},created:function(){},methods:c()({},Object(s.b)({createSection:"section/create"}),{create:function(){var e=this;return i()(n.a.mark(function t(){return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.formValidate.column_chapter_id=e.column_chapter_id,t.next=4,e.createSection(e.formValidate);case 4:e.$Message.success("新增成功!"),e.$router.push("/chapter/section/"+e.column_chapter_id),t.next=10;break;case 8:t.prev=8,t.t0=t.catch(0);case 10:case"end":return t.stop()}},t,e,[[0,8]])}))()},handleSubmit:function(e){var t=this;this.$refs[e].validate(function(e){e?t.create():t.$Message.error("请完成表单!")})},handleReset:function(e){this.$refs[e].resetFields()}})}),d={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("Form",{ref:"formValidate",attrs:{model:e.formValidate,rules:e.ruleValidate,"label-width":100}},[r("FormItem",{attrs:{label:"文章标题",prop:"title"}},[r("Input",{attrs:{placeholder:"文章标题"},model:{value:e.formValidate.title,callback:function(t){e.$set(e.formValidate,"title",t)},expression:"formValidate.title"}})],1),e._v(" "),r("FormItem",{attrs:{label:"文章作者",prop:"author"}},[r("Input",{attrs:{placeholder:"文章作者"},model:{value:e.formValidate.author,callback:function(t){e.$set(e.formValidate,"author",t)},expression:"formValidate.author"}})],1),e._v(" "),r("FormItem",{attrs:{label:"文章内容",prop:"content"}},[r("mavon-editor",{ref:"md",attrs:{ishljs:!0},model:{value:e.formValidate.content,callback:function(t){e.$set(e.formValidate,"content",t)},expression:"formValidate.content"}})],1),e._v(" "),r("FormItem",[r("Button",{on:{click:function(t){return e.handleReset("formValidate")}}},[e._v("重置")]),e._v(" "),r("Button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary"},on:{click:function(t){return e.handleSubmit("formValidate")}}},[e._v("提交")])],1)],1)],1)},staticRenderFns:[]};var m=r("VU/8")(u,d,!1,function(e){r("bc+A")},"data-v-0f4265b8",null);t.default=m.exports}});
//# sourceMappingURL=17.6984dd16cb747a39e822.js.map