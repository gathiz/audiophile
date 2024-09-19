import { ErrorMessage, Field } from "formik"

const Shipping = () => {
    return (
        <div className="flex flex-col items-start w-full mt-4 px-4 md:p-0">
            <div className="flex mt-4">
                <h1 className="text-orange uppercase font-bold tracking">Shipping info</h1>
            </div>
            <div className="flex items-center justify-between w-full my-4">
                <div className="flex flex-col items-start justify-start w-full">
                    <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">
                        Address
                    </label>
                    <Field
                        type="textarea"
                        name="address"
                        placeholder="12 Main Avenue"
                        required
                        className="w-full md:w-11/12 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                    />
                    <ErrorMessage name="address" component="div" className="text-red-500 mx-4 text-sm mt-1"/>
                </div>
            </div>
            <div className="flex flex-col md:flex-row w-full mt-2 md:mt-0">
                <div className="flex flex-col items-start justify-start w-full md:w-1/2">
                    <label htmlFor="city" className="block md:mx-4 text-gray-700 text-sm font-bold mb-2">
                        City
                    </label>
                    <Field
                        type="text"
                        name="city"
                        placeholder="Buffalo"
                        required
                        className="w-full md:w-11/12 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <ErrorMessage name="city" component="div" className="text-red-500 mx-4 text-sm mt-1"/>
                </div>
                <div className="flex flex-col items-start justify-start w-full mt-4 md:mt-0 md:w-1/2">
                    <label htmlFor="state" className="block md:mx-4 text-gray-700 text-sm font-bold mb-2">
                        State
                    </label>
                    <Field
                        type="text"
                        name="state"
                        placeholder="NY"
                        required
                        className="w-full md:w-5/6 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <ErrorMessage name="state" component="div" className="text-red-500 mx-4 text-sm mt-1"/>
                </div>
            </div>
            <div className="flex items-center justify-between w-full my-4">
                <div className="flex flex-col items-start justify-start w-full">
                    <label htmlFor="zip" className="block text-gray-700 text-sm font-bold mb-2">
                        ZIP Code
                    </label>
                    <Field
                        type="text"
                        name="zip"
                        placeholder="10001"
                        required
                        className="w-full md:w-11/12 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                    />
                    <ErrorMessage name="address" component="div" className="text-red-500 mx-4 text-sm mt-1"/>
                </div>
            </div>
        </div>
    )
}

export default Shipping;