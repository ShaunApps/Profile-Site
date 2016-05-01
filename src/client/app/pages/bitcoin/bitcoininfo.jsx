import React from 'react';
import {render} from 'react-dom';
import { Row, Col, colSpan, Table, Label, Grid } from 'react-bootstrap';

var gridStyle = {
  paddingTop: 50
}


export default class BitcoinInfo extends React.Component {
  render() {
    return (
      <Grid style={gridStyle}>
        <Row>
          <Col xs={12} md={8}>
            <h2>Bitcoin</h2>
            <p>Interested in Bitcoin? This section is for you!</p>
          </Col>
        </Row>
        <Row>
        <Col xs={12} md={8}>
          <p>If you haven't read the original Bitcoin whitepaper yet, you must! You can find it <a href="https://bitcoin.org/bitcoin.pdf">here.</a></p>
        </Col>
        </Row>
        <Row>
          <Col xs={12} md={8}>
            <p>Next, you should read <a href="https://www.reddit.com/r/Bitcoin/comments/3qdvt7/hey_everyone_ive_written_what_i_believe_to_be_the/"> this whitepaper</a>.
              You may understand some of it, all of it, or none at all. It is the best allegorical story of the journey every Bitcoiner must take.
            </p>
          </Col>
        </Row>

      </Grid>

    )
  }
}
