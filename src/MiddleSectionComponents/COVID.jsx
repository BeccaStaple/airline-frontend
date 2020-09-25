import React from "react"
import {Button} from "react-bootstrap"

export default class CovidRegs extends React.Component {
    render() {
        return (
            <div className="middle-sec-div">
                <div className="main-container">
                <h1>Enhanced Health and Safety Measures</h1>
                <p>Because of this bloody virus we have to actually clean our planes now (urgh!)</p>
                <p>You'll be pleased to know that due to the air filtration system it's safer to fly than go the the super market. So rememeber that next time you are picking up a carton of milk!</p>
                
                <h4>For the latest confusing and contradictory guidelines on COVID-19, please visit the government website</h4>
                <Button>
                    <a style={{ color: "white" }} href="https://www.gov.uk/guidance/travel-advice-novel-coronavirus">
                        GOV.UK
                    </a>
                </Button>
                </div>
                
            </div>
        )
    }
}