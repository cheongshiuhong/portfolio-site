import { useState, useEffect } from 'react'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import CustomHead from '@/components/CustomHead'
import ImageLink from '@/components/ImageLink'
import useMixpanel from '@/components/helpers/useMixpanel'
import { pages } from '@/data/pages'

import { useTheme, Theme, makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grow from '@material-ui/core/Grow'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { TiDocumentText } from 'react-icons/ti'
import { motion } from 'framer-motion'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '90%',
  },
  avatar: {
    marginBottom: '15px',
  },
  avatarImg: {
    height: '120px',
    width: '120px',
    border: `3px solid ${theme.palette.type === 'light' ? theme.palette.secondary.main : theme.palette.secondary.light}`,
  },
  name: {
    height: '38px',
  },
  nameText: {
    fontFamily: 'poppins',
    fontSize: '17pt',
    '&:hover': {
      fontSize: '18pt',
    },
  },
  interests: {
    height: '40px',
  },
  interestText: {
    fontSize: '13pt',
    fontFamily: 'monospace',
    '&:hover': {
      fontSize: '14pt',
      cursor: 'pointer',
    },
  },
  links: {
    height: '80px',
  },
  linkText: {
    fontSize: '22pt',
    '&:hover': {
      fontSize: '24pt',
    },
  },
  resumeButton: {
    width: '224px',
    background: theme.palette.type === 'light' ? theme.palette.primary.dark : theme.palette.secondary.light,
    color: theme.palette.type === 'light' ? theme.palette.secondary.light : theme.palette.primary.dark,
    '&:hover': {
      background: theme.palette.type === 'light' ? theme.palette.secondary.main : theme.palette.primary.light,
    },
  },
  navigators: {
    width:'80%',
    maxWidth: '480px',
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
    marginTop: '2rem',
    marginBottom: '1rem',
  },
  navigator__avatar: {
    height: '65px',
    width: '65px',
    borderRadius: 0,
    color: 'white',
  },
  navigator__text: {
    fontSize: '10.5pt',
  },
}))

export default function Home() {

  const theme = useTheme()
  const classes = useStyles()
  const router = useRouter()
  const mixpanel = useMixpanel()

  const drawerPersistent = useMediaQuery(theme.breakpoints.up('lg'))

  return (
    <>
      <CustomHead 
        metaTitle='Home'
        metaDescription='home page download resume'
        metaImage='/media/images/shiuhong.jpg'
      />
      <Grid container direction='column' alignItems='center' className={classes.root}>
        
        {/* Avatar */}
        <Grid item className={classes.avatar}>
          <Avatar src='/media/images/shiuhong.jpg' className={classes.avatarImg}/>
        </Grid>

        {/* Name */}
        <Grid item className={classes.name}>
          <Typography className={classes.nameText}>
            Cheong Shiu Hong, Ron
          </Typography>
        </Grid>

        {/* Interests */}
        <Grid item className={classes.interests}>
          <Typography 
            component='span' 
            onClick={() => {router.push({pathname: '/projects', query: {tag: 'tech'}})}}
            className={classes.interestText} 
            >
            Tech
          </Typography>
          <Typography component='span'>
            &ensp;|&ensp;
          </Typography>
          <Typography 
            component='span' 
            onClick={() => {router.push({pathname: '/projects', query: {tag: 'mathstats'}})}}
            className={classes.interestText}
            >
            Math
          </Typography>
          <Typography component='span'>
            &ensp;|&ensp;
          </Typography>
          <Typography 
            component='span' 
            onClick={() => {router.push({pathname: '/projects', query: {tag: 'finance'}})}}
            className={classes.interestText}
          >
            Finance
          </Typography>
        </Grid>

        {/* Links */}
        <Grid item container justify='center' spacing={3} className={classes.links}>
          <Grid item>
            <Typography className={classes.linkText}>
              <a href='https://www.linkedin.com/in/cheongshiuhong/' target='_blank' rel='noreferrer' aria-label='LinkedIn'>
                <AiFillLinkedin />
              </a>
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.linkText}>
              <a href='https://github.com/cheongshiuhong/' target='_blank' rel='noreferrer' aria-label='GitHub'>
                <AiFillGithub />
              </a>
            </Typography>
          </Grid>
        </Grid>

        {/* Download Resume */}
        <Grid item>
          <Button
            variant='contained'
            className={classes.resumeButton}
            onClick={() => mixpanel.track('resumeDownload', {from: router.asPath})}
          >
            <a download='' href='/media/files/ShiuHong_Cheong_Resume.pdf'>
                Download Resume
            </a>
          </Button>
        </Grid>

        {/* Navigators */}
        {
          !drawerPersistent && 
          <Grid item container justify='center' spacing={2} className={classes.navigators}>
            {
              pages.filter(page => page.href !== '/').map(page => (
                <Grid key={page.text} item container justify='center' xs={6} sm={3} lg={2}>
                  <ImageLink exitOnMount>
                    <Avatar 
                      src={theme.palette.type === 'dark' && page.darkModeIcon || page.icon} 
                      className={classes.navigator__avatar} 
                      onClick={() => router.push(page.href)}
                    />
                    <Typography align='center' className={classes.navigator__text}>
                      {page.text}
                    </Typography>
                  </ImageLink>
                </Grid>
              ))
            }
          </Grid>
        }
        
      </Grid>
      
    </>
  )
}
