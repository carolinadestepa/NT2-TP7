<template>
 <section class="src-components-Formulario">
  <div class="formulario">
     <h2>Formulario</h2>
      <hr>
      <hr>
      <br>

      <vue-form :state="formState" @submit.prevent="enviar()">
    
        <!-- -------------------------------- -->
        <!--   Campo nombre + validaciones    -->
        <!-- -------------------------------- -->
        <validate tag="div">

          <label for="nombre">Nombre</label>
          <input 
            type="text"
            id="nombre"
            class="form-control"
            name="nombre"
            autocomplete="off"
            v-model.trim="formData.nombre" 
            required 
            :minlength="nombreMinLength"
            :maxlength="nombreMaxLength"
            no-espacios
            no-numero
          />
    
          <field-messages name="nombre" show="$dirty">
            <!-- <div class="alert alert-success mt-1">Success!</div> -->
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="minlength" class="alert alert-danger mt-1">
              Este campo debe poseer al menos {{nombreMinLength}} caracteres.
            </div>
             <div slot="maxlength" class="alert alert-danger mt-1">
              Este campo debe poseer como máximo {{nombreMaxLength}} caracteres.
            </div>
            <div slot="no-espacios" class="alert alert-danger mt-1">
              Este campo no debe poseer espacios intermedios.
            </div>
            <div slot="no-numero" class="alert alert-danger mt-1">
              Sólo se pueden ingresar letras.
            </div>
          </field-messages>
        </validate>

        <validate tag="div">

          <label for="edad">Edad</label>
          <input 
            type="number"
            id="edad"
            class="form-control"
            name="edad"
            autocomplete="off"
            v-model.trim="formData.edad" 
            required 
            :min="edadMin"
            :max="edadMax"
            no-espacios
            
          />
    
          <field-messages name="edad" show="$dirty">
            <!-- <div class="alert alert-success mt-1">Success!</div> -->
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="min" class="alert alert-danger mt-1">
              La edad minima es {{edadMin}} años.
            </div>
             <div slot="max" class="alert alert-danger mt-1">
              La edad máxima es {{edadMax}} años.
            </div>
            <div slot="no-espacios" class="alert alert-danger mt-1">
              Este campo no debe poseer espacios intermedios.
            </div>
           
          </field-messages>

          
        </validate>

         <validate tag="div">

          <label for="email">Mail</label>
          <input 
            type="email"
            id="email"
            class="form-control"
            name="email"
            autocomplete="off"
            v-model.trim="formData.email" 
            required 
            no-espacios
            
          />
    
          <field-messages name="email" show="$dirty">
            <!-- <div class="alert alert-success mt-1">Success!</div> -->
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="email" class="alert alert-danger mt-1">
              El formato ingresado no es valido.
            </div>
             <div slot="no-espacios" class="alert alert-danger mt-1">
              Este campo no debe poseer espacios intermedios.
            </div>
           
          </field-messages>

          
        </validate>
       <button class="btn btn-success my-4" :disabled="formState.$invalid"
          type="submit">
          Enviar
        </button>

          <hr>
       <p><b>DATOS CARGADOS</b></p>

      <div class="table-responsive">
              <table class="table table-dark" v-if="usuarios.length" >
                  <tr>
                      <th>ID</th>
                      <th>Nombre</th>
                      <th>Edad</th>
                      <th>Email</th>
                  </tr>
                  <tr v-for="(usuario,index) in usuarios" :key="index">
                      <td>{{ index + 1 }}</td>
                      <td>{{ usuario.name }}</td>
                      <td>{{ usuario.edad }}</td>
                      <td>{{ usuario.email }}</td>
                  </tr>
              </table>
              <div class="alert alert-danger mt-1" v-else>
                <p>No hay datos cargados</p>
              </div>
      </div>


   </vue-form>

  <!----componente tabla que recorre las keys y agrega los datos-->
   <tabla :posts="agregados"/> 

  </div>
  </section>
</template>

<script>

import tabla from './tabla.vue'

export default {
  name: 'src-components-Formulario',
  components: {
    tabla
  },
   props: {
   
  },
   data () {
      return {
        formState : {},
        formData : this.getInicialData(),
        //formData: {nombre:null,edad.... } = formData: this.getIni
        nombreMinLength : 5,
        nombreMaxLength : 15,
        edadMin: 18,
        edadMax: 120,
        usuarios: [],
        url:"https://628960e7e5e5a9ad3218b1b3.mockapi.io/usuarios/usuarios"
      }
    },
    methods: {
      getInicialData() {
        return {
          nombre : null,
          edad: null,
          email: null
        }
      },
      enviar() {

        this.postUsuario()
        console.log({...this.formData})

        this.formData = this.getInicialData()
        this.formState._reset()
      },
      async postUsuario() {
        let usuarioNew = {
          name: this.formData.nombre,
          edad:this.formData.edad,
          email:this.formData.email
        }
        try {
          let { data: usuario } = await this.axios.post(this.url, usuarioNew, {'content-type' : 'application/json'})
          console.log('AXIOS POST usuario', usuario)
          this.usuarios.push(usuario)
        }
        catch(error) {
          console.error('Error en postUsuario()', error.message)
        }
      },
    },
    computed: {

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
