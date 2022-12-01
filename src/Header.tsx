import { Icon } from '@iconify/react';
import { useState } from 'react';
import logo from './assets/logo.svg';

export function Header() {
	const [isMenuShowen, setIsMenuShowen] = useState(false);
	const [scrollPosition, setScrollPosition] = useState(0);
	const [showHeader, setShowHeader] = useState(true);
	function toggleMenu() {
		setIsMenuShowen(!isMenuShowen);
	}
	function scroll() {
		setShowHeader(scrollPosition > window.scrollY);
		setScrollPosition(window.scrollY);
	}
	window.addEventListener('scroll', scroll);
	return (
		<header className={`${!showHeader && 'header-hide'}`}>
			<a href='/'>
				{/* <img src={logo} alt='' id='logotip' /> */}
				<div id='logotip'>
					<img src={logo} alt='' id='logotip' />
				</div>
			</a>
			<button
				// hidden
				className='icon-44 '
				id='menu-btn'
				aria-label='open menu'
				onClick={() => toggleMenu()}
			>
				<span className='material-icons menu-icon' aria-hidden='true'>
					menu
				</span>
				Menu
			</button>

			<nav className={`menu-content ${isMenuShowen ? 'show-menu' : ''}`}>
				<div
					className='close-menu'
					aria-label='close menu'
					onClick={() => toggleMenu()}
				>
					<Icon icon='ic:round-close' width='44px'></Icon>
				</div>
				<a href='#hero' onClick={() => toggleMenu()}>
					Početna
				</a>
				<a href='#kako' onClick={() => toggleMenu()}>
					Kako Šapa aplikacija radi?
				</a>
				<a href='#vrednosti' onClick={() => toggleMenu()}>
					Naše vrijednosti
				</a>
				<a href='#usluge' onClick={() => toggleMenu()}>
					Usluge
				</a>
				<a href='#statistike' onClick={() => toggleMenu()}>
					Statistike
				</a>
				<a href='#konakt' onClick={() => toggleMenu()}>
					Kontakt
				</a>
			</nav>
		</header>
	);
}
