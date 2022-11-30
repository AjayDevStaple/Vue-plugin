<template>

    <section class="container s-cansul"> 
        <article class="d-none d-lg-block">
        </article> 
        <div class="register"> 
         <div class="title2"> 
          <h1 class="mjTitle"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Stop consultation inquiry</font></font></h1> 
         </div> 
         <form id="form1" name="form1" method="post" action="#sidebar_5"> 
          <div class="login w-100 d-flex flex-wrap justify-content-lg-between"> 
           <div class="form-group col-12 col-md-4 mb-3 mb-md-0"> <label for=""><i class="fas fa-user-md"></i></label> <select class="custom-select" name="deptCode" id="deptCode"> <option value=""><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Please select a subject</font></font></option> <option value="00"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Psychology and Psychiatry</font></font></option> <option value="10"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">General Medicine</font></font></option> <option value="11"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">dermatology</font></font></option> <option value="13"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Chest Medicine</font></font></option> <option value="14"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Cardiovascular Medicine</font></font></option> <option value="15"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Hematology Oncology</font></font></option> <option value="16"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Gastrointestinal Hepatobiliary</font></font></option> <option value="17"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Nephrology</font></font></option> <option value="18"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Metabolism</font></font></option> <option value="19"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Neurology</font></font></option> <option value="1A"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Family Medicine</font></font></option> <option value="1C"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Division of Rheumatology</font></font></option> <option value="1D"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Infectious Diseases</font></font></option> <option value="1E"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Occupational Medicine</font></font></option> <option value="20"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">general surgey</font></font></option> <option value="21"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">plastic surgery</font></font></option> <option value="22"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">orthopedics</font></font></option> <option value="23"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Thoracic surgery</font></font></option> <option value="24"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Cardiovascular Surgery</font></font></option> <option value="26"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Colorectal Surgery</font></font></option> <option value="27"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Urology</font></font></option> <option value="29"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">neurosurgery</font></font></option> <option value="2B"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Pediatric Surgery</font></font></option> <option value="2X"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ophthalmology</font></font></option> <option value="2Y"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ENT</font></font></option> <option value="37"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Obstetrics and Gynecology</font></font></option> <option value="40"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Pediatrics</font></font></option> <option value="60"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Diagnostic Radiology</font></font></option> <option value="65"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Radiation Oncology</font></font></option> <option value="70"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Rehabilitation Medicine</font></font></option> <option value="80"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Anesthesiology</font></font></option> <option value="D2"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Oral and Maxillofacial Surgery</font></font></option> <option value="D6"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">dental</font></font></option> </select> <small id="deptCode_txt" class="red"></small> 
           </div> 
           <div class="form-group date_range_group col-12 col-md-5 mb-3 mb-md-0"> 
            <input type="text" id="startDate" class="form-control input-datepicker hasDatepicker" name="startDate" placeholder="Please select a date" autocomplete="off" readonly=""> <span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">~</font></font></span> 
            <input type="text" id="endDate" class="form-control input-datepicker hasDatepicker" name="endDate" placeholder="Please select a date" autocomplete="off" readonly=""> <small class="red"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Inquiry within two weeks</font></font></small> <small id="opdDate_txt" class="red"></small> 
           </div> 
           <div class="col-12 col-md-3 d-flex align-items-center justify-content-center mb-0">
            <button type="button" class="btn-style" onclick="sbForm()"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Inquire</font></font></button>
           </div> 
          </div> 
          <input type="hidden" name="Send"> 
          <input type="hidden" name="deptChName" id="deptChName"> 
         </form> 
         <section style="position:relative;">
          <span id="main_dot" style="position:absolute;top:-120px"></span>
         </section>
         <div class="table-tips">
          <i class="fas fa-arrows-alt-h"></i><i class="far fa-hand-pointer"></i><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Swipe left and right to see the full content
         </font></font></div> 
         <div class="register-table"> 
          <table class="table-border-radius"> 
           <thead> 
            <tr> 
             <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Consultation date</font></font></td> 
             <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">diagnosis</font></font></td> 
             <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">consulting room</font></font></td> 
             <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Department</font></font></td> 
             <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">doctor</font></font></td> 
             <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Consultation/Status</font></font></td> 
            </tr> 
           </thead> 
           <tbody> 
           </tbody> 
          </table> 
         </div> 
         <div class="btn-wrap"> <button type="button" onclick="javascript:location.href='health.php'" class="btn-style"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">News/ Video</font></font></button> <button type="button" onclick="javascript:location.href='register.php'" class="btn-style"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">I want to register</font></font></button> 
         </div> 
        </div> 
        <article class="d-block d-lg-none">
        </article> 
       </section>

