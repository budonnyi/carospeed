import React, {Component} from 'react'
import classes from './Drawer.module.css'
import BackDrop from './../BackDrop'
import {NavLink} from "react-router-dom";

const links = [
    {
        to: '/',
        label: 'Главная',
        exact: true
    },
    {
        to: '/about',
        label: 'О нас',
        exact: false
    },
    {
        to: '/parameters',
        label: 'Характеристики',
        exact: false
    },
    {
        to: '/media',
        label: 'Медиа',
        exact: false
    },
    {
        to: '/downloads',
        label: 'Документы',
        exact: false
    },
    {
        to: '/prices',
        label: 'Цены',
        exact: false
    },
    {
        to: '/contacts',
        label: 'Связаться',
        exact: false
    },
]

class Drawer extends Component {

    clickHandler = () => {
        this.props.onClose()
    }

    renderLinks = () => {
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <NavLink
                        to={link.to}
                        exact={link.exact}
                        activeClassName={classes.active}
                        onClick={this.clickHandler}
                    >
                        {link.label}
                    </NavLink>

                </li>
            )
        })
    }

    render() {

        const cls = [classes.Drawer]

        if (!this.props.isOpen) {
            cls.push(classes.close)
        } else {

        }

        return (
            <React.Fragment>
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderLinks()}
                    </ul>
                </nav>

                {this.props.isOpen ? <BackDrop onClick={this.props.onClose}/> : null}
            </React.Fragment>
        )
    }
}

export default Drawer