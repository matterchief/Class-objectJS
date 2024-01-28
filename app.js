class ToyotaCar{

    constructor(brand,mileage,wheel){
        console.log("creating a new Object"); 
        this.brand=brand; 
        this.mileage=mileage;
        this.wheel=wheel;
    }

    start(){
        console.log("Starts the car"); 
    }
    stop(){
        console.log("Stops the car"); 
    }
    setBrand(brand){
        this.brand= brand;
    }
}

let fortuner= new ToyotaCar("fortuner","14kmpl", "AWD"); 
let lexus= new ToyotaCar("Lexus","12kmpl","4WD");
console.log(fortuner);
console.log(lexus); 
 

class parent{
    hello(){
        console.log("hello"); 
    }
}

class child extends parent{    }

let obj = new child();


class person{

    constructor(){
        this.species="homo Sapiens"; 
    }
    eat(){
        console.log("this guy can eat"); 

    }
    sleep(){
        console.log("this guys can sleep"); 
    }
}

class engineer extends person{

    constructor(branch){
        super();
        this.branch= branch;
    }
    worker(){
        console.log("this guy can work"); 
    }
}

class doctor extends person{
    treat(){
        console.log("this guy can treat people");
    }
    eat(){
        console.log("only pussy tho");
    }
}

let Shafee=new engineer();
let hisham=new doctor(); 

let newShafee = new engineer();


let data="Some secret information"; 

class User{
    constructor(name,email){
        this.name=name; 
        this.email=email; 
    }
    viewData(){
        console.log(data); 
    }
}

class admin extends User{
    constructor(name,email){
    super(name,email);
    }
    editData(){ data= "Edited Value";
}
}

let student1= new User("Shafee", "shafeeazeemag@amazon.com"); 
let student2=new User("Shereen", "Shereen@amazon.com");

let supervisor=new User("Saloni", "saloni@amazon.com")
 
let administrator= new admin("priya", "priya@amazon.com");