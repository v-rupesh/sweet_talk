import { Turbo } from "@hotwired/turbo-rails"
import "controllers"

//= require rails-ujs
//= require jquery
//= require activestorage
//= require turbolinks
//= require semantic-ui
//= require_tree .


document.addEventListener("turbo:load", function() {
  $('.ui.dropdown').dropdown();

  $('.message .close').on('click', function() {
    $(this).closest('.message').transition('fade');
  });

  $('#message_body').on('keydown', function(e) {
    if (e.key === 'Enter') {
      $('button[type="submit"]').click();
      e.target.value = '';
    }
  });

  const messagesContainer = document.getElementById('messages');
  if (messagesContainer) {
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }
});
