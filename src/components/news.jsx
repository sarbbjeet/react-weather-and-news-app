import React from "react";
import { Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import CardHeader from "./common/cardHeader";
// import { useDispatch } from "react-redux";

export default function News(props) {
  //dispatch items
  // const dispatch =useDispatch()

  //get data from store
  const cardHeaderItems = useSelector(
    (state) => state.entities.news.cardHeaderArr
  );
  //useEffect(() => {
  //thunk technique , dispatching function
  // dispatch((dispatch, getState) => {
  //   updateCardHeaderState(getState, {
  //     id: 1,
  //     name: "Bussiness",
  //     active: true,
  //   });
  // });
  // }, []);
  return (
    <Card className="mt-3">
      <CardHeader cardHeaderItems={cardHeaderItems} />
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
