import React, { useEffect, useState } from "react";
import "./TaskTable.css";
import { Table, Tag, Space } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { get } from "lodash";
import CreateTask from "../CreateTask/CreateTask";
function TaskTable() {
  interface Data {
    id: string;
    task_name: string;
    project_name: string;
    comments: string;
  }

  let data: Array<Data> = [
    {
      id: "1",
      task_name: "Task Name 1",
      project_name: "John Brown",
      comments: "Comments Added 1",
    },
    {
      id: "2",
      task_name: "Task Name 2",
      project_name: "John Brown",
      comments: "Comments Added 2",
    },
    {
      id: "3",
      task_name: "Task Name 3",
      project_name: "John Brown",
      comments: "Comments Added 3",
    },
  ];
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [taskData, setTaskData] = useState(data);

  useEffect(() => {}, []);

  const columns = [
    {
      title: "Task ID",
      dataIndex: "Task ID",
      key: "Task ID",
      className: "td-task td-task-id",
      render: (text: object, record: object) => <a>{`${get(record, "id")}`}</a>,
    },
    {
      title: "Task Name",
      dataIndex: "Task Name",
      key: "Task Name",
      className: " td-task td-task-name",
      render: (text: object, record: object) => (
        <a>{`${get(record, "task_name")}`}</a>
      ),
    },
    {
      title: "Project",
      dataIndex: "Project",
      key: "Project",
      className: "td-task td-project",
      render: (text: object, record: object) => (
        <a>{`${get(record, "project_name")}`}</a>
      ),
    },
    {
      title: "Comments",
      key: "Comments",
      dataIndex: "Comments",
      render: (text: object, record: object) => (
        <a>{`${get(record, "comments")}`}</a>
      ),
      className: " td-task td-comments",
    },
    {
      title: "Task  Edit",
      key: "Task    Edit",
      className: " td-task td-task-edit",

      render: (text: object, record: object) => (
        <Space size="middle">
          <button className="task-btn-edit">Edit</button>{" "}
        </Space>
      ),
    },
    {
      title: "Task  Delete",
      key: "Task Delete",
      className: "td-task td-task-delete",
      render: (text: string, record: object) => (
        <Space size="middle">
          <button className="task-btn-delete">Delete</button>{" "}
        </Space>
      ),
    },
  ];

  return (
    <div className="table-container">
      {isModalVisible && (
        <CreateTask
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          setTaskData={setTaskData}
          taskData={taskData}
        />
      )}
      <div className="add-btn">
        <PlusCircleOutlined
          className="plusIcon"
          onClick={() => setIsModalVisible(true)}
        />
        <p className="btn-name">Create Tasks</p>
      </div>
      <div className="table-container">
        <Table columns={columns} dataSource={taskData} />
      </div>
    </div>
  );
}

export default TaskTable;
