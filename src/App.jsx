
import './App.css';
import CustomerList from "./compenents/customer/CustomerList";
import CustomerForm from "./compenents/customer/CustomerForm";
import {useState} from "react";

function App() {
    const  [customers, setCustomers] = useState([]);
    const addNewCustomer = (newCustomer) => {
       // setCustomers([...customers, newCustomer]);
        setCustomers((prevState) => [newCustomer, ...prevState]);

        console.log(customers);
    }
  return (
    <div className="App flex items-center justify-center h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
        <div className="p-7 bg-blue-200 rounded-lg	">
            <h1 className="mb-2.5 text-2xl">Customer Manage System</h1>
      <CustomerForm addNewCustomer={addNewCustomer} />
            {customers.length === 0 && "There are no customers..."}
            <CustomerList customers={customers} setCustomer={setCustomers} />
        </div>
        </div>
  );
}

export default App;
