import React from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function DetailedNews(props) {
  const { state } = props.history.location;
  const allNews = useSelector((state) => state.entities.news.data.articles);

  return (
    <>
      {allNews && (
        <Card
          className="mt-3"
          style={{
            width: "40rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            overflow: "auto",
          }}
        >
          <Card.Body>
            <Card.Title>{allNews[state.id].title}</Card.Title>
            <Card.Img src={allNews[state.id].urlToImage} />
            <Card.Text className="mt-3">{allNews[state.id].content}</Card.Text>
          </Card.Body>
        </Card>
      )}
      {!allNews && props.history.push("/news")}
    </>
  );
}
