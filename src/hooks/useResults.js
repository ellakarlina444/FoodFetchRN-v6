import { useState,useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
    const [resultsApi,setResultsApi] = useState([]);

    const searchAPI=async(searchValue)=>{
        // console.log('cek call',yelp.head());
        let res = null;
        try {
            res= await yelp.get('/search',{ //jadinya seperti ini kalo tambah parm option https://api.yelp.com/v3/business/search&limit=50&term=&location='san jose'
                params: {
                    limit: 50,
                    // term, //short term:term
                    term:searchValue,
                    location:'san jose'
                }
            });
            console.log('res:',res);
            setResultsApi(res.data.businesses);

            //free api http://resultsApi.hipolabs.com/search?country=United+States&limit=3
            // res= await yelp.get('/search',{ //jadinya seperti ini kalo tambah parm option https://api.yelp.com/v3/business/search&limit=50&term=&location='san jose'
            //     params: {
            //         // country: 'United States',
            //         country: searchValue,
            //         limit:3
            //     }
            // });
            // console.log('res:',res.data);
            
          } catch (err) {
            // console.log('heh:',err.request._header)
            console.error("Error response:",err);
            console.error(err.response.data);    // ***
            console.error(err.response.status);  // ***
            console.error(err.response.headers); // ***
          } finally {
            setResultsApi(res.data.businesses);
          }
        
    }
    useEffect(()=>{ //call function once the element is rendered 
        searchAPI('United States');
    },[])
    return [searchAPI,resultsApi];
    // useEffect(()=>{ //call function every time/loop
    //     searchAPI('United States');
    // })
    // useEffect(()=>{ //call function once the element is rendered and the value changes
    //     searchAPI('United States');
    // },[value])
    const search = () => { //fungsi asynchronously dengan then 
        res=yelp.get('/search',{ //jadinya seperti ini kalo tambah parm option https://api.yelp.com/v3/business/search&limit=50&term=&location='san jose'
            params: {
                // country: 'United States',
                country: term,
                limit:3
            }
        }).then((data)=>{
            console.log('datanya:',data);
        })
            
    }

    
}