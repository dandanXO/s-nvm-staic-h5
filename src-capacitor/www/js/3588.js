"use strict";(globalThis["webpackChunkvnm_static_h5"]=globalThis["webpackChunkvnm_static_h5"]||[]).push([[3588],{62136:(e,a,n)=>{n.r(a),n.d(a,{default:()=>y});var t=n(61758),l={class:"table-record"};function d(e,a,n,d,o,r){var s=(0,t.g2)("RecordComponent");return(0,t.uX)(),(0,t.CE)("div",l,[(0,t.bF)(s,{recordType:"reminder",loading:e.visible,list:e.tableData,headers:e.tableHeaders,onLoadnewdata:e.loadNewData,isEnded:e.isEnded},null,8,["loading","list","headers","onLoadnewdata","isEnded"])])}var o=n(8445),r=n.n(o),s=(n(10239),n(38734)),c=n(41900),i=n(88122),u=n(85038),v=n.n(u),b=n(70880),f=n(23537);const Y=(0,t.pM)({components:{RecordComponent:c.A},setup:function(){var e=(0,f.s9)(),a=e.t,n=(0,s.KR)(!0),l=(0,s.KR)([]),d="/session/member/financeFeedback",o=(0,s.KR)(!1),c=v()().format("YYYY-MM-DD"),u=v()().add(-7,"days").format("YYYY-MM-DD"),Y=(0,s.KR)(1),m=(0,s.KR)(0),p=function(){if(m.value>Y.value)Y.value++;else if(Y.value=1,c=v()(u).add(-1,"days").format("YYYY-MM-DD"),u=v()(c).add(-7,"days").format("YYYY-MM-DD"),c<=v()().add(-29,"days").format("YYYY-MM-DD"))return void(o.value=!0);D(!1)},D=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];e&&(n.value=!0);var a={startDate:u,endDate:c,size:10,current:Y.value},t=d+"_"+u+"_"+c+"_"+Y.value;b.cached.get(t,(function(){return i.api.get(d,{params:a})}),{expired_value:30}).then((function(a){var t;console.log(a),m.value=a.pages,e&&(n.value=!1),(t=l.value).push.apply(t,r()(a.records))}))["catch"]((function(a){e&&(n.value=!1)}))},g=[{key:"orderNo",label:a("lang.col_orderno")},{key:"status",label:a("lang.col_status")},{key:"financeRemark",label:a("lang.col_finacneremark")},{key:"feedbackTime",label:a("lang.col_feedbacktime")},{key:"type",label:a("lang.col_type")}];return(0,t.sV)((function(){Y.value=1,D()})),{tableData:l,visible:n,tableHeaders:g,loadNewData:p,isEnded:o}}});var m=n(12807),p=n(97569),D=n(69001),g=n(98582),h=n.n(g);const k=(0,m.A)(Y,[["render",d]]),y=k;h()(Y,"components",{QCard:p.A,QBtn:D.A})}}]);