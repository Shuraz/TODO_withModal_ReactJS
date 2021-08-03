import Modal from './Modal';
import Backdrop from './Backdrop';
import {useState} from 'react';

function Todo(props){
    const [modalIsOpen, setModeIsOpen]= useState(false);

    function deleteHandle(){
        console.log("delete!!!!");
        setModeIsOpen(true);     
    }

    function closeModalHandler(){
      setModeIsOpen(false);
    }

    return(
    <div className="card">
    <h2>{props.txt}</h2>
    <p>{props.details}</p>
      <div className="action">
        <button type="submit" name="submit" className="btn" onClick={deleteHandle}>Delete</button>
      </div>
      {/* {modalIsOpen? <Modal/>: null}
      {modalIsOpen? <Backdrop/>:null} */}
        {/* simiarly we can also code like */}
        {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>}
        {modalIsOpen && <Backdrop onCancelBackDrop={closeModalHandler}/>}
    </div>
    );
    
}
export default Todo; 