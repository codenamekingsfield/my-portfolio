import './Navbar.scss'
import PersonOutlineRoundedIcon from '@material-ui/icons/PersonOutlineRounded';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';

export default function Navbar() {
    return (
        <div className="navbar" active>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className='logo' >mliwomor.</a>
                    <div className="itemContainer">
                        <PersonOutlineRoundedIcon className='icon'/>
                       <span>56576</span>
                    </div>
                    <div className="itemContainer">
                       <MailOutlineRoundedIcon className='icon'/>
                       <span>kingsfieldakpaka@gmail.com</span>
                    </div>
                    
                </div>
               
                <div className="right">
                    <div className="hamburger">
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line'></span>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}
