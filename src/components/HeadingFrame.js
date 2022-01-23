import React from 'react'
import { useDrag } from 'react-dnd'

function HeadingFrame({id, heading }) {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "image",
        item: { id: id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }));
    
    return <>
        <div className="HeaderFrame" ref={drag}>
            <h1>{heading}</h1>
        </div>
    </>
}

export default HeadingFrame;