import EducationCard from '@/components/EducationCard'
import { EducationProps } from '@/interfaces/educations'
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

interface EducationsCarouselProps {
  educations: EducationProps[];
}

export default function ProjectsCarousel({ educations }: EducationsCarouselProps) {
  
  const theme = useTheme()
  const classes = useStyles()
  const isSmall = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Carousel isRTL={false} breakPoints={breakPoints} itemsToShow={3} showArrows={!isSmall} className={classes.root}>
      {educations.map(education => (
        <div key={education.slug} className={classes.carouselItem}>
          <EducationCard education={education} />
        </div>
      ))}
    </Carousel>
  )
}
