import Navigation1 from "../components/Navigation1";
import AccountInfo from "../components/AccountInfo";
import Footer from "../components/Footer";
import "./Account.css";

const Account = () => {
  return (
    <div className="account-1920">
      <Navigation1 />
      <AccountInfo />
      <Footer
        image="/image1@2x.png"
        image1="/image-11@2x.png"
        image2="/image-21@2x.png"
        image3="/image-31@2x.png"
        image4="/image-41@2x.png"
      />
    </div>
  );
};

export default Account;
