import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./pages/Error";
import EmployeeList from "./pages/EmployeeList";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import { store } from "./utils/services/store/store";


const App = () => {
 
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={< Home/>}/>
        <Route path='/employee-list' element={< EmployeeList/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
