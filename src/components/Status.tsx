type Statusprops={
    status: 'loading' | 'success' | 'error'
}
export const Status = (props: Statusprops)=>{
    let message
    if(props.status === 'loading'){
        message='loading...'
    } else if(props.status=== 'success'){
        message='Datafetched successfully!'

    }else if(props.status ==='error'){
        message='Error fetching data'
    }
    return(
        <div>
         <h2>Status- {message}</h2>
        </div>
    )
}