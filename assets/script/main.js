
const Rating = {
  
  init: function(){
    this.cache_selectors()
    this.bind_events()
    this.set_initial_card_state()
  },

  cache_selectors: function(){
    this.$card_rating = document.querySelector('#card_rating')
    this.$form_rating = document.querySelector('#form_rating')
    this.$card_thanks = document.querySelector('#card_thanks')
    this.$submitted_rating = document.querySelector('#submitted_rating')
  },

  bind_events: function(){
    this.$form_rating.onsubmit = this.submit_rating.bind(this)
  },

  set_initial_card_state: function(){
    this.element_display_toggle(this.$card_thanks)
  },

  submit_rating: function(e){
    e.preventDefault()

    const submittedRating = document.querySelector('input[name="rating_value"]:checked')

    if(submittedRating){
      
      this.element_display_toggle(this.$card_rating)
      this.element_display_toggle(this.$card_thanks)

      this.display_submitted_rating(submittedRating.value)

    } else { /*do nothing until one rating is selected*/ }
  },

  element_display_toggle: function(element){
    element.style.display === 'none' ?
      element.style.display = 'flex' :
      element.style.display = 'none'
  },

  display_submitted_rating: function(submittedRating){
    this.$submitted_rating.innerText = submittedRating
  }
}

Rating.init()