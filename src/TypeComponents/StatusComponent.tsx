import React from 'react'

type StatusProps = {
    status : "loading" | "error" | "success"
}
const StatusComponent = (props: StatusProps) => {
  let message;
   if (props.status === "loading") {
     message = "Loading..."
   }else if (props.status === "error"){
     message = "Error fetching data"
   }else if (props.status === "success"){
     message = "Data Fetched Successfully"
   }
  return (
        <div>
            Status - {message}
        </div>
  )
}

export default StatusComponent