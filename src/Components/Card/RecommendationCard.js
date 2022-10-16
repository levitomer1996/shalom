import React from "react";
import { Paper, Avatar } from "@mui/material";
import "./Card.css";
export default function RecommendationCard({ name, avatar_link, content }) {
  return (
    <Paper
      className="recommendation_card"
      elevation={3}
      style={{ padding: 10 }}
    >
      <Avatar alt={name} src={avatar_link} sx={{ width: 56, height: 56 }} />
      <p className="recommendation_card_name">{name}</p>
      <div className="recommendation_card_content">
        <p>{content}</p>
      </div>
    </Paper>
  );
}
