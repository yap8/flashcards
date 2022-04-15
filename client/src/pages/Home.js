import useAuthRedirect from '../hooks/useAuthRedirect'
import { motion } from 'framer-motion'

import Title from '../components/Title'
import Button from '../components/Button'

const Home = () => {
  useAuthRedirect('/collections')

  return (
    <motion.section
      className="page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        default: {
          duration: .2
        }
      }}
    >
      <div className="container mx-auto py-20">
        <Title className="text-5xl md:text-center">Welcome to FlashCards!</Title>
        <p className="text-2xl text-center mb-4 mx-auto max-w-screen-md">Flashcards are small note cards used for testing and improving memory through practiced information retrieval.</p>
        <div className="flex justify-center">
          <Button
            tag="Link"
            to="/register"
            blue
            className=""
          >
            Create an account
          </Button>
        </div>
      </div>
    </motion.section>
  )
}

export default Home
