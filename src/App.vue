<template>
  <div id="app">
    {{num | toPersianNumber}}
    <br>
    {{date | toPersianDate('dddd')}}
    <br>
    {{date | toRelativeDate}}
    <br>
    <span>{{num | toPersianCurrency()}}</span>
    <br>
    <button @click="increase">increase </button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function () {
    return {
      num: 1234.588,
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
