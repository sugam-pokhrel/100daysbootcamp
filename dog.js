let dog={}

dog.name="jimmy";
dog.color='brown';
dog.legs=4;

dog.bark=function(){
    console.log('wuffff');
}



//this is the format for fetching data using api

// fetch('theurl')
//     .then(res=>res.json())
//     .then(data=>console.log(data)).catch(err=>console.log(err))