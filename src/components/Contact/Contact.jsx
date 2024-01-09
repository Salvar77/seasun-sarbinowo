import classes from './contact.module.scss';
import { useRef, useState } from 'react';
import Image from 'next/image';
import phone from '/public/phone-call.svg';
import email from '/public/mail.svg';
import { useTranslation } from 'next-i18next';

const Contact = () => {
	const {t} = useTranslation('footnav');
	const [enteredName, setEnteredName] = useState('');
	const [enteredEmail, setEnteredEmail] = useState('');
	const [enteredMessage, setEnteredMessage] = useState('');
	const [enteredPhone, setEnteredPhone] = useState('');
    const [pending, setPending] = useState(false);
	const form = useRef();

	const sendMail = async (e) => {
		e.preventDefault();
		setPending(true);
		const data = {
			name: enteredName,
			email: enteredEmail,
			message: enteredMessage,
			phone: enteredPhone,
		};
		const res = await fetch('/api/SendEmail', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});
		const resData = await res.json();	
		console.log(resData);
		if (resData.message) {
		setPending(false);
		setEnteredName('');
		setEnteredEmail('');
		setEnteredMessage('Diękujemy za wiadomość, odpowiemy najszybciej jak to możliwe');
		setEnteredPhone(null);
		form.current.reset();
		} else {
			setPending(false);
			setEnteredMessage('Coś poszło nie tak, spróbuj ponownie później');
		}
	}
	return (
		<div className={classes.contact}>
			<h1 className={classes.contact__header}>{t('rezerwacje')}</h1>
			<p className={classes.contact__paragraph}>
				{t('rezerwacje_text')}
			</p>
			<div className={classes.container}>
				<div className={classes.contact__info}>
					<span className={classes.contact__title}>Sea&Sun Sarbinowo</span>
					<span className={classes.contact__item}>76-034 Sarbinowo </span>
					<span className={classes.contact__item}>
					ul. Wrzosowa 50{' '}
					</span>
					<a href='tel:+48518494880' target='_blank' rel="noreferrer" className={classes.contact__item}>
						<Image src={phone} alt='ikonka telefonu' width={30} /> 518 494 880{' '}
					</a>
					<span className={classes.contact__item}>
						<Image src={email} alt='ikonka email' width={30} />booking@seasunsarbinowo.pl
					</span>
				</div>

				<form className={classes.contact__form} ref={form} onSubmit={sendMail} >
					<label className={classes.contact__form__label} htmlFor='user_name'>
						{t('name')}:
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
						<label className={classes.contact__form__label} htmlFor='user_phone'>
						{t('phone')}{t('phone_optional')}:
					</label>
					<input
						className={classes.contact__form__input}
						type='text'
						id='user_name'
						name='user_name'
						value={enteredPhone}
                        onChange={(e) => setEnteredPhone(e.target.value)}
					/>
					<label className={classes.contact__form__label} htmlFor='user_email'>
						{t('email')}:
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
						{t('message')}:
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
						{pending ? `${t('sending')}` : `${t('send')}` }
					</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;
