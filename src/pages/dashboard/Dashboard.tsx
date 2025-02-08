import { Box, Card, Grid, Typography } from "@mui/material";

export const Dashboard = () => {
  return (
    <Box sx={{ mt: "2rem" }}>
      <Grid container spacing={2}>
        <Grid item sm={12} md={6} lg={2} xl={2}>
          <Card
            sx={{
              padding: "2rem",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
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
          <Card
            sx={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Typography sx={{ fontWeight: "bold" }}>
                Total Active Products
              </Typography>
              <Typography sx={{ fontWeight: "bold" }}>0</Typography>
            </Box>
          </Card>
        </Grid>
        <Grid item sm={12} md={6} lg={2} xl={2}>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Typography sx={{ fontWeight: "bold" }}>Total Orders</Typography>
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
      </Grid>
    </Box>
  );
};
