import { useState } from "react";
import "./App.css";
import Review from "./Review";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <div className="container">
        <div className="title">
          <h2>review</h2>
          <div className="underline"></div>
        </div>
      </div>
      <Review />
    </main>
  );
}

export default App;
