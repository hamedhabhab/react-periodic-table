import classes from './Modal.module.css'


function Modal(props) {

    function confirmHandler(){
        props.onConfirm()
    }

    return(
        <div className={classes.modal}>
            <div className={classes.modalInfoGrid}>
                <h1 className={classes.modalNumber}>{props.number}</h1>
                <p className={classes.modalSymbol}>{props.symbol}</p>
                <p className={classes.modalName}>{props.name}</p>
                <p className={classes.modalDescription}>{props.description}</p>
                <p className={classes.modalWiki}>Wiki: {props.wiki}</p>
                <p className={classes.modalDensity}>Density: {props.density}</p>
                <p className={classes.modalAtomicMass}>Atomic Mass: {props.atomicMass}</p>
                <p className={classes.modalBoil}>Boil: {props.boil}</p>
                <p className={classes.modalShells}>Shells: {props.shells}</p>

                {/* <button onClick={props.onCancel}>close</button>
                <button onClick={confirmHandler}>confirm</button> */}
            </div>
        </div>
    )
}

export default Modal;