// src/Action/courseAction.js
export function createCourse(course) {
    return {
        type: 'CREATE_COURSE', 
        course: course ,
      
    };
}
