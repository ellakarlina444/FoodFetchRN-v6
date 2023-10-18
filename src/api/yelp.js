import axios from 'axios';

export default axios.create({
 baseURL: 'https://api.yelp.com/v3/businesses',
//  baseURL: 'http://universities.hipolabs.com',
 headers: {
   
   Authorization:'Bearer t-vMiLYJ2voqk0NXZs_OMvwpvTAVhH1QERT7UyF5xRYj1XcJzyFINiJMhiTJofnlJotRIjIEmG5RH99DZJkfEtlLHHPj5cSj7QSTeYIovPrIR-ftEqR6PbPOaDIpZXYx', //api key
   // 'Content-Type': 'application/json'
   },
//  params: {
//     country: 'United States',
//     limit:3 
//  }
 
});