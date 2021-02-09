import { useState, useEffect } from 'react'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import CustomHead from '@/components/CustomHead'
import ProjectsCarousel from '@/components/ProjectsCarousel'
import ProjectCard from '@/components/ProjectCard'
import { ProjectData, ProjectProps } from '@/interfaces/projects'
import { projects } from '@/data/projects'
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

export interface ProjectsPageProps {
  projects: ProjectProps[]; 
}

export default function Projects({ projects }: ProjectsPageProps) {

  const theme = useTheme()
  const classes = useStyles()
  const router = useRouter()
  const isSmall = useMediaQuery(theme.breakpoints.down('md'))
  const drawerPersistent = useMediaQuery(theme.breakpoints.up('lg'))
  const [contentWidth, setContentWidth] = useState<string>('80%')
  const [projectsState, setProjectsState] = useState<ProjectProps[]>(projects)

  const [tagFilter, setTagFilter] = useState<string>(router.query.tag instanceof Array ? router.query.tag[0] : router.query.tag || 'all')
  const [typeFilter, setTypeFilter] = useState<string>(router.query.type instanceof Array ? router.query.type[0] : router.query.type || 'all')

  useEffect(() => {
    const query = router.query.tag instanceof Array ? router.query.tag[0] : router.query.tag || 'all'
    setTagFilter(query)
    if (query !== 'all' && query !== '') {
      setProjectsState(projects.filter(project => project.skills.map(skill => skill.category.slug).includes(query)))
    } else {
      setProjectsState(projects)
    }
  }, [router])

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
            Projects
          </Typography>
        </Grid>

        <Grid item xs={12} className={classes.filters}>
          <Grid container justify='center' spacing={isSmall ? 2 : 3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                select
                label='Tag'
                variant='outlined'
                size='small'
                InputLabelProps={{shrink: true}}
                value={tagFilter}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {router.push({pathname: router.pathname, query: {...router.query, tag: e.target.value}})}}
                className={classes.filter__select}
              >
                <MenuItem value='all' dense>All</MenuItem>
                {
                  Object.entries(skillCategories).map(each => (
                    <MenuItem 
                      key={each[0]} 
                      value={each[0]} 
                      dense
                    >
                      {each[1].title}
                    </MenuItem>
                    ))
                  }
              </TextField>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                select
                label='Type'
                variant='outlined'
                size='small'
                InputLabelProps={{shrink: true}}
                value={typeFilter}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {router.push({pathname: router.pathname, query: {...router.query, type: e.target.value}})}}
                className={classes.filter__select}
              >
                <MenuItem value='all' dense>All</MenuItem>
                {
                  Object.entries(skillCategories).map(each => (
                    <MenuItem 
                      key={each[0]} 
                      value={each[0]} 
                      dense
                    >
                      {each[1].title}
                    </MenuItem>
                  ))
                }
              </TextField>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <ProjectsCarousel 
            projects={projectsState} 
          />          
        </Grid>
      </Grid>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  
  const data = []

  Object.entries(projects).map((project) => {
    data.push({
      slug: project[0],
      ...(project[1] as ProjectData),
      skills: (project[1] as ProjectData).skills.map(skill => skills[skill]),
    })
  })

  return {
    props: {
      projects: data,
    }
  }
}
