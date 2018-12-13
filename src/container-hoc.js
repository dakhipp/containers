import React from 'react'
import _ from 'lodash'

export default function ContainerHoc(allProps) {
  const { children } = allProps

  // map over children and clone them with all other props attached to them
  const childrenWithProps = React.Children.map(children, child => {
    const props = _.omit(allProps, 'children')
    return React.cloneElement(child, { ...props })
  })

  return childrenWithProps
}
