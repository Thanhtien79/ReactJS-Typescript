type Personlistprops ={
    names: {
        first: string
        last: string
    }[]

}
export const Personlist = (props: Personlistprops) => {
    return(
        <div>
            {/* truy cập từng đối tương trong list */}
            {props.names.map( name => { 
                return(
                    <h2 key={name.first}>
                        {name.first } {name.last} 
                        </h2>
                )
            })}
        </div>
    )

}