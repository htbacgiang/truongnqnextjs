const Card = ({ title, projects, icon }) => {
    return (
      <div className="bg-white border border-pink-500 rounded-2xl p-8 flex flex-col items-center text-center transition-transform transform hover:scale-105">
        <div className="text-4xl text-pink-500 mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{projects} Projects</p>
      </div>
    );
  };
  
  export default Card;