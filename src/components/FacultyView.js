import React from 'react'
import Sidebar from './Sidebar'
import ExchangePanel from './ExchangesPanel'
import {Route} from "react-router-dom";
import FacultyPlan from "../containers/FacultyPlan";
import AdminPanel from "../containers/admin/AdminPanel";


export default ({url, facultyId, isAdmin}) => (
    <div>
        <div className="col-sm-2">
            <Sidebar
                facultyId={facultyId}
                isAdmin={isAdmin}/>
        </div>
        <div className="col-sm-10">
            <Route
                path={`${url}/exchanges`}
                render={() => <ExchangePanel/>}/>
            <Route
                path={`${url}/plan`}
                component={() => <FacultyPlan/>}/>
            <Route
                path={`${url}/settings`}
                component={AdminPanel}/>
        </div>
    </div>

)