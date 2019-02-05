<template>
     <div id="app">
          <div class="">
               <div class="col-lg-12">
                    <div class="row">
                         <div class="col-lg-12">
                              <total v-bind:total="this.total"
                                     v-bind:items="this.items"
                                />
                         </div>
                    </div>
                    <div class="row">
                         <Inputs v-bind:total="this.total"
                                   @add="adding($event)" 
                                />
                    </div>
                    <div class="row">
                         <div class="col-lg-12">
                              <Items v-bind:items="this.items"                                        
                                     v-bind:total="this.total" 
                                />
                         </div>
                    </div>
               </div>
          </div>    
     </div>
</template>

<script>

import {IDB} from './lib/IDB'
import {Item} from './lib/Item'
import Total from './components/Total.vue'
import Items from './components/Items.vue'
import Inputs from './components/Inputs.vue'

export default {
  name: 'app',
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
       adding(data){      
          this.iObj.add(data)
          this.listItems()
          this.calcTotal()          
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
  },
  components: {
    Total,
    Items,
    Inputs
  }
}
</script>

<style>
     .container {border: 1px solid #fff}
</style>
