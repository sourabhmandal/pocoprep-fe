import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Slide, useScrollTrigger } from '@mui/material';



interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children?: React.ReactElement<unknown>;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ?? <div />}
    </Slide>
  );
}



export default function TopAppBar(props: Props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <HideOnScroll {...props}>
        <AppBar position="sticky" elevation={2} sx={{ backgroundColor: '#37a645' }}>
          <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" component="div" style={{ flexGrow: 1 }}>
              Poco Prep
            </Typography>
            <IconButton edge="end" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <AddCircleOutlineIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </Box>
  );
}
