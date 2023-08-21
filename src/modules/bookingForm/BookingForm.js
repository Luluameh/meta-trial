import { useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { initializeTimes, submitAPI, updateTimes } from "../../api/api";
import { useFormik } from "formik";
import formatDate from "../../utils/formatDate";
import validate from "./validate";

const BookingForm = () => {
  const navigate = useNavigate();
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  const formik = useFormik({
    initialValues: {
      date: formatDate(new Date()),
      time: availableTimes.times[0],
      guests: "",
      occasion: "Birthday",
    },
    validate,
    onSubmit: async () => {
      if (await submitAPI()) {
        navigate("/confirmation");
      }
    },
  });

  useEffect(() => {
    dispatch({ type: "UPDATE_TIMES", date: new Date(formik.values.date) });
  }, [formik.values.date]);

  return (
    <form className="booking-form" onSubmit={formik.handleSubmit}>
      <h1 className="booking-form__heading">Make a reservation</h1>
      <label htmlFor="date">Choose date</label>
      <input
        type="date"
        id="date"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.date}
      />
      {formik.touched.date && formik.errors.date ? (
        <span className="booking-form__error">{formik.errors.date}</span>
      ) : null}
      <label htmlFor="time">Choose time</label>
      <select
        id="time"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.time}>
        {availableTimes.times.map((time) => {
          return <option key={time}>{time}</option>;
        })}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.guests}
      />
      {formik.touched.guests && formik.errors.guests ? (
        <span className="booking-form__error">{formik.errors.guests}</span>
      ) : null}
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.occasion}>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Reserve" />
    </form>
  );
};

export default BookingForm;
