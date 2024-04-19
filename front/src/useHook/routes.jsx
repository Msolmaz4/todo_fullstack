import Login from "../compoments/Auth/Login";
import Home from "../compoments/Home";
import Register from "../compoments/Auth/Register";
import Contact from "../compoments/Navbar/Contact";
import UserLayout from "../compoments/User";
import Usermesa from "../compoments/User/Usermesa";
import User from "../compoments/User/User";
import About from "../compoments/Navbar/About";
import Reset from "../compoments/Auth/Reset";



const routes = [
  {
    path: "/",
    element: <Home />,
  },
  //children olayinda dikkat edileck bir tane genel bir kapsazici ve bunu outlet aklta akatarmak
  {
         path: "user",
    element: <UserLayout/>,
    children: [
      {
        index:true,
        element: <User />,
      },
      {
        path:"mesaj",
        element:<Usermesa/>

      }
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
   path:'about',
   element:<About/>
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "*",
    element: <h1>404</h1>,
  },
  {
    path: "todo",
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "reset",
    element: <Reset/>,
  },
];

export default routes;
