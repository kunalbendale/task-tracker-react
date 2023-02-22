import React, { useState } from "react";

const AddTask = ({onAdd}) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);


  const onSubmitTask=(e)=>{
    e.preventDefault();
    if(!text && !day){
        alert("Please enter necessary details");
        return;
    } 
    onAdd({text,day,reminder});
    setText('');
    setDay('');
    setReminder(false);
  }
  return (
    <form className="add-form" onSubmit={onSubmitTask}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          name="task"
          placeholder="Add task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input
          type="text"
          name="date"
          placeholder="Add Day & Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          name="reminder"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input
        type="submit"
        name="submit"
        value="Save Task"
        className="btn btn-block"
      />
    </form>
  );
};

export default AddTask;
