export function pluralize(name, count) {
    if (count === 1) {
      return name
    }
    return name + 's'
  }
  
  // function that opens the database connection, creates the object store (if it's the first time using it on the machine) and runs whatever transaction we need to have run on a successful connection
  // So when we call the function, we'll open the connection to the database and then connect to the object store that we pass in as storeName.
  // Then we'll perform a transaction, using the method and object values to help carry it out.
  export function idbPromise(storeName, method, object) {
    // We also wrap the whole thing in a Promise, making it a lot easier to work with IndexedDB's asynchronous nature.
    return new Promise((resolve, reject) => {
      // open connection to the database `shop-shop` with the version of 1
      const request = window.indexedDB.open('project_dEd', 1);
  
      // create variables to hold reference to the database, transaction (tx), and object store
      let db, tx, store;
  
      // if version has changed (or if this is the first time using the database), run this method and create the three object stores
      // Remember that with IndexedDB, the .onupgradeneeded() event only runs if the browser notices that the version number in the .open() method has changed since the last time, or if the browser has never connected to the database before and 1 is the new version. 
      // Any other time this code executes and the version is still 1, the .onupgradeneeded() will not run.
      request.onupgradeneeded = function(e) {
        const db = request.result;
        // create object store for each type of data and set "primary" key index to be the `_id` of the data
        //  Last time, we simply let them use their built-in auto increment features. But now, we'd like to provide the actual index value we want to use for looking up data. 
        // Because that index value will be the MongoDB _id property for each donation or category, it makes sense to set the keyPath name to _id.
        db.createObjectStore('donations', { keyPath: '_id' });
        db.createObjectStore('categories', { keyPath: '_id' });
        db.createObjectStore('checkout', { keyPath: '_id' });
      };
  
      // handle any errors with connecting
      request.onerror = function(e) {
        console.log('There was an error');
      };
  
      // on database open success
      request.onsuccess = function(e) {
        // save a reference of the database to the `db` variable
        db = request.result;
        // open a transaction do whatever we pass into `storeName` (must match one of the object store names)
        tx = db.transaction(storeName, 'readwrite');
        // save a reference to that object store
        store = tx.objectStore(storeName);
  
        // if there's any errors, let us know
        db.onerror = function(e) {
          console.log('error', e);
        };
  
        // a switch statement to check what the value of the method is.
        switch (method) { 
          // Both the put and get methods will return the data to wherever we call this idbPromise() function.
  
          // If it's put, then we run the .put() method on the object store, overwriting any data with the matching _id value from the object and adding it if it can't find a match.       
          case 'put':
            store.put(object);
            resolve(object);
            break;
  
          // If it's get, we'll simply get all data from that store and return it. 
          case 'get':
            const all = store.getAll();
            all.onsuccess = function() {
              resolve(all.result);
            };
            break;
          
            // If the value is delete, we'll delete that item from the object store. This option will come in handy if users want to remove an item from the shopping cart while offline.
          case 'delete':
            store.delete(object._id);
            break;
            
          default:
            console.log('No valid method');
            break;
        }
  
        // when the transaction is complete, close the connection
        tx.oncomplete = function() {
          db.close();
        };
      };
  
    });
  };