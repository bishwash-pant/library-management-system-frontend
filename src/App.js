import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPageComponent from "./modules/auth/login/login-page/login-page";
import SignUpPageComponent from "./modules/auth/signup/signup-page/signup-page";
import LayoutComponent from "./modules/shared/components/layout/layout";
import DashboardPageComponent from "./modules/dashboard/dashboard-page/dashboard-page";
import BooksPageComponent from "./modules/books/books-page/books-page";
import ReturnBookComponent from "./modules/books/return-book/return-book";
import RequestBookComponent from "./modules/books/request-book/request-book";
import SettingsComponent from "./modules/settings/setting";
import BooksWrapperComponent from "./modules/books/books-wrapper/books-wrapper";
import { Toaster } from 'react-hot-toast';
import { RootComponent } from "./modules/root-component/root-component";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootComponent />}>
            <Route path="/login" element={<LoginPageComponent />} />
            <Route path="/signup" element={<SignUpPageComponent />} />
            <Route path='/' element={<LayoutComponent />}>
              <Route path='/' element={<DashboardPageComponent />} />
              <Route path='/books' element={<BooksWrapperComponent />} >
                <Route path='/books' element={<BooksPageComponent />} />
                <Route path='/books/request' element={<RequestBookComponent />} />
                <Route path='/books/return' element={<ReturnBookComponent />} />
              </Route>
              <Route path='/settings' element={<SettingsComponent />} />


            </Route>
          </Route>


        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
