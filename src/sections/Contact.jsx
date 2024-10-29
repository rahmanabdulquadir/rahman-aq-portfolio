import { useState } from "react";
import Button from "../components/Button";
import { fadeIn } from "../components/MotionVariation";
import { motion } from "framer-motion";
import { toast } from "sonner";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    try {
      const response = await fetch("https://getform.io/f/akkgmjda", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setName("");
        setEmail("");
        setMessage("");
        console.log("Form reset:", name, email, message); // Debug here
        toast.success("Message sent successfully", {
          classNames: {
            toast:
              "bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500  px-8 py-3",
            title: "text-white-700 text-lg",
            description: "text-white",
          },
        });
      } else {
        toast.error("Failed to send the message. Please try again.", {
          classNames: {
            toast: "bg-red-300 px-8 py-3",
            title: "text-white text-lg",
            description: "text-white",
          },
        });
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.", {
        classNames: {
          toast: "bg-red-300 px-8 py-3",
          title: "text-white text-lg",
          description: "text-white",
        },
      });
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section id="contact" className="space-x-y flex items-center">
      <div className="container mx-auto">
        <div className="lg:w-full flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="w-full flex-1 flex lg:justify-start justify-center items-center"
          >
            <div className="w-full flex flex-col justify-center lg:text-start text-center">
              <h2 className="lg:text-5xl text-2xl lg:text-start text-center text-[#ac6aff] font-bold mb-12">
                / contact
              </h2>
              <h4 className="text-xl uppercase light-slate font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] light-slate leading-none mb-12">
                Lets work <br /> together
              </h2>
            </div>
          </motion.div>
          <motion.form
            onSubmit={handleSubmit}
            // action="https://getform.io/f/akkgmjda"
            // method="POST"
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="lg:w-2/4 flex-1 border rounded-2xl flex flex-col justify-center gap-y-6 px-12 mx-7 py-12  items-start"
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="email"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              required
            />
            <textarea
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message"
              required
            ></textarea>
            <div className="w-full flex justify-center lg:justify-start">
              <Button type="submit" disabled={loading} className="move-item">
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
