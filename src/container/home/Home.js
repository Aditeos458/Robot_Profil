import React, { Component } from 'react'
import { Card, Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { getUsersList } from '../../actions/userAction'
import HomeCp from '../../component/homeCp/HomeCp';

class home extends Component {


    componentDidMount() {
        this.props.dispatch(getUsersList());
    }

    render() {  

        return (
            <div>
                <h1> <strong> Profil Robot </strong> </h1>
                <Row>
                    <Container>
                        <HomeCp/>
                    </Container>
                </Row>
            </div>
        )
    }
}

export default connect()(home);
