import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

import LayoutComponent from "./modules/shared/components/layout/layout";
import DashboardPageComponent from "./modules/dashboard/dashboard-page/dashboard-page";
import BooksWrapperComponent from "./modules/books/books-wrapper/books-wrapper";
import { SettingsComponent } from "./modules/settings/setting";
import RequestBookComponent from "./modules/books/request-book/request-book";
import { MyBookComponent } from "./modules/books/my-books/my-books";
import ReturnBookComponent from "./modules/books/return-book/return-book";
import LoginPageComponent from "./modules/auth/login/login-page/login-page";
import SignUpPageComponent from "./modules/auth/signup/signup-page/signup-page";


function App() {
  return (
    <div className="bg-slate-50 overflow-auto w-[100vw] h-[100vh]">
      <div className="relative">

        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPageComponent />} />
            <Route path="/signup" element={<SignUpPageComponent />} />
            <Route path='/' element={<LayoutComponent />}>
              <Route path='/' element={<DashboardPageComponent />} />
              <Route path='/books' element={<BooksWrapperComponent />} >
                <Route path='' element={<MyBookComponent />} />
                <Route path='request' element={<RequestBookComponent />} />
                <Route path='return' element={<ReturnBookComponent />} />
              </Route>
              <Route path='/settings' element={<SettingsComponent />} />
            </Route>


          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
