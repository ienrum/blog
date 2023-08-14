import Form from "../../components/ui/BlogForm";

const Edit = (): React.ReactNode => {
  return (
    <>
      <Form userId={1} fromTitle={"good!"} fromDescription="thisisGoo~~~d" />
    </>
  );
};

export default Edit;
