import React from 'react'
import Sidebar from './Sidebar'
import ExchangePanel from './ExchangesPanel'
import {Route} from "react-router-dom";
import FacultyPlan from "../containers/FacultyPlan";
import AdminPanel from "../containers/AdminPanel";


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
                render={() => <ExchangePanel facultyId={facultyId}/>}/>
            <Route
                path={`${url}/plan`}
                component={() => <FacultyPlan facultyId={facultyId}/>}/>
            <Route
                path={`${url}/settings`}
                component={AdminPanel}/>
        </div>
    </div>

)