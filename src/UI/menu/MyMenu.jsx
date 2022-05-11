import React from 'react';
import { Divider, Drawer, Link, List, ListItem, ListItemIcon, ListItemText} from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import LensIcon from '@mui/icons-material/Lens';

const MyMenu = (props) => {
    const {
        cartOpen,
        cartClose = Function.prototype,
    } = props;
    return(
        <Drawer 
            anchor='top' 
            open={cartOpen}
            onClose={cartClose}
        >
            <List>
                     {[
                   'Потеряшки', 'Найденыши', 'Ищут новый дом'].map((text) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                        <PetsIcon sx={{color: 'orange'}}/>
                        </ListItemIcon>
                        <ListItemText 
                            vatiant='h6'
                            component='span'
                            primary={text}
                        />
                    </ListItem>   
                ))}
            </List>
            <Divider/>
            <List>
                {['О нас', 'Контанты'].map((text) => 
                    <ListItem button key={text}>
                        <ListItemIcon>
                            <LensIcon sx={{fontSize: 'small', color: 'red', ml: 1}}/>
                        </ListItemIcon>
                        <ListItemText
                            vatiant='h6'
                            component='span'
                            primary={text}
                        />
                    </ListItem>
                )}
            </List>
                    

        </Drawer>
  );
};
export default MyMenu;