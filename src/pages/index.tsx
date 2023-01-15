import HomePage from "@/components/Homepage"
import SEO from "@/components/SEO"
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
     <SEO
        title="Homepage"
        description="Find the most beautiful Rick and Morty collectibles in one place!"
      />
      <HomePage/>
      </motion.div>
  )
}

export default Home