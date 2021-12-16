// import Card from "./Card"
import Cell from './Cell';
import data from './PeriodicTableJSON.json'
import classes from './Cell.module.css'



function PeriodicTable() {

    //update ununennium category to "alkali metal"
    let ununenniumIndex = data.elements.findIndex((obj => obj.number === 119 ))
    data.elements[ununenniumIndex].category = "alkali metal"


    return (
        <div className={classes.periodicTableSection}>
            {/* <h5>periodic table</h5> */}

            <div className={classes.grid}>
                {data.elements.map((element) => {
                    return (
                        <Cell 
                            key={element.number}
                            name={element.name}
                            number={element.number}
                            summary={element.summary}
                            symbol={element.symbol}
                            wiki={element.source}
                            density={element.density}
                            atomicMass={element.atomic_mass}
                            boil={element.boil}
                            shells={element.shells}

                            category={element.category}
                            xpos={element.xpos}
                            ypos={element.ypos}
                        />
                    )
                })}

            </div>
        </div>
    )
}

export default PeriodicTable;