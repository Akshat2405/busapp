import React ,{useState}from 'react'
import locationGIF from '../Images/18-location-pin-outline.gif'
import 'animate.css';
import BusLayout from './BusLayout';
import {busData} from '../Data/file'
import  db from '../firebase-config';
import { fromJSON } from 'postcss';
function Search(props) {
    const [autosrc,setAutosrc]=useState({
        activeSuggestion: 0,
        filteredSuggestions: [],
        showSuggestions: false,
    })
    const suggestions=["ISBT Maharana Pratap Bus (T)",
    "ISBT Kashmiri Gate",
    "Shyam Giri Mandir",
    "Shastri Park",
    "Dharam Pura",
    "Seelam Pur",
    "Welcome",
    "Kanti Nagar",
    "East Azad Nagar",
    "Swarn Cinema",
    "East Krishna Nagar",
    "Hans Appartment",
    "Arjun Nagar",
    "Radhey Puri",
    "Jagatpuri A-Block",
    "Jagatpuri F-Block",
    "Hasanpur Depot",
    "Hasanpur Village",
    "Gazipur Depot",
    "Nehru Place Terminal",
    "Paras Cinema",
    "Kailash Colony",
    "LSR College",
    "Kendriya Vidalya",
    "Central School",
    "Mool Chand Hospital",
    "Deffence Colony",
    "Panth Nagar",
    "Lodhi Hoetl",
    "Obrai Hotel",
    "DPS School",
    "Sunder Nagar",
    "Zoo",
    "National Stadium",
    "Pargati Madain",
    "Railway X-ing",
    "IP Depot",
    "IP Power Station",
    "ITO",
    "Delhi Secretariat",
    "Rainy Well",
    "Lakshmi Nagar",
    "Shakarpur",
    "Nirman Vihar",
    "Sawath Vihar",
    "New Rajdhani Enclave",
    "KK X-ing",
    "Gagn Vihar",
    "Jagat Puri F Block",
    "Jagat Puri A Block",
    "Radhe Puri",
    "Arjun Nagar",
    "Hans Apartment",
    "East Krishna Nagar",
    "Swarn Cinema",
    "East Azad Nagar",
    "Jharkhandi Colony",
    "Welcome Metro Station",
    "Welcome",
    "Seelam Pur East",
    "Seelam Pur",
    "Zafrabad",
    "Zafrabad School",
    "Babar Pur",
    "Chajju Pur",
    "Jyoti Colony",
    "Durga Puri Extension",
    "Jagat Puri",
    "Nand Nagari C Block",
    "GTB Crossing"]
    const [src,setSrc]=useState('');
    const [dest,setDest]=useState('');
    const [usefulArray, setusefulArray] = useState()
    const onChange = e => {
        const userInput = e.currentTarget.value;
      
        const filteredSuggestions = suggestions.filter(
          suggestion =>
            suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );
        setAutosrc({
          activeSuggestion: 0,
          filteredSuggestions,
          showSuggestions: true,
        });
        setSrc(e.target.value);
      };
      const onClick = e => {
        setAutosrc({
          activeSuggestion: 0,
          filteredSuggestions: [],
          showSuggestions: false,
        });
        setSrc(e.currentTarget.innerText);
      };
      const onKeyDown = e => {
        const { activeSuggestion, filteredSuggestions,showSuggestions } = autosrc;
      
        if (e.keyCode === 13) {
          setAutosrc({
            activeSuggestion: 0,
            showSuggestions: false,
            filteredSuggestions:[filteredSuggestions]
          });
          setSrc(filteredSuggestions[activeSuggestion]);
        } else if (e.keyCode === 38) {
          if (activeSuggestion === 0) {
            return;
          }
          setAutosrc({ 
            activeSuggestion: [activeSuggestion],
            showSuggestions: [showSuggestions],
            activeSuggestion: activeSuggestion - 1 
          });
        }
        else if (e.keyCode === 40) {
          if (activeSuggestion - 1 === filteredSuggestions.length) {
            return;
          }
          setAutosrc({ activeSuggestion: [activeSuggestion],
            showSuggestions: [showSuggestions],
            activeSuggestion: activeSuggestion +1  });
        }
      };
      let suggestionsListComponent;
      if (autosrc.showSuggestions && src) {
        if (autosrc.filteredSuggestions.length) {
          suggestionsListComponent = (
            <ul class="suggestions">
              {autosrc.filteredSuggestions.map((suggestion, index) => {
                let className;
      
                // Flag the active suggestion with a class
                if (index === autosrc.activeSuggestion) {
                  className = "suggestion-active";
                }
                return (
                  <li className={className} key={suggestion} onClick={onClick}>
                    {suggestion}
                  </li>
                );
              })}
            </ul>
          );
        } else {
          suggestionsListComponent = (
            <div class="no-suggestions">
              <em>No suggestions available.</em>
            </div>
          );
        }
      }
    const searchStation=()=>{
        const ref=db.ref('/');
        let data;
        // const obj={};
        //     obj['165']={
        //         BUSES:{
        //             '1234':{
        //                 SEATS:{
        //                     S1:'EMPTY',
        //                     S2:'EMPTY',
        //                     S3:'EMPTY',
        //                     S4:'EMPTY',
        //                     S5:'EMPTY',
        //                     S6:'EMPTY',
        //                     S7:'EMPTY',
        //                     S8:'EMPTY',
        //                     S9:'EMPTY',
        //                     S10:'EMPTY',
        //                     S11:'EMPTY',
        //                     S12:'EMPTY',
        //                     S13:'EMPTY',
        //                     S14:'EMPTY',
        //                     S15:'EMPTY',
        //                     S16:'EMPTY',
        //                     S17:'EMPTY',
        //                     S18:'EMPTY',
        //                 },
        //                 OWNERS:{
        //                     S1:'NONE',
        //                     S2:'NONE',
        //                     S3:'NONE',
        //                     S4:'NONE',
        //                     S5:'NONE',
        //                     S6:'NONE',
        //                     S7:'NONE',
        //                     S8:'NONE',
        //                     S9:'NONE',
        //                     S10:'NONE',
        //                     S11:'NONE',
        //                     S12:'NONE',
        //                     S13:'NONE',
        //                     S14:'NONE',
        //                     S15:'NONE',
        //                     S16:'NONE',
        //                     S17:'NONE',
        //                     S18:'NONE',
        //                 }
        //             },
        //             '2345':{
        //                 SEATS:{
        //                     S1:'EMPTY',
        //                     S2:'EMPTY',
        //                     S3:'EMPTY',
        //                     S4:'EMPTY',
        //                     S5:'EMPTY',
        //                     S6:'EMPTY',
        //                     S7:'EMPTY',
        //                     S8:'EMPTY',
        //                     S9:'EMPTY',
        //                     S10:'EMPTY',
        //                     S11:'EMPTY',
        //                     S12:'EMPTY',
        //                     S13:'EMPTY',
        //                     S14:'EMPTY',
        //                     S15:'EMPTY',
        //                     S16:'EMPTY',
        //                     S17:'EMPTY',
        //                     S18:'EMPTY',
        //                 },
        //                 OWNERS:{
        //                     S1:'NONE',
        //                     S2:'NONE',
        //                     S3:'NONE',
        //                     S4:'NONE',
        //                     S5:'NONE',
        //                     S6:'NONE',
        //                     S7:'NONE',
        //                     S8:'NONE',
        //                     S9:'NONE',
        //                     S10:'NONE',
        //                     S11:'NONE',
        //                     S12:'NONE',
        //                     S13:'NONE',
        //                     S14:'NONE',
        //                     S15:'NONE',
        //                     S16:'NONE',
        //                     S17:'NONE',
        //                     S18:'NONE',
        //                 }
        //             },
        //             '4567':{
        //                 SEATS:{
        //                     S1:'EMPTY',
        //                     S2:'EMPTY',
        //                     S3:'EMPTY',
        //                     S4:'EMPTY',
        //                     S5:'EMPTY',
        //                     S6:'EMPTY',
        //                     S7:'EMPTY',
        //                     S8:'EMPTY',
        //                     S9:'EMPTY',
        //                     S10:'EMPTY',
        //                     S11:'EMPTY',
        //                     S12:'EMPTY',
        //                     S13:'EMPTY',
        //                     S14:'EMPTY',
        //                     S15:'EMPTY',
        //                     S16:'EMPTY',
        //                     S17:'EMPTY',
        //                     S18:'EMPTY',
        //                 },
        //                 OWNERS:{
        //                     S1:'NONE',
        //                     S2:'NONE',
        //                     S3:'NONE',
        //                     S4:'NONE',
        //                     S5:'NONE',
        //                     S6:'NONE',
        //                     S7:'NONE',
        //                     S8:'NONE',
        //                     S9:'NONE',
        //                     S10:'NONE',
        //                     S11:'NONE',
        //                     S12:'NONE',
        //                     S13:'NONE',
        //                     S14:'NONE',
        //                     S15:'NONE',
        //                     S16:'NONE',
        //                     S17:'NONE',
        //                     S18:'NONE',
        //                 }
        //             }

        //         },
        //         STATION:busData['165DOWN'],
        //     }
        // ref.set(obj);
        ref.on("value",(snapshot)=>{
            data=snapshot.val();
        })
        const usefuldata=[];
        for(let key in data){
            const obj=data[key]['STATION'];
            let cnt=0;
            for(let i in obj){
                if(obj[i]===src || obj[i]==dest){
                    cnt=cnt+1;
                }
            }
            if(cnt===2){
                for(let i in data[key]['BUSES']){
                    usefuldata.push([key,i]);
                }
            }
        }
        setusefulArray(usefuldata);
    }
    const showData=()=>{
        if(usefulArray!==undefined){
            // let dt=[];
            // let idx=0;
            // for(let key in usefulArray){
            //     idx=idx+1;
            //     let id=key;
            //      dt.push (
            //         <tr>
            //         <th scope="row">{idx}</th>
            //         <td>{usefulArray[key]['NAME']}</td>
            //         <td>{src}</td>
            //         <td>{dest}</td>
            //         <td><BusLayout id={id}/></td>
            //     </tr>);
            // }
            // return dt;
            return usefulArray.map((e,idx)=>{
                return (<tr>
                <th scope="row">{idx+1}</th>
                <td>{e[0]}</td>
                <td>{e[1]}</td>
                <td>{src}</td>
                <td>{dest}</td>
                <td><BusLayout id={e[0]} number={e[1]} src={src} dest={dest}/></td>
              </tr>);
            });
        }
    }
    return (
        <>
            {props.userDate && <div className="container-fluid mt-5 about-style animate__animated animate__animate__fadeInDown">
                <div className="row" ref={props.myRef}>
                    <div className="col-md-10 col-12 mx-auto">
                        <h1 className="text-center main-heading "  style={{'color':'green'}}>SEARCH</h1>
                        <div className="row">
                            <div  className="col-md-6 col-12 hero-text order-md-0 order-1 d-flex justify-content-center align-items-start flex-column">
                                <figure>
                                    <img id="code_img" src={locationGIF} alt="herosectionimage"/>
                                </figure>
                                
                            </div>
                            <div className="col-md-6 col-12 hero-text order-md-0 order-0">
                            <div class="row g-3 align-items-center mt-4">
                            <div class="col-auto">
                                <label for="inputPassword6" class="col-form-label">Source </label>
                            </div>
                            <div class="col-auto">
                                <input type="text" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" value={src} onChange={onChange} onClick={onClick} onKeyDown={onKeyDown}/>
                                {suggestionsListComponent}
                            </div>
                            </div>
                            <div class="row g-3 align-items-center mt-4">
                            <div class="col-auto">
                                <label for="inputPassword6" class="col-form-label">Destination </label>
                            </div>
                            <div class="col-auto">
                                <input type="text" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" value={dest} onChange={(e)=>{setDest(e.target.value)}}/>
                            </div>
                            </div>
                            <button type="button" class="btn btn-success mt-5" onClick={searchStation}>Submit</button> 
                            </div>

                            
                        </div>
                    </div>

                </div>
            </div>
}
        {
            usefulArray && 
            <div className="container-fluid mt-5 about-style animate__animated animate__animate__fadeInDown">
                <div className="row">
                    <div className="col-md-10 col-12 mx-auto"><table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Bus Name</th>
                <th scope="col">Bus Number</th>
                <th scope="col">Source</th>
                <th scope="col">Destination</th>
                <th scope="col">Book</th>
              </tr>
            </thead>
            
            <tbody>
            {showData()}
            </tbody>
          </table>
          </div></div></div>
        }
        </>
    )
}

export default Search
