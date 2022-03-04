// import React from 'react';
// import { Grid, TextField } from '@mui/material';
// import { Facebook } from "@mui/icons-material";
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import L from 'leaflet';

// export default function Footer() {
//     let EGDOIcon = L.icon({
//         iconUrl: "../images/egdo-logo.png",
//         iconAnchor: [5, 55],
//         popupAnchor: [10, -44],
//         iconSize: [43, 55],
//     });

//     return (
//         <>
//             <div style={mystyle.footerBackground}>
//                 <div style={mystyle.footerOpacityBlock}>
//                     <h3 style={{ marginTop: 30 }}>Vous cherchez à nous joindre ?</h3>
//                     <div style={mystyle.footerContent}>
//                         <Grid item xs={12} md={4}>
//                             <MapContainer style={mystyle.mapContainer} center={[48.887270, 2.354730]} zoom={14}>
//                                 <TileLayer
//                                     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//                                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                                 />
//                                 <Marker icon={EGDOIcon} position={[48.884740, 2.352990]}>
//                                     <Popup>
//                                         <p style={mystyle.mapPopupTitle}>Le Local (Siège social)</p>
//                                         <p style={mystyle.mapPopupSubtitle}>25 rue de Chartres</p>
//                                     </Popup>
//                                 </Marker>
//                                 <Marker icon={EGDOIcon} position={[48.884820, 2.355250]}>
//                                     <Popup>
//                                         <p style={mystyle.mapPopupTitle}>Club de Foot</p>
//                                         <p style={mystyle.mapPopupSubtitle}>5 rue de la Charbonnière</p>
//                                     </Popup>
//                                 </Marker>
//                             </MapContainer>
//                         </Grid>
//                         <Grid item xs={12} md={4} style={mystyle.footerPanel}>
//                             <div style={mystyle.footerPanelContent}>
//                                 <h4>CONTACTS</h4>
//                                 <div style={mystyle.contacts}>
//                                     <div style={{ paddingTop: 30, paddingBottom: 30 }}>
//                                         <p style={{ fontWeight: 600 }}>Le Local (Siège social)</p>
//                                         <p>contact@egdo.fr</p>
//                                         <p>01 42 52 69 48</p>
//                                         <p>25 rue de Chartres</p>
//                                         <p>75018 Paris</p>
//                                     </div>
//                                     <div style={{ paddingTop: 40, borderTop: "2px solid white" }}>
//                                         <p style={{ fontWeight: 600 }}>Le club de Foot</p>
//                                         <p>footclub@egdo.fr</p>
//                                         <p>09 53 45 13 08</p>
//                                         <p>5 rue de la Charbonnière</p>
//                                         <p>75018 Paris</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </Grid>
//                         <Grid item xs={12} md={4} style={mystyle.footerPanel}>
//                             <div style={mystyle.footerPanelContent}>
//                                 <h4>MESSAGE</h4>
//                                 <div style={{ display: "flex", flexDirection: "column", width: "60%", paddingTop: 30 }}>
//                                     <TextField id="outlined-basic" label="Nom" variant="outlined" style={mystyle.textField} />
//                                     <TextField id="outlined-basic" label="Prénom" variant="outlined" style={mystyle.textField} />
//                                     <TextField id="outlined-basic" label="Email" variant="outlined" style={mystyle.textField} />
//                                     <TextField id="outlined-basic" label="N° de téléphone" variant="outlined" style={mystyle.textField} />
//                                     <TextField id="outlined-basic" label="Message" variant="outlined" multiline rows={5} style={mystyle.textField} />
//                                 </div>
//                             </div>
//                         </Grid>
//                     </div>
//                 </div>
//             </div>
//             <div style={mystyle.footerTwo}>
//                 <Grid item xs={12} md={6} style={mystyle.footerPanel}>
//                     <div style={mystyle.footerTwoPanelContent}>
//                         <div style={{ display: "flex", flexDirection: "row" }}>
//                             <img src="../images/egdo-logo.png" alt="logo de l'association" style={{ width: 70 }} />
//                             <p style={{ fontWeight: 500, fontSize: 15, textAlign: "center" }}>NOUS SUIVRE</p>
//                             <div style={{ display: "flex", justifyContent: "center" }}>
//                                 <a href="https://www.facebook.com/egdo75" target="_blank" rel="noreferrer" style={{ marginLeft: 5, marginRight: 5 }}><Facebook /></a>
//                                 <a href="https://vimeo.com/egdo" target="_blank" rel="noreferrer" style={{ marginLeft: 5, marginRight: 5 }}><img src="../images/vimeo-logo.png" alt="logo de Vimeo" style={{ width: 50 }} /></a>
//                             </div>
//                         </div>
//                     </div>
//                 </Grid>
//                 <Grid item xs={12} md={4} style={mystyle.footerPanel}>
//                     <div style={mystyle.footerTwoPanelContent}>
//                         <p>PRESSE</p>
//                         <p>NEWSLETTER</p>
//                         <p>RAPPORT D'ACTIVITES</p>
//                         <p>MENTIONS LEGALES</p>
//                         <p>ESPACE ADMIN</p>
//                     </div>
//                 </Grid>
//             </div>
//         </>
//     )
// }

// const mystyle = {
//     footerBackground: {
//         backgroundImage: `url("../images/blue-pencils.jpg")`,
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//     },
//     footerOpacityBlock: {
//         height: "100%",
//         width: "100%",
//         backgroundColor: "rgba(0, 0, 0, 0.4)",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         fontFamily: "IBM Plex Sans, sans-serif",
//         fontSize: 19,
//         color: "white"
//     },
//     footerContent: {
//         width: "100%",
//         paddingTop: 30,
//         minHeight: "70vh",
//         display: "flex",
//         alignItems: "flex-start",
//         lineHeight: 0.5,
//         color: "white"
//     },
//     footerPanel: {
//         height: "100%",
//         width: "100%"
//     },
//     footerPanelContent: {
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "flex-start",
//         alignItems: "center",
//     },
//     footerTwo: {
//         backgroundColor: "#F3F3F3",
//         paddingTop: 20,
//         minHeight: "18vh",
//         display: "flex",
//         alignItems: "flex-start",
//         justifyContent: "center",
//         fontFamily: "IBM Plex Sans, sans-serif",
//         fontSize: 14,
//         lineHeight: 0.5,
//         color: "black",
//     },
//     footerTwoPanelContent: {
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "flex-start",
//         alignItems: "center",
//     },
//     mapContainer: {
//         height: "400px",
//         width: "400px",
//         borderRadius: 250,
//         border: "5px solid white",
//         boxShadow: "5px 4px 4px rgba(0, 0, 0, 0.25)"
//     },
//     mapPopupTitle: {
//         fontFamily: "IBM Plex Sans, sans-serif",
//         fontWeight: 600,
//         lineHeight: 1
//     },
//     mapPopupSubtitle: {
//         fontFamily: "IBM Plex Sans, sans-serif",
//         fontWeight: 500,
//         lineHeight: 1
//     },
//     textField: {
//         background: "white",
//         borderRadius: 5,
//         marginTop: 5,
//         boxShadow: "5px 4px 4px rgba(0, 0, 0, 0.25)"
//     }
// }