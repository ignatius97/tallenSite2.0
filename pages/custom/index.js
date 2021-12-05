import ServicePageBunner from "../../components/Services/ServicePageBunner";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomPage from "../../components/CustomPage/CustomPage";

function index() {
  return (
    <div>
      <ServicePageBunner
        title="Custom"
        body="TALLEN as a business has also built some software solutions for the general public. Click 
              here and checkout some brilliant solutions from your day to day life and start to use them
              Today. You will like them. "
      />
      <CustomPage />
    </div>
  );
}

export default index;
