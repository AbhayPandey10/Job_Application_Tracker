import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import {JobsUpdatedContext} from '../Context/JobsUpdatedContext.js'

export const UpdaterForm = ({job,setFormDisplay})=>{
    const {jobsUpdated,setJobsUpdated} = useContext(JobsUpdatedContext)
  
    const {
        register,
        handleSubmit,
        formState : {isSubmitting}
        } = useForm();

    const onSubmit = async (data)=>{
        const res = await fetch(`http://localhost:3000/jobs/${job._id}`,{
            method : "PUT",
            headers : {
            "Content-Type": "application/json",
            },
            body : JSON.stringify(data)
        })
        setFormDisplay(false);
        const result = await res.json()
        setJobsUpdated((prev) => prev + 1)
        console.log(result)
        }

    return (
        <form onSubmit = {handleSubmit(onSubmit)}>
        <select {...register("status",{required:{value:true,message:"Status is required"}})}>
            <option value="">Select Status</option>
            <option value="Wishlist">Wishlist</option>
            <option value="Applied">Applied</option>
            <option value="Interviewing">Interviewing</option>
            <option value="Offer">Offer</option>
            <option value="Rejected">Rejected</option>
        </select>

        <button
            type = "submit"
            disabled = {isSubmitting}
        >
            {isSubmitting ? "Submitting" : "Submit"}
        </button>

        </form>
    )
}