<template>
     <div class="total">{{ this.total.toFixed(2) }}</div>
</template>
<script>
export default {
     props: ['total'],
     /*computed: {
          total: function(){
               return this.total
          }
     },*/     
}
</script>
<style>
     .total { color: white; font-size: 18px }
</style>


