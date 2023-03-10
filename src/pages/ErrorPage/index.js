import { useRouteError } from "react-router-dom";
import {Link} from "react-router-dom"; 
import img from "../../assets/racehunter-logo.svg";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
//αυτο ειναι το error page, γενικά μπορεί να αλλάξει όλο το style του αν κάποιος το κρίνει απαραίτητο 
  return (
    <div id="error-page">
      <Link to="/"><img src={img} /></Link>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i> 
        {/* //να μην αλλαχτεί */}
      </p>
    </div>
  );
}
