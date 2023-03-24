function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
  
}

let student1 = new Student("Василиса", "женский", 19);
let student2 = new Student("Артём", "мужской", 25);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if ('marks' in this) {
        this.marks.push(...marks);
    }
}

Student.prototype.getAverage = function () {
    if (this.marks === undefined || this.marks.length === 0) {
        return 0;
    } else {
        let summ = 0
        for (let position in this.marks) {
            summ += this.marks[position];
        }
        return summ / this.marks.length;
    }
}

Student.prototype.exclude = function (reason) {
    if (this.marks === undefined || this.marks.length === 0) {
        delete this.marks;
        this.excluded = reason;
    } 
}
