import classes from './contact.module.scss';
import { useRef, useState } from 'react';
import Image from 'next/image';
import phone from '/public/phone-call.svg';
import email from '/public/mail.svg';

const Contact = () => {
	const [enteredName, setEnteredName] = useState('');
	const [enteredEmail, setEnteredEmail] = useState('');
	const [enteredMessage, setEnteredMessage] = useState('');
    const [pending, setPending] = useState(false);
	const form = useRef();
	const resetForm = () => {
        setPending(false);
		setEnteredName('');
		setEnteredMessage(
			'Dziękujemy za wiadomość, odpowiemy najszybciej jak możemy!'
		);
		setEnteredEmail('');
	};


	return (
		<div className={classes.contact}>
			<div className={classes.container}>
				<div className={classes.contact__info}>
					<span className={classes.contact__title}> Sea&Sun Sarbinowo</span>
					<span className={classes.contact__item}>00 - 000 Sarbinowo </span>
					<span className={classes.contact__item}>
						Ul. Sarbinowo{' '}
					</span>
					<span className={classes.contact__item}>
						<Image src={phone} alt='ikonka telefonu' width={30} /> 700 700 700{' '}
					</span>
					<span className={classes.contact__item}>
						<Image src={email} alt='ikonka email' width={30} />{' '}
						email @seaandsunsarbinowo.com
					</span>
				</div>

				<form className={classes.contact__form} ref={form} >
					<label className={classes.contact__form__label} htmlFor='user_name'>
						Imię:
					</label>

					<input
						className={classes.contact__form__input}
						type='text'
						id='user_name'
						name='user_name'
						value={enteredName}
                        onChange={(e) => setEnteredName(e.target.value)}
						required
					/>
					<label className={classes.contact__form__label} htmlFor='user_email'>
						Adres e-mail:
					</label>
					<input
						className={classes.contact__form__input}
						type='email'
						id='user_email'
						name='user_email'
                        onChange={(e) => setEnteredEmail(e.target.value)}
						value={enteredEmail}
						required
					/>
					<label className={classes.contact__form__label} htmlFor='message'>
						Wiadomość:
					</label>
					<textarea
						className={classes.contact__form__textarea}
						id='message'
						name='message'
						value={enteredMessage}
						onChange={(e) => setEnteredMessage(e.target.value)}
						required
					/>
					<button className={classes.contact__form__button} type='submit' disabled={pending}  >
						{pending ? 'Wysyłanie...' : 'Wyślij'}
					</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;
