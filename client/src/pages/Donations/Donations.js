import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
import { Table } from "../../components/Table";
import { Input, FormBtn } from "../../components/Form";

class Donations extends Component {
  state = {
    donations: [],
    item: "",
    category: "",
    type: "",
    quantity: 0,
    value: 0,
  };

  componentDidMount() {
    this.loadDonations();
  }

  loadDonations = () => {
    API.getDonations()
      .then(res =>
        this.setState({ donations: res.data, item: "", category: "", type: "", quantity: "", value: "", })
      )
      .catch(err => console.log(err));
  };

  deleteDonation = id => {
    API.deleteDonation(id)
      .then(res => this.loadDonations())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.item && this.state.category && this.state.quantity) {
      API.saveDonation({
        item: this.state.item,
        category: this.state.category,
        type: this.state.type,
        quantity: this.state.quantity,
        value: this.state.value,
        date: this.state.date
      })
        .then(res => this.loadDonations())
        .catch(err => console.log(err));
    }
  };

  handleDonationSubmit = event => {
    event.preventDefault();
    if (this.state.item && this.state.category && this.state.quantity) {
      API.saveDonation({
        item: this.state.item,
        category: this.state.category,
        type: this.state.type,
        quantity: this.state.quantity,
        value: this.state.value,
        date: this.state.date
      })
        .then(res => this.loadDonations())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Enter your items to be donated</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.item}
                onChange={this.handleInputChange}
                name="item"
                placeholder="Item (required)"
              />
              <Input
                value={this.state.category}
                onChange={this.handleInputChange}
                name="category"
                placeholder="Category (required)"
              />
              <Input
                value={this.state.type}
                onChange={this.handleInputChange}
                name="type"
                placeholder="Type (optional)"
              />
              <Input
                value={this.state.quantity}
                onChange={this.handleInputChange}
                name="quantity"
                placeholder="Quantity (required)"
              />
              <Input
                value={this.state.value}
                onChange={this.handleInputChange}
                name="value"
                placeholder="Value (optional)"
              />
              <FormBtn
                disabled={!(this.state.item && this.state.category && this.state.quantity)}
                onClick={this.handleFormSubmit}
              >
                Submit Item
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <br/>
            <strong>
            <Input
                value={this.state.value}
                onChange={this.handleInputChange}
                name="value"
                placeholder="Donation Name (required)"
              />
              </strong>
            <Jumbotron>
              <h1>Items In My Donation</h1>
            </Jumbotron>
            {this.state.donations.length ? (
              <Table>
                <tbody>
                  {this.state.donations.map(donation => (
                    <tr key={donation._id}>
                      <td>
                        <Link to={"/donations/" + donation._id}>
                          {donation.item}
                        </Link>
                      </td>
                      <td>
                        <Link to={"/donations/" + donation._id}>
                          {donation.category}
                        </Link>
                      </td>
                      <td>
                        <Link to={"/donations/" + donation._id}>
                          {donation.type}
                        </Link>
                      </td>
                      <td>
                        <Link to={"/donations/" + donation._id}>
                          {donation.quantity}
                        </Link>
                      </td>
                      <td>
                        <Link to={"/donations/" + donation._id}>
                          {donation.value}
                        </Link>
                      </td>
                      <td>
                        <DeleteBtn onClick={() => this.deleteDonation(donation._id)} />
                      </td>                      
                    </tr>
                  ))}
                </tbody>
              </Table>
            ) : (
              <h3>No Results to Display</h3>
            )}
            <button type="button" class="btn btn-primary btn-sm" onClick={this.handleDonationSubmit}>Submit Name & Save Donation</button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Donations;
