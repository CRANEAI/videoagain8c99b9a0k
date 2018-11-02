
/*
live view
created by: FusionCode

//----------------------------------------------------------------------------------------------------------
// Component Requirements
//----------------------------------------------------------------------------------------------------------

the live view has a status bar located at the very-top across the full width of the view
live view has Navigation Bar located at the very-top in the center of the view with button right nav button
live view has Navigation Bar located at the very-top in the center of the view with text live
live view has an Image located at the very-top left of the view. this is a placeholder and should be updated with higher resolution Image
live view has an Image located at the very-top center of the view. this is a placeholder and should be updated with higher resolution Image
live view has a Label located at the top center of the view with text -‘
live view has an Image located at the top center of the view. this is a placeholder and should be updated with higher resolution Image
live view has an Image located at the top left of the view. this is a placeholder and should be updated with higher resolution Image
live view has a Label located at the main area left of the view with text (e
live view has an Image located at the main area center of the view. this is a placeholder and should be updated with higher resolution Image
live view has an Image located at the main area left of the view. this is a placeholder and should be updated with higher resolution Image
live view has a Label located at the mid-bottom center of the view with text g «£qu
live view has a Label located at the mid-bottom left of the view with text 1 m9263
live view has an Image located at the mid-bottom left of the view. this is a placeholder and should be updated with higher resolution Image
live view has an Image located at the mid-bottom center of the view. this is a placeholder and should be updated with higher resolution Image
view has actions which trigger on events, view should should error messages and display activity indicator when processing

*/
        
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col , Navbar, NavItem, NavbarBrand, Button } from 'reactstrap';
        
        
        import {  }  from '../actions/liveActions.js'; 

        
        
       
        class liveView extends React.Component {

            state = {
                
                
            }
    
                
            

            componentDidMount = () => {
                
               
                
            }
    
        render() {
        
        
        const { data } = this.props

            return (
                <Row>

                 
                    <Col md={12}>

                        <Navbar color="light navigation-bar-light-turquoise-block" light expand="md"> 
    <NavbarBrand>live</NavbarBrand> 
</Navbar> 
			<Col md={12} className="text-center">				{/* <!-- TODO: Change placeholder image with higher res --> */ }
				<img className="img-fluid" alt="Responsive image" src='http://path.to/replace/image' /> 

			</Col>			<Col md={12}>
				<p className="label-peach-block"> -‘ </p>
			</Col>

			<Col md={12}>
				<p className="label-light-peach-block"> (e </p>
			</Col>

			<Col md={12}>
				<p className="label-very-light-peach-block"> g «£qu </p>
			</Col>

			<Col md={12}>
				<p className="label-block-block"> 1 m9263 </p>
			</Col>

			<Col md={12}>
				{/* <!-- TODO: Create unit test for [q_1263_l button-block-block action --> */}
				<Button 
                        className="btn btn-lg btn-block button-block-block" 
                        onClick={() => this.[q_1263_l()}>[q 1263 l</Button> 

			</Col>

			<Col md={12}>
				{/* <!-- TODO: Create unit test for .m button-block-block action --> */}
				<Button 
                        className="btn btn-lg btn-block button-block-block" 
                        onClick={() => this..m()}>.m</Button> 

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
    
   
        export default connect(mapStateToProps, mapDispatchToProps)(liveView);
    
        