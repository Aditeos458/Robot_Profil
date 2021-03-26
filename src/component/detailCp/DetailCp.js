import { Card, Col } from 'react-bootstrap'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return{
        getUserDetail: state.users.getUserDetail,
        errorUserDetail: state.users.errorUserDetail
    }
 }
    
function DetailCp(DetailIsi) {


    console.log(DetailIsi.getUserDetail);
    
    return (
        <div>
                                
                    {/* <Link to={'/detail/' + DetailIsi.getUserDetail.id}> */}
                    <Col md={4} xs={6} className="mb-4 mt-4 ml-4">
                        <Card border="primary" style={{ width: '18rem' }} className="shadow">
                            <Card.Img variant="top" src={"https://robohash.org/" + DetailIsi.getUserDetail.id} />
                            <Card.Body>
                                <Card.Title><strong>{DetailIsi.getUserDetail.name} </strong> </Card.Title>
                                <Card.Text>
                                    {DetailIsi.getUserDetail.username}
                                </Card.Text>
                                <Card.Text>
                                    {DetailIsi.getUserDetail.email}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                {/* // </Link> */}
        </div>
    )
}

export default connect(mapStateToProps)(DetailCp);