import React from "react";

class InputNotesContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      remaining: 50,
    };

    this.onTitleChangedHandler = this.onTitleChangedHandler.bind(this);
    this.onTextChangedHandler = this.onTextChangedHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onTitleChangedHandler(event) {
    const title = event.target.value;

    if (title.length <= 50) {
      const remaining = 50 - title.length;
      this.setState({
        title,
        remaining,
      });
    }
  }

  onTextChangedHandler(event) {
    this.setState({
      body: event.target.value,
    });
  }

  onSubmitHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <section id="input-note-section">
        <div className="input-note-container">
          <form onSubmit={this.onSubmitHandler}>
            <h2>Buat Catatan</h2>
            <p>Sisa Karakter: {this.state.remaining}</p>
            <input
              type="text"
              placeholder="Masukkan Judul"
              value={this.state.title}
              onChange={this.onTitleChangedHandler}
            />
            <textarea
              placeholder="Masukkan Deskripsi Catatan"
              value={this.state.body}
              onChange={this.onTextChangedHandler}
              cols="30"
              rows="10"
            ></textarea>
            <input type="submit" value="Tambah Catatan" />
          </form>
        </div>
      </section>
    );
  }
}

export default InputNotesContainer;
