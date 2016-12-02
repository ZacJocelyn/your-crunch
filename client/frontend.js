$( document ).ready(function() {
    console.log( "ready!" );
$('#button').click(function() {

  $.post("http://localhost:3000/comments", postPerson)
})
});

function postPerson (data) {
  //post request
var person = new makePerson($('#first_name').val(), $('#last_name').val(), $('#flavor').val());
  console.log(person)
}



function makePerson(first, last, flavor) {
   this.firstName = first;
   this.lastName = last;
   this.flavor = flavor;
}
