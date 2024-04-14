// import React from "react";

// class UserClass extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 0,
//       count2: 5,
//     };
//     console.log(this.props.name + "  Constructor");
//   }
//   componentDidMount() {
//     console.log(this.props.name + " Did Mount");
//   }

//   render() {
//     console.log(this.props.name + "  render");

//     const { name, location } = this.props;
//     const { count, count2 } = this.state;
//     return (
//       <div
//         style={{
//           border: "1px solid black",
//           margin: "40px",
//           padding: "20px",
//         }}
//       >
//         <h1>Count :{this.state.count}</h1>
//         <h1>Count using destructuring : {count}</h1>
//         <br />
//         <h2>Second Count:{count2}</h2>
//         <br />
//         <button
//           onClick={() => {
//             this.setState({ count: this.state.count + 1 });
//             this.setState({ count2: this.state.count2 + 10 });
//           }}
//         >
//           Count Increase
//         </button>
//         <br />
//         <br />
//         <h2>{name}</h2>
//         <h3>{location}</h3>
//       </div>
//     );
//   }
// }

// export default UserClass;

//API CALLING WITH CLASS BASED COMPONENTS
import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default Location",
        avatar_url: "http://dummy-photo.com",
      },
    }; //console.log(this.props.name + " Child Constructor called");
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/DukesSonii");
    const json = await data.json();
    console.log(json);
    this.setState({ userInfo: json });
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div
        style={{
          border: "1px solid black",
          margin: "40px",
          padding: "20px",
        }}
      >
        <img src={avatar_url} alt="" style={{ width: "140px" }} />

        <h2>{name}</h2>
        <h3>{location}</h3>
      </div>
    );
  }
}

export default UserClass;
