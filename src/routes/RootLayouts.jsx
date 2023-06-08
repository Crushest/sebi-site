import { Outlet } from "react-router-dom";
import MainHeader from "../components/MainHeader"


function RootLayouts() {
  return (
    <>
     <MainHeader />
     <Outlet />
    </>
  );
}

export default RootLayouts