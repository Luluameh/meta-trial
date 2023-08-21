const validate = (values) => {
  const errors = {};

  if (values.date < new Date()) {
    errors.date = "You can't book past dates";
  }

  if (!values.guests) {
    errors.guests = "Number of guests is required";
  } else if (values.guests < 1) {
    errors.email = "At least one person is required";
  }

  return errors;
};

export default validate;
