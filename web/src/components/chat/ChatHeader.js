import React from "react";
import { withRouter } from "react-router-dom";
import Avatar from "components/Avatar";
import { Row, DropdownItem, DropdownMenu, DropdownToggle, Nav, UncontrolledDropdown} from "reactstrap";
import Auth from "Auth";
import moment from "moment";


const ChatHeader = props => {
    const logout = () => {
      Auth.logout();
      window.location.reload();
    }

    const status = () =>{
        if(props.typing) return 'يكتب الأن';
        if(props.contact.status === true) return 'متصل الأن';
        if(props.contact.status) return moment(props.contact.status).fromNow();
    }
      return (
          <Row className="heading m-0 justify-content-sm-between flex-nowrap">
            <div onClick={props.toggle} className="w-auto">
            		<Avatar src={props.contact.avatar} />
                   <div className="w-auto">
                  <div>
                    <div className="">{props.contact ? props.contact.name : ''}</div>
                    <small>{status()}</small>
                  </div>
                </div>
            </div>           
              <Nav className="mr-auto w-auto" navbar >
                  <UncontrolledDropdown>
                      <DropdownToggle tag="a" className="nav-link">
                          <i className="fa fa-ellipsis-v w-auto " />
                      </DropdownToggle>
                      <DropdownMenu>
                          <DropdownItem onClick={e => props.history.push('/password')}> تغير كلمة المرور </DropdownItem>
                          <DropdownItem divider/>
                          <DropdownItem onClick={logout}>تسجيل الخروج</DropdownItem>
                      </DropdownMenu>
                  </UncontrolledDropdown>
              </Nav>
          </Row>
      );
  };
export default withRouter(ChatHeader);
