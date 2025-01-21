/*
- Interface to define Structure of Contact Object,
- Store Lists of Contacts in Arrays
- CRD operations on contacts
- Enums to define Actions: Add, View, Delete,
- Use Type Aliases for Reusuable Types
*/


// interface definition
interface Contact {
    id:Number,
    name:String,
    phone:Number,
    address?:String,
    email?: String //optional property
}

// defining objects from interfaces
const person1 : Contact = {
    id:1,
    name:'John',
    phone:9849,
    address:'UK',
    email:'a@a.com'
}

// Array definition of Objects : type= interface
const listOfContacts : Contact[] =[
        person1,
        { id:2, name :'Jack', phone:9842 , address:'US',  email:'a@a.com'},
        { id:3, name :'Jackie', phone:9845 , address:'AUS',  email:'a@a.com'}
    ]

// enums definition
enum Actions {
    'ADD',
    'VIEW',
    "DELETE"
}

function addContact( name:string, phone : number, address?:string, email?:string) : void {
    let id = listOfContacts.length + 1;
    listOfContacts.push({id, name, phone, email, address}) 
}

function viewContacts() : void {
    console.log('Contacts: --')
    listOfContacts.forEach(c=> console.log(` ${c.id} ${c.name}: ${c.phone} : ${c.email} :${c.address}`)) 
}

function deleteContact(id:number):void {
    const index= listOfContacts.findIndex((c)=>c.id===id)
    if (index>-1){
        listOfContacts.splice(index,1);
        console.log('Contact deleted')
    } else {
        console.log('Contacts not found')
    }
}

// Example Usage
addContact("John", 1234567890, "USA", "john@example.com" );
addContact("Jane", 9876543210);
viewContacts();
deleteContact(1);
viewContacts();