import { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const UserModal = (props) => {
  const [form, setForm] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target; // Destructure name and value directly
    setForm({ ...form, [name]: value });
  };

  // Destructure props properly
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    const { cars, setCars, toggle } = props;
    cars.push(form);
    setCars([...cars]);
    toggle();
    // Add your form submission logic here
  };

  return (
    <Modal isOpen={props.open} toggle={props.toggle}>
      <ModalHeader>
        <h1>Add User</h1>
      </ModalHeader>
      <ModalBody>
        <form onSubmit={handleSubmit} id="submit">
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="form-control my-2"
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Price"
            name="price"
            className="form-control my-2"
            onChange={handleChange}
          />
          <input
            type="date"
            placeholder="Year"
            name="year"
            className="form-control my-2"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Color"
            name="color"
            className="form-control my-2"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Brand"
            name="brand"
            className="form-control my-2"
            onChange={handleChange}
          />
        </form>
      </ModalBody>
      <ModalFooter>
        <button className="btn btn-danger" onClick={props.toggle}>
          Cancel
        </button>
        <button className="btn btn-success" type="submit" form="submit">
          Save
        </button>
      </ModalFooter>
    </Modal>
  );
};

export default UserModal;
