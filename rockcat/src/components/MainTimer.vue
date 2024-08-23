<template>
  <p v-if="timePressed">Comeback in {{new Date(this.d).getHours() }}: {{new Date(this.d).getMinutes()  }} to get 25 inches  </p>
  <button @click="walklol">Walk Up!</button>

</template>

<script>
export default {
  data() {
    return {
   timePressed: false
    };
  },
  methods:{
walklol:function(){
this.d = new Date()

this.d.setHours(this.d.getHours() + 5)
this.timePressed = true






 
   
    
}
    
  }

}

</script>