import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { withStyles } from '@material-ui/core/styles';
import Icon from "../../node_modules/@material-ui/core/Icon/Icon";

const styles = theme => ({
    root: {
        display: 'flex',
    },
    paper: {
        marginRight: theme.spacing.unit * 2,
        fontSize: "2.25vw",
        backgroundColor:'blue',
        palette :
            {
                backgroundColor: 'blue'
            }
    },
    button:
        {
            fontSize: '3vw',
            color: '#00ff00',
        }

});

class DropdownMenu extends React.Component {
    state = {
        open: false,
        mounted: false
    };

    handleToggle = () => {
        if(this.state.mounted) this.setState(state => ({ open: !state.open }));
    };

    handleClose = event => {
        if (this.anchorEl.contains(event.target) || !this.state.mounted) {
            return;
        }

        this.setState({ open: false });
    };

    componentDidMount()
    {
        this.setState({mounted: true})
    }

    shouldComponentUpdate(np,ns)
    {
        console.dir(np,ns)
        if (!this.state.mounted && ns.mounted) return false;
        return this.state.mounted
    }

    render() {
        const { classes, items } = this.props;
        const { open } = this.state;
        let itemsMap;
            if(items) itemsMap =  items.map((item)  =>
        {
          return   <MenuItem style={{color: '#ffffcf', fontSize: '1.2vw', textAlign: 'center'}}
                      onClick={() =>
                      {
                          this.handleToggle();
                          item.func ? item.func() : console.warn("You must pass a menu item as {name:'foo',func:bar}");
                          }
                      }>
              {item.name}</MenuItem>


        });

               return (

                <div style={{width:'14vw'}}>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
                    <Button
                         style={{ fontSize:"1.75vw", backgroundColor:'#0a00fa', color:'#ffefff' }}
                        buttonRef={node => {
                            this.anchorEl = node;
                        }}
                        aria-owns={open ? 'menu-list-grow' : null}
                        aria-haspopup="true"
                        onClick={this.props.func ? ({handleToggle} = this, {func} = this.props)=>  {func(); handleToggle} : this.handleToggle}
                        fullWidth={true}
                    >

                        <Icon style={{fontSize:'2vw'}}>{this.props.icon}</Icon>
                        {this.props.title}
                    </Button>
                    {!this.props.items ? null :
    <Popper open={open} anchorEl={this.anchorEl} transition disablePortal style={{flex: 1}}>
        {({TransitionProps, placement}) => <Grow
            {...TransitionProps}
            id="menu-list-grow"
            style={{
                transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom', width: '14vw',
                backgroundColor: '#5717ffff',
            }}
        >
            <Paper>
                <ClickAwayListener onClickAway={this.handleClose}>
                    <MenuList style={{color: '#ffffcf', alignItems: 'center',}}>
                        {
                           itemsMap
                        }
                    </MenuList>
                </ClickAwayListener>
            </Paper>
        </Grow>}
    </Popper>}
                </div>

        );
    }
}

DropdownMenu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DropdownMenu);