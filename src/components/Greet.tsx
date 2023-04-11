type Greetprop ={
    name: string
    messageCount ?: number
    isLoggedIn : boolean
}
export const Greet = (props: Greetprop) =>{
    const {messageCount = 0} = props
 return(
    
    <div>
        {
            props.isLoggedIn ? `Wellcome ${props.name} ! you have ${messageCount} unread messages` : 'Wellcome guest'
        }
     {/* <h2> Wellcome {props.name} ! you have {props.messageCount} unread messages</h2> */}
    </div>
 )
}