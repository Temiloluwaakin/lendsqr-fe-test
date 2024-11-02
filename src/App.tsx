import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Users from "./pages/Users";
import Userdetails from "./pages/Userdetails";
import Login from "./pages/Login";

const App = () => {
  return ( 
    <div className="App">
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Layout> <Users /> </Layout> } />
          <Route path="/" element={ <Login /> } />
          <Route path='/users/:id' element={ <Layout><Userdetails /></Layout> } />
        </Routes>
      </Router>
    </div>
   );
}
 
export default App;