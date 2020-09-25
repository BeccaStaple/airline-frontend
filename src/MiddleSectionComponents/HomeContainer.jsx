import React from "react"
import { Button, InputGroup, FormControl } from "react-bootstrap"
import ShowFlights from "../MiddleSectionComponents/ShowFlights"



export default class Container extends React.Component {

    render() {
        return (
            <div className="middle-sec-div">
                <div className="main-container">
                    <h1>Search Flights</h1>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-default">Destination</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                        />
                    </InputGroup>

                    <br />

                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-default">Date</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            type="date"
                        />
                    </InputGroup>

                    <br />

                    <Button className="search-button" type="submit" variant="warning">Search</Button>

                    <br/>
                
                
                <div >
                    <ShowFlights />
                </div>
                    
                </div>
            </div>
        )
    }
}