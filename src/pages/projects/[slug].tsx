import { useState, useEffect } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Link  from'next/link'
import Error from 'next/error'
import CustomHead from '@/components/CustomHead'
import Badge from '@/components/Badge'
import { ProjectProps } from '@/interfaces/projects'
import { projects } from '@/data/projects'
import { experiences } from '@/data/experiences'
import { skills } from '@/data/skills'
import { teammates } from '@/data/teammates'
import { useTheme, Theme, makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import CardMedia from '@material-ui/core/CardMedia'
import { AiFillGithub } from 'react-icons/ai'
import { motion } from 'framer-motion'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    // height: '90%',
    width: '85%',
    maxWidth: '1480px',
  },
  image: {
    maxHeight: '320px',
    width: '540px',
    borderRadius: '10px',
    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    '&:hover': {
      boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    },
  },
  button: {
    background: theme.palette.type === 'light' ? theme.palette.primary.dark : theme.palette.secondary.light,
    color: theme.palette.type === 'light' ? theme.palette.secondary.light : theme.palette.primary.dark,
    textTransform: 'none',
    fontSize: '11pt',
    paddingLeft: '12px',
    paddingRight: '12px',
    '&:hover': {
      background: theme.palette.type === 'light' ? theme.palette.secondary.main : theme.palette.primary.light,
    },
  },
  title: {
    fontSize: '18pt',
    fontWeight: 800,
  },
  subtitle: {
    fontSize: '14.2pt',
    fontWeight: 700,
  },
  association: {
    fontSize: '12.2pt',
    fontWeight: 'bold',
  },
  description: {
    fontSize: '12pt',
    marginTop: '12px',
    marginBottom: '12px',
  },
  chips: {
    '& > *': {
      marginRight: theme.spacing(0.5),
    },
  },
  rightAreaTitle: {
    fontSize: '14pt',
    fontWeight: 'bold',
  },
  fileImage: {
    maxHeight: '400px',
    width: '180px',
    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    '&:hover': {
      boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    },
  },
  teammateName: {
    fontSize: '12pt',
    '&:hover': {
      fontSize: '13pt',
    },
  }
}))

interface ProjectPageProps {
  project: ProjectProps;
}

