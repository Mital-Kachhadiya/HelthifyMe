"use strict";(self.webpackChunkfitnessapp=self.webpackChunkfitnessapp||[]).push([[6882],{86522:function(e,t,r){r(47313);var s=r(8047),n=r(19641),i=r(46417);t.Z=function(e){var t=e.name,r=e.label,a=e.inputRef,l=e.InputProps,c=e.error,o=e.helperText,d=e.xs,u=e.sm,m=e.m,p=e.placeholder,g=e.id,h=e.defaultValue,x=e.readOnly,f=e.disabled,j=e.onChange;return(0,i.jsx)(n.ZP,{item:!0,xs:d,sm:u,m:m,children:(0,i.jsx)(s.Z,{InputLabelProps:{shrink:!0},variant:"outlined",margin:"normal",fullWidth:!0,label:r,id:g,name:t,inputRef:a,InputProps:l,error:c,helperText:o,placeholder:p,defaultValue:h,readOnly:x,disabled:f,onChange:j})})}},26882:function(e,t,r){r.r(t);var s=r(1413),n=r(29439),i=r(58467),a=r(19641),l=r(47605),c=r(56605),o=r(15480),d=r(85281),u=r(48104),m=r(42832),p=r(86522),g=r(80472),h=r(75627),x=r(47313),f=r(24083),j=r(31387),Z=(r(88282),r(84726)),b=r(46417);t.default=function(){var e=(0,i.TH)().state,t=(0,x.useState)(!0),r=(0,n.Z)(t,2),S=r[0],y=r[1],v=(0,x.useState)(!1),P=(0,n.Z)(v,2),I=P[0],A=P[1],C=(0,x.useState)(""),k=(0,n.Z)(C,2),w=k[0],O=k[1],R=(0,i.s0)(),W=(0,x.useState)(!1),q=(0,n.Z)(W,2),F=q[0],L=q[1],V=(0,x.useState)(Z),z=(0,n.Z)(V,2),M=z[0],T=z[1],H=(0,h.cI)(),N=H.register,U=H.getValues,B=H.setValue,D=H.handleSubmit,E=H.formState.errors;(0,x.useEffect)((function(){if(e){var t=e.editdata,r=e.imageurl;O(t._id),B("name",t.name),T(r+t.image)}y(!1)}),[]);return(0,b.jsx)(a.ZP,{container:!0,rowSpacing:4.5,columnSpacing:2.75,children:(0,b.jsxs)(a.ZP,{item:!0,xs:12,md:6,lg:6,children:[(0,b.jsxs)(a.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",children:[(0,b.jsx)(a.ZP,{item:!0,children:(0,b.jsxs)(l.Z,{variant:"h5",children:[""===w?"Add":"Update"," Recipe"]})}),(0,b.jsx)(a.ZP,{item:!0})]}),(0,b.jsx)(g.Z,{sx:{mt:2},content:!1,children:(0,b.jsx)(m.Z,{spacing:3,children:(0,b.jsxs)(a.ZP,{xs:12,sx:{p:3},children:[(0,b.jsx)(j.Ix,{}),(0,b.jsx)("form",{onSubmit:D((function(e){A(!1);var t=new FormData;Object.keys(e).forEach((function(r){"image"===r?t.append(r,e[r][0]):t.append(r,e[r])})),""===w?(0,f.SK)(t).then((function(){localStorage.setItem("redirectSuccess","true"),localStorage.setItem("redirectMessage","Added successfully!"),R("/recipes")})).catch((function(e){e.response.data.isSuccess?j.Am.error("Something Went Wrong!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!1,pauseOnHover:!0,draggable:!0,progress:void 0}):j.Am.error(capitalizeFirstLetter(e.response.data.message)),A(!1)})):(0,f.qi)(t,w).then((function(){localStorage.setItem("redirectSuccess","true"),localStorage.setItem("redirectMessage","Updated successfully!"),R("/recipes")})).catch((function(e){e.response.data.isSuccess?j.Am.error("Something Went Wrong!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!1,pauseOnHover:!0,draggable:!0,progress:void 0}):j.Am.error(capitalizeFirstLetter(e.response.data.message)),A(!1)}))})),children:S?(0,b.jsx)("p",{children:"Loading..."}):(0,b.jsxs)("div",{children:[(0,b.jsx)(p.Z,{xs:12,m:2,spacing:3,id:"name",name:"name",label:"Name",inputRef:N("name",{required:!0}),error:!!E.name,helperText:E.name&&"Name is required",placeholder:"Name",defaultValue:U("name"),onChange:function(e){return B("name",e.target.value)}}),(0,b.jsx)(a.ZP,{xs:3,mt:2,spacing:3,children:(0,b.jsx)(a.ZP,{item:!0,xs:12,mt:2,style:{textAlign:"center"},children:(0,b.jsxs)(m.Z,{direction:"row",alignItems:"center",style:{display:"block"},spacing:2,sx:6,onMouseOver:function(){L(!0)},onMouseOut:function(){L(!1)},children:[(0,b.jsxs)("label",{htmlFor:"icon-button-file",style:{textAlign:"center"},children:[(0,b.jsx)(c.Z,(0,s.Z)((0,s.Z)({name:"image",accept:"image/*"},N("image",{required:!w})),{},{id:"icon-button-file",type:"file",onChange:function(e){var t=e.target.files[0],r=new FileReader;r.onloadend=function(){T(r.result)},r.readAsDataURL(t)},alignItems:"center",style:{top:"-9999px",left:"-9999px"}})),F?(0,b.jsx)("img",{src:Z,alt:"recipes",width:"100",height:100,style:{borderRadius:"50%"}}):(0,b.jsx)("img",{src:M,alt:"recipes",width:"100",height:100,style:{borderRadius:"50%"}})]}),(0,b.jsx)(o.Z,{error:!0,children:E.image&&"Image is required"})]})})}),I?(0,b.jsx)(a.ZP,{item:!0,xs:12,mt:2,style:{textAlign:"center"},children:(0,b.jsx)(d.Z,{size:26,fullWidth:!0,style:{"margin-top":"15px"}})}):(0,b.jsx)(a.ZP,{item:!0,xs:12,mt:2,style:{textAlign:"center"},children:(0,b.jsx)(u.Z,{type:"submit",variant:"contained",color:"primary",size:"large",style:{"margin-top":"15px",textAlign:"center"},children:"Submit"})})]})})]})})})]})})}},84726:function(e,t,r){e.exports=r.p+"static/media/upload3.bba22052686782d8edb3.jpg"}}]);