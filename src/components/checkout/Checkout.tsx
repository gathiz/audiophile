import { useState } from "react";
import CheckoutForm from "./CheckoutForm";
import ConfirmDialog from "./order/Confirm";

const Checkout = () => {

    const [hideDialog,setHideDialog] = useState(true);

    const handleContinue = () => {
        setHideDialog(false);
    }

    const handleBack = () => {
        setHideDialog(true);
    }

    return (
        <main className="mt-[5.625rem] mb-[6rem] flex flex-col items-center w-full min-h-screen overflow-auto">
            <div className="w-full md:w-3/4 lg:w-2/3 xl:w-3/4 2xl:w-1/2 mt-8 flex items-start justify-between">
                <CheckoutForm onContinue={handleContinue} />
            </div>
            <ConfirmDialog hidden={hideDialog} onBack={handleBack}/>
        </main>
    );
}

export default Checkout;