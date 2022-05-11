import React, {useState} from 'react';
import MyAppBar from './MyAppBar';
import MyMenu from '../UI/menu/MyMenu';

const Header = () => {
  const [cartOpen, setCartOpen] = useState(false);

  return(
    <div >
        <MyAppBar
        hendleCart = {() => setCartOpen(true)}/>
        <MyMenu
        cartOpen = {cartOpen}
        cartClose = {() => setCartOpen(false)}
      />
    </div>
  )
}
export default Header;