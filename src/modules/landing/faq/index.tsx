import PageBanner from "../../../components/reusables/page-banner";
import FaqList from "./faq-list";

const FaqIndex = () => {
  return (
    <div>
      <div>
        <PageBanner
          image="https://res.cloudinary.com/do2kojulq/image/upload/v1729167868/WE%20Immersive/image_21_zv8io4.png"
          headText="FAQs"
          bodyText=""
        />
      </div>
      <div>
        <FaqList/>
      </div>
    </div>
  );
};

export default FaqIndex;
