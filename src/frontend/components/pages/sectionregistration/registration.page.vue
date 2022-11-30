<template>
    <div class="title2">
        <h1 class="mjTitle">
         Section registration
          <div class="note-group">
            <p class="note">
                 . Children's vaccines are open for appointments and children
                  are encouraged to be vaccinated. Please click on the type of
                  vaccine you want to administer and register at the Pediatric
                  Vaccination Clinic.
            </p>
          </div>
        </h1>
      </div>

    <div class="mobile-accord">
        <Accordion>
            <AccordionTab header="Header I">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error
                    repudiandae numquam</p>
            </AccordionTab>
            <AccordionTab header="Header II">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error
                    repudiandae numquam</p>
            </AccordionTab>
            <AccordionTab header="Header III">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error
                    repudiandae numquam</p>
            </AccordionTab>
        </Accordion>
    </div>

    <div class="register">
        <article class="list-body">
            <section class="list" v-for="(value, index) in arrayData0">
                <h3>
                    <span>{{ value.deptSys }}</span>
                    <i class="fas fa-chevron-circle-down btn-i"></i>
                </h3>
                <div class="content" >
                    <ul >
                        <li v-for="(abcdata, index) in value.deptList">
                            <a :href="`${url}#/subservice?deptSysCode=${value.deptSysCode}&deptCode=${value.deptSys}`"
                                class="dot_title" title="COVID-19 Vaccination: BNT">
                                   {{ abcdata.deptName }}
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
            
        </article>
    </div>
</template>
  
<script lang="ts">
import { _services } from './../../../../Services/Api/index'

export default {
    name: 'HomePage',
    components: {},
    data() {
        return {
            arrayData0: null,
            arrayData1: null,
            showMore: false,
            url: null,
        }
    },
    methods: {
        getData() {
            var currentUrlorigin = window.location.origin;
            var currentUrl = window.location.pathname;
            console.log(`Current URL => ${currentUrlorigin+currentUrl}`);
            const data = {
                "pass": "Kumar",
                "type": "dept",
                "userId": "webapp"
            }
            _services.outGetWebList(data).then(res => {
                this.arrayData0 = res.data.data
                this.url = currentUrlorigin+currentUrl;         
                console.log('res1>>>>>', res.data.data[0])
            }).catch(err => {
                console.log(err)
            })
            
        }
    },
    beforeMount() {
        this.getData()
    },
}
</script>
  
<style scoped src="../styles/registration.page.css">

</style>