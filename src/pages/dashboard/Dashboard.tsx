import { Box, Card, Grid, Typography } from "@mui/material";

export const Dashboard = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item sm={12} md={6} lg={2} xl={2}>
          <Card sx={{ height: "100%", padding: "2rem" }}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Typography sx={{ fontWeight: "bold" }}>
                Total Products
              </Typography>
              <Typography sx={{ fontWeight: "bold" }}>0</Typography>
            </Box>
          </Card>
        </Grid>
        <Grid item sm={12} md={6} lg={2} xl={2}>
          <Card>
            <Typography>Total Products</Typography>
          </Card>
        </Grid>
        <Grid item sm={12} md={6} lg={2} xl={2}>
          <Card>
            <Typography>Total Products</Typography>
          </Card>
        </Grid>
        <Grid item sm={12} md={6} lg={2} xl={2}>
          <Card>
            <Typography>Total Products</Typography>
          </Card>
        </Grid>
        <Grid item sm={12} md={6} lg={2} xl={2}>
          <Card>
            <Typography>Total Products</Typography>
          </Card>
        </Grid>
        <Grid item sm={12} md={6} lg={2} xl={2}>
          <Card>
            <Typography>Total Products</Typography>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};
