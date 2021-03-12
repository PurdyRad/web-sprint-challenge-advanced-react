import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);

    const header = screen.getByText(/checkout form/i);

    expect(header).toBeInTheDocument();

});


test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />);

    const fNameType = screen.getByText(/first Name:/i).querySelector('input')
    userEvent.type(fNameType, 'Hugh')
    const lNameType = screen.getByText(/last Name:/i).querySelector('input')
    userEvent.type(lNameType, 'Jass')
    const addType = screen.getByText(/address:/i).querySelector('input')
    userEvent.type(addType, 'In')
    const cityType = screen.getByText(/city:/i).querySelector('input')
    userEvent.type(cityType, 'Ya')
    const stateType = screen.getByText(/state:/i).querySelector('input')
    userEvent.type(stateType, "Momma's")
    const zipType = screen.getByText(/zip:/i).querySelector('input')
    userEvent.type(zipType, 'House')

    const button = screen.getByRole(/button/i)
    userEvent.click(button)

    const fNameDisplay = screen.getByText(/Hugh/i) 
    const lNameDisplay = screen.getByText(/Jass/i)
    const addDisplay = screen.getByText(/In/i)
    const cityDisplay = screen.getByText(/Ya/i)
    const stateDisplay = screen.getByText(/Momma's/i)
    const zipDisplay = screen.getByText(/House/i)

    expect(fNameDisplay).toBeInTheDocument()
    expect(lNameDisplay).toBeInTheDocument()
    expect(addDisplay).toBeInTheDocument()
    expect(cityDisplay).toBeInTheDocument()
    expect(stateDisplay).toBeInTheDocument()
    expect(zipDisplay).toBeInTheDocument()
});
