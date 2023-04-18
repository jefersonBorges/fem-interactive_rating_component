
const Rating = {
  init: function(){
    this.cache_selectors()
    console.log(this)
  },
  cache_selectors: function(){
    this.$rating_card = document.querySelector('#rating')
    this.$rating_form = document.querySelector('#rating_form')
    this.$rating_value = document.getElementsByName('rating_value')
    this.$submit_button = document.querySelector('#submit_button')
    this.$thanks_card = document.querySelector('#thanks')
    this.$rated = document.querySelector('#rated')
  },
}

Rating.init()