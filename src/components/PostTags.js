import React from 'react'
import { Link } from 'gatsby'
import { bs } from '../shevy'
import { formatStrForPath, v } from '../utils'
import { buttonStyles } from './Button'

const linkStyles = {
  ...buttonStyles,
  marginRight: bs(0.25),
  marginBottom: bs(0.25),
}

const formatItemPath = item => {
  return `tags/${formatStrForPath(item)}`
}

export default function PostTags({ items }) {
  return items && items.length ? (
    <div>
      <div
        css={{
          fontFamily: v('fonts-catamaran'),
          fontSize: '0.75em',
          lineHeight: 1.8,
          marginBottom: bs(0.25),
        }}
      >
        Tags
      </div>
      {items.map(item => (
        <Link css={linkStyles} key={item} to={formatItemPath(item)}>
          {item}
        </Link>
      ))}
    </div>
  ) : null
}
