"use strict";(self.webpackChunkfitnessapp=self.webpackChunkfitnessapp||[]).push([[9392],{49392:function(e,t,r){r.r(t);var n=r(74165),s=r(15861),o=r(29439),a=r(24083),i=r(47313),c=r(7794),u=r(31387),l=(r(88282),r(71207)),d=r(35192),f=r(58467),m=r(80836),p=r(19641),h=r(47605),x=r(48104),y=r(85281),g=r(94621),k=r.n(g),v=r(70024),w=r(1164),Z=r(46417);t.default=function(){var e=(0,i.useState)([]),t=(0,o.Z)(e,2),r=t[0],g=t[1],b=(0,i.useState)(!1),j=(0,o.Z)(b,2),A=j[0],S=j[1],C=(0,f.s0)(),P=(0,i.useState)([]),I=(0,o.Z)(P,2),R=I[0],_=I[1],z=(0,w.ec)().userRole,N=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(!0),e.next=3,(0,a.Q_)().then((function(e){S(!1),g(e.data.info),_("".concat("http://167.71.227.102:5055/public/workoutCollection/"))})).catch((function(e){e.response.data.isSuccess||(401===e.response.data.status?(u.Am.error(e.response.data.message),S(!1)):console.log(e.response.data,"else"))}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,i.useEffect)((function(){"true"===localStorage.getItem("redirectSuccess")&&(u.Am.success(localStorage.getItem("redirectMessage"),{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!1,pauseOnHover:!0,draggable:!0,progress:void 0}),localStorage.removeItem("redirectSuccess")),N()}),[]);var B=[{name:"image",label:"Image",options:{customBodyRender:function(e){return e?(0,Z.jsx)("img",{src:"".concat("http://167.71.227.102:5055/public/workoutCollection/").concat(e),alt:e,style:{height:"50px",width:"50px",borderRadius:"50%"}}):""}}},{name:"title",label:"Title",options:{filter:!0,sort:!0}},{name:"status",label:"Status",options:{filter:!0,sort:!1,customBodyRender:function(e,t){var n=t.rowIndex,s=r[n],o=s.status,i=s._id;return(0,Z.jsx)(v.Z,{checked:o,onChange:function(){if(1==z){var e={id:i,status:!o};(0,a.A0)(e,i).then((function(){u.Am.success("status changed successfully!",{key:e._id}),N()})).catch((function(){u.Am.error("something went wrong!",{key:e._id})}))}else u.Am.error("Sorry, you do not have permission to access this feature.Please contact your administrator for assistance.")}})}}},{name:"_id",label:"Action",options:{customBodyRender:function(e){return(0,Z.jsxs)("div",{children:[(0,Z.jsx)(l.Z,{style:{color:"#6495ED",cursor:"pointer",border:"1px solid",borderRadius:"5px",margin:"0px 6px",fontSize:"30px",padding:"4px"},onClick:function(){if(1==z){var t=r.find((function(t){return t._id===e}));C("/workoutCollection/manage",{state:{editdata:t,imageurl:R}})}else u.Am.error("Sorry, you do not have permission to access this feature.Please contact your administrator for assistance.")}}),(0,Z.jsx)(d.Z,{style:{color:"#FF5733",cursor:"pointer",border:"1px solid",borderRadius:"5px",margin:"0px 6px",fontSize:"30px",padding:"4px"},onClick:(0,s.Z)((0,n.Z)().mark((function t(){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(1!=z){t.next=7;break}return t.next=3,k()({title:"Are you sure?",text:"Are you sure that you want to delete this Essential?",icon:"warning",buttons:["No, cancel it!","Yes, I am sure!"],dangerMode:!0});case 3:t.sent&&(0,a.uh)(e).then((function(){u.Am.success("deleted successfully!",{key:e}),N()})).catch((function(){u.Am.error("something went wrong!",{key:e})})),t.next=8;break;case 7:u.Am.error("Sorry, you do not have permission to access this feature.Please contact your administrator for assistance.");case 8:case"end":return t.stop()}}),t)})))})]})}}}],E=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t){var s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(1!=z){e.next=8;break}return s=t.data.map((function(e){return r.find((function(t,r){return r===e.dataIndex&&t._id}))._id})),e.next=4,k()({title:"Are you sure?",text:"Are you sure that you want to delete this Essential?",icon:"warning",buttons:["No, cancel it!","Yes, I am sure!"],dangerMode:!0});case 4:e.sent&&(0,a.rd)(s).then((function(){N(),u.Am.success("Deleted successfully!",{key:s})})).catch((function(){u.Am.error("Something went wrong!",{key:s})})),e.next=9;break;case 8:u.Am.error("Sorry, you do not have permission to access this feature.Please contact your administrator for assistance.");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(e){var t=e.selectedRows,r=e.data;return(0,Z.jsx)("div",{children:(0,Z.jsx)(m.Z,{onClick:function(){return E(t,r)},children:(0,Z.jsx)(d.Z,{})})})},M={customToolbarSelect:function(e,t){return(0,Z.jsx)(W,{selectedRows:e,data:t,columns:B,datatableTitle:"Workout Collection"})}};return(0,Z.jsx)("div",{children:(0,Z.jsx)(p.ZP,{container:!0,spacing:4,children:(0,Z.jsxs)(p.ZP,{item:!0,xs:12,children:[(0,Z.jsx)(u.Ix,{}),(0,Z.jsxs)("div",{className:"text-container",children:[(0,Z.jsx)("div",{className:"left-text",children:(0,Z.jsx)(h.Z,{variant:"h4",size:"sm",children:"Workout Collection"})}),(0,Z.jsx)("div",{className:"right-text",children:(0,Z.jsx)(x.Z,{variant:"contained",size:"medium",color:"primary",onClick:function(){1==z?C("/workoutCollection/manage"):u.Am.error("Sorry, you do not have permission to access this feature.Please contact your administrator for assistance.")},children:"Add Workout Collection"})})]}),A?(0,Z.jsx)(p.ZP,{item:!0,xs:12,style:{textAlign:"center"},children:(0,Z.jsx)(y.Z,{size:26,fullWidth:!0})}):(0,Z.jsx)(c.ZP,{data:r,columns:B,options:M})]})})})}}}]);