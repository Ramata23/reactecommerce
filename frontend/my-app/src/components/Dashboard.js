import React from 'react';
import { Button } from "react-bootstrap";

 
class Dashboard extends React.Component{
  

  // handle click event of logout button
   handleLogout = () => {    

    this.props.history.push('/SignIn');
  }
   handleAddproduct = () => {    

    this.props.history.push('/AddProduct');
  }
  render(){
    return (
    <div>
    Welcome User! Here you can post a product or see the product you want with all its informations.<br /><br />
    <Button variant="danger" type="submit" onClick={this.handleLogout} value="Logout">Logout</Button>
    <Button variant="danger" type="submit" onClick={this.handleAddproduct} value="Logout">Add Product</Button>
  </div>
);
  }
  
   
}
 
export default Dashboard;