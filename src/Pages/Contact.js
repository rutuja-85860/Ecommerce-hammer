import React from 'react'
import '../css/Contact.css';
const Contact = () => {
  return (
    <div className='finfo'>
    <div id="contact" class="section-padding">
<h2 class="text-center">Contact Me</h2>
<div class="contact-form">
  <form action="your-contact-handler.php" method="POST">
    <div class="mb-3">
      <label for="name" class="form-label">Your Name</label>
      <input type="text" class="form-control" id="name" required/>
    </div>
    <div class="mb-3">
      <label for="email" class="form-label">Email address</label>
      <input type="email" class="form-control" id="email" required/>
    </div>
    <div class="mb-3">
      <label for="message" class="form-label">Message</label>
      <textarea class="form-control" id="message" rows="4" required></textarea>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</div>
</div>
  </div>
  )
}

export default Contact;
