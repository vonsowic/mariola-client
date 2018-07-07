import React from 'react'
import { connect } from 'react-redux';

class Container extends React.Component {
    componentDidMount(){
    }

    render() {
        return <div>hh</div>
    }
}

function mapStateToProps(state){
    return {
    }
}


export default connect(mapStateToProps)(Container)