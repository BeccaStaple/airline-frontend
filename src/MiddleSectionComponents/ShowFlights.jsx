import React from "react";
import Axios from "axios";
import { Card } from "react-bootstrap";

export default class ShowFlights extends React.Component {

    constructor() {
        super();
        this.state = {
            // flyingFrom : [],
            // flyingTo : [],
            // dateOfDeparture: [],
            // timeOfDeparture : []
            flights: []
        }
    }


    componentDidMount() {
        Axios.get("http://localhost:8082/flight/getFlights")
            .then((res) => {
                const flights = res.data;
                this.setState({ flights });
            })
    }

    render() {
        const showFlights = this.state.flights.map(flight => {
            return (
                <div className="individualCardSpacing">
                    <Card border="light" style={{ width: '18rem' }}>
                        <Card.Header><p>Destination: {flight.flyingTo}</p></Card.Header>
                        <Card.Body>
                            <p>Flying From: {flight.flyingFrom}</p>
                            <p>Date: {flight.dateOfDeparture}</p>
                            <p>Time : {flight.timeOfDeparture}</p>


                        </Card.Body>
                    </Card>
                </div>


            );
        })

        return (
            <div className="cardSpacing">
                {showFlights}
            </div>
        )

    }

    // filterResult(data) {
    //     return {
    //         dateOfDeparture : data.dateOfDeparture,
    //         timeOfDeparture : data.timeOfDeparture,
    //         flyingTo : data.flyingTo,
    //         flyingFrom : data.flyingFrom
    //     }
    // }

    // onChange(e) {
    //     const search = e.target.value;
    //     //const url

    //   Axios.get("http://localhost:8082/flight/getFlights")
    //     .then(res => {
    //         const results = res.data.results
    //     })
    // }

}