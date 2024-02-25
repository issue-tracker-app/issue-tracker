import Image from "next/image";

export default function Home() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-white">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex">
        <p className="text-2xl flex w-full justify-center border-b text-black lg:static lg:w-auto  lg:rounded-xl lg:border  lg:p-4">
          Welcome to Issue-Tracker
        </p>
      </div>

      <div className="relative mt-2 flex place-items-center">
        {/* <Image
          className="relative"
          src="/logo.png"
          alt="Issue Tracker Logo"
          width={64}
          height={64}
          priority
        /> */}
        <iframe
          src="https://giphy.com/embed/jKYqGWgSY17z5u9BMD"
          width="240"
          height="240"
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
        ></iframe>
        <p>
          <a href="https://giphy.com/gifs/flaticons-jKYqGWgSY17z5u9BMD">
            via GIPHY
          </a>
        </p>
      </div>
    </section>
  );
}
