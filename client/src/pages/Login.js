import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { login } from '../redux/actions/authActions';
import useAuthRedirect from '../hooks/useAuthRedirect';

import Button from '../components/Button';
import Form from '../components/Form/Form';
import FormGroup from '../components/Form/FormGroup';
import FormInput from '../components/Form/FormInput';

const Login = () => {
  useAuthRedirect();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { success } = useSelector((state) => state.app);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = formData;

    dispatch(login(email, password));

    setFormData({ ...formData, password: '' });
  };

  useEffect(() => {
    if (success) navigate('/collections');
  }, [navigate, success]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <motion.section
      className="page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        default: {
          duration: 0.2,
        },
      }}
    >
      <div className="container mx-auto pt-6 md:pt-10">
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <FormInput
              label
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <FormInput
              label
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Button color="blue">Login</Button>
          </FormGroup>
        </Form>
      </div>
    </motion.section>
  );
};

export default Login;
