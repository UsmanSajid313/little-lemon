import { Link } from 'react-scroll';
import React, { useState, useRef } from 'react';
import "./Payment.css"

function Payment() {

    const [formData, setFormData] = useState({
        date: '',
        time: '',
        people: '',
        occasion: 'Occasion',
        fname: '',
        lname: '',
        email: '',
        phone: '',
        comments: ''
    });

    const section2Ref = useRef(null);

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const isFormValid = validateForm();
        if (isFormValid) {
            scrollToSection2();
        }
    };

    const validateForm = () => {
        const requiredFields = ['date', 'time', 'people', 'fname', 'lname', 'email', 'phone'];
        let isFormValid = true;

        requiredFields.forEach((field) => {
            if (!formData[field]) {
                isFormValid = false;
            }
        });
        return isFormValid;
    };

    const scrollToSection2 = () => {
        if (section2Ref.current) {
            const { top } = section2Ref.current.getBoundingClientRect();
            window.scrollTo({
                top: top + window.pageYOffset - 70,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            <main>
                <section className='Section1'>
                    <div className='container'>
                        <div className='form-group'>
                            <h1>Table Reservation</h1>
                            <form onSubmit={handleFormSubmit}>
                                <div className='form-group'>
                                    <label htmlFor='date'>Date:</label>
                                    <input
                                        type='date'
                                        id='date'
                                        name='date'
                                        required
                                        value={formData.date}
                                        onChange={handleFormChange}
                                    />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='time'>Time:</label>
                                    <input
                                        type='time'
                                        id='time'
                                        name='time'
                                        required
                                        value={formData.time}
                                        onChange={handleFormChange}
                                    />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='people'>Number of People:</label>
                                    <input
                                        type='number'
                                        id='people'
                                        name='people'
                                        min='1'
                                        max='12'
                                        required
                                        value={formData.people}
                                        onChange={handleFormChange}
                                    />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='occasion'>Occasion:</label>
                                    <select
                                        id='occasion'
                                        name='occasion'
                                        value={formData.occasion}
                                        onChange={handleFormChange}
                                    >
                                        <option id="options"value='Occasion'>Occasion</option>
                                        <option id="options"value='Birthday'>Birthday</option>
                                        <option id="options"value='Engagement'>Engagement</option>
                                        <option id="options"value='Anniversary'>Anniversary</option>
                                    </select>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='fname'>First Name:</label>
                                    <input
                                        type='text'
                                        id='fname'
                                        name='fname'
                                        required
                                        value={formData.fname}
                                        onChange={handleFormChange}
                                    />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='lname'>Last Name:</label>
                                    <input
                                        type='text'
                                        id='lname'
                                        name='lname'
                                        required
                                        value={formData.lname}
                                        onChange={handleFormChange}
                                    />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='email'>Email:</label>
                                    <input
                                        type='email'
                                        id='email'
                                        name='email'
                                        required
                                        value={formData.email}
                                        onChange={handleFormChange}
                                    />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='phone'>Phone:</label>
                                    <input
                                        type='tel'
                                        id='phone'
                                        name='phone'
                                        required
                                        value={formData.phone}
                                        onChange={handleFormChange}
                                    />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='comments'>Comments:</label>
                                    <textarea
                                        id='comments'
                                        name='comments'
                                        rows='4'
                                        value={formData.comments}
                                        onChange={handleFormChange}
                                    ></textarea>
                                </div>
                            </form>
                            <Link
                                onClick={handleFormSubmit}
                            >
                                <button type='submit'>Go to Payment</button>
                            </Link>
                        </div>
                        <div className='form-image'>
                            <img src='./icons_assets/restaurentpic.jpg' alt='Restaurent' />
                            <img src='./icons_assets/restauranfood2.jpg' alt='Restaurent' />~
                        </div>
                    </div>
                </section>
                <section className='Section2' id='section2' ref={section2Ref}>
                    <div className='container2'>
                        <div className='form-group2'>
                            <h1>Payment</h1>
                            <form>
                                <div className='form-group2'>
                                    <label htmlFor='card-number'>Card Number:</label>
                                    <input type='text' id='card-number' name='card-number' required pattern="[0-9]{16}" />
                                </div>
                                <div className='form-group2'>
                                    <label htmlFor='cvv'>CVV Number:</label>
                                    <input type='text' id='cvv' name='cvv' required pattern="[0-9]{3}" />
                                </div>
                                <div className='form-group2'>
                                    <label htmlFor='expiry-date'>Expiry Date:</label>
                                    <input
                                        type='text'
                                        id='expiry-date'
                                        name='expiry-date'
                                        placeholder='MM/YYYY'
                                        required
                                    />
                                </div>
                                <div className='form-group2'>
                                    <label htmlFor='cardholder-name'>Cardholder Name:</label>
                                    <input type='text' id='cardholder-name' name='cardholder-name' required />
                                </div>
                                <div className='form-group2'>
                                    <button type='submit'>Pay $10</button>
                                </div>
                            </form>
                        </div>
                        <div className='form-image2'>
                            <img src='./icons_assets/cards.png' alt='Cards' />
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Payment;