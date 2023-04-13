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
import { RootComponent } from "./modules/root-component/root-component";
import { ToastContainer, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserOptionsComponent } from "./modules/users/users-options/users-options";
import { AdminGuard } from "./modules/admin/admin-wrapper/admin-guard";
import { ListUsersComponent } from "./modules/admin/list-users/list-users";
import { AddUserComponent } from "./modules/admin/add-user/add-user";
import { InvitedUsersComponent } from "./modules/admin/invited/invited-users";


function App() {
  return (
    <div className="bg-slate-50 overflow-auto w-[100vw] h-[100vh]">
      <div className="relative">

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RootComponent />}>
              <Route path="/login" element={<LoginPageComponent />} />
              <Route path="/signup/:token" element={<SignUpPageComponent />} />
              <Route path='/' element={<LayoutComponent />}>
                <Route path='/' element={<DashboardPageComponent />} />
                <Route path='/books' element={<BooksWrapperComponent />} >
                  <Route path='/books' element={<BooksPageComponent />} />
                  <Route path='/books/request' element={<RequestBookComponent />} />
                  <Route path='/books/return' element={<ReturnBookComponent />} />
                </Route>
                <Route path='/admin' element={<AdminGuard />}>
                  <Route path='/admin/users' element={<UserOptionsComponent />} />
                  <Route path='/admin/users/list' element={<ListUsersComponent />} />
                  <Route path='/admin/users/add' element={<AddUserComponent />} />
                  <Route path='/admin/users/invited' element={<InvitedUsersComponent />} />
                </Route>
                <Route path='/settings' element={<SettingsComponent />} />
              </Route>
            </Route>


          </Routes>
        </BrowserRouter>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
