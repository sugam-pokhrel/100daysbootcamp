fetch('https://api.nasa.gov/planetary/apod?api_key=WR3Ow1dlwaQUri3JTHmyHbyUUtGh13avME2Cgwf6 ')
    .then(res=>res.json())
    .then(data=>{console.log(data)
        document.querySelector('h2').innerText=data.title;
        document.querySelector('p').innerText=data.explanation;
        document.querySelector('img').src=data.url;
    })
    .catch(err=>console.log(err));