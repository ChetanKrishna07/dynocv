import React from 'react'
import { useDrag } from 'react-dnd'
import WebFrame from './WebFrame';
import AppFrame from './AppFrame';
import HeadingFrame from './HeadingFrame';
import TextFrame from './TextFrame';

function DragComponent({ componentType, id }) {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "DragComponent",
        item: { id: id, componentType: componentType },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }));

    const display = (componentType) => {
        if (componentType === "webFrame") {

            return <WebFrame id={0} title="Title" desc="Description" linkText="Link Text" />

        } else if (componentType === "appFrame") {

            return <AppFrame id={0} title="Title" desc="Description" linkText="Link Text" />

        } else {

            return <></>
        }
    }

    return (
        <div className='DragComponent' ref={drag}>
            <h1>{componentType}</h1>
            <div>
                {display(componentType)}
            </div>
        </div>
    )
}

export default DragComponent;