import { Column } from './Column.jsx' 

export const Board = ({jobs})=>{
    const allStatus = ["Wishlist", "Applied", "Interviewing", "Offer", "Rejected"]
    return (
        <div className="board">
            {allStatus.map((status)=><div key={status}><Column status = {status} jobs = {jobs}></Column></div>)}
        </div>
    ) 
}