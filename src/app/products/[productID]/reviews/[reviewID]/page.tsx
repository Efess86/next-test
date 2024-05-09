export default function Review({ params }: { params: { productID: string; reviewID: string } }) {
	return <h1>Product id is: {params.productID} and Review id is: {params.reviewID}</h1>;
}

//http://localhost:3000/products/532/reviews/23 - dynamic route navigation and nested route navigation (reviews)