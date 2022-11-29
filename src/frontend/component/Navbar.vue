<template>
    <div class="Main-div">
       <div class="sub-menu">
        Section registration
       </div>

       <div class="sub-menu">
        Physician Registration
       </div>
        <div class="sub-menu">
        see clinic number query
        </div>
        <div class="sub-menu">
        Inquiry and Cancellation
        </div>
        <div class="sub-menu">

        Stop consulation inquiry
        
        </div>
        <div class="sub-menu">
        Make an appoinment to pick up medicine
        </div>
    </div>




</template>

<script lang="ts">
import axios from "axios";


export default {
  name: 'Navbar',
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
.Main-div {
    background-color: #4886b8 !important;
    height: 200px !important;
    display: flex;
    
}
.sub-menu {
    

    background-color:#4886b8 !important;
    color: whitesmoke;
    flex-direction: row;

}

</style>