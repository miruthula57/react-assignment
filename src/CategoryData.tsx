import { Container, Grid } from '@mui/material';
import { useState } from 'react';
import DataTable from './DataTable';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import TopHeader from './TopHeader';

const CategoryData = () => {

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleMenuClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <>
    <Navbar />
         <Grid p={2}> <TopHeader />  </Grid>
      <Container maxWidth="xl" sx={{ mt: -6 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={2}>  <Sidebar  onMenuClick={handleMenuClick}/>  </Grid>
          <Grid item xs={12} md={10} >   <DataTable category={selectedCategory}/> </Grid>
        </Grid>
      </Container> 
    </>
  );
};

export default CategoryData;
