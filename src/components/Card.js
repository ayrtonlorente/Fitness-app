import React from 'react'
import circlesImg from '../images/circles.png'
import './styles/Card.css'
import emptyImg from '../images/empty.png'


class Card extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            image:''
        }
    }



    render(){
        return (
           <div className="card mx-auto Fitness-Card"
           style={{
               backgroundImage:`url(${circlesImg}), linear-gradient(to right, ${this.props.leftColor || '#56CCF2'}, ${this.props.rightColor || '#2F80ED'})`
           }}
           >
               <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={this.props.img || emptyImg} className="float-right" alt="Cards" />
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{this.props.title}</h1>
                            <p>{this.props.description}</p>
                        </div>
                    </div> 
               </div>
           </div>
        )
    }
}

export default Card