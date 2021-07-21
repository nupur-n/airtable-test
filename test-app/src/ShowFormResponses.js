import React, { useState, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { fetchOpenProjects } from './utils';

const FormResponse = ({ response }) => {
  const { id, name, email, phone } = response;

  return (<h4> Name: {name}, Email: {email}, Phone {phone} </h4>);
};

const ShowFormResponses = () => {
  const [responses, setResponses] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const onLoad = async (airtableRecords) => {
      setResponses(airtableRecords);
      setHasLoaded(true);
    };

     if (!hasLoaded) {
       fetchOpenProjects(onLoad);
     } else {
       setHasLoaded(true);
     }

  }, [hasLoaded, responses]);

  return (
    <Container>
      <Row>
        <Col lg={4}>
          {responses.map((response, index) => (
            <FormResponse key={index} response={response}/>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export { ShowFormResponses };
