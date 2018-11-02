
/*
chat view
created by: FusionCode

//----------------------------------------------------------------------------------------------------------
// Component Requirements
//----------------------------------------------------------------------------------------------------------

the chat view has a status bar located at the very-top across the full width of the view
chat view has an Image located at the very-top in the center of the view. this is a placeholder and should be updated with higher resolution Image
chat view has a Label located at the top left of the view with text . . ‘ *4;
the chat will appear on focus with state is set
chat view has a Label located at the bottom center of the view with text s

*/
        
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col , Button } from 'reactstrap';
        
        
        import { message_action }  from '../actions/chatActions.js'; 

        
        
       
        class chatView extends React.Component {

            state = {
                 show_loading_indicator: false,
                
            }
    
            
            // message event
            message = (value) => {
                const { message_action } = this.props
                        e.preventDefault()

                        

                        //Dispatch action mapped to redux
                        message_action()
                        
                        
                        // Change state of activity indicator
                        this.setState({
                            show_loading_indicator: true
                        })
                        
              }
            // send event
            send = () => {
                
                 send = () => {
                    <!-- ToDo: define what send will do in the send component --> 
                 })
                    
              }    
            

            componentDidMount = () => {
                
               
                
            }
    
        render() {
        
         const { show_loading_indicator } = this.state
        const { data } = this.props

            return (
                <Row>

                {!data.error_message &&
                    show_loading_indicator === true ? <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i> : 
                    <Col md={12}>

                        			<Col md={12} className="text-center">				{/* <!-- TODO: Change placeholder image with higher res --> */ }
				<img className="img-fluid" alt="Responsive image" src='http://path.to/replace/image' /> 

			</Col>			<Col md={12}>
				<p className="label-block-brown-small"> . . ‘ *4; </p>
			</Col>

			<Col md={12}>
				<p className="label-white-standard-small"> s </p>
			</Col>

			<Col md={12}>
				{/* <!-- TODO: Create unit test for 7% button-white-standard-small action --> */}
				<Button 
                        className="btn btn-lg btn-block button-white-standard-small" 
                        onClick={() => this.7%()}>7%</Button> 

			</Col>


                           
   
                    </Col> 
                     } 
                </Row>
            )   
        }
    }
                   
    function mapStateToProps(state) {
            return {
                    authentication: state.authentication,
                    data: state.chat
                
            }
        }
    
        function mapDispatchToProps(dispatch) {
            return bindActionCreators({ message_action  }, dispatch);
        }
    
   
        export default connect(mapStateToProps, mapDispatchToProps)(chatView);
    
        