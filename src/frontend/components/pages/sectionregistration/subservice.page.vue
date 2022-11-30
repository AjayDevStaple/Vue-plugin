<template>
    <div class="register">
        <div class="container sub-service">
            <hr>
            <div class="row">
                <div class="col-md-6 left-sub">
                    <h2>
                        COVID-19 Vaccination: BNT
                    </h2>
                </div>
                <div class="col-md-6 right-sub">
                    <ul>
                        <li>
                            The injection conditions have been explained in each special clinic. Please choose the
                            correct type of injection. If you find that you do not meet the requirements when you
                            report, the hospital will not be able to provide consultation and injection.
                        </li>
                        <li>
                            Boai only provides public-funded vaccines, and you must bring your health insurance card,
                            yellow card, and mobile phone when you register.
                        </li>
                        <li>
                            The fourth dose is open to 1. Elderly people
                            over the age of 65 can register online
                        </li>
                        <li>
                            2. The first category of personnel, airport ports, home quarantine, airline crew members and
                            staff related to institutions and social welfare care systems, residents of long-term care
                            institutions, and diplomatic substitute draft men (Requires a notification letter from the
                            Government Office to replace the service contract) Please call the consultation hotline to
                            register.
                        </li>
                        <li>
                            In order to avoid extra trips, please check your qualifications before registering. You are
                            welcome to call in advance for confirmation.
                        </li>
                        <li>
                            Consultation hotline: 03-9543131, extension 3152; or through the official LINE of Luodong
                            Pok Oi Hospital. (Service hours: Monday to Friday 08:00-12:00, 13:00-16:30)
                        </li>
                    </ul>
                </div>
            </div>

            <hr>
            <div class="register-table">
                <table class="table-border-radius">
                    <thead>
                        <tr>
                            <td>
                                <button class="dropbtn" @click="showMore = !showMore" v-if="showMore"><i
                                        class="fas fa-chevron-circle-up"></i></button>
                                <button class="dropbtn" @click="showMore = !showMore" v-else="showMore"><i
                                        class="fas fa-chevron-circle-down"></i></button>
                            </td>
                            <td v-for="(value, index) in arrayData0">
                                <h4>{{ createConversation(value.opdDate) }}</h4>
                                <p>{{ DateConversation(value.opdDate) }}</p>
                            </td>
                            

                        </tr>
                    </thead>
                    <tbody v-show="showMore">
                        <tr>
                            <td>
                                <p>
                                    morning
                                </p>
                            </td>
                            <td v-for="(value, index) in arrayData0">


                                <span @click="redirect(index)" v-if="value.shiftNo == 1">{{ value.docName }}</span>
                            </td>
                        </tr>
                        <tr >
                            <td>noon</td>
                            <td v-for="(value, index) in arrayData0">
                                <span v-if="value.shiftNo == 2">{{ value.docName }}</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            

        </div>
    </div>

</template>
  
<script lang="ts">
import { _services } from './../../../../Services/Api/index'
import BookingPageVue from '../Booking.page.vue'
import { isProxy, toRaw } from 'vue';

export default {
    name: 'HomePage',
    components: {
        BookingPageVue
    },
    components: {
        navigation
    },
    data() {
        return {
            arrayData0: [],
            arrayData1: null,
            showMore: false,


            
        }
    },
    methods: {
        getData() {
            const data = {


                "deptCode": "woman",
                "deptRoom": "236",
                "docCode": "3732",
                "endDate": "2022-12-13",
                "pass": "Kumar",
                "shiftNo": "1",
                "startDate": "2022-11-30",
                "userId": "webapp"
            }
            _services.outGetWebSchebasic(data)
            .then(res => {
             
                this.arrayData0 = res.data.data;
            _services.outGetWebSchebasic(data).then(res => {
                this.arrayData0 = res.data.data
                console.log(this.$route.query.abc)
                /* this.arrayData0 = res.data.data[0]
                this.arrayData1 = res.data.data[1] */
               

                
               

            }).catch(err => {
                console.log(err)
            })
        },
    },
    redirect(index) {
         
            const data2send = {
                "deptName" : toRaw(this.arrayData0?.[index].deptName),
                "deptCode" : toRaw(this.arrayData0?.[index].deptCode),
                "opdDate" : toRaw(this.arrayData0?.[index].opdDate),
                "shiftNo" : toRaw(this.arrayData0?.[index].shiftNo),
                "docName": toRaw(this.arrayData0?.[index].docName),
                "webRoomDesc": toRaw(this.arrayData0?.[index].webRoomDesc),
                "roomDesc": toRaw(this.arrayData0?.[index].roomDesc),
                "nextNum" : toRaw(this.arrayData0?.[index].nextNum),
                "deptRoom" : toRaw(this.arrayData0?.[index].deptRoom),
                "docCode" : toRaw(this.arrayData0?.[index].docCode),
                "regIp" : toRaw(this.arrayData0?.[index].regIp),
                "regWay" : toRaw(this.arrayData0?.[index].regWay),
            }
          
           
                 
            console.log('========> data of sub',data2send)
            this.$router.push({name: 'Booking',
            params: data2send ,
            
            
        }) 
        },
        createConversation: function (id) {
            var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            var d = new Date(id);
            var dayName = days[d.getDay()];
            return dayName;
            /* console.log(dayName) */
        },
        DateConversation: function (id) {
            var d = id.split("-");
            var dayName = d[1]+'/'+d[2];
            return dayName;
            /* console.log(dayName) */
        }
    },
    beforeMount() {
        this.getData()
    },
}
</script>
  
<style scoped src="../../pages/styles/subservice.page.css">

</style>