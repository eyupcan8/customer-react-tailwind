import CustomerItems from "./CustomerItems";

function CustomerList ({ customers, setCustomer }) {
        //! delete customer
    const handleDelete = (item) => {
        setCustomer(customers.filter((customer) => customer.id !== item.id ));
    }
    return (
      <ul className="customer-list">
          {customers.map((customer)=>(
              <CustomerItems customer={customer} key={customer.id}
              handleDelete={handleDelete}
              />

          ))}
      </ul>
    );
};

export default CustomerList;