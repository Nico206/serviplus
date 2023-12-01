import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import APIInvoke from "../../Utils/APIInvoke.js";
import swal from "sweetalert";


const Login = () => {
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState({
        email: '',
        password: ''
    });

    const { email, password } = usuario;

    const onChange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        });
    }

    useEffect(() => {
        document.getElementById("email").focus();
    }, [])

    const determineUserRole = (email) => {
        const emailDomain = email.split("@")[1];
        const isAdmin = emailDomain.toLowerCase() === "serviplus.com"; 
        return isAdmin ? "admin" : "user";
    };

    const connect = async () => {
        const verify = async (email, password) => {
            try {
                const response = await APIInvoke.invokeGET(
                    `/Usuarios?email=${email}&password=${password}`
                );
                if (response && response.length > 0) {
                    return response[0];
                }
                return null;
            } catch (error) {
                console.error(error);
                return null;
            }
        };

        if (password.length <=7) {
            const msg = "Recuerda que la contraseña es minimo de 8 caracteres";
            swal({
                text: msg,
                icon: "info",
                buttons: {
                    confirm: {
                        text: "Ok",
                        value: true,
                        visible: true,
                        className: "btn btn-danger",
                        closeModal: true,
                    },
                },
            });
        } else {
            const existingUser = await verify(email, password);

            if (!existingUser) {
                const msg = "No fue posible iniciar sesión, usuario o contraseña incorrecto.";
                swal({
                    text: msg,
                    icon: 'error',
                    buttons: {
                        confirm: {
                            text: 'Ok',
                            value: true,
                            visible: true,
                            className: 'btn btn-danger',
                            closeModal: true
                        }
                    }
                });
            } else {
                const msg = "Haz ingresado satisfactoriamente";
                swal({
                    text: msg,
                    icon: 'success',
                    buttons: {
                        confirm: {
                            text: 'Ok',
                            value: true,
                            visible: true,
                            className: 'btn btn-danger',
                            closeModal: true
                        }
                    }
                });

                // Determinar el tipo de cuenta basado en el correo electrónico
                const role = determineUserRole(email);

                // Guardar el tipo de cuenta en el local storage
                localStorage.setItem('role', role);

                // Contener el token de acceso
                const jwt = existingUser.id;

                // Guardar el token en el local storage
                localStorage.setItem('id', jwt);

                // Redireccionar según el tipo de cuenta
                if (role === 'user') {
                    navigate("/HomeU");
                    const msg = "Bienvenido Usuario";
                    swal({
                        text: msg,
                        icon: 'success',
                        buttons: {
                            confirm: {
                                text: 'Ok',
                                value: true,
                                visible: true,
                                className: 'btn btn-danger',
                                closeModal: true
                            }
                        }
                    });
                } else if (role === 'admin') {
                    navigate("/Home");
                     const msg = "Bienvenido Administrador.";
                swal({
                    text: msg,
                    icon: 'success',
                    buttons: {
                        confirm: {
                            text: 'Ok',
                            value: true,
                            visible: true,
                            className: 'btn btn-danger',
                            closeModal: true
                        }
                    }
                    
                });
                }
            }
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        connect();
    }

    return (
        <div className="hold-transition login-page">
        <div className="login-box">
          <div className="login-logo">
            <Link to={"#"}>
              <b>Iniciar Sesión en Serviplus</b>
            </Link>
          </div>

          <div className="card">
            <div className="card-body login-card-body">
              <p className="login-box-msg">
                Bienvenido, por favor ingrese sus credenciales
              </p>
              <form onSubmit={onSubmit}>
                <div className="input-group mb-3">
                  <input
                   className="form-control"
                   type="email"
                   id="email"
                   name="email"
                   placeholder="Email"
                   value={email}
                   onChange={onChange}
                   required
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    className="form-control"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={onChange}
                    required
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>

                <div className="social-auth-links text-center mb-3">
                    <button type="submit" className="btn btn-block btn-primary">
                                Ingresar
                            </button>

                    <Link to={"/CreateAccount"}>
                    <br></br>        
                        <button className="btn btn-secondary" id="signUp">
                            Registrar
                        </button>
                    </Link>

                 
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Login;
