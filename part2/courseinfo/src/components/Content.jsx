import Part from './Part'
import React from 'react'

const Content = ({ parts }) => {
    console.log('Content parts: ', parts);
    return (
        <React.Fragment>
            <div>
                { parts.map(part => 
                <Part 
                    key={part.id} 
                    part={part} 
                />) }
            </div>
        </React.Fragment>
    )
}

export default Content