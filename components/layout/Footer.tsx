import Link from "next/link";

const Footer = () => {

  return (
    <footer className="bg-slate-900 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">

        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} Sachin Yenkure - Portfolio. All rights reserved.</p>
          <p> Dev - <Link href="https://www.sagaryenkure.pro" target="_blank">Sagar Yenkure</Link> </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;