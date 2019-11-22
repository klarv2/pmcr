import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const CardSummary = (image) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={image.image.src} alt="Card image cap" />
        <CardBody>
          <CardTitle>{image.image.title}</CardTitle>
          <CardSubtitle></CardSubtitle>
          <CardText>{image.image.description}</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardSummary;