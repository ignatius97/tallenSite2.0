import ContactSection from "../../components/Contact/ContactSection"
import "bootstrap/dist/css/bootstrap.min.css";
import ServicePageBunner from "../../components/Services/ServicePageBunner";

function index() {
    return (
        <div>
            <ServicePageBunner
        title="Contact Us"
        body="TALLEN as a business has also built some software solutions for the general public. Click 
              here and checkout some brilliant solutions from your day to day life and start to use them
              Today. You will like them. "
      />
            <ContactSection />
        </div>
    )
}

export default index
