import { useState, useEffect } from 'react'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import CustomHead from '@/components/CustomHead'
import ExperiencesCarousel from '@/components/ExperiencesCarousel'
import { ExperienceData, ExperienceProps } from '@/interfaces/experiences'
import { experiences } from '@/data/experiences'
import { skillCategories, skills } from '@/data/skills'
import { useTheme, Theme, makeStyles } from '@material-ui/core/styles'
import  useMediaQuery from '@material-ui/core/useMediaQuery'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import clsx from 'clsx'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '85%',
    maxWidth: '1480px',
  },
  rootSmall: {
    width: '100%',
  },
  headerText: {
    fontFamily: 'monospace',
    fontSize: '24pt',
    fontWeight: 'bold', 
    color: theme.palette.type === 'light' ? theme.palette.secondary.main : theme.palette.secondary.light,
  },
  filters: {
    width: '70%',
    maxWidth: '500px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  filter__select: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
}))

export interface ExperiencesPageProps {
  experiences: ExperienceProps[]; 
}

export default function Projects({ experiences }: ExperiencesPageProps) {

  const theme = useTheme()
  const classes = useStyles()
  const router = useRouter()
  const isSmall = useMediaQuery(theme.breakpoints.down('md'))
  const drawerPersistent = useMediaQuery(theme.breakpoints.up('lg'))
  const [contentWidth, setContentWidth] = useState<string>('80%')

  return (
    <>
      <CustomHead
        metaTitle='Projects'
        metaDescription='projects page'
      />
      <Grid 
        container 
        direction='column' 
        justify='center'
        spacing={4}
        className={clsx(classes.root, {[classes.rootSmall]: isSmall})}
      >
        <Grid item xs={12}>
          <Typography 
            align='center' 
            className={classes.headerText}
          >
            Experiences
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <ExperiencesCarousel experiences={experiences} />          
        </Grid>
      </Grid>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  
  const data = []

  Object.entries(experiences).map((experience) => {
    data.push({
      slug: experience[0],
      ...(experience[1] as ExperienceData),
      skills: (experience[1] as ExperienceData).skills.map(skill => skills[skill] || {})
    })
  })

  return {
    props: {
      experiences: data,
    }
  }
}
