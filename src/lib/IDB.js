/* eslint-disable no-console */
import Dexie from 'dexie'

export class IDB {
     
     constructor(){          
          var db = new Dexie("items");
          db.version(1).stores({
              items: '++id,name,price,qty'
          });

          return db
     }       

}
