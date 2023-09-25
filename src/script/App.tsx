import { useEffect } from "react";
import "./App.css";
import Category from "../components/templates/category";

function App() {
  const fetchAPI = () => {
    console.log("Fetching API...");
  }

  //[]: useEffect run when this component loaded for the first time
  useEffect(fetchAPI, []);

  return (
    <>
      <div>
        <Category/>
      </div>
    </>
  );
}

export default App;
