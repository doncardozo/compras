<template>
     <div class="input-tool">
          <input type="text" required class="form-control" id="name" placeholder="Nombre del producto" />
          <input type="number" required class="form-control" id="price" placeholder="Precio">
          <input type="number" required class="form-control" id="qty" placeholder="Cantidad">
          <div class="btn-group">
               <button class="btn btn-primary add-btn" id="add" @click="add">Agregar</button>
               <button class="btn btn-warning add-btn" id="update" @click="add">Actualizar</button>
               <button class="btn btn-danger add-btn" id="remove" @click="add">Eliminar</button>
          </div>
     </div>
</template>
<script>
export default {
     props: ['total'],
     methods: {
          add(){
               var name = document.querySelector("#name")
               var price = document.querySelector("#price")
               var qty = document.querySelector("#qty")
               if(name.value.length > 0 && price.value.length > 0 && qty.value.length > 0){
                    this.$emit('add', {name: name.value, price: price.value, qty: qty.value})
                    name.value=""
                    price.value=""
                    qty.value=""
                    name.focus()       
               }
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


