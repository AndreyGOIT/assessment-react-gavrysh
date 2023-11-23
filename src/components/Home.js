import React from "react";
import { Layout } from "./Layout/Layout";
import { AppBar } from "./AppBar/AppBar";
import { TaskForm } from "./TaskForm/TaskForm";
import { TaskList } from "./TaskList/TaskList";

const Home = () => {
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
