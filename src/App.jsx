import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Body from "./Components/Body";
import Inbox from "./Components/Inbox";
import Mail from "./Components/Mail";
import SendMail from "./Components/SendMail";
import Login from "./Components/Login";
import { useSelector } from "react-redux";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <Inbox />,
        },
        {
          path: "/mail/:id",
          element: <Mail />,
        },
      ],
    },
  ]);

  const {user} = useSelector(store=> store.appSlice)
  return (
    <div className="bg-[#F6F8FC] w-screen h-screen overflow-hidden">
      {!user ? (
        <Login />
      ) : (
        <>
          <Navbar />
          <RouterProvider router={router} />
          <div className="absolute w-[30%] bottom-0 right-20 z-10">
            <SendMail />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
