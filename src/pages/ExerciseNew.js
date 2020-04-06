import React from 'react'
import ExerciseForm from '../components/ExerciseForm'
import Card from '../components/Card'
import Loading from '../components/Loading'
import FatalError from './FatalError'

class ExerciseNew extends React.Component {

    state= {
        form:{},
        loading: false,
        error: null
    }
    

    handleChange = e => {
       
        this.setState({
            form:{
                    ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = async e => {
        e.preventDefault()
        try {

            this.setState({
                loading: true
            })
                let config = {
                    method: 'POST',
                    headers:{
                        'Accept': 'application/json',
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(this.state.form)
                }
            let res = await fetch('http://localhost:8090/api/exercises', config)
            let json = await res.json()

            this.setState({
                loading: false
            })

            console.log(json);
            
            this.props.history.push('/exercise')

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

        return (
            <div className="row">
                <div className="col-sm">
                    <Card title={this.state.form.title}
                          description={this.state.form.description}
                          img={this.state.form.img}
                          leftColor={this.state.form.leftColor}
                          rightColor={this.state.form.rightColor}
                    />
                </div>
                <div className="col-sm">
                    <ExerciseForm 
                    onChange={this.handleChange} 
                    form={this.state.form}
                    onSubmit={this.handleSubmit} 
                    />
                </div>

        </div>
            
        )
    }
}

export default ExerciseNew