import React from 'react'
import { useDrag } from 'react-dnd'

function WebFrame({ url, id, title, desc, linkText }) {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "image",
        item: { id: id, url: url },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }));

    return (
        <div className="WebFrame">
            <h1>{title}</h1>
            <p>{desc}</p>
            <iframe
                ref={drag}
                src={url}
                height='253.125px'
                width='450px'
            />
            <a href={url}>{linkText !== "" ? linkText : title}</a>
        </div>
    )
}

export default WebFrame;