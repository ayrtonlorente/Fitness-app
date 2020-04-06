import React from 'react'
import ExerciseList  from '../components/ExerciseList'
import Welcome from '../components/Welcome'
import ButtonExercises from '../components/ButtonExercises'
import Loading from '../components/Loading'
import FatalError from './FatalError'

class Exercises extends React.Component{

    
        state = {
            data: [],
            loading: true,
            error: null
            

        }
    

    async componentDidMount(){
        await  this.fetchExercises()
    }


    fetchExercises = async () =>  {
        try {
            let res = await fetch('http://localhost:8090/api/exercises')
            let data = await res.json()

            this.setState({
                data,
                loading: false
            })
        
     
        } catch (error) {
            this.setState({
                loading: false,
                error: error
            })
        }

        
    }


    render(){
        if (this.state.loading) {
           return <Loading/>
        }

        if (this.state.error) {
            return <FatalError/>
        }

        return(
        <React.Fragment>
            <Welcome
                 userName="Ayrton"
            />
            <ExerciseList exercises={this.state.data}/>
            <ButtonExercises img="https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/add.png?alt=media&token=fbe1d973-4b4f-42d8-b76e-2c4354f6ed9d" />
            
       </React.Fragment>)
    }

}
export default Exercises