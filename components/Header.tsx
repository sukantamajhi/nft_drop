import Image from "next/image";
import { ArrowIcon, Logo } from "../images/svgs/Svg";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";

const Header = () => {
	const router = useRouter();
	const address = useAddress();

	return (
		<div>
			<header className="text-gray-400 bg-gray-900 body-font">
				<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
					<a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
						<Logo />
						<span className="ml-3 text-xl">Tailblocks</span>
					</a>
					<nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
						<a className="mr-5 hover:text-white">First Link</a>
						<a className="mr-5 hover:text-white">Second Link</a>
						<a className="mr-5 hover:text-white">Third Link</a>
						<a className="mr-5 hover:text-white">Fourth Link</a>
					</nav>
					{/* <button
						onClick={() => ConnectWallet()}
						className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
						Login
						<ArrowIcon />
					</button> */}
					<ConnectWallet accentColor="#f213a4" colorMode="light" />
				</div>
			</header>
		</div>
	);
};

export default Header;
