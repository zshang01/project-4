import React, { Component } from "react";

import { Meteor } from "meteor/meteor";
import "../style/header.css";

import { NavLink } from "react-router-dom";
import AccountsUIWrapper from "./AccountsUIWrapper.js";

export default class Header extends Component {
	

	render() {
		return (
		   <div className="">
	           	<div className="right" >
                	<AccountsUIWrapper />
              	</div>
           </div>
		);
	}
}