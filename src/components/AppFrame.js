import React from 'react'
import { useDrag } from 'react-dnd'

function AppFrame({ url, id, title, desc, linkText }) {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "image",
        item: { id: id, url: url },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }));

    return <>
        <div className="AppFrame">
            <iframe
                ref={drag}
                src={url}
                height='450px'
                width='253.125px'
            />
            <div className="Content">
                <h1>{title}</h1>
                <p>{desc}</p>
                <a href={url}>{linkText !== "" ? linkText : title}</a>
            </div>
        </div>
    </>
}

export default AppFrame;