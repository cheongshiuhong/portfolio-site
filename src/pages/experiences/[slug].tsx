import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Link  from'next/link'
import Error from 'next/error'
import CustomHead from '@/components/CustomHead'
import Badge from '@/components/Badge'
import ImageLink from '@/components/ImageLink'
import { ExperienceProps } from '@/interfaces/experiences'
import { projects } from '@/data/projects'
import { experiences } from '@/data/experiences'
import { skills } from '@/data/skills'
import { teammates } from '@/data/teammates'
import { useTheme, Theme, makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import clsx from 'clsx'
import Box from '@material-ui/core/Box'
import { motion } from 'framer-motion'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '85%',
    maxWidth: '1480px',
  },
  rootSmall: {
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  leftArea: {
    // minHeight: '50vh',
  },
  image: {
    width: '100%',
    maxHeight: '320px',
    maxWidth: '540px',
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
    lineHeight: '28px',
  },
  chips: {
    '& > *': {
      marginRight: theme.spacing(0.75),
      marginBottom: theme.spacing(0.75),
    },
  },
  rightArea: {
    // maxHeight: '80vh',
    // overflowY: 'auto',
    // display: 'grid',
    // // alignItems: 'center',
    // justifyContent: 'center',
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
  project: {
    marginBottom: '12px',
  },
  projectTitle: {
    fontSize: '11pt',
  },
}))

interface ExperiencePageProps {
  experience: ExperienceProps;
}

export default function Experience({ experience }: ExperiencePageProps) {

  const theme = useTheme()
  const classes = useStyles()
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'))

  if (typeof experience === 'undefined') {
    return <Error statusCode={404} />
  }

  return (
    <>
      <CustomHead
        metaTitle={experience.title}
        metaDescription={`${experience.title} ${experience.subtitle}`}
        metaImage={experience.image}
      />
      <Grid 
        container
        justify='space-between'
        spacing={8}
        className={clsx(classes.root, {[classes.rootSmall]: isSmall})}
      >
        
        {/* Left Area */}
        <Grid item container direction='column' spacing={3} xs={12} xl={9} className={classes.leftArea}>
        
          {/* Image */}
          <Grid item>  
            <motion.div
              initial={{ y: -200 }}
              animate={{ y: 0 }}
              transition={{ duration: .3 }}
            >
              <img
                src={(theme.palette.type === 'dark' && experience.darkModeImage || experience.image)}
                alt={experience.title}
                className={classes.image}
              />
            </motion.div>
          </Grid>

          {/* Text */}
          <Grid item container direction='column' spacing={1}>
            
              {/* Title */}
              <Grid item>
                <motion.div
                  initial={{ y: 200 }}
                  animate={{ y: 0 }}
                  transition={{ duration: .3 }}
                >
                  <Typography className={classes.title}>
                    {experience.title}
                  </Typography>
                </motion.div>
              </Grid>

              {/* Subtitle */}
              <Grid item>
                <motion.div
                  initial={{ y: 200 }}
                  animate={{ y: 0 }}
                  transition={{ duration: .3 }}
                >
                  <Typography className={classes.subtitle}>
                    {experience.subtitle} ({experience.startDate} - {experience.endDate})
                  </Typography>
                </motion.div> 
              </Grid>

              {/* Description */}
              <Grid item>
                <motion.div
                 initial={{ y: 200 }}
                  animate={{ y: 0 }}
                  transition={{ duration: .3 }}
                >
                  <Typography 
                    dangerouslySetInnerHTML={{ __html: experience.description}} 
                    className={classes.description} 
                  />
                </motion.div>
              </Grid>

              {/* Skill Badges */}
              <Grid item>
                <motion.div
                  initial={{ y: 200 }}
                  animate={{ y: 0 }}
                  transition={{ duration: .3 }}
                  className={classes.chips}
                >
                  {
                    experience.skills.map(skill => (
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
          Boolean(experience.files.length || experience.projects.length) &&
          <Grid item container direction='column' spacing={3} xs={12} xl={3}>

            {/* Files */}
            {
              experience.files.map(file => (
                <Grid key={file.title} item container direction='column' alignItems='center' spacing={1}>
                  <Grid item>
                    <Typography
                      className={classes.rightAreaTitle}
                    >
                      {file.title}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <ImageLink>
                      <a href={file.url} target='_blank' rel='noreferrer' aria-label={`${experience.title} - ${file.title}`}>
                        <img src={file.thumbnail} className={classes.fileImage} />
                      </a>
                    </ImageLink>
                  </Grid>
                </Grid>
              ))
            }
          
            {/* Key Projects */}
            <Grid item container direction='column' alignItems='center' spacing={1}>
              <Grid item>
                <Typography
                  className={classes.rightAreaTitle}
                >
                  {experience.projects.length > 1 ? <>Key Projects</> : <>Key Project</>}
                </Typography>
              </Grid>
              {
                experience.projects.map(project => (
                  <Grid key={project.title} item container direction='column' alignItems='center' spacing={1} className={classes.project}>
                    <Grid item>
                      <Typography
                        align='center'
                        className={classes.projectTitle}
                      >
                        {project.title}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <ImageLink exitOnMount>
                        <Link href={`/projects/${project.slug}`}>
                          <a aria-label={`${experience.title} - ${project.title}`}>
                            <img 
                              src={(theme.palette.type === 'dark') && project.darkModeImage || project.image} 
                              alt={`${experience.title} - ${project.title}`}
                              className={classes.fileImage} 
                            />
                          </a>
                        </Link>
                      </ImageLink>
                    </Grid>
                  </Grid>
                ))
              }
            </Grid>
           
          </Grid>
        }
        
      </Grid>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  
  const paths = Object.keys(experiences).map(experienceSlug => ({
    params: {slug: experienceSlug},
  }))

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {

  const experience = experiences[ctx.params.slug as string]
  
  const data = {
    slug: ctx.params.slug,
    ...experience,
    projects: Object.entries(projects).filter(project => project[1].experience === ctx.params.slug).map(project => ({ slug: project[0], ...project[1]})),
    skills: experience.skills.map(skill => skills[skill] || {}),
  }

  return {
    props: {
      experience: data,
    }
  }
}
