import "./Login.scss";
import { useForm } from "react-hook-form";
import axiosInstance from "../../hooks/axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const notify = () => {
    toast.success("!با موفقیت وارد شدید", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmitHandler = (data) => {
    console.log(data);
    axiosInstance
      .post(`/api/token/`, {
        phone_number: data.phone_number,
        password: data.password,
      })
      .then((res) => {
        notify();
        localStorage.setItem("access_token", res.data.access);
        localStorage.setItem("refresh_token", res.data.refresh);
        axiosInstance.defaults.headers["Authorization"] =
          "Bearer " + localStorage.getItem("access_token");

        navigate('/dashboard/accountInfo');
        console.log(res);

        console.log(res.data);
      })
      .catch((res) => {
        console.log(res.data);
      });
  };

  console.log(errors);

  return (
    <div className="register">
      <div className="register__container">
        <div className="register__title">ورود</div>
        <form
          action=""
          className="register__form"
          onSubmit={handleSubmit(onSubmitHandler)}
        >
          <label className="register__label">
            شماره تلفن:
            <input
              placeholder="09123456789"
              type="tel"
              className="register__input"
              {...register("phone_number", {
                required: "این فیلد اجباری است.",
                validate: (val) => {
                  if (
                    val.charAt(0) != "0" ||
                    val.charAt(1) != "9" ||
                    val.length != 11
                  ) {
                    return "شماره تلفن وارد شده معتر نیست.";
                  }
                },
              })}
            />
          </label>
          {errors.phone_number ? (
            <p className="register__error">{errors.phone_number.message}</p>
          ) : (
            ""
          )}
          <label className="register__label">
            رمز:
            <input
              type="password"
              className="register__input"
              {...register("password", {
                required: "این فیلد اجباری است.",
                minLength: { value: 8, message: "حداقل 8 کارکتر اجباری است." },
              })}
            />
          </label>
          {errors.password ? (
            <p className="register__error">{errors.password.message}</p>
          ) : (
            ""
          )}
          <input type="submit" className="register__button" value="ورود" />
          <div className="register__goToReg">
            {" "}
            اکانت ندارید؟
            <Link className="register__goToReg-link" to="/register">
              ساخت اکانت
            </Link>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
