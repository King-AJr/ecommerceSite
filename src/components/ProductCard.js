import { IoMdStar } from "react-icons/io";

const ProductCard = ( { name, brand, price, imgUrl } ) => {
    return (
        <div className="flex flex-col h-14">
            <img src={imgUrl} className="h-3/5" alt="product"/>
            <div className="flex flex-col">
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
            </div>
            <p>{name}</p>
            <p>{brand}</p>
            <p>${price}</p>
        </div>
    )
}

export default ProductCard