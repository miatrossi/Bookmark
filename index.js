//HTML file can include the title of site, inputs, add button

//-------------------------------------------------------------

//Maintin an array of objects representing all of the user's added bookmarks. (initially will be empty) 
let addedBookmarks = [];
    class rendBook {
        constructor(listName, listLink){
        this.listName = listName;
        this.listLink = listLink;
        }
        render() {
            let listDiv = document.getElementById("listDiv");
            let bookList = document.createElement("li");
            bookList.innerText = `name: ${listName.value} link: ${listLink.value}`;
            listDiv.appendChild(bookList);
            let removeBtn = document.createElement("button");
            removeBtn.innerHTML = "-"
            listDiv.appendChild(removeBtn);
            
        }
    }
    let removeBtn = document.createElement("button");
    removeBtn.addEventListener("click", function() {
        
        addedBookmarks.forEach((element) => element.render());
    })
// i) create a list item <li> for each Bookmark that contains things like a link, remove button, etc.
// ii) addEventListener to 'removeBtn' that removes an item from an array and render everything

// /* [{
//    name: "etsy";
//    url: "https://etsy.com";
//}, {}, {} ] */

// i) set 'addBtn'
let addBtn = document.getElementById("button");
// ii) addEventListener to 'addBtn' => create new bookmark
addBtn.addEventListener("click", function(){
    let listName = document.getElementById("listName");
    let listLink = document.getElementById("listLink");
    //push into array
    // addedBookmark.push(new rendBook (listName, listLink));
    let addedBookmark =  new rendBook (listName.value, listLink.value);
    addedBookmarks.push(addedBookmark);
    addedBookmarks.forEach((element) => element.render());
    //call a render function build out lis with details from array

});
 


//createBookmark
// i) push name & url to out array
// ii) rerender Bookmark list




