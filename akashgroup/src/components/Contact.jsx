const Contact = () => {
  return (
    <>
      <section id="contact" className="pt-20 lg:pt-32 bg-black">
        <div className="container mx-10 pr-17 py-5 lg:grid lg:grid-cols-2 lg:items-start">
          {/* Left section */}
          <div className="mb-12 lg:mb-0 lg:flex lg:flex-col" data-aos="zoom-in">
            <h2 className="text-3xl lg:text-4xl font-semibold max-w-[13ch] bg-gradient-to-r from-zinc-100 to-zinc-400 text-transparent bg-clip-text reveal-up">
              Contact me for collaboration
            </h2>

            <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] lg:max-w-[33ch] reveal-up">
              Reach out today to discuss your project needs and start collaboration on something amazing!
            </p>
          </div>

          {/* Form section */}
          <form
            action="https://getform.io/f/bnlqnveb"
            method="POST"
            className="xl:pl-10 2xl:pl-20 space-y-4"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div data-aos="fade-up">
                <label htmlFor="name" className="block text-zinc-200 text-sm mb-2 reveal-up">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="Birendra"
                  className="w-full px-3 py-3 text-sm bg-zinc-800 rounded-xl ring-1 ring-inset ring-transparent hover:ring-zinc-50/5 focus:ring-sky-400 focus:ring-2 outline-none text-zinc-100 placeholder:text-zinc-400 reveal-up"
                />
              </div>
              <div data-aos="fade-up">
                <label htmlFor="email" className="block text-zinc-200 text-sm mb-2 reveal-up">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="abc@example.com"
                  className="w-full px-3 py-3 text-sm bg-zinc-800 rounded-xl ring-1 ring-inset ring-transparent hover:ring-zinc-50/5 focus:ring-sky-400 focus:ring-2 outline-none text-zinc-100 placeholder:text-zinc-400 reveal-up"
                />
              </div>
            </div>

            <div data-aos="fade-up">
              <label htmlFor="message" className="block text-zinc-200 text-sm mb-2 reveal-up">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                placeholder="Hi!"
                rows="6"
                className="w-full px-3 py-3 text-sm bg-zinc-800 rounded-xl ring-1 ring-inset ring-transparent hover:ring-zinc-50/5 focus:ring-sky-400 focus:ring-2 outline-none text-zinc-100 placeholder:text-zinc-400 resize-y reveal-up"
              ></textarea>
            </div>

            <button data-aos="fade-up"
              type="submit"
              className="w-full h-11 flex justify-center items-center bg-sky-400 text-zinc-900 rounded-xl font-medium hover:bg-sky-300 active:bg-sky-400 transition-colors reveal-up"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
      <svg
        className="relative bg-black w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 100.86"
        preserveAspectRatio="none"
      >
        <path
          className="fill-zinc-800"
          d="m0,0h1600v100.86C1433.02,47.48,1137.15,12,800,12S166.98,47.48,0,100.86V0Z"
        />
      </svg>
    </>
  );
};

export default Contact;