
   
    <template>
        <div class="container b-page">
          <span class="main-head"
            >
            <i class="fas fa-check-circle"></i>
            Registered successfully
          </span>
      
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

                         <p>
                          <strong>Registration is successful!</strong>
                         </p>
                        
                        <p class="mt-4">
                          <strong>General outpatient consultation time</strong>, morning consultation 8:30-12:00, afternoon consultation 13:30-16:30, evening consultation time 18:00-20:00
                        </p>
                        
                        <p>
                          <strong>Dental on-site registration time:</strong>
                           Monday to Friday 08:00-11:00 am, 13:00-15:30pm,
                        </p>
                        
                        <p> 18:00-1930 in the evening, 08:00-11:00 in the morning of Saturday</p>
                        
                        <hr>
                        
                         <p>
                          After the video-consultation patient completes the registration, please join the offical LINE and take the initiatve to send a screenshot of the registration completion. (ID: @lotungpohai, or click on the mobile phone link : <a href="#">https://lin.ee/aINIcxd</a> )
                         </p>
                        
                
                      
                    </Col>
              </Row>
              <div class="btn-div-suc text-center mb-3">
      
                <span class="btn">build a healthier self</span>
                    <span class="btn">News/Education</span>
                    <span class="btn blue-btn">Print</span>
    
            </div>
           </div>
          </Row>
        </div>
      </template>
    
    
 
    
    <script lang="ts">
    
    
    
    export default {
      name: 'Booking-Success',
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
    .btn-div-suc .btn {
      margin: 0 15px !important;
      width: auto;
      font-size: 18px;
      color: #fff;
      font-weight: 500;
    }
    .btn-div-suc .btn:hover{
      color: #fff;
    }
    .btn-div-suc .blue-btn {
      background-color: #326c9e !important;
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
        font-size: 18px;
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
    .main-head .fa-check-circle {
      color: #f39118;
    }
    </style>