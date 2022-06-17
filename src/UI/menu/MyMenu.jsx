import React from 'react';
import { Link } from 'react-router-dom';
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText} from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import LensIcon from '@mui/icons-material/Lens';
import Posts from '../../pages/Posts';

const MyMenu = (props) => {
    const routsPage = [
        {path: '/announcements', title: 'Объявлнения'},
        {path: '/about', title: 'О нас'},
        {path: '/contacts', title: 'Контакты'},
    ];
    

    const {
        cartOpen,
        cartClose = Function.prototype,
    } = props;

    return(
        <Drawer 
            anchor='top' 
            open={cartOpen}
            onClose={cartClose}>

            <List>
                {routsPage.map(item => (
                    <Link to={item.path} 
                        key={item.title}
                        style={{textDecoration: 'none'}}
                        onClick={cartClose}>
                        <ListItem button >
                            <ListItemIcon >
                                <PetsIcon sx={{color: '#F4A460'}}/>
                            </ListItemIcon>
                            <ListItemText 
                                sx={{color: 'black'}}
                                vatiant='h6'
                                component='span'
                                primary={item.title}
                            />
                        </ListItem>   
                    </Link>
                ))}
            </List>
        </Drawer>
  );
};
export default MyMenu;