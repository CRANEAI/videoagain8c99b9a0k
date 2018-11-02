
/*
camera capture view
created by: FusionCode

//----------------------------------------------------------------------------------------------------------
// Component Requirements
//----------------------------------------------------------------------------------------------------------

the camera capture view has a status bar located at the very-top across the full width of the view
camera capture view has an Image located at the very-top across the full width of the view. this is a placeholder and should be updated with higher resolution Image
camera capture view has a Label located at the main area left of the view with text axe/me strea

*/
        
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col   } from 'reactstrap';
        
        
        import {  }  from '../actions/camera_captureActions.js'; 

        
        
       
        class cameracaptureView extends React.Component {

            state = {
                
                
            }
    
                
            

            componentDidMount = () => {
                
               
                
            }
    
        render() {
        
        
        const { data } = this.props

            return (
                <Row>

                 
                    <Col md={12}>

                        			<Col md={12} className="text-center">				{/* <!-- TODO: Change placeholder image with higher res --> */ }
				<img className="img-fluid" alt="Responsive image" src='http://path.to/replace/image' /> 

			</Col>			<Col md={12}>
				<p className="label-block-very-light-yellow-paragraph"> axe/me strea </p>
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
    
   
        export default connect(mapStateToProps, mapDispatchToProps)(cameracaptureView);
    
        