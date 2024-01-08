import { AiFillGithub } from "react-icons/ai";
import openUrlInNewTab from "../utils/utils";

interface CardProps {
  cardTitle: string; // Replace 'string' with the actual type of cardTitle
  cardDescription: string;
  cardToolsUsed: string;
  cardGitHubLink: string;
}

function Card({
  cardTitle,
  cardDescription,
  cardToolsUsed,
  cardGitHubLink,
}: CardProps): JSX.Element {
  return (
    <div className="max-w-xl mx-auto text-center shadow-xl p-4 rounded-xl my-3 bg-slate-50 dark:bg-slate-700">
      <h3 className="text-lg font-medium pt-6 pb-2">{cardTitle}</h3>
      <p className="max-w-lg mx-auto py-2 ">{cardDescription}</p>
      <h4 className="text-teal-600 py-4">Tools I used: {cardToolsUsed}</h4>
      <AiFillGithub
        className="text-4xl flex justify-center gap-16"
        onClick={() => openUrlInNewTab(cardGitHubLink)}
      />
    </div>
  );
}

export default Card;
