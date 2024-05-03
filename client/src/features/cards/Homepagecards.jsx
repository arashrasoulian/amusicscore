import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import noImage from "../../../public/images/No-Image-Placeholder.png"


export function Homepagelistcard({score}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={noImage} />
      <Card.Body>
        <Card.Title>{score.name}</Card.Title>
        <Card.Text>
        {score.arranger}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
