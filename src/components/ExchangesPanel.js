import React from 'react'
import IntentionsList from '../containers/IntentionsList'
import GeneralPlan from '../containers/GeneralPlan'

export default props => (
    <div>
        <GeneralPlan facultyId={props.facultyId}/>
        <IntentionsList facultyId={props.facultyId}/>
    </div>)
