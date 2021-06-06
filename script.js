
const form = document.getElementById('myForm')
form.addEventListener('submit', function(e){
    e.preventDefault();

    var search = document.getElementById("search").value

    fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:"+search)
    .then((result) => result.json())
    .then((data) => {
        console.log(data.items[0].volumeInfo)
        document.getElementById("result").innerHTML = 
        `        
        <p>
            Title: ${data.items[0].volumeInfo.title}<br>
            Author: ${data.items[0].volumeInfo.authors}<br>
            Averate Rating: ${data.items[0].volumeInfo.averageRating}<br>
        </p>
        `
      })
    })   

/* TBD: Add picture:

        <img src="${data.imageLinks.smallThumbnail}" alt="cover">

*/