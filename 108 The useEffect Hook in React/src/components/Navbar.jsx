import React, { useEffect } from "react";

const Navbar = ({ color }) => {


  // Case 1: Run on every Render.
  useEffect(() => {
    alert("Hey i will run in every Render");
  });

  //Case 2: Run only the first render
  useEffect(() => {
    alert("Hey ! Well Come to my page this is my first render!");
  }, []);

  //Case 3 : Run only centain value is Change.

  useEffect(() => {
    alert("Hey! I am running coz color was change!");
  }, [color]);


  //Case 4: Example of Clean Up function
  useEffect(() => {
    alert("This is first page of App.jsx")
  
    return () => {
      alert("Run when component is unmount!!")
    }
  }, [])
  

  return <h1>I am a Navbar of {color} Hee!!!</h1>;
};

export default Navbar;
