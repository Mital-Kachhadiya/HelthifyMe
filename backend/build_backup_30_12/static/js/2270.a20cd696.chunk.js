"use strict";(self.webpackChunkfitnessapp=self.webpackChunkfitnessapp||[]).push([[2270],{92270:function(e,t,s){s.r(t);var n=s(74165),r=s(15861),a=s(29439),o=s(24083),i=s(47313),c=s(7794),u=s(31387),l=(s(88282),s(71207)),d=s(35192),f=s(58467),p=s(48104),m=s(80836),x=s(19641),h=s(47605),g=s(85281),y=s(94621),v=s.n(y),b=s(70024),k=s(1164),Z=s(46417);t.default=function(){var e=(0,i.useState)([]),t=(0,a.Z)(e,2),s=t[0],y=t[1],j=(0,i.useState)(!1),w=(0,a.Z)(j,2),S=w[0],A=w[1],C=(0,f.s0)(),P=(0,i.useState)([]),R=(0,a.Z)(P,2),I=R[0],_=R[1],N=(0,f.TH)().state.catdata,z=(0,k.ec)().userRole,E=function(){var e=(0,r.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return A(!0),e.next=3,(0,o.Xe)(N._id).then((function(e){A(!1),y(e.data.info),_("".concat("http://167.71.227.102:5055","/public/essentials/"))})).catch((function(e){e.response.data.isSuccess||(401===e.response.data.status?(u.Am.error(e.response.data.message),A(!1)):console.log(e.response.data,"else"))}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,i.useEffect)((function(){"true"===localStorage.getItem("redirectSuccess")&&(u.Am.success(localStorage.getItem("redirectMessage"),{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!1,pauseOnHover:!0,draggable:!0,progress:void 0}),localStorage.removeItem("redirectSuccess")),E()}),[]);var T=[{name:"image",label:"Image",options:{customBodyRender:function(e){return e?(0,Z.jsx)("img",{src:"".concat("http://167.71.227.102:5055/public/essentials/").concat(e),alt:e,style:{height:"50px",width:"50px",borderRadius:"50%"}}):""}}},{name:"title",label:"Title",options:{filter:!0,sort:!0}},{name:"status",label:"Status",options:{filter:!0,sort:!1,customBodyRender:function(e,t){var n=t.rowIndex,r=s[n],a=r.status,i=r._id;return(0,Z.jsx)(b.Z,{checked:a,onChange:function(){if(1==z){var e={id:i,status:!a};(0,o.vW)(e,i).then((function(){u.Am.success("status changed successfully!",{key:e._id}),E()})).catch((function(){u.Am.error("something went wrong!",{key:e._id})}))}else u.Am.error("Sorry, you do not have permission to access this feature.Please contact your administrator for assistance.")}})}}},{name:"_id",label:"Action",options:{customBodyRender:function(e){return(0,Z.jsxs)("div",{children:[(0,Z.jsx)(l.Z,{style:{color:"#6495ED",cursor:"pointer",border:"1px solid",borderRadius:"5px",margin:"0px 6px",fontSize:"30px",padding:"4px"},onClick:function(){if(1==z){var t=s.find((function(t){return t._id===e}));C("/essentials/esssubcatlevel1/manage",{state:{catdata:N,editdata:t,imageurl:I}})}else u.Am.error("Sorry, you do not have permission to access this feature.Please contact your administrator for assistance.")}}),(0,Z.jsx)(d.Z,{style:{color:"#FF5733",cursor:"pointer",border:"1px solid",borderRadius:"5px",margin:"0px 6px",fontSize:"30px",padding:"4px"},onClick:(0,r.Z)((0,n.Z)().mark((function t(){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(1!=z){t.next=7;break}return t.next=3,v()({title:"Are you sure?",text:"Are you sure that you want to delete this Essential?",icon:"warning",buttons:["No, cancel it!","Yes, I am sure!"],dangerMode:!0});case 3:t.sent&&(0,o.Mb)(e).then((function(){u.Am.success("deleted successfully!",{key:e}),E()})).catch((function(){u.Am.error("something went wrong!",{key:e})})),t.next=8;break;case 7:u.Am.error("Sorry, you do not have permission to access this feature.Please contact your administrator for assistance.");case 8:case"end":return t.stop()}}),t)})))}),(0,Z.jsx)(p.Z,{style:{color:"#237804",cursor:"pointer",border:"1px solid",borderRadius:"5px",margin:"0px 6px",lineHeight:"1.2",marginTop:"-21px"},onClick:function(){var t=s.find((function(t){return t._id===e}));C("/essentials/esssubcatlevel2",{state:{catdata:N,subcatdata:t,imageurl:I}})},children:"Sub-Category"})]})}}}],B=function(){var e=(0,r.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(1!=z){e.next=8;break}return r=t.data.map((function(e){return s.find((function(t,s){return s===e.dataIndex&&t._id}))._id})),e.next=4,v()({title:"Are you sure?",text:"Are you sure that you want to delete this Essential?",icon:"warning",buttons:["No, cancel it!","Yes, I am sure!"],dangerMode:!0});case 4:e.sent&&(0,o.wi)(r).then((function(){E(),u.Am.success("Deleted successfully!",{key:r})})).catch((function(){u.Am.error("Something went wrong!",{key:r})})),e.next=9;break;case 8:u.Am.error("Sorry, you do not have permission to access this feature.Please contact your administrator for assistance.");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H=function(e){var t=e.selectedRows,s=e.data;return(0,Z.jsx)("div",{children:(0,Z.jsx)(m.Z,{onClick:function(){return B(t,s)},children:(0,Z.jsx)(d.Z,{})})})},M={customToolbarSelect:function(e,t){return(0,Z.jsx)(H,{selectedRows:e,data:t,columns:T,datatableTitle:"test"})}};return(0,Z.jsx)("div",{children:(0,Z.jsx)(x.ZP,{container:!0,spacing:4,children:(0,Z.jsxs)(x.ZP,{item:!0,xs:12,children:[(0,Z.jsx)(u.Ix,{}),(0,Z.jsxs)("div",{className:"text-container",children:[(0,Z.jsx)("div",{className:"left-text",children:(0,Z.jsxs)(h.Z,{variant:"h4",size:"sm",className:"subHead",children:[(0,Z.jsx)("a",{href:"/fitness-app/backend/essentials",children:N.title})," > SubCategories Level 1"]})}),(0,Z.jsx)("div",{className:"right-text",children:(0,Z.jsx)(p.Z,{variant:"contained",size:"medium",color:"primary",onClick:function(){1==z?C("/essentials/esssubcatlevel1/manage",{state:{catdata:N}}):u.Am.error("Sorry, you do not have permission to access this feature.Please contact your administrator for assistance.")},children:"Add Essentials Level 1 Sub-Category"})})]}),S?(0,Z.jsx)(x.ZP,{item:!0,xs:12,style:{textAlign:"center"},children:(0,Z.jsx)(g.Z,{size:26,fullWidth:!0})}):(0,Z.jsx)(c.ZP,{data:s,columns:T,options:M})]})})})}}}]);