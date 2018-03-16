// Libraries
import * as React from 'react';

// Material-ui
import { withStyles, StyleRulesCallback } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Typography from 'material-ui/Typography';

const drawerWidth = 240;

const styles: StyleRulesCallback = theme => ({
	root: {
		flexGrow: 1,
		height: 430,
		zIndex: 1,
		overflow: 'hidden',
		position: 'relative',
		display: 'flex',
		width: '100%',
      },
      appBar: {
        position: 'absolute',
        marginLeft: drawerWidth,
        [theme.breakpoints.up('md')]: {
          width: `calc(100% - ${drawerWidth}px)`,
        },
      },
      navIconHide: {
        [theme.breakpoints.up('md')]: {
          display: 'none',
        },
      },
});

interface TopMenuComponentProps {
    handleDrawerToggle: () => void
}

interface TopMenuComponentInternalProps extends TopMenuComponentProps{
    classes: any
}


class TopMenuComponent extends React.PureComponent<TopMenuComponentInternalProps>{
    render() {
        const { classes, handleDrawerToggle } = this.props
        console.log(handleDrawerToggle)
        return (
            <div>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerToggle}
                        className={classes.navIconHide}
                        >
                        <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit" noWrap>
                        Responsive drawer
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
} 

const TopMenu = withStyles(styles, { withTheme: true })(TopMenuComponent) as React.ComponentType<TopMenuComponentProps>;


export {TopMenu}
