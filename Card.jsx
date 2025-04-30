const Card = ({ title, children }) => (
  <div className="bg-white p-4 rounded shadow hover:shadow-lg transition-transform hover:scale-105">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <p>{children}</p>
  </div>
);

export default Card;