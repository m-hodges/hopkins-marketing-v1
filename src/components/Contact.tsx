import React from 'react';

const Contact = () => {
    return (
        <div className='contact'>
            <h2>
                Contact Form
            </h2>
            <div>
                <form action="POST">
                    <div className='contact--form__item'>
                        <p className='contact--form__label'>Name</p>
                        <input type="text" required className='contact--form__input'/>
                    </div>
                    <div className='contact--form__item'>
                        <p className='contact--form__label'>Email</p>
                        <input type="email" required className='contact--form__input'/>
                    </div>
                    <div className='contact--form__item'>
                        <p className='contact--form__label'>Phone</p>
                        <input type="text" className='contact--form__input'/>
                    </div>
                    <div className='contact--form__item'>
                        <p className='contact--form__label'>Message</p>
                        <textarea name="" id="" cols={50} rows={20} required className='contact--form__text-area' placeholder='Enter your message here'></textarea>
                    </div>
                    <div className='contact--form__item contact--form__button'>
                        <button type="submit" className='contact--button'>Send</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;