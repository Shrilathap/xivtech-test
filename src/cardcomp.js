import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const MediaControlCard=(props)=>{
    const {ele}=props
  return (
    <div>
    <Card  sx={{ display: 'flex' ,maxWidth:1000}}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h2">
            {ele.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {ele.description}
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{height:400, width: 500 }}
        image={ele.img}
        alt={ele.img}
      />
    </Card>
    <br/>
    </div>
  )
}
export default MediaControlCard