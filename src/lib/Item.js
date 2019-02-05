/* eslint-disable no-console */

export class Item {
     
     constructor(db){
          this._db = db
     }

     add(item) {          
          this._db.items.add(item)
     }

     /*update(item){
          
     }

     delete(id){
          
     }*/

     clean(){
          this._db.items.clear()
     }

     getAll(){          
          return this._db.items.toArray()
     }

}