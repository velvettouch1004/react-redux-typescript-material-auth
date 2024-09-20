import { TextField, Grid } from "@material-ui/core";

function Input(props: any) {
  return (
    <Grid item xs={12}>
      <TextField variant="outlined" margin="normal" fullWidth {...props} />
    </Grid>
  );
}

export default Input;
