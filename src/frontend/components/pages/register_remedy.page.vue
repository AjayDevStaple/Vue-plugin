<template>



   <div class="container c-diseases">
    <div class="register"> 
        <div class="title2"> 
         <h1 class="mjTitle"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Continuous prescription for chronic diseases 
          </font></font><div class="note-group"> 
           <p class="note"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">．</font><font style="vertical-align: inherit;">The express delivery window will also be closed from 111/9/1 (Thursday).</font></font></p> 
          </div> </h1> 
        </div> 
        <article class="two-group d-flex flex-wrap"> 
         <div class="box info"> 
          <h3 class="mj-title"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Medicine collection time and precautions</font></font></h3> 
          <section class="remedy-tips"> 
           <div class="d-flex flex-wrap justify-content-between"> 
            <div class="flex-fill"> 
             <p class="p-2 weeks-title"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Monday ~ Friday</font></font></p> 
             <p class="p-2 infor"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">08:00 ~ 21:00</font></font></p> 
            </div> 
            <div class="flex-fill ml-2 ml-md-3"> 
             <p class="p-2 weeks-title"><font style="vertical-align: inherit;"><font class="" style="vertical-align: inherit;">Saturday</font></font></p> 
             <p class="p-2 infor"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">08:00 ~ 12:00</font></font></p> 
            </div> 
           </div> 
          </section> 
          <ol> 
           <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">The appointment date is the period for receiving the medicine on the prescription, and the appointment must be completed before 12:00 noon of the previous day.</font></font></li> 
           <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">The time for receiving medicines is the working hours of outpatient pharmacies, as shown in the time for receiving medicines.</font></font></li> 
           <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Prescriptions are kept until the receiving interval + 3 days, and the on-site approval price will be changed to queue up for receiving the medicine after the withdrawal is exceeded.</font></font></li> 
           <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">If the prescription is lost or the medicine is lost, please seek medical treatment again, and the alteration will be invalid.</font></font></li> 
           <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Service line: </font></font><a href="tel:03-9543131?_x_tr_sl=zh-TW&amp;_x_tr_tl=en&amp;_x_tr_hl=zh-TW&amp;_x_tr_pto=wapp" title="Call the service line: 03-9543131"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">03-9543131, extension 3157</font></font></a></li> 
          </ol> 
          <p class="green text-md-center"><b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">In order to provide every patient with a good quality of diagnosis and treatment‧Please come to the hospital on time to pick up the medicine</font></font></b></p> 
         </div> 
         <div class="box login"> 
          <form id="form1" name="form1" method="post" action="register_remedy_detail.php#sidebar_6"> 
           <div class="item"> 
            <ul> 
             <li class="custom-control custom-radio"> <input type="radio" id="loginID_1" name="idNo" value="1" class="custom-control-input" onclick="show_birth(1)" checked=""> <label class="custom-control-label" for="loginID_1"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ID number</font></font></label> </li> 
            </ul> 
            <div class="form-group"> <label for="label"><i class="far fa-id-card"></i></label> 
             <input type="text" name="patData" id="patData" class="form-control" placeholder="Example: A123456789" onkeyup="input_strtoupper(this,event)"> <small id="patData_txt" class="red warning_txt"></small> 
            </div> 
           </div> 
           <div class="item"> 
            <div class="form-group"> <label for="label"><i class="fas fa-birthday-cake"></i></label> 
             <input type="text" id="birthDate" name="birthDate" class="form-control input-datepicker" placeholder="Please enter your birthday (year, month, day of the Republic of China)" onkeydown="if(event.keyCode==13){sbForm();}"> <small id="birthDate_txt" class="red warning_txt"></small> 
            </div> 
            <p id="birthTxt"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Example: If the date of birth is January 01, 1982, please enter 0820101</font></font></p> 
           </div> 
           <div class="btn-wrap mt-3 pt-3"> <button type="button" onclick="sbForm();" class="btn-style"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Appointment and Inquiry</font></font></button> 
           </div> 
          </form> 
         </div> 
        </article> 
       </div>
   </div>
</template>

<script lang="ts">
import axios from "axios";
import {ref} from "vue";
import type {WP_REST_API_Posts} from 'wp-types';

declare var wpFrontendLocalizer: any;

