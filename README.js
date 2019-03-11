# googledrive-upload-front-end
upload to google drive  with react.js
---------------------


import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {};
  }

  onClick = async e => {
   // localStorage.setItem("accessToken", p.data.access_token);
    var PastaPublica = "1BMmVZwOAc7GVEGBGB1oxegy2O3tbNgh0";
    var fileContent = "sample text";
    var file = new Blob([fileContent], { type: "text/plain" });
    var metadata = {
      name: "sampleNameeeeeeeeeeeee",
      mimeType: "text/plain",
      parents: [PastaPublica]
    };
    var form = new FormData();
    form.append(
      "metadata",
      new Blob([JSON.stringify(metadata)], { type: "application/json" })
    );
    form.append("file", file);
    var config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken")
      }
    };
    axios
      .post(
        "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id",
        form,
        config
      )
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <button onClick={this.onClick}> CLICK MEeeeeee</button>
        </div>
      </div>
    );
  }
}
export default App;

/*
  handleselectedFile = event => {
    this.setState({
      selectedFile: event.target.files[0],
      progress: 0
    });
  };

  handleUpload = () => {

    const data = new FormData();

    data.append("file", this.state.selectedFile, this.state.selectedFile.name);

    axios
      .post('https://localhost:8000/upload', data, {
        onUploadProgress: ProgressEvent => {
          this.setState({
            progress: (ProgressEvent.loaded / ProgressEvent.total) * 100
          });
        }
      })
      .then(res => {
        console.log(res.statusText);
      });
  }
<input type="file" nome="" id="" onChange={this.handleselectedFile} />
        <button onClick={this.handleUpload}> Enviar </button>
        <div> {Math.round(this.state.loaded, 2)}% </div>


*/
