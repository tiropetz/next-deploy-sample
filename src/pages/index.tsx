import { NextPage } from "next";
import Link from "next/link";

const Page: NextPage = () => (
  <h1>
    index page!
    <div>
      <Link href="/contact">to contact</Link>
    </div>
  </h1>
);
export default Page;
