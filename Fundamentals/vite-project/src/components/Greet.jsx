// function Greet()
// {
//     return <h1> Hi Yashiii</h1>
// }
// export default Greet

export const Greet = (props) => {
{
    return(
    <div>
     <h1> Hi {props.name} aka {props.heroname} </h1>
    {props.children}
    </div>
    )
}
}
// export default Greet