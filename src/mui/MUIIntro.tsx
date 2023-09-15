import { Button, MenuItem, Select, Switch, TextField } from '@mui/material'
import React, { useState } from 'react'

function MUIIntro() {

    const [age, setage] = useState(10);
    const [name, setName] = useState('');
    

    const handleChange = (event: any) => {
        setage(event.target.value);
        console.log(event.target.value)
    }


    const change = (e:any) => {
        console.log("e", e.target.value);
        
    }

    return (<>
        <Button variant='outlined' >Hello</Button>
        <Button variant='contained' color='error'>Hello</Button>
        <hr />
        <div>
            <Select
                value={age}
                onChange={handleChange}
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </div>
        <hr />
        <div>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={(e) => setName(e.target.value)} />

        </div>
        <div>
        <Switch onChange={(e) => change(e)} defaultChecked />
        </div>
    </>)
}

export default MUIIntro