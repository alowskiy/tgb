<script>
export default{
  data(){
   rp: [1,2,3]
  },
  methods:{
    fetchLboard: function(){
    fetch('https://jsonplaceholder.typicode.com/users/').then(
      response =>
         response.json()
      
    ).then(
      data => {  this.rp  = data

   
          console.log(this.rp[1])
        

      }
    )
     
  }
}
}
</script>

<template>
{{ fetchLboard() }}

  <main>
      
 <div class="bg_img">
<div class="lbord">



  <div class="el_list" v-for="item in this.rp">
   <div class="lb_av" ></div>
    <div class="el_gr">
    <div class="name">{{item.name}}</div>
    <div class="inc">{{item.phone}}</div>
  </div>
  <div class="num">#1</div>
  </div>


 </div>
 <div class="lol">
  <div class="bg_fade"><img src="../assets/pics/creation(2).png" alt=""></div></div> 

</div>
  </main>
</template>

<style>
*{
  margin: 0;
}
.bg_fade>img{
width: 100%;


}
.lb_av{
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: red;
  margin-left: 3%;
}
.el_gr{
  margin-left: 4%;
}
.num{
  margin-left: auto;
  margin-right: 3%;
}
.el_list:nth-of-type(1){
  margin-top: 4%;
}
.el_list{
  background: #000;
  width: 60%;
  height: 35px;
  display: flex;
  align-items: center;
}
.lbord{ 
position: absolute;
display: flex;
align-items: center;
color: white;
width: 100%;
margin: 0 auto;
flex-direction: column;
gap: 12px;

}
.bg_fade{
  position: relative;
  
  height: 100;

z-index: -3;

 
}
.lol{
    background-color: rgba(0,0,0,0.7);
}
</style>