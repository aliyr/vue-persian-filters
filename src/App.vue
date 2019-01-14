<template>
  <div id="app">
    {{num | toPersianNumber}}
    <br>
    <span>{{date | toPersianDate('dddd')}}</span>
    <br>
    <span dir="rtl">{{date | toRelativeDate}}</span>
    <br>
    <span dir="rtl">{{num | toPersianCurrency(cur , 1) }}</span>
    <br>
    <span dir="rtl">{{words | toPersianTruncate(28)}}</span>
    <br>
    <span dir="rtl">{{num2 | toPersianDigits}}</span>
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
      date: '3/5/95',
      cur: 'تومان',
      words: 'در اداره ی تامین شهربانی جنوب تهران',
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
