
// business logic
// Business logic for AddressBook

function Destination() {
    this.details = [];
    this.currentId = 0;
}



Destination.prototype.addDestination = function(detail) {
    detail.id = this.assignId();
    this.details.push(detail);
}

Destination.prototype.assignId = function() {
    this.currentId += 1;
    return this.currentId;
}

// AddressBook.prototype.findContact = function(id) {
//     for (var i=0; i< this.contacts.length; i++) {
//         if (this.contacts[i]) {
//             if (this.contacts[i].id == id) {
//                 return this.contacts[i];
//             }
//         }
//     };
//     return false;
// }



// AddressBook.prototype.deleteContact = function(id) {
//     for (var i=0; i< this.contacts.length; i++) {
//         if (this.contacts[i]) {
//             if (this.contacts[i].id == id) {
//                 delete this.contacts[i];
//                 return true;
//             }
//         }
//     };
//     return false;
// }

// Business Logic for Contacts
function Detail (name1, location1, landmark1, date1, note1) {
    this.name1 = name1;
    this.location1 = location1;
    this.landmark1 = landmark1;
    this.date1 = date1;
    this.note1 = note1;
}

// Detail.prototype.namePlace = function() {
//     return this.name + " " + location + " " + timeOfYear;
// }



// user interface logic

$(document).ready(function() {
    $("#formOne").submit(function(event){
        event.preventDefault();
        var name = $("#name").val();
        var location = $("#location").val();
        var landmark = $("#landmark").val();
        var date = $("#date").val();
        var note = $("#note").val();
        var dest = new Destination();
        var input = new Detail(name, location, landmark, date, note);
        dest.addDestination(input);
        console.log(dest);
        console.log(input);
        // $("#result").text(name);
    });   
});