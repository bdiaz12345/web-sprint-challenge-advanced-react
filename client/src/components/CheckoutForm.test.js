import React from "react";
import '@testing-library/jest-dom/extend-expect';
import * as rtl from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event';

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    rtl.render(<CheckoutForm />)
    const header = rtl.screen.queryByText(/checkout form/i)
    expect(header).toBeInTheDocument()
});

test("form shows success message on submit with form details", () => {
    rtl.render(<CheckoutForm />)
    const button = document.querySelector('button')
    expect(button).toBeInTheDocument()
    userEvent.click(button)
    const successMessage = document.querySelector('.success-message')
    expect(successMessage).toBeInTheDocument()
});
