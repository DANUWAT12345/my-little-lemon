import * as React from "react";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs from "dayjs";
import Timeslotpicker from "../Components/Timeslotpicker.js"

export default function ClearableProp() {
  const [cleared, setCleared] = React.useState(false);
  const [value, setValue] = React.useState(dayjs("2024-01-01T10:30"));

  React.useEffect(() => {
    if (cleared) {
      const timeout = setTimeout(() => {
        setCleared(false);
      }, 1500);

      return () => clearTimeout(timeout);
    }
    return () => {};
  }, [cleared]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        <DemoItem
          label="Need special reserve time ? please contact me"
          sx={{ width: "100%" }}
        >
          <DatePicker
            sx={{ width: "100%" }}
            slotProps={{
              field: { clearable: true, onClear: () => setCleared(true) },
            }}
          />
        </DemoItem>
        {cleared && (
          <Alert
            sx={{ position: "absolute", bottom: 0, right: 0 }}
            severity="success"
          >
            Field cleared
          </Alert>
        )}
      </Box>
      <div className="mt-3">
        
          <Timeslotpicker/>
      </div>
    </LocalizationProvider>
  );
}
