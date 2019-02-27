import React from 'react'
import PropTypes from 'prop-types'

import VegaLite from 'react-vega-lite'
import ContainerDimensions from 'react-container-dimensions'

class VegaLiteWrapper extends React.Component {
  render() {
    const { spec, data, responsiveWidth } = this.props

    if (responsiveWidth) {
      return (
        <ContainerDimensions>
          {({ width }) => {
            const responsiveSpec = { ...spec, width: Math.floor(width) }
            return <VegaLite spec={responsiveSpec} data={data} />
          }}
        </ContainerDimensions>
      )
    }

    return <VegaLite spec={spec} data={data} />
  }
}

VegaLiteWrapper.defaultProps = {
  responsiveWidth: true,
}

VegaLiteWrapper.propTypes = {
  spec: PropTypes.object.isRequired,
  data: PropTypes.any.isRequired,
  responsiveWidth: PropTypes.bool,
}

export default VegaLiteWrapper
