import React from "react";
import "./Home.css";
import { AiOutlineClose, AiOutlineArrowRight } from "react-icons/ai";
import { BsMenuUp } from "react-icons/bs";
import { GrAdd } from "react-icons/gr";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import {addTask,getAlltask,deleteTaskData} from '../servise/allapi';
import { useEffect } from "react";
import { useNavigate }  from 'react-router-dom';
import { AiOutlineDelete } from 'react-icons/ai'


function Home() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [addtaskData,setAddtaskData]=useState({
    tname:'',
    startdate:'',
    enddate:''
  })
  const navigate = useNavigate();
  const tasknamedate=(e)=>{
    const {value,name}=e.target
    setAddtaskData({...addtaskData,[name]:value})
  }
  const submit=async()=>{
    if(localStorage.getItem('uid')){
      const uid=localStorage.getItem('uid')
      const Responce= await addTask(uid,addtaskData)
      if(Responce.status>=200 || Responce.status<300){
        setShow(false)
      }
      else{
        setShow(false)
      }
    }
  }
  
  
  const [tabcloss, setTabcloss] = useState(true);

  const closs = () => {
    setTabcloss(false);
  };
  const opeanSidebar = () => {
    setTabcloss(true);
  };
  const todayDate=()=>{
    const DataChange=new Date().toISOString().slice(0, 10)
    setAddtaskData({...addtaskData,['startdate']:DataChange})
  }

  const [allTask,setAllTask]=useState([])
  const getAlltaskData=async()=>{
    if(localStorage.getItem('uid')){
      let uid=localStorage.getItem('uid')

    const Responce= await getAlltask(uid)
    if(Responce.status>=200 || Responce.status<300){
      setAllTask(Responce.data)
    }
    }
  }
  const logout=()=>{
    localStorage.clear()
    navigate('/')
  }
  const deleteTask=async(tname)=>{
    if(localStorage.getItem('uid')){
      const uid=localStorage.getItem('uid')
      const Responce = await deleteTaskData(uid,{tname})
      console.log(Responce)
    }
  }

  useEffect(()=>{
    todayDate()
    getAlltaskData()
  },[allTask])
  return (
    <div>
      {
        <header>
          <div id="menuicon" style={{ display: tabcloss ? "none" : "block" }}>
            <label
              className="mx-4 mt-3"
              style={{ fontSize: "2rem" }}
              onClick={opeanSidebar}
            >
              <BsMenuUp />
            </label>
          </div>
        </header>
      }
      {
        <div style={{ display: "flex" }}>
          <div>
            <div id="slider" style={{ display: tabcloss ? "block" : "none" }}>
              <div className="sliderHead">
                <h4>profile</h4>
                <h6 style={{ fontSize: "1.5rem" }} onClick={() => closs()}>
                  <AiOutlineClose />
                </h6>
              </div>
              <div className="addbtn">
                <Button variant="danger" className="w-100" onClick={handleShow}>
                  <GrAdd className="mb-1 mx-1" />
                  Add task
                </Button>
              </div>
              <div className="candent">
                <label className="my-1">
                  Inbox <AiOutlineArrowRight />
                </label>
                <label onClick={logout}>
                  LogOut <AiOutlineArrowRight />
                </label>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {allTask.length>0?allTask.map(i=>(
                <div id="condiner" className="mt-5 mx-3">
                <div id="taskcondent">
                  <div className="taskHead">
                    <h3 className="me-2">{i.tname.length>20?i.tname.slice(1,20)+"...":i.tname}</h3>
                    <label className="mt-2">End Date:-{i.enddate}</label>
                    <div style={{display:'flex'}}>
                      <label for="chuck" className="mt-2 ms-3 me-2">
                        Completed
                      </label>
                      <input id="chuck" type="checkbox"></input>
                    </div>
                    <label className='deleteicon text-end fs-3' onClick={()=>deleteTask(i.tname)} ><AiOutlineDelete/></label>
                  </div>
                </div>
              </div>
            )):
            <div id="condiner" className="mt-5 mx-5">
            <div id="taskcondent">
              <div id="taskHead">
                <h3 className="me-2">Today No Task</h3>
              </div>
            </div>
          </div>
            }
            <label className='text-danger mt-2' type='button'onClick={handleShow}  style={{marginLeft:'5.5rem'}}>Add task</label>
          </div>
        </div>
      }
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className=''style={{display:'flex',flexDirection:'column'}}>
            <label htmlFor='tname'>Task Name</label>
            <input type='text' onChange={(e)=>tasknamedate(e)} placeholder='Ether Task' id='taskid' name='tname' className='w-75'></input>
              <label className='mt-2' htmlFor='tid'>Completed Date:-</label>
            <input  onChange={(e)=>tasknamedate(e)} type='Date' className='w-50' id='tid' name='enddate'/>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={submit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Home;
