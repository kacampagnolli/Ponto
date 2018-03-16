// Libraries
import * as React from 'react';
import { Link } from 'react-router-dom'

// Materiaul-ui
import { withStyles, StyleRulesCallback } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Typography from 'material-ui/Typography';
import Hidden from 'material-ui/Hidden';
import Divider from 'material-ui/Divider';


const drawerWidth = 240;

const styles: StyleRulesCallback = theme => ({
  root: {
    flexGrow: 1,
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});

interface LeftMenuComponentInternalProps extends LeftMenuComponentProps{
  classes: any
}

interface LeftMenuComponentProps {
    handleDrawerToggle: () => void
    drawerOpen: boolean
}

class LeftMenuComponent extends React.Component<LeftMenuComponentInternalProps> {

	render() {
    const { drawerOpen, classes, handleDrawerToggle } = this.props
    
    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />
        <Link to ="/usuarios">Listar usuario</Link>
        <Divider />
        <Link to ="/usuarios">Listar usuario</Link>
      </div>
    );
    
		return (
      <div className={classes.root}>
        
      <Hidden mdUp>
        <Drawer
          variant="temporary"
          anchor={'left'}
          open={drawerOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          variant="permanent"
          open
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography noWrap>{'You think water moves fast? You should see ice.'}</Typography>
        {this.props.children}
      </main>
    </div>
		);
	}
}

const LeftMenu =  withStyles(styles, { withTheme: true })(LeftMenuComponent) as React.ComponentType<LeftMenuComponentProps>;

export { LeftMenu }





