import React from "react";
import Content from "./Content";
import Sidebar from "./Sidebar";
import ScrooltoTop from "./ScrooltoTop";
import Logoutmodal from "./Logoutmodal";
import Topbar from "./Topbar";
import Footer from "./Footer";

function Dashboard() {
  return (
    <>
      <div id="wrapper">
        <Sidebar />

        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" class="d-flex flex-column">
          {/* <!-- Main Content --> */}
          <div id="content">
            <Topbar />
            <Content />
          </div>
          <Footer />
        </div>
      </div>
      <ScrooltoTop />
      <Logoutmodal />
    </>
  );
}

export default Dashboard;
