import React from 'react';
import {Trash} from "react-bootstrap-icons";

const CustomerItems = ({customer, handleDelete}) => {
    return (
        <li className="customer-item flex justify-between items-center mt-4">
            <div className="customer-info flex items-center gap-x-2.5">
                <img src="https://i.pravatar.cc/100" alt="" className="customer-avatar w-12 h-12 rounded-full"/>
                <span className="customer-name font-medium text-[18px]">{customer.customerName}</span>
            </div>
            <button onClick={() => handleDelete(customer)} className="delete-button rounded-2xl flex justify-center w-12 h-6 items-center bg-gradient-to-br from-purple-300 to-indigo-300 text-white ml-2.5">
                <Trash />
            </button>
        </li>
    );
};

export default CustomerItems;