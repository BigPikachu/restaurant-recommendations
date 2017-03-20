import React from 'react'
import ReviewForm from '../components/ReviewForm'
import SelectField from '../components/SelectField'

class FormContainer extends React.Component {
 constructor(props) {
   super(props)
   this.state ={
     name:'Testing Name',
     content:'Testing Content',
     starOptions: [{value: 20, star:'one star'}, {value:40, star:'two stars'}, {value: 60, star:'three stars'}, {value: 80, star:'four stars'}, {value: 100, star:'five stars'}],
     rating: ''
   }
   this.handleNameChange = this.handleNameChange.bind(this)
   this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
   this.handleRatingSelected = this.handleRatingSelected.bind(this)
   this.handleSubmit = this.handleSubmit.bind(this)
 }

 handleNameChange(event){
   this.setState({name: event.target.value})
   console.log(this.state.name)
 }

 handleDescriptionChange(event){
   this.setState({content: event.target.value})
 }

handleRatingSelected(event){
  this.setState({rating: event.target.value})
}

handleSubmit(event){
  event.preventDefault();
  let reviewPayLoad = {
    restaurant_id: this.props.restaurantSelected,
    name: this.state.name,
    rating: this.state.rating,
    content: this.state.content
  }
  this.props.trackReview(reviewPayLoad);
  console.log('the submit button was hit')
}

 render () {

   return (
        <form className='reviewField' onSubmit={this.handleSubmit}>
          <label>Just to push things down<input name='yay' type='text' /></label>
          <ReviewForm
          label='Name'
          name='name'
          content={this.state.name}
          handlerFunction={this.handleNameChange}
          />
          <SelectField
          name='stars'
          label='Restaurant Rating'
          options={this.state.starOptions}
          selectedOption={this.state.rating}
          handleSelected={this.handleRatingSelected}
          />
          <ReviewForm
          label='Description'
          name='description'
          content={this.state.content}
          handlerFunction={this.handleDescriptionChange}
          />
          <input className='button' type='submit' value='Submit' />

        </form>

   )
 }
}

export default FormContainer
