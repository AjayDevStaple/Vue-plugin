<template>


  <div class="register">
    <div class="container i-cancel">
      <div class="title2">
        <h1 class="mjTitle">
          <font style="vertical-align: inherit">
            <font style="vertical-align: inherit" class="">Inquiry and Cancellation</font>
          </font>
        </h1>

      </div>
      <div class="login" v-if="showMore == false">
        <form id="form1" name="form1" method="post" action="register_search_detail.php#sidebar_4">
          <div class="item">
            <ul>
              <li class="custom-control custom-radio">
                <input type="radio" id="loginID_1" name="idType" value="0" class="custom-control-input"
                  onclick="show_birth(1)" checked v-model="idType" />
                <label class="custom-control-label" for="loginID_1">
                  <font style="vertical-align: inherit">
                    <font style="vertical-align: inherit">ID number</font>
                  </font>
                </label>
              </li>
              <li class="custom-control custom-radio">
                <input type="radio" id="loginID_2" name="idType" value="1" class="custom-control-input"
                  onclick="show_birth(2)" v-model="idType" />
                <label class="custom-control-label" for="loginID_2">
                  <font style="vertical-align: inherit">
                    <font style="vertical-align: inherit">Medical record number</font>
                  </font>
                </label>
              </li>
              <li class="custom-control custom-radio">
                <input type="radio" id="loginID_3" name="idType" value="2" class="custom-control-input"
                  onclick="show_birth(3)" v-model="idType" />
                <label class="custom-control-label" for="loginID_3">
                  <font style="vertical-align: inherit">
                    <font style="vertical-align: inherit">passport number</font>
                  </font>
                </label>
              </li>
              <li class="custom-control custom-radio">
                <input type="radio" id="loginID_4" name="idType" value="3" class="custom-control-input"
                  onclick="show_birth(4)" v-model="idType" />
                <label class="custom-control-label" for="loginID_4">
                  <font style="vertical-align: inherit">
                    <font style="vertical-align: inherit">Residence card number</font>
                  </font>
                </label>
              </li>
            </ul>
            <div class="form-group">
              <label for="label"><i class="far fa-id-card"></i></label>
              <input type="text" name="patData" id="patData" class="form-control" placeholder="Example: A123456789"
                onchange="chk_password(1)" onkeyup="input_strtoupper(this,event)" v-model="pass" />
              <small id="patData_txt" class="red warning_txt"></small>
            </div>
          </div>
          <div class="item">
            <div class="form-group">
              <label for="label"><i class="fas fa-birthday-cake"></i></label>
              <input type="text" id="birthDate" name="birthDate" class="form-control input-datepicker"
                placeholder="Please enter your birthday (year, month, day of the Republic of China)"
                v-model="birthDate" />
              <small id="birthDate_txt" class="red warning_txt"></small>
            </div>
            <p id="birthTxt">
              <font style="vertical-align: inherit">
                <font style="vertical-align: inherit">Example: If the date of birth is January 01, 1982, please enter
                  0820101</font>
              </font>
            </p>
          </div>
          <div class="item" id="vip_password" style="display: none">
            <div class="form-group">
              <label for="label"><i class="fas fa-lock"></i></label>
              <input type="password" id="strPW" name="strPW" class="form-control input-datepicker"
                placeholder="please enter password" onkeydown="if(event.keyCode==13){sbForm();}" />
              <small id="strPW_txt" class="red warning_txt"></small>
            </div>
          </div>
          <div class="btn-wrap">
            <button type="button" v-on:click="postInquiry" id="confirm" class="btn-style">
              <font style="vertical-align: inherit">
                <font style="vertical-align: inherit">Inquire</font>
              </font>
            </button>
            <input name="Send" type="hidden" id="Send" />
            <input type="hidden" name="csrf" value="bde99d1c575f517b0db290430c6399c704274e1f" />
            <input name="chkPass" type="hidden" id="chkPass" />
            <input name="isPass" type="hidden" id="isPass" />
          </div>
        </form>


      </div>

      <div v-if="showMore == true">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Consulation date</th>
              <th scope="col">Department</th>
              <th scope="col">doctor</th>
              <th scope="col">Consulation time</th>
              <th>Clinic</th>
              <th>Place</th>
              <th>appointment number</th>
              <th>Whether to cancel</th>
            </tr>
          </thead>
          <tbody>





            <tr v-for="value in responseData" >
              <th scope="row">{{value.opdDate}}</th>
              <td>{{value.deptName}}</td>
              <td>{{value.docName}}</td>
              <td>test</td>
              <td>test</td>
              <td>test</td>
              <td>test</td>
              <td><Button v-on:click="cancelRegis">Cancel Registeration</Button></td>
           

              

          
            </tr>
           
          </tbody>
        </table>


        <span class="badge badge-success badage-style" >News/Video</span>
        <span class="badge badge-success badage-style">I want to register</span>
        <span class="badge badge-primary badage-style"> <i class="fa-solid fa-print"></i>print</span>




      </div>


    </div>
  </div>
</template>

<script lang="ts">

import { _services } from "../../../Services/Api/index"




export default {
  name: "InquiryandCancellation",
  components: {},
  data() {
    return {
      responseData : undefined ,
      showMore: false,
      idType: "string",
      birthDate: "2022-11-28T05:11:23.931Z",
      pass: "string",
      password: "string",
      patData: "string",
      userId: "string"
    }
  },
  methods: {
    postInquiry() {

      const data =
      {

        birthDate: this.birthDate,
        idType: this.idType,
        pass: this.pass,
        password: this.password,
        patData: this.patData,
        userId: this.userId

      }
      console.log(this.showMore)
      _services
        .outGetRegRegbasic(data)
        .then((res) => {
          console.log(res.data.code)
          console.log(res.data.data)
          if (res.data.code === 200) {
            this.showMore = true
            this.responseData = res.data.data

          }
        })
        .catch((err) => {
          console.log(err);
        });
    },

    cancelRegis() {
      
      console.log('cancel clicked')

    }


  }
}
}






</script>

<style>


.badage-style {
 
  min-height: 36px;
  min-width: 100px;
}


@charset "utf-8";

/* CSS Document */
body:before {
  display: none;
  content: "";
  pointer-events: none;
  z-index: 9999;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 6px;
  background: -moz-linear-gradient(left,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0) 100%);
  background: -webkit-linear-gradient(left,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0) 100%);
  background: linear-gradient(to right,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#4d000000', endColorstr='#00000000', GradientType=1);
}

body {
  position: relative;
  padding-top: 123px;
}

body.on:after {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background: rgba(0, 0, 0, 0.5);
  -webkit-backdrop-filter: blur(3px);
  backdrop-filter: blur(3px);
}

body,
h3,
.form-control {
  font-size: 18px;
  line-height: 1.6;
}

a {
  color: inherit;
  text-decoration: none;
}

a:hover,
a:active,
a:focus {
  color: initial;
  text-decoration: none;
}

a,
button {
  cursor: pointer;
}

a,
button,
.gradient-03s,
.ix-title :before,
.ix-title :after {
  -o-transition: all 0.3s linear;
  -webkit-transition: all 0.3s linear;
  -moz-transition: all 0.3s linear;
  transition: all 0.3s linear;
}

.disabled {
  pointer-events: none;
  opacity: 0.5;
}

/*:focus,:active,button:focus{outline:none}*/
.col,
.col-1,
.col-10,
.col-11,
.col-12,
.col-2,
.col-3,
.col-4,
.col-5,
.col-6,
.col-7,
.col-8,
.col-9,
.col-auto,
.col-lg,
.col-lg-1,
.col-lg-10,
.col-lg-11,
.col-lg-12,
.col-lg-2,
.col-lg-3,
.col-lg-4,
.col-lg-5,
.col-lg-6,
.col-lg-7,
.col-lg-8,
.col-lg-9,
.col-lg-auto,
.col-md,
.col-md-1,
.col-md-10,
.col-md-11,
.col-md-12,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-7,
.col-md-8,
.col-md-9,
.col-md-auto,
.col-sm,
.col-sm-1,
.col-sm-10,
.col-sm-11,
.col-sm-12,
.col-sm-2,
.col-sm-3,
.col-sm-4,
.col-sm-5,
.col-sm-6,
.col-sm-7,
.col-sm-8,
.col-sm-9,
.col-sm-auto,
.col-xl,
.col-xl-1,
.col-xl-10,
.col-xl-11,
.col-xl-12,
.col-xl-2,
.col-xl-3,
.col-xl-4,
.col-xl-5,
.col-xl-6,
.col-xl-7,
.col-xl-8,
.col-xl-9,
.col-xl-auto {
  padding-left: 1rem;
  padding-right: 1rem;
}

.row {
  margin-left: -1rem;
  margin-right: -1rem;
}

/*---------------------- 基礎設定 ----------------------*/
.loading_area {
  display: none;
}

/*視窗卷軸*/
.scrollbar-style::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: transparent;
}

.scrollbar-style::-webkit-scrollbar {
  width: 10px;
  background-color: transparent;
}

.scrollbar-style::-webkit-scrollbar-thumb {
  background-color: #447a6a;
}

/* 反白設定 */
::selection {
  background: #f39118;
  color: #fff;
}

::-moz-selection {
  background: #f39118;
  color: #fff;
}

/*樣式 & 效果*/
.table-border-radius {
  padding: 2rem;
  border-radius: 1rem;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.1);
}

.table-border-radius.no-overflow {
  overflow: inherit;
}

.table-border-radius+.table-border-radius {
  margin-top: 1rem;
}

.radius-shadow-small {
  border-radius: 1rem;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
}

.radius-shadow-small-up {
  border-radius: 0.5rem;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
}

/*按鈕*/
.btn-wrap {
  margin: 2rem 0 0;
}

.btn-style {
  display: inline-block;
  border: none;
  border-radius: 50px;
  background: #447a6a;
  color: #fff;
  min-width: 100px;
  min-height: 36px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  outline: none;
}

.btn-style:hover,
a:hover .btn-style {
  background: #f39118;
  color: #fff;
}

.btn-style+.btn-style {
  margin-left: 10px;
}

.btn-style.bg-blue {
  background: #326c9e;
}

.btn-style.bg-blue:hover {
  background: #1a5283;
  color: #fff;
}

.btn-style.bg-orange {
  background: #f39118;
}

.btn-style.bg-orange:hover {
  background: #326c9e;
  color: #fff;
}

.btn-style.bg-white {
  color: #333;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.btn-style.bg-white:hover {
  background: #ddd !important;
}

.btn-style.line {
  border: solid 1px #447a6a;
  color: #447a6a;
  background: transparent;
}

.btn-style.line.bg-blue {
  border-color: #326c9e;
  color: #326c9e;
}

.btn-style.line:hover {
  color: #fff;
  background: #245647;
}

.btn-style.line.bg-blue:hover,
a:hover .btn-style.line.bg-blue {
  background: #326c9e;
  color: #fff;
}

.btn-style2 {
  display: table;
  border: 0;
  background: transparent;
  margin-left: auto;
  position: relative;
}

.btn-style2 span {
  display: block;
  background: #fff;
  padding: 0 5px;
  font-size: 0.9em;
  position: relative;
  z-index: 6;
}

.btn-style2:after {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  border: solid thin;
  position: absolute;
  left: -10px;
  top: 5px;
  z-index: 1;
  -o-transition: all 0.3s linear;
  -webkit-transition: all 0.1s linear;
  -moz-transition: all 0.1s linear;
  transition: all 0.1s linear;
}

.btn-style2:hover span {
  color: #326c9e;
  font-weight: 700;
}

