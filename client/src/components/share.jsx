
/*
share view
created by: FusionCode

//----------------------------------------------------------------------------------------------------------
// Component Requirements
//----------------------------------------------------------------------------------------------------------

the history view has a status bar located at the very-top across the full width of the view
history view has a Label located at the mid-bottom left of the view with text k"
history view has a Label located at the mid-bottom left of the view with text k"
history view has a Label located at the mid-bottom left of the view with text k"

*/
        
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col   } from 'reactstrap';
        
        
        import {  }  from '../actions/shareActions.js'; 

        
        
       
        class shareView extends React.Component {

            state = {
                
                
            }
    
                
            

            componentDidMount = () => {
                
               
                
            }
    
        render() {
        
        
        const { data } = this.props

            return (
                <Row>

                 
                    <Col md={12}>

                        			<Col md={12}>
				<p className="label-peach-brown"> k" </p>
			</Col>


                           
   
                    </Col> 
                     
                </Row>
            )   
        }
    }
                   
    function mapStateToProps(state) {
            
            }
        }
    
        function mapDispatchToProps(dispatch) {
            return bindActionCreators({   }, dispatch);
        }
    
   
        export default connect(mapStateToProps, mapDispatchToProps)(shareView);
    
        