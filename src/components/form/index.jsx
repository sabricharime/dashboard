import {
  Box,

  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
 
} from "@mui/material";

export default function RowInput() {
  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      gap={2}
      sx={{ marginBlockEnd: 2 }}
    >
      <TextField label="name" variant="outlined" />
      <TextField label="last name" variant="outlined" />
    </Box>
  );
}

export function RowSelect() {
  const handleChange = () => console.log("first");
  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      gap={2}
      sx={{ marginBlockEnd: 2 }}
    >
      <TextField label="Country" variant="outlined" />

      <FormControl fullWidth sx={{ display: "flex", flex: 1 }}>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value=""
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>


    </Box>
  );
}
