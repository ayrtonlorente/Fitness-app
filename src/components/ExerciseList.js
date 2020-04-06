import React from 'react'
import Card  from './Card'


const ExerciseList = (props) => (
    <React.Fragment>
            {
                props.exercises.map((exercise) => {
                    return(
                        <Card 
                            title={exercise.title}
                            description={exercise.description}
                            img={exercise.img}
                            leftColor={exercise.leftColor}
                            rightColor={exercise.rightColor}
                        />
                    )
                })
            }
    </React.Fragment>
) 

export default ExerciseList