import PageBanner from "../../../components/reusables/page-banner";

const TermsIndex = () => {
  return (
    <>
      <div>
        <PageBanner
          image="https://res.cloudinary.com/greenmouse-tech/image/upload/v1746797503/AoStyle/image_1_z3p0ck.png"
          headText="Terms & Condition"
          bodyText="We are committed to protecting your privacy."
        />
        <div className="box">
          <div className="py-12 text-gray-800 leading-relaxed space-y-10">
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num}>
                <h2 className="font-semibold text-lg mb-2">
                  {num}. Lorem ipsum dolor sit amet consectetur.
                </h2>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet consectetur. Nunc sit sagittis dui
                  sollicitudin in massa. Mattis faucibus posuere sed pretium
                  diam in purus diam. Purus amet sed erat ut justo. Sit lacus
                  enim hac non quam. Donec ac quis fames egestas. Praesent
                  ridiculus diam a commodo aliquam porttitor. Nulla orci
                  eleifend turpis condimentum ac elit interdum eu.
                </p>
                <p className="mb-4">
                  Non ut cursus porttitor sed lorem nisi diam in quis.
                  Scelerisque magna sit amet ac pharetra. Fusce adipiscing eget
                  tincidunt maecenas amet fermentum praesent. Risus arcu
                  senectus lectus feugiat aliquet elementum elit pharetra. Morbi
                  sit pretium et dui nisl integer in sed vitae. Aliquam eu
                  varius etiam purus.
                </p>
                <p>
                  At mauris odio cursus arcu auctor pretium lectus turpis amet.
                  Suspendisse pretium tortor ut ut imperdiet eros tristique
                  maecenas. Nulla sapien condimentum pellentesque massa vel ut
                  lobortis vel. Integer lectus et lobortis lacus. Congue varius
                  purus ut ut fusce eget nunc pellentesque tincidunt. Vulputate
                  lectus egestas enim in tinciduntque.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsIndex;
