


function MakeCar(carname,carmodel,carcolor,noofdoors){

    this.carname=carname;
    this.carmodel=carmodel;
    this.carcolor=carcolor;
    this.noofdoors=noofdoors;

    this.honk=()=>{console.log('beep boop fucker');}

    this.lock=()=>{console.log(`locked ${this.noofdoors} doors`);}
}

let tesla=new MakeCar('tesla','T4','white',4);
tesla.lock();


