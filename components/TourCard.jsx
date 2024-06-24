import Link from "next/link";


const TourCard = ({ tour }) => {
    const { city, id, country} = tour
    return (
        <Link href={`/tours/${id}`} className="card card-compact rounded-xl bg-base-100">
            <div className="card-body items-center text-center">
                {city}, { country}
            </div>
        </Link>
    );
}

export default TourCard;