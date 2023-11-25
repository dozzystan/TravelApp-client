import Nav from "./components/Nav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import { getUser } from "./config/api";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateNote from "./pages/CreateNote";

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const token = JSON.parse(localStorage.getItem("token"));
  console.log(token);

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await getUser(token);
        setLoggedInUser(res.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchUser();
  }, [token]);

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Nav loggedInUser={loggedInUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='createnote' element={<CreateNote/>}/>
      </Routes>
    </>
  );
}

export default App;
