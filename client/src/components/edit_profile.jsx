/*
edit profile view
created by: FusionCode

//----------------------------------------------------------------------------------------------------------
// Component Requirements
//----------------------------------------------------------------------------------------------------------

the follow view has a status bar located at the very-top across the full width of the view
follow view has Navigation Bar located at the very-top in the center of the view
follow view has an Image located at the very-top center of the view. this is a placeholder and should be updated with higher resolution Image
follow view has an Image located at the very-top left of the view. this is a placeholder and should be updated with higher resolution Image
follow view has a Label located at the top center of the view with text {a
follow view has an Image located at the top center of the view. this is a placeholder and should be updated with higher resolution Image
follow view has an Image located at the top left of the view. this is a placeholder and should be updated with higher resolution Image
follow view has a Label located at the main area left of the view with text a _
view has actions which trigger on events, view should should error messages and display activity indicator when processing
the composite view has a profile icon located at the bottom right of the view which on click will trigger the profile() action
the composite view has a home icon located at the bottom left of the view which on click will trigger the home() action
the edit profile view has a profile icon located at the bottom right of the view which on click will trigger the profile() action
the edit profile view has a home icon located at the bottom left of the view which on click will trigger the home() action

*/

import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Row, Col, Button } from "reactstrap"

import { edit_profile_action } from "../actions/edit_profileActions.js"

class editprofileView extends React.Component {
  state = {
    show_loading_indicator: false
  }

  // edit_profile event
  edit_profile = value => {
    const { edit_profile_action } = this.props
    e.preventDefault()

    //Dispatch action mapped to redux
    edit_profile_action()

    // Change state of activity indicator
    this.setState({
      show_loading_indicator: true
    })
  }

  componentDidMount = () => {}

  render() {
    const { show_loading_indicator } = this.state
    const { data } = this.props

    return (
      <Row>
        {!data.error_message && show_loading_indicator === true ? (
          <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw" />
        ) : (
          <Col md={12}>
            <Col md={12}>
              <p className="label-block-white-small"> steve barnett </p>
            </Col>
            <Col md={12}>
              <p className="label-white-standard"> id: 64983274 </p>
            </Col>
            <Col md={12}>
              <p className="label-white-standard"> fans </p>
            </Col>
            <Col md={12}>
              <p className="label-white-standard"> following </p>
            </Col>
            <Col md={12}>
              <p className="label-light-pink-lavender"> friends </p>
            </Col>
            <Col md={12}>
              <p className="label-block-white-paragraph"> 218 3k1 1k2 </p>
            </Col>
            <Col md={12}>
              <p className="label-black-white"> 1k2 </p>
            </Col>
            <Col md={12}>
              <p className="label-white-standard"> 3k1 </p>
            </Col>
            <Col md={12} className="text-center">
              {" "}
              {/* <!-- TODO: Change placeholder image with higher res --> */}
              <img
                className="img-fluid"
                alt="Responsive image"
                src="http://path.to/replace/image"
              />
            </Col>{" "}
            <Col md={12}>
              <p className="label-white-standard"> logout </p>
            </Col>
            <Col md={12}>
              {/* <!-- TODO: Create unit test for edit_profile button-light-sky-blue-light-turquoise action --> */}
              <Button
                className="btn btn-lg btn-block button-light-sky-blue-light-turquoise"
                onClick={() => this.edit_profile()}
              >
                edit profile
              </Button>
            </Col>
          </Col>
        )}
      </Row>
    )
  }
}

function mapStateToProps(state) {
  return {
    authentication: state.authentication,
    data: state.edit_profile
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ edit_profile_action }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(editprofileView)
