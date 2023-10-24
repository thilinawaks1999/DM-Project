import React from "react";
import { Poem } from "../types/poems.type";
import { Box, Card, CardHeader, CardContent, Typography } from "@mui/material";

export interface PoemCardProps {
  poems: Poem[];
}

function PoemCard(props: PoemCardProps) {
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        minWidth: 275,
      }}
    >
      <Card>
        <CardHeader
          title={props.poems[0]._source.poem_name}
          subheader={props.poems[0]._source.poet}
        />
        <CardContent>
          {props.poems.map((line: Poem) => {
            const textColor =
              line._source.metaphor_present_or_not === "yes" ? "red" : "black";
            return (
              <Typography key={line._source.line} color={textColor}>
                {line._source.line}
              </Typography>
            );
          })}
        </CardContent>
      </Card>
    </Box>
  );
}

export default PoemCard;
