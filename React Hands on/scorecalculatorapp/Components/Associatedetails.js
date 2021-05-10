

export const Associatedetails=({cohortcode,numberoftrainees})=>(
    <div className="formatstyle">
    <div div className="CohortCode">
            <b><span>CohortCode: </span></b>
            <span>{cohortcode}</span>
        </div>
        <div className="NumberOfTrainees">
            <b><span>Number of Trainees: </span></b>
            <span>{numberoftrainees}</span>
        </div>
        </div>
)