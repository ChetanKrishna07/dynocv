import React from 'react'
import { useDrag } from 'react-dnd'

function DragComponent({ componentType, id }) {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "DragComponent",
        item: { id: id, componentType: componentType},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }));

    return (
        <div className='DragComponent' ref={drag}>
            <h1>{componentType}</h1>
            <div>
                
            </div>
        </div>
    )
}

export default DragComponent;