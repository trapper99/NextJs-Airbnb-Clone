import Footer from "../components/Footer";
import Header from "../components/Header";
import { useRouter } from 'next/dist/client/router';
import { format } from "date-fns";
import İnfoCard from "../components/İnfoCard";

function Search({ searchResults }) {
    const router = useRouter();

    console.log(searchResults);

    const { location, startDate, endDate, noOfGuests } = router.query;

    const formattedStartDate = format(new Date(startDate), "dd MMM yy");
    const formattedEndDate = format(new Date(endDate), "dd MMM yy");
    const range = `${formattedStartDate} to ${formattedEndDate}`;


    return (
        <div>
            <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />

            <main className="flex">
                <section className="flex-grow pt-14 px-6">
                    <p className="text-xs">300+ Stays for {noOfGuests} guests. {range}</p>

                    <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>

                    <div className="hidden lg:inline-flex flex mb-5 space-x-3 text-gray-800 whitespace-normal">
                        <button className="button">Cancellation Flexibility</button>
                        <button className="button">Type of Place</button>
                        <button className="button">Price</button>
                        <button className="button">Rooms and Beds</button>
                        <button className="button">More Filters</button>
                    </div>

                    <div className="flex flex-col">
                        {searchResults.map(({ img, location, title, description, star, price, total }) => (
                            <İnfoCard
                            key={img}
                            img={img}
                            location={location}
                            title={title}
                            description={description}
                            star={star}
                            price={price}
                            total={total}
                            />
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default Search;

export async function getServerSideProps() {
    const searchResults = await fetch("https://links.papareact.com/isz").then(res => res.json());

    return {
        props: {
            searchResults,
        }
    }
}