<template>
     <div class="total">$ {{ this.total.toFixed(2) }} ({{this.items.length}})</div>
</template>
<script>
export default {
     props: ['total', 'items'], 
}
</script>
<style>
     .total { color: white; font-size: 30px; font-weight: bold; margin-top: 15px }
</style>