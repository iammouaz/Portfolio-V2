import React, { useEffect, useState } from "react";
import Homepage from "./pages/Homepage";
import "./App.scss";
import HomepageDark from "./pages/HomepageDark";

function App() {
  const [style, setStyle] = useState(false);
  const currentStyle = localStorage.getItem("style");

  useEffect(() => {
    if (!currentStyle) {
      localStorage.setItem("style", false);
    }
  }, []);

  return (
    <>
      {style ? (
        <HomepageDark setStyle={setStyle} style={style} />
      ) : (
        <Homepage setStyle={setStyle} style={style} />
      )}
    </>
  );
}

export default App;
