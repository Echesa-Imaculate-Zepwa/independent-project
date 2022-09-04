const searchButton = document.getElementById("look-up")
const input = document.getElementById("search-box")


fetch("https://anapioficeandfire.com/api/books")
.then((res)=>res.json())
.then((data) => {
  let bookList ="" 
  
  data.map(values => {
    bookList += `<p>${values.name}<p>`; 
    document.getElementById("all-books").
    innerHTML=bookList;
    
  searchButton.addEventListener("click", () => {
    inputValue = input.value
    nameValue = values.name
    
    
    let searchResult = ""
    const bookDetails = document.getElementById("book-type")
    function searched (){
      if (inputValue == nameValue){
        searchResult = `<p>
        NAME: ${values.name} </br>
        ISBN: ${values.isbn} </br>

        <a href="${values.url}" target="_blank">OPEN BOOK LINK<a></br>
        AUTHORS: ${values.authors[0]}, ${values.authors[1]} </br>
         PUBLISHER: ${values.publisher} </br>
        COUNTRY: ${values.country} </br>
        MEDIATYPE: ${values.mediaType} </br>
        RELEASED: ${values.released}                                
        <p>`
        
        bookDetails.innerHTML=searchResult
      }

    }
    
    searched()
  });
  
})
})
