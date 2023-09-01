import React, { Fragment, useState, useEffect } from "react";
import { Col, Button } from "antd";
import Mobile from "../images/mobile1.png";
import Stars from "../images/starts.png";
import Stars2 from "../images/stars1.png";
import { data } from "../data";

const GlaxyUltra = ({ setCartItems, searchTerm }) => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const mobileBreakpoint = 768;

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const addToCart = (item) => {
		setCartItems((prevCartItems) => [...prevCartItems, item]);
		console.log(item, "itemmmm2222")
	};

	const filteredData = data.filter((item) =>
		item.mobileName.toLowerCase().includes(searchTerm.toLowerCase())
	);

	console.log(searchTerm, "searchhhh")

	return (
		<Fragment>
			{filteredData.map((item, index) => {
				if (windowWidth <= mobileBreakpoint && index >= 6) {
					return null;
				}

				return (
					<div key={index} className="image-container">
						<div className={`text-overlay ${item.displaySale ? 'with-background' : 'none'}`}>
							{item.displaySale && <h4 className="top-left-text">50% off</h4>}
						</div>
						<div className="container-image">
							<img src={item.image} alt="Image 3" className="mobileImage" />
						</div>

						<div className="bg-white">
							<div className="content">
								<div className="heading">
									<h5 className="mainHeading">{item.mobileName}</h5>
								</div>
								<div className="price">
									<b className="payment">${item.price}</b>
								</div>
							</div>
							<div className="content">
								<div className="startssection">
									{item.ratings.map((index) => {
										return (
											<img key={index} src={Stars} alt="Image 1" />
										)
									})}

								</div>

								<Button className="add-to-cart-button" onClick={() => addToCart(item)} size="small"  >Add to Cart</Button>
							</div>

						</div>
					</div>
				);
			})}
		</Fragment>
	);
};

export default GlaxyUltra;





















