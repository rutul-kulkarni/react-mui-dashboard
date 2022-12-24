import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import Dashboard from "./views/dashboard";
import SideBar from "./views/global/SideBar";
import TopBar from "./views/global/TopBar";
import { ProSidebarProvider } from "react-pro-sidebar";
import Team from "./views/team";
import Contacts from "./views/contacts";
import Invoices from "./views/invoices";
import Form from "./views/form";
import Calendar from "./views/calender";
import FAQ from "./views/faq";
import Bar from "./views/bar";
import Pie from "./views/pie";
import Line from "./views/line";
import Geography from "./views/geography";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar />
          <main className="content">
            <TopBar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
