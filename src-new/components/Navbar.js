import React, {useState} from 'react'
import Logo from '../assets/EvangelionTransparent.png'
import {Link} from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder';
import CartIcon from '@mui/icons-material/ShoppingCartOutlined';
import ContactIcon from '@mui/icons-material/MailOutline';
import AboutIcon from '@mui/icons-material/Info';
import CatalogueIcon from '@mui/icons-material/Storefront';
import HomeIcon from '@mui/icons-material/Home';
import UserIcon from '@mui/icons-material/Person';
import '../styles/Navbar.css'

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    };

  return (
    <div className="navbar">
        <div className="leftSide" id={openLinks ? "open" : "close"}>
            <img src={Logo} alt="Logo"/>
            <div className="hiddenLinks">
                <Link to="/"> <HomeIcon size={32}/> </Link>
                <Link to="/catalog"> <CatalogueIcon size={32}/> </Link>
                <Link to="/about"> <AboutIcon size={32}/> </Link>
                <Link to="/contact"> <ContactIcon size={32}/> </Link>
                <Link to="/cart"> <CartIcon size={32}/> </Link>
                <Link to="/login"> <UserIcon size={32}/> </Link>  
            </div>
        </div>
        <div className="rightSide">
            <Link to="/"> <HomeIcon size={32}/> </Link>
            <Link to="/catalog"> <CatalogueIcon size={32}/> </Link>
            <Link to="/about"> <AboutIcon size={32}/> </Link>
            <Link to="/contact"> <ContactIcon size={32}/> </Link>
            <Link to="/cart"> <CartIcon size={32}/> </Link>
            <Link to="/login"> <UserIcon size={32}/> </Link>
            <button onClick={toggleNavbar}>
                <ReorderIcon />
            </button>
        </div>
    </div>
  )
}

export default Navbar