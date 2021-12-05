import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";
// import { Collapse } from "react-collapse";
import Collapsible from "react-collapsible";
import IconButton from "@material-ui/core/IconButton";
import {
  Architecture,
  Home,
  Brush,
  DesignServices,
  Dns,
  PhoneIphone,
  Web,
  Devices,
  ViewQuilt,
  Security,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  contactBg: {
    backgroundImage: "url(./images/contactusen.jpg)",
    backgroundPosition: "center",
    backgroundSize: "auto",
    backgroundRepeat: "norepeat",
  },
}));

function Droper(props) {
  return (
    <div>
      <div></div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div>
          <IconButton
            style={{ color: "#fff", backgroundColor: "rgba(255,255,255,0.4)" }}
            className="mr-2"
          >
            {props.Icon}
          </IconButton>
        </div>
        <div>
          <Typography
            variant="body1"
            className="upper"
            style={{ color: "#fff", textTransform: "uppercase" }}
          >
            {props.title}
          </Typography>
          <Typography
            variant="caption"
            style={{ color: "#fff", lineHeight: "1" }}
          >
            {props.description}
          </Typography>
        </div>
      </div>
    </div>
  );
}

function OtherServices() {
  const classes = useStyles();

  return (
    <div>
      <div>
        <div style={{ textAlign: "center" }} className=" mb-5">
          <Typography variant="caption">Our Other Services</Typography>
          <Typography variant="h5">Get more from Us.</Typography>
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            backgroundColor: "rgba(0,0,0,0.7)",
            width: "100%",
            height: "100%",
            zIndex: "1",
          }}
        ></div>
        <div className={classes.contactBg + " " + "py-5"}>
          <div style={{ zIndex: "2", position: "relative" }}>
            <Container className="my-3">
              <Grid container spacing={4}>
                <Grid item sm={12} md={6}>
                  <Collapsible
                    className="md-5"
                    trigger={
                      <Droper
                        Icon={<Dns />}
                        title="Domain and Hosting"
                        description="We help you get your business online and the space you need."
                      />
                    }
                  >
                    <div
                      className="mt-3 p-3"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.4)",
                        color: "#fff",
                      }}
                    >
                      <div>
                        A web host provides the space where you display your
                        site's content, like text, images, and videos. A web
                        host doesn't necessarily provide the address visitors
                        use to reach your site, like www.yourdomain.com.
                      </div>
                    </div>
                  </Collapsible>
                </Grid>
                <Grid item sm={12} md={6}>
                  <Collapsible
                    className="md-5"
                    trigger={
                      <Droper
                        Icon={<Brush />}
                        title="Graphics Design"
                        description="Let us help you communicate and share with others much easily"
                      />
                    }
                  >
                    <div
                      className="mt-3 p-3"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.4)",
                        color: "#fff",
                      }}
                    >
                      <div>
                        Graphic design is a craft where professionals create
                        visual content to communicate messages. By applying
                        visual hierarchy and page layout techniques, designers
                        use typography and pictures to meet users’ specific
                        needs and focus on the logic of displaying elements in
                        interactive designs, to optimize the user experience.
                      </div>
                    </div>
                  </Collapsible>
                </Grid>
                <Grid item sm={12} md={6}>
                  <Collapsible
                    className="md-5"
                    trigger={
                      <Droper
                        Icon={<ViewQuilt />}
                        title="UI/Ux Design"
                        description="We will create the application that will make it easy for you users"
                      />
                    }
                  >
                    <div
                      className="mt-3 p-3"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.4)",
                        color: "#fff",
                      }}
                    >
                      <div>
                        UX determins a user’s experience of the app is
                        determined by how they interact with it And
                      </div>
                      <div>
                        The user interface is the graphical layout of an
                        application.
                      </div>
                    </div>
                  </Collapsible>
                </Grid>
                <Grid item sm={12} md={6}>
                  <Collapsible
                    className="md-5"
                    trigger={
                      <Droper
                        Icon={<PhoneIphone />}
                        title="Mobile App Development"
                        description="Reach your clients easily though mobile applications"
                      />
                    }
                  >
                    <div
                      className="mt-3 p-3"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.4)",
                        color: "#fff",
                      }}
                    >
                      <div>
                        A mobile application, most commonly referred to as an
                        app, is a type of application software designed to run
                        on a mobile device,
                      </div>
                    </div>
                  </Collapsible>
                </Grid>
                <Grid item sm={12} md={6}>
                  <Collapsible
                    className="md-5"
                    trigger={
                      <Droper
                        Icon={<Web />}
                        title="Web App Development"
                        description="Make it easy for your customers to learn more about your business and access services at a push of a button"
                      />
                    }
                  >
                    <div
                      className="mt-3 p-3"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.4)",
                        color: "#fff",
                      }}
                    >
                      <div>
                        A Web application (Web app) is an application program
                        that is stored on a remote server and delivered over the
                        Internet through a browser interface.
                      </div>
                    </div>
                  </Collapsible>
                </Grid>
                <Grid item sm={12} md={6}>
                  <Collapsible
                    className="md-5"
                    trigger={
                      <Droper
                        Icon={<Devices />}
                        title="Digital Marketing"
                        description="Reach out to Millions of potencial customers without struggling"
                      />
                    }
                  >
                    <div
                      className="mt-3 p-3"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.4)",
                        color: "#fff",
                      }}
                    >
                      <div>
                        Digital marketing, also called online marketing, is the
                        promotion of brands to connect with potential customers
                        using the internet and other forms of digital
                        communication
                      </div>
                    </div>
                  </Collapsible>
                </Grid>
                <Grid item sm={12} md={6}>
                  <Collapsible
                    trigger={
                      <Droper
                        Icon={<Security />}
                        title="Managing IT Services"
                        description="Give your the barden of worring about your software and ensure that it will always be available 99.9% ."
                      />
                    }
                  >
                    <div
                      className="mt-3 p-3"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.4)",
                        color: "#fff",
                      }}
                    >
                      <div>
                        IT service management is the craft of
                        implementing, managing, and delivering IT services to
                        meet the needs of an organization.
                      </div>
                    </div>
                  </Collapsible>
                </Grid>
              </Grid>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OtherServices;
