import React, { useState } from "react";
import {useRoutes} from "./routes";
import Sidebar from "./Components/SideBar";

function App() {
  const routes = useRoutes()
  return (
      <div className="App">
          <Sidebar />
          {routes}
      </div>
  );
}

export default App;
