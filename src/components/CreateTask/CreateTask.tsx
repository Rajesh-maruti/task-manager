import React, { useState, FC } from "react";
import { Modal, Button } from "antd";
import "./CreateTask.css";
import { get } from "lodash";
interface IProps {
  isModalVisible: boolean;
  setIsModalVisible: Function;
  setTaskData: Function;
  taskData: Array<any>;
}

const CreateTask: FC<IProps> = ({
  isModalVisible,
  setIsModalVisible,
  setTaskData,
  taskData,
}: IProps) => {
  const [taskName, setTaskName] = useState("");
  const [proj_name, setProjName] = useState("");
  const [comment, setComment] = useState("");

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {

    console.log(taskName,proj_name)
    setTaskData([
      ...taskData,
      {
        id: `${taskData?.length}`,
        task_name: taskName,
        project_name: proj_name ||'project 1',
        comments: comment,
      },
    ]);

    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>

      <div className={`${isModalVisible && "modal"}`}>
        <div className="modal-container">
          <p className="create-task-name">Create Task</p>
          <hr className="hr" />

          <form>
            <div className="form-data-container">
              <label className="form-label">* Task Name</label>
              <input
                className="form-input"
                value={taskName}
                onChange={(e: object) => {
                  let a: string = get(e, "target.value");
                  setTaskName(a);
                }}
              />
            </div>
            <div className="form-data-container">
              <label className="form-label">* Project Name</label>
              <select
                className="form-input"
                value={proj_name}
                onChange={(e: object) => {
                  let a: string = get(e, "target.value");

                  setProjName(a);
                }}
              >
                <option value={"project1"}>Project 1</option>
              </select>
            </div>
            <div className="form-data-container">
              <label className="form-label">* Comments</label>
              <textarea
                className="form-textarea"
                value={comment}
                onChange={(e: object) => {
                  let a: string = get(e, "target.value");
                  setComment(a);
                }}
              />
            </div>
            <hr className="hr" />
            <div className="btn-group">
              <Button type="primary" onClick={handleCancel}>
                Cancel
              </Button>
              <Button type="primary" onClick={handleOk}>
                Create
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateTask;
