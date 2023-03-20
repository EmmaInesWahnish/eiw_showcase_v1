import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

// CONFIGURATION
import config from "../../config";

// SERVICES
import { ApplicationService } from "../../services";

// CONTEXT
import { useGeneralContext } from "../../contexts";

const BottomNavBar = () => {
  return (
    <div id="ga-header" className="header fixed-top shadow-2">
      <nav className="container-fluid flex-nowrap justify-content-between navbar navbar-expand-lg">
      </nav>
    </div>
  );
};

export default BottomNavBar;
