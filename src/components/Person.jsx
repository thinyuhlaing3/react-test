// from App.tsx
// <User name="Kyaw Kyaw" gender="male" age={35} />
  
const User= ({name, gender, age})=> {
    return (
      <div >
        <h2> User components </h2>
        <p> {name}</p>
        <p> {gender}</p>
        <p> {age}</p>
      </div>
    );
  };

export default User;
  