import { notFound } from 'next/navigation';


export default function Product({ params }: { params: { productID: string } }) {
	if (parseInt(params.productID) > 100) {
		return notFound();
	};

	return <h1>Product id: {params.productID}</h1>;
}


// http://localhost:3000/products/532 - dynamic route navigation