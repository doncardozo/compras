/* eslint-disable no-console */

export class IDB {
     
     constructor(){          
          this.db = null          
          this.db = indexedDB.open("object", 1);
          this.db.onupgradeneeded = () => {
               var active = this.db.result;               
               active.createObjectStore("items", {
                    keyPath : 'id', autoIncrement : true 
               });
          };
          this.db.onsuccess = () => {               
               console.log('Base de datos cargada correctamente');
          };
          this.db.onerror = e =>  {
               console.error(e.target.error.message);
          };

          return this.db
     }       
}
