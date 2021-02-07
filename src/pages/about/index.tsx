import CustomHead from '@/components/CustomHead'
import { useTheme, Theme, makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import clsx from 'clsx'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '65%',
    marginBottom: '15px',
  },
  rootSmall: {
    width: '90%',
  },
  headerText: {
    fontFamily: 'monospace',
    fontSize: '24pt',
    fontWeight: 'bold', 
    color: theme.palette.type === 'light' ? theme.palette.secondary.main : theme.palette.secondary.light,
  },
  contentText: {
    fontSize: '14pt',
  }
}))

export default function About() {
  
  const theme = useTheme()
  const classes = useStyles()
  const isSmall = useMediaQuery<boolean>(theme.breakpoints.down('md'))

  return (
    <>
      <CustomHead
        metaTitle='About Me'
        metaDescription='aboutme about me page'
      />
      <Grid container justify='center' spacing={5} className={clsx(classes.root, {[classes.rootSmall]: isSmall})}>

        <Grid item>
          <Typography align='center' className={classes.headerText}>
            About Ron
          </Typography>
        </Grid>
        
        <Grid item>
          <Typography align='center' className={classes.contentText}>
            Ron is a penultimate year undergraduate at the Singapore University of Social Sciences, majoring in <strong>Finance</strong> with a minor in <strong>Math</strong>, expected to graduate <strong>First-Class</strong> in 2022.
            He possesses strong technical abilities and a solid passion-driven understanding of Finance, allowing him to excel in mathematical and programmatic applications, evident in his track record academically and in competitions.
          </Typography>
        </Grid>

        <Grid item>
          <Typography align='center' className={classes.contentText}>
            His past internship with <strong>Shopee</strong> as an <strong>Automation Specialist</strong> in the Regional Finance department leveraged his technical abilities where he acted simultaneously as a consultant and a developer, providing programmatic solutions to business problems, going as far as conceptualizing and developing a full-stack web application from scratch.
            He is now in a <strong>Software Engineering</strong> role with <strong>Solar AI</strong>, further exploring modern technologies. 
          </Typography>
        </Grid>

      </Grid>
    </>
  )
}
