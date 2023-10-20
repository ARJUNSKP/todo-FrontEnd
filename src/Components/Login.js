import React, { useState } from 'react';
import { Container,Row,Col} from 'react-bootstrap';
import './Login.css';
import uniqid from 'uniqid';
import {registerUser,userLogin} from '../servise/allapi';
import { useNavigate }  from 'react-router-dom'


function Login() {

    
    const navigate = useNavigate();
    const [usersinup,Setusersinup]=useState(false)
    const [inputValue,setInputValue]=useState({
        email:'',
        psw:''
    })
    const [conpsw,setConpsw]=useState({
        cpsw:''
    })

    const signupbtn=()=>{
        Setusersinup(true)
    }
    const loginbtn=()=>{
        Setusersinup(false)
    }
    const inputdata=(e)=>{
        const {value,name}=e.target
        setInputValue({...inputValue,[name]:value})
    }
    const conformpsw=(e)=>{
        const {value,name}=e.target
        setConpsw({...conpsw,[name]:value})
    }
    
    const Loginuser=async()=>{
        const Responce= await userLogin({email:inputValue.email,psw:inputValue.psw})
        if(Responce.status>=200&&Responce.status<300){
            console.log(Responce.data.uid)
            localStorage.setItem("uid",Responce.data.uid)
            navigate("/home")
        }else{
            alert("username or password is incorrect")
        }
    }

    const signupinuser=async()=>{
        const Responce = await registerUser(inputValue)
        if(Responce.status>=200&&Responce.status<300){
            navigate("/")
        }else{
            alert(Responce.data)
        }
        
    }
    console.log(inputValue)
  return (
    <div style={{backgroundColor:'#7c7c7cca', height:'100vh'}}>
        <Container>
            <Row id="rowdiv">
                <Col>
                </Col>
                <Col sm={9} md={7} lg={5} xs={9}>
                    <div className='inputbox bg-light' style={{height:'25rem',width:'100%',borderRadius:'22% 78% 65% 35% / 30% 30% 70% 70% ',background: 'linear-gradient(69.5deg, rgb(251, 0, 0) -0.5%, rgb(3, 10, 252) 97.4%)'}}>
                        <h2 style={{display:usersinup?'none':'block'}} className='logint pt-5 pb-3 text-center'>Login</h2>
                        <h2 style={{display:usersinup?'block':'none'}} className='logint pt-5 pb-3 text-center'>Signup</h2>
                        <label className='text-start' htmlFor='email'>Email</label>
                        <input type='email' name='email' onChange={(e)=>inputdata(e)} placeholder='Email' className='w-50' id='email'></input>
                        <label className='text-start'  htmlFor='password'>Password</label>
                        <input type='password' name='psw' onChange={(e)=>inputdata(e)} placeholder='Password' className='w-50 mb-1' id='password'></input>
                        <label style={{display:usersinup?'block':'none'}} className='text-start' htmlFor='cpassword'>Password</label>
                        <input style={{display:usersinup?'block':'none'}} name='cpsw' onChange={(e)=>conformpsw(e)} type='password' placeholder='Conform Password' className='w-50 mb-1' id='cpassword'></input>
                        <label style={{fontSize:'14px',display:usersinup?'none':'block'}}>do not have an account<b onClick={signupbtn}>SignUp</b></label>
                        <label style={{fontSize:'14px',display:usersinup?'block':'none'}}><b onClick={loginbtn}>Login</b></label>
                        <button style={{display:usersinup?'none':'block'}} className="btn btn-outline-success mt-3" type='button' onClick={Loginuser} >Login</button>
                        <button style={{display:usersinup?'block':'none'}} className="btn btn-outline-success mt-3" type='button'onClick={signupinuser}>SignUp</button>
                    </div>
                </Col>
                <Col>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Login