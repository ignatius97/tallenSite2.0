import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.min.css";
import ServicePageBunner from "../../components/Services/ServicePageBunner";
import { Button, Grid, Container } from "@material-ui/core/";
import SoftwarePage from "../../components/Services/SoftwarePage";


function software() {
    const router = useRouter();
    const { id } = router.query;
    return (
      <div>
        <ServicePageBunner
          title={id}
          body="We have some of the best software developers and with there help, we have managed 
              to build some of the best, easy to customize software solutions for your business. All you have to do
              is buy the software, customize it to your style and start using. "
          buybtn={
            <Button variant="contained" color="secondary">
              Buy Now
            </Button>
          }
          demobtn={
            <Button className="ml-3" variant="outlined" color="secondary">
              Try Demo
            </Button>
          }
        />

        <SoftwarePage id={id} />
      </div>
    );
}

export default software
