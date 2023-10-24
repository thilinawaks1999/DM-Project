import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import React from "react";

interface FilterPanelProps {
  value: string;
  onChange: (value: string) => void;
  data: Item[];
}

interface Item {
  key: string | number;
  doc_count: number;
}

function FilterPanel(props: FilterPanelProps) {
  return (
    <Box
      sx={{
        p: 2,
        width: "100%",
      }}
    >
      <Stack spacing={2}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">{props.value}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={props.value}
            label={props.value}
            onChange={(event) => props.onChange(event.target.value as string)}
          >
            {props.data.map((item: Item) => {
              return (
                <MenuItem value={item.key} key={item.key}>
                  {item.key}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Stack>
    </Box>
  );
}

export default FilterPanel;
