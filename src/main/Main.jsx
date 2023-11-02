import ReactMarkdown from "react-markdown";
import mainPic from "./asset/image-removebg-preview.png"

const Main = ({ activeNote, onUpdateNote }) => {
  const onEditField = (field, value) => {
    onUpdateNote({
      ...activeNote,
      [field]: value,
      lastModified: Date.now(),
    });
  };

  if (!activeNote) return <div className="no-active-note">
    <img src={mainPic} alt="MainPicture" className="w-20 lg:w-28"/>
    <h1 className="text-black" >Pocket Notes</h1>
    <p>Send and receive messages without keeping your phone online.
        Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
  </div>;

  return (
    <div className="app-main">
       <div className="app-main-note-preview">
        <h1 className="preview-title">{activeNote.title}</h1>
        
        <ReactMarkdown className="markdown-preview">
          {activeNote.body}
        </ReactMarkdown>
      </div>
      <div className="app-main-note-edit">
        <input
          type="text"
          id="title"
          placeholder="Note Title"
          value={activeNote.title}
          onChange={(e) => onEditField("title", e.target.value)}
          autoFocus
        />
        <textarea
          id="body"
          placeholder="Write your note here..."
          value={activeNote.body}
          onChange={(e) => onEditField("body", e.target.value)}
        />
      </div>
     
    </div>
  );
};

export default Main;
