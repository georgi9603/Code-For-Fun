import * as React from "react";
import TextField from "@mui/material/TextField";
import DateRangePicker, { DateRange } from "@mui/lab/DateRangePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Box from "@mui/material/Box";
import moment from "moment";

type Props = {
  handleDateRangePickerChange: (startDate: string, endDate: string) => void;
};

const BasicDateRangePicker: React.FC<Props> = ({
  handleDateRangePickerChange,
}) => {
  const [value, setValue] = React.useState<DateRange<Date>>([null, null]);
  const handleChange = (value: DateRange<Date>) => {
    setValue(value);

    const startDate =
      value[0] !== null
        ? moment(value[0]).format("YYYY-MM-DD")
        : moment().subtract(1, "days").format("YYYY-MM-DD");
    const endDate =
      value[1] !== null
        ? moment(value[1]).add(1, "days").format("YYYY-MM-DD")
        : moment().format("YYYY-MM-DD");

    handleDateRangePickerChange(startDate, endDate);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateRangePicker
        startText="Start-date"
        endText="End-date"
        value={value}
        onChange={(newValue) => {
          handleChange(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} />
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
  );
};

export default BasicDateRangePicker;
