import React from 'react'
import {connect} from 'react-redux'

class Container extends React.Component {
    render() {
        return <div>Tu bedzie panel starosty</div>
    }
}

function mapStateToProps(state){
    return {
        faculties: state.user.faculties
    }
}

export default connect(mapStateToProps)(Container)