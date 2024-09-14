import React from 'react';
import Layout from './components/Layout';
import HeroBanner from './components/HeroBanner';
import RentalForm from './components/RentalForm';
import CarList from './components/CarList';

const Home = () => (
  <Layout>
    <HeroBanner />
    <RentalForm />
    <CarList />
  </Layout>
);

export default Home;