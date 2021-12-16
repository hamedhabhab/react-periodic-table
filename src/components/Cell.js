import classes from './Cell.module.css'
import Modal from './Modal';
import Backdrop from './Backdrop';
import { useState } from 'react';


function Cell(props) {
    //convert "probably alkali metal" strings to "alkali metal"
    // let categories = []
    // categories.push(props.category)
    // categories.map((ele) => {
    //     let returnValue = false;
    //     if(ele.indexOf("unknown, but predicted to be an alkali metal") !== -1 ) {
    //         returnValue = true
    //         //retrurn only elements with "unknown, but predicted to be an alkali metal"
    //         if(returnValue){
    //             let final = ele.replace(/\unknown, but predicted to be an/g,"")
    //             // //console.log(final)
    //         }
    //     }
    // })


    const elementCategoryColorMap = {
        "noble gas": "#FFBC42",
        "alkaline earth metal": "#EC674E",
        "diatomic nonmetal": "#D81159",
        "alkali metal": "#8F2D56",
        "transition metal": "#58586B",
        "post-transition metal": "#218380",
        "lanthanide": "#4AABAF",
        "metalloid": "#73D2DE",
        "actinide": "green"
    }

    const [ modalIsOpen, setModalIsOpen] = useState(false);

    function deleteHandler() {
        setModalIsOpen(true)
        // console.log(modalIsOpen)
    }

    function closeModalHandler(){
        setModalIsOpen(false)
        // console.log(modalIsOpen)
    }

    return (
            <div style={{gridColumn: props.xpos, gridRow: props.ypos}}>

                <div className={classes.individualCell} onClick={deleteHandler}
                    style={{borderColor: elementCategoryColorMap[props.category]}} >
                    <p className={classes.cellNumber}>{props.number}</p>
                    <p className={classes.cellSymbol}>{props.symbol}</p>
                    {/* <p className={classes.cellName} style={{gridColumn: 2, gridRow: 2}}>{props.name}</p> */}
                    <p className={classes.cellName}>{props.name}</p>
                </div>

                    { modalIsOpen && <Modal 
                        //data passed as props into the modal component
                        symbol={props.symbol}
                        number={props.number}
                        name={props.name}
                        description={props.summary} 
                        wiki={props.wiki} 
                        density={props.density}
                        atomicMass={props.atomicMass}
                        boil={props.boil}
                        shells={props.shells}

                        //event handlers passed as props into the modal component
                        onCancel={closeModalHandler} 
                        onConfirm={closeModalHandler} /> }

                    { modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
                
            </div>




        // <div>
        //     <div className={classes.individualCell} 
        //         style={{
        //             gridColumn: props.xpos, gridRow: props.ypos,
        //             borderColor: elementCategoryColorMap[props.category]
        //     }}>
        //         <div>
        //             <p className={classes.cellNumber}>{props.number}</p>
        //             <p className={classes.cellSymbol}>{props.symbol}</p>
        //             <p className={classes.cellName} style={{gridColumn: 2, gridRow: 2}}>{props.name}</p>
        //         </div>
        //     </div>
        //         <Modal />
        // </div>
        
        
    )
}

export default Cell;