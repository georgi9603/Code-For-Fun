import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

type Props = {
  inputInfo: { label: string; name: string };
  menuItems: { id: number; label: string; value: string; type: string }[];
  handleDropDownChange: (type: string, value: string) => void;
};

const DropDownBasicSelect: React.FC<Props> = ({
  inputInfo,
  menuItems,
  handleDropDownChange,
}) => {
  const [value, setValue] = React.useState("");

  const handleChange = (event: { target: { value: string } }) => {
    setValue(event.target.value);
    handleDropDownChange(menuItems && menuItems[0].type, event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id={`drop-down-${inputInfo.label}-select-label`}>
          {inputInfo.name}
        </InputLabel>
        <Select
          labelId={`drop-down-${inputInfo.label}-select-label`}
          id={`drop-down-${inputInfo.label}-select`}
          value={value}
          label={inputInfo.label}
          onChange={handleChange}
        >
          {menuItems &&
            menuItems.map((menuItem) => {
              return (
                <MenuItem key={menuItem.id} value={menuItem.value}>
                  {menuItem.label}
                </MenuItem>
              );
            })}
        </Select>
      </FormControl>
    </Box>
  );
};

export default DropDownBasicSelect;
