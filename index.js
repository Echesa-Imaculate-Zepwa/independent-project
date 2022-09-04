const searchButton = document.getElementById("look-up")
const input = document.getElementById("search-box")


fetch("https://anapioficeandfire.com/api/books")
.then((res)=>res.json())
.then((data) => {
  // console.log(data[0].name) 
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
    // console.log(inputValue)
    // console.log(nameValue)
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
        // const authorName = values.name
        // console.log(values.isbn)
        // console.log(values.url)
        // console.log(`${values.authors[0]}, ${values.authors[1]}` )
        // console.log(values.publisher)
        // console.log(values.country)
        // console.log(values.mediaType)
        // console.log(values.released)
        bookDetails.innerHTML=searchResult
      }

    }
    
    searched()
    
    // console.log(values.isbn)
    // console.log(searched)
    
    
    // let bookSearch =""
    // book = values.filter(input.value == values.name)
    // console.log(book)
    

    // console.log(values.name)
    
    
    // for (let i in values) {
              // text += person[x];
      // (input.value == i.name) ? 
        // bookSearch = "<p>${values.name}<p>" : 
                // console.log("No Book Found")
        // console.log(i[0])
      // }


      // console.log(bookSearch)
  });
    // innerHTML=bookSearch
})
})
