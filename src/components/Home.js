'use client'
import { Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { MapInteractionCSS } from 'react-map-interaction';
import ModalPage from './ModalPage';




const Home = () => {

    const [modalData, setModalData] = useState({
        open:false,
        data:""
    });

    const handleSetData = (ele) => {
        setModalData({...modalData,open:true,data:ele})
    };

    return (
        <>
            <Grid container sx={{ justifyContent: 'center', alignItems: 'center', background: 'linear-gradient(103deg, rgba(230,181,32,1) 0%, rgba(245,154,81,1) 54%, rgba(230,108,32,1) 100%)' }}>
                <Grid item xs={12} sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                    <MapInteractionCSS
                        defaultValue={{ scale: 1, translation: { x: 0, y: 20 } }}
                        minScale={0.5}
                        maxScale={3}
                        translationBounds={{ xMax: 1500, yMax: 1500 }}>
                        <Grid container sx={{ width: '80vw', alignItems: "flex-end" }}>
                            {/* rahul comp */}
                            <Grid item xs={5.8} sx={{ height: "100%" }}>
                                <Grid container sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                    <Grid container sx={{ height: '45px', justifyContent: 'right' }}>
                                        {
                                            [275].map((ele, index) => {
                                                return (
                                                    <Grid key={index} item xs={.55} sx={{ display: "flex", alignItems: "center", justifyContent: "center", borderTop: "3px solid white", borderLeft: index == 0 ? "3px solid white" : "", borderRight: "3px solid white", bgcolor: index > 4 ? 'red' : 'green' }} onClick={()=>{handleSetData(ele)}}>
                                                        <Typography sx={{ color: "white", fontSize: '13px' }}>{ele}</Typography>
                                                    </Grid>
                                                )
                                            })
                                        }
                                    </Grid>
                                    <Grid container sx={{ height: '45px', justifyContent: 'right' }}>
                                        {
                                            [257, 256, 255, 254].map((ele, index) => {
                                                return (
                                                    <Grid key={index} item xs={.55} sx={{ display: "flex", alignItems: "center", justifyContent: "center", borderTop: "3px solid white", borderLeft: index == 0 ? "3px solid white" : "", borderRight: "3px solid white", bgcolor: index < 4 ? 'red' : 'green' }} onClick={()=>{handleSetData(ele)}}>
                                                        <Typography sx={{ color: "white", fontSize: '13px' }}>{ele}</Typography>
                                                    </Grid>
                                                )
                                            })
                                        }
                                    </Grid>
                                    <Grid container sx={{ height: '35px', justifyContent: 'right' }}>

                                        <Grid item xs={4} sx={{ display: "flex", alignItems: "center", justifyContent: "center", borderTop: "3px solid white", borderRight: "3px solid white", borderLeft: "3px solid white", bgcolor: 'black' }}>
                                            <Typography sx={{ color: "white", fontSize: '12px' }}>PROP: 30' WIDE ROAD</Typography>
                                        </Grid>

                                    </Grid>
                                    <Grid container sx={{ height: '45px', justifyContent: 'right' }}>
                                        {
                                            [231, 232, 233, 234, 235, 236].map((ele, index) => {
                                                return (
                                                    <Grid key={index} item xs={.55} sx={{ display: "flex", alignItems: "center", justifyContent: "center", borderTop: "3px solid white", borderLeft: index == 0 ? "3px solid white" : "", borderRight: "3px solid white", bgcolor: index > 4 ? 'red' : 'green' }} onClick={()=>{handleSetData(ele)}}>
                                                        <Typography sx={{ color: "white", fontSize: '13px' }}>{ele}</Typography>
                                                    </Grid>
                                                )
                                            })
                                        }
                                    </Grid>
                                    <Grid container sx={{ height: '45px', justifyContent: 'right' }}>
                                        {
                                            [221, 220, 219, 218, 217, 216, 215].map((ele, index) => {
                                                return (
                                                    <Grid key={index} item xs={.55} sx={{ display: "flex", alignItems: "center", justifyContent: "center", borderTop: "3px solid white", borderLeft: index == 0 ? "3px solid white" : "", borderRight: "3px solid white", bgcolor: index < 4 ? 'red' : 'green' }} onClick={()=>{handleSetData(ele)}}>
                                                        <Typography sx={{ color: "white", fontSize: '13px' }}>{ele}</Typography>
                                                    </Grid>
                                                )
                                            })
                                        }
                                    </Grid>
                                    <Grid container sx={{ height: '35px', justifyContent: 'right' }}>

                                        <Grid item xs={4} sx={{ display: "flex", alignItems: "center", justifyContent: "center", borderTop: "3px solid white", borderRight: "3px solid white", borderLeft: "3px solid white", bgcolor: 'black' }}>
                                            <Typography sx={{ color: "white", fontSize: '12px' }}>PROP: 30' WIDE ROAD</Typography>
                                        </Grid>

                                    </Grid>

                                    <Grid container sx={{ height: '45px', justifyContent: 'right' }}>
                                        {
                                            [192, 193, 194, 195, 196, 197, 198, 199].map((ele, index) => {
                                                return (
                                                    <Grid key={index} item xs={.55} sx={{ display: "flex", alignItems: "center", justifyContent: "center", borderTop: "3px solid white", borderLeft: index == 0 ? "3px solid white" : "", borderRight: "3px solid white", bgcolor: index > 4 ? 'red' : 'green' }} onClick={()=>{handleSetData(ele)}}>
                                                        <Typography sx={{ color: "white", fontSize: '13px' }}>{ele}</Typography>
                                                    </Grid>
                                                )
                                            })
                                        }
                                    </Grid>
                                    <Grid container sx={{ height: '45px', justifyContent: 'right' }}>
                                        {
                                            [186, 185, 184, 183, 182, 181, 180, 179, 178].map((ele, index) => {
                                                return (
                                                    <Grid key={index} item xs={.55} sx={{ display: "flex", alignItems: "center", justifyContent: "center", borderTop: "3px solid white", borderLeft: index == 0 ? "3px solid white" : "", borderRight: "3px solid white", bgcolor: index < 4 ? 'red' : 'green' }} onClick={()=>{handleSetData(ele)}}>
                                                        <Typography sx={{ color: "white", fontSize: '13px' }}>{ele}</Typography>
                                                    </Grid>
                                                )
                                            })
                                        }
                                    </Grid>
                                    <Grid container sx={{ height: '35px', justifyContent: 'right' }}>

                                        <Grid item xs={5} sx={{ display: "flex", alignItems: "center", justifyContent: "center", borderTop: "3px solid white", borderRight: "3px solid white", borderLeft: "3px solid white", bgcolor: 'black' }}>
                                            <Typography sx={{ color: "white", fontSize: '12px' }}>PROP: 30' WIDE ROAD</Typography>
                                        </Grid>

                                    </Grid>

                                    <Grid container sx={{ height: '45px', justifyContent: 'right' }}>
                                        {
                                            [151, 152, 153, 154, 165, 156, 157, 158, 159, 160].map((ele, index) => {
                                                return (
                                                    <Grid key={index} item xs={.55} sx={{ display: "flex", alignItems: "center", justifyContent: "center", borderTop: "3px solid white", borderLeft: index == 0 ? "3px solid white" : "", borderRight: "3px solid white", bgcolor: index > 4 ? 'red' : 'green' }} onClick={()=>{handleSetData(ele)}}>
                                                        <Typography sx={{ color: "white", fontSize: '13px' }}>{ele}</Typography>
                                                    </Grid>
                                                )
                                            })
                                        }
                                    </Grid>
                                    <Grid container sx={{ height: '45px', justifyContent: 'right' }}>
                                        {
                                            [149, 148, 147, 146, 145, 144, 143, 142, 141, 140, 139].map((ele, index) => {
                                                return (
                                                    <Grid key={index} item xs={.55} sx={{ display: "flex", alignItems: "center", justifyContent: "center", borderTop: "3px solid white", borderLeft: index == 0 ? "3px solid white" : "", borderRight: "3px solid white", bgcolor: index < 4 ? 'red' : 'green' }} onClick={()=>{handleSetData(ele)}}>
                                                        <Typography sx={{ color: "white", fontSize: '13px' }}>{ele}</Typography>
                                                    </Grid>
                                                )
                                            })
                                        }
                                    </Grid>
                                    <Grid container sx={{ height: '35px', justifyContent: 'right' }}>

                                        <Grid item xs={6.1} sx={{ display: "flex", alignItems: "center", justifyContent: "center", borderTop: "3px solid white", borderRight: "3px solid white", borderLeft: "3px solid white", bgcolor: 'black' }}>
                                            <Typography sx={{ color: "white", fontSize: '12px' }}>PROP: 30' WIDE ROAD</Typography>
                                        </Grid>

                                    </Grid>

                                    <Grid container sx={{ height: '45px', justifyContent: 'right' }}>
                                        {
                                            [100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110].map((ele, index) => {
                                                return (
                                                    <Grid key={index} item xs={.55} sx={{ display: "flex", alignItems: "center", justifyContent: "center", borderTop: "3px solid white", borderLeft: index == 0 ? "3px solid white" : "", borderRight: "3px solid white", bgcolor: index < 4 ? 'red' : 'green' }} onClick={()=>{handleSetData(ele)}}>
                                                        <Typography sx={{ color: "white", fontSize: '13px' }}>{ele}</Typography>
                                                    </Grid>
                                                )
                                            })
                                        }
                                    </Grid>
                                    <Grid container sx={{ height: '45px', justifyContent: 'right' }}>
                                        {
                                            [99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89].map((ele, index) => {
                                                return (
                                                    <Grid key={index} item xs={.55} sx={{ display: "flex", alignItems: "center", justifyContent: "center", borderTop: "3px solid white", borderLeft: index == 0 ? "3px solid white" : "", borderRight: "3px solid white", bgcolor: index < 4 ? 'red' : 'green' }} onClick={()=>{handleSetData(ele)}}>
                                                        <Typography sx={{ color: "white", fontSize: '13px' }}>{ele}</Typography>
                                                    </Grid>
                                                )
                                            })
                                        }
                                    </Grid>
                                    <Grid container sx={{ height: '35px', justifyContent: 'right' }}>

                                        <Grid item xs={6.1} sx={{ display: "flex", alignItems: "center", justifyContent: "center", borderTop: "3px solid white", borderRight: "3px solid white", borderLeft: "3px solid white", bgcolor: 'black' }}>
                                            <Typography sx={{ color: "white", fontSize: '12px' }}>PROP: 30' WIDE ROAD</Typography>
                                        </Grid>

                                    </Grid>
                                    <Grid container sx={{ height: '45px', justifyContent: 'right' }}>
                                        {
                                            [51, 52, 53, 54, 55, 56, 57, 58, 59, 60].map((ele, index) => {
                                                return (
                                                    <Grid key={index} item xs={.6} sx={{ display: "flex", alignItems: "center", justifyContent: "center", borderTop: "3px solid white", borderLeft: index == 0 ? "3px solid white" : "", borderRight: "3px solid white", bgcolor: index < 4 ? 'red' : 'green' }} onClick={()=>{handleSetData(ele)}}>
                                                        <Typography sx={{ color: "white", fontSize: '13px' }}>{ele}</Typography>
                                                    </Grid>
                                                )
                                            })
                                        }
                                    </Grid>
                                    <Grid container sx={{ height: '45px', justifyContent: 'right' }}>
                                        {
                                            [50, 49, 48, 47, 46, 45, 44, 43, 42].map((ele, index) => {
                                                return (
                                                    <Grid key={index} item xs={.6} sx={{ display: "flex", alignItems: "center", justifyContent: "center", borderTop: "3px solid white", borderLeft: index == 0 ? "3px solid white" : "", borderRight: "3px solid white", bgcolor: "red" }} onClick={()=>{handleSetData(ele)}}>
                                                        <Typography sx={{ color: "white", fontSize: '13px' }}>{ele}</Typography>
                                                    </Grid>
                                                )
                                            })
                                        }
                                    </Grid>
                                    <Grid container sx={{ height: '35px', justifyContent: 'right' }}>

                                        <Grid item xs={7} sx={{ display: "flex", alignItems: "center", justifyContent: "center", borderTop: "3px solid white", borderRight: "3px solid white", borderLeft: "3px solid white", bgcolor: 'black' }}>
                                            <Typography sx={{ color: "white", fontSize: '12px' }}>PROP: 30' WIDE ROAD</Typography>
                                        </Grid>

                                    </Grid>
                                    <Grid container sx={{ height: '50px', justifyContent: 'right' }}>
                                        {
                                            [17, 18, 19, 20, 21, 22, 23, 24, 25,].map((ele, index) => {
                                                return (
                                                    <Grid key={index} item xs={.8} sx={{ display: "flex", alignItems: "center", justifyContent: "center", borderTop: "3px solid white", borderLeft: index == 0 ? "3px solid white" : "", borderRight: "3px solid white", bgcolor: index > 6 ? "red" : "green" }} onClick={()=>{handleSetData(ele)}}>
                                                        <Typography sx={{ color: "white", fontSize: '13px' }}>{ele}</Typography>
                                                    </Grid>
                                                )
                                            })
                                        }
                                    </Grid>
                                    <Grid container sx={{ height: '100px', justifyContent: 'right' }}>
                                        {
                                            [16, 15, 14, 13, 12, 11, 10, 9, 8, 7].map((ele, index) => {
                                                return (
                                                    <Grid key={index} item xs={.8} sx={{ display: "flex", alignItems: "center", justifyContent: "center", borderTop: "3px solid white", borderLeft: index == 0 ? "3px solid white" : "", borderRight: "3px solid white", bgcolor: index > 5 ? "red" : "green" }} onClick={()=>{handleSetData(ele)}}>
                                                        <Typography sx={{ color: "white", fontSize: '13px' }}>{ele}</Typography>
                                                    </Grid>
                                                )
                                            })
                                        }
                                    </Grid>

                                </Grid>

                            </Grid>
                            <Grid item xs={.4} sx={{ bgcolor: "black", borderTop: "3px solid white", height: '980px' }}></Grid>
                            {/* kapil comp */}
                            <Grid item xs={5.8}>
                                <Grid container xs={5.328} justifyContent={'right'}>
                                    {
                                        [321, 322, 323, 324].map((ele, index) => {
                                            return (
                                                <Grid key={index} item xs={1.53} sx={{ height: "45px", display: "flex", alignItems: "center", justifyContent: "center", borderTop: "3px solid white", borderLeft: index == 0 ? "3px solid white" : "", borderRight: "3px solid white", bgcolor: (index > 3) ? "green" : "red" }} onClick={()=>{handleSetData(ele)}}>
                                                    <Typography sx={{ color: "white" }} >{ele}</Typography>
                                                </Grid>
                                            )
                                        })
                                    }
                                </Grid>

                                <Grid container sx={{}}>
                                    {
                                        [292, 291, 290, 289, 288, 287, 286, 285].map((ele, index) => {
                                            return (
                                                <Grid key={index} item xs={.6666} sx={{ height: "45px", display: "flex", alignItems: "center", justifyContent: "center", borderTop: "3px solid white", borderLeft: index == 0 ? "3px solid white" : "", borderRight: "3px solid white", bgcolor: (index > 3) ? "green" : "red" }} onClick={()=>{handleSetData(ele)}}>
                                                    <Typography sx={{ color: "white" }}>{ele}</Typography>
                                                </Grid>
                                            )
                                        })
                                    }

                                </Grid>




                                <Grid container sx={{ height: '35px' }}>
                                    <Grid item xs={6} sx={{ display: "flex", alignItems: "center", justifyContent: "center", border: "3px solid white", bgcolor: 'black' }}>
                                        <Typography sx={{ color: "white", fontSize: { lg: "12px", md: "12px", sm: "12px", xs: "12px" } }}>PROP: 30' WIDE ROAD</Typography>
                                    </Grid>
                                </Grid>




                                <Grid container sx={{}}>
                                    {
                                        [276, 277, 278, 279, 280, 281, 282, 283, 284].map((ele, index) => {
                                            return (
                                                <Grid key={index} item xs={.6666} sx={{ height: "45px", display: "flex", alignItems: "center", justifyContent: "center", borderTop: "none", borderLeft: index == 0 ? "3px solid white" : "", borderRight: "3px solid white", bgcolor: (index > 3) ? "green" : "red" }} onClick={()=>{handleSetData(ele)}}>
                                                    <Typography sx={{ color: "white" }}>{ele}</Typography>
                                                </Grid>
                                            )
                                        })
                                    }
                                </Grid>

                                <Grid container sx={{}}>
                                    {
                                        [253, 252, 251, 250, 249, 248, 247, 246, 245].map((ele, index) => {
                                            return (
                                                <Grid key={index} item xs={.6666} sx={{ height: "45px", display: "flex", alignItems: "center", justifyContent: "center", borderTop: "3px solid white", borderLeft: index == 0 ? "3px solid white" : "", borderRight: "3px solid white", bgcolor: (index > 3) ? "green" : "red" }} onClick={()=>{handleSetData(ele)}}>
                                                    <Typography sx={{ color: "white" }}>{ele}</Typography>
                                                </Grid>
                                            )
                                        })
                                    }

                                </Grid>




                                <Grid container sx={{ height: '35px' }}>
                                    <Grid item xs={6} sx={{ display: "flex", alignItems: "center", justifyContent: "center", border: "3px solid white", bgcolor: 'black' }}>
                                        <Typography sx={{ color: "white", fontSize: { lg: "12px", md: "12px", sm: "12px", xs: "12px" } }}>PROP: 30' WIDE ROAD</Typography>
                                    </Grid>
                                </Grid>

                                <Grid container sx={{}}>
                                    {
                                        [237, 238, 239, 240, 241, 242, 243, 244, 245].map((ele, index) => {
                                            return (
                                                <Grid key={index} item xs={.6666} sx={{ height: "45px", display: "flex", alignItems: "center", justifyContent: "center", borderTop: "none", borderLeft: index == 0 ? "3px solid white" : "", borderRight: "3px solid white", bgcolor: (index > 3) ? "green" : "red" }} onClick={()=>{handleSetData(ele)}}>
                                                    <Typography sx={{ color: "white" }}>{ele}</Typography>
                                                </Grid>
                                            )
                                        })
                                    }

                                </Grid>

                                <Grid container sx={{}}>
                                    {
                                        [214, 213, 212, 211, 210, 209, 208, 207, 206].map((ele, index) => {
                                            return (
                                                <Grid key={index} item xs={.6666} sx={{ height: "45px", display: "flex", alignItems: "center", justifyContent: "center", borderTop: "3px solid white", borderLeft: index == 0 ? "3px solid white" : "", borderRight: "3px solid white", bgcolor: (index > 3) ? "green" : "red" }} onClick={()=>{handleSetData(ele)}}>
                                                    <Typography sx={{ color: "white" }}>{ele}</Typography>
                                                </Grid>
                                            )
                                        })
                                    }

                                </Grid>




                                <Grid container sx={{ height: '35px' }}>
                                    <Grid item xs={6} sx={{ display: "flex", alignItems: "center", justifyContent: "center", border: "3px solid white", bgcolor: 'black' }}>
                                        <Typography sx={{ color: "white", fontSize: { lg: "12px", md: "12px", sm: "12px", xs: "12px" } }}>PROP: 30' WIDE ROAD</Typography>
                                    </Grid>
                                </Grid>


                                <Grid container>
                                    {
                                        [200, 201, 202, 203, 204, 205, 205, 206].map((ele, index) => {
                                            return (
                                                <Grid key={index} item xs={.6666} sx={{ height: "45px", display: "flex", alignItems: "center", justifyContent: "center", borderTop: "none", borderLeft: index == 0 ? "3px solid white" : "", borderRight: "3px solid white", bgcolor: (index > 3) ? "green" : "red" }} onClick={()=>{handleSetData(ele)}}>
                                                    <Typography sx={{ color: "white" }}>{ele}</Typography>
                                                </Grid>
                                            )
                                        })
                                    }

                                </Grid>


                                <Grid container>
                                    {
                                        [177, 176, 1775, 174, 173, 172, 171, 170].map((ele, index) => {
                                            return (
                                                <Grid key={index} item xs={.6666} sx={{ height: "45px", display: "flex", alignItems: "center", justifyContent: "center", borderTop: "3px solid white", borderLeft: index == 0 ? "3px solid white" : "", borderRight: "3px solid white", bgcolor: (index > 3) ? "green" : "red" }} onClick={()=>{handleSetData(ele)}}>
                                                    <Typography sx={{ color: "white" }}>{ele}</Typography>
                                                </Grid>
                                            )
                                        })
                                    }

                                </Grid>



                                <Grid container sx={{ height: '35px' }}>
                                    <Grid item xs={6.67} sx={{ display: "flex", alignItems: "center", justifyContent: "center", border: "3px solid white", bgcolor: 'black' }}>
                                        <Typography sx={{ color: "white", fontSize: { lg: "12px", md: "12px", sm: "12px", xs: "12px" } }}>PROP: 30' WIDE ROAD</Typography>
                                    </Grid>
                                </Grid>


                                <Grid container>
                                    {
                                        [161, 162, 163, 164, 165, 166, 167, 168, 169, 170].map((ele, index) => {
                                            return (
                                                <Grid key={index} item xs={.6666} sx={{ height: "45px", display: "flex", alignItems: "center", justifyContent: "center", borderTop: "none", borderLeft: index == 0 ? "3px solid white" : "", borderRight: "3px solid white", bgcolor: (index > 3) ? "green" : "red" }} onClick={()=>{handleSetData(ele)}}>
                                                    <Typography sx={{ color: "white" }}>{ele}</Typography>
                                                </Grid>
                                            )
                                        })
                                    }

                                </Grid>


                                <Grid container>
                                    {
                                        [138, 137, 136, 135, 134, 133, 132, 131, 130, 129].map((ele, index) => {
                                            return (
                                                <Grid key={index} item xs={.6666} sx={{ height: "45px", display: "flex", alignItems: "center", justifyContent: "center", borderTop: "3px solid white", borderLeft: index == 0 ? "3px solid white" : "", borderRight: "3px solid white", bgcolor: (index > 3) ? "green" : "red" }} onClick={()=>{handleSetData(ele)}}>
                                                    <Typography sx={{ color: "white" }}>{ele}</Typography>
                                                </Grid>
                                            )
                                        })
                                    }

                                </Grid>



                                <Grid container sx={{ height: '35px' }}>
                                    <Grid item xs={10.68} sx={{ display: "flex", alignItems: "center", justifyContent: "center", border: "3px solid white", bgcolor: 'black' }}>
                                        <Typography sx={{ color: "white", fontSize: { lg: "12px", md: "12px", sm: "12px", xs: "12px" } }}>PROP: 30' WIDE ROAD</Typography>
                                    </Grid>
                                </Grid>


                                <Grid container sx={{}}>
                                    {
                                        [111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126].map((ele, index) => {
                                            return (
                                                <Grid key={index} item xs={.6666} sx={{ height: "45px", display: "flex", alignItems: "center", justifyContent: "center", borderTop: "none", borderLeft: index == 0 ? "3px solid white" : "", borderRight: "3px solid white", bgcolor: (index > 3) ? "green" : "red" }} onClick={()=>{handleSetData(ele)}}>
                                                    <Typography sx={{ color: "white" }}>{ele}</Typography>
                                                </Grid>
                                            )
                                        })
                                    }

                                </Grid>


                                <Grid container>
                                    {
                                        [88, 87, 86, 85, 84, 83, 82, 81, 80, 79, 78, 77, 76, 75, 74, 73, 72, 71].map((ele, index) => {
                                            return (
                                                <Grid key={index} item xs={.6666} sx={{ height: "45px", display: "flex", alignItems: "center", justifyContent: "center", borderTop: "3px solid white", borderLeft: index == 0 ? "3px solid white" : "", borderRight: "3px solid white", bgcolor: (index > 3) ? "green" : "red" }} onClick={()=>{handleSetData(ele)}}>
                                                    <Typography sx={{ color: "white" }}>{ele}</Typography>
                                                </Grid>
                                            )
                                        })
                                    }

                                </Grid>



                                <Grid container sx={{ height: '35px' }}>
                                    <Grid item xs={12} sx={{ display: "flex", alignItems: "center", justifyContent: "center", border: "3px solid white", bgcolor: 'black' }}>
                                        <Typography sx={{ color: "white", fontSize: { lg: "12px", md: "12px", sm: "12px", xs: "12px" } }}>PROP: 30' WIDE ROAD</Typography>
                                    </Grid>
                                </Grid>


                                <Grid container>
                                    {
                                        [61, 62, 63, 64, 65, 66, 67, 68, 69].map((ele, index) => {
                                            return (
                                                <Grid key={index} item xs={.534} sx={{ height: "45px", display: "flex", alignItems: "center", justifyContent: "center", borderTop: "none", borderLeft: index == 0 ? "3px solid white" : "", borderRight: "3px solid white", bgcolor: (index > 3) ? "green" : "red" }} onClick={()=>{handleSetData(ele)}}>
                                                    <Typography sx={{ color: "white" }}>{ele}</Typography>
                                                </Grid>
                                            )
                                        })
                                    }

                                </Grid>


                                <Grid container>
                                    {
                                        [41, 40, 39, 38, 37, 36, 35, 34, 33].map((ele, index) => {
                                            return (
                                                <Grid key={index} item xs={.534} sx={{ height: "45px", display: "flex", alignItems: "center", justifyContent: "center", borderTop: "3px solid white", borderLeft: index == 0 ? "3px solid white" : "", borderRight: "3px solid white", bgcolor: (index > 3) ? "green" : "red" }} onClick={()=>{handleSetData(ele)}}>
                                                    <Typography sx={{ color: "white" }}>{ele}</Typography>
                                                </Grid>
                                            )
                                        })
                                    }

                                </Grid>


                                <Grid container sx={{ height: '35px' }}>
                                    <Grid item xs={4.8} sx={{ display: "flex", alignItems: "center", justifyContent: "center", borderTop: "3px solid white", borderRight: "3px solid white", borderLeft: "3px solid white", bgcolor: 'black' }}>
                                        <Typography sx={{ color: "white", fontSize: { lg: "12px", md: "12px", sm: "12px", xs: "12px" } }}>PROP: 30' WIDE ROAD</Typography>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    {
                                        [26, 27, 28, 29, 30, 31].map((ele, index) => {
                                            return (
                                                <Grid key={index} item xs={.8} sx={{ height: "50px", display: "flex", alignItems: "center", justifyContent: "center", borderTop: "3px solid white", borderLeft: index == 0 ? "3px solid white" : "", borderRight: "3px solid white", bgcolor: (index > 3) ? "green" : "red" }} onClick={()=>{handleSetData(ele)}}>
                                                    <Typography sx={{ color: "white" }}>{ele}</Typography>
                                                </Grid>
                                            )
                                        })
                                    }

                                </Grid>


                                <Grid container>
                                    {
                                        [6, 5, 4, 3, 2, 1].map((ele, index) => {
                                            return (
                                                <Grid key={index} item xs={.8} sx={{ height: "100px", display: "flex", alignItems: "center", justifyContent: "center", borderTop: "3px solid white", borderLeft: index == 0 ? "3px solid white" : "", borderRight: "3px solid white", bgcolor: index > 5 ? "red" : "green" }} onClick={()=>{handleSetData(ele)}}>
                                                    <Typography sx={{ color: "white" }}>{ele}</Typography>
                                                </Grid>
                                            )
                                        })
                                    }

                                </Grid>
                            </Grid>

                            <Grid container>
                                <Grid item xs={5.8} sx={{ height: "30px", border: "3px solid white", borderRight: "none", borderBottom: "none", bgcolor: "black", display: "flex", justifyContent: "center", alignItems: "top" }}>

                                </Grid>
                                <Grid item xs={.4} sx={{ bgcolor: "black" }}></Grid>
                                <Grid item xs={5.8} sx={{ height: "30px", border: "3px solid white", borderLeft: "none", borderBottom: "none", bgcolor: "black", display: "flex", justifyContent: "center", alignItems: "top" }}>

                                </Grid>
                                <Grid item xs={12} sx={{ height: "45px", border: "3px solid white", borderTop: "none", bgcolor: "black", display: "flex", justifyContent: "center", alignItems: "top" }}>
                                    <Typography sx={{ color: "white", fontSize: { lg: "12px", md: "12px", sm: "12px", xs: "12px" } }}>TO NANDYAL N.H 18 IV LINE BY PASS ROAD TO N.H.7</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </MapInteractionCSS>
                </Grid>
            </Grid>
            <ModalPage modalData={modalData} setModalData={setModalData}/>
        </>

    );
};

export default Home;







