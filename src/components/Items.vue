<template>
     <div class="row">
          <div class="col-lg-12">
               <div class="row selection-group">
                    <ul class="list-group " id="items">
                         <li v-for="i in items" class="list-group-item" :key="i.id">                              
                              {{i.name}}<br />
                              Precio: {{i.price}} Cantidad: {{i.qty}}<br />
                              Subtotal: {{(i.price*i.qty).toFixed(2)}}
                              <button title="Edit" 
                                        class="btn btn-sm btn-dark btn-tool" 
                                        id="edit" 
                                        @click="edit(i)">
                                             <icon name="edit" scale="1"></icon>
                              </button>                              
                              <button title="Delete" 
                                        class="btn btn-sm btn-danger btn-tool" 
                                        id="delete" 
                                        @click="remove(i.id)">
                                             <icon name="trash" scale="1"></icon>
                              </button>
                         </li>
                    </ul>
               </div>
          </div>
     </div>
</template>
<script>
/* eslint-disable */

export default {
     props: ['items'],
     methods: {
          edit(item){
               this.$emit('edit', item)
          },
          remove(id){
               this.$emit('remove', id)
          }
     }
}
</script>
<style>
     .list-group {
          max-height: 380px;
          overflow-x: hidden;
          overflow-y: scroll;
          width: 100%          
     }     
     #edit {
          margin-left: 15px
     }
</style>


