import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import SwipeableViews from 'react-swipeable-views';
import { AppBar } from '@mui/material';
import { Divider } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import { Fragment } from 'react';


export default function CenteredTabs() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const handleChangeIndex = (index) => {
      setValue(index);
    };

  const StyledTabs = styled((props) => (
    <Tabs
      {...props}
      TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
  ))({
    '& .MuiTabs-indicator': {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: '#23585b',
    },
    '& .MuiTabs-indicatorSpan': {
      width: '100%',
      backgroundColor: '#23585b',
    },
  });
  
  const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
      textTransform: 'none',
      marginRight: theme.spacing(1),
      color: '#b5d1d3',
      '&.Mui-selected': {
        color: '#23585b',
      },
      '&.Mui-focusVisible': {
        backgroundColor: '#23585b',
      },
    }),
  );

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }

  

  return (
    <Fragment>
        <AppBar position="static" sx={{bgcolor:"#4d9296"}}>
      <StyledTabs value={value} onChange={handleChange} centered 
      >
        <StyledTab label="Hospitales" {...a11yProps(0)} />
        <StyledTab label="Clinicas" {...a11yProps(1)} />
        <StyledTab label="Doctores" {...a11yProps(2)} />
        <StyledTab label="Laboratorios" {...a11yProps(3)} />
      </StyledTabs>
        </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
            <Container>
            <h1>Hospitales</h1>
                <Card sx={{ display: 'flex' }}>
                    <CardMedia
                    component="img"
                    sx={{ width: 250, margin:"15px", height:250}}
                    image="/Hospital_A.jpg"
                    variant="outlined"
                    
                />
                    <Box sx={{ display: 'flex', flexDirection: 'column', marginTop:"25px" }} >
                        <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h4" sx={{color:"#4d9296"}}>
                        Hospital_A
                        </Typography>
                        <Typography variant="subtitle1" component="div" sx={{fontWeight:800}}>
                            Hospital
                        </Typography>
                        <br/>
                        <br/>
                        <Typography component="div">
                        Lorem ipsum dolor sit .amet, consectetur adipiscing elit. Nunc quis laoreet ex, ut vehicula ex.
                        </Typography>
                        </CardContent>
                    </Box>
                    </Card>
                    <br/>


                    <Card sx={{ display: 'flex' }}>
                    <CardMedia
                    component="img"
                    sx={{ width: 250, margin:"15px", height:250}}
                    image="/Hospital_B.jpg"
                    variant="outlined"
                    
                />
                    <Box sx={{ display: 'flex', flexDirection: 'column', marginTop:"25px" }} >
                        <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h4" sx={{color:"#4d9296"}}>
                        Hospital_B
                        </Typography>
                        <Typography variant="subtitle1" component="div" sx={{fontWeight:800}}>
                           Hospital
                        </Typography>
                        <br/>
                        <br/>
                        <Typography component="div">
                        Lorem ipsum dolor sit .amet, consectetur adipiscing elit. Nunc quis laoreet ex, ut vehicula ex.
                        </Typography>
                        </CardContent>
                    </Box>
                    </Card>
                    <br/>


                    <Card sx={{ display: 'flex' }}>
                    <CardMedia
                    component="img"
                    sx={{ width: 250, margin:"15px", height:250}}
                    image="/Hospital_A.jpg"
                    variant="outlined"
                    
                />
                    <Box sx={{ display: 'flex', flexDirection: 'column', marginTop:"25px" }} >
                        <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h4" sx={{color:"#4d9296"}}>
                        Hospital_C
                        </Typography>
                        <Typography variant="subtitle1" component="div" sx={{fontWeight:800}}>
                            Hospital
                        </Typography>
                        <br/>
                        <br/>
                        <Typography component="div">
                        Lorem ipsum dolor sit .amet, consectetur adipiscing elit. Nunc quis laoreet ex, ut vehicula ex.
                        </Typography>
                        </CardContent>
                    </Box>
                    </Card>
                    <br/>

                    <Card sx={{ display: 'flex' }}>
                    <CardMedia
                    component="img"
                    sx={{ width: 250, margin:"15px", height:250}}
                    image="/Hospital_B.jpg"
                    variant="outlined"
                    
                />
                    <Box sx={{ display: 'flex', flexDirection: 'column', marginTop:"25px" }} >
                        <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h4" sx={{color:"#4d9296"}}>
                        Hospital_D
                        </Typography>
                        <Typography variant="subtitle1" component="div" sx={{fontWeight:800}}>
                            Hospital
                        </Typography>
                        <br/>
                        <br/>
                        <Typography component="div">
                        Lorem ipsum dolor sit .amet, consectetur adipiscing elit. Nunc quis laoreet ex, ut vehicula ex.
                        </Typography>
                        </CardContent>
                    </Box>
                    </Card>
                    <br/>
                    
               
            </Container>
         
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
            <h1>Clinicas</h1>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        <Container fixed>
            <h1>Categorias</h1>
            <h2>Resultados</h2>
            <Divider />
            <br/>
            
                <Card sx={{ display: 'flex' }}>
                    <CardMedia
                    component="img"
                    sx={{ width: 250, margin:"15px", height:250}}
                    image="/doctor_A.jpg"
                    variant="outlined"
                    
                />
                    <Box sx={{ display: 'flex', flexDirection: 'column', marginTop:"25px" }} >
                        <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h4" sx={{color:"#4d9296"}}>
                            Pricila Flores García
                        </Typography>
                        <Typography variant="subtitle1" component="div" sx={{fontWeight:800}}>
                            Medico Familiar
                        </Typography>
                        <br/>
                        <br/>
                        <Typography component="div">
                        Lorem ipsum dolor sit .amet, consectetur adipiscing elit. Nunc quis laoreet ex, ut vehicula ex.
                        </Typography>
                        </CardContent>
                    </Box>
                    </Card>
                    <br/>


                    <Card sx={{ display: 'flex' }}>
                    <CardMedia
                    component="img"
                    sx={{ width: 250, margin:"15px", height:250}}
                    image="/doctor_A.jpg"
                    variant="outlined"
                    
                />
                    <Box sx={{ display: 'flex', flexDirection: 'column', marginTop:"25px" }} >
                        <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h4" sx={{color:"#4d9296"}}>
                            Pricila Flores García
                        </Typography>
                        <Typography variant="subtitle1" component="div" sx={{fontWeight:800}}>
                            Medico Familiar
                        </Typography>
                        <br/>
                        <br/>
                        <Typography component="div">
                        Lorem ipsum dolor sit .amet, consectetur adipiscing elit. Nunc quis laoreet ex, ut vehicula ex.
                        </Typography>
                        </CardContent>
                    </Box>
                    </Card>
                    <br/>


                    <Card sx={{ display: 'flex' }}>
                    <CardMedia
                    component="img"
                    sx={{ width: 250, margin:"15px", height:250}}
                    image="/doctor_A.jpg"
                    variant="outlined"
                    
                />
                    <Box sx={{ display: 'flex', flexDirection: 'column', marginTop:"25px" }} >
                        <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h4" sx={{color:"#4d9296"}}>
                            Pricila Flores García
                        </Typography>
                        <Typography variant="subtitle1" component="div" sx={{fontWeight:800}}>
                            Medico Familiar
                        </Typography>
                        <br/>
                        <br/>
                        <Typography component="div">
                        Lorem ipsum dolor sit .amet, consectetur adipiscing elit. Nunc quis laoreet ex, ut vehicula ex.
                        </Typography>
                        </CardContent>
                    </Box>
                    </Card>
                    <br/>

                    <Card sx={{ display: 'flex' }}>
                    <CardMedia
                    component="img"
                    sx={{ width: 250, margin:"15px", height:250}}
                    image="/doctor_A.jpg"
                    variant="outlined"
                    
                />
                    <Box sx={{ display: 'flex', flexDirection: 'column', marginTop:"25px" }} >
                        <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h4" sx={{color:"#4d9296"}}>
                            Pricila Flores García
                        </Typography>
                        <Typography variant="subtitle1" component="div" sx={{fontWeight:800}}>
                            Medico Familiar
                        </Typography>
                        <br/>
                        <br/>
                        <Typography component="div">
                        Lorem ipsum dolor sit .amet, consectetur adipiscing elit. Nunc quis laoreet ex, ut vehicula ex.
                        </Typography>
                        </CardContent>
                    </Box>
                    </Card>
                    <br/>
                    
                </Container>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
            <h1>Laboratorios</h1>
        </TabPanel>

      </SwipeableViews>
      </Fragment>
    
  );
}
