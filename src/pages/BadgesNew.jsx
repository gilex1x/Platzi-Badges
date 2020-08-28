import React from "react";
import Badge from "../components/Badge";
import Navbar from "../components/Navbar";
import logo from "../images/badge-header.svg";
import "./styles/BadgeNew.css";
import BadgeForm from "../components/BadgeForm";

class BadgesNew extends React.Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      title: "",
      email: "",
      socila: "",
    },
  };

  handleChange = (e) => {
    const nextForm = this.state.form;
    nextForm[e.target.name] = e.target.value;
    this.setState({
      form: nextForm,
    });
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={logo} alt="Logo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                title={this.state.form.title}
                social={this.state.form.socila}
              />
            </div>
            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgesNew;
