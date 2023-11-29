interface CardProps {
  cardTitle: string; // Replace 'string' with the actual type of cardTitle
  cardDescription: string;
  cardToolsUsed : string
}

function Card({ cardTitle, cardDescription, cardToolsUsed }: CardProps): JSX.Element {
  return (
    <div className="max-w-xl mx-auto text-center flex-1 shadow-xl p-8 rounded-xl my-10 bg-slate-50 dark:bg-slate-700">
      {/* Image here */}
      <h3 className="text-lg font-medium pt-6 pb-2">{cardTitle}</h3>
      <p className="max-w-lg mx-auto py-2 ">{cardDescription}</p>
      <h4 className="text-teal-500 py-4">Tools I used: { cardToolsUsed}</h4>
      {/* <p className=" py-1">Flutter</p>
      <p className=" py-1">Dart</p> */}
    </div>
  );
}

export default Card;
