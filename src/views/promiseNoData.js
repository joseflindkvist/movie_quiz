function PromiseNoData(props) {
  if (!props.data || !props.promise) {
    return (
      <div className="loading-page">
        <img
          className="loading-gif"
          src={"https://i.postimg.cc/NMZdZDcX/150x150.gif"}
        />
      </div>
    );
  }
  if (props.error) {
    return <div className="content">{props.error.toString()}</div>;
  }
  if (props.data) {
    return false;
  }
}
function PromiseNoData2(props) {
  if (props) {
    return false;
  }
  if (!props.data && props.promise) {
    return (
      <img
        src={"https://i.postimg.cc/NMZdZDcX/150x150.gif"}
        className="content"
      />
    );
  }
  if (props.error) {
    return <div className="content">{props.error.toString()}</div>;
  }
  if (props.data) {
    return props.data;
  }
}

export { PromiseNoData, PromiseNoData2 };
