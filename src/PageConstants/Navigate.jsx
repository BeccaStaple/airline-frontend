import React from "react"
import {Switch, Route} from "react-router-dom"

import CancelBooking from "../MiddleSectionComponents/CancelBooking"
import CovidRegs from "../MiddleSectionComponents/COVID"
import FlyingRegs from "../MiddleSectionComponents/Flying"
import MakeBooking from "../MiddleSectionComponents/MakeBooking"
import TermsAndConditions from "../MiddleSectionComponents/TsAndCs"
import Container from "../MiddleSectionComponents/HomeContainer"


export default class Navigate extends React.Component {
    render() {
        return (
            <Switch>
            <Route exact path="/" component={Container}/>
            <Route exact path="/booking" component={MakeBooking}/>
            <Route exact path="/guidelines" component={FlyingRegs}/>
            <Route exact path="/cancel-booking" component={CancelBooking}/>
            {/* <Route path="/flight/:id" component={FightDetail} /> */}
            <Route exact path="/terms-and-conditions" component={TermsAndConditions}/>
            <Route exact path="/covid-info" component={CovidRegs}/>
        </Switch>
        )
    }
}