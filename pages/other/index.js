import OthersPage from "../../components/Services/Others/OthersPage";

import ServicePageBunner from "../../components/Services/ServicePageBunner";
import "bootstrap/dist/css/bootstrap.min.css";

function index() {
  return (
    <div>
      <ServicePageBunner
        title="Other Services"
        body="TALLEN as a business has also built some software solutions for the general public. Click 
              here and checkout some brilliant solutions from your day to day life and start to use them
              Today. You will like them. "
      />
      <OthersPage />
    </div>
  );
}

export default index;
