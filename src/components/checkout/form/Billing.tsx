import { ErrorMessage, Field } from "formik"

const Billing = () => {
    return (
        <div className="flex flex-col items-start w-full mt-4 p-4 md:p-0">
            <div className="flex">
                <h1 className="text-orange uppercase font-bold tracking">Billing details</h1>
            </div>
            <div className="flex flex-col w-full md:flex-row mt-4">
                <div className="flex flex-col items-start justify-start md:w-1/2">
                    <p className="block text-gray-700 text-sm font-bold mb-2">
                        Name
                    </p>
                    <Field
                        type="text"
                        name="name"
                        placeholder="Name"
                        required
                        className="w-full md:w-11/12 p-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <ErrorMessage name="name" component="div" className="text-red-500 mx-4 text-sm mt-1" />
                </div>
                <div className="flex flex-col w-full md:w-1/2 mt-4 md:mt-0">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                        Email
                    </label>
                    <Field
                        type="email"
                        name="email"
                        placeholder="name@somemail.org"
                        required
                        className="w-full md:w-11/12 p-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500 mx-4 text-sm mt-1" />
                </div>
            </div>
            <div className="flex flex-col md:flex-row w-full mt-4">
                <div className="flex flex-col md:w-1/2">
                    <label htmlFor="phone" className="text-gray-700 text-sm font-bold mb-2">
                        Phone
                    </label>
                    <Field
                        type="text"
                        name="phone"
                        placeholder="(555) 555-555"
                        required
                        className="w-full md:w-11/12 p-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <ErrorMessage name="phone" component="div" className="text-red-500 mx-4 text-sm mt-1" />
                </div>
            </div>
        </div>
    )
}

export default Billing;