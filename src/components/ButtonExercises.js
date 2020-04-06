import React from 'react'
import './styles/ButtonExercises.css'
import { Link } from 'react-router-dom'


const ButtonExercises = (props) => (
        <div className="button" >
            <Link className="link" to="/exercise/new">
            <img className="img" src={props.img} alt="add button"/>
            </Link>
        </div>
)

export default ButtonExercises