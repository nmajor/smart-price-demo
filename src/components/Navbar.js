import React from 'react';

export default function Navbar() {
  return (<nav className="h-24 flex items-center justify-center flex-wrap bg-gray-800 p-6 fixed w-full z-10 top-0">
		<div className="flex items-center flex-shrink-0 text-white mr-6">
			<a className="text-white no-underline hover:text-white hover:no-underline" href="#">
				<span className="text-2xl pl-2"><i className="em em-grinning"></i> Price Forcasting</span>
			</a>
		</div>
	</nav>);
}