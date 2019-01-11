<template>
  <div id="app">
    {{num | toPersianNumber}}
    {{date | toPersianDate}}
    <button @click="increase">increase </button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function () {
    return {
      num: 1234,
      date: new Date()
    }
  },
  methods: {
    increase () {
      this.num++
    }
  }
}
</script>

<style lang="scss"></style>
