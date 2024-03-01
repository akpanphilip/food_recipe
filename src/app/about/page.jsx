"use client";
import recipeImg from '../../../public/hero-img.webp'
import phone from "../../../public/phone.jpg"
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from "framer-motion"
import Button from '@/components/UI/Button';
import { useRouter } from "next/navigation"

const page = () => {
  const router = useRouter();
  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: 500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 500, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mt-20 mb-20">
          <p className="subtitle text-center">get to know</p>
          <p className="title text-center">About Us</p>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-20 mt-20">
            <div className="about_item_img">

              <div className="aboutImg">
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
            </div>

            <div>
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
                <div className="about_info">
                  <i className="ri-award-line"></i>
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
                Welcome to Yummee, your ultimate destination for mouthwatering recipes and culinary delights. We are committed to bringing you the finest in gastronomic experiences, emphasizing originality, exceptional customer service, and the joy of cooking.
              </div>
              <div className="flex justify-center mt-4">
                <Button className="see_more_sm" click={() => router.push('contact')}>Let's Talk</Button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
export default page