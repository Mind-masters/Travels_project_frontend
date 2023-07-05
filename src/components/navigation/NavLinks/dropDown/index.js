import React, {useContext, useState} from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import styles from './dropDown.module.css';
import { AuthContext } from '../../../../contextAPI/AuthContext';
import { useNavigate, NavLink } from 'react-router-dom';

// logos
import user_logo from "../../../../assets/dropDown/user_logo.png"
import messages_logo from "../../../../assets/dropDown/messages.png"
import notification_logo from "../../../../assets/dropDown/notifications.png"

import Notifications from '../../../../Pages/PopUpPages/Notifications';


export default function AccountMenu(props) {

    const [anchorEl, setAnchorEl] = useState(null);
    const [showNavModal, setShowNavModal] = useState(false);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const navigate = useNavigate();
    const User = useContext(AuthContext);
    const ActiveUser = User.authenticatedUser || null;
    const UserData = ActiveUser ? ActiveUser.data : null;



    const logoutHandler = () => {
        User.logout();
        navigate("/");
    }

    const getPointHandler = () => {
        navigate("/benefits");
    }

    const onNavigationsShowHandler = () => {
        handleClose();
        return setShowNavModal(true);
    }


    return (
        <>
            <Box sx={{ display: 'flex', justifyContent:"right", alignItems: 'center', textAlign: 'center' }}>
                <Tooltip title="Account menu">
                <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
                    <img className={styles.logo} src={user_logo} alt="logo" />
                </IconButton>
                </Tooltip>
            </Box>

            <Notifications
                show={showNavModal}
                onClose={()=>setShowNavModal(false)}
                notifications={props.notifications}
            />

            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'visible',
                    bgcolor: "rgba(238, 125, 21, 1)",
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    },
                    '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 20,
                    width: 15,
                    height: 15,
                    bgcolor: 'rgba(238, 125, 21, 1)',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                    // overflow: "hidden"
                    },
                },
                
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <div className={styles.dropDownContainer}>
                    <MenuItem>
                        <div className={styles.profile_link}>
                            <NavLink to={`/profile/${UserData.id}`}>Visit your profile</NavLink>
                        </div>
                    </MenuItem>

                    <MenuItem>
                        <div className={styles.body} onClick={getPointHandler}>
                            <div>
                                <h1>{UserData.points > 1 ? `${UserData.points} points` : `${UserData.points} point`}</h1>
                            </div>

                            <div>
                                <h1>Get more points</h1>
                            </div>
                        </div>
                    </MenuItem>

                    <MenuItem>
                        <div className={styles.body}>
                            <div>
                                <img src={messages_logo} alt="" />
                                <h1>Messages <span>{`(${0})`}</span></h1>
                            </div>
                        </div>
                    </MenuItem>

                    <MenuItem onClick={onNavigationsShowHandler}>
                        <div className={styles.body}>
                            <div>
                                <img src={notification_logo} alt="" />
                                <h1>Notifications <span>{`(${(props.notifications && props.notifications.length) || 0})`}</span></h1>
                            </div>
                        </div>
                    </MenuItem>
                    
                    <MenuItem style={{ backgroundColor: "rgba(238, 125, 21, 1)" }}> 
                        <div onClick={logoutHandler} className={styles.logout_link}>
                            <h1>Logout</h1>
                        </div>
                    </MenuItem>
                </div>

            </Menu>
        </>
    );
}