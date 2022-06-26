<template>
  <section class="src-components-http">
  
   <div class="container">
   
      <div>Lista Usuarios {{getPostAxios()}}</div>
 </div>

<hr>
    <tabla :posts="post" />
  
  </section>
</template>

<script lang="js">
import tabla from './tabla.vue'
  export default  {
  components: {
      tabla
   },
   name: 'src-components-http',
    props: [],
    mounted () {
    },
    data () {
      return {
        post:[],
        url:"https://628960e7e5e5a9ad3218b1b3.mockapi.io/usuarios/usuarios"
      }
    },
    methods: {
  
   async getPostAxios(){
     try{
     const response = await this.axios(this.url)
    
        this.post = response.data
     }catch(error)
        {console.log(error)
   }
  }
      },
    computed: {
    }
}
</script>

<style scoped lang="css">
.src-components-http {
height: 93vh;
}
.container{
  display: flex;
  justify-content: space-around;
  padding-top: 20px;
  
}
hr{
  color: rgb(255, 0, 0);
}
</style>