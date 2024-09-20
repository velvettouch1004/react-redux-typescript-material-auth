import { useState } from "react";
import { Grid, Container, Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Dashboard from "../../pages/Dashboard/Dashboard";

export default function CreateUser() {
  const [flag, setFlag] = useState(false);
  const [formData, setFormData] = useState({
    projectTitle: "",
    projectDescription: "",
  });
  const handleGenerateDescription = async () => {
    // history.push("/dashboard");
    setFlag(true);
    // const description = await generateDescription(formData.projectTitle);
    // setFormData({ ...formData, projectDescription: description });
  };

  return (
    <Container>
      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom>
          User Create
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              label="Project Title"
              value={formData.projectTitle}
              onChange={(e) =>
                setFormData({ ...formData, projectTitle: e.target.value })
              }
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Project Description"
              value={formData.projectDescription}
              onChange={(e) =>
                setFormData({ ...formData, projectDescription: e.target.value })
              }
              name="description"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleGenerateDescription}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Grid>
      {flag ? <Dashboard /> : <></>}
    </Container>
  );
}
