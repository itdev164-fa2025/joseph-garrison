import React from 'react'
import PropTypes from 'prop-types'
import { BaseContainer } from '../BaseContainer'

export const List = ({ children, ...rest}) => (
    <BaseContainer
        flex
        flexdirection = 'column'
        mx = 'auto'
        as = 'ul'
        {...rest}
    >
        {children}
    </BaseContainer>
)

List.propTypes = {
    children: PropTypes.node.isRequired
}