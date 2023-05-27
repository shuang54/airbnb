import ClientOnly from "./components/ClientOnly";
import Container from "./components/Container";
import EmptyState from "./components/EmptyState";
import { getCurrentUser } from "./components/actions/getCurrentUser";
import getListings from "./components/actions/getListings";
import ListingCard from "./components/listing/ListingCard";

export default async function Home() {
  const listings = await getListings();
  const currentUser = getCurrentUser();

  if (listings.length === 0){
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    )
  }

  return (
    <ClientOnly>
      <Container>
        <div className="
          pt-24
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-6
          gpa-8
        ">
          {listings.map((listing: any)=>{
            return (
              <ListingCard 
                currentUser={currentUser}
                key={listing.id}
                data={listing}
              />
            )
          })}
        </div>
      </Container>
    </ClientOnly>
  )
}
