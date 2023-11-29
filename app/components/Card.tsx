interface CardProps {
  cardTitle: string; // Replace 'string' with the actual type of cardTitle
}

function Card({ cardTitle }: CardProps): JSX.Element {
  return (
    <div className="text-center flex-1 shadow-2xl p-8 rounded-xl my-10 dark:bg-slate-700 bg-gray">
      {/* Image here */}
      <h3 className="text-lg font-medium pt-8 pb-2">{cardTitle}</h3>
      <p className="py-2">Creating elegant designs</p>
      <h4 className="text-teal-500 py-4">Software tools I use</h4>
      <p className=" py-1">Python</p>
      <p className=" py-1">Python</p>
      <p className=" py-1">Python</p>
    </div>
  );
}

export default Card;
