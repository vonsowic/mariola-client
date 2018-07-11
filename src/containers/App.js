import React, {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NavigationHeader from './NavigationHeader'
import HomePage from '../components/HomePage'
import NotFound from "../components/NotFound";
import FacultyView from "./FacultyView";
import {AlertList} from "react-bs-notifier";
import {connect} from "react-redux";
import {dismissAlert} from "../actions/alert";
import MyPlan from "./MyPlan";
import HowItWorks from "../components/HowItWorks";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <NavigationHeader/>
                    <div className="container pb-1-">
                        <AlertList
                            onDismiss={alert => this.props.dispatch(dismissAlert(alert))}
                            timeout={this.props.alerts.length > 0 ? this.props.alerts[0].timeout : 0}
                            alerts={this.props.alerts} />
                        <Switch>
                            <Route exact path='/' render={renderProps => <HomePage {...renderProps} isLoggedIn={this.props.isLoggedIn}/>}/>
                            <Route exact path='/about' component={HowItWorks}/>
                            <Route exact path='/myplan' component={MyPlan}/>
                            <Route path='/:facultyId' component={FacultyView}/>
                            <Route path='/*' component={NotFound}/>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>)
    }
}

function mapStateToProps(state){
    return {
        isLoggedIn: state.user.id !== null,
        alerts: state.alerts
    }
}

export default connect(mapStateToProps)(App)