interface CardProps {
  cardTitle: string; // Replace 'string' with the actual type of cardTitle
  cardDescription: string
}

function Card({ cardTitle, cardDescription }: CardProps): JSX.Element {
  return (
    <div className="text-center flex-1 shadow-xl p-8 rounded-xl my-10 bg-slate-50 dark:bg-slate-700">
      {/* Image here */}
      <h3 className="text-lg font-medium pt-8 pb-2">{cardTitle}</h3>
      <p className="py-2 text-justify">{cardDescription}</p>
      <h4 className="text-teal-500 py-4">Software tools I use</h4>
      <p className=" py-1">Python</p>
      <p className=" py-1">Python</p>
      <p className=" py-1">Python</p>
    </div>
  );
}

export default Card;
