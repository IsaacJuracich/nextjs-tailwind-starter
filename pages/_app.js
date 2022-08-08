import Aos from "aos";
import { useRouter } from "next/router";
import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import "../styles/globals.css";

function IsaacJuracichStarter({ Component, pageProps }) {
  useEffect(() => {
    import("aos/dist/aos.js");
    Aos.init();
  }, []);
  const [exitBefore, setExitBefore] = useState(false);
  const router = useRouter();

  return (
    <>
      <div>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
          integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </div>
      <Navbar></Navbar>
      <LazyMotion features={domAnimation}>
        <AnimatePresence exitBeforeEnter={!exitBefore}>
          <m.div
            key={router.route.concat("Fade Back")}
            className="page-wrap"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={{
              initial: {
                opacity: 0,
                scale: 0.8,
              },
              animate: {
                opacity: 1,
                scale: 1,
              },
              exit: {
                opacity: 0,
                scale: 0.8,
              },
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <Component {...pageProps} />
          </m.div>
        </AnimatePresence>
      </LazyMotion>
      <Footer></Footer>
    </>
  );
}

export default IsaacJuracichStarter;
