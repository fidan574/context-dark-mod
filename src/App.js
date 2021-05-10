import React, { useState } from "react";
import ThemeContext from "./context/ThemeContext";
import Header from "./Header";
import Main from "./MainWithFunction";
import MainWithClass from "./MainWithClass";

function App() {
  const themeHook = useState("light");
  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <Header />
        <Main />
        <MainWithClass />
      </div>
    </ThemeContext.Provider>
  );
}
export default App;




// import './App.css';

// function App() {
//   const theme = "light"
//   return (
//     <ThemeContext.Provider value = {theme}>
//       <div className="App">
//       </div>
//     </ThemeContext.Provider>
    
//   );
// }

// export default App;
