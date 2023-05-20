import { useEffect, useState } from "react"
import { getAllUsersBillingsService } from "../services/billing-service/bill-service"

export function UserBillingsComponent() {
    const [billings, setBillings] = useState([])
    useEffect(() => {
        getAllUsersBillings();
    }, [])
    async function getAllUsersBillings() {
        try {
            const billings = await getAllUsersBillingsService()
            setBillings(billings.data);
        } catch (error) {

        }
    }
    return (
        <>
            <div className="w-full mx-4">
                <div>
                    <div className="border-b-4 py-2 grid grid-cols-2">
                        <div>Fullname</div>
                        <div>Total Bill($)</div>
                    </div>
                </div>
                <div>
                    {billings.map((bill, index) => {
                        return (
                            <div key={index} className="border-b-2 grid grid-cols-2 py-2  ">
                                <div>{bill.fullName}</div>
                                <div>{bill.billCost}</div>
                            </div>
                        )
                    })}

                </div>
            </div></>
    )
}