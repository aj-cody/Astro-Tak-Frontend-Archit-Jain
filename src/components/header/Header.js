import hamburger from '../../assetspng/hamburger.png';
import logo1 from '../../assetspng/logo.png';
import profile from '../../assetspng/profile.png';

function Header() {
    return (
      <div>
        <header className="App-header">
            <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                <img src={hamburger} alt="ham" width="20" height="20"/>  
                </a>
                
                <a class="navbar-brand" href="/">
                <img src={logo1} alt="logo" width="60" height="40"/>  
                </a>
                
                <a class="navbar-brand" style={{"margin-right": "-1px"}} href="#">
                <img src={profile} alt="profile" width="25" height="25"/>  
                </a>
            </div>
            </nav>
        </header>
      </div>
    );
  }
  
  export default Header;