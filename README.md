# vue-persian-filters

a vue plugin for filtering strings and arrays 

## installation
#### npm :
```
npm install vue-persian-filters
```
When used with a module system, you must explicitly install the filters via Vue.use() :
```
import vuePersianFilters from "vue-persian-filters"
import Vue from "vue"

Vue.use(vuePersianFilters);
```

## Usage

#### toPersianNumber

+ Example:

  ```js
  {{ msg | toPersianNumber }} // '1234' => '۱۲۳۴'
  ```


#### toPersianDate

+ Arguments:
  * `{String} [format] - default : null`

+ Examples:

  ```js
  {{ date | toPersianDate('dddd') }} // '3/5/95' => 'یک‌شنبه'
  ```
  ```js
  {{ date | toPersianDate('MMM YY') }} // new Date() => '۱۳۹۷ دی' 
  ```
  ```js
  {{ date | toPersianDate('hh:mm:ss') }} // new Date() => '۰۲:۰۳:۲۲' 
  ```
  
    #####hint: 
    `toPersianDate` filter uses [moment.js](http://momentjs.com/) date formats, So fill free to Use any of date formats that Moment gives to you 

#### toRelativeDate

+ Example:

  ```js
  {{ msg | toRelativeDate }} // 'new Date()' => ‫‫‫‫۴ دقیقه پیش 
  ```
#### toPersianCurrency

+ Arguments:
  * `{String} [currency] - default : 'ریال'`
  * `{Number} [decimalLimit] - default : 2`
  * `{Object} [Options]`

+ Options:
  * `{String} [separator] - default : ','`
  * `{String} [decimalSeparator] - default : '.'`
  
+ Examples:
    ```js
    {{num | toPersianCurrency }} // -1243234.588 =>‫     ‫۱,۲۴۳,۲۳۴.۵۹- ریال 
    ```
    ```js
    // cur = 'تومان'
  
    {{num | toPersianCurrency(cur, 1) }} // -1243234.588 =>‫     ۱,۲۴۳,۲۳۴.۶- تومان‫ 
    ```
    ```js
    // cur = 'مگابایت'
      
    {{num | toPersianCurrency(cur, 1 , {separator: '.', decimalSeparator: ','}) }} // 1243234.588 =>‫     ۱.۲۴۳.۲۳۴,۶ مگابایت 
    ```
#### toPersianDigits

+ Example:

    ```js
    {{num | toPersianDigits }} // 1534221 => ‫  ‫یک میلیون و پانصد و سی و چهار هزار و دویست و بیست و یک 
    ```
    ##### Hint: 
    Decimal and negative numbers not supported by `toPersianDigits` yet, but we try to implement it in newer versions :)

#### toPersianTruncate

+ Arguments:
  * `{Number} [characterLimit] - default : 10`
  
+ Example:
    ```js
    {{num | toPersianDigits(28) }} // در اداره ی شهرداری جنوب تهران =< ‫ در اداره ی شهرداری جنوب ...
    ```
