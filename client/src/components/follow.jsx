
/*
follow view
created by: FusionCode

//----------------------------------------------------------------------------------------------------------
// Component Requirements
//----------------------------------------------------------------------------------------------------------

the follow view has a status bar located at the very-top across the full width of the view
follow view has Navigation Bar located at the very-top in the center of the view with text follow
follow view has an Image located at the very-top center of the view. this is a placeholder and should be updated with higher resolution Image
follow view has an Image located at the very-top left of the view. this is a placeholder and should be updated with higher resolution Image
follow view has a Label located at the top center of the view with text {a
follow view has an Image located at the top center of the view. this is a placeholder and should be updated with higher resolution Image
follow view has an Image located at the top left of the view. this is a placeholder and should be updated with higher resolution Image
follow view has a Label located at the main area left of the view with text a _

*/
        
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col , Button } from 'reactstrap';
        
        
        import { follow_action, follow_action }  from '../actions/followActions.js'; 

        
        
       
        class followView extends React.Component {

            state = {
                 show_loading_indicator: false,
                
            }
    
            
            // send event
            send = () => {
                
                 send = () => {
                    <!-- ToDo: define what send will do in the send component --> 
                 })
                    
              }
            // follow event
            follow = (value) => {
                const { follow_action } = this.props
                        e.preventDefault()

                        

                        //Dispatch action mapped to redux
                        follow_action()
                        
                        
                        // Change state of activity indicator
                        this.setState({
                            show_loading_indicator: true
                        })
                        
              }
            // follow event
            follow = (value) => {
                const { follow_action } = this.props
                        e.preventDefault()

                        

                        //Dispatch action mapped to redux
                        follow_action()
                        
                        
                        // Change state of activity indicator
                        this.setState({
                            show_loading_indicator: true
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

                        			<Col md={12}>
				{/* <!-- TODO: Create unit test for follow button-light-turquoise-block action --> */}
				<Button 
                        className="btn btn-lg btn-block button-light-turquoise-block" 
                        onClick={() => this.follow()}>follow</Button> 

			</Col>

			<Col md={12} className="text-center">				{/* <!-- TODO: Change placeholder image with higher res --> */ }
				<img className="img-fluid" alt="Responsive image" src='http://path.to/replace/image' /> 

			</Col>			<Col md={12}>
				<p className="label-very-light-peach-block"> {a </p>
			</Col>

			<Col md={12}>
				<p className="label-very-light-peach-block"> a _ </p>
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
                    data: state.follow
                
            }
        }
    
        function mapDispatchToProps(dispatch) {
            return bindActionCreators({ follow_action, follow_action  }, dispatch);
        }
    
   
        export default connect(mapStateToProps, mapDispatchToProps)(followView);
    
        