import { useEffect, useState } from "react"
import { getAllUsersBillingsService, getBooksBillingsService } from "../../services/billing-service/bill-service"

export function BooksBillingsComponent() {
    const [billings, setBillings] = useState([])
    useEffect(() => {
        getAllUsersBillings();
    }, [])
    async function getAllUsersBillings() {
        try {
            const billings = await getBooksBillingsService()
            setBillings(billings.data);
        } catch (error) {

        }
    }
    return (
        <>
            <div className="w-full mx-4">
                <div>
                    <div className="border-b-4 py-2 grid grid-cols-2">
                        <div>Title</div>
                        <div>Total Bill($s)</div>
                    </div>
                </div>
                <div>
                    {billings.map((bill, index) => {
                        return (
                            <div className="border-b-2 grid grid-cols-2 py-2  ">
                                <div>{bill.title}</div>
                                <div>{bill.billCost}</div>
                            </div>
                        )
                    })}

                </div>
            </div></>
    )
}