<template>
  <div id="app">
    <!-- {{num | toPersianNumber}}
    <br>
    <span> {{date | toPersianDate(' Do MMMM YYYY')}} تاریخ ماست </span>
    <br>
    <span >{{date | toRelativeDate}}</span>
    <br>
    <span>در این رقم {{num | toPersianCurrency(cur , 2, {separator: '.', decimalSeparator: ','}) }} بدهی وجود دارد</span>
    <br>
    <span>در این رقم ۱۲۴۳۲۳۴.۵۸۸- بدهی وجود دارد</span>
    <br>
    <span>{{words | toPersianTruncate(28)}}</span>
    <br>
    <span>{{num2 | toPersianDigits}}</span>
    <br>
    <button @click="increase">increase </button> -->
  </div>
</template>

<script>
export default {
  name: "app",
  data: function () {
    return {
      num: -1243234.588,
      date: new Date(),
      cur: "تومان",
      words: "در اداره ی شهرداری جنوب تهران",
      num2: "1534221",
    };
  },
  methods: {
    increase() {
      this.num++;
    },
  },
};
</script>

<style lang="scss"></style>
