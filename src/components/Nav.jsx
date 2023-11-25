import { Dropdown } from "react-bootstrap";
import { FaTruckLoading } from "react-icons/fa";
import UserAccount from "./UserAccount";
import {Link} from 'react-router-dom'

export default function Nav({ loggedInUser }) {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <nav className="p-3 shadow fixed-top z-3 w-100 bgColor">
      <div className="layout-container d-flex justify-content-between">
        <div className="d-flex align-items-center gap-2">
          <FaTruckLoading size="48px" />
          <span className="fw-bold text-white fs-4">Travel Log</span>
        </div>
        {loggedInUser ? (
          <Dropdown>
            <Dropdown.Toggle variant="none" id="dropdown-basic">
              <span className="fw-bold text-capitalize">
                Hi, {loggedInUser.username}
              </span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to='/createnote'>
                Create Note
              </Dropdown.Item>
              <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <UserAccount />
        )}
      </div>
    </nav>
  );
}
