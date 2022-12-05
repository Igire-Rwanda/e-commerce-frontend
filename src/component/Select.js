import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "./signIn.css";

export default function SelectVariants() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div className='text-input'>
            <FormControl variant="standard" sx={{
                width: { sm: 200, md: 300 },
                "& .MuiFormLabel-root": {
                    fontSize: "15px"
                },
                "& .MuiFormLabel-root.Mui-focused": {
                    color: 'primary.main'
                },
                "& .MuiInputBase-root": {
                    height: 30
                }
            }}>
                <InputLabel id="demo-simple-select-standard-label">
                    Product Category
                </InputLabel>

                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={age}
                    onChange={handleChange}
                    label="Age"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10} >Electronics</MenuItem>
                    <MenuItem value={20}>Home Decor</MenuItem>
                    <MenuItem value={30}>Sports</MenuItem>
                    <MenuItem value={40}>Men's Clothing</MenuItem>
                    <MenuItem value={50}>Women's Clothing</MenuItem>
                </Select>
            </FormControl>

        </div>
    );
}