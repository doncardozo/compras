<template>
     <div id="app">
          <div class="">
               <div class="col-lg-12">
                    <div class="row">
                         <div class="col-lg-12">
                              <total v-bind:total="this.total"
                                     v-bind:items="this.items"
                                     ref="totalComponent"
                                />
                         </div>
                    </div>
                    <div class="row">
                         <Inputs v-bind:total="this.total"
                                 v-bind:items="this.items"
                                  @insert="insertItem($event)" 
                                  @update="updateItem($event)" 
                                  @clean="cleanList($event)" 
                                  ref="inputComponent"
                                />
                    </div>
                    <div class="row">
                         <div class="col-lg-12">
                              <Items v-bind:items="this.items"
                                    @edit="editItem($event)"
                                    @remove="removeItem($event)"
                                    ref="itemsComponent"
                                />
                         </div>
                    </div>
               </div>
          </div>    
     </div>
</template>

<script>
/* eslint-disable */

import {IDB} from './lib/IDB'
import {Item} from './lib/Item'
import Total from './components/Total.vue'
import Items from './components/Items.vue'
import Inputs from './components/Inputs.vue'

export default {
  name: 'app',
  components: {
    Total,
    Items,
    Inputs
  },
  data(){
    return {
      total: 0,
      items: [],
      iObj: null
    }
  },
  mounted(){    
    this.iObj = new Item(new IDB())
    this.listItems()
  },
  methods: {
    insertItem(data){          
      this.iObj.add(data)
      this.listItems()   
    },
    updateItem(data){
      this.iObj.update(data)   
      this.listItems()
      this.$refs.inputComponent.cleanInputs()
      this.$refs.inputComponent.hideUpdateButton()
    },
    cleanList(){
      this.iObj.clean()
      this.listItems()
    },
    editItem(data){
      this.$refs.inputComponent.showUpdateButton()
      this.$refs.inputComponent.setInputs(data)
    },
    removeItem(id){
      this.iObj.delete(id)
      this.listItems()
      this.$refs.inputComponent.cleanInputs()
    },
    calcTotal(){
      this.total = 0
      this.items.reverse()
      this.items.forEach(element => {
            let curr = parseFloat(element.price*element.qty)
            this.total += curr
      });
    },
    async listItems(){
      this.items = await this.iObj.getAll()
      await this.calcTotal()
    }
  }
}
</script>

<style>
     .container {border: 1px solid #fff}
</style>
