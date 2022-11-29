<template>
  <div class="container b-page">
    <span class="main-head"
      >Registration information
      <span class="main-head-red"
        >(registration has not been completed, please fill in the
        information)</span
      ></span
    >

    <Row class="row">
     <div class="col-md-12 maindiv">
        <Row class="row maindiv-inner">
            <Col class="col-md-6 firstDiv">
                <div class="row">
                  <div class="col-md-6 firstDivCont">
                    <div class="divFlex">
                    <span class="tags">Date of visit</span>
                    <span>2022/11/16 (Wednesday)</span>
                    </div>
                  </div>
                  <div class="col-md-6 firstDivCont">
                    <div class="divFlex">
                        <span class="tags">Section</span>
                    <span>Family Medicine</span>
                    </div>
                  </div>
                </div>
        
                <div class="row">
                  <div class="col-md-6 firstDivCont">
                   <div class="divFlex">
                    <span class="tags">doctor</span>
                    <span> Zhang Xianzheg</span>
                   </div>
                  </div>
                  <div class="col-md-6 firstDivCont">
                    <div class="divFlex">
                        <span class="tags">Consultation period</span>
                        <span
                          >He picked up the burnt end of the branch and made a mark on the
                          stone. Day 52 if the marks on the stone were accurate. He couldn't
                          be sure. Day and nights had begun to blend together creating
                          confusion, but he knew it was a long time. Much too long.</span
                        >
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6 firstDivCont">
                   <div class="divFlex">
                    <span class="tags"> Consultation location</span>
                    <span> Consulting room 97, Floor 05 , Outpatient Building</span>
                   </div>
                  </div>
                  <div class="col-md-6 firstDivCont"> 
                    <div class="divFlex">
                        <span class="tags"> appoinment number</span>
                        <span> 009</span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col class="col-md-6 secondDiv">
                <div class="radio-box">
                    <div class="radio-btns">
                        <input
                          type="radio"
                          id="loginID_3"
                          name="idType"
                          value="0"
                          onclick="show_birth(3)"
                          v-model="idType"
                        />
                        <label>
                          <font style="vertical-align: inherit">
                            <font style="vertical-align: inherit">ID number</font>
                          </font>
                        </label>
                      </div>
              
                      <div class="radio-btns">
                        <input
                          type="radio"
                          id="loginID_3"
                          name="idType"
                          value="1"
                          onclick="show_birth(3)"
                          v-model="idType"
                        />
                        <label>
                          <font style="vertical-align: inherit">
                            <font style="vertical-align: inherit">Medical record number</font>
                          </font>
                        </label>
                      </div>
              
                      <div class="radio-btns">
                        <input
                          type="radio"
                          id="loginID_3"
                          name="idType"
                          value="2"
                          onclick="show_birth(3)"
                          v-model="idType"
                        />
                        <label>
                          <font style="vertical-align: inherit">
                            <font style="vertical-align: inherit">passport number</font>
                          </font>
                        </label>
                      </div>
              
                      <div class="radio-btns">
                        <input
                          type="radio"
                          id="loginID_3"
                          name="idType"
                          value="3"
                          onclick="show_birth(3)"
                          v-model="idType"
                        />
                        <label>
                          <font style="vertical-align: inherit">
                            <font style="vertical-align: inherit">Residance card number</font>
                          </font>
                        </label>
                      </div>
                </div>
        
                <div class="form-group">
                  <label for="label"><i class="far fa-id-card"></i></label>
                  <input
                    type="text"
                    name="patData"
                    id="patData"
                    class="form-control"
                    placeholder="Example: A12345678"
                    onchange="chk_password(1)"
                    onkeyup="input_strtoupper(this,event)"
                    v-model="patData"
                  />
                  <small id="patData_txt" class="red warning_txt"></small>
                </div>



        
                <div class="form-group">
                  <label for="label"><i class="far fa-id-card"></i></label>
                  <input
                    type="text"
                    name="birthdate"
                    id="patData"
                    class="form-control"
                    placeholder="Please enter your birthday(the date of the Republic of China)"
                    onchange="chk_password(1)"
                    onkeyup="input_strtoupper(this,event)"
                    v-model="birthDate"
                  />
                  <small id="patData_txt" class="red warning_txt"></small>
                </div>

        
                <span class="mid-text"
                  >  Example:The date of birth date is January 1, 1982, please enter 0820101</span
                >
        
                <div class="form-group">
                  <label for="label"><i class="far fa-id-card"></i></label>
                  <input
                    type="text"
                    name="mobile"
                    id="patData"
                    class="form-control"
                    placeholder="Please enter the mobile number"
                    v-model="userId"
             
                  />
                  <small id="patData_txt" class="red warning_txt"></small>
                </div>
        
                <hr />
        
                <div class="Card">
                  <span
                    class="badge badge-success badage-style"
                    style="background-color: #447a6a"
                    >Dosing agent:</span
                  >
                 <div class="radio-box mt-3">
                    <div class="radio-btns">
                        <input
                          type="radio"
                          id="loginID_3"
                          name="idType"
                          value="2"
                          onclick="show_birth(3)"
                        />
                        <label>
                          <font style="vertical-align: inherit">
                            <font style="vertical-align: inherit"
                              >Book your first dose</font
                            >
                          </font>
                        </label>
                      </div>
                      <div class="radio-btns">
                        <input
                          type="radio"
                          id="loginID_3"
                          name="idType"
                          value="2"
                          onclick="show_birth(3)"
                        />
                        <label>
                          <font style="vertical-align: inherit">
                            <font style="vertical-align: inherit">Book a second dose</font>
                          </font>
                        </label>
                      </div>
                      <div class="radio-btns">
                        <input
                          type="radio"
                          id="loginID_3"
                          name="idType"
                          value="2"
                          onclick="show_birth(3)"
                        />
                        <label>
                          <font style="vertical-align: inherit">
                            <font style="vertical-align: inherit"
                              >Reserve the third dose (additional dose)</font
                            >
                          </font>
                        </label>
                      </div>
                      <div class="radio-btns">
                        <input
                          type="radio"
                          id="loginID_3"
                          name="idType"
                          value="2"
                          onclick="show_birth(3)"
                        />
                        <label>
                          <font style="vertical-align: inherit">
                            <font style="vertical-align: inherit"
                              >Reserve the fourth dose (additional dose)</font
                            >
                          </font>
                        </label>
                      </div>
                 </div>
        
                  <span class="main-head-red box-red-btn">
                    The conditions for injection will be explained in each special
                    clinic. if in not met when you report, the hospitial will not be
                    able to provide injection.</span
                  >
                </div>
        <div class="btn-div">

            <span class="btn" @click="handleSubmit">Confirm</span>
                <span class="btn1">Cancel</span>

        </div>
       
       
                
              </Col>
        </Row>
     </div>
    </Row>
  </div>
