import React from 'react';
import { connect } from 'react-redux';

import { Grid, Button } from '@mui/material';

const Act = (props) => {
    console.log(props.admin.token)

    return (
        <Grid container style={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "#F3F3F3", fontFamily: "IBM Plex Sans, sans-serif", color: "#004636" }}>
            <Grid style={{ width: "90%", display: "flex", justifyContent: "center" }}>
                <Grid item xs={12} md={6} style={{ padding: 30 }}>
                    <Grid>
                        <img src="../images/act/image-act-2.jpg" alt="pourquoi donner" style={{ width: "100%", boxShadow: "5px 4px 4px rgba(0, 0, 0, 0.25)" }} />
                        <h4 style={{ width: "60%", fontWeight: "600" }}>Pourquoi donner ?</h4>
                        <h2 style={{ fontWeight: 500 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
                        <Button variant="contained" style={mystyle.buttonAct}>Je donne</Button>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6} style={{ maxWidth: "20%", maxHeight: "25%", background: "#E4C580", boxShadow: "5px 4px 4px rgba(0, 0, 0, 0.25)", position: "relative", marginLeft: -130, marginRight: -130, marginTop: 280, zIndex: 2000 }} />
                <Grid item xs={12} md={6} style={{ padding: 30 }}>
                    <Grid style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Grid>
                            <h4 style={{ width: "60%", fontWeight: "600" }}>Pourquoi devenir bénévole ?</h4>
                            <h2 style={{ fontWeight: 500 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
                        </Grid>
                        <Grid>
                            <Button variant="contained" style={mystyle.buttonAct}>Je deviens bénévole</Button>
                        </Grid>
                        <Grid>
                            <img src="../images/act/image-act-1.jpg" alt="pourquoi devenir bénévole" style={{ width: "100%", boxShadow: "5px 4px 4px rgba(0, 0, 0, 0.25)" }} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

const mystyle = {
    buttonAct: {
        background: "#FDFDFF",
        color: "#004636",
        boxShadow: "12px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 30,
        fontFamily: "IBM Plex Sans, sans-serif",
        fontSize: 18,
        textTransform: 'none'
    }
}

function mapStateToProps(state) {
    return { admin: state.admin }
}

export default connect(mapStateToProps, null)(Act);