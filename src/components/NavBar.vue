<template>

  <section class="src-components-nav-bar">

    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <!-- Opción ruta root -->
       <router-link to= "/">
        <a class="navbar-brand mx-3" href="#">Inicio</a>
       </router-link>

      <button class="navbar-toggler mx-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-3">
          <!-- Opción ruta binding -->
        <li class="nav-item">
          <router-link to="/formulario">    
              <a class="nav-link" href="#">Formulario</a>
          </router-link>  
          </li>

          
        <li class="nav-item">
               <router-link to="/http">
              <a class="nav-link" href="#">Axios</a>
               </router-link>
        </li>
        
        </ul>
      </div>
    </nav>
  </section>

</template>

<script>

  export default  {
    name: 'src-components-nav-bar',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-nav-bar {

  }
</style>