export default function Project({ project }: ProjectPageProps) {

  const theme = useTheme()
  const classes = useStyles()
  const isSmall = useMediaQuery(theme.breakpoints.down('xl'))

  if (typeof project === 'undefined') {
    return <Error statusCode={404} />
  }

  return (
    <>
      <CustomHead
        metaTitle={project.title}
        metaDescription={`${project.title} ${project.subtitle}`}
      />
      <Grid 
        container
        justify='space-between'
        spacing={8}
        className={classes.root}
      >
        
        {/* Left Area */}
        <Grid item container direction='column' spacing={3} xs={12} xl={project.files.length || project.teammates ? 9 : 9}>
        
          {/* Image */}
          <Grid item>  
            <motion.div
              initial={{ y: -200 }}
              animate={{ y: 0 }}
              transition={{ duration: .5 }}
            >
              <img
                src={(theme.palette.type === 'dark' && project.darkModeImage || project.image)}
                alt={project.title}
                className={classes.image}
              />
            </motion.div>
          </Grid>

          {/* Buttons */}
          <Grid item container spacing={2}>
            {
              Boolean(project.projectUrl) &&
              <Grid item>
                <motion.div
                  initial={{ y: 200 }}
                  animate={{ y: 0 }}
                  transition={{ duration: .5 }}
                >
                  <a 
                    href={project.projectUrl}
                    target='_blank'
                    rel='noreferrer'
                    aria-label={`View Project: ${project.title}`}
                  >
                    <Button
                      className={classes.button}
                    >
                      View Project
                    </Button>
                  </a>
                </motion.div>
              </Grid>
            }
            {
              Boolean(project.codeUrl) &&
              <Grid item>
                <motion.div
                  initial={{ y: 200 }}
                  animate={{ y: 0 }}
                  transition={{ duration: .5 }}
                >
                 <a 
                    href={project.codeUrl}
                    target='_blank'
                    rel='noreferrer'
                    aria-label={`View Code: ${project.title}`}
                  >
                    <Button
                      startIcon={<AiFillGithub />}
                      className={classes.button}
                    >
                      View Code
                    </Button>
                  </a>
                </motion.div>
              </Grid>
            }
          </Grid>

          {/* Text */}
          <Grid item container direction='column' spacing={1}>
            
              {/* Title */}
              <Grid item>
                <motion.div
                  initial={{ y: 200 }}
                  animate={{ y: 0 }}
                  transition={{ duration: .5 }}
                >
                  <Typography className={classes.title}>
                    {project.title}
                  </Typography>
                </motion.div>
              </Grid>

              {/* Subtitle */}
              <Grid item>
                <motion.div
                  initial={{ y: 200 }}
                  animate={{ y: 0 }}
                  transition={{ duration: .5 }}
                >
                  <Typography className={classes.subtitle}>
                    {project.subtitle} ({project.startDate} - {project.endDate})
                  </Typography>
                </motion.div> 
              </Grid>
                
              {/* Association */}
              {
                Boolean(project.experience.slug) && 
                <Grid item>
                  <motion.div
                    initial={{ y: 200 }}
                    animate={{ y: 0 }}
                    transition={{ duration: .5 }}
                  >
                    <Typography className={classes.association}>
                      Associated with experience:&nbsp;
                      <Link href={`/experiences/${project.experience.slug}`}>
                        <a aria-label={project.experience.title}>
                          <u>
                            {project.experience.title}
                          </u>
                        </a>
                      </Link>
                    </Typography>
                  </motion.div>
                </Grid>
              }

              {/* Description */}
              <Grid item>
                <motion.div
                 initial={{ y: 200 }}
                  animate={{ y: 0 }}
                  transition={{ duration: .5 }}
                >
                  <Typography 
                    dangerouslySetInnerHTML={{ __html: project.description}} 
                    className={classes.description} 
                  />
                </motion.div>
              </Grid>

              {/* Skill Badges */}
              <Grid item>
                <motion.div
                  initial={{ y: 200 }}
                  animate={{ y: 0 }}
                  transition={{ duration: .5 }}
                  className={classes.chips}
                >
                  {
                    project.skills.map(skill => (
                      <Badge
                        key={skill.title}
                        label={skill.title}
                        color={skill.category.color}
                      />
                    ))
                  }
                </motion.div>
              </Grid>

          </Grid>

        </Grid>

        {/* Right Area */}
        {
          (Boolean(project.files.length) || Boolean(project.teammates)) &&
          <Grid item container direction='column' spacing={3} xs={12} xl={3}>

            {/* Files */}
            {
              project.files.map(file => (
                <Grid key={file.title} item container direction='column' alignItems='center' spacing={1}>
                  <Grid item>
                    <Typography
                      className={classes.rightAreaTitle}
                    >
                      {file.title}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <motion.div
                      whileHover={{ scale: [1, 1.08, 1.05], transition: { duration: .3 } }}
                    >
                      <a href={file.url} target='_blank' rel='noreferrer' aria-label={`${project.title} - ${file.title}`}>
                        <img src={file.thumbnail} className={classes.fileImage} />
                      </a>
                    </motion.div>
                  </Grid>
                </Grid>
              ))
            }

            {/* Teammates */}
            {
              Boolean(project.teammates) &&
              <Grid item container direction='column' alignItems='center' spacing={1}>
                <Grid item>
                  <Typography className={classes.rightAreaTitle}>
                    {(project.teammates.length > 1) ? <>Teammates</> : <>Teammate</>}
                  </Typography>
                </Grid>
                <Grid item container direction='column' alignItems='center' spacing={1}>
                  {
                    project.teammates.map(teammate => (
                      <Grid item key={teammate.name}>
                        <a 
                          href={teammate.url} 
                          target='_blank' 
                          rel='noreferrerr' 
                          aria-label={`${teammate.name}`}
                        >
                          <Typography className={classes.teammateName}>
                            {teammate.name}
                          </Typography>
                        </a>
                      </Grid>
                    ))
                  }
                </Grid>
              </Grid>
            }

          </Grid>
        }
        
      </Grid>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  
  const paths = Object.keys(projects).map(projectSlug => ({
    params: {slug: projectSlug},
  }))

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {

  const project = projects[ctx.params.slug as string]
  
  const data = {
    slug: ctx.params.slug,
    ...project,
    experience: {slug: project.experience, ...(experiences[project.experience] || {})},
    skills: project.skills.map(skill => skills[skill] || {}),
  }

  if (project.teammates) {
    data.teammates = project.teammates.map(teammate => teammates[teammate] || {})
  }

  return {
    props: {
      project: data,
    }
  }
}
