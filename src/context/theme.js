import React, { useState } from "react";

// create the context
const ThemeContext = React.createContext();

// create a provider component
function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(null);
    return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  }

export { ThemeContext, ThemeProvider };