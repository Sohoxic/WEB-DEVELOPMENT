// let lecture = 10;
// let section = 3;
// let title = 'Javascript';

// const course = {
//     lecture: 10,
//     section: 3,
//     title: 'Javascript',
//     notes: {
//         introduction: "Welcome to JS course"
//     },
//     enroll() {
//         console.log('you are sucessfully enrolled');
//     }
// }

// Factory Function

// function createCourse(title) {
//     return {
//         title: title,
//         enroll() {
//             console.log('you are sucessfully enrolled');
//         }
//     }
// }

// const newCourse = createCourse('Javascript');

// // // Constructor Function

// function Course(title) {
//     this.title = title,
//     this.enroll = function () {
//         console.log('you are sucessfully enrolled');
//     }
// }


// const course = new Course('title')
// // this.title = title;
// course.check = function () {
//     console.log('you are sucessfully enrolled');
// }
// course.enroll();
// course.check();
// console.log(course.constructor);
// console.log(newCourse.constructor);

// function Course(title) {
//     this.title = title,
//     this.enroll = function () {
//         console.log('you are sucessfully enrolled');
//     }
// }
// const course_1 = new Function('title', `this.title = title,
// this.enroll = function () {
//     console.log('you are sucessfully enrolled');
// }`);
// const course_2= new course_1('JS');
// course_2.enroll();

// // Primitive Datatype
// let number = 10;
// // Pass by Value
// let number_2 = number
// number = 15;

// // Reference Datatype
// let obj = {number : 10};
// // Pass by Reference
// let obj2 = obj;

// const course = {
//     title: 'Javascript',
//     enroll() {
//         console.log('you are sucessfully enrolled');
//     }
// }

// const course_1 = {};
// for(let key of Object.keys(course)) {
//     course_1[key] = course[key]
// }

 

    