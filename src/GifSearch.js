import React,{Component} from 'react';


class GifSearch extends Component{
    constructor(props){
        super(props)

        this.state = {
            name: '' 
        }
        this.setName = this.setName.bind(this);
        this.change = this.change.bind(this);
    }
    


    render(){
        return(
            <section>
                <input type="text" value={this.name} onChange={this.setName}/>
                <button onClick={this.change} >load</button>
            </section>
        )
    }
    setName(e){
        this.setState({
            name: e.target.value
        })
    }

    change(){
        this.props.func(this.state.name)
    }
}

export default GifSearch;