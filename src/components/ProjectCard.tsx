import { useState } from 'react'
import { useRouter } from 'next/router'
import Badge from '@/components/Badge'
import { ProjectProps } from '@/interfaces/projects'
import { useTheme, Theme, makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Chip from '@material-ui/core/Chip'
import { motion } from 'framer-motion'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '400px',
    width: '100%',
    maxWidth: '360px',
    background: theme.palette.type === 'light' ? theme.palette.primary.dark : theme.palette.secondary.main,
    color: '#E8E8E8',
    borderRadius: '6px',
  },
  image: {
    height: '210px',
    width: '100%',
  },
  content: {
    padding: theme.spacing(1.5),
  },
  title: {
    height: '55px',
    fontSize: '13pt',
    fontWeight: 600,
    lineHeight: '1.35',
  },
  subtitle: {
    height: '55px',
    fontSize: '11.4pt',
    fontWeight: 500,
    lineHeight: '1.3',
  },
  dates: {
    height: '30px',
    fontSize: '10pt',
    fontWeight: 500,
    lineHeight: '1',
  },
  chips: {
    '& > *': {
      marginRight: theme.spacing(0.5),
    },
  },
}))

export interface ProjectCardProps {
  project: ProjectProps;
}

export default function ProjectCard({ project }: ProjectCardProps) {

  const theme = useTheme()
  const classes = useStyles()
  const router = useRouter()
  const [mounted, setMounted] = useState<boolean>(true)

  return (
    <>
      {
        mounted &&   
        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.1, transition: {duration: .2} }}
          whileHover={{ scale: [1, 1.08, 1.06], transition: { duration: .3 }}}
          whileTap={{ scale: 0.8, transition: { duration: .1 }}}
          drag='x'
          dragConstraints={{ left: 0, right: 0 }}
        >
          <Card className={classes.root}>
            <CardActionArea
              onClick={() => {
                setMounted(false)
                router.push(`projects/${project.slug}`)
              }}
            >
              <img 
                src={(theme.palette.type === 'dark' && project.darkModeImage || project.image)}
                alt={project.title}
                className={classes.image}
              />
              <CardContent className={classes.content}>
                <Typography component='h2' className={classes.title}>
                  {project.title}
                </Typography>
                <Typography className={classes.subtitle}>
                  {project.subtitle}
                </Typography>
                <Typography className={classes.dates}>
                  {project.startDate} &nbsp;-&nbsp; {project.endDate}
                </Typography>
                <div className={classes.chips}>
                  {
                    project.skills.slice(0, project.skillsToShow).map(skill => (
                      <Badge
                        key={skill.title}
                        label={skill.title}
                        color={skill.category.color}
                      />
                    ))
                  }
                </div>
              </CardContent>
              
            </CardActionArea>
          </Card>
        </motion.div>
      }
    </>
  )
}
