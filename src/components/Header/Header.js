import { useState } from "react";
import * as GoIcons from "react-icons/go";
import * as AiIcons from "react-icons/ai";
import { MenuItems } from "./MenuItems";

import "./Header.css";
// import { Link } from "react-router-dom";

export default function Header() {
	const [menuList, setMenuList] = useState(false);

	const showHide = () => setMenuList(!menuList);

	return (
		<div>
			<nav className="navbar-items">
				<h1 id="logo">Space Coachella</h1>
				<div className="menu-icon" onClick={showHide}>
					{!menuList ? <GoIcons.GoThreeBars /> : <AiIcons.AiOutlineClose />}
				</div>
				<div className="menu-list">
					<ul className={menuList ? "nav-menu active" : "nav-menu"}>
						{MenuItems.map((item, index) => {
							return (
								<li key={index}>
									{/* <Link
										to={item.url}
										className={item.cName}
										onClick={() => showHide(menuList)}
									> */}
									{item.title}
									{/* </Link> */}
								</li>
							);
						})}
					</ul>
				</div>
			</nav>
		</div>
	);
}
