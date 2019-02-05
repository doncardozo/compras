<template>
     <div class="input-tool">
          <input type="text" required class="form-control" id="name" placeholder="Nombre del producto" />
          <input type="number" required class="form-control" id="price" placeholder="Precio">
          <input type="number" required class="form-control" id="qty" placeholder="Cantidad">
          <div class="btn-group">
               <button class="btn btn-primary add-btn" id="insertItem" @click="insert">Agregar</button>
               <button class="btn btn-warning add-btn" id="updateItem" @click="update">Actualizar #<span id="i_id"></span></button>
               <button class="btn btn-info add-btn" id="cancelAction" @click="cancel">Cancelar</button>
               <button class="btn btn-danger add-btn" id="cleanList" @click="askClean">Limpiar</button>
          </div>
          <div class="modal" tabindex="-1" role="dialog">
               <div class="modal-dialog" role="document">
                    <div class="modal-content">
                         <div class="modal-header">
                         <h5 class="modal-title">Limpiar lista</h5>
                         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                         </button>
                         </div>
                         <div class="modal-body">
                         <p>¿Desea eliminar todos los items?</p>
                         </div>
                         <div class="modal-footer">
                         <button type="button" class="btn btn-danger" @click="clean">Si</button>
                         <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
                         </div>
                    </div>
               </div>
          </div>
     </div>
</template>
<script>
/* eslint-disable */
export default {
     props: ['total','items'],
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
                    name.value = ""
                    price.value = ""
                    qty.value = ""
                    name.focus()    
               }
          },
          update(){
               var iId = document.querySelector("#i_id")
               var name = document.querySelector("#name")
               var price = document.querySelector("#price")
               var qty = document.querySelector("#qty")
               if(iId.innerText.length > 0 && 
                    name.value.length > 0 && 
                    price.value.length > 0 && 
                    qty.value.length > 0){
                    this.$emit('update', {id: iId.innerText, name: name.value, price: price.value, qty: qty.value})
               }
          },
          askClean(){
               if(this.items.length > 0){
                    $('.modal').modal('show')
               }
          },
          clean(){
               this.$emit('clean')    
               $('.modal').modal('hide')                         
          },
          cancel(){
               this.hideUpdateButton()
               this.cleanInputs()
          },
          cleanInputs(){
               document.querySelector("#i_id").innerText = ""
               document.querySelector("#price").value = ""
               document.querySelector("#qty").value = ""
               let name = document.querySelector("#name")
               name.value=""
               name.focus()
          },
          setInputs(item){
               document.querySelector("#i_id").innerText = item.id
               document.querySelector("#name").value = item.name
               document.querySelector("#price").value = item.price
               document.querySelector("#qty").value = item.qty
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