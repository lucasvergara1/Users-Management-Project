class User {

    constructor(name, gender, birth, country, email, password, photo, admin){

        this._name = name;
        this._gender = gender;
        this._birth = birth;
        this._country = country;
        this._email = email;
        this._password = password;
        this._photo = photo;
        this._admin = admin;
        this._register = new Date();

    }

    get register() {
        return this._register;
    }

    get name(){
        return this._name;
    }

    get gender(){
        return this._name;
    }

    get birth(){
        return this._name;
    }

    get country(){
        return this._name;
    }

    get email(){
        return this._name;
    }

    get password(){
        return this._name;
    }

    get photo(){
        return this._name;
    }

    get admin(){
        return this._name;
    }

    set photo(value){
        this._photo = value;

    }




}