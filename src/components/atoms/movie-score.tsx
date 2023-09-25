import { Progress } from "antd";
import "./movie-score.scss"
import { FC } from "react";

type MovieScoreProps = {
  score: number;
}

const MovieScore: FC<MovieScoreProps> = ({score}) => {
  return (
    <div className="movie-score">
        <Progress type="circle" percent={score*10} size={"small"} format={() => `${score.toFixed(1).toString()}`}/>
    </div>
  );
}

export default MovieScore;
