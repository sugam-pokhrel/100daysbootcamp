
//tjis is an example of a class

// function MakeCar(carname,carmodel,carcolor,noofdoors){

//     this.carname=carname;
//     this.carmodel=carmodel;
//     this.carcolor=carcolor;
//     this.noofdoors=noofdoors;

//     this.honk=()=>{console.log('beep boop fucker');}

//     this.lock=()=>{console.log(`locked ${this.noofdoors} doors`);}
// }

// let tesla=new MakeCar('tesla','T4','white',4);
// tesla.lock();


//The below is the example of api

fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    .then(res=>res.json())
    .then(data=>{
        console.log(data)

    }).catch(err=>{console.log(err)});



