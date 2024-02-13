import "./loading.css";

type Props = {
  loaded?: boolean;
};

const Loading = (props: Props) => {
  return (
    <div
      className={
        props.loaded
          ? "loading_container loading_container-hide"
          : "loading_container"
      }
    >
      <div
        className={
          props.loaded ? "loading_loader loading_loader-hide" : "loading_loader"
        }
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="loading_text-container">
        <p className="loading_text">{props.loaded ? "" : "Loading..."}</p>
      </div>
    </div>
  );
};

export default Loading;
