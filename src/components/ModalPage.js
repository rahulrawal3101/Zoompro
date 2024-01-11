'use client'
import { Box, Grid, IconButton, Modal, Paper, Typography } from '@mui/material';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

const ModalPage = ({modalData, setModalData}) => {

    const handleClose =()=>{setModalData({...modalData,open:false})}
    return (
        <>
            <Modal
                open={modalData.open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                disableAutoFocus={true}
            >


                <Paper elevation={3} sx={{position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',p:"25px 15px",borderRadius:"0px",width: 530,bgcolor: '#232b2b'}}>
                    <Grid container>
                        <Grid item xs={12} sx={{display:"flex",justifyContent:"right"}}>
                            <IconButton  onClick={handleClose}>
                                <CancelOutlinedIcon sx={{color:"white",fontSize:"30px",fontWeight:300}}/>
                            </IconButton>
                        </Grid>
                        <Grid item xs={12} sx={{mb:"20px"}}>
                            <Typography sx={{textTransform:"uppercase",color:"wheat",fontSize:"24px",fontWeight:800}}>plot  <span style={{marginLeft:"10px"}}>{modalData.data}</span></Typography>
                        </Grid>
                        <Grid item xs={4} sx={{border:"3px solid wheat",borderRight:"none",height:"50px",display:"flex",alignItems:"center"}}>
                           <Typography sx={{textTransform:"uppercase",color:"wheat",fontSize:"18px",ml:"15px"}}>Status</Typography>
                        </Grid>
                        <Grid item xs={8} sx={{border:"3px solid wheat",height:"50px",display:"flex",alignItems:"center"}}>
                           <Typography sx={{color:"wheat",fontSize:"18px",ml:"15px"}}>Available</Typography>
                        </Grid>
                        <Grid item xs={4} sx={{border:"3px solid wheat",borderRight:"none",borderTop:"none",height:"50px",display:"flex",alignItems:"center"}}>
                           <Typography sx={{color:"wheat",fontSize:"18px",ml:"15px"}}>Facing</Typography>
                        </Grid>
                        <Grid item xs={8} sx={{border:"3px solid wheat",height:"50px",borderTop:"none",display:"flex",alignItems:"center"}}>
                           <Typography sx={{color:"wheat",fontSize:"18px",ml:"15px"}}>East</Typography>
                        </Grid>

                        <Grid item xs={4} sx={{border:"3px solid wheat",borderRight:"none",borderTop:"none",height:"70px",display:"flex",alignItems:"center"}}>
                           <Typography sx={{color:"wheat",fontSize:"18px",ml:"15px"}}>Measurement</Typography>
                        </Grid>
                        <Grid item xs={8} sx={{border:"3px solid wheat",height:"70px",borderTop:"none",display:"flex",alignItems:"center"}}>
                           <Typography sx={{color:"wheat",fontSize:"18px",ml:"15px"}}>North : 40, East : 30, South : 40,West : 30</Typography>
                        </Grid>

                        <Grid item xs={4} sx={{border:"3px solid wheat",borderRight:"none",borderTop:"none",height:"50px",display:"flex",alignItems:"center"}}>
                           <Typography sx={{color:"wheat",fontSize:"18px",ml:"15px"}}>Area(sq.ft)</Typography>
                        </Grid>
                        <Grid item xs={8} sx={{border:"3px solid wheat",height:"50px",borderTop:"none",display:"flex",alignItems:"center"}}>
                           <Typography sx={{color:"wheat",fontSize:"18px",ml:"15px"}}>1200</Typography>
                        </Grid>


                        <Grid item xs={12} sx={{border:"3px solid wheat",borderTop:"none",height:"50px",display:"flex",alignItems:"center"}}>
                           <Typography sx={{color:"wheat",fontSize:"18px",ml:"15px"}}>Contact us to know more details or to book this plot</Typography>
                        </Grid>
                        
                        <Grid item xs={12} sx={{border:"3px solid wheat",borderTop:"none",height:"50px",display:"flex",alignItems:"center"}}>
                           <Typography sx={{color:"wheat",fontSize:"12px",ml:"15px",pl:"15px"}}>Measurements, facing & booking status may not be accurate, contact head office for accurate information</Typography>
                        </Grid>

                        
                    </Grid>

                </Paper>
            </Modal>
        </>
    )
}

export default ModalPage