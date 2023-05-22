import { useSelector } from "react-redux";
import { UserBillingsComponent } from "../../billings/user-billings";
import { BooksBillingsComponent } from "../../billings/books-billing";
import Calendar from "react-calendar";
import './dashboardpage.scss';
import { AllAssignedBooksListHOC } from "../../books/book-list-hoc/all-assigned-books-hoc";

function DashboardPageComponent() {
    const isadmin = useSelector(state => state.authState.user?.isAdmin)
    return <div>
        <div className="calendar"><Calendar /></div>
        <hr />
        <div className="my-8">
            <h2 className="text-3xl mx-auto w-[fit-content]">Books currently on Loan</h2>
            <AllAssignedBooksListHOC />
        </div>
        <hr />
        {isadmin ? <UserBillingsComponent /> : <BooksBillingsComponent />}
    </div>
}
export default DashboardPageComponent;