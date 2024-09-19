import * as Yup from 'yup';
import { selectAllCartItems } from '../../store/cartSlice';
import { RootState } from '../../store';
import { useSelector } from 'react-redux';
import { CheckoutData } from '../../types';
import { Form, Formik } from "formik";
import CartSummary from './CartSummary';
import Billing from './form/Billing';
import Shipping from './form/Shipping';
import Payment from './form/Payment';
import React from "react";

interface CheckoutFormProps {
    onContinue: () => void;
}
const CheckoutForm: React.FC<CheckoutFormProps> = ({onContinue}) => {
    const cart = useSelector((state: RootState) => selectAllCartItems(state));

    const ValidationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid Email')
            .required('Email is reqired'),
        name: Yup.string()
            .required('Name is required'),
        phone: Yup.string()
            .matches(/^\+?(\d{1,3})?[-. (]*\d{3}[-. )]*\d{3}[-. ]*\d{4}$/, 'Invalid phone number')
            .required('Phone number is required'),
        address: Yup.string()
            .required('Address is required'),
        zip: Yup.string()
            .required('Zip code is required'),
        payment: Yup.string().required('Please select a payment method'),
        city: Yup.string(),
        state: Yup.string(),
    });

    const initialValues = {
        email: '',
        name: '',
        phone: '',
        address: '',
        zip: '',
        payment: '',
        city: '',
        state: '',
        method: '',
        emoneynum: 0,
        pin: 0
    }

    const showConfirmDialog = () => {
        onContinue();
    }

    return (
        <>
            {cart.length === 0 ? (
                <p className="mb-8 font-bold text-xl">
                    Please add items to your cart before visiting this page.
                </p>
            ) : (
                <Formik
                    initialValues={initialValues}
                    validationSchema={ValidationSchema}
                    onSubmit={(values: CheckoutData, { setSubmitting }) => {
                        console.log(values);
                        setSubmitting(false);
                        showConfirmDialog();
                    }}>
                    {({ values }) => (
                        <Form className="w-full flex flex-col mx-4 md:mx-0 md:flex-row h-full">
                            <div className="flex flex-col items-start justify-start rounded-lg w-full md:w-2/3 md:m-4 md:p-4">
                                <div className="flex w-full my-4">
                                    <h1 className="text-2xl uppercase font-bold tracking">Checkout</h1>
                                </div>
                                <Billing />
                                <Shipping />
                                <Payment values={values} />
                            </div>
                            <div className="flex flex-col w-full md:w-1/3 md:m-4 md:p-4">
                                <CartSummary />
                            </div>
                        </Form>
                    )}
                </Formik>
            )}
        </>
    );
}

export default CheckoutForm;