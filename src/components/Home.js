'use client'
import { Box, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { MapInteractionCSS } from 'react-map-interaction';
import ModalPage from './ModalPage';




const Home = () => {

    const [modalData, setModalData] = useState({
        open: false,
        data: ""
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
                        <Grid container sx={{ alignItems: "flex-end" }}>
                            {/* rahul comp */}
                            <Grid item xs={5.8} sx={{ height: "100%" }}>
                                <Grid container sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                    <Grid container sx={{ justifyContent: 'right' }}>
                                        <Grid item xs={4} sx={{clipPath:'polygon(97% 0, 100% 0, 100% 99%, 19% 100%, 18% 100%)'}}>
                                            <Grid container sx={{ height: '45px', justifyContent: 'right' }}>
                                                {
                                                    [275].map((ele, index) => {
                                                        return (
                                                            <Grid key={index} item xs={9} sx={{ display: "flex", alignItems: "flex-end", justifyContent: "right", borderTop: "3px solid white", borderLeft: index == 0 ? "3px solid white" : "", borderRight: "3px solid white", bgcolor: index > 4 ? 'red' : 'green', }} onClick={() => { handleSetData(ele) }}>
                                                                <Typography sx={{ color: "white", fontSize: '12px', mr: '4px', mb:'4px' }}>{ele}</Typography>
                                                            </Grid>
                                                        )
                                                    })
                                                }
                                            </Grid>
                                            <Grid container sx={{ height: '45px', justifyContent: 'right', }}>
                                                {
                                                    [257, 256, 255, 254].map((ele, index) => {
                                                        return (
                                                            <Grid key={index} item xs={2.46} sx={{ display: "flex", alignItems: "flex-end", justifyContent: "center", borderTop: "3px solid white", borderLeft: index == 0 ? "3px solid white" : "", borderRight: "3px solid white", bgcolor: index < 4 ? 'red' : 'green' }} onClick={() => { handleSetData(ele) }}>
                                                                <Typography sx={{ color: "white", fontSize: '12px', ml:'8px' }}>{ele}</Typography>
                                                            </Grid>
                                                        )
                                                    })
                                                }
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid container sx={{ height: '35px', justifyContent: 'right', }}>

                                        <Grid item xs={3.8} sx={{ display: "flex", alignItems: "center", justifyContent: "center", borderTop: "3px solid white", borderLeft: "3px solid white", bgcolor: 'black', clipPath: 'polygon(13% 0, 100% 0, 100% 100%, 3% 100%)' }}>
                                            <Typography sx={{ color: "white", fontSize: '12px' }}>PROP: 30' WIDE ROAD</Typography>
                                        </Grid>

                                    </Grid>
                                    <Grid container sx={{ justifyContent: 'right' }}>
                                        <Grid item xs={4.2} sx={{ border: '1px solid green', clipPath: 'polygon(12% 0, 100% 0, 100% 100%, 0 100%)' }}>
                                            <Grid container sx={{ height: '45px', justifyContent: 'right' }}>
                                                <Grid item xs={2.9} sx={{ display: "flex", alignItems: "center", justifyContent: "center", borderTop: "3px solid white", borderLeft: "3px solid white", bgcolor: 'green' }} onClick={() => { handleSetData(231) }}>
                                                    <Typography sx={{ color: "white", fontSize: '12px' }}>231</Typography>
                                                </Grid>
                                                {
                                                    [232, 233, 234, 235, 236].map((ele, index) => {
                                                        return (
                                                            <Grid key={index} item xs={1.65} sx={{ display: "flex", alignItems: "center", justifyContent: "center", borderTop: "3px solid white", borderLeft: index == 0 ? "3px solid white" : "", borderRight: "3px solid white", bgcolor: index > 4 ? 'red' : 'green' }} onClick={() => { handleSetData(ele) }}>
                                                                <Typography sx={{ color: "white", fontSize: '12px' }}>{ele}</Typography>
                                                            </Grid>
                                                        )
                                                    })
                                                }
                                            </Grid>
                                            <Grid container sx={{ height: '45px', justifyContent: 'right' }}>
                                                <Grid item xs={2} sx={{ display: "flex", alignItems: "center", justifyContent: "center", borderTop: "3px solid white", borderLeft: "3px solid white", bgcolor: 'green' }} onClick={() => { handleSetData(221) }}>
                                                    <Typography sx={{ color: "white", fontSize: '12px' }}>221</Typography>
                                                </Grid>
                                                {
                                                    [220, 219, 218, 217, 216, 215].map((ele, index) => {
                                                        return (
                                                            <Grid key={index} item xs={1.65} sx={{ display: "flex", alignItems: "center", justifyContent: "center", borderTop: "3px solid white", borderLeft: index == 0 ? "3px solid white" : "", borderRight: "3px solid white", bgcolor: index < 4 ? 'red' : 'green' }} onClick={() => { handleSetData(ele) }}>
                                                                <Typography sx={{ color: "white", fontSize: '12px' }}>{ele}</Typography>
                                                            </Grid>
                                                        )
                                                    })
                                                }
                                            </Grid>

                                        </Grid>
                                    </Grid>

                                    <Grid container sx={{ height: '35px', justifyContent: 'right' }}>

                                        <Grid item xs={4.5} sx={{ display: "flex", alignItems: "center", justifyContent: "center", borderTop: "3px solid white", borderLeft: "3px solid white", bgcolor: 'black', clipPath: 'polygon(6% 0, 100% 0, 100% 100%, 0 100%)' }}>
                                            <Typography sx={{ color: "white", fontSize: '12px' }}>PROP: 30' WIDE ROAD</Typography>
                                        </Grid>

                                    </Grid>
                                    <Grid container sx={{ justifyContent: 'right' }}>
                                        <Grid item xs={6} sx={{ border: '1px solid green', clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 11% 100%, 7% 100%)' }}>
                                            <Grid container sx={{ height: '45px', justifyContent: 'right' }}>
                                                <Grid item xs={2.23} sx={{ display: "flex", alignItems: "center", justifyContent: "center", borderTop: "3px solid white", borderLeft: "3px solid white", bgcolor: 'green' }} onClick={() => { handleSetData(192) }}>
                                                    <Typography sx={{ color: "white", fontSize: '12px' }}>192</Typography>
                                                </Grid>
                                                {
                                                    [193, 194, 195, 196, 197, 198, 199].map((ele, index) => {
                                                        return (
                                                            <Grid key={index} item xs={1.13} sx={{ display: "flex", alignItems: "center", justifyContent: "center", borderTop: "3px solid white", borderLeft: index == 0 ? "3px solid white" : "", borderRight: "3px solid white", bgcolor: index > 4 ? 'red' : 'green' }} onClick={() => { handleSetData(ele) }}>
                                                                <Typography sx={{ color: "white", fontSize: '12px' }}>{ele}</Typography>
                                                            </Grid>
                                                        )
                                                    })
                                                }
                                            </Grid>
                                            <Grid container sx={{ height: '45px', justifyContent: 'right', }}>
                                                {
                                                    ['', 186, 185, 184, 183, 182, 181, 180, 179, 178].map((ele, index) => {
                                                        return (
                                                            <Grid key={index} item xs={1.13} sx={{ display: "flex", alignItems: "center", justifyContent: "center", borderTop: "3px solid white", borderLeft: index == 0 ? "3px solid white" : "", borderRight: "3px solid white", bgcolor: index < 4 ? 'red' : 'green', }} onClick={() => { handleSetData(ele) }}>
                                                                <Typography sx={{ color: "white", fontSize: '12px' }}>{ele}</Typography>
                                                            </Grid>
                                                        )
                                                    })
                                                }
                                            </Grid>
                                        </Grid>
                                    </Grid>


                                    <Grid container sx={{ height: '35px', justifyContent: 'right' }}>

                                        <Grid item xs={6.1} sx={{ display: "flex", alignItems: "center", justifyContent: "center", borderTop: "3px solid white", borderLeft: "3px solid white", bgcolor: 'black', clipPath: 'polygon(8% 0, 100% 0, 100% 100%, 0 100%, 0 100%)' }}>
                                            <Typography sx={{ color: "white", fontSize: '12px' }}>PROP: 30' WIDE ROAD</Typography>
                                        </Grid>

                                    </Grid>
                                    <Grid container sx={{ justifyContent: 'right' }}>
                                        <Grid item xs={6.5} sx={{ clipPath: 'polygon(6% 0, 100% 0, 100% 100%, 0 100%, 0 100%)', }}>
                                            <Grid container sx={{ height: '45px', justifyContent: 'right' }}>
                                                {
                                                    ['', 151, 152, 153, 154, 165, 156, 157, 158, 159, 160].map((ele, index) => {
                                                        return (
                                                            <Grid key={index} item xs={1.09} sx={{ display: "flex", alignItems: "center", justifyContent: "center", borderTop: "3px solid white", borderLeft: index == 0 ? "3px solid white" : "", borderRight: "3px solid white", bgcolor: index > 4 ? 'red' : 'green' }} onClick={() => { handleSetData(ele) }}>
                                                                <Typography sx={{ color: "white", fontSize: '12px' }}>{ele}</Typography>
                                                            </Grid>
                                                        )
                                                    })
                                                }
                                            </Grid>
                                            <Grid container sx={{ height: '45px', justifyContent: 'right' }}>
                                                {
                                                    [149, 148, 147, 146, 145, 144, 143, 142, 141, 140, 139].map((ele, index) => {
                                                        return (
                                                            <Grid key={index} item xs={1.09} sx={{ display: "flex", alignItems: "center", justifyContent: "center", borderTop: "3px solid white", borderLeft: index == 0 ? "3px solid white" : "", borderRight: "3px solid white", bgcolor: index < 4 ? 'red' : 'green' }} onClick={() => { handleSetData(ele) }}>
                                                                <Typography sx={{ color: "white", fontSize: '12px' }}>{ele}</Typography>
                                                            </Grid>
                                                        )
                                                    })
                                                }
                                            </Grid>
                                        </Grid>

                                    </Grid>


                                    <Grid container sx={{ height: '35px', justifyContent: 'right' }}>

                                        <Grid item xs={6.65} sx={{ display: "flex", alignItems: "center", justifyContent: "center", borderTop: "3px solid white", bgcolor: 'black', clipPath: 'polygon(2% 0, 100% 0, 100% 100%, 0 100%, 0 80%)' }}>
                                            <Typography sx={{ color: "white", fontSize: '12px' }}>PROP: 30' WIDE ROAD</Typography>
                                        </Grid>

                                    </Grid>


                                    <Grid container sx={{ justifyContent: 'right' }}>
                                        <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'right', alignItems: 'flex-end' }}>

                                            <Box sx={{ width: '40px', height: '100%', bgcolor: 'black', }}>

                                            </Box>



                                        </Grid>
                                        <Grid item xs={6} >
                                            <Grid container sx={{ height: '45px', justifyContent: 'right' }}>
                                                {
                                                    [100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110].map((ele, index) => {
                                                        return (
                                                            <Grid key={index} item xs={1.09} sx={{ display: "flex", alignItems: "center", justifyContent: "center", borderTop: "3px solid white", borderLeft: index == 0 ? "3px solid white" : "", borderRight: "3px solid white", bgcolor: index < 4 ? 'red' : 'green' }} onClick={() => { handleSetData(ele) }}>
                                                                <Typography sx={{ color: "white", fontSize: '12px' }}>{ele}</Typography>
                                                            </Grid>
                                                        )
                                                    })
                                                }
                                            </Grid>
                                            <Grid container sx={{ height: '45px', justifyContent: 'right' }}>
                                                {
                                                    [99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89].map((ele, index) => {
                                                        return (
                                                            <Grid key={index} item xs={1.09} sx={{ display: "flex", alignItems: "center", justifyContent: "center", borderTop: "3px solid white", borderLeft: index == 0 ? "3px solid white" : "", borderRight: "3px solid white", borderBottom: "3px solid white", bgcolor: index < 4 ? 'red' : 'green' }} onClick={() => { handleSetData(ele) }}>
                                                                <Typography sx={{ color: "white", fontSize: '12px' }}>{ele}</Typography>
                                                            </Grid>
                                                        )
                                                    })
                                                }
                                            </Grid>

                                        </Grid>
                                    </Grid>





                                    <Grid container sx={{ height: '35px', justifyContent: 'right' }}>

                                        <Grid item xs={6.65} sx={{ display: "flex", alignItems: "center", justifyContent: "center", bgcolor: 'black' }}>
                                            <Typography sx={{ color: "white", fontSize: '12px' }}>PROP: 30' WIDE ROAD</Typography>
                                        </Grid>

                                    </Grid>
                                    {/* kjbjkbkb */}
                                    <Grid container sx={{ justifyContent: 'right' }}>
                                        <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'right', alignItems: 'flex-end' }}>
                                            <Box sx={{ width: '16px', height: '20px', bgcolor: 'green', clipPath: 'polygon(60% 100%, 60% 100%, 100% 46%, 100% 99%, 60% 100%)' }}>

                                            </Box>
                                            <Box sx={{ width: '40px', height: '100%', bgcolor: 'black' }}>

                                            </Box>



                                        </Grid>
                                        <Grid item xs={6} sx={{  }}>
                                            <Grid container sx={{ height: '45px', justifyContent: 'right' }}>
                                                {
                                                    ['51 52', 53, 54, 55, 56, 57, 58, 59, 60].map((ele, index) => {
                                                        return (
                                                            <Grid key={index} item xs={1.33} sx={{ display: "flex", alignItems: "center", justifyContent: "center", borderTop: "3px solid white", borderLeft: index == 0 ? "3px solid white" : "", borderRight: "3px solid white", bgcolor: index == 7 ? 'red' : 'green', }} onClick={() => { handleSetData(ele) }}>
                                                                <Typography sx={{ color: "white", fontSize: '12px', textAlign: 'center' }}>{ele}</Typography>
                                                            </Grid>
                                                        )
                                                    })
                                                }
                                            </Grid>
                                            <Grid container sx={{ height: '45px', justifyContent: 'right' }}>
                                                {
                                                    [50, 49, 48, 47, 46, 45, 44, 43, 42,].map((ele, index) => {
                                                        return (
                                                            <Grid key={index} item xs={1.33} sx={{ display: "flex", alignItems: "center", justifyContent: "center", borderTop: "3px solid white", borderLeft: index == 0 ? "3px solid white" : "", borderRight: "3px solid white", bgcolor: "red", }} onClick={() => { handleSetData(ele) }}>
                                                                <Typography sx={{ color: "white", fontSize: '12px' }}>{ele}</Typography>
                                                            </Grid>
                                                        )
                                                    })
                                                }
                                            </Grid>

                                        </Grid>
                                    </Grid>
                                    {/* jhjhjh */}

                                    <Grid container sx={{ height: '35px', justifyContent: 'right' }}>

                                        <Grid item xs={8} sx={{ display: "flex", alignItems: "center", justifyContent: "center", borderTop: "3px solid white", borderLeft: "3px solid white", bgcolor: 'black', clipPath: 'polygon(15% 1%, 17% 1%, 100% 0, 100% 99%, 8% 100%)' }}>
                                            <Typography sx={{ color: "white", fontSize: '12px' }}>PROP: 30' WIDE ROAD</Typography>
                                        </Grid>

                                    </Grid>
                                    <Grid container sx={{ justifyContent: 'right' }}>
                                        <Grid container xs={2.8}>
                                            <Grid item xs={4} sx={{ display: "flex", alignItems: "center", justifyContent: "center", borderTop: "3px solid white", borderLeft: "3px solid white", borderRight: "none", bgcolor: "green", clipPath: 'polygon(100% 64%, 100% 63%, 100% 61%, 100% 99%, 8% 100%, 10% 99%)', border:'2px solid white', }} onClick={() => { handleSetData('') }}>
                                                <Typography sx={{ color: "white", fontSize: '12px', textAlign: 'center', }}></Typography>
                                            </Grid>
                                            <Grid item xs={4} sx={{ display: "flex", alignItems: "center", justifyContent: "center", borderTop: "3px solid white", borderLeft: "3px solid white", borderRight: "none", bgcolor: "green", clipPath: ' polygon(99% 26%, 100% 26%, 100% 28%, 100% 99%, 0 99%, 0 64%)' }} onClick={() => { handleSetData(10) }}>
                                                <Typography sx={{ color: "white", fontSize: '12px', textAlign: 'center', mt:'40px' }}>16</Typography>
                                            </Grid>
                                            <Grid item xs={4} sx={{ display: "flex", alignItems: "center", justifyContent: "center", borderTop: "3px solid white", borderLeft: "3px solid white", borderRight: "none", bgcolor: "green", clipPath: ' polygon(60% 0, 61% 0, 100% 0, 100% 99%, 0 99%, 0 25%)' }} onClick={() => { handleSetData(17) }}>
                                                <Typography sx={{ color: "white", fontSize: '12px', textAlign: 'center', mt:'40px' }}>17</Typography>
                                            </Grid>

                                        </Grid>
                                        <Grid item xs={7}>
                                            <Grid container sx={{ height: '50px', justifyContent: 'right' }}>
                                                {
                                                    [17, 18, '19 20', 21, 22, 23, 24, 25].map((ele, index) => {
                                                        return (
                                                            <Grid key={index} item xs={1.5} sx={{ display: "flex", alignItems: "center", justifyContent: "center", borderTop: "3px solid white", borderLeft: index == 0 ? "3px solid white" : "", borderRight: "3px solid white", bgcolor: index > 5 ? "red" : "green", }} onClick={() => { handleSetData(ele) }}>
                                                                <Typography sx={{ color: "white", fontSize: '12px', textAlign: 'center' }}>{ele}</Typography>
                                                            </Grid>
                                                        )
                                                    })
                                                }
                                            </Grid>
                                            <Grid container sx={{ justifyContent: 'right', alignItems: 'flex-end', }}>

                                                {
                                                    [14, 13, 12, 11, 10, 9, 8, 7].map((ele, index) => {
                                                        return (
                                                            <Grid key={index} item xs={1.5} sx={{ height: '100px', display: "flex", alignItems: "center", justifyContent: "center", borderTop: "3px solid white", borderLeft: index == 0 ? "3px solid white" : "", borderRight: "3px solid white", bgcolor: index > 3 ? "red" : "green", }} onClick={() => { handleSetData(ele) }}>
                                                                <Typography sx={{ color: "white", fontSize: '12px' }}>{ele}</Typography>
                                                            </Grid>
                                                        )
                                                    })
                                                }
                                            </Grid>
                                        </Grid>
                                    </Grid>


                                </Grid>

                            </Grid>
                            <Grid item xs={.4} sx={{ bgcolor: "black", borderTop: "3px solid white", height: '937px' , clipPath:'polygon(100% 0, 100% 0, 100% 100%, 0 100%, 0 4%)'}}></Grid>
                            {/* kapil comp */}
                            <Grid item xs={5.8}>

                                <Grid container>
                                    <Grid item xs={6}>
                                        <Grid container justifyContent={'right'}>
                                            <Grid item xs={4.1} sx={{ height: "45px", bgcolor: "green",clipPath:"polygon(85% 0, 100% 0, 100% 100%, 0% 100%)", display: "flex", alignItems: "center", justifyContent: "center", border: "3px solid white", borderBottom: "none" }} onClick={() => { handleSetData(325) }}>
                                                <Typography sx={{ color: "white" }} >325</Typography>
                                            </Grid>

                                        </Grid>

                                        <Grid container alignItems={"end"} sx={{}}>
                                            <Grid item xs={6} sx={{ height: "100px",clipPath:"polygon(100% 0, 0% 100%, 100% 100%)" }}>
                                                <Grid container sx={{ height: "100%" }} >
                                                    {
                                                        [292, 291, 290, 289].map((ele, index) => {
                                                            return (
                                                                <Grid key={index} item xs={3} sx={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", border: "3px solid white", borderBottom: "none", borderRight: "3px solid white", bgcolor: "green" }} onClick={() => { handleSetData(ele) }}>
                                                                    <Typography sx={{ color: "white" }} >{ele}</Typography>
                                                                </Grid>
                                                            )
                                                        })
                                                    }
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={6} sx={{ display: "flex", alignItems: "end" }}>
                                                <Grid container>
                                                    <Grid container>
                                                        <Grid item xs={12} sx={{ display: "flex",clipPath:'polygon(30% 0%, 100% 0, 100% 100%, 0 100%, 0 70%)', height: "35px", alignItems: "center", justifyContent: "center", borderTop: "3px solid white", borderRight: "none", borderLeft: "none", bgcolor: 'black' }}>

                                                        </Grid>
                                                        {
                                                            [321, 322, 323, 324].map((ele, index) => {
                                                                return (
                                                                    <Grid key={index} item xs={3} sx={{ height: "45px", display: "flex", alignItems: "center", justifyContent: "center", borderTop: "3px solid white", borderLeft: "none", borderRight: "3px solid white", bgcolor: "green" }} onClick={() => { handleSetData(ele) }}>
                                                                        <Typography sx={{ color: "white" }} >{ele}</Typography>
                                                                    </Grid>
                                                                )
                                                            })
                                                        }
                                                    </Grid>

                                                    <Grid container sx={{}}>
                                                        {
                                                            [288, 287, 286, 285].map((ele, index) => {
                                                                return (
                                                                    <Grid key={index} item xs={3} sx={{ height: "45px", display: "flex", alignItems: "center", justifyContent: "center", borderTop: "3px solid white", borderLeft: "none", borderRight: "3px solid white", bgcolor: "green" }} onClick={() => { handleSetData(ele) }}>
                                                                        <Typography sx={{ color: "white" }}>{ele}</Typography>
                                                                    </Grid>
                                                                )
                                                            })
                                                        }
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>



                                        <Grid container sx={{ height: '35px' }}>
                                            <Grid item xs={12} sx={{ display: "flex", alignItems: "center", justifyContent: "center", border: "3px solid white", bgcolor: 'black',borderLeft:"none", borderRight: "none" }}>
                                                <Typography sx={{ color: "white", fontSize: { lg: "12px", md: "12px", sm: "12px", xs: "12px" } }}>PROP: 30' WIDE ROAD</Typography>
                                            </Grid>
                                        </Grid>




                                        <Grid container sx={{}}>
                                            {
                                                [276, 277, 278, 279, 280, 281, 282, 283, 284].map((ele, index) => {
                                                    return (
                                                        <Grid key={index} item xs={1.33} sx={{ height: "45px", display: "flex", alignItems: "center", justifyContent: "center", borderTop: "none", borderLeft: index == 0 ? "3px solid white" : "", borderRight: "3px solid white", bgcolor: (index > 3) ? "green" : "red" }} onClick={() => { handleSetData(ele) }}>
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
                                                        <Grid key={index} item xs={1.33} sx={{ height: "45px", display: "flex", alignItems: "center", justifyContent: "center", borderTop: "3px solid white", borderLeft: index == 0 ? "3px solid white" : "", borderRight: "3px solid white", bgcolor: (index > 3) ? "green" : "red" }} onClick={() => { handleSetData(ele) }}>
                                                            <Typography sx={{ color: "white" }}>{ele}</Typography>
                                                        </Grid>
                                                    )
                                                })
                                            }

                                        </Grid>




                                        <Grid container sx={{ height: '35px' }}>
                                            <Grid item xs={12} sx={{ display: "flex", alignItems: "center", justifyContent: "center", border: "3px solid white",borderLeft:"none", bgcolor: 'black', borderRight: "none" }}>
                                                <Typography sx={{ color: "white", fontSize: { lg: "12px", md: "12px", sm: "12px", xs: "12px" } }}>PROP: 30' WIDE ROAD</Typography>
                                            </Grid>
                                        </Grid>

                                        <Grid container sx={{}}>
                                            {
                                                [237, 238, 239, 240, 241, 242, 243, 244, 245].map((ele, index) => {
                                                    return (
                                                        <Grid key={index} item xs={1.33} sx={{ height: "45px", display: "flex", alignItems: "center", justifyContent: "center", borderTop: "none", borderLeft: index == 0 ? "3px solid white" : "", borderRight: "3px solid white", bgcolor: (index > 3) ? "green" : "red" }} onClick={() => { handleSetData(ele) }}>
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
                                                        <Grid key={index} item xs={1.33} sx={{ height: "45px", display: "flex", alignItems: "center", justifyContent: "center", borderTop: "3px solid white", borderLeft: index == 0 ? "3px solid white" : "", borderRight: "3px solid white", bgcolor: (index > 3) ? "green" : "red" }} onClick={() => { handleSetData(ele) }}>
                                                            <Typography sx={{ color: "white" }}>{ele}</Typography>
                                                        </Grid>
                                                    )
                                                })
                                            }

                                        </Grid>

                                    </Grid>
                                    <Grid item xs={5} sx={{}}>
                                        <Grid container sx={{ height: "100%" }}>
                                            <Grid item xs={2.2} sx={{ bgcolor: "black", height: "100%" }}></Grid>
                                            <Grid container xs={9.5} sx={{height: "fit-content", }}>
                                                <Grid item xs={12} sx={{ border: "3px solid white", borderRight: "none", bgcolor: "yellow", height: "170px", clipPath: "polygon(50% 0%, 100% 34%, 92% 100%, 0 100%, 0 0)" }}></Grid>
                                                <Grid item xs={12} sx={{ display: "flex", height: "35px", alignItems: "center", clipPath: "polygon(0 0, 92% 0, 85% 100%, 0% 100%)", justifyContent: "center", border: "3px solid white", borderTop: "none", borderLeft: "none", bgcolor: 'black' }}>
                                                </Grid>
                                                <Grid item xs={12} sx={{ border: "3px solid white", borderBottom: "none", bgcolor: "yellow", borderTop: "none", height: "215.5px", clipPath: "polygon(0 0, 85% 0, 24% 100%, 0% 100%)" }}></Grid>
                                            </Grid>
                                        </Grid>

                                    </Grid>
                                    <Grid container sx={{ height: '35px' }}>
                                        <Grid item xs={7.86} sx={{ display: "flex", clipPath: "polygon(0 0, 100% 0, 94% 100%, 0% 100%)", alignItems: "center", justifyContent: "center", border: "3px solid white",borderLeft:"none", bgcolor: 'black' }}>
                                            <Typography sx={{ color: "white", fontSize: { lg: "12px", md: "12px", sm: "12px", xs: "12px" } }}>PROP: 30' WIDE ROAD</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    {
                                        [200, 201, 202, 203, 204, 205, 205, 206].map((ele, index) => {
                                            return (
                                                <Grid key={index} item xs={.6666} sx={{ height: "45px", display: "flex", alignItems: "center", justifyContent: "center", borderTop: "none", borderLeft: index == 0 ? "3px solid white" : "", borderRight: "3px solid white", bgcolor: (index > 3) ? "green" : "red" }} onClick={() => { handleSetData(ele) }}>
                                                    <Typography sx={{ color: "white" }}>{ele}</Typography>
                                                </Grid>
                                            )
                                        })
                                    }
                                    <Grid item xs={2.17} sx={{ height: "35px", bgcolor: "yellow", clipPath: "polygon(0 0, 94% 0, 70% 100%, 0% 100%)", display: "flex", alignItems: "center", justifyContent: "center", borderLeft: "none", border: "3px solid white" }} onClick={() => { handleSetData() }}>

                                    </Grid>

                                </Grid>


                                <Grid container>
                                    {
                                        [177, 176, 1775, 174, 173, 172, 171, 170].map((ele, index) => {
                                            return (
                                                <Grid key={index} item xs={.6666} sx={{ height: "45px", display: "flex", alignItems: "center", justifyContent: "center", borderTop: "3px solid white", borderLeft: index == 0 ? "3px solid white" : "", borderRight: "3px solid white", bgcolor: (index > 3) ? "green" : "red" }} onClick={() => { handleSetData(ele) }}>
                                                    <Typography sx={{ color: "white" }}>{ele}</Typography>
                                                </Grid>
                                            )
                                        })
                                    }

                                </Grid>


                                {/* fourth ROAD */}

                                <Grid container sx={{ height: '35px' }}>
                                    <Grid item xs={6.67} sx={{ display: "flex", alignItems: "center", clipPath: 'polygon(0 0, 80% 0, 93% 100%, 0% 100%)', justifyContent: "center", border: "3px solid white",borderLeft:"none", bgcolor: 'black' }}>
                                        <Typography sx={{ color: "white", fontSize: { lg: "12px", md: "12px", sm: "12px", xs: "12px" } }}>PROP: 30' WIDE ROAD</Typography>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid container xs={8.7}>
                                        <Grid item xs={8.571}>
                                            <Grid container sx={{}}>
                                                {
                                                    [161, 162, 163, 164, 165, 166, 167, 168, 169, 170].map((ele, index) => {
                                                        return (
                                                            <Grid key={index} item xs={1.2} sx={{ height: "45px", display: "flex", alignItems: "center", justifyContent: "center", borderTop: "none", borderLeft: index == 0 ? "3px solid white" : "", borderRight: "3px solid white", bgcolor: (index > 3) ? "green" : "red" }} onClick={() => { handleSetData(ele) }}>
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
                                                            <Grid key={index} item xs={1.2} sx={{ height: "45px", display: "flex", alignItems: "center", justifyContent: "center", borderTop: "3px solid white", borderLeft: index == 0 ? "3px solid white" : "", borderRight: "3px solid white", bgcolor: (index > 3) ? "green" : "red" }} onClick={() => { handleSetData(ele) }}>
                                                                <Typography sx={{ color: "white" }}>{ele}</Typography>
                                                            </Grid>
                                                        )
                                                    })
                                                }

                                            </Grid>

                                        </Grid>
                                        <Grid item xs={3.42} sx={{ clipPath: "polygon(0 0, 0% 0, 95% 100%, 0% 100%)" }}>
                                            <Grid container sx={{ height: "100%" }}>
                                                <Grid item xs={3} sx={{ display: "flex", height: "100%", bgcolor: "green", alignItems: "center", justifyContent: "center", borderTop: "none", borderRight: "3px solid white", }} onClick={() => { handleSetData(99) }}>
                                                    <Typography sx={{ color: "white" }}>128</Typography>
                                                </Grid>
                                                <Grid item xs={3} sx={{ display: "flex", height: "100%", bgcolor: "green", alignItems: "center", justifyContent: "center", borderTop: "none", borderRight: "3px solid white", }} onClick={() => { handleSetData(99) }}>
                                                    <Typography sx={{ color: "white" }}>127</Typography>
                                                </Grid>

                                                <Grid item xs={3} sx={{ display: "flex", height: "100%", bgcolor: "green", alignItems: "center", justifyContent: "center", borderTop: "none", borderRight: "3px solid white", }} onClick={() => { handleSetData(99) }}>
                                                    <Typography sx={{ color: "white" }}>126</Typography>
                                                </Grid>
                                                <Grid item xs={3} sx={{ display: "flex", height: "100%", bgcolor: "green", alignItems: "center", justifyContent: "center", borderTop: "none", borderRight: "3px solid white", }} onClick={() => { handleSetData(99) }}>

                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                {/* third road */}
                                <Grid container sx={{ height: '35px' }}>
                                    <Grid item xs={9.4} sx={{ display: "flex", clipPath: 'polygon(0 0, 91% 0, 100% 100%, 0% 100%)', alignItems: "center", justifyContent: "center", border: "3px solid white", bgcolor: 'black',borderLeft:"none" }}>
                                        <Typography sx={{ color: "white", fontSize: { lg: "12px", md: "12px", sm: "12px", xs: "12px" } }}>PROP: 30' WIDE ROAD</Typography>
                                    </Grid>
                                </Grid>


                                <Grid container sx={{}}>
                                    {
                                        [111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125].map((ele, index) => {
                                            return (
                                                <Grid key={index} item xs={.62} sx={{ height: "45px", display: "flex", alignItems: "center", justifyContent: "center", borderTop: "none", borderLeft: index == 0 ? "3px solid white" : "", borderRight: "3px solid white", bgcolor: (index > 3) ? "green" : "red" }} onClick={() => { handleSetData(ele) }}>
                                                    <Typography sx={{ color: "white" }}>{ele}</Typography>
                                                </Grid>
                                            )
                                        })
                                    }
                                    <Grid item xs={1} sx={{ height: "45px", display: "flex", alignItems: "center", clipPath: "polygon(0 0, 9% 0, 100% 100%, 0% 100%)", justifyContent: "center", borderTop: "none", bgcolor: "green" }} onClick={() => { handleSetData('125A') }}>
                                        <Typography sx={{ color: "white" }}>125A</Typography>
                                    </Grid>

                                </Grid>


                                <Grid container>
                                    {
                                        [88, 87, 86, 85, 84, 83, 82, 81, 80, 79, 78, 77, 76, 75, 74, 73, 72, 71].map((ele, index) => {
                                            return (
                                                <Grid key={index} item xs={.62} sx={{ height: "45px", display: "flex", clipPath: index == 17 ? 'polygon(0 24%, 0% 100%, 100% 100%)' : index == 16 ? 'polygon(60% 0%, 100% 20%, 100% 99%, 0 100%, 0 0)' : 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)', alignItems: "center", justifyContent: "center", borderTop: "3px solid white", borderLeft: index == 0 ? "3px solid white" : "", borderRight: "3px solid white", bgcolor: (index > 3) ? "green" : "red" }} onClick={() => { handleSetData(ele) }}>
                                                    <Typography sx={{ color: "white" }}>{ele}</Typography>
                                                </Grid>
                                            )
                                        })
                                    }

                                </Grid>


                                {/* second road */}
                                <Grid container sx={{ height: '35px' }}>
                                    <Grid item xs={12} sx={{ display: "flex", clipPath: 'polygon(0 0, 93% 0, 100% 100%, 0% 100%)', alignItems: "center", justifyContent: "center", border: "3px solid white", bgcolor: 'black',borderLeft:"none" }}>
                                        <Typography sx={{ color: "white", fontSize: { lg: "12px", md: "12px", sm: "12px", xs: "12px" } }}>PROP: 30' WIDE ROAD</Typography>
                                    </Grid>
                                </Grid>


                                <Grid container>
                                    {
                                        [61, 62, 63, 64, 65, 66, 67, 68, 69].map((ele, index) => {
                                            return (
                                                <Grid key={index} item xs={.534} sx={{ height: "45px", display: "flex", alignItems: "center", justifyContent: "center", borderTop: "none", borderLeft: index == 0 ? "3px solid white" : "", borderRight: "3px solid white", bgcolor: (index > 3) ? "green" : "red" }} onClick={() => { handleSetData(ele) }}>
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
                                                <Grid key={index} item xs={.534} sx={{ height: "45px", display: "flex", alignItems: "center", justifyContent: "center", borderTop: "3px solid white", borderLeft: index == 0 ? "3px solid white" : "", borderRight: "3px solid white", bgcolor: (index > 3) ? "green" : "red" }} onClick={() => { handleSetData(ele) }}>
                                                    <Typography sx={{ color: "white" }}>{ele}</Typography>
                                                </Grid>
                                            )
                                        })
                                    }

                                </Grid>


                                <Grid container sx={{ height: '35px' }}>
                                    <Grid item xs={4.8} sx={{ display: "flex", alignItems: "center", justifyContent: "center", borderTop: "3px solid white", borderRight: "3px solid white", borderLeft: "none", bgcolor: 'black' }}>
                                        <Typography sx={{ color: "white", fontSize: { lg: "12px", md: "12px", sm: "12px", xs: "12px" } }}>PROP: 30' WIDE ROAD</Typography>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    {
                                        [26, 27, 28, 29, 30, 31].map((ele, index) => {
                                            return (
                                                <Grid key={index} item xs={.8} sx={{ height: "50px", display: "flex", alignItems: "center", justifyContent: "center", borderTop: "3px solid white", borderLeft: index == 0 ? "3px solid white" : "", borderRight: "3px solid white", bgcolor: (index > 3) ? "green" : "red" }} onClick={() => { handleSetData(ele) }}>
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
                                                <Grid key={index} item xs={.8} sx={{ height: "100px", display: "flex", alignItems: "center", justifyContent: "center", borderTop: "3px solid white", borderLeft: index == 0 ? "3px solid white" : "", borderRight: "3px solid white", bgcolor: index > 5 ? "red" : "green" }} onClick={() => { handleSetData(ele) }}>
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
            <ModalPage modalData={modalData} setModalData={setModalData} />
        </>

    );
};

export default Home;