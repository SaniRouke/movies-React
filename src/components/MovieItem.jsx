import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import moviesApi from "../services/moviesApi";
import { Card, Tag, Typography, Rate } from "antd";

export default function MovieItem({ className, data }) {
  const [rateColor, setRateColor] = useState("black");

  const {
    title,
    poster_path: posterPath,
    release_date: releaseDate,
    overview,
    vote_average: voteAverage,
  } = data;
  const { Paragraph } = Typography;

  useEffect(() => {
    if (voteAverage >= 0 && voteAverage < 3) {
      setRateColor("#E90000");
    }
    if (voteAverage >= 3 && voteAverage < 5) {
      setRateColor("#E97E00");
    }
    if (voteAverage >= 5 && voteAverage < 7) {
      setRateColor("#E9D100");
    }
    if (voteAverage >= 7) {
      setRateColor("#66E900");
    }
  }, [voteAverage]);
  const img = (
    <img src={moviesApi.getImagePath(185, posterPath)} alt={data.title} />
  );
  const date = releaseDate
    ? format(new Date(releaseDate), "MMMM d, yyyy")
    : "-/-/-";
  return (
    <Card
      className={className}
      cover={img}
      bodyStyle={{ padding: "10px 20px" }}
      bordered={false}
    >
      <div className="MovieItem__header">
        <h3 className="MovieItem__title">{title}</h3>
        <div
          className="MovieItem__rate-circle"
          style={{ borderColor: rateColor }}
        >
          {voteAverage}
        </div>
      </div>
      <p className="MovieItem__date">{date}</p>
      <div className="MovieItem__tag-wrapper">
        <Tag className="MovieItem__tag">Action</Tag>
        <Tag className="MovieItem__tag">Drama</Tag>
      </div>
      <Paragraph
        className="MovieItem__overview"
        ellipsis={{ rows: 5, expandable: true, symbol: "more" }}
      >
        {overview}
      </Paragraph>
      <Rate
        className="MovieItem__rate-stars"
        count={10}
        value={voteAverage}
        allowHalf
      />
    </Card>
  );
}
