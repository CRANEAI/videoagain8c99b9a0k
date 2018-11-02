
/*
feed view
created by: FusionCode

//----------------------------------------------------------------------------------------------------------
// Component Requirements
//----------------------------------------------------------------------------------------------------------

the feed view is a data-bound list based view with a repeating template containing User Account Photo, Table Row elements
the feed view has a status bar located at the very-top across the full width of the view
feed view has Navigation Bar located at the very-top across the full width of the view
feed view has Label located at the very-top in the center of the view, text needs identified
feed view has Label located at the top center of the view, text needs identified
feed view has Table View that scrolls horizontal
feed view has a Button located at the top center of the view with text follow
feed view has Label located at the top center of the view, text needs identified
feed view has Label located at the top center of the view, text needs identified
feed view has Label located at the mid-top center of the view, text needs identified
feed view has Table View that scrolls horizontal
feed view has Label located at the mid-top center of the view, text needs identified
feed view has a Button located at the mid-top center of the view with text follow
feed view has Table View that scrolls vertical
feed view has Label located at the main area center of the view, text needs identified
feed view has Label located at the main area center of the view, text needs identified
feed view has an Image located at the mid-bottom left of the view. this is a placeholder and should be updated with higher resolution Image
feed view has Label located at the mid-bottom center of the view, text needs identified
feed view has Label located at the mid-bottom center of the view, text needs identified
feed view has Label located at the mid-bottom center of the view, text needs identified
feed view has Label located at the bottom center of the view, text needs identified
feed view has Label located at the bottom center of the view, text needs identified
feed view has Label located at the bottom center of the view, text needs identified
feed view has a Button located at the bottom center of the view with text follow
view has actions which trigger on events, view should should error messages and display activity indicator when processing

*/
        
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col , Navbar, NavItem, NavbarBrand, Button } from 'reactstrap';
        
        
        import { follow_action, follow_action, follow_action }  from '../actions/feedActions.js'; 

        import { get_follow_data, get_feed_data, get_notifications_data, get_exploration_data }  from '../actions/feedActions.js'; 
        
       
        class feedView extends React.Component {

            state = {
                 show_loading_indicator: false,
                
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
        
        get_feed_data = () => {

            return (
                <Col>
                <!-- ToDo: Refine template loop for get_feed_data -->
                </Col>
            )
        }
        
        get_notifications_data = () => {

            return (
                <Col>
                <!-- ToDo: Refine template loop for get_notifications_data -->
                </Col>
            )
        }
        
        get_exploration_data = () => {

            return (
                <Col>
                <!-- ToDo: Refine template loop for get_exploration_data -->
                </Col>
            )
        }
        

            componentDidMount = () => {
                const { get_follow_data, get_feed_data, get_notifications_data, get_exploration_data } = this.props
               
                ,,,
            }
    
        render() {
        
         const { show_loading_indicator } = this.state
        const { data } = this.props

            return (
                <Row>

                {!data.error_message &&
                    show_loading_indicator === true ? <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i> : 
                    <Col md={12}>

                        <Navbar color="light navigation-bar-white-standard" light expand="md"> 
    <NavbarBrand><!-- todo: add text for navigation title --></NavbarBrand> 
</Navbar> 
			<Col md={12}>
				{/* <!-- TODO: Create unit test for sign_up button-block-white-small action --> */}
				<Button 
                        className="btn btn-lg btn-block button-block-white-small" 
                        onClick={() => this.sign_up()}>sign up</Button> 

			</Col>

			<Col md={12}>
				{/* <!-- TODO: Create unit test for follow button-light-turquoise-light-sky-blue-small action --> */}
				<Button 
                        className="btn btn-lg btn-block button-light-turquoise-light-sky-blue-small" 
                        onClick={() => this.follow()}>follow</Button> 

			</Col>

			<Col md={12}>
				<p className="label-block-white-paragraph"> v - </p>
			</Col>

			<Col md={12}>
				<p className="label-white-standard-small"> alfred hod es </p>
			</Col>

			<Col md={12}>
				<p className="label-white-standard-small"> samuel hammond </p>
			</Col>

			<Col md={12}>
				{/* <!-- TODO: Create unit test for mail button-white-standard-small action --> */}
				<Button 
                        className="btn btn-lg btn-block button-white-standard-small" 
                        onClick={() => this.mail()}>mail</Button> 

			</Col>

			<Col md={12}>
				<p className="label-gray-white-small"> carolyn francis </p>
			</Col>

			<Col md={12}>
				<p className="label-white-standard-small"> id: 73748319 </p>
			</Col>

			<Col md={12} className="text-center">				{/* <!-- TODO: Change placeholder image with higher res --> */ }
				<img className="img-fluid" alt="Responsive image" src='http://path.to/replace/image' /> 

			</Col>			<Col md={12}>
				<p className="label-light-turquoise-light-turquoise-small"> isaiah mcgee </p>
			</Col>

			<Col md={12}>
				<p className="label-white-standard-small"> mark holmes </p>
			</Col>

			<Col md={12}>
				<p className="label-white-standard-small"> id: 13498384 </p>
			</Col>

			<Col md={12}>
				<p className="label-white-standard-small"> russell mcguire </p>
			</Col>

			<Col md={12}>
				<p className="label-white-standard-small"> id: 63283294 </p>
			</Col>

			<Col md={12}>
				<p className="label-white-standard-small"> g jonathan peters </p>
			</Col>

			<Col md={12}>
				{/* <!-- TODO: Create unit test for vﬁ button-light-sky-blue-light-turquoise-small action --> */}
				<Button 
                        className="btn btn-lg btn-block button-light-sky-blue-light-turquoise-small" 
                        onClick={() => this.vﬁ()}>vﬁ</Button> 

			</Col>


                        {render_get_follow_data()}
{render_get_feed_data()}
{render_get_notifications_data()}
{render_get_exploration_data()}
   
   
                    </Col> 
                     } 
                </Row>
            )   
        }
    }
                   
    function mapStateToProps(state) {
            return {
                    authentication: state.authentication,
                    data: state.feed
                
            }
        }
    
        function mapDispatchToProps(dispatch) {
            return bindActionCreators({ follow_action, follow_action, follow_action get_follow_data, get_feed_data, get_notifications_data, get_exploration_data }, dispatch);
        }
    
   
        export default connect(mapStateToProps, mapDispatchToProps)(feedView);
    
        