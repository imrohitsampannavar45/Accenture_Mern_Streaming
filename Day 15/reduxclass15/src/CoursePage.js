import React from 'react';
import {connect} from 'react-redux';
import * as CourseAction from './Action/courseAction'
class CoursePage extends React.Component {
    constructor() {
        super();
        this.state = {
            course: {title: ''}
        };
 
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }
    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({
            course: course
        });
    }
    onClickSave(event) {
        this.props.createCourse(this.state.course);
    }
    courseRow(course, index) {
        return <div key={index}>{course.title}</div>;
    }
    render() {
        return (
            <div>
                <h1>Course Page</h1>
                {this.props.courses.map(this.courseRow)}
                <h2>Add Course</h2>
        <input type="text" onChange={this.onTitleChange} value={this.state.course.title}/>
                <input type="submit" value="save" onClick={this.onClickSave}/>
            </div>
        );}}
function mapStateToProps(state) {
    return {
        courses: state.courses
    }}
function mapDispatchToProps(dispatch) {
    return {
        createCourse: course => dispatch(CourseAction.createCourse(course))
    }}
export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
 