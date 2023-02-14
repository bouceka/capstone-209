// @flow
import * as React from 'react';
import { Button } from '../../components/button/button.component';
import { Input } from '../../components/input/input.component';
import { Title } from '../../components/title/title.component';
import { Header } from '../../components/header/header.component';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs.component';
import Footer from '../../components/footer/footer.component';

0;
interface Props {}
export const Login = (props: Props) => {
  return (
    <div className='page'>
      <Header />
      <Breadcrumbs />
      <Title>Sign Up</Title>
      <div className='row'>
        <section className='contact-page'>
          <div className='contact-page__wrapper'>
            <h2 className='heading u-center-text'>NIC Athletics - Registration</h2>
            <p className='paragraph--medium u-center-text'>Sign up for the fall season 2022</p>
            <form action=''>
              <div className='form-group'>
                <Input label='First Name' name='firstName' placeholder='John' />
                <Input label='Last Name' name='lastName' placeholder='Doe' />
              </div>
              <div className='form-group'>
                <Input label='North Island College Email' name='email' placeholder='john.doe@example.com' />
              </div>
              <div className='form-group'>
                <Input label='Password' type='password' name='password' placeholder='Password' />
              </div>
              <div className='form-group'>
                <Input label='School Number' name='schoolNumber' placeholder='n0123456' />
              </div>
              <div className='form-group'>
                <Input label='Sport Type' name='email' placeholder='Basketball, Volleyball' />
              </div>

              <p className='caption--medium'>
                This form is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
              </p>
              <Button className='primary'>Submit</Button>
            </form>
          </div>
        </section>
      </div>
			<Footer/>
    </div>
  );
};
