import React from 'react'
import { IconProps } from '../common'

const SvgComponent = ({ fill = '#2165E2', ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" {...props}>
    <defs>
      <path
        id="ic-menu-a"
        d="M25.6666667,18 C26.9553311,18 28,18.8954305 28,20 C28,21.1045695 26.9553311,22 25.6666667,22 L2.33333333,22 C1.04466892,22 -1.57815875e-16,21.1045695 0,20 C1.57815875e-16,18.8954305 1.04466892,18 2.33333333,18 L25.6666667,18 Z M25.6666667,0 C26.9553311,0 28,0.8954305 28,2 C28,3.1045695 26.9553311,4 25.6666667,4 L2.33333333,4 C1.04466892,4 -1.57815875e-16,3.1045695 0,2 C1.57815875e-16,0.8954305 1.04466892,0 2.33333333,0 L25.6666667,0 Z M25.6666667,9 C26.9553311,9 28,9.8954305 28,11 C28,12.1045695 26.9553311,13 25.6666667,13 L2.33333333,13 C1.04466892,13 -1.57815875e-16,12.1045695 0,11 C1.57815875e-16,9.8954305 1.04466892,9 2.33333333,9 L25.6666667,9 Z"
      />
    </defs>
    <g fill="none" fillRule="evenodd" transform="translate(4 5)">
      <mask id="ic-menu-b" fill="#fff">
        <use xlinkHref="#ic-menu-a" />
      </mask>
      <use fill={fill} xlinkHref="#ic-menu-a" />
      <g fill={fill} fillRule="nonzero" mask="url(#ic-menu-b)">
        <rect width="89" height="76" transform="translate(-30.074 -25)" />
      </g>
    </g>
  </svg>
)

export default SvgComponent
