import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="max-w-[60rem] mx-auto font-paragraph pb-16 pt-24 lg:pb-10 lg:pt-44 ">
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-4 text-center px-8">
        {/* col 1 */}
        <div className="space-y-8 col-span-2 md:col-span-1">
          <Image src="/next.svg" alt="logo" width={80} height={80} />

          <div className="text-start space-x-1">
              <a
                target="_blank"
                className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
                href=""
              >
                <Image
                  src="/instagram.svg"
                  width={25}
                  height={25}
                  alt="instagram"
                  className=""
                />
              </a>
              <a
                className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
                href="#"
              >
                <Image
                  target="_blank"
                  src="/facebook.svg"
                  width={25}
                  height={25}
                  alt="facebook"
                  className=""
                />
              </a>
              <a
                className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
                href=""
              >
                <Image
                  target="_blank"
                  src="/tiktok.svg"
                  width={25}
                  height={25}
                  alt="tiktok"
                  className=""
                />
              </a>
            </div>

        </div>
        {/* col 2 */}
        <div className="text-start lg:mx-auto">
          <h3 className="font-medium pb-5 ">Pages</h3>
          <ul className="space-y-2">
             <Link href="/"> <li className="hover:underline mb-2">Home</li></Link> 
             <Link href="/about"><li className="hover:underline mb-2">About</li>  </Link>
             <Link href="/faq"><li className="hover:underline mb-2">FAQ</li> </Link>
          </ul>
        </div>
        {/* col 3 */}
        <div className="text-start lg:mx-auto">
          <h3 className="font-medium pb-5">Contact</h3>
          <ul className="space-y-2">
             <a href="/contact" target="_blank"><li className="hover:underline mb-2">Contact us</li> </a>
             <a href="/careers"><li className="hover:underline mb-2">Careers</li> </a>
             <a href="/help-center"><li className="hover:underline mb-2">Help Center</li> </a>
          </ul>
        </div>
        {/* col 4 */}
        <div className="text-start lg:mx-auto">
          <h3 className="font-medium pb-5">Resources</h3>
          <ul className="space-y-2">
             <a href="https://www.linkedin.com/in/lilia-bendjeddou/" target="_blank"><li className="hover:underline mb-2">Privacy</li> </a>
            <a href="https://github.com/Lilicod" target="_blank"> <li className="hover:underline mb-2">Terms</li> </a>
       </ul>
        </div>
      </div>
      <p className="block text-center pt-10">© 2025 - My blog app</p>
    </footer>
  );
}
