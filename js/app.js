function newContact(name, phone, address){
  
return{
    name: name,
    phone: phone,
    added: Date(),
    address: { 
        street: address.street, // address['street']
        state: address.state,
        city: address.city,
      
    },
    id: undefined,
  };
  
};


function contactList(){
  return{
    contactList:[],
    interval: 1,
    
    add: function(contact){
      contact.id = this.interval;
      this.interval += 1;
      this.contactList.push(contact);
    },
      
     find: function(nameFind){
     "use strict";
     var nameMatches =[];
     for (let contact of this.contactList) {
       var match = contact.name.search(nameFind);
       if(match >= 0) {
         nameMatches.push(contact);
       };
     };
     return nameMatches;
   },
 }

};
  get: function(getNumber){
  "use strict";
  var numberMatches = [];
  for( let number)
  }

