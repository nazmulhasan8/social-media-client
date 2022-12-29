import React from 'react';
import AllProducts2 from '../../ProductAvailable/AllProducts2';



import AllAdvertise from '../Categories/AllAdvertise';
import AllCategories from '../Categories/AllCategories';
import InfoSection from '../InfoSection';
import Slider from '../Slider';
import AddProducts from './AddProducts';


const Home = () => {
    return (
        <div className='mx-5 my-10'>
            <AddProducts></AddProducts>
            <AllProducts2></AllProducts2>

                  
            
            
        </div>
    );
};

export default Home;