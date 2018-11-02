
/*
follow view
created by: FusionCode

//----------------------------------------------------------------------------------------------------------
// Component Requirements
//----------------------------------------------------------------------------------------------------------

the notifications view is a data-bound list based view with a repeating template containing User Account Photo, Table Row elements
the notifications view has a status bar located at the very-top across the full width of the view
notifications view has Navigation Bar located at the very-top in the center of the view with text .iii sketch ‘3‘
notifications view has a Datatype located at the very-top in the center of the view with text notifications when they are live
notifications view has Label located at the top center of the view, text needs identified
notifications view has Table View that scrolls horizontal
notifications view has Label located at the top center of the view, text needs identified
notifications view has Label located at the top center of the view, text needs identified
notifications view has Label located at the top center of the view, text needs identified
notifications view has Label located at the mid-top center of the view, text needs identified
notifications view has Table View that scrolls horizontal
notifications view has a Label located at the mid-top center of the view with text id: 34983532
notifications view has a Label located at the mid-top center of the view with text & ld: 64983274
notifications view has Table View that scrolls vertical
notifications view has Label located at the main area center of the view, text needs identified
notifications view has a Button located at the main area center of the view with text follow
notifications view has Label located at the main area center of the view, text needs identified
notifications view has an Image located at the mid-bottom left of the view. this is a placeholder and should be updated with higher resolution Image
notifications view has Label located at the mid-bottom center of the view, text needs identified
notifications view has Label located at the mid-bottom center of the view, text needs identified
notifications view has Label located at the mid-bottom center of the view, text needs identified
notifications view has Label located at the mid-bottom center of the view, text needs identified
notifications view has Label located at the bottom center of the view, text needs identified
notifications view has Label located at the bottom center of the view, text needs identified
notifications view has a Label located at the bottom center of the view with text ‘_ id: 63283294
notifications view has a Button located at the bottom center of the view with text follow
view has actions which trigger on events, view should should error messages and display activity indicator when processing

*/
        
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col , Button } from 'reactstrap';
        
        
        import { follow_action, follow_action }  from '../actions/followActions.js'; 

        import { get_follow_data, get_.iii_sketch_‘3‘_data }  from '../actions/followActions.js'; 
        
       
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
            
        get_follow_data = () => {

            return (
                <Col>
                <!-- ToDo: Refine template loop for get_follow_data -->
                </Col>
            )
        }
        
        get_.iii_sketch_‘3‘_data = () => {

            return (
                <Col>
                <!-- ToDo: Refine template loop for get_.iii_sketch_‘3‘_data -->
                </Col>
            )
        }
        

            componentDidMount = () => {
                const { get_follow_data, get_.iii_sketch_‘3‘_data } = this.props
               
                ,
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


                        {render_get_follow_data()}
{render_get_.iii_sketch_‘3‘_data()}
   
   
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
            return bindActionCreators({ follow_action, follow_action get_follow_data, get_.iii_sketch_‘3‘_data }, dispatch);
        }
    
   
        export default connect(mapStateToProps, mapDispatchToProps)(followView);
    
        