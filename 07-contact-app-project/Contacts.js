class Contact {
  constructor(){
    this.contacts = [];
  }

  getAllContact(){
    return this.contacts
  }

  getContactById(id){
    return this.contacts.find(contact => contact.id === id);
  }

  createContact(contact){
    contact.id = this.contacts.length + 1;
    this.contacts.push(contact);
    return contact;
  }

  updatedContactById(id, updatedContact){
    let index = this.contacts.find(contact => contact.id === id);
    this.contacts[index].name = updatedContact.name || this.contacts[index].name;
    this.contacts[index].phone = updatedContact.phone || this.contacts[index].phone;
    this.contacts[index].email = updatedContact.email || this.contacts[index].email;

    return this.contacts[index]
  }

  deletedContactById(id){
    let index = this.contacts.find(contact => contact.id === id);
    let deletedObj = this.contact[index];
    this.contacts = this.contacts.filter(contact => contact.id !== id)
    return deletedObj;
  }
}

module.exports = new Contact()