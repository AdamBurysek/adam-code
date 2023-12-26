import "./loading.css";

const Loading = () => {
  return (
    <div className="loading_container">
      <div className="loading_loader"></div>
      <div className="loading_text-container">
        <p className="loading_text">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
