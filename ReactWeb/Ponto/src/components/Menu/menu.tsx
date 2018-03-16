// Libraries
import React from 'react';
import { observable, runInAction, action } from 'mobx';
import { observer } from 'mobx-react';

// Components
import { TopMenu } from './topmenu'
import { LeftMenu } from './leftmenu'

// Material-ui
import { withStyles, StyleRulesCallback } from 'material-ui/styles';

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
});

interface MenuComponentProps{
	classes: any
}

@observer
class MenuComponent extends React.Component<MenuComponentProps> {
	@observable public drawerOpen: boolean = true;
	
	constructor(props: any){
		super(props)
		this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
	}

	@action 
	handleDrawerToggle(){
		runInAction(() => {
			this.drawerOpen = !this.drawerOpen;
			
		});
	}
	
	 render() {
		const { classes } = this.props
		return (
			<div className={classes.root}>
				<TopMenu handleDrawerToggle={this.handleDrawerToggle}/>
				<LeftMenu drawerOpen={this.drawerOpen} handleDrawerToggle={this.handleDrawerToggle} {...this.props}/>
			</div>
		);
	}
}

const Menu = withStyles(styles, { withTheme: true })(MenuComponent) as React.ComponentType;

export { Menu }
