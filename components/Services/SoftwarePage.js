import { useRouter } from "next/router";
import ServicePageBunner from "../../components/Services/ServicePageBunner";
import { Button, Grid, Container, Typography } from "@material-ui/core/";


function SoftwarePage(props) {
    
  return (
    <div>
      <Container>
        <div style={{ textAlign: "center" }}>
          <Typography variant="h4" className="mt-5">
            About {props.id}
          </Typography>
        </div>
        <Grid container spacing={3} className="my-4">
          <Grid item sm={12} md={6}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
          </Grid>
          <Grid item sm={12} md={6}>
            <img width="100%" src="../images/pic1.jpg" />
          </Grid>
        </Grid>
        <Grid container spacing={3} className="my-4">
          <Grid item sm={12} md={6}>
            <img width="100%" src="../images/pic2.jpg" />
          </Grid>
          <Grid item sm={12} md={6}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={3} className="my-4">
          <Grid item sm={12} md={6}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
          </Grid>
          <Grid item sm={12} md={6}>
            <img width="100%" src="../images/pic3.jpg" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default SoftwarePage;
