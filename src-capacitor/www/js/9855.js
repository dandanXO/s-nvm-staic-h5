"use strict";(globalThis["webpackChunkvnm_static_h5"]=globalThis["webpackChunkvnm_static_h5"]||[]).push([[9855],{64203:(t,e,a)=>{a.r(e),a.d(e,{default:()=>kt});var n=a(61758),l=a(58790),i=a(29104),r=a(31883),o=a.n(r),d=function(t){return(0,n.Qi)("data-v-22220896"),t=t(),(0,n.jt)(),t},s={class:"account-tabs-div"},c={class:"account-item"},u={class:"account-item is-active"},w={class:"withdraw-section q-pa-md q-mx-sm q-my-md"},h={class:"account-content last"},m={class:"withdrawalmethod"},f=["onClick"],b={key:0,class:"promo"},p={class:"withdraw-img"},g=["src"],v={class:"type-name"},k=["src"],_=["src"],L={style:{"font-size":"18px"},class:"text-bright"},y={style:{"font-size":"18px"},class:"text-bright"},C=d((function(){return(0,n.Lk)("img",{src:o(),width:"24"},null,-1)})),A={class:"q-mt-sm q-mb-sm text-grey text-bold q-pb-sm",style:{"border-bottom":"1px solid #434343"}},x=d((function(){return(0,n.Lk)("br",null,null,-1)})),W=d((function(){return(0,n.Lk)("br",null,null,-1)})),F={key:0},q={class:"q-my-sm",style:{display:"flex","justify-content":"center","align-items":"center"}},M={style:{flex:"2"}},K={style:{flex:"3"},class:"bg-neontb text-neontb q-pa-sm"},R={class:"q-mt-sm",style:{display:"flex","justify-content":"center","align-items":"center"}},$={style:{flex:"1"}},E={style:{flex:"3"},class:"bg-neontb text-neontb q-pa-sm"},I={class:"q-mt-sm text-neontb"},P={key:1},T={class:"q-mt-sm text-neontb"},V={class:"q-mt-sm q-mb-sm text-center"},Q={class:"flex-box flex-justify-center"},U={class:"q-py-md"},N=["innerHTML"],D={key:1,class:"selected-tip"},S={class:"text-h6 text-center"},Y={class:"flex flex-center"},X={class:"black-titles"},B=d((function(){return(0,n.Lk)("br",null,null,-1)})),j=d((function(){return(0,n.Lk)("br",null,null,-1)}));function O(t,e,a,r,o,d){var O=(0,n.g2)("router-link"),z=(0,n.g2)("q-item-section"),G=(0,n.g2)("q-item"),H=(0,n.g2)("q-item-label"),J=(0,n.g2)("q-select"),Z=(0,n.g2)("q-btn"),tt=(0,n.g2)("q-input"),et=(0,n.g2)("q-icon"),at=(0,n.g2)("q-form"),nt=(0,n.g2)("q-card-section"),lt=(0,n.g2)("q-card"),it=(0,n.g2)("q-dialog"),rt=(0,n.g2)("q-page"),ot=(0,n.g2)("q-card-actions");return(0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.bF)(rt,null,{default:(0,n.k6)((function(){return[(0,n.Lk)("div",s,[(0,n.bF)(O,{to:"/finance/deposit?redirect=/finance/withdraw"},{default:(0,n.k6)((function(){return[(0,n.Lk)("div",c,[(0,n.Lk)("span",null,(0,l.v_)(t.$t("lang.transfer_deposit")),1)])]})),_:1}),(0,n.Lk)("div",null,[(0,n.Lk)("div",u,[(0,n.Lk)("span",null,(0,l.v_)(t.$t("lang.transfer_withdraw")),1)])])]),(0,n.Lk)("div",w,[(0,n.Lk)("div",h,[(0,n.Lk)("div",m,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(t.withdrawalMethods,(function(e,a){return(0,n.uX)(),(0,n.CE)("div",{key:a,class:(0,l.C4)(["withdraw-type-item",{active:a===t.activeItem}]),onClick:function(n){return t.selectMethod(e,a)}},[e.recommended?((0,n.uX)(),(0,n.CE)("span",b,"Recommended")):(0,n.Q3)("",!0),(0,n.Lk)("div",p,[(0,n.Lk)("img",{src:t.imgURL+"/withdraw/"+e.icon},null,8,g)]),(0,n.Lk)("div",v,(0,l.v_)(e.name),1)],10,f)})),128))]),(0,n.bF)(at,{ref:"withdrawFormRef"},{default:(0,n.k6)((function(){return[(0,n.bo)((0,n.bF)(J,{"hide-bottom-space":"",filled:"",ref:"cardRef",modelValue:t.withdrawInfo.cardId,"onUpdate:modelValue":e[0]||(e[0]=function(e){return t.withdrawInfo.cardId=e}),"option-value":"id","emit-value":"",label:t.$t("lang.withdraw_choose")+" "+t.chooseLabel(),class:"withdraw-selection q-mt-sm q-mb-sm",options:t.withdrawState.bankCardList,"map-options":"",rules:[function(e){return!!e||t.$t("lang.withdraw_pleasechoose")+" "+t.chooseLabel()}]},{"no-option":(0,n.k6)((function(){return[(0,n.bF)(G,null,{default:(0,n.k6)((function(){return[(0,n.bF)(z,{class:"text-grey"},{default:(0,n.k6)((function(){return[(0,n.eW)((0,l.v_)(t.$t("lang.withdraw_nonavailable")+" "+t.chooseCard())+" ",1),(0,n.bF)(O,{class:"text-bright",to:"/account/withdraw"},{default:(0,n.k6)((function(){return[(0,n.eW)((0,l.v_)(t.isUSDT||t.isEWALLET?t.$t("lang.withdraw_add")+" "+t.chooseCard():t.$t("lang.withdraw_bind")+" "+t.chooseCard()),1)]})),_:1})]})),_:1})]})),_:1})]})),option:(0,n.k6)((function(e){return[(0,n.bF)(G,(0,l._B)((0,n.Ng)(e.itemProps)),{default:(0,n.k6)((function(){return[e.opt.bankIcon?((0,n.uX)(),(0,n.Wv)(z,{key:0,avatar:""},{default:(0,n.k6)((function(){return[(0,n.Lk)("img",{style:{width:"30px"},src:t.imgURL+"/payment/"+e.opt.bankIcon},null,8,k)]})),_:2},1024)):(0,n.Q3)("",!0),(0,n.bF)(z,null,{default:(0,n.k6)((function(){return[(0,n.bF)(H,null,{default:(0,n.k6)((function(){return[(0,n.eW)((0,l.v_)(e.opt.bankName)+" - ****"+(0,l.v_)(e.opt.cardNumber.slice(e.opt.cardNumber.length-4,e.opt.cardNumber.length)),1)]})),_:2},1024)]})),_:2},1024)]})),_:2},1040)]})),"selected-item":(0,n.k6)((function(e){return[e.opt.bankIcon?((0,n.uX)(),(0,n.Wv)(z,{key:0,avatar:""},{default:(0,n.k6)((function(){return[(0,n.Lk)("img",{style:{width:"30px","margin-top":"10px","margin-bottom":"10px"},src:t.imgURL+"/payment/"+e.opt.bankIcon},null,8,_)]})),_:2},1024)):(0,n.Q3)("",!0),(0,n.bF)(z,null,{default:(0,n.k6)((function(){return[(0,n.bF)(H,{style:{"text-overflow":"ellipsis",overflow:"hidden","white-space":"nowrap"}},{default:(0,n.k6)((function(){return[(0,n.eW)((0,l.v_)(e.opt.bankName)+" - ****"+(0,l.v_)(e.opt.cardNumber.slice(e.opt.cardNumber.length-4,e.opt.cardNumber.length)),1)]})),_:2},1024)]})),_:2},1024)]})),_:1},8,["modelValue","label","options","rules"]),[[i.aG,t.isLoaded]]),(0,n.bF)(tt,{"hide-bottom-space":"",ref:"amountRef",type:"number",modelValue:t.withdrawInfo.amount,"onUpdate:modelValue":e[1]||(e[1]=function(e){return t.withdrawInfo.amount=e}),label:t.$t("lang.withdraw_amount"),class:"withdraw-field q-mt-sm q-mb-sm",rules:[function(e){return e&&e.length>0||t.$t("lang.withdraw_please_enter_withdraw_amount")},function(e){return e>=t.selectedWithdrawalMethod.withdrawMin||t.$t("lang.withdraw_please_enter_correct_withdraw_amount")},function(e){return e<=t.selectedWithdrawalMethod.withdrawMax||t.$t("lang.withdraw_please_enter_correct_withdraw_amount")},t.isValidUSDTAmt],clearable:""},{prepend:(0,n.k6)((function(){return[(0,n.Lk)("span",L,(0,l.v_)(t.store.currency.value),1)]})),append:(0,n.k6)((function(){return[(0,n.Lk)("span",y,[(0,n.bF)(Z,{onClick:t.updateWithdrawAmt,"no-caps":"",label:t.$t("lang.withdraw_withdrawallamount"),color:"brightbtn"},null,8,["onClick","label"])])]})),_:1},8,["modelValue","label","rules"]),(0,n.bF)(tt,{"hide-bottom-space":"",ref:"withdrawPwdRef",modelValue:t.withdrawInfo.withdrawPassword,"onUpdate:modelValue":e[3]||(e[3]=function(e){return t.withdrawInfo.withdrawPassword=e}),label:t.$t("lang.withdraw_password"),class:"withdraw-field",type:t.isPwd?"password":"text",rules:[function(e){return e&&e.length>0||t.$t("lang.withdraw_please_enter_withdraw_password")}],clearable:""},{prepend:(0,n.k6)((function(){return[C]})),append:(0,n.k6)((function(){return[(0,n.bF)(et,{color:"dark",name:t.isPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:e[2]||(e[2]=function(e){return t.isPwd=!t.isPwd})},null,8,["name"])]})),_:1},8,["modelValue","label","type","rules"]),(0,n.bo)((0,n.Lk)("div",A,[t.selectedWithdrawalMethod.withdrawMin&&t.selectedWithdrawalMethod.withdrawMin?((0,n.uX)(),(0,n.CE)(n.FK,{key:0},[(0,n.eW)((0,l.v_)(t.$t("lang.withdraw_singlewithdrawal")+": "+t.selectedWithdrawalMethod.withdrawMin+"VNDP - "+t.selectedWithdrawalMethod.withdrawMax+"VNDP")+" ",1),x],64)):(0,n.Q3)("",!0),t.selectedWithdrawalMethod.withdrawMaxAmount?((0,n.uX)(),(0,n.CE)(n.FK,{key:1},[(0,n.eW)((0,l.v_)(t.$t("lang.withdraw_withdrawtoday")+": "+t.selectedWithdrawalMethod.withdrawMaxAmount+"VNDP"),1)],64)):(0,n.Q3)("",!0),t.selectedWithdrawalMethod.withdrawMaxTimes?((0,n.uX)(),(0,n.CE)(n.FK,{key:2},[W,(0,n.eW)(" "+(0,l.v_)(" "+t.$t("lang.withdraw_remaining")+": "+t.selectedWithdrawalMethod.withdrawMaxTimes+" "+t.$t("lang.withdraw_times")),1)],64)):(0,n.Q3)("",!0)],512),[[i.aG,t.selectedWithdrawalMethod]]),t.isUSDT&&t.selectedWithdrawalMethod.exchangeRate?((0,n.uX)(),(0,n.CE)("div",F,[(0,n.Lk)("div",q,[(0,n.Lk)("span",M,(0,l.v_)(t.$t("lang.withdraw_realtimeexchangerates"))+":",1),(0,n.Lk)("span",K," 1.00 USDT ≈ "+(0,l.v_)(t.selectedWithdrawalMethod.exchangeRate)+" "+(0,l.v_)(t.store.currency.value),1)]),(0,n.Lk)("div",R,[(0,n.Lk)("span",$,(0,l.v_)(t.$t("lang.withdraw_estimatedarrival"))+"：",1),(0,n.Lk)("span",E,(0,l.v_)((t.withdrawInfo.amount/t.selectedWithdrawalMethod.exchangeRate).toFixed(2))+" USDT ",1)]),(0,n.Lk)("div",I,(0,l.v_)(t.$t("lang.withdraw_usdtspecialnote")),1)])):t.isEWALLET?((0,n.uX)(),(0,n.CE)("div",P,[(0,n.Lk)("div",T,(0,l.v_)(t.$t("lang.withdraw_ewalletspecialnote")),1),(0,n.Lk)("div",V,[(0,n.bF)(Z,{style:{border:"1px solid #33bcd4",color:"#33bcd4"},onClick:e[4]||(e[4]=function(e){return t.openEWalletTutorial(t.selectedWithdrawalMethod.code)}),label:t.tutorialLabel()},null,8,["label"])])])):(0,n.Q3)("",!0),(0,n.Lk)("div",Q,[(0,n.bF)(Z,{class:"q-mt-md common-large-btn quick-withdraw-btn",onClick:t.submitWithdraw,"no-caps":"",label:t.$t("lang.withdraw_confirm")},null,8,["onClick","label"])]),(0,n.Lk)("div",U,[t.isEWALLET||t.isUSDT||t.isALIPAY||!t.selectedWithdrawalMethod.tips?(0,n.Q3)("",!0):((0,n.uX)(),(0,n.CE)("div",{key:0,class:"selected-tip",innerHTML:t.selectedWithdrawalMethod.tips},null,8,N)),t.isALIPAY?((0,n.uX)(),(0,n.CE)("div",D," “支付宝提款” 可用时间：早10点-晚12点，其他时间提交系统会自动取消！ ")):(0,n.Q3)("",!0)])]})),_:1},512)])]),(0,n.bF)(it,{modelValue:t.hasWithdrawCard,"onUpdate:modelValue":e[5]||(e[5]=function(e){return t.hasWithdrawCard=e}),persistent:""},{default:(0,n.k6)((function(){return[(0,n.bF)(lt,{style:{width:"100%",padding:"10px"}},{default:(0,n.k6)((function(){return[(0,n.bF)(nt,{class:"q-mb-md"},{default:(0,n.k6)((function(){return[(0,n.Lk)("div",S,(0,l.v_)(t.$t("lang.msg_bind_card_first")),1)]})),_:1}),(0,n.Lk)("div",Y,[(0,n.bF)(O,{to:"/account"},{default:(0,n.k6)((function(){return[(0,n.bF)(Z,{class:"q-mr-md",label:t.$t("lang.msg_cancel")},null,8,["label"])]})),_:1}),(0,n.bF)(O,{to:"/account/withdraw"},{default:(0,n.k6)((function(){return[(0,n.bF)(Z,{color:"brightbtn",label:t.$t("lang.msg_bind")},null,8,["label"])]})),_:1})])]})),_:1})]})),_:1},8,["modelValue"])]})),_:1}),(0,n.bF)(it,{class:"modal-common-div",width:"100%",modelValue:t.isNewUser,"onUpdate:modelValue":e[6]||(e[6]=function(e){return t.isNewUser=e}),"no-backdrop-dismiss":"","no-esc-dismiss":""},{default:(0,n.k6)((function(){return[(0,n.bF)(lt,{style:{width:"100%",padding:"1rem 0.5rem"},class:""},{default:(0,n.k6)((function(){return[(0,n.bF)(nt,{class:"contents"},{default:(0,n.k6)((function(){return[(0,n.Lk)("strong",X,(0,l.v_)(t.$t("lang.withdraw_tipstitle")),1),B,j,(0,n.eW)(" "+(0,l.v_)(t.$t("lang.withdraw_tipdesc")),1)]})),_:1}),(0,n.bF)(ot,{align:"right"},{default:(0,n.k6)((function(){return[(0,n.bF)(O,{to:"/account/personal"},{default:(0,n.k6)((function(){return[(0,n.bF)(Z,{class:"common-md-btn","no-caps":"",label:t.$t("lang.withdraw_proceedverify"),color:"brightbtn"},null,8,["label"])]})),_:1})]})),_:1})]})),_:1})]})),_:1},8,["modelValue"])],64)}a(10239);var z=a(38734),G=a(15868),H=a(88122),J=a(43710),Z=a(31714),tt=a(23537);const et=(0,n.pM)({name:"WithdrawView",components:{AcctBal:Z.A},setup:function(){var t=(0,G.Z)(),e=(0,z.KR)(!1),l=(0,tt.s9)(),i=l.t,r=(0,J.A)(),o="https://files.fbok59j8xi.com",d=(0,z.KR)(),s=(0,z.KR)(),c=(0,z.KR)(),u=(0,z.KR)(0),w=(0,z.KR)(null),h=(0,z.Kh)({bankCardList:[]}),m=a(54760),f=(0,z.Kh)({cardId:void 0,amount:"",withdrawPassword:""}),b=(0,z.KR)(!1),p=(0,n.EW)((function(){return 1==b&&0===h.bankCardList.length})),g=(0,z.KR)([]),v=(0,z.KR)([]),k=function(){""==t.phone?e.value=!0:F()};(0,n.sV)((function(){k(),t.getBalance()}));var _=(0,z.Kh)([]),L=function(){c.value.validate(),d.value.validate(),s.value.validate(),r.loading.show({message:i("lang.msg_confirming")}),c.value.hasError||d.value.hasError||s.value.hasError||H.api.post("/session/withdraw/",m.stringify(f)).then((function(t){0===t.code?(r.notify({color:"positive",position:"top",message:i("lang.msg_submit_successful"),icon:"check_circle_outline"}),F(),f.amount="",f.withdrawPassword="",d.value&&setTimeout((function(){d.value.resetValidation()}),0)):r.notify({color:"negative",position:"top",message:t.message,icon:"report_problem"})}))["catch"]((function(t){console.log("error",t)})),r.loading.hide()},y=(0,z.KR)(!1),C=(0,z.KR)(!1),A=(0,z.KR)(!1),x=function(t,e){f.withdrawCode=null,f.cardId=null,v.value=t,f.withdrawCode=t.code,y.value=f.withdrawCode.includes("USDT"),C.value=f.withdrawCode.includes("KDPAY")||f.withdrawCode.includes("EBPAY")||f.withdrawCode.includes("OKPAY"),A.value=f.withdrawCode.includes("ALIPAY"),u.value=e,W()},W=function(){H.api.get("/session/bankCard").then((function(t){b.value=!0,h.bankCardList=[],0===t.code&&(t.data.forEach((function(t){"BANK"===t.bankType?("alipay"!==t.bankCode&&t.bankType.includes(v.value.code)&&h.bankCardList.push(t),"alipay"===t.bankCode&&"ALIPAY"===v.value.code&&h.bankCardList.push(t)):t.bankCode&&t.bankCode.includes(v.value.code)&&h.bankCardList.push(t)})),c.value&&c.value.resetValidation(),f.amount="",d.value&&setTimeout((function(){d.value.resetValidation()}),0))}))["catch"]((function(t){console.log("error",t)}))},F=function(){H.api.get("/session/withdraw/entrance").then((function(t){0===t.code?(g.value=t.data,g.value.length>0&&x(g.value[0],0)):r.notify({color:"negative",position:"top",message:t.message,icon:"report_problem"})}))},q=function(){f.amount=JSON.stringify(Math.floor(t.balance))},M=function(){return y.value?i("lang.withdraw_crypto"):C.value?i("lang.withdraw_ewallet"):i("lang.withdraw_bankcard")},K=function(t){if(!y.value)return!0;var e=/^([1-9][0-9]*)$/;return e.test(f.amount)||"金额应为正数"},R=function(){return y.value?i("lang.withdraw_virtualwallet"):C.value?i("lang.withdraw_ewallet"):i("lang.withdraw_bankcard")},$=function(){return"KDPAY"===v.value.code?"K豆教程视频":"EBPAY"===v.value.code?"EB教程视频":"OKPAY"===v.value.code?"OK教程视频":void 0},E=function(t){var e={KDPAY:"http://jiaocheng.kdpay123.com/",EBPAY:"https://www.ebpay24.com/",OKPAY:"https://me-qr.com/l/okpay"},a=e[t];a&&window.open(a)};return{noDecimalRule:function(t){return/^([1-9][0-9]*)$/.test(t)||"金额应为正数"},amountRef:d,withdrawPwdRef:s,cardRef:c,withdrawInfo:f,submitWithdraw:L,withdrawState:h,withdrawalMethods:g,activeItem:u,selectMethod:x,imgURL:o,step:(0,z.KR)(),selectedWithdrawalMethod:v,loadCards:W,isUSDT:y,isEWALLET:C,isALIPAY:A,store:t,updateWithdrawAmt:q,platforms:_,hasWithdrawCard:p,withdrawFormRef:w,isLoaded:b,chooseLabel:M,chooseCard:R,openEWalletTutorial:E,tutorialLabel:$,isNewUser:e,checkNewUser:k,isValidUSDTAmt:K,isPwd:(0,z.KR)(!0)}}});var at=a(12807),nt=a(33177),lt=a(21565),it=a(833),rt=a(75329),ot=a(63418),dt=a(35779),st=a(68926),ct=a(69001),ut=a(24609),wt=a(57201),ht=a(97569),mt=a(27066),ft=a(16334),bt=a(51225),pt=a(98582),gt=a.n(pt);const vt=(0,at.A)(et,[["render",O],["__scopeId","data-v-22220896"]]),kt=vt;gt()(et,"components",{QPage:nt.A,QForm:lt.A,QSelect:it.A,QItem:rt.A,QItemSection:ot.A,QItemLabel:dt.A,QInput:st.A,QBtn:ct.A,QIcon:ut.A,QDialog:wt.A,QCard:ht.A,QCardSection:mt.A,QCardActions:ft.A,QField:bt.A})}}]);