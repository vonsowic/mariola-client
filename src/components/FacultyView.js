import React from 'react'
import Sidebar from './Sidebar'
import ExchangePanel from './ExchangesPanel'
import {Route} from "react-router-dom";
import FacultyPlan from "../containers/FacultyPlan";
import AdminPanel from "../containers/admin";


export default ({url, facultyId, isAdmin}) => (
    <div>
        <div className="col-sm-2">
            <Sidebar
                facultyId={facultyId}
                isAdmin={isAdmin}/>
        </div>
        <div className="col-sm-10">
            <Route
                exact path={`${url}/exchanges`}
                component={ExchangePanel}/>
            <Route
                exact path={`${url}/plan`}
                component={FacultyPlan}/>
            { isAdmin
                ? <Route
                    exact path={`${url}/settings`}
                    component={AdminPanel}/>
                : null }
        </div>
    </div>
)