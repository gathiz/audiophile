import { ErrorMessage, Field } from "formik";
import React from "react";

interface PaymentProps {
    values: any;
}

const Payment: React.FC<PaymentProps> = ({values}) => {
    return (
        <div className="flex flex-col items-start w-full mt-4 p-4 md:p-0">
            <div className="flex w-full mt-4">
                <h1 className="text-orange uppercase font-bold tracking">Payment details</h1>
            </div>
            <div className="flex flex-col md:flex-row w-full mt-4">
                <div className="flex flex-col md:w-1/2">
                    <p className="font-bold">Payment Methods</p>
                </div>
                <div className="flex flex-col items-start justify-start w-full mt-4 md:mt-0 md:w-1/2">
                    <label
                        className="w-full md:w-5/6 rounded-lg py-2 border-2 border-gray-200 text-gray-700 text-sm font-bold mb-2">
                        <Field
                            type="radio"
                            name="payment"
                            value="emoney"
                            className="mx-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        e-Money
                    </label>
                    <label
                        className="w-full md:w-5/6 rounded-lg py-2 border-2 border-gray-200 mt-4 md:mt-0 text-gray-700 text-sm font-bold mb-2">
                        <Field
                            type="radio"
                            name="payment"
                            value="cash"
                            className="mx-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        Cash on Delivery
                    </label>
                </div>
            </div>
            {values.payment === "emoney" && (
                <div className="flex w-full mt-4">
                    <div className="flex flex-col items-start justify-start w-1/2">
                        <label htmlFor="emoneynum" className="block text-gray-700 text-sm font-bold mb-2">
                            e-Money Number
                        </label>
                        <Field
                            type="text"
                            name="emoneynum"
                            placeholder="123456789"
                            required
                            className="w-5/6 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <ErrorMessage name="emoneynum" component="div" className="text-red-500 mx-4 text-sm mt-1"/>
                    </div>
                    <div className="flex flex-col items-start justify-start w-1/2">
                        <label htmlFor="pin" className="block mx-4 text-gray-700 text-sm font-bold mb-2">
                            e-Money PIN
                        </label>
                        <Field
                            type="text"
                            name="pin"
                            placeholder="1234"
                            required
                            className="w-5/6 mx-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <ErrorMessage name="pin" component="div" className="text-red-500 mx-4 text-sm mt-1"/>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Payment;