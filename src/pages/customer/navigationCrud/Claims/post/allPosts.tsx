import { ArrowForwardRounded,LocationOn, MessageTwoTone, Person } from "@material-ui/icons"
import { Box, Button, Grid, Paper, styled } from "@mui/material"

export const AllPost = () => {
    // const color=['yellow','blue','green','grey']
    console.log(Math.floor(Math.random() * 5))
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'justify',
        color: theme.palette.text.secondary,
    }));
    return (
        <>
            <Grid container spacing={2} direction={'row'} p={0}>
                {[...new Array(8)].map(()=>{return <Grid textAlign={'left'} item xs={3} style={{height:'100%'}}>
                    <Item sx={{p:0}} className="card ">
                    <img style={{borderBottomRightRadius:'50%',objectFit:'fill',borderBottomLeftRadius:'50%',overflow:'hidden',height:'30dvh'}} className="col-12" src="../../../../../../public/Visitor/Login.png" alt="" />
                    <div className="card-img-overlay p-0">
                        <small>Country</small> 
                    </div>
                    <p><Person/></p>
                    <p><LocationOn/></p>
                    <Box className="d-flex justify-content-between">
                        <Button>
                            <MessageTwoTone/>
                        </Button>
                        <Button>
                            <ArrowForwardRounded/>
                        </Button>
                    </Box>
                    </Item>
                </Grid>})}
            </Grid>
        </>
    )
}