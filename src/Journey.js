import React from 'react';
import { Grid, Row, Col, Thumbnail, Button} from 'react-bootstrap';
import Steps from './Steps'

const Journey = (props) => {
   const { journey } = props;
   return (
    <div>
     <Grid>
     <Row>
       <Col xs={6} md={4}>
         <Thumbnail src="../photos/Master.png" alt="242x200">
           <h3>{journey.title._text}</h3>
           <p>{journey.goal._text}</p>
           <p>
             <Button bsStyle="primary">Steps</Button>
           </p>
         </Thumbnail>
       </Col>
     </Row>
   </Grid>
   <Steps steps={ journey.steps.step } />
   </div>
   );
}


export default Journey