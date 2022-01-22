import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login'
import Editor from './pages/Editor'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function App() {

  return (
    <DndProvider backend={HTML5Backend}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/editor" element={<Editor />} />
        </Routes>
      </BrowserRouter>
    </DndProvider>
  )
  // const [anchor, setAnchor] = React.useState(null)
  // const [loginData, setLoginData] = React.useState(
  //   localStorage.getItem('loginData')
  //     ? JSON.parse(localStorage.getItem('loginData'))
  //     : null
  // )

  // const openPopover = (event) => {
  //   setAnchor(event.currentTarget);
  //   console.log(event.currentTarget);
  // }

  // const closePopover = () => {
  //   setAnchor(null)
  // }

  // const handleFailure = (result) => {
  //   alert(result)
  // }

  // const handleLogin = (googleData) => {
  //   const data = googleData.profileObj
  //   setLoginData(data)
  //   localStorage.setItem('loginData', JSON.stringify(data))
  // }

  // const handleLogout = () => {
  //   localStorage.removeItem('loginData');
  //   setLoginData(null)
  // }

  // return (
  //   <div className="App">
  //     <h1>Dynocv</h1>
  //     <div>
  //       {
  //         loginData ? (
  //           <div>
  //             <h3>Hello {loginData.givenName}</h3>
  //             <Button
  //               varient='contained'
  //               color='primary'
  //               onClick={handleLogout}
  //             >
  //               Logout
  //             </Button>
  //             <Button
  //               varient='contained'
  //               color='primary'
  //               onClick={openPopover}
  //             >
  //               Give Extra Data
  //             </Button>
  //             <Popover
  //               open={Boolean(anchor)}
  //               anchorEl={anchor}
  //               anchorReference={"none"}
  //               onClose={closePopover}
  //             >

  //               <IconButton
  //                 className='close-button'
  //                 onClick={closePopover}
  //               >
  //                 <CloseOutlinedIcon style={{ 'margin': 0 }} />
  //               </IconButton>
  //               <div className="popover-content">

  //               </div>
  //             </Popover>
  //           </div>
  //         ) : (
  //           <GoogleLogin
  //             clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
  //             buttonText={"Log in with Google"}
  //             onSuccess={handleLogin}
  //             onFailure={handleFailure}
  //             cookiePolicy={'single_host_origin'}
  //           />
  //         )
  //       }
  //     </div >
  //   </div >
  // );
}

export default App;
