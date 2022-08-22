import React from "react";
import { Button, Grid } from "@mui/material";
import "../Contact.css";
import BootstrapInput from "../../../Components/Bootstrap/BootstrapInput";
import SendIcon from "@mui/icons-material/Send";

const ContactForm = () => {
  return (
    <form>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={8}>
          <p className="contactform_title">
            {" "}
            השאירו לנו פרטים ונחזור אליכם בהקדם:
          </p>
        </Grid>
        <Grid item>
          <BootstrapInput placeholder={"שם"} type="text" padding={10} />
        </Grid>
        <Grid item>
          <BootstrapInput placeholder={"מייל"} type="email" padding={10} />
        </Grid>
        <Grid item>
          <BootstrapInput placeholder={"טלפון"} type="phone" padding={10} />
        </Grid>
        <Grid item xs={8}>
          <BootstrapInput
            placeholder={"הודעה"}
            type="text"
            rows={10}
            multiline
            padding={10}
          />
        </Grid>
        <Grid item style={{ padding: 10 }}>
          <Button
            variant="contained"
            style={{ backgroundColor: "#2e3cb6" }}
            size="large"
          >
            שלח
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ContactForm;
