import { Footer } from "@/components/footer";
import GridLayout from "@/components/grid-layoutForAuction";
import Header from "@/components/header";
import Nav from "@/components/nav";
import ProfileCard from "@/components/profile-card";
import { SpiceCard } from "@/components/spice-card";

const Profile = () => {
    return (
        <>
        <Nav />
        <Header header={'Auction'} content={"You Can Find All Live Auction "}/>
        <GridLayout />
        <Footer/>
        </>
    )
}

export default Profile;