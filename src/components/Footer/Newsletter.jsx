import React from 'react';
import classes from './Footer.module.scss';
import { useState } from 'react';

const Newsletter = ({t}) => {
	
	const [formResult, setFormResult] = useState(null);

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const response = await fetch(
				'https://assets.mailerlite.com/jsonp/461634/forms/89774722001142991/subscribe',
				{
					method: 'POST',
					body: new FormData(event.target),
				}
			);

			const data = await response.json();
			console.log(data);

			setFormResult(data.success);
		} catch (error) {
			console.error('Błąd podczas przetwarzania formularza:', error);
		}
	};

	return (
		<>
			{!formResult && (
				<div id='mlb2-5478178' className={classes.footNewsletter}>
					<h2 className={classes.footNewsletter__header}>
						Newsletter
					</h2>
					<h3 className={classes.footNewsletter__title}>
						
						{t('newsletter')}
					</h3>

					<form
						className={classes.footNewsletter__form}
						onSubmit={handleSubmit}
					>
						<input
							className={classes.footNewsletter__input}
							aria-label='email'
							aria-required='true'
							type='email'
							data-inputmask=''
							name='fields[email]'
							placeholder='Email'
							autoComplete='email'
						/>
						<button type='submit' className={classes.footNewsletter__btn}>
							{t('send')}
						</button>

						<input type='hidden' name='ml-submit' value='1' />
						<input type='hidden' name='anticsrf' value='true' />
					</form>
				</div>
			)}

			{formResult && (
				<h3 className={classes.footNewsletter__thanks}>
					{t('newsletter_thanks')}
				</h3>
			)}
		</>
	);
};

export default Newsletter;

