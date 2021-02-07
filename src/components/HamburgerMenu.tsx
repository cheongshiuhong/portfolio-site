import { Theme, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '45px',
    padding: '5px',
    paddingRight: '0',
    display: 'inline-block',
  },
  line1: {
    height: '3px',
    width: '18px',
    marginTop: '5px',
    marginBottom: '5px',
    marginLeft: '0',
    marginRight: '0',
    background: theme.palette.type === 'light' ? theme.palette.secondary.main : theme.palette.secondary.light,
  },
  line2: {
    height: '3px',
    width: '30px',
    marginTop: '5px',
    marginBottom: '5px',
    marginLeft: '0',
    marginRight: '0',
    background: theme.palette.type === 'light' ? theme.palette.secondary.main : theme.palette.secondary.light,
  },
  line3: {
    height: '3px',
    width: '18px',
    marginTop: '5px',
    marginBottom: '5px',
    marginLeft: '12px',
    marginRight: '0',
    background: theme.palette.type === 'light' ? theme.palette.secondary.main : theme.palette.secondary.light,
  },
}))

export default function HamburgerMenu() {
  
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.line1}></div>
      <div className={classes.line2}></div>
      <div className={classes.line3}></div>
    </div>
  )
}
