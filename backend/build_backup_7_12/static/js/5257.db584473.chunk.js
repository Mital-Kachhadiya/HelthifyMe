"use strict";(self.webpackChunkfitnessapp=self.webpackChunkfitnessapp||[]).push([[5257],{85257:function(e,t,n){n.r(t);var s=n(74165),r=n(15861),a=n(29439),c=n(24083),i=n(47313),o=n(7794),u=n(31387),d=(n(88282),n(71207)),l=n(35192),p=n(58467),f=n(80836),m=n(19641),x=n(47605),h=n(48104),g=n(85281),y=n(94621),v=n.n(y),Z=n(70024),b=n(46417);t.default=function(){var e=(0,i.useState)([]),t=(0,a.Z)(e,2),n=t[0],y=t[1],j=(0,i.useState)(!1),w=(0,a.Z)(j,2),k=w[0],S=w[1],A=(0,p.s0)(),C=(0,i.useState)([]),I=(0,a.Z)(C,2),R=I[0],_=I[1],N=(0,p.TH)().state.catdata,z=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(!0),e.next=3,(0,c.ed)(N._id).then((function(e){S(!1),y(e.data.info),_("".concat("http://167.71.227.102:5055","/public/recipes/"))})).catch((function(e){e.response.data.isSuccess||(401===e.response.data.status?(u.Am.error(e.response.data.message),S(!1)):console.log(e.response.data,"else"))}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,i.useEffect)((function(){"true"===localStorage.getItem("redirectSuccess")&&(u.Am.success(localStorage.getItem("redirectMessage"),{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!1,pauseOnHover:!0,draggable:!0,progress:void 0}),localStorage.removeItem("redirectSuccess")),z()}),[]);var P=[{name:"image",label:"Image",options:{customBodyRender:function(e){return e?(0,b.jsx)("img",{src:"".concat("http://167.71.227.102:5055/public/recipes/").concat(e),alt:e,style:{height:"50px",width:"50px",borderRadius:"50%"}}):""}}},{name:"name",label:"Name",options:{filter:!0,sort:!0}},{name:"status",label:"Status",options:{filter:!0,sort:!1,customBodyRender:function(e,t){var s=t.rowIndex,r=n[s],a=r.status,i=r._id;return(0,b.jsx)(Z.Z,{checked:a,onChange:function(){var e={id:i,status:!a};(0,c.eW)(e,i).then((function(){u.Am.success("status changed successfully!",{key:e._id}),z()})).catch((function(){u.Am.error("something went wrong!",{key:e._id})}))}})}}},{name:"_id",label:"Action",options:{customBodyRender:function(e){return(0,b.jsxs)("div",{children:[(0,b.jsx)(d.Z,{style:{color:"#6495ED",cursor:"pointer",border:"1px solid",borderRadius:"5px",margin:"0px 6px",fontSize:"30px",padding:"4px"},onClick:function(){var t=n.find((function(t){return t._id===e}));A("/recipes/recipessubcat/manage",{state:{catdata:N,editdata:t,imageurl:R}})}}),(0,b.jsx)(l.Z,{style:{color:"#FF5733",cursor:"pointer",border:"1px solid",borderRadius:"5px",margin:"0px 6px",fontSize:"30px",padding:"4px"},onClick:(0,r.Z)((0,s.Z)().mark((function t(){return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v()({title:"Are you sure?",text:"Are you sure that you want to delete this Essential?",icon:"warning",buttons:["No, cancel it!","Yes, I am sure!"],dangerMode:!0});case 2:t.sent&&(0,c.O4)(e).then((function(){u.Am.success("deleted successfully!",{key:e}),z()})).catch((function(){u.Am.error("something went wrong!",{key:e})}));case 4:case"end":return t.stop()}}),t)})))})]})}}}],B=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(t){var r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.data.map((function(e){return n.find((function(t,n){return n===e.dataIndex&&t._id}))._id})),e.next=3,v()({title:"Are you sure?",text:"Are you sure that you want to delete this Essential?",icon:"warning",buttons:["No, cancel it!","Yes, I am sure!"],dangerMode:!0});case 3:e.sent&&(0,c.Oi)(r).then((function(){z(),u.Am.success("Deleted successfully!",{key:r})})).catch((function(){u.Am.error("Something went wrong!",{key:r})}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(e){var t=e.selectedRows,n=e.data;return(0,b.jsx)("div",{children:(0,b.jsx)(f.Z,{onClick:function(){return B(t,n)},children:(0,b.jsx)(l.Z,{})})})},O={customToolbarSelect:function(e,t){return(0,b.jsx)(E,{selectedRows:e,data:t,columns:P,datatableTitle:"test"})}};return(0,b.jsx)("div",{children:(0,b.jsx)(m.ZP,{container:!0,spacing:4,children:(0,b.jsxs)(m.ZP,{item:!0,xs:12,children:[(0,b.jsx)(u.Ix,{}),(0,b.jsxs)("div",{className:"text-container",children:[(0,b.jsx)("div",{className:"left-text",children:(0,b.jsxs)(x.Z,{variant:"h4",size:"sm",className:"subHead",children:[(0,b.jsx)("a",{href:"/recipes",children:N.name})," > Sub-Category"]})}),(0,b.jsx)("div",{className:"right-text",children:(0,b.jsx)(h.Z,{variant:"contained",size:"medium",color:"primary",onClick:function(){A("/recipes/recipessubcat/manage",{state:{catdata:N}})},children:"Add Recipe Sub-Category"})})]}),k?(0,b.jsx)(m.ZP,{item:!0,xs:12,style:{textAlign:"center"},children:(0,b.jsx)(g.Z,{size:26,fullWidth:!0})}):(0,b.jsx)(o.ZP,{data:n,columns:P,options:O})]})})})}}}]);