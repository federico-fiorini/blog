import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { bs } from '../shevy'

const LINKS = [
  { to: '/', title: 'Home' },
  { to: '/about', title: 'About' },
  { to: '/Portfolio', title: 'Portfolio' },
  { to: '/Podcast', title: 'Podcast' },
  { href: 'https://kyleshevlin.github.io', title: 'Resume' },
  { to: '/Contact', title: 'Contact' }
]

const Wrap = styled.nav`
  margin-left: -${bs(0.5)};
`

const linkStyles = css`
  display: inline-block;
  padding: ${bs(0.25)} ${bs(0.5)};
`

const A = styled.a`
  ${linkStyles};
`

const OurLink = styled(Link)`
  ${linkStyles};
`

const Nav = () => (
  <Wrap>
    {LINKS.map(link => {
      const { href, to, title } = link

      switch (true) {
        case Boolean(href):
          return (
            <A key={title} href={href} title={title}>
              {title}
            </A>
          )

        case Boolean(to):
          return (
            <OurLink key={title} title={title} to={to}>
              {title}
            </OurLink>
          )

        default:
          return null
      }
    })}
  </Wrap>
)

export default Nav