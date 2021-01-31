import React from 'react'
import { connect } from 'react-redux'
import { getClassInfo } from '../../../redux/reducers/index'

import HalfHeaderBG from '../../HalfHeaderBG'

class CampusInfo extends React.Component {
  async componentDidMount() {
    try {
      await this.props.getClassInfo(this.props.id)
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    const {
      classDescription,
      className,
      classNumber,
      facultyName,
    } = this.props.classInfo
    console.log(this.props.classInfo)

    const h1 = facultyName
    const h3 = `${className} ${classNumber}: ${classDescription}`

    return (
      <HalfHeaderBG
        title={h1}
        description={h3}
        imgdiv='half-bg half-bg-search'
      />
    )
  }
}

const mapStateToProps = (state) => {
  console.log('Map state to props..')
  return {
    classInfo: state.classInfo,
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log('Map dispatching to props..')
  return {
    getClassInfo: (id) => dispatch(getClassInfo(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CampusInfo)
