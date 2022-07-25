import React from 'react'
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPhoneFill } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';



const contactInformations = {
    email: 'zghidi.med@gmail.com',
    phone: '+216 29 577 462',
    address: {
        street: 'Route Taniour Km 3',
        city: 'sfax',
        postalCode: '3002',
        country: 'Tunisia'
    }
}

function Contact() {
    return (
        <div className='container mt-5'>
            <div>
                < AiOutlineMail size={24} />
                <span> {contactInformations.email} </span>
            </div>
            <div className='mt-3'>
                < BsFillPhoneFill size={24} />
                <span> {contactInformations.phone} </span>
            </div>
            <div className='mt-3'>
                < FaMapMarkerAlt size={24} />
                <span> {contactInformations.address.street}, {contactInformations.address.city}, {contactInformations.address.postalCode}, {contactInformations.address.country} </span>
            </div>

        </div>
    )
}

export default Contact