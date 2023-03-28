class PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    fix() {
        this.state *= 1.5;
    }
    set state (state) {
        if (state < 0) {
            this._state = 0;
        } else if (state > 100) {
            this._state = 100;
        } else {
            this._state = state;
        }
    }
    get state () {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        super (name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount) {
        super (name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super (author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super (author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super (author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class Library {
    constructor (name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }


    findBookBy(type, value) {
        for (let i in this.books) {
            if (this.books[i][type] === value) {
                return this.books[i];
            } 
        }
             
        return null;
    }

    giveBookByName(bookName) {
        for (let i in this.books) {
            if (this.books[i].name === bookName) {
                return this.books.splice(i, 1)[0];
            } 
        }
             
        return null;
    }
}

class Student {
    constructor (name) {
        this.name = name;
        this.marks = {};
    }

    addMark (mark, subjectName) {
        if (mark < 2 || mark > 5) {
            return;
        }
        if (!this.marks[subjectName]) {
            Object.assign(this.marks, {[subjectName]: []});
        }

        this.marks[subjectName].push(mark);
    }
    
    getAverageBySubject (subjectName) {
        if (!this.marks[subjectName]) {
            return 0;
        }
                
        return this.marks[subjectName].reduce((acc,item, index, arr) => {
            acc += item;
            if (index === arr.length - 1) {
                return acc / arr.length;
            }
            return acc;
        }, 0);
    }

    getAverage () {
        const arraySubject = Object.keys(this.marks);
        if (arraySubject.length === 0) {
            return 0;
        }
        
        const summ = arraySubject.reduce((acc,item) => acc + this.getAverageBySubject(item), 0);
        return summ / arraySubject.length;
    }
}