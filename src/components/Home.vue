<template>
     <div class="my-form">
          <div class="row group total-box">
               <div class="col-lg-6">                    
                    $ {{total}}
               </div>
          </div>
          <div class="row group input-box">
               <div class="col-lg-6">                    
                    <div class="form-group">
                         <input class="form-control" type="text" id="name" placeholder="Nombre del producto">
                    </div>
                    <div class="form-group">
                         <input class="form-control" type="number" id="price" placeholder="Precio">                         
                    </div>                              
                    <div class="form-group">
                         <input class="form-control" type="number" id="qty" placeholder="Cantidad">                         
                    </div>                              
               </div>     
          </div>
          <div class="group">
               <div class="btn-group">
                    <button class="btn btn-primary btn-tool" id="addItem" @click="addItem">Agregar</button>
                    <button class="btn btn-success btn-tool" id="updateItem" @click="updateItem">Actualizar <span id="i_id"></span></button>
                    <button class="btn btn-warning btn-tool" id="cancel" @click="cancel">Cancelar</button>
               </div>
          </div>
          <div class="row group">
               <div class="col-lg-6 item-list">
                    <ul class="list-group">
                         <li class="list-group-item" v-for="i in this.itemList" :key="i.id">
                              <div class="">
                                   {{i.id}} | {{i.name}} <br /> Precio: ${{i.price}} Cantidad: {{i.qty}}
                                   <div class="btn-group">
                                        <button title="Edit" 
                                                  class="btn btn-sm btn-dark btn-tool" 
                                                  id="editItem" 
                                                  @click="editItem(i)">
                                                       <icon name="edit" scale="1"></icon>
                                        </button>                              
                                        <button title="Delete" 
                                                class="btn btn-sm btn-danger btn-tool" 
                                                id="deleteItem" 
                                                @click="deleteItem(i.id)">
                                                       <icon name="trash" scale="1"></icon>
                                        </button>                              
                                   </div>
                              </div>
                         </li>
                    </ul>
               </div>
          </div>
     </div>
</template>

<script>
/* eslint-disable no-console */
import { IDB } from '../lib/IDB'
import { Item } from '../lib/Item'

export default {
    name: 'Home',
    data(){
        return {
              itemList: [],
              item: null,
              idEl: null,
              nameEl: null,
              priceEl: null,
              qtyEl: null,
              btnAdd: null,
              btnUpdate: null,
              total: 0
        }
     },
     mounted(){
          console.log("Home is mounted")
          this.item = new Item(new IDB())
          this.listItem()
          this.clearForm()
          this.hideUpdateButton()
          this.calcTotal()
          this.idEl = document.querySelector("#i_id"),
          this.nameEl = document.querySelector("#name"),
          this.priceEl = document.querySelector("#price")
          this.qtyEl = document.querySelector("#qty")
     },
     // computed: {
     //      total: function(){
     //           this.listItem()
     //      }
     // },
     methods: {
          addItem(){
               this.item.add({
                    name: this.nameEl,
                    price: this.priceEl,
                    qty: this.qtyEl
               })    
               this.listItem()
               this.clearForm()
               this.calcTotal()
          },
          editItem(item){
               let $pid = this.idEl
               $pid.innerText = "#"+item.id
               $pid.dataset.pid = item.id
               this.nameEl.value = item.name
               this.priceEl.value = item.price   
               this.qtyEl.value = item.qty   
               this.showUpdateButton()
          },
          updateItem(){                                
               this.item.update({
                    id: this.idEl.dataset.pid,
                    name: this.nameEl,
                    price: this.priceEl,
                    qty: this.qtyEl
               })
               this.clearForm()
               this.listItem()
               this.calcTotal()
               this.hideUpdateButton()
          },
          deleteItem(id){
               this.item.delete(id)
               this.listItem()
               this.clearForm()
          },
          listItem(){             
               setTimeout(() => {
                    this.itemList = this.item.getAll()
                    this.total = 0
                    this.itemList.forEach(element => {
                         let curr = parseFloat(element.price*element.qty)
                         this.total += curr                    
                    })
                    console.log(this.total)
               }, 200);               
          },
          cancel(){
             this.clearForm()
             this.hideUpdateButton()
          },
          clearForm(){
               var idEl = document.querySelector("#i_id")
               var nameEl = document.querySelector("#name")
               var priceEl = document.querySelector("#price")
               var qtyEl = document.querySelector("#qty")
               idEl.innerText = ""
               idEl.dataset.pid = null
               nameEl.value = ""
               priceEl.value = ""
               qtyEl.value = ""
               nameEl.focus()  
          },
          showUpdateButton(){
               document.querySelector("#addItem").style.display="none"
               document.querySelector("#updateItem").style.display="block"
          },
          hideUpdateButton(){
               document.querySelector("#addItem").style.display="block"
               document.querySelector("#updateItem").style.display="none"
          },
          calcTotal(){
               /*this.total = 0         
               this.listItem()
               console.log(this.itemList)
               //this.itemList.reverse()
               this.itemList.forEach(element => {
                    console.log(element.name,element.price)
                    let curr = parseFloat(element.price*element.qty)
                    this.total += curr                    
               })*/
          },
     }
}
</script>
<style>
     .my-form {color: white}
     .list-group {color: #000; cursor: pointer}
     .group {margin-bottom: 10px}
     .btn-tool {margin-right: 5px}
     .item-list {
          overflow-y: scroll;
          overflow-x: hidden;
          max-height: 340px;
     }
     .total-box {margin-top: 15px; font-size: 20px; font-weight: bold;}
     .input-box {margin-top: 15px}
</style>