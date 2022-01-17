import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

type Props = {
  name: string;
  handleOnClick: () => void;
};

const ContainedButtons: React.FC<Props> = ({ name, handleOnClick }) => {
  return (
    <Stack direction="row" spacing={2}>
      <Button onClick={handleOnClick} variant="contained">
        {name}
      </Button>
    </Stack>
  );
};

export default ContainedButtons;
