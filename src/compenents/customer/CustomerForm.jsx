import React, {useState} from 'react';
import {Plus} from "react-bootstrap-icons";
const CustomerForm = ({addNewCustomer}) => {
   const [customerName, setCustomerName] = useState("")

    const handleSubmit = (event) => {
       event.preventDefault();
       const newCustomer = {
           id: Math.random(),
           customerName,
       }
       addNewCustomer(newCustomer);
        setCustomerName("")
    }

    return (
        <form className="flex justify-between" onSubmit={handleSubmit}>
            <input type="text" className="shadow-lg shadow-indigo-500/40 rounded border-inherit focus:border-amber-500 outline-0" placeholder="Add a New Customer"
            onChange={(e) => setCustomerName(e.target.value)}
            value={customerName}
            />
            <button className="rounded-2xl flex justify-center w-12 items-center bg-gradient-to-br from-purple-300 to-indigo-300 text-white ml-2.5">
                <i ><Plus /></i>
            </button>
        </form>
    );
};

export default CustomerForm;