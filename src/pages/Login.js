import React from 'react'
import GoogleLogin from 'react-google-login'
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import Popover from "@mui/material/Popover"
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import logo from '../images/logo.svg';

function Login() {
    const [anchor, setAnchor] = React.useState(null)
    const [loginData, setLoginData] = React.useState(
        localStorage.getItem('loginData')
            ? JSON.parse(localStorage.getItem('loginData'))
            : null
    )

    const openPopover = (event) => {
        setAnchor(event.currentTarget);
        console.log(event.currentTarget);
    }

    const closePopover = () => {
        setAnchor(null)
    }

    const handleFailure = (result) => {
        alert(result)
    }

    const handleLogin = (googleData) => {
        const data = googleData.profileObj
        setLoginData(data)
        localStorage.setItem('loginData', JSON.stringify(data))
    }

    const handleLogout = () => {
        localStorage.removeItem('loginData');
        setLoginData(null)
    }

    return (
        <div className="Login">
            <img
                src={logo}
                width="70px"
            />
            <div>
                {
                    loginData ? (
                        <div>
                            <h3>Hello {loginData.givenName}</h3>
                            <Button
                                varient='contained'
                                color='primary'
                                onClick={handleLogout}
                            >
                                Logout
                            </Button>
                            <Button
                                varient='contained'
                                color='primary'
                                onClick={openPopover}
                            >
                                Give Extra Data
                            </Button>
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

                                </div>
                            </Popover>
                        </div>
                    ) : (
                        <GoogleLogin
                            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                            buttonText={"Log in with Google"}
                            onSuccess={handleLogin}
                            onFailure={handleFailure}
                            cookiePolicy={'single_host_origin'}
                        />
                    )
                }
            </div >
        </div >
    );
}

export default Login