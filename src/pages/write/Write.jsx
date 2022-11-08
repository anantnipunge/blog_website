import "./write.css";
import AddIcon from "@mui/icons-material/Add";

function write() {
  return (
    <div className="write">
      <div className="writeImages">
        {/* <img
          src="https://tse4.mm.bing.net/th?id=OIP.mv0id4hEJZNZmHqC3E5CFAHaE8&pid=Api&P=0"
          alt=""
          className="writeImg"
        /> */}
        <img
          src="https://tse1.mm.bing.net/th?id=OIP.gST9lAeWOQEQr-uzOOfNBgHaDl&pid=Api&P=0"
          alt=""
          className="writeImg"
        />
      </div>

      <form className="writeFrom">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="addIcon">
              <AddIcon></AddIcon>
              <p className="formImg">Add Image</p>
            </i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your Story..."
            type="text"
            className="writeInput writeText"
            rows="20"
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}

export default write;
