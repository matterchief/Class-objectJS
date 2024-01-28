class ToyotaCar{

    constructor(brand,mileage){
        console.log("creating a new Object"); 
        this.brand=brand; 
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

let fortuner= new ToyotaCar("fortuner",14KMPL); 
let lexus= new ToyotaCar("Lexus",12KMPL);
 