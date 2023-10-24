import React from "react";
import { Box, Card, CardHeader, CardContent } from "@mui/material";

function NotFoundCard() {
  return (
    <Box
      sx={{
        p: 8,
      }}
    >
      <Card
        sx={{
          //content centered
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "60vh",
          bgcolor: "lightgrey",
        }}
      >
        <CardHeader
          title="No poems found"
          subheader="Please try another search"
        />
        <CardContent>
          <p>Sorry, no poems found for your search</p>
        </CardContent>
      </Card>
    </Box>
  );
}

export default NotFoundCard;
