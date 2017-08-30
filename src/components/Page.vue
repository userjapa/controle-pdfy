<template>
  <div class="hello">
    <h1>{{ val }}</h1>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      val: 0
    }
  },
  sockets: {
    connect: function() {
      console.log('Connected')
    },
    next: function() {
      this.$data.val++;
    },
    preview: function() {
      this.$data.val--;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
