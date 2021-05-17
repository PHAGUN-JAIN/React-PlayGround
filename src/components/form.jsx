import React, { Component } from "react";

export default class Form extends Component {
  render() {
    return (
      <form action="">
        <legend>registration</legend>
        <label htmlFor="name">NAME:</label>
        <input id="name" type="text" />
        <br />
        <br />
        <label htmlFor="branch">BRANCH:</label>
        <input id="branch" type="text" />
        <br />
        <br />
        <label htmlFor="sap">SAP ID:</label>
        <input id="sap" type="text" />
        <br />
        <br />
        <input type="button" value="SUBMIT" />
      </form>
    );
  }
}