</template>

<script lang="ts">
import { _services } from "./../../../Services/Api/index";
export default {
  name: "BookingPage",
  components: {},
  props: ['data'],
  methods: {
    handleSubmit() {

           setTimeout(() => {
            this.$router.push({name: 'Booking-Success'}) 
           },3000)
   


      const data = {
  birthDate: this.birthDate, //input
  deptCode: "string",
  deptRoom: "string",
  docCode: "string",
  idType: this.idType, //input
  opdDate: "string",
  pass: "Kumar",
  password: this.password,
  patData: this.patData, //input
  regIp: "string",
  regWay: "string",
  shiftNo: "早班",
  userId: this.userId
     
}

     
      _services.outCheckFvRv(data)
        .then((res) => {
          console.log(res.data.code)
          console.log(res.data.data)


         
            this.$router.push({name: 'Booking-Success'})  
         console.log("chaleya")
         
        })
        .catch((err) => {
          console.log(err);
        });
    },

    getData() {
      console.log('=====>>>',  this.$route.params)
    }
    },
 
  data() {
    return {
  birthDate: "",
  deptCode: "",
  deptRoom: "",
  docCode: "",
  idType: "",
  opdDate: "2022-11-29T04:43:47.780Z",
  pass: "Kumar",
  password: "",
  patData: "",
  regIp: "string",
  regWay: "string",
  shiftNo: "string",
  userId: ""

    };
  },
  beforeMount() {
    this.getData();
  },
};
</script>

