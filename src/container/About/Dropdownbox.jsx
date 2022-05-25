import React from 'react'
import { Dropdown } from 'react-bootstrap';
import './Dropdownbox.scss';

const Dropdownbox = ({contentInSection}) => {
  return (
  <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    See More
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item onClick={contentInSection} id="1">5+ Different Categories</Dropdown.Item>
    <Dropdown.Item onClick={contentInSection}  id="2">Corporate  Choreography</Dropdown.Item>
    <Dropdown.Item onClick={contentInSection} id="3">Wedding Choreography</Dropdown.Item>
    <Dropdown.Item onClick={contentInSection} id="4"> Competition  Training</Dropdown.Item>
    {/* <Dropdown.Item onClick={contentInSection} id="5"> Kids Summer Camp</Dropdown.Item>
    <Dropdown.Item onClick={contentInSection} id="6"> Kids Winter Camp</Dropdown.Item> */}
    <Dropdown.Item onClick={contentInSection} id="5"> Know More About Us</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
  )
}

export default Dropdownbox;