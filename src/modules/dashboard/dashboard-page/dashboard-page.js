import { useSelector } from "react-redux";
import { UserBillingsComponent } from "../../billings/user-billings";
import { BooksBillingsComponent } from "../../billings/books-billing";
import Calendar from "react-calendar";
import './dashboardpage.scss';

function DashboardPageComponent() {
    const isadmin = useSelector(state => state.authState.user?.isAdmin)
    return <div>
        <div className="calendar"><Calendar /></div>
        {isadmin ? <UserBillingsComponent /> : <BooksBillingsComponent />}
    </div>
}
export default DashboardPageComponent;