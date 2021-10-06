import homeActive from '../../assetspng/home-active.png';
import homeInactive from '../../assetspng/home-inactive.png';
import talkActive from '../../assetspng/talk-active.png';
import talkInactive from '../../assetspng/talk-inactive.png';
import ask from '../../assetspng/ask.png';
import reports from '../../assetspng/reports.png';

import { useLocation } from 'react-router-dom';

import './Footer.css';

function Footer() {
  
  const location = useLocation();
  console.log(location.pathname);

  var home, talk, classesH, classesT;

  if(location.pathname == '/talk-to-astrologer') {
    home = homeInactive;
    talk = talkActive;
    classesH = "";
    classesT = "isActive";
  } else {
    home = homeActive;
    talk = talkInactive;
    classesT = "";
    classesH = "isActive";
  }

  // const isMovieWatchPathActive = !!matchPath(
  //   this.props.location.pathname, 
  //   '/Movies/:id/watch'
  // ); 

    return (
      <div>
        <footer>
            <nav class="navbar fixed-bottom navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand btm" href="/">
                <img src={home} alt="ham" width="25" height="25"/>
                <span class={classesH}>Home</span>  
                </a>
                
                <a class="navbar-brand btm" href="/talk-to-astrologer">
                <img src={talk} alt="logo" width="25" height="25"/>
                <span class={classesT}>Talk To Astrologer</span>
                </a>
                
                <a class="navbar-brand btm" href="#">
                <img src={ask} alt="profile" width="25" height="25"/>
                <span>Ask Question</span>  
                </a>

                <a class="navbar-brand btm" href="#">
                <img src={reports} alt="profile" width="25" height="25"/>
                <span>Reports</span>  
                </a>
            </div>
            </nav>
        </footer>
      </div>
    );
  }
  
  export default Footer;