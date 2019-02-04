     <template>
     <div>
          <input type="text" required class="form-control" id="name" placeholder="Nombre del producto" />
          <input type="number" required class="form-control" id="price" placeholder="Precio">
          <input type="number" required class="form-control" id="qty" placeholder="Cantidad">
          <button class="btn btn-primary" id="add" @click="add">Agregar</button>
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

</style>


