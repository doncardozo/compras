/* eslint-disable no-console */

export class Item {
     
     constructor(db){
          this._db = db
     }

     add(item) {          
          this._db.items.add(item)
          .catch(e => console.log(e))
     }

     update(item){          
          this._db.items.update(parseInt(item.id), {
               name: item.name,
               price: item.price,
               qty: item.qty
          }).catch(e => console.log(e))     
     }

     delete(id){
          this._db.items.delete(parseInt(id))
          .catch(e => console.log(e))
     }

     clean(){
          this._db.items.clear()
     }

     getAll(){          
          return this._db.items.toArray()
     }

}