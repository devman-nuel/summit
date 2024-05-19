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
            "https://images.unsplash.com/photo-1494058303350-0bd5a9ecc5d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
            "https://images.unsplash.com/photo-1496198253360-4c44aa485f6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
            "https://images.unsplash.com/photo-1493552152660-f915ab47ae9d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
            "https://images.unsplash.com/photo-1496865534669-25ec2a3a0fd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
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
