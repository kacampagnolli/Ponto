import * as React from 'react';
import Drawer from  'material-ui/Drawer'; 
import Hidden from 'material-ui/Hidden';


export class Menu extends React.PureComponent{
    render() {
        return (
            <div>
                <Hidden mdUp>
                    <Drawer 
                        variant="temporary"
                        ModalProps={{
                            keepMounted: true,
                        }}
                    >
                    </Drawer>
                </Hidden>
                <Hidden smDown implementation="css">
                    <Drawer
                        variant="permanent"
                        open
                    >
                    </Drawer>
                </Hidden>
            </div>
        );
    }
} 

