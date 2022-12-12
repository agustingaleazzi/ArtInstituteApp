import * as React from 'react';
import { Link } from 'react-router-dom';


import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Tarjeta = (props) => {
  const obra = props;
  return (
    <Card sx={{
      width: 320,
      textDecoration: 'none'
    }}>
      <CardHeader
        title={obra.title}
        subheader={obra.artist_title ? obra.artist_title : 'Desconocido'}
      />
      <CardMedia
        component="img"
        height="194"
        src={'https://www.artic.edu/iiif/2/' + obra.image_id + '/full/843,/0/default.jpg'}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Fecha de creacion: {obra.date_display}
        </Typography>
        <Link className='link' to={`../detalles/${obra.id}`} >Detalles de la obra

        </Link>
        

      </CardContent>

    </Card>
  );
}

export default Tarjeta;