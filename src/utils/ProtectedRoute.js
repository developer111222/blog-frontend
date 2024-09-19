import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";
import { Userprofile } from "../actions/userAction";

const ProtectedRoute = ({ component: Component, requireAdmin = false }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, user, isAuthenticated } = useSelector(state => state.users);

  console.log(loading,user,isAuthenticated)

  useEffect(() => {
    if (!isAuthenticated) {
      dispatch(Userprofile());
    }
  }, [dispatch, isAuthenticated]);

  useEffect(() => {
    if (!loading) {
      if (!isAuthenticated) {
        navigate("/login");
      }
      
      else if (requireAdmin && user.role !== "admin") {
        navigate("/");
      }
    }
  }, [loading, isAuthenticated, user, navigate, requireAdmin]);

  if (loading) {
    return <Spinner />;
  }

  return isAuthenticated && (!requireAdmin || user.role === "admin") ? <Component /> : null;
};

export default ProtectedRoute;