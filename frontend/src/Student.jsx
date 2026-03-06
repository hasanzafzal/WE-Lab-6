function Student(props) {
  return (
    <div>
      <h3 className="subheading">Student Information</h3>
      <p>Name: {props.name}</p>
      <p>Course: {props.course}</p>
    </div>
  );
}

export default Student;
