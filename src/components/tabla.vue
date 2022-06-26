<template>
  <section class="src-components-tabla">
    <div v-if="posts.length" class="table">
      <table class="table  table-dark ">
        <!-- encabezado de la tabla -->
        <tr>
          <th v-for="(col, index) in getCols" :key="index">{{ col }}</th>
        </tr>

        <!-- filas con los datos -->
        <tr v-for="(post, index) in posts" :key="index">
          <td v-for="(col, index) in getCols" :key="index">{{ post[col] }}</td>
        </tr>
      </table>
    </div>
  </section>
</template>

<script lang="js">
  export default  {
    name: 'src-components-tabla',
    props: ['posts'],
    mounted () {
    },
    data () {
      return {
      }
    },
    methods: {
    },
    computed: {
      getCols() {
        return Object.keys(this.posts[0])
      }
    }
}
</script>

<style scoped lang="css">
.src-components-tabla {
}
</style>