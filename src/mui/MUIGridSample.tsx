import { Grid } from '@mui/material'
import React from 'react'

function MUIGridSample() {

    //TOPLAM 12X
    return (<>
        <Grid container spacing={2}>
            <Grid item xs={6} lg={4}>
                <h1 style={{ borderStyle: 'solid' }}>1 - İstanbul</h1>
            </Grid>
            <Grid item xs={6} lg={4}>
                <h1 style={{ borderStyle: 'solid' }}>2 - İzmir</h1>
            </Grid>
            <Grid item xs={6} lg={4}>
                <h1 style={{ borderStyle: 'solid' }}>3 - Ankara</h1>
            </Grid>

        </Grid>
    </>
    )
}

export default MUIGridSample