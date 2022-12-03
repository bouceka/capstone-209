// @flow
import * as React from 'react';
import { Button } from '../../../components/button/button.component';
import { Input } from '../../../components/input/input.component';
import { Textarea } from '../../../components/textarea/textarea.component';
import { Title } from '../../../components/title/title.component';
type Props = {};
export const ContactUs = (props: Props) => {
  return (
    <div className='page'>
      <Title>Contact Us</Title>
      <div className='row'>
        <section className='contact-page'>
          <div className='contact-page__wrapper'>
            <h2 className='heading'>We’d love to hear from you</h2>
            <p className='paragraph--medium'>
              Whether you’re interested in our sport programs or a volunteering, we’re here to help you find the right
              solution to support your need. Tell us about you and we’ll be in touch.
            </p>
            <form action=''>
              <div className='form-group'>
                <Input label='First Name' name='firstName' placeholder='e.g. John' />
                <Input label='Last Name' name='lastName' placeholder='e.g. Doe' />
              </div>
              <div className='form-group'>
                <Input label='Email Address' name='email' placeholder='e.g. john.doe@example.com' />
              </div>
              <div className='form-group'>
                <Textarea label='Message' name='message' placeholder='Type a message here...' />
              </div>

              <p className='caption--medium'>
                This form is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
              </p>
              <Button className='primary'>Submit</Button>
            </form>
            <hr />
            <div className='contact-page__address'>
              <p className='paragraph--medium--bold'>North Island College Athletics</p>
              <div className=' paragraph--medium'>
                <p>2300 Ryan Road</p>
                <p>Courtenay BC V9N 8N6</p>
              </div>
              <div className='paragraph--medium'>
                <p>Phone: 250-334-5000 </p>
                <p>Fax: 250-334-5018</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
