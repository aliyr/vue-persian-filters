<template>
  <div id="app">
    {{num | toPersianNumber}}
    <br>
    <span>{{date | toPersianDate(' Do MMMM YYYY')}}</span>
    <br>
    <span >{{date | toRelativeDate}}</span>
    <br>
    <span>{{num | toPersianCurrency(cur , 2, {separator: '.', decimalSeparator: ','}) }}</span>
    <br>
    <span>{{words | toPersianTruncate(28)}}</span>
    <br>
    <span>{{num2 | toPersianDigits}}</span>
    <br>
    <button @click="increase">increase </button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function () {
    return {
      num: -1243234.588,
      date: new Date(),
      cur: 'تومان',
      words: 'در اداره ی شهرداری جنوب تهران',
      num2: '1534221'
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
