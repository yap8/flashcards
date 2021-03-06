import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import usePrivate from '../hooks/usePrivate';
import {
  editProfileData,
  getProfileData,
} from '../redux/actions/profileActions';
import { toast } from 'react-toastify';

import Form from '../components/Form/Form';
import FormGroup from '../components/Form/FormGroup';
import Button from '../components/Button';
import FormInput from '../components/Form/FormInput';
import Avatar from '../components/Avatar';

const Profile = () => {
  usePrivate();

  const dispatch = useDispatch();

  const { name, email } = useSelector((state) => state.profile);
  const { success, message } = useSelector((state) => state.request);

  const [formData, setFormData] = useState({
    name,
    email,
    password: '',
    passwordRepeat: '',
  });

  useEffect(() => {
    dispatch(getProfileData());
  }, [dispatch]);

  useEffect(() => {
    setFormData({
      name,
      email,
    });
  }, [name, email]);

  useEffect(() => {
    if (success && message) toast.success(message);
  }, [success, message]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password, passwordRepeat } = formData;

    dispatch(editProfileData(name, email, password, passwordRepeat));

    setFormData({
      ...formData,
      password: '',
      passwordRepeat: '',
    });
  };

  const handleAvatarClick = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <section>
      <div className="container mx-auto pt-6 md:pt-10">
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Avatar
              className="mx-auto w-20 md:w-40 border-4 cursor-default"
              onClick={handleAvatarClick}
            />
          </FormGroup>
          <FormGroup>
            <FormInput
              label
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </FormGroup>
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
            <FormInput
              label
              name="passwordRepeat"
              value={formData.passwordRepeat}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Button color="blue">Update Profile</Button>
          </FormGroup>
        </Form>
      </div>
    </section>
  );
};

export default Profile;
