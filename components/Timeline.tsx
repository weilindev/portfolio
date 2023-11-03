const Timeline = ({ date, description }: {
	date: string
	description: string
}) => (
  <div>
    <div className="py-2 leading-6">
      <p className="bg-stone-300 w-fit px-1">{date}</p>
      <p className="text-md">{description}</p>
    </div>
  </div>
);

export default Timeline;
