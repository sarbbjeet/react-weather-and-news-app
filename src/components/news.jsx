import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { fetchNews, updateLoading } from "../store/newsStore";
import CardHeader from "./common/cardHeader";
import CardItem from "./common/cardItem";
import Loader from "./common/loader";

export default function News(props) {
  const cardHeaders = [
    "general",
    "entertainment",
    "science",
    "technology",
    "sports",
  ];
  //dispatch items
  const dispatch = useDispatch();

  //get news api data from the store
  const allNewsApi = useSelector((state) => state.entities.news.data);
  const loading = useSelector((state) => state.entities.news.loading);
  useEffect(() => {
    //call news api
    dispatch(fetchNews(cardHeaders[0]));
  }, []);

  //cardItem div rest props
  const cardItemRestProps = (idx) => ({
    onClick: () =>
      props.history.push({
        pathname: "/news/detailed-news",
        state: { id: idx },
      }),
  });

  //header card item props such as div onclick
  const headerCardClick = ({ id, name }) => {
    dispatch(updateLoading(true));
    dispatch(fetchNews(name));
  };

  return (
    <>
      {allNewsApi.articles && (
        <Card
          className="mt-3"
          style={{
            maxWidth: "40rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardHeader
            cardHeaderItems={cardHeaders}
            clickEvent={headerCardClick}
          />
          {loading && <Loader />}
          <Card.Body style={{ height: "70%", overflowY: "auto" }}>
            {allNewsApi.articles.map((news, idx) => (
              <CardItem
                key={idx}
                title={news.title}
                img={news.urlToImage}
                restProps={cardItemRestProps(idx)}
              />
            ))}
          </Card.Body>
        </Card>
      )}
      {!allNewsApi.articles && <div className="mt-3">server error...</div>}
    </>
  );
}
