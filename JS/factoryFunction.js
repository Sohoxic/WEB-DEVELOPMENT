function func(){
    /*const course =*/ return {
        lecture : 10 ,
        section : 'a',
        notes : {
            introduction : "welcome to the course"
        } ,
        enroll(){
            console.log("what is up???") ;
        }
    }

    // return course
}

const course = func();
course.enroll();