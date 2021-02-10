import { Dispatch, useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import HamburgerMenu from '@/components/HamburgerMenu'
import { pages } from '@/data/pages'
import { useTheme, Theme, makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Drawer from '@material-ui/core/Drawer'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import NoSsr from '@material-ui/core/NoSsr'
import Switch from '@material-ui/core/Switch'
import clsx from 'clsx'
import { motion } from 'framer-motion'

const appBarHeight = 50
const drawerWidth = 320
const drawerConfigHeight = 40
const drawerFooterHeight = 60

const useStyles = makeStyles((theme: Theme) => ({

  // AppBar
  appbar: {
    height: `${appBarHeight}px`,
    backgroundColor: theme.palette.primary.main,
  },
  
  toolbar: {
    minHeight: `${appBarHeight}px`,
  },

  appbar__darkMode: {
    
  },
  appbar__darkModeText: {
    fontWeight: 'bold',
    color: theme.palette.type === 'light' ? theme.palette.secondary.main : theme.palette.secondary.light,
  },

  // Drawer
  drawer: {
    width: `${drawerWidth}px`,
    maxWidth: '90vw',
    flexShrink: 0,
  },
  drawer__paper: {
    width: `${drawerWidth}px`,
    maxWidth: '90vw',
    backgroundColor: theme.palette.secondary.main,
  },
  drawer__content: {
  },
  drawer__content__divider__grid: {
    width: '100%',
  },
  drawer__content__divider: {
    width: '100%',
    backgroundColor: theme.palette.secondary.dark,
  },
  drawer__content__navigation: {
    height: `calc(100vh - ${drawerConfigHeight}px - ${drawerFooterHeight}px)`,
    width: '100%',
    paddingLeft: '60px',
  },
  drawer__content_navigation__text: {
    fontSize: '19pt',
    fontFamily: 'monospace',
    color: theme.palette.secondary.light,
    '&:hover': {
      fontSize: '21pt',
      fontWeight: '500',
      textShadow: '1px 1px #ddd',
      cursor: 'pointer',
    },
  },
  drawer__content__config: {
    height: `${drawerConfigHeight}px`,
    width: '70%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  drawer__content__config__darkModeText: {
    fontWeight: 'bold',
    color: theme.palette.secondary.light,
  },
  drawer__content__footer: {
    height: `${drawerFooterHeight}px`,
  },
  drawer__content__footer__text__name: {
    color: theme.palette.secondary.light,
    fontSize: '11pt',
    fontWeight: 'bold',
  },
  drawer__content__footer__text__stack: {
    color: theme.palette.secondary.light,
    fontSize: '9.5pt',
  },

  // Main Content
  main: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    minHeight: '95vh',
    marginLeft: 0,
    marginTop: `calc(${appBarHeight}px)`,
    paddingTop: '3rem',
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    })
  },
  mainShift: {
    marginLeft: `${drawerWidth}px`,
    marginTop: 0,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    })
  },
  mainXl: {
    // Let alignItems center handle 
    // height: '100vh',
    // maxHeight: '100vh',
    // marginTop: 0,
    // paddingTop: 0,
  }
}))

interface LayoutProps {
  children?: React.ReactNode;
  setDarkMode: Dispatch<boolean>;
}
 
