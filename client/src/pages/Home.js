import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Title from '../components/Title'
import useAuthRedirect from '../hooks/useAuthRedirect'

const Home = () => {
  useAuthRedirect('/collections')

  return (
    <section>
      <div className="container mx-auto pt-20">
        <Title className="text-5xl text-center">Welcome to FlashCards!</Title>
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
    </section>
  )
}

export default Home
