import { BrowserRouter, Routes, Route } from "react-router-dom";
import Apropos from "./pages/Apropos";
import Error from "./pages/Error";
import FicheLogement from "./pages/FicheLogement";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import { store } from "./utils/services/store/store";


const App = () => {
 
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={< Home data={accomodationsData} />}/>
        <Route path='/fiche-logement/:id' element={<FicheLogement data={accomodationsData}/>}/>
        <Route path='/a-propos' element={<Apropos/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
