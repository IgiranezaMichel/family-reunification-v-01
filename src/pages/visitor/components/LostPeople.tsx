/* eslint-disable @typescript-eslint/no-explicit-any */
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useLost } from '../../../controller/lost/query';
import { Avatar, Button, Typography } from '@mui/material';
import { LocationOn, Person } from '@material-ui/icons';
import './index.css'
import { Link } from 'react-router-dom';
export default function LostPeople() {
    const {response}=useLost();
  return (
    <section className=''>
    <Typography variant='h4' sx={{width: {sm:'100%',md:'80%',lg:'70%'}}} className='fw-bold display-6 m-auto'>
        Recent Lost people
    </Typography>
    <Box sx={{ width: {sm:'100%',md:'80%',lg:'70%',margin:'auto'}, height: '100%',overflow:'hidden'}}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {response.responseReady&&response.responseContent!=undefined&&response.responseContent.length!=0&&
        response.responseContent.map((item:any) => (
          <section className="">
            <ImageListItem key={item.id} className='border border-2'>
            <main className='card p-0 border-0 rounded-0 bg-transparent'>
            <img className='card-img rounded-0'
              src={item.profile}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar position="top" title={<div className='d-flex'><Avatar src={item.postedBy.profilePicture}/><div className='card d-flex justify-content-center bg-transparent text-white border-0 align-items-center'><small>{item.postedBy.firstName} {item.postedBy.lastName}</small></div></div>} />
            <ImageListItemBar position="below" title={<>
                <div><Person/>{item.name}</div>
                <div><LocationOn/>{item.address}</div>
            </>} />
            <div className="card-img-overlay rounded-0 ui-visiter-presentable-img justify-content-center align-items-center">
            <Link to={'/login'}><Button variant='contained'>Login</Button></Link>
          </div>
            </main>
          </ImageListItem>
         
          </section>
        ))}
      </ImageList>
    </Box>
    </section>
  );
}

