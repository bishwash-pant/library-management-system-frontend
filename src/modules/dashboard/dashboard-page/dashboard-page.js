import { useSelector } from "react-redux";
import { UserBillingsComponent } from "../../billings/user-billings";
import { BooksBillingsComponent } from "../../billings/books-billing";

function DashboardPageComponent() {
    const isadmin = useSelector(state => state.authState.user?.isAdmin)
    return <div>
        {isadmin ? <UserBillingsComponent /> : <BooksBillingsComponent />}
    </div>
}
export default DashboardPageComponent;