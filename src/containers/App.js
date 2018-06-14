import React, {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NavigationHeader from './NavigationHeader'
import HomePage from '../components/HomePage'
import NotFound from "../components/NotFound";
import FacultyView from "./FacultyView";
import {AlertList} from "react-bs-notifier";
import {connect} from "react-redux";
import {dismissAlert} from "../actions/alert";


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <NavigationHeader/>
                    <div>
                        <AlertList
                            onDismiss={({id}) => this.props.dispatch(dismissAlert(id))}
                            timeout={this.props.alerts.length > 0 ? this.props.alerts[0].timeout : 0}
                            alerts={this.props.alerts} />
                        <Switch>
                            <Route exact path='/' component={HomePage}/>
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
        alerts: state.alerts
    }
}

export default connect(mapStateToProps)(App)