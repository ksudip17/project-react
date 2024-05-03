import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';


export default function InfoBox({ info }) {
    const INTIAL_URL = "https://images.unsplash.com/photo-1672226405717-697c84f48f9e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D" 
    

    let HOT_URL = "https://images.unsplash.com/photo-1447601932606-2b63e2e64331?q=80&w=1879&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    let COLD_URL = "https://images.pexels.com/photos/2394979/pexels-photo-2394979.jpeg?auto=compress&cs=tinysrgb&w=600";

    let RAIN_URL = "https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

    return(
    <div className="InfoBox">
    <div className='cardContainer'>
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL : info.temp > 20 ? HOT_URL : COLD_URL}  
        title="dusty-weather"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 20 ? <WbSunnyIcon/> : < AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" color="text.secondary" component="span">
            <p>Temperature - {info.temp}&deg;C</p>
            <p>Humidity - {info.humidity}</p>
            <p>Presssure - {info.pressure}</p>
            <p>MinTemp - {info.tempMin}&deg;C</p>
            <p>MaxTemp - {info.tempMax}&deg;C</p>
            <p>The Weather feels Like - {info.feelslike}&deg;C</p>
            <p>Weather - <b>{info.weather}</b></p>
        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
    );
}