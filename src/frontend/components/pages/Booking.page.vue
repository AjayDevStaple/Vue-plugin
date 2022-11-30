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
                    <span class="tags">Consultation Date</span>
                    <span>{{this.$route.params.opdDate}}</span>
                    </div>
                  </div>
                  <div class="col-md-6 firstDivCont">
                    <div class="divFlex">
                        <span class="tags">Department</span>
                    <span>{{this.$route.params.deptName}}</span>
                    </div>
                  </div>
                </div>
        
                <div class="row">
                  <div class="col-md-6 firstDivCont">
                   <div class="divFlex">
                    <span class="tags">doctor</span>
                    <span>{{this.$route.params.docName}}</span>
                   </div>
                  </div>
                  <div class="col-md-6 firstDivCont">
                    <div class="divFlex">
                        <span class="tags">Consultation Time</span>
                        <span
                          >{{this.$route.params.shiftNo}}</span
                        >
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6 firstDivCont">
                   <div class="divFlex">
                    <span class="tags"> Consultation location</span>
                    <span> {{this.$route.params.webRoomDesc}}</span>
                   </div>
                  </div>
                  <div class="col-md-6 firstDivCont"> 
                    <div class="divFlex">
                        <span class="tags"> appoinment number</span>
                        <span>{{this.$route.params.roomDesc}}</span>
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
import { isProxy, toRaw } from 'vue';
export default {
  name: "BookingPage",
  components: {},
  props: ['data'],
  methods: {
    handleSubmit() {

          //  setTimeout(() => {
          //   this.$router.push({name: 'Booking-Success'}) 
          //  },3000)
   


  const data = {
  birthDate: this.birthDate, //input
  deptCode: this.$route.params.deptCode,
  deptRoom: this.$route.params.deptRoom,
  docCode: this.$route.params.deptRoom,
  idType: this.idType, //input
  opdDate: this.$route.params.opdDate,
  pass: "Kumar",
  password: this.password,
  patData: this.patData, //input
  regIp: this.$route.params.regIp,
  regWay: this.$route.params.regWay,
  shiftNo: this.$route.params.shiftNo,
  userId: this.userId 
}

     
      _services.outCheckFvRv(data)
        .then((res) => {
          console.log(res.data.code)
          console.log(res.data.data)
            // this.$router.push({name: 'Booking-Success'})  

          
         
        })
        .catch((err) => {
          console.log(err);
        });
    },

    getData() {
      console.log('=====> boolking >>',  this.$route.params.deptName)
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


<style scoped src="../../../frontend/components/pages/styles/Booking.page.css">

</style>


