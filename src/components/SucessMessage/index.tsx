import Sucess from '../Icons/Sucess'
import './sucess-message.scss'

type Props = {
    show: boolean;
    onClose: () => void;
}


export default function SucessMessage({ show, onClose }: Props) {

    return(
        <div className={`${show ? 'modal' : 'hidden'}`}>
            <div className='modal-content'>
                <div className='sucess-svg'>
                    <Sucess />
                </div>
                <div className='content'>
                    <h1>Thanks for subscribing!</h1>
                    <p>
                        A confirmation email has been sent to <strong>ash@loremcompany.com</strong>.
                        Please open it and click the button
                        inside to confirm your subscription. Dismiss message
                    </p>
                    <button onClick={() => onClose()}>Dismiss message</button>
                </div>
            </div>
        </div>
    )
}