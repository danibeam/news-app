import React from 'react'
import {Link} from 'react-router-dom'

// import { SvgIcon } from '@material-ui/core';

const Logo = props => {
  return (
    <svg
      version='1.1'
      id='Capa_1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      x='0px'
      y='0px'
      width={props.width}
      height={props.height}
      viewBox={props.viewBox}
      style={props.style} /*style="enable-background:new 0 0 316.812 316.811;"*/
      xmlSpace='preserve'
    >
      <Link to='/' cursor='pointer'>
        <path
          fill={props.fill}
          d='M282.449,316.811h-51.211V129.319c0-28.827-5.024-49.358-15.085-61.597C206.105,55.49,189.413,49.37,166.09,49.37
                  c-22.952,0-42.108,8.73-57.468,26.179c-15.362,17.448-23.049,42.489-23.049,75.108v166.154H34.362V0l48.365,12.105v42.963h1.138
                  c24.054-34.52,54.734-51.781,92.048-51.781c34.472,0,60.846,9.149,79.122,27.452c18.275,18.306,27.414,44.526,27.414,78.667
                  V316.811z'
        />
      </Link>
    </svg>
  )
}

export default Logo
