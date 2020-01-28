import React, { useState, useEffect } from 'react';

const Contact = () => {
    const [ isHrVisible, setHrVisibility ] = useState<boolean>(false)
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                setHrVisibility(entry.isIntersecting)
            })
        })
        const target: any = document.querySelector('#contactReference')
        observer.observe(target)
        return () => observer.unobserve(target)
    }, [])
    return (
        <div className='contact'>
            <div className='background contact--background'></div>
            <h2>
                Contact Us Now!
                <hr className={`scroll-in-hr ${(isHrVisible) ? 'scroll-in-hr__visible' : 'scroll-in-hr__not-visible'}`}/>
            </h2>
            <div id='contactReference' className='contact--form'>
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
                        <textarea name="" id="" cols={50} rows={20} required className='contact--form__text-area' placeholder=' Enter your message here'></textarea>
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