import { Box, Typography } from "@mui/material";

const Notfound = () => {
  return (
    <Box sx={{
      minHeight: "calc(100vh - 180px)",
      px: 2,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center"
    }}>
      <Typography sx={{ fontSize: { xs: "4rem", sm: "6rem" }, fontWeight: 800, color: "#00b4c9", lineHeight: 1 }}>
        404
      </Typography>
      <Typography variant="h5" color="text.secondary" sx={{ mt: 2 }}>
        Page not found
      </Typography>
    </Box>
  );
};

export default Notfound