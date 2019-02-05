/* eslint-disable no-console */

export class Item {
     
     constructor(db){
          this._db = db
     }

     add(item) {
          let time = new Date().getTime()
          var active = this._db.result;
          var data = active.transaction(["items"], "readwrite");
          var object = data.objectStore("items");

          var request = object.add({          
               name: item.name.value,
               email: item.email.value,
               created_at: time
          });

          request.onerror = e => {
               console.error(e);
          };

          data.oncomplete = () => {
               item.name.value = '';          
               item.email.value = '';
               console.log('Objeto agregado correctamente', time);
          };
     }

     update(item){
          var time = new Date().getTime()
          var active = this._db.result;
          var data = active.transaction(["items"], "readwrite");
          var object = data.objectStore("items");

          var name = item.name.value
          var email = item.email.value

          var selected = object.get(parseInt(item.id));
               selected.onsuccess = function() {     
               var data = selected.result;
                    
               data.name = name;
               data.email = email
          
               var request = object.put(data);
                         
               request.onsuccess = () => {
                    console.log("Updated", time)
               };
          };

     }

     delete(id){

          var time = new Date().getTime()
          var active = this._db.result;
          var data = active.transaction(["items"], "readwrite");
          var object = data.objectStore("items");

          var request = object.delete(parseInt(id))

          request.onsuccess = () => {               
               console.log("Person deleted", time)
          }

          request.onerror = e => {
               console.error(e)
          }
     }

     getAll(){          
          var active = this._db.result;
          var data = active.transaction(["items"], "readonly");
          var object = data.objectStore("items");

          var elements = [];

          object.openCursor().onsuccess = function (e) {

               var result = e.target.result;

               if (result === null) {
                    return elements;
               }

               elements.push(result.value);
                    result.continue();
          };

          data.oncomplete = function () {
               //console.log(elements)
          }     
          
          return elements
     }
}