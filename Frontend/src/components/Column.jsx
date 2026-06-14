import { JobCard } from './JobCard.jsx'

export const Column = ({status,jobs})=>{
    return (
    <div className="column">
        <h1>{status}</h1>
        <div>
        {jobs.filter((job)=>job.status === status).map((job)=>{
            return <JobCard  key={job._id} job = {job}></JobCard>
        })}
        </div>
    </div>
    )
}