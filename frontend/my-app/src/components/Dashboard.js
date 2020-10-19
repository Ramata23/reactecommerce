import React from 'react';
import { Button } from "react-bootstrap";

 
function Dashboard(props) {

  // handle click event of logout button
  const handleLogout = () => {    

    props.history.push('/SignIn');
  }
  const handleAddproduct = () => {    

    props.history.push('/AddProduct');
  }
  return (
    <div>
      Welcome User! Here you can post a product or see the product you want with all its informations.<br /><br />
      <Button variant="danger" type="submit" onClick={handleLogout} value="Logout">Logout</Button>
      <Button variant="danger" type="submit" onClick={handleAddproduct} value="Logout">Add Product</Button>
    </div>
  );
}
 
export default Dashboard;