import { useState, useEffect, useContext } from 'react'
import {JobsUpdatedContext} from '../Context/JobsUpdatedContext.js'
import { UpdaterForm } from './UpdaterForm.jsx'

export const JobCard = ({job})=>{
    const [formDisplay,setFormDisplay] = useState(false)
    const {jobsUpdated,setJobsUpdated} = useContext(JobsUpdatedContext)


    const onClickUpdater = ()=>{
    setFormDisplay(true)
    }

    const onClickDeleter = async ()=>{
    const res = await fetch(`http://localhost:3000/jobs/${job._id}`,{
        method : "DELETE"
    })
    const result = await res.json()
    setJobsUpdated((prev) => prev + 1)
    console.log(result)
    }

    return (
    <div className="job-card">
        <p>
        {job.company}
        <br></br>
        {job.position}
        </p>
        <button 
        onClick = {onClickUpdater}
        >
        Update
        </button>
        <button 
        onClick = {onClickDeleter}
        >
        Delete
        </button>
        {formDisplay && <UpdaterForm setFormDisplay = {setFormDisplay} job = {job}/>}
    </div>
    )
}