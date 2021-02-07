import { Theme, makeStyles } from '@material-ui/core/styles'
import Chip from '@material-ui/core/Chip'


interface BadgeProps {
  label: string;
  color: string;
}

export default function Badge({ label, color }: BadgeProps) {
  
  const useStyles = makeStyles((theme: Theme) => ({
    root: {
      background: color,
      borderRadius: '4px',
      height: '22px',
      fontSize: '9.4pt',
      fontWeight: 'bold',
      color: '#fafafa',
      textTransform: 'uppercase',
      '& $span': {
        padding: '6px',
      },
    },
  }))

  const classes = useStyles()
  
  return (
    <Chip 
      label={label}
      className={classes.root}
    />
  )
}