export default function Layout({ children, setDarkMode }: LayoutProps) {
  
  const theme = useTheme()
  const classes = useStyles()
  const router = useRouter()
  const drawerPersistent = useMediaQuery<boolean>(theme.breakpoints.up('lg'))
  const isXLarge = useMediaQuery<boolean>(theme.breakpoints.up('xl'))

  const [drawerOpen, setDrawerOpen] = useState<boolean>(false)

  useEffect(() => {
    setDrawerOpen(drawerPersistent)
  }, [drawerPersistent])
  
  return (
    <>
      <header>
        {/* NavBar */}
        {
          (drawerPersistent === false) &&
          <AppBar
            position='fixed'
          >
            <Toolbar className={classes.toolbar}>
              <Grid 
                container
                alignItems='center'
                justify='space-between'
              >
                <Grid 
                  item 
                  container 
                  alignItems='center' 
                  justify='flex-start'
                  spacing={2}
                  xs={9}
                  className={classes.appbar__darkMode}
                >
                  <Grid item>
                    <Typography className={classes.appbar__darkModeText}>
                      Dark Mode
                    </Typography>
                  </Grid>
                  <Grid item>
                    <NoSsr>
                      <Switch 
                        checked={theme.palette.type === 'dark'}
                        color='default'
                        onChange={() => setDarkMode(theme.palette.type === 'light')}
                      />
                    </NoSsr>
                  </Grid>
                </Grid>

                <Grid 
                  item 
                  container 
                  justify='flex-end' 
                  xs={3}
                >
                  <span onClick={() => setDrawerOpen(true)}>
                    <HamburgerMenu />
                  </span>
                </Grid>

              </Grid>
            </Toolbar>
          </AppBar>
        }

        {/* Drawer */}
        <Drawer 
          variant={drawerPersistent ? 'persistent' : 'temporary'}
          anchor='left'
          open={drawerOpen}
          className={classes.drawer}
          classes={{paper: classes.drawer__paper}}
          onClose={() => setDrawerOpen(false)}
        >
          
          {/* Drawer Content */}
          <Grid container className={classes.drawer__content}>

            {/* Navigation */}
            <Grid 
              item 
              container 
              direction='column' 
              justify='center'
              spacing={4}
              className={classes.drawer__content__navigation}
            >
              {
                pages.map(page => (
                  <Grid item>
                    <Link href={page.href}>
                      <Typography
                        align='left'
                        onClick={() => setDrawerOpen(drawerPersistent)}
                        className={classes.drawer__content_navigation__text}
                      >
                        &gt;&nbsp;{page.text}
                      </Typography>
                    </Link>
                  </Grid>
                ))
              }
              {/* <Grid item>
                <a href='https://blog.roncheong.me' target='_blank' rel='noreferrer'>
                  <Typography 
                    align='left'
                    className={classes.drawer__content_navigation__text}   
                  >
                    &gt;&nbsp;Blog
                  </Typography>
                </a>
              </Grid> */}

            </Grid>

            {
              drawerPersistent &&
              <Grid item className={classes.drawer__content__divider__grid}>
                <Divider className={classes.drawer__content__divider} />
              </Grid>
            }

            <Grid 
              item 
              container 
              alignItems='center' 
              justify='space-between' 
              className={classes.drawer__content__config}
            >
              {
                drawerPersistent &&
                <>
                  
                  <Grid item>
                    <Typography className={classes.drawer__content__config__darkModeText}>
                      Dark Mode
                    </Typography>
                  </Grid>
                  <Grid item>
                    <NoSsr>
                      <Switch 
                        checked={theme.palette.type === 'dark'}
                        color='default'
                        onChange={() => setDarkMode(theme.palette.type === 'light')}
                      />
                    </NoSsr>
                  </Grid>
                </>
              }
            </Grid>
            
            <Grid item className={classes.drawer__content__divider__grid}>
              <Divider className={classes.drawer__content__divider} />
            </Grid>

            <Grid item container direction='column' alignItems='center' justify='flex-end' className={classes.drawer__content__footer}>
              <Grid item>
                <Typography className={classes.drawer__content__footer__text__name}>
                  Ron Cheong's Portfolio Site
                </Typography>
              </Grid>
              <Grid item>
                <Typography className={classes.drawer__content__footer__text__stack}>
                  Next.js, Typescript, Material-UI
                </Typography>
              </Grid>
            </Grid>

          </Grid>
        </Drawer>
      </header>

      <main>
        <motion.div
          key={router.route}
          initial='pageInitial'
          animate='pageAnimate'
          variants={{
            pageInitial: {
              opacity: 0,
            },
            pageAnimate: {
              opacity: 1,
            },
          }}
          transition={{duration: 0.8}}
          className={clsx(classes.main, {[classes.mainShift]: drawerOpen && drawerPersistent, [classes.mainXl]: isXLarge})}
        >
          {children}
        </motion.div>
      </main>
    </>
  )
}
