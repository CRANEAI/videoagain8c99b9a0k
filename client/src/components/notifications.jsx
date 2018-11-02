
/*
notifications view
created by: FusionCode

//----------------------------------------------------------------------------------------------------------
// Component Requirements
//----------------------------------------------------------------------------------------------------------

the follow view is a data-bound list based view with a repeating template containing User Account Photo, Table Row elements
the follow view has a status bar located at the very-top across the full width of the view
follow view has Navigation Bar located at the very-top in the center of the view with text .iii sketch ‘3‘
follow view has a Button located at the very-top in the center of the view with text follow your favorite broadcaster and get live
follow view has a Label located at the top center of the view with text johnny rios f h
follow view has Table View that scrolls horizontal
follow view has a Label located at the top center of the view with text id: 34983294 ° °w
follow view has a Label located at the top center of the view with text alfred hod es
follow view has a Label located at the top center of the view with text 9 d: 42983213
follow view has a Label located at the mid-top center of the view with text samuel hammond
follow view has Table View that scrolls horizontal
follow view has a Button located at the mid-top center of the view with text - follow
follow view has a Label located at the mid-top center of the view with text dora hines
follow view has Table View that scrolls vertical
follow view has a Label located at the main area center of the view with text carolyn francis
follow view has a Button located at the main area center of the view with text follow
follow view has a Label located at the main area center of the view with text id: 73748319
follow view has an Image located at the mid-bottom left of the view. this is a placeholder and should be updated with higher resolution Image
follow view has a Label located at the mid-bottom center of the view with text isaiah mcgee
follow view has a Label located at the mid-bottom center of the view with text $.45» id: 34983943
follow view has a Label located at the mid-bottom center of the view with text mark holmes
follow view has a Label located at the mid-bottom center of the view with text id: 13498384
follow view has a Label located at the bottom center of the view with text russell mcguire
follow view has a Label located at the bottom center of the view with text id: 63283294
follow view has a Label located at the bottom center of the view with text 5' jonathan peters
follow view has a Button located at the bottom center of the view with text follow
view has actions which trigger on events, view should should error messages and display activity indicator when processing

*/
        
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col   } from 'reactstrap';
        
        
        import { follow_action, follow_action, follow_action }  from '../actions/notificationsActions.js'; 

        import { get_follow_data, get_.iii_sketch_‘3‘_data, get_notifications_data }  from '../actions/notificationsActions.js'; 
        
       
        class notificationsView extends React.Component {

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
        
        get_.iii_sketch_‘3‘_data = () => {

            return (
                <Col>
                <!-- ToDo: Refine template loop for get_.iii_sketch_‘3‘_data -->
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
        

            componentDidMount = () => {
                const { get_follow_data, get_.iii_sketch_‘3‘_data, get_notifications_data } = this.props
               
                ,,
            }
    
        render() {
        
         const { show_loading_indicator } = this.state
        const { data } = this.props

            return (
                <Row>

                {!data.error_message &&
                    show_loading_indicator === true ? <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i> : 
                    <Col md={12}>

                        
                        {render_get_follow_data()}
{render_get_.iii_sketch_‘3‘_data()}
{render_get_notifications_data()}
   
   
                    </Col> 
                     } 
                </Row>
            )   
        }
    }
                   
    function mapStateToProps(state) {
            return {
                    authentication: state.authentication,
                    data: state.notifications
                
            }
        }
    
        function mapDispatchToProps(dispatch) {
            return bindActionCreators({ follow_action, follow_action, follow_action get_follow_data, get_.iii_sketch_‘3‘_data, get_notifications_data }, dispatch);
        }
    
   
        export default connect(mapStateToProps, mapDispatchToProps)(notificationsView);
    
        