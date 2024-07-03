"use strict";(self.webpackChunkfitnessapp=self.webpackChunkfitnessapp||[]).push([[8149],{86522:function(e,r,t){t(47313);var n=t(8047),a=t(19641),s=t(46417);r.Z=function(e){var r=e.name,t=e.label,i=e.inputRef,l=e.InputProps,o=e.error,c=e.helperText,d=e.xs,u=e.sm,x=e.m,f=e.placeholder,p=e.id,h=e.defaultValue,m=e.readOnly,b=e.disabled,j=e.type,Z=e.onChange;return console.log(j),(0,s.jsx)(a.ZP,{item:!0,xs:d,sm:u,m:x,children:(0,s.jsx)(n.Z,{InputLabelProps:{shrink:!0},type:j||"text",variant:"outlined",margin:"normal",fullWidth:!0,label:t,id:p,name:r,inputRef:i,InputProps:l,error:o,helperText:c,placeholder:f,defaultValue:h,readOnly:m,disabled:b,onChange:Z})})}},88149:function(e,r,t){t.r(r);var n=t(74165),a=t(15861),s=t(29439),i=t(47313),l=t(19641),o=t(47605),c=t(32530),d=t(85281),u=t(48104),x=t(42832),f=t(75627),p=t(24083),h=t(31387),m=(t(88282),t(80472)),b=t(1164),j=t(86522),Z=t(46417);r.default=function(){var e=(0,i.useState)(!1),r=(0,s.Z)(e,2),t=r[0],g=r[1],P=(0,i.useState)(!0),v=(0,s.Z)(P,2),y=v[0],S=v[1],C=(0,i.useState)(!0),V=(0,s.Z)(C,2),q=V[0],A=V[1],F=(0,b.ec)().userRole,I=(0,f.cI)(),R=I.register,k=I.getValues,w=I.setValue,T=I.handleSubmit,W=I.formState.errors,L=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,p.r6)().then((function(e){w("protein",e.data.info[0].protein),w("carb",e.data.info[0].carb),w("fat",e.data.info[0].fat),w("fibre",e.data.info[0].fibre),A(e.data.info[0]._id),S(!1)})).catch((function(){S(!1)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,i.useEffect)((function(){L()}),[w,k]);return(0,Z.jsx)(l.ZP,{container:!0,xs:5,children:(0,Z.jsxs)(l.ZP,{item:!0,xs:12,md:6,lg:6,children:[(0,Z.jsxs)(l.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",children:[(0,Z.jsx)(l.ZP,{item:!0,children:(0,Z.jsx)(o.Z,{variant:"h5",children:"Nutrition Settings"})}),(0,Z.jsx)(l.ZP,{item:!0})]}),(0,Z.jsx)(m.Z,{sx:{mt:2},content:!1,children:(0,Z.jsx)(x.Z,{spacing:3,children:(0,Z.jsxs)(l.ZP,{xs:12,sx:{p:3},children:[(0,Z.jsx)(h.Ix,{}),(0,Z.jsx)("form",{onSubmit:T((function(e){1==F?(g(!0),(0,p.LK)(e,q).then((function(e){e.data.isSuccess&&200===e.data.status?(g(!1),h.Am.success("Updated successfully!")):(e.data.status,e.data.isSuccess||(h.Am.error(e.data.message),g(!1)))})).catch((function(e){h.Am.error(e.response.data),e.response.data.isSuccess?(h.Am.error("Something Went Wrong!"),g(!1)):400===e.response.data.status?(h.Am.error(e.response.data.message),g(!1)):(h.Am.error("Something is wrong in an input."),g(!1))}))):h.Am.error("Sorry, you do not have permission to access this feature.Please contact your administrator for assistance.")})),children:y?(0,Z.jsx)("p",{children:"Loading..."}):(0,Z.jsxs)("div",{children:[(0,Z.jsx)(c.Z,{mb:2,children:(0,Z.jsx)(o.Z,{color:"#FF0000"})}),(0,Z.jsx)(h.Ix,{}),(0,Z.jsxs)(l.ZP,{container:!0,xs:12,children:[(0,Z.jsx)(l.ZP,{xs:10,children:(0,Z.jsx)(j.Z,{xs:12,id:"protein",name:"protein",label:"Protein",inputRef:R("protein",{required:!0}),error:!!W.protein,helperText:W.protein&&"Protein is required",placeholder:"Protein",defaultValue:k("protein"),onChange:function(e){return w("protein",e.target.value)}})}),(0,Z.jsx)(l.ZP,{xs:2,children:(0,Z.jsx)(j.Z,{xs:12,placeholder:"%",defaultValue:"%",disabled:!0})})]}),(0,Z.jsxs)(l.ZP,{container:!0,xs:12,children:[(0,Z.jsx)(l.ZP,{xs:10,mt:2,children:(0,Z.jsx)(j.Z,{xs:12,id:"carb",name:"carb",label:"Carb",inputRef:R("carb",{required:!0}),error:!!W.carb,helperText:W.carb&&"Carb is required",placeholder:"Carb",defaultValue:k("carb"),onChange:function(e){return w("carb",e.target.value)}})}),(0,Z.jsx)(l.ZP,{xs:2,mt:2,children:(0,Z.jsx)(j.Z,{xs:12,placeholder:"%",defaultValue:"%",disabled:!0})})]}),(0,Z.jsxs)(l.ZP,{container:!0,xs:12,children:[(0,Z.jsx)(l.ZP,{xs:10,mt:2,children:(0,Z.jsx)(j.Z,{xs:12,id:"fat",name:"fat",label:"Fat",inputRef:R("fat",{required:!0}),error:!!W.fat,helperText:W.fat&&"Fat is required",placeholder:"Fat",defaultValue:k("fat"),onChange:function(e){return w("fat",e.target.value)}})}),(0,Z.jsx)(l.ZP,{xs:2,mt:2,children:(0,Z.jsx)(j.Z,{xs:12,placeholder:"%",defaultValue:"%",disabled:!0})})]}),(0,Z.jsxs)(l.ZP,{container:!0,xs:12,children:[(0,Z.jsx)(l.ZP,{xs:10,mt:2,children:(0,Z.jsx)(j.Z,{xs:12,id:"fibre",name:"fibre",label:"Fibre",inputRef:R("fibre",{required:!0}),error:!!W.fibre,helperText:W.fibre&&"Fibre is required",placeholder:"Fibre",defaultValue:k("fibre"),onChange:function(e){return w("fibre",e.target.value)}})}),(0,Z.jsx)(l.ZP,{xs:2,mt:2,children:(0,Z.jsx)(j.Z,{xs:12,placeholder:"%",defaultValue:"g",disabled:!0})})]}),(0,Z.jsx)("div",{style:{textAlign:"center"},children:t?(0,Z.jsx)(l.ZP,{item:!0,xs:12,mt:2,children:(0,Z.jsx)(d.Z,{size:26,fullWidth:!0,style:{"margin-top":"40px"}})}):(0,Z.jsx)(u.Z,{type:"submit",variant:"contained",color:"primary",size:"large",style:{"margin-top":"40px"},children:"Update"})})]})})]})})})]})})}}}]);