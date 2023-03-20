// COMPONENTS
import Layout from "./Layout.jsx";

const SuperLayout = ({ children }) => {

  return (
    <>
      <Layout>{children}</Layout>
    </>
  );
};
export default SuperLayout;
