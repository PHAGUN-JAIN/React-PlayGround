import React, { Component } from "react";
import Banner from "./banner";
import "./static/css/master.css";
export default class Form extends Component {
  render() {
    return (
      <div>
        <Banner />
        <h1>hi</h1>
        <div>
          <form action="">
            <legend>registration</legend> <br /> <br />
            <label htmlFor="name">NAME:</label> <br />
            <input id="name" type="text" />
            <br />
            <br />
            <label htmlFor="branch">BRANCH:</label> <br />
            <input id="branch" type="text" />
            <br />
            <br />
            <label htmlFor="sap">SAP ID:</label> <br />
            <input id="sap" type="text" />
            <br />
            <br />
            <input type="button" value="SUBMIT" />
          </form>
        </div>
      </div>
    );
  }
}
