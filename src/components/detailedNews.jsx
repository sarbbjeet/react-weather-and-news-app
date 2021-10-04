import React from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function DetailedNews(props) {
  const allNews = useSelector((state) => state.entities.news.data.articles);

  return (
    <>
      {!allNews && props.history.push("/news")}
      <Card
        className="mt-3"
        style={{
          width: "40rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Card.Body>
          <Card.Title>{allNews[0].title}</Card.Title>
          <Card.Img src={allNews[0].urlToImage} />
          <Card.Text className="mt-3">{allNews[0].content}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
