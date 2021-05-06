import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

export default function Content() {
  return (
    <Grid>
      <Container>
        <Typography color="secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          voluptate repellendus earum magnam reiciendis ipsum animi non a neque
          et sint nulla quae, eum, fugit hic sunt pariatur ea? Distinctio.
        </Typography>
        <Button variant="contained" color="primary">
          FLIP
        </Button>
      </Container>
    </Grid>
  );
}
