import { useState, useEffect, useContext, createContext } from 'react'
import { useForm } from 'react-hook-form'
import {JobsUpdatedContext} from './Context/JobsUpdatedContext.js'
import {JobForm} from "./components/JobForm.jsx"
import {UpdaterForm} from "./components/UpdaterForm.jsx"
import {JobCard} from "./components/JobCard.jsx"
import {Column} from "./components/Column.jsx"
import {Board} from "./components/Board.jsx"
import './App.css'

function App() {
  const [jobs,setJobs] = useState([])
  const [jobsUpdated, setJobsUpdated] = useState(0)

  useEffect(()=>{
     
    async function getJobs(){ 

      const response =  await fetch("http://localhost:3000/jobs")
      const data = await response.json()
      setJobs((prev)=>data.jobs)
      
    }
    
    getJobs()

  },[jobsUpdated])

  return (
  <div className="App">
    <JobsUpdatedContext.Provider value = {{jobsUpdated, setJobsUpdated}}>
    <div>
      <JobForm jobs = {jobs} setJobs = {setJobs}></JobForm>
    </div>
    <div>
      <Board jobs = {jobs}></Board>
    </div>
    </JobsUpdatedContext.Provider>
  </div>
  
)
}

export default App
