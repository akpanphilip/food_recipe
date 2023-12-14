"use client";
import recipeImg from '../../../public/hero-img.webp'
import phone from "../../../public/phone.jpg"
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from "framer-motion"
import Button from '@/components/UI/Button';
const page = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: 500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 500, opacity: 0 }}
        transition={{ type: "tween" }}
      >
        <div className="mt-20 mb-20">
          <p className="subtitle text-center">get to know</p>
          <p className="title text-center">About Us</p>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20 mt-20">
            <div className="about_item_img">

              <motion.div
                initial={{
                  x: 8, y: 8,
                }}
                animate={{
                  x: 0, y: 0,
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 2,
                  ease: "easeInOut",
                }}
              >
                <Image src={phone} alt='' className="rounded-md" />
              </motion.div>
            </div>

            <div>
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="about_info">
                  <i class="ri-award-line"></i>
                  <span className="about_mid">Experience</span>
                  <span className="about_base">2+ years working</span>
                </div>
                <div className="about_info">
                  <i class="ri-user-4-line"></i>
                  <span className="about_mid">Customers</span>
                  <span className="about_base">Over 100+ Worldwide</span>
                </div>
                <div className="about_info">
                  <i class="ri-discuss-line"></i>
                  <span className="about_mid">Reviews</span>
                  <span className="about_base">80+ Positive reviews</span>
                </div>

              </div>

              <div className="item_description mt-5 mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, eligendi quod. Minima, at nobis! Magnam inventore commodi ab totam excepturi, rerum, eos labore quas dolor porro eius suscipit eveniet modi ratione mollitia laborum nisi quos, ipsam enim. Doloribus, consectetur corrupti. Laudantium rerum maxime eaque nihil a labore ipsam, ab blanditiis.
              </div>
              <div className="mt-4">
                <Button href="/contact">Let's Talk</Button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
export default page