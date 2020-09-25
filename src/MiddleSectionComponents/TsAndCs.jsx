import React from "react"

export default class TermsAndConditions extends React.Component {
    render() {
        return (
            <div className="middle-sec-div">
                <div className="main-container">
                    <h1>Terms and Conditions</h1>
                    <div className="bulletSpacing">
                        <h2>Customers Must:</h2>
                        <ul>
                            <li>Be nice</li>
                            <li>Smile</li>
                            <li>Have passport open on photo page when boarding</li>
                            <li>Learn basics of the language of the country you are travelling to</li>
                        </ul>

                        <h2>Customers Must NOT:</h2>
                        <ul>
                            <li>Roll eyes when flight is inevitably delayed</li>
                            <li>Cut the line when boarding</li>
                            <li>Use the overhead loacker if you don't have priority</li>
                        </ul>
                    </div>

                </div>

            </div>
        )
    }
}