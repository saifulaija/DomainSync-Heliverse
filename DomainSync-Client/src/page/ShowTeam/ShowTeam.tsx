import { useParams } from "react-router-dom";


const ShowTeam = () => {
    const{id}=useParams()
  return <div>ShowTeam {id}</div>;
};

export default ShowTeam;