export default {
  name: 'PhysicianRegistration',
  components: {},
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
body{position:relative;padding-top: 123px;}
body.on:after{content:'';position:fixed;top:0;left:0;right:0;bottom:0;z-index:2;background:rgba(0,0,0,0.5);-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px)}
body,h3,.form-control{font-size:18px;line-height:1.6;}
a{color:inherit;text-decoration:none}
a:hover,a:active,a:focus{color:initial;text-decoration:none}
a,button{cursor:pointer}
a,button,.gradient-03s,.ix-title :before,.ix-title :after{-o-transition:all .3s linear;-webkit-transition:all .3s linear;-moz-transition:all .3s linear;transition:all .3s linear}
.disabled{pointer-events:none;opacity:.5}
/*:focus,:active,button:focus{outline:none}*/
.col,.col-1,.col-10,.col-11,.col-12,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-auto,.col-lg,.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-auto,.col-md,.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-auto,.col-sm,.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-auto,.col-xl,.col-xl-1,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-auto{padding-left:1rem;padding-right:1rem}
.row{margin-left:-1rem;margin-right:-1rem}

/*---------------------- 基礎設定 ----------------------*/
.loading_area{display: none;}
/*視窗卷軸*/
.scrollbar-style::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.3);background-color:transparent}
.scrollbar-style::-webkit-scrollbar{width:10px;background-color:transparent}
.scrollbar-style::-webkit-scrollbar-thumb{background-color:#447A6A}

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

/*內頁架構*/
.m-wrap{padding-bottom:3rem}
.container{max-width:1300px;padding:0 2rem}

/*RWD編輯器表格(X捲軸)*/
.table-container table td{min-width:100px;padding:5px;border:1px solid #ccc;white-space:inherit}
.table-container{overflow-x:scroll}
@media screen and (max-width: 768px) {
    .table-container{width:100%;overflow-y:auto;overflow:auto;margin:0 0 1em}
    .table-container .table{min-width:600px}
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



.two-group .box {
    width: 50%;
    padding: 2rem;
    box-shadow: 0 3px 12px rgb(0 0 0 / 10%);
}

.two-group .info {
    background: linear-gradient(135deg,#eef5f3 0%,rgba(238,245,243,0.8) 100%),url(../../assets/sidebar-bg.png)left top/cover;
    border-radius: 1rem 0 0 1rem;
}
body, h3, .form-control {
    font-size: 18px;
    line-height: 1.6;
}

.two-group .box +.box {
    max-width: inherit;
    margin: 0;
    border-radius: 0 1rem 1rem 0;
    border-left: solid 4px #447a6a;
}
.remedy-tips {
    max-width: 1000px;
    margin: 0 auto;
    padding-bottom: 0.5rem;
    text-align: center;
}
.mj-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #447a6a;
}

.remedy-tips .weeks-title {
    padding: 0 0.5rem;
    background: #447A6A;
    color: #fff;
    margin-bottom: 0.5rem;
    padding: 0.25rem 0.5rem;
    border-radius: 0.5rem;
}

.register .btn-wrap {
    display: flex;
    justify-content: center;
    margin: 2rem 0 0;
}
element.style {
    vertical-align: inherit;
}
.register .login .item ul, .register .login .item p {
    padding-left: 40px;
    list-style: none;
    margin: 0;
}
.register .login .item ul, .register .login .item p {
    padding-left: 40px;
    list-style: none;
    margin: 0;
}

.c-diseases .title2 .mjTitle {
    display: block;
    padding: 1.5rem 0 1.2rem;
    margin-bottom: 2rem;
    border-top: solid thin #ddd;
    border-bottom: solid thin #ddd;
    position: relative;
    font-size: 1.75rem;
    font-weight: 400;
}
.c-diseases .title2 .mjTitle:before {
    content: '';
    display: block;
    width: 40px;
    height: 4px;
    background: #447A6A;
    position: absolute;
    top: -3px;
    left: 0;
}
.c-diseases .mjTitle .note {
    margin-bottom: 0;
    font-size: 1rem;
    padding-top: 10px;
}
.c-diseases .mjTitle .note-group {
    float: right;
    width: 50%;
    margin-top: 0;
    padding-left: 1rem;
}
.c-diseases .form-group {
    display: flex;
    align-items: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}
.c-diseases .form-group input, .form-group select {
    padding: 0 0.5rem;
    width: calc(100% - 40px);
    height: 44px;
    line-height: 44px;
    border: solid thin #ddd;
    outline: none;
    transition: all .3s linear;
    border-radius: 3px;
}
.c-diseases .form-group label {
    margin-bottom: 0;
    margin-right: 0.5rem;
    width: 30px;
}
.c-diseases .form-group label i {
    color: #447A6A;
    font-size: 1.5rem;
}
.c-diseases .register .login .item ul li {
    display: inline-block;
    line-height: normal;
    padding: 0.5rem 0.5rem 0.5rem 1.5rem;
}
</style>