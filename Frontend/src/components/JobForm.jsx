import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import {JobsUpdatedContext} from '../Context/JobsUpdatedContext.js'


export const JobForm = ()=>{
    const {jobsUpdated,setJobsUpdated} = useContext(JobsUpdatedContext)
      
    const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
    } = useForm();

    const onSubmit = async (data)=>{
    const res = await fetch("http://localhost:3000/create",{
        method : "POST", 
        headers: {
        "Content-Type": "application/json",
        },     
        body : JSON.stringify(data)
    });
    const result = await res.json();
    setJobsUpdated((prev) => prev + 1)
    console.log(result);
    
    reset();
    }

    return (
    <center><form onSubmit = {handleSubmit(onSubmit)}>
        <div><input 
        {...register("company",{required:{value:true,message:"Company is required"}})}
        type = "text"
        placeholder = "Company"
        /></div>
        {errors.company && <div>{errors.company.message}</div>}
        
        <div><input 
        {...register("position",{required:{value:true,message:"Position is required"}})}
        type = "text"
        placeholder = "Position"
        /></div>
        {errors.position && <div>{errors.position.message}</div>}

        <div>
        <select {...register("status",{required:{value:true,message:"Status is required"}})}>
            <option value="">Select Status</option>
            <option value="Wishlist">Wishlist</option>
            <option value="Applied">Applied</option>
            <option value="Interviewing">Interviewing</option>
            <option value="Offer">Offer</option>
            <option value="Rejected">Rejected</option>
        </select>
        </div>
        {errors.status && <div>{errors.status.message}</div>}

        <br></br>

        <button
        type = "submit"
        disabled = {isSubmitting}
        >
        {isSubmitting ? "Submitting" : "Submit"}
        </button>
    </form></center>
    )
}