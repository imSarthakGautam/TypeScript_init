/*
- Interface to define Structure of Contact Object,
- Store Lists of Contacts in Arrays
- CRD operations on contacts
- Enums to define Actions: Add, View, Delete,
- Use Type Aliases for Reusuable Types
*/
// defining objects from interfaces
var person1 = {
    id: 1,
    name: 'John',
    phone: 9849,
    address: 'UK',
    email: 'a@a.com'
};
// Array definition of Objects : type= interface
var listOfContacts = [
    person1,
    { id: 2, name: 'Jack', phone: 9842, address: 'US', email: 'a@a.com' },
    { id: 3, name: 'Jackie', phone: 9845, address: 'AUS', email: 'a@a.com' }
];
// enums definition
var Actions;
(function (Actions) {
    Actions[Actions["ADD"] = 0] = "ADD";
    Actions[Actions["VIEW"] = 1] = "VIEW";
    Actions[Actions["DELETE"] = 2] = "DELETE";
})(Actions || (Actions = {}));
function addContact(name, phone, address, email) {
    var id = listOfContacts.length + 1;
    listOfContacts.push({ id: id, name: name, phone: phone, email: email, address: address });
}
function viewContacts() {
    console.log('Contacts: --');
    listOfContacts.forEach(function (c) { return console.log(" ".concat(c.id, " ").concat(c.name, ": ").concat(c.phone, " : ").concat(c.email, " :").concat(c.address)); });
}
function deleteContact(id) {
    var index = listOfContacts.findIndex(function (c) { return c.id === id; });
    if (index > -1) {
        listOfContacts.splice(index, 1);
        console.log('Contact deleted');
    }
    else {
        console.log('Contacts not found');
    }
}
// Example Usage
addContact("John", 1234567890, "USA", "john@example.com");
addContact("Jane", 9876543210);
viewContacts();
deleteContact(1);
viewContacts();
