import "./Button.css";
function ButtonHeader({title}){
    return(
        <button type="button" className="headerBtn" onClick={navBar} >{title}</button>
    )
}

function navBar(){
    alert("hi")
}

export default ButtonHeader;