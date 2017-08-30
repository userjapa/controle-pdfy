<template>
    <div>
        <div>
            <button @click="next()">Next</button>
        </div>
        <div>
            <button @click="preview()">Preview</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'control',
    methods: {
      next: function() {
          this.$socket.emit('next')
      },
      preview: function() {
          this.$socket.emit('preview')
      }
    },
    sockets: {
        connect: function() {
            console.log('connected')
        }
    }
}
</script>

<style scoped>
    button {
        background: white;
        border: 2px solid black;
        border-radius: 15px;
        color: black;
    }
</style>