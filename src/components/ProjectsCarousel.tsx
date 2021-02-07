import ProjectCard from '@/components/ProjectCard'
import { ProjectProps } from '@/interfaces/projects'
import Carousel from 'react-elastic-carousel'
import { useTheme, Theme, makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const breakPoints = [
  { width: 1, itemsToShow: 1, itemsToScroll: 1 },
  { width: 720, itemsToShow: 2, itemsToScroll: 2 },
  { width: 1000, itemToShow: 3, itemsToScroll: 3 },
]

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: 0,
    paddingTop: 0,
  },
  carouselItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '400px',
    width: '100%',
    backgroundColor: 'inherit',
    color: '#e0e0e0',
    margin: '15px',
    overflow: 'visible',
  }
}))

interface ProjectsCarouselProps {
  projects: ProjectProps[];
}

export default function ProjectsCarousel({ projects }: ProjectsCarouselProps) {
  
  const theme = useTheme()
  const classes = useStyles()
  const isSmall = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Carousel isRTL={false} breakPoints={breakPoints} itemsToShow={3} showArrows={!isSmall} className={classes.root}>
      {projects.map(project => (
        <div key={project.slug} className={classes.carouselItem}>
          <ProjectCard project={project} />
        </div>
      ))}
    </Carousel>
  )
}
