import Header from './Header'
import Content from './Content'
import Total from './Total'
import React from 'react'

const Course = ({ course }) => {
    return (
        <React.Fragment>
            <Header course={ course } />
            <Content parts={ course.parts } />
            <Total parts={ course.parts } />
        </React.Fragment>
    )
}

export default Course