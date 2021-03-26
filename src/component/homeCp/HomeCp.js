import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return{
        getUsersList: state.users.getUsersList,
        errorUsersList: state.users.errorUsersList
    }
 }
    
function HomeCp(homeIsi) {


    console.log(homeIsi.getUsersList);
    
    return (
        <div>
            {homeIsi.getUsersList.length === 0?"data tidak ada":
                            homeIsi.getUsersList && homeIsi.getUsersList.map((menu) => (
                                
                                <Link to={'/detail/' + menu.id}>
                    <Col md={4} xs={6} className="mb-4 mt-4 ml-4">
                        <Card border="primary" style={{ width: '18rem' }} className="shadow">
                            <Card.Img variant="top" src={"https://robohash.org/" + menu.id} />
                            <Card.Body>
                                <Card.Title><strong>{menu.name} </strong> </Card.Title>
                                <Card.Text>
                                    {menu.username}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Link>
                
                            )
                            )}
        </div>
    )
}

export default connect(mapStateToProps)(HomeCp);