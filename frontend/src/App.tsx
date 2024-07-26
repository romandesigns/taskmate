import "./App.css";
import { useState, useEffect } from "react";

const getTasks = async (url: string) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
};

function App() {
  useEffect(() => {
    getTasks("/api/tasks");
  }, []);

  return <></>;
}

export default App;
