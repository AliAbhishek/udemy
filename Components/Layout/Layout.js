import React, { useState } from "react";
import Sidebar from "./Sidebar";
import TopHeader from "../TopHeader";
const Layout = ({ children }) => {
  const [show, setShow] = useState(false);
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <div className="main-wrap">
        <div className={show ? "left-side hide" : "left-side "}>
          <Sidebar
            isActive={isActive}
            setIsActive={setIsActive}
            show={show}
            setShow={setShow}
          />
        </div>
        <div className={show ? "right-side-cmn hide" : "right-side-cmn "}>
          <TopHeader />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
