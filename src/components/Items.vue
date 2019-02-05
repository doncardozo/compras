<template>
     <div class="row">
          <div class="col-lg-12">
               <div class="row selection-group">
                    <ul class="list-group " id="items">
                         <li v-for="i in items" class="list-group-item" :key="i.name">                              
                              {{i.name}}<br />
                              Precio: {{i.price}} Cant.: {{i.qty}}<br />
                              Subtotal: {{(i.price*i.qty).toFixed(2)}}
                         </li>
                    </ul>
               </div>
          </div>
     </div>
</template>
<script>
export default {
     props: ['item','items','total'],
}
</script>
<style>
     .list-group {
          max-height: 450px;
          overflow-x: hidden;
          overflow-y: scroll;
          width: 100%          
     }     
</style>


