import React, { Component } from 'react';
import GifSearch from './GifSearch';
import Search from './Search';
import Giph from './Giph';

class GifList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            newName: '',
            GifList: []
        }
        this.changeName = this.changeName.bind(this);
    }
    
    componentWillUpdate(np, ns) {
        console.log(ns, np)
        Search.loadGif(ns.newName)
            .then(q => this.setState({GifList: q}))
        
    }

    render() {
        console.log(this.state.newName);
        const list = this.state.GifList.map(x => <Giph ar={x} key={x.id} />)
        return (
            <section>
                <GifSearch func={this.changeName} />
                {list}
            </section>
        )
    }
    changeName(set) {
        this.setState({
            newName: set
        })
    }
}
export default GifList;