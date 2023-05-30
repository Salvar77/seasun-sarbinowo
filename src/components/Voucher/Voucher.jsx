import classes from './Voucher.module.scss';
import Image from 'next/image';
import voucher from './voucher.png';

const Voucher = () => {
	return (
		<div className={classes.voucher}>
			<div className={classes.voucher__img}>
				<Image src={voucher} alt='voucher' className={classes.voucher_imgg} />
			</div>
			<div className={classes.voucher__text}>
				<h3>Prezent dla bliskiej osoby</h3>
				<p>
					Jeśli szukasz prezentu dla swoich bliskich lub chcesz zrobić sobie
					miły prezent, mamy dla Ciebie idealne rozwiązanie - vouchery na pobyt
					w naszych domkach letniskowych! Voucher to doskonały sposób na
					podarowanie wyjątkowego prezentu, który zostanie zapamiętany na długo.
				</p>
				<p>
					Nasi klienci mogą zakupić vouchery o wartości 500 złotych, 1000
					złotych lub 1500 złotych, które można wykorzystać na pobyt w naszych
					domkach letniskowych w dowolnym terminie. Voucher jest ważny przez
					cały rok od daty zakupu, a jego wykorzystanie jest bardzo proste -
					wystarczy skontaktować się z nami i dokonać rezerwacji na wybrany
					termin.
				</p>
				<p>
					Voucher na pobyt w naszych domkach letniskowych to doskonały prezent
					dla bliskiej osoby, która marzy o spokojnym wypoczynku w pięknej
					okolicy nad jeziorem lub nad morzem. Z nami zawsze znajdziesz idealne
					rozwiązanie dla siebie i swoich bliskich. Skontaktuj się z nami już
					dziś i dowiedz się więcej na temat naszych voucherów!
				</p>
			</div>
		</div>
	);
};

export default Voucher;
