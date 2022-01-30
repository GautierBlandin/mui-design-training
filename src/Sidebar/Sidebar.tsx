import React from 'react';
import {Box, Button, Drawer} from '@mui/material';
import { Typography } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import TimelineIcon from '@mui/icons-material/Timeline';

export interface SidebarProps {
}

function Sidebar({}: SidebarProps){
    const drawerWidth = 280;

    const sidebarTitleSx = {
        fontSize: '0.8rem',
        fontWeight: 'bold',
        letterSpacing: 0,
        px: 2
    }

    const sidebarButtonSx = {
        color: 'text.secondary',
        justifyContent: 'left',
        gap: 0.5,
        px: 2,
        py: 1.5,
        textTransform: 'none',
        borderRadius: 2,
    }

    const sectionSx = {
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
    }

    return(
    <Drawer variant={'permanent'} sx={{
        '& .MuiDrawer-paper': {
            borderRight: '1px dashed rgba(145, 158, 171, 0.24)',
            width: drawerWidth,
            display: 'flex',
            flexDirection: 'column',
            padding: 2,
            gap: 4
        }
    }}>
        {/* Profile card */}
        <Box sx={{
            borderRadius: 2,
            backgroundColor: 'rgba(155, 171, 195, 0.12)',
            padding: 2,
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            cursor: 'pointer',
        }}>
            <CircleIcon color='primary' sx={{
                fontSize: '40px',
            }}/>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
            }}>
                <Typography color={'text.primary'}>
                    Design training
                </Typography>
                <Typography color={'text.secondary'}>
                    admin
                </Typography>
            </Box>
        </Box>
    {/*    General section   */}
        <Box sx={sectionSx}>
            <Typography sx={sidebarTitleSx} color={'text.primary'}>
                GENERAL
            </Typography>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
            }}>
                <Button startIcon={<AccessAlarmIcon/>} sx={sidebarButtonSx}>
                    App
                </Button>
                <Button startIcon={<AccountBalanceIcon/>} sx={sidebarButtonSx}>
                    E-Commerce
                </Button>
                <Button startIcon={<BookmarksIcon/>} sx={sidebarButtonSx}>
                    Analytics
                </Button>
                <Button startIcon={<ShoppingBagIcon/>} sx={sidebarButtonSx}>
                    Banking
                </Button>
                <Button startIcon={<TimelineIcon/>} sx={sidebarButtonSx}>
                    Booking
                </Button>
            </Box>
        </Box>
    {/*    Management Section */}
        <Box sx={sectionSx}>
            <Typography sx={sidebarTitleSx} color={'text.primary'}>
                MANAGEMENT
            </Typography>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
            }}>
                <Button startIcon={<AccessAlarmIcon/>} sx={sidebarButtonSx}>
                    App
                </Button>
                <Button startIcon={<AccountBalanceIcon/>} sx={sidebarButtonSx}>
                    E-Commerce
                </Button>
                <Button startIcon={<BookmarksIcon/>} sx={sidebarButtonSx}>
                    Analytics
                </Button>
                <Button startIcon={<ShoppingBagIcon/>} sx={sidebarButtonSx}>
                    Banking
                </Button>
                <Button startIcon={<TimelineIcon/>} sx={sidebarButtonSx}>
                    Booking
                </Button>
            </Box>
        </Box>
    </Drawer>
    )
}

export default Sidebar;
