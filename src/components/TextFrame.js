import React from 'react'
import { useDrag } from 'react-dnd'

function TextFrame({ id, text, align }) {

    const [textAlign, setTextAlign] = React.useState("left");

    React.useEffect(() => {
        if (align) {
            if (align === "center") {
                setTextAlign("center")
            } else if (align === "right") {
                setTextAlign("right")
            }
            console.log(textAlign)
        }
    })

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "image",
        item: { id: id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }));

    return (
        <div className="TextFrame" ref={drag}>
            <p style={{ textAlign: textAlign }}>{text}</p>
        </div>
    )
}

export default TextFrame;