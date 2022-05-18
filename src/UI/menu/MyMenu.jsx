import React from 'react';
import { Link } from 'react-router-dom';
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText} from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import LensIcon from '@mui/icons-material/Lens';

const MyMenu = (props) => {
    const routsPage = [
        {path: '/lost', title: 'Потеряшки'},
        {path: '/alians_found', title: 'Найденыши'},
        {path: '/found_new_home', title: 'Ищут новый дом'},
    ];
    const routsInfo = [
        {path: '/about', title: 'О нас'},
        {path: '/contacts', title: 'Контакты'},

    ]

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
                            <ListItemIcon>
                                <PetsIcon sx={{color: 'orange'}}/>
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
            <Divider/>
            <List>
                {routsInfo.map(item => 
                    <Link to={item.path} 
                        style={{textDecoration: 'none'}} 
                        key={item.title}
                        onClick={cartClose}>
                            <ListItem button key={item.title}>
                                <ListItemIcon>
                                    <LensIcon sx={{fontSize: 'small', color: 'red', ml: 1}}/>
                                </ListItemIcon>
                                <ListItemText
                                    sx={{color: 'black'}}
                                    vatiant='h6'
                                    component='span'
                                    primary={item.title}
                                />
                            </ListItem>
                    </Link>
                )}
            </List>
        </Drawer>
  );
};
export default MyMenu;