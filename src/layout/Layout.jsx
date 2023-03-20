import { useState } from "react";
import styled from "styled-components";

// CONFIGURATION
import config from "../config";

// COMPONENTS
import { BottomNavBar } from "../components";

// component styles
const Wrapper = styled.div``;

const Main = styled.main``;

const Layout = ({ children }) => {

  return (
    <div >
      <Wrapper className="container-fluid">
            <Main>{children}</Main>
      </Wrapper>
      <>{config.bottomnavbar ? <BottomNavBar /> : <></>}</>
    </div>
  );
};
export default Layout;
