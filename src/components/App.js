import React, { useState } from "react";
import Header from "./Header";
import Profile from "./Profile";
import { UserProvider } from "../context/user";
import { ThemeProvider } from "../context/theme";


function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <main className={theme}>
      {/* wrap components that need access to context data in the provider*/}
      <ThemeProvider>
      <UserProvider>
        <Header theme={theme} setTheme={setTheme} />
        <Profile theme={theme} />
      </UserProvider>
      </ThemeProvider>
    </main>
  );
}

export default App;