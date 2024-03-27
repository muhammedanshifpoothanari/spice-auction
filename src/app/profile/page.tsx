import { Footer } from "@/components/footer";
import GridLayout from "@/components/grid-layout";
import Header from "@/components/header";
import Nav from "@/components/nav";

const Profile = () => {
    
    return (
        <>
         <Nav />
         <Header header={'Profile'} content={"You Can Manage Your Profile"}/>
         <GridLayout />
         <Footer/>
        </>
    )
}

export default Profile;