// CONFIGURATION
import config from "../../config";

const BottomNavBar = () => {
  return (
    <div id="ga-header" className="shadow-2">
      <nav className="container-fluid flex-nowrap justify-content-between navbar navbar-expand-lg">
        <div className="navbar-brand">
        <img
              src={config.logoimg}
              className="ga-logo"
              alt="Groovinads Reports logo"
            />
        </div>
      </nav>
    </div>
  );
};

export default BottomNavBar;
