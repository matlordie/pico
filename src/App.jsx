import { Banner } from "../components/banner";
import { Collections } from "../components/collections";
import { Navbar } from "../components/navbar";

export default function Root() {
  return (
    <>
      <Navbar />
      <Banner />
      <Collections />
    </>
  );
}
