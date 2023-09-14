import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

// components
import Circles from "../../components/Circles";

// icons
import { BsArrowRight, BsWhatsapp } from "react-icons/bs";

// framer
import { motion } from "framer-motion";

// Variants
import { fadeIn } from "../../variants";

const Contact = () => {
  const router = useRouter();
  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & Form */}
        <div className="flex flex-col w-full  max-w-[700px] ">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let`s <span className="text-accent">connect.</span>
          </motion.h2>
          {/* form */}
          <motion.form
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            {/* group */}
            <div className="flex gap-x-6 w-full items-center">
              <label className="text-base">Name</label>
              <input
                type="text"
                value="Hermansyah Putra"
                className="input disabled "
              />
            </div>
            <div className="flex gap-x-6 w-full items-center">
              <label className="text-base">Email</label>
              <input
                type="email"
                value="hermansyahputra0418@gmail.com"
                className="input lowercase disabled"
              />
            </div>
            <div className="flex gap-x-6 w-full items-center">
              <label className="text-base">LinkedIn</label>
              <Link
                className="input flex items-center"
                target="_blank"
                href={"https://www.linkedin.com/in/hermansyah-putra/"}
              >
                Hermansyah Putra
              </Link>
            </div>
            <button
              type="button"
              onClick={() => router.push("https://wa.me/qr/N6C6NA4SWGHCH1")}
              className="btn rounded-full border border-white/50 max-w-[170px] px-8  transition-all duration-300 flex items-center  justify-center overflow-hidden hover:border-accent group "
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0  transition-all duration-500">
                Let`s talk
              </span>
              <BsWhatsapp className="-translate-x-[120%] opacity-0 group-hover:flex group-hover:-translate-x-8  group-hover:opacity-100 transition-all duration-500 absolute text-xl" />
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0  group-hover:opacity-100 transition-all duration-500 absolute text-xl" />
            </button>
          </motion.form>
        </div>
        <Circles />
      </div>
    </div>
  );
};

export default Contact;
