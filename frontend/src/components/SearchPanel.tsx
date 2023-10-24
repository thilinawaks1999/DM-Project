import { Box, FormControl, Stack, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface FilterPanelProps {
  value: string;
  onChange: (value: string) => void;
}

function SearchPanel(props: FilterPanelProps) {
  return (
    <Box
      sx={{
        p: 2,
        width: "100%",
      }}
    >
      <Stack spacing={2}>
        <FormControl fullWidth>
          <TextField
            id="outlined-basic"
            label={props.value}
            variant="outlined"
            onChange={(e) => props.onChange(e.target.value)}
            InputProps={{
              endAdornment: <SearchIcon />,
            }}
          />
        </FormControl>
      </Stack>
    </Box>
  );
}

export default SearchPanel;
