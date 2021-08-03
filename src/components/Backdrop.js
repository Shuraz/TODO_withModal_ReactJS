function Backdrop(props){
    return(
        <div className="backdrop" onClick={props.onCancelBackDrop}></div>
    );
}

export default Backdrop;