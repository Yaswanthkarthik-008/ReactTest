import React, { useState } from "react";
import "./Segment.css";

const Segment = () => {
  const [inpuList, setinputList] = useState([{ segment: "" }]);

  const handleinputchange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inpuList];
    list[index][name] = value;
    setinputList(list);
  };

  const handleremove = (index) => {
    const list = [...inpuList];
    list.splice(index, 1);
    setinputList(list);
  };

  const handleaddclick = () => {
    setinputList([...inpuList, { segment: "" }]);
  };

  return (
    <>
      <section className="Saving-segement">
        <div className="Segement-header"> Saving Segment </div>

        <div className="Segement-body">
          <div>
            <label htmlFor="">Enter the Name of the segment</label>
          </div>
          <div>
            <input
              type="text"
              id="text"
              className="text_input"
              placeholder="Name of the segement"
              option="Class"
            />
          </div>
          <div>
            <p>
              To save your segment, you need to add schemas to build the query
            </p>
          </div>
          <div className="traits">
            <div>-User Traits</div>
            <div>-Group Traits</div>
          </div>

          {inpuList.map((x, i) => {
            return (
              <>
                <div className="segment-selecter">
                  <select
                    name="segment"
                    id="segment-select"
                    className="text_input"
                    onChange={(e) => handleinputchange(e, i)}
                  >
                    <option value="first_name"> Add schema to segment</option>
                    <option value="first_name"> First Name</option>
                    <option value="last_name">Last Name</option>
                    <option value="gender">Gender</option>
                    <option value="age">Age</option>
                    <option value="account_name">Account_name</option>
                    <option value="city">City</option>
                    <option value="state">State</option>
                  </select>
                  <button className="remove_segment" onClick={handleremove}>
                    -
                  </button>
                </div>
                <button className="add_segment" onClick={handleaddclick}>
                  + Add new schema
                </button>
              </>
            );
          })}
        </div>

        <div className="Segement-footer">
          <button className="button" id="but_1">
            Save the segment
          </button>
          <button className="button" id="but_2">
            Cancel
          </button>
        </div>
      </section>
    </>
  );
};

export default Segment;
