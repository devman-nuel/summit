import React, { useState, useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import ScrollTop from './Components/Scrolltop'
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';

import './App.css';
import { split } from "./Animations/Text";
import scroll from "./Animations/Scroll";

import Preloader from "./Components/Preloader/Preloader"; // Import the Preloader component
import Gallery from "./Pages/Gallery/Gallery";
import About from "./Pages/About/About";

scroll();

const Layout = () => {
  useEffect(() => {
    split(); // Initialize split text animation
  }, []);

  return (
    <div className="main">
      <ScrollTop />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      
      {
        path: "/gallery",
        element: <Gallery />,
      },

      {
        path: "/about",
        element: <About />,
      },
     
    ]
  },
]);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handlePreloadComplete = () => {
      setLoading(false);
    };

    // Simulate loading time for demonstration purposes
    setTimeout(() => {
      handlePreloadComplete();
    }, 3000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Preloader
          images={[
            "",  
            // Add more Cloudinary image URLs as needed
          ]}
          onComplete={() => {}}
        />
      ) : (
        <RouterProvider router={router} />
      )}
     
    </div>
  );
}

export default App;
