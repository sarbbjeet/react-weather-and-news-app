import React from "react";
import { Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { fetchNews, updateCardHeaderState } from "../store/newsStore";
import CardHeader from "./common/cardHeader";
import CardItem from "./common/cardItem";

export default function News(props) {
  //dispatch items
  const dispatch = useDispatch();
  //get data from store
  const cardHeaderItems = useSelector(
    (state) => state.entities.news.cardHeaderArr
  );
  //get news api data from the store
  const allNewsApi = useSelector((state) => state.entities.news.data);

  //header card item props such as div onclick
  const cardProps = (item) => ({
    onClick: () => {
      dispatch(updateCardHeaderState({ ...item, active: true })); //active true
      dispatch(fetchNews(item)); //based on key pressed(category)
    },
  });
  return (
    <>
      {allNewsApi.articles && (
        <Card className="mt-3" style={{ maxWidth: "600px" }}>
          <CardHeader
            extraProps={cardProps}
            cardHeaderItems={cardHeaderItems}
          />
          <Card.Body style={{ height: "70%", overflowY: "auto" }}>
            {allNewsApi.articles.map((news, idx) => (
              <CardItem key={idx} title={news.title} img={news.urlToImage} />
            ))}
          </Card.Body>
        </Card>
      )}
      {!allNewsApi.articles && <div className="mt-3">server error...</div>}
    </>
  );
}
