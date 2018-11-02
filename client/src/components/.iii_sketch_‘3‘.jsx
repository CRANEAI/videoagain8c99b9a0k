
/*
.iii sketch ‘3‘ view
created by: FusionCode

//----------------------------------------------------------------------------------------------------------
// Component Requirements
//----------------------------------------------------------------------------------------------------------

the follow view is a data-bound list based view with a repeating template containing User Account Photo, Table Row elements
the follow view has a status bar located at the very-top across the full width of the view
follow view has Navigation Bar located at the very-top in the center of the view with text .iii sketch ‘3‘
follow view has Label located at the very-top in the center of the view, text needs identified
follow view has Label located at the top center of the view, text needs identified
follow view has Table View that scrolls horizontal
follow view has Label located at the top center of the view, text needs identified
follow view has Label located at the top center of the view, text needs identified
follow view has Label located at the top center of the view, text needs identified
follow view has Label located at the mid-top center of the view, text needs identified
follow view has Table View that scrolls horizontal
follow view has Label located at the mid-top center of the view, text needs identified
follow view has Label located at the mid-top center of the view, text needs identified
follow view has Table View that scrolls vertical
follow view has Label located at the main area center of the view, text needs identified
follow view has a Button located at the main area center of the view with text follow
follow view has Label located at the main area center of the view, text needs identified
follow view has an Image located at the mid-bottom left of the view. this is a placeholder and should be updated with higher resolution Image
follow view has Label located at the mid-bottom center of the view, text needs identified
follow view has Label located at the mid-bottom center of the view, text needs identified
follow view has Label located at the mid-bottom center of the view, text needs identified
follow view has Label located at the mid-bottom center of the view, text needs identified
follow view has Label located at the bottom center of the view, text needs identified
follow view has Label located at the bottom center of the view, text needs identified
follow view has Label located at the bottom center of the view, text needs identified
follow view has a Button located at the bottom center of the view with text follow
view has actions which trigger on events, view should should error messages and display activity indicator when processing

*/
        
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col   } from 'reactstrap';
        
        
        import {  }  from '../actions/.iii_sketch_‘3‘Actions.js'; 

        import { get_live_data, get_.iii_sketch_‘3‘_data, get_follow_data }  from '../actions/.iii sketch ‘3‘Actions.js'; 
        
       
        class .iiisketch‘3‘View extends React.Component {

            state = {
                
                
            }
    
                
            
        get_live_data = () => {

            return (
                <Col>
                <!-- ToDo: Refine template loop for get_live_data -->
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
        
        get_follow_data = () => {

            return (
                <Col>
                <!-- ToDo: Refine template loop for get_follow_data -->
                </Col>
            )
        }
        

            componentDidMount = () => {
                const { get_live_data, get_.iii_sketch_‘3‘_data, get_follow_data } = this.props
               
                ,,
            }
    
        render() {
        
        
        const { data } = this.props

            return (
                <Row>

                 
                    <Col md={12}>

                        
                        {render_get_live_data()}
{render_get_.iii_sketch_‘3‘_data()}
{render_get_follow_data()}
   
   
                    </Col> 
                     
                </Row>
            )   
        }
    }
                   
    function mapStateToProps(state) {
            
            }
        }
    
        function mapDispatchToProps(dispatch) {
            return bindActionCreators({  get_live_data, get_.iii_sketch_‘3‘_data, get_follow_data }, dispatch);
        }
    
   
        export default connect(mapStateToProps, mapDispatchToProps)(.iiisketch‘3‘View);
    
        