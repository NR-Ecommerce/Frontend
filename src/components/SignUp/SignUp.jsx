import { useForm } from "react-hook-form";
import axiosInstance from "../../hooks/axios";
import { Link, useNavigate } from "react-router-dom";

import "./SignUp.scss";

const SignUp = () => {
  const {
    setError,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmitHandler = (data) => {
    delete data.confirm_password;
    console.log(data);
    navigate('/login  ');
    axiosInstance
      .post(`api/user/register/`, {
        phone_number: data.phone_number,
        first_name: data.first_name,
        last_name: data.last_name,
        password: data.password,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        // navigate("/login");
      }).catch((res)=>{
          console.log(res.data);
          console.log('kir shodam')
          // setError('phone_number',{type:'requr',message})
      });
  };

  console.log(errors);

  return (
    <div className="signUp">
      <div className="signUp__container">
        <div className="signUp__title">ثبت نام</div>
        <form
          action=""
          className="signUp__form"
          onSubmit={handleSubmit(onSubmitHandler)}
        >
          <label className="signUp__label">
            شماره تلفن:
            <input
              placeholder="09123456789"
              type="tel"
              className="signUp__input"
              {...register("phone_number", {
                required: "این فیلد اجباری است.",
                validate: (val) => {
                  if (
                    val.charAt(0) != "0" ||
                    val.charAt(1) != "9" ||
                    val.length != 11
                  ) {
                    console.log(val.charAt(0));
                    return "شماره تلفن وارد شده معتیر نیست.";
                  }
                },
              })}
            />
          </label>
          {errors.phone_number ? (
            <p className="signUp__error">{errors.phone_number.message}</p>
          ) : (
            ""
          )}
          <label className="signUp__label">
            نام :
            <input
              type="text"
              className="signUp__input"
              {...register("first_name", {
                required: "این فیلد اجباری است.",
              })}
            />
          </label>
          {errors.first_name ? (
            <p className="signUp__error">{errors.first_name.message}</p>
          ) : (
            ""
          )}
          <label className="signUp__label">
            نام خانوادگی:
            <input
              type="text"
              className="signUp__input"
              {...register("last_name", {
                required: "این فیلد اجباری است.",
              })}
            />
          </label>
          {errors.last_name ? (
            <p className="signUp__error">{errors.last_name.message}</p>
          ) : (
            ""
          )}
          <label className="signUp__label">
            رمز:
            <input
              type="password"
              className="signUp__input"
              {...register("password", {
                required: "این فیلد اجباری است.",
                minLength: { value: 8, message: "حداقل 8 کارکتر اجباری است." },
              })}
            />
          </label>
          {errors.password ? (
            <p className="signUp__error">{errors.password.message}</p>
          ) : (
            ""
          )}
          <label className="signUp__label">
            تکرار رمز:
            <input
              type="password"
              className="signUp__input"
              {...register("confirm_password", {
                required: true,
                validate: (val) => {
                  if (watch("password") != val) {
                    return "رمز های وارد شده مطابقت ندارند.";
                  }
                },
              })}
            />
          </label>
          {errors.confirm_password ? (
            <p className="signUp__error">{errors.confirm_password.message}</p>
          ) : (
            ""
          )}
          <input type="submit" className="signUp__button" value="ثبت نام" />
          <div className="signUp__goToReg">
             اکانت دارید؟
            <Link className="signUp__goToReg-link" to="/login">
              وارد شوید
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
