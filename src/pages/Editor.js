import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { useDrop } from 'react-dnd'
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import IconButton from "@mui/material/IconButton"
import Popover from "@mui/material/Popover"
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

import WebFrame from '../components/WebFrame'
import AppFrame from '../components/AppFrame'
import HeadingFrame from '../components/HeadingFrame'
import TextFrame from '../components/TextFrame'

import DragComponent from '../components/DragComponent'

import './Editor.css';
import logo from '../images/logo.svg';

function Editor(props) {

    const divRef = React.useRef();
    const [itemList, updateList] = React.useState([])
    const [anchor, setAnchor] = React.useState(null)
    const [counter, incrementCounter] = React.useState(0)
    const [compType, setType] = React.useState(null)
    const [webFrameData, setWebFrameData] = React.useState({
        title: "",
        desc: "",
        url: "",
        linkText: ""
    })
    const [appFrameData, setAppFrameData] = React.useState({
        title: "",
        desc: "",
        url: "",
        linkText: ""
    })

    const [headingFrameData, setHeadingFrameData] = React.useState({
        heading: ""
    })

    const [textFrameData, setTextFrameData] = React.useState({
        text: "",
        align: ""
    })

    // const [dummy, setDummy] = React.useState("")

    React.useEffect(() => {
        console.log(itemList);
    }, [itemList])

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "DragComponent",
        drop: (item) => addFrame(item.componentType),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))

    const addFrame = (componentType) => {
        console.log(componentType)
        setType(componentType)
        openPopover()
    }

    const openPopover = () => {
        setAnchor(divRef.current);
    }

    const closePopover = () => {
        if (compType == "webFrame") {
            setWebFrameData({
                title: "",
                desc: "",
                url: "",
                linkText: ""
            })
        }
        else if (compType == "appFrame") {
            setAppFrameData({
                title: "",
                desc: "",
                url: "",
                linkText: ""
            })
        }
        else if (compType == "headingFrame") {
            setAppFrameData({
                heading: ""
            })
        }
        else if (compType == "textFrame") {
            setAppFrameData({
                text: "",
                align: ""
            })
        }
        setAnchor(null)
    }

    const handleSubmit = () => {
        let data = null
        if (compType == "webFrame") {
            data = {
                id: counter,
                url: webFrameData.url,
                title: webFrameData.title,
                desc: webFrameData.desc,
                linkText: webFrameData.linkText,
                componentType: compType
            }
        } else if (compType == "appFrame") {
            data = {
                id: counter,
                url: appFrameData.url,
                title: appFrameData.title,
                desc: appFrameData.desc,
                linkText: appFrameData.linkText,
                componentType: compType
            }
        }
        else if (compType == "headingFrame") {
            data = {
                id: counter,
                heading: headingFrameData.heading,
                componentType: compType
            }
        }
        else if (compType == "textFrame") {
            data = {
                id: counter,
                text: textFrameData.text,
                align: textFrameData.align,
                componentType: compType
            }
        }
        updateList((itemList) => [...itemList, data])
        incrementCounter((c) => c + 1)
        closePopover();
    }

    const handleChange = (event) => {
        var param = event.target.id
        if (compType == "webFrame") {
            var temp = {
                ...webFrameData
            }
            temp[param] = event.target.value
            setWebFrameData(temp)
        }
        else if (compType == "appFrame") {
            var temp = {
                ...appFrameData
            }
            temp[param] = event.target.value
            setAppFrameData(temp)
        }
        else if (compType == "headingFrame") {
            var temp = {
                ...headingFrameData
            }
            temp[param] = event.target.value
            setHeadingFrameData(temp)
        }
        else if (compType == "textFrame") {
            var temp = {
                ...textFrameData
            }
            temp[param] = event.target.value
            setTextFrameData(temp)
        }

    }

    const displayContent = (data) => {
        console.log(data)
        if (data.componentType == "webFrame") {
            console.log("Its a webframe")
            return <WebFrame id={data.id} url={data.url} key={data.id} title={data.title} desc={data.desc} linkText={data.linkText} />
        } else if (data.componentType == "appFrame") {
            console.log("Its a appFrame")
            return <AppFrame id={data.id} url={data.url} key={data.id} title={data.title} desc={data.desc} linkText={data.linkText} />
        } else if (data.componentType == "headingFrame") {
            console.log("Its a headingFrame")
            return <HeadingFrame id={data.id} key={data.id} heading={data.heading} />
        } else if (data.componentType == "textFrame") {
            console.log("Its a textFrame")
            return <TextFrame id={data.id} key={data.id} text={data.text} align={data.align} />
        } else {
            return <></>
        }
    }

    const Config = () => {

        if (compType == "webFrame") {
            return (
                <>
                    <TextField id="url" label="Website Url" variant="standard" value={webFrameData.url} onChange={handleChange} />
                    <TextField id="title" label="Title" variant="standard" value={webFrameData.title} onChange={handleChange} />
                    <TextField id="desc" label="Description" variant="standard" value={webFrameData.desc} onChange={handleChange} />
                    <TextField id="linkText" label="Link Text" variant="standard" value={webFrameData.linkText} onChange={handleChange} />
                    {/* <input type="text" value={dummy} onChange={e => setDummy(e.target.value)}></input> */}
                    <Button variant='contained' onClick={handleSubmit}>Submit</Button>
                </>
            )
        } else if (compType == "appFrame") {
            return (
                <>
                    <TextField id="url" label="App Url" variant="standard" value={appFrameData.url} onChange={handleChange} />
                    <TextField id="title" label="Title" variant="standard" value={appFrameData.title} onChange={handleChange} />
                    <TextField id="desc" label="Description" variant="standard" value={appFrameData.desc} onChange={handleChange} />
                    <TextField id="linkText" label="Link Text" variant="standard" value={appFrameData.linkText} onChange={handleChange} />
                    <Button variant='contained' onClick={handleSubmit}>Submit</Button>
                </>
            )
        } else if (compType == "headingFrame") {
            return (
                <>
                    <TextField id="heading" label="Heading" variant="standard" value={headingFrameData.heading} onChange={handleChange} />
                    <Button variant='contained' onClick={handleSubmit}>Submit</Button>
                </>
            )
        } else if (compType == "textFrame") {
            return (
                <>
                    <TextField id="text" label="Text" variant="standard" value={textFrameData.text} onChange={handleChange} />
                    <TextField id="align" label="Alignment" variant="standard" value={textFrameData.align} onChange={handleChange} />
                    <Button variant='contained' onClick={handleSubmit}>Submit</Button>
                </>
            )
        } else {
            return <></>
        }
    }

    return (
        <div className="Editor" ref={divRef}>
            <Popover
                open={Boolean(anchor)}
                anchorEl={anchor}
                anchorReference={"none"}
                onClose={closePopover}
            >

                <IconButton
                    className='close-button'
                    onClick={closePopover}
                >
                    <CloseOutlinedIcon style={{ 'margin': 0 }} />
                </IconButton>
                <div className="popover-content">
                    <h2>Configure {compType} Component</h2>
                    <Config />
                </div>

            </Popover>
            <div className='container left'>
                <img
                    src={logo}
                    width="70px"
                />
                <DragComponent key={0} id="main" componentType="webFrame" />
                <DragComponent key={1} id="main" componentType="appFrame" />
                <DragComponent key={2} id="main" componentType="headingFrame" />
                <DragComponent key={3} id="main" componentType="textFrame" />
            </div>
            <div className='workspace' ref={drop}>
                {itemList.length != 0 ? itemList.map(displayContent) : null}
                {/* <TextFrame key={10} id={10} text={"This is me, Chetan Krishna"} align={"right"} /> */}
            </div>

            <div className='container right'></div>
        </div>
    )
}

export default Editor;