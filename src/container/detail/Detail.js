import React, { Component } from 'react'
import { Card, Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { getUserDetail } from '../../actions/userAction'
import DetailCp from '../../component/homeCp/HomeCp';

class Detail extends Component {


    componentDidMount() {
        this.props.dispatch(getUserDetail(this.props.match.params.id));
    }

    render() {  
        console.log(this.props.match.params.id);
        return (
            <div>
                <h1> <strong> Profil Robot </strong> </h1>
                <Row>
                    <Container>
                        <h1>
                            id : {this.props.match.params.id}
                        </h1>
                        <DetailCp/>
                    </Container>
                </Row>
            </div>
        )
    }
}

export default connect()(Detail);