.box-shadow {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.por_area {
  position: relative;
}

.por_area .por_a {
  position: absolute;
  top: -120px;
}

.btn-small {
  padding: 0 0.5rem;
  background: #326c9e;
  color: #fff;
  border-radius: 3px;
}

.btn-small[href]:hover {
  background: #f39118;
  color: #fff;
}

.btn-small+.txt-hide {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -999;
  opacity: 0;
  pointer-events: none;
  width: 10px;
  overflow: hidden;
}

.btn-style-orange {
  padding: 2px 0.25rem 0;
  font-size: 1rem;
  color: #f39118;
  border: solid 1px #f39118;
  border-radius: 3px;
}

.btn-style-orange.on,
.btn-style-orange:hover {
  background: #f39118;
  color: #fff;
}

/*.btn-style-orange+.btn-style-orange{margin-left:0}*/
/*顏色*/
.red {
  color: #dc3545;
}

.orange {
  color: #f39118;
}

.green {
  color: #447a6a;
}

.bg-green {
  background: #dfefea;
}

.bg-green-dray {
  background: #447a6a;
}

.bg-gray {
  background: #f1f1f1;
}

.bg-mask {
  background: linear-gradient(135deg, #eef5f3 0%, rgba(238, 245, 243, 0.6) 100%),
    url(../../assets/sidebar-bg.png) left top/cover;
}

.box-inset-shadow {
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.2);
}

/*社群分享*/
.share {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  line-height: normal;
}

.share ul {
  padding: 0;
  margin-bottom: 0;
  list-style: none;
  text-align: right;
  font-size: 1.5rem;
}

.share ul li {
  display: inline-block;
  vertical-align: middle;
  letter-spacing: 0;
  margin-top: 0.5rem;
}

.share ul li span {
  vertical-align: middle !important;
}

/* 標題 */
[class$="title-list"] a h2,
[class$="title-list2"] .content h2,
[class$="photo-list"]:not(.dl-photo-list) a h2,
[class$="photo-list2"] a .content h2,
.video-list h3 {
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.2;
  height: 50px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.index-news .item .info h3,
.edu ul li .content h3 {
  height: 50px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.edu ul li .content h3 {
  height: 60px;
}

/*回頂端 */
.modal-dialog {
  z-index: 1050 !important;
}

/*主選單*/
.dropdown-item:active {
  color: inherit;
  background-color: inherit;
}

header {
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
}

header .navbar {
  width: 100%;
  padding: 0;
  margin: 0 auto;
}

header.fixed .h-wrap {
  display: none;
}

header.fixed {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

header.fixed .logo {
  width: 200px;
}

header .h-wrap {
  width: 100%;
  margin: 0 auto;
  padding: 6px 0;
  background-image: linear-gradient(to right, #fff 10%, #ededed 100%);
}

header .tools ul {
  padding-left: 0;
  list-style: none;
  display: flex;
  max-width: 1140px;
  justify-content: flex-end;
  margin: 0 auto;
}

header .tools li {
  display: inline-block;
  vertical-align: middle;
}

header .tools li+li {
  margin-left: 0.5em;
}

header .tools li a {
  text-decoration: none;
}

header .tools li .fb_iframe_widget span {
  vertical-align: middle !important;
}

header .tools i {
  font-size: 1.6em;
  line-height: normal;
  color: #447a6a;
}

header .navbar-collapse .tools ul {
  display: block;
  padding: 0.5rem;
}

header .tools .lang {
  display: flex;
  background: #fff;
  border-radius: 50px;
  overflow: hidden;
  border: solid 1px #fff;
}

header .tools .lang a {
  display: inline-block;
  width: 50px;
  line-height: 30px;
  text-align: center;
  font-size: 0.9em;
}

header .tools .lang a.active {
  background: #447a6a;
  color: #fff;
}

header .tools .lang a:hover:not(.active) {
  color: #447a6a;
}

header .search {
  width: 30px;
  height: 30px;
  position: relative;
  transition: all 0.3s linear;
}

header .search i {
  font-size: 1rem;
  cursor: pointer;
  color: #447a6a;
}

.search #___gcse_0 {
  opacity: 0;
  pointer-events: none;
}

.search.on #___gcse_0 {
  opacity: 1;
  pointer-events: auto;
}

.gsc-control-cse {
  height: 30px;
  padding: 0 1rem !important;
  border-radius: 30px;
  border: none !important;
  background-color: #fff !important;
}

.gsc-search-button-v2 {
  display: none;
}

form.gsc-search-box {
  margin-bottom: 0 !important;
}

header .logo {
  width: 240px;
  padding-bottom: 0.1rem;
  transition: all 0.2s cubic-bezier(0.38, 0.04, 0.48, 0.97);
}

header .logo .navbar-brand {
  display: block;
}

header .logo img {
  max-width: 100%;
  width: auto;
  max-height: 100%;
}

header .navbar-collapse {
  width: calc(100% - 240px);
}

header .nav-item:last-child a {
  padding-right: 0;
}

header .nav-item {
  position: static;
}

header .navbar-expand-lg .navbar-nav .nav-item.d-lg-none .nav-link {
  margin: 6px 6px 0;
  background: rgba(255, 255, 255, 0.2);
  text-align: center;
  border-bottom: none;
}

header .navbar-expand-lg .navbar-nav {
  width: 100%;
  justify-content: flex-end;
}

header .navbar-expand-lg .navbar-nav .nav-link {
  position: relative;
  z-index: 1;
  padding: 0.75rem 1rem;
  font-size: 1em;
  color: #444;
  letter-spacing: 0.05rem;
}

header .navbar-expand-lg .navbar-nav .nav-link.on:after {
  content: "";
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
  height: 11px;
  width: 70%;
  margin-left: 0;
  display: block;
  border: none;
  background: rgba(243, 145, 24, 0.2);
  -ms-transform: translate(-50%, 0);
  -webkit-transform: translate(-50%, 0);
  transform: translate(-50%, 0);
}

header .navbar-expand-lg .navbar-nav .show .nav-link {
  color: #447a6a;
  position: relative;
}

header .navbar-expand-lg .navbar-nav .nav-link.dropdown-toggle:not(.on)::after {
  display: none;
}

header.fixed .navbar-expand-lg .navbar-nav .nav-link {
  padding-top: 1.1rem;
  padding-bottom: 1.1rem;
}

header .dropdown-menu {
  padding: 0;
  margin: 0;
  border: 0;
  border-top: solid 4px #447a6a;
  border-radius: 0;
  box-shadow: 0 7px 20px -10px rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 400px;
  background: #fcfcf8;
}

.dropdown-menu.show:before {
  transform: scale(1);
}

header .sub-title {
  padding: 0.25rem 0.5rem;
  margin-bottom: 0;
  color: #447a6a;
  font-weight: 700;
}

header .item-wrap {
  position: relative;
  width: 100%;
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 2rem;
  background: #fff;
}

header .item-wrap .single {
  width: 240px;
  padding: 1.5rem 1rem;
}

header .item-wrap .single li {
  margin-bottom: 5px;
}

header .item-wrap .single li a {
  border-radius: 3px;
  display: block;
  text-decoration: none;
}

header .item-wrap .single .sub-title {
  text-align: center;
}

header .item-wrap .single li a:hover {
  background: #326c9e;
}

header .item-wrap .single li a:hover h3 {
  color: #fff;
}

header .item-wrap .group {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

header .item-wrap .single+.group {
  width: calc(100% - 240px);
}

header .item-wrap .group .dropdown-item {
  padding: 0;
  width: calc(100% / 5);
}

header .item-wrap .single+.group .dropdown-item {
  width: calc(100% / 4);
}

header .item-wrap ul {
  padding-left: 0;
  list-style: none;
  width: 100%;
}

header .item-wrap .group .dropdown-item+.dropdown-item {
  border-left: solid thin #ccc;
}

header .item-wrap .single+.group .dropdown-item:nth-child(4n + 1) {
  border-left: none;
}

header .item-wrap .group:only-child .dropdown-item:nth-child(5n + 1) {
  border-left: none;
}

header .item-wrap .group .dropdown-item .box {
  padding: 1.5rem 1rem;
}

header .item-wrap .group .sub-title {
  clear: both;
  overflow: hidden;
  padding: 0.25rem 0 1rem;
  margin-bottom: 1rem;
  border-bottom: solid thin #326c9e;
  position: relative;
}

header .item-wrap .group .sub-title:before {
  content: "";
  display: block;
  width: 20px;
  height: 3px;
  background: #326c9e;
  position: absolute;
  bottom: -1.5px;
  left: 0;
}

header .item-wrap .group .sub-title a {
  margin-top: -0.25rem;
  margin-bottom: -0.5rem;
  padding: 0.25rem 0.5rem;
  border-radius: 3px;
}

header .item-wrap .group .sub-title a:hover {
  color: #fff;
  background: #326c9e;
}

header .group a {
  position: relative;
  display: block;
  text-decoration: none;
  font-size: 18px;
  text-decoration: none;
}

header button.navbar-toggler {
  z-index: 999;
  border-radius: 0;
  width: 44px;
  height: 54px;
  min-width: auto;
  min-height: auto;
  padding: 0;
  position: relative;
  text-align: center;
  outline: none;
  margin-right: 10px;
}

header button.navbar-toggler:hover:after {
  display: none;
}

header button.navbar-toggler span {
  display: table;
  width: 80%;
  border-bottom: solid 2px #447a6a;
  margin: 0 auto;
  transition: all 0.3s linear;
}

header button.navbar-toggler span+span {
  margin-top: 8px;
}

body.on header button.navbar-toggler span {
  position: absolute;
  left: 10%;
  /* border-bottom:solid 2px #fff */
}

body.on header button.navbar-toggler span:nth-child(1) {
  transform: rotate(-45deg);
  top: 18px;
}

body.on header button.navbar-toggler span:nth-child(2) {
  display: none;
}

body.on header button.navbar-toggler span:nth-child(3) {
  transform: rotate(45deg);
}

.dropdown-item {
  white-space: inherit;
}

/*次選單*/

.owl-carousel.siderbar-nav .owl-stage {
  margin-left: auto;
  margin-right: auto;
}

.siderbar-nav {
  list-style: none;
  margin: 0;
  padding: 0;
  justify-content: center;
}

.siderbar-nav .owl-dots {
  margin-top: 0 !important;
  padding-bottom: 0.25em;
  line-height: 0.5;
}

.siderbar-nav.owl-theme .owl-nav {
  margin-top: 0;
}

.siderbar-nav.owl-theme .owl-dots .owl-dot span {
  width: 6px;
  height: 6px;
  margin-bottom: 0;
  margin-top: 0;
}

.siderbar-nav.owl-theme .owl-dots .owl-dot.active span,
.siderbar-nav.owl-theme .owl-dots .owl-dot:hover span {
  border: solid 1px #fff;
  width: 8px;
  height: 8px;
  margin-bottom: -1px;
  background: rgba(255, 255, 255, 0.2);
}

.owl-theme.siderbar-nav .owl-nav [class*="owl-"] span {
  margin-top: -2px;
  display: block;
}

.owl-carousel.siderbar-nav .owl-nav button.owl-next,
.owl-carousel.siderbar-nav .owl-nav button.owl-prev {
  position: absolute;
  top: 0;
  width: 20px;
  height: 100%;
  margin: 0;
  border-radius: 0;
  background: #346d9f;
  line-height: 1;
  text-align: center;
  border: solid 1px #346d9f;
  color: #fff;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.8);
}

.owl-carousel.siderbar-nav .owl-nav [class*="owl-"]:hover {
  background: #447a6a;
}

.owl-carousel .owl-nav button.owl-next {
  left: 100%;
}

.owl-carousel .owl-nav button.owl-prev {
  right: 100%;
}

.owl-carousel .owl-nav button span {
  position: relative;
  text-indent: -99999999px;
  display: block;
}

.owl-carousel .owl-nav button.owl-next span:after,
.owl-carousel .owl-nav button.owl-prev span:after {
  content: "";
  position: absolute;
  top: 0;
  font-weight: 900;
  display: block;
  text-indent: 0;
}

.owl-carousel .owl-nav button.owl-next span:after {
  content: "\f0da";
  left: 50%;
  -ms-transform: translate(-25%, 0);
  -webkit-transform: translate(-25%, 0);
  transform: translate(-25%, 0);
}

.owl-carousel .owl-nav button.owl-prev span:after {
  content: "\f0d9";
  right: 50%;
  -ms-transform: translate(25%, 0);
  -webkit-transform: translate(25%, 0);
  transform: translate(25%, 0);
}

.siderbar-nav .item {
  overflow: hidden;
  padding: 2px 0;
  box-shadow: 5px 0 1px -4px rgba(255, 255, 255, 0.5);
}

.siderbar-nav .item a {
  position: relative;
  padding: 8px 15px;
  transition: all 0.2s linear;
  color: #fff;
  white-space: nowrap;
}

.siderbar-nav .item.active a:before,
.siderbar-nav .item.active a:after {
  content: "";
  position: absolute;
  z-index: 2;
  bottom: -5px;
  width: 10px;
  height: 40px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
  border-radius: 100%;
}

.siderbar-nav .item.active a:before {
  right: 100%;
}

.siderbar-nav .item.active a:after {
  left: 100%;
}

.siderbar-nav .item.active a,
.siderbar-nav .item.active:hover a {
  color: #fff;
  font-weight: 700;
  border-bottom: solid 4px #fff;
}

/*首頁形象*/
.carousel-item .img-box {
  width: 100%;
  height: 28vw;
  margin: 0 auto;
}

[class^="carousel-control"] img {
  max-width: 100%;
}

.carousel-control-next img {
  -ms-transform: scaleX(-1);
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}

.carousel-control-prev,
.carousel-control-next {
  display: inline-block;
  top: auto;
  bottom: 5rem;
  left: 1rem;
  /* right:1rem; */
  opacity: 1;
  padding: 0 0.4rem;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background: #fff;
  text-align: center;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
  color: #326c9e;
  line-height: 45px;
}

.carousel-control-prev,
.carousel-control-next,
.carousel-control-prev img,
.carousel-control-next img {
  -o-transition: all 0.3s linear;
  -webkit-transition: all 0.3s linear;
  -moz-transition: all 0.3s linear;
  transition: all 0.3s linear;
}

.carousel-control-prev {
  margin-bottom: 4rem;
}

.carousel-control-next {
  border-left: none;
}

.carousel-control-prev:hover {
  background: rgba(159, 143, 118, 0.7);
  -ms-transform: scale(0.85);
  -webkit-transform: scale(0.85);
  transform: scale(0.85);
}

.carousel-control-next:hover {
  background: rgba(159, 143, 118, 0.7);
  -ms-transform: scale(0.85);
  -webkit-transform: scale(0.85);
  transform: scale(0.85);
}

.carousel-control-prev:hover img {
  -ms-transform: translate(-1.5rem, 0);
  -webkit-transform: translate(-1.5rem, 0);
  transform: translate(-1.5rem, 0);
}

.carousel-control-next:hover img {
  -ms-transform: scaleX(-1) translate(-1.5rem, 0);
  -webkit-transform: scaleX(-1) translate(-1.5rem, 0);
  transform: scaleX(-1) translate(-1.5rem, 0);
}

.carousel-control-prev span,
.carousel-control-next span {
  display: none;
}

.carousel-item .mb {
  display: none !important;
}

.carousel-indicators {
  display: none;
}

.carousel-indicators li {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #d6d6d6;
  border: 0;
  opacity: 1 !important;
}

.carousel-indicators .active {
  background: #447a6a;
}

/*首頁*/
.index .photo img {
  max-width: 100%;
  max-height: 100%;
  -webkit-transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
  -moz-transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
  -o-transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
  -ms-transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.index-news .item:hover .photo {
  -webkit-transform: scale(1.25);
  -ms-transform: scale(1.25);
  transform: scale(1.25);
  transform-origin: center top;
}

.nav-style.owl-theme .owl-nav {
  margin-top: 0;
}

.nav-style.owl-carousel .owl-nav button.owl-next {
  /* position:static */
  left: 100%;
  transform: translate(0, -50%);
}

.nav-style.owl-carousel .owl-nav button.owl-prev {
  /* position:static */
  right: 100%;
  transform: translate(0, -50%);
}

.nav-style.owl-carousel .owl-nav button {
  position: absolute;
  top: 50%;
  left: inherit;
  right: inherit;
  width: 40px;
  height: 40px;
  margin-top: 0;
  margin-bottom: 0;
  background: #326c9e;
  color: #fff;
  text-align: center;
  line-height: 0;
  /* text-indent: 0; */
  /* border-radius: 100%; */
  /* transform: translateY(-50%); */
}

.nav-style.owl-carousel .owl-nav button.owl-next span:after,
.nav-style.owl-carousel .owl-nav button.owl-prev span:after {
  position: static;
  -ms-transform: translate(0, 0);
  -webkit-transform: translate(0, 0);
  transform: translate(0, 0);
  line-height: 40px;
}

.nav-style.owl-carousel .owl-nav button.owl-next span:after {
  content: "\f054";
}

.nav-style.owl-carousel .owl-nav button.owl-prev span:after {
  content: "\f053";
}

/*首頁-快速連結*/
.hot-key {
  position: relative;
  z-index: 1;
}

.hot-key ul {
  padding-left: 0;
  list-style: none;
  margin-bottom: 0;
  display: flex;
  overflow: hidden;
  -ms-flex-pack: center;
  justify-content: center;
  box-shadow: 0 2px 12px 2px rgba(0, 0, 0, 0.5);
  /* border-radius: 7rem; */
  /* border: solid 6px #ffffff; */
}

.hot-key ul li {
  border-top: 0;
  width: 25%;
  box-shadow: 0 0px 12px rgba(0, 0, 0, 0.8);
}

.hot-key ul li a {
  text-decoration: none;
  text-align: center;
  padding: 1.5rem 0;
  display: block;
  color: #fff;
}

.hot-key ul li:nth-child(1) {
  background: #447a6a;
}

.hot-key ul li:nth-child(2) {
  background: #9f8f76;
}

.hot-key ul li:nth-child(3) {
  background: #326c9e;
}

.hot-key ul li:nth-child(4) {
  background: #a4426b;
}

.hot-key ul li:nth-child(1):hover {
  background: #2f6152;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.5) inset;
}

.hot-key ul li:nth-child(2):hover {
  background: #807057;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.5) inset;
}

.hot-key ul li:nth-child(3):hover {
  background: #1a5283;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.5) inset;
}

.hot-key ul li:nth-child(4):hover {
  background: #882c52;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.5) inset;
}

.hot-key ul li .icon {
  width: 30px;
  margin: 0 auto;
}

.hot-key ul li .icon img {
  max-width: 100%;
  max-height: 100%;
}

.hot-key ul li h4 {
  font-size: 1.25rem;
  letter-spacing: 2px;
  margin: 0.5rem 0 0;
  o-transition: all 0.3s linear;
  -webkit-transition: all 0.3s linear;
  -moz-transition: all 0.3s linear;
  transition: all 0.3s linear;
}

.hot-key ul li:nth-child(4) h4 br {
  display: none;
}

/*首頁－服務時間*/
.service-time .container {
  padding-top: 3rem;
  padding-bottom: 1rem;
}

.service-time:after {
  content: "";
  clear: both;
  display: block;
}

.service-time .title-box {
  position: relative;
  text-align: center;
}

.service-time .title-box .mj {
  margin-bottom: 2rem;
  font-size: 2rem;
  letter-spacing: 2px;
  font-weight: 400;
  color: #326c9e;
}

.service-time .time {
  position: relative;
  list-style: none;
  padding: 1rem 0;
  margin: 0;
}

.service-time .time .box2 {
  width: 100%;
  text-align: center;
  color: #a4426b;
}

.service-time .time .box1 p {
  display: inline-block;
}

.service-time .time-mj {
  display: inline;
}

.service-time .morning svg path {
  fill: #fce540;
}

.service-time .noon svg path {
  fill: #f39118;
}

.service-time .night svg path {
  fill: #326c9e;
}

.service-time .time-mj span {
  border-radius: 3px;
  margin-left: 10px;
  margin-right: 0.5rem;
  padding: 0.25rem 0.5rem 0 1rem;
  font-size: 1rem;
  letter-spacing: 0.5rem;
  width: 74px;
}

.service-time .morning .time-mj span {
  background: #fce540;
}

.service-time .noon .time-mj span {
  background: #f39118;
}

.service-time .night .time-mj span {
  background: #326c9e;
  color: #fff;
}

.service-time .time .tt {
  width: 72px;
  margin-left: 40px;
  margin-right: 1rem;
  padding: 0.25rem 0.5rem 0 1rem;
  margin-left: 10px;
  margin-right: 0.5rem;
}

/*首頁內容*/
.index .main section {
  padding: 2rem 0;
}

.ix-title {
  position: relative;
  font-size: 2rem;
  margin-bottom: 2rem;
}

.ix-title:before {
  content: "";
  width: 40%;
  border-bottom: solid thin #326c9e;
  position: absolute;
  top: 50%;
  left: 0;
  -o-transition: all 0.3s linear;
  -webkit-transition: all 0.3s linear;
  -moz-transition: all 0.3s linear;
  transition: all 0.3s linear;
}

.ix-title.w-100:before {
  width: 100%;
}

.ix-title span {
  background: #fff;
  padding: 0 10px;
  display: table;
  letter-spacing: 2px;
  font-weight: 400;
  color: #326c9e;
  position: relative;
  z-index: 1;
}

.ix-title span:before {
  content: "";
  display: block;
  width: 0.25rem;
  height: 1.25rem;
  background: #326c9e;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: -1;
}

.ix-title span:after {
  content: "";
  display: block;
  width: 20px;
  height: 4px;
  background: #326c9e;
  position: absolute;
  top: 50%;
  right: -20px;
  transform: translateY(-50%);
}

.ix-title-box {
  display: block;
  clear: both;
  overflow: hidden;
}

.ix-title-box .ix-title {
  float: left;
  width: calc(100% - 100px);
}

.ix-title-box .btn-style {
  float: right;
  margin-top: 2px;
  text-align: center;
  width: 80px;
  min-width: inherit;
  min-height: inherit;
  padding: 0.25rem;
  font-size: 0.9rem;
}

.ix-title-box .ix-title:after {
  content: "";
  opacity: 0;
  position: absolute;
  right: 80%;
  top: 50%;
  width: 5px;
  height: 5px;
  margin-top: -2px;
  border-radius: 100%;
  background: #326c9e;
  -o-transition: all 0.5s ease-in-out;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
}

.ix-title-box:hover .ix-title span:before {
  width: 1.25rem;
  background: #f39118;
}

.ix-title-box:hover .ix-title:before {
  width: 100%;
}

.ix-title-box:hover .ix-title:after {
  right: 0;
  opacity: 1;
}

/*首頁－最新消息*/
.index-news .owl-stage {
  padding-bottom: 0.5em;
}

.index-news .item {
  overflow: hidden;
  padding-bottom: 60px;
  border-radius: 0.5rem;
}

.index-news .item .photo {
  position: relative;
  -o-transition: all 0.3s linear;
  -webkit-transition: all 0.3s linear;
  -moz-transition: all 0.3s linear;
  transition: all 0.3s linear;
}

.index-news .item .info {
  position: relative;
  z-index: 1;
  padding: 0.5rem 0.5rem 0.5rem;
  background: #326c9e;
  color: #fff;
}

.index-news .info .date {
  display: inline-block;
  padding: 0 0.5rem;
  font-size: 0.9rem;
  background: #f39118;
  border-radius: 30px;
}

.index-news .info .view {
  position: absolute;
  right: 0.5rem;
  top: -20px;
  min-width: 40px;
  height: 40px;
  padding: 0.25rem 0.5rem 0;
  border-radius: 3rem;
  background: #fff;
  text-align: center;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
  color: #326c9e;
  line-height: 1;
  font-size: 0.9rem;
}

.index .index-news .owl-nav {
  width: 100%;
  height: 40px;
  margin: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: none;
}

.index .index-news .owl-nav button {
  position: absolute;
  margin: 0;
  outline: none;
}

.index .index-news .owl-nav button:hover {
  background: transparent;
}

.index .index-news .owl-nav button:hover span {
  opacity: 0.5;
}

.index .index-news .owl-nav button {
  display: block;
  font-size: 1.5em;
  height: 36px;
  line-height: 31px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 12px 0 12px 20px;
  border-color: transparent transparent transparent #2f7e20;
}

.index .index-news .owl-nav button span {
  display: none;
}

.index .index-news .owl-nav .owl-prev {
  left: -50px;
  top: 50%;
  transform: translateY(-50%) rotate(-180deg);
}

.index .index-news .owl-nav .owl-next {
  right: -50px;
}

/*首頁－博愛影音*/
.index-video {
  position: relative;
  overflow: hidden;
  z-index: 1;
  background: linear-gradient(135deg, #fff 0%, #e0eff7 100%);
}

.index-video:before,
.index-video:after,
.index-video .container:before,
.index-video .container:after {
  content: "";
  pointer-events: none;
  position: absolute;
  z-index: -1;
  width: 0;
  height: 0;
  border-style: solid;
}

.index-video:before {
  border-width: 320px 10000px 319px 0;
  border-color: transparent rgba(148, 201, 213, 0.4) transparent transparent;
  top: 50%;
  right: 0;
  transform: translateY(-47%);
  z-index: -2;
}

.index-video:after {
  border-width: 320px 0 319px 10000px;
  border-color: transparent transparent transparent rgba(225, 243, 238, 0.5);
  top: 0;
  right: 0;
  transform: translateY(-40%);
  z-index: -3;
}

.index-video .container:before {
  top: 0;
  left: 0;
  border-width: 0 10000px 319px 0;
  border-color: transparent #fff transparent transparent;
}

.index-video .container:after {
  bottom: 0;
  right: 0;
  border-width: 319px 10000px 0 0;
  border-color: transparent rgba(96, 156, 208, 0.3) transparent transparent;
  border-color: transparent rgba(192, 209, 218, 0.72) transparent transparent;
}

.index .main .index-video h2 span {
  background: #eff8f6;
}

.index-video .box-wrap {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
}

.index-video .box {
  width: 60%;
}

.index-video .box+.box {
  width: 40%;
  padding-left: 2rem;
}

.index-video .box .item {
  margin-bottom: 2rem;
}

.index-video .video-wrap {
  position: relative;
  padding: 0;
  overflow: hidden;
}

.index-video .video-wrap a {
  display: block;
  position: relative;
}

.index-video .video-wrap a:before {
  content: "\f144";
  font-weight: 900;
  font-size: 5rem;
  color: rgba(255, 255, 255, 0.9);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  text-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
}

.index-video .btn-wrap {
  margin-top: 1rem;
  margin-bottom: 2rem;
}

/*首頁－衛教專欄*/
.edu {
  position: relative;
  z-index: 1;
  box-shadow: 0 -8px 15px rgba(0, 0, 0, 0.1);
}

.edu ul {
  position: relative;
  list-style: none;
  padding-left: 0;
  margin-bottom: 0;
}

.edu ul:after {
  content: "";
  display: block;
  clear: both;
}

.edu ul li:nth-child(4n) {
  margin-right: 0;
}

.edu .item {
  position: relative;
  text-decoration: none;
  display: block;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  overflow: hidden;
}

.edu ul li:focus,
.edu .item:focus,
.edu ul li .content:focus {
  outline: none;
}

.edu ul li .date {
  background: #326c9e;
  color: #fff;
  display: inline-block;
  vertical-align: middle;
  margin-right: -1rem;
  padding: 0.5rem 1rem;
  text-align: center;
  font-size: 14px;
  line-height: 1;
  z-index: 2;
  border-radius: 3px 0 0 3px;
}

.edu ul li .date span {
  display: block;
  font-size: 1.25rem;
  margin-bottom: 0.25rem;
}

.edu ul li .photo {
  overflow: hidden;
}

.edu ul li .content {
  padding: 1rem;
  background: #fff;
  border: solid thin #f2f2f2;
}

.edu ul li .content h3 {
  font-size: 1.25rem;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-weight: 500;
  margin-top: 0.5rem;
}

.edu ul li .content article {
  height: 25px;
  font-size: 1rem;
  line-height: 1.5;
  margin: 1rem 0 1.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.edu ul li .info {
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  margin-top: 1rem;
  position: relative;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.edu ul li .info span {
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  background: #fff;
  color: #326c9e;
  z-index: 2;
  font-weight: 700;
}

.edu ul li .info i {
  display: inline-block;
  margin-right: 0.25rem;
}

.edu ul li .info span+span {
  margin-left: 1em;
}

/*首頁－活動資訊、學術課程*/
.index .main section.paper {
  padding-top: 0;
}

.index .paper {
  position: relative;
  z-index: 2;
  background: #fff;
}

.index .paper .container {
  display: flex;
}

.index .paper .box {
  width: 50%;
}

.index .paper .box+.box {
  margin-left: 2em;
}

.index .paper .box h2:before {
  width: 100%;
}

.index .paper .box .head a {
  display: flex;
  align-items: self-start;
  text-decoration: none;
}

.index .paper .box .head a:hover .photo {
  -webkit-transform: scale(0.98);
  -ms-transform: scale(0.98);
  transform: scale(0.98);
}

.index .paper .box .head .photo {
  width: 280px;
  overflow: hidden;
  -webkit-transition: all 3s cubic-bezier(0.165, 0.84, 0.44, 1);
  -webkit-transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
  -moz-transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
  -o-transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
  -ms-transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.index .paper .box .head a:hover h3 {
  color: #447a6a;
}

.index .paper .box .head .content {
  width: calc(100% - 300px);
  padding-left: 1.5em;
}

.index .paper .box .head .content h3 {
  font-size: 1.3em;
  font-weight: 500;
}

.index .paper .box .head .content h3 span {
  display: block;
  font-size: 0.85em;
}

.index .paper .box .head .content article {
  line-height: 1.5;
  color: #444;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.index .paper .box ul {
  padding-left: 0;
  list-style: none;
  margin: 1em 0;
}

.index .paper .box ul li {
  border-top: dotted 1px #ddd;
}

.index .paper .box ul li a:after {
  content: "\f105";
  font-weight: 700;
  position: absolute;
  top: 50%;
  right: 1em;
  transform: translateY(-50%);
  transition: all 0.2s linear;
}

.index .paper .box ul li a {
  display: block;
  text-decoration: none;
  position: relative;
  padding: 1em;
  padding-right: 1.8em;
}

.index .paper .box ul li a:hover:after {
  color: #447a6a;
  right: 0.5em;
}

.index .paper .box ul li a:hover h3 {
  color: #447a6a;
}

.index .paper .box ul li h3 {
  font-size: 1em;
  margin-bottom: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.index .paper .box ul li h3 span {
  margin-right: 2em;
}

/*底部選單*/
.index .main section.f-menu {
  padding-top: 0;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
}

.f-menu .item a {
  overflow: hidden;
  display: flex;
  text-decoration: none;
  background: #447a6a;
  border-right: solid 4px #447a6a;
}

.f-menu .item .content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding: 1rem 0 0.5rem;
}

.f-menu .owl-item:nth-child(4n) a {
  background: #a4426b;
  border-color: #a4426b;
}

.f-menu .owl-item:nth-child(4n-1) a {
  background: #326c9e;
  border-color: #326c9e;
}

.f-menu .owl-item:nth-child(4n-2) a {
  background: #9f8f76;
  border-color: #9f8f76;
}

.f-menu .item .content .icon {
  width: 60px;
  height: 60px;
  background: #fff;
  border-radius: 50%;
  max-width: 100%;
  max-height: 100%;
}

.f-menu .item .content p {
  overflow: hidden;
  height: 55px;
  margin: 0;
  margin-top: 0.5em;
  padding-left: 1rem;
  padding-right: 1rem;
  color: #fff;
  text-align: center;
}

.f-menu .item .photo {
  width: 50%;
}

.f-menu .item .photo img {
  max-width: 100%;
  max-height: 100%;
}

.owl-theme .owl-dots .owl-dot.active span,
.owl-theme .owl-dots .owl-dot:hover span {
  background: #447a6a;
}

.index .f-menu .owl-nav {
  width: 100%;
  height: 40px;
  margin: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: none;
}

.owl-theme .owl-dots .owl-dot:focus {
  outline: none;
}

.index .f-menu .owl-nav button {
  position: absolute;
  margin: 0;
  outline: none;
}

.index .f-menu .owl-nav button:hover {
  background: transparent;
}

.index .f-menu .owl-nav button:hover span {
  opacity: 0.5;
}

.index .f-menu .owl-nav button {
  display: block;
  font-size: 1.5em;
  height: 36px;
  line-height: 31px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 12px 0 12px 20px;
  border-color: transparent transparent transparent #2f7e20;
}

.index .f-menu .owl-nav button span {
  display: none;
}

.index .f-menu .owl-nav .owl-prev {
  left: -50px;
  top: 50%;
  transform: translateY(-50%) rotate(-180deg);
}

.index .f-menu .owl-nav .owl-next {
  right: -50px;
}

/*重大訊息框*/
.lotung_mesg {
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: block;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1001;
  -webkit-backdrop-filter: blur(3px);
  backdrop-filter: blur(3px);
}

.lotung_mesg .wrap {
  margin: auto;
  width: 95%;
  background: #f2f2f2;
  left: 0;
  position: absolute;
  left: 50%;
  top: 50%;
  max-width: 1000px;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  box-shadow: 0 3px 1rem rgba(0, 0, 0, 0.5);
  border-radius: 10px;
}

.lotung_mesg .container> :not(.content) {
  width: 100%;
}

.lotung_mesg .wrap .mesg-close {
  border: 0;
  background: #444;
  color: #fff;
  width: 50px !important;
  height: 50px;
  line-height: 50px;
  border-radius: 50px;
  position: absolute;
  top: -25px;
  right: 0;
  outline: none;
  cursor: pointer;
  background: #f39118;
  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.15);
  -o-transition: all 0.3s linear;
  -webkit-transition: all 0.3s linear;
  -moz-transition: all 0.1s linear;
  transition: all 0.1s linear;
}

.lotung_mesg .wrap .mesg-close:hover {
  background: #447a6a;
}

.lotung_mesg .container {
  max-height: 90vh;
  max-width: 1000px;
  padding: 1em;
  position: relative;
  -ms-flex-pack: center;
  justify-content: center;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -ms-flex-line-pack: center;
  align-content: center;
}

.lotung_mesg:not(.mesg_alert) .container {
  overflow: hidden;
  overflow-y: scroll;
}

.lotung_mesg .container:only-child(".photo") {
  display: -ms-block;
  display: block;
}

.lotung_mesg .container .btn-style {
  min-width: 80px;
}

.lotung_mesg .photo {
  text-align: center;
}

.lotung_mesg .content {
  padding: 0;
}

.lotung_mesg .photo img {
  max-width: 100%;
  max-height: 100%;
}

.lotung_mesg .photo+.content {
  width: calc(100% - 400px);
  padding-left: 1.5em;
  text-align: left;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-line-pack: center;
  align-content: center;
}

.lotung_mesg.mesg_alert {
  display: none;
}

.lotung_mesg.mesg_alert.open {
  display: block;
}

.lotung_mesg.mesg_alert .wrap {
  width: auto;
}

/*頁尾*/
footer {
  position: relative;
  background: linear-gradient(135deg, #326c9e 0%, rgba(71, 136, 191, 0.8) 100%),
    url(../../assets/sidebar-bg.png) center/cover;
  font-size: 0.9em;
  color: #fff;
}

footer .container {
  max-width: 1280px;
  display: flex;
  padding-top: 2rem;
  padding-bottom: 2rem;
  align-items: center;
}

footer .container div+div {
  margin-left: 2em;
}

footer h4 {
  font-size: 0.9em;
  border-bottom: solid thin #ddd;
  padding-bottom: 1em;
  margin-bottom: 1em;
  color: #444;
}

footer .awards {
  width: calc(100% / 3);
  margin-bottom: 1em;
}

footer .awards ul {
  list-style: none;
  padding-left: 0;
  margin: 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
}

footer .awards ul:after {
  content: "";
  display: block;
  clear: both;
}

footer .awards ul li {
  max-width: calc(100% / 3);
  display: inline-block;
  margin: 0.5em 0;
  padding: 0 0.8em;
}

footer .awards ul li:nth-child(5n + 1) {
  /* clear:both */
}

footer .awards ul li .photo {
  /* width:90%; */
  /* height: 100%; */
  /* margin: auto; */
  /* text-align: center; */
}

footer .awards .photo img {
  max-width: 100%;
  max-height: 100px;
}

footer .awards ul li p {
  width: calc(100% - 36px);
  font-size: 13px;
  line-height: normal;
  margin-bottom: 0;
  padding: 0 0.5em;
}

footer .foot-map {
  width: calc(100% / 3);
}

footer .foot-map iframe {
  width: 100%;
  height: 130px;
}

footer .foot-map a:hover {
  color: #fff;
  text-decoration: underline;
}

footer .foot-contact {
  width: calc(100% / 3);
  border-left: solid thin rgba(255, 255, 255, 0.2);
  border-right: solid thin rgba(255, 255, 255, 0.2);
}

footer .foot-contact>ul {
  list-style: none;
  padding-left: 0;
  margin: 1rem 0;
  display: flex;
  justify-content: space-around;
}

footer .foot-contact p {
  margin: 0;
  font-size: 0.9em;
  padding-left: 1em;
  border-top: solid thin #ddd;
  padding-top: 1em;
}

footer .foot-contact li.mb_block {
  display: none;
}

footer .foot-contact ul li a {
  text-decoration: none;
  display: block;
  text-align: center;
  transition: none;
  padding: 10px;
  -o-transition: all 0.3s linear;
  -webkit-transition: all 0.3s linear;
  -moz-transition: all 0.3s linear;
  transition: all 0.3s linear;
}

footer .foot-contact ul li i {
  font-size: 30px;
  margin-bottom: 0.2em;
  display: block;
  -o-transition: all 0.3s linear;
  -webkit-transition: all 0.3s linear;
  -moz-transition: all 0.3s linear;
  transition: all 0.3s linear;
}

.copyright {
  background: #326c9e;
  color: #fff;
  /* text-align:center; */
  /* padding:.5rem 15px; */
  font-size: 0.9rem;
}

.copyright .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  /* max-width: 800px; */
}

.copyright a {
  color: #fff;
}

.copyright p {
  margin-bottom: 0;
}

.tools-mb {
  display: none;
}

/*右側選單*/
.btn-right {
  text-align: center;
  position: fixed;
  right: 5px;
  bottom: 90px;
  /* transform:translateY(-50%); */
  z-index: 10;
}

.btn-right ul {
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  border-radius: 0.75rem 0 0 0.75rem;
  overflow: hidden;
}

.btn-right ul li {
  background: #326c9e;
  -o-transition: all 0.3s linear;
  -webkit-transition: all 0.3s linear;
  -moz-transition: all 0.3s linear;
  transition: all 0.3s linear;
}

.btn-right ul li+li:before {
  content: "";
  width: 60%;
  display: block;
  margin: 0 auto;
  border-top: solid thin #fff;
}

.btn-right ul li:hover {
  background: #326c9e;
}

.btn-right ul li:nth-child(3) {
  min-height: 60px;
  cursor: pointer;
  position: relative;
}

.btn-right ul li a {
  display: block;
  padding: 1rem 0.75rem;
  color: #fff;
  display: block;
  text-decoration: none;
  text-align: center;
}

.btn-right ul li .icon {
  width: 30px;
  margin: 0 auto;
}

.btn-right ul li h4 {
  font-size: 1em;
  letter-spacing: 2px;
  margin: 0.5em auto 0;
}

.btn-right ul li h4 span {
  display: block;
  width: 19px;
  word-break: break-all;
  text-align: center;
  letter-spacing: 0;
  margin: auto;
}

.btn-right ul li .icon img {
  max-width: 100%;
  max-height: 100%;
}

.btn-right ul li i {
  color: #fff;
  font-size: 1.2em;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#gotop {
  display: none;
  cursor: pointer;
  position: fixed;
  right: 5px;
  bottom: 20px;
  z-index: 2;
  width: 50px;
  height: 50px;
  background: #447a6a;
  border-radius: 100%;
  color: #fff;
  text-align: center;
  line-height: 50px;
}

#gotop:hover {
  background: #2f6152;
}

#gotop:hover i {
  transform: translate(0, -50%);
}

/*內頁架構*/
.m-wrap {
  padding-bottom: 3rem;
}

.container {
  max-width: 1300px;
  padding: 0 2rem;
}

/*內頁形象*/
.banner .container {
  position: relative;
  height: 160px;
}

.banner h2 {
  display: inline-block;
  margin-bottom: 0;
  font-size: 1.6em;
  text-align: center;
  padding: 5px 10px;
  background: #326c9e;
  color: #fff;
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
}

.banner h2:before {
  content: "";
  width: 2px;
  height: 100%;
  background: #326c9e;
  position: absolute;
  left: -5px;
  top: 0;
}

/*分頁*/
.pagination {
  justify-content: center;
  margin: 2em 0 0;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.pagination .page-item {
  margin-bottom: 0.5em;
}

.pagination .page-item+.page-item {
  margin-left: 0.5em;
}

.pagination .page-item .page-link,
.page-item:first-child .page-link {
  border-radius: 0;
}

.pagination .page-item .page-link {
  border-color: #ddd;
  color: #447a6a;
  border-radius: 50px;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  padding: 0;
}

.pagination .page-item .page-link.ten {
  width: auto;
  padding-left: 5px;
  padding-right: 5px;
  font-size: 0.8rem;
}

.page-item.active .page-link {
  background: #447a6a;
  color: #fff;
  border-color: #447a6a;
}

.page-item.disabled .page-link {
  color: #6c757d;
}

/*RWD編輯器表格(X捲軸)*/
.table-container table td {
  min-width: 100px;
  padding: 5px;
  border: 1px solid #ccc;
  white-space: inherit;
}

.table-container {
  overflow-x: scroll;
}

@media screen and (max-width: 768px) {
  .table-container {
    width: 100%;
    overflow-y: auto;
    overflow: auto;
    margin: 0 0 1em;
  }

  .table-container .table {
    min-width: 600px;
  }
}

/*小類列表*/
[class$="paper-item"] ul {
  padding-left: 0;
  list-style: none;
  margin-bottom: 0;
}

[class$="paper-item"] ul:after {
  content: "";
  display: block;
  clear: both;
}

[class$="paper-item"] .item {
  position: relative;
  display: block;
  margin-bottom: 2rem;
  text-decoration: none;
  text-align: center;
  /* border-radius: 1rem; */
  overflow: hidden;
}

[class$="paper-item"] .item:hover .photo img {
  opacity: 0.6;
}

[class$="paper-item"] .item h3 {
  position: absolute;
  left: 0;
  bottom: 0;
  margin-bottom: 0;
  width: 100%;
  font-size: 1.5rem;
  padding: 4rem 0 0.5rem;
  background: -moz-linear-gradient(top,
      rgba(50, 108, 158, 0) 0%,
      rgba(50, 108, 158, 0.9) 85%,
      rgba(50, 108, 158, 0.9) 100%);
  background: -webkit-linear-gradient(top,
      rgba(50, 108, 158, 0) 0%,
      rgba(50, 108, 158, 0.9) 85%,
      rgba(50, 108, 158, 0.9) 100%);
  background: linear-gradient(to bottom,
      rgba(50, 108, 158, 0) 0%,
      rgba(50, 108, 158, 0.9) 85%,
      rgba(50, 108, 158, 0.9) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00326c9e', endColorstr='#e6326c9e', GradientType=0);
  color: #fff;
}

[class$="paper-item"] .item .btn-style {
  opacity: 0;
  position: absolute;
  left: 50%;
  top: 50%;
  -ms-transform: translate(-50%, 50%);
  -webkit-transform: translate(-50%, 50%);
  transform: translate(-50%, 50%);
}

[class$="paper-item"] .item:hover .btn-style {
  opacity: 1;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

/*圖文底層六文六圖*/
.page-content table {
  max-width: 100%;
}

.page-content ol,
.page-content ul {
  padding-left: 1.2em;
}

.page-content .photo img {
  max-width: 100%;
  max-height: 100%;
  border-radius: 1rem;
}

.page-content p:last-child {
  margin-bottom: 0;
}

.page-content .photo img {
  position: relative;
}

.page-content .photo img+article {
  font-size: 0.9rem;
  line-height: 1.5;
  text-align: left;
  margin: 1rem auto 0;
  color: #666;
  padding: 10px;
  position: relative;
  background: #eee;
  background: #f7f8f9;
}

.page-content .photo img+article:before {
  content: "";
  width: 6px;
  height: 40%;
  position: absolute;
  top: 50%;
  left: 0;
  background: #326c9e;
  background: linear-gradient(135deg, #326c9e 0%, rgba(71, 136, 191, 0.8) 100%),
    url(../../assets/sidebar-bg.png) center/cover;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.page-content .photo img+article:first-of-type:first-letter {
  padding: 0 0.25rem 0 0;
  font-size: 150%;
  display: inline-block;
  vertical-align: middle;
  font-weight: 700;
  color: #326c9e;
}

.page-content .photo {
  margin-left: auto;
  margin-right: auto;
  max-width: 650px;
  text-align: center;
}

.page-content .content+.photo,
.page-content .photo+.content {
  margin: 2rem auto;
}

/*編輯器表格設定*/
.page-content a,
.copywriting-body a,
.editor_area a {
  color: #2980b9;
  font-weight: 700;
}

.page-content a:hover,
.copywriting-body a:hover,
.editor_area a:hover {
  opacity: 0.7;
  text-decoration: underline;
}

/*圖文小圖*/
.tx02 .photo {
  margin: 0 auto;
}

.tx03:after {
  content: "";
  display: block;
  clear: both;
}

.tx03 .photo {
  max-width: 400px;
  margin-bottom: 1rem;
  padding: 0 1rem;
  text-align: center;
}

.tx03 .photo img {
  position: static;
  position: sticky;
  top: 100px;
}

.tx03+.video {
  margin-top: 2rem;
}

.page-content .video+.tx01 {
  margin-top: 2rem;
}

.video .v-link {
  margin-top: 1rem;
  font-size: 0.95rem;
  text-align: right;
}

/*列表*/
[class$="paper-item"] .item .photo img,
[class$="photo-list"]:not(.dl-photo-list) a .photo img,
[class$="photo-list2"] a .photo img {
  max-width: 100%;
  max-height: 100%;
  -webkit-transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
  -moz-transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
  -o-transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
  -ms-transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
}

[class$="paper-item"] .item:hover .photo img,
[class$="photo-list"]:not(.dl-photo-list) a:hover .photo img,
[class$="photo-list2"] a:hover .photo img {
  -webkit-transform: scale(1.05);
  -ms-transform: scale(1.05);
  transform: scale(1.05);
}

/*列表1*/
[class$="title-list"] {
  max-width: 1100px;
  margin: 0 auto;
}

[class$="title-list"] ul {
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}

[class$="title-list"] a {
  background: #f6f6f6;
  display: block;
  text-decoration: none;
  padding: 2.25rem 1rem 1rem;
  margin-bottom: 2rem;
  position: relative;
}

[class$="title-list"] a .tags {
  padding: 0.3em;
  font-size: 0.9rem;
  color: #fff;
  display: table;
  margin: 0 auto;
}

[class$="title-list"] a h2 {
  padding: 0.5rem 0;
  margin-bottom: 1rem;
  word-break: break-word;
  border-bottom: solid 1px #ddd;
}

[class$="title-list"] a h2 span {
  display: table;
  background: #8bbd33;
  color: #fff;
  font-size: 0.9rem;
  font-weight: 400;
  padding: 0.2em 0.4em;
  position: absolute;
  top: 0;
  font-weight: 100;
  margin: 0.5rem 0 1rem;
  padding: 4px 8px;
  border-radius: 30px;
  font-size: 0.9rem;
  background: #326c9e;
  color: #fff;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.15);
}

[class$="title-list"] .content {
  width: 100%;
  padding-right: 2rem;
  border-right: solid 4px #326c9e;
}

[class$="title-list"] .content .info {
  font-size: 0.9rem;
  color: #666;
  margin-top: 2em;
}

[class$="title-list"] .content .info li {
  display: inline-block;
  margin-right: 1em;
}

[class$="title-list"] .content .info li i {
  margin-right: 0.2em;
}

[class$="title-list"] a .more {
  width: 120px;
  text-align: center;
  border-left: solid 5px #fff;
  color: #777;
  transition: all 0.3s linear;
  display: none;
}

/*列表2*/
[class$="title-list2"] ul {
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}

[class$="title-list2"]>ul:after {
  content: "";
  display: block;
  clear: both;
}

[class$="title-list2"]>ul>li {
  width: calc(100% / 2 - 15px);
  float: left;
  margin-right: 30px;
  margin-bottom: 25px;
}

[class$="title-list2"]>ul>li:nth-child(2n) {
  margin-right: 0;
}

[class$="title-list2"]>ul>li a {
  display: block;
  text-decoration: none;
  background: #f7f7f7;
  padding: 2.5rem 2rem;
  padding-right: 45px;
  border-left: solid 5px #326c9e;
  position: relative;
  border-radius: 0;
  border-bottom-right-radius: 1rem;
}

[class$="title-list2"]>ul>li a:after {
  content: "";
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 40px 40px 0;
  border-color: transparent #326c9e transparent transparent;
  position: absolute;
  top: 0;
  right: 0;
  -o-transition: all 0.3s linear;
  -webkit-transition: all 0.3s linear;
  -moz-transition: all 0.3s linear;
  transition: all 0.1s linear;
}

[class$="title-list2"] .date {
  display: inline-block;
  font-size: 0.9rem;
  padding: 2px 10px;
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  letter-spacing: 0.05rem;
  border-top: solid 1px #326c9e;
}

[class$="title-list2"] .content {
  transition: all 0.2s linear;
}

[class$="title-list2"] .content h2 {
  margin-bottom: 0;
  height: 50px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

[class$="title-list2"] .content article {
  line-height: normal;
  margin: 1.25rem 0;
  font-size: 0.9rem;
  height: 40px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

[class$="title-list2"] .content ul {
  font-size: 0.9rem;
  margin-top: 0.25rem;
  color: #666;
}

[class$="title-list2"] .content ul li {
  display: inline-block;
  margin-right: 1em;
}

[class$="title-list2"] .content ul li i {
  margin-right: 0.25rem;
}

/*列表3*/
[class$="photo-list"]:not(.dl-photo-list) {
  max-width: 1100px;
  margin: 0 auto;
}

[class$="photo-list"]:not(.dl-photo-list)>ul {
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}

[class$="photo-list"]:not(.dl-photo-list) a {
  width: 100%;
  margin-bottom: 2rem;
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

[class$="photo-list"]:not(.dl-photo-list) a .photo {
  width: 340px;
  overflow: hidden;
}

[class$="photo-list"]:not(.dl-photo-list) a .photo img {
  max-width: 100%;
  max-height: 100%;
}

[class$="photo-list"]:not(.dl-photo-list) a .photo+.content {
  width: calc(100% - 340px);
}

[class$="photo-list"]:not(.dl-photo-list) a .content {
  width: 100%;
  padding: 2rem 2rem 0;
}

[class$="photo-list"]:not(.dl-photo-list) a .content article {
  font-size: 1rem;
  line-height: 1.5;
  color: #666;
  margin-bottom: 1em;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

[class$="photo-list"]:not(.dl-photo-list) a .date {
  display: block;
  color: #326c9e;
  padding: 0;
  font-size: 0.9rem;
  margin: 0 auto;
}

[class$="photo-list"]:not(.dl-photo-list) a .date span {
  position: relative;
  margin-left: 10px;
  padding-left: 10px;
}

[class$="photo-list"]:not(.dl-photo-list) a .date span:before {
  content: "";
  width: 2px;
  height: 70%;
  background: #326c9e;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}

[class$="photo-list"]:not(.dl-photo-list) a h2 {
  display: inline-block;
  margin: 1rem 0;
  word-break: break-word;
  background: -moz-linear-gradient(top,
      rgba(255, 255, 255, 0) 0%,
      rgba(242, 242, 242, 0) 59%,
      rgba(255, 237, 180, 1) 60%,
      rgba(255, 237, 180, 1) 100%);
  background: -webkit-linear-gradient(top,
      rgba(255, 255, 255, 0) 0%,
      rgba(242, 242, 242, 0) 59%,
      rgba(255, 237, 180, 1) 60%,
      rgba(255, 237, 180, 1) 100%);
  background: linear-gradient(to bottom,
      rgba(255, 255, 255, 0) 0%,
      rgba(242, 242, 242, 0) 59%,
      rgba(255, 237, 180, 1) 60%,
      rgba(255, 237, 180, 1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00ffffff', endColorstr='#ffedb4', GradientType=0);
}

[class$="photo-list"]:not(.dl-photo-list) a:hover {
  text-decoration: none;
  background: #f7f7f7;
}

[class$="photo-list"] ul li h2 {
  overflow: hidden;
  text-overflow: ellipsis;
}

.news-photo-list ul li .content {
  flex-direction: column-reverse;
  justify-content: flex-end;
}

.pp-photo-list ul li h2+p {
  margin-top: 1em;
}

.pp-photo-list ul li p {
  font-size: 0.9rem;
  line-height: 1.8;
  color: #777;
}

.pp-photo-list ul li .other {
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  line-height: normal;
}

.pp-photo-list ul li .other i {
  margin: 0 0.3em 0 0.5em;
}

/*列表4*/
[class$="photo-list2"] ul {
  list-style: none;
  padding-left: 0;
  margin-bottom: 0;
  display: flex;
  flex-wrap: wrap;
}

[class$="photo-list2"] .item {
  margin-bottom: 2rem;
}

[class$="photo-list2"] a {
  text-decoration: none;
  display: block;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
}

[class$="photo-list2"] a .photo {
  overflow: hidden;
}

[class$="photo-list2"] a .content {
  padding: 1rem;
}

[class$="photo-list2"] a .content h2 {
  margin: 0.5em 0;
  word-break: break-word;
}

[class$="photo-list2"] a .content h2 span {
  color: #fff;
  font-size: 0.9rem;
  font-weight: 400;
  padding: 5px;
  display: table;
}

[class$="photo-list2"] .info {
  font-size: 0.9rem;
  color: #636363;
  margin-bottom: 1em;
}

[class$="photo-list2"] .info li {
  display: inline-block;
}

[class$="photo-list2"] .info li:not(:last-child) {
  margin-right: 0.5em;
}

[class$="photo-list2"] .info li i {
  margin-right: 0.2em;
}

[class$="photo-list2"] article {
  font-size: 0.9rem;
  /* border-bottom:solid 3px #e0e0e0; */
  /* padding-bottom:1em; */
  margin-bottom: 1em;
  position: relative;
  height: 30px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

[class$="photo-list2"] article:before {
  content: "";
  display: block;
  width: 0;
  height: 3px;
  background: #447a6a;
  position: absolute;
  bottom: 0;
  right: 0;
  transition: all 0.2s linear;
}

[class$="photo-list2"] article:after {
  display: block;
  content: "";
  position: absolute;
  z-index: -1;
  left: 0;
  bottom: 0;
  width: 100%;
  border-bottom: solid 3px #e0e0e0;
}

[class$="photo-list2"] .tags {
  background: #8bbd33;
  color: #fff;
  display: inline-block;
  padding: 0.25rem 0.5rem;
  font-size: 0.9rem;
  border-radius: 3px;
}

[class$="photo-list2"] a:hover h2 {
  color: #447a6a;
}

[class$="photo-list2"] a:hover .photo img {
  opacity: 0.8;
}

[class$="photo-list2"] a:hover article:before {
  width: 100%;
  right: auto;
  left: 0;
}

/*底層*/
.news-detail.detail2>*,
.news-detail.detail3>* {
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}

.tx03> :only-child {
  width: 100%;
}

.news-detail .d-social {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  font-size: 1rem;
  color: #326c9e;
}

.news-detail .d-social .date {
  display: inline-block;
}

.news-detail .d-social i {
  margin-right: 0.25rem;
}

.news-detail.detail1 .d-social {
  display: block;
  text-align: right;
}

.news-detail .info {
  display: inline-block;
}

.news-detail .info ul {
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}

.news-detail .info ul li {
  display: inline-block;
  margin-left: 0.5rem;
}

.news-detail+.btn-wrap {
  margin-top: 2em;
}

.page-content {
  font-size: 1.25rem;
}

.page-content img {
  max-width: 100%;
  height: auto !important;
}

.page-content table,
.editor_area table {
  width: 100% !important;
  border-left: solid 1px #ccc;
  border-top: solid 1px #ccc;
}

.page-content tr>*,
.editor_area tr>* {
  padding: 0.5rem;
  border-right: solid 1px #ccc;
  border-bottom: solid 1px #ccc;
}

.page-content th,
.editor_area th {
  background: #dde8ef;
}

.page-content tbody th,
.editor_area tbody th {
  background: #e8f0f5;
}

.page-content tbody tr,
.editor_area tbody tr {
  background: #fff;
}

.page-content tbody tr:nth-child(odd),
.editor_area tbody tr:nth-child(odd) {
  background: #f4f8fb;
}

/*標題*/
.m-wrap .detail_title1 {
  padding: 1rem 1rem 0;
  color: #326c9e;
  border-bottom: solid 1px #326c9e;
}

.m-wrap .detail_title1 .mjTitle {
  display: inline-block;
  padding-bottom: 0.25rem;
  border-bottom: solid 2px #326c9e;
}

.m-wrap .mjTitle {
  font-size: 1.75rem;
  display: block;
  margin-bottom: 0;
  position: relative;
}

.m-wrap .mjTitle span {
  display: block;
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.m-wrap .mjTitle span strong {
  position: relative;
  padding-left: 10px;
  margin-left: 10px;
}

.m-wrap .mjTitle span strong:before {
  content: "";
  width: 1px;
  height: 70%;
  background: #000;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}

.m-wrap .mjTitle .note-group {
  vertical-align: top;
  font-size: 1rem;
  margin-top: 1rem;
}

.m-wrap .title2 .mjTitle:after {
  content: "";
  display: block;
  clear: both;
  overflow: hidden;
}

.m-wrap .mjTitle .note {
  margin-bottom: 0;
}

.m-wrap .detail_title2 .mjTitle {
  display: block;
  padding: 1.5rem 0 1.2rem 1rem;
  margin-bottom: 0.5em;
  border-top: solid thin #ddd;
  border-bottom: solid thin #ddd;
  position: relative;
}

.m-wrap .detail_title2 .mjTitle:after {
  content: "";
  display: block;
  width: 6px;
  height: 30px;
  background: #447a6a;
  position: absolute;
  left: -3px;
  top: 50%;
  margin-top: -15px;
}

.m-wrap .detail_title3 {
  position: relative;
  padding: 1.5rem 1rem 1.2rem;
  border: solid 1px #326c9e;
  text-align: center;
  color: #326c9e;
}

.news-detail .detail_title3+.d-social {
  margin-top: 0.5rem;
}

.m-wrap [class^="title"] .mjTitle {
  font-size: 1.75rem;
  font-weight: 400;
}

.m-wrap .title2 .mjTitle {
  display: block;
  padding: 1.5rem 0 1.2rem;
  margin-bottom: 2rem;
  border-top: solid thin #ddd;
  border-bottom: solid thin #ddd;
  position: relative;
}

.m-wrap .title2 .mjTitle+small {
  display: block;
  margin-top: -1rem;
}

.m-wrap .title2 .mjTitle:before {
  content: "";
  display: block;
  width: 40px;
  height: 4px;
  background: #447a6a;
  position: absolute;
  top: -3px;
  left: 0;
}

.m-wrap .detail_title1 .mjTitle span {
  display: inline-block;
  background: #326c9e;
  color: #fff;
  padding: 3px 0.75rem 1px;
  border-radius: 1rem;
  font-weight: 400;
}

.m-wrap .detail_title1 .mjTitle span strong:before {
  background: #fff;
}

/*.m-wrap .title2 .mjTitle small{font-size:60%}*/
/*醫生列表*/
.doctor-item ul {
  padding-left: 0;
  list-style: none;
  margin-bottom: 0;
}

.doctor-item ul:after {
  content: "";
  display: block;
  clear: both;
}

.doctor-item ul li {
  width: calc(100% / 2 - 4rem);
  float: left;
  margin-right: 4rem;
  margin-bottom: 4rem;
}

.doctor-item ul li:nth-child(2n) {
  margin-right: 0;
}

.doctor-item ul li:nth-child(2n + 1) {
  clear: both;
}

.doctor-item ul li a {
  display: flex;
  flex-wrap: wrap;
  text-decoration: none;
}

.doctor-item ul li a:hover h3:after {
  transform: translateX(0);
  opacity: 1;
}

.doctor-item .photo {
  margin: 0 auto;
  position: relative;
  -o-transition: all 0.3s linear;
  -webkit-transition: all 0.3s linear;
  -moz-transition: all 0.3s linear;
  transition: all 0.3s linear;
}

.doctor-item .photo .photo-box {
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  background: #eee;
  border: solid 4px #fff;
  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.15);
}

.doctor-item .photo .more-link {
  width: 100%;
  display: none;
  margin-top: 0.5rem;
}

.doctor-item ul li .photo img {
  max-width: 100%;
  max-height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.doctor-item ul li .t-name {
  display: flex;
  align-items: center;
  border-bottom: solid thin #dcdcdc;
  padding-left: 1rem;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
}

.doctor-item .more-link {
  display: inline-block;
  font-size: 1rem;
  padding: 0.25rem 0;
  margin-left: 0.5rem;
}

.doctor-item .more-link span {
  display: inline-block;
  font-weight: 100;
  margin: 0 0.25rem;
  padding: 0.25rem 0.5rem;
  border-radius: 3px;
  font-size: 0.9rem;
  background: #326c9e;
  color: #fff;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.15);
}

.doctor-item ul li:hover .photo {
  -webkit-transform: scale(0.95);
  -ms-transform: scale(0.95);
  transform: scale(0.95);
}

.doctor-item ul li:hover .d-link span {
  background: #f39118;
}

.doctor-item ul li h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #447a6a;
  margin-bottom: 0;
}

.doctor-item ul li h3 span {
  display: inline-block;
  font-size: 1rem;
  margin-left: 0.5rem;
}

.doctor-item ul li .content {
  width: calc(100% - 200px);
  margin-top: 1em;
}

.doctor-item ul li p {
  padding-left: 1.5rem;
}

/*醫生底層*/
.doctor-detail .box {
  display: flex;
  align-items: center;
  justify-content: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.doctor-detail .box .title {
  font-size: 2rem;
}

.doctor-detail .box .title span,
.doctor-detail .box .title h1 span {
  display: inline-block;
  padding-left: 1rem;
  font-weight: 700;
}

.doctor-detail .box .title h1 {
  font-size: 1em;
  margin-bottom: 0;
  border-top: solid thin #5e5e5e;
  padding-left: 3rem;
  padding-top: 1rem;
  margin-top: 0.25rem;
}

.doctor-detail .box .title h1 span {
  font-size: 1rem;
  color: inherit;
}

.doctor-detail .box .photo {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  border: solid 4px #fff;
  position: relative;
  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.15);
  text-align: center;
}

.doctor-detail .box .photo img {
  max-width: 100%;
  max-height: 100%;
}

.doctor-detail .box .content {
  width: 360px;
}

.doctor-detail .box .content button {
  margin: 0;
  margin-top: 2rem;
  margin-left: 3rem;
}

.doctor-detail .info {
  margin: 2rem auto;
  text-align: center;
}

.doctor-detail .info .item {
  position: relative;
  display: inline-block;
  vertical-align: top;
  width: 350px;
  min-height: 130px;
  margin: 0 0.5rem 1rem;
  padding: 0 1.5rem 1rem;
  text-align: left;
}

.doctor-detail .info .item * {
  text-align: left !important;
}

.doctor-detail .info .item h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #447a6a;
  border-bottom: solid 1px #447a6a;
  margin: 0.5rem 0;
}

.doctor-detail .info .item h3:after {
  content: "";
  display: block;
  width: 20px;
  height: 2px;
  background: #447a6a;
}

.doctor-detail .info .item .txt-edit {
  margin-bottom: 0;
  font-size: 1em;
  text-align: left;
}

.doctor-awards {
  background: #f6f6f6;
}

.doctor-awards .btn-wrap {
  margin-top: 30px;
}

.doctor-awards .container {
  max-width: 1000px;
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.doctor-awards h3 {
  font-size: 1.6rem;
  font-weight: 700;
  color: #447a6a;
  margin-bottom: 1rem;
}

.doctor-awards .item {
  display: flex;
  max-width: 900px;
  margin: 0 auto;
  padding: 0;
  background: #fff;
  border-right: solid 4px #326c9e;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.doctor-awards .item:hover .photo img {
  transform: scale(1.1);
}

.doctor-awards .item+.item {
  margin-top: 2rem;
}

.doctor-awards .item .photo {
  width: 400px;
  overflow: hidden;
}

.doctor-awards .item .photo img {
  max-width: 100%;
  max-height: 100%;
  transition: all 0.3s linear;
}

.doctor-awards .item .photo+.content {
  position: relative;
  width: calc(100% - 400px);
  padding-bottom: 4rem;
}

.doctor-awards .item .photo+.content .btn-style2 {
  position: absolute;
  right: 1.5rem;
  bottom: 2rem;
}

.doctor-awards .item .content {
  width: 100%;
  padding: 1.5rem;
}

.doctor-awards .item .content .date {
  font-size: 0.9rem;
  color: #326c9e;
  font-weight: 700;
}

.doctor-awards .item .content h2 {
  width: 100%;
  font-size: 1.25rem;
  font-weight: 700;
}

.doctor-awards .item .content p {
  width: 100%;
  font-size: 1rem;
  margin-bottom: 0;
  padding-bottom: 1rem;
}

.doctor-awards .item .content .btn-style2 {
  -ms-flex-item-align: end;
  align-self: flex-end;
}

.doctor-awards .item:hover {
  background: #e7edf2;
}

.doctor-awards .item:hover .content h2 {
  color: #326c9e;
}

.doctor-awards .item:hover .btn-style2 span {
  color: #326c9e;
  font-weight: 700;
  background: #e7edf2;
}

/*羅東大使訊息*/
.doll-tips {
  width: 100%;
  max-width: 800px;
  margin: 2rem auto;
}

.doll-tips .content {
  position: relative;
  padding-top: 1rem;
}

.doll-tips .content article {
  display: block;
  min-height: 80px;
  margin-left: auto;
  border: solid 2px #447a6a;
  padding: 1.25rem;
  border-radius: 1rem;
}

.doll-tips .content article a {
  text-decoration: underline;
  color: #0023ff;
}

.doll-tips .slogn {
  display: block;
  text-align: center;
  font-weight: 700;
  letter-spacing: 5px;
  padding-left: 5px;
  color: #447a6a;
  margin-top: 0.5rem;
}

/*藥品查詢*/
.drug .search-bar {
  margin: 2rem auto;
  padding: 2rem;
}

.drug .search-bar .item {
  width: 100%;
}

.drug .search-bar .item-box {
  display: flex;
  align-items: center;
  border-bottom: dotted 1px #ddd;
  margin-bottom: 1rem;
  padding: 0 4em;
}

.drug .search-bar .item-box:last-child {
  border-bottom: 0;
}

.drug .search-bar .item-box>label {
  display: block;
  width: 160px;
  margin-bottom: 0;
}

.drug .search-bar .item-box input[type="text"] {
  padding: 0 1rem;
  width: 100%;
  height: 44px;
  border: solid thin #ddd;
  border-radius: 3px;
  background: #fff;
  outline: none;
  transition: all 0.3s linear;
}

.drug .search-bar .item-box .option {
  width: calc(100% - 160px);
}

.drug .search-bar .item-box .option ul {
  padding-left: 0;
  list-style: none;
  margin-bottom: 0;
  display: flex;
  flex-wrap: wrap;
}

.drug .search-bar .item-box .option ul:after {
  content: "";
  display: block;
  clear: both;
}

.drug .search-bar .item-box .option ul li {
  min-width: 100px;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}

.drug .search-bar .item-box .option ul li:hover label {
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
}

.drug .search-bar .item-box .option ul li label {
  margin-bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: solid thin #ddd;
  cursor: pointer;
  font-size: 1rem;
}

.drug .search-bar .item-box .option ul li label img {
  width: 30px;
  height: auto;
  margin-left: 3px;
}

.drug .search-bar .item-box .option ul li label span {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: solid thin #bbb;
  border-radius: 100%;
  margin-left: 0.5rem;
}

.drug .search-bar .item-box .option ul li input[type="radio"] {
  display: none;
}

.drug .search-bar .item-box .option ul li.on label {
  margin-top: -1px;
  border: solid 1px #447a6a;
  background: rgba(130, 243, 210, 0.15);
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
}

.drug .search-bar .item-box .option ul li.on label span:after {
  display: none;
}

.drug .search-result {
  margin: 40px auto 0;
}

.drug .search-result p {
  text-align: center;
  font-weight: 700;
}

.drug .search-result-wrap table {
  width: 100%;
  font-size: 1rem;
}

.drug .search-result-wrap table thead tr {
  border-top: solid thin #ddd;
  border-bottom: solid thin #ddd;
  font-weight: 700;
  color: #447a6a;
}

.drug .search-result-wrap table thead td {
  border: 0;
}

.drug .search-result-wrap table td {
  padding: 6px;
  text-align: center;
  border-right: solid thin #ddd;
  border-bottom: solid thin #ddd;
}

.drug .search-result-wrap table td:last-child {
  border-right: 0;
}

.drug .search-result-wrap table td button {
  border-radius: 50px;
  border: solid 2px #326c9e;
  background: #326c9e;
  color: #fff;
  min-width: 100px;
  height: 36px;
  padding: 0 10px;
  outline: none;
  cursor: pointer;
}

.drug .search-result-wrap table td button:hover {
  background: transparent;
  color: #326c9e;
}

/*用藥查詢底層*/
.drug-detail button {
  margin-top: 3em;
}

.drug-detail .img-wrap {
  display: flex;
  width: 100%;
  justify-content: center;
  max-width: 900px;
  margin: 2rem auto;
}

.drug-detail .img-wrap .item {
  width: calc(100% / 3);
  text-align: center;
}

.drug-detail .img-wrap .item+.item {
  margin-left: 1em;
}

.drug-detail .img-wrap .item img {
  max-width: 100%;
  max-height: 100%;
  border: solid thin #fff;
  box-shadow: 0 10px 10px -8px #aaa;
}

.drug-detail .img-wrap .item:hover img {
  opacity: 0.9;
}

.drug-detail .drug-info {
  width: 100%;
  margin: 2rem 0;
}

.drug-detail .drug-info tr td {
  padding: 0.5rem;
  text-align: center;
}

.drug-detail .drug-info tr:nth-child(odd) {
  background: #eef5f3;
}

.drug-detail .drug-info tr td:nth-child(odd) {
  background: #447a6a;
  color: #fff;
  border-bottom: solid 1px #ddd;
}

.drug-detail .drug-content .txt {
  border: solid thin rgba(6, 110, 77, 0.5);
  border-radius: 0.5rem;
  padding: 2rem 1rem;
  position: relative;
}

.drug-detail .drug-content .txt+.txt {
  margin-top: 2em;
}

.drug-detail .drug-content .txt h3 {
  font-weight: 700;
  background: #fff;
  color: #447a6a;
  display: table;
  padding: 0 0.5em;
  margin-bottom: 0;
  position: absolute;
  top: -13px;
  left: 0.5em;
}

.drug-detail .drug-content .txt section p:last-child {
  margin-bottom: 0;
}

.drug-detail .drug-content .txt section ol,
.drug-detail .drug-info .content section ul {
  padding-left: 1em;
  margin-bottom: 0;
}

/*檔案下載*/
.download {
  padding: 0;
  list-style: none;
}

.download:after {
  content: "";
  display: block;
  clear: both;
}

.download .item {
  margin-bottom: 2rem;
}

.download .item a {
  display: block;
  padding: 1rem 4rem 1rem 1.5rem;
  border-radius: 100px;
  border: solid 1px #ddd;
}

.download .item a:hover,
.download .item a:hover:after,
.download .item a:hover:before {
  color: #326c9e;
  background: #eef5f3;
}

.download a:hover,
.download .itemlist a:hover:after,
.download .itemlist .item_box a:hover:before {
  color: #326c9e;
}

.download .item a:after,
.download .item a:before {
  content: "\f358";
  font-weight: 700;
  color: #447a6a;
  font-size: 2rem;
  line-height: 1;
  top: 50%;
  right: 0.5em;
  margin-top: -1rem;
}

/*博愛影音列表*/
.video-list {
  padding: 0;
  list-style: none;
}

.video-list a {
  display: block;
  position: relative;
  margin-bottom: 2rem;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
}

.video-list .photo {
  position: relative;
  text-align: center;
}

.video-list .photo:before {
  opacity: 0;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg,
      rgba(242, 255, 241, 0.7) 0%,
      rgba(114, 191, 255, 0.6) 100%);
  -o-transition: all 0.3s linear;
  -webkit-transition: all 0.3s linear;
  -moz-transition: all 0.3s linear;
  transition: all 0.3s linear;
  -webkit-backdrop-filter: blur(3px);
  backdrop-filter: blur(3px);
}

.video-list .photo img {
  max-width: 100%;
  max-height: 100%;
  width: 100%;
}

.video-list .photo i {
  font-size: 5rem;
  color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -o-transition: all 0.3s linear;
  -webkit-transition: all 0.3s linear;
  -moz-transition: all 0.3s linear;
  transition: all 0.3s linear;
  text-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
}

.video-list h3 {
  margin-bottom: 1rem;
}

.video-list .infor-body {
  position: relative;
  padding: 2rem 1rem 1rem;
}

.video-list .infor-body:before {
  content: "";
  position: absolute;
  z-index: -1;
  right: 0;
  top: 0;
  width: 0;
  height: 4px;
  background: #b4bfb7;
  -o-transition: all 0.3s linear;
  -webkit-transition: all 0.3s linear;
  -moz-transition: all 0.3s linear;
  transition: all 0.3s linear;
}

.video-list a:hover .infor-body:before {
  width: 100%;
  right: auto;
  left: 0;
}

.video-list .info {
  font-size: 1rem;
  line-height: normal;
}

.video-list .info .view i {
  margin-right: 0.5rem;
  padding: 0.25rem 0.5rem;
  border-right: solid 1px #000;
}

.video-list .info .view span {
  margin-left: 5px;
}

.video-list .info .tags {
  position: absolute;
  left: 1rem;
  top: 0;
  background: #447a6a;
  color: #fff;
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 3px;
  -webkit-transform: translate(0, -50%);
  -ms-transform: translate(0, -50%);
  transform: translate(0, -50%);
}

.video-list a:hover {
  text-decoration: none;
}

.video-list a:hover h3 {
  color: #447a6a;
}

.video-list a:hover .photo i {
  -webkit-transform: translate(-50%, -50%) scale(1.1);
  -ms-transform: translate(-50%, -50%) scale(1.1);
  transform: translate(-50%, -50%) scale(1.1);
}

.video-list a:hover .photo:before {
  opacity: 1;
}

/*博愛影音底層*/
.video-detail .video {
  max-width: 1000px;
  margin: 2rem auto;
  position: relative;
}

.video-detail .video:before,
.video-detail .video:after {
  content: "";
  display: block;
  width: 40%;
  height: 40%;
  background: #e1e5e2;
  position: absolute;
  z-index: -1;
}

.video-detail .video:before {
  border-radius: 0 0 0 1rem;
  left: -1rem;
  bottom: -1rem;
  width: 50%;
}

.video-detail .video:after {
  border-radius: 0 1rem 0 0;
  top: -1rem;
  right: -1rem;
}

.video-detail .video .embed-responsive {
  box-shadow: 0 0 5px #777;
}

.video-detail .content {
  max-width: 1000px;
  margin: auto;
  border-top: solid thin #ddd;
  display: flex;
  align-items: flex-start;
  padding: 2rem 1rem;
}

.video-detail .copywriting-body {
  min-height: 300px;
}

.video-detail .copywriting {
  margin-top: 1rem;
}

.video-detail .info {
  margin-top: 1rem;
}

.video-detail .info .date {
  display: inline-block;
  height: 60px;
  background: #b4bfb7;
  color: #fff;
  text-align: center;
  font-size: 2rem;
  line-height: 1.3;
  font-weight: lighter;
  padding: 0.5rem;
}

.video-detail .info .date span {
  font-size: 1.25rem;
  margin-right: 0.5rem;
}

.video-detail .info .name {
  display: inline-block;
  vertical-align: top;
  min-height: 58px;
  border-top: solid thin #b4bfb7;
  border-bottom: solid thin #b4bfb7;
  padding: 0 0.5rem;
  line-height: 58px;
}

/*常見問題*/
.txt-clickopen .accordionPart {
  margin: 0;
  padding: 0;
  list-style: none;
}

.accordionPart .item {
  overflow: hidden;
  position: relative;
  border-bottom: solid thin #eee;
  padding: 1rem;
  background: #fff;
}

.accordionPart .item+li:after {
  content: "";
  pointer-events: none;
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: radial-gradient(ellipse at center,
      rgba(0, 0, 0, 0.05) 0%,
      rgba(0, 0, 0, 0) 60%);
  -webkit-transform: translate(-50%, 0) rotate(15deg);
  -ms-transform: translate(-50%, 0) rotate(15deg);
  transform: translate(0, -50%);
}

.accordionPart .item:hover .qa_title {
  color: #447a6a;
}

.accordionPart .item .qa_title {
  cursor: pointer;
  font-weight: 700;
  display: block;
  padding: 1rem 3rem;
}

.accordionPart .item .qa_title_on {
  color: #447a6a;
}

.accordionPart .item .qa_content {
  display: none;
  padding: 1rem;
  border-radius: 0.6em;
  margin: 1rem 0;
}

.accordionPart .item .qa_content ul {
  list-style-type: disc;
}

.txt-clickopen .hvr-icon-hang:before {
  content: "\f13a";
  right: 0;
  top: 0;
  font-weight: 700;
  color: #447a6a;
  text-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  font-size: 2.2em;
}

.accordionPart .item .item-mark {
  position: absolute;
  left: 0;
  top: 1rem;
  color: #326c9e;
  font-size: 2em;
  font-style: italic;
}

/*該看哪一科*/
.subject-list .adult {
  margin-bottom: 3em;
  padding: 2em 0;
  position: relative;
}

.subject-list .img img {
  max-width: 100%;
  max-height: 80vh;
  margin: auto;
  display: block;
}

.subject-list .adult .img .adult-mb {
  display: none;
}

.subject-list .item {
  display: inline-block;
}

.subject-list .item .icon {
  border-radius: 50%;
  display: inline-block;
  width: 100px;
  padding: 1rem;
  background: #fff;
  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.15);
}

.subject-list .item .icon img {
  max-width: 100%;
}

.subject-list .item p {
  margin-bottom: 0;
  font-size: 1.5rem;
  padding: 0 0.5em;
}

.subject-list .item a {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
}

.subject-detail section {
  min-height: 100px;
  margin-bottom: 2rem;
  position: relative;
  text-align: center;
}

.subject-detail section p {
  text-align: center;
}

.subject-detail section h3 {
  display: inline-block;
  min-width: 200px;
  padding: 0.5rem 1rem;
  margin: 0 auto 1rem;
  font-size: 1.25rem;
  background: #447a6a;
  color: #fff;
  text-align: center;
  position: relative;
  border-radius: 0.5rem;
}

.subject-detail section h3:before {
  content: "";
  display: block;
  width: 50px;
  height: 4px;
  background: #f39118;
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -25px;
  margin-top: -2px;
}

.subject-detail section ul {
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  text-align: left;
}

.subject-detail section ul li {
  display: flex;
  align-items: center;
  background: #eef5f3;
  padding: 1em;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
}

.subject-detail section ul li .title {
  font-weight: 700;
  width: 300px;
  padding-right: 1rem;
  border-right: solid thin;
}

.subject-detail section ul li .content {
  width: calc(100% - 120px);
  padding-left: 1em;
}

.subject-detail section ul li a {
  padding: 2px 0.25rem;
  border-radius: 3px;
}

.subject-detail section ul li a:hover {
  background: #326c9e;
  color: #fff;
}

.subject-detail .child h3 {
  background: #326c9e;
}

.subject-detail .child li {
  background: #e2ecf4;
}

.subject-btn {
  border-radius: 10rem;
  display: inline-block;
  padding: 1rem 1.5rem;
  background: #447a6a;
  color: #fff;
  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.15);
}

.subject-btn img {
  margin: auto;
  height: 50px;
  -ms-transform: rotate(0);
  -webkit-transform: rotate(0);
  transform: rotate(0);
  -webkit-transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  -moz-transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  -o-transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  -ms-transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  transform-origin: center bottom;
}

.subject-btn:hover {
  background: #f39118;
  color: #fff;
}

.subject-btn:hover img {
  animation: child_move 1s cubic-bezier(0.4, 0, 1, 1) infinite alternate;
  -moz-animation: child_move 1s cubic-bezier(0.4, 0, 1, 1) infinite alternate;
  -webkit-animation: child_move 1s cubic-bezier(0.4, 0, 1, 1) infinite alternate;
  -o-animation: child_move 1s cubic-bezier(0.4, 0, 1, 1) infinite alternate;
}

@keyframes child_move {
  from {
    -ms-transform: rotate(15deg);
    -webkit-transform: rotate(15deg);
    transform: rotate(15deg);
  }

  to {
    -ms-transform: rotate(-15deg);
    -webkit-transform: rotate(-15deg);
    transform: rotate(-15deg);
  }
}

@-moz-keyframes child_move

/* Firefox */
  {
  from {
    -ms-transform: rotate(15deg);
    -webkit-transform: rotate(15deg);
    transform: rotate(15deg);
  }

  to {
    -ms-transform: rotate(-15deg);
    -webkit-transform: rotate(-15deg);
    transform: rotate(-15deg);
  }
}

@-webkit-keyframes child_move

/* Safari 和 Chrome */
  {
  from {
    -ms-transform: rotate(15deg);
    -webkit-transform: rotate(15deg);
    transform: rotate(15deg);
  }

  to {
    -ms-transform: rotate(-15deg);
    -webkit-transform: rotate(-15deg);
    transform: rotate(-15deg);
  }
}

@-o-keyframes child_move

/* Opera */
  {
  from {
    -ms-transform: rotate(15deg);
    -webkit-transform: rotate(15deg);
    transform: rotate(15deg);
  }

  to {
    -ms-transform: rotate(-15deg);
    -webkit-transform: rotate(-15deg);
    transform: rotate(-15deg);
  }
}

/*急診住院-舊*/
.progress-bar {
  width: 0;
}

.aid section {
  margin: 0 auto;
  padding: 1rem;
  padding-top: 0;
  position: relative;
}

.aid .table-border-radius+.table-border-radius {
  margin-top: 3.5rem;
}

.aid .title {
  background: #447a6a;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  margin: auto;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  width: calc(100% - 100px);
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}

.aid section:first-child .title {
  justify-content: space-between;
}

.aid .title h3 {
  font-size: 1.2rem;
  margin-bottom: 0;
}

.aid .title div+h3 {
  padding: 0 1em;
  border-left: solid 2px;
  border-right: solid 2px;
}

.aid .table-wrap table {
  width: 100%;
}

.aid .table-wrap table tr:not(:last-child) {
  border-bottom: dotted 1px #ddd;
}

.aid .table-wrap table td {
  padding: 0.5rem;
}

.aid .table-wrap .aid-table td {
  width: 250px;
  color: #447a6a;
  text-align: center;
}

.aid .table-wrap .aid-table td+td {
  width: calc(100% - 250px);
}

.aid .table-wrap .aid-table td span {
  display: block;
  min-width: 150px;
  border-radius: 30px;
  padding: 0.5rem 1rem 0.25rem;
  color: #444;
}

.aid .table-wrap .aid-table tr:nth-child(3n) td span {
  background: #f3d4d4;
}

.aid .table-wrap .aid-table tr:nth-child(3n + 1) td span {
  background: #f9efd9;
}

.aid .table-wrap .aid-table tr:nth-child(3n + 2) td span {
  background: #cbe5f5;
}

.aid .clock-area {
  position: relative;
  margin-top: 4rem;
  margin-bottom: 4rem;
  background: transparent;
  text-align: center;
}

.aid .clock-area:before {
  content: "";
  z-index: -1;
  position: absolute;
  left: 50%;
  top: 50%;
  width: 300px;
  height: 300px;
  background: #f5f5f5;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.15);
}

.aid .clock-area .title {
  display: inline-block;
  width: auto;
  background: transparent;
  color: #447a6a;
  -webkit-transform: translateY(0);
  transform: translateY(0);
}

.aid .clock {
  font-size: 1.6rem;
  text-align: center;
}

.aid .clock ul {
  padding-left: 0;
  list-style: none;
  margin-bottom: 0;
  font-size: 3.5rem;
}

.aid .clock ul li {
  display: inline-block;
  line-height: normal;
}

.aid .clock ul li:nth-child(4),
.aid .clock ul li:nth-child(5) {
  font-size: 2rem;
}

.aid .table-wrap .level span {
  display: flex;
  justify-content: center;
  border-radius: 30px;
  padding: 0.5rem 1rem 0.25rem;
  color: #444;
}

.aid .table-wrap .level tr:nth-child(1) td span {
  background: #ff9b9b;
}

.aid .table-wrap .level tr:nth-child(2) td span {
  background: #ffce86;
}

.aid .table-wrap .level tr:nth-child(3) td span {
  background: #fff9ae;
}

.aid .table-wrap .level tr:nth-child(4) td span {
  background: #d6ecc4;
}

.aid .table-wrap .level tr:nth-child(5) td span {
  background: #cbe5f5;
}

.aid .table-wrap .level font {
  display: table-caption;
  width: 90px;
  height: 20px;
  margin-left: 1em;
  text-align: justify;
  text-justify: inter-ideograph;
  -ms-text-justify: inter-ideograph;
  -moz-text-align-last: justify;
  -webkit-text-align-last: justify;
}

.aid .table-wrap .level font:after {
  content: "";
  display: inline-block;
  width: 100%;
}

.aid .notes {
  display: flex;
  padding: 1.5em 2em;
}

.aid .notes p {
  margin-bottom: 0;
}

.aid .notes ol {
  list-style: none;
  padding-left: 0;
  margin-bottom: 0;
  font-size: 1rem;
}

.aid .notes ol li {
  display: flex;
  align-items: flex-start;
  margin-bottom: 5px;
}

.aid .notes ol li span {
  background: #333;
  color: #fff;
  width: 17px;
  height: 17px;
  text-align: center;
  border-radius: 50px;
  margin-right: 3px;
  font-size: 13px;
}

.aid .notes ol li p {
  width: calc(100% - 17px);
  line-height: 1.4;
}

.sickbed-table:not(:last-child) {
  margin-bottom: 30px;
}

.sickbed-table table {
  width: 100%;
  border-top: solid thin #ddd;
  font-size: 1rem;
}

.sickbed-table table tr {
  border-bottom: solid thin #ddd;
}

.sickbed-table table td {
  padding: 6px;
  text-align: center;
  border-right: solid thin #ddd;
}

.sickbed-table table td:last-child {
  border-right: 0;
}

.sickbed-table table thead {
  font-weight: 700;
  color: #447a6a;
}

.sickbed-table table thead td {
  border: 0;
}

.sickbed-table table td span {
  display: block;
  text-align: left;
  border-radius: 30px;
  padding: 0.5rem 1rem 0.25rem;
  color: #444;
}

.sickbed-table table td span.y {
  background: #f9efd9;
}

.sickbed-table table td span.b {
  background: #cbe5f5;
}

.sickbed-table table td span.r {
  background: #f3d4d4;
}

.bed-sign tr td:nth-child(odd) {
  font-weight: 700;
  color: #447a6a;
}

.table-tips {
  display: none;
}

/*急診-新*/
.mj-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #447a6a;
}

.aid-news .box-header {
  display: inline-block;
  margin-bottom: 1rem;
}

.aid-news .box-header .mj-title,
.aid-news .box-header .title-note {
  display: inline-block;
  vertical-align: middle;
  margin-bottom: 0;
  margin-right: 1rem;
}

.aid-news .box-header .mj-title {
  /* font-size: 1.5rem; */
}

.title-note {
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 1.25rem;
}

.title-note li {
  display: inline-block;
  margin-right: 0.5rem;
}

.title-note .tt {
  margin-right: 0.5rem;
  padding: 0 0.5rem;
  background: #447a6a;
  color: #fff;
  border-radius: 3px;
}

.aid-immediate {
  margin-bottom: 2rem;
}

.aid-immediate .item {
  display: inline-block;
  padding: 1rem 2rem 0;
}

.aid-immediate .full-bed {
  max-width: 500px;
  border-radius: 0.5rem;
  background: #f7f7f7;
  text-align: center;
}

.aid-immediate .full-bed .tt {
  width: 100%;
  font-size: 2rem;
}

.aid-immediate .full-bed .answer {
  display: block;
  font-size: 9rem;
  font-weight: 700;
  opacity: 0.1;
  width: 100%;
  line-height: 1;
  height: 9rem;
}

.aid-immediate .full-bed.on {
  border: solid 4px #f39118;
}

.aid-immediate .full-bed.on .answer {
  opacity: 1;
  color: #f39118;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  text-shadow: 0 0 8px rgba(255, 255, 255, 1), 0 0 16px #f39118;
}

.aid-immediate .item.aid-item {
  list-style: none;
  padding: 0.5rem 2rem;
  width: 100%;
  /* max-width:600px */
}

.aid-item li {
  width: 100%;
  padding-top: 0;
  padding-bottom: 0;
}

.aid-item li+li {
  margin-top: 1rem;
}

.aid-item li .tt {
  width: 300px;
  margin-right: 1rem;
  margin-bottom: 0;
  padding: 0.25rem;
  border-radius: 30px;
  text-align: right;
  /* color: #000000; */
  font-weight: 700;
  font-size: 1.25rem;
}

.aid-item li .progress {
  width: 100%;
  max-width: calc(100% - 50px);
}

.progress .bg-warning {
  background-color: #f39118 !important;
}

.aid-item li .number {
  width: 70px;
  margin-left: 1rem;
  margin-bottom: 0;
  color: #b50202;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1;
  text-align: center;
}

.aid-immediate .table-border-radius {
  margin: 1rem;
}

.phiz-area {
  display: inline-block;
  margin-bottom: 1rem;
}

.phiz-area .tt {
  display: inline-block;
  border-radius: 3px;
  margin-right: 0.5rem;
  padding: 0 0.5rem;
  background: #f39118;
  /* font-size:1rem */
}

.phiz-area .phiz {
  display: inline-block;
  list-style: none;
  margin: 0;
  padding: 0;
}

.phiz-area .phiz li {
  display: inline-block;
  vertical-align: middle;
  margin: 0 0.5rem;
  font-size: 2rem;
}

.phiz-area .phiz i {
  color: #e1e1e2;
}

.phiz-area .phiz i.fas {
  color: #f39118;
}

.clock-area {
  min-width: 220px;
  position: relative;
  padding: 1rem 1rem 0;
  text-align: center;
  background: #f5f5f5;
}

.clock-area .title {
  display: inline-block;
  width: auto;
  background: transparent;
  color: #447a6a;
  -webkit-transform: translateY(0);
  transform: translateY(0);
}

.clock-area .tt {
  font-size: 2rem;
}

.clock {
  text-align: center;
}

.clock ul {
  padding-left: 0;
  list-style: none;
  margin-bottom: 0;
  font-size: 8rem;
  line-height: 0;
}

.clock ul li {
  display: inline-block;
  line-height: 1;
}

.clock ul li:nth-child(4),
.aid .clock ul li:nth-child(5) {
  font-size: 2rem;
}

.clock ul .small {
  font-size: 50%;
}

.sickbed .aid-immediate .item.aid-item {
  max-width: inherit;
}

.bed-sign {
  list-style: none;
  margin: 0;
  padding: 0;
}

.bed-sign .tt {
  margin-top: 0.5rem;
  text-align: center;
  color: #447a6a;
  font-weight: 700;
}

.circle-moving {
  position: relative;
  text-align: center;
}

.circle-moving .num {
  position: absolute;
  top: 45%;
  left: 0;
  width: 100%;
  display: block;
  font-size: 2rem;
  color: #447a6a;
  -ms-transform: translate(0, -50%);
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
}

.circle-moving .unit {
  position: absolute;
  left: 50%;
  bottom: 1.5rem;
  display: inline-block;
  padding: 0.2rem 0.75rem 0;
  border-radius: 30px;
  border: solid 1px #333;
  color: #333;
  font-size: 0.9rem;
  line-height: 1;
  -ms-transform: translate(-50%, 0);
  -webkit-transform: translate(-50%, 0);
  transform: translate(-50%, 0);
}

.circle-moving-fixed {
  width: 120px;
  height: 120px;
  margin-bottom: 1rem;
  border: solid 9px #e5e5e5;
  border-radius: 100%;
}

.circle-moving-fixed .unit {
  margin-bottom: -17px;
}

/*================================================================================*/
@media screen and (max-width: 1350px) {

  /*首頁*/
  .nav-style.owl-carousel .owl-nav button.owl-next {
    left: inherit;
    right: 0;
    transform: translate(1rem, -50%);
  }

  .nav-style.owl-carousel .owl-nav button.owl-prev {
    /* position:static */
    right: inherit;
    left: 0;
    transform: translate(-1rem, -50%);
  }
}

@media screen and (max-width: 1200px) {

  /*內頁banner*/
  .banner .container {
    max-width: none;
    padding: 0 1.5em;
    height: 100px;
  }

  .banner h2 {
    left: 1em;
  }

  /*首頁-活動資訊、學術課程*/
  .index .paper .box .head .photo {
    width: 200px;
  }

  .index .paper .box .head .content {
    width: calc(100% - 200px);
    padding: 0.5em;
  }

  /*用藥查詢*/
  .drug .search-bar .item-box {
    padding: 0;
  }

  /*醫生列表*/
  .doctor-item ul li {
    width: calc(100% / 2 - 18px);
    margin-right: 2em;
    margin-bottom: 2em;
  }

  .doctor-item .photo .photo-box {
    width: 140px;
    height: 140px;
  }

  .doctor-item ul li .content {
    width: calc(100% - 140px);
  }

  .doctor-item ul li h3 {
    font-size: 1.2em;
  }

  .doctor-item ul li p {
    padding-left: 1em;
    font-size: 18px;
  }
}

@media screen and (max-width: 1130px) {

  /*醫生底層*/
  .doctor-awards .container {
    max-width: none;
  }
}

@media screen and (max-width: 991px) {

  .col,
  .col-1,
  .col-10,
  .col-11,
  .col-12,
  .col-2,
  .col-3,
  .col-4,
  .col-5,
  .col-6,
  .col-7,
  .col-8,
  .col-9,
  .col-auto,
  .col-lg,
  .col-lg-1,
  .col-lg-10,
  .col-lg-11,
  .col-lg-12,
  .col-lg-2,
  .col-lg-3,
  .col-lg-4,
  .col-lg-5,
  .col-lg-6,
  .col-lg-7,
  .col-lg-8,
  .col-lg-9,
  .col-lg-auto,
  .col-md,
  .col-md-1,
  .col-md-10,
  .col-md-11,
  .col-md-12,
  .col-md-2,
  .col-md-3,
  .col-md-4,
  .col-md-5,
  .col-md-6,
  .col-md-7,
  .col-md-8,
  .col-md-9,
  .col-md-auto,
  .col-sm,
  .col-sm-1,
  .col-sm-10,
  .col-sm-11,
  .col-sm-12,
  .col-sm-2,
  .col-sm-3,
  .col-sm-4,
  .col-sm-5,
  .col-sm-6,
  .col-sm-7,
  .col-sm-8,
  .col-sm-9,
  .col-sm-auto,
  .col-xl,
  .col-xl-1,
  .col-xl-10,
  .col-xl-11,
  .col-xl-12,
  .col-xl-2,
  .col-xl-3,
  .col-xl-4,
  .col-xl-5,
  .col-xl-6,
  .col-xl-7,
  .col-xl-8,
  .col-xl-9,
  .col-xl-auto {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  .row {
    margin-left: -0.5rem;
    margin-right: -0.5rem;
  }

  body {
    padding-top: 80px;
  }

  body:before {
    display: block;
  }

  .sidebar {
    top: 74px;
    margin-bottom: 1rem;
  }

  /*首頁內容*/
  .ix-title:before {
    width: 100%;
  }

  /*樣式 & 效果*/
  .table-border-radius,
  .radius-shadow-small,
  .doll-tips .content article {
    padding: 1rem;
    border-radius: 0.5rem;
  }

  /*內頁結構*/
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  /*圖文底*/
  .m-wrap .title2 .mjTitle,
  .m-wrap .detail_title2 .mjTitle,
  .m-wrap .title2 .mjTitle+small {
    margin-bottom: 1rem;
  }

  .m-wrap .title2 .mjTitle+small {
    margin-top: 1rem;
  }

  /*主選單*/
  header .search,
  header button.navbar-toggler {
    float: right;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }

  header .search {
    width: auto;
    height: auto;
    text-align: center;
  }

  header .search i {
    padding: 0 1rem;
    font-size: 1.25rem;
    line-height: 54px;
  }

  header button.navbar-toggler {
    z-index: 99999;
    border: solid 1px #447a6a;
    padding: 0.5rem 0.25rem 0;
    border-radius: 0.25rem;
  }

  header button.navbar-toggler small {
    display: block;
    font-size: 1rem;
    color: #447a6a;
    margin-top: 4px;
  }

  .on header button.navbar-toggler small {
    margin-top: 1.5rem;
  }

  header .lang-icon {
    display: inline-block;
    vertical-align: middle;
    padding: 0 1rem;
    color: #447a6a;
  }

  header .h-wrap .tools li {
    display: none;
  }

  header .navbar .tools ul {
    margin-top: 0.75rem;
  }

  header .tools li+li {
    margin-left: 0.25rem;
  }

  header .tools li a {
    display: block;
    width: 40px;
    height: 40px;
    text-align: center;
    background: #eee;
    border-radius: 100%;
  }

  header .tools li i {
    line-height: 40px;
  }

  header .tools .lang {
    display: block;
    background: transparent;
  }

  header .tools .lang a {
    display: block;
    width: 40px;
    background: #447a6a;
    color: #fff;
    line-height: 40px;
  }

  header .tools .lang a:hover,
  header .tools .lang a:hover:not(.active) {
    background: #f39118;
    color: #fff;
  }

  #search_body {
    display: none;
    position: fixed;
    z-index: 9999;
    top: 75px;
    left: 0;
    width: 100%;
    padding: 1rem;
    background: #447a6a;
    color: #000;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
  }

  .gsc-control-cse {
    height: auto !important;
  }

  .gsib_a {
    padding: 0 !important;
  }

  .gsc-results-wrapper-overlay {
    top: 70px !important;
  }

  .navbar>.container,
  .navbar>.container-fluid {
    display: -ms-block;
    display: block;
  }

  .dropdown-item {
    white-space: inherit;
  }

  header {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
  }

  header .h-wrap {
    display: none;
  }

  header .logo {
    float: left;
    width: 200px;
    margin: 10px;
  }

  header .logo .navbar-brand {
    padding: 0;
    margin-right: 0;
  }

  header.fixed .logo {
    width: 200px;
  }

  header .navbar-collapse {
    position: fixed;
    top: 70px;
    bottom: 0;
    z-index: 9999999;
    width: 100%;
    padding-bottom: 100px;
    overflow-y: scroll;
    background: linear-gradient(135deg,
        #447a6a 0%,
        rgba(68, 122, 106, 0.7) 100%),
      url(../../assets/sidebar-bg.png) center/cover;
    background: #447a6a;
  }

  header .navbar-expand-lg .navbar-nav .nav-link {
    position: relative;
    padding: 0.75rem 15px;
    padding-right: 3rem;
    background: #447a6a;
    background: linear-gradient(135deg,
        #447a6a 0%,
        rgba(68, 122, 106, 0.7) 100%);
    color: #fff;
    border-bottom: solid thin rgba(255, 255, 255, 0.5);
  }

  header .navbar-expand-lg .navbar-nav .show .nav-link {
    color: #fff;
  }

  header .navbar-expand-lg .navbar-nav .dropdown-menu {
    border: 0;
    box-shadow: none;
    background-image: none;
    overflow: initial;
    height: auto;
  }

  header .navbar-expand-lg .navbar-nav .nav-link.on:after {
    left: 0;
    width: 0.5rem;
    height: 100%;
    background: #f39118;
    -ms-transform: translate(0, -50%);
    -webkit-transform: translate(0, -50%);
    transform: translate(0, -50%);
  }

  header .navbar-expand-lg .navbar-nav .nav-link:not(.no-i):before {
    content: "\f107";
    font-weight: 900;
    color: #fff;
    position: absolute;
    top: 50%;
    right: 1.75rem;
    -ms-transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    transition: all 0.2s linear;
  }

  header .item-wrap {
    display: block;
    margin-bottom: 0;
  }

  header .item-wrap .single {
    width: 100%;
    padding: 0;
  }

  header .item-wrap .group {
    display: block;
  }

  header .item-wrap .single+.group {
    width: 100%;
  }

  header .item-wrap .single+.group .dropdown-item {
    width: 100%;
  }

  header .item-wrap .single ul {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }

  header .item-wrap .single li {
    margin-bottom: 0;
    border-bottom: solid thin #ddd;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    width: 50%;
  }

  header .item-wrap .single .sub-title {
    padding: 0.75rem 1rem;
    text-align: left;
  }

  header .item-wrap .single li a {
    border-radius: 0;
  }

  header .item-wrap .single li a:hover {
    background: #eee;
  }

  header .item-wrap .single li a:hover h3 {
    color: #447a6a;
  }

  header .item-wrap .group .dropdown-item {
    width: 100%;
  }

  header .item-wrap .group .dropdown-item .box {
    position: relative;
    padding: 0;
  }

  header .item-wrap .group .sub-title {
    padding: 0.75rem 1rem;
    margin-bottom: 0;
    border-bottom: solid thin #ddd;
  }

  header .item-wrap .group .sub-title:before {
    content: "\f105";
    font-weight: 900;
    top: 50%;
    left: inherit;
    right: 1.75rem;
    width: auto;
    height: auto;
    background: transparent;
    -ms-transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  header .item-wrap .group .sub-title.on {
    background: #edf2f6;
  }

  header .item-wrap .group .sub-title.on:before {
    content: "\f107";
  }

  header .item-wrap .group ul {
    display: none;
    padding: 0 1rem;
    background: #dbe3eb;
    clear: both;
    overflow: hidden;
  }

  header .item-wrap .group li {
    float: left;
    width: 50%;
  }

  header .item-wrap .group li:nth-child(2n + 1) {
    clear: both;
  }

  header .group a {
    padding-right: 0;
  }

  header .item-wrap .group .sub-title a:hover {
    background: #eee;
    color: #447a6a;
  }

  /*右側選單*/
  .btn-right {
    display: block;
    right: 0;
    top: auto;
    bottom: 0;
    transform: none;
    width: 100%;
    border-top: solid thin #58a3e8;
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.3);
  }

  .btn-right ul {
    display: flex;
    border-radius: 0;
  }

  .btn-right ul li {
    width: 50%;
  }

  .btn-right ul li+li {
    border-left: solid thin #58a3e8;
  }

  .btn-right ul li+li:before {
    display: none;
  }

  .btn-right ul li a {
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.75rem 0.5rem;
  }

  .btn-right ul li .icon {
    margin: 0;
    margin-right: 0.5em;
  }

  .btn-right ul li h4 {
    writing-mode: initial;
    -webkit-writing-mode: initial;
    margin: 0;
  }

  .btn-right ul li h4 span {
    display: inline-block;
    width: auto;
  }

  .btn-right:before {
    display: none;
  }

  /*重大訊息框*/
  .lotung_mesg .container {
    display: block;
  }

  .lotung_mesg .photo+.content {
    width: 100%;
    padding-left: 0;
    padding-top: 1rem;
  }

  /*首頁*/
  .ix-title,
  .ix-title-box .btn-style {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .service-time .title-box:before,
  .service-time .title-box:after {
    border-radius: 0.5rem;
  }

  .service-time .title-box:before {
    left: 0;
    top: 0;
  }

  .ix-title,
  .service-time .title-box .mj {
    font-size: 1.75rem;
    letter-spacing: 2px;
  }

  .index .main section {
    padding: 0;
  }

  /*首頁-快速連結*/
  .hot-key ul li a {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }

  .hot-key ul li .icon {
    width: 50px;
    padding: 10px;
  }

  .hot-key ul li h4 {
    letter-spacing: normal;
    margin-top: 0;
  }

  .hot-key ul li h4.small {
    font-size: 1rem;
  }

  /*首頁－最新消息*/
  .index-news .item .photo {
    border-radius: 0.5rem 0.5rem 0 0;
  }

  /*首頁－服務時間*/
  .service-time .title-box {
    width: auto;
  }

  .service-time .time {
    padding-top: 0;
    padding-bottom: 0;
  }

  /*首頁-活動資訊、學術課程*/
  .index .paper .container {
    display: block;
  }

  .index .paper .box {
    width: 100%;
    margin-bottom: 20px;
  }

  .index .paper .box+.box {
    margin-left: 0;
  }

  /*底部選單*/
  .f-menu .item a {
    border-radius: 0;
  }

  /*頁尾*/
  footer .container {
    flex-wrap: wrap;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  footer .awards {
    width: 100%;
  }

  footer .awards ul li {
    /* width:calc(100% / 9); */
    padding: 0 10px;
  }

  footer .awards ul li:nth-child(5n + 1) {
    /* clear:none */
  }

  footer .foot-map,
  footer .foot-contact {
    width: calc(100% / 2);
    border: 0;
  }

  footer .container div+div {
    margin-left: 0;
  }

  footer .tools-mb {
    display: none;
    padding: 1em;
  }

  footer .tools-mb ul {
    display: flex;
    padding-left: 0;
    list-style: none;
    margin-bottom: 0;
  }

  footer .tools-mb ul li+li {
    margin-left: 1em;
  }

  .copyright {
    padding-bottom: 80px;
    opacity: 0.7;
  }

  .copyright a {
    display: block;
  }

  /*該看哪一科*/
  .subject-list .item .icon {
    width: 80px;
  }

  .subject-list .item p {
    font-size: 1.25rem;
    padding-left: 1rem;
  }

  /*列表2*/
  [class$="title-list2"]>ul>li a {
    border-bottom-right-radius: 0.5rem;
  }

  /*底層*/
  .news-detail .d-social {
    margin: 0.5rem 0 1rem;
  }

  /*醫生陣容*/
  .doctor-item ul li {
    width: 100%;
    clear: both;
    overflow: hidden;
    float: inherit;
    margin-right: 0;
    margin-bottom: 1rem;
    padding: 0 15px;
    border-bottom: solid thin #dcdcdc;
  }

  .doctor-awards .item .photo {
    width: 260px;
  }

  .doctor-awards .item .photo+.content {
    width: calc(100% - 260px);
  }

  .doctor-item .photo {
    float: left;
    margin-right: 1rem;
  }

  .doctor-item .photo .photo-box {
    width: 100px;
    height: 100px;
  }

  .doctor-awards .item .content {
    padding: 1em 1.2em;
  }

  .doctor-item ul li .content {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  .doctor-item ul li .t-name {
    display: block;
    margin-bottom: 0;
    padding: 1.5rem 0 0;
    min-height: 55px;
    border-bottom: none;
  }

  .doctor-item .more-link {
    display: block;
    margin-left: 0;
  }

  .doctor-item ul li p {
    padding-left: 0;
  }

  /*小類列*/
  [class$="paper-item"] .item h3 {
    font-size: 1.2em;
    font-size: 1.5rem;
  }

  /*該看哪一科*/
  .subject-detail section h3 {
    font-size: 18px;
  }

  .subject-detail section ul li {
    display: block;
  }

  .subject-detail section ul li .title {
    width: 100%;
    border-right: 0;
    border-bottom: solid thin;
    margin-bottom: 0.5em;
  }

  .subject-detail section ul li .content {
    width: 100%;
    padding: 0;
  }

  /*急診住院-舊*/
  .aid.row {
    margin-left: 0;
    margin-right: 0;
  }

  .aid .clock-area .title {
    margin-bottom: 0;
    padding: 0;
  }

  .aid .clock ul {
    font-size: 2rem;
  }

  .aid .clock,
  .aid .clock ul li:nth-child(4),
  .aid .clock ul li:nth-child(5) {
    font-size: 1.25rem;
  }

  /*急診-新*/
  .aid-immediate {
    margin: 0 -1rem;
  }

  .aid-immediate .full-bed {
    max-width: inherit;
    width: 32vw;
    padding: 1rem 0;
  }

  .clock ul {
    font-size: 11vw;
  }

  .aid-immediate .full-bed .tt,
  .clock-area .tt {
    font-size: 4vw;
  }

  .aid-page .btn-right ul {
    display: none;
  }

  /*博愛影音列表*/
  .video-list a .photo i {
    z-index: 2;
    left: 1.5rem;
    top: 100%;
    opacity: 1;
    font-size: 1.5rem;
    -webkit-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    transform: translate(0, -50%);
    color: #fff;
  }

  .video-list .info .tags {
    padding-left: 2.5rem;
  }

  /*衛教新知*/
  .spacial-paper-item .radius-shadow-small {
    padding: 0;
  }
}

@media screen and (max-width: 921px) {}

@media screen and (max-width: 768px) {

  /*首頁－最新消息*/
  .index-news .item {
    padding-bottom: 0.5rem;
    margin-bottom: 0.5rem;
    clear: both;
    border-bottom: dotted 1px #326c9e;
    border-radius: 0;
  }

  .index-news .item .photo {
    width: 160px;
    float: left;
  }

  .index-news .item .info {
    width: calc(100% - 160px);
    float: right;
    background: #fff;
  }

  .index-news .item .info h3 {
    margin-top: 0.5rem;
    font-weight: 500;
    color: #212529;
    line-height: 1.5;
  }

  .index-news .info .view {
    /* position:static; */
    display: inline-block;
    top: 0.25rem;
  }

  .index-news .item:hover .photo {
    -webkit-transform: inherit;
    -ms-transform: inherit;
    transform: inherit;
  }

  /*首頁－服務時間*/
  .service-time .container {
    padding-top: 1rem;
  }

  .service-time .time li {
    position: relative;
    width: 100%;
    padding: 1rem 0 0 40px;
  }

  .service-time .time li+li {
    border-top: dotted 1px #326c9e;
  }

  .service-time .time svg {
    position: absolute;
    top: 1rem;
    left: 0;
  }

  .service-time .time-mj span {
    width: 100%;
  }

  .service-time .title-box {
    padding: 1rem 2rem 0.5rem;
  }

  .service-time .title-box .mj {
    width: auto;
  }

  .service-time .title-box .mj:after {
    bottom: 0.5rem;
    width: 1.5rem;
  }

  .service-time .time li .tt {
    width: auto;
    margin-left: 0;
    padding-left: 0.5rem;
  }

  .service-time .time .box1,
  .service-time .time .box2 {
    display: inline-block;
    text-align: left;
    width: auto;
  }

  /*首頁－博愛影音*/
  .index-video .box,
  .index-video .box+.box {
    width: 100%;
    padding-left: 0;
  }

  .index-video .box .item {
    margin-bottom: 1rem;
  }

  .index-video .box+.box .item {
    width: 50%;
    padding: 0 0.5rem;
  }

  .index-video .box+.box {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    margin-left: -0.5rem;
    margin-right: -0.5rem;
    width: calc(100% + 1rem);
  }

  .index-video .video-wrap a:before {
    font-size: 3rem;
  }

  /*頁尾*/
  footer .container {
    display: block;
  }

  footer .foot-map,
  footer .foot-contact {
    width: 100%;
  }

  /*用藥查詢*/
  .drug .search-bar {
    padding: 1rem;
  }

  .drug .search-bar .item-box {
    display: block;
  }

  .drug .search-bar .item-box:last-child {
    border-bottom: 0;
  }

  .drug .search-bar .item-box>label {
    width: 100%;
    margin-bottom: 1rem;
    text-align: center;
  }

  .drug .search-bar .item-box input[type="text"] {
    font-size: 0.9rem;
  }

  .drug .search-bar .item-box .option {
    width: 100%;
    padding-bottom: 0.5em;
  }

  .drug .search-bar .item-box:last-child .option {
    padding-bottom: 0;
  }

  .drug .search-bar .item-box .option ul {
    justify-content: center;
  }

  .register-table:not(.no-x) {
    overflow-x: scroll;
  }

  .drug-search-table table thead {
    display: none;
  }

  .drug-search-table.register-table {
    overflow-x: inherit;
    border: solid thin #ddd;
    border-radius: 0.5rem;
  }

  .drug-search-table.register-table table tr {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    text-align: left;
    border-bottom: solid thin #ddd;
    padding: 1rem 1rem 0.5rem;
  }

  .drug-search-table.register-table table tr+tr {
    border-top: none;
  }

  .drug-search-table.register-table table td {
    position: relative;
    width: 50%;
    border: none;
    margin-bottom: 0.5rem;
    padding: 0 0 0 1rem;
    text-align: left;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }

  .drug-search-table table td:before,
  .drug-search-table table td:after {
    content: "";
    display: block;
  }

  .drug-search-table table td:before {
    color: #447a6a;
    font-weight: 700;
    font-size: 1rem;
  }

  .drug-search-table table td:after {
    position: absolute;
    left: 0;
    top: 10px;
    width: 4px;
    height: 4px;
    border-radius: 100%;
    background: #447a6a;
  }

  .drug-search-table table td:nth-child(1):before {
    content: "中文名稱：";
  }

  .drug-search-table table td:nth-child(2):before {
    content: "英文商品名：";
  }

  .drug-search-table table td:nth-child(3):before {
    content: "學名：";
  }

  .drug-search-table table td:nth-child(4) {
    padding-left: 0;
    -ms-flex-pack: end;
    justify-content: flex-end;
  }

  .drug-search-table table td:nth-child(4):after {
    display: none;
  }

  .drug-detail .drug-info tr {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }

  .drug-detail .drug-info tr:nth-child(odd) {
    background: transparent;
  }

  .drug-detail .drug-info tr td {
    width: calc(100% - 150px);
    border-bottom: solid 1px #ddd;
  }

  .drug-detail .drug-info tr td:nth-child(odd) {
    width: 150px;
  }

  .drug-detail .img-wrap .item+.item {
    margin-left: 0.5em;
  }

  .drug-detail button {
    margin-top: 2rem;
  }

  .drug .search-result-wrap {
    overflow-x: scroll;
  }

  .drug .search-result-wrap table td {
    min-width: 100px;
  }

  /*檔案下載*/
  .download .item {
    margin-bottom: 1rem;
  }

  .download .item:nth-child(4n) a,
  .download .item:nth-child(4n-1) a {
    background: #fff;
  }

  .download .item:nth-child(even) a {
    background: #eef5f3;
  }

  /*急診住院-舊*/
  .aid.row {
    margin-top: 0;
  }

  .aid .title {
    width: auto;
    margin: 0 -1rem 1rem;
    border-radius: 0.5rem 0.5rem 0 0;
    flex-wrap: wrap;
    -webkit-transform: translateY(0);
    transform: translateY(0);
    font-size: 18px;
  }

  .aid .title div+h3 {
    border: 0;
    padding: 2px;
    margin-bottom: 5px;
    width: 100%;
    order: 1;
    border-bottom: solid thin #fff !important;
  }

  .aid .title h3 {
    font-size: 1rem;
  }

  .aid .title div {
    order: 2;
  }

  .aid section {
    padding-top: 0;
  }

  .aid section+section {
    margin-top: 0;
  }

  .aid .table-wrap td {
    display: block;
    width: 100%;
  }

  .aid .table-wrap .aid-table td,
  .aid .table-wrap .aid-table td+td {
    display: table-cell;
    width: auto;
  }

  .aid .table-wrap table tr:not(:last-child) {
    border: 0;
  }

  .aid .table-wrap .bed-sign tr td {
    text-align: center;
  }

  .aid .table-wrap .bed-sign tr td:nth-child(odd) {
    border-top: solid thin #ddd;
  }

  .aid .table-wrap .bed-sign tr:first-child td {
    border-top: 0;
  }

  .sickbed-table {
    width: 100%;
    overflow-x: scroll;
  }

  .sickbed-table table td {
    min-width: 100px;
  }

  .aid .notes {
    display: block;
    padding: 1em 0;
    font-size: 0.9rem;
  }

  .aid .notes ol {
    font-size: 0.9rem;
    margin-top: 10px;
  }

  .table-tips {
    display: block;
    font-size: 0.9em;
    margin: 10px;
    color: #7e7e7e;
    text-align: center;
  }

  .table-tips i {
    margin-right: 5px;
  }

  .aid.sickbed .table-wrap tr {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }

  .aid.sickbed .table-wrap .bed-sign tr+tr {
    border-top: solid thin #ddd;
    margin-top: 0.5rem;
    padding-top: 0.5rem;
  }

  .aid.sickbed .table-wrap .bed-sign tr td {
    border-top: none;
  }

  .aid.sickbed .table-wrap td {
    width: auto;
  }

  /*急診-新*/
  .aid-immediate {
    margin: 0 -1rem;
  }

  .aid-immediate .full-bed,
  .aid-immediate .item.aid-item,
  .aid-immediate .table-border-radius {
    max-width: inherit;
    margin-top: 0;
  }

  .aid-immediate .full-bed .answer {
    font-size: 15vw;
    height: 15vw;
  }

  .aid-item li {
    padding: 0;
  }

  .aid-item li .tt {
    width: 170px;
    margin-right: 0;
  }

  .aid-item li .progress {
    display: none;
  }

  /*圖文底*/
  .m-wrap [class^="title"] .mjTitle,
  .m-wrap .mjTitle {
    font-size: 1.5rem;
  }

  .m-wrap .title2 .mjTitle,
  .m-wrap .detail_title2 .mjTitle {
    padding-top: 1.5rem;
    padding-bottom: 1rem;
  }

  .m-wrap .detail_title2 .mjTitle {
    margin-bottom: 0;
  }

  .tx03 .photo.left {
    float: none;
    margin: 0 auto;
  }

  .tx03 .photo.right {
    float: none;
    margin: 0 auto;
  }

  .m-wrap .mjTitle span {
    font-size: 0.9rem;
  }

  .m-wrap .mjTitle span strong {
    font-weight: 400;
  }

  /*標題*/
  .m-wrap .title2 .mjTitle {
    padding: 1.5rem 1rem 1rem;
  }

  .m-wrap .title2 .mjTitle:before {
    width: 6px;
    height: 30px;
    background: #447a6a;
    position: absolute;
    left: -3px;
    top: 50%;
    margin-top: -15px;
  }

  /*列表2*/
  [class$="title-list2"]>ul>li a {
    padding: 1rem;
  }

  [class$="title-list2"]>ul>li {
    width: 100%;
    float: none;
    margin-right: 0;
    margin-bottom: 20px;
  }

  [class$="title-list2"] .date {
    position: static;
    border-top: none;
    padding-left: 0;
    color: #666;
    letter-spacing: 0;
  }

  [class$="title-list2"] .date:before {
    content: "\f017";
    font-weight: 900;
    margin-right: 0.25rem;
  }

  /*列表3*/
  [class$="photo-list"]:not(.dl-photo-list) a .photo {
    width: 240px;
  }

  [class$="photo-list"]:not(.dl-photo-list) a .photo+.content {
    width: calc(100% - 240px);
    padding: 10px;
    padding-top: 0;
  }

  [class$="title-list"] a h2,
  [class$="title-list2"] .content h2,
  [class$="photo-list"]:not(.dl-photo-list) a h2,
  [class$="photo-list2"] a .content h2,
  .video-list h3 {
    font-size: 1.25rem;
    margin: 0.5rem auto;
    height: 60px;
    -webkit-line-clamp: 2;
  }

  /*醫師陣容*/
  .doctor-detail .box .photo {
    width: 200px;
    height: 200px;
  }

  .doctor-detail .box .title {
    font-size: 1.5rem;
  }

  .doctor-detail .box .title span,
  .doctor-detail .box .title h1 {
    padding-left: 0;
  }

  .doctor-detail .box .content button {
    margin-left: 0;
  }

  .doctor-detail .info {
    display: block;
    margin: 2rem auto 0;
  }

  .doctor-detail .info .item {
    display: block;
    min-height: inherit;
    width: auto;
    padding: 0 0 1rem;
  }

  .doctor-detail .info .item:before {
    bottom: 0;
    top: inherit;
    height: 1px;
    width: 100%;
  }

  /*0730發現以下不見，拿0715補上*/
  /*首頁banner*/
  .carousel-control-prev,
  .carousel-control-next {
    display: none;
  }

  .carousel-inner:before {
    height: 10px;
  }

  /*博愛影音*/
  .video .v-link {
    margin-top: 0.5rem;
  }

  .video-detail .video {
    margin-bottom: 0;
  }

  .video-detail .video:before {
    border-radius: 0 0 0 0.5rem;
    left: -0.5rem;
    bottom: 7rem;
  }

  .video-detail .video:after {
    border-radius: 0 0.5rem 0 0;
    top: -0.5rem;
    right: -0.5rem;
  }

  .video-detail .content {
    padding: 1rem 0;
    border-top: none;
  }

  .video-detail .info {
    border-top: solid thin #ddd;
    padding-top: 1rem;
  }

  .video-detail .info .date,
  .video-detail .info .date span {
    height: auto;
    width: auto;
    font-size: 18px;
    font-weight: 400;
    border-radius: 3px;
  }

  .video-detail .info .name {
    min-height: inherit;
    line-height: 1.5;
    padding: 0.5rem;
    border-bottom: none;
    border-top: none;
  }

  .video-detail .info .name span {
    margin-bottom: 10px;
    margin-right: 0.5rem;
  }

  .video-list .photo i {
    font-size: 3rem;
  }

  /*該看哪一科*/
  .subject-list {
    padding-bottom: 2rem;
    overflow: hidden;
  }

  .subject-list .adult {
    margin-bottom: 0;
    padding: 0;
    background: transparent;
  }

  .subject-list .adult .img {
    display: none;
  }

  .subject-list .item-wrap {
    display: flex;
    flex-wrap: wrap;
  }

  .subject-list .adult .item,
  .subject-btn {
    position: static;
    width: calc(100% / 2 - 9px);
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    border: solid 1px #ddd;
  }

  .subject-list .item:nth-child(2n) {
    margin-left: 1em;
  }

  .subject-list .adult .item:nth-child(odd) a {
    flex-direction: row;
  }

  .subject-list .item a {
    display: flex;
    padding: 1em;
  }
}

@media screen and (max-width: 640px) {
  body {
    padding-top: 72px;
  }

  /*右側選單*/
  #gotop {
    display: none !important;
  }

  /*次選單*/
  .sidebar {
    top: 72px;
    overflow: hidden;
  }

  /*主選單*/
  #search_body {
    top: 63px;
  }

  /*首頁-快速連結*/
  .hot-key ul {
    border-radius: 0;
    border: none;
  }

  /*頁首*/
  header .logo,
  header.fixed .logo {
    width: auto;
    margin-top: 1rem;
    margin-right: 0;
  }

  header .logo img {
    height: 46px;
  }

  /*首頁形象*/
  .carousel-item .pc {
    display: none !important;
  }

  .carousel-item .mb {
    display: flex !important;
  }

  .carousel-item .img-box {
    height: 60vw;
  }

  /*內頁banner*/
  .banner {}

  .banner h2 {
    font-size: 1.4em;
  }

  /*快速選單*/
  .index .hot-key .container {
    padding: 0;
  }

  /*首頁-衛教專欄*/
  .edu ul li .content {
    padding: 0.5rem;
  }

  .edu ul li .content h3 {
    margin-top: 0;
    font-size: 18px;
    height: 50px;
  }

  .edu ul li .content article {
    margin: 0;
  }

  .edu ul li .info {
    font-size: 0.9rem;
  }

  .edu ul li .date {
    padding: 0.25rem;
    border-radius: 3px;
  }

  /*首頁活動資訊、學術課程*/
  .index .paper .box .head a {
    display: block;
  }

  .index .paper .box .head .photo {
    width: 100%;
  }

  .index .paper .box .head .content {
    width: 100%;
    padding: 10px 0;
  }

  .index .paper .box .head .content h3 {
    font-size: 1.1em;
    color: #447a6a;
  }

  .index .paper .box .head .content article {
    font-size: 1rem;
  }

  .index .paper .box ul li a {
    padding: 1em 5px;
    padding-right: 1.8em;
  }

  .index .paper .box ul li h3 span {
    margin-right: 1em;
  }

  /*頁尾*/
  footer .awards ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  footer .awards ul li {
    /* width:calc(100% / 5); */
    /* float:none; */
  }

  footer .foot-contact>ul {
    flex-wrap: wrap;
  }

  footer .foot-contact>ul li {
    width: calc(100% / 2 - 0.5rem);
    border: solid thin #fff;
    margin-bottom: 0.75rem;
    margin-right: 0.75rem;
  }

  footer .foot-contact>ul li:nth-child(2n) {
    margin-right: 0;
  }

  footer .foot-contact li.mb_block {
    display: block;
  }

  footer .foot-contact>ul li.mb_block i {
    font-size: 1.75rem;
  }

  footer .foot-contact>ul li a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.75rem 1rem;
  }

  footer .foot-contact>ul li i {
    margin-right: 10px;
    margin-bottom: 0;
    font-size: 1.5rem;
  }

  footer .foot-contact>ul li a:hover {
    background: #fff;
    color: #326c9e;
  }

  /*博愛影音*/
  .video-list .photo i {
    font-size: 3.5em;
  }

  .video-list .photo i:after {
    width: 30px;
    height: 30px;
  }

  /*該看哪一科*/
  .subject-list .adult .item,
  .subject-btn {
    width: 100%;
  }

  .subject-list .item:nth-child(2n) {
    margin-left: 0;
  }

  .subject-list .item a {
    padding: 10px;
  }

  .subject-list .item .icon {
    width: 50px;
    padding: 3px;
  }

  .subject-list .item p {
    width: calc(100% - 50px);
  }

  /*列表3*/
  [class$="photo-list"]:not(.dl-photo-list) a .photo {
    width: 100%;
  }

  [class$="photo-list"]:not(.dl-photo-list) a .photo+.content {
    width: 100%;
    padding: 1rem;
  }

  /*列表4*/
  [class$="photo-list2"] ul {
    display: block;
  }

  /*醫師陣容*/
  .doctor-detail .box .photo {
    width: 50vw;
    height: 50vw;
  }

  .doctor-detail .info .item h3 {
    font-size: 1.2rem;
  }

  .doctor-item ul li a {
    display: block;
  }

  .doctor-item ul li .content {
    width: 100%;
  }

  .doctor-awards .item {
    display: block;
    border-right: 0;
    border-top: solid 4px #326c9e;
  }

  .doctor-awards .item+.item {
    margin-top: 1rem;
  }

  .doctor-awards .item .photo {
    width: 100%;
  }

  .doctor-awards .item .photo+.content {
    width: 100%;
  }

  .doctor-awards .item .content {
    padding: 1.5em 1em;
  }

  .doctor-item ul li {
    padding-bottom: 1rem;
  }

  .doctor-item .more-link {
    display: none;
  }

  .doctor-item .photo .more-link {
    display: block;
    text-align: center;
  }

  /*醫生底層*/
  .doctor-detail .box .content {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
  }

  /*小類列*/
  [class$="paper-item"] .item {
    margin-bottom: 1.5rem;
  }

  /*常見問題*/
  .accordionPart .item {
    padding-left: 0;
    padding-right: 0;
  }

  .accordionPart .item .qa_title {
    padding: 0 2rem 0 2.5rem;
  }

  .accordionPart .item .qa_content {
    margin-top: 0;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  .txt-clickopen .hvr-icon-hang:before,
  .accordionPart .item .item-mark {
    font-size: 1.5rem;
    line-height: 1;
  }

  /*博愛團隊*/
  .m-wrap .detail_title3 {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .m-wrap .detail_title3 .date {
    position: static;
    display: inline-block;
    padding: 0;
    border-left: none;
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }

  /*用藥查詢*/
  .drug .search-bar {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  .drug-detail .drug-info tr td {
    width: calc(100% - 60px);
  }

  .drug-detail .drug-info tr td:nth-child(odd) {
    width: 50px;
    padding: 0.5rem 0.25rem;
    font-size: 1rem;
  }

  .drug-search-table.register-table table td {
    width: 100%;
  }

  .drug .search-bar .item-box .option ul {
    display: block;
  }

  .drug .search-bar .item-box .option ul li {
    float: left;
    width: 33.33%;
    margin-right: 0;
    padding: 0 0.5rem;
  }

  .drug .search-bar .item-box .option ul li:nth-child(3n + 1) {
    clear: both;
  }

  /*重大訊息框*/
  .lotung_mesg.mesg_alert .wrap {
    min-width: 70%;
  }
}

@media screen and (max-width: 540px) {

  /*首頁-快速連結*/
  .hot-key ul li h4 {
    max-width: 3rem;
    margin: auto;
  }

  .hot-key ul li:nth-child(4) h4 br {
    display: block;
  }

  /*首頁－博愛影音*/
  .index .main .index-video h2 span {
    background: #cce5ec;
  }

  /*急診-新*/
  .aid-immediate .full-bed,
  .aid-immediate .item.aid-item,
  .aid-immediate .table-border-radius {
    width: 100%;
    padding: 1rem;
  }

  .clock ul {
    font-size: 18vw;
  }

  .aid-immediate .full-bed .tt,
  .clock-area .tt {
    font-size: 8vw;
  }

  .aid-immediate .full-bed .answer {
    font-size: 20vw;
    height: 20vw;
  }

  /*主選單*/
  header .navbar .tools ul {
    margin-top: 1rem;
  }

  header .tools li a {
    height: auto;
  }

  header .tools .lang a {
    width: 40px;
    line-height: 40px;
  }
}

@media screen and (max-width: 480px) {

  /*首頁－服務時間*/
  .service-time .time svg {
    top: 50%;
    margin-top: -15px;
  }

  /*底部選單*/
  .f-menu .item .content {
    width: 100%;
    padding-bottom: 1rem;
  }

  .f-menu .item .content .icon {
    width: 40px;
    height: 40px;
  }

  .f-menu .item .photo {
    display: none;
  }
}

@media screen and (max-width: 450px) {

  /*標題*/
  .m-wrap .title2 .mjTitle {
    padding: 0.75rem 1rem 0.5rem;
  }

  .m-wrap .title2 .mjTitle small {
    display: block;
  }
}

@media screen and (min-width: 769px) {

  /*首頁-快速連結*/
  .hot-key {
    margin-top: -3.5rem;
  }

  .hot-key ul li a:hover h4 {
    letter-spacing: 0.25rem;
  }

  /*首頁－服務時間*/
  .service-time .time li {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-pack: center;
    justify-content: center;
  }

  .service-time .time {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -ms-flex-line-pack: center;
    align-content: center;
  }

  .service-time .time li+li {
    border-left: dotted 1px #326c9e;
  }

  .service-time .time .tt:before {
    content: "";
    width: 30px;
    margin-right: 1rem;
    font-weight: 100;
  }

  /*底層*/
  .tx03 .photo+.content {
    width: calc(100% - 400px);
  }

  .detail2 .photo-box {}

  .detail2 .photo-box .photo {
    width: 33%;
  }

  .m-wrap .mjTitle .note-group {
    float: right;
    width: 50%;
    margin-top: 0;
    padding-left: 1rem;
  }

  .mjTitle .mm {
    width: 50%;
  }

  /*該看哪一科*/
  .subject-list .adult:before {
    content: "";
    z-index: -1;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 700px;
    height: 700px;
    border-radius: 100%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  .subject-list .item {
    position: absolute;
  }

  .subject-list .adult #adult1 {
    top: 10%;
    right: 10%;
  }

  .subject-list .adult #adult2 {
    top: 30%;
    right: 0;
  }

  .subject-list .adult #adult3 {
    top: 50%;
    right: 0;
  }

  .subject-list .adult #adult4 {
    top: 70%;
    right: 5%;
  }

  .subject-list .adult #adult5 {
    top: 85%;
    right: 10%;
  }

  .subject-list .adult #adult6 {
    top: 10%;
    left: 10%;
  }

  .subject-list .adult #adult7 {
    top: 30%;
    left: 0;
  }

  .subject-list .adult #adult8 {
    top: 50%;
    left: 0;
  }

  .subject-list .adult #adult9 {
    top: 70%;
    left: 5%;
  }

  .subject-list .adult #adult10 {
    top: 85%;
    left: 10%;
  }

  .subject-list .adult .item:nth-child(n + 6) {
    text-align: right;
  }

  .subject-list .adult .item:nth-child(n + 6) a {
    flex-direction: row-reverse;
  }

  .subject-list .item p {
    width: 170px;
  }

  .subject-list .item a:hover .icon {
    background: #447a6a;
  }

  .subject-list .item a:hover .icon img {
    filter: brightness(100);
  }
}

@media screen and (min-width: 992px) {

  /*---------------------- loading ----------------------*/
  .loading_area {
    position: fixed;
    display: block;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    overflow: hidden;
    z-index: 999999;
  }

  .loading_area img {
    max-height: 100%;
  }

  .loading_area .loading_mask {
    background: #fff;
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .loading_area .loader {
    text-align: center;
    position: absolute;
    width: 100%;
    height: 80px;
    left: 50%;
    top: 50%;
    -ms-transform: translate(-50%, -100%);
    -webkit-transform: translate(-50%, -100%);
    transform: translate(-50%, -100%);
    transform-origin: 50% 50%;
    -ms-transform-origin: 50% 50%;
    -webkit-transform-origin: 50% 50%;
  }

  /*load animate*/
  .loading_area .loader .load1,
  .loading_area .loader .load2 {
    opacity: 0;
    display: inline-block;
    vertical-align: middle;
  }

  .loading_area .loader .load1.fadeIn,
  .loading_area .loader .load2.fadeIn {
    opacity: 1;
  }

  .loading_area .loader .load1 {
    width: 285px;
    height: 81px;
    text-align: right;
  }

  .loading_area .loader .load2 {
    width: 355px;
    font-size: 2rem;
    color: #333;
    text-align: left;
    letter-spacing: 0.1rem;
    font-weight: 700;
  }

  .loading_area .loader .load2:before {
    content: "\f00d";
    display: inline-block;
    font-weight: 900;
    font-size: 1.5rem;
    width: 80px;
    color: #f39118;
    text-align: center;
    letter-spacing: 0;
  }

  .loading_area .loader * {
    transition: all 1s ease;
  }

  /*樣式 & 效果*/
  .action2 {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
    -webkit-transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
    -moz-transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
    -o-transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
    -ms-transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  .action2:hover {
    -webkit-transform: scale(0.98);
    -ms-transform: scale(0.98);
    transform: scale(0.98);
  }

  /*圖文小圖*/
  .video .v-link {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  /*主選單*/
  header .navbar-expand-lg .navbar-nav,
  header .sub-title,
  .sidebar {
    font-size: 19px;
  }

  header .nav-item.show>a:before {
    content: "";
    position: absolute;
    bottom: -13px;
    left: 50%;
    margin: 0 auto 0 -8px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 8px 8px;
    border-color: transparent transparent #447a6a;
  }

  header .item-wrap .single {
    position: relative;
    z-index: 1;
    height: 100%;
    background: #f1f1f2;
    background: #f1f1f1;
    box-shadow: 0 -10px 12px rgba(0, 0, 0, 0.15);
    background: -moz-linear-gradient(top,
        rgba(247, 247, 247, 1) 0%,
        rgba(255, 255, 255, 1) 100%);
    background: -webkit-linear-gradient(top,
        rgba(247, 247, 247, 1) 0%,
        rgba(255, 255, 255, 1) 100%);
    background: linear-gradient(to bottom,
        rgba(247, 247, 247, 1) 0%,
        rgba(255, 255, 255, 1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f7f7f7', endColorstr='#ffffff', GradientType=0);
  }

  header .item-wrap .group .dropdown-item:last-child {
    padding-bottom: 100px;
  }

  header .group a:hover {
    background: #326c9e;
    color: #fff;
    border-radius: 3px;
  }

  header.fixed .nav-item.show>a:before {
    bottom: -2px;
  }

  header .dropdown-menu .item-wrap {
    overflow-x: hidden;
    overflow-y: scroll;
    height: 100%;
    background: rgba(255, 255, 255, 0.8);
    background: transparent;
  }

  .dropdown-menu .item-wrap.scrollbar-style::-webkit-scrollbar {
    width: 6px;
  }

  .dropdown-menu .item-wrap.scrollbar-style::-webkit-scrollbar-thumb {
    background-color: #326c9e;
  }

  .dropdown-menu .mask {
    pointer-events: none;
    position: fixed;
    z-index: 1;
    top: 400px;
    left: 0;
    right: 0;
    width: 100%;
    height: 50px;
    margin: 75px auto 0;
    background: linear-gradient(to bottom,
        rgba(255, 255, 255, 0) 0%,
        #fcfcf8 90%,
        #fcfcf8 100%);
  }

  .fixed .dropdown-menu .mask {
    margin-top: 15px;
  }

  header .dropdown-menu.long {
    height: 70vh;
  }

  .dropdown-menu.long .mask {
    top: 70vh;
  }

  header .search i {
    position: absolute;
    top: 50%;
    right: 8px;
    transform: translateY(-50%);
    z-index: 2;
  }

  header .search input {
    opacity: 0;
    border: 0;
    width: 0;
    position: absolute;
    top: 0;
    right: 0;
    line-height: 2;
    background: transparent !important;
    transition: all 0.3s cubic-bezier(0, 0, 0.29, 0.63);
  }

  header .search.on {
    width: 180px;
  }

  header .search.on input {
    width: 100%;
    opacity: 1;
    padding: 0 12px !important;
    padding-right: 35px !important;
    outline: none;
  }

  header .navbar-expand-lg .navbar-nav .nav-link:hover {
    color: #447a6a;
  }

  header .dropdown-menu {
    -o-transition: all 0.2s linear;
    -webkit-transition: all 0.2s linear;
    -moz-transition: all 0.2s linear;
    transition: all 0.2s linear;
  }

  header .dropdown-menu:not(.show) {
    display: block;
    opacity: 0;
    pointer-events: none;
  }

  header .dropdown-menu.show {
    opacity: 1;
  }

  header .dropdown-item:focus,
  header .dropdown-item:hover {
    background: transparent;
  }

  /*首頁－博愛影音*/
  .index-video {
    background-attachment: fixed;
  }

  /*首頁－最新消息*/
  .index-news .item .info {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 1rem;
    height: 90px;
    padding: 1.25rem 1rem 0rem;
    border-left: solid 4px rgba(255, 255, 255, 0.5);
    -o-transition: all 0.3s linear;
    -webkit-transition: all 0.3s linear;
    -moz-transition: all 0.3s linear;
    transition: all 0.5s ease-in-out;
  }

  .index-news .info .date {
    position: absolute;
    left: 1rem;
    top: 0;
    letter-spacing: 0.05rem;
    -ms-transform: translate(0, -50%);
    -webkit-transform: translate(0, -50%);
    transform: translate(0, -50%);
  }

  .index-news .info .view {
    right: 1rem;
  }

  .index-news .item:hover .info {
    height: 150px;
    left: 0;
    padding-top: 2rem;
    background: rgba(50, 108, 158, 0.9);
  }

  /*頁尾*/
  footer .foot-contact ul li a:hover {
    color: #fff;
  }

  footer .foot-contact ul li a:hover i {
    opacity: 0.5;
    -ms-transform: translate(0, -10px);
    -webkit-transform: translate(0, -10px);
    transform: translate(0, -10px);
  }

  /*列表*/
  [class$="title-list"] a:hover,
  [class$="title-list2"]>ul>li a:hover {
    background: #eee;
  }

  [class$="title-list"] a:hover h2,
  [class$="title-list2"]>ul>li a:hover h2,
  [class$="photo-list"]:not(.dl-photo-list) a:hover h2 {
    color: #326c9e;
  }

  /*次選單*/
  .siderbar-nav .item a:hover {
    color: rgba(255, 255, 255, 0.5);
  }

  /*右側選單*/
  .btn-right ul li:hover {
    background: #1a5283;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3) inset;
  }

  /*重大訊息框*/
  .lotung_mesg .container {
    padding: 2em;
  }

  /*該看哪一科*/
  .subject-list .adult #adult5 {
    top: 85%;
    right: 20%;
  }

  .subject-list .adult #adult10 {
    top: 85%;
    left: 20%;
  }
}

/*列印*/
@media print {

  .toolBar,
  .banner,
  .breadcrumb {
    display: none !important;
  }

  .wrapper {
    padding: 20px !important;
  }

  body {
    padding-top: 0;
  }

  header,
  footer,
  nav,
  .btn-wrap {
    display: none !important;
  }
}

@page {
  size: A4 portrait;
}

.register .login {
  max-width: 600px;
  margin: 2rem auto;
  background: #f2f2f2;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 5px 12px rgb(0 0 0 / 15%);
  background: #fff;
}

.m-wrap .title2 .mjTitle {
  display: block;
  padding: 1.5rem rem 0 1.2rem;
  margin-bottom: 2rem;
  border-top: solid thin #ddd;
  border-bottom: solid thin #ddd;
  position: relative;
}

.register .login .item ul,
.register .login .item p {
  padding-left: 40px;
  list-style: none;
  margin: 0;
}

.register .login .item ul li:not(:last-child) {
  margin-right: 1rem;
}

.register .btn-wrap {
  display: flex;
  justify-content: center;
  margin: 2rem 0 0;
}

body {
  position: relative;
  padding-top: 123px;
}

body,
h3,
.form-control {
  font-size: 18px;
  line-height: 1.6;
}

.form-group {
  display: flex;
  align-items: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.register .login .item ul li {
  display: inline-block;
  line-height: normal;
  padding: 0.5rem 0.5rem 0.5rem 1.5rem;
}

.custom-control-label::after {
  position: absolute;
  top: 0.25rem;
  left: -1.5rem;
  display: block;
  width: 1rem;
  height: 1rem;
  content: "";
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
}

body {
  font-size: 18px;
}

.form-group input,
.form-group select {
  padding: 0 0.5rem;
  width: calc(100% - 40px);
  height: 44px;
  line-height: 44px;
  border: solid thin #ddd;
  outline: none;
  transition: all 0.3s linear;
  border-radius: 3px;
}

.form-group label {
  margin-bottom: 0;
  margin-right: 0.5rem;
  width: 30px;
}

.form-group label i {
  color: #447a6a;
  font-size: 1.5rem;
}

.i-cancel .title2 .mjTitle {
  display: block;
  padding: 1.5rem 0 1.2rem;
  margin-bottom: 2rem;
  border-top: solid thin #ddd;
  border-bottom: solid thin #ddd;
  position: relative;
  font-size: 1.75rem;
  font-weight: 400;
}

.i-cancel .title2 .mjTitle:before {
  content: '';
  display: block;
  width: 40px;
  height: 4px;
  background: #447A6A;
  position: absolute;
  top: -3px;
  left: 0;
}
</style>
