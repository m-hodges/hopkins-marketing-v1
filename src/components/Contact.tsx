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
                        <p>Name</p>
                        <input type="text" required className='contact--form__input'/>
                    </div>
                    <div className='contact--form__item'>
                        <p>Email</p>
                        <input type="email" required className='contact--form__input'/>
                    </div>
                    <div className='contact--form__item'>
                        <p>Phone</p>
                        <input type="text" className='contact--form__input'/>
                    </div>
                    <div className='contact--form__item'>
                        <p>Message</p>
                        <textarea name="" id="" cols={50} rows={20} required className='contact--form__text-area'></textarea>
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