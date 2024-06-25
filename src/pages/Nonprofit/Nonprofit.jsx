
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import useNonprofitPage from "./useNonprofitPage";

const Nonprofit = () => {
    const { tableData, data, handleField, handleSave } = useNonprofitPage();

    return (
        <>
            <Box sx={{paddingRight: '30px', marginBottom: '150px' }}>
                <Typography variant="h5" sx={{ marginBottom: '10px' }}>
                    Register Nonprofits
                </Typography>
                <Grid container spacing={1} sx={{ marginBottom: '10px'}}>
                    <Grid item xs={4}>
                        <TextField
                            id="name"
                            label="Name"
                            variant="outlined"
                            name="name"
                            value={tableData?.name}
                            onChange={handleField}
                            fullWidth  />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            id="address"
                            label="Address"
                            variant="outlined"
                            name="address"
                            value={tableData?.address}
                            onChange={handleField}
                            fullWidth />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            id="email"
                            label="Email"
                            variant="outlined"
                            name="email"
                            value={tableData?.email}
                            onChange={handleField}
                            fullWidth />
                    </Grid>
                </Grid>
                <Grid container direction="row" justifyContent="flex-end" alignItems="center">
                    <Grid item xs={2}>
                        <Button variant="contained" fullWidth onClick={handleSave}>Save</Button>
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{paddingRight: '30px' }}>
                <Typography variant="h5" sx={{ marginBottom: '10px' }}>
                    List of Nonprofits
                </Typography>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Address</TableCell>
                            <TableCell align="right">Email</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {data ? data?.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row"> {row.name} </TableCell>
                                <TableCell align="right">{row.address}</TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                            </TableRow>
                        )) : null}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    )
}


export default Nonprofit;