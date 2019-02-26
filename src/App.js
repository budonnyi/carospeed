import React from 'react';
import './App.css';
import Layout from './hoc'
import Menu from './components/menu/';
import MainPage from './components/mainpage/';
import Parameters from './components/parameters/';
import Media from './components/media/';
import Advantages from './components/advantages/';
import Downloads from './components/downloads/';
import Info from './components/info/';
import './styles.css';
import './images/header-bg.jpg'
import {Route} from "react-router-dom";
import Contacts from "./components/contacts";
import Priceing from "./components/prices";
import Footer from "./components/footer";

class App extends React.Component {

    state = {
        menu: false
    }

    render() {
        return (
            <Layout>
                <div className="App">
                    {/*<Menu/>*/}
                    {/*<Drawer*/}
                        {/*isOpen={this.state.menu}*/}
                        {/*onClose={this.menuCloseHandler}*/}
                    {/*/>*/}

                    {/*<MenuToggle*/}
                        {/*onToggle={this.toggleMenuHandler}*/}
                        {/*isOpen={this.state.menu}*/}
                    {/*/>*/}
                    <div>
                        {/*<Priceing/>*/}
                        <Route path='/' exact component={MainPage}/>
                        <Route path='/advantages' component={Advantages}/>
                        <Route path='/media' component={Media}/>
                        <Route path='/parameters' component={Parameters}/>
                        <Route path='/info' component={Info}/>
                        <Route path='/priceing' component={Priceing}/>
                        <Route path='/downloads' component={Downloads}/>
                        <Route path='/contacts' component={Contacts}/>

                        <Footer/>

                    </div>
                </div>
            </Layout>
        );
    }
}

export default App;