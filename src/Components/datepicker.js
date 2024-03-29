import * as React from 'react';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from 'dayjs';



export default function ClearableProp() {
    const [cleared, setCleared] = React.useState(false);
    const [value, setValue] = React.useState(dayjs('2022-04-17T15:30'));

    React.useEffect(() => {
        if (cleared) {
            const timeout = setTimeout(() => {
                setCleared(false);
            }, 1500);

            return () => clearTimeout(timeout);
        }
        return () => { };
    }, [cleared]);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'left',
                    position: 'relative',
                }}
            >
                <DemoItem label="">
                    <DatePicker
                        sx={{ width: 500 }}
                        slotProps={{
                            field: { clearable: true, onClear: () => setCleared(true) },
                        }}
                    />
                </DemoItem>

                {cleared && (
                    <Alert
                        sx={{ position: 'absolute', bottom: 0, right: 0 }}
                        severity="success"
                    >
                        Field cleared!
                    </Alert>
                )}
            </Box>
            <div className=''>
                <DemoContainer components={['TimePicker', 'TimePicker']}>
                    <TimePicker
                        label="Time selection"
                        value={value}
                        onChange={(newValue) => setValue(newValue)}
                    />
                </DemoContainer>
            </div>
        </LocalizationProvider>
    );
}
