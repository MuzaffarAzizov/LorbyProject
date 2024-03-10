import React from "react";
import Img1 from "../../img/logo.jpg";
import "../Login/Login.scss";

export const Login = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={Img1} alt="" />
            <h2>Lorby</h2>
            <h3>Твой личный репетитор</h3>
          </div>
          <div className="col-md-6 d-flex justify-content-center flex-column height-100vh">
            <h2>Вэлком бэк!</h2>
            <form className="d-flex flex-column align-items-center">
              <div class="mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Введи логин"
                  style={{ width: "340px" }}
                />
              </div>
              <div class="mb-3">
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Введи пароль"
                  style={{ width: "340px" }}
                />
              </div>
              <button type="submit" class="btn btn-primary">
                Войти
              </button>
              <a href="#">У меня еще нет аккаунта</a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
