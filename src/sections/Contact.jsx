

const Contact = () => {
  return (
    <section id="contact" className="h-[600px] flex items-center mt-36 lg:section">
        <div className="container mx-auto">
          <div className="lg:w-full flex flex-col lg:flex-row">
            <div className="w-full flex-1 flex lg:justify-start justify-center items-center">
              <div className="w-full flex flex-col justify-center lg:text-start text-center">
                <h2 className="text-5xl lg:text-start text-center text-[#ccd6f6] font-bold mb-12">
                  / contact me <span className="slate w-3 h-10"></span>
                </h2>
                <h4 className="text-xl uppercase light-slate font-medium mb-2 tracking-wide">
                  Get in touch
                </h4>
                <h2 className="text-[45px] lg:text-[90px] light-slate leading-none mb-12">
                  Lets work <br /> together
                </h2>
              </div>
            </div>
            <form className="lg:w-2/4 flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start">
              <input
                className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
                type="text"
                placeholder="Your name"
              />
              <input
                className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
                type="text"
                placeholder="Your email"
              />
              <textarea
                className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
                placeholder="Your message"
              ></textarea>
              <div className="w-full flex justify-center lg:justify-start">
                <button className="btn btn-lg">Send message</button>
              </div>
            </form>
          </div>
        </div>
      </section>
  )
}

export default Contact