</template>

<script lang="ts">
import axios from "axios";
import {ref} from "vue";
import type {WP_REST_API_Posts} from 'wp-types';

declare var wpFrontendLocalizer: any;

export default {
  name: 'StopConsultation',
  components: {},
  setup() {
    const state = ref<{
      posts: WP_REST_API_Posts
    }>({
      posts: []
    });
    const getPosts = async (): Promise<WP_REST_API_Posts> => {
      console.log(`${wpFrontendLocalizer.devApiUrl}/wp/v2/posts`);
      return (await axios.get<WP_REST_API_Posts>(`${wpFrontendLocalizer.devApiUrl}/wp/v2/posts`)).data;
    }

    getPosts().then(posts => {
      state.value.posts = posts;
    })

    return {state};
  },
  methods: {},
  data() {
    return {
      value: 0
    }
  }
}
</script>

<style>





/* CSS Document */
body:before{display:none;content:'';pointer-events:none;z-index:9999;position:fixed;left:0;top:0;bottom:0;width:6px;background:-moz-linear-gradient(left,rgba(0,0,0,0.3) 0%,rgba(0,0,0,0) 100%);background:-webkit-linear-gradient(left,rgba(0,0,0,0.3) 0%,rgba(0,0,0,0) 100%);background:linear-gradient(to right,rgba(0,0,0,0.3) 0%,rgba(0,0,0,0) 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#4d000000',endColorstr='#00000000',GradientType=1)}
body.on:after{content:'';position:fixed;top:0;left:0;right:0;bottom:0;z-index:2;background:rgba(0,0,0,0.5);-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px)}
body,h3,.form-control{font-size:18px;line-height:1.6;}

/* 反白設定 */
::selection{background:#f39118;color:#fff}
::-moz-selection{background:#f39118;color:#fff}
/*樣式 & 效果*/
.table-border-radius{padding: 2rem;border-radius:1rem;overflow:hidden;background: #fff;box-shadow:0 3px 12px rgba(0,0,0,0.1);}
.table-border-radius.no-overflow{overflow:inherit;}
.table-border-radius+.table-border-radius{margin-top:1rem}
.radius-shadow-small{border-radius:1rem;box-shadow:0 3px 8px rgba(0,0,0,0.15)}
.radius-shadow-small-up{border-radius:.5rem;box-shadow:0 3px 8px rgba(0,0,0,0.15)}

/*按鈕*/
.btn-wrap{margin:2rem 0 0}
.btn-style{display:inline-block;border:none;border-radius:50px;background:#447A6A;color:#fff;min-width:100px;min-height:36px;padding:.5rem 1rem;font-size:1rem;outline:none}
.btn-style:hover,a:hover .btn-style{background:#f39118;color:#fff}
.btn-style+.btn-style{margin-left:10px}
.btn-style.bg-blue{background:#326C9E}
.btn-style.bg-blue:hover{background:#1a5283;color:#fff}
.btn-style.bg-orange{background:#f39118}
.btn-style.bg-orange:hover{background:#326C9E;color:#fff}
.btn-style.bg-white{color:#333;box-shadow:0 0 10px rgba(0,0,0,0.2)}
.btn-style.bg-white:hover{background:#ddd!important}
.btn-style.line{border:solid 1px #447A6A;color:#447A6A;background:transparent}
.btn-style.line.bg-blue{border-color:#326C9E;color:#326C9E}
.btn-style.line:hover{color:#fff;background:#245647}
.btn-style.line.bg-blue:hover,a:hover .btn-style.line.bg-blue{background:#326C9E;color:#fff}
.btn-style2{display:table;border:0;background:transparent;margin-left:auto;position:relative}
.btn-style2 span{display:block;background:#fff;padding:0 5px;font-size:.9em;position:relative;z-index:6}
.btn-style2:after{content:'';display:block;width:100%;height:100%;border:solid thin;position:absolute;left:-10px;top:5px;z-index:1;-o-transition:all .3s linear;-webkit-transition:all .1s linear;-moz-transition:all .1s linear;transition:all .1s linear}
.btn-style2:hover span{color:#326C9E;font-weight:700}
.box-shadow{box-shadow:0 2px 5px rgba(0,0,0,.1)}
.por_area{position:relative}
.por_area .por_a{position:absolute;top:-120px}
.btn-small{padding: 0 .5rem;background:#326C9E;color:#fff;border-radius:3px;}
.btn-small[href]:hover{background: #f39118;color:#fff;}
.btn-small+.txt-hide{position: absolute;bottom: 0;left: 0;z-index: -999;opacity: 0;pointer-events: none;width: 10px;overflow: hidden;}
.btn-style-orange{padding:2px .25rem 0;font-size:1rem;color: #f39118;border:solid 1px #f39118;border-radius:3px;}
.btn-style-orange.on,.btn-style-orange:hover{background: #f39118;color:#fff;}
/*.btn-style-orange+.btn-style-orange{margin-left:0}*/
/*顏色*/
.red{color:#dc3545}
.orange{color:#f39118}
.green{color:#447a6a}
.bg-green{background:#dfefea}
.bg-green-dray{background:#447a6a}
.bg-gray{background:#f1f1f1}
.box-inset-shadow{box-shadow:inset 0 2px 5px rgba(0,0,0,0.2)}

/*首頁-快速連結*/
.hot-key{position:relative;z-index: 1;}
.hot-key ul{padding-left:0;list-style:none;margin-bottom:0;display:flex;overflow:hidden;-ms-flex-pack:center;justify-content:center;box-shadow: 0 2px 12px 2px rgba(0,0,0,0.5);/* border-radius: 7rem; *//* border: solid 6px #ffffff; */}
.hot-key ul li{border-top:0;width:25%;box-shadow: 0 0px 12px rgba(0,0,0,0.8);}
.hot-key ul li a{text-decoration:none;text-align:center;padding:1.5rem 0;display:block;color:#fff}
.hot-key ul li:nth-child(1){background:#447A6A}
.hot-key ul li:nth-child(2){background:#9f8f76}
.hot-key ul li:nth-child(3){background:#326C9E}
.hot-key ul li:nth-child(4){background:#a4426b}
.hot-key ul li:nth-child(1):hover{background:#2f6152;box-shadow:0 3px 10px rgba(0,0,0,.5) inset}
.hot-key ul li:nth-child(2):hover{background:#807057;box-shadow:0 3px 10px rgba(0,0,0,.5) inset}
.hot-key ul li:nth-child(3):hover{background:#1a5283;box-shadow:0 3px 10px rgba(0,0,0,.5) inset}
.hot-key ul li:nth-child(4):hover{background:#882c52;box-shadow:0 3px 10px rgba(0,0,0,.5) inset}
.hot-key ul li .icon{width:30px;margin:0 auto}
.hot-key ul li .icon img{max-width:100%;max-height:100%}
.hot-key ul li h4{font-size:1.25rem;letter-spacing:2px;margin:.5rem 0 0;o-transition:all .3s linear;-webkit-transition:all .3s linear;-moz-transition:all .3s linear;transition:all .3s linear}
.hot-key ul li:nth-child(4) h4 br{display:none}

/*首頁－服務時間*/
.service-time .container{padding-top:3rem;padding-bottom:1rem}
.service-time:after{content:'';clear:both;display:block}
.service-time .title-box{position:relative;text-align:center}
.service-time .title-box .mj{margin-bottom:2rem;font-size:2rem;letter-spacing:2px;font-weight:400;color:#326C9E}
.service-time .time{position:relative;list-style:none;padding:1rem 0;margin:0}
.service-time .time .box2{width:100%;text-align:center;color:#a4426b}
.service-time .time .box1 p{display:inline-block}
.service-time .time-mj{display:inline}
.service-time .morning svg path{fill:#fce540}
.service-time .noon svg path{fill:#f39118}
.service-time .night svg path{fill:#326c9e}
.service-time .time-mj span{border-radius:3px;margin-left:10px;margin-right:.5rem;padding:.25rem .5rem 0 1rem;font-size:1rem;letter-spacing:.5rem;width:74px}
.service-time .morning .time-mj span{background:#fce540}
.service-time .noon .time-mj span{background:#f39118}
.service-time .night .time-mj span{background:#326c9e;color:#fff}
.service-time .time .tt{width:72px;margin-left:40px;margin-right:1rem;padding:.25rem .5rem 0 1rem;margin-left:10px;margin-right:.5rem}

/*首頁－衛教專欄*/
/*右側選單*/
.btn-right{text-align:center;position:fixed;right:5px;bottom: 90px;/* transform:translateY(-50%); */z-index: 10;}

.btn-right ul{padding-left:0;margin-bottom:0;list-style:none;border-radius:.75rem 0 0 .75rem;overflow:hidden}
.btn-right ul li{background:#326C9E;-o-transition:all .3s linear;-webkit-transition:all .3s linear;-moz-transition:all .3s linear;transition:all .3s linear}
.btn-right ul li + li:before{content:'';width:60%;display:block;margin:0 auto;border-top:solid thin #fff}
.btn-right ul li:hover{background:#326C9E}
.btn-right ul li:nth-child(3){min-height:60px;cursor:pointer;position:relative}
.btn-right ul li a{display:block;padding:1rem .75rem;color:#fff;display:block;text-decoration:none;text-align:center}
.btn-right ul li .icon{width:30px;margin:0 auto}
.btn-right ul li h4{font-size:1em;letter-spacing:2px;margin:.5em auto 0}
.btn-right ul li h4 span{display:block;width: 19px;word-break: break-all;text-align: center;letter-spacing:0;margin:auto;}
.btn-right ul li .icon img{max-width:100%;max-height:100%}
.btn-right ul li i{color:#fff;font-size:1.2em;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}
#gotop{display:none;cursor:pointer;position:fixed;right:5px;bottom: 20px;z-index:2;width:50px;height:50px;background:#447a6a;border-radius:100%;color:#fff;text-align:center;line-height:50px;}
#gotop:hover{background:#2f6152}
#gotop:hover i{transform:translate(0,-50%)}


.m-wrap{padding-bottom:3rem}
.container{max-width:1300px;padding:0 2rem}


.table-container table td{min-width:100px;padding:5px;border:1px solid #ccc;white-space:inherit}
.table-container{overflow-x:scroll}
@media screen and (max-width: 768px) {
    .table-container{width:100%;overflow-y:auto;overflow:auto;margin:0 0 1em}
    .table-container .table{min-width:600px}
}


[class$="paper-item"] ul{padding-left:0;list-style:none;margin-bottom:0}
[class$="paper-item"] ul:after{content:'';display:block;clear:both}
[class$="paper-item"] .item{position:relative;display:block;margin-bottom:2rem;text-decoration:none;text-align:center;/* border-radius: 1rem; */overflow: hidden;}
[class$="paper-item"] .item:hover .photo img{opacity:.6;}

[class$="paper-item"] .item h3{position: absolute;left: 0;bottom: 0;margin-bottom: 0;width: 100%;font-size: 1.5rem;padding: 4rem 0 .5rem;background: -moz-linear-gradient(top, rgba(50,108,158,0) 0%, rgba(50,108,158,0.9) 85%, rgba(50,108,158,0.9) 100%);
background: -webkit-linear-gradient(top, rgba(50,108,158,0) 0%,rgba(50,108,158,0.9) 85%,rgba(50,108,158,0.9) 100%);
background: linear-gradient(to bottom, rgba(50,108,158,0) 0%,rgba(50,108,158,0.9) 85%,rgba(50,108,158,0.9) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00326c9e', endColorstr='#e6326c9e',GradientType=0 );color: #fff;}
[class$="paper-item"] .item .btn-style{opacity: 0;position: absolute;left: 50%;top: 50%;-ms-transform: translate(-50%,50%);-webkit-transform: translate(-50%,50%);transform: translate(-50%,50%);}
[class$="paper-item"] .item:hover .btn-style{opacity:1;-ms-transform: translate(-50%,-50%);-webkit-transform: translate(-50%,-50%);transform: translate(-50%,-50%);}

/*急診住院-舊*/
.table-tips{display:none}
/*急診-新*/
 
@media screen and (max-width: 1130px){
    /*醫生底層*/
    .doctor-awards .container{max-width:none}
}

@media screen and (max-width: 991px){
    .col, .col-1, .col-10, .col-11, .col-12, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-auto, .col-lg, .col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-auto, .col-md, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-auto, .col-sm, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-auto, .col-xl, .col-xl-1, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-auto{padding-left:.5rem;padding-right:.5rem}
    .row{margin-left:-.5rem;margin-right:-.5rem}
    body{padding-top: 80px;}
    body:before{display:block}
    .sidebar{top:74px;margin-bottom: 1rem;}
    /*首頁內容*/
    .ix-title:before{width:100%}
    /*樣式 & 效果*/
    .table-border-radius,.radius-shadow-small,.doll-tips .content article{padding:1rem;border-radius:.5rem}
    /*內頁結構*/
    .container{padding-left:1rem;padding-right:1rem}
    /*圖文底*/
    .m-wrap .title2 .mjTitle, .m-wrap .detail_title2 .mjTitle,.m-wrap .title2 .mjTitle+small{margin-bottom:1rem}
    .m-wrap .title2 .mjTitle+small{margin-top:1rem}
    /*主選單*/  
   
    /*右側選單*/
    .btn-right{display:block;right:0;top:auto;bottom:0;transform:none;width:100%;border-top:solid thin #58a3e8;box-shadow:0 -2px 5px rgba(0,0,0,0.3)}
    .btn-right ul{display:flex;border-radius:0}
    .btn-right ul li{width:50%}
    .btn-right ul li + li{border-left:solid thin #58a3e8}
    .btn-right ul li + li:before{display:none}
    .btn-right ul li a{padding:0;display:flex;justify-content:center;align-items:center;padding:.75rem .5rem}
    .btn-right ul li .icon{margin:0;margin-right:.5em}
    .btn-right ul li h4{writing-mode:initial;-webkit-writing-mode:initial;margin:0}
    .btn-right ul li h4 span{display:inline-block;width: auto;}
    .btn-right:before{display:none}
    /*重大訊息框*/
    .lotung_mesg .container{display:block}
    .lotung_mesg .photo + .content{width:100%;padding-left: 0;padding-top: 1rem;}
    /*首頁*/
    .ix-title,.ix-title-box .btn-style{margin-top:1rem;margin-bottom: 1rem;}
    .service-time .title-box:before,.service-time .title-box:after{border-radius:.5rem}
    .service-time .title-box:before{left:0;top:0}
    .ix-title,.service-time .title-box .mj{font-size:1.75rem;letter-spacing:2px}
    .index .main section{padding: 0;}

    .aid-immediate{margin:0 -1rem}
    .aid-immediate .full-bed{max-width:inherit;width: 32vw;padding:1rem 0;}
    .clock ul{font-size: 11vw;}
    .aid-immediate .full-bed .tt,.clock-area .tt{font-size:4vw}
    .aid-page .btn-right ul{display:none}

    /*博愛影音列表*/
    .video-list a .photo i{z-index: 2;left: 1.5rem;top: 100%;opacity:1;font-size: 1.5rem;-webkit-transform: translate(0,-50%);-ms-transform: translate(0,-50%);transform: translate(0,-50%);color:#fff}
    .video-list .info .tags{padding-left:2.5rem}
    /*衛教新知*/
    .spacial-paper-item .radius-shadow-small{padding:0}
}
@media print{
    .toolBar,.banner,.breadcrumb{display:none!important;}
    .wrapper{padding:20px!important;}
    body{padding-top: 0;}
	header,footer,nav,.btn-wrap{display: none!important}
}

@page {
  size: A4 portrait;
}
.s-cansul .title2 .mjTitle {
  display: block;
  padding: 1.5rem 0 1.2rem;
  margin-bottom: 2rem;
  border-top: solid thin #ddd;
  border-bottom: solid thin #ddd;
  position: relative;
  font-size: 1.75rem;
  font-weight: 400;
}
.s-cansul .title2 .mjTitle:before {
  content: '';
  display: block;
  width: 40px;
  height: 4px;
  background: #447A6A;
  position: absolute;
  top: -3px;
  left: 0;
}
.form-group {
  display: flex;
  align-items: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
.form-group select {
  padding: 0 0.5rem;
  width: calc(100% - 40px);
  height: 44px;
  line-height: 44px;
  border: solid thin #ddd;
  outline: none;
  transition: all .3s linear;
  border-radius: 3px;
} 
.date_range_group {
  padding-top: 1.5rem;
  position: relative;
}
.date_range_group > input {
  width: calc(100% / 2 - 1rem);
  height: 44px;
}
.date_range_group .red {
  position: absolute;
bottom: -12px;
}
.date_range_group span{
  margin: 0 0.5rem;
}
.s-cansul .register .login {
  margin: 2rem auto;
  background: #f2f2f2;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 5px 12px rgb(0 0 0 / 15%);
  background: #fff;
}
.form-group label {
  margin-bottom: 0;
  margin-right: 0.5rem;
  width: 30px;
}
.form-group label i {
  color: #447A6A;
  font-size: 1.5rem;
}
.register-table table {
  width: 100%;
  border-left: solid thin #ddd;
  border-top: solid thin #ddd;
}
.register-table table td {
  text-align: center;
}
.register-table table thead {
  background: #447A6A;
  color: #fff;
}
.register-table table td {
  padding: 1.5rem 0.5rem;
  font-size: 20px;
}
.s-cansul .btn-wrap {
  margin: 2rem 0 0;
  text-align: center;
}
.s-cansul .btn-wrap .btn-style {
  font-size: 20px !important;
}
</style>