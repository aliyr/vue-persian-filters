<template>
  <div id="app">
    {{num | toPersianNumber}}
    <br>
    <span dir="rtl" >{{date | toPersianDate('dddd')}}</span>
    <br>
    <span dir="rtl">{{date | toRelativeDate}}</span>
    <br>
    <span dir="rtl">{{num | toPersianCurrency(cur , 1) }}</span>
    <br>
    <span dir="rtl">{{words | toPersianTruncate(23 , '-')}}</span>
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
      date: new Date(1212121111),
      cur: 'تومان',
      words: 'در اداره ی تامین شهربانی جنوب تهران'
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
