import useAuthRedirect from '../hooks/useAuthRedirect';

import Title from '../components/Title';
import Button from '../components/Button';

const Home = () => {
  useAuthRedirect('/collections');

  return (
    <section>
      <div className="container mx-auto py-20">
        <Title className="text-5xl md:text-center">
          Welcome to FlashCards!
        </Title>
        <p className="text-2xl text-center mb-4 mx-auto max-w-screen-md dark:text-white">
          Flashcards are small note cards used for testing and improving memory
          through practiced information retrieval.
        </p>
        <div className="flex justify-center">
          <Button tag="Link" to="/register" color="blue">
            Create an account
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Home;
