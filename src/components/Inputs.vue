<template>
     <div class="input-tool">
          <input type="text" required class="form-control" id="name" placeholder="Nombre del producto" />
          <input type="number" required class="form-control" id="price" placeholder="Precio">
          <input type="number" required class="form-control" id="qty" placeholder="Cantidad">
          <div class="btn-group">
               <button class="btn btn-primary add-btn" id="insertItem" @click="insert">Agregar</button>
               <button class="btn btn-warning add-btn" id="updateItem" @click="update">Actualizar</button>
               <button class="btn btn-danger add-btn" id="cleanList" @click="clean">Limpiar</button>
          </div>
     </div>
</template>
<script>
/* eslint-disable */
export default {
     props: ['total'],
     mounted() {
          this.hideUpdateButton()
     },
     methods: {
          insert(){
               var name = document.querySelector("#name")
               var price = document.querySelector("#price")
               var qty = document.querySelector("#qty")
               if(name.value.length > 0 && price.value.length > 0 && qty.value.length > 0){
                    this.$emit('insert', {name: name.value, price: price.value, qty: qty.value})
                    name.value=""
                    price.value=""
                    qty.value=""
                    name.focus()    
               }
          },
          update(){
               this.$emit('update')
          },
          clean(){
               this.$emit('clean')
          },
          showUpdateButton(){
               document.querySelector("#insertItem").style.display="none"
               document.querySelector("#updateItem").style.display="block"
          },
          hideUpdateButton(){
               document.querySelector("#insertItem").style.display="block"
               document.querySelector("#updateItem").style.display="none"
          }
     }
}
</script>
<style>
     .input-tool {margin-top: 5px; width: 100%; }
     .add-btn {margin-top: 15px; margin-bottom: 15px}
     input { width: 100%; }
     .form-control { margin-bottom: 3px}     
</style>