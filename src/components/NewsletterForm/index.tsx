import { useState } from 'react';

import './newsletter-form.scss';
import SucessMessage from '../SucessMessage';

export default function NewsletterForm() {
    const [email, setEmail] = useState('');
    const [hasErrors, setHasErrors] = useState(false)
    const [showPopUp, setShowPopUp] = useState(false)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (email.length === 0 || !email.includes('@')) {
            setHasErrors(true);           
        } else {
            setHasErrors(false);
            setShowPopUp(true);
            setEmail('')
        }
    };
        
    return (
        <>
            <SucessMessage 
                show={showPopUp} 
                onClose={() => setShowPopUp(false)}
            />
            <form id="newsletter-subscribe-form" onSubmit={handleSubmit}>
                <div className='header'>
                    <label htmlFor="email">Email address</label>
                    {hasErrors && <p className='error-message'>Valid email required</p>}
                </div>
                <input
                    id="email"
                    type="text"
                    name="email"
                    className={hasErrors ? 'email-error' : 'email'}
                    placeholder="email@company.com"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <input
                    type="submit"
                    value="Subscribe to monthly newsletter"
                />
            </form>
        </>
    );
}
