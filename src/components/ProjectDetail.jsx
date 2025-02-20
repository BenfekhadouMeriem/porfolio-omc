import { useParams, useNavigate } from "react-router-dom";

const ProjectDetail = () => {
  const { projectName } = useParams();
  const navigate = useNavigate(); // Permet de naviguer vers la page précédente

  return (
    <div className="p-10 text-white">
      <h1 className="text-3xl font-bold">Détails du projet : {projectName.replace("-", " ")}</h1>
      <p className="text-secondary mt-5">Ici, on pourra afficher toutes les démos live du projet.</p>
      
      {/* 🔙 Bouton pour revenir en arrière */}
      <button 
        onClick={() => navigate(-1)} 
        className="mt-5 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
      >
        ⬅ Revenir en arrière
      </button>
    </div>
  );
};

export default ProjectDetail;


