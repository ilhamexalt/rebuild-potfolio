import "../styles/globals.css";
// import Layout from "../layouts/Layout";

// Layout Card
// ---------------------------------------------
// function MyApp({ Component, pageProps }) {
//   return (
//     <Layout>
//       <Component {...pageProps} />{" "}
//     </Layout>
//   );
// }
// export default MyApp;

// Belajar Layout dan Komponen Berulang
// ---------------------------------------------
export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}
