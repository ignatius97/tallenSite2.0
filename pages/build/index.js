import ServicePageBunner from "../../components/Services/ServicePageBunner";
import "bootstrap/dist/css/bootstrap.min.css";
import BuildStepper from "../../components/BuildPage/BuildStepper";
import { Container } from "@material-ui/core";

function index() {
  return (
    <div>
      <ServicePageBunner
        title="Build"
        body="We build for you your desired software from zero until the day you deploy it.
              All you need to do it to write a description of the software and send it to us, We will contact you
              to Confirm and them start. "
      />
      <Container>
        <BuildStepper />
      </Container>
    </div>
  );
}

export default index;
