import React, { useEffect, useState } from 'react'
import MUIBreadcrumbs from '@material-ui/core/Breadcrumbs'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  breadcrumbs: {
    marginBottom: 15,
  }
})

const convertBreadcrumb = (string) => {
  let item = string
    .replace(/-/g, ' ')
    .replace(/oe/g, 'ö')
    .replace(/ae/g, 'ä')
    .replace(/ue/g, 'ü')
  item = item.charAt(0).toUpperCase() + item.slice(1)
  return item
}

const Breadcrumbs = () => {
  const classes = useStyles()
  const router = useRouter()
  const [breadcrumbs, setBreadcrumbs] = useState([])

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split('/')
      linkPath.shift()

      const pathArray = linkPath.map((path, i) => {
        return { breadcrumb: path, href: '/' + linkPath.slice(0, i + 1).join('/') }
      });

      setBreadcrumbs(pathArray)
    }
  }, [router])

  return (
    <React.Fragment>
      <MUIBreadcrumbs className={classes.breadcrumbs}>
        <Link color="inherit" href="/borrowed-items">
          MRE Generator
        </Link>
        {breadcrumbs.map((breadcrumb, index) => {
          return (
            <React.Fragment>
              {index !== breadcrumbs.length-1 && (
                <Link key={breadcrumb.href} color="inherit" href={breadcrumb.href}>
                  {convertBreadcrumb(breadcrumb.breadcrumb)}
                </Link>
              )}
              {index === breadcrumbs.length-1 && (
                <Typography color="textPrimary">
                  {convertBreadcrumb(breadcrumb.breadcrumb)}
                </Typography>
              )}
            </React.Fragment>
          )
        })}
        
      </MUIBreadcrumbs>
    </React.Fragment>
  )
}
 
export default Breadcrumbs