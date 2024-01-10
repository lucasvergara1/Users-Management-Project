var name = document.querySelector("#exampleInputName");
var gender = document.querySelectorAll("#form-user-create [name=gender]:checked");//Selecionamos apenas o que tem nome - gender e que esta checado
var birth = document.querySelector("#exampleInputBirth");
var country = document.querySelector("#exampleInputCountry");
var email = document.querySelector("#exampleInputEmail");
var password = document.querySelector("#exampleInputPassword");
var photo = document.querySelector("#exampleInputFilr");
var admin = document.querySelector("#exampleInputAdmin");


var fields = document.querySelectorAll("#form-user-create [name]");
var user = {};

fields.forEach(function(field, index){

    if (field.name == "gender") {

        if (field.checked) {
            user[field.name] = field;
        }

    } else {

        user[field.name] = field.value;
    }

});

console.log(user);

document.querySelectorAll("button").forEach(function(){

    this.addEventListener("click",function(){
        console.log("clicou!");
    })

});
teste de branch KeyboardEvent
console.log() 