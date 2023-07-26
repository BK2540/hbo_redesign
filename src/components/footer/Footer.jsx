import './footer.scss';
import logo from '../../assets/logo.svg';
import { Facebook, Instagram, Twitter, YouTube } from '@mui/icons-material';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
        <div className="other">
            <div className="info">
                <span>Help</span>
                <span>Privacy</span>
                <span>Terms</span>
                <span>Legal Notices</span>
            </div>
            <div className="copyright">
            ©2023 HBO Asia. All Rights Reserved.
            </div>
        </div>
        <div className="socials">
            <Facebook className='icon'/>
            <Instagram className='icon'/>
            <YouTube className='icon'/>
            <Twitter className='icon'/>
        </div>
    </div>
  )
}

export default Footer