<style>
.btn-div {
    display: flex;
}
.b-page .main-head {
  display: block;
  padding: 1.5rem 0 1.2rem;
  margin: 2rem 0;
  border-top: solid thin #ddd;
  border-bottom: solid thin #ddd;
  position: relative;
  font-size: 1.75rem;
  font-weight: 400;
}

.b-page .Card {
  border-width: 1px !important;
  border-color: #447a6a !important;
  height: 264px;
  width: 100%;
  border-radius: .75rem;
  overflow: hidden;
}
.b-page .radio-box {
    
}
.b-page .radio-box .radio-btns {
    display: inline-block;
    line-height: normal;
    padding: 0.5rem 0.5rem 0.5rem 1.5rem;
}

.badage-style {
  width: 90px;
}

.btn1 {
    flex-direction: row;
  width: 90px;
  background-color: white !important;
  margin-left: 200px;
  margin-top: 50px;
  border-radius: 34px !important;
  border: 1px solid #447a6a ;
  text-align: center;
  
}


.btn {
    flex-direction: row;
  width: 90px;
  background-color: #447a6a !important;
  margin-left: 110px;
  margin-top: 50px;
  border-radius: 34px !important;
}
.b-page .maindiv{
    padding: 0 30px;
}
.b-page .maindiv-inner {
    border-radius: 1rem;
    box-shadow: 0 3px 12px rgb(0 0 0 / 10%);
    overflow: hidden;
    margin-bottom: 3rem;
}
.b-page .firstDiv
{
    border-right: solid 4px #447a6a;
    padding: 2rem 2rem;
}
.firstDivCont .divFlex {
    display: flex;
    margin-bottom: 15px;
}

/*.radio-box input[type="radio"] {
    display: none;
}*/
.radio-box label{
    font-size: 18px;
}
.white-btn {
  width: 90px;
  margin-left: 200px;
  margin-top: 50px;
  border-radius: 34px !important;
  background-color: white !important;
  border-color: #447a6a !important;
}

.firstDiv {
  background-color: #e9f4ed;
}

.firstDivCont {
    font-size: 18px;
    font-weight: 700;
}
.secondDiv {
    padding: 2rem;
}
.secondDiv .card .badge {
    font-size: 18px;
    line-height: 1.6;
    width: 27%;
    border-radius: 0 0 5px 0;
}
.b-page .main-head-red {
  color: red;
  font-size: 22.4px;
}
.form-group {
    display: flex;
    align-items: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}
.form-group label {
    margin-bottom: 0;
    margin-right: 0.5rem;
    width: 30px;
}
.form-group input, .form-group select {
    padding: 0 0.5rem;
    width: calc(100% - 40px);
    height: 44px;
    line-height: 44px;
    border: solid thin #ddd;
    outline: none;
    transition: all .3s linear;
    border-radius: 3px;
}
.form-group label i {
    color: #447A6A;
    font-size: 1.5rem;
}
.mid-text{
    font-size: 18px;
    line-height: 1.6;
    padding-left: 40px;
    display: block;
}
.box-red-btn {
    font-size: 14.4px !important;
    padding: 0 15px;
}
.tags {
  background-color: #447a6a;
  color: #fff;
  width: 90px;
  margin-right: 1rem;
  padding: 0 0.5rem;
  border-radius: 3px;
  height: 100%;
}
</style>
