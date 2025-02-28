import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Landing } from "../pages/Landing";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
