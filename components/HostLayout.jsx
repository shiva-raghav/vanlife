import { Outlet } from "react-router-dom";
import HostNav from "./HostNav";

export default function HostLayout() {
  return (
    <>
      <div className="content-wrapper host">
        <HostNav />
        <Outlet />
      </div>
    </>
  );
}
