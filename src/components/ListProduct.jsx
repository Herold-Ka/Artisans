import React from 'react'
import Data from "../data/Data"
import { Card, CardContent, CardMedia, Box, Typography, Button } from '@mui/material'

const ListProduct = () => {
  return (
    <React.Fragment>
        <Box sx={{display:'flex', position:'absolute', top:'200px'}}>
        {
            Data.map((item, index) => (
                item.available === true ?
                <Card key={index} sx={{display:'flex', justifyContent:'space-evenly', marginRight: 5, width:'275px', height:'160px'}}>
                    <CardMedia
                        component="img"
                        image='/img/imgPhone.jpeg'
                        sx={{width: 100}}
                        alt='image produit'
                    >
                        
                    </CardMedia>
                    <Box>
                        <CardContent>
                            <Typography variant="h1" fontSize={15}>
                                {item.name}
                            </Typography>
                            <Typography fontSize={11}>
                                Prix: {item.price} €
                            </Typography>
                            <Typography fontSize={11}>
                                Garantie: {item.warranty_years} ans
                            </Typography>
                            <Typography fontSize={11}>
                                Disponible: oui
                            </Typography>   
                            <Box sx={{display:'flex', flexDirection:'column', justifyContent:'space-evenly', height:'60px'}}>
                                <Button variant="outlined" color="error" sx={{height:'25px'}}>
                                    Supprimer
                                </Button>   
                                <Button variant="outlined" color="info" sx={{height:'25px'}}>
                                    Modifier
                                </Button> 
                            </Box>                 
                        </CardContent>
                    </Box>
                </Card> : 
                <Card key={index} sx={{display:'flex', justifyContent:'space-evenly', marginRight: 5, width:'295px', height:'160px'}}>
                <CardMedia
                    component="img"
                    image='/img/imgPhone.jpeg'
                    sx={{width: 100}}
                    alt='image produit'
                >
                    
                </CardMedia>
                <Box>
                    <CardContent>
                        <Typography variant="h1" fontSize={15}>
                            {item.name}
                        </Typography>
                        <Typography fontSize={11}>
                            Prix: {item.price} €
                        </Typography>
                        <Typography fontSize={11}>
                            Garantie: {item.warranty_years} ans
                        </Typography>
                        <Typography fontSize={11}>
                            Disponible: Rupture de stock
                        </Typography> 
                        <Box sx={{display:'flex', flexDirection:'column', justifyContent:'space-evenly', height:'60px'}}>
                                <Button variant="outlined" color="error" sx={{height:'25px'}}>
                                    Supprimer
                                </Button>   
                                <Button variant="outlined" color="info" sx={{height:'25px'}}>
                                    Modifier
                                </Button> 
                            </Box>    
                        
                    </CardContent>
                </Box>
            </Card>
            ))
        }
        </Box>
    </React.Fragment>
  )
}

export default ListProduct