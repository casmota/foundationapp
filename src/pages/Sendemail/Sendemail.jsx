

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import useSendemailPage from "./useSendemailPage";


const Sendemail = () => {

    const { templateMsg, data, handleField, handleSendemail, deleteAllEmails } = useSendemailPage();

    return (
        <>
            <Box sx={{paddingRight: '30px', marginBottom: '150px' }}>
                <Typography variant="h5" sx={{ marginBottom: '10px' }}>
                    Email Template
                </Typography>
                <Grid container spacing={1} sx={{ marginBottom: '10px'}}>
                    <Grid item xs={12}>
                        <TextField
                            id="template"
                            label="Template"
                            variant="outlined"
                            name="template"
                            multiline
                            value={templateMsg}
                            onChange={handleField}
                            fullWidth  />
                    </Grid>
                </Grid>
                <Grid container direction="row" justifyContent="flex-end" alignItems="center" spacing={2}>
                    <Grid item xs={2}>
                        <Button variant="contained" fullWidth onClick={deleteAllEmails.mutateAsync}>Remove Emails</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained" fullWidth onClick={handleSendemail}>Send Emails</Button>
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{paddingRight: '30px' }}>
                <Typography variant="h5" sx={{ marginBottom: '10px' }}>
                    List of Sendind Emails
                </Typography>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Nonprofit</TableCell>
                                <TableCell align="right">Sender</TableCell>
                                <TableCell align="right">Recipient</TableCell>
                                <TableCell align="right">Message</TableCell>
                                <TableCell align="right">Date</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {data ? data?.map((row) => (
                            <TableRow key={row.nonprofitId}>
                                <TableCell component="th" scope="row"> {row.nonprofitName} </TableCell>
                                <TableCell align="right">{row.sender}</TableCell>
                                <TableCell align="right">{row.recipient}</TableCell>
                                <TableCell align="right">{row.message}</TableCell>
                                <TableCell align="right">{row.dateSent}</TableCell>
                            </TableRow>
                        )) : null}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    )
}

export default Sendemail;