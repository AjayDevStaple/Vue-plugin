<template>
    <div class="col-12">
        <h1 class="post-title">Sub Service</h1>
    </div>
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

export default {
    name: 'HomePage',
    components: {
        BookingPageVue
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
                "endDate": "2022-11-28",
                "pass": "Kumar",
                "shiftNo": "1",
                "startDate": "2022-11-21",
                "userId": "webapp"
            }
            _services.outGetWebSchebasic(data)
            .then(res => {
             
                this.arrayData0 = res.data.data;
                console.log('res1>>>>>', res.data.data)

                
               

            }).catch(err => {
                console.log(err)
            })
        },

        redirect(index) {
            
            console.log(this.arrayData0?.[index])
            const data =  {
                data : this.arrayData0?.[index]
            }            
            console.log(data)
            this.$router.push({name: 'Booking',
            params: data ,   
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
  
<style>
.card {
    background: #ffffff30 !important;
    backdrop-filter: blur(10px);
    border-radius: 10px !important;
}

.card-image {
    border-radius: 10px 10px 0 0;
    height: 15rem
}

.post-title {
    font-family: sans-serif;
    font-size: 60px;
}

.sub-service .left-sub h2 {
    font-size: 1.75rem;
    font-weight: 400;
}

.sub-service .right-sub ul li {
    margin: 0;
    padding: 0;
    line-height: 18px;
}

.sub-service table thead td:first-child {
    width: 110px;
}

.sub-service table thead td {
    color: #fff;
    text-align: center;
    width: calc((100% - 110px) / 6);
    padding: 1em;
    border-right: solid thin #ddd;
}

.sub-service table thead td .fas {
    font-size: 2.4rem;
    color: rgba(255, 255, 255, 0.8);
    text-shadow: 0 5px 10px rgb(0 0 0 / 30%);
}

.sub-service table thead td h4 {
    font-size: 18px;
    margin: 0;
    font-weight: 400;
}

.sub-service table thead td p {
    font-size: 18px;
    margin: 0 !important;
    font-weight: 400;
    line-height: 1.6;
}

.sub-service table thead {
    cursor: pointer;
    background: #447A6A;
}

.sub-service .table-border-radius {
    width: 100%;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0 3px 12px rgb(0 0 0 / 10%);
    margin: 2rem 0;
}

.sub-service table tbody td {
    vertical-align: middle;
    text-align: center;
    border-right: solid thin #ddd;
}

.sub-service table tbody td:last-child {
    border-right: 0;
}

.sub-service table tbody tr:nth-child(even) {
    background: #eef5f3;
}

.sub-service table tbody tr {
    border-bottom: solid thin #ddd;
}


button.dropbtn {
    background: transparent;
    border-color: transparent;
}
</style>