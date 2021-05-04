import React,{useState,useEffect} from 'react';

const Home = () => {

    const [title,settitle] = useState('am');
    const [data, setdata] = useState();
    function Change (evt){
        settitle(evt.target.value);
    }
    useEffect(() => {
      const covid = setTimeout( function(){
          if(title.length === 2){
            fetch(`https://corona-api.com/countries/${title}`)
            .then(stream => stream.json())
            .then(
                results => setdata(results.data)
            )
          }
    

       },1000);

      
       
        return () => {
           clearTimeout(covid)
        };
       
    }, [title]);
    let name = '';
    let confirmed = '';
    let population = '';
    let deaths = '';
    let recovered = '';
    let today_confirmed = '';
    let today_deaths = "";
    if(data !== undefined){
          name = data.name;
          confirmed = data.latest_data.confirmed;
          recovered = data.latest_data.recovered;
          population =   data.population ;
          deaths =   data.latest_data.deaths;
          today_confirmed = data.today.confirmed;
          today_deaths = data.today.deaths;

    }
   
    return (
        <div className='container'>
               <div className='cv'>Covid 19</div>
           <input type='text' value={title}
            onChange ={Change} className='inp'
            />
         
            <div className='content'>
                <div className='all'>
                    
                    <h1>{name} </h1> 
                    <div className='pop'>Population - {population}</div>
                    <div className='confirmed'>Confirmed - {confirmed} </div>
                    <div className='d'>Deaths - {deaths} </div>
                    <div className='rec'>Recovered - {recovered} </div>

                </div>
                <div className='today'>
                    <h2>Today</h2>
                    <div className='confirmed'>Confirmed - {today_confirmed}</div>
                    <div className='d'>Deaths - {today_deaths}</div>
                </div>
            </div>
         
         </div>
    );
}

export default Home;
