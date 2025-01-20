"use strict";(globalThis["webpackChunkvnm_static_h5"]=globalThis["webpackChunkvnm_static_h5"]||[]).push([[5165],{95165:(e,a,n)=>{n.r(a),n.d(a,{default:()=>Y});var o=n(61758),l=n(58790),t={class:"personal-account"},r={class:"row items-center justify-end"},i={class:"flex items-baseline no-wrap"},u={key:0,class:"q-ml-md"},c={class:"flex items-baseline no-wrap"},s={key:0,class:"q-ml-md"},d={key:0,class:"text-center q-mt-lg"},m=(0,o.Lk)("br",null,null,-1),p=(0,o.Lk)("br",null,null,-1),f={style:{padding:"20px"}},b=["src"];function h(e,a,n,h,g,v){var y=(0,o.g2)("q-input"),_=(0,o.g2)("q-btn"),k=(0,o.g2)("q-date"),V=(0,o.g2)("q-popup-proxy"),I=(0,o.g2)("q-icon"),C=(0,o.g2)("q-form"),R=(0,o.g2)("q-card-section"),w=(0,o.g2)("router-link"),D=(0,o.g2)("q-card"),F=(0,o.g2)("q-dialog"),K=(0,o.gN)("close-popup");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.Lk)("div",t,[(0,o.bF)(C,{ref:"profileFormRef"},{default:(0,o.k6)((function(){return[(0,o.bF)(y,{standout:"",class:"q-pb-xs","hide-bottom-space":"",filled:"",modelValue:e.formDetail.nickName,"onUpdate:modelValue":a[0]||(a[0]=function(a){return e.formDetail.nickName=a}),"lazy-rules":"",rules:[function(e){return e&&e.length>0||"请输入账号"}],"label-color":"secondary",readonly:!!e.personalState.memberInfo.nickName},{prepend:(0,o.k6)((function(){return[(0,o.Lk)("span",null,(0,l.v_)(e.$t("lang.personal_username")),1)]})),_:1},8,["modelValue","rules","readonly"]),(0,o.bF)(y,{standout:"",ref:"realNameRef",class:"q-pb-xs","hide-bottom-space":"",filled:"",modelValue:e.formDetail.realName,"onUpdate:modelValue":a[1]||(a[1]=function(a){return e.formDetail.realName=a}),placeholder:e.$t("lang.personal_realname"),"lazy-rules":"",rules:[function(a){return a&&a.length>0||e.$t("lang.personal_realname_val")}],"label-color":"secondary",color:"secondary",readonly:!!e.personalState.memberInfo.realName},{prepend:(0,o.k6)((function(){return[(0,o.Lk)("span",null,(0,l.v_)(e.$t("lang.personal_realname")),1)]})),_:1},8,["modelValue","placeholder","rules","readonly"]),(0,o.bF)(y,{ref:"birthdayRef",standout:"",placeholder:e.$t("lang.personal_birthday"),filled:"","label-color":"secondary",color:"secondary","lazy-rules":"",class:"q-pb-xs","hide-bottom-space":"",modelValue:e.formDetail.birthday,"onUpdate:modelValue":a[4]||(a[4]=function(a){return e.formDetail.birthday=a}),readonly:"",mask:"date",rules:[function(a){return a&&a.length>0||e.$t("lang.personal_birthday_val")}],onClick:e.toggleShowPopup},{prepend:(0,o.k6)((function(){return[(0,o.Lk)("span",null,(0,l.v_)(e.$t("lang.personal_birthday")),1)]})),append:(0,o.k6)((function(){return[e.isEditBirthday?((0,o.uX)(),(0,o.Wv)(I,{key:0,name:"event",color:"accent",class:"cursor-pointer"},{default:(0,o.k6)((function(){return[(0,o.bF)(V,{cover:"","transition-show":"scale","transition-hide":"scale",modelValue:e.showDatePopup,"onUpdate:modelValue":a[3]||(a[3]=function(a){return e.showDatePopup=a})},{default:(0,o.k6)((function(){return[(0,o.bF)(k,{modelValue:e.formDetail.birthday,"onUpdate:modelValue":a[2]||(a[2]=function(a){return e.formDetail.birthday=a})},{default:(0,o.k6)((function(){return[(0,o.Lk)("div",r,[(0,o.bo)((0,o.bF)(_,{label:e.$t("lang.personal_confirm"),flat:""},null,8,["label"]),[[K]]),(0,o.bo)((0,o.bF)(_,{label:e.$t("lang.personal_close"),flat:""},null,8,["label"]),[[K]])])]})),_:1},8,["modelValue"])]})),_:1},8,["modelValue"])]})),_:1})):(0,o.Q3)("",!0)]})),_:1},8,["placeholder","modelValue","rules","onClick"]),(0,o.Lk)("div",i,[(0,o.bF)(y,{standout:"",filled:"",class:"q-pb-xs","hide-bottom-space":"",modelValue:e.formDetail.phone,"onUpdate:modelValue":a[5]||(a[5]=function(a){return e.formDetail.phone=a}),type:"tel",placeholder:e.$t("lang.personal_mobilenumber"),"lazy-rules":"",rules:[function(a){return e.isValidPhone()}],"label-color":"secondary",color:"secondary",readonly:"",style:{width:"100%"}},{prepend:(0,o.k6)((function(){return[(0,o.Lk)("span",null,(0,l.v_)(e.$t("lang.personal_mobilenumber")),1)]})),_:1},8,["modelValue","placeholder","rules"]),e.isEditPhone?((0,o.uX)(),(0,o.CE)("div",u,[(0,o.bF)(_,{class:"common-sm-btn",color:"brightbtn",label:e.$t("lang.personal_verify"),onClick:a[6]||(a[6]=function(a){return e.goToPage("/account/verifyTelephone")}),style:{"white-space":"nowrap"},"no-caps":""},null,8,["label"])])):(0,o.Q3)("",!0)]),(0,o.Lk)("div",c,[(0,o.bF)(y,{standout:"",class:"q-pb-xs","hide-bottom-space":"",modelValue:e.formDetail.email,"onUpdate:modelValue":a[7]||(a[7]=function(a){return e.formDetail.email=a}),placeholder:e.$t("lang.personal_email"),"lazy-rules":"",rules:[function(e){return e&&e.length>0||"请输入邮箱"}],"label-color":"secondary",color:"secondary",readonly:"",style:{width:"100%"}},{prepend:(0,o.k6)((function(){return[(0,o.Lk)("span",null,(0,l.v_)(e.$t("lang.personal_email")),1)]})),_:1},8,["modelValue","placeholder","rules"]),e.isEditEmail?((0,o.uX)(),(0,o.CE)("div",s,[(0,o.bF)(_,{class:"common-sm-btn",color:"brightbtn",label:e.$t("lang.personal_verify"),onClick:a[8]||(a[8]=function(a){return e.goToPage("/account/verifyEmail")}),style:{"white-space":"nowrap"},"no-caps":""},null,8,["label"])])):(0,o.Q3)("",!0)]),e.isEditBirthday?((0,o.uX)(),(0,o.CE)("div",d,[(0,o.bF)(_,{class:"common-large-btn full-width","no-caps":"",color:"brightbtn",onClick:e.updateState,label:e.$t("lang.personal_submit")},null,8,["onClick","label"])])):(0,o.Q3)("",!0)]})),_:1},512)]),(0,o.bF)(F,{width:"100%",modelValue:e.showCaptchaDialog,"onUpdate:modelValue":a[9]||(a[9]=function(a){return e.showCaptchaDialog=a})},{default:(0,o.k6)((function(){return[(0,o.bF)(D,{style:{width:"100%",padding:"20px"},class:"bg-dark text-white text-center"},{default:(0,o.k6)((function(){return[(0,o.bF)(R,{class:"q-mb-md"},{default:(0,o.k6)((function(){return[(0,o.Lk)("strong",null,(0,l.v_)(e.$t("lang.system_hint")),1),m,p,(0,o.eW)(" "+(0,l.v_)(e.$t("lang.system_please_login")),1)]})),_:1}),(0,o.bF)(w,{to:"/login?redirect=/account"},{default:(0,o.k6)((function(){return[(0,o.bF)(_,{label:e.$t("lang.system_confirm"),color:"brightbtn"},null,8,["label"])]})),_:1})]})),_:1})]})),_:1},8,["modelValue"]),(0,o.bF)(F,{modelValue:e.showCaptchaDialog,"onUpdate:modelValue":a[12]||(a[12]=function(a){return e.showCaptchaDialog=a}),width:"100%"},{default:(0,o.k6)((function(){return[(0,o.bF)(D,{width:"100%"},{default:(0,o.k6)((function(){return[(0,o.bF)(R,{style:{padding:"10px 20px"},class:"q-pa-md bg-dark text-white"},{default:(0,o.k6)((function(){return[(0,o.eW)("验证码")]})),_:1}),(0,o.Lk)("div",f,[(0,o.bF)(R,{class:"q-mb-md q-pa-md"},{default:(0,o.k6)((function(){return[(0,o.bF)(y,{modelValue:e.captchaRef,"onUpdate:modelValue":a[11]||(a[11]=function(a){return e.captchaRef=a}),label:"验证码"},{append:(0,o.k6)((function(){return[(0,o.Lk)("img",{src:e.verificationImg,title:"点击刷新验证码",style:{"margin-top":"6px",cursor:"pointer"},onClick:a[10]||(a[10]=function(){return e.getCode&&e.getCode.apply(e,arguments)})},null,8,b)]})),_:1},8,["modelValue"])]})),_:1}),(0,o.bF)(_,{onClick:e.onCaptchaSubmit,label:"发送验证码",color:"brightbtn"},null,8,["onClick"])])]})),_:1})]})),_:1},8,["modelValue"])],64)}n(10239);var g=n(38734),v=n(85038),y=n.n(v),_=n(88122),k=n(43710),V=n(15868),I=n(60455),C=n(23537);const R=(0,o.pM)({name:"PersonalView",setup:function(){var e=n(54760),a=(0,k.A)(),l=(0,C.s9)(),t=l.t,r=(0,g.Kh)({start:"",end:""}),i=(0,g.KR)(!1),u=(0,g.KR)(),c=function(){!0===f.value&&(i.value=!0)},s=(0,V.Z)(),d=(0,I.rd)(),m=(0,g.KR)(!1),p=(0,g.KR)(!1),f=(0,g.KR)(!1),b=function(){v.memberInfo=(0,V.Z)(),v.memberInfo.birthday>0&&(v.memberInfo.birthday=y()(v.memberInfo.birthday).format("YYYY-MM-DD")),Y.nickName=v.memberInfo.nickName,Y.realName=v.memberInfo.realName,Y.birthday=v.memberInfo.birthday,Y.email=v.memberInfo.email,Y.phone=v.memberInfo.phone,Y.phoneVerified=v.memberInfo.phoneVerified,Y.emailVerified=v.memberInfo.emailVerified,m.value=!1===Y.emailVerified,f.value=!v.memberInfo.birthday,p.value=!1===Y.phoneVerified},h=(0,o.EW)((function(){return!(!v.memberInfo||v.memberInfo.realName&&v.memberInfo.birthday)})),v=(0,g.Kh)({memberInfo:{}}),R=(0,g.Kh)({memberInfo:{}});(0,o.n)((function(){b(),D()}));var w=(0,g.KR)(""),D=function(){_.api.get("/member/verificationCode").then((function(e){0===e.code&&(w.value="data:image/png;base64,"+e.data.img,q.codeId=e.data.id)}))["catch"]((function(e){a.notify({color:"negative",position:"top",message:e.message,icon:"report_problem"})}))},F=(0,g.KR)(!1),K=(0,g.KR)(!1),E=(0,g.KR)(),q=(0,g.Kh)({mobileNumber:"",verificationCode:""}),N=(0,g.KR)(!1),$=function(){q.emailAddress="",q.verificationCode="",K.value=!0},x=function(){D(),N.value=!0},A=function(){F.value=!0,R.memberInfo.email=q.emailAddress;var n={email:q.emailAddress,captchaCode:q.captchaCode,codeId:q.codeId};_.api.post("/otp/sendEmail",e.stringify(n)).then((function(e){0===e.code?(a.notify({color:"positive",position:"top",message:"OTP验证码已发送至您的邮箱",icon:"check_circle_outline"}),R.memberInfo.codeId=e.data.codeId,N.value=!1,F.value=!1):(F.value=!1,D())}))["catch"]((function(e){D(),F.value=!1}))},P=(0,g.KR)(),S=(0,g.KR)(),L=function(){P.value.validate(),S.value.validate(),P.value.hasError||S.value.hasError||(R.memberInfo.code=q.verificationCode,_.api.post("/otp/verifyEmail",e.stringify(R.memberInfo)).then((function(e){0===e.code&&(a.notify({color:"positive",position:"top",message:"验证成功",icon:"check_circle_outline"}),K.value=!1,b())}))["catch"]((function(e){})))},Q=(0,g.KR)(!1),M=(0,g.KR)(!1),Y=(0,g.Kh)([]),U=(0,g.KR)(),T=(0,g.KR)(),z=(0,g.KR)(),X=(0,g.KR)(),B=(0,g.KR)(!1),W=(0,g.KR)(!1),Z=function(){var n={};!v.memberInfo.birthday&&(T.value.validate(),T.value.hasError)||!v.memberInfo.realName&&(U.value.validate(),U.value.hasError)||(n.birthday=y()(Y.birthday,"YYYY/MM/DD").format("YYYY-MM-DD"),n.realName=Y.realName,_.api.post("/session/account",e.stringify(n)).then((function(e){0===e.code?(u.value.reset(),a.notify({color:"positive",position:"top",message:t("lang.msg_update_successful"),icon:"check_circle_outline"}),s.getMemberInfo().then((function(){b()}))):a.notify({color:"negative",position:"top",message:e.message,icon:"report_problem"})})))},j=function(){var e=/^([\u4e00-\u9fa5]*)$/;return e.test(Y.realName)||"请输入中文字符"},O=function(){var e=/^\d+$/,a=Y.phone,n=""===a?t("lang.personal_mobilenumber_verify"):!!e.test(a)||t("lang.personal_mobilenumber_allownumsonly");return n},G=function(){D(),B.value=!0},H=function(e){d.push(e)},J=function(){_.api.post("/otp/sendSms",e.stringify({telephone:Y.phone,captchaCode:X.value,codeId:q.codeId})).then((function(e){var n=e.message||"发送手机验证码成功",o="positive";0===e.code?(B.value=!1,W.value=!0):o="negative",n&&a.notify({message:n,color:o})}))};return{searchForm:r,personalState:v,updateSecurityFormRef:E,updateSecurityVerified:q,updateSecurityModal:$,updateSecurityModalVisible:K,submitUpdateSecurity:L,isEditRealName:Q,isEditEmail:m,isEditPhone:p,loadInfo:b,isEditBirthday:f,formDetail:Y,profileFormRef:u,updateState:Z,verificationModalVisible:N,openVerificationModal:x,isEmailSending:F,verificationImg:w,verifyVerificationCode:A,getCode:D,verificationDetails:R,verificationCodeRef:S,emailAddressRef:P,isEdit:M,emailRef:z,realNameRef:U,birthdayRef:T,moment:y(),canEdit:h,isValidName:j,goToPage:H,showVerificationTokenInput:W,isValidPhone:O,captchaRef:X,showCaptchaDialog:B,openVerificationDialog:G,onCaptchaSubmit:J,showDatePopup:i,toggleShowPopup:c}}});var w=n(12807),D=n(21565),F=n(68926),K=n(24609),E=n(87308),q=n(58255),N=n(69001),$=n(57201),x=n(97569),A=n(27066),P=n(51225),S=n(79197),L=n(98582),Q=n.n(L);const M=(0,w.A)(R,[["render",h]]),Y=M;Q()(R,"components",{QForm:D.A,QInput:F.A,QIcon:K.A,QPopupProxy:E.A,QDate:q.A,QBtn:N.A,QDialog:$.A,QCard:x.A,QCardSection:A.A,QField:P.A}),Q()(R,"directives",{ClosePopup:S.A})}}]);