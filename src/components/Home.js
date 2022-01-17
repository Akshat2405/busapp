import React, { useState,useRef } from 'react';
import DatePicker from 'react-date-picker';
import topImg from '../Images/968-bus-front-outline.svg'
import Search from './Search';

function Home() {
    const myRef = useRef(null)
    const [value, onChange] = useState(new Date());
    const [gender, setGender]=useState('');
    const executeScroll = () => myRef.current.scrollIntoView()    
    const [user,setUser]=useState({
        userDate:'',
        userGender:''
    })
    const maleGender=()=>{
        setGender('Male');
        console.log(gender);
    }
    const femaleGender=()=>{
        setGender('Female');
        console.log(gender);
    }

    const submitForm=()=>{
        setUser({
            userDate:value,
            userGender:gender
        });
        executeScroll();
        console.log('run');
        onChange(new Date());
        setGender('');
    }
    return (
        <>
         <div className="container-fluid mt-4">
        <div className="row">
        <div className="col-md-10 col-12 mx-auto mt-4">
        <div className="row">         
            <div className="col-md-6 col-12 hero-text order-md-0 order-1 d-flex justify-content-center align-items-start flex-column">
                <h1 className='mb-5'>Welcome to Bus Ticket Booking <span className="badge bg-success">Website</span></h1>
                <h1 className='mt-4'>ENter Date of Birth</h1>
                <DatePicker
                    onChange={onChange}
                    value={value}
                    maxDate={new Date()}
                />
                <h1 className='mt-4'>ENter Gender</h1>
                <div className='mb-5'>
                <div className="form-check form-check-inline" >
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="success-outlined" value="option1" onChange={maleGender} style={{'backgroundColor':'green'}}/>
                <label className="form-check-label" for="success-outlined">Male</label>
                </div>
                <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="success-outlined" value="option2" onChange={femaleGender} style={{'backgroundColor':'green'}} />
                <label className="form-check-label" for="success-outlined">Female</label>
                </div>
                </div>
                <button type="button" class="btn btn-success" onClick={submitForm}>Submit</button>       
            </div>
                    <div className="col-md-6 col-12 hero-text order-md-0 order-0">
                        <figure>
                            <img id="top_img" src={topImg} alt="herosectionimage"/>
                        </figure>
                    </div>
                </div>
            
        </div>
        </div>
        </div>
        <Search  myRef={myRef}userDate={user.userDate} userGender={user.userGender}/>
        </>
    )
}

export default Home
