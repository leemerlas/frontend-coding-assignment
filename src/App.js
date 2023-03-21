import React from 'react';
import {
    Container,
    CssBaseline,
    Grid
} from '@mui/material';

import SecurityTable from './components/SecurityTable';

function App() {
    return (
        <>
            <CssBaseline />
            <Container>
                <Grid container sx={{ height: '100%', paddingTop: '10px' }}>
                    <Grid item container xs={12}>
                        <SecurityTable />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default App;
