import React from "react";
// import { useSelector } from "react-redux";
import { Layout } from "./Layout/Layout";
import { AppBar } from "./AppBar/AppBar";
import { TaskForm } from "./TaskForm/TaskForm";
import { TaskList } from "./TaskList/TaskList";

const Home = () => {
  //   const data = useSelector((state: any) => state.data); // Подставьте нужный селектор

  return (
    <Layout>
      <AppBar />
      <TaskForm />
      <TaskList />
      {/* Используйте данные из бэкенда здесь */}
    </Layout>
  );
};

export default Home;
