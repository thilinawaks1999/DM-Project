import React, { useEffect } from "react";
import { Poem } from "../types/poems.type";
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
export interface PoemCardProps {
  poems: Poem[];
}

function PoemCard(props: PoemCardProps) {
  const [seeMore, setSeeMore] = React.useState(false);
  const [poem, setPoem] = React.useState<Poem[]>();
  const [disabled, setDisabled] = React.useState(false);

  useEffect(() => {
    if (props.poems.length > 6) {
      setPoem(props.poems.slice(0, 6));
      setDisabled(false);
    } else {
      setPoem(props.poems);
      setDisabled(true);
    }
  }, [props.poems]);

  function handleSeeMore() {
    setSeeMore(!seeMore);
    if (seeMore) {
      setPoem(props.poems.slice(0, 6));
    } else {
      setPoem(props.poems);
    }
  }

  return (
    <Box
      sx={{
        minWidth: 275,
      }}
    >
      <Card>
        <CardHeader
          title={props.poems[0].poem_name}
          subheader={`${props.poems[0].poet} - ${props.poems[0].year}`}
        />
        <CardContent>
          {poem &&
            poem.map((line: Poem) => {
              const textColor =
                line.metaphor_present_or_not === "yes" ? "red" : "black";
              return (
                <Typography key={line.line} color={textColor}>
                  {line.line}
                </Typography>
              );
            })}
        </CardContent>
        <CardActions>
          <Button onClick={handleSeeMore} size="small" disabled={disabled}>
            {seeMore ? "See Less" : "See More"}
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default PoemCard;
