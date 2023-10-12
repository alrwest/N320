/*** creating classes ***/

//LibraryCatalog Class

class LibraryCatalog {
    constructor(id, title, publicationYear, value) {
        this.id = id;
        this.title = title;
        this.publicationYear = publicationYear;
        this.value = value;
    }
}


//Books class

class Books extends LibraryCatalog {
    constructor(id, title, publicationYear, value, author, genre ) {
        super(id, title, publicationYear, value);
        this.author = author;
        this.genre = genre;
    }
    
}


//DVD class

class DVD extends LibraryCatalog {
    constructor(id, title, publicationYear, value, director, runtime) {
        super(id, title, publicationYear, value);
        this.director = director;
        this.runtime= runtime;
    }
    
}

//CD class
class CD extends LibraryCatalog {
    constructor(id, title, publicationYear, value, artist, songCount) {
        super(id, title, publicationYear, value);
        this.artist = artist;
        this.songCount = songCount;
    }  
}

//CatalogMethods class

class CatalogMethods {
    //empty catalog
    constructor() {
        this.catalog = [];
    }

    //add item to catalog
    addItem(item) {
        this.catalog.push(item);
    }

    //remove item in a catalog
    removeItem(itemID) {
        this.catalog = this.catalog.filter(item => item.id !== itemID);
    }

    //add total value of items
    totalValue() {
        const totalVal = this.catalog.reduce((accumulator, item) => accumulator + item.value, 0);

        //return total value
        return totalVal;
    }

    displayCatalog() {
        let catalogDiv = document.getElementsByClassName("div")[0];
        this.catalog.forEach(item => {
            catalogDiv.innerHTML += `${item.title} - ${item.value}`;
        });
    } 
}