"use strict";(self.webpackChunkfitnessapp=self.webpackChunkfitnessapp||[]).push([[3453],{86522:function(e,t,i){i(47313);var n=i(8047),r=i(19641),s=i(46417);t.Z=function(e){var t=e.name,i=e.label,a=e.inputRef,l=e.InputProps,o=e.error,c=e.helperText,d=e.xs,u=e.sm,p=e.m,g=e.placeholder,m=e.id,x=e.defaultValue,h=e.readOnly,f=e.disabled,j=e.type,Z=e.onChange;return console.log(j),(0,s.jsx)(r.ZP,{item:!0,xs:d,sm:u,m:p,children:(0,s.jsx)(n.Z,{InputLabelProps:{shrink:!0},type:j||"text",variant:"outlined",margin:"normal",fullWidth:!0,label:i,id:m,name:t,inputRef:a,InputProps:l,error:o,helperText:c,placeholder:g,defaultValue:x,readOnly:h,disabled:f,onChange:Z})})}},93453:function(e,t,i){i.r(t);var n=i(1413),r=i(29439),s=i(58467),a=i(19641),l=i(47605),o=i(56605),c=i(15480),d=i(85345),u=i(85281),p=i(48104),g=i(42832),m=i(86522),x=i(80472),h=i(75627),f=i(47313),j=i(24083),Z=i(31387),y=(i(88282),i(84726)),b=i(16),v=i.n(b),S=(i(94230),i(46417));t.default=function(){var e=(0,s.TH)().state,t=(0,f.useState)(!0),i=(0,r.Z)(t,2),b=i[0],C=i[1],P=(0,f.useState)(!1),I=(0,r.Z)(P,2),k=I[0],A=I[1],w=(0,f.useState)(""),O=(0,r.Z)(w,2),W=O[0],T=O[1],R=(0,s.s0)(),V=(0,f.useState)(!1),F=(0,r.Z)(V,2),L=F[0],q=F[1],z=(0,f.useState)(y),M=(0,r.Z)(z,2),B=M[0],D=M[1],H=(0,h.cI)(),U=H.register,E=H.getValues,G=H.setValue,Q=H.handleSubmit,_=H.control,J=H.formState.errors;(0,f.useEffect)((function(){if(e){var t=e.editdata,i=e.imageurl;T(t._id),G("title",t.title),G("description",t.description),D(i+t.image)}C(!1)}),[]);return(0,S.jsx)(a.ZP,{container:!0,rowSpacing:4.5,columnSpacing:2.75,children:(0,S.jsxs)(a.ZP,{item:!0,xs:12,md:6,lg:6,children:[(0,S.jsxs)(a.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",children:[(0,S.jsx)(a.ZP,{item:!0,children:(0,S.jsxs)(l.Z,{variant:"h5",children:[""===W?"Add":"Update"," Workout Collection"]})}),(0,S.jsx)(a.ZP,{item:!0})]}),(0,S.jsx)(x.Z,{sx:{mt:2},content:!1,children:(0,S.jsx)(g.Z,{spacing:3,children:(0,S.jsxs)(a.ZP,{xs:12,sx:{p:3},children:[(0,S.jsx)(Z.Ix,{}),(0,S.jsx)("form",{onSubmit:Q((function(e){A(!1);var t=new FormData;Object.keys(e).forEach((function(i){"image"===i?t.append(i,e[i][0]):t.append(i,e[i])})),""===W?(0,j.jG)(t).then((function(){localStorage.setItem("redirectSuccess","true"),localStorage.setItem("redirectMessage","Added successfully!"),R("/workoutCollection")})).catch((function(e){e.response.data.isSuccess?Z.Am.error("Something Went Wrong!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!1,pauseOnHover:!0,draggable:!0,progress:void 0}):Z.Am.error(capitalizeFirstLetter(e.response.data.message)),A(!1)})):(0,j.uC)(t,W).then((function(){localStorage.setItem("redirectSuccess","true"),localStorage.setItem("redirectMessage","Updated successfully!"),R("/workoutCollection")})).catch((function(e){e.response.data.isSuccess?Z.Am.error("Something Went Wrong!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!1,pauseOnHover:!0,draggable:!0,progress:void 0}):Z.Am.error(capitalizeFirstLetter(e.response.data.message)),A(!1)}))})),children:b?(0,S.jsx)("p",{children:"Loading..."}):(0,S.jsxs)("div",{children:[(0,S.jsxs)(a.ZP,{xs:12,mt:2,spacing:3,container:!0,children:[(0,S.jsx)(m.Z,{xs:8,m:2,spacing:3,id:"title",name:"title",label:"Title",inputRef:U("title",{required:!0}),error:!!J.title,helperText:J.title&&"Title is required",placeholder:"Title",defaultValue:E("title"),onChange:function(e){return G("title",e.target.value)}}),(0,S.jsx)(a.ZP,{item:!0,xs:3,style:{textAlign:"center"},children:(0,S.jsxs)(g.Z,{direction:"row",alignItems:"center",style:{display:"grid"},spacing:2,sx:6,onMouseOver:function(){q(!0)},onMouseOut:function(){q(!1)},children:[(0,S.jsxs)("label",{htmlFor:"icon-button-file",style:{textAlign:"center",marginTop:"-40px"},children:[(0,S.jsx)(o.Z,(0,n.Z)((0,n.Z)({name:"image",accept:"image/*"},U("image",{required:!W})),{},{id:"icon-button-file",type:"file",onChange:function(e){var t=e.target.files[0],i=new FileReader;i.onloadend=function(){D(i.result)},i.readAsDataURL(t)},alignItems:"center",style:{top:"-9999px",left:"-9999px"}})),L?(0,S.jsx)("img",{src:y,alt:"WorkoutCollection",width:"100",height:100,style:{borderRadius:"50%"}}):(0,S.jsx)("img",{src:B,alt:"WorkoutCollection",width:"100",height:100,style:{borderRadius:"50%"}})]}),(0,S.jsx)("span",{children:"Image"}),(0,S.jsx)(c.Z,{error:!0,style:{textAlign:"center"},children:J.image&&"Image is required"})]})})]}),(0,S.jsx)(a.ZP,{item:!0,xs:12,md:3,style:{display:"contents"},children:(0,S.jsx)(h.Qr,{name:"description",control:_,defaultValue:E("description"),render:function(e){var t=e.field;return(0,S.jsxs)(d.Z,{variant:"outlined",style:{margin:"15px",padding:"8px"},children:[(0,S.jsx)(l.Z,{variant:"body1",gutterBottom:!0,children:"Description"}),(0,S.jsx)(v(),{value:t.value||"",onChange:t.onChange,style:{height:"200px",border:"none"}})]})}})}),k?(0,S.jsx)(a.ZP,{item:!0,xs:12,mt:2,style:{textAlign:"center"},children:(0,S.jsx)(u.Z,{size:26,fullWidth:!0,style:{"margin-top":"25px"}})}):(0,S.jsx)(a.ZP,{item:!0,xs:12,mt:2,style:{textAlign:"center"},children:(0,S.jsx)(p.Z,{type:"submit",variant:"contained",color:"primary",size:"large",style:{"margin-top":"25px",textAlign:"center"},children:"Submit"})})]})})]})})})]})})}},84726:function(e,t,i){e.exports=i.p+"static/media/upload3.bba22052686782d8edb3.jpg"}}]);