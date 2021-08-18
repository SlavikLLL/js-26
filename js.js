function Student(name,surname,bDay){
    this.name = name;
    this.surname = surname;
    this.bDay = bDay;
    this.marks = [];
    this.presence = new Array(10);
    this.current = 0 ;

    this.currentAge = function() {
        return new Date().getFullYear() - this.bDay;
    }
    this.avgMark = function(){
        if(this.marks.length == 0){
            return null;
        }
        let count = 0,
        sum = this.marks.reduce((a, b) => { ++count; return a + b; }, 0);
         return count ? sum / count : 0;
    }
    this.presenst = function(mark){
        let free = this.presence.findIndex(value => value===undefined)
        if(free = -1) {
            return 
        }
        this.presence[free] = mark
    }
    this.truePresent = function(){
        this.presenst(true);
    }
    this.absent = function(){
        this.presenst(false);
    }


}
let Student1 = new Student("Slavik","Listopad","2002",);
console.log(Student1);
console.log(Student1.currentAge());
Student1.marks = [1,5,6,2];
console.log(Student1.marks);
console.log(Student1.avgMark());
Student1.truePresent();
c

//let Student2 = new Student("Igor","Igover","2002");
//console.log(Student2);
