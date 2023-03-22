import React from "react";
import Avatar from "../Avatar";
import { Row } from 'reactstrap';

const ContactHeader = props => {
	return (
		<Row className="heading">
			<div className="w-auto">
				<Avatar src={props.user.avatar}/>
			</div >
			<div className="mt-1 w-auto">جهات الإتصال</div>
			<div className="nav-link w-auto" onClick={props.toggle}>
				<i className="fa fa-bars" />
			</div>
		</Row>
	)
}

export default ContactHeader;